


export type CreateCustomerVerificationRequestInput = { /** Defaults to email when omitted. Explicit null and an empty value are not accepted. */ "channel"?: "email"; "customer_id": string; "email": string; "purpose": "link_guest_purchases"; };
