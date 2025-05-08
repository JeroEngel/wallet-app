import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { TransactionItem } from "@/components/transaction-item"

export default function Dashboard() {
  // Datos de ejemplo para las transacciones recientes
  const recentTransactions = [
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
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardDescription>Saldo disponible</CardDescription>
                <CardTitle className="text-4xl font-bold">$1,250.75</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3 mt-2">
                  <Link href="/send-money">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
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
                        className="mr-2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      Enviar
                    </Button>
                  </Link>
                  <Link href="/add-funds">
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
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
                        className="mr-2"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      Ingresar
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Transacciones recientes</CardTitle>
                  <Link href="/transactions" className="text-sm text-emerald-600 hover:text-emerald-700">
                    Ver todas
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Acciones rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/send-money" className="block">
                  <Button variant="outline" className="w-full justify-start text-left">
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
                      className="mr-2"
                    >
                      <path d="M19 5v14H5V5h14Z" />
                      <path d="M9 9h6" />
                      <path d="M12 12V6" />
                    </svg>
                    <span className="ml-2">Transferir dinero</span>
                  </Button>
                </Link>
                <Link href="/add-funds" className="block">
                  <Button variant="outline" className="w-full justify-start text-left">
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
                      className="mr-2"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <span className="ml-2">Cargar saldo</span>
                  </Button>
                </Link>
                <Link href="/request-money" className="block">
                  <Button variant="outline" className="w-full justify-start text-left">
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
                      className="mr-2"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                    <span className="ml-2">Solicitar DEBIN</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Mi cuenta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
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
                      className="text-emerald-600"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Carlos Rodríguez</p>
                    <p className="text-xs text-gray-500">ID: WAL-12345678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
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
                      className="text-emerald-600"
                    >
                      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
                      <polyline points="15,9 18,9 18,11" />
                      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
                      <line x1="6" x2="7" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">carlos.rodriguez@email.com</p>
                    <p className="text-xs text-gray-500">Email verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <DashboardNav />
    </div>
  )
}
