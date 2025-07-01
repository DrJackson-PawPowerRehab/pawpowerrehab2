import { Award, Heart, Users, BookOpen } from "lucide-react";

// Import images to ensure proper bundling
import dogImage2 from "/openart-image_P4_BeiZw_1750798712020_raw.png";
import dogImage from "/openart-image_Wo-j3pil_1750798839504_raw.png";

const AboutPage = () => {
  const team = [
    {
      name: "Dr. Thomas Jackson",
      title: "Lead Physical Therapist",
      credentials: "PT, DPT, Cert. DN, Cert. SMT, Dip Osteopractic",
      image: "tommy.webp",
      bio: "With over a decade of experience in physical therapy, Dr. Jackson specializes in rehabilitation. He is driven by his passion for animal welfare and is committed to providing the highest quality care for pets in need of rehabilitation.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Every pet receives individual attention with genuine love and understanding throughout their healing journey.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description:
        "We maintain the highest standards of physical therapy through continuous education and evidence-based practices.",
    },
    {
      icon: Users,
      title: "Family Partnership",
      description:
        "We work closely with pet families, providing education and support for optimal home care and recovery outcomes.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Our team stays current with the latest rehabilitation techniques and technologies to provide the best possible care.",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent10 to-primary10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary lg:text-5xl">
              About Paw Power Rehab
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              Founded on the belief that every pet deserves the best possible
              care, we've dedicated our practice to advancing animal
              rehabilitation through compassionate, evidence-based therapy
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-accent lg:text-4xl">
                Our Story
              </h2>
              <p className="pb-4 text-xl text-primary">
                A Decade of Healing—Now for Pets
              </p>
              <p className="text-lg leading-relaxed text-gray-900">
                With over 10 years of experience as a licensed physical
                therapist, I’ve had the privilege of helping countless
                individuals regain strength, reduce pain, and return to doing
                what they love. Throughout my career, I’ve seen how powerful
                rehabilitation can be—not just physically, but emotionally—and
                I’ve long believed that our animal companions deserve the same
                level of care and attention.
              </p>
              <p className="text-lg leading-relaxed text-gray-900">
                As a lifelong animal lover, I began to see a need in our
                community: pet owners looking for safe, effective ways to
                support their animals through injury recovery, surgery rehab,
                chronic pain, and age-related mobility changes. This inspired me
                to take the next step in my career and begin formal training in
                animal rehabilitation and therapy.
              </p>
              <p className="text-lg leading-relaxed text-gray-900">
                Paw Power Rehab is built on a strong foundation of clinical
                expertise, compassionate care, and a deep commitment to
                improving quality of life. My extensive background in human
                physical therapy allows me to bring a seasoned, evidence-based
                approach to every animal I work with, while I continue expanding
                my education specifically in animal rehabilitation.
              </p>
            </div>
            <div className="relative">
              <img
                src={dogImage2}
                alt="A happy dog"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <img
                src={dogImage}
                alt="A dog"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold text-accent lg:text-4xl">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                At Paw Power Rehab, our mission is simple: to provide
                thoughtful, personalized care that helps your pet feel better,
                move better, and live more fully. We may be new to the animal
                rehab space, but we’re grounded in years of healing
                experience—and we’re honored to support your pet’s wellness
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-b bg-gradient-to-br from-accent to-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Our Core Values
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white">
              These principles guide everything we do, from individual patient
              care to our broader commitment to advancing animal rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 text-center transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
                >
                  <div className="p-4 mx-auto mb-6 bg-secondary rounded-2xl w-fit">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-accent lg:text-4xl">
              Meet Our Expert Team
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our licensed professionals bring years of specialized training and
              genuine passion for animal welfare to every treatment session.
            </p>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full max-w-lg p-8 mx-4 transition-shadow duration-300 bg-white border-2 shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-40 h-40 border-4 border-blue-100 shadow-md rounded-2xl"
                  />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-primary">
                  {member.name}
                </h3>
                <div className="mb-1 font-medium text-accent">
                  {member.title}
                </div>
                <div className="mb-3 text-sm text-gray-500">
                  {member.credentials}
                </div>
                <p className="text-center text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-20 bg-gradient-to-tl from-accent to-primary">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Professional Credentials & Certifications
            </h2>
            <p className="text-xl leading-relaxed text-blue-100">
              Our team maintains the highest professional standards through
              continuous education and certification with leading animal
              rehabilitation organizations.
            </p>
            <div className="grid justify-center grid-cols-1 gap-8 mt-12 md:grid-cols-5">
              <div className="p-6 bg-white bg-opacity-10 rounded-xl">
                <div className="mb-2 text-2xl font-bold text-white">PT</div>
                <div className="text-blue-100">Physical Therapist</div>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-xl">
                <div className="mb-2 text-2xl font-bold text-white">DPT</div>
                <div className="text-blue-100">Doctor of Physical Therapy</div>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-xl">
                <div className="mb-2 text-2xl font-bold text-white">
                  Cert. DN
                </div>
                <div className="text-blue-100">Certified in Dry Needling</div>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-xl">
                <div className="mb-2 text-2xl font-bold text-white">
                  Cert. SMT
                </div>
                <div className="text-blue-100">
                  Certified in Spinal Manipulative Therapy
                </div>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-xl">
                <div className="mb-2 text-xl font-bold text-white">
                  Dip Osteopractic
                </div>
                <div className="text-blue-100">Diploma in Osteopractic</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
