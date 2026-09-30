


export type PromotionRefRequest = ({ /** Human-entered promotion code. Use this when redeeming a campaign code. */ "promotion_code"?: string; /** Flint promotion ID. Use this for server-side apply flows where you already know the promotion. */ "promotion_id"?: string; }) & ((({ "promotion_id": unknown; })) | (({ "promotion_code": unknown; })) | (object));
