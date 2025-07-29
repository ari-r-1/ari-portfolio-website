import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('certificates');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: "Certified Data Scientist",
      issuer: "Data Mites",
      description: "Comprehensive certification covering statistical analysis, machine learning, and data visualization",
      category: "Data Science",
      color: "text-primary"
    },
    {
      title: "Python for Data Science Development",
      issuer: "IBM",
      description: "Advanced Python programming for data science applications and analytics",
      category: "Programming",
      color: "text-secondary"
    },
    {
      title: "Python for Machine Learning",
      issuer: "Great Learning",
      description: "Machine learning algorithms implementation and model development using Python",
      category: "Machine Learning",
      color: "text-accent"
    },
    {
      title: "Advanced Google Analytics",
      issuer: "Google",
      description: "Advanced web analytics, data analysis, and digital marketing insights",
      category: "Analytics",
      color: "text-primary"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Professional certifications and achievements in data science, machine learning, and analytics
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.title}
                className="card-3d p-6 hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-2">
                    {cert.category}
                  </Badge>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg skill-icon pulse-glow">
                      <Award className={`w-6 h-6 ${cert.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-secondary font-semibold mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Badge variant="outline" className="text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      Verified Certificate
                    </Badge>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;