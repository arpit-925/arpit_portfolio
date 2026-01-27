const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur z-50 border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="font-bold text-lg">Arpit.</h1>
        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
