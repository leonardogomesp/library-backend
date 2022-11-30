import { Book } from "@models/entity/Book"
import { getRepository } from "typeorm"
import { validate } from "class-validator"

export const bookService = () => {
  const bookRepository = getRepository(Book)

  const validateBook = async (book) => {
    const error = await validate(book)

    if (error.length > 0) {
      throw new Error(`Error when tried to validate the book: ${error}`)
    }
  }

  const createBookService = async (bookRequest) => {
    const bookEntity = bookRepository.create(bookRequest)
    await validateBook(bookEntity)
    const savebook = await bookRepository.save(bookEntity)
    return savebook
  }

  const getAllBooks = async () => {
    const getAllbooks = bookRepository.find({})
    return getAllbooks
  }

  const getBookById = async (id) => {
    const getBook = await bookRepository.findOne(id)
    return getBook
}

const upddateBookService = async (bookRequest, id) => {
  const bookEntity = await bookRepository.findOne(id)
  await validateBook(bookEntity)
  if (bookRequest.name) {
    bookEntity.name = bookRequest.name
  }
  if (bookRequest.author) {
    bookEntity.author = bookRequest.author
  }
  if (bookRequest.price) {
    bookEntity.price = bookRequest.price
  }
  if (bookRequest.resume) {
    bookEntity.resume = bookRequest.resume
  }
  if (bookRequest.release_date) {
    bookEntity.release_date = bookRequest.release_date
  }
  await validateBook(bookEntity)
  const saveBook = await bookRepository.save(bookEntity)
  return saveBook
}

const deleteBookService = async (id) => {
  const bookEntity = await bookRepository.findOne(id)
  const deleteBook = bookRepository.remove(bookEntity)
  return deleteBook
}

  return { createBookService, getAllBooks, getBookById, deleteBookService, upddateBookService }
}
