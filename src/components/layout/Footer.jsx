import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBagIcon className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">ShopCurate</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Discover curated premium home & living products from top brands. 
              Transform your space with our carefully selected collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297L3.938 16.9l1.305-1.195c.828-.828 1.297-1.946 1.297-3.135 0-1.19-.469-2.308-1.297-3.135L3.938 8.24l1.187-1.209c.876-.807 2.027-1.297 3.324-1.297s2.448.49 3.324 1.297c.828.828 1.297 1.946 1.297 3.135s-.469 2.308-1.297 3.135c-.876.807-2.027 1.297-3.324 1.297z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">All Products</Link>
              <Link to="/category/living-room" className="block text-gray-400 hover:text-white transition-colors">Living Room</Link>
              <Link to="/category/bedroom" className="block text-gray-400 hover:text-white transition-colors">Bedroom</Link>
              <Link to="/category/kitchen-dining" className="block text-gray-400 hover:text-white transition-colors">Kitchen & Dining</Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Returns</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Size Guide</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@shopcurate.com</p>
              <p>📱 +62 812-3456-7890</p>
              <p>🕒 Mon-Fri: 9AM-6PM</p>
              <div className="mt-4">
                <h4 className="font-medium text-white mb-2">Partner Brands</h4>
                <div className="flex space-x-4">
                  <img 
                    src="https://via.placeholder.com/60x30/374151/ffffff?text=INFORMA" 
                    alt="Informa" 
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img 
                    src="https://via.placeholder.com/60x30/374151/ffffff?text=ASCO" 
                    alt="Asco" 
                    className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ShopCurate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
