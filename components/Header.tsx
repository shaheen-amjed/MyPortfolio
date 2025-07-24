import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HeaderIn{
    act: number;
}

export default function Header({ act }: HeaderIn) {



  useGSAP(() => {
    gsap.from('.header', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.1
    })
  }, [])

  

  return (
    <div className="p-4 mx-auto header">
      <div className="flex items-center gap-6 p-6 border-2 border-black shadow-lg mobile-header bg-white/10 backdrop-blur-md rounded-2xl">
        {/* Profile Image */}
        <img
          src="/github-pfp.webp"
          alt="Profile"
          className="w-24 h-24 border-2 border-black rounded-lg"
        />

        {/* Name and Role */}
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-2xl font-bold">Shaheen Amjed</h1>
          <p className="text-sm text-white/80">16yo Full Stack Developer</p>
        </div>

        {/* Levels */}
        <div className="flex flex-col ml-auto text-right text-white">
          <span className="text-lg font-semibold level">Developer Level: {act}</span>
        </div>
      </div>
    </div>
  )
}
