import { Text, Button, Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { IMovie } from "../../types/movie";
import Modal from "react-modal";
import dayjs from "dayjs";

interface Props {
  open: boolean;
  setOpen: (param: boolean) => void;
  movieDetails: IMovie;
}

export function MovieModal({ open, setOpen, movieDetails }: Props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
	  fontFamily: "'Poppins', sans-serif"
    },
  };
  const close = () => {
    setOpen(!open);
  };
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Box
        w="350px"
        h="350px"
        display="flex"
        flexDir="column"
        alignItems="center"
		justifyContent='space-around'
      >
        <Box h="110px" w="110px">
          <Image
            src={movieDetails.image}
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="50%"
          />
        </Box>
		<Box className='row-content'>
			<Text>Nome:&nbsp;</Text>
			<Text className='negrito'>{movieDetails.name}</Text>
		</Box>
		<Box className='row-content'>
			<Text>Diretor:&nbsp;</Text>
			<Text className='negrito'>{movieDetails.directorName}</Text>
		</Box>
		<Box className='row-content'>
			<Text>País:&nbsp;</Text>
			<Text className='negrito'>{movieDetails.countryName}</Text>
		</Box>
		<Box className='row-content'>
			<Text>Lançamento:&nbsp;</Text>
			<Text className='negrito'>{dayjs(movieDetails.year).format('DD/MM/YYYY')}</Text>
		</Box>
		<Box display='flex' justifyContent='space-around'>
			<Button className='modal-buttons' bgColor='#444' color='white'>Favoritar</Button>
			<Button className='modal-buttons' bgColor='transparent' onClick={close}>Voltar</Button>
		</Box>
      </Box>
    </Modal>
  );
}
