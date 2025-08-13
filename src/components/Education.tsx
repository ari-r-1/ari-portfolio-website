import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "BE - ECE",
      school: "Selvam College Of Technology",
      grade: "CGPA - 8.09",
      period: "2017 – 2021",
      location: "Namakkal, India",
      type: "Undergraduate"
    },
    {
      degree: "HSC(12th)",
      school: "Government Boys Higher Secondary School",
      grade: "1122/1200",
      period: "2016 – 2017",
      location: "Erode, India",
      type: "Higher Secondary"
    },
    {
      degree: "SSLC(10th)",
      school: "Government Boys Higher Secondary School",
      grade: "451/500",
      period: "2014 – 2015",
      location: "Erode, India",
      type: "Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            My academic journey and educational background in engineering and data science
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="card-3d p-6 hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Type Badge */}
                  <Badge variant="secondary" className="mb-2">
                    {edu.type}
                  </Badge>

                  {/* Icon and Degree */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg skill-icon pulse-glow">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="font-semibold text-secondary">{edu.grade}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
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

export default Education;