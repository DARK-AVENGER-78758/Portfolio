import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import profilePic from '@/assets/Web_Photo_Editor.jpg';

const AboutSection = () => {
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

  const stats = [
    { icon: Award, label: 'Certifications', value: '3+' },
    { icon: Calendar, label: 'Experience', value: 'Fresher' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad' },
    { icon: User, label: 'Projects', value: '5+' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-text-dim max-w-2xl mx-auto">
              Getting to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Passionate Software Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated software developer with a strong foundation in computer science 
                  and a passion for creating innovative solutions. Currently pursuing my degree at 
                  VIT Vellore, I've been exploring the fascinating world of technology and its 
                  endless possibilities.
                </p>
                
                <p>
                  My journey in software development has led me to specialize in Python, 
                  and modern web technologies. I'm particularly interested in artificial intelligence, 
                  machine learning, and cloud computing, always staying updated with the latest 
                  industry trends and best practices.
                </p>
                
                <p>
                  Beyond coding, I believe in the power of continuous learning and collaboration. 
                  I enjoy tackling complex problems, contributing to open-source projects, and 
                  sharing knowledge with the developer community.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, label, value }, index) => (
                  <div
                    key={label}
                    className={`transition-all duration-500 delay-${(index + 1) * 100} ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">{value}</div>
                        <div className="text-sm text-text-dim">{label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Card */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <Card className="p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card-custom">
                <div className="text-center">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary">
                    <img
                      src= {profilePic} // replace with your image path
                      alt="Gadhiraju Anirudh Varma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    Gadhiraju Anirudh Varma
                  </h4>
                  
                  <p className="text-primary font-medium mb-4">
                    Software Developer
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin size={14} />
                      <span>Hyderabad, India</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <User size={14} />
                      <span>VIT Vellore Student</span>
                    </div>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {['Python', 'AI/ML', 'Cloud'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;