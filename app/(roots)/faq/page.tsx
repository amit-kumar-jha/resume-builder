"use client";
import ThreeCanvas from "@/app/components/DashboardBg";
import FaqAccordion from "@/app/components/FaqAccordion";
import { motion } from "framer-motion";
import "../dashBoard/dashboard.css";

import React from "react";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my account information?",
    answer:
      "You can update your account information by visiting the Account Settings page from your dashboard.",
  },
  {
    question: "What should I do if I encounter an error?",
    answer:
      "If you encounter an error, please contact our support team with the details of the issue and we will assist you as soon as possible.",
  },
  {
    question: "Can I change my subscription plan?",
    answer:
      "Yes, you can change your subscription plan from the Subscription section in your Account Settings.",
  },
];

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden  text-black">
      {/* Three.js Background */}
      <ThreeCanvas />

      {/* Terms and Service Content */}
      <div className="dashboard-container">
        <div className="content">
          <motion.div
            className="card-privacy"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
            }} // Hover effect
          >
            <h1 className="text-4xl font-bold mb-6">Help and Support</h1>
            <p className="text-lg mb-6">
              Below are some of the most frequently asked questions. If you
              don't find your answer here, feel free to{" "}
              <a href="/contact" className="text-blue-500 underline">
                contact us
              </a>
              .
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={faqs} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
