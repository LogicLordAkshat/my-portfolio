import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-xl mx-auto backdrop-blur-3xl bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mt-8 mb-4 hover:border-purple-500/30 transition-colors duration-500"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
        <h3 className="text-2xl font-bold text-center text-white mb-2 tracking-tight">
          Drop me a message <span className="text-purple-400">⚡</span>
        </h3>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all backdrop-blur-md"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all backdrop-blur-md"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none backdrop-blur-md"
            placeholder="Tell me about your project, idea, or just say hi..."
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <div className="flex-1 w-full">
            {status === "success" && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <FaCheckCircle /> Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-red-400 text-sm font-medium">
                <FaExclamationCircle /> Failed. Please email me directly instead!
              </motion.div>
            )}
          </div>
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-70 group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:scale-150 transition-transform duration-500" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:bg-slate-900 border border-transparent">
              {status === "loading" ? "Sending..." : "Send Message"}
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
