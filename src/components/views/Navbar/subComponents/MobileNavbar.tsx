import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Link from "next/link"
import { useState } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"

const MobileNavbar = () => {
    const [isExpended, setisExpended] = useState(false)

    return (
        <div>
            <div className='w-full px-6 py-4 bg-gray-100'>
                {
                    NavbarArray.map((item: NavbarItemType, index: number) => (
                        <li key={index} className={`h-12 items-center py-2 px-3 hover:bg-purple-600 rounded-md duration-300 list-none`}>
                            <div className="flex justify-between">

                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                                {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                            </div>
                            <div>
                                {
                                    isExpended &&
                                    item.dropDownData?.map((subItem: NavbarItemType, index: number) => (
                                        <div>{subItem.label}</div>
                                    ))
                                }
                            </div>

                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default MobileNavbar