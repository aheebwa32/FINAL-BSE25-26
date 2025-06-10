import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'
import { Calendar, Clock, User, ArrowRight, Tag } from '@/components/icons'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  const categories = [
    { name: 'All Posts', count: posts.length, color: 'bg-gray-100 text-gray-800' },
    { name: 'Development', count: posts.filter(p => p.category === 'development').length, color: 'bg-blue-100 text-blue-800' },
    { name: 'Design', count: posts.filter(p => p.category === 'design').length, color: 'bg-purple-100 text-purple-800' },
    { name: 'Research', count: posts.filter(p => p.category === 'research').length, color: 'bg-green-100 text-green-800' },
    { name: 'Testing', count: posts.filter(p => p.category === 'testing').length, color: 'bg-red-100 text-red-800' },
    { name: 'Documentation', count: posts.filter(p => p.category === 'documentation').length, color: 'bg-amber-100 text-amber-800' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="text-center py-12 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-6">
            BeeSight Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and updates from our software engineering journey. 
            Discover the latest in development, design, and technology.
          </p>
        </section>

        {/* Categories Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${category.color} border border-opacity-20`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        {posts.filter(post => post.featured).length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {posts.filter(post => post.featured).slice(0, 2).map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
                    {post.image && (
                      <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                        <Tag className="text-amber-500 h-12 w-12" />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize
                          ${post.category === 'development' ? 'bg-blue-100 text-blue-800' : ''}
                          ${post.category === 'design' ? 'bg-purple-100 text-purple-800' : ''}
                          ${post.category === 'research' ? 'bg-green-100 text-green-800' : ''}
                          ${post.category === 'testing' ? 'bg-red-100 text-red-800' : ''}
                          ${post.category === 'documentation' ? 'bg-amber-100 text-amber-800' : ''}
                        `}>
                          {post.category}
                        </span>
                        <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-semibold">
                          FEATURED
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="text-amber-500 group-hover:translate-x-1 transition-transform h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Posts</h2>
          {posts.length === 0 ? (              <div className="text-center py-16">
                <div className="bg-white rounded-2xl p-12 shadow-lg border border-amber-100 max-w-md mx-auto">
                  <Tag className="text-amber-400 mx-auto mb-4 h-16 w-16" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts yet</h3>
                  <p className="text-gray-600 mb-6">Be the first to share your insights with the BeeSight community.</p>
                  <Link 
                    href="/admin" 
                    className="inline-flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    <span>Create First Post</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100 h-full flex flex-col">
                    {post.image && (
                      <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                        <Tag className="text-amber-500 h-8 w-8" />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize
                          ${post.category === 'development' ? 'bg-blue-100 text-blue-800' : ''}
                          ${post.category === 'design' ? 'bg-purple-100 text-purple-800' : ''}
                          ${post.category === 'research' ? 'bg-green-100 text-green-800' : ''}
                          ${post.category === 'testing' ? 'bg-red-100 text-red-800' : ''}
                          ${post.category === 'documentation' ? 'bg-amber-100 text-amber-800' : ''}
                        `}>
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Want to contribute?</h2>
            <p className="text-xl mb-8 opacity-90">Share your knowledge and experiences with the BeeSight community.</p>
            <Link 
              href="/admin" 
              className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <span>Write a Post</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}