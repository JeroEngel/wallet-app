import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AddFunds() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Cargar saldo</h1>

          <Tabs defaultValue="bank" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bank">Cuenta bancaria</TabsTrigger>
              <TabsTrigger value="card">Tarjeta de crédito</TabsTrigger>
            </TabsList>

            <TabsContent value="bank" className="mt-4">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Cargar desde cuenta bancaria</CardTitle>
                  <CardDescription>Simula una transferencia desde tu cuenta bancaria a tu billetera</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Selecciona un banco</Label>
                    <RadioGroup defaultValue="banco1">
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="banco1" id="banco1" />
                        <Label htmlFor="banco1" className="flex items-center flex-1 cursor-pointer">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-600"
                            >
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Banco Nacional</p>
                            <p className="text-xs text-gray-500">Cuenta corriente ****1234</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="banco2" id="banco2" />
                        <Label htmlFor="banco2" className="flex items-center flex-1 cursor-pointer">
                          <div className="bg-red-100 p-2 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-red-600"
                            >
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Banco Provincial</p>
                            <p className="text-xs text-gray-500">Caja de ahorro ****5678</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount-bank">Monto a cargar</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <Input id="amount-bank" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description-bank">Descripción (opcional)</Label>
                    <Input id="description-bank" placeholder="Ej: Carga mensual" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Cargar saldo</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="card" className="mt-4">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Cargar desde tarjeta</CardTitle>
                  <CardDescription>Simula una carga desde tu tarjeta de crédito o débito</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Selecciona una tarjeta</Label>
                    <RadioGroup defaultValue="card1">
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="card1" id="card1" />
                        <Label htmlFor="card1" className="flex items-center flex-1 cursor-pointer">
                          <div className="bg-purple-100 p-2 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-purple-600"
                            >
                              <rect width="20" height="14" x="2" y="5" rx="2" />
                              <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Visa ****4321</p>
                            <p className="text-xs text-gray-500">Vence: 12/27</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="card2" id="card2" />
                        <Label htmlFor="card2" className="flex items-center flex-1 cursor-pointer">
                          <div className="bg-yellow-100 p-2 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-yellow-600"
                            >
                              <rect width="20" height="14" x="2" y="5" rx="2" />
                              <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Mastercard ****8765</p>
                            <p className="text-xs text-gray-500">Vence: 08/26</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="new-card" id="new-card" />
                        <Label htmlFor="new-card" className="flex items-center flex-1 cursor-pointer">
                          <div className="bg-gray-100 p-2 rounded-full mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-gray-600"
                            >
                              <path d="M19 5v14H5V5h14Z" />
                              <path d="M9 9h6" />
                              <path d="M12 12V6" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Agregar nueva tarjeta</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount-card">Monto a cargar</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <Input id="amount-card" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Cargar saldo</Button>
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
