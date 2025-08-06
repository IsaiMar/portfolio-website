import Image from 'next/image';

export default function ProjectDetailModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white p-8 overflow-auto shadow-lg">
      <button onClick={onClose} className="absolute top-4 right-4 text-lg font-bold">
        ❌ Close
      </button>

      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-auto mb-4 object-cover rounded"
        />
      )}

      <p className="text-gray-700">{project.description}</p>

      <div className="mt-4 flex gap-4">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Live Demo
          </a>
        )}
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
