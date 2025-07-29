import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Microscope, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML & CSS", level: 85, category: "Web Development" },
    { name: "JavaScript", level: 75, category: "Programming" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Styling" },
    { name: "Git & GitHub", level: 75, category: "Version Control" },
    { name: "Responsive Design", level: 85, category: "UI/UX" }
  ];

  const scientificSkills = [
    { name: "Microbiological Testing", level: 90, category: "Laboratory" },
    { name: "Quality Assurance", level: 85, category: "QA/QC" },
    { name: "Data Analysis", level: 80, category: "Research" },
    { name: "Laboratory Equipment", level: 85, category: "Technical" },
    { name: "Scientific Writing", level: 80, category: "Communication" },
    { name: "Research Methodology", level: 85, category: "Academic" }
  ];

  const softSkills = [
    "Problem Solving",
    "Critical Thinking", 
    "Attention to Detail",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Analytical Thinking",
    "Project Management"
  ];

  const tools = [
    "VS Code",
    "Git",
    "Figma",
    "Chrome DevTools",
    "Laboratory Information Systems",
    "Microsoft Office Suite",
    "Statistical Software",
    "Quality Management Systems"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A unique blend of technical, scientific, and soft skills that enable me to 
            approach challenges from multiple perspectives and deliver comprehensive solutions.
          </p>
        </div>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Code className="h-8 w-8 text-primary" />
            Web Development Skills
          </h2>
          <Card className="p-8 bg-card-gradient border-0 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <Badge variant="secondary">{skill.category}</Badge>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                  <span className="text-sm text-muted-foreground">{skill.level}% Proficiency</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Scientific Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Microscope className="h-8 w-8 text-primary" />
            Scientific & Laboratory Skills
          </h2>
          <Card className="p-8 bg-card-gradient border-0 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scientificSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <Badge variant="secondary">{skill.category}</Badge>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                  <span className="text-sm text-muted-foreground">{skill.level}% Proficiency</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Soft Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Soft Skills
          </h2>
          <Card className="p-8 bg-card-gradient border-0 shadow-card">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-lg p-4 text-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            Tools & Technologies
          </h2>
          <Card className="p-8 bg-card-gradient border-0 shadow-card">
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* Skill Categories Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            My Expertise Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Frontend Development</h3>
              <p className="text-sm text-muted-foreground">
                Creating responsive, user-friendly web interfaces
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Ensuring standards and excellence in all deliverables
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Analytical approach to complex challenges
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Working effectively in diverse team environments
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;