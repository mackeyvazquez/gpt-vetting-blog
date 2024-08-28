import { Button } from './button';
import { Search } from './searchbar';

export const Navbar = () => {
	return (
		<div className="mt-20 w-full flex flex-col justify-center items-center space-y-1 gap-2 text-left sm:space-y-0 md:flex-row md:max-w-lg md:mx-auto">
			<Search />
			<Button type="primary" label="Search" className='w-full flex justify-center md:w-auto !py-2' />
		</div>
	);
};
