"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  ArrowRight,
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
    <main className="min-h-screen bg-white text-[#1F2943] font-sans overflow-x-hidden">
      {/* 1️⃣ Hero Section */}
      <section className="relative w-full py-24 md:py-32 text-white overflow-hidden flex items-center">
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
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-center"
            >
              Welcome to the <br />
              <span className="text-[#3B6EDC]">CNT IT Helpdesk System</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl m-auto"
            >
              We make IT work, so you can focus on what really matters.
            </motion.p>

            <motion.div variants={fadeIn} className="flex justify-center">
              <a
                href="#submit-ticket" // Placeholder link
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#3B6EDC] hover:bg-[#2f5bb5] text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-[#3B6EDC]/50 transform hover:-translate-y-1"
              >
                Submit a Ticket Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ About Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-6">
                What is the IT Helpdesk System?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The IT Helpdesk System is a centralized platform that
                streamlines IT-related requests and issue resolution. It offers
                a structured, user-friendly interface to report concerns,
                request assistance, and track support tickets.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-[#F5F5F5] rounded-2xl border border-transparent hover:border-[#3B6EDC]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#3B6EDC] mb-6 shadow-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2943] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ When to Use Section (IT Concerns) */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-4">
              When to Use the IT Helpdesk System?
            </h2>
            <p className="text-xl text-gray-500">
              You can now submit tickets for the following IT concerns
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {concerns.map((concern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="shrink-0 p-3 bg-[#E6F0FF] rounded-lg text-[#3B6EDC]">
                  <concern.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2943] mb-1">
                    {concern.title}
                  </h3>
                  <p className="text-sm text-gray-600">{concern.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ How to Access Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2943] mb-6">
                How to Access the IT Helpdesk System?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#3B6EDC] text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2943] mb-2">
                      Portal Link
                    </h3>
                    <a
                      href="#"
                      className="text-[#3B6EDC] font-medium hover:underline flex items-center gap-2"
                    >
                      IT Helpdesk Portal <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We recommend bookmarking this link.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#3B6EDC] text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2943] mb-2">
                      Login Details
                    </h3>
                    <p className="text-gray-600">
                      Use your company email to sign in, submit requests, and
                      track your tickets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#3B6EDC] text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2943] mb-2">
                      Step-by-Step Walkthrough
                    </h3>
                    <p className="text-gray-600">
                      Watch our IT Helpdesk Video Tutorial to get started
                      quickly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Walkthrough */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F5F5] group">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="/CLOUDSPACE_BANNER.png"
                >
                  <source src="/IT_HELPDESK_SYSTEM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Contact Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
              Our IT team is here to help! If you experience any issues
              accessing or using the IT Helpdesk System, please contact us at:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC] mb-4">
                  <LifeBuoy className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1F2943] mb-1">
                  Helpdesk Portal
                </h4>
                <a
                  href="#"
                  className="text-[#3B6EDC] text-sm font-medium hover:underline"
                >
                  Visit Portal
                </a>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC] mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1F2943] mb-1">Email Support</h4>
                <a
                  href="mailto:IT.support@cntpromoads.com"
                  className="text-[#3B6EDC] text-sm font-medium hover:underline"
                >
                  IT.support@cntpromoads.com
                </a>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center text-[#3B6EDC] mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#1F2943] mb-1">Local Number</h4>
                <p className="text-[#3B6EDC] text-sm font-medium">122</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2943] text-white/60 py-8 text-center text-sm border-t border-white/10">
        <p>
          &copy; {new Date().getFullYear()} CNT CloudSpace. All rights reserved.
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
