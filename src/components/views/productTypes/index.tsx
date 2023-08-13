import { event1, event2 } from "@/components/assets"
import Image from "next/image"


const ProductsTypes = () => {
  return (
    <div className='py-16 px-2'>
      <div className='text-center space-y-3'>

        <p className='text-blue-800 text-sm'>PROMOTIONS</p>
        <h3 className='text-3xl text-gray-800 font-semibold'>Our Promotions Events</h3>

      </div>

      <div className=' grid grid-cols-4 gap-5 px-2 text-gray-800'>
        <div className='w-full flex col-span-2 bg-cat1 px-12'>
          <div className='max-w-[13rem] py-8'>
            <h4 className='text-3xl font-extrabold'>GET UP TO 60%</h4>
            <p className='text-xl'>For the summer season</p>
          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="summer season" src={event1} />
          </div>
        </div>

        <div className='w-full row-span-2 h-full bg-cat3'>
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p> <del>$100.00</del> <strong>$75.00</strong></p>
            </div>
          <div className="w-62">
            <Image width={1000} height={1000} src={event2} alt="sweaters" />
          </div>
        </div>
        <div className='w-full row-span-2 h-full bg-cat4'></div>
        <div className='w-full col-span-2 h-28 bg-cat2'></div>
      </div>

    </div>

  )
}

export default ProductsTypes