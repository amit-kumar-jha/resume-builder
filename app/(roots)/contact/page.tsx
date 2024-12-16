// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./contact.css"; // Import your CSS for styling

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   // Motion variants for animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { delay: 0.2, duration: 0.8 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const formVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <motion.div
//       className="contact-container"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.header className="contact-header" variants={itemVariants}>
//         <h1>Contact Us</h1>
//         <p>We'd love to hear from you!</p>
//       </motion.header>

//       <section className="contact-content">
//         <motion.h2 variants={itemVariants}>Get in Touch</motion.h2>
//         <motion.p variants={itemVariants}>
//           Whether you have questions about our service, feedback, or need
//           assistance, our team is here to help you. Fill out the form below, and
//           we will get back to you as soon as possible.
//         </motion.p>

//         <motion.form
//           onSubmit={handleSubmit}
//           className="contact-form"
//           initial="hidden"
//           animate="visible"
//           variants={formVariants}
//         >
//           <motion.div className="form-group" variants={itemVariants}>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </motion.div>

//           <motion.div className="form-group" variants={itemVariants}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </motion.div>

//           <motion.div className="form-group" variants={itemVariants}>
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={5}
//               required
//             />
//           </motion.div>

//           <motion.button
//             type="submit"
//             className="submit-button"
//             variants={itemVariants}
//           >
//             Send Message
//           </motion.button>
//         </motion.form>

//         <motion.h2 variants={itemVariants}>Contact Information</motion.h2>
//         <motion.p variants={itemVariants}>
//           If you prefer, you can also reach us through the following channels:
//         </motion.p>

//         <motion.ul className="contact-info-list" variants={itemVariants}>
//           <li>
//             <strong>Email:</strong>{" "}
//             <a href="mailto:support@resumebuilder.com">
//               support@resumebuilder.com
//             </a>
//           </li>
//           <li>
//             <strong>Phone:</strong> +1 (123) 456-7890
//           </li>
//           <li>
//             <strong>Address:</strong> 123 Resume St, Job City, CA 12345
//           </li>
//         </motion.ul>
//       </section>

//       <motion.footer className="contact-footer" variants={itemVariants}>
//         <p>
//           &copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.
//         </p>
//       </motion.footer>
//     </motion.div>
//   );
// };

// export default Contact;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css"; // Import your CSS for styling

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, duration: 0.8 },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0.3 },
    },
  };

  const contactInfoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <motion.div
      className="contact-container"
      initial="hidden"
      animate="visible"
    >
      <motion.header className="contact-header" variants={headerVariants}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </motion.header>

      <motion.section
        className="contact-content"
        variants={formContainerVariants}
      >
        <h2>Get in Touch</h2>
        <p>
          Whether you have questions about our service, feedback, or need
          assistance, our team is here to help you. Fill out the form below, and
          we will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <motion.div className="form-group" whileHover={{ scale: 1.05 }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group" whileHover={{ scale: 1.05 }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group" whileHover={{ scale: 1.05 }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      <motion.section className="contact-info" variants={contactInfoVariants}>
        <h2>Contact Information</h2>
        <p>
          If you prefer, you can also reach us through the following channels:
        </p>
        <ul className="contact-info-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@resumebuilder.com">
              support@resumebuilder.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong>Address:</strong> 123 Resume St, Job City, CA 12345
          </li>
        </ul>
      </motion.section>

      <motion.footer className="contact-footer" variants={footerVariants}>
        <p>
          &copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default Contact;
