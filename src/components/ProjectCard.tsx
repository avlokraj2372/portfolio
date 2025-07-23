import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye, Code, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <Github size={16} className="text-slate-700" />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ExternalLink size={16} className="text-slate-700" />
            </motion.a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-slate-200 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Code size={14} />
              {project.technologies.length} techs
            </span>
            <span className="flex items-center gap-1">
              <Zap size={14} />
              {project.features.length} features
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.button
            onClick={() => onViewDetails(project)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Eye size={16} />
            View Details
          </motion.button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;