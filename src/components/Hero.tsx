import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Network, Cpu, BarChart3, Github, Linkedin, Mail } from "lucide-react";
import futuristicBg from "@/assets/futuristic-bg-dark.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Digital Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${futuristicBg})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'var(--background-light)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      
      {/* Floating 3D Data Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Database className="w-8 h-8 text-primary glow-icon opacity-80" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Network className="w-10 h-10 text-secondary glow-icon opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Cpu className="w-6 h-6 text-accent glow-icon opacity-70" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <BarChart3 className="w-8 h-8 text-primary glow-icon opacity-75" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-gradient mb-2">Ari R</span>
            <span className="text-2xl md:text-3xl font-normal text-muted-foreground">
              Certified Data Scientist
            </span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm Ari R, a passionate and certified Data Scientist skilled in Python, 
            Machine Learning, and Data Analysis. I enjoy transforming data into actionable 
            insights and building intelligent solutions. Currently exploring opportunities 
            to apply AI in real-world scenarios.
          </p>
        </div>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToAbout}
            className="group"
          >
            Explore My Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            onClick={() => window.open('https://github.com/ari-r-1', '_blank')}
            className="group"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            GitHub
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            onClick={() => window.open('https://www.linkedin.com/in/r-ari/', '_blank')}
            className="group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            onClick={() => window.open('mailto:ariranalyst@gmail.com')}
            className="group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Email
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;