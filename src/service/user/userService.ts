import { User } from "@models/entity/User"
import { getRepository } from "typeorm"
import { validate } from "class-validator"
import { emailService } from "@service/emails/emailService"
import bcrypt from "bcrypt"
import { registerEmailContent } from "@messages/emailContent"

export const userService = () => {
  const userRepository = getRepository(User)

  const sendEmail = async (user, message) => {
    const { from, subject, content } = message
    const { name, email } = user
    await emailService().send(
      from,
      email,
      subject,
      content(name)
    )
  }

  const validateUser = async (user) => {
    const error = await validate(user)

    if (error.length > 0) {
      throw new Error("Error when tried to validate the user:" + error)
    }
  }

  const createUserService = async (userRequest) => {
    const userEntity = userRepository.create(userRequest)
    await validateUser(userEntity)
    const saveUser = await userRepository.save(userEntity)
    await sendEmail(userEntity, registerEmailContent)
    return saveUser
  }

  const getAllUser = async () => {
    const getAllUsers = userRepository.find({})
    return getAllUsers
  }

  const getUserByID = async (id) => {
    const getUser = await userRepository.findOne(id)
    return getUser
  }

  const updateUserService = async (userRequest, id) => {
    const userEntity = await userRepository.findOne(id)
    await validateUser(userEntity)
    if (userRequest.name) {
      userEntity.name = userRequest.name
    }
    if (userRequest.email) {
      userEntity.email = userRequest.email
    }
    if (userRequest.password) {
      userEntity.password = userRequest.password
    }
    if (userRequest.role) {
      userEntity.type = userRequest.type
    }
    await validateUser(userEntity)
    const saveUser = await userRepository.save(userEntity)
    return saveUser
    }

    const deleteUserService = async (id) => {
      const userEntity = await userRepository.findOne(id)
      const deleteUser = userRepository.remove(userEntity)
      return deleteUser
    }

  return { createUserService, getAllUser, getUserByID, updateUserService, deleteUserService }
}
