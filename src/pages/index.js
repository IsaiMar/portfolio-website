import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 sm:p-10 text-center bg-sage min-h-screen text-roseTaupe">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Isai 👋
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-darkCyan mb-6">
          Recent Computer Science graduate and aspiring full-stack web developer.
        </p>
        <a
          href="/projects"
          className="bg-sunset text-white px-6 py-2 rounded hover:bg-tan transition-colors"
        >
          View My Projects
        </a>
      </main>
          <div className="bg-sage text-white p-8">
      <h1 className="text-4xl font-bold">Tailwind is working!</h1>
    </div>
    </>
  );
}
