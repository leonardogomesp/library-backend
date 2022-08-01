import { User } from "@models/entity/User"
import { getRepository } from "typeorm"
import { validate } from "class-validator"

export const userService = () => {
  const userRepository = getRepository(User)

  const validateUser = async (user) => {
    const errors = await validate(user)

    if (errors.length > 0) {
      throw new Error("Errors validating the user:" + errors)
    }
  }

  const createUserService = async (userRequest) => {
    const userEntity = userRepository.create(userRequest)
    await validateUser(userEntity)
    const saveUser = await userRepository.save(userEntity)
    return saveUser
  }

  const getAllUser = async () => {
    const getAllUsers = userRepository.find({})
    return getAllUsers
  }

  const getUserByID = async (id) => {
    const getUser = await userRepository.findOne(id)
    console.log({ getUser })
    return getUser
  }

  return { createUserService, getAllUser, getUserByID }
}
