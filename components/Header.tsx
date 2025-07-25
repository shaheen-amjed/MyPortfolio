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
      duration: 1
    })
  }, [])


  return (
    <div className="w-[60vw] header  mx-auto p-4">
      <div className="flex  items-center mobile-header gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border-2 border-black">
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
        <div className="ml-auto flex flex-col text-right text-white">
          <span className="text-lg level font-semibold">Developer Level: {act}</span>
        </div>
      </div>
    </div>
  )
}
