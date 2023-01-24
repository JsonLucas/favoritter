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
		directorName: 'George Lucas',
		countryName: 'EUA',
		year: new Date('2005-05-20'),
		image: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg'
	},
	{
		id: 2,
		name: 'Piratas do Caribe: No Fim do Mundo',
		directorName: 'Gore Verbinski',
		countryName: 'EUA',
		year: new Date('2007-05-26'),
		image: 'https://br.web.img3.acsta.net/pictures/210/176/21017697_20130704202238456.jpg'
	},
	{
		id: 3,
		name: 'Guardiões da Galáxia',
		directorName: 'James Gunn',
		countryName: 'EUA',
		year: new Date('2014-07-31'),
		image: 'https://br.web.img3.acsta.net/pictures/14/06/03/21/11/122582.jpg'
	},
	{
		id: 4,
		name: 'Matrix Reloaded',
		directorName: 'Wachowski Brothers',
		countryName: 'EUA',
		year: new Date('2003-05-17'),
		image: 'https://lastfm.freetls.fastly.net/i/u/500x500/1d16e8760bbb42c1894e8fdc2414779d.jpg'
	},
	{
		id: 5,
		name: '47 Ronins',
		directorName: 'Carl Rinsch',
		countryName: 'EUA',
		year: new Date('2014-01-31'),
		image: 'https://m.media-amazon.com/images/I/81OKIu77+6L._AC_SY550_.jpg'
	},
	{
		id: 6,
		name: 'Missão Impossível: Efeito Fallout',
		directorName: 'Christopher McQuarrie',
		countryName: 'EUA',
		year: new Date('2018-07-27'),
		image: 'https://br.web.img3.acsta.net/pictures/18/05/14/17/09/5117345.jpg'
	},
	{
		id: 7,
		name: 'Batman: O Cavaleiro das Trevas',
		directorName: 'Christopher Nolan',
		countryName: 'EUA/Inglaterra',
		year: new Date('2008-07-19'),
		image: 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg'
	},
	{
		id: 8,
		name: 'Invasores: Nenhum sistema Está à Salvo',
		directorName: 'Baran bo Odar',
		countryName: 'Alemanha',
		year: new Date('2014-09-26'),
		image: 'https://br.web.img3.acsta.net/c_310_420/pictures/15/07/21/20/26/495789.jpg'
	},
];