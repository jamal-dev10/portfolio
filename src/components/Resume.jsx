import { useState } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { Briefcase, GraduationCap, Calendar, MapPin, Download, CheckCircle2 } from 'lucide-react'

export default function Resume() {
  const [filter, setFilter] = useState('all')

  const experiences = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'Flow',
      location: 'Remote',
      period: 'August – September 2023',
      type: 'work',
      summary: 'Engineered an end-to-end e-commerce platform for electric mobility bikes with inventory workflows and payment options.',
      tasks: [
        'Developed custom dynamic product catalog and shopping cart flows',
        'Implemented secure order management and customer transaction handling',
        'Integrated responsive UI layouts ensuring seamless checkout on mobile devices'
      ],
      tech: ['PHP', 'WooCommerce', 'WordPress', 'MySQL', 'JavaScript', 'CSS3']
    },
    {
      role: 'Full-Stack Developer Intern',
      company: 'Obl Engagement Company',
      location: 'Casablanca, Morocco',
      period: 'April – May 2023',
      type: 'work',
      summary: 'Full redesign and feature expansion for a residential rental and property management platform.',
      tasks: [
        'Rebuilt key frontend components using React.js and Tailwind CSS for rapid UI load times',
        'Implemented user account and rental reservation management systems',
        'Designed normalized relational database tables with MySQL and integrated RESTful endpoints'
      ],
      tech: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS', 'REST APIs', 'Git']
    }
  ]

  const educations = [
    {
      degree: 'Technicien Spécialisé (DTS) in Digital Development',
      institution: 'ISTA CFPMS (OFPPT)',
      location: 'Casablanca, Morocco',
      period: 'Graduated 2024',
      type: 'education',
      summary: 'Comprehensive 2-year practical training covering software engineering, algorithms, full-stack web stacks, database normalization, and agile practices.',
      focus: ['Full-Stack Web Engineering', 'Object-Oriented Programming', 'Relational Databases', 'Modern Frameworks']
    },
    {
      degree: "Bachelor's Degree in Biology (Licence)",
      institution: 'Université Hassan II',
      location: 'Casablanca, Morocco',
      period: 'Graduated 2022',
      type: 'education',
      summary: 'Scientific research foundation focusing on biological systems, data analysis, quantitative experiment methodologies, and structural rigor.',
      focus: ['Scientific Methodology', 'Data & Statistical Analysis', 'Analytical Problem Solving']
    }
  ]

  return (
    <section id="resume" className="section bg-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollAnimationWrapper animation="fadeDown">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              04 / Career &amp; Training
            </span>
            <h2 className="section-title mt-2">
              Experience &amp; Education
            </h2>
            <p className="mt-2 text-muted text-sm sm:text-base max-w-xl">
              Chronological overview of professional software development internships and foundational academic degrees.
            </p>
          </ScrollAnimationWrapper>

          {/* Action Button */}
          <ScrollAnimationWrapper animation="fadeLeft">
            <a
              href="/CV_Jamal_Ezziouani_EN.pdf"
              download
              className="btn-primary"
            >
              <Download size={16} />
              <span>Download Official Resume (PDF)</span>
            </a>
          </ScrollAnimationWrapper>
        </div>

        {/* 2-Column Side-by-Side Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Work Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-line">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Briefcase size={18} />
              </div>
              <h3 className="text-xl font-bold text-content">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <ScrollAnimationWrapper key={idx} animation="fadeUp" delay={idx * 0.15}>
                  <div className="card p-6 border-l-2 border-l-primary hover:border-line hover:shadow-lg transition">
                    
                    {/* Role Title & Date Line (Unboxed text with separators) */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h4 className="text-lg font-bold text-content">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted mb-4 font-mono">
                      <span className="text-content font-medium">{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    {/* Task bullets */}
                    <ul className="space-y-2 mb-5 text-xs text-muted">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies (Unboxed list) */}
                    <div className="pt-3 border-t border-line/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-muted">
                      <span className="text-primary font-semibold">Tech:</span>
                      {exp.tech.map((t, i) => (
                        <span key={t}>
                          <span className="text-content">{t}</span>
                          {i < exp.tech.length - 1 && <span className="text-line ml-2">/</span>}
                        </span>
                      ))}
                    </div>

                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-line">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-xl font-bold text-content">Academic Education</h3>
            </div>

            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <ScrollAnimationWrapper key={idx} animation="fadeUp" delay={idx * 0.15}>
                  <div className="card p-6 border-l-2 border-l-violet-500 hover:border-line hover:shadow-lg transition">
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h4 className="text-lg font-bold text-content">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-primary font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted mb-4 font-mono">
                      <span className="text-content font-medium">{edu.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {edu.summary}
                    </p>

                    <div className="pt-3 border-t border-line/60">
                      <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-2">
                        Core Subjects
                      </span>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-content/90 font-mono">
                        {edu.focus.map((f, i) => (
                          <span key={f}>
                            <span>{f}</span>
                            {i < edu.focus.length - 1 && <span className="text-line ml-2">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}