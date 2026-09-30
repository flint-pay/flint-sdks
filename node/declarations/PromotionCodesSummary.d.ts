


export type PromotionCodesSummary = { /** Number of codes that can still be redeemed right now. Zero means the promotion reads as no_active_codes. Format: int32. */ "active_count": number; /** Most recently created redeemable code. Omitted when active_count is zero. */ "newest_active_code"?: string; /** Number of codes on the promotion, excluding deleted codes. Format: int32. */ "total_count": number; };
