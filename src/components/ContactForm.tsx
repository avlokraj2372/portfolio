import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare, Tag } from 'lucide-react';
import { ContactForm as ContactFormType } from '../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="text-green-600" size={32} />
        </motion.div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-700">Thank you for reaching out. I'll get back to you soon!</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            <User size={16} className="inline mr-2" />
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
              errors.name 
                ? 'border-red-300 bg-red-50' 
                : 'border-slate-200 bg-white hover:border-slate-300 focus:border-blue-500'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {errors.name.message}
            </motion.p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            <Mail size={16} className="inline mr-2" />
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
              errors.email 
                ? 'border-red-300 bg-red-50' 
                : 'border-slate-200 bg-white hover:border-slate-300 focus:border-blue-500'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {errors.email.message}
            </motion.p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          <Tag size={16} className="inline mr-2" />
          Subject
        </label>
        <input
          {...register('subject')}
          type="text"
          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
            errors.subject 
              ? 'border-red-300 bg-red-50' 
              : 'border-slate-200 bg-white hover:border-slate-300 focus:border-blue-500'
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-sm mt-1 flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.subject.message}
          </motion.p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          <MessageSquare size={16} className="inline mr-2" />
          Message
        </label>
        <textarea
          {...register('message')}
          rows={6}
          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
            errors.message 
              ? 'border-red-300 bg-red-50' 
              : 'border-slate-200 bg-white hover:border-slate-300 focus:border-blue-500'
          }`}
          placeholder="Tell me about your project, opportunity, or just say hello!"
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-sm mt-1 flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.message.message}
          </motion.p>
        )}
      </div>

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
            Sending Message...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;