const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="font-bold text-lg text-white">
          Arpit<span className="text-orange-500">.</span>
        </h1>

        <div className="flex gap-6 text-sm text-slate-300">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
