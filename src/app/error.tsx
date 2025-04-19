'use client'

const Error = ({ error }: { error: Error }) => {
	return (
		<section className="min-h-[45vh] flex-center flex-col gap-[20px] text-[1.2rem]">
			{error.message}
		</section>
	)
}

export default Error
