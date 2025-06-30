import React from "react";
import { Link } from "react-router-dom";
import { Heart, Award, Users, Clock, ArrowRight, Star } from "lucide-react";

const HomePage = () => {
  const services = [
    {
      icon: Heart,
      title: "Dry Needling",
      description:
        "A targeted technique using fine needles to relieve muscle pain, reduce inflammation, and promote healing in injured tissues.",
    },
    {
      icon: Award,
      title: "Manual Therapy",
      description: "Hands-on techniques to improve mobility and reduce pain",
    },
    {
      icon: Users,
      title: "Exercise Programs",
      description: "Customized rehabilitation exercises for optimal recovery",
    },
  ];

  const testimonials = [
    {
      name: "Amanda",
      pet: "Grimm",
      text: "Tommy has been amazing with our dog, Grimm, who was struggling with an old front leg injury. He not only treated him with care, but also researched bracing options and provided targeted exercises to improve his gait and comfort. We highly recommend Tommy—his expertise and compassion truly stand out.",
      rating: 5,
      photo: "openart-image_zBHZwxyl_1750798820686_raw.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 py-20 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
                  Healing Your Pet,
                  <span className="text-blue-600"> One Step</span> at a Time
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-gray-600">
                  Expert physical therapy and rehabilitation services to help
                  your beloved companion recover from injury, surgery, or
                  chronic conditions with compassionate, professional care.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact#appointment-section"
                  className="px-8 py-4 font-semibold text-center text-white transition-all duration-300 transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 font-semibold text-center text-blue-600 transition-all duration-300 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
                >
                  View Services
                </Link>
              </div>

              <div className="flex items-center w-full mt-20 space-x-8">
                <div className="flex flex-col items-center justify-center w-full px-8 py-4 transition-transform duration-300 border-2 shadow-xl bg-gradient-to-br from-emerald-100 to-blue-50 rounded-2xl border-emerald-300 hover:shadow-2xl">
                  <div className="flex items-center justify-center w-full mb-1">
                    <Award className="w-8 h-8 mr-2 text-emerald-600 drop-shadow-lg" />
                    <span className="text-4xl font-extrabold text-emerald-700 drop-shadow">
                      10+
                    </span>
                  </div>
                  <div className="text-base font-semibold tracking-wide text-emerald-800">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden shadow-2xl aspect-w-4 aspect-h-3 rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy golden retriever receiving physical therapy"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute p-6 bg-white shadow-xl -bottom-6 -left-6 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-full bg-emerald-100">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Certified Therapy
                    </div>
                    <div className="text-sm text-gray-600">
                      Licensed Professionals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Comprehensive Therapy Services
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              We offer a full range of evidence-based physical therapy
              treatments tailored to your pet's specific needs and recovery
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:border-blue-200 group"
                >
                  <div className="p-4 mb-6 transition-colors bg-blue-100 rounded-2xl w-fit group-hover:bg-blue-200">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                  Why Pet Owners Trust Paw Power
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  Our commitment to excellence, combined with genuine love for
                  animals, makes us the preferred choice for pet rehabilitation
                  in the region.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-emerald-100">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Certified Specialists
                    </h3>
                    <p className="text-gray-600">
                      Licensed physical therapists with advanced training
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Personalized Care
                    </h3>
                    <p className="text-gray-600">
                      Individual treatment plans tailored to each pet's unique
                      needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-amber-100">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Proven Results
                    </h3>
                    <p className="text-gray-600">
                      Track record of successful rehabilitation outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Veterinary therapist with happy dog"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold lg:text-4xl">
              What Pet Are Parents Saying
            </h2>
            <p className="text-lg text-blue-700">
              Stories from families whose pets we've helped heal
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-xl p-8 bg-white border border-blue-100 shadow-lg rounded-2xl">
              <img
                src={testimonials[0].photo}
                alt={testimonials[0].name}
                className="object-cover w-56 h-56 mb-6 border-4 shadow rounded-3xl "
              />
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="mb-3 text-lg leading-relaxed text-center text-gray-800">
                "{testimonials[0].text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="font-semibold text-slate-800">
                  - {testimonials[0].name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Ready to Start Your Pet's Healing Journey?
            </h2>
            <p className="text-xl text-blue-100">
              Schedule a consultation today and let our expert team create a
              personalized treatment plan for your beloved companion.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact#appointment-section"
                className="px-8 py-4 font-semibold text-blue-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
              >
                Book Consultation
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 font-semibold text-white transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
