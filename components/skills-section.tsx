'use client'

interface SkillCategory {
  category: string
  skills: string[]
}

interface SkillsSectionProps {
  skills: SkillCategory[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-semibold text-lg text-primary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground hover:bg-primary/5 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
