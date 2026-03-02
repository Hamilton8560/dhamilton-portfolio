"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, ArrowRight, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  role: "user" | "assistant"
  content: string
}

// Map known URLs to friendly labels
const linkLabels: Record<string, string> = {
  "calendly.com/davidhamilton473": "Book a Free Consultation",
  "instagram.com/americanironsv": "@americanironsv on Instagram",
}

function getFriendlyLabel(url: string): string {
  for (const [pattern, label] of Object.entries(linkLabels)) {
    if (url.includes(pattern)) return label
  }
  return url.length > 40 ? url.slice(0, 37) + "..." : url
}

function renderMessageContent(content: string, isUser: boolean) {
  // Split on URLs and render them as clickable links
  const urlRegex = /(https?:\/\/[^\s),]+)/g
  const parts = content.split(urlRegex)

  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      // Reset lastIndex since we're reusing the regex
      urlRegex.lastIndex = 0
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline underline-offset-2 font-medium ${
            isUser
              ? "text-zinc-950 hover:text-zinc-700"
              : "text-neon hover:text-neon-hover"
          } transition-colors`}
        >
          {getFriendlyLabel(part)}
        </a>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [greeted, setGreeted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  // Send greeting on first open
  useEffect(() => {
    if (open && !greeted) {
      setGreeted(true)
      setMessages([
        {
          role: "assistant",
          content:
            "Hey — I'm David's AI assistant. I know everything about his services, pricing, and tech stack. What are you looking to build?",
        },
      ])
    }
  }, [open, greeted])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: "user", content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      const data = await res.json()

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Sorry, something went wrong. You can reach David directly at davidhamilton473@gmail.com or book a call at calendly.com/davidhamilton473.",
          },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.text },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connection issue — reach David at davidhamilton473@gmail.com or book a free consultation.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-neon text-zinc-950 shadow-lg shadow-neon/20 hover:bg-neon-hover hover:shadow-neon/40 hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Open chat"
          >
            <MessageSquare className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-950">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-neon" />
                </div>
                <div>
                  <span className="text-white text-sm font-semibold block leading-tight">
                    David&apos;s AI
                  </span>
                  <span className="text-neon text-[10px] font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon inline-block animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-neon text-zinc-950 rounded-br-md"
                        : "bg-zinc-800/80 text-zinc-200 rounded-bl-md"
                    }`}
                  >
                    {renderMessageContent(msg.content, msg.role === "user")}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800/80 text-zinc-400 px-4 py-3 rounded-2xl rounded-bl-md text-sm">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick actions (show when no user messages yet) */}
            {messages.length <= 1 && !loading && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {[
                  "I need a website",
                  "Tell me about pricing",
                  "I want an AI agent",
                  "Videography services",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q)
                      setTimeout(() => {
                        setInput("")
                        const userMsg: Message = { role: "user", content: q }
                        const newMsgs = [...messages, userMsg]
                        setMessages(newMsgs)
                        setLoading(true)
                        fetch("/api/chat", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ messages: newMsgs }),
                        })
                          .then((r) => r.json())
                          .then((data) => {
                            setMessages((prev) => [
                              ...prev,
                              { role: "assistant", content: data.text || data.error },
                            ])
                          })
                          .catch(() => {
                            setMessages((prev) => [
                              ...prev,
                              {
                                role: "assistant",
                                content: "Connection issue — email davidhamilton473@gmail.com directly.",
                              },
                            ])
                          })
                          .finally(() => setLoading(false))
                      }, 0)
                    }}
                    className="text-xs px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-400 hover:border-neon/40 hover:text-neon transition-colors cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 py-3 border-t border-zinc-800/80 bg-zinc-950">
              <div className="flex items-center gap-2 bg-zinc-900 rounded-xl px-3 py-2 border border-zinc-800 focus-within:border-neon/40 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, pricing, etc..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 outline-none"
                  disabled={loading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 rounded-lg bg-neon text-zinc-950 flex items-center justify-center hover:bg-neon-hover disabled:opacity-30 disabled:hover:bg-neon transition-all cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <span className="text-[10px] text-zinc-700 font-mono">
                  Powered by AI — responses in seconds
                </span>
                <a
                  href="https://calendly.com/davidhamilton473/el-salvador-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-neon/60 hover:text-neon transition-colors flex items-center gap-1"
                >
                  Or book directly
                  <ArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
