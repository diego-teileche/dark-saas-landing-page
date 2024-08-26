import ArrowWIcon from "@/assets/icons/arrow-w.svg"

export const Hero = () => {
  return (
    <main>
      <section className="bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] py-[72px] text-white">
        <div className="container">
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
          <h1>One Task at a Time</h1>
          <p>
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes
          </p>
          <button>Get for free</button>
        </div>
      </section>
    </main>
  )
}
