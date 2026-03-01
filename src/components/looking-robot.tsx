'use client'

import { motion } from "framer-motion"

export function LookingRobot() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Robot head */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-2xl border border-zinc-600 shadow-2xl"
        animate={{ 
          rotateY: [-5, 5, -5],
          rotateX: [2, -2, 2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Face screen */}
        <div className="absolute inset-2 bg-black rounded-xl overflow-hidden">
          {/* Eyes container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3">
            {/* Left eye */}
            <motion.div 
              className="w-6 h-6 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]"
              animate={{ 
                x: [-2, 2, -2],
                scaleY: [1, 0.3, 1]
              }}
              transition={{ 
                x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scaleY: { duration: 0.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }
              }}
            />
            {/* Right eye */}
            <motion.div 
              className="w-6 h-6 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]"
              animate={{ 
                x: [-2, 2, -2],
                scaleY: [1, 0.3, 1]
              }}
              transition={{ 
                x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scaleY: { duration: 0.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", delay: 0.1 }
              }}
            />
          </div>
          
          {/* Mouth */}
          <motion.div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-lime-400/50 rounded-full"
            animate={{ 
              width: [32, 24, 32],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Antenna */}
        <motion.div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-4 bg-zinc-600"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-lime-400 rounded-full shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
        </motion.div>
        
        {/* Ear pieces */}
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-6 bg-zinc-600 rounded-l-lg" />
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-6 bg-zinc-600 rounded-r-lg" />
      </motion.div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-lime-400/10 rounded-2xl blur-xl -z-10" />
    </div>
  )
}
