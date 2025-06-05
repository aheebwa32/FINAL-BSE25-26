import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Tag, Share } from 'lucide-react'
import { getBlogPost, getBlogPosts } from '@/lib/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - BeeSight Blog'
    }
  }

  return {
    title: `${post.title} - BeeSight Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = await getBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 mb-8">
          <div className="space-y-6">
            {/* Category and Featured Badge */}
            <div className="flex items-center gap-3">
              <span className={`px-4 py-2 rounded-full text-sm font-medium capitalize
                ${post.category === 'development' ? 'bg-blue-100 text-blue-800' : ''}
                ${post.category === 'design' ? 'bg-purple-100 text-purple-800' : ''}
                ${post.category === 'research' ? 'bg-green-100 text-green-800' : ''}
                ${post.category === 'testing' ? 'bg-red-100 text-red-800' : ''}
                ${post.category === 'documentation' ? 'bg-amber-100 text-amber-800' : ''}
              `}>
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors">
                <Share size={18} />
                <span>Share</span>
              </button>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag size={12} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 mb-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-code:text-amber-600 prose-code:bg-amber-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={index} href={`/blog/${relatedPost.slug}`} className="group">
                  <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100 h-full">
                    <div className="space-y-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize
                        ${relatedPost.category === 'development' ? 'bg-blue-100 text-blue-800' : ''}
                        ${relatedPost.category === 'design' ? 'bg-purple-100 text-purple-800' : ''}
                        ${relatedPost.category === 'research' ? 'bg-green-100 text-green-800' : ''}
                        ${relatedPost.category === 'testing' ? 'bg-red-100 text-red-800' : ''}
                        ${relatedPost.category === 'documentation' ? 'bg-amber-100 text-amber-800' : ''}
                      `}>
                        {relatedPost.category}
                      </span>

                      <h4 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors leading-tight">
                        {relatedPost.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="flex justify-center pt-8 border-t border-gray-200">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to All Posts</span>
          </Link>
        </section>
      </div>
    </div>
  )
}