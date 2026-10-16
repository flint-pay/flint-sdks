


export type PromotionRefRequestInput = ({ /** Human-entered promotion code. Use this when redeeming a campaign code. */ "promotion_code"?: string; /** Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. */ "promotion_id"?: string; }) & ((({ "promotion_id": unknown; }) & (({ "promotion_code"?: never }))) | (({ "promotion_code": unknown; }) & (({ "promotion_id"?: never }))));
