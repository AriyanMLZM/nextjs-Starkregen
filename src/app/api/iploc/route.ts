import axios from 'axios'
import { NextResponse } from 'next/server'

export const GET = async () => {
	const data = await axios
		.get('https://ipapi.co/json/')
		.then((res) => res.data)
		.catch((err) => {
			throw new Error(err.message)
		})

	return NextResponse.json(data)
}
