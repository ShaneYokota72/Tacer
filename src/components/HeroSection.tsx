'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger)

    const browswerWrapper = useRef<HTMLDivElement>(null)
    const innerWrapper = useRef<HTMLDivElement>(null)
    const applicationImage = useRef<HTMLImageElement>(null)
    const tacerIcon = useRef<HTMLImageElement>(null)

    useGSAP(() => {

        if (!browswerWrapper.current || !innerWrapper.current || !applicationImage.current || !tacerIcon.current) {
            console.error('One or more refs are missing')
            return
        }
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: browswerWrapper.current,
                start: 'top top',
                end: '+=1700',
                scrub: 1,
                pin: browswerWrapper.current,
                onLeave: () => {
                    // set the browserWrapper to 0 height and width and overflow hidden
                    gsap.set(browswerWrapper.current, {
                        height: 0,
                        width: 0,
                        overflow: 'hidden'
                    })
                }
            }
        })

        const tacerIconRect = tacerIcon.current.getBoundingClientRect()
        const applicationImageRect = applicationImage.current.getBoundingClientRect()

        const xPercent = 100*(applicationImageRect.width + tacerIconRect.width/10)/applicationImageRect.width
        const yPercent = 100*(176+ tacerIconRect.height/3)/applicationImageRect.height

        tl.to(innerWrapper.current,{
            duration: 5,
            opacity: 0,
            ease: 'power4',
            scale: (applicationImageRect.width-213)/tacerIconRect.height,
            transformOrigin: `${xPercent}% ${yPercent}%`
        },0)
    })

    return (
        <>
            <div className='relative flex justify-between items-center h-fit text-text font-semibold'>
                <div className='mx-auto overflow-hidden p-[1.5px] relative rounded-full bg-gradient-to-r from-[#35293D] to-[#582778]'>
                    <div style={{"offsetPath": "rect(0% auto 100% auto)"}} className='animate-move bg-gradient-radial from-[#f0cbff] to-[#35293D] inset-0 w-[52px] h-[52px] absolute rotate-45'/>
                    <Link href={"/changelog/0.0.15"} className='inline-block z-10 relative w-fit h-fit text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[#35293D] to-[#582778]'>🔥 V 0.0.15 Out Now</Link>
                </div>
                
                <Link href="https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf" target='blank' className="hidden md:flex items-center gap-2 absolute top-0 right-8 w-fit px-4 py-2 text-sm rounded-[8px] bg-gradient-to-r from-[#35293D] to-[#582778] drop-shadow-tacerPurple hover:cursor-pointer group">
                    <span className='ml-2 mr-8'>Get Started</span>
                    <div className='absolute right-2 flex items-center justify-center p-1 w-6 bg-white rounded-md group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out'>
                        <ArrowRight className='w-4 h-4' color='#582778'/>
                    </div>
                </Link>
            </div>
            <Image
                src={'/icon.svg'}
                alt="Tacer Icon"
                width={48}
                height={48}
                className='mx-auto w-20 h-20 md:w-36 md:h-36 rounded-[8px] drop-shadow-xl mt-10'
            />
            <h2 className="text-3xl md:text-6xl font-semibold md:leading-[77px] tracking-tighter text-center mt-12 w-4/5 mx-auto">
                One Click Job Application Tracker 
                <br />
                Optimize job tracking with 
                <span className="ml-4 md:ml-6 items-center gap-2 inline-flex text-tacer align-middle">
                    <Image 
                    src="/icon.svg" 
                    alt="Logo" 
                    width={36} 
                    height={36} 
                    className="md:w-14 md:h-14 rounded-md"
                    />
                    <span className="align-middle font-semibold">Tacer</span>
                </span>
            </h2>
            
            <div className='relative w-full h-screen py-20' ref={browswerWrapper}>
                <div className='relative w-11/12 md:w-3/4 mx-auto z-10' ref={innerWrapper}>
                    <Image
                        src={'/DreamJobApplication.png'}
                        alt="Roblox Application"
                        width={1920}
                        height={1080}
                        ref={applicationImage}
                        className='top-0 left-0 w-full h-auto'
                    />
                    <Image
                        src="/icon.svg"
                        alt="Tacer Icon"
                        width={48}
                        height={48}
                        ref={tacerIcon}
                        className='absolute top-44 right-0 w-12 h-12 rounded-[8px]'
                    />
                </div>
            </div>
        </>
    )
}
