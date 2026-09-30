
import type { ManualDiscountRequestInput } from './ManualDiscountRequestInput.js';
import type { PromotionRefRequestInput } from './PromotionRefRequestInput.js';

export type ApplyDiscountRequestInput = ({ "manual"?: ManualDiscountRequestInput; "promotion"?: PromotionRefRequestInput; }) & ((({ "promotion": unknown; }) & (({ "manual"?: never }))) | (({ "manual": unknown; }) & (({ "promotion"?: never }))));
