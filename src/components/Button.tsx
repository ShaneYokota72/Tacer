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
    className,
}: ButtonProps) {
    return (
        <Link href={link} className={`rounded-full w-36 h-14 bg-black flex items-center justify-center text-white border-2 border-black hover:border-tacer ${className}`}>
            {message}
        </Link>
    )
}
