import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Healthcare Analytics Dashboard",
      description: "Built an interactive dashboard for analyzing patient data and treatment outcomes using machine learning models. Implemented predictive analytics for early disease detection and resource optimization.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Plotly", "Streamlit", "SQL"],
      github: "https://github.com/arir/healthcare-analytics",
      demo: "#",
      category: "Healthcare AI"
    },
    {
      title: "Financial Risk Assessment Model",
      description: "Developed a comprehensive risk assessment model for loan default prediction using ensemble methods. Achieved 94% accuracy with XGBoost and implemented SHAP for model interpretability.",
      technologies: ["Python", "XGBoost", "SHAP", "Pandas", "Matplotlib", "Flask"],
      github: "https://github.com/arir/risk-assessment",
      demo: "#",
      category: "FinTech"
    },
    {
      title: "Climate Data Analysis Platform",
      description: "Created an end-to-end platform for climate data analysis and visualization. Processed large datasets from NASA and NOAA to identify climate patterns and predict temperature trends.",
      technologies: ["Python", "TensorFlow", "Pandas", "Seaborn", "Jupyter", "AWS"],
      github: "https://github.com/arir/climate-analysis",
      demo: "#",
      category: "Environmental"
    },
    {
      title: "Customer Segmentation & Analytics",
      description: "Implemented unsupervised learning algorithms for customer segmentation in e-commerce. Used K-means clustering and RFM analysis to improve marketing strategies and increase conversion rates.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Plotly", "PowerBI"],
      github: "https://github.com/arir/customer-segmentation",
      demo: "#",
      category: "E-commerce"
    },
    {
      title: "Real-time Stock Price Predictor",
      description: "Built a real-time stock price prediction system using LSTM neural networks and technical indicators. Integrated with financial APIs for live data streaming and automated trading signals.",
      technologies: ["Python", "TensorFlow", "Alpha Vantage API", "Streamlit", "NumPy"],
      github: "https://github.com/arir/stock-predictor",
      demo: "#",
      category: "Quantitative Finance"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A showcase of my data science projects demonstrating end-to-end solutions 
            across various domains including healthcare, finance, and sustainability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-3d p-6 hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="glow" 
                      size="sm" 
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button 
                      variant="glass" 
                      size="sm" 
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://github.com/arir', '_blank')}
              className="group"
            >
              View All Projects on GitHub
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;