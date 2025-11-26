import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Modules", href: "/modules" },
    { name: "Resources", href: "/resources" },
    { name: "Help", href: "/help" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary bg-coco backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary shadow-lg">
            <BookOpen className="h-7 w-7 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl leading-none text-coco-foreground tracking-tight">IPPF DHIS2</span>
            <span className="text-xs text-meteorite font-semibold tracking-wide">Training Platform</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="text-sm font-bold text-coco-foreground hover:text-meteorite transition-colors uppercase tracking-wider"
              activeClassName="text-primary border-b-2 border-primary"
            >
              {item.name}
            </NavLink>
          ))}
          <Button asChild size="sm" className="ml-4 font-bold">
            <Link to="/assessment">Final Assessment</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-coco-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-primary bg-coco">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-coco-foreground hover:text-meteorite transition-colors py-2 uppercase tracking-wider"
                activeClassName="text-primary font-bold"
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild size="sm" className="mt-2 font-bold" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/assessment">Final Assessment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
