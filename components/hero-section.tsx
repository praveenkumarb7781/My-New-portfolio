"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-card opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl float-animation" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/20 to-accent/20 rounded-full blur-3xl float-animation"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-gradient slide-in-up">AI Engineer</span>
              <span className="block text-accent slide-in-up" style={{ animationDelay: "0.2s" }}>& Innovator</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed slide-in-up" style={{ animationDelay: "0.4s" }}>
              Crafting intelligent solutions and pushing the boundaries of artificial intelligence from Chennai
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="glow-animation hover-lift focus-ring"
              onClick={() => window.open('mailto:aiwithanalytics@gmail.com', '_self')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8 slide-in-up" style={{ animationDelay: "0.8s" }}>
            <a 
              href="https://www.linkedin.com/in/bpraveenkumarin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 focus-ring rounded-full p-2"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            // Try scrollIntoView first
            aboutSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
            
            // Fallback: manual scroll if smooth scroll doesn't work
            setTimeout(() => {
              const rect = aboutSection.getBoundingClientRect();
              const scrollTop = window.pageYOffset + rect.top - 80; // 80px offset for nav
              window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
              });
            }, 100);
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 focus-ring rounded-full p-2"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors duration-300" />
      </button>
    </section>
  )
}
