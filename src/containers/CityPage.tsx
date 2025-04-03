import { AirQ, Current, ForecastDays, ForecastHours } from './'

const CityPage = () => {
	return (
		<>
			<Current />
			<ForecastDays />
			<ForecastHours />
			<AirQ />
		</>
	)
}

export default CityPage
