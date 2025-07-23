import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Github, ExternalLink, Plus, Image, FileText, CheckCircle } from 'lucide-react';

interface ProjectUploadProps {
  onClose: () => void;
}

const ProjectUpload: React.FC<ProjectUploadProps> = ({ onClose }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    technologies: '',
    githubUrl: '',
    liveUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('Project submitted:', { projectData, files: uploadedFiles });
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Auto close after success
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="text-green-600" size={40} />
        </motion.div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Project Uploaded Successfully!</h3>
        <p className="text-green-700">Your project has been added to the portfolio.</p>
      </motion.div>
    );
  }

  return (
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
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Plus className="text-blue-600" size={24} />
            Upload New Project
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Project Title
              </label>
              <input
                type="text"
                value={projectData.title}
                onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Enter project title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description
              </label>
              <textarea
                value={projectData.description}
                onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Describe your project..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Technologies Used
              </label>
              <input
                type="text"
                value={projectData.technologies}
                onChange={(e) => setProjectData(prev => ({ ...prev, technologies: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="React, Node.js, MongoDB, etc."
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <Github size={16} className="inline mr-1" />
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={projectData.githubUrl}
                  onChange={(e) => setProjectData(prev => ({ ...prev, githubUrl: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="https://github.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <ExternalLink size={16} className="inline mr-1" />
                  Live Demo URL
                </label>
                <input
                  type="url"
                  value={projectData.liveUrl}
                  onChange={(e) => setProjectData(prev => ({ ...prev, liveUrl: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="https://your-project.com"
                />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Project Files & Screenshots
            </label>
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*,.pdf,.doc,.docx,.zip"
              />
              <Upload className="mx-auto mb-4 text-slate-400" size={48} />
              <p className="text-slate-600 mb-2">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-sm text-slate-500">
                Images, PDFs, Documents, or ZIP files
              </p>
            </div>

            {/* Uploaded Files */}
            <AnimatePresence>
              {uploadedFiles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-2"
                >
                  {uploadedFiles.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center justify-between bg-slate-50 p-3 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {file.type.startsWith('image/') ? (
                          <Image className="text-blue-500" size={20} />
                        ) : (
                          <FileText className="text-slate-500" size={20} />
                        )}
                        <div>
                          <p className="font-medium text-slate-700">{file.name}</p>
                          <p className="text-sm text-slate-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="p-1 hover:bg-red-100 rounded-full transition-colors"
                      >
                        <X className="text-red-500" size={16} />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubmitting
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Uploading Project...
              </>
            ) : (
              <>
                <Upload size={20} />
                Upload Project
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ProjectUpload;