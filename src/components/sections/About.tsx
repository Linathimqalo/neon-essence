import { Code, Zap, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      items: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js']
    },
    {
      icon: Zap,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      items: ['Node.js & Express', 'Python & FastAPI', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Users,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, Kubernetes, CI/CD',
      items: ['AWS Services', 'Docker & K8s', 'GitHub Actions', 'Terraform']
    },
    {
      icon: Award,
      title: 'Soft Skills',
      description: 'Leadership, Communication, Problem Solving',
      items: ['Team Leadership', 'Agile/Scrum', 'Technical Writing', 'Mentoring']
    }
  ];

  return (
    <section id="about" className="py-20 relative circuit-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications 
            and leading cross-functional teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl glow-primary tech-glow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Started my journey as a curious computer science student, I've evolved into a 
                full-stack developer who thrives on solving complex problems and building 
                innovative solutions. I believe in writing clean, maintainable code and 
                creating user experiences that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community 
                through blogs and workshops.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-card p-6 rounded-xl text-center border border-border/50 tech-glow">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-xl text-center border border-border/50 tech-glow">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={skill.title}
                  className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 glow-primary-hover tech-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 glow-primary">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{skill.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
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