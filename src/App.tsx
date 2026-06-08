import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { Download, ArrowRight, ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

import profilePhoto from "@assets/WhatsApp_Image_2026-06-07_at_2.07.34_PM_1780821485007.jpeg";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";

const queryClient = new QueryClient();

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const skills = [
  { name: "Machine Learning", category: "AI/ML" },
  { name: "Deep Learning", category: "AI/ML" },
  { name: "Data Analysis", category: "AI/ML" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL / MySQL", category: "Backend" },
  { name: "GitHub / GitLab", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Gemini AI API", category: "AI/ML" },
];

const projects = [
  {
    title: "AI Poetry & Lyric Generator",
    description:
      "An AI-powered web application that generates original poetry and lyrics from user prompts. Analyzes themes, moods, and creative inputs via Gemini 2.5 to craft unique verses with a responsive UI — deployed on Render.",
    image: project1,
    tags: ["HTML", "CSS", "JavaScript", "Gemini 2.5", "Render"],
    link: "#",
  },
  {
    title: "AI-Driven Internship Management",
    description:
      "A full-stack platform built with React, Tailwind CSS, and Node.js that uses Gemini 2.5 to power a personalized recommendation system. Features regional language support, automated result generation, and advanced filtering and sorting.",
    image: project2,
    tags: ["React", "Tailwind CSS", "Node.js", "Gemini 2.5"],
    link: "#",
  },
];

function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-border/40">
        <span className="font-serif text-xl font-semibold tracking-tight text-foreground">Vidi Sahu</span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("about")} className="hover:text-foreground transition-colors" data-testid="nav-about">About</button>
          <button onClick={() => scrollTo("work")} className="hover:text-foreground transition-colors" data-testid="nav-work">Projects</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-foreground transition-colors" data-testid="nav-contact">Contact</button>
        </div>
        <a
          href="/resume.pdf"
          download
          data-testid="nav-download-resume"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
        >
          Resume <Download className="w-3.5 h-3.5" />
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-24 pb-16">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 60% 40%, hsl(var(--primary) / 0.15), transparent)" }}
        />
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-8 max-w-xl"
          >
            <motion.div variants={fadeIn}>
              <span className="text-xs uppercase tracking-widest font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                AI / ML Engineer
              </span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              Building intelligent systems, one model at a time.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Aspiring AI/ML engineer with a passion for scalable applications that integrate machine learning models and AI-driven features.
            </motion.p>
            <motion.div variants={fadeIn} className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="/resume.pdf"
                download
                data-testid="hero-download-resume"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollTo("work")}
                data-testid="hero-view-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="relative hidden md:flex items-center justify-center ml-auto"
          >
            <div className="absolute bg-primary/15 rounded-full -translate-x-3 translate-y-3" style={{ width: "30rem", height: "30rem" }} />
            <img
              src={profilePhoto}
              alt="Vidi Sahu"
              data-testid="img-profile"
              className="relative z-10 object-cover rounded-full shadow-2xl ring-4 ring-background"
              style={{ width: "28rem", height: "28rem", objectPosition: "center 10%" }}
            />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-14"
          >
            <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif">About Me</h2>
                <div className="w-12 h-1 rounded-full bg-primary" />
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm Vidi Sahu, a B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning at Shri Ramswaroop Memorial College of Engineering and Management (Batch 2023–present).
                </p>
                <p>
                  My foundation is rooted in core programming with Java, Python, and C, paired with hands-on experience building full-stack web applications and integrating Gemini AI into real-world projects. I've completed internships in Machine Learning fundamentals at L&T EduTech and Digital Marketing at GRP Career Pvt. Ltd.
                </p>
                <p>
                  I'm driven by a curiosity to understand how intelligent systems work — from data preprocessing and model training to deploying AI-powered applications that genuinely improve user experiences.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeIn} className="pt-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-semibold">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    data-testid={`skill-${skill.name.toLowerCase().replace(/[\s/]/g, "-")}`}
                    className="px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={fadeIn} className="pt-6 space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-semibold">Experience</h3>
              <div className="space-y-6">
                <div className="flex gap-6 items-start p-6 rounded-xl border border-border bg-background/60 hover:border-primary/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-foreground">Machine Learning Fundamentals Intern</p>
                        <p className="text-sm text-primary mt-0.5">L&T EduTech</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">September 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      Implemented core ML algorithms — Linear Regression, Logistic Regression, Decision Tree, Random Forest, KNN, and Naive Bayes. Applied supervised and unsupervised learning techniques, and evaluated models using Accuracy, Precision, Recall, F1-score, and Confusion Matrix.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-6 rounded-xl border border-border bg-background/60 hover:border-primary/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-foreground">Digital Marketing Intern</p>
                        <p className="text-sm text-primary mt-0.5">GRP Career Pvt. Ltd</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">May 2025 – Oct 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      Analyzed website and campaign performance via Google Analytics. Gained experience in SEO, social media marketing, content creation, and keyword research. Created digital content using Canva.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-20"
          >
            <motion.div variants={fadeIn} className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif">Projects</h2>
                <div className="w-12 h-1 rounded-full bg-primary mt-3" />
              </div>
              <span className="hidden md:block text-muted-foreground text-sm">2023 — Present</span>
            </motion.div>

            <div className="grid gap-20 md:gap-28">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  variants={fadeIn}
                  className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center`}
                  data-testid={`card-project-${i}`}
                >
                  <div className={`md:col-span-7 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                    <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl border border-border">
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className={`md:col-span-5 flex flex-col gap-5 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">Featured Project</span>
                    <h3 className="text-2xl md:text-3xl font-serif leading-snug">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors"
                      >
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 max-w-2xl"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-widest text-muted/60 font-semibold">Get in touch</motion.p>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-serif leading-tight">
              Let's build something intelligent together.
            </motion.h2>
            <motion.div variants={fadeIn} className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted/60" />
              <a
                href="mailto:vidisahu24@gmail.com"
                data-testid="link-email"
                className="text-xl text-muted/80 hover:text-white transition-colors border-b border-muted/40 pb-0.5 inline-block"
              >
                vidisahu24@gmail.com
              </a>
            </motion.div>
            <motion.div variants={fadeIn} className="text-sm text-muted/60">
              +91 9532710446
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-start md:items-end gap-8"
          >
            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
                className="p-3 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                className="p-3 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted/50">
              © {new Date().getFullYear()} Vidi Sahu. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
