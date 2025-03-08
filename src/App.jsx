import React from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'
import ExperienceCard from './components/ExperienceCard'
import FloatingIcons from './components/FloatingIcons'

function App() {
  const experiences = [
    {
      date: "Dec 2024 - Present",
      title: "Co-founder",
      company: "YiPi Bear (Funded by JHU Tech Ventures)",
      location: "Baltimore, Maryland",
      description: "Building a full-stack AI powered storytelling platform. Developing a multi-agent storytelling system where AI agents collaborate to generate and refine stories.",
      technologies: ["Langchain", "React", "Express", "MongoDB"]
    },
    {
      date: "May 2024 - Dec 2024",
      title: "Software Engineering Intern",
      company: "Recursion Pharmaceuticals",
      location: "Salt Lake City, Utah",
      description: "Worked on training a 10B parameter foundation model using FSDP on 48 H100 GPUs. Achieved 50% cost reduction by optimizing GPU performance. Developed RAG solutions using FAISS, BM25, and DPR. Built APIs using Django and fastAPI on Google Cloud BigQuery.",
      technologies: ["PyTorch", "Ray", "Docker", "Google Cloud", "Anyscale", "Python", "React", "Django", "fastAPI"]
    },
    // {
    //   date: "Feb 2024 - Dec 2024",
    //   title: "Research",
    //   company: "Johns Hopkins University",
    //   location: "Baltimore, MD",
    //   description: "Conducting parameter-efficient fine-tuning using LORA with various LLMs. Testing knowledge editing techniques and comparing performance with in-context learning. Leading fine-tuning efforts on RoBERTa models.",
    //   technologies: ["LLM", "NLP", "PyTorch", "LORA", "Scaling test-time compute"]
    // },
    {
      date: "Nov 2023 - May 2024",
      title: "Software Engineer",
      company: "Hopkins Extreme Materials Institute",
      location: "Baltimore, MD",
      description: "Improved JHU HEMI Lab's website by adding crucial features and fixing bugs, boosting performance and user experience.",
      technologies: ["Python", "Angular", "SQL", "NodeJS", "Docker"]
    },
    {
      date: "Jan 2023 - May 2023",
      title: "Software Engineer Intern",
      company: "Darwinbox",
      location: "Hyderabad, India",
      description: "Automated payroll systems through Django APIs and SOAP/REST connectors. Built full-stack applications using MERN stack. Migrated automation scripts to cloud, improving scalability by 2x.",
      technologies: ["AWS", "Python", "NodeJS", "MongoDB", "React", "Django", "REST APIs"]
    },
  ]

  const projects = [
    {
      title: "Pure OKR",
      description: "OKR management platform using React, Node.js, Express, and MongoDB, enabling teams to set, track, and align objectives efficiently.",
      technologies: ["React", "MongoDB", "Express", "Node.js", "Full Stack"],
      // github: "https://github.com/ynadell",
      demo: "https://pureokr.com/login"
    },
    {
      title: "aRAGorn",
      description: "Utilized the GPT-3.5 API to make a retrieval augmented generation chatbot that uses data from Kialo to make meaningful arguments using few shot training, chain-of-thought and prompt engineering.",
      technologies: ["LLM", "RAG", "ChatGPT","BM25", "Prompt Engineering"],
      // github: "https://github.com/ynadell"
    },
    {
      title: "Low Resource Language Machine Translation",
      description: "Finetuned multilingual LMs such as Google's MADLAD, NLLB and OPUS models to get a 44.71 BLEU score beating the current SOTA.",
      technologies: ["LLM", "PyTorch", "Machine Translation", "MADLAD", "NLLB"],
      // github: "https://github.com/ynadell"
    },
    {
      title: "Billing System",
      description: "Developed a C-based billing system for retail stores that manages product inventory and customer information. Features include customer recognition via phone numbers and automated billing based on product codes.",
      technologies: ["C", "File I/O", "Data Structures"],
      github: "https://github.com/ynadell/billing_system_in_C"
    }
  ]

  const Footer = () => (
    <div className="footer">
      <a href="https://www.linkedin.com/in/yashwanth-nadella-3013591aa/">LinkedIn</a>
      <a href="mailto:yashwanthnadella@gmail.com">Email</a>
      <a href="https://github.com/ynadell">GitHub</a>
    </div>
  )

  return (
    <div className="app">
      <div className="header-container">
        <header className="header">
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>
        </header>
      </div>
      
      <section id="about" className="section">
        <FloatingIcons />
        <div className="section-content">
          <h1>Yashwanth Nadella</h1>
          <p>
          I am a MSE in Computer Science at <span className="keyword">Johns Hopkins University</span>.
          I love solving technical challenges in <span className="keyword">APIs</span>, <span className="keyword">full-stack development</span>, and <span className="keyword">ML infrastructure</span>.

          I've built <span className="keyword">APIs</span> and <span className="keyword">MERN stack</span> applications used by 10,000+ people at <a href="https://www.darwinbox.com/en-us">Darwinbox</a> (Unicorn startup) 
          and trained a <span className="keyword">10B foundation model</span> from scratch with <span className="keyword">AI pipelines</span> and <span className="keyword">distributed computing</span> at <a href="https://www.recursion.com/">Recursion Pharmaceuticals</a>.
          
          I have experience with <span className="keyword">Docker</span>, <span className="keyword">Kubernetes</span>, <span className="keyword">data mining</span>, and <span className="keyword">information retrieval</span> for AI-driven search.
          
          In my masters degree, I specialized in <span className="keyword">NLP</span>, focusing on <span className="keyword">test-time compute</span>, <span className="keyword">fine tuning</span>, <span className="keyword">RAG</span> and <span className="keyword">knowledge editing</span>.
          </p>
        </div>
        <Footer />
      </section>

      <section id="experience" className="section">
        <div className="section-content">
          <h2>Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index}
                date={exp.date}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                description={exp.description}
                technologies={exp.technologies}
              />
            ))}
          </div>
        </div>
        <Footer />
      </section>

      <section id="projects" className="section">
        <div className="section-content">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              />
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </div>
  )
}

export default App 