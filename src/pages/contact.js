import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-700 mb-6">
          Feel free to reach out via email or connect with me on LinkedIn.
        </p>
        <ul className="space-y-2 text-blue-600">
          <li>
            📧 <a href="mailto:youremail@example.com" className="hover:underline">isaimar07@gmail.com</a>
          </li>
          <li>
            🔗 <a href="https://www.linkedin.com/in/isai-mar-gar/" target="_blank" className="hover:underline">LinkedIn Profile</a>
          </li>
          <li>
            💻 <a href="https://github.com/IsaiMar" target="_blank" className="hover:underline">GitHub Profile</a>
          </li>
        </ul>
      </main>
    </>
  );
}
