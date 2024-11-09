"use client"
import Button from "@/components/Button";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="py-24 w-full bg-gradient-to-b from-[#F8F8F8] via-[#CC7AF3] to-[#d9b7e913]">
      <div className="w-[90%] md:w-9/12 mx-auto flex flex-col justify-center items-center [&>*]:text-center">
        <h2 className="text-3xl leading-10 md:text-6xl md:leading-[90px]">
          One Click Job Application Tracker 
          <br />
          Optimize job tracking with 
          <span className="ml-4 md:ml-6 items-center gap-2 inline-flex text-tacer align-middle">
            <Image 
              src="/icon.png" 
              alt="Logo" 
              width={36} 
              height={36} 
              className="md:w-14 md:h-14 rounded-md"
            />
            <span className="align-middle font-semibold">Tacer</span>
          </span>
        </h2>

        <h5 className="my-10">
          No more manual input and update to your google spreadsheet with Tacer. 
          <br/>
          Optimize your job search journey with Tacer
        </h5>

        <Button link="https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf?hl=en-US" message="Try Now"/>

        <div className="relative w-full md:w-4/5 mt-10 group">
          <video 
            ref={videoRef}
            muted 
            loop 
            playsInline
            onClick={togglePlay}
            className="w-full h-auto object-cover rounded-2xl cursor-pointer"
            poster="/TacerThumbnail.jpg"
          >
            <source src="/TacerDemoSocialMedia.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={togglePlay}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}