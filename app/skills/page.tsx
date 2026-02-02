'use client'

import { useEffect, useState } from 'react'

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'TypeScript', level: 90 },
      { name: 'SQL', level: 88 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'React Native', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux', level: 88 },
      { name: 'Material-UI', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 95 },
      { name: 'Microservices', level: 80 },
      { name: 'JWT Auth', level: 88 },
    ],
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', level: 92 },
      { name: 'MySQL', level: 88 },
      { name: 'AWS (EC2, S3, RDS)', level: 85 },
      { name: 'Google Cloud', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'TensorFlow', level: 82 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Computer Vision', level: 78 },
      { name: 'NLP', level: 75 },
      { name: 'Model Deployment', level: 80 },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Testing (Jest, Mocha)', level: 88 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'System Design', level: 85 },
      { name: 'Linux', level: 85 },
      { name: 'DevOps', level: 80 },
    ],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-5xl w-full mx-auto relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins gradient-text">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-inter">
              20+ technologies across frontend, backend, cloud, and AI/ML with hands-on production experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className={`glass rounded-xl p-8 border border-primary/20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-8 font-poppins">{category.category}</h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-foreground font-inter">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-inter">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 group-hover:from-secondary group-hover:to-accent"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIdx * 50}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center font-poppins">Proficiency Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { level: 'Expert', range: '85-100%', count: 12, color: 'from-primary to-secondary' },
              { level: 'Advanced', range: '70-84%', count: 8, color: 'from-secondary to-accent' },
              { level: 'Intermediate', range: '50-69%', count: 4, color: 'from-accent to-primary' },
              { level: 'Beginner', range: '0-49%', count: 0, color: 'from-muted to-muted-foreground' },
            ].map((prof, idx) => (
              <div
                key={idx}
                className="glass rounded-lg p-6 text-center hover:bg-primary/10 transition-all duration-300"
              >
                <p className={`text-4xl font-bold bg-gradient-to-r ${prof.color} bg-clip-text text-transparent mb-2 font-poppins`}>
                  {prof.count}
                </p>
                <p className="text-lg font-semibold text-foreground font-poppins mb-1">{prof.level}</p>
                <p className="text-sm text-muted-foreground font-inter">{prof.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
