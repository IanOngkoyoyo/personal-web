import { Card, CardContent, CardTitle } from './components/ui/card';
import {
  FaGitAlt,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaPython,
  FaReact,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { Badge } from './components/ui/badge';
import Navbar from './components/custom/Navbar';
import { Label } from './components/ui/label';
import { Button } from './components/ui/button';
import Separator from './components/custom/Separator';
import { CiClock2, CiMail } from 'react-icons/ci';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { useState } from 'react';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { GiPositionMarker } from 'react-icons/gi';

const App = () => {
  const [inputFullname, setInputFullname] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  return (
    <div>
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: '#F5F2E7',
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 12px)',
        }}
      />
      <Navbar />
      <div className="p-4 md:p-8 flex flex-col gap-4 relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="w-full md:w-1/2 h-fit">
            <Badge className="bg-[#B5563B] text-white max-w-full whitespace-normal">
              <GiPositionMarker />
              Tangerang, indonesia | Remote ready
            </Badge>
            <div className="flex gap-4 items-center">
              <Card>Foto</Card>
              <div>
                <p>Hi, im</p>
                <Label className="text-xl">Ian Ongkoyoyo</Label>
                <p>Fullstack web developer</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-[#B5563B] text-white grid gap-2">
                <Label className="text-xl">Front-end</Label>
                <p>
                  builds the visual interface users directly see and interact.
                </p>
              </Card>
              <Card className="p-4 bg-[#B5563B] text-white grid gap-2">
                <Label className="text-xl">Back-end</Label>
                <p>
                  manages server logic, databases, and application data
                  processing.
                </p>
              </Card>
            </div>
            <Separator />
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-4 gap-2">
                <a href="https://www.instagram.com/ianongkoyoyo/">
                  <Button className="w-full">
                    <FaInstagram />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/ian-ongkoyoyo-0aba4629a/">
                  <Button className="w-full">
                    <FaLinkedin />
                  </Button>
                </a>
                <a href="">
                  <Button className="w-full">
                    <FaTwitter />
                  </Button>
                </a>
                <a href="">
                  <Button className="w-full">
                    <FaWhatsapp />
                  </Button>
                </a>
              </div>
              <Button>Contact Me</Button>
            </div>
          </Card>

          <Card
            id="aboutMe"
            className="bg-white w-full h-fit p-6 md:p-15"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
              <Label className="text-2xl">About Me . . .</Label>
              <Label>FILE: IAN ONGKOYOYO</Label>
            </div>
            <Separator />
            <h2 className="text-3xl md:text-4xl mt-6 md:mt-10">
              HALO !! I'm Ian Ongkoyoyo
            </h2>
            <p className="mt-4">
              A Fullstack Web Developer who enjoys building web applications end
              to end — from designing interfaces that are comfortable to use, to
              the underlying system logic that runs smoothly.
            </p>
            <p>
              My journey in web development started seriously after joining the
              Full Stack Web Development program at Purwadhika Digital
              Technology School, where I gained a strong foundation in industry
              practices, team workflows, and professional coding standards. From
              there, I continued honing my skills through real-world projects to
              understand how a digital product is built from end to end.
            </p>
            <p>
              On the Front-end side, I'm experienced in translating designs
              (pixel to UI) into responsive and interactive interfaces using
              HTML, CSS, JavaScript, and modern frameworks like React. I also
              understand how to manage state, components, and API integration to
              keep the interface lightweight yet functional.
            </p>
            <p>
              On the Back-end side, I focus on writing clean, modular, and
              maintainable code (clean & modular TypeScript), designing REST
              APIs, managing databases, as well as authentication and
              application security. I believe that a well-organized architecture
              behind the scenes is the key to a scalable application that's easy
              to develop in the long run.
            </p>
            <p className="mb-6 md:mb-15">
              I'm open to collaboration, freelance projects, as well as
              full-time job opportunities as a Fullstack Developer. Feel free to
              reach out to me via the Contact Me button beside this!
            </p>
          </Card>
        </div>

        <Card id="project">
          <CardTitle>My Project</CardTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8">
            <Card className="m-8">
              <CardTitle className="text-2xl font-bold">RuangBaca</CardTitle>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat repellendus nobis voluptas expedita suscipit deserunt
                optio non excepturi pariatur facilis cupiditate, dicta ea soluta
                earum explicabo architecto illum. Laudantium, qui asperiores
                ipsa odit, eos odio, voluptates nam dolores corrupti incidunt
                ullam accusantium iusto. Ad, explicabo quasi. Culpa facilis
                possimus praesentium.
              </p>
            </Card>
            <Card className="m-8">
              <CardTitle className="text-2xl font-bold">Project 02</CardTitle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                qui ipsam provident ipsum veniam asperiores, debitis, suscipit
                earum culpa voluptatum excepturi ex necessitatibus unde
                laboriosam quisquam? Fugiat adipisci totam vel nam, laudantium
                vero eos doloremque quae earum obcaecati debitis modi, provident
                non repudiandae ex consequatur. Quod sapiente repudiandae
                recusandae exercitationem!
              </p>
            </Card>
            <Card className="m-8">
              <CardTitle className="text-2xl font-bold">Project 03</CardTitle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                architecto quos harum consectetur facere perferendis ducimus
                nemo odit necessitatibus distinctio. Ex obcaecati exercitationem
                sed consequatur nobis atque perferendis nesciunt. Aperiam quos
                facilis ut facere ab! Suscipit id mollitia eveniet, iusto
                asperiores, omnis dolorum nisi consequuntur dolor nobis, sed in
                iste.
              </p>
            </Card>
          </div>
        </Card>

        <Card
          id="techStack"
          className="grid gap-1 my-4 md:my-8"
        >
          <Badge className="text-xl">Competencies</Badge>
          <h1 className="text-2xl md:text-3xl">Tools And Tech</h1>
          <p className="text-md font-light">
            here are the tool i use daily to architech and build a high
            performance web application
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-0 md:mx-7 my-6 md:my-10 md:mt-17">
            <Card className="p-4">
              <Card className="p-3 w-fit bg-white">
                <FaReact className="text-4xl" />
              </Card>
              <h2>React</h2>
              <p>FrontEnd Library & Component Architecture</p>
            </Card>
            <Card className="p-4">
              <Card className="p-3 w-fit bg-white">
                <FaPython className="text-4xl" />
              </Card>
              <h2>Python</h2>
              <p>High Level Programming Language</p>
            </Card>
            <Card className="p-4">
              <Card className="p-3 w-fit bg-white">
                <SiTypescript className="text-4xl" />
              </Card>
              <h2>TypeScript</h2>
              <p>Type Safe Architecture & Interfaces</p>
            </Card>
            <Card className="p-4">
              <Card className="p-3 w-fit bg-white">
                <SiMysql className="text-4xl" />
              </Card>
              <h2>MySQL</h2>
              <p>Store, Organize, And Manage Digital Information</p>
            </Card>
            <Card className="p-4">
              <Card className="p-3 w-fit bg-white">
                <FaGitAlt className="text-4xl" />
              </Card>
              <h2>Git</h2>
              <p>Open Source Distributed Version Control System</p>
            </Card>
            <Card className="p-4">
              <Card className="p-3 w-fit bg-white">
                <FaJs className="text-4xl" />
              </Card>
              <h2>JavaScript</h2>
              <p>Interactive Programming Language</p>
            </Card>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card id="testimonial">
            <CardContent className="text-2xl md:text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Card className="bg-[#5e4a44] text-white text-base md:text-lg">
              "Salah satu student paling proaktif yang pernah saya bimbing.
              Selalu mencari cara untuk memahami root cause masalah, bukan
              sekadar copy-paste solusi dari internet."
            </Card>
            <Badge className="text-md font-bold max-w-full whitespace-normal">
              — Defryan, Senior Developer
            </Badge>
          </Card>
          <Card>
            <CardContent className="text-2xl md:text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Card className="bg-[#5e4a44] text-white text-base md:text-lg">
              "Kolaborasi lewat GitHub jadi lebih mudah karena commit message
              dan dokumentasinya jelas. Responsif juga saat ada bug yang perlu
              diperbaiki cepat."
            </Card>
            <Badge className="text-md font-bold max-w-full whitespace-normal">
              - Jovin, FullStack Developer
            </Badge>
          </Card>
          <Card>
            <CardContent className="text-2xl md:text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Card className="bg-[#5e4a44] text-white text-base md:text-lg">
              "Saya pernah satu tim proyek dengan Ian selama 6 bulan. Dia jago
              di frontend maupun backend, dan selalu punya solusi kreatif ketika
              kami mentok di masalah teknis. Tipe developer yang bisa diandalkan
              untuk deadline ketat."
            </Card>
            <Badge className="text-md font-bold max-w-full whitespace-normal">
              — Vian, Project Manager
            </Badge>
          </Card>
          <Card>
            <CardContent className="text-2xl md:text-3xl font-semibold">
              Testimonial
            </CardContent>
            <Card className="bg-[#5e4a44] text-white text-base md:text-lg">
              "Awalnya saya cuma butuh landing page sederhana, tapi Ian memberi
              saran arsitektur yang bikin website saya jauh lebih scalable untuk
              kebutuhan ke depan. Responsif, cepat tanggap, dan hasilnya
              melebihi ekspektasi."
            </Card>
            <Badge className="text-md font-bold max-w-full whitespace-normal">
              — Glenn, Bussiness Owner
            </Badge>
          </Card>
        </div>

        <Card
          id="contact"
          className="bg-[#283044] flex flex-col md:flex-row md:justify-between gap-8 mt-8 md:mt-15"
        >
          <div className="w-full md:w-1/2 text-white grid gap-6 content-start">
            <Badge className="bg-[#B5563B] text-white max-h-9">
              Let's talk
            </Badge>
            <h2 className="text-white text-2xl md:text-4xl">
              Siap Mewujudkan Proyek Anda?
            </h2>
            <div className="grid gap-2">
              <div className="flex gap-2 items-center">
                <Card className="bg-[#B5563B] text-white w-fit p-2">
                  <CiMail />
                </Card>
                <p className="break-all">ian.dirga23@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <Card className="bg-[#B5563B] text-white w-fit p-2">
                  <CiClock2 />
                </Card>
                <p>Response time: less than 24 hours</p>
              </div>
            </div>
          </div>
          <form
            action="mailto:ian.dirga23@gmail.com"
            method="post"
            className="w-full"
          >
            <Card className="bg-white">
              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="w-full sm:w-auto"
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
