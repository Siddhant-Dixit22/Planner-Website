import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signinSchema } from "../schemas";

const app = new Hono()
    .post(
        "/signin", 
        zValidator("json", signinSchema), 
        async (c) => {
            const { email, password } = c.req.valid("json");
            console.log( email, password );
            return c.json({ success: "ok"});
        }
    )
    .post(
        "/signup", 
        zValidator("json", z.object({
            name: z.string().min(1, "Required"),
            email: z.string().email(),
            password: z.string().min(8, "Minimum of 8 characters required")
        })), 
        async (c) => {
            const { name, email, password } = c.req.valid("json");
            console.log( name, email, password );
            return c.json({ success: "ok"});
        }
    );

export default app;