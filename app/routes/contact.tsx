import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { useDebounce } from "../hooks/useDebounce";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const debouncedName = useDebounce(name, 300);
  const debouncedEmail = useDebounce(email, 300);
  const debouncedMessage = useDebounce(message, 300);
  return (
    <>
      <Navigation />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} 
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-8"
          >
            Contact Me
          </motion.h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                required 
                className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                required 
                className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea 
                required 
                rows={4} 
                className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.main>
    </>
  );
}
