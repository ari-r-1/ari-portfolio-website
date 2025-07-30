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
      title: "Currency Converter Web App",
      description: "Built a responsive currency converter web application using Flask framework. Features real-time exchange rates, historical data visualization, and support for multiple currencies with an intuitive user interface.",
      technologies: ["Python", "Flask", "HTML/CSS", "JavaScript", "API Integration", "Bootstrap"],
      github: "https://github.com/ari-r-1/currency-converter-flask-based",
      category: "Web Development"
    },
    {
      title: "Email Duplicate Cleaner Web App",
      description: "Developed a web application to identify and remove duplicate emails from large datasets. Implemented advanced algorithms for email similarity detection and provided batch processing capabilities.",
      technologies: ["Python", "Flask", "Pandas", "HTML/CSS", "JavaScript", "Data Processing"],
      github: "https://github.com/ari-r-1/email-duplicate-cleaner",
      category: "Data Processing"
    },
    {
      title: "Chronic Kidney Disease Prediction (CKDP)",
      description: "End-to-End Machine Learning project for predicting chronic kidney disease using patient medical data. Implemented multiple ML algorithms with comprehensive evaluation metrics and model interpretability.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      github: "https://github.com/ari-r-1/ckd-prediction",
      category: "Healthcare ML"
    },
    {
      title: "Data Extraction And NLP Text Analysis",
      description: "Comprehensive NLP project for extracting insights from text data using natural language processing techniques. Features sentiment analysis, topic modeling, and text classification with visualization dashboards.",
      technologies: ["Python", "NLTK", "SpaCy", "Scikit-learn", "Matplotlib", "Text Processing", "NLP"],
      github: "https://github.com/ari-r-1/data-extraction-and-NLP-text-analysis-",
      category: "Natural Language Processing"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A showcase of my data science and web development projects demonstrating end-to-end solutions 
            across various domains including healthcare, NLP, and data processing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-3d p-4 sm:p-5 lg:p-6 hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-1 sm:mb-2 text-xs">
                    {project.category}
                  </Badge>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                  <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                    <Button 
                      variant="glow" 
                      size="sm" 
                      className="flex-1 group/btn text-xs sm:text-sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://github.com/ari-r-1', '_blank')}
              className="group text-sm sm:text-base"
            >
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;