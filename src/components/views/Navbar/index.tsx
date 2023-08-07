import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Image from "next/image"
import Link from "next/link"
import { BiSearch } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineChevronDown } from "react-icons/hi"

import DropDown from "./subComponents/DropDown";
import MobileNavbar from "./subComponents/MobileNavbar";

const Navbar = () => {
    return (
        <div className="py-6 flex justify-between items-center space-x-12">
            <div className="w-36 flex-shrink-0">
                <Image width={500} height={500} src={"/logo.webp"} alt="logo" />
            </div>
            <div className="hidden lg:flex justify-between items-center w-full">
                <ul className="flex space-x-5 font-medium text-lg text-purple-950">
                    {NavbarArray.map((item: NavbarItemType, index: number) => (
                        <li className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                            {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                            {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}>
                                <DropDown item={item} />
                            </div>}
                        </li>
                    ))}
                </ul>

                <div className="border flex items-center text-gray-600 px-3 rounded-md">
                    <BiSearch />
                    <input
                        type="text"
                        className="pl-1 pr-5 py-1 w-80 flex-grow"
                        placeholder="Search in our store"
                    />
                </div>

                <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-sm font-light rounded-full flex justify-center items-center">5</div>
                    <BsCart2 size={24} />
                </div>
            </div>
            <MobileNavbar />
        </div>
    )
}

export default Navbar