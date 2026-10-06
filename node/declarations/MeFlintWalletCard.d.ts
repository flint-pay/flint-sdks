


/** An independent card saved with Flint that the current buyer can set up at this store. Store copies have their own consent and lifecycle. */ export type MeFlintWalletCard = { "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {}); /** Format: int32. */ "exp_month": number; /** Format: int32. */ "exp_year": number; /** Opaque handle for this card at this store. Handles differ across stores and cannot be used at another store. */ "id": string; "last4": string; /** The store's independent card copy, or null when this store does not hold a copy. A pending copy still needs confirmation before use. */ "store_payment_method_id": string | null; };
