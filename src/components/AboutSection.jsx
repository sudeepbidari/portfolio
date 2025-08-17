import {motion} from "framer-motion";

const container={
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { easeInOut: 1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: ({ opacity: 1, y: 0, transition: { duration: 1 } }),
};

function AboutSection() {
  return (
    // About
    <motion.section 
    className="w-full max-w-4xl h-screen justify-center items-center mt-20"        
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    >
      <motion.div className="mx-auto p-10 backdrop-blur-md" variants={item}>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Who am <span className="text-purple-600">I</span>?
        </h2>

        <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-6 mt-8">
          <div className="basis-1/3">
          {/* Profile Picture */}
            <img
              src="images/profile-pic.jpg"
              alt="Profile"
              className="w-36 h-40 rounded-full shadow-lg md:w-full md:h-75 md:rounded-2xl md:shadow-3xl"
            />
          </div>
          <div className="basis-2/3">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            I'm a passionate full-stack web developer with experience in creating responsive,
            user-friendly applications. I enjoy transforming ideas into functional, visually appealing products.
            Skilled in modern frameworks and best practices, I aim to deliver solutions that are both
            technically sound and engaging to use.

            <div className="mt-4">
              <ol>
                <li>- I create beautiful, responsive web applications.</li>
                <li>- I love coding and solving problems.</li>
                <li className="text-blue-600 font-semibold">
                  🚀 Let's create something amazing together
                </li>
              </ol>
            </div>
          </p>
          </div>

        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;
