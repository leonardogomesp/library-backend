export const bookRequest = () => {
    const convertFromHttpBody = (body) => {
      const { name, resume, price, author, release_date } = body
      return {
        name,
        resume,
        price,
        author,
        release_date
      }
    }
    return { convertFromHttpBody }
  }