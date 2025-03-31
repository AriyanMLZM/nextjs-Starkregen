import { getFullWeather } from '@/utils/getWeather'
import { CityPage } from '@/containers'

type Props = {
	params: Promise<{ name: string }>
}

const page = async ({ params }: Props) => {
	const { name } = await params

	// const data = await getFullWeather(name)
	// console.log(data)

	return <CityPage />
}

export default page
