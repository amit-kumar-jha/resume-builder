// pages/terms.tsx
"use client";
import ThreeCanvas from "@/app/components/DashboardBg";
import { motion } from "framer-motion";
import "../dashBoard/dashboard.css";
// import ThreeBackground from '@/components/ThreeBackground'; // Assuming you've already created this component

const TermsOfService = () => {
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
            <h1 className="text-4xl font-bold mb-6">Terms and Service</h1>
            <p className="text-lg mb-4">
              Welcome to our Terms of Service page. By using our service, you
              agree to the following terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using our website and services, you agree to
              comply with and be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              2. Modifications to the Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify or replace these terms at any time.
              You are responsible for reviewing the terms regularly.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <p className="mb-4">
              You are responsible for your use of the service and any content
              you provide, including compliance with applicable laws and
              regulations.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              4. Limitation of Liability
            </h2>
            <p className="mb-4">
              We will not be liable for any damages arising from the use or
              inability to use our service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate your access to the service
              without notice for any breach of these terms.
            </p>

            <p className="text-lg mt-8">
              If you have any questions about these Terms, please{" "}
              <a href="/contact" className="text-blue-500 underline">
                contact us
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
