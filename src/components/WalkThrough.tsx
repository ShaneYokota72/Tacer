import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface WalkThroughProps {
    key: number
    icon: string
    iconClassname?: string
    title: string
    message: string[]
    mediaPath: string
    mediaClassname?: string
    alt: string
}

export default function WalkThrough({
    key,
    icon,
    iconClassname,
    title,
    message,
    mediaPath,
    mediaClassname,
    alt
}: WalkThroughProps) {
    return (
        <div className='relative w-full py-28 md:py-0 md:w-3/4 lg:w-[70%] xl:w-2/3 min-h-screen md:ml-auto md:flex md:items-center' key={key}>
            <div className='px-12 mb-12 md:pl-0 md:mb-0 md:pr-12 lg:pr-32 xl:pr-44'>
                <Image src={icon} alt='Tacer Icon' width={72} height={72} className={ clsx('w-18 h-18 rounded-[14px]', iconClassname)}/>
                <h3 className='mt-4 md:mt-6 text-3xl font-semibold'>{title}</h3>
                <p className='mt-8 md:mt-16 text-xl font-medium'>
                    {
                        message.map((msg, idx) => {
                            const includesTacerIcon = msg.includes('[TACER_ICON]')
                            return(
                                <React.Fragment key={idx}>
                                    {
                                        includesTacerIcon ? (
                                            <>
                                                {msg.split('[TACER_ICON]')[0]}
                                                <span className='inline-flex items-center align-middle'>
                                                    <Image 
                                                        src="/icon.svg" 
                                                        alt="Logo" 
                                                        width={36} 
                                                        height={36} 
                                                        className="md:w-8 md:h-8 rounded-md align-middle drop-shadow-lg"
                                                    />
                                                </span>
                                                {msg.split('[TACER_ICON]')[1]}
                                            </>
                                        ) : (
                                            msg
                                        )
                                    }
                                    {idx !== message.length - 1 && 
                                        <>
                                            <br />
                                            <br />
                                        </>
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </p>
            </div>
            {
                mediaPath.endsWith('.mp4') ? (
                    <video
                        src={mediaPath}
                        autoPlay
                        loop
                        muted
                        className={clsx('hidden md:block md:absolute md:left-full w-full px-14 lg:px-20 xl:px-28 z-10', mediaClassname)}
                    />
                ) : (
                    <Image
                        src={mediaPath}
                        alt={alt}
                        width={288}
                        height={497}
                        className={clsx('hidden md:block md:absolute md:left-full w-full px-14 lg:px-20 xl:px-28 z-10', mediaClassname)}
                    />
                )
            }
            <div className={clsx('bg-[url("../../public/MacWallpaper.jpg")] my-8 mx-12 p-12 rounded-xl md:m-0 md:bg-none md:p-0 md:self-start md:hidden', title === 'Auto Log Applications' && 'py-32 md:py-0')}>
                {
                    mediaPath.endsWith('.mp4') ? (
                        <video
                            src={mediaPath}
                            autoPlay
                            loop
                            muted
                            className={clsx('md:absolute md:left-full w-full px-14 lg:px-20 xl:px-28 z-10', mediaClassname)}
                        />
                    ) : (
                        <Image
                            src={mediaPath}
                            alt={alt}
                            width={288}
                            height={497}
                            className={clsx('md:absolute md:left-full w-full px-14 lg:px-20 xl:px-28 z-10', mediaClassname)}
                        />
                    )
                }
            </div>
        </div>
    )
}
