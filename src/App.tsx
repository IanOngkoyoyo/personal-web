import { Card, CardContent, CardTitle } from "./components/ui/card";
import { FaReact } from "react-icons/fa";
import { Bubble, BubbleContent } from "./components/ui/bubble";
import { Badge } from "./components/ui/badge";
import Navbar from "./components/custom/Navbar";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import Separator from "./components/custom/Separator";
import { CiClock2, CiMail } from "react-icons/ci";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { useState } from "react";

const App = () => {
  const [inputFullname, setInputFullname] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");

  return (
    <div>
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: '#F5F2E7',
          backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 12px)",
        }}
      />
        <Navbar />
      <div className="p-8 flex flex-col gap-4 relative z-10 mx-auto">
        <div className="flex gap-4">
          <Card className="w-1/2 h-fit">
            <Badge>Tangerang, indonesia | Remote ready</Badge>
            <div className="flex gap-4 items-center">
              <Card>nanti gambar disini</Card>
              <div>
                <p>Hi, im</p>
                <Label>Ian Ongkoyoyo</Label>
                <p>Fullstack web developer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-white grid gap-2">
                <Label>Front-end</Label>
                <p>Database, pixel to ui execution </p>
              </Card>
              <Card className="p-4 bg-white grid gap-2">
                <Label>Back-end</Label>
                <p>Cleanup Typescript & modular</p>
              </Card>
            </div>
            <Separator />
            <div className="flex justify-between">
              <div>
                <Button>About Me</Button>
                <Button>Project</Button>
                <Button>Tech Stack</Button>
                <Button>Testimonial</Button>
              </div>
              <Button>Contact Me</Button>
            </div>
          </Card>
          <Card className="bg-white w-full h-fit">
            <div className="flex justify-between">
              <Label>About Me</Label>
              <Label>FILE: Ian</Label>
            </div>
            <Separator />
            <h2 className="text-4xl">
              Membangun web skalabel dari ujung ke ujung.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              ipsa accusantium vero? Ducimus temporibus nihil inventore odio,
              iure laborum perferendis, ratione aspernatur adipisci reiciendis
              tenetur odit non harum illo ea quo, libero animi placeat delectus
              eum. Repellendus officia itaque similique. Id ea voluptate
              consequatur quidem, voluptatibus natus fugiat in tenetur ipsum
              asperiores fuga sit numquam vel beatae nisi dolor. Tempore,
              maxime, expedita animi exercitationem earum fuga dolore porro qui
              reiciendis impedit, dolorum laboriosam illo recusandae nobis nam
              excepturi tempora perferendis amet adipisci! Dicta est excepturi
              aut cumque fuga earum consectetur molestiae unde, fugiat suscipit,
              eveniet fugit ea ipsum accusantium temporibus ex commodi explicabo
              sit porro dolores laudantium alias vitae velit perferendis?
              Obcaecati ea nisi neque vel, iste accusantium. Veniam
              necessitatibus est sed minus. Nulla quod sint perferendis error
              officia, voluptates vero fuga cum at ea neque incidunt mollitia
              nisi iusto ratione non natus aliquid vitae nostrum! Explicabo
              molestias cupiditate vitae modi, eveniet culpa expedita possimus
              quas nobis numquam deleniti sunt necessitatibus harum impedit
              consequatur iste accusamus earum reiciendis excepturi. Soluta
              neque nam eius eligendi modi sed libero, eum a impedit harum vero,
              deleniti, magni accusamus officia voluptas repudiandae optio
              laudantium ea nobis atque repellat adipisci doloribus? Voluptate
              similique iste nobis, sequi ex deleniti perferendis nisi fugit
              atque possimus soluta unde quod architecto quis explicabo odit
              totam labore velit voluptas ab reiciendis. Placeat esse ad numquam
              mollitia, fuga ex, quo qui officiis odit optio quaerat veritatis
              molestiae eligendi eum velit suscipit reiciendis nobis voluptas
              cupiditate dolorem. Accusamus cum id consequuntur quibusdam
              tempora neque, ratione fuga doloribus facere dignissimos, hic
              ducimus, nostrum odio? Hic soluta ab incidunt accusamus error
              perferendis vitae officia ex autem inventore doloribus, voluptas
              reiciendis in voluptate illum repudiandae eum numquam unde,
              dolore, sint vero asperiores veritatis facilis. Voluptatum
              inventore, voluptatem eligendi, architecto repudiandae quae modi
              nisi dolores quia eos, accusantium nulla labore sequi? Blanditiis
              eius, dicta obcaecati sapiente unde possimus assumenda.
              Perferendis, quis tenetur excepturi beatae repellendus
              consequatur, temporibus consequuntur laudantium eius est voluptas
              omnis aliquam porro. Facilis laborum quos laboriosam repellat id,
              laudantium, ex deserunt fugiat obcaecati aliquam, cum culpa
              tempore. Quaerat a, at suscipit dolorem nam delectus repellendus
              culpa officia temporibus! Sint voluptate minus sapiente. Explicabo
              repellendus laudantium esse, maxime harum doloribus inventore
              iusto accusantium odit dolores sunt nulla debitis voluptatum
              fugiat adipisci voluptatibus corrupti natus sapiente expedita
              excepturi ipsam illo blanditiis. Adipisci unde sed velit aliquid
              sapiente, ipsam asperiores, quasi optio vitae enim quo quisquam.
            </p>
          </Card>
        </div>

        <Card>
          <CardTitle>My Project</CardTitle>
          <p>Some project i've worked in</p>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card>
                <CardContent className="flex h-80 items-center justify-center">
                  <span className="text-3xl font-heading">{index + 1}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
        <Card className=" grid gap-1">
          <Badge className="text-xl">Competencies</Badge>
          <h1 className="text-3xl">Tools And Tech</h1>
          <p className="text-md font-light">
            here are the tool i use daily to architech and build a high
            performance web application
          </p>
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4">
              <Card className="p-3 w-fit bg-white">
                <FaReact className="text-4xl" />
              </Card>
            </Card>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Bubble>
              <BubbleContent>
                "Salah satu student paling proaktif yang pernah saya bimbing.
                Selalu mencari cara untuk memahami root cause masalah, bukan
                sekadar copy-paste solusi dari internet."
              </BubbleContent>
            </Bubble>
            <p className="flex justify-end"> — Defryan, Senior Developer</p>
          </Card>
          <Card>
            <CardContent className="text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Bubble>
              <BubbleContent>
                "Kolaborasi lewat GitHub jadi lebih mudah karena commit message
                dan dokumentasinya jelas. Responsif juga saat ada bug yang perlu
                diperbaiki cepat."
              </BubbleContent>
            </Bubble>
            <p className="flex justify-end"> - Jovin, FullStack Developer</p>
          </Card>
          <Card>
            <CardContent className="text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Bubble>
              <BubbleContent>
                "Saya pernah satu tim proyek dengan Ian selama 6 bulan. Dia jago
                di frontend maupun backend, dan selalu punya solusi kreatif
                ketika kami mentok di masalah teknis. Tipe developer yang bisa
                diandalkan untuk deadline ketat."
              </BubbleContent>
            </Bubble>
            <p className="flex justify-end"> — Vian, Project Manager</p>
          </Card>
          <Card>
            <CardContent className="text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Bubble>
              <BubbleContent>
                "Awalnya saya cuma butuh landing page sederhana, tapi Ian
                memberi saran arsitektur yang bikin website saya jauh lebih
                scalable untuk kebutuhan ke depan. Responsif, cepat tanggap, dan
                hasilnya melebihi ekspektasi."
              </BubbleContent>
            </Bubble>
            <p className="flex justify-end"> — Glenn, Bussiness Owner</p>
          </Card>
        </div>

        <Card className="bg-[#283044] flex flex-row justify-between">
          <div className="w-1/2 text-white grid gap-6">
            <Badge>Let's talk</Badge>
            <h2 className="text-white text-4xl">
              Siap Mewujudkan Proyek Anda?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              earum voluptatum. Accusantium placeat totam voluptatum in facere.
              Adipisci, doloremque odit!
            </p>
            <div className="grid gap-2">
              <div className="flex gap-2 items-center">
                <Card className="bg-blue-800 text-white w-fit p-2">
                  <CiMail />
                </Card>
                <p>example@example.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <Card className="bg-blue-800 text-white w-fit p-2">
                  <CiClock2 />
                </Card>
                <p>Response time: less than 24 hours guaranteed</p>
              </div>
            </div>
          </div>
          <form
            action="mailto:ian.dirga23@gmail.com"
            method="post"
            className="w-full"
          >
            <Card className="bg-white">
              <div className="flex gap-4">
                <div className="w-full">
                  <Label>Nama Lengkap</Label>
                  <Input
                    name="fullname"
                    value={inputFullname}
                    onChange={(value) => setInputFullname(value.target.value)}
                    placeholder="Input Nama Lengkap"
                  />
                </div>
                <div className="w-full">
                  <Label>Email</Label>
                  <Input
                    name="email"
                    value={inputEmail}
                    onChange={(value) => setInputEmail(value.target.value)}
                    type="email"
                    placeholder="Input Email"
                  />
                </div>
              </div>
              <div>
                <Label>Pesan / ide proyek</Label>
                <Textarea
                  name="description"
                  value={inputDescription}
                  onChange={(value) => setInputDescription(value.target.value)}
                  placeholder="Ceritakan kebutuhan aplikasi web anda disini"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  onClick={() => {
                    console.log({
                      fullname: inputFullname,
                      email: inputEmail,
                      description: inputDescription,
                    });
                  }}
                >
                  Kirim pesan
                </Button>
              </div>
            </Card>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default App;
