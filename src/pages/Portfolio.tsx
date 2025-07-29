import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  // Placeholder projects - will be updated as Catherine builds her portfolio
  const projects = [{
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my journey from microbiology to web development.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    status: "Live",
    category: "Web Development",
    year: "2024"
  }, {
    title: "Laboratory Data Management System",
    description: "Conceptual design for a digital solution to streamline laboratory data collection and analysis.",
    image: "/placeholder.svg",
    technologies: ["UI/UX Design", "System Design", "Data Visualization"],
    status: "Concept",
    category: "UI/UX Design",
    year: "2024"
  }, {
    title: "Responsive Business Website",
    description: "Practice project creating a modern business website with clean design and smooth user experience.",
    image: "/placeholder.svg",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    status: "In Progress",
    category: "Web Development",
    year: "2024"
  }];
  const upcomingProjects = ["E-commerce Platform", "React Native Mobile App", "Data Visualization Dashboard", "Content Management System", "API Integration Project"];
  return <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A growing collection of projects that showcase my journey in web development, 
            combining scientific precision with creative innovation.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => <Card key={index} className="overflow-hidden bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300 group">
                {/* Project Image */}
                
                
                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    
                    
                  </div>
                  
                  
                  
                  {/* Technologies */}
                  
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.status === 'Live'}
                    {project.status !== 'Concept'}
                  </div>
                </div>
              </Card>)}
          </div>
        </section>

        {/* Current Learning & Upcoming Projects */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Learning */}
            <Card className="p-8 bg-card-gradient border-0 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📚</span>
                </div>
                Currently Learning
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Advanced React Concepts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Node.js & Express.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Database Design & Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">API Development</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                Continuously expanding my skill set through PLP Academy and self-directed learning.
              </p>
            </Card>

            {/* Upcoming Projects */}
            <Card className="p-8 bg-card-gradient border-0 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-accent-foreground" />
                </div>
                Upcoming Projects
              </h3>
              <div className="space-y-3">
                {upcomingProjects.map((project, index) => <div key={index} className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-accent/10 transition-colors">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-foreground text-sm">{project}</span>
                  </div>)}
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                Exciting projects planned as I continue to grow my development skills.
              </p>
            </Card>
          </div>
        </section>

        {/* Skills in Action */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Skills in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">Design Thinking</h3>
              <p className="text-sm text-muted-foreground">
                User-centered approach influenced by scientific methodology
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-accent-foreground">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Performance Focus</h3>
              <p className="text-sm text-muted-foreground">
                Optimization mindset from quality assurance background
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-foreground">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Analytical approach to finding creative solutions
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-section rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on interesting projects. 
            Whether you have a specific idea or just want to explore possibilities, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Project <Plus className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>;
};
export default Portfolio;