const geoLocation: () => Loc | null = () => {
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				return {
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				}
			},
			() => {
				return null
			}
		)
	}
	return null
}

export default geoLocation
