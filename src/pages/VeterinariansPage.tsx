import { Link } from "react-router-dom";
import {
  Stethoscope,
  FileText,
  Users,
  Award,
  Phone,
  Mail,
  Download,
  CheckCircle,
  Clock,
  Heart,
  UserCheck,
} from "lucide-react";
import { CONTACT_INFO } from "../config/constants";

const VeterinariansPage = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "Specialized Expertise",
      description:
        "Licensed physical therapist with 10+ years of experience and specialized training in animal rehabilitation.",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Every patient receives individualized attention with evidence-based treatment plans tailored to their specific needs.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Convenient appointment times that work with your practice schedule and your clients' needs.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "We work closely with referring veterinarians to ensure seamless continuity of care and optimal patient outcomes.",
    },
  ];

  const conditions = [
    "Post-surgical orthopedic recovery",
    "Cruciate ligament repair rehabilitation",
    "Hip/elbow dysplasia management",
    "Spinal cord injury rehabilitation",
    "Arthritis and joint mobility",
    "Neurological condition support",
    "Chronic pain management",
    "Senior pet mobility enhancement",
    "Athletic performance optimization",
    "Weight management support",
  ];

  const handlePdfDownload = () => {
    // For now, we'll create a placeholder PDF download
    // In a real implementation, this would link to an actual PDF file
    const link = document.createElement("a");
    link.href = "/Paw Power Rehab Vet Referral Form.pdf"; // This would be the actual PDF path
    link.download = "Paw-Power-Rehab-Veterinary-Referral-Form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-6 sm:py-20 bg-gradient-to-br from-accent10 to-primary10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-2 text-center sm:mb-16">
            <h1 className="mb-6 text-4xl font-bold text-primary lg:text-5xl">
              Veterinary Professionals
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              Partner with Paw Power Rehab to provide your clients with
              specialized physical therapy and rehabilitation services that
              complement your medical treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Why Partner with Paw Power Rehab?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Enhance your patient care with specialized rehabilitation services
              that support faster recovery and improved quality of life for your
              clients' pets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:border-secondary10 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="p-4 transition-colors bg-secondary rounded-2xl group-hover:bg-secondary10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        {benefit.description}
                      </p>
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
                Conditions We Treat
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our comprehensive rehabilitation services are designed to
                support recovery and improve quality of life across a wide range
                of conditions commonly seen in veterinary practice.
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
                alt="Veterinarian examining a dog"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with PDF Download */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-4 mx-auto mb-8 bg-white rounded-full bg-opacity-20 w-fit">
              <FileText className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Ready to Start Referring Patients?
            </h2>
            <p className="text-xl text-white">
              Download our veterinary referral form to begin partnering with Paw
              Power Rehab and provide your clients with exceptional
              rehabilitation services.
            </p>

            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <button
                onClick={handlePdfDownload}
                className="inline-flex items-center px-8 py-4 space-x-3 font-semibold transition-all duration-300 transform bg-white rounded-full shadow-lg text-primary hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
              >
                <Download className="w-6 h-6" />
                <span>Download Referral Form (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information for Veterinarians */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Professional Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-secondary">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Dr. Thomas Jackson, PT, DPT
                      </h4>
                      <p className="text-gray-600">Lead Physical Therapist</p>
                      <p className="text-sm text-gray-500">
                        PT, DPT, Cert. DN, Cert. SMT, Dip Osteopractic, CCAT
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-secondary">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">
                        <a
                          href={CONTACT_INFO.PHONE.HREF}
                          className="hover:underline"
                        >
                          {CONTACT_INFO.PHONE.DISPLAY}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-secondary">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        <a
                          href={`mailto:${CONTACT_INFO.EMAIL.DOCTOR}`}
                          className="hover:underline"
                        >
                          {CONTACT_INFO.EMAIL.DOCTOR}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Professional Standards
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="flex-shrink-0 w-5 h-5 mt-1 text-accent" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Licensed & Certified
                      </h4>
                      <p className="text-gray-600">
                        Licensed Physical Therapist with specialized animal
                        rehabilitation training
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-accent" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Evidence-Based Practice
                      </h4>
                      <p className="text-gray-600">
                        Treatment protocols based on current research and best
                        practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="flex-shrink-0 w-5 h-5 mt-1 text-accent" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Collaborative Care
                      </h4>
                      <p className="text-gray-600">
                        Regular communication and progress updates to referring
                        veterinarians
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeterinariansPage;
