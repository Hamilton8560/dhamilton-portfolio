"use client"

import { createContext, useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BellLoader } from "@/components/ui/bell-glow-loader"

const LoadingContext = createContext(false)

/** Returns true once the loading screen has fully faded out */
export function useLoadingDone() {
  return useContext(LoadingContext)
}

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [exiting, setExiting] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <LoadingContext.Provider value={ready}>
      <AnimatePresence onExitComplete={() => setReady(true)}>
        {!exiting && (
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
                setTimeout(() => setExiting(true), 400)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  )
}
