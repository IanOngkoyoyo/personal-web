import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";

const links = [
  { href: "#aboutMe", label: "About Me" },
  { href: "#project", label: "Project" },
  { href: "#techStack", label: "Tech Stack" },
  { href: "#testimonial", label: "Testimonial" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <Card className="px-2 py-4 sticky top-0 min-w-full z-100 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <Card className="bg-[#B5563B] text-white w-fit p-2">IO</Card>
          <div>
            <Label className="text-lg md:text-xl">Ian Ongkoyoyo</Label>
            <p className="text-black/60 text-sm md:text-base">
              Fullstack developer
            </p>
          </div>
          <Badge className="hidden xl:inline-flex text-xl ml-4 text-white bg-[#0d7947]">
            Available for hire
          </Badge>
        </div>

        <Button
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </Button>
      </div>

      <div
        id="nav-menu"
        className={`${open ? "flex" : "hidden"} flex-col gap-2 lg:flex lg:flex-row lg:items-center lg:gap-1`}
      >
        <Badge className="lg:hidden w-fit text-white bg-[#0d7947]">
          Available for hire
        </Badge>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            <Button className="w-full lg:w-auto">{link.label}</Button>
          </a>
        ))}
      </div>

      <div className={`${open ? "block" : "hidden"} lg:block`}>
        <a href="#contact" onClick={closeMenu}>
          <Button className="w-full lg:w-auto">Get in touch</Button>
        </a>
      </div>
    </Card>
  );
}
