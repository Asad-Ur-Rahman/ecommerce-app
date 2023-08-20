import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import Image from 'next/image'

const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
    console.log(singleProductData.image)
  return (
    <div className=' border-4'>
        <div>
            <Image src='/Logo.webp' alt='' width={500} height={500}/>
        </div>
    </div>
  )
}

export default Card