import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Zap, 
  Clock, 
  Lightbulb, 
  Target, 
  Brain,
  MessageSquare,
  Briefcase,
  TrendingUp,
  UserCheck,
  Search,
  BarChart3,
  Crown
} from "lucide-react";

const CoreCompetencies = () => {
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

    const element = document.getElementById('competencies');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const competencies = [
    {
      title: "Leadership",
      icon: Crown,
      description: "Leading teams and projects with vision and strategy",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Smart Worker",
      icon: Lightbulb,
      description: "Efficient problem-solving with innovative approaches",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Good Team Player",
      icon: Users,
      description: "Collaborative mindset and effective teamwork",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Time Management",
      icon: Clock,
      description: "Prioritizing tasks and meeting deadlines efficiently",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Problem Solver",
      icon: Target,
      description: "Analytical approach to identifying and resolving issues",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Quick Learner",
      icon: Zap,
      description: "Rapidly adapting to new technologies and concepts",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Decision-Making",
      icon: Brain,
      description: "Data-driven decisions with strategic thinking",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Analytic Reasoning",
      icon: Search,
      description: "Logical analysis and pattern recognition",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Team Leadership",
      icon: UserCheck,
      description: "Mentoring and guiding team members effectively",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Critical Thinking",
      icon: Brain,
      description: "Evaluating information objectively and systematically",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Communication",
      icon: MessageSquare,
      description: "Clear and effective written and verbal communication",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Project Management",
      icon: Briefcase,
      description: "Planning, executing, and delivering projects successfully",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Statistical Analysis",
      icon: BarChart3,
      description: "Advanced statistical methods and data interpretation",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="competencies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Essential soft skills and leadership qualities that drive success in data science and technology
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {competencies.map((competency, index) => (
              <Card 
                key={competency.title}
                className="card-3d p-6 hover:scale-105 transition-all duration-500 group text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`p-3 ${competency.bgColor} rounded-lg skill-icon pulse-glow mx-auto w-fit`}>
                    <competency.icon className={`w-8 h-8 ${competency.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                    {competency.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {competency.description}
                  </p>
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

export default CoreCompetencies;