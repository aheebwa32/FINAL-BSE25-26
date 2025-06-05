import Link from 'next/link'
import { ArrowRight, Users, FileText, BarChart3, Target, Lightbulb, Zap } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: Target,
      title: "Project Vision",
      description: "Revolutionizing beekeeping in Uganda through technology-driven solutions for enhanced productivity and sustainability."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Combining IoT sensors, computer vision, and machine learning to provide real-time hive monitoring and insights."
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Empowering beekeepers with data-driven decisions to improve honey yield and maintain healthy bee colonies."
    }
  ]

  const quickStats = [
    { label: "Team Members", value: "4", description: "Dedicated developers" },
    { label: "Development Phase", value: "Final Year", description: "BSE25-26 Project" },
    { label: "Technology Stack", value: "5+", description: "Modern technologies" },
    { label: "Project Duration", value: "4", description: "Months of development" }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bee-pattern absolute inset-0 opacity-30"></div>
        <div className="relative z-10 text-center py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              BeeSight
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              A Honey Productivity Guide and Monitor for Beekeepers in Uganda
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Follow our development journey as we create an innovative IoT-powered platform 
              that combines computer vision, environmental monitoring, and machine learning 
              to transform beekeeping practices across Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Read Our Blog
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center px-8 py-4 border-2 border-amber-500 text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300"
              >
                Meet the Team
                <Users className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technology to solve real-world challenges in Uganda's agricultural sector
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Overview</h2>
          <p className="text-amber-100 text-lg">Key metrics from our development journey</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-amber-100 font-medium mb-1">{stat.label}</div>
              <div className="text-amber-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Explore Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deep into our development process, documentation, and team insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/blog" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-amber-100 h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <FileText className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Development Blog</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Follow our step-by-step development process, challenges faced, and solutions implemented.
              </p>
              <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                Read Posts →
              </div>
            </div>
          </Link>

          <Link href="/documents" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-amber-100 h-full">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <FileText className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Documentation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Access our comprehensive documentation including SRS, SDD, and technical specifications.
              </p>
              <div className="text-green-600 font-medium group-hover:text-green-700 transition-colors">
                View Docs →
              </div>
            </div>
          </Link>

          <Link href="/analytics" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-amber-100 h-full">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <BarChart3 className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Analytics</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Explore our project metrics, development timeline, and progress analytics.
              </p>
              <div className="text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                View Analytics →
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}