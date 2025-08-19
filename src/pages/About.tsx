import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  BookOpen, 
  Lightbulb, 
  ArrowRight,
  Mail,
  Linkedin,
} from 'lucide-react';
import ghanshyamImg from '../images/ghanshyam.jpeg';
import deveshImg from '../images/devesh.png';
import sandeepImg from '../images/sandeep.png';
import govindImg from '../images/govind.png';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Ghanshyam",
      role: "Founder & CTO",
      image: ghanshyamImg,
      bio: "NIT graduate with over 8 years of professional software engineering experience. Leads technology strategy and development initiatives to create innovative educational solutions.",
      expertise: ["Software Engineering", "Technology Strategy", "System Architecture"]
    },
    {
      name: "Devesh Singh",
      role: "Founder & CEO",
      image: deveshImg,
      bio: "NIT graduate with 6+ years of experience in teaching robotics and science. Passionate about transforming education through hands-on learning methodologies.",
      expertise: ["Robotics Education", "STEM Teaching", "Curriculum Design"]
    },
    {
      name: "Sandeep Malhotra",
      role: "Founder & Head of Project Management",
      image: sandeepImg,
      bio: "NIT graduate with 8+ years in data engineering and a passion for practical knowledge application. Manages strategic projects and operational excellence.",
      expertise: ["Data Engineering", "Project Management", "Practical Applications"]
    },
    {
      name: "Govind Bajpai",
      role: "Founder & Advisor",
      image: govindImg,
      bio: "NIT graduate with 6+ years as an IBM scientist and expertise in hands-on activity development. Provides strategic guidance and mentorship to the team.",
      expertise: ["Scientific Research", "IBM Technologies", "Activity Development"]
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Learning by Doing",
      description: "We believe the best learning happens when students actively build, create, and experiment with real-world projects."
    },
    {
      icon: Heart,
      title: "Fostering Curiosity",
      description: "Every child is naturally curious. We nurture this curiosity and help students ask better questions and seek innovative solutions."
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description: "Great innovations emerge from collaboration. We encourage teamwork, peer learning, and knowledge sharing."
    },
    {
      icon: BookOpen,
      title: "Making Education Fun",
      description: "Learning should be joyful and engaging. We make complex concepts accessible through play, creativity, and hands-on exploration."
    }
  ];

  // const achievements = [
  //   { number: "5000+", label: "Students Impacted" },
  //   { number: "200+", label: "Schools Partnered" },
  //   { number: "50+", label: "Innovation Labs Setup" },
  //   { number: "95%", label: "Student Satisfaction" }
  // ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-blue-50 to-vibrant-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-6">
                About <span className="bg-gradient-to-r from-electric-blue-600 to-vibrant-orange-600 bg-clip-text text-transparent">Inventors Hub</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're on a mission to transform education in India by inspiring the next generation of innovators, 
                thinkers, and problem-solvers through hands-on learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Our Impact
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop" 
                alt="Students collaborating on innovative projects" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-electric-blue-200 to-vibrant-orange-200 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card bg-gradient-to-br from-electric-blue-50 to-electric-blue-100 border border-electric-blue-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-electric-blue-500 to-electric-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-display text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To inspire and empower the next generation of Indian innovators by providing hands-on learning experiences 
                that transform curiosity into creativity, ideas into innovations, and students into confident problem-solvers 
                who will shape the future of our nation.
              </p>
            </div>

            {/* Vision */}
            <div className="card bg-gradient-to-br from-vibrant-orange-50 to-vibrant-orange-100 border border-vibrant-orange-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-vibrant-orange-500 to-vibrant-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-display text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a future where every Indian student has access to quality hands-on education, where innovation 
                labs are present in every school, and where the spirit of creativity and invention thrives in every 
                classroom across the country.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and innovators dedicated to transforming learning experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center group hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-800 mb-2">{member.name}</h3>
                <p className="text-electric-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-800">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-electric-blue-100 text-electric-blue-800 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-electric-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-electric-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy/Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-electric-blue-100 to-vibrant-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-electric-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Achievements */}
      
      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              Our journey began during our college days at NIT, where Devesh and Ghanshyam first collaborated to set up a
              small laboratory for their own learning and experimentation. What started as a personal project quickly evolved
              into something much bigger—a vibrant innovation hub that attracted passionate NITians from across the campus.
            </p>

            <p>
              As our college lab grew, many talented students joined us, but Sandeep and Govind truly embodied our shared
              passion for building innovative products and solutions. Together, our team participated in numerous national-level
              innovation challenges, earning recognition and winning several prestigious competitions that validated our
              approach to hands-on, practical learning.
            </p>

            <p>
              After graduation, life took us in different directions as we pursued our individual careers—Ghanshyam in software
              engineering, Devesh in education, Sandeep in data engineering, and Govind in scientific research at IBM. However,
              our commitment to student development never wavered. Sandeep and Govind launched workshop programs in their
              respective fields, while Devesh and Ghanshyam worked on creating a universal learning platform.
            </p>

            <p>
              Though we maintained awareness of each other's endeavors over the years, it wasn't until recently that we realized
              the power of combining our diverse expertise and shared vision. The convergence of our individual experiences in
              education, technology, and innovation naturally led to the birth of STEAM Buds—a platform where our collective
              passion for transforming education could finally flourish and impact students across India.
            </p>
          </div>
        </div>
      </section>
          
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-blue-600 to-vibrant-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-electric-blue-100 mb-8 leading-relaxed">
            Whether you're an educator, parent, or institution, there are many ways to be part of the 
            hands-on learning revolution. Let's work together to inspire the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-electric-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-electric-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
