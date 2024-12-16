import React from "react";
import styles from "./resume.module.css";

const ResumeTemplateIt: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.name}>AMIT KUMAR JHA</h1>
        <p className={styles.tagline}>
          Creative and detail-oriented Frontend Engineer with nearly 3 years of
          dedicated experience in enhancing user experiences through innovative
          frontend technologies.
        </p>
        <div className={styles.contactInfo}>
          <span>7046202124</span>
          <a href="mailto:amjha167@gmail.com">amitjha167@gmail.com</a>
        </div>
      </header>
      {/* Summary Section */}
      <section>
        <h2 className={styles.sectionTitle}>SUMMARY</h2>
        <p className={styles.sectionParagraph}>
          Dynamic and dedicated Frontend Engineer with nearly 3 years of
          experience in building intuitive user interfaces and optimizing
          performance using technologies such as React.js, Material UI, Redux
          Saga, and Next.js. Possessing a strong passion for creating
          user-centric designs, I am eager to apply my skills in a challenging
          role to contribute effectively to innovative projects and enhance user
          engagement.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className={styles.sectionTitle}>SKILLS</h2>
        <p className={styles.sectionParagraph}>
          React.js, Material UI, Tailwind CSS, Redux Saga, Next.js, React Query,
          HTML, CSS, JavaScript, Collaboration, Problem Solving, Framer Motion,
          MongoDB, ThreeJS
        </p>
      </section>

      {/* Work Experience Section */}
      <section>
        <h2 className={styles.sectionTitle}>WORK EXPERIENCE</h2>

        <div className={styles.job}>
          <div className={styles.experienceCompany}>
            <h3 className={styles.jobTitle}>Frontend Engineer</h3>
            <p className={styles.company}>
              Vericap - February 2024 - June 2024
            </p>
          </div>
          <div className={styles.jobDescription}>
            <div>
              • Created and implemented visually striking and adaptive user
              interfaces through the extensive use of Material Ul components,
              streamlining design and component development processes. <br />•
              Employed Material Ul's theming features and advanced styling
              techniques to maintain brand integrity and achieve flawless design
              execution. <br />• Utilized React Query for optimized data
              fetching and API management, facilitating seamless
              interoperability with Material Ul components and boosting
              application responsiveness.
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <div className={styles.experienceCompany}>
            <h3 className={styles.jobTitle}>Frontend Engineer</h3>
            <p className={styles.company}>EnverX - May 2023 - Jan 2024 </p>
          </div>
          <div className={styles.jobDescription}>
            <div>
              • Architected and executed visually engaging and responsive user
              interfaces utilizing Material Ul, significantly elevating the
              application's aesthetic and functional quality. <br />• Utilized
              Material Ul theming to ensure cohesive and consistent design
              across platforms, thereby enhancing user experience. <br />•
              Executed A/B testing and analyzed user feedback to refine Ul
              designs, increasing engagement metrics and user satisfaction
              ratings. <br />• Employed Material Ul's grid system to design
              flexible, adaptive layouts responsive to various device screens.{" "}
              <br />• Collaborated with UX/Ul designers to effectively translate
              design mockups into actionable React components, maintaining
              fidelity to design specifications and brand identity. <br />•
              Engineered sophisticated React components, integrating Redux for
              superior state management and enhancing overall user interaction.
            </div>
          </div>
        </div>
        <div className={styles.job}>
          <div className={styles.experienceCompany}>
            <h3 className={styles.jobTitle}>React JS Developer</h3>
            <p className={styles.company}>Solulab - November 2021 - May 2023</p>
          </div>
          <div className={styles.jobDescription}>
            <div>
              • Engineered and refined intricate React components for extensive
              web applications, significantly enhancing user experience through
              intuitive designs.
              <br />
              • Conducted thorough performance optimization by analyzing and
              refactoring legacy code, achieving a remarkable 30% improvement in
              page load speeds.
              <br /> • Worked collaboratively with diverse teams to drive
              feature innovation and enhancement, consistently meeting project
              timelines and high-quality benchmarks.
              <br /> • Facilitated knowledge sharing through active
              participation in code reviews, contributing to team development
              and best practices in coding.
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section>
        <h2 className={styles.sectionTitle}>PROJECTS</h2>
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Mogul</h3>
          <div className={styles.jobDescription}>
            <div>
              • Developed and maintained a real estate investment platform using
              React and Material UI, ensuring a responsive and intuitive user
              interface for property listing and investment tracking.
              <br />• Implemented advanced features such as property search
              filters, interactive maps, and user dashboards, enhancing the user
              experience and engagement.
              <br />• Integrated real-time APIs for property valuations and
              market trends, enabling users to make informed investment
              decisions.
              <br />• Secure password hashing with bcryptjs: Guarantees strong
              password security with reliable hashing methods.
              <br />• Optimized the platform for performance and accessibility,
              driving a significant increase in user traffic and engagement.
            </div>
          </div>
          <br />
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Vericap</h3>
          <div className={styles.jobDescription}>
            <div>
              • Worked as a Frontend Engineer at Vericap, building tools and
              infrastructure using Next, Monorepo and Material UI to empower
              investors in sourcing, screening, and managing carbon investments.
              <br />• Developed and optimized user interfaces for carbon
              investment dashboards, providing investors with clear insights and
              management tools.
              <br />• Collaborated closely with backend teams to ensure seamless
              integration of real-time data and financial metrics, improving
              investor decision-making.
              <br />• Secure password hashing with bcryptjs: Guarantees strong
              password security with reliable hashing methods.
              <br />• Enhanced performance and accessibility of the platform,
              leading to improved user engagement and investor satisfaction.
            </div>
          </div>
          <br />
        </div>
      </section>
      {/* Projects Section */}
      <section>
        <h2 className={styles.sectionTitle}>PERSONAL PROJECTS</h2>
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Chatty (Chat App)</h3>
          <p className={styles.projectLink}>
            chatapp-git-main-amit-kumar-jhas-projects.vercel.app
          </p>
          <p className={styles.sectionParagraph}>
            This project is a modern web application built with Next.js that
            focuses on real-time communication, user authentication, and a sleek
            user interface. The application offers seamless real-time messaging,
            secure login features, and an interactive, responsive design. Key
            Features:
          </p>
          <div className={styles.jobDescription}>
            <div>
              • Real-time messaging using Pusher: Ensures instant communication
              and live updates between users.
              <br />• Emoji picker integration: Allows users to express
              themselves with an intuitive emoji picker in chat.
              <br />• User authentication with NextAuth: Provides secure
              authentication for users, including social login and custom
              credentials.
              <br />• Secure password hashing with bcryptjs: Guarantees strong
              password security with reliable hashing methods.
              <br />• Modern Ul with Material-Ul and Tailwind CSS: Combines the
              power of Material-Ul components with Tailwind's utility-first
              design for a sleek, responsive interface.
            </div>
          </div>
          {/* <br /> */}
          {/* <p className={styles.sectionParagraph}>
            <strong>
              {" "}
              Technologies: This project leverages the following cutting-edge
              technologies:
            </strong>
          </p> */}
          {/* <div className={styles.jobDescription}>
            <div>
              • <strong>React</strong>: For building dynamic and responsive user
              interfaces.
              <br />• <strong>Next.js</strong>: Enables server-side rendering
              (SSR) and static site generation (SSG) for enhanced performance.
              <br />• <strong>Tailwind CSS</strong>: Provides flexibility for
              creating custom Ul designs.
              <br />• <strong>Material-Ul</strong>: Supplies pre-built,
              customizable Ul components.
              <br />• <strong>Pusher</strong>: Manages real-time communication
              for live messaging.
              <br />• <strong>NextAuth</strong>: Handles secure user
              authentication within the Next.js ecosystem.
              <br />• <strong>Emoji Picker</strong>: Simplifies emoji selection
              for enhanced user interaction.
              <br />• <strong>bcryptjs</strong>: Ensures passwords are hashed
              securely before storage.
              <br />
            </div>
          </div> */}
        </div>
        <br />
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Portfolio</h3>
          <p className={styles.projectLink}>
            amit-portfolio-git-main-amit-kumar-jhas-projects.vercel.app
          </p>
          <p className={styles.sectionParagraph}>
            I built this portfolio using Next.js, Tailwind CSS, and Framer
            Motion to showcase my skills as a frontend developer. The portfolio
            features a clean, responsive design with smooth animations and
            transitions, providing an engaging user experience.
          </p>
          <div className={styles.jobDescription}>
            <div>
              • Next.js enables fast loading times and optimized performance
              through server-side rendering and static site generation.
              <br />• Tailwind CSS was used to create a modern, minimalistic
              design with custom styles, ensuring mobile responsiveness and
              visual consistency across devices.
              <br />• Framer Motion brings the Ul to life with fluid animations,
              creating an interactive experience as users navigate through
              different sections, enhancing the overall aesthetic appeal.
            </div>
          </div>
          <br />
          {/* <p className={styles.sectionParagraph}>
            This portfolio not only highlights my projects and technical skills
            but also demonstrates my ability to work with cutting-edge frontend
            technologies to deliver high-performance, visually appealing
            websites.
          </p> */}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className={styles.sectionTitle}>EDUCATION</h2>
        <p className={styles.education}>Gujarat Technological University</p>
        <p className={styles.degree}>
          Bachelor of Engineering - Computer (January 2016 - December 2020)
        </p>
      </section>
    </div>
  );
};

export default ResumeTemplateIt;
