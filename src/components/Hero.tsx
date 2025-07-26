import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full float-delay opacity-40" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full float opacity-50" />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/50 rounded-full float-delay" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-gradient mb-2">Ari R</span>
            <span className="text-2xl md:text-3xl font-normal text-muted-foreground">
              Certified Data Scientist | ML Enthusiast | Future Quant
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
          <Button variant="glass" size="xl">
            <Download className="w-5 h-5" />
            Download Resume
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