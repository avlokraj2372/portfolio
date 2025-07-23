import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative overflow-hidden"
    >
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 text-lg">{skill.name}</h3>
          <span className="text-sm font-semibold text-slate-500">{skill.level}%</span>
        </div>
        
        <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </motion.div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600 font-medium">{skill.category}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.7 + i * 0.1 }}
                className={`w-2 h-2 rounded-full ${
                  i < Math.floor(skill.level / 20) 
                    ? `bg-gradient-to-r ${skill.color}` 
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
    </motion.div>
  );
};

export default SkillCard;