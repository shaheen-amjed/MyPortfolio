import Button from "@/components/Link"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function Projects() {

    const projects = [
        {
            title: 'LFMC company',
            desc: (
            <>
                Nestled at the intersection of tradition and innovation,<br /> The Lebanese Food Manufacturing Co.
                stands as a testament to the Lebanese <br />
                culinary excellence. With a legacy spanning over 15 years in Jordan, our journey has now<br />
                expanded to Egypt, where we proudly introduce our flagship enterprise.
            </>
            ),
            image: '/lfmc.jpg',
            stack1: 'tailwindcss',
            stack2: 'nextjs',
            stack3: 'react',
            stack4: 'framer-motion',
            url: 'https://lebanese-food.vercel.app/'
        },
        {
            title: 'Monitoy',
            desc: ( <> A gsap project that i created to test my gsap skills after complating the gsap course from <br />Javascript mastery </>),
            image: '/mojito.jpg',
            stack1: 'tailwindcss',
            stack2: 'vite',
            stack3: 'react',
            stack4: 'gsap',
            url: 'https://shaheen-cocktails-project.vercel.app/'
        },
        {
            title: 'Shodix',
            desc: ( <> Shodix is a app that allows you to be a store or to be a user, stores can manage products, <br />  orders, and contact with uers by a messages system inside of the app </>),
            image: '/shodix.jpg',
            stack1: 'tailwindcss',
            stack2: 'vite',
            stack3: 'react',
            stack4: 'framer-motion',
            url: 'https://shodix-front.vercel.app/'
        },
        {
            title: 'Sudan',
            desc: (<> this is a website that i created for my country, people these days see every african country as <br /> a poor country, but its not a true, i hope you are interesting <br /> to see the website </>),
            image: '/sudan.jpg',
            stack1: 'tailwindcss',
            stack2: 'nextjs',
            stack3: 'react',
            stack4: 'gsap',
            url: 'https://sudan-country.vercel.app/'
        }
        
        
    ]

    return (
        <>
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 zoom-1">
            <Link
            href="/" className="text-white text-xl font-medium bg-[#8B0000] hover:bg-red-600 transition-all duration-200 rounded-xl px-6 py-3 shadow-md hover:shadow-lg">
                <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-archivo">Back to Home</span>
                </div>
            </Link>
            {projects.map((project, index) => (
                <div key={index}>
                <Card className="p-4 hover:scale-[1.050] bg-white/20 backdrop-blur-lg transition-all">
                    <CardContent className="flex flex-col md:flex-row items-start gap-6">
                        {/* Left side: Info */}
                        <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-muted-foreground">
                            {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2 mb-4">
                            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">{project.stack1}</span>
                            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">{project.stack2}</span>
                            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">{project.stack3}</span>
                            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">{project.stack4}</span>
                        </div>
                        <Button go={project.url} content="View Project" className="text-white bg-[#8B0000] hover:bg-[red] transition rounded p-2"/>
                        </div>

                        {/* Right side: Image */}
                        <div className="w-full md:w-1/3">
                        <img
                            src={project.image}
                            alt={project.title}
                            
                            className="rounded-xl w-[600] border shadow-md object-cover"
                        />
                        </div>
                    </CardContent>
                </Card>
                </div>
            ))}
        </div>
        </>
    )

}