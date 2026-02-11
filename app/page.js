"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
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
    <div className=" bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-[#3B6EDC]/10 transition-all duration-300 cursor-pointer h-full flex flex-col">
      <div className="w-full h-38 bg-[#F5F5F5] overflow-hidden rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4C5469] transition-colors duration-300">
        <img src={feature.icon} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-3 text-[#1F2943]">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">{feature.description}</p>
      
      <div className="flex items-center gap-2 text-[#3B6EDC] font-semibold text-sm group/btn">
        <span>Explore</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1F2943] font-sans overflow-x-hidden">
      
      {/* 1️⃣ Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background GIF with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/IT_Banner.gif" 
            alt="IT Banner" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1F2943]/80 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center">
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
              Welcome to the <br />
              <span className="text-[#3B6EDC] bg-clip-text text-transparent bg-gradient-to-r from-[#3B6EDC] to-[#60A5FA]">
                CNT CloudSpace
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Your Digital Workspace for faster, smarter, and safer collaboration.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#3B6EDC] hover:bg-[#2f5bb5] text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-[#3B6EDC]/50">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ About CNT CloudSpace */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative space-y-4">
                {/* Image Stack/Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-white/20">
                    <Image 
                      src="/CLOUDSPACE_BANNER.png" 
                      alt="CloudSpace Banner" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/20">
                    <Image 
                      src="/interface.png" 
                      alt="Interface" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/20">
                    <Image 
                      src="/EMAIL_SAMPLE.png" 
                      alt="Email Sample" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#3B6EDC]/10 rounded-2xl" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#1F2943]">What is the CNT CloudSpace?</h2>
              <div className="w-20 h-1 bg-[#3B6EDC] rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed">
                CNT CloudSpace is a comprehensive, secure, and cloud-based digital workspace designed to streamline communication, collaboration, and file management within the CNT organization.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                It integrates essential IT tools and services, offering employees seamless access to resources and enhancing productivity across all departments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Features / Steps Section */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#1F2943]">How CloudSpace Helps You</h2>
            <p className="text-xl text-gray-500">Everything you need in one secure place</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                {feature.link ? (
                  <Link href={feature.link} className="block h-full">
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

      {/* 4️⃣ Video Section */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-8">Your Digital Workspace For Faster, Smarter and Safer Collaboration</h2>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-[#F5F5F5] group">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/CLOUDSPACE_BANNER.png"
              >
                <source src="/CLOUDSPACE.webm" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>
      {/* 5️⃣ Contact Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container px-6 mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-12 md:p-16 text-center space-y-8">
              <div className="relative w-full h-64 mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image 
                  src="/Contacts.jpg" 
                  alt="Contacts" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1F2943] mb-4">Support Center</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our IT team is here to help! If you experience any issues accessing or using the IT Helpdesk System, please contact us at:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC]">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-[#1F2943]">Helpdesk Portal</h4>
                  <p className="text-[#3B6EDC] font-medium cursor-pointer hover:underline">IT Helpdesk Portal</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-[#1F2943]">Email Support</h4>
                  <p className="text-[#3B6EDC] font-medium cursor-pointer hover:underline">IT.support@cntpromoads.com</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-[#1F2943]">Local Number</h4>
                  <p className="text-[#3B6EDC] font-medium">122</p>
                </div>
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
