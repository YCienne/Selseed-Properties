import { useGSAP } from "@gsap/react"
import gsap from "gsap"


import VideoCarousel from "./videocarousel"

const House_details = () => {
    useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    
}, [])

    return (
    <section id="house_detail" className="w-screen overflow-hidden h-full common-padding bg-zinc">
        <div className="screen-max-width">
        <div className="mb-16 w-full md:flex items-end justify-between">
            <h1 id="title" className="section-heading">Take a Tour.</h1>

            <div className="flex flex-wrap items-end gap-5">
            
            </div>

        
        </div>

    <VideoCarousel />
    </div>
    </section>
)
}

export default House_details