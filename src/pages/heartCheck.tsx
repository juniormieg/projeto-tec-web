import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { type Message, type ChatOption, chatScript } from "../data/heartCheckData";
import { MessageBubble } from "@/components/heart-check/MessageBubble";
import { ChatInput } from "@/components/heart-check/ChatInput";

export default function HeartCheck() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: "Como você está se sentindo hoje em comparação com ontem?",
    },
  ]);
  const [currentStep, setCurrentStep] = useState("initial");
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const [timeDisplay, setTimeDisplay] = useState("HOJE");

  const messagesEndRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setTimeDisplay(`HOJE, ÀS ${hours}H${minutes}`);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showOptions]);

  const handleUserResponse = (option: ChatOption) => {
    setShowOptions(false); 

    const userMsg: Message = {
      id: Date.now(),
      type: "user",
      text: option.label,
    };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      const nextStepData = chatScript[option.next];

      if (nextStepData) {
        if (nextStepData.botReply === "ALERT_TRIGGER") {
          const alertMsg: Message = {
            id: Date.now() + 1,
            type: "alert",
            isCritical: true,
          };
          setMessages((prev) => [...prev, alertMsg]);
        } else {
          const botMsg: Message = {
            id: Date.now() + 1,
            type: "bot",
            text: nextStepData.botReply,
          };
          setMessages((prev) => [...prev, botMsg]);
          setCurrentStep(option.next);
        }
      }
    }, 1500); 
  };

  const handleToggleOptions = () => {
    if (!isTyping && chatScript[currentStep]?.options.length > 0) {
      setShowOptions(!showOptions);
    }
  };

  return (
    <div className="w-full min-h-screen bg-primary-gray flex flex-col font-sans">
      <Header />

      <div className="flex-1 max-w-3xl mx-auto w-full px-5 py-8 flex flex-col gap-6 overflow-y-auto">
        <div className="flex justify-center mb-4">
          <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-gray-400 border border-gray-100 shadow-sm">
            {timeDisplay}
          </span>
        </div>

        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 ml-16 text-sm text-gray-400 animate-pulse">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            Tracey está digitando...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput 
        isTyping={isTyping}
        showOptions={showOptions}
        currentOptions={chatScript[currentStep]?.options || []}
        onToggleOptions={handleToggleOptions}
        onOptionSelect={handleUserResponse}
      />

      <Footer />
    </div>
  );
}