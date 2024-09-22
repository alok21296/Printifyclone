import React from 'react';
import logo from "/Users/aloksingh/Desktop/Projects Deployed/printify/src/assets/Printify copy.png"


const Footer = () => {
  return (
    <footer className="w-full flex flex-col flex-wrap text-black text-center py-6">
      {/* Social Media Section */}
      <div className="flex justify-between gap-8 items-center text-black  h-16 px-8 md:px-8">
        <a href="#" title="Logo" className="logo">
          {/* You can place your logo image here */}
          <img src={logo} alt="Logo" className="w-52" />
        </a>
        <div className="flex flex-wrap justify center gap-4">
          <a href="https://www.facebook.com/Printify/" title="Facebook" target="_blank" rel="noopener">
            <img
              src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
              alt="Facebook"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a href="https://www.instagram.com/printify/" title="Instagram" target="_blank" rel="noopener">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
              alt="Instagram"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a href="https://www.linkedin.com/company/printify/" title="LinkedIn" target="_blank" rel="noopener">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a href="https://x.com/printify" title="x" target="_blank" rel="noopener">
            <img
              src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
              alt="Twitter"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a href="https://www.youtube.com/c/printify" title="YouTube" target="_blank" rel="noopener">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg"
              alt="YouTube"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a href="https://www.reddit.com/r/Printify/" title="Reddit" target="_blank" rel="noopener">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
              alt="Reddit"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap bg-gray-100  justify-center gap-6 text-gray-700 py-4">
        <a className="hover:text-gray-500 cursor-pointer">Intellectual Property Policy</a>
        <a className="hover:text-gray-500 cursor-pointer">Terms of Service</a>
        <a className="hover:text-gray-500 cursor-pointer">Privacy Policy</a>
        <a className="hover:text-gray-500 cursor-pointer">Security</a>
      </div>

      {/* Footer Copyright */}
      <div className="w-full text-gray-600 bg-gray-100 ">
        <p>&copy; 2024 Printify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
