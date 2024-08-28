import Link from 'next/link';
import { Container } from './container';

export const Footer = () => {

	return (
		<footer className="w-full border-t">

			<Container className="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-4 text-xs sm:flex-row md:px-6 ">

					<Link href="https://aplicable.ai" className="hover:underline">
						Made by Aplicable AI
					</Link>

					<nav className='flex flex-col gap-2 sm:ml-auto sm:flex-row sm:gap-6'>
						<div className='flex justify-center gap-4 sm:hidden'>
							<Link href="/terms" className="hover:underline">
								Terms of Service
							</Link>
							<Link href="/privacy" className="hover:underline">
								Privacy Policy
							</Link>
						</div>
						<div className='flex gap-4 sm:gap-6'>
							<Link href="/terms" className="hidden sm:inline hover:underline">
								Terms of Service
							</Link>
							<Link href="/privacy" className="hidden sm:inline hover:underline">
								Privacy Policy
							</Link>

							<Link href="https://www.instagram.com/gptvetting" target='_blank' className="hover:underline">
								Instagram
							</Link>
							<Link href="https://www.tiktok.com/@gptvetting.com" target='_blank' className="hover:underline">
								TikTok
							</Link>
							<Link href="mailto:mackey@gptvetting.com" target='_blank' className="hover:underline">
								Contact
							</Link>
							<Link href="https://gptvetting.com/blog" className="hover:underline">
								Blog
							</Link>
						</div>
					</nav>

			</Container>
		</footer>
	);
};
