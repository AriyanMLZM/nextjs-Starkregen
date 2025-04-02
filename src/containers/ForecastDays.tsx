import { Day, DraggableList, Temp } from '@/components'
import { forecast } from '@/constants/forecast.json'

type DayItemProps = {
	day: ForecastDay
}

const DayItem = ({ day }: DayItemProps) => {
	return (
		<div className="min-w-[150px] border-white flex-center flex-col">
			<img src="/116.webp" alt="weather-icon" className="w-[3rem]" />
			<span className="flex gap-[10px]">
				<Temp
					size="0.8rem"
					valueC={day.day.maxtemp_c}
					valueF={day.day.maxtemp_f}
				/>
				<Temp
					size="0.8rem"
					valueC={day.day.mintemp_c}
					valueF={day.day.mintemp_f}
				/>
			</span>
			<h3 className="text-[0.7rem] mt-[10px] mb-[2px]">{day.date}</h3>
			<Day date={day.date} size="0.9rem" />
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
		<section className="mt-[30px]">
			<h2 className="flex-center text-[1.2rem]">2-Weeks Forecast</h2>
			<DraggableList>
				{forecast.forecastday.map((day) => (
					<DayItem day={day} key={day.date} />
				))}
			</DraggableList>
		</section>
	)
}

export default ForecastDays
