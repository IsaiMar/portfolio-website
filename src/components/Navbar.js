import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md p-4 flex justify-center gap-10">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/projects" className="hover:underline">Projects</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
