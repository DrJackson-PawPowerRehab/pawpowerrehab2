import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { CONTACT_INFO } from "../config/constants";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    concern: "",
    appointmentType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    hearAboutUs: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      console.log("Submitting form data:", formData);
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      let result;
      try {
        result = await response.json();
      } catch (err: unknown) {
        console.error("Error parsing JSON response:", err);
        throw new Error(`Failed to parse response: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
      
      console.log("Response from server:", result);
      
      if (!response.ok) {
        throw new Error(result?.details || result?.error || 'Failed to send appointment request');
      }
      
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          petName: "",
          petType: "",
          concern: "",
          appointmentType: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
          hearAboutUs: "",
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="p-12 max-w-md text-center bg-white rounded-2xl shadow-xl">
          <div className="p-4 mx-auto mb-6 bg-emerald-100 rounded-full w-fit">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Thank You!</h2>
          <p className="mb-6 text-gray-600">
            We've received your appointment request and will contact you within
            24 hours to confirm your booking.
          </p>
          <p className="mb-2 text-gray-600">
            A confirmation email has been sent to {formData.email}
          </p>
          <p className="text-sm text-gray-500">
            For urgent matters, please call us at {CONTACT_INFO.PHONE.DISPLAY}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Contact & Request Appointment
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Ready to start your pet's healing journey? Schedule a consultation
              with our expert team or get in touch with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="p-8 bg-gray-50 rounded-2xl">
                <h2 className="mb-8 text-2xl font-bold text-gray-900">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Phone
                      </h3>
                      <p className="text-gray-600">
                        <a href={CONTACT_INFO.PHONE.HREF} className="hover:underline">
                          {CONTACT_INFO.PHONE.DISPLAY}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Call or Text</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Emails
                      </h3>
                      <p>
                        <a
                          href={`mailto:${CONTACT_INFO.EMAIL.DOCTOR}`}
                          className="text-gray-600 hover:underline"
                        >
                          {CONTACT_INFO.EMAIL.DOCTOR}
                        </a>
                        <br />
                        <a
                          href={`mailto:${CONTACT_INFO.EMAIL.ADMIN}`}
                          className="text-gray-600 hover:underline"
                        >
                          {CONTACT_INFO.EMAIL.ADMIN}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        We will respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Location
                      </h3>
                      <p className="text-gray-600">
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
                          {CONTACT_INFO.ADDRESS.CITY}, {CONTACT_INFO.ADDRESS.STATE} {CONTACT_INFO.ADDRESS.ZIP}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Hours
                      </h3>
                      <div className="text-sm text-gray-600">
                        <p>{CONTACT_INFO.HOURS.STATUS}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-8 bg-blue-50 rounded-xl">
                  <h4 className="mb-2 font-semibold text-blue-900">
                    Emergency Situations
                  </h4>
                  <p className="text-sm text-blue-700">
                    For after-hours emergencies, please contact your primary
                    veterinarian or nearest emergency clinic.
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div id="appointment-section" className="lg:col-span-2">
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
                <h2 className="mb-8 text-2xl font-bold text-gray-900">
                  Request an Appointment
                </h2>

                <form
                  id="appointment-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                      />
                    </div>
                  </div>

                  {/* Pet Information */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">
                      Pet Information
                    </h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="petName"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Pet's Name *
                        </label>
                        <input
                          type="text"
                          id="petName"
                          name="petName"
                          required
                          value={formData.petName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="petType"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Pet Type *
                        </label>
                        <select
                          id="petType"
                          name="petType"
                          required
                          value={formData.petType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                        >
                          <option value="">Select pet type</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        htmlFor="concern"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Primary Concern/Condition *
                      </label>
                      <select
                        id="concern"
                        name="concern"
                        required
                        value={formData.concern}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                      >
                        <option value="">Select primary concern</option>
                        <option value="post-surgery">
                          Post-Surgical Recovery
                        </option>
                        <option value="arthritis">Arthritis/Joint Pain</option>
                        <option value="hip-dysplasia">
                          Hip/Elbow Dysplasia
                        </option>
                        <option value="injury">Injury/Trauma</option>
                        <option value="mobility">Mobility Issues</option>
                        <option value="pain-management">Pain Management</option>
                        <option value="pain-management">Neurological</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">
                      Appointment Preferences
                    </h3>

                    <div className="grid grid-cols-1 gap-6 justify-center md:grid-cols-2">
                      <div className="flex flex-col">
                        <label
                          htmlFor="appointmentType"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Appointment Type *
                        </label>
                        <select
                          id="appointmentType"
                          name="appointmentType"
                          required
                          value={formData.appointmentType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                        >
                          <option value="">Select type</option>
                          <option value="consultation">
                            Initial Consultation
                          </option>
                          <option value="evaluation">Evaluation Only</option>
                          <option value="treatment">Treatment Session</option>
                          <option value="follow-up">Follow-up Visit</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="preferredDate"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-[50px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please share any additional details about your pet's condition, current medications, or specific concerns..."
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="hearAboutUs"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      <option value="veterinarian">
                        Veterinarian Referral
                      </option>
                      <option value="google">Google Search</option>
                      <option value="friend">Friend/Family</option>
                      <option value="social-media">Social Media</option>
                      <option value="website">Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-4 mt-4 text-red-700 bg-red-100 rounded-lg">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="mr-2 w-5 h-5" />
                        <span className="font-medium">Error sending appointment request</span>
                      </div>
                      <p className="text-sm">{submitError}</p>
                      <p className="mt-2 text-sm">
                        Please try again or contact us directly at {CONTACT_INFO.PHONE.DISPLAY}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center justify-center w-full px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg ${
                        isSubmitting 
                          ? "bg-blue-400 cursor-not-allowed" 
                          : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 w-5 h-5 rounded-full border-4 border-white animate-spin border-t-transparent"></span>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Submit Appointment Request</span>
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-sm text-center text-gray-500">
                      We'll contact you within 24 hours to confirm your
                      appointment
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Clinic Location
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">
                    {CONTACT_INFO.ADDRESS.FULL}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={CONTACT_INFO.ADDRESS.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 space-x-2 font-semibold text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center h-96 bg-gray-200 rounded-2xl">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 w-12 h-12 text-gray-400" />
                <p className="text-gray-600">
                  Interactive map would be embedded here
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {CONTACT_INFO.ADDRESS.FULL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
