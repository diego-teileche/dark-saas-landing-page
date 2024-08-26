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
          <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white border-opacity-30">
            <MenuIcon className="text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}
