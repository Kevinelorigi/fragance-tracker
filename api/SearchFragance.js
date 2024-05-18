import axios from 'axios';

const getGente = async (name) => {
	const { data } = await axios.get(
		`https://sephora.p.rapidapi.com/us/products/v2/search?q=${name}`,

		{
			params: {
				pageSize: '60',
				currentPage: '1',
				node: '1050072',
			},
			headers: {
				'X-RapidAPI-Key':
					'bfeb40c10emsh6ea68a9296b3fb0p19a362jsnb923ab19a0a1',
				'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
			},
		},
	);
	return data;
};

export default getGente;
