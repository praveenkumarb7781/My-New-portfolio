"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:aiwithanalytics@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.open(mailtoLink, '_self')
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 fade-in relative z-30">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in relative z-30" style={{ animationDelay: "0.3s" }}>
            Ready to bring your AI vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover-lift glass-effect border-border/20 slide-in-left">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-muted-foreground">aiwithanalytics@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Location</h3>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <p className="text-muted-foreground">+91 63748 30654</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift glass-effect border-border/20 slide-in-left" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-primary">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Cutting-edge AI expertise with practical implementation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Fast turnaround times with quality assurance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Ongoing support and maintenance</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover-lift glass-effect border-border/20 slide-in-right">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="focus-ring"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus-ring"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="focus-ring"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="focus-ring"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full glow-animation hover-lift focus-ring">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
