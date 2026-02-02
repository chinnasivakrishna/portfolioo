interface AboutSectionProps {
  summary: string
  paragraphs: string[]
}

export function AboutSection({ summary, paragraphs }: AboutSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">About</h2>
          <p className="text-lg text-muted-foreground font-semibold mb-8">
            {summary}
          </p>
        </div>

        <div className="space-y-6">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
