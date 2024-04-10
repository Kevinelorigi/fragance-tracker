/* eslint-disable tailwindcss/no-custom-classname */

export default function Home() {
	return (
		<main className='relative flex min-h-dvh flex-col items-center justify-center gap-4 p-4 md:min-h-[calc(100vh-162px)] md:p-8 lg:min-h-[calc(100vh-160px)]'>
			<h1 className='text-wrap text-center text-3xl font-extrabold leading-none tracking-tighter drop-shadow-sm md:text-4xl lg:text-5xl'>
				Hol
			</h1>
			<h2 className='text-wrap text-center text-2xl font-bold leading-none tracking-tighter opacity-80 drop-shadow-sm md:text-3xl lg:text-4xl'>
				Que mas
			</h2>
		</main>
	);
}
