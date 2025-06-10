import React from 'react';
import Link from 'next/link';
import { Github, Mail, MapPin, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🐝</span>
              </div>
              <h3 className="text-xl font-bold text-white">BeeSight</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A comprehensive bee productivity monitoring and analysis platform designed to enhance
              beekeeping practices in Uganda through IoT sensors, computer vision, and machine learning.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <MapPin size={16} />
              <span>Makerere University, Kampala, Uganda</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar size={16} />
              <span>BSE25-26 Final Year Project</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Development Blog</Link></li>
              <li><Link href="/documents" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:aheebwasteve3@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Mail size={16} />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/aheebwa32/FINAL-BSE25-26" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BeeSight Development Team - BSE25-26. Built with ❤️ for sustainable beekeeping in Uganda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;