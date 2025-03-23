import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'
import { ReactQueryProvider } from '@/providers/ReactQuery'

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
				<ReactQueryProvider>
					<Navbar />
					{children}
				</ReactQueryProvider>
			</body>
		</html>
	)
}

export default RootLayout
