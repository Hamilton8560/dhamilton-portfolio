"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BellLoader } from "@/components/ui/bell-glow-loader"

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <BellLoader
              autoStart
              durationMs={2500}
              loadingLabel=""
              doneLabel=""
              size={360}
              rotationAmplitude={0.5}
              onComplete={() => {
                setTimeout(() => setDone(true), 400)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}
