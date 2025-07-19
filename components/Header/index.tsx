export default function Header() {
  return (
    <header className="bg-gray-900 flex h-20 justify-center items-center">
      <nav>
        <ul className="flex gap-15 text-white text-3xl cursor-pointer">
          <li>Início</li>
          <li>Login</li>
          <li>Conteúdo</li>
        </ul>
      </nav>
    </header>
  );
}
