"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState("")
  const router = useRouter()

  const validateEmail = (email: string) => {
    if (!email.endsWith("@hortsoy.com.br")) {
      setEmailError("Use apenas e-mails corporativos @hortsoy.com.br")
      return false
    }
    setEmailError("")
    return true
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    if (newEmail && !newEmail.endsWith("@hortsoy.com.br")) {
      setEmailError("Use apenas e-mails corporativos @hortsoy.com.br")
    } else {
      setEmailError("")
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      return
    }

    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-2xl inline-block">
            <Image src="/logo-hortsoy.png" alt="HortSoy" width={200} height={60} className="h-12 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-white mt-4">Intranet HortSoy</h1>
          <p className="text-green-100 mt-2">Acesse sua conta corporativa</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-2xl border-0">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Entrar</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Digite suas credenciais para acessar a intranet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  E-mail Corporativo
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.nome@hortsoy.com.br"
                    value={email}
                    onChange={handleEmailChange}
                    className={`pl-10 h-12 border-gray-300 focus:border-green-500 focus:ring-green-500 ${
                      emailError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                    }`}
                    required
                  />
                  {emailError && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    </div>
                  )}
                </div>
                {emailError && (
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {emailError}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Lembrar de mim
                  </Label>
                </div>
                <button type="button" className="text-sm text-green-600 hover:text-green-500">
                  Esqueceu a senha?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-200"
                disabled={isLoading || !!emailError}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Entrando...
                  </div>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Problemas para acessar?{" "}
                <button className="text-green-600 hover:text-green-500 font-medium">Contate o suporte de TI</button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-green-100 text-sm">© 2024 HortSoy. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
