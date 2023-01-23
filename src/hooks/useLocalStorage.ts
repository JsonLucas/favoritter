export const useLocalStorage = () => {
	const signFavorite = (id: number) => {
		let favorites = getFavorites();
		if(favorites.find((item) => item === id)){
			const index = favorites.indexOf(id);
			favorites.splice(index, 1);
		}else{
			favorites.push(id);
		}
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	const getFavorites = () => {
		let favorites: Array<number> = [];
		const jsonFavorites = localStorage.getItem('favorites');
		if(jsonFavorites) favorites = JSON.parse(jsonFavorites);
		return favorites;
	}

	return { signFavorite, getFavorites };
}