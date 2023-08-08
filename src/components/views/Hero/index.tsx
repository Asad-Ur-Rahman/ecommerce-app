import { heroGirlimg } from "@/components/assets"
import Image from "next/image"
import { BsCart2 } from "react-icons/bs";


const Hero = () => {
    const btnText = "Start \n shopping";

    return (
        <div className="flex justify-between items-center">
            {/* right side */}
            <div>
                <button className="rounded-md bg-primaryWhite text-purple-700">Sale 70%</button>

                <h1 className="text-2xl text-gray-200 font-bold">An Industrial Take on Streetwear</h1>
                <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <button className="flex gap-1 rounded-sm text-lg ring-1 ring-slate-800 bg-gray-900 py-3 px-5 text-white font-semibold">
                    <BsCart2 size={24} />
                    <p className="text-primaryWhite whitespace-pre leading-4">

                        {btnText}
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