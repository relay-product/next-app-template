import { useMessages } from '@/hooks/useMessages'
import { FrontendMessageService } from '@/services/messages.service'

export default function Home() {
  const { messagesQuery: messages } = useMessages()

  const postMessage = async () => {
    const newMessage = await FrontendMessageService.createMessage({
      content: 'Hi!',
    })
    messages.refetch()
  }

  return (
    <>
      Messages
      <button onClick={() => postMessage()}>Say hi!</button>
      {messages.data?.map((message) => {
        const sentDate = new Date(message.createdAt).toLocaleString()
        return (
          <div key={message.id}>
            {message.content} Sent at: {sentDate}
          </div>
        )
      })}
    </>
  )
}
