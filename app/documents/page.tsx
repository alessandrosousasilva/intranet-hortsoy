import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Search, Filter, Upload, Folder, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
  const documents = [
    {
      name: "Manual do Funcionário 2024",
      type: "PDF",
      size: "2.4 MB",
      modified: "2 dias atrás",
      category: "RH",
      starred: true,
    },
    {
      name: "Política de Segurança",
      type: "DOCX",
      size: "1.8 MB",
      modified: "1 semana atrás",
      category: "Segurança",
      starred: false,
    },
    {
      name: "Organograma Atualizado",
      type: "PDF",
      size: "856 KB",
      modified: "3 dias atrás",
      category: "Administração",
      starred: true,
    },
    {
      name: "Procedimentos de TI",
      type: "PDF",
      size: "3.2 MB",
      modified: "5 dias atrás",
      category: "TI",
      starred: false,
    },
    {
      name: "Relatório Financeiro Q3",
      type: "XLSX",
      size: "4.1 MB",
      modified: "1 semana atrás",
      category: "Financeiro",
      starred: false,
    },
  ]

  const categories = ["Todos", "RH", "Financeiro", "TI", "Segurança", "Administração"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Documentos</h1>
              <p className="text-gray-600 mt-1">Gerencie e acesse documentos da empresa</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
              <Link href="/">
                <Button variant="outline">Voltar ao Dashboard</Button>
              </Link>
            </div>
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
                <Input placeholder="Buscar documentos..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Todos" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-blue-100"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-sm font-medium truncate">{doc.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {doc.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{doc.size}</span>
                      </div>
                    </div>
                  </div>
                  {doc.starred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {doc.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {doc.modified}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-3 w-3 mr-1" />
                    Ver
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-3 w-3 mr-1" />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Folders */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Pastas Recentes</CardTitle>
            <CardDescription>Pastas acessadas recentemente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Contratos", "Relatórios", "Políticas", "Treinamentos", "Formulários", "Apresentações"].map(
                (folder) => (
                  <div
                    key={folder}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <Folder className="h-12 w-12 text-blue-500 mb-2" />
                    <span className="text-sm font-medium text-center">{folder}</span>
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
