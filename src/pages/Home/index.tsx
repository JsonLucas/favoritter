import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { movies } from "../../types/movie";

export function Home(){
	return (
		<Box fontFamily="'Poppins', sans-serif">
			<Header />
			<Box mt='15px' ml='4%' w='90%'  bgColor='black'>
				{movies.map((item, index) => <Movie key={index} movieData={item} />)}
			</Box>
		</Box>
	);
}