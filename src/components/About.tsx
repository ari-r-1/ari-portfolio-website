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

  const coreSkills = [
    "Python", "SQL", "Machine Learning", "Statistical Analysis", "Data Visualization", 
    "Deep Learning", "Big Data", "Cloud Computing", "Data Cleaning & Preprocessing",
    "Exploratory Data Analysis (EDA)", "Predictive Modeling", "Tableau / Power BI",
    "Scikit-learn / TensorFlow / Keras", "Pandas / NumPy", "Git & Version Control",
    "Communication & Storytelling with Data", "Problem Solving", "Business Intelligence"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 px-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto px-4">
            Passionate about turning data into meaningful insights and actionable strategies
          </p>

          <div className="grid lg:grid-cols-1 gap-8">
            {/* Content */}
            <div className="space-y-8">
              {/* Professional Summary */}
              <Card className="card-3d p-6 border-glass-border hover:shadow-glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg skill-icon pulse-glow">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient">Data Scientist & Analytics Expert</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a Junior Data Scientist and Analytics Expert, I bring a strong foundation in data science, statistical analysis, and business intelligence. With a background in Python, SQL, and data visualization tools like Tableau and Power BI, I have successfully turned raw data into meaningful insights. My academic and project experience includes working with supervised and unsupervised machine learning models, A/B testing, and hypothesis-driven analysis to support data-informed decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I specialize in data cleaning, feature engineering, and building predictive models to uncover patterns and trends. My ability to interpret complex datasets and communicate insights clearly helps bridge the gap between technical analysis and strategic decision-making. Additionally, I am familiar with tools such as Excel, Pandas, Scikit-learn, and Jupyter Notebooks, and have experience working with relational databases and large datasets in real-world scenarios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Driven by curiosity and continuous learning, I stay up-to-date with the latest developments in AI, analytics, and cloud platforms like AWS and Google BigQuery. I thrive in collaborative environments where data is used to solve business challenges and enhance performance. With a keen eye for detail and a passion for solving problems, I am eager to contribute to impactful data science and analytics initiatives.
                </p>
              </Card>

              {/* Core Skills */}
              <Card className="card-3d p-6 border-glass-border hover:shadow-glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg skill-icon pulse-glow">
                    <User className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient-secondary">Core Skills</h3>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {coreSkills.map((skill, index) => (
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
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;