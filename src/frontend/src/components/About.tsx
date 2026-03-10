import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player and communicator",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Passionate developer with a love for creating exceptional digital
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Hello! I'm Irshad
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  I'm a full-stack developer with over 5 years of experience
                  building web applications that users love. My journey in tech
                  started with a curiosity about how things work, and it's
                  evolved into a passion for creating elegant solutions to
                  complex problems.
                </p>
                <p>
                  I specialize in modern web technologies and have a keen eye
                  for design. Whether it's crafting pixel-perfect interfaces or
                  architecting robust backend systems, I bring dedication and
                  creativity to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-30" />
                <img
                  src="/assets/wanda-maximoff-elizabeth-olsen-scarlet-witch-marvel-comics-3840x2160-8520.jpg"
                  alt="Profile"
                  className="relative rounded-2xl shadow-2xl w-full border-4 border-background"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/50 hover:border-primary/50 transition-colors"
                >
                  <CardContent className="pt-5 sm:pt-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
