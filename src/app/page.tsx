'use client'

import React from 'react'
import ChromeWebStoreBadge from '@/components/ChromeWebStoreBadge'
import WalkThroughSection from '@/components/WalkThroughSection'
import HeroSection from '@/components/HeroSection'

export default function page() {
    return (
        <div className='bg-[#F8ECFD] pt-4'>
            <HeroSection />
            <WalkThroughSection />
            <ChromeWebStoreBadge />
        </div>
    )
}