"use client";

import { motion } from "motion/react";
import { useState } from "react";
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
  Users,
  ChevronDown
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

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={`w-full text-left rounded-2xl px-5 py-3 border transition-all duration-300 bg-[#1F2943] ${
        open
          ? "border-[#3B6EDC] shadow-[0_18px_45px_rgba(59,110,220,0.35)] bg-[#3B6EDC]/10"
          : "border-white/10 hover:border-[#3B6EDC]/60 hover:bg-[#1F2943]/80"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3B6EDC]/15 border border-[#3B6EDC]/40 text-[11px] font-black text-[#3B6EDC]">
            {item.id}
          </div>
          <div className="text-sm md:text-base font-black uppercase tracking-wide text-white">
            {item.question}
          </div>
        </div>
        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/15 text-[#3B6EDC]">
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {open && (
        <div className="mt-3 border-t border-white/10 pt-3">
          <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </button>
  );
}

const faqs = [
  {
    id: 1,
    question: "What is CNT CloudSpace?",
    answer:
      "CNT CloudSpace is a cloud-based platform that lets you communicate with your team, access IT support, and manage requests from one convenient online workspace. It is designed to save you time and make working with your company's IT team seamless and efficient.",
  },
  {
    id: 2,
    question: "Who can use CloudSpace?",
    answer:
      "Employees and team members of your company, as well as approved clients or partners, can use CloudSpace to submit IT requests, communicate with teams, or access resources. A company-provided account is required to log in.",
  },
  {
    id: 3,
    question: "How do I access CloudSpace?",
    answer:
      "Go to the CloudSpace portal, enter your username or email and password, and then use your dashboard to open chat, helpdesk tickets, and schedules. Once logged in, you can start submitting support requests or communicating with colleagues immediately.",
  },
  {
    id: 4,
    question: "What can I do in CloudSpace as a client?",
    answer:
      "You can submit IT requests, track support tickets, chat with teams, schedule remote or on-site assistance, and securely view files that have been shared with you.",
  },
  {
    id: 5,
    question: "How do I submit a support request?",
    answer:
      'Navigate to the Helpdesk section, click "New Ticket", fill in the problem type and description, and attach any screenshots if needed. Click Submit and keep your ticket number. You can check the status anytime under My Tickets.',
  },
  {
    id: 6,
    question: "Is CloudSpace safe to use?",
    answer:
      "Yes. CloudSpace uses secure login, role-based access, and encrypted communication so only authorized users can view your requests and shared files. Never share your password and report any suspicious activity immediately.",
  },
  {
    id: 7,
    question: "Can I communicate with my team in real time?",
    answer:
      "Yes. You can use channels for group projects or departments, direct messages for private conversations, and mentions to get someone's attention. Notifications help you stay on top of updates.",
  },
  {
    id: 8,
    question: "What types of support can I request and who can I contact?",
    answer:
      "You can request remote or on-site IT support, get consultation and guidance, and contact the IT team via ticket, email, or phone. Using CloudSpace gives you faster access to help, real-time updates on requests, organized communication, and secure sharing of information.",
  },
];

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
                Your Digital Workspace for faster, smarter, and safer collaboration.
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

      <section className="py-12 bg-[#1A2337] border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
            >
              What is the CNT CloudSpace?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-base md:text-lg text-gray-400 leading-relaxed font-medium"
            >
              CNT CloudSpace is a comprehensive, secure, and cloud-based digital workspace designed
              to streamline communication, collaboration, and file management within the CNT
              organization. It integrates essential IT tools and services, offering employees
              seamless access to resources and enhancing productivity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2️⃣ Features Grid */}
      <section id="features" className="py-14 bg-[#1A2337] border-y border-white/5 relative overflow-hidden">
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
      <section className="py-16 bg-[#1A2337] text-white relative overflow-hidden border-y border-white/5">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3B6EDC]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group flex flex-col items-start gap-3 p-5 hover:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_28px_80px_-30px_rgba(0,0,0,0.8)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#3B6EDC] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                      <Cloud className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-sm uppercase tracking-tight text-white group-hover:text-[#3B6EDC] transition-colors">
                      Secure File Storage
                    </h4>
                    <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Central storage for your important company documents.
                    </p>
                  </div>
                </div>
                <div className="group flex flex-col items-start gap-3 p-5 hover:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_28px_80px_-30px_rgba(0,0,0,0.8)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#3B6EDC] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                      <LifeBuoy className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-sm uppercase tracking-tight text-white group-hover:text-[#3B6EDC] transition-colors">
                      Dedicated IT Support
                    </h4>
                    <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Reliable IT help with integrated ticket tracking.
                    </p>
                  </div>
                </div>
                <div className="group flex flex-col items-start gap-3 p-5 hover:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_28px_80px_-30px_rgba(0,0,0,0.8)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#3B6EDC] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-sm uppercase tracking-tight text-white group-hover:text-[#3B6EDC] transition-colors">
                      Automatic Backup
                    </h4>
                    <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Automatic backups to keep your work protected.
                    </p>
                  </div>
                </div>
                <div className="group flex flex-col items-start gap-3 p-5 hover:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_28px_80px_-30px_rgba(0,0,0,0.8)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#3B6EDC] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-sm uppercase tracking-tight text-white group-hover:text-[#3B6EDC] transition-colors">
                      Easy File Sharing
                    </h4>
                    <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Share files and folders with your team securely.
                    </p>
                  </div>
                </div>
                <div className="group flex flex-col items-start gap-3 p-5 hover:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_28px_80px_-30px_rgba(0,0,0,0.8)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#3B6EDC] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-sm uppercase tracking-tight text-white group-hover:text-[#3B6EDC] transition-colors">
                      Built-in Chat &amp; Messaging
                    </h4>
                    <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Real-time chat with channels, DMs, and mentions.
                    </p>
                  </div>
                </div>
                <div className="group flex flex-col items-start gap-3 p-5 hover:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-[#3B6EDC]/5 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_28px_80px_-30px_rgba(0,0,0,0.8)]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#3B6EDC] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                      <Monitor className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-sm uppercase tracking-tight text-white group-hover:text-[#3B6EDC] transition-colors">
                      Anywhere Access
                    </h4>
                    <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Secure access on any device, wherever you are.
                    </p>
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
              <div className="relative w-full h-[600px] aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border-[8px] border-white/10 group cursor-pointer">
                <video className="w-full h-full object-cover" controls autoPlay muted playsInline poster="/CLOUDSPACE_BANNER.png">
                  <source src="/CLOUDSPACE.webm" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#3B6EDC]/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#1A2337] border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-black text-white tracking-tight"
              >
                FAQs – CNT CloudSpace
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-sm md:text-base text-gray-400 mt-2 max-w-2xl mx-auto"
              >
                Quick answers to the most common questions about using CloudSpace as a client or employee.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((item) => (
                <FaqItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ High-Density Support */}
      <section className="bg-[#1A2337] relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)'}} />
        
        <div className="relative z-10 py-3">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1F2943] overflow-hidden shadow-[0_50px_110px_-35px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row border border-white/5"
          >
            <div className="lg:w-1/2 relative min-h-[220px] lg:min-h-full overflow-hidden">
              <Image 
                src="/Contacts.jpg" 
                alt="Contacts" 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F2943] via-transparent to-transparent lg:from-transparent" />
              <div className="absolute inset-0 bg-[#3B6EDC]/10 mix-blend-overlay" />
            </div>
            
            <div className="lg:w-2/3 p-8 md:p-10 space-y-6 flex flex-col justify-center">
              <div className="space-y-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#3B6EDC] rounded-full"
                />
                <h2 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                  Instant <span className="text-[#3B6EDC]">IT Support.</span>
                </h2>
                <p className="text-gray-400 text-sm font-medium max-w-sm">Our team is standing by to resolve your technical challenges in seconds.</p>
              </div>
              
              <div className="grid gap-3">
                {[
                  { label: "Helpdesk Portal", value: "Submit Ticket", icon: Monitor },
                  { label: "Email Support", value: "help@itcntpromoads.on.spiceworks.com", icon: Mail },
                  { label: "Local Hotline", value: "Ext. 122", icon: Phone }
                ].map((contact, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#3B6EDC] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                      <div className="relative w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                        <contact.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.18em] block mb-0.5">{contact.label}</span>
                      <span className="text-white font-black text-lg tracking-tight group-hover:text-[#3B6EDC] transition-colors">{contact.value}</span>
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
    title: "Request IT Support",
    description: "Get support anytime—submit tickets, track updates, and access quick IT solutions.",
    icon: "/helpdesk.gif",
    link: "/helpdesk"
  },
  {
    title: "CloudSpace Chat",
    description: "Real-time messaging, channels, DMs, and mentions, powered by our secure system.",
    icon: "/chat_gif.gif",
    link: "/chat"
  },
  {
    title: "Temporary Access",
    description: "Request and track borrowing of IT equipment and other shared resources.",
    icon: "/calendar.gif"
  }
];
