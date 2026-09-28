import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";

export default function Navbar() {
  return (
    <Card className="px-2 py-4 flex flex-row justify-between sticky top-0 min-w-full z-100">
      <div className="flex items-center gap-4">
        <Card className="bg-[#B5563B] text-white w-fit p-2">IO</Card>
        <div>
          <Label className="text-xl">Ian Ongkoyoyo</Label>
          <p className="text-black/60">Fullstack developer</p>
        </div>
        <Badge className="text-xl ml-4 text-white bg-[#0d7947]">Available for hire</Badge>
      </div>
      <div>
        <a href="#aboutMe">
        <Button>About Me</Button>
        </a>
        <a href="#project">
        <Button>Project</Button>
        </a>
        <a href="#techStack">
        <Button>Tech Stack</Button>
        </a>
        <a href="#testimonial">
        <Button>Testimonial</Button>
        </a>
      </div>
      <div>
        <a href="#contact">
        <Button>Get in touch</Button>
        </a>
      </div>
    </Card>
  );
}
