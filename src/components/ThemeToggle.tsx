'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

const iconVariants = {
	initial: { opacity: 0, rotate: -90, scale: 0.5 },
	animate: { opacity: 1, rotate: 0, scale: 1 },
	exit: { opacity: 0, rotate: 90, scale: 0.5 },
}

const ThemeToggle = () => {
	const { resolvedTheme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <div className="w-[30px] h-[30px]" />
	}

	const isDark = resolvedTheme === 'dark'

	return (
		<motion.button
			type="button"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
			className="flex-center text-foreground text-[30px]"
			whileHover={{ scale: 1.15, rotate: 15 }}
			whileTap={{ scale: 0.85, rotate: -15 }}
			transition={{ type: 'spring', stiffness: 400, damping: 17 }}
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={isDark ? 'sun' : 'moon'}
					variants={iconVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="flex-center"
				>
					{isDark ? <HiSun /> : <HiMoon />}
				</motion.span>
			</AnimatePresence>
		</motion.button>
	)
}

export default ThemeToggle
