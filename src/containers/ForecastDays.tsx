import { DraggableList } from '@/components'
import { forecast } from '@/constants/forecast.json'

type DayItemProps = {
	day: ForecastDay
}

const DayItem = ({ day }: DayItemProps) => {
	return (
		<div className="min-w-[150px] border-white flex-center flex-col">
			<span>{day.date}</span>
			<div className="w-full border-t-[2px] border-white flex-center mt-[15px]">
				<div className="w-[20px] h-[20px] rounded-full translate-y-[-50%] bg-white flex-center">
					<div className="w-[10px] h-[10px] bg-bgColor rounded-full" />
				</div>
			</div>
		</div>
	)
}

const ForecastDays = () => {
	return (
		<section>
			<DraggableList>
				{forecast.forecastday.map((day) => (
					<DayItem day={day} key={day.date} />
				))}
			</DraggableList>
		</section>
	)
}

export default ForecastDays
