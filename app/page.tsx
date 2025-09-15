"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl font-bold text-gray-800 mb-6"
          >
            Welcome to My Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Hi! I'm Sachith Madushanka. This is my portfolio built with Next.js, Tailwind CSS, and Framer Motion.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {/* About Me Section */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">About Me</h3>
              <p className="text-gray-600">Learn about my background, experience, and journey.</p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-green-600 mb-3">Skills</h3>
              <p className="text-gray-600">Discover my technical skills and expertise.</p>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-3">Projects</h3>
              <p className="text-gray-600">Explore my portfolio of work and achievements.</p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-red-600 mb-3">Contact</h3>
              <p className="text-gray-600">Get in touch for collaborations and opportunities.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}