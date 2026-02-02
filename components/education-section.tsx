interface EducationItem {
  school: string
  degree: string
  year: string
  gpa?: string
}

interface CertificationItem {
  title: string
  issuer: string
  year: string
}

interface EducationSectionProps {
  education: EducationItem[]
  certifications: CertificationItem[]
}

export function EducationSection({
  education,
  certifications,
}: EducationSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-semibold text-lg">
                    {edu.degree}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {edu.school}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{edu.year}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 bg-muted/50 rounded-lg border border-border">
                  <h3 className="font-semibold text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
