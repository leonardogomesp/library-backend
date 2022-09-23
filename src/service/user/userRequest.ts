export const userRequest = () => {
  const convertFromHttpBody = (body) => {
    const { name, email, password, type } = body
    return {
      name,
      email,
      password,
      type,
    }
  }
  return { convertFromHttpBody }
}
