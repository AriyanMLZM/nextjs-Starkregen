import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'

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
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
