// components/Navbar.jsx
"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaCube } from "react-icons/fa";
import LogoImg from "../../public/logo.png"; // Replace with your logo path

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Solutions", href: "/solutions" },
];

const resourcesLinks = {
  Company: [
    { name: "About", href: "/about", desc: "Manufacturing expertise you can trust" },
    { name: "Contact", href: "/contact", desc: "Get in touch with our team" },
    { name: "Careers", href: "/career", desc: "Join our innovative manufacturing team" },
    { name: "Investors", href: "/investors", desc: "Financial performance and insights" },
  ],
  Insights: [
    { name: "Case studies", href: "/case-studies", desc: "Explore our successful manufacturing projects" },
    { name: "Blog", href: "/blog", desc: "Industry trends and expert perspectives" },
    { name: "White papers", href: "/white-papers", desc: "In-depth manufacturing research" },
    { name: "Webinars", href: "/webinars", desc: "Expert-led manufacturing discussions" },
  ],
  Support: [
    { name: "Help center", href: "/help-center", desc: "Technical support resources" },
    { name: "Documentation", href: "/document", desc: "Comprehensive product guides" },
    { name: "Training", href: "/training", desc: "Professional development programs" },
    { name: "Community", href: "/community", desc: "Connect with manufacturing professionals" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LogoImg} alt="Logo" width={150} height={50} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-blue-600">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}

          {/* Resources Dropdown */}
          <div
            className="group inline-block"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button
              type="button"
              className="hover:text-blue-600 font-medium"
              aria-haspopup="true"
              aria-expanded={isResourcesOpen}
            >
              Resources ▾
            </button>

            {isResourcesOpen && (
              <div className="absolute left-0 top-full w-screen mt-2 bg-white border-t shadow-xl z-50">
                <div className="container mx-auto p-6 grid grid-cols-3 gap-6">
                  {Object.entries(resourcesLinks).map(([section, items]) => (
                    <div key={section}>
                      <h4 className="font-semibold mb-4">{section}</h4>
                      <ul>
                        {items.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="flex items-start gap-4 py-3 hover:bg-gray-50 rounded px-1 transition"
                            >
                              {/* ICON WITHOUT CIRCLE, BLACK */}
                              <FaCube size={16} className="text-black flex-shrink-0 mt-1" />

                              <div>
                                <div className="text-base font-semibold text-gray-900">
                                  {item.name}
                                </div>
                                <div className="text-sm text-gray-600">{item.desc}</div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ul>

        {/* Right-side Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-t border-gray-200">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-blue-600">
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}

            {/* Mobile Resources */}
            <li className="w-full">
              <button
                className="w-full text-left font-medium hover:text-blue-600"
                onClick={() => setIsResourcesOpen((s) => !s)}
              >
                Resources ▾
              </button>
              {isResourcesOpen && (
                <div className="mt-3 pl-2">
                  {Object.entries(resourcesLinks).map(([section, items]) => (
                    <div key={section} className="mb-3">
                      <h4 className="font-semibold mb-2">{section}</h4>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsResourcesOpen(false);
                              }}
                              className="flex items-start gap-3"
                            >
                              {/* ICON WITHOUT CIRCLE, BLACK */}
                              <FaCube size={14} className="text-black mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm text-gray-600">{item.desc}</div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-2 mt-2 w-full">
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
                Sign Up
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Login
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
