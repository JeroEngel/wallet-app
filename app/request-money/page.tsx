import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Cookies from "js-cookie"

export default function RequestMoney() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Solicitar DEBIN</h1>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Solicitar dinero (DEBIN)</CardTitle>
              <CardDescription>Solicita dinero desde una cuenta bancaria externa a tu billetera</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bank">Banco</Label>
                <Select>
                  <SelectTrigger id="bank">
                    <SelectValue placeholder="Seleccionar banco" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="banco-nacional">Banco Nacional</SelectItem>
                    <SelectItem value="banco-provincial">Banco Provincial</SelectItem>
                    <SelectItem value="banco-ciudad">Banco Ciudad</SelectItem>
                    <SelectItem value="banco-galicia">Banco Galicia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="account-type">Tipo de cuenta</Label>
                <Select>
                  <SelectTrigger id="account-type">
                    <SelectValue placeholder="Seleccionar tipo de cuenta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cuenta-corriente">Cuenta Corriente</SelectItem>
                    <SelectItem value="caja-ahorro">Caja de Ahorro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="account-number">Número de cuenta</Label>
                <Input id="account-number" placeholder="Ingresa el número de cuenta" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount-request">Monto a solicitar</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input id="amount-request" type="number" placeholder="0.00" className="pl-7" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Motivo</Label>
                <Textarea id="reason" placeholder="Ingresa el motivo de la solicitud" />
              </div>

              <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500 mr-2 mt-0.5"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" x2="12" y1="9" y2="13" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Información importante</p>
                    <p className="text-xs text-amber-700 mt-1">
                      Esta es una simulación de DEBIN (Débito Inmediato). En un entorno real, el banco solicitaría
                      autorización al titular de la cuenta para realizar la transferencia.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Solicitar DEBIN</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <DashboardNav />
    </div>
  )
}
