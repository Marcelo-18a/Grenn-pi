import { Button } from "@/components/ui/button"
import { Leaf, Github, Linkedin, Twitter, ExternalLink, Instagram } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EquipePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Green Leaf</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost">Início</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">Sobre</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/register">
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossa Equipe</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Conheça os talentosos profissionais por trás do projeto Green Leaf
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/*Marcelo Augusto */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="https://avatars.githubusercontent.com/u/181166926?v=4"
                        alt="Foto do Marcelo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Marcelo Augusto</CardTitle>
                      <CardDescription className="text-lg">Developer, Design</CardDescription>
                      <div className="flex gap-2 mt-2">
                        <a
                          href="https://github.com/Marcelo-18a"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub do Marcelo"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/marcelo-augusto-1095542a9/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn do Marcelo"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </a>
                        <a
                          href="https://www.instagram.com/sla_marcello?igsh=MXNpanVuN3FycTJuYw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram do Marcelo"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Instagram className="h-4 w-4" />
                          </Button>
                        </a>
                      
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="sobre">
                    <TabsList className="grid w-full grid-cols-1">
                      <TabsTrigger value="sobre">Sobre</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sobre" className="pt-4">
                      <p className="text-muted-foreground">
                        Develop, 19 anos, Sou estudante de Desenvolvimento de Sistemas, com foco em desenvolvimento web full stack. Busco aprimorar minhas habilidades em Node.js, Express e React, criando soluções práticas e bem estruturadas.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>Python</Badge>
                        <Badge>React</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>Express</Badge>
                        <Badge>JavaScript</Badge>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Yago */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="https://avatars.githubusercontent.com/u/145205598?v=4"
                        alt="Foto do Yago"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Yago Kurashiki</CardTitle>
                      <CardDescription className="text-lg">Developer</CardDescription>
                      <div className="flex gap-2 mt-2">
                        <a
                          href="https://github.com/Yajoojj"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub do Yago"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/yagokurashiki"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn do Yago"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </a>
                        <a
                          href="https://www.instagram.com/yagokurashiki?igsh=YTJrZTk3bjAzMDNw"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram do Yago"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Instagram className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="sobre">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="sobre">Sobre</TabsTrigger>
                      <TabsTrigger value="projetos">Projetos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sobre" className="pt-4">
                      <p className="text-muted-foreground">
                        Develop, 19 anos, Estudante de Desenvolvimento de Sistemas na FATEC, com foco em desenvolvimento full-stack. Atua na área de TI e busca aprimorar habilidades em Java Spring Boot e React, integrando tecnologias backend e frontend para criar soluções web eficientes e funcionais.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>React</Badge>
                        <Badge>PHP</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>Node.js</Badge>
                      </div>
                    </TabsContent>
                    <TabsContent value="projetos" className="pt-4">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Rubik</AccordionTrigger>
                          <AccordionContent>
                            Projeto acadêmico focado em Inteligencia Artificial
                            Interface web da equipe
                            Stack: Figma + HTML/CSS básico
                            <div className="mt-2">
                              <a href="https://yajoojj.github.io/Rubik-Team/" className="text-sm text-primary flex items-center gap-1">
                                Ver mais <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Kadu */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="https://avatars.githubusercontent.com/u/178843004?v=4"
                        alt="Foto do Kadu"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Carlos Eduardo</CardTitle>
                      <CardDescription className="text-lg">Developer Back-End</CardDescription>
                      <div className="flex gap-2 mt-2">
                        <a
                          href="https://github.com/carlostakeshita"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub do Karlos"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="sobre">
                    <TabsList className="grid w-full grid-cols-1">
                      <TabsTrigger value="sobre">Sobre</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sobre" className="pt-4">
                      <p className="text-muted-foreground">
                        Developer Back-End, 19 anos, um entusiasta do desenvolvimento de software focado no back-end. Atualmente, estou aprofundando meus conhecimentos na stack MERN (MongoDB, Express, React e Node.js) para criar aplicações web robustas e escaláveis.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>JavaScript</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>Next.js</Badge>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Sthevens */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="https://avatars.githubusercontent.com/u/128431254?v=4"
                        alt="Foto do sthevens"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Sthevens Konesuk</CardTitle>
                      <CardDescription className="text-lg">Developer Back-End</CardDescription>
                      <div className="flex gap-2 mt-2">
                        <a
                          href="https://github.com/sthevensmk"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub do Sthevens"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="sobre">
                    <TabsList className="grid w-full grid-cols-1">
                      <TabsTrigger value="sobre">Sobre</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sobre" className="pt-4">
                      <p className="text-muted-foreground">
                        Develop Back-End, 20 anos, com experiência na segurança, infraestrutura, administração
                        das redes, configuração de servidores e monitoramento de servidores.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge>Segurança</Badge>
                        <Badge>Redes</Badge>
                        <Badge>Servidores</Badge>
                        <Badge>Cloud</Badge>
                        <Badge>Docker</Badge>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="pt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Junte-se ao Nosso Time</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Estamos sempre em busca de talentos apaixonados por tecnologia e sustentabilidade. Se você está
                interessado em fazer parte da nossa missão, entre em contato conosco.
              </p>
              <Link href="/contact">
                <Button size="lg">Entre em Contato</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
