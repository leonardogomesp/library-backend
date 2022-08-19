import { Book } from '@models/entity/Book'
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getBook = async (request, response) => {
  const bookRepository = getRepository(Book)
  const book = await bookRepository.find()
  return response.json(book)
}

export const getID = async (request, response) => {
  const idRepository = getRepository(Book)
  const idbook = await idRepository.findOne(request.params.id)
  return response.json(idbook)
}

export const postBook = async (request, response) => {
  const bookRepository = getRepository(Book)
  const book = await bookRepository.save(request.body)
  return response.json(book)
}

export const deleteBook = async (request, response) => {
  const idRepository = getRepository(Book)
  const idbook = await idRepository.delete(request.params.id)
  return response.json(idbook)
}

export const putBook = async (request, response) => {
  const bookRepository = getRepository(Book)
  const bookEdit = await bookRepository.update(
    request.params.id,
    request.body
    
  )
  return response.json(bookEdit)
}
