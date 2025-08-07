import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Network, Cpu, BarChart3, Github, Linkedin, Mail } from "lucide-react";
import futuristicBg from "@/assets/futuristic-bg-light.jpg";
import mathAIBg from "@/assets/math-ai-light-bg.jpg";
import Scene3D from "./Scene3D";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Animated Background */}
      <Scene3D />
      
      {/* Elegant Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ 
          backgroundImage: `url(${futuristicBg})`,
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Floating Data Icons - Minimalist */}
      <div className="hidden sm:block absolute top-20 left-8 lg:left-16 animate-float">
        <div className="icon-float">
          <Database className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
        </div>
      </div>
      <div className="hidden md:block absolute top-40 right-8 lg:right-20 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="icon-float">
          <Network className="w-7 h-7 lg:w-8 lg:h-8 text-accent" />
        </div>
      </div>
      <div className="hidden sm:block absolute bottom-32 left-8 lg:left-20 animate-float" style={{ animationDelay: '3s' }}>
        <div className="icon-float">
          <Cpu className="w-5 h-5 lg:w-6 lg:h-6 text-secondary" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-20 right-8 lg:right-16 animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="icon-float">
          <BarChart3 className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
        </div>
      </div>

      {/* Main Content - Modern Glass Card */}
      <div className="relative z-10 text-center section-padding content-width">
        <div className="glass-card p-8 sm:p-12 lg:p-16 hover:scale-[1.01] transition-transform duration-700">
          <div className="animate-fade-in-up">
            <h1 className="responsive-display text-display mb-6 text-balance">
              <span className="block text-foreground mb-3 font-black">
                Ari R
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground font-display">
                Certified Data Scientist
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="responsive-text text-muted-foreground mb-10 content-width leading-relaxed text-pretty">
              Hi, I'm Ari R, a passionate and certified{" "}
              <span className="gradient-text font-semibold">Data Scientist</span>{" "}
              skilled in Python, Machine Learning, and Data Analysis. I enjoy transforming data into actionable 
              insights and building intelligent solutions. Currently exploring opportunities 
              to apply <span className="gradient-text font-semibold">AI</span> in real-world scenarios.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToAbout}
              className="group"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('https://github.com/ari-r-1', '_blank')}
                className="group"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/r-ari/', '_blank')}
                className="group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('mailto:ariranalyst@gmail.com')}
                className="group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center glass">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;