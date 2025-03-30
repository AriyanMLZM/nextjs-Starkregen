import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'
import { ReactQueryProvider } from '@/providers/ReactQuery'
import { UnitProvider } from '@/context/UnitContext'

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
					<UnitProvider>
						<Navbar />
						{children}
					</UnitProvider>
				</ReactQueryProvider>
			</body>
		</html>
	)
}

export default RootLayout
