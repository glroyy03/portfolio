// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-background fixed top-0 w-full z-10">
      <div className="text-primary font-bold text-xl">
        Sai Portfolio
      </div>
      <div className="space-x-4">
        {["hero", "about", "projects", "skills", "contact"].map((section) => (
          <Link key={section} href={`#${section}`} legacyBehavior>
            <a className="hover:text-primary transition duration-300 capitalize">
              {section}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
