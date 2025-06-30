import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search, Phone, Mail } from "lucide-react";

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Information",
      questions: [
        {
          question: "What is veterinary physical therapy?",
          answer:
            "Veterinary physical therapy is a specialized field that uses evidence-based techniques to help pets recover from injury, surgery, or manage chronic conditions. It includes manual therapy, therapeutic exercises, hydrotherapy, laser therapy, and other modalities to improve mobility, reduce pain, and enhance quality of life.",
        },
        {
          question: "How do I know if my pet needs physical therapy?",
          answer:
            "Physical therapy may benefit your pet if they are recovering from surgery, have been diagnosed with arthritis or hip dysplasia, show signs of pain or stiffness, have difficulty getting around, or are a senior pet experiencing mobility issues. Your veterinarian can help determine if physical therapy would be beneficial.",
        },
        {
          question: "Is physical therapy safe for all pets?",
          answer:
            "Physical therapy is generally very safe when performed by trained professionals. However, we conduct a thorough evaluation before starting any treatment program. Some conditions may require modifications to the therapy approach, and we always work within your pet's comfort level and abilities.",
        },
        {
          question: "How long does each session last?",
          answer:
            "Session length varies depending on the treatment type and your pet's condition. Most sessions range from 30-60 minutes. Initial evaluations typically take 60-90 minutes to allow for comprehensive assessment and treatment planning.",
        },
      ],
    },
    {
      title: "Treatment & Recovery",
      questions: [
        {
          question: "How many sessions will my pet need?",
          answer:
            "The number of sessions varies greatly depending on your pet's condition, age, and response to treatment. Some pets see improvement in just a few sessions, while others with chronic conditions may benefit from ongoing therapy. We typically reassess progress every 4-6 sessions and adjust the treatment plan accordingly.",
        },
        {
          question: "When can my pet start therapy after surgery?",
          answer:
            "The timing depends on the type of surgery and your surgeon's recommendations. Some gentle therapies can begin as early as 2-5 days post-surgery, while others may need to wait 2-3 weeks. We always coordinate with your veterinary surgeon to ensure optimal timing.",
        },
        {
          question: "Will my pet be in pain during therapy?",
          answer:
            "Our goal is to reduce pain, not cause it. All treatments are designed to be comfortable and stress-free. We monitor your pet closely during sessions and adjust techniques as needed. Many pets actually enjoy their therapy sessions and show excitement when they arrive.",
        },
        {
          question: "Can I do exercises at home with my pet?",
          answer:
            "Yes! Home exercises are often an important part of the recovery process. We provide detailed instructions and demonstrations for safe, effective exercises you can do at home. These complement the professional treatments and help accelerate recovery.",
        },
      ],
    },
    {
      title: "Appointments & Logistics",
      questions: [
        {
          question: "Do I need a referral from my veterinarian?",
          answer:
            "While we welcome referrals from veterinarians, they are not always required. However, we do recommend discussing physical therapy with your vet, especially if your pet has been diagnosed with a specific condition or had recent surgery.",
        },
        {
          question: "What should I bring to the first appointment?",
          answer:
            "Please bring any recent medical records, X-rays, or surgical reports related to your pet's condition. Also bring a list of current medications and any specific concerns or questions you have. Your pet should come on a leash or in a carrier as appropriate.",
        },
        {
          question: "How should I prepare my pet for therapy?",
          answer:
            "Keep your pet calm and comfortable before the appointment. Avoid heavy meals 2 hours before the session. If your pet is anxious about new places, consider bringing a favorite toy or blanket. Let us know about any behavioral concerns when scheduling.",
        },
        {
          question: "What if my pet doesn't cooperate during therapy?",
          answer:
            "Our team is experienced in working with anxious or uncooperative pets. We use positive reinforcement, go at your pet's pace, and may modify techniques to accommodate their comfort level. In some cases, we may recommend conditioning visits to help your pet become comfortable with the environment.",
        },
      ],
    },
    {
      title: "Costs & Insurance",
      questions: [
        {
          question: "How much does physical therapy cost?",
          answer:
            "Costs vary depending on the type and length of treatment. Individual sessions typically range from $70-120, with package deals available for multiple sessions. We provide detailed estimates after the initial evaluation and work with you to create an affordable treatment plan.",
        },
        {
          question: "Does pet insurance cover physical therapy?",
          answer:
            "Many pet insurance policies do cover physical therapy, especially when medically necessary. Coverage varies by provider and policy. We recommend checking with your insurance company and can provide documentation to support your claims.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, we understand that veterinary care can be expensive. We offer flexible payment options and can discuss payment plans for extended treatment programs. Our goal is to make therapy accessible for pets who need it.",
        },
        {
          question: "Are there any additional costs I should expect?",
          answer:
            "The treatment fee typically covers all therapy provided during the session. Additional costs might include specialized equipment for home use or follow-up consultations. We always discuss any additional recommendations and costs before proceeding.",
        },
      ],
    },
  ];

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              Find answers to common questions about pet physical therapy,
              treatment options, and what to expect during your visit.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 pl-12 pr-4 text-lg border border-gray-300 rounded-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">
                No results found for "{searchTerm}". Try a different search
                term.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="pb-4 mb-8 text-2xl font-bold text-gray-900 border-b border-gray-200">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.includes(globalIndex);

                      return (
                        <div
                          key={questionIndex}
                          className="overflow-hidden transition-shadow duration-200 shadow-sm bg-gray-50 rounded-2xl hover:shadow-md"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="pr-4 text-lg font-semibold text-gray-900">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="flex-shrink-0 w-5 h-5 text-blue-600" />
                              ) : (
                                <ChevronDown className="flex-shrink-0 w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="leading-relaxed text-gray-600">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Still Have Questions?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our friendly team is here to help. Don't hesitate to reach out
              with any concerns about your pet's health and rehabilitation
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 text-center bg-white shadow-lg rounded-2xl">
              <div className="p-4 mx-auto mb-6 bg-blue-100 rounded-full w-fit">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Call Us
              </h3>
              <p className="mb-4 text-gray-600">
                Speak directly with our team about your pet's needs
              </p>
              <a
                href="tel:555-123-7297"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                (555) 123-PAWS
              </a>
            </div>

            <div className="p-8 text-center bg-white shadow-lg rounded-2xl">
              <div className="p-4 mx-auto mb-6 rounded-full bg-emerald-100 w-fit">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Email Us
              </h3>
              <p className="mb-4 text-gray-600">
                Send us your questions and we'll respond promptly
              </p>
              <a
                href="mailto:info@pawsteprehab.com"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                info@pawsteprehab.com
              </a>
            </div>

            <div className="p-8 text-center bg-white shadow-lg rounded-2xl md:col-span-2 lg:col-span-1">
              <div className="p-4 mx-auto mb-6 rounded-full bg-amber-100 w-fit">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Schedule Consultation
              </h3>
              <p className="mb-4 text-gray-600">
                Book a consultation to discuss your pet's specific needs
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-12 border-l-4 border-red-500 bg-red-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold text-red-900">
              Emergency Situations
            </h3>
            <p className="mb-4 text-red-700">
              For after-hours emergencies, please contact your primary
              veterinarian or nearest emergency clinic. Physical therapy
              services are not appropriate for acute medical emergencies.
            </p>
            <p className="text-sm text-red-600">
              If your pet is experiencing severe pain, difficulty breathing, or
              other emergency symptoms, seek immediate veterinary care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
