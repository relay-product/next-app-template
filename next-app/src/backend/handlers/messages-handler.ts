import { NextApiRequest, NextApiResponse } from 'next'
import { createBadRequestResponse } from '../helpers/request-validation-helper'
import { APIMessageService } from '../services/messages-service'

export const createMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    return createBadRequestResponse(res)
  } else {
    const createdFan = await APIMessageService.createOne(req.body)
    return res.status(201).json(createdFan)
  }
}

export const getAllMessages = async (req: NextApiRequest, res: NextApiResponse) => {
  const messages = await APIMessageService.getAll()
  return res.status(200).json(messages)
}
