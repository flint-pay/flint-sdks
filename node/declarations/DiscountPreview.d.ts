
import type { PromotionCandidate } from './PromotionCandidate.js';

export type DiscountPreview = { "applied": Array<PromotionCandidate>; "available": Array<PromotionCandidate>; "skipped": Array<PromotionCandidate>; };
