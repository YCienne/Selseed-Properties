import Section from "./Section"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, A11y } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/controller'
import { hero1, hero2, hero3, hero4 } from "../assets"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Hero = () => {
    const images = [hero1, hero2, hero3, hero4]
    return (
    <Section 
    className="w-full nav-height relative"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    > 
    <div className="relative">
                <div className="relative z-1 flex items-center lg:h-[39rem] mt-16 mb-5 p-8 border s
                border-n-1/10 overflow-hidden lg:p-20 xl:h-[46rem] h-[19rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-5/5 xl:w-auto">
                    
                    <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} 
                slidesPerView={1} 
                autoplay
                className="w-full h-full"
            >
        
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className="w-full h-full  object-cover "
                            />
                        </a>

                        <div id="det" className="absolute inset-0 flex flex-col items-center justify-end text-center text-white bg-black bg-opacity-50">
                    <h3 className="text-2xl font-bold mb-4">
                        Selseed Properties
                    </h3>
                    <p className="text-xl"></p>
                    </div>
    
                    </SwiperSlide>
                ))}
            </Swiper>
                    </div>
                </div>
                </div>
    </Section>
)
}

export default Hero
