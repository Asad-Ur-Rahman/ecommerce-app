import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { FC } from "react"
import Card from "../Card"

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {
  console.log(ProductData)
  return (
    <div>
      {
        ProductData.map((item: oneProductType, index: number)=> (

          <Card singleProductData={ item } />
        ))
      }
    </div>
  )
}

export default ProductCarousel