export interface IMovie{
	id: number,
	name: string,
	directorName: string,
	countryName: string,
	year: Date,
	image: string
}

export const movies: Array<IMovie> = [
	{
		id: 1,
		name: 'Star Wars III: A Vingança dos Sith',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-12-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
	{
		id: 2,
		name: 'Piratas do Caribe: No Fim do Mundo',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-09-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
	{
		id: 3,
		name: 'Guardiões da Galáxia',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-01-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
	{
		id: 4,
		name: 'Matrix Reloaded',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-05-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
	{
		id: 5,
		name: '47 Ronin',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-02-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
	{
		id: 6,
		name: 'Missão Impossível: Efeito Fallout',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-11-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
	{
		id: 7,
		name: 'Batman: O Cavaleiro das Trevas',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-08-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
	{
		id: 8,
		name: 'Invasores: Nenhum sistema Está a Salvo',
		directorName: 'director name',
		countryName: 'country name',
		year: new Date('2022-07-23'),
		image: 'https://t.ctcdn.com.br/T1R3OGdR8BomakG4ZcOaYY1zDBY=/1400x788/smart/i256255.jpeg'
	},
];