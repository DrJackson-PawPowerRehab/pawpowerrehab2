import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'Post-Surgery Recovery: What Every Pet Owner Should Know',
    excerpt: 'A comprehensive guide to helping your pet recover safely and effectively after orthopedic surgery, including timeline expectations and home care tips.',
    author: 'Dr. Sarah Mitchell',
    date: '2024-12-15',
    category: 'Surgery Recovery',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'post-surgery-recovery-guide',
    readTime: '8 min read'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Understanding Canine Hip Dysplasia: Signs, Treatment, and Prevention',
      excerpt: 'Learn about the common signs of hip dysplasia in dogs, available treatment options, and how physical therapy can improve your pet\'s quality of life.',
      author: 'Jessica Thompson',
      date: '2024-12-10',
      category: 'Orthopedic Conditions',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'canine-hip-dysplasia-guide',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'The Benefits of Hydrotherapy for Senior Dogs',
      excerpt: 'Discover how water-based therapy can help older dogs maintain mobility, reduce arthritis pain, and improve overall quality of life.',
      author: 'Mark Rodriguez',
      date: '2024-12-05',
      category: 'Senior Pet Care',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'hydrotherapy-benefits-senior-dogs',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'At-Home Exercises to Maintain Your Pet\'s Mobility',
      excerpt: 'Simple, safe exercises you can do at home to help maintain your pet\'s strength, flexibility, and overall mobility between therapy sessions.',
      author: 'Dr. Sarah Mitchell',
      date: '2024-11-28',
      category: 'Exercise & Wellness',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'at-home-mobility-exercises',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Recognizing Pain in Pets: Subtle Signs Every Owner Should Know',
      excerpt: 'Pets often hide their pain well. Learn to recognize the subtle behavioral and physical signs that may indicate your pet is experiencing discomfort.',
      author: 'Jessica Thompson',
      date: '2024-11-20',
      category: 'Pet Health',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'recognizing-pain-in-pets',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Laser Therapy: A Non-Invasive Solution for Pet Pain Relief',
      excerpt: 'Explore how Class IV laser therapy works, its benefits for various conditions, and what to expect during your pet\'s treatment sessions.',
      author: 'Mark Rodriguez',
      date: '2024-11-15',
      category: 'Treatment Options',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: 'laser-therapy-pain-relief',
      readTime: '5 min read'
    }
  ];

  const categories = [
    'All Posts',
    'Surgery Recovery',
    'Orthopedic Conditions',
    'Senior Pet Care',
    'Exercise & Wellness',
    'Pet Health',
    'Treatment Options'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pet Health & Rehabilitation Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert insights, practical tips, and the latest information about 
              pet rehabilitation, wellness, and recovery from our experienced team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Recent Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Stay Updated with Pet Health Tips
            </h2>
            <p className="text-xl text-blue-100">
              Subscribe to our newsletter for the latest articles, rehabilitation tips, 
              and expert advice delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-transparent focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-20 outline-none"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;