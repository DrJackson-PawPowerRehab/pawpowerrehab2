import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would come from an API or CMS
  const post = {
    title: 'Post-Surgery Recovery: What Every Pet Owner Should Know',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        When your beloved pet undergoes surgery, the recovery period is just as important as the procedure itself. 
        Understanding what to expect and how to provide the best care during this critical time can make the 
        difference between a good recovery and an excellent one.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The First 24-48 Hours</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        The immediate post-operative period requires careful monitoring and gentle care. Your pet may still 
        be groggy from anesthesia, and it's normal for them to be less active than usual. Here's what you 
        should watch for:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Appetite gradually returning within 12-24 hours</li>
        <li>Normal urination and bowel movements</li>
        <li>Alert and responsive behavior when awake</li>
        <li>Incision site remaining clean and dry</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Creating a Recovery Environment</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Your home environment plays a crucial role in your pet's recovery. Consider these modifications:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Set up a quiet, comfortable space away from household traffic</li>
        <li>Remove stairs and jumping opportunities</li>
        <li>Provide non-slip surfaces on smooth floors</li>
        <li>Keep food and water easily accessible</li>
        <li>Ensure the area is well-ventilated but not drafty</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Managing Pain and Medication</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Pain management is essential for proper healing. Follow your veterinarian's medication schedule exactly, and watch for signs that your pet may need additional pain relief:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Restlessness or difficulty settling</li>
        <li>Excessive panting or drooling</li>
        <li>Loss of appetite beyond the first day</li>
        <li>Unusual vocalization or whimpering</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">When to Begin Physical Therapy</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Physical therapy typically begins 2-5 days after surgery, depending on the procedure. Early intervention can:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Reduce swelling and inflammation</li>
        <li>Prevent muscle atrophy</li>
        <li>Maintain joint mobility</li>
        <li>Accelerate the healing process</li>
        <li>Improve overall outcomes</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Warning Signs to Watch For</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Contact your veterinarian immediately if you notice any of these concerning signs:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Excessive swelling, redness, or discharge at the incision site</li>
        <li>Vomiting or diarrhea that persists beyond 24 hours</li>
        <li>Difficulty breathing or excessive panting</li>
        <li>Complete loss of appetite for more than 24 hours</li>
        <li>Inability to urinate or defecate</li>
        <li>Severe lethargy or unresponsiveness</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Road to Full Recovery</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Recovery times vary depending on the type of surgery, your pet's age, and overall health. Orthopedic surgeries typically require 8-12 weeks for complete recovery, while soft tissue procedures may heal in 2-4 weeks. Remember that every pet is unique, and patience is key to achieving the best possible outcome.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6">
        At Paw Power Rehab, we work closely with your veterinary surgeon to create a comprehensive recovery plan tailored to your pet's specific needs. Our goal is not just to help your pet heal, but to help them return to their happiest, most active life possible.
      </p>
    `,
    author: 'Dr. Sarah Mitchell',
    date: '2024-12-15',
    category: 'Surgery Recovery',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readTime: '8 min read',
    tags: ['Surgery', 'Recovery', 'Post-Op Care', 'Pain Management', 'Physical Therapy']
  };

  const relatedPosts = [
    {
      title: 'Understanding Canine Hip Dysplasia: Signs, Treatment, and Prevention',
      slug: 'canine-hip-dysplasia-guide',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'The Benefits of Hydrotherapy for Senior Dogs',
      slug: 'hydrotherapy-benefits-senior-dogs',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'At-Home Exercises to Maintain Your Pet\'s Mobility',
      slug: 'at-home-mobility-exercises',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Meta */}
        <div className="bg-gray-50 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start space-x-6">
              <img
                src="https://images.pexels.com/photos/4269505/pexels-photo-4269505.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Dr. Sarah Mitchell"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Mitchell</h3>
                <p className="text-blue-600 font-medium mb-3">Lead Veterinary Physical Therapist</p>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Mitchell has over 15 years of experience in veterinary medicine and rehabilitation. 
                  She founded Paw Power Rehab to provide comprehensive therapy services for pets 
                  recovering from injury and surgery. She holds certifications in canine rehabilitation 
                  therapy and is passionate about helping pets return to their active, happy lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <p className="text-gray-600">Continue reading for more pet health and rehabilitation insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                to={`/blog/${relatedPost.slug}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Questions About Your Pet's Recovery?
            </h2>
            <p className="text-xl text-blue-100">
              Our experienced team is here to help guide you through every step 
              of your pet's rehabilitation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/faq"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;