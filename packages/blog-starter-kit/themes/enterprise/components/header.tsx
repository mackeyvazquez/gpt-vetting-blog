import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const { publication } = useAppContext();

	const logo = publication.favicon;
	const title = publication.title;

	return (
		<header className="fixed z-30 flex h-14 w-full items-center border-b bg-white px-4 dark:border-neutral-300 dark:bg-neutral-300 lg:px-6">
			<Container className="w-fulls flex justify-between gap-1">
				<div className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
					<Button
						href="/"
						as="a"
						type="outline"
						icon={<img alt={publication.title} src={logo ?? ''} className="h-6 w-6" />}
						label={title ?? ''}
						className="!text-xl md:space-x-2 md:py-1"
					/>
				</div>

				<nav className="col-span-2 flex flex-row items-center justify-end gap-3 lg:col-span-3">
					<Button
						href="/@aplicableai"
						as="a"
						type="outline"
						label="Demo"
						className="!font-medium hover:bg-transparent hover:underline md:text-sm"
					/>
					<Button
						href="https://www.gptvetting.com/login"
						as="a"
						type="outline"
						label="Login"
						className="!bg-slate-100 !font-medium md:text-sm"
					/>
				</nav>
			</Container>
		</header>
	);
};
