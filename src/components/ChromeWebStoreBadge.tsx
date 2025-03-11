import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function ChromeWebStoreBadge() {
    return (
        <div className='w-full flex justify-center py-8'>
            <div className='flex flex-col items-center gap-3'>
                <Link 
                    className='bg-black px-5 py-3 rounded-[12px] flex gap-[6px] items-center justify-center w-fit'
                    href="https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf"
                >
                    <Image
                        src={'ChromeIcon.svg'}
                        alt='Chrome Icon'
                        width={25}
                        height={25}
                    />
                    <p className='text-[#F9FAFB]'>Chrome Web Store</p>
                </Link>
                <p className='text-[#808080]'>No hidden fees. All free.</p>
            </div>
        </div>
    )
}
