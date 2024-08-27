export const CallToAction = () => {
  return (
    <section className="bg-black py-[72px] text-center text-white">
      <div className="container">
        <h2 className="text-5xl font-bold tracking-tighter">
          Get Instant access
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts
        </p>

        <form className="mt-10 flex flex-col gap-2.5">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 rounded-lg bg-white/20 px-5 font-medium placeholder:text-[#9ca3af]"
          />
          <button className="h-12 rounded-lg bg-white font-medium text-black">
            Get access
          </button>
        </form>
      </div>
    </section>
  )
}
