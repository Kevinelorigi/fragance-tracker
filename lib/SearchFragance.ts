import axios from 'axios';

const getGente = async (name: any) => {
	const { data } = await axios.get(
		`https://sephora.p.rapidapi.com/us/products/v2/search?q=${name}`,

		{
			params: {
				pageSize: '60',
				currentPage: '1',
				node: 'cat160006',
			},
			headers: {
				'X-RapidAPI-Key':
					'b437e0dbacmshf6a5f7ddcaa744dp1387e0jsnad20af18a7d8',
				'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
			},
		},
	);
	return data;
};

export default getGente;
