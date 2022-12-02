const nodemailer = require('nodemailer')
const { google } = require('googleapis')
import dotenv from "dotenv";
dotenv.config();

const OAuth2 = google.auth.OAuth2

const { 
    NODEMAILER_CLIENT_ID, 
    NODEMAILER_CLIENT_SECRET, 
    NODEMAILER_REDIRECT_URI, 
    NODEMAILER_REFRESH_TOKEN,
    SMTP_HOST,
    SMTP_USER,
    SMTP_PASSWORD
} = process.env

const OAuth2Client = new OAuth2({
    clientId: NODEMAILER_CLIENT_ID,
    clientSecret: NODEMAILER_CLIENT_SECRET,
    NODEMAILER_REDIRECT_URI,
})

OAuth2Client.setCredentials({
    refresh_token: NODEMAILER_REFRESH_TOKEN
})

export const nodemailerService = async () => {
    const accessToken = await new Promise((resolve, reject) => {
        OAuth2Client.getAccessToken((err, token) => {
          if (err) {
            reject(err)
          }
          resolve(token)
        })
      })    

    const transporter = nodemailer.createTransport({
        service:'gmail',
        // host: SMTP_HOST,
        auth: {
            type: 'OAuth2',
            user: SMTP_USER,
            pass: SMTP_PASSWORD,
            clientId: NODEMAILER_CLIENT_ID,
            accessToken,
            clientSecret: NODEMAILER_CLIENT_SECRET,
            refreshToken: NODEMAILER_REFRESH_TOKEN,
        },
        tls: {
          rejectUnauthorized: false,
        },
    })

    return { transporter }
}