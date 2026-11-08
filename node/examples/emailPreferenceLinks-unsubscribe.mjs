import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.emailPreferenceLinks.unsubscribe(
  {
    token: "b3BlbmFwaS1maXh0dXJl.eyJ2IjoxLCJwIjoic2FuZGJveCIsImQiOiJlZGVsXzAxS0VaRjdDMDA4OU1SRThFRjc4SFIxRzI2In0.6c_I5nt_K3eTi7XxJJ95dXgQZjGlaY_lVlp64YJPxuo",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
