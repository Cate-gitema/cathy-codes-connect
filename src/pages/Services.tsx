import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Palette, Smartphone, Globe, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [{
    icon: <Monitor className="h-8 w-8" />,
    title: "Website Development",
    description: "Custom websites built with modern technologies, responsive design, and optimized performance.",
    features: ["Responsive Design", "Modern Technologies", "SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"],
    pricing: "Starting from $500"
  }, {
    icon: <Palette className="h-8 w-8" />,
    title: "Portfolio Development",
    description: "Professional portfolios that showcase your work and skills in the best possible light.",
    features: ["Custom Design", "Project Showcase", "Professional Presentation", "Contact Integration", "Mobile Friendly"],
    pricing: "Starting from $300"
  }, {
    icon: <Smartphone className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
    pricing: "Starting from $250"
  }, {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Consulting",
    description: "Strategic guidance on web presence, technology choices, and digital transformation.",
    features: ["Technology Strategy", "Performance Audit", "SEO Consultation", "Best Practices", "Growth Planning"],
    pricing: "From $100/hour"
  }];
  const process = [{
    step: "01",
    title: "Discovery",
    description: "Understanding your needs, goals, and target audience through detailed consultation."
  }, {
    step: "02",
    title: "Planning",
    description: "Creating a comprehensive strategy and timeline for your project delivery."
  }, {
    step: "03",
    title: "Design",
    description: "Developing wireframes, mockups, and visual designs for your approval."
  }, {
    step: "04",
    title: "Development",
    description: "Building your solution with clean, efficient code and modern technologies."
  }, {
    step: "05",
    title: "Testing",
    description: "Thorough quality assurance to ensure everything works perfectly."
  }, {
    step: "06",
    title: "Launch",
    description: "Deploying your project and providing ongoing support as needed."
  }];
  return <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining scientific precision with creative innovation to deliver web solutions 
            that are both beautiful and functional.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={index} className="p-8 bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:bg-accent transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>)}
                </div>
                
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>)}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">My Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring quality results and client satisfaction at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => <Card key={index} className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>)}
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Choose Me?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unique advantages that set my services apart from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🔬</span>
              </div>
              <h3 className="font-semibold mb-2">Scientific Precision</h3>
              <p className="text-sm text-muted-foreground">
                Attention to detail and systematic approach from scientific background
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent-foreground">💡</span>
              </div>
              <h3 className="font-semibold mb-2">Fresh Perspective</h3>
              <p className="text-sm text-muted-foreground">
                Unique viewpoint combining science and technology for innovative solutions
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Modern Technologies</h3>
              <p className="text-sm text-muted-foreground">
                Up-to-date with latest web development trends and best practices
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-section rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. 
            I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">
                View My Work
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>;
};
export default Services;