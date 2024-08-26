import logoImage from "@/assets/images/logosaas.png"
import MenuIcon from "@/assets/icons/menu.svg"
import Image from "next/image"

export const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="relative">
            <div className="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,#f87bff,#f892cf,#ffdd98,#c2f081,#2fd8fe)] blur-md"></div>
            <Image
              src={logoImage}
              className="relative size-12"
              alt="SaaS Landing Page Logo | Diego Tech"
            />
          </div>
          <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white border-opacity-30 sm:hidden">
            <MenuIcon className="text-white" />
          </div>

          <nav className="hidden items-center gap-6 sm:flex">
            <a
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              Customers
            </a>
            <button className="rounded-lg bg-white px-4 py-2">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
