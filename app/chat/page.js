"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { 
  Download, 
  Globe, 
  MessageSquare, 
  Users, 
  Search, 
  Shield, 
  Smartphone, 
  Zap,
  LifeBuoy,
  Mail,
  Phone,
  Reply,
  Bell,
  BarChart2,
  Forward,
  CalendarClock
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2943] font-sans overflow-x-hidden">
      
      {/* 1️⃣ Hero Section */}
      <section className="relative w-full py-24 md:py-32 text-white overflow-hidden flex items-center justify-center text-center">
        {/* Background GIF with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/IT_Banner.gif" 
            alt="IT Banner" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1F2943]/85 backdrop-blur-[2px]" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            >
              CloudSpace <span className="text-[#3B6EDC]">Chat</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Secure, real-time collaboration for the modern workforce. Connect, share, and achieve more together.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-[#3B6EDC] hover:bg-[#2f5bb5] text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-[#3B6EDC]/50 w-full sm:w-auto">
                <Download className="w-5 h-5" />
                Download for Windows
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 w-full sm:w-auto">
                <Globe className="w-5 h-5" />
                Open in Browser
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ About Section */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943]">
              What is CloudSpace Chat?
            </h2>
            <div className="w-20 h-1 bg-[#3B6EDC] rounded-full mx-auto" />
            <p className="text-lg text-gray-600 leading-relaxed">
              CloudSpace Chat is a high-performance, secure messaging platform designed for enterprise collaboration. 
              It combines the flexibility of modern chat apps with the security and control required by CNT. 
              Experience seamless communication across all your devices, ensuring your team stays connected wherever they are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Smart, Organized Communication Made Easy */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1F2943] mb-6">
                Smart, Organized Communication Made Easy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience a streamlined workflow with our intuitive chat interface. 
                Designed to keep your team focused and productive.
              </p>
              <div className="w-24 h-1.5 bg-[#3B6EDC] rounded-full mx-auto mt-8" />
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Large Focal Carousel */}
              <div className="relative z-10 bg-[#F5F5F5] p-4 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {['a1.png', 'a2.png', 'a3.png', 'a4.png', 'a5.png', 'a6.png'].map((img, i) => (
                      <CarouselItem key={i} className="basis-full">
                        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-lg bg-white">
                          <Image 
                            src={`/${img}`} 
                            alt={`CloudSpace Chat Flow ${i + 1}`} 
                            fill 
                            className="object-contain p-2 md:p-4"
                            priority={i === 0}
                          />
                        </div>
                        <div className="mt-6 text-center">
                          <p className="text-[#1F2943] font-bold text-xl">
                            {i === 0 && "Seamless Message Management"}
                            {i === 1 && "Real-time Team Collaboration"}
                            {i === 2 && "Advanced Search & Discovery"}
                            {i === 3 && "Organized Workspace Threads"}
                            {i === 4 && "Integrated Tool Access"}
                            {i === 5 && "Mobile & Desktop Sync"}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Decorative background elements */}
              <div className="absolute -z-10 -top-20 -left-20 w-96 h-96 bg-[#3B6EDC]/10 rounded-full blur-[100px]" />
              <div className="absolute -z-10 -bottom-20 -right-20 w-96 h-96 bg-[#3B6EDC]/5 rounded-full blur-[100px]" />
            </motion.div>

            {/* Feature Highlights below the large image */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {[
                {
                  title: "Manage messages with ease",
                  desc: "Organize your conversations with powerful sorting and filtering tools."
                },
                {
                  title: "Keep everyone in the loop",
                  desc: "Ensure transparent communication across your entire team with public and private channels."
                },
                {
                  title: "Find what matters quickly",
                  desc: "Search through files, messages, and history in seconds with our smart search engine."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 rounded-2xl hover:bg-[#F5F5F5] transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#3B6EDC] font-bold mx-auto mb-4 text-xl">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-[#1F2943] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Transform Team Communication */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-4">
              Transform Team Communication
            </h2>
            <p className="text-gray-500 text-lg">Built for speed, security, and scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {transformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#1F2943] text-white p-8 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                
                <feature.icon className="w-10 h-10 text-[#3B6EDC] mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-300 relative z-10 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Empower Remote Teams */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-4">
              Empower Remote Teams
            </h2>
            <p className="text-gray-500 text-lg">Tools designed for the modern workplace</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {empowerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#3B6EDC]/20"
              >
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-xl flex items-center justify-center text-[#3B6EDC] mb-4 mx-auto">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2943] mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ CTA / Scroll Reminder */}
      <section className="py-32 bg-[#1F2943] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container px-6 mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-12 uppercase tracking-tight">
            Your Team is Waiting.<br />Open CloudSpace Chat Today.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button className="flex items-center justify-center gap-3 px-8 py-4 bg-[#3B6EDC] hover:bg-[#2f5bb5] text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-[#3B6EDC]/50 w-full sm:w-auto transform hover:scale-105">
                <Download className="w-5 h-5" />
                Download for Windows
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-full text-lg transition-all duration-300 border-2 border-white/20 hover:border-white/40 w-full sm:w-auto">
                <Globe className="w-5 h-5" />
                Open in Browser
              </button>
          </div>
        </motion.div>
      </section>

      {/* 7️⃣ Contacts Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <div className="relative w-full h-64 mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image 
                src="/Contacts.jpg" 
                alt="Contacts" 
                fill 
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-[#1F2943] mb-4">Support Center</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Need help with CloudSpace Chat? Reach out to our IT support team.
            </p>

            <div className="grid md:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC] group-hover:scale-110 transition-transform">
                  <LifeBuoy className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1F2943]">Helpdesk Portal</h4>
                <a href="#" className="text-[#3B6EDC] text-sm font-medium hover:underline">Visit Portal</a>
              </div>

              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1F2943]">Email Support</h4>
                <a href="mailto:IT.support@cntpromoads.com" className="text-[#3B6EDC] text-sm font-medium hover:underline">IT.support@cntpromoads.com</a>
              </div>

              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1F2943]">Local Number</h4>
                <p className="text-[#3B6EDC] text-sm font-medium">122</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2943] text-white/60 py-8 text-center text-sm border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} CNT CloudSpace. All rights reserved.</p>
      </footer>
    </main>
  );
}

const smartFeatures = [
  {
    title: "Manage Messages",
    description: "Keep your conversations organized with channels, threads, and direct messages.",
    icon: MessageSquare
  },
  {
    title: "Keep Everyone in Loop",
    description: "Ensure important updates reach the right people with @mentions and announcements.",
    icon: Users
  },
  {
    title: "Find What Matters",
    description: "Powerful search capabilities to instantly retrieve files, messages, and people.",
    icon: Search
  }
];

const transformFeatures = [
  {
    title: "Maximum Flexibility",
    description: "Work the way you want with customizable notifications, themes, and integrations.",
    icon: Zap
  },
  {
    title: "Complete Privacy",
    description: "Enterprise-grade encryption and security protocols to keep your data safe.",
    icon: Shield
  },
  {
    title: "Multi-platform Access",
    description: "Seamlessly switch between desktop, web, and mobile without missing a beat.",
    icon: Smartphone
  }
];

const empowerFeatures = [
  {
    title: "Threads",
    description: "Keep conversations tidy by replying to messages in a thread.",
    icon: Reply
  },
  {
    title: "Reminders",
    description: "Stay on top of what matters with message reminders.",
    icon: Bell
  },
  {
    title: "Polls",
    description: "Get feedback from your team by creating polls.",
    icon: BarChart2
  },
  {
    title: "Forwarding",
    description: "Save time by forwarding messages and large files.",
    icon: Forward
  },
  {
    title: "Scheduling",
    description: "Plan work ahead by scheduling messages in advance.",
    icon: CalendarClock
  }
];
