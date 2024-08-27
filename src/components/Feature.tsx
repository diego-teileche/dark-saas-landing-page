import EcosystemIcon from "@/assets/icons/ecosystem.svg"
import { useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

interface FeatureProps {
  title: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  const border = useRef<HTMLDivElement>(null)
  const offsetX = useMotionValue(-100)
  const offsetY = useMotionValue(-100)
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return

      const borderRect = border.current?.getBoundingClientRect()
      offsetX.set(e.x - borderRect?.x)
      offsetY.set(e.y - borderRect?.y)
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div
      key={title}
      className="relative rounded-xl border border-white/30 px-5 py-10 text-center sm:flex-1"
    >
      <motion.div
        ref={border}
        className="absolute inset-0 rounded-xl border-2 border-purple-600"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      ></motion.div>
      <div className="inline-flex size-14 items-center justify-center rounded-lg bg-white text-black">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  )
}

export default Feature
