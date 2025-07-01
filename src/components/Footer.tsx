import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, PawPrint } from "lucide-react";
import { CONTACT_INFO, PRACTICE_INFO } from "../config/constants";

const Footer = () => {
  return (
    <footer className="text-white bg-primaryDARK">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4 space-x-3">
              <div className="p-2 rounded-full bg-accent">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">{PRACTICE_INFO.NAME}</div>
                <div className="text-secondary">{PRACTICE_INFO.TAGLINE}</div>
              </div>
            </div>
            <p className="max-w-md mb-6 text-gray-300">
              Our mission is simple: to provide thoughtful, personalized care
              that helps your pet feel better, move better, and live more fully.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span>
                  <a href={CONTACT_INFO.PHONE.HREF} className="hover:underline">
                    {CONTACT_INFO.PHONE.DISPLAY}
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <p>
                  <a
                    href={`mailto:${CONTACT_INFO.EMAIL.DOCTOR}`}
                    className="hover:underline"
                  >
                    {CONTACT_INFO.EMAIL.DOCTOR}
                  </a>
                  <br />
                  <a
                    href={`mailto:${CONTACT_INFO.EMAIL.ADMIN}`}
                    className="hover:underline"
                  >
                    {CONTACT_INFO.EMAIL.ADMIN}
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <p className="">
                  Cohutta Animal Clinic
                  <br />
                  <a
                    href={
                      /iPhone|iPad|iPod/i.test(navigator.userAgent)
                        ? `maps://maps.apple.com/?q=${CONTACT_INFO.ADDRESS.FULL}`
                        : CONTACT_INFO.ADDRESS.GOOGLE_MAPS_URL
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {CONTACT_INFO.ADDRESS.STREET}
                    <br />
                    {CONTACT_INFO.ADDRESS.CITY}, {CONTACT_INFO.ADDRESS.STATE}{" "}
                    {CONTACT_INFO.ADDRESS.ZIP}
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
                  className="text-gray-300 transition-colors hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 transition-colors hover:underline"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 transition-colors hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 transition-colors hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="pl-[16px] mb-2 text-lg font-semibold">
              By Appointment Only
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="pt-2">
                <Link
                  to="/contact#appointment-form"
                  className="inline-block px-8 py-4 text-sm font-semibold text-white transition-colors rounded-full bg-primary hover:bg-accent10 hover:text-primary"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>
            &copy; {new Date().getFullYear()} {PRACTICE_INFO.NAME}. All rights
            reserved. | Licensed Physical Therapy Practice
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
