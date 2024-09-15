import { socials } from "../constants"
import Section from "./Section"

const Footer = () => {
  return (
    <Section id="Footer" crosses className="!px-0 !py-10 mt-[15rem]">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">© {new Date().getFullYear()}.  All rights reserved</p>
        
        
        <ul className="flex gap-3 flex-wrap">
            {socials.map((item) => (
                <a key={item.id} href={item.url} target="_blank" className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6">
                    <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
            ))}
            
        </ul>
        <div className="mx-6 py-10 text-center md:text-left">
        <p className="mb-4 flex items-center text-n-4 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              malokunelly@gmail.com
            </p>
            <p className="mb-4 flex items-center text-n-4 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd" />
              </svg>
              + 233 55 459 5307<br></br>
              + 233 55 853 6842
            </p>
        </div>
      </div>
    
    </Section>
  )
}

export default Footer
