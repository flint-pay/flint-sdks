


export type PromotionRefRequestInput = ({ /** Human-entered promotion code. Use this when redeeming a campaign code. */ "promotion_code"?: string; /** Flint promotion ID. Use this for server-side apply flows where you already know the promotion. */ "promotion_id"?: string; }) & ((({ "promotion_id": unknown; }) & (({ "promotion_code"?: never }))) | (({ "promotion_code": unknown; }) & (({ "promotion_id"?: never }))));
