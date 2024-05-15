/* eslint-disable tailwindcss/no-custom-classname */
import Recommendation from '@/components/recommendation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<h1 className='text-wrap text-center text-3xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-5xl'>
				...
			</h1>
			<div className='flex w-full max-w-sm items-center space-x-2'>
				<Input type='search' placeholder='Buscar perfume...' />
				<Button type='submit'>Buscar</Button>
			</div>
			<Recommendation />
		</main>
	);
}
