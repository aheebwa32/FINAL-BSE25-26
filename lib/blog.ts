import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  category: string
  readTime: string
  image?: string
  featured?: boolean
  content: string
  tags?: string[]
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Check if the blog directory exists
  if (!fs.existsSync(postsDirectory)) {
    // Return sample blog posts if no content directory exists
    return getSampleBlogPosts()
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        author: data.author || 'BeeSight Team',
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        category: data.category || 'development',
        readTime: data.readTime || '5 min read',
        image: data.image,
        featured: data.featured || false,
        tags: data.tags || [],
        content,
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    author: data.author || 'BeeSight Team',
    excerpt: data.excerpt || content.substring(0, 150) + '...',
    category: data.category || 'development',
    readTime: data.readTime || '5 min read',
    image: data.image,
    featured: data.featured || false,
    tags: data.tags || [],
    content,
  } as BlogPost
}

// Sample blog posts for when no content directory exists
function getSampleBlogPosts(): BlogPost[] {
  return [
    {
      slug: 'beesight-project-kickoff',
      title: 'BeeSight Project Kickoff: Revolutionizing Beekeeping in Uganda',
      date: '2024-12-01',
      author: 'Steve Aheebwa',
      excerpt: 'An introduction to the BeeSight project and our mission to enhance bee productivity monitoring through IoT and machine learning.',
      category: 'development',
      readTime: '5 min read',
      image: '/images/blog/beesight-kickoff.jpg',
      featured: true,
      tags: ['IoT', 'beekeeping', 'agriculture', 'Uganda'],
      content: 'This is the beginning of our journey to revolutionize beekeeping in Uganda...'
    },
    {
      slug: 'iot-sensors-for-hive-monitoring',
      title: 'IoT Sensors for Real-time Hive Monitoring',
      date: '2024-12-05',
      author: 'BeeSight Team',
      excerpt: 'Exploring the various IoT sensors we\'re implementing for comprehensive hive monitoring including temperature, humidity, and activity sensors.',
      category: 'research',
      readTime: '7 min read',
      image: '/images/blog/iot-sensors.jpg',
      featured: false,
      tags: ['IoT', 'sensors', 'monitoring', 'hardware'],
      content: 'IoT sensors are the backbone of our monitoring system...'
    },
    {
      slug: 'computer-vision-bee-detection',
      title: 'Computer Vision for Bee Activity Detection',
      date: '2024-12-10',
      author: 'BeeSight Team',
      excerpt: 'How we\'re using computer vision and machine learning to analyze bee behavior patterns and productivity metrics.',
      category: 'development',
      readTime: '6 min read',
      image: '/images/blog/computer-vision.jpg',
      featured: false,
      tags: ['computer-vision', 'machine-learning', 'AI', 'detection'],
      content: 'Computer vision allows us to monitor bee activity without disturbing the hive...'
    }
  ]
}