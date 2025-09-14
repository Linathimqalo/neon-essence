import Navigation from './Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import PortfolioSection from './sections/Portfolio';
import Contact from './sections/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <PortfolioSection />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Alex Chen. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;