interface HeaderIn{
    act: number;
    cont: number;
}

export default function Header({ act, cont }: HeaderIn) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center mobile-header gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
        {/* Profile Image */}
        <img
          src="/github-pfp.webp"
          alt="Profile"
          className="w-24 h-24 rounded-lg border border-white/30"
        />

        {/* Name and Role */}
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-2xl font-bold">Shaheen Amjed</h1>
          <p className="text-sm text-white/80">16yo Full Stack Developer</p>
        </div>

        {/* Levels */}
        <div className="ml-auto flex flex-col text-right text-white">
          <span className="text-lg level font-semibold">Activity Level: {act}</span>
          <span className="text-lg level font-semibold">Contribution Level: {cont}</span>
        </div>
      </div>
    </div>
  )
}
