/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { Suspense, useState, ChangeEvent } from 'react';
import Recommendation from '@/components/recommendation';
import { Input } from '@/components/ui/input';
import getGente from '@/api/SearchFragance';

export default function Home() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchResults, setSearchResults] = useState([]);

	const handleNameChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = e.target.value;
		setSearchTerm(newSearchTerm);

		if (newSearchTerm !== '') {
			try {
				const data = await getGente(newSearchTerm);
				setSearchResults(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<h1 className='text-wrap text-center text-3xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-5xl'>
				...
			</h1>
			<form className='flex w-full max-w-sm items-center space-x-2'>
				<Input
					type='text'
					value={searchTerm}
					onChange={handleNameChange}
					className='mt-6 rounded-xl p-4 text-black'
					placeholder='Search Fragance...'
				/>
			</form>
			<Suspense fallback={<h1>Buscando...</h1>}>
				{searchResults.map((result) => (
					<div key={result.id}>
						<h1>{result.name}</h1>
						<p>{result.description}</p>
					</div>
				))}
			</Suspense>
			<Recommendation />
		</main>
	);
}
