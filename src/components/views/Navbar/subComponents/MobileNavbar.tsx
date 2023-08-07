"use client"

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const MobileNavbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)
    return (
        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ?
                <div className="flex lg:hidden">
                    <GiHamburgerMenu size={29} />
                </div>
                :
                <div className="flex lg:hidden">
                    <IoMdClose size={25} />
                </div>
            }
            {
                isNavbarOpen && <div className='w-full px-6 py4 bg-grey-100'>hi</div>
            }
        </div>
    )
}

export default MobileNavbar