import { service1, service2, service3, check } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import { BackgroundCircles } from "./design/Header"
import { Gradient} from "./design/Services"
import Heading from "./Heading"
import Section from "./Section"

const Services = () => {
  return (
    <Section id="about-us">
        <div className="="container>
            <Heading title="About US"
            text="Our facilities" />

            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border 
                border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-5/5 xl:w-auto">
                        <video 
                        className="w-full h-full object-cover md:object-left"
                        width={800}
                        height={730}
                        alt="SAI" 
                        src={service1}
                        autoPlay
                        loop
                        muted
                        />
                    </div>

                    
                    
                </div>

                
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                        <video src={service2} className="h-full w-full object-cover" width={630} height={750} alt="Lang" autoPlay loop muted />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/10 to-n-8/90 lg:p-15">
                        <h4 className="h4 mb-4">Ignition</h4>
                        <p className="body-2 mb-[3rem] text-n-3">It</p>
                        </div>

                        
                    </div>

                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                        

                        <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[39rem]">
                            <img 
                            src={service3} className="w-full h-full object-cover" width={520} height={800} alt="Scary"
                            />

                        
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

export default Services
