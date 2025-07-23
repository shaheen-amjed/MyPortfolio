import Button from "./Link";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="flex justify-center items-start gap-4 px-4 flex-wrap">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-[600px]">
        <img
          src="/github.webp"
          alt="banner"
          className="w-full border-2 border-black rounded-lg"
        />
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
          <img src="/flower.webp" className="w-[100px]" />

          <div>
            <h1 className="font-bold text-lg text-white mb-2">About Me:</h1>
            <p className="text-white/80 leading-relaxed">
              Hey! I’m Shaheen, a Sudanese 16yo self-taught and passionate
              Full-Stack Developer, tech explorer, and a forever learner. I love
              building useful, real-world projects — from websites and APIs to
              Arduino-based smart devices.
              <br />
              Skilled in Python, Node.js, React, Tailwind CSS, and SQL, and more.
              <br />
              Currently learning ESP32, Arduino, and low-level programming to
              connect software with hardware.
              <br />
              I build full-stack apps, automation tools, personal projects, and
              experiment with emerging tech.
              <br />
              Background in bug bounty hunting, with solid experience in web and
              API security.
              <br />
              I love challenges, fast prototyping, and turning small ideas into
              working products.
              <br />
              Let’s connect, collaborate, and code something cool together!
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[400px]">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
          <h1 className="text-white font-bold">Shaheen Amjed</h1>
          <div>
            <h2 className="text-white mt-2">Social Links:</h2>
            <br />
            <div className="flex flex-row gap-5 flex-wrap justify-start items-center">
              <Button
                go="/"
                className="text-white"
                content={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                }
              />
              <Button
                go="/"
                className="text-white"
                content={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                }
              />
              <Button
                go="/"
                className="text-white"
                content={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-at-sign"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                  </svg>
                }
              />
            </div>

            <hr className="mt-5 border-white/30" />

            <div className="flex flex-col gap-5 mt-5">
              <h1 className="text-white text-5xl">Achievements:</h1>
              <h1 className="text-white text-2xl">Projects: 9</h1>
              <h1 className="text-white text-2xl">Clients: 1</h1>
              <h1 className="text-white text-2xl">Languages: 8</h1>
              <h1 className="text-white text-2xl">Skills: Very good...</h1>
            </div>

            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
