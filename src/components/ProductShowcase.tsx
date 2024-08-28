import Image from "next/image"
import appScreen from "../assets/images/app-screen.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

export const ProductShowcase = () => {
  const refImage = useRef<HTMLImageElement>(null)

  const { scrollYProgress } = useScroll({
    target: refImage,
    offset: ["start end", "end end"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <section className="overflow-hidden bg-gradient-to-b from-black to-[#5d2cab] py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Intuitive interface
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Celebrate the joy of accomplishment with an app design to track your
            progress, motivate your efforts, and celebrate your successes, one
            task at a time
          </p>
        </div>
      </div>
      <motion.div
        style={{
          opacity,
          rotateX,
          transformPerspective: "800px",
        }}
        className="mx-4 mt-12 flex justify-center"
      >
        <Image
          ref={refImage}
          src={appScreen}
          alt="The product screenshot | SaaS Landing Page built by Diego Tech"
        />
      </motion.div>
    </section>
  )
}
