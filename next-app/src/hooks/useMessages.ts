import { FrontendMessageService } from '@/services/messages.service'
import { useQuery } from 'react-query'

export const useMessages = () => {
  const messagesQuery = useQuery('Messages', () => FrontendMessageService.getMessages(), {})

  return {
    messagesQuery,
  }
}
