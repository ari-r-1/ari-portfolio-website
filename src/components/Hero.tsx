import { Button } from "@/components/ui/button";
import { ArrowDown, Database, Network, Cpu, BarChart3, Github, Linkedin, Mail } from "lucide-react";
import futuristicBg from "@/assets/futuristic-bg-light.jpg";
import mathAIBg from "@/assets/math-ai-light-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Elegant Glass Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${futuristicBg})`,
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/20" />
      
      {/* Elegant Glass Floating Elements - Hidden on small screens */}
      <div className="hidden sm:block absolute top-20 left-4 lg:left-10 animate-float">
        <div className="p-3 lg:p-4 rounded-2xl glass-dark backdrop-blur-xl border border-white/10">
          <Database className="w-6 h-6 lg:w-8 lg:h-8 text-primary/90 filter drop-shadow-lg" />
        </div>
      </div>
      <div className="hidden md:block absolute top-40 right-4 lg:right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="p-3 lg:p-4 rounded-2xl glass-dark backdrop-blur-xl border border-white/10">
          <Network className="w-8 h-8 lg:w-10 lg:h-10 text-secondary/90 filter drop-shadow-lg" />
        </div>
      </div>
      <div className="hidden sm:block absolute bottom-32 left-4 lg:left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="p-2 lg:p-3 rounded-2xl glass-dark backdrop-blur-xl border border-white/10">
          <Cpu className="w-5 h-5 lg:w-6 lg:h-6 text-accent/90 filter drop-shadow-lg" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-20 right-4 lg:right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="p-3 lg:p-4 rounded-2xl glass-dark backdrop-blur-xl border border-white/10">
          <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-primary/90 filter drop-shadow-lg" />
        </div>
      </div>

      {/* Main Content - Elegant Glass Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              <span className="block text-black mb-2 filter drop-shadow-xl font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent animate-pulse-glow">
                Ari R
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black/80 filter drop-shadow-lg font-mono tracking-wide">
                Certified Data Scientist
              </span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-base sm:text-lg md:text-xl text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed filter drop-shadow-md font-medium">
              Hi, I'm Ari R, a passionate and certified <span className="font-bold text-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Data Scientist</span> skilled in Python, 
              Machine Learning, and Data Analysis. I enjoy transforming data into actionable 
              insights and building intelligent solutions. Currently exploring opportunities 
              to apply <span className="font-bold text-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">AI</span> in real-world scenarios.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => window.open('https://github.com/ari-r-1', '_blank')}
              className="group bg-white/10 hover:bg-gradient-to-r hover:from-gray-900 hover:to-black text-black hover:text-white border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => window.open('https://www.linkedin.com/in/r-ari/', '_blank')}
              className="group bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-black hover:text-white border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => window.open('mailto:ariranalyst@gmail.com')}
              className="group bg-white/10 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 text-black hover:text-white border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Email
            </Button>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;