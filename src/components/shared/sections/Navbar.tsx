import { navLinks } from "@/constants/index.ts";
import { styles } from "@/lib/utils";
import {
  logo,
  menu,
  close,
  share,
  linkdln,
  watsapp,
  telegram,
} from "@/assets";
// Image replaced;
// Link replaced;
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/popover";

const Navbar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex special-screen:justify-between items-center max-w-7xl mx-auto">
        <a
          href={"/"}
          className="flex items-center gap-2 flex-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <span className="text-white text-[18px] font-bold cursor-pointer flex">
            Saadeh
          </span>
        </a>
        <ul className="list-none hidden special-screen:flex flex-row gap-10">
          {navLinks.map((link) => (
            <RoughNotation
              key={link.id}
              type="box"
              show={link.title === "Packages" ? true : false}
              color="yellow"
              strokeWidth={1}
              animationDuration={800}
            >
              <li
                className={`${
                  active === `#${link.id}` ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(`#${link.id}`)}
                >
                  {link.title}
                </a>
              </li>
            </RoughNotation>
          ))}
        </ul>

        <Popover>
          <PopoverTrigger className="mr-5 special-screen:mr-0 special-screen:ml-5">
            <img src={share} alt="share" loading="lazy" />
          </PopoverTrigger>
          <PopoverContent
            asChild
            className="p-0 w-60 h-52 bg-[#1F2937] border-none rounded-xl"
          >
            <div className="flex flex-col">
              <p className="bg-[#374151] text-sm rounded-t-xl grid place-items-center py-3 font-semibold text-white">
                Share!
              </p>
              <div className="p-8 flex items-center gap-1 flex-wrap">
                <a
                  className="border-white hover:border rounded-xl border-solid"
                  target="_blank"
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://saadeh-portfolio.onrender.com/`}
                >
                  <img
                    loading="lazy"
                    src={linkdln}
                    alt="linkdln share"
                    className="w-12 h-12 cursor-pointer"
                  />
                </a>

                <a
                  className="border-white hover:border rounded-xl border-solid"
                  href={`https://api.whatsapp.com/send?text=https://saadeh-portfolio.onrender.com/`}
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src={watsapp}
                    alt="whatsapp share"
                    className="w-12 h-12 cursor-pointer"
                  />
                </a>
                <a
                  className="border-white hover:border rounded-xl border-solid"
                  href={`https://telegram.me/share/url?url=https://saadeh-portfolio.onrender.com/`}
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src={telegram}
                    alt="telegram share"
                    className="w-12 h-12 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex special-screen:hidden items-center">
          <Sheet>
            <SheetTrigger>
              <img src={menu} alt="menu" loading="lazy" />
            </SheetTrigger>
            <SheetContent className="bg-[#050816] flex items-center justify-center">
              <SheetTitle className="hidden">SideBar Menu</SheetTitle>
              <SheetHeader>
                <SheetDescription asChild>
                  <ul className="list-none flex flex-col gap-10">
                    {navLinks.map((link) => (
                      <RoughNotation
                        key={link.id}
                        type="box"
                        show={link.title === "Packages" ? true : false}
                        color="yellow"
                        strokeWidth={1}
                        animationDuration={800}
                      >
                        <li
                          key={link.id}
                          className={`${
                            active === `#${link.id}`
                              ? "text-white"
                              : "text-secondary"
                          } hover:text-white text-[18px] font-medium cursor-pointer`}
                        >
                          <a
                            href={`#${link.id}`}
                            onClick={() => setActive(`#${link.id}`)}
                          >
                            {link.title}
                          </a>
                        </li>
                      </RoughNotation>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
