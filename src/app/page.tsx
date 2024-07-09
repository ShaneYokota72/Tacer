import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center mt-8 w-full h-full">
      <div className="w-1/2 p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tacer - Your Job Application Tracker</h1>
        <p className="text-lg leading-relaxed">
          Tacer is your ultimate companion in the job search journey. Simplify and organize your job applications effortlessly with just a click. Track your applications, get daily updates, and stay on top of your job hunt with Tacer’s intuitive features.
        </p>
        <div className="mt-4">
          <a href="#" className="bg-[#ba8cd4] hover:bg-[#CC7AF3] text-white py-2 px-4 rounded-lg text-lg font-semibold">
            Get it in Chrome Web Store
          </a>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/popup.png"
          alt="Hero"
          width={290}
          height={530}
        />
      </div>
    </div>
  );
}
