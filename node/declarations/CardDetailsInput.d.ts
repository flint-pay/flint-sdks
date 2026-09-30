


export type CardDetailsInput = { "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay"; /** Format: int32. */ "exp_month": number; /** Format: int32. */ "exp_year": number; "last4": string; "wallet"?: string; };
