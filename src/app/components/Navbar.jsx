import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-orange-400 p-4 rounded-lg ">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Tarjetas</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/new">
              Crear Tarjeta
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
