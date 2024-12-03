

export default function Header() {
    return (
        <header className="text-white bg-red-400 flex items-center justify-center">
          <nav className="flex gap-2 h-16 justify-center items-center">
            <img src="/src/assets/globe.svg" alt="logo" className="w-10 fill-white"/>
            <h1 className="text-2xl font-bold">Travel Journal</h1>
          </nav>
        </header>
    )
}