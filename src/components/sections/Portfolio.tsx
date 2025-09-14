import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'FastAPI', 'TensorFlow', 'React'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Crypto Dashboard',
      description: 'Real-time cryptocurrency tracking dashboard with portfolio management and trading analytics.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'WebSocket'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media App',
      description: 'Modern social platform with real-time messaging, content sharing, and social features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Analytics Platform',
      description: 'Business intelligence dashboard with data visualization and reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['D3.js', 'Python', 'Django', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className="group overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 glow-primary-hover">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={project.title} className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 glow-primary-hover">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary/10">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary/10">
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3">
            View All Projects on GitHub
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
