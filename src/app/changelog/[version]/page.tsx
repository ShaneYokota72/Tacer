import React from 'react'
import { ElementDetails, ChangeLogEntry, changeLog } from '@/utils/changeLog'
import Image from 'next/image'
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ChangeItemRenderer: React.FC<{ item: ElementDetails }> = ({ item }) => {
    switch (item.type) {
      case 'heading':
        return <h3 className="text-xl font-bold mb-3">{item.content}</h3>;
        
      case 'subheading':
        return <h4 className="text-lg font-semibold mb-3">{item.content}</h4>;
        
      case 'normal':
        return <p className="mb-2 text-[#5c5c5c]">{item.content}</p>;
        
      case 'detail':
        return <p className="text-sm text-[#8b8b8b] mb-2">{item.content}</p>;
        
      case 'emphasis':
        return <p className="text-base font-semibold mb-2">{item.content}</p>;
        
      case 'video':
        return (
            <div className="mb-4 mt-2">
                <video 
                    className="rounded-lg shadow-md w-full h-auto" 
                    src={item.url as string} 
                    title={item.content} 
                    autoPlay
                    muted
                    loop
                />
            </div>
        );
        
      case 'image':
        return (
          <div className="mb-4">
            <img 
              src={item.url as string} 
              alt={item.alt} 
              className="rounded-lg shadow-md max-w-full"
            />
            <p className="text-sm text-gray-600 mt-1">{item.content}</p>
          </div>
        );
        
      case 'images':
        const urls = item.urls
        const alts = item.alts
        
        return (
          <div className="mb-4">
            <p className="mb-2 font-medium">{item.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {urls?.map((url, idx) => (
                <img 
                  key={idx}
                  src={url} 
                  alt={alts?.[idx] || `Image ${idx + 1}`} 
                  className="rounded-lg shadow-md max-w-full"
                />
              ))}
            </div>
          </div>
        );
        
      case 'link':
        return (
          <div className="mb-3">
            <a 
              href={item.url as string} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {item.content}
            </a>
          </div>
        );
        
      default:
        return <p>{item.content}</p>;
    }
  };

export default async function Page({
    params,
}: {
    params: Promise<{ version: string }>
}) {
    const { version } = await params
    const changeLogEntry: ChangeLogEntry = changeLog[version]
    return (
        <>
            <div className='max-w-2xl mx-auto mt-20 p-8 bg-[#f4f4f4] rounded-lg shadow-md'>
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
                    <ChangeItemRenderer key={index} item={item} />
                ))}
            </div>
            <div className='max-w-2xl mx-auto flex justify-between items-center mt-6'>
                {
                    changeLogEntry.previous &&
                    <Link
                        href={`/changelog/${changeLogEntry.previous}`}
                        className='p-4 bg-[#f4f4f4] rounded-lg border border-[#38383847] hover:bg-[#eee] min-w-40'
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
                        className='p-4 bg-[#f4f4f4] rounded-lg border border-[#38383847] hover:bg-[#eee] min-w-40'
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