import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isModelsPage = routerState.location.pathname === '/models';

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (isModelsPage) {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    {
      label: 'Home',
      action: () => {
        setIsOpen(false);
        navigate({ to: '/' });
      },
    },
    {
      label: 'Models',
      action: () => {
        setIsOpen(false);
        navigate({ to: '/models' });
      },
    },
    { label: 'Technology', action: () => scrollToSection('technology') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate({ to: '/' })}
            className="transition-opacity hover:opacity-80"
          >
            <span className="text-2xl font-bold text-accent tracking-tight">HOOD</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-accent text-accent hover:bg-accent/90 font-semibold border border-accent"
            >
              Book Test Drive
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-accent" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-accent tracking-tight">HOOD</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <button
                        onClick={link.action}
                        className="text-left text-lg font-medium text-accent transition-opacity hover:opacity-80"
                      >
                        {link.label}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    size="lg"
                    className="bg-accent text-accent hover:bg-accent/90 font-semibold w-full border border-accent"
                  >
                    Book Test Drive
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
