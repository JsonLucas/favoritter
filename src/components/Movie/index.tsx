import { Box, Image, Text } from "@chakra-ui/react";
import { IMovie } from "../../types/movie";
import { useState } from 'react';
import { MovieModal } from "../MovieModal";

interface Props{
	movieData: IMovie
}

export function Movie({ movieData }: Props) {
	const [open, setOpen] = useState<boolean>(false);
  return (
	<>
    <Box
      w="200px"
      h="200px"
      borderRadius="10px"
      bgColor="#333"
      boxShadow="1px 0px 0px 1px rgba(0,0,0,0.5)"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
	  float='left'
	  mr='1%'
	  mb='15px'
	  cursor='pointer'
	  transition='transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear'
	  _hover={{ transform: 'scale(1.1)' }}
	  onClick={() => setOpen(!open)}
    >
      <Box h="100px" w="100px">
        <Image
          src={movieData.image}
          w="100%"
          h="100%"
          objectFit="cover"
          borderRadius="50%"
        />
      </Box>
	  <Box>
		<Text fontWeight='bold' fontSize='22px' color='white'>
			{movieData.name}
		</Text>
	  </Box>
	  <Box>
		<Text>texto 2</Text>
	  </Box>
	  <Box>
		<Text>texto 3</Text>
	  </Box>
    </Box>
	  <MovieModal open={open} setOpen={setOpen} />
	  </>
  );
}
