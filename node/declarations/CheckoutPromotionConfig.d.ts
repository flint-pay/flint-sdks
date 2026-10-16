


export type CheckoutPromotionConfig = { "automatic_enabled"?: boolean; /** Object-level override for whether this checkout's buyer can apply promotion codes, hosted or headless. Hosted checkout shows or hides code entry to match. Omit to inherit checkout.promotion_code_entry_enabled. True allows codes when the merchant's promotion settings allow them; false blocks them for this checkout. */ "codes_enabled"?: boolean | null; };
