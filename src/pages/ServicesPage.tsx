import {
  MousePointerClick,
  Hand,
  Dumbbell,
  Zap,
  CheckCircle,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Hand,
      title: "Initial Consultation",
      description:
        "Comprehensive orthopedic and neurological evaluation utilizing:",
      benefits: [
        "Hands-on techniques including massage, joint mobilization, and stretching",
        "Movement and gait analysis",
        "Postural assessment",
      ],
      duration: "45-60 minutes",
      price: "$235",
    },
    {
      icon: Dumbbell,
      title: "Follow-up Visit",
      description:
        "Continued therapy with customized exercise programs using specialized equipment and techniques.",
      benefits: [
        "Pain Relief",
        "Strength building",
        "Balance improvement",
        "Endurance development",
      ],
      duration: "30-45 minutes",
      price: "$185",
    },
  ];

  const conditions = [
    "Post-surgical recovery",
    "Arthritis and joint pain",
    "Hip / Elbow dysplasia",
    "Spinal cord injuries",
    "Muscle strains and sprains",
    "Neurological conditions",
    "Obesity and weight management",
    "Senior pet mobility issues",
    "Athletic performance enhancement",
    "Chronic pain management",
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-6 sm:py-20 bg-gradient-to-br from-accent10 to-primary10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-2 text-center sm:mb-16">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 text-primary lg:text-5xl">
              Personalized Physical Therapy at Home
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              Paw Power Rehab provides fully mobile canine rehabilitation
              services, bringing individualized therapy directly to your home.
              By treating pets in their everyday environment, we can better
              evaluate mobility challenges, create customized exercise plans,
              and support lasting progress between visits.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl"
                >
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-secondary rounded-2xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-600">
                        {service.description}
                      </p>

                      <div className="mb-6 space-y-2">
                        <h4 className="font-medium text-gray-900">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          {service.duration && (
                            <div className="font-medium">
                              Duration: {service.duration}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-secondary">
                            {service.price}
                          </div>
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Conditions we treat
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our experienced team has successfully treated a wide range of
                conditions, from acute injuries to chronic conditions requiring
                long-term management.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-accent" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/photo-1.jpg"
                alt="Dog receiving physical therapy treatment"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Treatment Process
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Every pet receives individualized care through our comprehensive,
              evidence-based approach to rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary10">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Initial Assessment
              </h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your pet's condition, mobility, and
                pain levels
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary10">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Treatment Plan
              </h3>
              <p className="text-gray-600">
                Customized rehabilitation program tailored to your pet's
                specific needs
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary10">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Active Treatment
              </h3>
              <p className="text-gray-600">
                Regular therapy sessions using appropriate modalities and
                techniques
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary10">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Progress Monitoring
              </h3>
              <p className="text-gray-600">
                Ongoing assessment and plan adjustments to optimize recovery
                outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Ready to Start Your Pet's Healing Journey?
            </h2>
            <p className="text-xl text-white">
              Schedule a consultation today and let our expert team create a
              personalized treatment plan for your beloved companion.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact#appointment-section"
                className="px-8 py-4 font-semibold transition-all duration-300 transform bg-white rounded-full shadow-lg text-primary hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
              >
                Book Consultation
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 font-semibold text-white transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-primary"
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

export default ServicesPage;
