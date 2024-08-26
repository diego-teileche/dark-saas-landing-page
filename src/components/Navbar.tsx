import logoImage from "@/assets/images/logosaas.png"
import MenuIcon from "@/assets/icons/menu.svg"
import Image from "next/image"

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="py-4">
          <Image
            src={logoImage}
            className="size-12"
            alt="SaaS Landing Page Logo | Diego Tech"
          />
          <MenuIcon />
        </div>
      </div>
    </header>
  )
}
