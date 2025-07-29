import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Quality Assurance Analyst Intern",
      company: "Brookside Dairy",
      period: "July - August 2023",
      description: "Conducted quality control tests on dairy products, maintained laboratory equipment, and ensured compliance with food safety standards.",
      skills: ["Quality Control", "Laboratory Testing", "Food Safety", "Data Analysis"]
    },
    {
      title: "Research Intern",
      company: "KALRO (Kenya Agricultural and Livestock Research Organization)",
      period: "June - August 2024",
      description: "Participated in microbiological research projects, conducted fieldwork, and contributed to data collection and analysis.",
      skills: ["Research", "Data Collection", "Microbiology", "Scientific Writing"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Microbiology",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      period: "2021 - Present (Final Year)",
      description: "Specializing in applied microbiology with focus on industrial applications and quality assurance."
    },
    {
      degree: "Web Development Program",
      institution: "PLP Academy",
      period: "2024 - Present",
      description: "Comprehensive training in modern web development technologies including HTML, CSS, JavaScript, and React."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate individual bridging the worlds of science and technology, 
            with a unique perspective shaped by both microbiological research and web development.
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-16">
          <Card className="p-8 bg-card-gradient border-0 shadow-card">
            <h2 className="text-3xl font-bold mb-6 text-foreground">My Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                My journey began in the fascinating world of microbiology, where I developed a deep 
                appreciation for the intricate systems that govern life at the microscopic level. 
                This scientific foundation has taught me to approach problems methodically, pay attention 
                to detail, and think critically about complex systems.
              </p>
              <p className="mb-4">
                During my internships at Brookside Dairy and KALRO, I discovered my ability to bridge 
                the gap between technical knowledge and practical application. These experiences not only 
                strengthened my analytical skills but also revealed my passion for using technology to 
                solve real-world problems.
              </p>
              <p>
                This realization led me to pursue web development alongside my microbiology studies. 
                I found that both fields share common ground: they require systematic thinking, 
                attention to detail, and the ability to create something meaningful from seemingly 
                complex components. Now, I'm excited to combine these skills to create digital 
                solutions that make a difference.
              </p>
            </div>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <CalendarDays className="h-5 w-5 text-primary mt-1" />
                  <Badge variant="secondary">{edu.period}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{edu.degree}</h3>
                <p className="text-primary font-medium mb-3">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Values & Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            Values & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🧬</span>
              </div>
              <h3 className="font-semibold mb-2">Scientific Curiosity</h3>
              <p className="text-sm text-muted-foreground">
                Always eager to understand how things work and why they matter
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent-foreground">🌱</span>
              </div>
              <h3 className="font-semibold mb-2">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Committed to growing and adapting in both science and technology
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Believing that the best solutions come from working together
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;