import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "SHOP",
    "ABOUT",
    "ENGRAVABLES",
    "LUXURY PIERCING",
    "PERMANENT JEWELRY",
    "BESPOKE",
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const Icon = ({ children, className = "" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );

  const SearchIcon = () => (
    <Icon className="h-[21px] w-[21px]">
      <circle cx="10.8" cy="10.8" r="6.5" />
      <path d="m15.7 15.7 4.2 4.2" />
    </Icon>
  );

  const UserIcon = () => (
    <Icon className="h-[21px] w-[21px]">
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M5 20c.5-3.5 3.1-5.5 7-5.5s6.5 2 7 5.5" />
    </Icon>
  );

  const BagIcon = () => (
    <Icon className="h-[21px] w-[21px]">
      <path d="M5.5 8.5h13l1 11h-15l1-11Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </Icon>
  );

  const MenuIcon = () => (
    <Icon className="h-[23px] w-[23px]">
      <path d="M3 8h18M3 16h18" />
    </Icon>
  );

  const closeMenu = () => setMenuOpen(false);

  const textColor = scrolled ? "text-white" : "text-[#252525]";
  const logoColor = scrolled ? "text-white" : "text-[#173f35]";

  const IconButton = ({ label, children }) => (
    <button
      type="button"
      aria-label={label}
      className={`relative flex h-10 w-9 shrink-0 items-center justify-center transition-opacity duration-300 hover:opacity-50 ${textColor}`}
    >
      {children}
    </button>
  );

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="relative z-[60] flex min-h-[36px] items-center justify-center bg-[#173f35] px-3 py-2 text-center text-[9px] font-medium uppercase tracking-[0.13em] text-white sm:text-[10px] sm:tracking-[0.18em]">
        <span>Complimentary Domestic Shipping Above SGD50</span>

        <span className="mx-3 text-[#c18b73]">✳</span>

        <span>International Shipping From Just $8</span>
      </div>

      {/* SPACE RESERVED FOR NAVBAR */}
      <div className="h-[76px] lg:h-[94px]" />

      {/* MAIN NAVBAR */}
      <nav
        aria-label="Main navigation"
        className={`fixed left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "top-0 bg-transparent" : "top-[36px] bg-white"
        }`}
      >
        <div className="relative mx-auto grid h-[76px] w-full grid-cols-[minmax(0,1fr)_130px_minmax(0,1fr)] items-center px-5 sm:grid-cols-[minmax(0,1fr)_160px_minmax(0,1fr)] lg:h-[94px] lg:px-8 xl:px-12">
          {/* LEFT NAVIGATION */}
          <div className="hidden min-w-0 items-center gap-x-4 xl:flex 2xl:gap-x-6">
            {navLinks.map((link) => (
              <a
                href="#"
                key={link}
                className={`group relative whitespace-nowrap py-2 text-[12px] font-medium tracking-[0.075em] transition-colors duration-500 ]${textColor}`}
              >
                {link}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex xl:hidden">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-10 w-10 items-center justify-center ${textColor}`}
            >
              {menuOpen ? (
                <span className="text-[27px] font-light">×</span>
              ) : (
                <MenuIcon />
              )}
            </button>
          </div>

          {/* CENTERED BRAND LOGO */}
          <a
            href="/"
            aria-label="Curious Creatures home"
            className={`col-start-2 row-start-1 flex flex-col items-center justify-center whitespace-nowrap font-serif transition-colors duration-500 ${logoColor}`}
          >
            <span className="text-[28px] italic leading-[27px] tracking-[-0.075em] lg:text-[34px] lg:leading-[32px]">
              curious
            </span>

            <span className="mt-[5px] text-[8px] font-medium uppercase leading-none tracking-[0.35em] lg:text-[9px]">
              creatures
            </span>
          </a>

          {/* RIGHT ACTIONS */}
          <div className="col-start-3 row-start-1 flex min-w-0 items-center justify-end gap-2 sm:gap-3 lg:gap-5">
            {/* COUNTRY SELECTOR */}
            <button
              type="button"
              className={`hidden items-center gap-2 whitespace-nowrap text-[9px] font-medium tracking-[0.08em] transition-colors duration-500 lg:flex 2xl:text-[10px] ${textColor}`}
            >
              SHIPPING TO DELHI
              <svg
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-[9px] w-[9px]"
              >
                <path d="m2 3 3 3 3-3" />
              </svg>
            </button>

            <IconButton label="Search">
              <SearchIcon />
            </IconButton>

            <div className="hidden sm:flex">
              <IconButton label="Account">
                <UserIcon />
              </IconButton>
            </div>

            <IconButton label="Shopping bag">
              <BagIcon />

              <span className="absolute right-0 top-0 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#bd846f] px-1 text-[8px] text-white">
                0
              </span>
            </IconButton>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        className={`fixed inset-0 z-[45] xl:hidden ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-[400px] overflow-y-auto bg-[#faf9f6] px-7 pb-10 pt-24 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <p className="mb-7 text-[9px] font-medium uppercase tracking-[0.25em] text-[#bd846f]">
            Discover Curious Creatures
          </p>

          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#173f35]/15 py-5 font-serif text-[19px] text-[#173f35] transition-all hover:pl-2"
              >
                {link}

                <span className="text-sm text-[#bd846f]">↗</span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <p className="font-serif text-[23px] italic text-[#173f35]">
              Jewellery made personal.
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[#173f35]/60">
              Crafted to tell your story
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
