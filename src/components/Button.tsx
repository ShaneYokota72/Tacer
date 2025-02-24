import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    link: string;
    message: string;
    className?: string;
}

export default function Button({
    link,
    message,
}: ButtonProps) {
    return (
        <Link href={link} className='group relative w-36 h-14 inline-flex overflow-hidden rounded-full p-[2px]'>
            <span
                className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#7D1BAC_50%,#CC7AF3_100%)] opacity-70 `}
            />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 py-2 backdrop-blur-3xl bg-neutral-950 text-neutral-100">{message}</span>
        </Link>
    )
}
