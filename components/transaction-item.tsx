import { cn } from "@/lib/utils"

interface TransactionItemProps {
  transaction: {
    id: string
    type: "incoming" | "outgoing"
    amount: number
    date: string
    description: string
    from?: string
    to?: string
  }
  detailed?: boolean
}

export function TransactionItem({ transaction, detailed = false }: TransactionItemProps) {
  const { type, amount, date, description, from, to } = transaction

  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  const formattedTime = detailed
    ? new Date(date).toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null

  return (
    <div className={cn("flex items-center p-3 rounded-lg", detailed ? "border" : "")}>
      <div className={cn("p-2 rounded-full mr-3", type === "incoming" ? "bg-green-100" : "bg-red-100")}>
        {type === "incoming" ? (
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
            className="text-green-600"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        ) : (
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </div>

      <div className="flex-1">
        <p className="font-medium">{description}</p>
        <p className="text-sm text-gray-500">{type === "incoming" ? `De: ${from}` : `Para: ${to}`}</p>
        {detailed && (
          <p className="text-xs text-gray-400 mt-1">
            {formattedDate} {formattedTime}
          </p>
        )}
      </div>

      <div className={cn("font-medium", type === "incoming" ? "text-green-600" : "text-red-600")}>
        {type === "incoming" ? "+" : "-"}${amount.toFixed(2)}
        {!detailed && <p className="text-xs text-gray-400 text-right">{formattedDate}</p>}
      </div>
    </div>
  )
}
