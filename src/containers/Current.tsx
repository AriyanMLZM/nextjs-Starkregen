import { Temp } from '@/components'

const location = {
	name: 'London',
	region: 'City of London, Greater London',
	country: 'United Kingdom',
	lat: 51.5171,
	lon: -0.1062,
	tz_id: 'Europe/London',
	localtime_epoch: 1742980984,
	localtime: '2025-03-26 09:23',
}

const current = {
	last_updated_epoch: 1742980500,
	last_updated: '2025-03-26 09:15',
	temp_c: 11.2,
	temp_f: 52.2,
	is_day: 1,
	condition: {
		text: 'Partly cloudy',
		icon: '/116.webp',
		code: 1003,
	},
	wind_mph: 2.5,
	wind_kph: 4.0,
	wind_degree: 133,
	wind_dir: 'SE',
	pressure_mb: 1026.0,
	pressure_in: 30.3,
	precip_mm: 0.0,
	precip_in: 0.0,
	humidity: 87,
	cloud: 25,
	feelslike_c: 11.4,
	feelslike_f: 52.6,
	windchill_c: 11.9,
	windchill_f: 53.4,
	heatindex_c: 11.6,
	heatindex_f: 52.9,
	dewpoint_c: 7.7,
	dewpoint_f: 45.8,
	vis_km: 10.0,
	vis_miles: 6.0,
	uv: 1.8,
	gust_mph: 3.0,
	gust_kph: 4.8,
	air_quality: {
		co: 482.85,
		no2: 84.545,
		o3: 15.0,
		so2: 13.505,
		pm2_5: 28.49,
		pm10: 45.325,
		'us-epa-index': 2,
		'gb-defra-index': 3,
	},
}

const Current = () => {
	return (
		<section className="flex-center p-[20px]">
			<div className="w-full flex justify-center gap-[30px]">
				<div>
					<h1 className="text-[2rem]">{location.name}</h1>
					<h2 className="text-[0.9rem] mt-[10px]">{location.region}</h2>
					<h2 className="text-[0.9rem]">{location.country}</h2>
					<div className="text-[0.8rem] flex mt-[20px] gap-[20px]">
						<div>
							<h2>lat</h2>
							<span>{location.lat}</span>
						</div>
						<div>
							<h2>lon</h2>
							<span>{location.lon}</span>
						</div>
					</div>
					<p className='text-[0.8rem] mt-[20px]'>
						Have a pleasant <b>{current.is_day ? 'Day' : 'Night'}</b> !
					</p>
				</div>
				<div className="flex flex-col justify-between">
					<img
						src={current.condition.icon}
						alt="weather-icon"
						className="w-[4rem]"
					/>
					<h2 className="text-[0.8rem]">{current.condition.text}</h2>
					<Temp valueC={current.temp_c} valueF={current.temp_f} size="2rem" />
					<p className="text-[0.8rem] mt-[10px]">
						Feels like{' '}
						<Temp
							valueC={current.feelslike_c}
							valueF={current.feelslike_f}
							size="1rem"
						/>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Current
