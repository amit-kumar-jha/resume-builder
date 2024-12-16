"use client";
import React, { useState } from "react";
import { LogoutModal } from "./Modal/SignoutModal";
import { signOut } from "next-auth/react";

const Topbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  // const { data: session } = useSession();
  // const user = session?.user;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const confirmLogout = () => {
    closeModal();
    handleLogout();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 px-8">
      <nav className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          {" "}
          <a href="/dashBoard">ResumeBuilder</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex md:flex-row space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a
                href="/dashBoard"
                className="text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/askme" className="text-gray-600 hover:text-gray-900">
                Ask Me
              </a>
            </li>
            <li>
              <a
                href="/templates"
                className="text-gray-600 hover:text-gray-900"
              >
                Templates
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <div>
            <a
              onClick={openModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Log Out
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-10 md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="/"
                className="block text-gray-600 hover:bg-blue-100 rounded-md px-2 py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/askme"
                className="block text-gray-600 hover:bg-blue-100 rounded-md px-2 py-1"
              >
                Ask Me
              </a>
            </li>
            <li>
              <a
                href="/templates"
                className="block text-gray-600 hover:bg-blue-100 rounded-md px-2 py-1"
              >
                Templates
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block text-gray-600 hover:bg-blue-100 rounded-md px-2 py-1"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-gray-600 hover:bg-blue-100 rounded-md px-2 py-1"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* CTA Button in Dropdown */}
          <div className="p-4">
            <div
              // href="/create-resume"
              onClick={openModal}
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Log Out
            </div>
          </div>
        </div>
        <LogoutModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmLogout}
        />
      </nav>
    </header>
  );
};

export default Topbar;
