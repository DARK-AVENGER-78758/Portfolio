import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Code, Database, Cloud } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: '0s', position: 'top-20 left-10' },
    { Icon: Database, delay: '0.5s', position: 'top-32 right-20' },
    { Icon: Cloud, delay: '1s', position: 'bottom-40 left-20' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating Background Elements */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} hidden lg:block opacity-10`}
          style={{ animationDelay: delay }}
        >
          <Icon size={80} className="floating-animation text-primary" />
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg md:text-xl text-text-dim mb-4">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Anirudh Varma
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gadhiraju
              </span>
            </h1>
          </div>

          {/* Role */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl md:text-2xl text-text-dim mb-8">
              Software Developer & Tech Enthusiast
            </p>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Based in Hyderabad, India. Passionate about creating innovative solutions 
              with Java, Python, AI/ML, and Cloud technologies. Always learning, always building.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {/* <Button 
                size="lg" 
                className="group glow-effect hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button> */}
              <Button 
                asChild
                size="lg" 
                className="group glow-effect hover:scale-105 transition-all duration-300"
              >
                <a href="public/Anirudh_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group hover:scale-105 transition-all duration-300 hover:border-primary"
                onClick={() => window.open('https://github.com/DARK-AVENGER-78758', '_blank')}
              >
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group hover:scale-105 transition-all duration-300 hover:border-primary"
                onClick={() => window.open('https://www.linkedin.com/in/anirudh-varma-gadhiraju', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Quick Contact */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex justify-center items-center gap-2 text-text-dim">
              <Mail size={16} />
              <span className="text-sm">anirudhvarma003@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;