import Link from 'next/link'
import { AirQ, Current, ForecastDays, ForecastHours } from './'
import { IconBack } from '@/icons'

import { location, current } from '@/constants/forecast.json'

const CityPage = () => {
	return (
		<>
			<div className="w-[1.5rem] fixed top-[80px] left-[10px] bg-black/50 rounded">
				<Link href="/">
					<IconBack className="w-full h-full" />
				</Link>
			</div>
			<Current location={location} current={current} />
			<ForecastDays />
			<ForecastHours />
			<AirQ />
		</>
	)
}

export default CityPage
