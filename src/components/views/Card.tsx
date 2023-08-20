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
    
    // console.log(urlFor(singleProductData.image[0]).width(500).url())
    return (
        <div className=' border-4'>
            <div>
                <Image src={urlFor(singleProductData.image[0]).width(500).url()} alt='' width={500} height={500} />
            </div>
        </div>
    )
}

export default Card