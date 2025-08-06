export default function ProjectFolder({ project, onClick, color = "sage" }) {

  const colorClasses = {
    sage: "bg-sage",
    sunset: "bg-sunset",
    tan: "bg-tan",
    darkCyan: "bg-darkCyan",
    roseTaupe: "bg-roseTaupe",
  };

  return (
    <div
      className={`relative w-full ${colorClasses[color]} border border-black/10 p-6 rounded-md shadow-md cursor-pointer transform transition-transform duration-200 hover:-translate-y-2`}
      onClick={onClick}
    >
      {/* Folder tab */}
      <div className="absolute -top-4 left-6 bg-white text-sm px-4 py-1 rounded-t-md font-semibold shadow">
        {project.title}
      </div>

      <div className="mt-4">
        <p className="text-gray-900">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm text-gray-800">
          {project.tech.map((tech, idx) => (
            <li key={idx} className="bg-white/70 px-2 py-0.5 rounded">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
