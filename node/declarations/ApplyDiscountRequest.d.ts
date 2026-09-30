
import type { ManualDiscountRequest } from './ManualDiscountRequest.js';
import type { PromotionRefRequest } from './PromotionRefRequest.js';

export type ApplyDiscountRequest = ({ "manual"?: ManualDiscountRequest; "promotion"?: PromotionRefRequest; }) & ((({ "promotion": unknown; })) | (({ "manual": unknown; })) | (object));
