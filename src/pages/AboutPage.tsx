import React from 'react';
import { Award, Heart, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Lead Veterinary Physical Therapist',
      credentials: 'DVM, CCRT, PhD in Animal Rehabilitation',
      image: 'https://images.pexels.com/photos/4269505/pexels-photo-4269505.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years of experience in veterinary medicine and rehabilitation, Dr. Mitchell founded Paw Power to provide comprehensive therapy services for pets in need.'
    },
    {
      name: 'Jessica Thompson',
      title: 'Certified Canine Therapist',
      credentials: 'CCRT, MS in Animal Science',
      image: 'https://images.pexels.com/photos/4269724/pexels-photo-4269724.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Jessica specializes in hydrotherapy and manual therapy techniques, helping pets of all sizes recover from injuries and maintain optimal mobility.'
    },
    {
      name: 'Mark Rodriguez',
      title: 'Rehabilitation Specialist',
      credentials: 'CCRP, Licensed Physical Therapist',
      image: 'https://images.pexels.com/photos/4269728/pexels-photo-4269728.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mark brings human physical therapy expertise to animal rehabilitation, developing innovative exercise programs for complex recovery cases.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every pet receives individual attention with genuine love and understanding throughout their healing journey.'
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'We maintain the highest standards of veterinary physical therapy through continuous education and evidence-based practices.'
    },
    {
      icon: Users,
      title: 'Family Partnership',
      description: 'We work closely with pet families, providing education and support for optimal home care and recovery outcomes.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Our team stays current with the latest rehabilitation techniques and technologies to provide the best possible care.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Paw Power Rehab
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that every pet deserves the best possible care, 
              we've dedicated our practice to advancing animal rehabilitation through 
              compassionate, evidence-based therapy services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Paw Power Rehab was founded in 2010 by Dr. Sarah Mitchell after witnessing 
                the incredible recovery of her own dog following a spinal injury. Inspired by the 
                transformative power of physical therapy, she dedicated her career to bringing 
                advanced rehabilitation services to pets in our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small clinic has grown into a comprehensive rehabilitation center, 
                helping hundreds of pets recover from surgery, injury, and chronic conditions. 
                Our success is measured not just in clinical outcomes, but in the joy we see 
                when pets return to their families stronger and happier than before.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern veterinary clinic interior with therapy equipment"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern therapy equipment and treatment room"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional physical therapy and rehabilitation services that restore 
                mobility, reduce pain, and improve the quality of life for pets while supporting 
                their families throughout the healing process.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every pet deserves the opportunity to live their best life, 
                free from pain and with full mobility. Through our comprehensive approach 
                combining advanced techniques with compassionate care, we help pets not 
                just recover, but thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from individual patient care 
              to our broader commitment to advancing animal rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-blue-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our licensed professionals bring years of specialized training and 
              genuine passion for animal welfare to every treatment session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.title}</div>
                  <div className="text-sm text-gray-500 mb-4">{member.credentials}</div>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Professional Credentials & Certifications
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our team maintains the highest professional standards through continuous education 
              and certification with leading veterinary rehabilitation organizations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-2xl font-bold text-white mb-2">CCRT</div>
                <div className="text-blue-100">Certified Canine Rehabilitation Therapist</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-2xl font-bold text-white mb-2">CCRP</div>
                <div className="text-blue-100">Certified Canine Rehabilitation Practitioner</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-2xl font-bold text-white mb-2">Licensed</div>
                <div className="text-blue-100">State Licensed Veterinary Practice</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;