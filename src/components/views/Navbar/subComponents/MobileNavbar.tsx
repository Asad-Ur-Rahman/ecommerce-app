import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Expand from "./Expand"

const MobileNavbar = () => {

    return (
        <div>
            <div className='w-full px-6 py-4 bg-gray-100'>
                {
                    NavbarArray.map((item: NavbarItemType, index: number) => (
                        <Expand item={item} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default MobileNavbar