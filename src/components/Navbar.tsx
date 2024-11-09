import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  return (
    <div className='w-full flex py-8 px-20 items-center justify-between drop-shadow-lg'>
        <div className='flex items-center gap-4'>
            <Image src='/icon.png' alt='Logo' width={48} height={48} className='rounded-lg' />
            <h1 className='text-3xl font-semibold text-dark-tacer'>Tacer</h1>
        </div>
        <div className='flex gap-6'>
            <Link href='/' className='font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out'>Home</Link>
            <Link href='/privacy' className='font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out'>Privacy Policy</Link>
            <Link href='/terms' className='font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out'>Terms of Service</Link>
        </div>
        <Button link='https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf?hl=en-US' message='Try Now' />
    </div>
  )
}
