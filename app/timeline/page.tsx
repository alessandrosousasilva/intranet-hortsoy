"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Heart, MessageCircle, Share2, MapPin, Calendar, Plus } from "lucide-react"

export default function TimelinePage() {
  const [posts, setPosts] = useState([
    {
      id: 6,
      author: "Walker",
      filial: "Iraí de Minas - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "🥂 Momento histórico! Inauguração oficial do nosso novo Centro Administrativo em Uberaba! Um brinde ao futuro da HortSoy com toda nossa equipe reunida neste espaço incrível. Muito orgulho de fazer parte desta conquista!",
      image: "/inauguracao-brinde.jpg",
      timestamp: "1 dia atrás",
      likes: 67,
      comments: 28,
      type: "evento",
      liked: false,
    },
    {
      id: 7,
      author: "Ricardo",
      filial: "Patos de Minas - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "👩‍💼 Nossa equipe feminina brilhando na inauguração do Centro Administrativo! Recepção impecável com o logo da HortSoy de fundo. Cada colaboradora representa a excelência que buscamos todos os dias!",
      image: "/inauguracao-equipe-recepcao.jpg",
      timestamp: "1 dia atrás",
      likes: 54,
      comments: 22,
      type: "evento",
      liked: true,
    },
    {
      id: 8,
      author: "Leonardo",
      filial: "Passos - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "🙌 Energia contagiante na inauguração! Toda nossa equipe celebrando este marco importante para a HortSoy. O novo Centro Administrativo representa crescimento, inovação e muito trabalho em equipe!",
      image: "/inauguracao-celebracao.jpg",
      timestamp: "1 dia atrás",
      likes: 72,
      comments: 31,
      type: "evento",
      liked: false,
    },
    {
      id: 1,
      author: "Guilherme",
      filial: "Coromandel - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "🍽️ Momento especial do Kickoff 2024! O coffee break foi incrível, com toda a equipe reunida compartilhando experiências e fortalecendo os laços. Nada melhor que começar o ano com essa energia positiva!",
      image: "/kickoff-2024-buffet.jpg",
      timestamp: "3 dias atrás",
      likes: 42,
      comments: 15,
      type: "evento",
      liked: false,
    },
    {
      id: 2,
      author: "Matheus",
      filial: "Piumhi - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "🤝 Atividade de integração no Kickoff 2024! Todos unidos em uma dinâmica incrível que mostrou a força do nosso time. Juntos somos mais fortes! #EquipeHortSoy",
      image: "/kickoff-2024-team-activity.jpg",
      timestamp: "3 dias atrás",
      likes: 38,
      comments: 12,
      type: "evento",
      liked: true,
    },
    {
      id: 3,
      author: "Marcelo",
      filial: "Carmo do Rio Claro - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "🏆 Momento de reconhecimento no Kickoff 2024! Foi uma honra receber essa premiação e representar nossa filial. Gratidão a toda equipe que tornou isso possível!",
      image: "/kickoff-2024-awards.jpg",
      timestamp: "3 dias atrás",
      likes: 45,
      comments: 18,
      type: "evento",
      liked: false,
    },
    {
      id: 4,
      author: "Rodolfo",
      filial: "Campos Altos - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "👥 Engajamento total das nossas colaboradoras no Kickoff 2024! A participação e o entusiasmo de toda a equipe feminina foi inspirador. Orgulho de liderar pessoas tão dedicadas!",
      image: "/kickoff-2024-engagement.jpg",
      timestamp: "3 dias atrás",
      likes: 41,
      comments: 20,
      type: "evento",
      liked: false,
    },
    {
      id: 5,
      author: "Cleriston Canela",
      filial: "Santa Juliana - MG",
      role: "Gerente",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "🌳 Atividade ao ar livre no Kickoff 2024! Nada como sair do ambiente corporativo e se conectar com a natureza. Team building em meio às árvores fortaleceu ainda mais nossos vínculos!",
      image: "/kickoff-2024-outdoor.jpg",
      timestamp: "3 dias atrás",
      likes: 52,
      comments: 25,
      type: "evento",
      liked: true,
    },
  ])

  const [activeFilter, setActiveFilter] = useState("Todos")

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post,
      ),
    )
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "aniversario":
        return "bg-pink-100 text-pink-800"
      case "treinamento":
        return "bg-blue-100 text-blue-800"
      case "evento":
        return "bg-purple-100 text-purple-800"
      case "sistema":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "aniversario":
        return "Aniversário"
      case "treinamento":
        return "Treinamento"
      case "evento":
        return "Evento"
      case "sistema":
        return "Sistema"
      default:
        return "Geral"
    }
  }

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "Todos") return true
    if (activeFilter === "Aniversários") return post.type === "aniversario"
    if (activeFilter === "Treinamentos") return post.type === "treinamento"
    if (activeFilter === "Eventos") return post.type === "evento"
    if (activeFilter === "Sistemas") return post.type === "sistema"
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Timeline HortSoy</h1>
          <p className="text-gray-600 dark:text-gray-300">Acompanhe as novidades e eventos de todas as filiais</p>
        </div>

        {/* Create Post Button */}
        <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200">
              <Plus className="h-4 w-4 mr-2" />
              Criar Nova Postagem
            </Button>
          </CardContent>
        </Card>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["Todos", "Aniversários", "Treinamentos", "Eventos", "Sistemas"].map((filter) => (
            <Badge
              key={filter}
              variant={filter === activeFilter ? "default" : "secondary"}
              className={`cursor-pointer hover:bg-green-100 dark:hover:bg-green-800 transition-all duration-200 ${
                filter === activeFilter ? "bg-green-600 hover:bg-green-700" : "dark:bg-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-lg transition-all duration-200 dark:bg-gray-800 dark:border-gray-700"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{post.author}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{post.role}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {post.filial}
                        <span className="mx-2">•</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.timestamp}
                      </div>
                    </div>
                  </div>
                  <Badge className={getTypeColor(post.type)}>{getTypeLabel(post.type)}</Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-800 mb-4 leading-relaxed" style={{ color: "var(--tw-prose-body)" }}>
                  <span className="dark:text-white">{post.content}</span>
                </p>

                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Post image"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className={`hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 ${
                        post.liked ? "text-red-600" : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${post.liked ? "fill-current" : ""}`} />
                      {post.likes}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {post.comments}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-600 transition-all duration-200 bg-transparent dark:border-gray-600 dark:text-gray-300"
          >
            Carregar Mais Postagens
          </Button>
        </div>
      </main>
    </div>
  )
}
