import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function Recommendation() {
	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<h1 className='text-wrap text-center text-2xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-5xl'>
				Recomendados
			</h1>
			<p className='text-wrap text-center text-xl leading-none tracking-tighter opacity-80 drop-shadow-sm md:text-3xl lg:text-xl'>
				These fragances are the best selling ones. It is designed
				precisely by the designers
			</p>
			<Card className='flex cursor-pointer flex-col duration-200 hover:scale-90'>
				<Image
					src='/Aventus.webp'
					alt='Aventus-Fragance'
					width={250}
					height={250}
					className='drop-shadow grayscale transition hover:grayscale-0'
				/>
				<h1 className='text-wrap text-center text-2xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-2xl'>
					Name Perfum
				</h1>
				<p className='text-wrap text-center text-xl font-bold leading-none tracking-tighter opacity-80 drop-shadow-sm md:text-3xl lg:text-xs  '>
					Description fragance
				</p>
			</Card>
		</main>
	);
}
