"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/layout/header"
import { MapPin, Briefcase, Search, Gift, Cake, Phone, Mail } from "lucide-react"

const aniversariantes = [
  {
    id: 1,
    nome: "KEITY SOARES DE RESENDE",
    cargo: "COORDENADORA MARKETING",
    filial: "Uberaba - MG",
    area: "Marketing",
    dataAniversario: "2024-11-15",
    idade: 32,
    telefone: "(34) 99876-5432",
    email: "keity.resende@hortsoy.com.br",
    tempoEmpresa: "3 anos",
    avatar: "/placeholder.svg?height=80&width=80&text=KS",
    status: "hoje",
  },
  {
    id: 2,
    nome: "THAIS VITORIA DA SILVA",
    cargo: "GERENTE FINANCEIRO",
    filial: "Patrocínio - MG",
    area: "Financeiro",
    dataAniversario: "2024-11-16",
    idade: 29,
    telefone: "(34) 99765-4321",
    email: "thais.silva@hortsoy.com.br",
    tempoEmpresa: "5 anos",
    avatar: "/placeholder.svg?height=80&width=80&text=TV",
    status: "amanha",
  },
  {
    id: 3,
    nome: "RODRIGO GONÇALVES SANTOS",
    cargo: "ANALISTA DE DADOS E PROJETOS",
    filial: "São Gotardo - MG",
    area: "Tecnologia",
    dataAniversario: "2024-11-18",
    idade: 27,
    telefone: "(34) 99654-3210",
    email: "rodrigo.santos@hortsoy.com.br",
    tempoEmpresa: "2 anos",
    avatar: "/placeholder.svg?height=80&width=80&text=RG",
    status: "proximo",
  },
  {
    id: 4,
    nome: "OTAVIO VILAS BOAS DIAS",
    cargo: "COORDENADOR DE ESTOQUE",
    filial: "Patos de Minas - MG",
    area: "Logística",
    dataAniversario: "2024-11-20",
    idade: 35,
    telefone: "(34) 99543-2109",
    email: "otavio.dias@hortsoy.com.br",
    tempoEmpresa: "7 anos",
    avatar: "/placeholder.svg?height=80&width=80&text=OV",
    status: "proximo",
  },
  {
    id: 5,
    nome: "PALOMA NATASHA RODRIGUES",
    cargo: "ANALISTA DE RH III",
    filial: "Araxá - MG",
    area: "Recursos Humanos",
    dataAniversario: "2024-11-22",
    idade: 31,
    telefone: "(34) 99432-1098",
    email: "paloma.rodrigues@hortsoy.com.br",
    tempoEmpresa: "4 anos",
    avatar: "/placeholder.svg?height=80&width=80&text=PN",
    status: "proximo",
  },
  {
    id: 6,
    nome: "STEFANIA MARTINS DIAS",
    cargo: "COORDENADORA ADMINISTRATIVA",
    filial: "Bambuí - MG",
    area: "Administrativo",
    dataAniversario: "2024-11-25",
    idade: 38,
    telefone: "(34) 99321-0987",
    email: "stefania.dias@hortsoy.com.br",
    tempoEmpresa: "6 anos",
    avatar: "/placeholder.svg?height=80&width=80&text=SM",
    status: "proximo",
  },
  {
    id: 7,
    nome: "MARIA DORES DE OLIVEIRA",
    cargo: "SERVIÇOS GERAIS",
    filial: "Coromandel - MG",
    area: "Operacional",
    dataAniversario: "2024-11-28",
    idade: 45,
    telefone: "(34) 99210-9876",
    email: "maria.oliveira@hortsoy.com.br",
    tempoEmpresa: "12 anos",
    avatar: "/placeholder.svg?height=80&width=80&text=MD",
    status: "proximo",
  },
  {
    id: 8,
    nome: "CAMILA SILVA MATOS",
    cargo: "CONSULTOR DE PERFORMANCE",
    filial: "Passos - MG",
    area: "Comercial",
    dataAniversario: "2024-11-30",
    idade: 26,
    telefone: "(34) 99109-8765",
    email: "camila.matos@hortsoy.com.br",
    tempoEmpresa: "1 ano",
    avatar: "/placeholder.svg?height=80&width=80&text=CM",
    status: "proximo",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "hoje":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    case "amanha":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
    default:
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "hoje":
      return "Hoje"
    case "amanha":
      return "Amanhã"
    default:
      return "Próximos dias"
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
  })
}

export default function AniversariantesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("Todas")
  const [selectedStatus, setSelectedStatus] = useState("Todos")

  const areas = [
    "Todas",
    "Marketing",
    "Financeiro",
    "Tecnologia",
    "Logística",
    "Recursos Humanos",
    "Administrativo",
    "Operacional",
    "Comercial",
  ]
  const statusOptions = ["Todos", "hoje", "amanha", "proximo"]

  const filteredAniversariantes = aniversariantes.filter((person) => {
    const matchesSearch =
      person.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.filial.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArea = selectedArea === "Todas" || person.area === selectedArea
    const matchesStatus = selectedStatus === "Todos" || person.status === selectedStatus

    return matchesSearch && matchesArea && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
              <Cake className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Aniversariantes</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Celebre com nossos colaboradores em seus dias especiais
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <Input
                type="text"
                placeholder="Buscar por nome, cargo ou filial..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
              >
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm"
              >
                <option value="Todos">Todos os períodos</option>
                <option value="hoje">Hoje</option>
                <option value="amanha">Amanhã</option>
                <option value="proximo">Próximos dias</option>
              </select>
            </div>
          </div>
        </div>

        {/* Birthday Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAniversariantes.map((person) => (
            <Card
              key={person.id}
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header with status badge */}
                <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-white">
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(person.status)}`}>
                    {getStatusText(person.status)}
                  </Badge>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 border-4 border-white/20">
                      <AvatarImage src={person.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-white/20 text-white text-lg font-bold">
                        {person.nome
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg leading-tight">{person.nome}</h3>
                      <p className="text-white/90 text-sm">{person.cargo}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Birthday Info */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Cake className="h-5 w-5 text-pink-500" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {formatDate(person.dataAniversario)}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{person.idade} anos</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{person.tempoEmpresa}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">na empresa</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{person.filial}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{person.area}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{person.telefone}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{person.email}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0">
                    <Gift className="h-4 w-4 mr-2" />
                    Enviar Parabéns
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredAniversariantes.length === 0 && (
          <div className="text-center py-12">
            <Cake className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Nenhum aniversariante encontrado</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tente ajustar os filtros para encontrar outros aniversariantes.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
