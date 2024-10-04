import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-xl mb-8 text-gray-700">
              I'm always open to new opportunities and connections. If you have any questions or just want to say hello, feel free to reach out!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-blue-500 mr-4"></i>
                <a href="mailto:johndoe@example.com" className="text-blue-500 hover:text-blue-600">
                  johndoe@example.com
                </a>
              </div>
              <div className="flex items-center mb-6">
                <i className="fas fa-phone text-blue-500 mr-4"></i>
                <a href="tel:+1123456789" className="text-blue-500 hover:text-blue-600">
                  +1 (123) 456-7890
                </a>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Connect with Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-800">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;