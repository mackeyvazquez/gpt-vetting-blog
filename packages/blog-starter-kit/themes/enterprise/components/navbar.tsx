import { Button } from './button';
import { Search } from './searchbar';

export const Navbar = () => {
	return (
		<div className="pt-28 w-full flex flex-col justify-center items-center gap-2 md:max-w-lg md:mx-auto">
			<Search />
			<Button type="primary" label="Search" className='w-full md:text-sm flex justify-center md:!py-2 md:px-4' />
		</div>
	);
};