import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-orange-400 p-4 rounded-lg ">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Tarjetas</h1>
        <ul className="flex space-x-4">
          <li>
            <Link className="inline-block bg-gray-300 text-gold-500 px-4 py-2 text-amber-800 rounded-md hover:bg-gray-800 hover:text-white font-medium" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="inline-block bg-gray-300 text-gold-500 px-4 py-2 text-amber-800 rounded-md hover:bg-gray-800 hover:text-white font-medium" href="/new">
              Crear Tarjeta
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
