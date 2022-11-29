import { createBook, deleteBook, getAllBooks, getOneBook, updateBook } from "./controller/book"
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "./controller/user"

export const defineRoutes = (app) => {
  app.post("/user", createUser)
  app.get("/user", getAllUsers)
  app.get("/user/:id", getOneUser)
  app.put("/user/:id", updateUser)
  app.delete("/user/:id", deleteUser)
  
  app.post("/book", createBook)
  app.get("/book", getAllBooks)
  app.get("/book/:id", getOneBook)
  app.put("/book/:id", updateBook)
  app.delete("/book/:id", deleteBook)
}