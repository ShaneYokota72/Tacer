import React from 'react'
import Image from 'next/image'
import WalkThrough from './WalkThrough'

const WALKTHROUGH_DATA = [
    {
        icon: '/LoginIcon.svg',
        iconClassname: 'drop-shadow-tacerPurple',
        title: 'Login',
        message: ['Launch Tacer from the toolbar', 'Login via google OAuth'],
        mediaPath: '/TacerLoginImage.png',
        alt: 'Tacer Login Image'
    },
    {
        icon: '/icon.svg',
        iconClassname: 'drop-shadow-tacerPurple',
        title: 'Auto Log Applications',
        message: ['Click on [TACER_ICON] to log your applications'],
        mediaPath: '/TacerSave.mp4',
        alt: 'Tacer Icon Click Video'
    },
    {
        icon: '/TacerContinueIcon.svg',
        iconClassname: 'w-[148px] h-auto',
        title: 'Continue Your Job Search',
        message: ['See all application on extension popup, chart, and spreadsheet.','All applications are auto-tracked and updated every 24 hours!'],
        mediaPath: '/TacerContinueYourJobSearch.png',
        mediaClassname: 'px-8 lg:px-12 xl:px-18',
        alt: 'Tacer Popup Image'
    },
]

export default function WalkThroughSection() {
    return (
        <div className='-mt-[100vh] min-h-fit w-full md:flex'>
            <div className='w-full md:w-1/2'>
                {
                    WALKTHROUGH_DATA.map((walkthrough, index) => (
                        <WalkThrough
                            key={index}
                            icon={walkthrough.icon}
                            iconClassname={walkthrough.iconClassname}
                            title={walkthrough.title}
                            message={walkthrough.message}
                            mediaPath={walkthrough.mediaPath}
                            mediaClassname={walkthrough.mediaClassname}
                            alt={walkthrough.alt}
                        />
                    ))
                }
            </div>
            <div className='hidden md:block md:relative w-full md:w-1/2 [&>*]:md:w-3/4 [&>*]:lg:w-[70%] [&>*]:xl:w-2/3 [&>*]:mr-auto'>
                <div className='sticky top-0 h-screen flex flex-col justify-between z-20'>
                    <div className='relative flex flex-col justify-between h-full'>
                        <div className='top-0 w-full h-96 lg:h-48 xl:h-16 bg-subtle'></div>
                        <div className='relative flex flex-col h-full justify-between'>
                            <div className='flex justify-between'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="rotate-0"><path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="#F8ECFD"></path></svg>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="rotate-90"><path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="#F8ECFD"></path></svg>
                            </div>
                            <div className='flex justify-between'>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="rotate-[270deg]"><path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="#F8ECFD"></path></svg>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="rotate-180"><path d="M16 0C7.163 0 0 7.163 0 16V0Z" fill="#F8ECFD"></path></svg>
                            </div>
                        </div>
                        <div className='bottom-0 w-full h-96 lg:h-48 xl:h-16 bg-subtle'></div>
                    </div>
                </div>
                <div className='absolute inset-0'>
                    <Image
                        src='/MacWallpaper.jpg'
                        alt='Default Mac Wallpaper'
                        width={1420}
                        height={3073}
                        className='sticky top-0 h-screen'
                    />
                </div>
            </div>
        </div>
    )
}
