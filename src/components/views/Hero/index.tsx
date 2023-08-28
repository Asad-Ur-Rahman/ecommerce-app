import { bazaar, bustle, heroGirlimg, inStyle, versace } from "@/components/assets"
import Image from "next/image"
import { BsCart2 } from "react-icons/bs";


const Hero = () => {
    const btnText = "Start \n shopping";

    return (
        <div className="py-5 flex justify-between items-center px-2">
            {/* right side */}
            <div className="space-y-6 max-w-sm">
                <button
                    aria-label="redirect the user to sale page"
                    className="rounded-md bg-primaryWhite text-blue-700 px-4 py-2 font-medium"
                >
                    Sale 70%
                </button>

                <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">An Industrial Take on Streetwear</h1>
                <p className="text-gray-700">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <button
                    aria-label="redirect the user to sale page"
                    className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 py-3 px-5 text-white font-semibold"
                >
                    <BsCart2 size={24} />
                    <p className="whitespace-pre leading-4">

                        {btnText}
                    </p>
                </button>
                <div className="flex gap-4">
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={bazaar} alt="bazar" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={bustle} alt="baztel" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={versace} alt="ver" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={inStyle} alt="in style" />
                    </div>
                </div>
            </div>

            {/* left side */}
            <div className="hidden md:flex bg-primaryWhite rounded-full">
                <Image src={heroGirlimg} alt="heroimg" />
            </div>
        </div>
    )
}

export default Hero