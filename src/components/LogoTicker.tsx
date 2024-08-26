import acmeLogo from "../assets/images/acme.png"
import quantumLogo from "../assets/images/quantum.png"
import echoLogo from "../assets/images/echo.png"
import celestialLogo from "../assets/images/celestial.png"
import pulseLogo from "../assets/images/pulse.png"
import apexLogo from "../assets/images/apex.png"
import Image from "next/image"

const images = [
  { src: acmeLogo, alt: "Acme Logo | SaaS Landing Page built by Diego Tech" },
  {
    src: quantumLogo,
    alt: "Quantum Logo | SaaS Landing Page built by Diego Tech",
  },
  { src: echoLogo, alt: "Echo Logo | SaaS Landing Page built by Diego Tech" },
  {
    src: celestialLogo,
    alt: "Celestial Logo | SaaS Landing Page built by Diego Tech",
  },
  { src: pulseLogo, alt: "Pulse Logo | SaaS Landing Page built by Diego Tech" },
  { src: apexLogo, alt: "Apex Logo | SaaS Landing Page built by Diego Tech" },
]

export const LogoTicker = () => {
  return (
    <section className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-xl text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="relative mt-9 overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,transparent)] before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-20 after:bg-[linear-gradient(to_left,#000,transparent)] after:content-['']">
          <div className="flex gap-16">
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                className="h-8 w-auto flex-none"
                alt={alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
