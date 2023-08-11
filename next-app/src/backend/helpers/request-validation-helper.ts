import { NextApiRequest, NextApiResponse } from 'next/types'

export const createUnauthorizedResponse = (res: NextApiResponse) => {
  return createResponse(res, 401, 'Unauthorized')
}

export const createBadRequestResponse = (res: NextApiResponse) => {
  return createResponse(res, 400, 'Bad Request')
}

export const createResponse = (res: NextApiResponse, statusCode: number, message: string) => {
  return res.status(statusCode).json({ message })
}
