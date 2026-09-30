


export type CreateRiskListRequestInput = { /** pattern: ^[a-z][a-z0-9_]{0,127}$. */ "alias": string; "item_type": "card_fingerprint" | "card_bin" | "email" | "email_domain" | "ip_address" | "country" | "customer_id" | "string" | "case_sensitive_string"; "name": string; };
