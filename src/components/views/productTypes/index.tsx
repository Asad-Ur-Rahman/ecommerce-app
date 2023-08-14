import { event1, event2, event3 } from "@/components/assets"
import Image from "next/image"


const ProductsTypes = () => {
  return (
    <div className='py-16 px-2 space-y-5'>
      <div className='text-center space-y-3'>

        <p className='text-blue-800 text-sm'>PROMOTIONS</p>
        <h3 className='text-3xl text-gray-800 font-semibold'>Our Promotions Events</h3>

      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 text-gray-800'>

        <div className='w-full flex flex-col items-center justify-between md:flex-row col-span-1 md:col-span-2 bg-cat1 px-12'>
          <div className='max-w-[13rem] py-8'>
            <h4 className='text-3xl font-extrabold'>GET UP TO 60%</h4>
            <p className='text-xl'>For the summer season</p>
          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="summer season" src={event1} />
          </div>
        </div>

        <div className='w-full row-span-1 md:row-span-2 flex flex-col md:flex-row items-center h-full bg-cat3'>
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className=" text-lg"> <del>$100.00</del> <strong>$75.00</strong></p>
          </div>
          <div className="w-62">
            <Image width={1000} height={1000} src={event2} alt="sweaters" />
          </div>
        </div>

        <div className='w-full row-span-1 md:row-span-2 flex flex-col md:flex-row items-center h-full bg-cat4'>
          <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p className=" text-lg"> <del>$225.00</del> <strong>$190.00</strong></p>
          </div>
          <div className="w-62">
            <Image width={1000} height={1000} src={event3} alt="sweaters" />
          </div>
        </div>

        <div className='py-4 w-full col-auto md:col-span-2 bg-cat2 flex flex-col justify-center items-center text-white space-y-3'>
          <h5 className="font-extrabold text-4xl">GET 30% Off</h5>
          <p>USE PROMO CODE</p>
          <button
          aria-label="Redirect user to Dine Week End sale"
          className="py-1 px-8 text-lg font-medium bg-[#474747] rounded-lg tracking-widest">
            DINEWEEKENDSALE
            </button>
        </div>
      </div>

    </div>

  )
}

export default ProductsTypes