import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroImages } from '../data/company'

export function HeroBackground() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={heroImages[index]}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImages[index]}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-steel-950/82" />
    </div>
  )
}
