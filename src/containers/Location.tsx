'use client'

import { useEffect, useState } from 'react'
import { Current } from './'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader, Map } from '@/components'
import { InfoIcon } from '@/icons'

const altLoc: Loc = {
	lat: 29.6036,
	lon: 52.5388,
}

const fetchLocation = async (loc: Loc) => {
	const params = { ...loc }

	const data: { location: LocationRes; current: Current } = await axios
		.get(`/api/location`, {
			params,
		})
		.then((res) => res.data)
		.catch(() => {
			throw new Error('Network Error!')
		})

	return data
}

const Location = () => {
	const [loc, setLoc] = useState<Loc | null>(null)
	const [errorLoc, setErrorLoc] = useState<boolean>(false)
	const [loadingCurrentLoc, setLoadingCurrentLoc] = useState<boolean>(false)
	const [isUsingCurrent, setIsUsingCurrent] = useState<boolean>(false)

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['locationData', loc],
		queryFn: () => fetchLocation(loc as Loc),
		enabled: !!loc,
		staleTime: 0,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
		networkMode: 'always',
		retry: 1,
	})

	const handleMapLoc = (loc: Loc) => {
		setIsUsingCurrent(false)
		setLoc(loc)
	}

	const handleCurrentLocation = () => {
		setLoadingCurrentLoc(true)
		setIsUsingCurrent(true)

		if (!navigator.geolocation) {
			console.log('geolocation not available!')
			setErrorLoc(true)
			setLoadingCurrentLoc(false)
			setLoc((prev) => (prev === null ? altLoc : prev))
			return
		}

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				setLoc({
					lat: pos.coords.latitude,
					lon: pos.coords.longitude,
				})
				setLoadingCurrentLoc(false)
			},
			(err) => {
				console.log("Can't access your location!", err.message)
				setErrorLoc(true)
				setLoadingCurrentLoc(false)
				setLoc((prev) => (prev === null ? altLoc : prev))
			},
			{
				timeout: 5000,
				enableHighAccuracy: true,
				maximumAge: 0,
			}
		)
	}
	useEffect(() => handleCurrentLocation(), [])

	return (
		<section className="w-full flex flex-col md:flex-row lg:px-[17%] md:px-[10%] my-[20px]">
			<div className="flex-center flex-col w-full min-h-[350px]">
				{data && (
					<div className="flex-center gap-[10px] w-full text-[0.7rem]">
						{isUsingCurrent ? (
							<>
								<InfoIcon className="text-[1.2em]" />
								{!errorLoc ? (
									<p className="text-[0.8rem]">
										Your current location was Found.
									</p>
								) : (
									<div className="flex-center flex-col">
										<p className="text-[0.8rem]">
											Can't access your current location.
										</p>
										<button
											className="border-1 mt-[10px] border-white p-[5px] rounded-[10px] hover:opacity-50 text-[0.6rem] cursor-pointer"
											type="button"
											onClick={handleCurrentLocation}
										>
											Try again
										</button>
									</div>
								)}
							</>
						) : (
							<button
								className="border-1 border-white p-[5px] rounded-[10px] hover:opacity-50 text-[0.7rem] cursor-pointer"
								type="button"
								onClick={handleCurrentLocation}
							>
								Get Current Location
							</button>
						)}
					</div>
				)}
				{data && <Current current={data.current} location={data.location} />}
				{isError && <p className="text-[0.8rem]">{error.message}</p>}
				{isLoading && (
					<Loader
						height="100%"
						width="100%"
						size="40px"
						text="Loading Location..."
					/>
				)}
				{loadingCurrentLoc && (
					<Loader
						height="100%"
						width="100%"
						size="40px"
						text="Accessing Current Location..."
					/>
				)}
			</div>
			{loc && (
				<div className="flex w-full flex-col gap-[10px] overflow-hidden">
					<h2 className="text-center text-[1.2rem]">Choose on Map</h2>
					<Map loc={loc} enSelect handleLoc={handleMapLoc} />
				</div>
			)}
		</section>
	)
}

export default Location
