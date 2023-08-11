import type { NextApiRequest, NextApiResponse } from 'next'
import { routeHandler } from '@/backend/helpers/handler-wrapper'
import { createMessage, getAllMessages } from '@/backend/handlers/messages-handler'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await routeHandler(req, res, {
    POST: createMessage,
    GET: getAllMessages,
  })
}
