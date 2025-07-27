import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    "30% increase in email open rates",
    "25% boost in click-through rates (CTR)",
    "20% increase in conversion rates"
  ];

  const responsibilities = [
    "Gained hands-on experience working with data analysis, problem-solving, email marketing and implementing data-driven solutions",
    "Contributed to projects that enhanced business operations by identifying key insights, improving efficiency, and supporting decision-making processes",
    "Worked closely with cross-functional teams to deliver high-quality results and continuously improve workflows",
    "Designed, implemented and optimized email marketing campaigns targeting different customer segments"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            My professional journey in software engineering and data-driven solutions
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="card-3d p-8 hover:scale-105 transition-all duration-500 group">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg skill-icon pulse-glow">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                          Software Engineer
                        </h3>
                        <p className="text-lg text-secondary font-semibold">
                          Genxlead Solutions Pvt Ltd
                        </p>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0">
                        2.5 Years Experience
                      </Badge>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Apr 2022 – Oct 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Chennai, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gradient">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    <h4 className="text-lg font-semibold text-gradient-secondary">Key Achievements</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <Card key={index} className="p-4 bg-secondary/5 border-secondary/20">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-secondary mb-1">
                            {achievement.split(' ')[0]}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;