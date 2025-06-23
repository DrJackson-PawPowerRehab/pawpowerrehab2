import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, Mail } from 'lucide-react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Information',
      questions: [
        {
          question: 'What is veterinary physical therapy?',
          answer: 'Veterinary physical therapy is a specialized field that uses evidence-based techniques to help pets recover from injury, surgery, or manage chronic conditions. It includes manual therapy, therapeutic exercises, hydrotherapy, laser therapy, and other modalities to improve mobility, reduce pain, and enhance quality of life.'
        },
        {
          question: 'How do I know if my pet needs physical therapy?',
          answer: 'Physical therapy may benefit your pet if they are recovering from surgery, have been diagnosed with arthritis or hip dysplasia, show signs of pain or stiffness, have difficulty getting around, or are a senior pet experiencing mobility issues. Your veterinarian can help determine if physical therapy would be beneficial.'
        },
        {
          question: 'Is physical therapy safe for all pets?',
          answer: 'Physical therapy is generally very safe when performed by trained professionals. However, we conduct a thorough evaluation before starting any treatment program. Some conditions may require modifications to the therapy approach, and we always work within your pet\'s comfort level and abilities.'
        },
        {
          question: 'How long does each session last?',
          answer: 'Session length varies depending on the treatment type and your pet\'s condition. Most sessions range from 30-60 minutes. Initial evaluations typically take 60-90 minutes to allow for comprehensive assessment and treatment planning.'
        }
      ]
    },
    {
      title: 'Treatment & Recovery',
      questions: [
        {
          question: 'How many sessions will my pet need?',
          answer: 'The number of sessions varies greatly depending on your pet\'s condition, age, and response to treatment. Some pets see improvement in just a few sessions, while others with chronic conditions may benefit from ongoing therapy. We typically reassess progress every 4-6 sessions and adjust the treatment plan accordingly.'
        },
        {
          question: 'When can my pet start therapy after surgery?',
          answer: 'The timing depends on the type of surgery and your surgeon\'s recommendations. Some gentle therapies can begin as early as 2-5 days post-surgery, while others may need to wait 2-3 weeks. We always coordinate with your veterinary surgeon to ensure optimal timing.'
        },
        {
          question: 'Will my pet be in pain during therapy?',
          answer: 'Our goal is to reduce pain, not cause it. All treatments are designed to be comfortable and stress-free. We monitor your pet closely during sessions and adjust techniques as needed. Many pets actually enjoy their therapy sessions and show excitement when they arrive.'
        },
        {
          question: 'Can I do exercises at home with my pet?',
          answer: 'Yes! Home exercises are often an important part of the recovery process. We provide detailed instructions and demonstrations for safe, effective exercises you can do at home. These complement the professional treatments and help accelerate recovery.'
        }
      ]
    },
    {
      title: 'Appointments & Logistics',
      questions: [
        {
          question: 'Do I need a referral from my veterinarian?',
          answer: 'While we welcome referrals from veterinarians, they are not always required. However, we do recommend discussing physical therapy with your vet, especially if your pet has been diagnosed with a specific condition or had recent surgery.'
        },
        {
          question: 'What should I bring to the first appointment?',
          answer: 'Please bring any recent medical records, X-rays, or surgical reports related to your pet\'s condition. Also bring a list of current medications and any specific concerns or questions you have. Your pet should come on a leash or in a carrier as appropriate.'
        },
        {
          question: 'How should I prepare my pet for therapy?',
          answer: 'Keep your pet calm and comfortable before the appointment. Avoid heavy meals 2 hours before the session. If your pet is anxious about new places, consider bringing a favorite toy or blanket. Let us know about any behavioral concerns when scheduling.'
        },
        {
          question: 'What if my pet doesn\'t cooperate during therapy?',
          answer: 'Our team is experienced in working with anxious or uncooperative pets. We use positive reinforcement, go at your pet\'s pace, and may modify techniques to accommodate their comfort level. In some cases, we may recommend conditioning visits to help your pet become comfortable with the environment.'
        }
      ]
    },
    {
      title: 'Costs & Insurance',
      questions: [
        {
          question: 'How much does physical therapy cost?',
          answer: 'Costs vary depending on the type and length of treatment. Individual sessions typically range from $70-120, with package deals available for multiple sessions. We provide detailed estimates after the initial evaluation and work with you to create an affordable treatment plan.'
        },
        {
          question: 'Does pet insurance cover physical therapy?',
          answer: 'Many pet insurance policies do cover physical therapy, especially when medically necessary. Coverage varies by provider and policy. We recommend checking with your insurance company and can provide documentation to support your claims.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we understand that veterinary care can be expensive. We offer flexible payment options and can discuss payment plans for extended treatment programs. Our goal is to make therapy accessible for pets who need it.'
        },
        {
          question: 'Are there any additional costs I should expect?',
          answer: 'The treatment fee typically covers all therapy provided during the session. Additional costs might include specialized equipment for home use or follow-up consultations. We always discuss any additional recommendations and costs before proceeding.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about pet physical therapy, 
              treatment options, and what to expect during your visit.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No results found for "{searchTerm}". Try a different search term.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div
                          key={questionIndex}
                          className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              )}
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-600 leading-relaxed">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our friendly team is here to help. Don't hesitate to reach out 
              with any concerns about your pet's health and rehabilitation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team about your pet's needs
              </p>
              <a
                href="tel:555-123-7297"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                (555) 123-PAWS
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us your questions and we'll respond promptly
              </p>
              <a
                href="mailto:info@pawsteprehab.com"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                info@pawsteprehab.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center md:col-span-2 lg:col-span-1">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Phone className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Consultation</h3>
              <p className="text-gray-600 mb-4">
                Book a consultation to discuss your pet's specific needs
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-12 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-red-900 mb-2">Emergency Situations</h3>
            <p className="text-red-700 mb-4">
              For after-hours emergencies, please contact your primary veterinarian or nearest emergency clinic. 
              Physical therapy services are not appropriate for acute medical emergencies.
            </p>
            <p className="text-sm text-red-600">
              If your pet is experiencing severe pain, difficulty breathing, or other emergency symptoms, 
              seek immediate veterinary care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;