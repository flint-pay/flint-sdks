


export type PromotionSettings = { "automatic_enabled"?: boolean; /** Merchant promotion code redemption policy. Explicit false rejects promotion-code application even when a checkout or payment link asks to show code entry. */ "codes_enabled"?: boolean; /** Format: int32. */ "max_promotions_per_order"?: number; };
