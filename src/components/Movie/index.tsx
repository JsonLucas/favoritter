import { Box, Image, Text } from "@chakra-ui/react";
import { IMovie } from "../../types/movie";
import { useState, useEffect } from "react";
import { MovieModal } from "../MovieModal";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import dayjs from "dayjs";

interface Props {
  movieData: IMovie;
}

export function Movie({ movieData }: Props) {
  const { signFavorite, getFavorites } = useLocalStorage();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [auxZIndex, setAuxZIndex] = useState<number>();
  const toggleFavorite = () => {
    signFavorite(movieData.id);
    setFavorite(!favorite);
  };
  const openModal = () => {
    setOpen(!open);
    if (open) {
      setAuxZIndex(undefined);
    } else {
      setAuxZIndex(0);
    }
  };
  useEffect(() => {
    const favorites = getFavorites();
    if (favorites.find((item) => item === movieData.id)) {
      setFavorite(true);
    }
  }, []);
  return (
    <>
      <Box
        w="200px"
        h="300px"
        p="10px"
        borderRadius="10px"
        bgColor="#444"
        boxShadow="0px 0px 10px 3px rgba(0,0,0,0.5)"
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        alignItems="center"
        float="left"
        mr="1%"
        mb="15px"
        cursor="pointer"
        position="relative"
        transition="transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Box
          w="100%"
          h="100%"
          zIndex={auxZIndex ? auxZIndex : undefined}
          position="absolute"
          onClick={openModal}
        ></Box>
        <Box
          w="90%"
          zIndex={auxZIndex ? auxZIndex + 1 : undefined}
          onClick={toggleFavorite}
        >
          {favorite && (
            <IoIosStar
              color="white"
              size={19}
              style={{ zIndex: auxZIndex ? auxZIndex + 1 : undefined }}
            />
          )}
          {!favorite && (
            <IoIosStarOutline
              color="white"
              size={19}
              style={{ zIndex: auxZIndex ? auxZIndex + 1 : undefined }}
            />
          )}
        </Box>
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
          <Text fontWeight="bold" fontSize="18px" color="white">
            {movieData.name}
          </Text>
        </Box>
        <Box color="white" fontSize="15px">
          <Text>{dayjs(movieData.year).format("DD/MM/YYYY")}</Text>
        </Box>
        <Box color="white" fontSize="15px">
          <Text>{movieData.countryName}</Text>
        </Box>
      </Box>
      <MovieModal open={open} setOpen={setOpen} movieDetails={movieData} />
    </>
  );
}
