const fetchIPLocation = async () => {
	const res = await fetch('https://ipapi.co/json/')
	if (!res.ok) throw new Error('Failed to fetch IP-based location')
	const data = await res.json()
	return {
		lat: data.latitude,
		lon: data.longitude,
	}
}

export const getCurrentLocation = () => {
	return new Promise<Loc>((resolve, reject) => {
		if (typeof window === 'undefined' || !navigator.geolocation) {
			console.log('Geolocation not supported')
			fetchIPLocation().then(resolve).catch(reject)
			return
		}

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				resolve({
					lat: pos.coords.latitude,
					lon: pos.coords.longitude,
				})
			},
			(err) => {
				console.log('Geolocation failed:', err.message)
				fetchIPLocation().then(resolve).catch(reject)
			},
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			}
		)
	})
}
