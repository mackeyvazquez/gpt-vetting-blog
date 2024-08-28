import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { usePathname } from 'next/navigation';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const pathname = usePathname();

	const logo = publication.preferences.logo;
	const title = publication.title;

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};
	return (
		<header className="h-14 w-full px-4 bg-white fixed z-30 flex items-center border-b dark:border-neutral-300 dark:bg-neutral-300 lg:px-6">
			
			<Container className="w-fulls flex justify-between gap-1">
					<div className="flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
						<Button 
							href='/' 
							as='a' 
							type='outline'
							icon={
								<img
									alt={publication.title}
									src={logo ?? ''}
									className='h-6 w-6'
								/>
							}
							label={title ?? ''}
							className='md:px-4 md:py-2 md:space-x-2 md:text-xl'
						/>
					</div>

				<nav className="col-span-2 flex flex-row items-center justify-end gap-3 lg:col-span-3">
					<Button href='/@plicableai' as="a" type="outline" label="Demo" className={` hover:bg-transparent ${pathname === '/blog' ? 'bg-red-500 hover:no-underline' : 'hover:underline'}`}/>
					<Button href='/login' as="a" type="outline" label="Login" className='hover:underline hover:bg-transparent' />
				</nav>
			</Container>
		</header>
	);
};
