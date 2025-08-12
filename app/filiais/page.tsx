"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { MapPin, Users, Navigation } from "lucide-react"

export default function FiliaisPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("todas")

  const regioes = {
    "Alto Paranaíba": [
      {
        name: "Patos de Minas",
        cidade: "Patos de Minas - MG",
        endereco: "Av. Presidente Tancredo Neves, 540 - Cidade Nova",
        cep: "38706-400",
        funcionarios: 156,
        gerente: "Ricardo",
        status: "ativa",
        regiao: "Alto Paranaíba",
      },
      {
        name: "Patrocínio",
        cidade: "Patrocínio - MG",
        endereco: "Av. Faria Pereira, 3230 - São Cristovão",
        cep: "38742-218",
        funcionarios: 89,
        gerente: "Luccas Roldi",
        status: "ativa",
        regiao: "Alto Paranaíba",
      },
      {
        name: "Ibiá",
        cidade: "Ibiá - MG",
        endereco: "Av. Bartolomeu Ribeiro de Paiva, 934 - Centro",
        cep: "38950-000",
        funcionarios: 41,
        gerente: "Gustavo",
        status: "ativa",
        regiao: "Alto Paranaíba",
      },
      {
        name: "São Gotardo",
        cidade: "São Gotardo - MG",
        endereco: "Rod. MG 235, 590 KM 88, 25",
        cep: "38800-000",
        funcionarios: 52,
        gerente: "Marcos Antônio",
        status: "ativa",
        regiao: "Alto Paranaíba",
      },
    ],
    "Triângulo Mineiro": [
      {
        name: "Araxá",
        cidade: "Araxá - MG",
        endereco: "Av. Jose Ananias Aguiar, 5835 - Boa Vista",
        cep: "38180-130",
        funcionarios: 78,
        gerente: "Lucas Rafael",
        status: "ativa",
        regiao: "Triângulo Mineiro",
      },
      {
        name: "Uberaba",
        cidade: "Uberaba - MG",
        endereco: "Av. Dep. José Marcus Cherem, 1020 - São Cristovão",
        cep: "38031-070",
        funcionarios: 134,
        gerente: "Goiano",
        status: "ativa",
        regiao: "Triângulo Mineiro",
      },
      {
        name: "Sacramento",
        cidade: "Sacramento - MG",
        endereco: "Rua Mario de Santi, 280 - Jardim das Acácias",
        cep: "38190-000",
        funcionarios: 44,
        gerente: "Goiano",
        status: "ativa",
        regiao: "Triângulo Mineiro",
      },
      {
        name: "Conceição das Alagoas",
        cidade: "Conceição das Alagoas - MG",
        endereco: "Av. João Marques de Oliveira, 527 - 537 - Jardim América",
        cep: "38120-000",
        funcionarios: 35,
        gerente: "Goiano",
        status: "ativa",
        regiao: "Triângulo Mineiro",
      },
    ],
    "Centro-Oeste": [
      {
        name: "Bambuí",
        cidade: "Bambuí - MG",
        endereco: "Rua Alzira Torres, 681 - Nações",
        cep: "38900-000",
        funcionarios: 45,
        gerente: "Rodolfo",
        status: "ativa",
        regiao: "Centro-Oeste",
      },
      {
        name: "Campos Altos",
        cidade: "Campos Altos - MG",
        endereco: "Rua João Soares de Souza, 95 - Centro",
        cep: "38970-000",
        funcionarios: 32,
        gerente: "Rodolfo",
        status: "ativa",
        regiao: "Centro-Oeste",
      },
      {
        name: "Coromandel",
        cidade: "Coromandel - MG",
        endereco: "Av. Governador Israel Pinheiro, 691 - Centro",
        cep: "38550-000",
        funcionarios: 92,
        gerente: "Guilherme",
        status: "ativa",
        regiao: "Centro-Oeste",
      },
      {
        name: "Iraí de Minas",
        cidade: "Iraí de Minas - MG",
        endereco: "Av. Sete de Setembro, 600 - Centro",
        cep: "38510-000",
        funcionarios: 29,
        gerente: "Walker",
        status: "ativa",
        regiao: "Centro-Oeste",
      },
    ],
    "Sul de Minas": [
      {
        name: "Passos",
        cidade: "Passos - MG",
        endereco: "Rod. MG - 050, 628, Vila Rica",
        cep: "37901-300",
        funcionarios: 67,
        gerente: "Leonardo",
        status: "ativa",
        regiao: "Sul de Minas",
      },
      {
        name: "Carmo do Rio Claro",
        cidade: "Carmo do Rio Claro - MG",
        endereco: "Rua Padre Penteado, 15 - Santo Antonio",
        cep: "37150-000",
        funcionarios: 28,
        gerente: "Marcelo",
        status: "ativa",
        regiao: "Sul de Minas",
      },
      {
        name: "Piumhi",
        cidade: "Piumhi - MG",
        endereco: "Rua Padre Abel, 1393 - Pindaibas",
        cep: "37925-000",
        funcionarios: 38,
        gerente: "Matheus",
        status: "ativa",
        regiao: "Sul de Minas",
      },
      {
        name: "Santa Juliana",
        cidade: "Santa Juliana - MG",
        endereco: "Av. Joaquim Honorio da Silva, 20 - Palmeiras",
        cep: "38175-000",
        funcionarios: 33,
        gerente: "Cleriston Canela",
        status: "ativa",
        regiao: "Sul de Minas",
      },
    ],
  }

  const allFiliais = Object.values(regioes).flat()

  const filteredFiliais = allFiliais.filter((filial) => {
    const matchesSearch =
      filial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filial.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      filial.gerente.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "todas" || filial.regiao === selectedRegion

    return matchesSearch && matchesRegion
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Filiais HortSoy</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Nossas {allFiliais.length} unidades organizadas por regiões de Minas Gerais
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Buscar por filial, cidade ou gerente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="todas">Todas as Regiões</option>
                {Object.keys(regioes).map((regiao) => (
                  <option key={regiao} value={regiao}>
                    {regiao}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Mostrando {filteredFiliais.length} de {allFiliais.length} filiais
              {selectedRegion !== "todas" && ` na região ${selectedRegion}`}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredFiliais.map((filial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-green-500 dark:bg-gray-800 dark:border-gray-700"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg text-green-700 dark:text-green-400">{filial.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1 dark:text-gray-300">
                      <MapPin className="h-3 w-3 mr-1" />
                      {filial.cidade}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge
                      variant="outline"
                      className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700"
                    >
                      {filial.status}
                    </Badge>
                    <Badge variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                      {filial.regiao}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                    {filial.endereco}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 ml-6">{filial.cep}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    {filial.funcionarios} funcionários
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Gerente:</span> {filial.gerente}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200"
                    onClick={() =>
                      window.open(
                        `https://maps.google.com/search/${encodeURIComponent(filial.endereco + ", " + filial.cidade)}`,
                        "_blank",
                      )
                    }
                  >
                    <Navigation className="h-3 w-3 mr-1" />
                    Localizar no Mapa
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">Localização das Filiais</CardTitle>
            <CardDescription className="dark:text-gray-300">Todas as nossas unidades em Minas Gerais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {filteredFiliais.map((filial, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 p-2 bg-white dark:bg-gray-600 rounded border dark:border-gray-500"
                  >
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{filial.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{filial.endereco}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{filial.cep}</p>
                      <Badge variant="outline" className="text-xs mt-1 dark:border-gray-400 dark:text-gray-300">
                        {filial.regiao}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  className="hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-600 bg-transparent dark:border-gray-600 dark:text-gray-300"
                  onClick={() => window.open("https://maps.google.com/search/HortSoy+Minas+Gerais", "_blank")}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Ver Todas no Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
