import { Project, Skill } from '../types';

export const personalInfo = {
  name: "Avlok Raj",
  title: "Full Stack Developer",
  subtitle: "MCA Student at MANIT Bhopal",
  email: "rajavlok@gmail.com",
  phone: "+91 9336431368",
  location: "Bhopal, India",
  github: "https://github.com/avlokraj2372",
  linkedin: "https://www.linkedin.com/in/avlok-raj-740052219/",
  portfolio: "https://avlokraj.dev",
  avatar: "AR"
};

export const skills: Skill[] = [
  { name: "Java", level: 90, category: "Programming", color: "from-orange-400 to-red-500" },
  { name: "JavaScript", level: 85, category: "Programming", color: "from-yellow-400 to-orange-500" },
  { name: "Python", level: 75, category: "Programming", color: "from-green-400 to-blue-500" },
  
  { name: "React.js", level: 90, category: "Frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", level: 95, category: "Frontend", color: "from-teal-400 to-cyan-500" },
  { name: "HTML/CSS", level: 95, category: "Frontend", color: "from-pink-400 to-red-500" },
  { name: "Node.js", level: 85, category: "Backend", color: "from-green-400 to-green-600" },
  { name: "Express.js", level: 80, category: "Backend", color: "from-gray-600 to-gray-800" },
  { name: "REST APIs", level: 85, category: "Backend", color: "from-purple-400 to-purple-600" },
  { name: "JWT", level: 85, category: "Backend", color: "from-blue-400 to-blue-600" },
  { name: "Socket.IO", level: 80, category: "Backend", color: "from-green-500 to-teal-600" },
  
  { name: "MongoDB", level: 80, category: "Database", color: "from-green-500 to-green-700" },
  { name: "MySQL", level: 85, category: "Database", color: "from-blue-500 to-blue-700" },
  { name: "Cloudinary", level: 75, category: "Database", color: "from-indigo-500 to-purple-600" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Study Notion",
    description: "Full-featured e-learning platform with distinct views for students and instructors",
    longDescription: "Built a fully responsive e-Tech platform with distinct views for students and instructors. Students can purchase and stream courses, while instructors can upload content. Implemented secure login and seamless content management. The platform provides a comprehensive learning experience with course management, user authentication, and content delivery systems.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Redux Toolkit", "JWT", "Cloudinary", "Nodemailer"],
    features: [
      "Secure user authentication & authorization",
      "Distinct views for students and instructors",
      "Course purchase and streaming functionality",
      "Content upload and management for instructors",
      "Responsive design with Tailwind CSS",
      "State management with Redux Toolkit",
      "Email notifications with Nodemailer",
      "Media management with Cloudinary",
      "Seamless content delivery system"
    ],
    githubUrl: "https://github.com/avlokraj2372/study-notion",
    liveUrl: "https://study-notion-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web"
  },
  {
    id: "2",
    title: "Real-Time Chat Application",
    description: "Full-stack real-time messaging platform with user authentication",
    longDescription: "Developed a full-stack real-time chat application using the MERN stack. The app supports user authentication (login/signup) and allows real-time one-to-one messaging using Socket.IO. Users can create an account, log in securely, and instantly chat with other online users. All messages are stored in MongoDB, ensuring message persistence even after logout.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.IO", "Tailwind CSS", "JWT"],
    features: [
      "Real-time messaging with Socket.io",
      "User authentication (login/signup)",
      "One-to-one messaging functionality",
      "Secure JWT-based authentication",
      "Message history & search",
      "Message persistence in MongoDB",
      "Real-time user status indicators",
      "Responsive design with Tailwind CSS",
      "Instant message delivery"
    ],
    githubUrl: "https://github.com/avlokraj2372/realtime-chat",
    liveUrl: "https://chat-app-five-gilt-10.vercel.app/",
    imageUrl: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web"
  }
];

export const achievements = [
  {
    title: "Academic Excellence",
    description: "Currently pursuing MCA from prestigious NIT Bhopal with strong academic performance",
    icon: "🎓"
  },
  {
    title: "Full Stack Proficiency",
    description: "Successfully delivered multiple full-stack applications using modern technologies",
    icon: "💻"
  },
  {
    title: "Problem Solving",
    description: "Strong analytical and debugging skills with experience in complex system design",
    icon: "🧩"
  },
  {
    title: "Team Collaboration",
    description: "Excellent communication skills and experience working in collaborative environments",
    icon: "🤝"
  }
];