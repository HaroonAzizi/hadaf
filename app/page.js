"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showDot, setShowDot] = useState(true);
  const [showFullLogo, setShowFullLogo] = useState(false);
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const dotTimer = setTimeout(() => {
      setShowDot(false);
    }, 1200);
    const logoTimer = setTimeout(() => {
      setShowFullLogo(true);
    }, 1700);

    return () => {
      clearTimeout(dotTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email",
      });
      return;
    }
    const subject = encodeURIComponent("Notify me when had.af launches");
    const body = encodeURIComponent(
      `Please notify me at ${email} when had.af launches.`
    );
    const mailtoLink = `mailto:hi@haroonazizi.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");

    setSubmitStatus({
      success: true,
      message:
        "Email client opened! Please send the email to complete your request.",
    });

    setEmail("");

    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative bg-slate-900 text-white overflow-hidden">
      {/* Background pattern inspired by Afghan carpets */}
      <div
        className="absolute inset-0 opacity-15 bg-repeat z-0"
        style={{
          backgroundImage: `url('/improved-carpet-pattern.svg')`,
          backgroundSize: "300px",
        }}
      />

      <div className="z-10 flex flex-col items-center justify-center space-y-16 px-4">
        {/* Logo Animation */}
        <div className="flex items-center justify-center h-32 relative">
          {!showFullLogo ? (
            <>
              <motion.span
                className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                had
              </motion.span>

              <AnimatePresence mode="wait">
                {showDot && (
                  <motion.span
                    className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600"
                    initial={{
                      opacity: 1,
                      filter: "drop-shadow(0 0 0px rgba(245, 158, 11, 0))",
                    }}
                    animate={{
                      opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
                      filter: "drop-shadow(0 0 10px rgba(245, 158, 11, 0.6))",
                    }}
                    exit={{
                      opacity: 0,
                      filter: "drop-shadow(0 0 12px rgba(245, 158, 11, 0))",
                      transition: { duration: 0.2 },
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    .
                  </motion.span>
                )}
              </AnimatePresence>

              <motion.span
                className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                af
              </motion.span>
            </>
          ) : (
            /* Final combined logo with improved animation */
            <motion.div
              className="flex items-center"
              initial={{ scale: 0.98, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.span
                className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #dc2626, #f59e0b, #dc2626)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                hadaf
              </motion.span>
            </motion.div>
          )}
        </div>

        <motion.h2
          className="text-2xl md:text-3xl text-center font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.2, ease: "easeOut" }}
        >
          Revolutionizing Education for Afghans
        </motion.h2>

        {/* Coming Soon */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-xl md:text-2xl text-center font-medium text-amber-400"
            animate={{
              textShadow: [
                "0 0 5px rgba(245, 158, 11, 0.3)",
                "0 0 15px rgba(245, 158, 11, 0.7)",
                "0 0 5px rgba(245, 158, 11, 0.3)",
              ],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Coming Soon
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full" />
        </motion.div>

        {/* haroon social links */}
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.0, ease: "easeOut" }}
        >
          <a
            href="https://x.com/az_haroon"
            className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://haroonazizi.com"
            className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
          <a
            href="mailto:hi@haroonazizi.com"
            className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Email signup mini form. rederects to the mail app*/}
      <motion.div
        className="absolute bottom-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4.4, ease: "easeOut" }}
      >
        <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm p-4 rounded-xl border border-red-900/20 shadow-lg">
          <p className="text-sm text-center mb-3">
            Get notified when we launch
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col">
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="px-3 py-2 bg-slate-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm w-64"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-amber-600 px-4 py-2 rounded-r-md text-sm font-medium hover:from-red-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Notify Me
              </button>
            </div>
            {submitStatus && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-xs mt-2 text-center ${
                  submitStatus.success ? "text-green-400" : "text-red-400"
                }`}
              >
                {submitStatus.message}
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </main>
  );
}
