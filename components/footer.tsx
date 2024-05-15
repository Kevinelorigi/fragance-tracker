import Link from 'next/link';
import { X } from '@/components/svg/logo-x';

export const Footer = () => {
	return (
		<footer className='z-20 flex flex-row gap-8 border-t bg-black p-6 shadow md:flex-row md:items-center md:justify-between lg:justify-around'>
			<Link
				href='/'
				className='text-wrap text-xl font-extrabold tracking-tighter text-white md:text-3xl'
			>
				Fragancistico.
			</Link>

			<ul className='flex flex-row gap-4 p-4 text-right tracking-tighter text-white md:flex-row md:text-sm'>
				<li>
					<h1 className='font-bold'>Partners</h1>
					<Link
						href=''
						target='_blank'
						className='flex items-center justify-end gap-x-1 font-semibold  hover:underline'
					></Link>
				</li>
				<li>
					<h1 className='mb-3 font-bold'>Contacto</h1>
					<Link
						href='https://twitter.com/Kevinelorigi'
						target='_blank'
						className='flex items-center justify-end gap-x-1 font-semibold hover:underline'
					>
						<X /> (Twitter)
					</Link>
				</li>
			</ul>
		</footer>
	);
};
