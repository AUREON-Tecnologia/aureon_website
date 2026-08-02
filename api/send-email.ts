import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Método no permitido",
        });
    }

    try {
        const { name, email, company, message } = req.body;

        await resend.emails.send({
            from: "AUREON <onboarding@resend.dev>",
            to: ["diazmarquezjulianadolfo@gmail.com"],

            subject: "Nuevo contacto desde AUREON",

            html: `
        <h2>Nuevo contacto</h2>

        <p><strong>Nombre:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Empresa:</strong> ${company}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${message}</p>
      `,
        });

        return res.status(200).json({
            success: true,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}