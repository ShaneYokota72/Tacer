import React from 'react'
import { ElementDetails } from '@/utils/changeLog'

export default function ChangeLogItem({ item }: { item: ElementDetails }) {
    switch (item.type) {
        case 'heading':
          return <h3 className="text-xl font-bold mb-3">{item.content}</h3>;
          
        case 'subheading':
          return <h4 className="text-lg font-semibold mb-3">{item.content}</h4>;
          
        case 'normal':
          return <p className="mb-2 text-[#5c5c5c]">{item.content}</p>;
          
        case 'detail':
          return <p className="text-xs text-[#8b8b8b] mb-2">{item.content}</p>;
          
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
}
