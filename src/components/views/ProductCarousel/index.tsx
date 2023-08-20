import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { FC } from "react"
import Card from "../Card"

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {


  return (
    <div className="grid">
      {
        ProductData.map((item: oneProductType, index: number)=> (

          <Card singleProductData={ item } />
        ))
      }
    </div>
  )
}

export default ProductCarousel