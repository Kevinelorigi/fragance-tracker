import Link from 'next/link';

import { MenuIcon } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const Navbar = async () => {
	return (
		<nav className='flex items-center justify-between border-y p-4 shadow md:justify-around'>
			<Link
				href='/'
				className='text-wrap text-2xl font-extrabold tracking-tighter md:text-3xl'
			>
				Fragancistico
			</Link>

			<div className='flex max-w-xs items-center space-x-2 font-bold md:max-w-lg'>
				<DropdownMenu>
					<DropdownMenuTrigger className='block rounded border p-2 md:hidden'>
						<MenuIcon aria-label='Menú móvil' />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Inicio</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Fragancias</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Notas</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Perfumistas</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<div className='hidden items-center gap-x-6 md:flex'>
					<Link href='/'>Inicio</Link>
					<Link href='/'>Fragancias</Link>
					<Link href='/'>Notas</Link>
					<Link href='/'>Perfumistas</Link>
				</div>
			</div>
		</nav>
	);
};
