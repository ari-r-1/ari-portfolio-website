import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Wrench, 
  HardDrive, 
  Cloud,
  FileText,
  Search,
  TrendingUp
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
      title: "Programming & Scripting",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        "Python (Pandas, NumPy, NLTK, Scikit-learn)",
        "SQL (data querying and joins)",
        "Regular Expressions (Regex)",
        "Bash (basic)"
      ]
    },
    {
      title: "Data Handling & Analysis",
      icon: Database,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        "Pandas",
        "NumPy",
        "Data Cleaning & Wrangling", 
        "Exploratory Data Analysis (EDA)",
        "Data preprocessing & cleaning",
        "Feature Engineering"
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "Matplotlib, Seaborn for visualization",
        "Excel (formulas, pivot tables, charts)",
        "Tableau / Power BI",
        "Plotly"
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        "Supervised Learning: Linear Regression, Logistic Regression, etc..",
        "Unsupervised Learning: K-Means, Hierarchical Clustering, etc..",
        "Model Evaluation: Accuracy, Confusion Matrix, F1 Score",
        "Scikit-learn pipeline design",
        "TensorFlow / Keras (basic)"
      ]
    },
    {
      title: "Natural Language Processing",
      icon: FileText,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        "Text preprocessing (tokenization, stopword removal, stemming)",
        "Sentiment analysis using NLTK",
        "Feature extraction (Bag-of-Words, TF-IDF)",
        "Readability scoring (e.g., FOG Index)"
      ]
    },
    {
      title: "Web Scraping & Data Extraction",
      icon: Search,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "Web scraping using BeautifulSoup and Requests",
        "Data Extraction from various sources",
        "API Integration",
        "Automated data collection"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        "Jupyter Notebook / Google Colab",
        "Git & GitHub",
        "Excel (Advanced Functions & Pivot Tables)",
        "VS Code / PyCharm"
      ]
    },
    {
      title: "Databases",
      icon: HardDrive,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "MongoDB (basic)"
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: Cloud,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "AWS (S3, Lambda)",
        "Google Cloud Platform (BigQuery)",
        "Apache Spark (Intro-level)",
        "Flask deployment"
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
          <p className="text-center text-muted-foreground mb-4">
            Junior Data Scientist
          </p>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive technical expertise across data science, machine learning, 
            and software development domains with hands-on project experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="font-semibold text-lg text-gradient">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill}
                      variant="outline" 
                      className="w-full justify-start text-left p-3 hover:bg-primary/10 transition-colors text-xs leading-relaxed"
                      style={{ 
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                      }}
                    >
                      {skill}
                    </Badge>
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