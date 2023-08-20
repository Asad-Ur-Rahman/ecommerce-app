"use client"

import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { FC } from "react"

const ProductCarousel: FC<{ProductData: Array<oneProductType>}> = ({ProductData}) => {
  console.log(ProductData)
  return (
    <div>{ProductData[0].productName}</div>
  )
}

export default ProductCarousel