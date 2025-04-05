'use client'
import { useEffect, useState } from 'react'
import { Current } from './'
import geoLocation from '@/utils/geoLocation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader } from '@/components'

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
		enabled: !loc,
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
		<section>
			<div className="flex-center text-[0.7rem]">
				{errorLoc ? (
					<p>Your Location was Found.</p>
				) : (
					<p>Can't access your Location.</p>
				)}
			</div>
			{data && <Current current={data.current} location={data.location} />}
			{isError && <p>Network Error!</p>}
			{isLoading && <Loader height="50px" width="50px" size="20px" />}
		</section>
	)
}

export default Location
