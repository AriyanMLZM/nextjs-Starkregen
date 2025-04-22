const geoLocation: () => Loc | null = () => {
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position.coords)
				return {
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				}
			},
			() => {
				console.log("Can't access your location!")
				return null
			}
		)
	}
	console.log('geolocation not available!')
	return null
}

export default geoLocation
