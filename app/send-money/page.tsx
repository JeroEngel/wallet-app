import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Cookies from "js-cookie"

export default function SendMoney() {
  // Datos de ejemplo para contactos recientes
  const recentContacts = [
    { id: "1", name: "Juan Pérez", email: "juan.perez@email.com", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "2", name: "María López", email: "maria.lopez@email.com", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "3", name: "Carlos Gómez", email: "carlos.gomez@email.com", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Enviar dinero</h1>

          <Tabs defaultValue="email" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Por email</TabsTrigger>
              <TabsTrigger value="id">Por ID de usuario</TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="mt-4">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Enviar por email</CardTitle>
                  <CardDescription>Ingresa el email del destinatario y el monto a enviar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email del destinatario</Label>
                    <Input id="email" type="email" placeholder="ejemplo@correo.com" />
                  </div>

                  {recentContacts.length > 0 && (
                    <div className="space-y-2">
                      <Label>Contactos recientes</Label>
                      <RadioGroup defaultValue="1">
                        {recentContacts.map((contact) => (
                          <div key={contact.id} className="flex items-center space-x-2 border rounded-md p-2">
                            <RadioGroupItem value={contact.id} id={`contact-${contact.id}`} />
                            <Label
                              htmlFor={`contact-${contact.id}`}
                              className="flex items-center flex-1 cursor-pointer"
                            >
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{contact.name}</p>
                                <p className="text-xs text-gray-500">{contact.email}</p>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="amount">Monto a enviar</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <Input id="amount" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                    <p className="text-xs text-gray-500">Saldo disponible: $1,250.75</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción (opcional)</Label>
                    <Input id="description" placeholder="Ej: Pago de almuerzo" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enviar dinero</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="id" className="mt-4">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Enviar por ID de usuario</CardTitle>
                  <CardDescription>Ingresa el ID único del destinatario y el monto a enviar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="userId">ID de usuario</Label>
                    <Input id="userId" placeholder="WAL-XXXXXXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount-id">Monto a enviar</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <Input id="amount-id" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                    <p className="text-xs text-gray-500">Saldo disponible: $1,250.75</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description-id">Descripción (opcional)</Label>
                    <Input id="description-id" placeholder="Ej: Pago de almuerzo" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enviar dinero</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <DashboardNav />
    </div>
  )
}
