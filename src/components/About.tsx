import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, User, Briefcase } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Python", "SQL", "Git", "Jupyter", "Colab", "Flask", "PowerBI", "Tableau",
    "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow"
  ];

  const goals = [
    "Secure a role as a Junior Data Scientist or AI Engineer",
    "Explore AI applications in quantitative finance and healthcare",
    "Build open-source tools for accessible data science"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="w-80 h-96 rounded-2xl overflow-hidden card-3d">
                  <img 
                    src={profilePhoto} 
                    alt="Ari R - Data Scientist" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Summary */}
              <Card className="card-3d p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg skill-icon pulse-glow">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient">Professional Summary</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Certified Data Scientist with a strong foundation in Python, Machine Learning, 
                  and Data Analysis. I have experience working on end-to-end data science projects 
                  involving data preprocessing, exploratory data analysis, model development, and deployment. 
                  My work reflects a keen interest in solving real-world problems using data-driven methods, 
                  especially in domains like healthcare, finance, and sustainability.
                </p>
              </Card>

              {/* Key Skills */}
              <Card className="card-3d p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg skill-icon pulse-glow">
                    <User className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient-secondary">Key Skills</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="justify-center py-2 hover:scale-105 transition-transform cursor-pointer glow-primary"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <strong>Soft Skills:</strong> Problem Solving, Communication, Team Collaboration, Research Mindset
                </div>
              </Card>

              {/* Career Goals */}
              <Card className="card-3d p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg skill-icon pulse-glow">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient">Career Goals</h3>
                </div>
                <ul className="space-y-3">
                  {goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;