import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Github, Linkedin, Globe, Download, 
  User, GraduationCap, Code2, Briefcase, Award, MessageCircle,
  Plus, Star, Calendar, ExternalLink, Send, ChevronDown, ChevronUp,
  Home, Menu, X
} from 'lucide-react';

import { personalInfo, skills, projects, achievements } from '../data/resumeData';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ProjectUpload from './ProjectUpload';
import ContactForm from './ContactForm';
import { Project } from '../types';

const Resume: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const skillCategories = ['Programming', 'Frontend', 'Backend', 'Database'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'gallery', label: 'Gallery', icon: Award },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation Header */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                AR
              </div>
              <span className="text-xl font-bold text-slate-800">Avlok Raj</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:bg-blue-50 rounded-lg"
                >
                  <item.icon size={18} />
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-slate-200"
              >
                <div className="grid grid-cols-2 gap-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:bg-blue-50 rounded-lg"
                    >
                      <item.icon size={18} />
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.button
          onClick={() => setShowUploadModal(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>
        
        <motion.button
          onClick={() => setShowContactForm(!showContactForm)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <motion.section
          id="home"
          variants={itemVariants}
          className="relative min-h-screen flex items-center justify-center px-6 py-12 pt-24"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
            >
              {personalInfo.avatar}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-slate-600 mb-2 font-light"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-slate-500 mb-8"
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} className="text-blue-600" />
                <span className="font-medium text-slate-700">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} className="text-green-600" />
                <span className="font-medium text-slate-700">{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <MapPin size={20} className="text-red-600" />
                <span className="font-medium text-slate-700">{personalInfo.location}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center gap-4"
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-slate-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Globe size={24} />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="px-6 pb-12 space-y-20 pt-8">
          {/* About Section */}
          <motion.section
            id="about"
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <User className="text-white" size={32} />
              </motion.div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20"
            >
              <p className="text-lg text-slate-700 leading-relaxed text-center">
                Passionate and dedicated MCA student at NIT Bhopal with strong technical expertise in full-stack web development. 
                I specialize in building scalable, modern web applications using cutting-edge technologies. My experience spans 
                from frontend development with React and TypeScript to backend systems with Node.js and databases. I'm committed 
                to writing clean, maintainable code and creating exceptional user experiences. Always eager to learn new technologies 
                and contribute to innovative projects that make a real impact.
              </p>
            </motion.div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            variants={itemVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <GraduationCap className="text-white" size={32} />
              </motion.div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  NIT
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Master of Computer Applications (MCA)</h3>
                  <p className="text-xl text-green-600 font-semibold mb-2">Maulana Azad National Institute of Technology, Bhopal</p>
                  <p className="text-slate-600 mb-4">Specializing in Software Development and Advanced Computing</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Currently Pursuing</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Software Engineering</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">System Design</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            variants={itemVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Code2 className="text-white" size={32} />
              </motion.div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
              <p className="text-slate-600 text-lg">Proficiency levels and expertise across different technologies</p>
            </div>

            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="mb-8"
              >
                <button
                  onClick={() => toggleSection(category)}
                  className="w-full flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
                >
                  <h3 className="text-xl font-bold text-slate-800">{category}</h3>
                  {expandedSection === category ? (
                    <ChevronUp className="text-slate-600" size={24} />
                  ) : (
                    <ChevronDown className="text-slate-600" size={24} />
                  )}
                </button>

                <AnimatePresence>
                  {(expandedSection === category || expandedSection === null) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                      {skills
                        .filter(skill => skill.category === category)
                        .map((skill, index) => (
                          <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            variants={itemVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Briefcase className="text-white" size={32} />
              </motion.div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
              <p className="text-slate-600 text-lg">Showcasing my latest work and technical capabilities</p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            id="gallery"
            variants={itemVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Award className="text-white" size={32} />
              </motion.div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Gallery & Achievements</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{achievement.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <AnimatePresence>
            {showContactForm && (
              <motion.section
                id="contact"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <Send className="text-white" size={32} />
                    </motion.div>
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                    <p className="text-slate-600 text-lg">Let's discuss opportunities, projects, or just connect!</p>
                  </div>
                  <ContactForm />
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      <AnimatePresence>
        {showUploadModal && (
          <ProjectUpload onClose={() => setShowUploadModal(false)} />
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Resume;