import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Link from "next/link"

const MobileNavbar = () => {
    
    return (
        <div>
            <div className='w-full px-6 py4 bg-gray-100'>
                {
                    NavbarArray.map((item: NavbarItemType, index: number) => (
                        <li key={index} className="py-2 px-3 hover:bg-purple-600 rounded-md duration-300">
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                          
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default MobileNavbar