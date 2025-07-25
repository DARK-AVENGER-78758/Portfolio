import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Calendar, MapPin, Star, Trophy } from 'lucide-react';

const EducationSection = () => {
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

  const education = [
    {
      institution: 'VIT Vellore',
      degree: 'Integrated Master of Technology',
      specialization: 'Computer Science and Engineering',
      duration: '2021 - 2026',
      location: 'Vellore, Tamil Nadu',
      cgpa: '7.69',
      achievements: [
        'Recognized by Virtusa via Virtusa hackathon',
        'Senior core Health Club',
        'Completed research on AI in Healthcare'
      ],
      coursework: ['Data Structures', 'Algorithms', 'Machine Learning', 'Cloud Computing', 'Software Engineering']
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate (12th Grade)',
      specialization: 'Mathematics, Physics, Chemistry',
      duration: '2019 - 2021',
      location: 'Hyderabad, Telangana',
      cgpa: '9.36',
      achievements: [
        '75 Percentile in JEE Main',
        'Mathematics Olympiad Qualifier',
        'Near perfect score in Mathematics'
      ],
      coursework: ['Advanced Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science']
    },
    {
      institution: 'Jubliee Hills Public School, Hyderabad',
      degree: 'Secondary School Certificate (10th Grade)',
      specialization: 'Studies and sports',
      duration: '2007 - 2019',
      location: 'Hyderabad, Telangana',
      cgpa: '8.56',
      achievements: [
        'School Topper in Computer Science',
        'Part of National Cadets Corps (NCC)',
      ],
      coursework: ['Mathematics', 'Science', 'English', 'Computer Applications', 'Social Studies']
    }

  ];

  const certifications = [
    {
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      icon: Award,
      color: 'text-blue-400'
    },
    {
      title: 'IBM AI Engineering Professional Certificate',
      issuer: 'IBM',
      date: '2023',
      icon: Trophy,
      color: 'text-purple-400'
    },
    {
      title: 'Accenture Digital Marketing Certificate',
      issuer: 'Accenture',
      date: '2023',
      icon: Star,
      color: 'text-green-400'
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education & <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-text-dim max-w-2xl mx-auto">
              Academic foundation and professional certifications that shaped my technical journey
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Academic Background
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>
              
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className={`relative mb-12 transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-custom">
                      {/* Institution Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-lg">
                            {edu.institution}
                          </h4>
                          <p className="text-primary font-medium">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {edu.specialization}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star size={14} className="text-accent-bright" />
                          <span className="text-foreground">CGPA: <strong>{edu.cgpa}/10</strong></span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h5>
                        <div className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Relevant Coursework */}
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-1">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 text-xs bg-accent/50 text-foreground rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  <Card className="p-6 text-center bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-card-custom">
                    <div className={`inline-flex p-3 rounded-full bg-accent/50 group-hover:bg-accent transition-colors mb-4`}>
                      <cert.icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    
                    <p className="text-sm text-primary font-medium mb-2">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      Issued: {cert.date}
                    </p>
                    
                    <div className="text-xs text-text-dim">
                      <a href = "https://drive.google.com/drive/folders/1cMgH7GUoLFMMTBSQfuIq-OYpIX1ygD6m?usp=sharing">View Certificates</a>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;