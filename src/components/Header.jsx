

export default function Header() {
    return (
        <header className="text-white bg-red-400 flex items-center justify-center">
          <nav className="flex gap-4 h-16 justify-center items-center">
            <img src="/src/assets/react.svg" alt="logo" className="logo" />
            <h1 className="text-2xl">Travel Journal</h1>
          </nav>
        </header>
    )
}