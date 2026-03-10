import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / Django", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git / GitHub", level: 93 },
        { name: "Docker", level: 78 },
        { name: "AWS / Cloud Services", level: 75 },
        { name: "CI/CD", level: 80 },
      ],
    },
    {
      category: "Design & UX",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 82 },
        { name: "Responsive Design", level: 95 },
        { name: "Accessibility", level: 88 },
      ],
    },
  ];

  const exploringTechs = [
    "Web3",
    "Machine Learning",
    "Rust",
    "GraphQL",
    "Kubernetes",
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              A comprehensive overview of my technical skills and proficiency
              levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category) => (
              <Card key={category.category} className="border-border/50">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                    <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 sm:space-y-6 p-4 sm:p-6 pt-0">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-1.5 sm:h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base px-4">
              Always learning and expanding my skill set. Currently exploring:
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {exploringTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
