import React from 'react'

const ProductsTypes = () => {
  return (
    <div className='py-16 px-2'>
      <div className='text-center space-y-3'>

        <p className='text-blue-800 text-sm'>PROMOTIONS</p>
        <h3 className='text-3xl text-gray-800 font-semibold'>Our Promotions Events</h3>

      </div>

      <div className=' grid grid-cols-4 gap-5 px-2'>
        <div className='w-full col-span-2 h-28 bg-cat1'>
          <div></div>
          <div></div>
        </div>
        <div className='w-full row-span-2 h-full bg-cat2'></div>
        <div className='w-full row-span-2 h-full bg-cat3'></div>
        <div className='w-full col-span-2 h-28 bg-cat4'></div>
      </div>

    </div>

  )
}

export default ProductsTypes