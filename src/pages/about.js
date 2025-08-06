import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 mb-4">
          I'm Isai, a passionate developer with a degree in Computer Science and a strong interest in building
          modern web applications using React, Node.js, and cloud technologies.
        </p>
        <p className="text-gray-700 mb-2">
          🔧 Skills: JavaScript, React, Next.js, Node.js, Express, MongoDB, SQL, Git
        </p>
        <p className="text-gray-700">
          📍 Based in Utah — open to remote or hybrid opportunities.
        </p>
      </main>
    </>
  );
}
