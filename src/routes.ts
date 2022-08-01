import { createUser, getAllUsers, getOneUser } from "./controller/user"

export const defineRoutes = (app) => {
  app.post("/user", createUser)
  app.get("/user", getAllUsers)
  app.get("/user/:id", getOneUser)
}
