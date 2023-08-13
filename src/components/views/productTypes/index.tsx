import React from 'react'

const ProductsTypes = () => {
  return (
    <div className='py-16 px-2'>
      <div className='text-center border space-y-3'>

        <p className='text-blue-800 text-sm'>PROMOTIONS</p>
        <h3 className='text-3xl text-gray-800 font-semibold'>Our Promotions Events</h3>

      </div>

      <div className=' grid grid-cols-4'>
        <div className='w-full row-span-2 h-15 bg-gray-400'></div>
        <div className='w-full h-12 bg-purple-400'></div>
        <div className='w-full h-12 bg-gray-800'></div>
        <div className='w-full h-12 bg-yellow-500'></div>
        <div className='w-full h-12 bg-gray-300'></div>
        <div className='w-full h-12 bg-gray-900'></div>
      </div>

    </div>

  )
}

export default ProductsTypes