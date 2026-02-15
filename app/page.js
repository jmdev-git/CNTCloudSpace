"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Rocket,
  Cloud, 
  Lock, 
  MessageSquare, 
  Calendar, 
  LifeBuoy, 
  Phone, 
  Mail, 
  Monitor,
  ShieldCheck,
  Users
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

function FeatureCard({ feature }) {
  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 p-6 hover:bg-white/15 transition-all duration-700 cursor-pointer h-full flex flex-col border-b-8 border-b-[#3B6EDC] hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]">
      <div className="w-full aspect-video bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-700 overflow-hidden border border-white/10 shadow-inner">
        <img src={feature.icon} className="w-full h-full object-cover" alt={feature.title} />
      </div>
      <h3 className="text-xl font-black mb-2 text-white uppercase tracking-tighter leading-none">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-snug mb-6 flex-grow font-medium">{feature.description}</p>
      
      <div className="flex items-center gap-3 text-[#3B6EDC] font-black text-[10px] uppercase tracking-[0.2em] group/btn">
        <span>Get Started</span>
        <div className="w-8 h-[2px] bg-[#3B6EDC]/30 group-hover/btn:w-12 transition-all duration-500" />
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1F2943] text-white font-sans overflow-x-hidden">
      
      {/* 1️⃣ Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
        {/* Decorative Light Flares */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#3B6EDC]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B6EDC]/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />
        
        {/* Background GIF with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/IT_Banner.gif" 
            alt="IT Banner" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2943]/40 via-[#1F2943]/80 to-[#1F2943]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[#3B6EDC] text-sm font-black uppercase tracking-[0.2em] shadow-2xl">
                <div className="w-2 h-2 bg-[#3B6EDC] rounded-full animate-ping" />
                The Future of CNT Workspace
              </motion.div>

              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
              >
                WORK <span className="text-[#3B6EDC]">SMARTER.</span><br/>
                LIVE BETTER.
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium tracking-tight leading-relaxed"
              >
                CNT CloudSpace: Secure collaboration, instant IT support, and seamless communication in one high-performance platform.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 pt-8">
                <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#3B6EDC] hover:bg-[#2f5bb5] text-white font-black rounded-[2rem] text-xl uppercase tracking-tight transition-all duration-500 shadow-[0_20px_60px_rgba(59,110,220,0.4)] hover:scale-105 active:scale-95 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Launch App
                  <Rocket className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Features Grid */}
      <section id="features" className="py-20 bg-[#1A2337] border-y border-white/5 relative overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter"
            >
              Powering your <span className="text-[#3B6EDC]">Efficiency.</span>
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="w-20 h-2 bg-[#3B6EDC] mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                {feature.link ? (
                  <Link href={feature.link}>
                    <FeatureCard feature={feature} />
                  </Link>
                ) : (
                  <FeatureCard feature={feature} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Compact Video & Proof Combo */}
      <section className="py-20 bg-[#1A2337] text-white relative overflow-hidden border-y border-white/5">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3B6EDC]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-black leading-[0.85] tracking-tighter uppercase">
                  Built for the <br/><span className="text-[#3B6EDC]">Modern Team.</span>
                </h2>
                <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                  Stop juggling multiple tools. CloudSpace integrates everything your department needs into a single, lightning-fast dashboard.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#3B6EDC] border border-white/10 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tight text-white">Secure Access</h4>
                    <p className="text-gray-400 text-xs">SSO and permissions built-in.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#3B6EDC] border border-white/10 shrink-0">
                    <LifeBuoy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tight text-white">Instant Support</h4>
                    <p className="text-gray-400 text-xs">Submit and track helpdesk tickets.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#3B6EDC] border border-white/10 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tight text-white">Team Chat</h4>
                    <p className="text-gray-400 text-xs">Channels, DMs, and mentions.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#3B6EDC] border border-white/10 shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-tight text-white">Schedule Assistance</h4>
                    <p className="text-gray-400 text-xs">Book on-site or remote support.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto lg:mx-0"
            >
              <div className="absolute -inset-10 bg-[#3B6EDC]/20 rounded-full blur-[80px] opacity-50 animate-pulse" />
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border-[8px] border-white/10 group cursor-pointer">
                <video className="w-full h-full object-cover" controls poster="/CLOUDSPACE_BANNER.png">
                  <source src="/CLOUDSPACE.webm" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#3B6EDC]/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ High-Density Support */}
      <section className="py-20 bg-[#1A2337] relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1F2943] rounded-[4rem] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row border border-white/5"
          >
            <div className="lg:w-1/3 relative min-h-[300px] lg:min-h-full overflow-hidden">
              <Image 
                src="/Contacts.jpg" 
                alt="Contacts" 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F2943] via-transparent to-transparent lg:from-transparent" />
              <div className="absolute inset-0 bg-[#3B6EDC]/10 mix-blend-overlay" />
            </div>
            
            <div className="lg:w-2/3 p-10 md:p-12 space-y-8 flex flex-col justify-center">
              <div className="space-y-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#3B6EDC] rounded-full"
                />
                <h2 className="text-3xl md:text-5xl font-black text-white leading-none uppercase tracking-tighter">
                  Instant <br/><span className="text-[#3B6EDC]">IT Support.</span>
                </h2>
                <p className="text-gray-400 text-base font-medium max-w-sm">Our team is standing by to resolve your technical challenges in seconds.</p>
              </div>
              
              <div className="grid gap-4">
                {[
                  { label: "Helpdesk Portal", value: "Submit Ticket", icon: Monitor },
                  { label: "Email Support", value: "IT.support@cntpromoads.com", icon: Mail },
                  { label: "Local Hotline", value: "Ext. 122", icon: Phone }
                ].map((contact, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 12 }}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#3B6EDC] blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                      <div className="relative w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                        <contact.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block mb-1">{contact.label}</span>
                      <span className="text-white font-black text-xl tracking-tight group-hover:text-[#3B6EDC] transition-colors">{contact.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#1F2943] text-white/60 py-8 text-center text-sm border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} CNT CloudSpace. All rights reserved.</p>
      </footer>
    </main>
  );
}

const features = [
  {
    title: "Login to CloudSpace",
    description: "Sign in to access your cloud workspace and tools safely and securely.",
    icon: "/nas.gif"
  },
  {
    title: "IT Helpdesk",
    description: "Get support anytime—submit tickets, track updates, and access quick IT solutions.",
    icon: "/document.gif",
    link: "/helpdesk"
  },
  {
    title: "CloudSpace Chat",
    description: "Real-time messaging, channels, DMs, and mentions, powered by our secure system.",
    icon: "/chat_gif.gif",
    link: "/chat"
  },
  {
    title: "Schedule IT Assistance",
    description: "Plan ahead and book an on-site visit, remote support, or a meeting for IT discussions.",
    icon: "/calendar.gif"
  }
];
