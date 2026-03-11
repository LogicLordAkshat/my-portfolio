import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // In a real application, you would integrate Resend, Nodemailer, or SendGrid here.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Contact Form <onboarding@resend.dev>',
    //   to: 'akshatsrivastava11d@gmail.com',
    //   subject: `New Message from ${name}`,
    //   reply_to: email,
    //   text: message
    // });
    
    // Simulating network delay for the impressive UI loader
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Simulate successful sent
    console.log("New contact form submission:", { name, email, message });
    
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
}
