import { prisma } from '../db/client'

const createOne = async (data: any) => {
  return await prisma.message.create({
    data: data,
  })
}

const getAll = async () => {
  return await prisma.message.findMany()
}

export const APIMessageService = {
  createOne,
  getAll,
}
