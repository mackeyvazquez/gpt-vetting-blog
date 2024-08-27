import Link from 'next/link';
import { Container } from './container';

export const Footer = () => {

	return (
		<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-4 sm:flex-row md:px-6 ">
			<Container className="px-5">
				<div className="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-4 sm:flex-row md:px-6 ">
					<Link href="https://aplicable.ai" className="hover:underline">
						Made by Aplicable AI ✨.
					</Link>
					<nav className='flex gap-4 sm:ml-auto sm:gap-6'>
						<Link href="/terms" className="hover:underline">
							Terms of Service
						</Link>
						<Link href="/privacy" className="hover:underline">
							Privacy Policy
						</Link>
						<Link href="mailto:mackey@gptvetting.com" className="hover:underline">
							Contact
						</Link>
						<Link href="https://gptvetting.com/blog" className="hover:underline">
							Blog
						</Link>
					</nav>
				</div>
			</Container>
		</footer>
	);
};
