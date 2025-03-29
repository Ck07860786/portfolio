"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // Success/Error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! 
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); 
      })
      .catch(() => {
        setStatus("Something went wrong. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black text-silver px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full flex flex-col md:flex-row border-[0.1px] border-gray-700 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-6 space-y-6">
         <h1 className="text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold ">
          Get in Touch
        </h1>
          <p className="text-gray-400">Let's collaborate and create something amazing. Feel free to reach out!</p>
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500" />
            <p className="text-gray-300">contact@yourdomain.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <MessageCircle className="text-blue-500" />
            <p className="text-gray-300">+123 456 7890</p>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="relative">
              <User className="absolute left-3 top-4 text-gray-400" />
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                placeholder="Your Name"
                className="w-full p-3 pl-10 bg-black border border-gray-700 rounded-lg text-silver focus:outline-none focus:border-blue-500 transition" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="relative">
              <Mail className="absolute left-3 top-4 text-gray-400" />
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                required 
                placeholder="Your Email"
                className="w-full p-3 pl-10 bg-black border border-gray-700 rounded-lg text-silver focus:outline-none focus:border-blue-500 transition" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }}
              className="relative">
              <MessageCircle className="absolute left-3 top-4 text-gray-400" />
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                required 
                rows={4} 
                placeholder="Your Message"
                className="w-full p-3 pl-10 bg-black border border-gray-700 rounded-lg text-silver focus:outline-none focus:border-blue-500 transition resize-none" 
              ></textarea>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`w-full p-3 rounded-lg font-semibold transition ${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400 text-white"
              }`}>
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status && <p className="text-center text-gray-300">{status}</p>}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
