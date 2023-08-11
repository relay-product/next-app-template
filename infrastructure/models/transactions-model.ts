export type Transaction = {
  transaction_id: string
  parent_id: string
  created_date: Date
  created_time: string
  total_amount: number
  method: string
  card_number: string
  status: string
}
