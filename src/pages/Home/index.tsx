import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { IMovie, movies } from "../../types/movie";
import { IoMdList } from "react-icons/io";
import { Box, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function Home() {
  const [filter, setFilter] = useState<string>();
  const [filteredMovies, setFilteredMovies] = useState<Array<IMovie>>();
  const applyFilter = ({ target }: any) => {
    const filter = target.value;
    if (filter !== "0") {
      setFilter(filter);
    }
  };
  useEffect(() => {
    if (filter) {
      switch (filter) {
        case "year":
		  const sortByYear = movies.sort((a, b) => new Date(a.year).getTime() - new Date(b.year).getTime());
		  setFilteredMovies(sortByYear);
          break;
        case "name":
		  const sortByName = movies.sort();
		  setFilteredMovies(sortByName);
          break;
        case "country":
		  const sortByCountry = movies.sort();
		  setFilteredMovies(sortByCountry);
          break;
        default:
          toast("Invalid filter.", { type: "error", theme: "dark" });
          break;
      }
    }
  }, [filter]);
  return (
    <Box fontFamily="'Poppins', sans-serif">
      <Header />
      <Box mt="15px" ml="4%" w="90%">
        <Box pb="10px" display="flex">
          <IoMdList color="black" size={25} />
          <select style={{ border: 'none', marginLeft: '10px' }} onChange={applyFilter}>
            <option value="0">Filtrar por: </option>
            <option value="year">Ano</option>
            <option value="name">Nome</option>
            <option value="country">País</option>
          </select>
        </Box>
        {filter && filteredMovies && (
          <>
            {filteredMovies.map((item, index) => (
              <Movie key={index} movieData={item} />
            ))}
          </>
        )}
        {!filter && (
          <>
            {movies.map((item, index) => (
              <Movie key={index} movieData={item} />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}
