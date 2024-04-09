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
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger>
						{' '}
						<MenuIcon />{' '}
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Billing</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>Subscription</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};
