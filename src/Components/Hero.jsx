import Section from "./Section"
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = () => {
    const parallaxRef = useRef(null);
  return (
    <Section 
    className="pt-[12rem] -mt-[5.25]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    > 
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-10 lg:mb-[6.25rem] lg:mt-[6.25rem]" >
            <h1 className="h1 mb-6">
                Welcome&nbsp;to&nbsp; {' '}
                <span className="inline-block relative">
                    Ignition
                    <img 
                    src={curve} 
                    className="absolute top-full left-0 w-full xl:-mt-2" 
                    width={624}
                    height={28}
                    alt="curve" />
                </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            
            </p>
        
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-7xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"></div>
                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <img src={robot} className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" alt="AI"/>
                    
                
                    

                    <ScrollParallax isAbsolutelyPositioned>
                        <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1
                        bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                            {heroIcons.map((icon, index) => (
                                <li className="p-5" key={index}>
                                    <img src={icon} width={24} height={25} alt={icon} />
                                </li>
                            ))}
                        </ul>
                        <BackgroundCircles />
                    </ScrollParallax>

                    
                    </div>
                </div>

                <Gradient />
            </div>
            
            
        </div>

        

      </div>
      <BottomLine />
    </Section> 
  )
}

export default Hero
