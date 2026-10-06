export interface ContactPayload {
    name: string;
    email: string;
    company: string;
    message: string;
    consent: boolean;
    /** Honeypot: hidden from people, bots tend to fill it. Must stay empty. */
    website: string;
}

export async function sendEmail(data: ContactPayload) {
    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(result?.message || "Ocurrió un error al enviar el mensaje.");
    }

    return result;
}
