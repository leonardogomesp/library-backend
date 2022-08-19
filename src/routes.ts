import { 
  deleteBook, 
  getBook, 
  getID, 
  postBook, 
  putBook } from "@controllers/Book";

import { getUser } from "@controllers/User";

export const defineRoutes = (app) => {

  app.get("/book", getBook)
  app.get("/book/:id", getID)
  app.get("/user", getUser)
  app.post("/Book", postBook)
  app.delete("/book/:id", deleteBook)
  app.put("/book/:id", putBook)
};
