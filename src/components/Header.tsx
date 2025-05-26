const Header = () => {
  return (
    <nav
      id="navigation"
      className="z-30 hidden sm:flex items-center justify-center space-x-3 w-full sticky top-0 text-sm font-bold uppercase py-3 px-1 bg-gradient-to-b from-neutral-100 to-[rgba(250,250,249,0.75)] backdrop-blur-md transition-shadow duration-500 "
    >
      <a
        href="#our-story"
        className="rounded-full px-6 py-3 text-black transition duration-150 hover:bg-neutral-300/50"
      >
        Our Story
      </a>
      <a
        href="#schedule"
        className="rounded-full px-6 py-3 text-black transition duration-150 hover:bg-neutral-300/50"
      >
        Schedule
      </a>
      <a
        href="#menu"
        className="rounded-full px-6 py-3 text-black transition duration-150 hover:bg-neutral-300/50"
      >
        Menu
      </a>
      <a
        href="mailto:info@ktorakitchen.com"
        className="rounded-full px-6 py-3 bg-neutral-900 text-white transition duration-150 hover:bg-neutral-800"
      >
        Get in Touch
      </a>
    </nav>
  );
};

export default Header;
