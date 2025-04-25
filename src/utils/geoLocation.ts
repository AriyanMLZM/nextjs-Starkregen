const geoLocation: () => Loc | null = () => {
	if (!navigator.geolocation) {
		console.log('geolocation not available!')
		return null
	}

	let loc: Loc | null = null
	navigator.geolocation.getCurrentPosition(
		(position) => {
			console.log(position.coords)
			loc = {
				lat: position.coords.latitude,
				lon: position.coords.longitude,
			}
		},
		(err) => {
			console.log("Can't access your location!")
		}
	)
	return loc
}

export default geoLocation
