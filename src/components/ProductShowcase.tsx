import Image from "next/image"
import appScreen from "../assets/images/app-screen.png"

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#5d2cab] py-[72px] text-white sm:py-24">
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
      <div className="mx-4 mt-12 flex justify-center">
        <Image
          src={appScreen}
          className=""
          alt="The product screenshot | SaaS Landing Page built by Diego Tech"
        />
      </div>
    </section>
  )
}
