const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-2 space-y-2 md:flex justify-between items-center">
        <div className="flex justify-between md:block">
          <h1 className="text-indigo-700 text-4xl">Logo</h1>
          <p className="text-xl md:hidden">William</p>
        </div>
        <div>
          <form className="border">
            <input className="w-4/5" type="text" placeholder="buscar" />
            <button className="w-1/5" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <nav className="flex gap-2 flex-wrap justify-between">
          <a href="#">Inicio</a>
          <a href="#">Populares</a>
          <a href="#">Nuevo</a>
          <a href="#">Producto</a>
        </nav>
        <div className="">
          <p className="hidden md:block">Hola: William</p>
          <button>Cerrar Sesion</button>
          <a href="#">Login</a>
          <a href="#">Crear cuenta</a>
        </div>

      </div>
    </header>
  )
}

export default Header