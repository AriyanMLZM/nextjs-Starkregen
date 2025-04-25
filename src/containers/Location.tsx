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
	const [loadingLoc, setLoadingLoc] = useState<boolean>(false)

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

	const handleLoc = (loc: Loc) => {
		setLoc(loc)
	}

	const handleCurrentLocation = () => {
		setLoadingLoc(true)
		if (!navigator.geolocation) {
			console.log('geolocation not available!')
			setErrorLoc(true)
			setLoadingLoc(false)
			return
		}

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				handleLoc({
					lat: pos.coords.latitude,
					lon: pos.coords.longitude,
				})
				setLoadingLoc(false)
			},
			(err) => {
				console.log("Can't access your location!", err.message)
				setErrorLoc(true)
				setLoadingLoc(false)
			}
		)
	}
	useEffect(() => handleCurrentLocation(), [])

	return (
		<section className="w-full flex flex-col md:flex-row lg:px-[17%] md:px-[10%] my-[20px]">
			<div className="flex-center flex-col w-full min-h-[350px]">
				{data && (
					<div className="flex-center gap-[10px] w-full text-[0.7rem]">
						<InfoIcon className="text-[1.2em]" />
						{!errorLoc ? (
							<p className="text-[0.8rem]">Your current location was Found.</p>
						) : (
							<p className="text-[0.8rem]">
								Can't access your current location.
								<button
									className="ml-[10px] text-[0.8em] cursor-pointer"
									type="button"
									onClick={handleCurrentLocation}
								>
									Try again
								</button>
							</p>
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
						text="Loading location..."
					/>
				)}
				{loadingLoc && (
					<Loader
						height="100%"
						width="100%"
						size="40px"
						text="Accessing your location..."
					/>
				)}
			</div>
			{loc && (
				<div className="flex w-full flex-col gap-[10px] overflow-hidden">
					<h2 className="text-center text-[1.2rem]">Choose on Map</h2>
					<Map loc={loc} enSelect handleLoc={handleLoc} />
				</div>
			)}
		</section>
	)
}

export default Location
