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
  Rocket,
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
  CalendarClock,
  Monitor,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-[#1F2943] text-white font-sans overflow-x-hidden">
      {/* 1️⃣ Hero Section - Consistent with Home */}
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
              CNT CloudSpace Chat
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
            >
              CONNECT <span className="text-[#3B6EDC]">INSTANTLY.</span>
              <br />
              WORK BETTER.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium tracking-tight leading-relaxed"
            >
              Communicate easily and securely with CNT CloudSpace Chat — your all-in-one private cloud messaging service.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button className="group flex items-center justify-center gap-3 px-10 py-5 bg-[#3B6EDC] hover:bg-[#2f5bb5] text-white font-black rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-[#3B6EDC]/50 w-full sm:w-auto uppercase tracking-tight transform hover:-translate-y-1">
                <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Download for Windows
              </button>
              <button className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl text-xl transition-all duration-300 backdrop-blur-xl border border-white/20 w-full sm:w-auto uppercase tracking-tight">
                <Globe className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Open in Browser
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ High-Density Interface Zone */}
      <section className="py-16 bg-[#1A2337] text-white border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Visual: Carousel with Phone Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-5xl mx-auto lg:mx-0"
            >
              <div className="bg-[#1F2943] p-2 md:p-3 rounded-[2.75rem] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.6)] border border-white/5">
                <Carousel
                  opts={{ align: "center", loop: true }}
                  plugins={[Autoplay({ delay: 4000 })]}
                  className="w-full"
                >
                  <CarouselContent>
                    {[
                      "a1.png",
                      "a2.png",
                      "a3.png",
                      "a4.png",
                      "a5.png",
                      "a6.png",
                    ].map((img, i) => (
                      <CarouselItem key={i} className="basis-full">
                        <div className="relative h-[260px] md:h-[500px] rounded-[2.25rem] overflow-hidden bg-white/5">
                          <Image
                            src={`/${img}`}
                            alt={`Interface ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-[#3B6EDC]/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Content: Features Grid */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl xl:text-5xl font-black uppercase tracking-tight leading-tight mb-5">
                  Structured{" "}
                  <span className="text-[#3B6EDC]">Communication.</span>
                </h2>
                <p className="text-lg xl:text-xl text-gray-400 font-medium max-w-md">
                  No more messy threads or lost files. Everything where it
                  belongs.
                </p>
              </div>

              <div className="grid gap-5">
                {[
                  {
                    title: "Smart Channels",
                    desc: "Organize by projects, teams, or topics.",
                    icon: MessageSquare,
                  },
                  {
                    title: "Instant Search",
                    desc: "Find any file or message in milliseconds.",
                    icon: Search,
                  },
                  {
                    title: "Global Sync",
                    desc: "Desktop to mobile, zero lag communication.",
                    icon: Smartphone,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 p-6 bg-white/5 backdrop-blur-md rounded-3xl hover:bg-[#3B6EDC]/5 transition-colors border-l-8 border-[#3B6EDC] border-y border-r border-white/5"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#3B6EDC] border border-white/10 shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg mb-1 uppercase tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#1F2943] border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">
                How CNT Chat helps your team communicate
              </h2>
              <p className="text-lg text-gray-400 font-medium max-w-xl">
                Empower CNT teams to communicate in the way that fits their work
                style—without sacrificing security or accessibility.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  Maximum flexibility
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start one-to-one conversations or create public and private channels for teams,
                  projects, and departments.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  Complete privacy
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ensure confidentiality with optional end-to-end encryption for sensitive
                  conversations and channels.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 sm:col-span-2">
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  Multi-platform access
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chat from the browser, Windows, macOS, Linux, iOS, or Android so CNT employees
                  stay connected wherever they work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Performance & Tools Grid */}
      <section className="py-16 bg-[#1F2943]">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter">
              EMPOWER CNT EMPLOYEES
            </h2>
            <div className="w-24 h-2 bg-[#3B6EDC] mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {empowerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl hover:shadow-[#3B6EDC]/10 transition-all border border-white/10 hover:border-[#3B6EDC]/20 w-full sm:w-[260px] lg:w-[350px]"
              >
                <div className="w-14 h-14 bg-[#3B6EDC]/10 rounded-2xl flex items-center justify-center text-[#3B6EDC] mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#1A2337] relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

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
                  Instant <br />
                  <span className="text-[#3B6EDC]">IT Support.</span>
                </h2>
                <p className="text-gray-400 text-sm font-medium max-w-sm">
                  Our team is standing by to resolve your technical challenges
                  in seconds.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    label: "Helpdesk Portal",
                    value: "Submit Ticket",
                    icon: Monitor,
                  },
                  {
                    label: "Email Support",
                    value: "help@itcntpromoads.on.spiceworks.com",
                    icon: Mail,
                  },
                  { label: "Local Hotline", value: "Ext. 122", icon: Phone },
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
                      <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.18em] block mb-0.5">
                        {contact.label}
                      </span>
                      <span className="text-white font-black text-lg tracking-tight group-hover:text-[#3B6EDC] transition-colors">
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
      <footer className="bg-[#1A2337] text-white/40 py-10 text-center text-sm border-t border-white/5 uppercase tracking-widest font-bold">
        <p>
          &copy; {new Date().getFullYear()} CNT CloudSpace // All rights
          reserved
        </p>
      </footer>
    </main>
  );
}

const smartFeatures = [
  {
    title: "Manage Messages",
    description:
      "Keep your conversations organized with channels, threads, and direct messages.",
    icon: MessageSquare,
  },
  {
    title: "Keep Everyone in Loop",
    description:
      "Ensure important updates reach the right people with @mentions and announcements.",
    icon: Users,
  },
  {
    title: "Find What Matters",
    description:
      "Powerful search capabilities to instantly retrieve files, messages, and people.",
    icon: Search,
  },
];

const transformFeatures = [
  {
    title: "Maximum Flexibility",
    description:
      "Work the way you want with customizable notifications, themes, and integrations.",
    icon: Zap,
  },
  {
    title: "Complete Privacy",
    description:
      "Enterprise-grade encryption and security protocols to keep your data safe.",
    icon: Shield,
  },
  {
    title: "Multi-platform Access",
    description:
      "Seamlessly switch between desktop, web, and mobile without missing a beat.",
    icon: Smartphone,
  },
];

const empowerFeatures = [
  {
    title: "Threads",
    description: "Keep conversations tidy by replying to messages in a thread.",
    icon: Reply,
  },
  {
    title: "Reminders",
    description: "Stay on top of what matters with message reminders.",
    icon: Bell,
  },
  {
    title: "Polls",
    description: "Get feedback from your team by creating polls.",
    icon: BarChart2,
  },
  {
    title: "Forwarding",
    description: "Save time by forwarding messages and large files.",
    icon: Forward,
  },
  {
    title: "Scheduling",
    description: "Plan work ahead by scheduling messages in advance.",
    icon: CalendarClock,
  },
];
