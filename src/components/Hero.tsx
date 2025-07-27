import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Database, Network, Cpu, BarChart3 } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Data visualization elements
    const elements: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      type: 'sphere' | 'cube' | 'network';
      size: number;
      connections: number[];
    }> = [];

    // Create elements
    for (let i = 0; i < 50; i++) {
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.2,
        type: ['sphere', 'cube', 'network'][Math.floor(Math.random() * 3)] as 'sphere' | 'cube' | 'network',
        size: Math.random() * 4 + 2,
        connections: []
      });
    }

    // Create network connections
    elements.forEach((el, i) => {
      if (el.type === 'network') {
        const nearbyElements = elements.filter((other, j) => {
          if (i === j) return false;
          const dist = Math.sqrt(
            Math.pow(el.x - other.x, 2) + 
            Math.pow(el.y - other.y, 2)
          );
          return dist < 150;
        });
        el.connections = nearbyElements.slice(0, 3).map(other => elements.indexOf(other));
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach((el, i) => {
        // Update position
        el.x += el.vx;
        el.y += el.vy;
        el.z += el.vz;

        // Bounce off edges
        if (el.x < 0 || el.x > canvas.width) el.vx *= -1;
        if (el.y < 0 || el.y > canvas.height) el.vy *= -1;
        if (el.z < 0 || el.z > 100) el.vz *= -1;

        // 3D perspective
        const scale = 1 + el.z / 100;
        const opacity = 0.3 + (el.z / 100) * 0.7;

        ctx.save();
        ctx.globalAlpha = opacity;

        if (el.type === 'sphere') {
          // Draw cosmic green sphere
          const gradient = ctx.createRadialGradient(el.x, el.y, 0, el.x, el.y, el.size * scale);
          gradient.addColorStop(0, 'hsl(140, 65%, 60%)');
          gradient.addColorStop(1, 'hsl(140, 65%, 30%)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.size * scale, 0, Math.PI * 2);
          ctx.fill();
        } else if (el.type === 'cube') {
          // Draw cosmic purple cube
          ctx.fillStyle = `hsl(280, 70%, ${40 + el.z / 2}%)`;
          ctx.fillRect(
            el.x - el.size * scale / 2, 
            el.y - el.size * scale / 2, 
            el.size * scale, 
            el.size * scale
          );
        }

        // Draw network connections
        if (el.type === 'network' && el.connections.length > 0) {
          ctx.strokeStyle = `hsl(180, 70%, 50%, ${opacity * 0.6})`;
          ctx.lineWidth = 1.5;
          el.connections.forEach(connIndex => {
            const target = elements[connIndex];
            if (target) {
              ctx.beginPath();
              ctx.moveTo(el.x, el.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
            }
          });
        }

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
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