'use client';

import { useState, useCallback, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Recommendation from '@/components/recommendation';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import getGente from '@/lib/SearchFragance';
import type { Fragance, Product } from '@/lib/ResultsFragances';

export default function Home() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchResults, setSearchResults] = useState<Fragance | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const performSearch = useCallback(async (term: string) => {
		if (!term.trim()) {
			setSearchResults(null);
			setError(null);
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			const data = await getGente(term.trim());
			setSearchResults(data);
		} catch (err) {
			const errorMessage =
				err instanceof Error
					? err.message
					: 'Error al buscar fragancias';
			console.error('Error searching fragrances:', err);
			setError(errorMessage);
			setSearchResults(null);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const debouncedSearch = useDebouncedCallback(performSearch, 500);

	useEffect(() => {
		debouncedSearch(searchTerm);
	}, [searchTerm, debouncedSearch]);

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			setSearchTerm(value);
		},
		[],
	);

	const FragranceCard = useCallback(
		({ fragrance }: { fragrance: Product }) => (
			<Card className='group mx-auto w-full max-w-sm transform border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
				<CardContent className='p-6'>
					<div className='flex flex-col items-center space-y-4'>
						<div className='relative h-40 w-40 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner'>
							<img
								src={fragrance.heroImage}
								alt={fragrance.displayName}
								className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									target.src =
										'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA0MEM5Ni41Njg1IDQwIDExMCA1My40MzE1IDExMCA3MEMxMTAgODYuNTY4NSA5Ni41Njg1IDEwMCA4MCAxMDBDNjMuNDMxNSAxMDAgNTAgODYuNTY4NSA1MCA3MEM1MCA1My40MzE1IDYzLjQzMTUgNDAgODAgNDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik04MCA1MEM5MS41NDE2IDUwIDEwMCA1OC40NTg0IDEwMCA3MEMxMDAgODEuNTQxNiA5MS41NDE2IDkwIDgwIDkwQzY4LjQ1ODQgOTAgNjAgODEuNTQxNiA2MCA3MEM2MCA1OC40NTg0IDY4LjQ1ODQgNTAgODAgNTBaIiBmaWxsPSIjRTVFN0VCIi8+Cjwvc3ZnPgo=';
								}}
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
						</div>

						<div className='w-full space-y-3 text-center'>
							<h3 className='line-clamp-2 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600'>
								{fragrance.displayName}
							</h3>

							<div className='flex items-center justify-center'>
								<span className='inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800'>
									{fragrance.brandName}
								</span>
							</div>

							<button className='mt-4 w-full transform rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-blue-700'>
								Ver Detalles
							</button>
						</div>
					</div>
				</CardContent>
			</Card>
		),
		[],
	);

	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-start gap-8 bg-white p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<div className='max-w-4xl space-y-6 text-center'>
				
				<p className='text-xl font-medium text-gray-600'>
					Descubre perfumes masculinos únicos y exclusivos
				</p>
			</div>

			<div className='w-full max-w-lg'>
				<div className='relative'>
					<Input
						value={searchTerm}
						type='text'
						onChange={handleInputChange}
						className='w-full rounded-2xl border-2 border-gray-200 bg-white/80 p-4 pr-12 text-lg text-gray-900 shadow-lg backdrop-blur-sm transition-all duration-300 focus:border-gray-500 focus:shadow-xl'
						placeholder='Buscar fragancias masculinas...'
					/>
					<div className='absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400'>
						<svg
							className='h-6 w-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</div>
				</div>

				
			</div>

			{isLoading && (
				<div className='flex flex-col items-center justify-center space-y-4 py-8'>
					<div className='relative'>
						<div className='h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600'></div>
					</div>
					<span className='text-lg font-medium text-gray-600'>
						Buscando fragancias...
					</span>
				</div>
			)}

			{error && (
				<div className='mx-auto w-full max-w-md rounded-xl border border-red-200 bg-red-50 p-4'>
					<div className='flex items-center space-x-3'>
						<div className='text-red-500'>
							<svg
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>
						<div>
							<h3 className='font-semibold text-red-800'>
								Error en la búsqueda
							</h3>
							<p className='text-sm text-red-600'>{error}</p>
						</div>
					</div>
				</div>
			)}

			{searchResults && searchResults.products.length > 0 && (
				<div className='w-full max-w-7xl'>
					<div className='mb-8 text-center'>
						<h2 className='mb-3 text-3xl font-bold text-gray-800'>
							Resultados de Búsqueda
						</h2>
						
					</div>
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{searchResults.products.map((fragrance) => (
							<FragranceCard
								key={fragrance.productId}
								fragrance={fragrance}
							/>
						))}
					</div>
				</div>
			)}

			{searchResults &&
				searchResults.products.length === 0 &&
				!isLoading &&
				!error && (
					<div className='space-y-6 py-12 text-center'>
						<div className='text-8xl'>🔍</div>
						<div className='space-y-2'>
							<p className='text-2xl font-semibold text-gray-700'>
								No se encontraron fragancias.
							</p>
							<p className='text-lg text-gray-500'>
								Intenta con otros términos de búsqueda como
								"Versace", "Jean", "Dior".
							</p>
						</div>
					</div>
				)}

			<Recommendation />
		</main>
	);
}
