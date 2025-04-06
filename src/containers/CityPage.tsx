import Link from 'next/link'
import { AirQ, Current, ForecastDays, ForecastHours } from './'
import { IconBack } from '@/icons'

type Props = {
	forecast: WeatherAPIResponse
}

const CityPage = ({ forecast }: Props) => {
	return (
		<>
			<div className="w-[1.5rem] fixed top-[80px] left-[10px] bg-black/50 rounded">
				<Link href="/">
					<IconBack className="w-full h-full" />
				</Link>
			</div>
			<Current location={forecast.location} current={forecast.current} />
			<ForecastDays forecastDay={forecast.forecast.forecastday} />
			<ForecastHours hours={forecast.forecast.forecastday[0].hour} />
			<AirQ />
		</>
	)
}

export default CityPage
