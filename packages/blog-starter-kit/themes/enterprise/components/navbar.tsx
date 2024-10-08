import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	return (
		<div className="pt-20 grid grid-cols-1 items-center gap-5 text-sm md:grid-cols-2">
			<Search />
			<SocialLinks />
		</div>
	);
};