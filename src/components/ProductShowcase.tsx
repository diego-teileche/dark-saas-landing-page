import Image from "next/image"
import appScreen from "../assets/images/app-screen.png"

export const ProductShowcase = () => {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <h2>Intuitive interface</h2>
        <p>
          Celebrate the joy of accomplishment with an app design to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time
        </p>
      </div>
      <Image
        src={appScreen}
        alt="The product screenshot | SaaS Landing Page built by Diego Tech"
      />
    </section>
  )
}
