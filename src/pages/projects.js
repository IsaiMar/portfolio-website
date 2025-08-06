"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import ProjectFolder from "../components/ProjectFolder"
import ProjectDetailModal from "../components/ProjectDetailModal"

const projects = [
  {
    title: "GreenFleet",
    color: "sage",
    description:
      "Track vehicle emissions and generate reports using real-world emission factors.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    demoLink: "https://greenfleet.vercel.app",
    codeLink: "https://github.com/yourusername/greenfleet",
    image: "/images/greenfleet.png",
  },
  {
    title: "Pest Control AI Chatbot",
    color: "sunset",
    description:
      "A React and Express-based customer service chatbot for a pest control website.",
    tech: ["React", "Express", "OpenAI API"],
    demoLink: "#",
    codeLink: "https://github.com/yourusername/pest-control-chatbot",
    image: "/images/pestchatbot.png",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <Navbar />
      <main className="p-6 md:p-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="flex flex-col gap-6">
          {projects.map((project, idx) => (
            <ProjectFolder
              key={idx}
              project={project}
              color={project.color}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <div className="bg-sage w-48 h-24 text-white p-4 mt-6">
          Sage Background Test
        </div>

        <ProjectDetailModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
    </>
  )
}
