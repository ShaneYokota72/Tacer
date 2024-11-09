"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className="relative">
            {isMobile ? (
                <div className="w-full bg-white">
                    <div className="w-full flex py-4 px-6 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Image src="/icon.png" alt="Logo" width={48} height={48} className="rounded-lg" />
                            <h1 className="text-3xl font-semibold text-dark-tacer">Tacer</h1>
                        </div>
                        {isOpen ? (
                            <X size={32} className="text-dark-tacer" onClick={() => setIsOpen(!isOpen)} />
                        ) : (
                            <Menu size={32} className="text-dark-tacer" onClick={() => setIsOpen(!isOpen)} />
                        )}
                    </div>
                    {isOpen && (
                        <div className="w-full border-t shadow-lg">
                            <div className="flex flex-col gap-4 items-center bg-white py-8">
                                <Link href="/" className="font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out" onClick={() => setIsOpen(!isOpen)}>
                                    Home
                                </Link>
                                <Link href="/privacy" className="font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out" onClick={() => setIsOpen(!isOpen)}>
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out" onClick={() => setIsOpen(!isOpen)}>
                                    Terms of Service
                                </Link>
                                <Button
                                    link="https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf?hl=en-US"
                                    message="Try Now"
                                />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full flex py-8 px-20 items-center justify-between drop-shadow-lg bg-white">
                    <div className="flex items-center gap-4">
                        <Image src="/icon.png" alt="Logo" width={48} height={48} className="rounded-lg" />
                        <h1 className="text-3xl font-semibold text-dark-tacer">Tacer</h1>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/" className="font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                            Home
                        </Link>
                        <Link href="/privacy" className="font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="font-light bg-left-bottom bg-gradient-to-r from-tacer to-tacer bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                            Terms of Service
                        </Link>
                    </div>
                    <Button
                        link="https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf?hl=en-US"
                        message="Try Now"
                    />
                </div>
            )}
        </nav>
    )
}