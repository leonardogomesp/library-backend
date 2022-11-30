import { registerEmailContent } from "@messages/emailContent"

const nodemailer = require('nodemailer')

export const nodemailerService = () => {
const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD } = process.env

    const transporter = nodemailer.createTransport({
        service:'gmail',
        host: SMTP_HOST,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD
        }
    })

    const sendEmail = async (userRequest) => {
        const { email, name } = userRequest
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: registerEmailContent.subject,
            text: registerEmailContent.content(name)
        }
        await transporter.sendMail(mailOptions)
    }

    return { sendEmail }
}