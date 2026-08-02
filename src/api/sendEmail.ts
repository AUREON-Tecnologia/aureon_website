export async function sendEmail(data: {
    name: string;
    email: string;
    company: string;
    message: string;
}) {
    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result?.message || "Error al enviar el correo");
    }

    return result;
}