import axios, { AxiosResponse } from 'axios';
import type { Fragance } from './ResultsFragances';

const getMensFragrances = async (name: string): Promise<Fragance> => {
	if (!name.trim()) {
		throw new Error('El término de búsqueda no puede estar vacío');
	}

	try {
		const response: AxiosResponse<Fragance> = await axios.get(
			`https://sephora.p.rapidapi.com/us/products/v2/search?q=${encodeURIComponent(name.trim())}`,
			{
				params: {
					pageSize: '60',
					currentPage: '1',
					node: 'cat130044',
					nodeStr: 'cat160006',
				},
				headers: {
					'X-RapidAPI-Key':
						process.env.NEXT_PUBLIC_RAPIDAPI_KEY ||
						'b437e0dbacmshf6a5f7ddcaa744dp1387e0jsnad20af18a7d8',
					'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
				},
				timeout: 10000,
			},
		);

		const data = response.data;

		const mensFragrances = data.products
  .filter((product) => {
    const displayName = product.displayName.toLowerCase();
    const brandName = product.brandName.toLowerCase();
    const searchTerm = name.toLowerCase();

    const isMenFragrance =
      displayName.includes('men') ||
      displayName.includes('homme') ||
      displayName.includes('masculino') ||
      displayName.includes('masculine') ||
      displayName.includes('pour homme') ||
      displayName.includes('for men') ||
      displayName.includes('masculin');

    const isMenBrand =
      brandName.includes('versace') ||
      brandName.includes('chanel') ||
      brandName.includes('dior') ||
      brandName.includes('tom ford') ||
      brandName.includes('ysl') ||
      brandName.includes('gucci') ||
      brandName.includes('armani') ||
      brandName.includes('hugo boss') ||
      brandName.includes('calvin klein') ||
      brandName.includes('dolce') ||
      brandName.includes('gabbana') ||
      brandName.includes('prada') ||
      brandName.includes('burberry') ||
      brandName.includes('lacoste') ||
      brandName.includes('ralph lauren');

    const matchesSearchBrand = brandName.includes(searchTerm);
    const matchesSearchName = displayName.includes(searchTerm);

    const isSmallOrSet =
      displayName.includes('mini') ||
      displayName.includes('sample') ||
      displayName.includes('sampler') ||
      displayName.includes('set') ||
      displayName.includes('travel') ||
      displayName.includes('rollerball') ||
      displayName.includes('discovery') ||
      displayName.includes('gift');

    return (
      (isMenFragrance || isMenBrand || matchesSearchBrand || matchesSearchName) &&
      !isSmallOrSet
    );
  })
  .slice(0, 4); 

return {
  ...data,
  products: mensFragrances,
  totalProducts: mensFragrances.length,
};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.code === 'ECONNABORTED') {
				throw new Error('La búsqueda tardó demasiado tiempo. Inténtalo de nuevo.');
			}
			if (error.response?.status === 429) {
				throw new Error('Demasiadas búsquedas. Espera un momento antes de intentar de nuevo.');
			}
			if (error.response && error.response.status >= 500) {
				throw new Error('Error del servidor. Inténtalo más tarde.');
			}
		}
		throw new Error('Error al buscar fragancias masculinas.');
	}
};

export default getMensFragrances;
