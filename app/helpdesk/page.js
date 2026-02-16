"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  ArrowRight,
  Rocket,
  CheckCircle,
  Clock,
  List,
  Key,
  Database,
  HelpCircle,
  Monitor,
  Wifi,
  PlusCircle,
  ShieldAlert,
  AppWindow,
  Activity,
  ExternalLink,
  PlayCircle,
  Mail,
  Phone,
  LifeBuoy,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HelpdeskPage() {
  return (
    <main className="min-h-screen bg-[#1F2943] text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 bg-[#1F2943]">
        {/* Decorative Light Flares */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#3B6EDC]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B6EDC]/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

        {/* Background GIF with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/IT_Banner.gif"
            alt="IT Support"
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2943]/40 via-[#1F2943]/80 to-[#1F2943]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-[#3B6EDC] text-sm font-black uppercase tracking-[0.2em] shadow-2xl"
            >
              <div className="w-2 h-2 bg-[#3B6EDC] rounded-full animate-ping" />
              CNT IT Helpdesk
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
            >
              RESOLVE <span className="text-[#3B6EDC]">FAST.</span>
              <br />
              STAY PRODUCTIVE.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium tracking-tight leading-relaxed"
            >
              We make IT work, so you can focus on what really matters.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
              <a
                href="#submit-ticket"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#3B6EDC] hover:bg-[#2f5bb5] text-white font-black rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-[#3B6EDC]/50 transform hover:-translate-y-1 uppercase tracking-tight"
              >
                Submit a Ticket Now
                <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#how-to"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-black rounded-2xl text-xl transition-all duration-300 border border-white/20 uppercase tracking-tight"
              >
                How it Works
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#1A2337] border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
            >
              What is the IT Helpdesk System?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-base md:text-lg text-gray-400 leading-relaxed font-medium"
            >
              The IT Helpdesk System is a centralized platform that streamlines IT-related requests
              and issue resolution. It offers a structured, user-friendly interface to report
              concerns, request assistance, and track support tickets.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#1A2337]">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
            >
              When to Use the IT Helpdesk System?
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {concerns.slice(0, 10).map((concern, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{
                  y: -8,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                className="bg-white/5 w-64 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all duration-500 cursor-pointer group overflow-hidden"
              >
                <div className="w-12 h-12 bg-[#3B6EDC]/20 rounded-xl flex items-center justify-center text-[#3B6EDC] mb-4 group-hover:bg-[#3B6EDC] group-hover:text-white transition-all duration-500">
                  <concern.icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-base text-white leading-tight mb-2 group-hover:text-[#3B6EDC] transition-colors duration-500">
                  {concern.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 font-medium">
                  {concern.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ High-Density Info Zone (Features + Access) */}
      <section
        id="how-to"
        className="py-16 bg-[#1A2337] text-white border-y border-white/5"
      >
        <div className="container px-6 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                  Why use the portal?
                </h2>
                <div className="w-20 h-2 bg-[#3B6EDC] rounded-full" />
              </div>

              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 p-6 bg-white/5 backdrop-blur-md rounded-3xl border-b-4 border-[#3B6EDC] border-x border-t border-white/5"
                  >
                    <div className="shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B6EDC] border border-white/10">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A2337] text-white border-b border-white/5">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                How to access the IT Helpdesk System?
              </h2>
              <div className="w-20 h-2 bg-[#3B6EDC] rounded-full" />
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-stretch">
              <div className="relative lg:col-span-2 h-full min-h-[260px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5 group">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  playsInline
                  poster="/CLOUDSPACE_BANNER.png"
                >
                  <source src="/IT_HELPDESK_SYSTEM.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#3B6EDC]/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <span className="text-4xl font-black text-[#3B6EDC]/20 mb-2 block">
                    01
                  </span>
                  <h4 className="font-black text-lg mb-2 text-white uppercase">
                    PORTAL LINK
                  </h4>
                  <a
                    href="#"
                    className="text-[#3B6EDC] font-bold hover:underline inline-flex items-center gap-2"
                  >
                    Access Portal <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <span className="text-4xl font-black text-[#3B6EDC]/20 mb-2 block">
                    02
                  </span>
                  <h4 className="font-black text-lg mb-2 text-white uppercase">
                    Login Details
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Use your company email to submit and track your requests.
                  </p>
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <span className="text-4xl font-black text-[#3B6EDC]/20 mb-2 block">
                    03
                  </span>
                  <h4 className="font-black text-lg mb-2 text-white uppercase">
                    Step-by-Step Walkthrough
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Watch our IT Helpdesk video tutorial for a guided system walkthrough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#1A2337] relative overflow-hidden">
              {/* Background Decorative Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              <div className="container relative z-10 px-4 mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#1F2943] rounded-[2.5rem] overflow-hidden shadow-[0_50px_110px_-35px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row border border-white/5"
                >
                  <div className="lg:w-1/3 relative min-h-[220px] lg:min-h-full overflow-hidden">
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
                        Instant <br/><span className="text-[#3B6EDC]">IT Support.</span>
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

      {/* Footer */}
      <footer className="bg-[#1F2943] text-white/40 py-10 text-center text-sm border-t border-white/5 uppercase tracking-widest font-bold">
        <p>
          &copy; {new Date().getFullYear()} CNT CloudSpace // All rights
          reserved
        </p>
      </footer>
    </main>
  );
}

// Data Arrays
const features = [
  {
    title: "Ticket Tracking",
    description:
      "Monitor the status of your requests in real time from submission to resolution.",
    icon: CheckCircle,
  },
  {
    title: "Categorized Logging",
    description:
      "Classify IT concerns easily to ensure they reach the right expert for faster resolution.",
    icon: List,
  },
  {
    title: "Timely Updates",
    description:
      "Stay informed with automatic notifications on the progress of your requests.",
    icon: Clock,
  },
];

const concerns = [
  {
    title: "Account & Access Issues",
    description: "Login problems, permission adjustments, account recovery.",
    icon: Key,
  },
  {
    title: "Backup & Data Recovery",
    description: "Data restoration, backup verification, file recovery.",
    icon: Database,
  },
  {
    title: "General IT Inquiries",
    description: "IT policy questions, general tech-related concerns.",
    icon: HelpCircle,
  },
  {
    title: "Hardware Issues",
    description: "Computer malfunctions, printer/peripheral failures.",
    icon: Monitor,
  },
  {
    title: "Internet Issue",
    description: "Network access issues, Wi-Fi dropouts, bandwidth problems.",
    icon: Wifi,
  },
  {
    title: "New Equipment Requests",
    description:
      "Hardware upgrades, new device procurement, system expansions.",
    icon: PlusCircle,
  },
  {
    title: "Security Concerns",
    description: "Virus/malware detection, data breaches, security updates.",
    icon: ShieldAlert,
  },
  {
    title: "Software Issues",
    description: "Installations, updates, renewals, bugs, crashes.",
    icon: AppWindow,
  },
  {
    title: "System Performance",
    description: "Slow performance, freezing, crashes, resource optimization.",
    icon: Activity,
  },
];
