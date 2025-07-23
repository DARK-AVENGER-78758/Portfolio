import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, Phone, Send, Heart } from 'lucide-react';

const ContactSection = () => {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anirudhvarma003@gmail.com',
      action: 'mailto:anirudhvarma003@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7293967777',
      action: 'tel:+917293967777',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      action: 'https://maps.google.com/?q=Hyderabad,India',
      color: 'text-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/DARK-AVENGER-78758',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anirudh-varma-gadhiraju',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:anirudhvarma003@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent-bright rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-primary rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-text-dim max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a friendly chat about technology and innovation. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.label}
                    className={`transition-all duration-500 delay-${(index + 3) * 100} ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
                  >
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-accent/50 group-hover:bg-accent">
                        <method.icon className={`h-5 w-5 ${method.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {method.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Follow me online</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-accent/30 hover:bg-accent/50 transition-all duration-300 group ${social.color} ${
                        isVisible 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div
                className={`transition-all duration-1000 delay-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <Card className="p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card-custom">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Send me a message
                </h3>
                
                <form
                  action="https://formsubmit.co/anirudhvarma003@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden configuration fields */}
                  <input type="hidden" name="_subject" value="New message from portfolio!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="Your first name"
                        className="w-full px-3 py-2 ..."
                        style={{ backgroundColor: '	#111827' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Your last name"
                        className="w-full px-3 py-2 ..."
                        style={{ backgroundColor: '	#111827' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-3 py-2 ..."
                      style={{ backgroundColor: '	#111827' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Let's discuss a project"
                      className="w-full px-3 py-2 ..."
                      style={{ backgroundColor: '	#111827' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-3 py-2 ..."
                      style={{ backgroundColor: '	#111827' }}
                    />
                  </div>

                  <Button type="submit" className="w-full group glow-effect hover:scale-105">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </form>

              </Card>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`text-center mt-16 pt-8 border-t border-border transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-text-dim flex items-center justify-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-400" /> by Gadhiraju Anirudh Varma
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;