import helixImage from "@/assets/images/helix2.png"
import emojiStarImage from "@/assets/images/emojistar.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [-5, 50])

  return (
    <section
      ref={containerRef}
      className="overflow-hidden bg-black py-[72px] text-center text-white sm:py-24"
    >
      <div className="container relative max-w-xl">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            className="absolute left-[calc(100%+36px)] top-6"
            alt="Helix Image | SaaS Landing Page built by Diego Tech"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStarImage}
            className="absolute -top-[100px] right-[calc(100%+24px)]"
            alt="Emoji Star Image | SaaS Landing Page built by Diego Tech"
          />
        </motion.div>
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">
          Get Instant access
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts
        </p>

        <form className="mx-auto mt-10 flex max-w-sm flex-col gap-2.5 sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 rounded-lg bg-white/20 px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="h-12 rounded-lg bg-white px-5 font-medium text-black">
            Get access
          </button>
        </form>
      </div>
    </section>
  )
}
