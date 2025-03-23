type Props = {
	size: string
	width: string
	height: string
}

const Loader = ({ size, width, height }: Props) => {
	return (
		<div style={{ width: width, height: height }} className="flex-center">
			<div
				style={{ width: size, height: size }}
				className="border-1 border-white animate-spin"
			/>
		</div>
	)
}

export default Loader
