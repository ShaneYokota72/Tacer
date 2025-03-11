import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='w-full py-8 flex flex-col gap-6 items-center text-xs bg-subtle'>
            <div className='w-fit flex items-center gap-5'>
                <Link 
                    href='/' className='hover:cursor-pointer'
                >
                    Home
                </Link>
                <Link 
                    href='/privacy' className='hover:cursor-pointer'
                >
                    Privacy Policy
                </Link>
                <Link 
                    href='/terms' 
                    className='hover:cursor-pointer'
                >
                    Terms of Service
                </Link>
                <Link 
                    href='https://x.com/tacer_app' 
                    target='blank'
                    className='hover:cursor-pointer'
                >
                    <Image
                        src='/XIcon.svg'
                        alt='X Icon'
                        width={16}
                        height={16}
                        className='w-auto h-4'
                    />
                </Link>
            </div>
            <p>@2025 ALL RIGHTS REVERSED</p>
        </footer>
    )
}