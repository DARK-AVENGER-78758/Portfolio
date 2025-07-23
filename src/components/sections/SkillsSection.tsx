import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Globe, 
  Server,
  Brain,
  Monitor,
  Smartphone,
  GitBranch
} from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'C'],
      color: 'text-blue-400'
    },
    
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker',  'CI/CD'],
      color: 'text-green-400'
    },
    // {
    //   title: 'Databases',
    //   icon: Database,
    //   skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
    //   color: 'text-orange-400'
    // },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['React', 'HTML/CSS', 'REST APIs'],
      color: 'text-cyan-400'
    },

    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
      color: 'text-purple-400'
    },
    // {
    //   title: 'Tools & Platforms',
    //   icon: Monitor,
    //   skills: ['Git', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Jira'],
    //   color: 'text-pink-400'
    // }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-text-dim max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="p-6 h-full bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-card-custom">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-accent/50 group-hover:bg-accent transition-colors`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`flex items-center gap-3 p-2 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all duration-300 ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ 
                          transitionDelay: `${(index * 150) + (skillIndex * 50)}ms` 
                        }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Proficiency Indicator */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-dim">Proficiency</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              i < 4 
                                ? 'bg-primary' 
                                : 'bg-accent'
                            }`}
                            style={{ 
                              transitionDelay: `${(index * 150) + (i * 100)}ms` 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-text-dim mb-4">
              Always learning and expanding my technical horizons
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                Currently Learning: Next.js
              </span>
              <span className="px-3 py-1 bg-accent-bright/10 text-accent-bright rounded-full border border-accent-bright/20">
                Next Goal: AWS Certification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;