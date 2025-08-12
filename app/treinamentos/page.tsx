"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { ExternalLink, Clock, Search } from "lucide-react"

export default function TreinamentosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeArea, setActiveArea] = useState("Todas")

  const treinamentos = [
    // Logística courses
    {
      nome: "Consulta de Estoque",
      descricao: "Treinamento para consulta e verificação de estoque no sistema",
      area: "Logística",
      obrigatorio: true,
      horas: 2,
      link: "https://onedrive.live.com/consulta-estoque",
    },
    {
      nome: "Transferência de Depósito",
      descricao: "Procedimentos para transferência de produtos entre depósitos",
      area: "Logística",
      obrigatorio: true,
      horas: 3,
      link: "https://onedrive.live.com/transferencia-deposito",
    },
    {
      nome: "Relatório de Contagem de Estoque",
      descricao: "Geração e análise de relatórios de contagem de estoque",
      area: "Logística",
      obrigatorio: true,
      horas: 2,
      link: "https://onedrive.live.com/relatorio-contagem",
    },

    // Administrativo courses
    {
      nome: "Consulta de Saldo Ctrl F8",
      descricao: "Utilização do atalho Ctrl+F8 para consulta rápida de saldos",
      area: "Administrativo",
      obrigatorio: true,
      horas: 1,
      link: "https://onedrive.live.com/consulta-saldo",
    },
    {
      nome: "Emissão de Notas de Transferências",
      descricao: "Procedimentos para emissão correta de notas de transferência entre filiais",
      area: "Administrativo",
      obrigatorio: true,
      horas: 3,
      link: "https://onedrive.live.com/emissao-notas",
    },
    {
      nome: "Entrada em Notas de Transferência",
      descricao: "Processo de entrada e validação de notas de transferência no sistema",
      area: "Administrativo",
      obrigatorio: true,
      horas: 2,
      link: "https://onedrive.live.com/entrada-notas",
    },

    // Comercial courses
    {
      nome: "Tabela de Preço",
      descricao: "Gestão e consulta de tabelas de preços no sistema",
      area: "Comercial",
      obrigatorio: true,
      horas: 2,
      link: "https://onedrive.live.com/tabela-preco",
    },
  ]

  const areas = ["Todas", "Logística", "Administrativo", "Comercial"]

  const getAreaColor = (area: string) => {
    switch (area) {
      case "Logística":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "Administrativo":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      case "Comercial":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const filteredTreinamentos = treinamentos.filter((treinamento) => {
    const matchesSearch =
      treinamento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      treinamento.descricao.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesArea = activeArea === "Todas" || treinamento.area === activeArea

    return matchesSearch && matchesArea
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Treinamentos HortSoy</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Capacitação por área de atuação - Todos os cursos são obrigatórios
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar treinamentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filtrar por Área:</p>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <Badge
                      key={area}
                      variant={area === activeArea ? "default" : "secondary"}
                      className={`cursor-pointer hover:bg-green-100 dark:hover:bg-green-800 transition-all duration-200 ${
                        area === activeArea ? "bg-green-600 hover:bg-green-700" : "dark:bg-gray-700 dark:text-gray-200"
                      }`}
                      onClick={() => setActiveArea(area)}
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mostrando {filteredTreinamentos.length} treinamentos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTreinamentos.map((treinamento, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-200 dark:bg-gray-800 dark:border-gray-700"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-700 dark:text-green-400 mb-2">{treinamento.nome}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-3">
                  {treinamento.descricao}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className={getAreaColor(treinamento.area)}>{treinamento.area}</Badge>
                    <Badge className="border-red-200 dark:border-red-700 text-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/20">
                      Obrigatório
                    </Badge>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    {treinamento.horas} {treinamento.horas === 1 ? "hora" : "horas"}
                  </div>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200"
                  onClick={() => window.open(treinamento.link, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Acessar Treinamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTreinamentos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Nenhum treinamento encontrado com os filtros selecionados.
            </p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={() => {
                setSearchTerm("")
                setActiveArea("Todas")
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
