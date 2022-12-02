import { userRequest } from "@service/user/userRequest"
import { userService } from "@service/user/userService"

export const createUser = async (request, response) => {
  try {
    const user = userRequest().convertFromHttpBody(request.body)
    const result = await userService().createUserService(user)
    return response.status(200).json(result)
  } catch (err) {
    return response.status(500).json(err)
  }
}

export const getAllUsers = async (request, response) => {
  try {
    const result = await userService().getAllUser()
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getOneUser = async (request, response) => {
  try {
    const result = await userService().getUserByID(request.params.id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const updateUser = async (request, response) => {
  try {
    const user = userRequest().convertFromHttpBody(request.body)
    const result = await userService().updateUserService(user, request.params.id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const deleteUser = async (request, response) => {
  try {
    const result = await userService().deleteUserService(request.params.id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}
