import { motion } from "framer-motion";

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween" }}
      className="fixed inset-y-0 right-0 w-64 bg-gray-900 p-6 md:hidden"
    >
      <div className="flex flex-col space-y-4">
        <a href="/" className="text-lg hover:text-blue-500 transition-colors">Home</a>
        <a href="/about" className="text-lg hover:text-blue-500 transition-colors">About</a>
        <a href="/projects" className="text-lg hover:text-blue-500 transition-colors">Projects</a>
        <a href="/contact" className="text-lg hover:text-blue-500 transition-colors">Contact</a>
      </div>
    </motion.div>
  );
}
