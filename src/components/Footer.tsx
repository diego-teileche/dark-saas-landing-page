import InstaIcon from "@/assets/icons/insta.svg"
import XSocial from "@/assets/icons/x-social.svg"
import TiktokIcon from "@/assets/icons/tiktok.svg"
import YoutubeIcon from "@/assets/icons/youtube.svg"

export const Footer = () => {
  return (
    <footer className="border-t border-white/20 bg-black py-5 text-white/60">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            &copy; 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <InstaIcon />
            </li>
            <li>
              <XSocial />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
