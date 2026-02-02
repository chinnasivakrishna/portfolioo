import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Create a sample resume content
    // In production, you would read from a file or database
    const resumeContent = `
CHINNA SIVA KRISHNA THOTA
Hyderabad, India | +91 7702366289
chinnasivakrishna2003@gmail.com
GitHub: github.com/chinnasivakrishna | LinkedIn: linkedin.com/in/chinna-siva-krishna-thota

PROFESSIONAL SUMMARY
Full-stack software engineer with 1+ year of production experience specializing in MERN stack, backend development, and AI/ML integration. Proven track record of building scalable applications with 40% performance improvements and deploying systems handling 10k+ daily requests with 99.5% uptime.

EXPERIENCE

MERN Stack Developer
Diin Tech | Jan 2025 - Present
- Architected scalable systems achieving 35% performance improvement
- Designed responsive components increasing user engagement by 25%
- Optimized database queries reducing response times by 40%
- Implemented automated testing achieving 95% code coverage
- Supported 1000+ active users with zero critical outages

Junior Software Engineer
VTS Enterprises (The Hive) | Jun 2024 - Dec 2024
- Built 3 production-grade web applications onboarding 200+ users
- Developed REST APIs handling 10,000+ daily requests with 99.5% uptime
- Optimized database queries reducing load times by 40%
- Reduced post-deployment bugs by 60% via CI/CD and test automation
- Delivered projects 15% ahead of schedule through scoped sprints

PROJECTS

Airuter – AI Recruitment Platform (http://airuter.com/)
AI-powered platform connecting candidates to employers with intelligent matching. 100+ candidates onboarded, 80% reduction in manual coordination.
Technologies: React, Node.js, MongoDB, WebRTC, TensorFlow, AWS

Mock Interview Platform (https://mock-interview-frontend.vercel.app/)
GitHub: github.com/chinnasivakrishna/mockInterview
Mentor-student matching with payment processing and automated scheduling. 50+ active users, 65% match success rate.
Technologies: MERN, Stripe, Socket.io, PostgreSQL

AI Sketch Generator
GitHub: github.com/chinnasivakrishna/sketch0
Deep learning application converting images to sketches. 85% accuracy, 30 seconds processing time (optimized from 5 minutes).
Technologies: Python, TensorFlow, Flask, OpenCV

Student Attendance System
GitHub: github.com/chinnasivakrishna/Student-Attendance-System
ML-based face recognition for attendance tracking. 500+ students, 99% accuracy.
Technologies: Spring Boot, Java, OpenCV, MySQL

Ailisher – AI-Powered Book Interaction Platform (https://ailisher.com)
Full-stack platform with client registration, book management, and AI conversational guidance with voice capabilities.
Technologies: React.js, Node.js, Express.js, MongoDB, OpenAI APIs

Aitota – AI Telephony Platform (https://aitota.com)
Enterprise platform for automated voice calls with AI instructions and conversational guidance.
Technologies: React.js, Node.js, Express.js, MongoDB, OpenAI APIs

SKILLS

Languages: JavaScript (ES6+), Python, Java, SQL, PHP, TypeScript
Frontend: React.js, React Native, Redux, Tailwind CSS, Material-UI, Bootstrap
Backend: Node.js, Express.js, Spring Boot, REST APIs, Microservices, JWT
Database & Cloud: MongoDB, MySQL, AWS (EC2, S3, RDS), Google Cloud, Docker, CI/CD
AI/ML: TensorFlow, Scikit-learn, Deep Learning, Computer Vision, NLP
Tools: Git, Testing (Jest, Mocha), Agile/Scrum, System Design, DevOps

EDUCATION

B.Tech in Artificial Intelligence & Machine Learning
Swarnandhra College of Engineering and Technology | 2020 - 2024
CGPA: 7.75/10

CERTIFICATIONS
- AWS Academy Graduate – Cloud Foundations
- AWS Academy – Machine Learning Foundations
- Python Programming Foundations (NXT Wave)
- Node.js Development Mastery (NXT Wave)
- Database Design & Management (NXT Wave)
- Cybersecurity Virtual Internship (AICTE)
    `.trim()

    // Create a Blob from the content
    const blob = new Blob([resumeContent], { type: 'text/plain' })

    // Create response with download headers
    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; filename="Chinna-Siva-Krishna-Thota-Resume.txt"',
        'Content-Length': blob.size.toString(),
      },
    })
  } catch (error) {
    console.error('Resume download error:', error)
    return NextResponse.json({ error: 'Failed to download resume' }, { status: 500 })
  }
}
