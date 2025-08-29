import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "PRODUCTS",
      links: [
        "Running",
        "Football",
        "Basketball",
        "Training",
        "Golf",
        "Motorsport",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About PUMA",
        "Careers",
        "Press Center",
        "Sustainability",
        "Investors",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Customer Service",
        "Size Guide",
        "Shipping & Returns",
        "Product Care",
        "FAQ",
      ],
    },
    {
      title: "FOLLOW",
      links: [
        "Newsletter",
        "Student Discount",
        "Military Discount",
        "Store Locator",
      ],
    },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-bold text-lg mb-4">STAY IN THE LOOP</h3>
            <p className="text-gray-300 text-sm mb-4">
              Be the first to know about new products, exclusive offers, and
              latest news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-brand-red transition-colors duration-200"
              />
              <button className="bg-brand-red hover:bg-red-700 px-6 py-3 font-semibold transition-colors duration-200">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <div className="text-2xl font-bold">PUMA</div>
            </div>
            <div className="text-sm text-gray-300">
              © 2024 PUMA SE. All rights reserved.
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 mt-8">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-xs text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
