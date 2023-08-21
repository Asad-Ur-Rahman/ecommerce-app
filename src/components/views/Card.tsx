import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../sanity/lib/client';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}

const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
    return (
        <div className='max-w-sm border-4 min-w-[24rem] space-y-3 hover:scale-110 duration-300'>
            <div className='relative w-full'>
                <div className='absolute inset-0 z-10'/>
                <Image src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt} width={1000} height={1000} />
            </div>
            <div className='space-y-1 text-gray-600 font-semibold text-lg '>
                <h6>{singleProductData.productName}</h6>
                
                <p>${singleProductData.price}</p>
                
            </div>
        </div>
    )
}

export default Card