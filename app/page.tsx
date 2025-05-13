"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie"

// Interceptor global para axios
axios.interceptors.request.use((config) => {
  const token = Cookies.get("token")
  if (token) {
    config.headers = config.headers || {}
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

export default function Home() {
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [registerFirstName, setRegisterFirstName] = useState("")
  const [registerLastName, setRegisterLastName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("")
  const [registerError, setRegisterError] = useState("")
  const [registerSuccess, setRegisterSuccess] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email: loginEmail,
        password: loginPassword,
      })
      if (!response.data.token || !response.data.user) {
        setLoginError("Respuesta inválida del servidor. Intenta de nuevo.")
        return
      }
      Cookies.set("token", response.data.token, { expires: 1, secure: true })
      localStorage.setItem("currentUser", JSON.stringify(response.data.user))
      console.log("Login successful:", response.data)
      router.push("/dashboard")
    } catch (error: any) {
      console.error("Login failed:", error)
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message)
      } else {
        setLoginError("Error al iniciar sesión. Inténtalo de nuevo.")
      }
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setRegisterError("")
    setRegisterSuccess("")

    if (registerPassword !== registerConfirmPassword) {
      setRegisterError("Las contraseñas no coinciden.")
      return
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        firstName: registerFirstName,
        lastName: registerLastName,
        email: registerEmail,
        password: registerPassword,
        confirmPassword: registerConfirmPassword,
      })
      console.log("Registration successful:", response.data)
      setRegisterSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.")
      setRegisterFirstName("")
      setRegisterLastName("")
      setRegisterEmail("")
      setRegisterPassword("")
      setRegisterConfirmPassword("")
    } catch (error: any) {
      console.error("Registration failed:", error)
      if (error.response && error.response.data && Array.isArray(error.response.data)) {
        const messages = error.response.data.map((err: any) => err.message || "Error desconocido").join(", ");
        setRegisterError(messages || "Error al registrar. Inténtalo de nuevo.")
      } else if (error.response && error.response.data && error.response.data.message) {
        setRegisterError(error.response.data.message)
      } else {
        setRegisterError("Error al registrar. Inténtalo de nuevo.")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wallet"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">WalletApp</h1>
          <p className="text-gray-500 mt-2">Tu billetera virtual segura y fácil de usar</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Iniciar Sesión</CardTitle>
                <CardDescription>Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleLogin}>
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Correo electrónico</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      placeholder="ejemplo@correo.com" 
                      value={loginEmail} 
                      onChange={(e) => setLoginEmail(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Contraseña</Label>
                      <Link href="#" className="text-sm text-emerald-600 hover:text-emerald-700">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <Input 
                      id="login-password" 
                      type="password" 
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  {loginError && <p className="text-sm text-red-600 mt-2">{loginError}</p>}
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-6">Iniciar Sesión</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Crear una cuenta</CardTitle>
                <CardDescription>Ingresa tus datos para registrarte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleRegister}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-firstName">Nombre</Label>
                      <Input 
                        id="register-firstName" 
                        value={registerFirstName}
                        onChange={(e) => setRegisterFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-lastName">Apellido</Label>
                      <Input 
                        id="register-lastName" 
                        value={registerLastName}
                        onChange={(e) => setRegisterLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="register-email">Correo electrónico</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      placeholder="ejemplo@correo.com" 
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="register-password">Contraseña</Label>
                    <Input 
                      id="register-password" 
                      type="password" 
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="register-confirmPassword">Confirmar contraseña</Label>
                    <Input 
                      id="register-confirmPassword" 
                      type="password" 
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  {registerError && <p className="text-sm text-red-600 mt-2">{registerError}</p>}
                  {registerSuccess && <p className="text-sm text-green-600 mt-2">{registerSuccess}</p>}
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-6">Crear cuenta</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
