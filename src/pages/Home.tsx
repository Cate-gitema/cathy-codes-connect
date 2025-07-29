import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import catherineProfile from "@/assets/catherine-profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-accent-foreground">Catherine</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-white/90">
                Microbiologist & Aspiring Web Developer
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Final year microbiology student at Jomo Kenyatta University with a passion for 
                creating beautiful, functional web experiences through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild variant="hero" size="lg">
                  <Link to="/portfolio">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">
                    Get In Touch <Mail className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-hero">
                  <img
                    src={catherineProfile}
                    alt="Catherine Waithera Gitema"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-2 shadow-card">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Bio Section */}
      <section className="py-16 px-4 bg-section">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Bridging Science & Technology
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            As a final-year microbiology student, I've developed a unique perspective that combines 
            scientific rigor with creative problem-solving. My journey into web development represents 
            the perfect fusion of analytical thinking and digital innovation, allowing me to create 
            solutions that are both technically sound and user-focused.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🔬</span>
              </div>
              <h4 className="font-semibold mb-2">Scientific Background</h4>
              <p className="text-sm text-muted-foreground">
                Strong analytical skills from microbiology studies
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent-foreground">💻</span>
              </div>
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className="text-sm text-muted-foreground">
                Currently mastering modern web technologies
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🚀</span>
              </div>
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Bringing fresh perspectives to digital solutions
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always excited to discuss new projects and opportunities. 
            Whether you need a website, portfolio, or want to collaborate on something innovative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Download Resume <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;