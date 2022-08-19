import { User } from "@models/entity/User"
import { getRepository } from "typeorm"

export const getUser = async (request, response) => {
  const userRepository = getRepository(User)
  const user = await userRepository.find()
  return response.json(user)
}
