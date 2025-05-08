import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { TransactionItem } from "@/components/transaction-item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Transactions() {
  // Datos de ejemplo para las transacciones
  const transactions = [
    {
      id: "1",
      type: "incoming",
      amount: 250.0,
      date: "2025-05-06",
      description: "Transferencia recibida",
      from: "Juan Pérez",
    },
    {
      id: "2",
      type: "outgoing",
      amount: 120.5,
      date: "2025-05-05",
      description: "Pago enviado",
      to: "María López",
    },
    {
      id: "3",
      type: "incoming",
      amount: 500.0,
      date: "2025-05-03",
      description: "Carga desde banco",
      from: "Banco Nacional",
    },
    {
      id: "4",
      type: "outgoing",
      amount: 75.25,
      date: "2025-05-01",
      description: "Pago de servicio",
      to: "Empresa de Servicios",
    },
    {
      id: "5",
      type: "incoming",
      amount: 180.0,
      date: "2025-04-28",
      description: "Transferencia recibida",
      from: "Ana García",
    },
    {
      id: "6",
      type: "outgoing",
      amount: 200.0,
      date: "2025-04-25",
      description: "Transferencia enviada",
      to: "Pedro Sánchez",
    },
    {
      id: "7",
      type: "incoming",
      amount: 1000.0,
      date: "2025-04-20",
      description: "Carga desde tarjeta",
      from: "Tarjeta de crédito",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Historial de transacciones</h1>

        <Card className="border-none shadow-md mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="date-range">Rango de fechas</Label>
                <Select defaultValue="last-month">
                  <SelectTrigger id="date-range">
                    <SelectValue placeholder="Seleccionar período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-week">Última semana</SelectItem>
                    <SelectItem value="last-month">Último mes</SelectItem>
                    <SelectItem value="last-3-months">Últimos 3 meses</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="transaction-type">Tipo de transacción</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="transaction-type">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="incoming">Ingresos</SelectItem>
                    <SelectItem value="outgoing">Gastos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="search">Buscar</Label>
                <Input id="search" placeholder="Buscar por descripción o contacto" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="incoming">Ingresos</TabsTrigger>
            <TabsTrigger value="outgoing">Gastos</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} detailed />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="incoming">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {transactions
                    .filter((t) => t.type === "incoming")
                    .map((transaction) => (
                      <TransactionItem key={transaction.id} transaction={transaction} detailed />
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outgoing">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {transactions
                    .filter((t) => t.type === "outgoing")
                    .map((transaction) => (
                      <TransactionItem key={transaction.id} transaction={transaction} detailed />
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <DashboardNav />
    </div>
  )
}
