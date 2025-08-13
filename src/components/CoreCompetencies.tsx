import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
  const [ref, isVisible] = useScrollAnimation(0.3);

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
    <section id="competencies" ref={ref} className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'animate-fade-in translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Essential soft skills and leadership qualities that drive success in data science and technology
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {competencies.map((competency, index) => (
              <Card 
                key={competency.title}
                className={`card-3d p-3 xs:p-4 sm:p-5 md:p-6 hover:scale-105 transition-all duration-500 group text-center transform ${isVisible ? 'animate-bounce-in' : 'scale-75 opacity-0'}`}
                style={{ animationDelay: `${index * 0.08 + 0.4}s` }}
              >
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  {/* Icon */}
                  <div className={`p-2 xs:p-2.5 sm:p-3 ${competency.bgColor} rounded-lg skill-icon pulse-glow mx-auto w-fit`}>
                    <competency.icon className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${competency.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                    {competency.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs xs:text-sm leading-relaxed">
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