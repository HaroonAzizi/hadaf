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
    <main className="flex min-h-screen flex-col items-center justify-center relative bg-indigo-950 text-white overflow-hidden">
      {/* Educational background pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat z-0"
        style={{
          backgroundImage: `url('/improved-carpet-pattern.svg'), url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0zm2 0h1v1H2zm2 0h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px, 20px 20px",
        }}
      />

      {/* Floating educational elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => {
          // Fixed positions spread across the screen
          const positions = [
            { left: '15%', top: '20%' },
            { left: '75%', top: '15%' },
            { left: '25%', top: '65%' },
            { left: '80%', top: '70%' },
            { left: '60%', top: '30%' },
            { left: '10%', top: '40%' },
            { left: '40%', top: '80%' },
            { left: '50%', top: '10%' }
          ];
          
          return (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: positions[i].left,
                top: positions[i].top,
                filter: "blur(1px)"
              }}
              initial={{
                rotate: i * 45,
                scale: 0.5 + (i % 5) * 0.1
              }}
              animate={{
                y: [0, i % 2 === 0 ? 30 : -30],
                rotate: [i * 45, i * 45 + 360]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {i % 4 === 0 ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              ) : i % 4 === 1 ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v-7H6.5A2.5 2.5 0 0 1 4 7.5v12z"></path>
                </svg>
              ) : i % 4 === 2 ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
                </svg>
              ) : (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                </svg>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="z-10 flex flex-col items-center justify-center space-y-8 sm:space-y-16 px-4 w-full max-w-md mx-auto">
        {/* Logo Animation */}
        <div className="flex items-center justify-center h-24 sm:h-32 relative">
          {!showFullLogo ? (
            <>
              <motion.span
                className="text-5xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                had
              </motion.span>

              <AnimatePresence mode="wait">
                {showDot && (
                  <motion.span
                    className="text-5xl sm:text-6xl md:text-8xl font-bold text-emerald-500"
                    style={{ 
                      textShadow: "0 0 10px rgba(52, 211, 153, 0.6)",
                      display: "inline-block",
                      marginLeft: "-0.1em",
                      marginRight: "-0.1em"
                    }}
                    initial={{
                      opacity: 1
                    }}
                    animate={{
                      opacity: [1, 0.8, 0.6, 0.4, 0.2, 0]
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    .
                  </motion.span>
                )}
              </AnimatePresence>

              <motion.span
                className="text-5xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500"
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
                className="text-5xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b82f6, #34d399, #3b82f6)",
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
          className="text-xl sm:text-2xl md:text-3xl text-center font-light px-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.2, ease: "easeOut" }}
        >
          Revolutionizing Education for Afghans
        </motion.h2>

        {/* Coming Soon */}
        <motion.div
          className="flex flex-col items-center space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-center font-medium text-emerald-400"
            animate={{
              textShadow: [
                "0 0 5px rgba(52, 211, 153, 0.3)",
                "0 0 15px rgba(52, 211, 153, 0.7)",
                "0 0 5px rgba(52, 211, 153, 0.3)",
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
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
        </motion.div>

        {/* haroon social links */}
        <motion.div
          className="flex space-x-6 mt-4 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.0, ease: "easeOut" }}
        >
          <a
            href="https://x.com/az_haroon"
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            aria-label="Twitter/X Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://haroonazizi.com"
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            aria-label="Personal Website"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            aria-label="Email Contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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

      {/* Email signup mini form. redirects to the mail app*/}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 z-20 w-full px-4 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4.4, ease: "easeOut" }}
      >
        <div className="bg-indigo-900 bg-opacity-70 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/5">
          <p className="text-xs sm:text-sm text-center mb-3 sm:mb-4 text-blue-100">
            Get notified when we launch our educational platform
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Email address"
                className="px-3 py-2 bg-indigo-800/80 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-emerald-400/70 text-sm w-full transition-all duration-300 border border-transparent focus:border-emerald-400/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-sm font-medium hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-[1.02] sm:whitespace-nowrap sm:flex-shrink-0 shadow-md hover:shadow-lg"
              >
                Notify Me
              </button>
            </div>
            {submitStatus && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-xs mt-2 text-center ${
                  submitStatus.success ? "text-emerald-400" : "text-red-400"
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
