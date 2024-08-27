import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';
import Link from 'next/link';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};
	return (
		<header className="h-14 w-full fixed z-30 bg-white flex items-center border-b dark:border-neutral-300 dark:bg-neutral-300">
			
			<Container className="grid grid-cols-4 gap-5 px-5">
				<div className="col-span-2 flex flex-1 items-center gap-2 lg:col-span-1">
					<div className="px-2 py-2 rounded-md hover:bg-slate-100 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 flex items-center space-x-2">
						<Link href='/'>
							<PublicationLogo className='h-6 w-6'/>
						</Link>
						{isSidebarVisible && (
							<PublicationSidebar navbarItems={navbarItems} toggleSidebar={toggleSidebar} />
						)}
					</div>
				</div>
				<nav className="col-span-2 flex flex-row items-center justify-end gap-3 lg:col-span-3">
					<Button href='/@plicableai' as="a" type="outline" label="Demo" className='hover:underline hover:bg-transparent'/>
					<Button href='/login' as="a" type="outline" label="Login" className='hover:underline hover:bg-transparent' />
				</nav>
			</Container>
		</header>
	);
};
