import InstaIcon from "@/assets/icons/insta.svg"
import XSocial from "@/assets/icons/x-social.svg"
import TiktokIcon from "@/assets/icons/tiktok.svg"
import YoutubeIcon from "@/assets/icons/youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container">
        <div>
          <div>&copy; 2024 Your Company, Inc. All rights reserved</div>
          <ul>
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
