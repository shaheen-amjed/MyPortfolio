export default function LeftSlide() {
    return (
        <>
        
            <div className="w-full mt-[-20] max-w-4xl mx-auto px-4">
                <img
                    src="/github.webp"
                    alt="banner"
                    className="w-[600] border-2 border-black rounded-lg"
                />
                <br />
                <div className="flex mobile-about flex-col items-start w-[600px] mobile-header gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                    <img src="/flower.webp" className="w-[100px]" />

                    <div>
                        <h1 className="font-bold text-lg text-white mb-2">About Me:</h1>
                        <p className="text-white/80 leading-relaxed">
                        Hey! I’m Shaheen, a Sudanese 16yo self-taught and passionate Full-Stack Developer, tech explorer, and a forever learner. I love building useful, real-world projects — from websites and APIs to Arduino-based smart devices.
                        <br />Skilled in Python, Node.js, React, Tailwind CSS, and SQL, and more.
                        <br />Currently learning ESP32, Arduino, and low-level programming to connect software with hardware.
                        <br />I build full-stack apps, automation tools, personal projects, and experiment with emerging tech.
                        <br />Background in bug bounty hunting, with solid experience in web and API security.
                        <br />I love challenges, fast prototyping, and turning small ideas into working products.
                        <br />Let’s connect, collaborate, and code something cool together!
                        </p>
                    </div>
                </div>



            </div>
       
        </>
    )
}