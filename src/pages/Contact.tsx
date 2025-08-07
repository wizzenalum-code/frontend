import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle,
  Building2,
  GraduationCap
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@inventorshub.in",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subtitle: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Street, Tech City, Bangalore, KA 560001",
      subtitle: "Schedule a visit to our lab"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Saturday",
      subtitle: "9:00 AM - 6:00 PM IST"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'student-classes', label: 'Student Classes' },
    { value: 'school-partnership', label: 'School Partnership' },
    { value: 'teacher-training', label: 'Teacher Training' },
    { value: 'curriculum', label: 'Curriculum Development' },
    { value: 'support', label: 'Technical Support' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-50 to-saffron-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
            Get in <span className="bg-gradient-to-r from-royal-blue-600 to-saffron-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your innovation journey? We'd love to hear from you. 
            Reach out to discuss how we can help inspire the next generation of innovators.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold font-display text-gray-800 mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-emerald-india-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-emerald-india-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What can we help you with?
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors"
                        required
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="h-4 w-4 inline mr-1" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="h-4 w-4 inline mr-1" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your inquiry"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="h-4 w-4 inline mr-1" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Tell us more about your requirements, questions, or how we can help..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-colors resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="card bg-gradient-to-br from-royal-blue-50 to-saffron-50">
                <h3 className="text-xl font-bold font-display text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gradient-to-br from-royal-blue-500 to-saffron-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.title}</h4>
                        <p className="text-gray-700 text-sm">{info.details}</p>
                        <p className="text-gray-500 text-xs mt-1">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="card">
                <h3 className="text-xl font-bold font-display text-gray-800 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@inventorshub.in?subject=Student Classes Inquiry"
                    className="flex items-center p-4 bg-royal-blue-50 hover:bg-royal-blue-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-royal-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-royal-blue-600">Student Classes</div>
                      <div className="text-sm text-gray-600">Enroll your child</div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:hello@inventorshub.in?subject=School Partnership Inquiry"
                    className="flex items-center p-4 bg-saffron-50 hover:bg-saffron-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-saffron-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-saffron-600">School Partnership</div>
                      <div className="text-sm text-gray-600">Setup innovation labs</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Visit Our Innovation Lab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Bangalore's tech district, our state-of-the-art facility is open for visits
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Google Maps integration would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">123 Innovation Street, Tech City, Bangalore, KA 560001</p>
            </div>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-royal-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-royal-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy to Find</h3>
              <p className="text-gray-600 text-sm">Located near major tech parks and easily accessible by metro</p>
            </div>
            
            <div className="text-center">
              <div className="bg-saffron-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-saffron-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Hours</h3>
              <p className="text-gray-600 text-sm">Open Monday-Saturday, 9 AM - 6 PM for visits and consultations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-india-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-emerald-india-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern Facility</h3>
              <p className="text-gray-600 text-sm">3000 sq ft innovation lab with the latest equipment and tools</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
