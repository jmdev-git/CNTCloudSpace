import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2943]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image 
            src="/CloudSpace_Logo.png" 
            alt="CNT CloudSpace Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8" 
          />
          <span className="text-xl font-bold text-white">CNT CLOUDSPACE</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <button className="px-5 py-2 bg-[#3B6EDC] text-white rounded-full hover:bg-[#3B6EDC]/90 transition-all">
            Register now
          </button>
        </div>
      </div>
    </nav>
  );
}
