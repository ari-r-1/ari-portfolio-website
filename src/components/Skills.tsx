import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Wrench, 
  HardDrive, 
  Cloud 
} from "lucide-react";

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Mathematics & Statistics",
      icon: Calculator,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Probability Theory", level: 85 },
        { name: "Statistics", level: 90 },
        { name: "Linear Algebra", level: 80 },
        { name: "Hypothesis Testing", level: 85 },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Bash/Shell", level: 70 },
      ]
    },
    {
      title: "Data Manipulation",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "EDA", level: 85 },
        { name: "Excel", level: 80 },
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Matplotlib/Seaborn", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Tableau", level: 75 },
        { name: "Plotly", level: 70 },
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Model Evaluation", level: 85 },
        { name: "Deep Learning", level: 75 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Jupyter/Colab", level: 95 },
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 65 },
      ]
    },
    {
      title: "Databases",
      icon: HardDrive,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQLite", level: 85 },
        { name: "MongoDB", level: 60 },
      ]
    },
    {
      title: "Cloud & Deployment",
      icon: Cloud,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Streamlit", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Heroku", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across data science, 
            machine learning, and software development domains.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className="card-3d p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 ${category.bgColor} rounded-lg skill-icon`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-2"
                        style={{ 
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                          transition: 'all 1s ease-out'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;