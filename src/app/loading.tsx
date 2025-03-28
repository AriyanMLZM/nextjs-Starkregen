import { Loader } from '@/components'

const loading = () => {
	return (
		<section className="flex-center h-[calc(100vh-60px)]">
			<Loader height="100%" width="100%" size="40px" text="Loading..." />
		</section>
	)
}

export default loading
