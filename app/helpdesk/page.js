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
      <section className="relative w-full py-24 overflow-hidden bg-[#1F2943]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/IT_Banner.gif"
            alt="IT Support"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2943]/60 via-[#1F2943]/90 to-[#1F2943]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6"
            >
              RESOLVE <span className="text-[#3B6EDC]">FAST.</span>
              <br />
              STAY PRODUCTIVE.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium tracking-tight mb-10"
            >
              Centralized IT support to streamline your workflow and eliminate
              downtime.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center gap-4"
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

          {/* Core Concerns Grid - Integrated into Hero */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-wrap items-center justify-center gap-4 mt-20"
          >
            {concerns.slice(0, 10).map((concern, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                className="bg-white/5 w-64 backdrop-blur-md p-4 rounded-2xl border border-white/10 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 bg-[#3B6EDC]/20 rounded-lg flex items-center justify-center text-[#3B6EDC] mb-3 group-hover:scale-110 transition-transform">
                  <concern.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white leading-tight">
                  {concern.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ High-Density Info Zone (Features + Access) */}
      <section
        id="how-to"
        className="py-24 bg-[#1A2337] text-white border-y border-white/5"
      >
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Features */}
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

            {/* Right: Access & Video */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
                  Get Started Now
                </h2>
                <div className="w-20 h-2 bg-[#3B6EDC] rounded-full" />
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5 group">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/CLOUDSPACE_BANNER.png"
                >
                  <source src="/IT_HELPDESK_SYSTEM.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#3B6EDC]/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                    LOGIN
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Use your company email to sign in instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Support & Action Section */}
      <section className="py-20 bg-[#1A2337] relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

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
                  Instant <br />
                  <span className="text-[#3B6EDC]">IT Support.</span>
                </h2>
                <p className="text-gray-400 text-base font-medium max-w-sm">
                  Our team is standing by to resolve your technical challenges
                  in seconds.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    label: "Helpdesk Portal",
                    value: "Submit Ticket",
                    icon: Monitor,
                  },
                  {
                    label: "Email Support",
                    value: "IT.support@cntpromoads.com",
                    icon: Mail,
                  },
                  { label: "Local Hotline", value: "Ext. 122", icon: Phone },
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
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] block mb-1">
                        {contact.label}
                      </span>
                      <span className="text-white font-black text-xl tracking-tight group-hover:text-[#3B6EDC] transition-colors">
                        {contact.value}
                      </span>
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
