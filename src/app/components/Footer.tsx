import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="px-4 md:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Links Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* FIND A STORE Section */}
            <div>
              <h3 className="font-bold mb-2">FIND A STORE</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Become Link Member</a></li>
                <li><a href="#" className="hover:underline">Sign Up for Email</a></li>
                <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
                <li><a href="#" className="hover:underline">Student Discounts</a></li>
              </ul>
            </div>

            {/* GET HELP Section */}
            <div>
              <h3 className="font-bold mb-2">GET HELP</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Order Status</a></li>
                <li><a href="#" className="hover:underline">Delivery</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Payment Options</a></li>
                <li><a href="#" className="hover:underline">Contact Us on Nike.com</a></li>
                <li><a href="#" className="hover:underline">Contact Us on All Other Inquiries</a></li>
              </ul>
            </div>

            {/* ABOUT NIKE Section */}
            <div>
              <h3 className="font-bold mb-2">ABOUT NIKE</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
                <li><a href="#" className="hover:underline">Sustainability</a></li>
              </ul>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex justify-end items-start">
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <FaSquareTwitter size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <FaInstagramSquare size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Section */}
            <p className="text-gray-400 text-sm">India © 2023 Nike, Inc. All Rights Reserved</p>

            {/* Links Section */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:underline text-sm">Guides</a>
              <a href="#" className="text-gray-400 hover:underline text-sm">Terms of Sale</a>
              <a href="#" className="text-gray-400 hover:underline text-sm">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:underline text-sm">Nike Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
