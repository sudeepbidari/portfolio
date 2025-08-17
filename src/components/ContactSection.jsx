import { motion} from "framer-motion";

const container={
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggeredChildren: 1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: ({ opacity: 1, y: 0, transition: { duration: 1 } }),
};

export default function ContactSection() {
  return (
    <>
      {/* Contact */}
        <motion.section 
            className="w-full max-w-3xl text-center"        
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        > 
          <motion.div
            className="mx-auto p-10 rounded-lg bg-white" variants={item}
          >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-purple-600">Contact</span> Me
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            Feel free to reach out if you’d like to collaborate or just say hello!
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300" />
            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300 h-32"></textarea>
            <button type="submit" className="px-6 py-2 text-sm md:text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
          </motion.div>
          </motion.section>
    </>
  )
}
