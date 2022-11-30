import { bookRequest } from "@service/book/bookRequest"
import { bookService } from "@service/book/bookService"

export const createBook = async (request, response) => {
  try {
    const user = bookRequest().convertFromHttpBody(request.body)
    const result = await bookService().createBookService(user)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getAllBooks = async (request, response) => {
  try {
    const result = await bookService().getAllBooks()
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getOneBook = async (request, response) => {
  try {
    const result = await bookService().getBookById(request.params.id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const updateBook = async (request, response) => {
  try { 
    const user = bookRequest().convertFromHttpBody(request.body)
    const result = await bookService().upddateBookService(user, request.params.id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const deleteBook = async (request, response) => {
  try {
    const result = await bookService().deleteBookService(request.params.id)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}
