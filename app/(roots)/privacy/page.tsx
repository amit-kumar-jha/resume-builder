// pages/privacy-policy.tsx
"use client";

import ThreeCanvas from "@/app/components/DashboardBg";
import ThreePrivacyBackground from "@/app/components/ThreeBg/ThreePrivacyBg";
import { motion } from "framer-motion";
import "../dashBoard/dashboard.css";
// import ThreeBackground from '../components/ThreeBackground';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden  text-black">
      {/* <ThreePrivacyBackground /> */}
      {/* 3D Background with Particles */}
      <ThreeCanvas />
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
            <div className="relative z-10 p-8 lg:p-16">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl lg:text-6xl font-bold text-center mb-8"
              >
                Privacy Policy
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                className="prose lg:prose-lg mx-auto text-black-300"
              >
                <p>
                  Your privacy is important to us. This Privacy Policy explains
                  how we collect, use, and protect your personal information.
                </p>
                <h2>Information Collection</h2>
                <p>
                  We collect personal information such as your name, email
                  address, and other contact details when you use our services.
                </p>
                <h2>Information Use</h2>
                <p>
                  The information we collect is used to improve the services we
                  offer. We may also use your contact details to send you
                  updates or promotional materials.
                </p>
                <h2>Data Protection</h2>
                <p>
                  We implement strict security measures to protect your personal
                  data from unauthorized access.
                </p>
                <h2>Changes to this Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. You will
                  be notified of any significant changes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                className="mt-12 text-center"
              >
                <p>
                  If you have any questions, feel free to{" "}
                  <a href="/contact" className="underline text-indigo-400">
                    contact us
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
