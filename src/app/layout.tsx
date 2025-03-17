import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Starkregen',
	description: 'Know the Weather of Everywhere',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
