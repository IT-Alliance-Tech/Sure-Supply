import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

// Import your logo and background image (same paths)
import Logo from "../../../public/logo.png";
import BgImage from "../../../public/Bg.png";

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#0a1a4f] overflow-hidden w-full">
      {/* Background Image - bottom right only */}
      <div className="absolute bottom-0 right-0 w-[500px] opacity-20 pointer-events-none">
        <img
          src={BgImage}
          alt="Factory Background"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="relative w-full px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Logo, Address, Contact */}
        <div className="space-y-6">
          <img src={Logo} alt="SureSupply Logo" className="w-40 h-auto" />
          <div>
            <h3 className="font-bold text-lg">Address</h3>
            <p>123 Manufacturing Way, Industrial Park</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact</h3>
            <a
              href="tel:1800manufacturing"
              className="text-blue-700 hover:underline"
            >
              1800 manufacturing
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-blue-600 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-sky-500 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-6 h-6 hover:text-red-600 transition" />
            </a>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/capabilities" className="hover:underline">
                Capabilities
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Investors */}
        <div>
          <h3 className="font-bold text-lg mb-4">Investors</h3>
          <ul className="space-y-3">
            <li>
              <a href="/case-studies" className="hover:underline">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="/help" className="hover:underline">
                Help center
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:underline">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-300 mt-6 w-full">
        <div className="w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Sure Supply. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:underline">
              Privacy policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of service
            </a>
            <a href="/cookies" className="hover:underline">
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
