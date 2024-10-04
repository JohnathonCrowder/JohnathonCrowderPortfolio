import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LuxuryDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
    <div className="mx-4 text-[#B8A04A]">✦</div>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-light text-center text-[#E8E8E8] mb-6 tracking-wide">Get in Touch</h2>
          <LuxuryDivider />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-[#1C1C22]/80 backdrop-blur-sm rounded-lg border border-[#32323A] p-8 hover:border-[#B8A04A] transition-all duration-500">
              <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-[#B8A04A] mr-4"></i>
                  <a href="mailto:johndoe@example.com" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors">
                    johndoe@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-[#B8A04A] mr-4"></i>
                  <a href="tel:+1123456789" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-light text-[#E8E8E8] mt-8 mb-4">Connect with Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="#" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
            
            <div className="bg-[#1C1C22]/80 backdrop-blur-sm rounded-lg border border-[#32323A] p-8 hover:border-[#B8A04A] transition-all duration-500">
              <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#A0A0A8]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#32323A] border border-[#4A4A55] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8A04A] text-[#E8E8E8]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#A0A0A8]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#32323A] border border-[#4A4A55] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8A04A] text-[#E8E8E8]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#A0A0A8]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#32323A] border border-[#4A4A55] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8A04A] text-[#E8E8E8]"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#B8A04A] text-[#0B0B0F] py-2 px-4 rounded-md hover:bg-[#D4BA5A] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;