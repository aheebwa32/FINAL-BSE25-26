import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  featured: boolean
  readTime: string
  image?: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    
    // Create sample posts
    await createSamplePosts()
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
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
          content,
          category: data.category || 'development',
          tags: data.tags || [],
          featured: data.featured || false,
          readTime: data.readTime || calculateReadTime(content),
          image: data.image
        } as BlogPost
      })
  )

  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      author: data.author || 'BeeSight Team',
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      content: contentHtml,
      category: data.category || 'development',
      tags: data.tags || [],
      featured: data.featured || false,
      readTime: data.readTime || calculateReadTime(content),
      image: data.image
    }
  } catch (error) {
    return null
  }
}

export async function createBlogPost(post: Omit<BlogPost, 'slug' | 'readTime'>): Promise<string> {
  const slug = generateSlug(post.title)
  const readTime = calculateReadTime(post.content)
  
  const frontMatter = `---
title: "${post.title}"
date: "${post.date}"
author: "${post.author}"
excerpt: "${post.excerpt}"
category: "${post.category}"
tags: [${post.tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${post.featured}
readTime: "${readTime}"
${post.image ? `image: "${post.image}"` : ''}
---

${post.content}`

  const filePath = path.join(postsDirectory, `${slug}.md`)
  fs.writeFileSync(filePath, frontMatter)
  
  return slug
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

async function createSamplePosts() {
  const samplePosts = [
    {
      title: "BeeSight Project Kickoff: Our Vision for Smart Beekeeping",
      date: "2024-02-01",
      author: "Aheebwa Stephen",
      excerpt: "Starting our journey to revolutionize beekeeping in Uganda through IoT and machine learning technologies.",
      content: `# Project Introduction

We are excited to introduce BeeSight, our final year project aimed at transforming beekeeping practices in Uganda through innovative technology solutions.

## Project Overview

BeeSight is designed to address critical challenges faced by beekeepers in Uganda:

- Limited access to real-time hive monitoring
- Difficulty in predicting optimal harvest times  
- Lack of data-driven decision support
- Inefficient foraging pattern analysis
- Manual tracking of hive conditions

## Our Solution Approach

We're developing a comprehensive platform that combines:

### 1. Computer Vision Technology
- Automated bee counting at hive entrances
- Activity pattern recognition
- Foraging behavior analysis

### 2. Environmental Monitoring
- Temperature and humidity sensors
- Weather correlation analysis
- Environmental impact assessment

### 3. Machine Learning Analytics
- Predictive modeling for hive productivity
- Pattern recognition for optimal management
- Advisory system for beekeepers

### 4. User-Friendly Interfaces
- Mobile application for field use
- Web dashboard for detailed analytics
- Real-time alert notifications

## Expected Impact

Our solution aims to:
- Increase honey productivity by 20-30%
- Reduce hive management costs
- Improve bee colony health
- Support sustainable beekeeping practices

Stay tuned as we share our development journey, challenges, and breakthroughs!`,
      category: "development",
      tags: ["project-kickoff", "vision", "beekeeping", "iot"],
      featured: true
    },
    {
      title: "Designing the System Architecture: From Concept to Implementation",
      date: "2024-02-15",
      author: "Kukunda Lynn",
      excerpt: "Deep dive into our system architecture decisions and the rationale behind our microservices approach.",
      content: `# System Architecture Design

## Overview

After extensive research and planning, we've settled on a microservices architecture for BeeSight that provides scalability, maintainability, and fault tolerance.

## Architectural Layers

### Data Collection Layer
- **IoT Sensors**: Raspberry Pi-based environmental monitoring
- **Computer Vision**: Smartphone camera integration for bee counting
- **Data Validation**: Real-time preprocessing and error detection

### Processing Layer
- **TensorFlow Lite**: On-device machine learning inference
- **Data Pipeline**: Real-time processing and analysis
- **Event Handling**: Asynchronous event-driven updates

### Business Logic Layer
- **Advisory Engine**: Rule-based recommendation system
- **Analytics Engine**: Pattern recognition and trend analysis
- **Alert Management**: Intelligent notification system

### Presentation Layer
- **Flutter Mobile App**: Cross-platform mobile interface
- **React Web Dashboard**: Comprehensive analytics interface
- **Real-time Synchronization**: Offline-first architecture

## Key Design Decisions

### Why Microservices?
1. **Independent Deployment**: Each service can be updated independently
2. **Scalability**: Scale individual components based on demand
3. **Fault Isolation**: One service failure doesn't crash the entire system
4. **Technology Flexibility**: Use the best tool for each job

### Technology Stack Rationale
- **Flutter**: Single codebase for iOS and Android
- **Python/Flask**: Rapid backend development and ML integration
- **PostgreSQL**: Reliable data storage with complex queries
- **Redis**: High-performance caching and session management
- **TensorFlow**: Industry-standard ML framework

## Challenges and Solutions

### Challenge 1: Offline Operation
**Solution**: Implemented local data buffering and sync mechanisms

### Challenge 2: Real-time Processing
**Solution**: Event-driven architecture with WebSocket connections

### Challenge 3: Scalability
**Solution**: Horizontal scaling with load balancing

Next up: Implementation details and coding standards!`,
      category: "development",
      tags: ["architecture", "microservices", "design", "technology"],
      featured: false
    },
    {
      title: "Computer Vision for Bee Counting: Challenges and Solutions",
      date: "2024-03-01",
      author: "Twebaze Laura",
      excerpt: "Exploring the technical challenges of implementing computer vision for accurate bee detection and counting.",
      content: `# Computer Vision Implementation

## The Challenge

Implementing accurate bee counting using computer vision presents unique challenges:

- **Size Variability**: Bees appear in different sizes based on distance
- **Overlapping Objects**: Bees often cluster together
- **Motion Blur**: Fast-moving bees create blurred images
- **Lighting Conditions**: Varying outdoor lighting affects detection
- **Background Complexity**: Natural hive environments are visually complex

## Our Approach

### 1. Data Collection Strategy
We're collecting diverse training data including:
- Different times of day
- Various weather conditions
- Multiple hive types and locations
- Different bee species common in Uganda

### 2. Model Architecture
Using a modified YOLO (You Only Look Once) approach:
\`\`\`python
# Simplified model structure
class BeeDetector:
    def __init__(self):
        self.model = self.load_pretrained_model()
        self.preprocessor = ImagePreprocessor()
    
    def detect_bees(self, image):
        processed_image = self.preprocessor.enhance(image)
        detections = self.model.predict(processed_image)
        return self.post_process(detections)
\`\`\`

### 3. Preprocessing Pipeline
- **Noise Reduction**: Gaussian blur for noise removal
- **Contrast Enhancement**: Histogram equalization
- **Motion Compensation**: Frame differencing for movement detection

### 4. Tracking Implementation
Implementing multi-object tracking to:
- Count individual bees entering/exiting
- Calculate foraging duration
- Analyze movement patterns

## Performance Metrics

Current achievements:
- **Accuracy**: 89% detection rate in controlled conditions
- **Speed**: 15 FPS on mobile devices
- **Model Size**: 12MB for mobile deployment

## Future Improvements

1. **Data Augmentation**: Synthetic data generation
2. **Transfer Learning**: Leveraging pre-trained models
3. **Edge Optimization**: Further model compression
4. **Real-time Calibration**: Adaptive thresholding

Stay tuned for our testing results and field validation!`,
      category: "research",
      tags: ["computer-vision", "machine-learning", "bees", "detection"],
      featured: false
    },
    {
      title: "User Interface Design: Making Technology Accessible to Beekeepers",
      date: "2024-03-15",
      author: "Kukunda Lynn",
      excerpt: "How we designed intuitive interfaces that work for beekeepers with varying levels of technical expertise.",
      content: `# UI/UX Design Philosophy

## Understanding Our Users

Before designing any interface, we conducted extensive user research with beekeepers across Uganda:

### User Personas
1. **Traditional Beekeeper**: Limited tech experience, prefers simple interfaces
2. **Commercial Beekeeper**: Manages multiple hives, needs comprehensive data
3. **Young Farmer**: Tech-savvy, wants advanced features and customization

## Design Principles

### 1. Simplicity First
- **Minimal Cognitive Load**: Essential information prominently displayed
- **Clear Visual Hierarchy**: Important data stands out
- **Consistent Navigation**: Familiar patterns throughout the app

### 2. Accessibility
- **Language Support**: English and local languages
- **Offline Capability**: Works without internet connection
- **Voice Commands**: Audio feedback for illiterate users

### 3. Cultural Sensitivity
- **Color Choices**: Avoiding colors with negative cultural associations
- **Iconography**: Using universally understood symbols
- **Content Tone**: Respectful and encouraging language

## Mobile App Interface

### Dashboard Design
The main dashboard focuses on:
- **Hive Status Cards**: Quick overview of each hive
- **Alert Notifications**: Prominent warnings and recommendations
- **Quick Actions**: One-tap access to common tasks

### Data Visualization
- **Simple Charts**: Easy-to-understand graphs
- **Color Coding**: Green (good), Yellow (caution), Red (action needed)
- **Progress Indicators**: Visual representation of goals

## Web Dashboard

### Advanced Analytics
- **Detailed Reports**: Comprehensive data analysis
- **Comparison Tools**: Multi-hive performance comparison
- **Export Functionality**: PDF and Excel report generation

### Administrative Features
- **User Management**: Role-based access control
- **System Configuration**: Customizable settings
- **Data Backup**: Automated backup management

## Testing and Iteration

### User Testing Sessions
We conducted testing with 15 beekeepers:
- **Task Completion Rate**: 94% for core functions
- **User Satisfaction**: 4.6/5 average rating
- **Learning Curve**: 85% comfortable after 10 minutes

### Key Insights
1. **Voice Navigation**: Highly requested feature
2. **Offline Maps**: Essential for rural areas
3. **Simplified Alerts**: Too much information overwhelming

## Accessibility Features

### Visual Accessibility
- **High Contrast Mode**: For users with visual impairments
- **Large Text Options**: Adjustable font sizes
- **Screen Reader Support**: Compatible with assistive technologies

### Motor Accessibility
- **Large Touch Targets**: Easy finger navigation
- **Voice Input**: Alternative to typing
- **Gesture Shortcuts**: Quick actions through swipes

Next: Implementation details and code structure!`,
      category: "design",
      tags: ["ui-ux", "accessibility", "user-research", "mobile"],
      featured: false
    },
    {
      title: "Testing Our MVP: First Field Trials with Local Beekeepers",
      date: "2024-04-01",
      author: "Nabasa Rodrick",
      excerpt: "Results from our initial field testing with beekeepers in Kampala and surrounding areas.",
      content: `# Field Testing Results

## Testing Overview

We conducted our first field trials with 8 beekeepers in the Kampala region over a 3-week period.

## Test Setup

### Participating Beekeepers
- **Location**: Wakiso, Mukono, and Kampala districts
- **Experience Level**: 2-15 years of beekeeping
- **Hive Count**: 3-25 hives per beekeeper
- **Technology Comfort**: Mixed levels from basic to advanced

### Testing Equipment
- **Raspberry Pi 4**: Environmental sensors
- **DHT22 Sensors**: Temperature and humidity monitoring
- **Load Cells**: Hive weight measurement
- **Mobile Phones**: Samsung Galaxy A-series for video capture

## Key Metrics Measured

### System Performance
- **Sensor Accuracy**: ±0.5°C temperature, ±2% humidity
- **Data Transmission**: 98.5% successful uploads
- **Battery Life**: 5-7 days per charge cycle
- **App Responsiveness**: Average 2.3 seconds load time

### User Experience
- **Setup Time**: 15-25 minutes per hive
- **Learning Curve**: 2-3 sessions to master basic features
- **Daily Usage**: Average 12 minutes per day
- **Feature Adoption**: 78% used core features regularly

## Positive Feedback

### What Worked Well
1. **Real-time Alerts**: Beekeepers loved immediate notifications
2. **Simple Dashboard**: Easy-to-understand hive status display
3. **Offline Capability**: Worked well in areas with poor connectivity
4. **Weather Integration**: Helpful for planning activities

### Success Stories
> "For the first time, I knew exactly when my bees were most active. I could plan my inspections better." - Mary K., Wakiso

> "The temperature alerts saved one of my hives during the heat wave." - Joseph M., Mukono

## Challenges Identified

### Technical Issues
1. **Camera Positioning**: Difficult to maintain optimal angle
2. **Dust Accumulation**: Sensors required frequent cleaning
3. **Connectivity**: Intermittent network issues in rural areas
4. **Power Management**: Solar charging needed optimization

### User Experience Issues
1. **Language Barrier**: Some users preferred local language
2. **Complex Features**: Advanced analytics were underutilized
3. **Training Need**: More guidance required for setup

## Quantitative Results

### Productivity Improvements
- **Honey Yield**: 23% average increase
- **Inspection Efficiency**: 40% reduction in time
- **Early Problem Detection**: 67% of issues caught early
- **Harvest Timing**: 89% accuracy in optimal timing predictions

### Data Quality
- **Sensor Uptime**: 96.2%
- **Data Accuracy**: 94.8%
- **False Alerts**: Reduced to 8%
- **User Satisfaction**: 4.2/5 stars

## Lessons Learned

### Technical Improvements Needed
1. **Weatherproofing**: Better protection for sensors
2. **Power Optimization**: Longer battery life required
3. **Calibration**: Automatic sensor calibration
4. **Error Handling**: More robust error recovery

### UX Improvements
1. **Onboarding**: Step-by-step setup wizard
2. **Localization**: Luganda language support
3. **Help System**: In-app guidance and tutorials
4. **Simplified Modes**: Basic and advanced user modes

## Next Steps

### Immediate Actions
- Fix critical bugs identified during testing
- Improve sensor weatherproofing
- Add Luganda language support
- Enhance onboarding process

### Future Enhancements
- Machine learning model refinement
- Advanced analytics features
- Community features for knowledge sharing
- Integration with local weather services

## Impact Assessment

The field testing validated our core hypothesis: technology can significantly improve beekeeping outcomes when designed with user needs in mind.

### Key Takeaways
1. **Simplicity Wins**: Users prefer simple, reliable features
2. **Local Context Matters**: Cultural and linguistic considerations crucial
3. **Reliability First**: Consistent performance builds trust
4. **Community Engagement**: Users want to share experiences

The feedback has been invaluable in shaping our final product. We're excited to implement these improvements and continue our journey toward revolutionizing beekeeping in Uganda!`,
      category: "testing",
      tags: ["field-testing", "user-feedback", "mvp", "results"],
      featured: false
    }
  ]

  for (const post of samplePosts) {
    await createBlogPost(post)
  }
}