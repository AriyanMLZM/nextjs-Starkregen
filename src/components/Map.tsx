'use client'
import { useEffect } from 'react'
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMap,
	useMapEvent,
} from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

type Props = {
	isDark: boolean
	loc: Loc
	enSelect: boolean
	handleLoc?: (loc: Loc) => void
}

const greenIcon = new Icon({
	iconUrl: '/marker.png',
	iconSize: [20, 35],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
})

const Recenter = ({ loc }: { loc: Loc }) => {
	const map = useMap()
	useEffect(() => {
		map.setView([loc.lat, loc.lon])
	}, [])
	return null
}

const MovingMarker = ({ handleLoc }: { handleLoc: (loc: Loc) => void }) => {
	useMapEvent('click', (event) => {
		handleLoc({ lat: event.latlng.lat, lon: event.latlng.lng })
	})
	return null
}

const Map = ({ isDark, enSelect, loc, handleLoc }: Props) => {
	return (
		<MapContainer
			center={[29, 29]}
			zoom={10}
			scrollWheelZoom={true}
			style={{
				height: '110%',
				width: '100%',
				zIndex: 0,
				background: isDark ? '#222' : '',
			}}
			zoomControl={false}
		>
			<TileLayer
				url={
					isDark
						? 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png'
						: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				}
			/>
			<Marker position={[loc.lat, loc.lon]} icon={greenIcon}></Marker>
			{enSelect && handleLoc && <MovingMarker handleLoc={handleLoc} />}
			<Recenter loc={loc} />
		</MapContainer>
	)
}

export default Map
