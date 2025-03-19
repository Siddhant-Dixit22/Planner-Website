import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Required"),
});

export const registerSchema = z.object({
    name: z.string().trim().min(1, "Required"),
    email: z.string().trim().email(),
    password: z.string().min(8, "Minimum of 8 characters required")
});