import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    concern: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    hearAboutUs: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        petName: '',
        petType: '',
        concern: '',
        appointmentType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        hearAboutUs: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md">
          <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We've received your appointment request and will contact you within 24 hours to confirm your booking.
          </p>
          <p className="text-sm text-gray-500">
            For urgent matters, please call us at (555) 123-PAWS
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact & Request Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your pet's healing journey? Schedule a consultation 
              with our expert team or get in touch with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">(706) 897 - 6897</p>
                      <p className="text-sm text-gray-500">Call or Text</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Emails</h3>
                      <p className="text-gray-600">Drjackson@pawpowerrehab.com</p>
                      <p className="text-gray-600">Admin@pawpowerrehab.com</p>
                      <p className="text-sm text-gray-500">We will respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">Cohutta Animal Clinic<br />24 Lance Street<br />Blue Ridge, GA 30513</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <div className="text-gray-600 text-sm">
                        <p>By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Emergency Situations</h4>
                  <p className="text-sm text-blue-700">
                    For after-hours emergencies, please contact your primary veterinarian 
                    or nearest emergency clinic.
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Request an Appointment</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
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
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Pet Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-2">
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
                        <label htmlFor="petType" className="block text-sm font-medium text-gray-700 mb-2">
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
                      <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-2">
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
                        <option value="post-surgery">Post-Surgical Recovery</option>
                        <option value="arthritis">Arthritis/Joint Pain</option>
                        <option value="hip-dysplasia">Hip/Elbow Dysplasia</option>
                        <option value="injury">Injury/Trauma</option>
                        <option value="mobility">Mobility Issues</option>
                        <option value="pain-management">Pain Management</option>
                        <option value="pain-management">Neurological</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Preferences</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                      <div className="flex flex-col">
                        <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
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
                          <option value="consultation">Initial Consultation</option>
                          <option value="evaluation">Evaluation Only</option>
                          <option value="treatment">Treatment Session</option>
                          <option value="follow-up">Follow-up Visit</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please share any additional details about your pet's condition, current medications, or specific concerns..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="veterinarian">Veterinarian Referral</option>
                      <option value="google">Google Search</option>
                      <option value="friend">Friend/Family</option>
                      <option value="social-media">Social Media</option>
                      <option value="website">Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Submit Appointment Request</span>
                    </button>
                    <p className="text-sm text-gray-500 text-center mt-3">
                      We'll contact you within 24 hours to confirm your appointment
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Clinic Location</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">24 Lance Street Blue Ridge, GA 30513</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps/place/24+Lance+St,+Blue+Ridge,+GA+30513/@34.8743489,-84.3035238,17z/data=!3m1!4b1!4m6!3m5!1s0x885fa7ba9a7d3cc9:0x984e8d2f8d52ab14!8m2!3d34.8743445!4d-84.3009435!16s%2Fg%2F11vqmktgz5?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be embedded here</p>
                <p className="text-sm text-gray-500 mt-2">24 Lance Street Blue Ridge, GA 30513</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
