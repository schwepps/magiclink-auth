import { json } from "@remix-run/node";
import { randomBytes } from "crypto";
import { db } from "./db.server";
import bcrypt from "bcryptjs";
import { sendEmail } from "./emails.servers";

export async function sendMagikLink({request, email}: {request: Request, email: string}) {
    // Generate a random hash
    const accessKey = randomBytes(32).toString('hex');
    
    const hashedEmail = bcrypt.hashSync(email, process.env.HASH_SECRET);

    // Save the hash in the database
    try {
        await db.magikLink.create({
            data: {
                hash: accessKey,
                email: hashedEmail,
            }
        });
    } catch (error) {
        return json({error: "Error saving the link in the database. Please try again."}, {status: 500});
    }
    
    // Build the access link
    const magikLink = new URL(request.headers.get("origin") || "");
    magikLink.pathname = "/login/verify";
    magikLink.searchParams.set("hash", accessKey);

    // Send the email
    const result = await sendEmail({email, accessLink: magikLink.href});

    if (result?.status !== 200) {
        return json({error: "Error sending the email. Please try again."}, {status: 500});
    }
    return json({success: "Email sent"}, {status: 200})
}