import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Mail, Phone, MapPin, Filter, Users, Building2 } from "lucide-react"
import Link from "next/link"

export default function DirectoryPage() {
  const employees = [
    {
      name: "Ana Silva",
      position: "Gerente de RH",
      department: "Recursos Humanos",
      email: "ana.silva@hortsoy.com",
      phone: "(11) 99999-1234",
      location: "São Paulo - SP",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Carlos Santos",
      position: "Desenvolvedor Senior",
      department: "Tecnologia",
      email: "carlos.santos@hortsoy.com",
      phone: "(11) 99999-5678",
      location: "São Paulo - SP",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Maria Costa",
      position: "Analista Financeira",
      department: "Financeiro",
      email: "maria.costa@hortsoy.com",
      phone: "(11) 99999-9012",
      location: "Rio de Janeiro - RJ",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Pedro Lima",
      position: "Designer UX/UI",
      department: "Tecnologia",
      email: "pedro.lima@hortsoy.com",
      phone: "(11) 99999-3456",
      location: "São Paulo - SP",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Julia Oliveira",
      position: "Coordenadora de Marketing",
      department: "Marketing",
      email: "julia.oliveira@hortsoy.com",
      phone: "(11) 99999-7890",
      location: "Belo Horizonte - MG",
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Roberto Ferreira",
      position: "Analista de Segurança",
      department: "TI",
      email: "roberto.ferreira@hortsoy.com",
      phone: "(11) 99999-2468",
      location: "São Paulo - SP",
      avatar: "/placeholder-user.jpg",
    },
  ]

  const departments = ["Todos", "Tecnologia", "Recursos Humanos", "Financeiro", "Marketing", "TI"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Diretório de Funcionários</h1>
              <p className="text-gray-600 mt-1">Encontre e conecte-se com colegas de trabalho</p>
            </div>
            <Link href="/">
              <Button variant="outline">Voltar ao Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Buscar por nome, cargo ou departamento..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Department Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {departments.map((dept) => (
                <Badge
                  key={dept}
                  variant={dept === "Todos" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-blue-100"
                >
                  {dept}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">247</p>
                  <p className="text-gray-600">Total de Funcionários</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-gray-600">Departamentos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MapPin className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-gray-600">Localizações</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Employee Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg">
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{employee.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{employee.position}</p>
                    <Badge variant="outline" className="mt-1">
                      {employee.department}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{employee.location}</span>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Phone className="h-3 w-3 mr-1" />
                    Ligar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Department Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Visão Geral dos Departamentos</CardTitle>
            <CardDescription>Distribuição de funcionários por departamento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Tecnologia", count: 45, color: "bg-blue-100 text-blue-800" },
                { name: "RH", count: 12, color: "bg-green-100 text-green-800" },
                { name: "Financeiro", count: 28, color: "bg-yellow-100 text-yellow-800" },
                { name: "Marketing", count: 22, color: "bg-purple-100 text-purple-800" },
                { name: "Vendas", count: 67, color: "bg-red-100 text-red-800" },
                { name: "Operações", count: 73, color: "bg-indigo-100 text-indigo-800" },
              ].map((dept) => (
                <div key={dept.name} className="text-center p-4 rounded-lg border">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${dept.color} mb-2`}
                  >
                    {dept.count}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{dept.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
