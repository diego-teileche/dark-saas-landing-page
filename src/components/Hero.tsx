import ArrowWIcon from "@/assets/icons/arrow-w.svg"
import cursorImage from "@/assets/images/cursor.png"
import messageImage from "@/assets/images/message.png"
import Image from "next/image"

export const Hero = () => {
  return (
    <main>
      <section className="relative overflow-clip bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] py-[72px] text-white sm:py-24">
        <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]"></div>
        <div className="container relative">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1"
            >
              <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] bg-clip-text text-transparent">
                Version 2.0 is here
              </span>
              <span className="inline-flex items-center gap-1">
                <span>Read More</span>
                <ArrowWIcon />
              </span>
            </a>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative inline-flex">
              <h1 className="mt-8 inline-flex text-center text-7xl font-bold tracking-tighter sm:text-9xl">
                One Task
                <br />
                at a Time
              </h1>
              <Image
                src={cursorImage}
                height="200"
                width="200"
                className="absolute right-[476px] top-[108px] hidden sm:inline"
                alt="Cursor Image | SaaS Landing Page built by Diego Tech"
              />
              <Image
                src={messageImage}
                height="200"
                width="200"
                className="absolute left-[498px] top-[56px] hidden sm:inline"
                alt="Message Image | SaaS Landing Page built by Diego Tech"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <p className="mt-8 max-w-md text-center text-xl">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your successes
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="rounded-lg bg-white px-5 py-3 font-medium text-black">
              Get for free
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
