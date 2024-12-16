"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
// Define the props type
interface OtpVerifyProps {
  email?: string;
  setOtpSent: (sent: boolean) => void;
}

const OtpVerify: React.FC<OtpVerifyProps> = ({ email, setOtpSent }) => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "verify",
          email: email,
          otp: otp,
        }),
      });

      if (response.ok) {
        toast.success("OTP verified successfully!");
        router.push("/dashBoard"); // Redirect to chats without any query parameters
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred during OTP verification");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full md:w-1/2 bg-white p-6 flex flex-col justify-center mx-auto"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <input
            className="input-field"
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter your OTP"
            maxLength={6}
            required
          />
        </div>

        <motion.button
          type="submit"
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </motion.button>
      </form>
      <p className="text-center">
        Didn't receive the OTP{" "}
        <span
          onClick={() => setOtpSent(false)}
          className="link"
          style={{ cursor: "pointer" }}
        >
          Login again
        </span>
      </p>
    </motion.div>
  );
};

export default OtpVerify;
