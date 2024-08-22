import React from "react"
import { service1, service2, service3} from "../assets"
import { BackgroundCircles } from "./design/Header"
import { Gradient} from "./design/Services"
import Heading from "./Heading"
import Section from "./Section"
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import { gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10} from "../assets"

const About = () => {
    const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10]
  return (
    <Section id="about-us">
        <div className="="container>
            <Heading title="About Our Facility" />

            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border 
                border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-5/5 xl:w-auto">
                    <Swiper className="rounded-[1rem]"
                modules={[Autoplay, A11y]}
                spaceBetween={30} 
                slidesPerView={1} 
                autoplay
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className="w-full scale-[1.3] translate-y-[3%] md:scale-[1] md:-translate-y-[5%] lg:-translate-y-[15%] "
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
                    </div>

                    
                    
                </div>

                
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                        <video src={service2} className="h-full w-full object-cover" width={630} height={750} alt="Lang" autoPlay loop muted />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/10 to-n-8/90 lg:p-15">
                        <h4 className="h4 mb-4"></h4>
                        <p className="body-2 mb-[3rem] text-n-3"></p>
                        </div>

                        
                    </div>

                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                        

                        <div className="relative h-[20rem] bg-n-4 rounded-xl overflow-hidden md:h-[39rem]">
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/10 to-n-8/90 lg:p-15">
                        <h4 className="h4 mb-4">Ignition</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            It just happens jhdhgfhh jfjfg jhf jhsg uhgiuhs hhgdfh hdfuhd iuhuifhi iuhfdiuhd ihiudfjhjhfgjhd jhfd jhd hfd ghhdfj hiuhgsi jhgjif hsiuhi</p>
                        </div>

                            
                        </div>
                       
                    </div>
                </div>

                <Gradient />
                <BackgroundCircles />
            </div>
        </div>
    
    </Section>
)
}

export default About
