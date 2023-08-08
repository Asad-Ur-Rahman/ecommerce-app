import { heroGirlimg } from "@/components/assets"
import Image from "next/image"


const Hero = () => {
    return (
        <div className="flex justify-between items-center">
            {/* right side */}
            <div></div>

            {/* left side */}
            <div className="bg-gray-200 rounded-full">
                <Image src={heroGirlimg} alt="heroimg"/>
            </div>
        </div>
    )
}

export default Hero