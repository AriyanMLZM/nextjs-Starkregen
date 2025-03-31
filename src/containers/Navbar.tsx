import { IconGithub } from '@/icons'
import { Search, UnitSwitcher } from '../components'

const Navbar = () => {
	return (
		<nav className="w-full flex p-[10px] sticky top-0">
			<div className="w-1/4 h-[40px] flex items-center">
				<h1 className="text-white text-[1rem] font-[Tektur] sm:block hidden">Starkregen</h1>
				<h1 className="text-white text-[1rem] font-[Tektur] sm:hidden">SR</h1>
			</div>
			<div className="w-2/4 flex-center">
				<Search />
			</div>
			<div className="w-1/4 flex items-center justify-end gap-[0.9rem]">
				<UnitSwitcher />
				<a target="_blank" href="https://github.com/AriyanMLZM">
					<IconGithub className="text-white text-[30px]" />
				</a>
			</div>
		</nav>
	)
}

export default Navbar
