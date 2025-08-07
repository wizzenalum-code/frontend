import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Zap,
  Cog,
  Building2,
  BookOpen,
  UserCheck
} from 'lucide-react';

const Services: React.FC = () => {
  const studentClasses = [
    {
      title: "Young Engineers (Ages 8-12)",
      description: "Introduction to basic engineering concepts through fun, hands-on activities",
      duration: "2 hours/week",
      features: ["Basic robotics", "Simple circuits", "3D design", "Creative problem solving"]
    },
    {
      title: "Tech Innovators (Ages 13-15)",
      description: "Advanced projects combining engineering, coding, and design thinking",
      duration: "3 hours/week", 
      features: ["Arduino programming", "Sensor integration", "App development", "Team projects"]
    },
    {
      title: "Future Engineers (Ages 16-18)",
      description: "Professional-level projects preparing students for engineering careers",
      duration: "4 hours/week",
      features: ["Advanced robotics", "IoT projects", "AI/ML basics", "Industry mentorship"]
    }
  ];

  const schoolServices = [
    {
      icon: Building2,
      title: "Lab Infrastructure Setup",
      description: "Complete setup of innovation labs with cutting-edge equipment and safety protocols"
    },
    {
      icon: BookOpen,
      title: "Curriculum Development",
      description: "Custom curriculum design aligned with educational standards and practical learning outcomes"
    },
    {
      icon: UserCheck,
      title: "Teacher Training",
      description: "Comprehensive training programs to empower educators with hands-on teaching methodologies"
    },
    {
      icon: Cog,
      title: "Ongoing Support",
      description: "Continuous support, maintenance, and curriculum updates to ensure program success"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-50 to-saffron-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-royal-blue-600 to-saffron-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive hands-on learning solutions for students and educational institutions across India
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Classes for Students */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-royal-blue-500 to-royal-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-800">Hands-on Classes for Young Engineers</h2>
                  <p className="text-royal-blue-600 font-medium">Inspiring the next generation of innovators</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our age-appropriate classes are designed to nurture curiosity, develop technical skills, and build confidence 
                in young minds. Through project-based learning, students explore robotics, electronics, coding, and design thinking 
                in a supportive and engaging environment.
              </p>

              <div className="space-y-6 mb-8">
                {studentClasses.map((classInfo, index) => (
                  <div key={index} className="card border border-royal-blue-100 hover:border-royal-blue-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold font-display text-gray-800">{classInfo.title}</h3>
                      <div className="flex items-center text-sm text-royal-blue-600 bg-royal-blue-50 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 mr-1" />
                        {classInfo.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{classInfo.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {classInfo.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-india-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-700">
                  <Calendar className="h-5 w-5 text-royal-blue-500 mr-3" />
                  <span>Weekend and holiday batches available</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Award className="h-5 w-5 text-saffron-500 mr-3" />
                  <span>Certificates awarded upon completion</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-5 w-5 text-emerald-india-500 mr-3" />
                  <span>Small batch sizes for personalized attention</span>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  View Class Schedule
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </div>

            {/* Labs for Schools */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-saffron-500 to-saffron-600 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-800">Inspiring Innovation in Every School</h2>
                  <p className="text-saffron-600 font-medium">Complete lab solutions for educational institutions</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We partner with schools to establish world-class innovation labs that transform traditional education. 
                Our comprehensive approach includes infrastructure setup, curriculum development, teacher training, 
                and ongoing support to ensure sustainable impact.
              </p>

              <div className="space-y-6 mb-8">
                {schoolServices.map((service, index) => (
                  <div key={index} className="card border border-saffron-100 hover:border-saffron-300 transition-colors">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-saffron-100 to-saffron-200 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <service.icon className="h-6 w-6 text-saffron-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-display text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold font-display text-gray-800 mb-4">What's Included in Our School Partnership:</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-saffron-500 mr-3" />
                    Complete lab setup with equipment and furniture
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-saffron-500 mr-3" />
                    Age-appropriate curriculum for grades 6-12
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-saffron-500 mr-3" />
                    40+ hours of teacher training workshops
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-saffron-500 mr-3" />
                    Project kits and learning materials
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-saffron-500 mr-3" />
                    Quarterly curriculum updates and support
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-saffron-500 mr-3" />
                    Student assessment and progress tracking tools
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn-secondary">
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Technology Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs cover cutting-edge technologies that prepare students for the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-royal-blue-500 to-royal-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">Robotics & Automation</h3>
              <p className="text-sm text-gray-600">Arduino, Raspberry Pi, sensors, and mechanical design</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-saffron-500 to-saffron-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">Electronics & IoT</h3>
              <p className="text-sm text-gray-600">Circuit design, embedded systems, and connected devices</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-india-500 to-emerald-india-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">Programming & AI</h3>
              <p className="text-sm text-gray-600">Python, JavaScript, machine learning, and app development</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold font-display text-gray-800 mb-2">3D Design & Printing</h3>
              <p className="text-sm text-gray-600">CAD modeling, 3D printing, and digital fabrication</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-royal-blue-600 to-saffron-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-royal-blue-100 mb-8 leading-relaxed">
            Whether you're a parent looking to inspire your child or an educator wanting to transform your school, 
            we're here to help you build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-royal-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-royal-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
