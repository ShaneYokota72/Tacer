import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ChangeLogEntry, changeLog } from '@/utils/changeLog'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ChangeLogItem from '@/components/ChangeLogItem';

export default async function Page({
    params,
}: {
    params: Promise<{ version: string }>
}) {
    const { version } = await params
    const changeLogEntry: ChangeLogEntry = changeLog[version]
    
    return (
        <>
            <div className='max-w-2xl mx-auto mt-20 p-8 bg-[#f8f8f8] rounded-lg shadow-md'>
                <div className='flex gap-6 mb-4'>
                    <Image
                        src="/icon.svg"
                        alt="Logo"
                        width={52}
                        height={52}
                        className="w-12 h-12 rounded-full drop-shadow-lg"
                    />
                    <div>
                    <h3 className='text-lg font-semibold text-[#171717]'>Version {version}</h3>
                    <p className='text-sm font-medium text-[#5c5c5c]'>Release Date: {changeLogEntry.date}</p>
                    </div>
                </div>
                {changeLogEntry.changes.map((item, index) => (
                    <ChangeLogItem key={index} item={item} />
                ))}
            </div>
            <div className='max-w-2xl mx-auto flex justify-between items-center mt-6'>
                {
                    changeLogEntry.previous &&
                    <Link
                        href={`/changelog/${changeLogEntry.previous}`}
                        className='p-4 bg-[#fff] rounded-lg border border-[#ddbedf96] hover:bg-[#ddbedf96] min-w-40 mr-auto'
                    >
                        <div className='flex items-center'>
                            <ChevronLeft className='w-4 h-4'/>
                            <p className='text-sm text-[#676767]'>Previous</p>
                        </div>
                        <p>{changeLogEntry.previous}</p>
                    </Link>
                }
                {
                    changeLogEntry.next &&
                    <Link
                        href={`/changelog/${changeLogEntry.next}`}
                        className='p-4 bg-[#fff] rounded-lg border border-[#ddbedf96] hover:bg-[#ddbedf96] min-w-40 ml-auto'
                    >
                        <div className='flex items-center w-fit ml-auto'>
                            <p className='text-sm text-[#676767]'>Next</p>
                            <ChevronRight className='w-4 h-4'/>
                        </div>
                        <p className='w-fit ml-auto'>{changeLogEntry.next}</p>
                    </Link>
                }
            </div>
        </>
    )
}