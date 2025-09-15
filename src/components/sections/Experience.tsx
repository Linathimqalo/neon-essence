import { MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading a team of 8 developers in building scalable microservices architecture. Implemented CI/CD pipelines that reduced deployment time by 60%.',
      achievements: [
        'Architected and deployed cloud-native applications serving 100K+ users',
        'Mentored junior developers and established coding standards',
        'Reduced system latency by 40% through performance optimizations'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed core platform features from ground up. Built responsive web applications and RESTful APIs serving thousands of daily active users.',
      achievements: [
        'Built MVP that secured $2M in Series A funding',
        'Implemented real-time features using WebSocket technology',
        'Optimized database queries resulting in 50% faster load times'
      ],
      technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'Redis']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Created pixel-perfect, responsive websites for Fortune 500 clients. Collaborated with design teams to implement complex UI/UX requirements.',
      achievements: [
        'Delivered 20+ client projects with 100% on-time completion',
        'Improved website performance scores to 95+ on Google Lighthouse',
        'Established component library reducing development time by 30%'
      ],
      technologies: ['JavaScript', 'SASS', 'Webpack', 'Adobe Creative Suite']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/5 circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through impactful roles where I've contributed to building exceptional digital products.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary origin-top"
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.title} className="relative flex items-start">
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-6 w-4 h-4 bg-primary rounded-full glow-primary z-10"
                />
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                  className="ml-20 w-full"
                >
                  <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 glow-primary-hover tech-glow">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                        <CardTitle className="text-xl text-foreground">
                          {experience.title}
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm mt-2 lg:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      <CardDescription className="flex items-center text-primary font-semibold">
                        {experience.company}
                        <span className="mx-2">•</span>
                        <span className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30 tech-glow"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;