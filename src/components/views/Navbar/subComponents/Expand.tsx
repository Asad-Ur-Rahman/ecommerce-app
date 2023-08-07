
import Link from "next/link";
import { FC, useState } from "react";
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"

import { HiOutlineChevronDown } from "react-icons/hi"


const Expand: FC<{ item: NavbarItemType, index: number}> = ({ item, index}) => {
    const [isExpended, setExpended] = useState(false)
    return (
        <li className={`${isExpended ? 'h-48' : 'h-12'} list-none`}>
            <div className="py-2 px-3 flex items-center justify-between rounded-md duration-300 hover:bg-purple-600" onClick={() => setExpended(!isExpended)}>

                <Link href={item.href}>
                    {item.label}
                </Link>
                {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
            </div>
            <div className="space-y-1 mt-2 flex flex-col">

                {
                    isExpended &&
                    item.dropDownData?.map((subItem: NavbarItemType, index: number) => (
                        <Link key={index} href={subItem.href} className="hover:bg-gray-50 duration-300 px-5 py-1 rounded-md">{subItem.label}
                        </Link>
                    ))}
            </div>


        </li>

    )
}



export default Expand