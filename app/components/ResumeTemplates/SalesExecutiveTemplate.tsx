import React from "react";
import styles from "./resume.module.css";

const ResumeTemplateSales: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.salesName}>Shivam</h1>
        <p className={styles.salesTagline}>
          Experienced Sales Associate with over 4 years of expertise in client
          relations, product marketing, and sales strategy execution in
          competitive environments. Proven success in driving revenue growth and
          enhancing customer satisfaction.
        </p>
        <div className={styles.contactInfo}>
          <span>+91 9327474094</span>
          <a href="mailto:shivampundhir111@gmail.com">
            Shivampundhir111@gmail.com
          </a>
          {/* Uncomment if LinkedIn or other profiles need to be added */}
          {/* <a href="https://www.linkedin.com/in/shivam/" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
        </div>
      </header>

      {/* Summary Section */}
      <section>
        <h2 className={styles.saleSectionTitle}>SUMMARY</h2>
        <div className={styles.saleDesc}>
          Highly motivated Sales Associate with 2.5 years of experience in
          retail and B2B sales. Adept at managing client relationships, leading
          product demonstrations, and closing deals efficiently. Strong
          background in leveraging sales data to optimize sales strategies and
          increase market share. Eager to contribute to a dynamic organization
          with a commitment to excellence.
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className={styles.sectionTitle}>SKILLS</h2>
        <div className={styles.saleDesc}>
          Sales Strategy, Client Relationship Management, Product Demonstration,
          Negotiation, Team Collaboration, Market Research, Problem Solving,
          Retail Sales, CRM Software, Data Analysis, Microsoft Office, Customer
          Service.
        </div>
      </section>

      {/* Work Experience Section */}
      <section>
        <h2 className={styles.sectionTitle}>WORK EXPERIENCE</h2>

        <div className={styles.job}>
          <div className={styles.experienceCompany}>
            <h3 className={styles.saleJobTitle}>Sales Associate</h3>
            <p className={styles.saleCompany}>
              Amazon Easysell - March 2022 - September 2022
            </p>
          </div>
          <div className={styles.jobDescription}>
            <div className={styles.saleDesc}>
              • Assisted in selling products on the Amazon platform, educating
              sellers on the benefits of the Easysell program, and helping them
              set up their online stores. <br />
              • Developed and maintained strong relationships with sellers to
              ensure their success on the platform. <br />
              • Conducted product demonstrations and webinars to explain Amazon
              Easysell features and boost seller engagement. <br />• Monitored
              seller performance and provided insights to optimize their
              listings and increase sales conversions.
            </div>
          </div>
        </div>

        <div className={styles.job}>
          <div className={styles.experienceCompany}>
            <h3 className={styles.saleJobTitle}>Sales Executive</h3>
            <p className={styles.saleCompany}>
              Rapibizz Pvt Limited - March 2020 - March 2022
            </p>
          </div>
          <div className={styles.jobDescription}>
            <div className={styles.saleDesc}>
              • Managed B2B sales for Rapibizz, specializing in business
              automation products for small and medium-sized enterprises. <br />
              • Played a pivotal role in expanding the client base, contributing
              to a 20% increase in annual revenue. <br />
              • Conducted market research to identify new business opportunities
              and key trends in business automation solutions. <br />•
              Negotiated contract terms, pricing, and deals, securing long-term
              agreements with top clients.
            </div>
          </div>
        </div>

        {/* KKG Industries Experience */}
        <div className={styles.job}>
          <div className={styles.experienceCompany}>
            <h3 className={styles.saleJobTitle}>Supervisor</h3>
            <p className={styles.saleCompany}>
              KKG Industries - April 2022 - Dec 2023
            </p>
          </div>
          <div className={styles.jobDescription}>
            <div className={styles.saleDesc}>
              • Supervised production processes and ensured adherence to safety
              protocols and quality standards. <br />
              • Managed a team of workers, providing guidance and ensuring
              smooth day-to-day operations. <br />
              • Monitored inventory levels and coordinated with suppliers to
              ensure timely delivery of materials. <br />• Collaborated with the
              management team to implement process improvements and reduce
              operational costs.
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className={styles.sectionTitle}>EDUCATION</h2>
        <p className={styles.saleEducation}>BA in psychology</p>
        <p className={styles.saleDegree}>Graduated in March 2020</p>
      </section>
    </div>
  );
};

export default ResumeTemplateSales;
