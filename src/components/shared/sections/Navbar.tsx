import { navLinks } from "@/constants/index.ts";
import { styles } from "@/lib/utils";
import { logo, menu, share, linkdln, watsapp, telegram } from "@/assets";
import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleHashChange = () => setActive(window.location.hash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5! fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex special-screen:justify-between items-center max-w-350 mx-auto!">
        <a
          href="/"
          className="flex items-center gap-2 flex-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo.src || logo} alt="logo" className="w-9 h-9 object-contain" />
          <span className="text-white text-[18px] font-bold cursor-pointer flex">
            Saadeh
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="list-none hidden special-screen:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer">
              <RoughNotation
                type="box"
                show={link.title === "Packages"}
                color="yellow"
                strokeWidth={1}
                animationDuration={800}
                padding={[2, 4]}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(`#${link.id}`)}
                  className={`${active === `#${link.id}` ? "text-white" : "text-secondary"} 
          hover:text-white text-[18px] font-medium transition-colors`}
                >
                  {link.title}
                </a>
              </RoughNotation>
            </li>
          ))}
        </ul>

        {/* Share Button */}
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="mr-5! special-screen:mr-0! special-screen:ml-5! outline-none bg-transparent border-none p-0 cursor-pointer"
            >
              <img src={share.src || share} alt="share" className="w-6 h-6" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={5}
            className="p-0 w-60 h-52 bg-[#1F2937] border-none rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col">
              <p className="bg-[#374151] text-sm grid place-items-center py-3! font-semibold text-white">
                Share!
              </p>
              <div className="p-8! flex items-center justify-center gap-3 flex-wrap">
                <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://saadeh-portfolio.onrender.com/" className="hover:scale-110 transition-transform">
                  <img src={linkdln.src || linkdln} alt="linkedin" className="w-10! h-10!" />
                </a>
                <a target="_blank" href="https://api.whatsapp.com/send?text=https://saadeh-portfolio.onrender.com/" className="hover:scale-110 transition-transform">
                  <img src={watsapp.src || watsapp} alt="whatsapp" className="w-10! h-10!" />
                </a>
                <a target="_blank" href="https://telegram.me/share/url?url=https://saadeh-portfolio.onrender.com/" className="hover:scale-110 transition-transform">
                  <img src={telegram.src || telegram} alt="telegram" className="w-14! h-14!" />
                </a>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Mobile Menu */}
        <div className="flex special-screen:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button type="button" className="outline-none border-none p-0 bg-transparent">
                <img src={menu.src || menu} alt="menu" className="w-7 h-7 object-contain" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#050816] border-none flex items-center justify-center">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <ul className="list-none flex flex-col gap-10">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <RoughNotation type="box" show={link.title === "Packages"} color="yellow">
                      <a
                        href={`#${link.id}`}
                        className={`${active === `#${link.id}` ? "text-white" : "text-secondary"} text-[22px] font-medium`}
                        onClick={() => setActive(`#${link.id}`)}
                      >
                        {link.title}
                      </a>
                    </RoughNotation>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;