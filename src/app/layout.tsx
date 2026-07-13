import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'
import { ReactQueryProvider } from '@/providers/ReactQuery'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { UnitProvider } from '@/contexts/UnitContext'
import { Footer } from '@/containers'

export const metadata: Metadata = {
	title: 'Starkregen',
	description: 'Know the Weather of Anywhere',
	authors: [{ name: 'Ariyan Molazem', url: 'https://ariyanmolazem.ir' }],
	creator: 'Ariyan Molazem',
	applicationName: 'Starkregen',
	keywords: ['weather app', 'next.js', 'weather api', 'forecast weather app'],
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider>
					<ReactQueryProvider>
						<UnitProvider>
							<Navbar />
							{children}
							<Footer />
						</UnitProvider>
					</ReactQueryProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
