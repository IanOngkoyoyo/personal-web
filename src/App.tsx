import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import Navbar from './components/ui/custom/Navbar';
import { Button } from './components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';
import { FaInstagram, FaLinkedin, FaReact } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Bubble, BubbleContent } from './components/ui/bubble';
import { Badge } from './components/ui/badge';

const App = () => {
  return (
    <div>
      <Navbar />
      <Card className="relative h-170 p-15 m-7">
        <CardHeader className="grid grid-cols-2">
          <div className="h-100">
            <CardTitle className="text-4xl font-bold">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-black">
                <img
                  className="w-full h-full object-cover object-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPldYWzlkVOvu9nezyhwn4dKNQMjms-yFRy6K7RIkgWg&s=10"
                />
              </div>
              <div className="h-70 absolute left-3 bottom-0 items-end mr-20">
                <Button>
                  {' '}
                  <FaInstagram />{' '}
                </Button>
                <Button>
                  {' '}
                  <FaLinkedin />{' '}
                </Button>
                <Button>
                  {' '}
                  <FaXTwitter />{' '}
                </Button>
                <Button>Contact Me </Button>
              </div>
            </CardTitle>
          </div>
          <CardDescription>
            <div className="flex">
              <p>Hi I'm</p>
              <h1 className="ml-4 text-3xl font-mono ">Ian Ongkoyoyo</h1>
            </div>
            <p className="mt-5 text-2xl font-semibold">
              Full Stack Software Developer
            </p>
            <div>
              <h1 className="text-3xl mt-15">About Me</h1>
              <p className="text-gray-600 leading-relaxed mb-4">
                Halo, saya seorang Fullstack Web Developer yang senang membangun
                aplikasi web dari ujung ke ujung — mulai dari merancang struktur
                database, membangun REST API, hingga menyusun antarmuka pengguna
                yang bersih dan mudah digunakan. Saya terbiasa bekerja dengan
                stack seperti React, TypeScript, Node.js, dan Tailwind CSS,
                serta memiliki pengalaman mengintegrasikan aplikasi dengan
                layanan backend seperti Backendless dan berbagai REST API. Saya
                percaya kode yang baik bukan hanya soal fungsi yang berjalan,
                tapi juga soal keterbacaan, skalabilitas, dan pengalaman
                pengguna yang optimal. Di luar coding, saya senang
                mengeksplorasi tools dan framework baru, serta terus mengasah
                kemampuan problem-solving lewat proyek-proyek personal.
              </p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <div>
        <Card className="p-15 m-7">
          <CardTitle>My Project</CardTitle>
          <p>Some project i've worked in</p>
          <div className="w-full flex-col items-center gap-4 flex">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="p-0 shadow-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-heading">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Card>
      </div>
      <div className='m-7'>
      <Card className='p-15 grid gap-1'>
        <Badge className='text-xl'>Competencies</Badge>
        <h1 className='text-3xl'>
          Tools And Tech
        </h1>
        <p className='text-md font-light'>
          here are the tool i use daily to architech and build a high performance web application
        </p>
        <div className='grid grid-cols-3 gap-4'>
          <Card className='p-4'>
            <Card className='w-fit bg-amber-50'>
            <FaReact className='text-5xl'/>
            </Card>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </Card>
      </div>
      <div className="grid grid-cols-2">
        <Card className="p-15 m-7 max-w-120">
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
        <Card className="p-15 m-7 max-w-120">
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
        <Card className="p-15 m-7 max-w-120">
          <CardContent className="text-3xl font-semibold">
            Testimonial
          </CardContent>
          <Bubble>
            <BubbleContent>
              "Saya pernah satu tim proyek dengan Ian selama 6 bulan. Dia jago
              di frontend maupun backend, dan selalu punya solusi kreatif ketika
              kami mentok di masalah teknis. Tipe developer yang bisa diandalkan
              untuk deadline ketat."
            </BubbleContent>
          </Bubble>
          <p className="flex justify-end"> — Vian, Project Manager</p>
        </Card>
        <Card className="p-15 m-7 max-w-120">
          <CardContent className="text-3xl font-semibold">
            Testimonial
          </CardContent>
          <Bubble>
            <BubbleContent>
              "Awalnya saya cuma butuh landing page sederhana, tapi Ian memberi
              saran arsitektur yang bikin website saya jauh lebih scalable untuk
              kebutuhan ke depan. Responsif, cepat tanggap, dan hasilnya
              melebihi ekspektasi."
            </BubbleContent>
          </Bubble>
          <p className="flex justify-end"> — Glenn, Bussiness Owner</p>
        </Card>
      </div>
    </div>
  );
};

export default App;
