import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";

export default function Navbar() {
  return (
    <Card className="px-2 py-4 flex flex-row justify-between relative z-10">
      <div className="flex items-center gap-4">
        <Card className="bg-blue-800 text-white w-fit p-2">IO</Card>
        <div>
          <Label className="text-xl">Ian Ongkoyoyo</Label>
          <p className="text-black/60">Fullstack developer</p>
        </div>
        <Badge className="text-xl ml-4">Available for hire</Badge>
      </div>
      <div>
        <Button>About Me</Button>
        <Button>Project</Button>
        <Button>Tech Stack</Button>
        <Button>Testimonial</Button>
        <Button>Contact</Button>
      </div>
      <div>
        <Button>Get in touch</Button>
      </div>
    </Card>
  );
}
