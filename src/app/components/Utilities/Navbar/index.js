const Navbar = () => {
  return (
    <div className="navbar grid grid-flow-col gap-2 px-32 bg-sky-500 p-6">
      <div className="logo">
        <h1>Ichibanime</h1>
      </div>
      <div className=""></div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/anime">Anime</a>
    </div>
  );
};

export default Navbar;
