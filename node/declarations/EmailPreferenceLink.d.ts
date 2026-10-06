


export type EmailPreferenceLink = { /** Flint customer ID when the email belongs to an active customer in this merchant environment. Null for a guest email. */ "customer_id": string | null; "email": string; "email_preference": "shipping_updates" | "checkout_reminders" | "other" | (string & {}); "enabled": boolean; };
