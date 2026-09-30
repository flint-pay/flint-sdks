
import type { PublicResolvedBundleVariantSummary } from './PublicResolvedBundleVariantSummary.js';

export type PublicResolvedBundleComponent = { /** Format: int32. */ "position": number; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "quantity": number; "variant"?: PublicResolvedBundleVariantSummary; "variant_id": string; };
