import React from 'react';
import { Waves, Hand, Dumbbell, Zap, Heart, Clock, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Waves,
      title: 'Hydrotherapy',
      description: 'Underwater treadmill and swimming therapy for low-impact exercise and joint mobility.',
      benefits: [
        'Reduced joint stress and pain',
        'Improved cardiovascular fitness',
        'Enhanced muscle strength',
        'Faster recovery from surgery'
      ],
      duration: '30-45 minutes',
      price: 'Starting at $85'
    },
    {
      icon: Hand,
      title: 'Manual Therapy',
      description: 'Hands-on techniques including massage, joint mobilization, and stretching.',
      benefits: [
        'Pain reduction and relaxation',
        'Improved circulation',
        'Enhanced flexibility',
        'Reduced muscle tension'
      ],
      duration: '45-60 minutes',
      price: 'Starting at $75'
    },
    {
      icon: Dumbbell,
      title: 'Therapeutic Exercise',
      description: 'Customized exercise programs using specialized equipment and techniques.',
      benefits: [
        'Strength building',
        'Balance improvement',
        'Coordination enhancement',
        'Endurance development'
      ],
      duration: '30-45 minutes',
      price: 'Starting at $70'
    },
    {
      icon: Zap,
      title: 'Laser Therapy',
      description: 'Class IV laser therapy for pain relief and accelerated healing.',
      benefits: [
        'Reduced inflammation',
        'Pain management',
        'Accelerated tissue repair',
        'Non-invasive treatment'
      ],
      duration: '15-20 minutes',
      price: 'Starting at $45'
    },
    {
      icon: Heart,
      title: 'Post-Surgical Rehabilitation',
      description: 'Comprehensive recovery programs following orthopedic and neurological surgeries.',
      benefits: [
        'Faster recovery times',
        'Reduced complications',
        'Optimal surgical outcomes',
        'Pain management'
      ],
      duration: '45-60 minutes',
      price: 'Package pricing available'
    },
    {
      icon: Clock,
      title: 'Chronic Condition Management',
      description: 'Long-term therapy programs for arthritis, hip dysplasia, and other chronic conditions.',
      benefits: [
        'Improved quality of life',
        'Slower disease progression',
        'Enhanced mobility',
        'Pain control'
      ],
      duration: '30-45 minutes',
      price: 'Monthly packages available'
    }
  ];

  const conditions = [
    'Post-surgical recovery (ACL, hip replacement, spinal surgery)',
    'Arthritis and joint pain',
    'Hip dysplasia',
    'Spinal cord injuries',
    'Muscle strains and sprains',
    'Neurological conditions',
    'Obesity and weight management',
    'Senior pet mobility issues',
    'Athletic performance enhancement',
    'Chronic pain management'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Therapy Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a complete range of evidence-based physical therapy treatments 
              designed to address your pet's specific needs and rehabilitation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-4 rounded-2xl">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="font-medium text-gray-900">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-500" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          <div className="font-medium">Duration: {service.duration}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-blue-600">{service.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Conditions We Treat
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced team has successfully treated a wide range of conditions, 
                from acute injuries to chronic conditions requiring long-term management.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dog receiving physical therapy treatment"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every pet receives individualized care through our comprehensive, 
              evidence-based approach to rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your pet's condition, mobility, and pain levels</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Treatment Plan</h3>
              <p className="text-gray-600">Customized rehabilitation program tailored to your pet's specific needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Active Treatment</h3>
              <p className="text-gray-600">Regular therapy sessions using appropriate modalities and techniques</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Progress Monitoring</h3>
              <p className="text-gray-600">Ongoing assessment and plan adjustments to optimize recovery outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Your Pet's Recovery?
            </h2>
            <p className="text-xl text-blue-100">
              Contact us today to schedule an initial consultation and learn how 
              our comprehensive therapy services can help your pet heal and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:555-123-7297"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Call (555) 123-PAWS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;