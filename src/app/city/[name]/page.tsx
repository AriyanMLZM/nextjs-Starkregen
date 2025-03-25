import { getCurrent } from '@/utils/getCurrent'

type Props = {
	params: Promise<{ name: string }>
}

const page = async ({ params }: Props) => {
	const { name } = await params

	const data = await getCurrent(name)
	console.log(data)

	return <div>{name}</div>
}

export default page
