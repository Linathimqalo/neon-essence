import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block text-gradient-primary animate-glow">
                Alex Chen
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
              Full Stack Developer & Tech Innovator
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technologies. 
              Specializing in React, Node.js, and cloud architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary-hover px-8 py-6 text-lg font-semibold rounded-xl"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary glow-primary-hover">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary glow-primary-hover">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary glow-primary-hover">
              <Download className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;