const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white mb-2 md:mb-0"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white mb-2 md:mb-0"
          >
            Terms of Service
          </a>
          <a
            href="/help"
            className="text-gray-400 hover:text-white mb-2 md:mb-0"
          >
            Help
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0">
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white mb-2 md:mb-0"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-white mb-2 md:mb-0"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white mb-2 md:mb-0"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
