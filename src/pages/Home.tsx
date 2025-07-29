import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import catherineProfile from "@/assets/catherine-profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left text-white animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  Catherine
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-white/90 tracking-wide">
                Microbiologist & Aspiring Web Developer
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Final year microbiology student at Jomo Kenyatta University with a passion for 
                creating beautiful, functional web experiences through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <Button asChild variant="glow" size="lg" className="group">
                  <Link to="/portfolio">
                    <span className="mr-2">View My Work</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg" className="group">
                  <Link to="/contact">
                    <span className="mr-2">Get In Touch</span>
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-scale-in">
              <div className="relative group">
                <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-intense group-hover:shadow-glow transition-all duration-500">
                  <img
                    src={catherineProfile}
                    alt="Catherine Waithera Gitema"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-6 py-3 shadow-glow">
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium">Based in</p>
                      <p className="text-xs text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Bio Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-foreground tracking-tight">
            Bridging Science & Technology
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
            As a final-year microbiology student, I've developed a unique perspective that combines 
            scientific rigor with creative problem-solving. My journey into web development represents 
            the perfect fusion of analytical thinking and digital innovation, allowing me to create 
            solutions that are both technically sound and user-focused.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group p-8 text-center glass-card border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔬</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Scientific Background</h4>
              <p className="text-muted-foreground leading-relaxed">
                Strong analytical skills from microbiology studies
              </p>
            </Card>
            
            <Card className="group p-8 text-center glass-card border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💻</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Web Development</h4>
              <p className="text-muted-foreground leading-relaxed">
                Currently mastering modern web technologies
              </p>
            </Card>
            
            <Card className="group p-8 text-center glass-card border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Innovation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Bringing fresh perspectives to digital solutions
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-foreground tracking-tight">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            I'm always excited to discuss new projects and opportunities. 
            Whether you need a website, portfolio, or want to collaborate on something innovative.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="glow" className="group">
              <Link to="/contact">
                <span className="mr-2">Start a Conversation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="group">
              <span className="mr-2">Download Resume</span>
              <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;