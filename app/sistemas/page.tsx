"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/layout/header"
import {
  ExternalLink,
  Monitor,
  BarChart3,
  CreditCard,
  Mail,
  Users,
  FileText,
  Linkedin,
  Globe,
  Search,
} from "lucide-react"

export default function SistemasPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const systems = [
    {
      name: "SIAGRI",
      description: "Sistema Integrado de Gestão Agrícola",
      icon: Monitor,
      url: "#",
      accessCount: 1247,
      color: "bg-emerald-500",
      textColor: "text-white",
      hoverColor: "hover:bg-emerald-600",
    },
    {
      name: "Power BI",
      description: "Business Intelligence e Relatórios",
      icon: BarChart3,
      url: "#",
      accessCount: 892,
      color: "bg-blue-500",
      textColor: "text-white",
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "Outlook",
      description: "E-mail Corporativo Microsoft",
      icon: Mail,
      url: "#",
      accessCount: 1247,
      color: "bg-orange-500",
      textColor: "text-white",
      hoverColor: "hover:bg-orange-600",
    },
    {
      name: "EPAYS Portal RH",
      description: "Portal de Recursos Humanos",
      icon: Users,
      url: "#",
      accessCount: 756,
      color: "bg-pink-500",
      textColor: "text-white",
      hoverColor: "hover:bg-pink-600",
    },
    {
      name: "SharePoint",
      description: "Colaboração e Documentos",
      icon: FileText,
      url: "#",
      accessCount: 634,
      color: "bg-indigo-500",
      textColor: "text-white",
      hoverColor: "hover:bg-indigo-600",
    },
    {
      name: "PayTrack",
      description: "Sistema de Gestão de Pagamentos",
      icon: CreditCard,
      url: "#",
      accessCount: 423,
      color: "bg-purple-500",
      textColor: "text-white",
      hoverColor: "hover:bg-purple-600",
    },
    {
      name: "LinkedIn HortSoy",
      description: "Perfil Corporativo no LinkedIn",
      icon: Linkedin,
      url: "#",
      accessCount: 298,
      color: "bg-sky-500",
      textColor: "text-white",
      hoverColor: "hover:bg-sky-600",
    },
    {
      name: "Site HortSoy",
      description: "Portal Institucional",
      icon: Globe,
      url: "https://hortsoy.com.br/",
      accessCount: 156,
      color: "bg-teal-500",
      textColor: "text-white",
      hoverColor: "hover:bg-teal-600",
    },
  ]

  const filteredSystems = systems
    .sort((a, b) => b.accessCount - a.accessCount)
    .filter(
      (system) =>
        system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        system.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sistemas HortSoy</h1>
          <p className="text-gray-600 dark:text-gray-300">Acesse todos os sistemas e ferramentas da empresa</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar sistemas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sistemas Mais Acessados</h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Ordenados por número de acessos • {filteredSystems.length} sistemas encontrados
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSystems.map((system, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden dark:bg-gray-800 dark:border-gray-700"
            >
              <div className={`${system.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <system.icon className={`h-8 w-8 ${system.textColor}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${system.textColor} opacity-90`}>
                      {system.accessCount.toLocaleString()}
                    </div>
                    <div className={`text-xs ${system.textColor} opacity-75`}>acessos</div>
                  </div>
                </div>

                <CardTitle className={`text-xl mb-2 ${system.textColor}`}>{system.name}</CardTitle>
                <CardDescription className={`${system.textColor} opacity-90 mb-4`}>
                  {system.description}
                </CardDescription>

                <Button
                  className={`w-full bg-white/20 ${system.textColor} hover:bg-white/30 border-0 backdrop-blur-sm transition-all duration-200`}
                  onClick={() => window.open(system.url, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Acessar Sistema
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-green-200 dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">Top 4 Sistemas</CardTitle>
            <CardDescription className="dark:text-gray-300">Acesso rápido aos sistemas mais utilizados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredSystems.slice(0, 4).map((system, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-20 flex flex-col items-center justify-center space-y-2 ${system.hoverColor} hover:text-white transition-all duration-200 border-2 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500`}
                  onClick={() => window.open(system.url, "_blank")}
                >
                  <system.icon className="h-6 w-6" />
                  <span className="text-xs font-medium text-center">{system.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
