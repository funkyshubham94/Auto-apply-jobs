import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const [email, setEmail] = useState('')

  const features = [
    {
      icon: RocketLaunchIcon,
      title: 'Automated Applications',
      description: 'Apply to hundreds of jobs automatically while you focus on what matters.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Private',
      description: 'Your LinkedIn credentials are encrypted and stored securely in Firebase.'
    },
    {
      icon: ClockIcon,
      title: 'Smart Scheduling',
      description: 'Our AI determines the best times to apply for maximum success rates.'
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Track your application success rates and optimize your strategy.'
    },
    {
      icon: UserGroupIcon,
      title: 'Load Balanced',
      description: 'Distributed automation prevents detection and ensures reliability.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Jobs Applied Daily' },
    { number: '85%', label: 'Success Rate' },
    { number: '7 Days', label: 'Free Trial' },
    { number: '24/7', label: 'Automation' }
  ]

  return (
    <>
      <Head>
        <title>JobAutoApply - Automated LinkedIn Job Applications</title>
        <meta name="description" content="Automate your LinkedIn job applications with AI-powered matching. 7-day free trial. Apply to hundreds of jobs automatically." />
        <meta name="keywords" content="job automation, linkedin jobs, automated applications, job search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-indigo-600">JobAutoApply</h1>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Automate Your
                <span className="text-indigo-600"> Job Search</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Apply to hundreds of LinkedIn jobs automatically with AI-powered matching. 
                Set up once, relax, and let our system find and apply to the perfect jobs for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/signup" 
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  Start 7-Day Free Trial
                </Link>
                <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                  Watch Demo →
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                No credit card required • Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Set up your profile once and let our AI handle the rest. 
                We'll automatically find and apply to jobs that match your criteria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card">
                  <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get Started in 3 Simple Steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sign Up & Set Profile
                </h3>
                <p className="text-gray-600">
                  Create your account and provide your job preferences, experience, and resume.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Connect LinkedIn
                </h3>
                <p className="text-gray-600">
                  Securely provide your LinkedIn credentials. We'll handle the rest automatically.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Relax & Monitor
                </h3>
                <p className="text-gray-600">
                  Watch as our system automatically applies to matching jobs and tracks your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who are already using JobAutoApply to land their dream jobs.
            </p>
            <Link 
              href="/signup" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Free Trial Now
            </Link>
            <p className="text-indigo-200 mt-4 text-sm">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">JobAutoApply</h3>
                <p className="text-gray-400">
                  Automated LinkedIn job applications powered by AI.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/features" className="hover:text-white">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                  <li><Link href="/demo" className="hover:text-white">Demo</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                  <li><Link href="/status" className="hover:text-white">Status</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                  <li><Link href="/security" className="hover:text-white">Security</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 JobAutoApply. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 