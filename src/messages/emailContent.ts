export const registerEmailContent = {
    from: "Library <libraryapiemail@gmail.com>",
    subject: "Bem-vindo a Library",
    content: (name) => {
      return `
      Olá ${name},
      Seu cadastro na library foi realizado com sucesso!
      Bem-vindo a sua nova experiência de leitura!
      Qualquer dúvida, entre em contato conosco!
      `
    },
  }