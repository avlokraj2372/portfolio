import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Star, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white/90 text-lg">{project.description}</p>
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">About This Project</h3>
              <p className="text-slate-600 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Star className="text-yellow-500" size={20} />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-semibold rounded-full border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-slate-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  View Source Code
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;