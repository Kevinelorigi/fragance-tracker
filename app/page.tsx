/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { useState, ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Recommendation from '@/components/recommendation';
import { Input } from '@/components/ui/input';
import getGente from '@/lib/SearchFragance';
import type { Fragance } from '@/lib/ResultsFragances';

export default function Home() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchResults, setSearchResults] = useState<Fragance>();

	const handleNameChange = useDebouncedCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			const newSearchTerm = e.target.value;
			setSearchTerm(newSearchTerm);

			console.log({ searchResults });

			if (newSearchTerm !== '') {
				try {
					const data = await getGente(newSearchTerm);
					setSearchResults(data);
				} catch (error) {
					console.error(error);
				}
			}
		},
		300,
	);

	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<h1 className='text-wrap text-center text-3xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-5xl'>
				...
			</h1>
			<form className='flex w-full max-w-sm items-center space-x-2'>
				<Input
					defaultValue={searchTerm}
					type='text'
					onChange={handleNameChange}
					className='mt-6 rounded-xl p-4 text-black'
					placeholder='Search Fragance...'
				/>
			</form>
			{searchResults?.products.length! > 1 &&
				searchResults?.products.map((fragance) => (
					<div key={fragance.productId}>
						<h1>{fragance.displayName}</h1>
						<img
							src={fragance.heroImage}
							alt={fragance.displayName}
						/>
					</div>
				))}
			<Recommendation />
		</main>
	);
}
