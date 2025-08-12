"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Header } from "@/components/layout/header"
import { Bell, ExternalLink, Cake, Monitor, BarChart3, Mail, FileText, Building2, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [selectedBirthday, setSelectedBirthday] = useState(null)
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null)

  const announcements = [
    {
      title: "Nova Política de Segurança",
      description: "Implementação de novas diretrizes de segurança em todas as filiais",
      fullContent:
        "A partir de 1º de dezembro, todas as filiais deverão implementar as novas diretrizes de segurança estabelecidas pelo departamento corporativo. Isso inclui: uso obrigatório de EPIs em áreas específicas, treinamentos mensais de segurança, e inspeções semanais dos equipamentos. Cada gerente de filial receberá um manual detalhado com todas as instruções.",
      date: "2 dias atrás",
      priority: "high",
      author: "RH Corporativo",
    },
    {
      title: "Treinamento Obrigatório - NR12",
      description: "Agendamento para todas as filiais até o final do mês",
      fullContent:
        "Todos os colaboradores que operam máquinas e equipamentos devem participar do treinamento NR12 até 30 de novembro. O treinamento será realizado presencialmente em cada filial e terá duração de 8 horas. Certificados serão emitidos ao final. Contate o RH local para agendamento.",
      date: "3 dias atrás",
      priority: "medium",
      author: "Segurança do Trabalho",
    },
    {
      title: "Festa de Confraternização",
      description: "Save the date: 15 de dezembro - Sede Patos de Minas",
      fullContent:
        "Nossa tradicional festa de confraternização acontecerá no dia 15 de dezembro, às 19h, na sede de Patos de Minas. Haverá jantar, música ao vivo e premiações especiais. Cada colaborador pode levar um acompanhante. Confirme sua presença com o RH até 10 de dezembro.",
      date: "1 semana atrás",
      priority: "low",
      author: "Eventos Corporativos",
    },
  ]

  const birthdays = [
    {
      name: "Maria Silva",
      department: "RH",
      date: "Hoje",
      filial: "Patos de Minas",
      area: "Recursos Humanos",
      day: "20",
      month: "Novembro",
    },
    {
      name: "João Santos",
      department: "Vendas",
      date: "Amanhã",
      filial: "Araxá",
      area: "Comercial",
      day: "21",
      month: "Novembro",
    },
    {
      name: "Ana Costa",
      department: "Financeiro",
      date: "23/11",
      filial: "Uberaba",
      area: "Administrativo",
      day: "23",
      month: "Novembro",
    },
    {
      name: "Carlos Lima",
      department: "Operações",
      date: "25/11",
      filial: "Patrocínio",
      area: "Logística",
      day: "25",
      month: "Novembro",
    },
    {
      name: "Fernanda Costa",
      department: "Marketing",
      date: "27/11",
      filial: "Coromandel",
      area: "Comercial",
      day: "27",
      month: "Novembro",
    },
    {
      name: "Ricardo Oliveira",
      department: "TI",
      date: "29/11",
      filial: "São Gotardo",
      area: "Tecnologia",
      day: "29",
      month: "Novembro",
    },
    {
      name: "Juliana Santos",
      department: "Compras",
      date: "30/11",
      filial: "Bambuí",
      area: "Administrativo",
      day: "30",
      month: "Novembro",
    },
  ]

  const quickSystems = [
    { name: "SIAGRI", description: "Sistema de Gestão Agrícola", icon: Monitor, color: "bg-green-100 text-green-700" },
    { name: "Power BI", description: "Relatórios e Dashboards", icon: BarChart3, color: "bg-blue-100 text-blue-700" },
    { name: "PayTrack", description: "Gestão de Pagamentos", icon: FileText, color: "bg-purple-100 text-purple-700" },
    { name: "Outlook", description: "E-mail Corporativo", icon: Mail, color: "bg-orange-100 text-orange-700" },
  ]

  const handleFiliaisClick = () => {
    router.push("/filiais")
  }

  const handleSistemasClick = () => {
    router.push("/sistemas")
  }

  const handleBirthdayClick = (person) => {
    setSelectedBirthday(person)
  }

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Bem-vindo à HortSoy!</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Fique por dentro das novidades e acesse rapidamente nossos sistemas.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card
            className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-green-500 cursor-pointer hover:scale-105 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            onClick={handleFiliaisClick}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total de Filiais</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">16</p>
                  <p className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Todas Operacionais
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-purple-500 cursor-pointer hover:scale-105 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            onClick={handleSistemasClick}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Sistemas</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 flex items-center mt-1">
                    <Monitor className="h-3 w-3 mr-1" />
                    Disponíveis
                  </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Monitor className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-2">
            <Card className="h-fit bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-green-700 dark:text-green-400">Avisos Importantes</CardTitle>
                  <CardDescription className="dark:text-gray-300">Últimas comunicações corporativas</CardDescription>
                </div>
                <Bell className="h-5 w-5 text-green-600 dark:text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-100 dark:border-gray-600 cursor-pointer"
                      onClick={() => handleAnnouncementClick(announcement)}
                    >
                      <div className="flex-shrink-0">
                        <Badge
                          variant={
                            announcement.priority === "high"
                              ? "destructive"
                              : announcement.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                          className={
                            announcement.priority === "medium"
                              ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70"
                              : ""
                          }
                        >
                          {announcement.priority === "high"
                            ? "Urgente"
                            : announcement.priority === "medium"
                              ? "Importante"
                              : "Informativo"}
                        </Badge>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{announcement.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{announcement.description}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{announcement.author}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{announcement.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Birthdays */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                  <Cake className="h-5 w-5 mr-2" />
                  Aniversariantes
                </CardTitle>
                <CardDescription className="dark:text-gray-300">Colaboradores fazendo aniversário</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {birthdays.map((person, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                      onClick={() => handleBirthdayClick(person)}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                          {person.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {person.department} - {person.filial}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs border-gray-300 dark:border-gray-600 dark:text-gray-300"
                      >
                        {person.date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Systems Access */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                  <Monitor className="h-5 w-5 mr-2" />
                  Sistemas Principais
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Acesso rápido aos sistemas mais utilizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickSystems.map((system, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-green-50 dark:hover:bg-gray-700 hover:border-green-300 dark:hover:border-green-600 bg-transparent border-gray-300 dark:border-gray-600 transition-all duration-200"
                    >
                      <system.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      <span className="text-xs font-medium text-center text-gray-900 dark:text-white">
                        {system.name}
                      </span>
                    </Button>
                  ))}
                </div>
                <Button
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 transition-all duration-200 text-white"
                  onClick={handleSistemasClick}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Todos os Sistemas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Dialog open={!!selectedBirthday} onOpenChange={() => setSelectedBirthday(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center text-green-700">
                <Cake className="h-5 w-5 mr-2" />
                Aniversariante
              </DialogTitle>
            </DialogHeader>
            {selectedBirthday && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-lg">
                      {selectedBirthday.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedBirthday.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{selectedBirthday.area}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Filial:</span>
                    <p className="text-gray-600 dark:text-gray-300">{selectedBirthday.filial}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Aniversário:</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedBirthday.day} de {selectedBirthday.month}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center text-green-700">
                <Bell className="h-5 w-5 mr-2" />
                {selectedAnnouncement?.title}
              </DialogTitle>
              <DialogDescription>
                Por {selectedAnnouncement?.author} • {selectedAnnouncement?.date}
              </DialogDescription>
            </DialogHeader>
            {selectedAnnouncement && (
              <div className="space-y-4">
                <Badge
                  variant={
                    selectedAnnouncement.priority === "high"
                      ? "destructive"
                      : selectedAnnouncement.priority === "medium"
                        ? "default"
                        : "secondary"
                  }
                  className={
                    selectedAnnouncement.priority === "medium"
                      ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                      : ""
                  }
                >
                  {selectedAnnouncement.priority === "high"
                    ? "Urgente"
                    : selectedAnnouncement.priority === "medium"
                      ? "Importante"
                      : "Informativo"}
                </Badge>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedAnnouncement.fullContent}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
