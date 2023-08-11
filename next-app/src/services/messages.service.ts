import { Message } from '@/common/types/Message'
import { http } from '@/http-common'

async function createMessage(message: Partial<Message>) {
  return (await http.post('/messages', message))?.data
}

async function getMessages(): Promise<Message[]> {
  return (await http.get('/messages'))?.data
}

export const FrontendMessageService = {
  createMessage,
  getMessages,
}
