import { heroGirlimg } from "@/components/assets"
import Image from "next/image"


const Hero = () => {
    return (
        <div className="flex justify-between items-center">
            {/* right side */}
            <div>
                <button className="rounded-md bg-primaryWhite text-purple-700">Sale 70%</button>

                <button className="rounded-sm ring-1 ring-slate-800 bg-gray-900 py-3 px-5 text-white font-semibold">
                    <p className="text-primaryWhite whitespace-pre-line">

                    Start shopping
                    </p>
                </button>
            </div>

            {/* left side */}
            <div className="bg-primaryWhite rounded-full">
                <Image src={heroGirlimg} alt="heroimg" />
            </div>
        </div>
    )
}

export default Hero