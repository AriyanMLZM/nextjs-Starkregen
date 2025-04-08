import { Temp } from '../components'

type ItemProps = {
	city: { name: string; current: Current }
	ind: number
}

type Props = {
	cities: { name: string; current: Current }[]
}

const Item = ({ city, ind }: ItemProps) => {
	const isLeft = ind % 2 !== 0
	return (
		<div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
			<div
				className={`w-5/12 gap-[20px] flex ${isLeft ? 'flex-row-reverse' : ''}`}
			>
				<div className="flex flex-col gap-[2px]">
					<h2 className="text-[1rem]">{city.name}</h2>
					<h3 className="text-[0.8rem]">{city.current.condition.text}</h3>
					<Temp
						valueC={city.current.temp_c}
						valueF={city.current.temp_f}
						size="0.9rem"
					/>
				</div>
				<div>
					<img
						src={city.current.condition.icon}
						alt="weather-icon"
						className="w-[4rem]"
					/>
				</div>
			</div>

			<div className="w-2/12 flex justify-center items-center relative">
				<div className="h-full w-0.5 bg-white absolute top-0"></div>
				<div className="z-[1] w-4 h-4 rounded-full bg-bgColor border-4"></div>
			</div>
		</div>
	)
}

const VerticalList = ({ cities }: Props) => {
	return (
		<section className="w-full flex-center my-[60px]">
			<div className="w-full">
				{cities.map((city, ind) => (
					<Item city={city} ind={ind} key={ind} />
				))}
			</div>
		</section>
	)
}

export default VerticalList
