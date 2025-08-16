'use client'
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";
import Typed from "typed.js";


const sentence={
  hidden: { opacity: 0 },
  visible:{
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      staggerChildren: 0.15
    }
  }
}

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "React.js", "Express.js", "Node.js", "Tailwind CSS", "PHP", "Bootstrap", "MySQL", "MongoDB", "JS", "HTML", "CSS", "Framer Motion", "Git", "GitHub", "REST API", "Vite", "Vercel"
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    });
    return () => {
      typed.destroy();
    }
  }, []);

  return (
    // Hero Section (glass card)
    <section className="w-full max-w-3xl text-center py-10 h-screen">
      <div className="mx-auto">
        <p className="text-gray-700 my-10 text-xl md:text-lg">Hi, I'm <strong className="text-purple-600">Sudeep</strong> 👋</p>
        <motion.h1
              className="text-10xl md:text-7xl leading-tight font-extralight"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.5 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {["Full", "-", "stack", "web", "developer"].map((w, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-2 ${
                    w === "web" || w === "developer" ? "inline-block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text font-semibold" :""
                  }`}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>

        <p className="text-lg text-blue-500 mt-10">
          <span className="font-semibold text-gray-600">Tech Stack</span> <br />
          <span ref={typedRef}/>
        </p>
        {/* <button className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          View Projects
        </button> */}

        {/* <div className="text-gray-600 text-xs mt-40">
            <p>Scroll down to Explore</p>
        </div><br /> */}

        {/*Down arrow icon */}
        <div class="flex justify-center items-center h-10 mt-20">
          
        <svg
          class="h-8 w-8 text-gray-500 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-Linejoin="round"
            strokeWidth="1"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      </div>
    </section>
  )
}
