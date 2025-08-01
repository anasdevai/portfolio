"use client";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  from: "user" | "bot";
  text: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      from: "bot", 
      text: "👋 Hi! I'm Muhammad Anas - Full Stack Developer & Designer.\n\nAsk me anything related to my skills:\n• Frontend & Backend Development\n• UI/UX Design\n• DevOps & Server Management\n• Database Design\n• SEO & Optimizations\n• Product Design\n\nI'm here to help! 🚀" 
    }
  ]);
  const [current, setCurrent] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!current.trim()) return;
    const userMsg = { from: "user" as const, text: current };
    setMessages((m) => [...m, userMsg]);
    setCurrent("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg.text }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { from: "bot" as const, text: data.answer || "Thanks for your question! I'd be happy to discuss my experience and skills with you." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { from: "bot" as const, text: "⚠️ Connection issue. Please try again - I'm here to help!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto h-[90vh] max-h-[600px] flex flex-col p-2 sm:p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Card className="flex-1 flex flex-col min-h-0 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex-shrink-0 border-b border-slate-200/50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm sm:text-base">MA</span>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Muhammad Anas</h2>
                <p className="text-slate-300 text-xs sm:text-sm">Full Stack Developer & Designer</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm"></div>
                <span className="text-slate-300 text-sm">Available</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col min-h-0 p-0 bg-gradient-to-b from-slate-50/50 to-white">
          <ScrollArea 
            ref={scrollAreaRef}
            className="flex-1 px-3 sm:px-6 py-3 sm:py-4"
          >
            <div className="space-y-4 sm:space-y-6 pb-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex flex-col max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                    {m.from === "bot" && (
                      <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">MA</span>
                        </div>
                        <span className="text-slate-600 text-xs sm:text-sm font-medium">Muhammad Anas</span>
                      </div>
                    )}
                    
                    <div
                      className={`px-3 sm:px-6 py-3 sm:py-4 rounded-2xl break-words transition-all duration-200 hover:shadow-md ${
                        m.from === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-sm shadow-lg ml-4 sm:ml-8"
                          : "bg-white text-slate-800 rounded-bl-sm shadow-md border border-slate-200/50"
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                    
                    <div className={`text-xs text-slate-500 mt-2 px-2 ${
                      m.from === "user" ? "text-right" : "text-left"
                    }`}>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="flex flex-col max-w-[85%] sm:max-w-[75%] md:max-w-[65%]">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">MA</span>
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Muhammad Anas</span>
                    </div>
                    <div className="bg-white text-slate-800 px-6 py-4 rounded-2xl rounded-bl-sm shadow-md border border-slate-200/50">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm text-slate-600">Typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={endRef} />
            </div>
          </ScrollArea>
          
          <div className="flex-shrink-0 border-t border-slate-200/50 bg-gradient-to-r from-white via-slate-50 to-white p-3 sm:p-6">
            <div className="flex space-x-2 sm:space-x-4 max-w-full">
              <Input
                value={current}
                onChange={(e) => setCurrent(e.currentTarget.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my skills..."
                className="flex-1 min-w-0 h-10 sm:h-12 px-3 sm:px-4 border-2 border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-200 text-sm"
                disabled={loading}
              />
              <Button 
                onClick={send} 
                disabled={loading || !current.trim()}
                className="flex-shrink-0 h-10 sm:h-12 px-4 sm:px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Send</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                )}
              </Button>
            </div>
            
            <div className="flex justify-between items-center mt-2 sm:mt-4 text-xs text-slate-500">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="hidden sm:inline">Press Enter to send • Shift+Enter for new line</span>
                <span className="sm:hidden">Enter to send</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  <span>Powered by AI</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-slate-100 px-2 py-1 rounded-full text-xs">{messages.length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Floating background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}