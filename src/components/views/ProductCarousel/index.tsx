"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { Component, FC, ReactNode } from "react"
import Card from "../Card"

// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {


//   return (
//     <div className="flex">
//       {
//         ProductData.map((item: oneProductType, index: number)=> (

//           <Card singleProductData={ item } key={index}/>
//         ))
//       }
//     </div>
//   )
// }

// export default ProductCarousel

export default class ProductCarousel extends Component<{ ProductData: Array<oneProductType> }> {
  render(): ReactNode {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {
          this.props.ProductData.map((item: oneProductType, index: number) => (

            <Card singleProductData={item} key={index} />
          ))
        }
      </Slider>
    );
  }
}