import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='w-4/5 mt-8 mx-auto'>
      <div className='flex pt-4 pb-10'>
        <div className='w-1/2 px-4 md:pl-16'>
          <div className='flex items-center gap-4'>
              <Image src='/icon.png' alt='Logo' width={48} height={48} className='rounded-lg' />
              <h4 className='text-3xl font-semibold text-dark-tacer'>Tacer</h4>
          </div>
          <p className='mt-8'>One click job application tracker!</p>
        </div>
        <div className='w-1/2 px-4 md:pl-16'>
          <h3 className='text-xl font-semibold'>Pages</h3>
          <div className='mt-6 flex flex-col gap-3'>
            <Link href='/' className='w-fit font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out'>Home</Link>
            <Link href='/privacy' className='w-fit font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out'>Privacy Policy</Link>
            <Link href='/terms' className='w-fit font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className='border-t-[1px] border-black mb-4'>
        <h5 className='text-sm text-center my-2'>@2024 ALL RIGHTS REVERSED</h5>
      </div>
    </div>
  )
}
