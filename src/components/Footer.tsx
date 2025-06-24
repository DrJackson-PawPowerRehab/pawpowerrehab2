import React from "react";
import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4 space-x-3">
              <div className="p-2 bg-blue-600 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Paw Power Rehab</div>
                <div className="text-blue-400">Animal Physical Therapy</div>
              </div>
            </div>
            <p className="max-w-md mb-6 text-gray-300">
              Our mission is simple: to provide thoughtful, personalized care
              that helps your pet feel better, move better, and live more fully.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>
                  <a href="tel:7068976897" className="hover:underline">
                    (706) 897-6897
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p>
                  <a
                    href="mailto:Drjackson@pawpowerrehab.com"
                    className="hover:underline"
                  >
                    Drjackson@pawpowerrehab.com
                  </a>
                  <br />
                  <a
                    href="mailto:Admin@pawpowerrehab.com"
                    className="hover:underline"
                  >
                    Admin@pawpowerrehab.com
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <p className="">
                  Cohutta Animal Clinic
                  <br />
                  <a
                    href={
                      /iPhone|iPad|iPod/i.test(navigator.userAgent)
                        ? "maps://maps.apple.com/?q=24+Lance+Street+Blue+Ridge+GA+30513"
                        : "https://www.google.com/maps/place/24+Lance+St,+Blue+Ridge,+GA+30513/@34.8743489,-84.3035238,17z/data=!3m1!4b1!4m6!3m5!1s0x885fa7ba9a7d3cc9:0x984e8d2f8d52ab14!8m2!3d34.8743445!4d-84.3009435!16s%2Fg%2F11vqmktgz5?entry=ttu"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    24 Lance Street
                    <br />
                    Blue Ridge, GA 30513
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Appointment On Request
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="pt-2">
                <Link
                  to="/contact#appointment-form"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
                >
                  Book an Appointment
                </Link>
              </div>
              <div className="text-sm">All appointments by request</div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>
            &copy; 2025 Paw Power Rehab. All rights reserved. | Licensed
            Veterinary Physical Therapy Practice
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
