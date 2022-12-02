import { nodemailerService } from "@service/nodemailer/nodemailerService"

export const emailService = () => {
    const send = async (from, email, subject, content) => {
        const message = {
          from: from,
          to: email,
          subject: subject,
          text: content,
        }
        ;(await nodemailerService()).transporter.sendMail(message, (err, info) => {
          const { envelope, response } = info
          if (err) {
            console.error("Falha ao enviar email!", err)
            return
          }
          console.log("E-mail enviado com sucesso", { envelope, response })
        })
      }
    
      return { send }
}