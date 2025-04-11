'use client'

import { useEffect, useState } from 'react'
import { Current } from './'
import geoLocation from '@/utils/geoLocation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader, Map } from '@/components'

const altLoc: Loc = {
	lat: 29.6036,
	lon: 52.5388,
}

const fetchLocation = async (loc: Loc) => {
	const params = { ...loc }
	const { data }: { data: { location: LocationRes; current: Current } } =
		await axios.get(`/api/location`, {
			params,
		})
	return data
}

const Location = () => {
	const [loc, setLoc] = useState<Loc | null>(null)
	const [errorLoc, setErrorLoc] = useState<boolean>(false)

	const { data, isLoading, isError } = useQuery({
		queryKey: ['locationData', loc],
		queryFn: () => fetchLocation(loc as Loc),
		enabled: !!loc,
		staleTime: Infinity,
	})

	const handleLoc = (loc: Loc) => {
		setLoc(loc)
	}

	useEffect(() => {
		const location: Loc | null = geoLocation()

		if (location) handleLoc(location)
		else {
			handleLoc(altLoc)
			setErrorLoc(true)
		}
	}, [])

	return (
		<section className="w-full flex flex-col md:flex-row justify-between lg:px-[17%] md:px-[10%] my-[20px]">
			<div className="flex-center flex-col w-full min-h-[350px]">
				{data && (
					<div className="flex-center text-[0.7rem]">
						{!errorLoc ? (
							<p className="text-[0.8rem]">Your Location was Found.</p>
						) : (
							<p className="text-[0.8rem]">Can't access your Location.</p>
						)}
					</div>
				)}
				{data && <Current current={data.current} location={data.location} />}
				{isError && <p className="text-[0.8rem]">Network Error!</p>}
				{isLoading && (
					<Loader height="100%" width="100%" size="40px" text="Location..." />
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
