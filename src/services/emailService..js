import emailjs from '@emailjs/browser'

export const emailService = (params) => {
    const sendEmail = async() => {
        await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            params,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((res) => console.log(res.status))
        .then((err) => console.log(err))
    }

    sendEmail();
}