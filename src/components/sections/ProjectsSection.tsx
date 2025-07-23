import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Brain, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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

  const projects = [
    {
      title: 'ML Based Kidney Disease Prediction',
      description: 'A comprehensive machine learning platform that analyzes medical data to predict patient outcomes and assist healthcare professionals in decision-making.',
      tech: ['Python', 'TensorFlow', 'Flask'],
      icon: Brain,
      color: 'text-purple-400',
      status: 'Completed',
      highlights: ['95% accuracy in predictions', 'Real-time data processing']
    },
    {
      title: 'Email automation app',
      description: 'mobile-based agent using OpenAI APIs to trigger workflows via n8n, Integrated REST APIs and Webhooks to automate personalized email workflows',
      tech: ['JavaScript', 'Node.js', 'Expo Go', 'n8n'],
      icon: Globe,
      color: 'text-blue-400',
      status: 'In Progress (Private)',
      highlights: ['Webhooks', 'scalable workflow', 'API-first design']
    },
    {
      title: 'Flight Fare Prediction and Analysis Using Power BI',
      description: 'Built predictive models using Linear Regression and Random Forest Regressor, Designed a Power BI dashboard to visualize fare trends, routes, and pricing insights',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Power BI', 'Jupyter Notebook'],
      icon: Code,
      color: 'text-green-400',
      status: 'Completed',
      highlights: ['Real-time monitoring', 'ML-based predictions']
    },
    {
      title: 'Blockchain-Based Parking System',
      description: 'Transparent and secure parking management system using blockchain technology to track parking slots from origin to consumer.',
      tech: ['JavaScript', 'Solidity', 'Web3.js'],
      icon: Database,
      color: 'text-orange-400',
      status: 'Completed',
      highlights: ['Immutable records', 'Smart contracts']
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-text-dim max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveProject(index)}
              >
                <Card className={`p-6 h-full bg-card border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-card-custom ${
                  activeProject === index ? 'scale-105 border-primary/50' : ''
                }`}>
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-accent/50 group-hover:bg-accent transition-colors`}>
                        <project.icon className={`h-6 w-6 ${project.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/10 text-green-400' 
                            : project.status === 'In Progress'
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-purple-500/10 text-purple-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="group hover:scale-105 transition-all duration-300 hover:border-primary"
                      onClick={() => window.open('https://github.com/DARK-AVENGER-78758', '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Code
                    </Button>
                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn hover:border-primary"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button> */}
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
            <p className="text-text-dim mb-6">
              Want to see more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="group hover:border-primary hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://github.com/DARK-AVENGER-78758', '_blank')}
            >
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;