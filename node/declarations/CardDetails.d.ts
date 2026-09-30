


export type CardDetails = { "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {}); /** Format: int32. */ "exp_month": number; /** Format: int32. */ "exp_year": number; "last4": string; "wallet"?: string; };
