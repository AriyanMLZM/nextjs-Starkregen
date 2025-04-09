'use client'
import { withAnimationRightSlide } from '@/hoc/withAnimation'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./Map'), {
	ssr: false,
})

type Props = {
	loc: Loc
	enSelect: boolean
	weatherData?: ShortWeatherData
	handleLoc?: (loc: Loc) => void
}

const Map = (props: Props) => {
	return (
		<div className="flex-center flex-col">
			<div className="w-[300px] h-[300px] overflow-hidden rounded-[20px] border-2 border-primary">
				<DynamicMap isDark={true} {...props} />
			</div>
			<h3 className="select-none font-[Tektur] translate-y-[-20px] text-[0.7rem]">
				Starkregen
			</h3>
		</div>
	)
}

export default withAnimationRightSlide(Map)
