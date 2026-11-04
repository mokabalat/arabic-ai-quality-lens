import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

export const Route = createFileRoute("/api/public/contact-submissions")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: corsHeaders(),
        }),
      POST: async ({ request }) => {
        const json = await request.json().catch(() => null);
        const parsed = schema.safeParse(json);
        if (!parsed.success) {
          return Response.json({ ok: false, error: "invalid_input" }, { status: 400, headers: corsHeaders() });
        }
        const data = parsed.data;
        const { error } = await publishableClient().from("contact_submissions").insert({
          name: data.name,
          organisation: data.organisation || null,
          role: data.role || null,
          email: data.email,
          deploying: data.deploying || null,
          languages: data.languages || null,
          timeline: data.timeline || null,
          message: data.message || null,
        });
        if (error) {
          console.error("contact submission insert failed:", error.message);
          return Response.json({ ok: false, error: "storage_failed" }, { status: 500, headers: corsHeaders() });
        }
        return Response.json({ ok: true }, { headers: corsHeaders() });
      },
    },
  },
});

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  organisation: z.string().trim().max(160).optional().default(""),
  role: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email().max(255),
  deploying: z.string().trim().max(400).optional().default(""),
  languages: z.string().trim().max(200).optional().default(""),
  timeline: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

/** Anonymous insert-only client; RLS allows INSERT and nothing else. */
function publishableClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}
