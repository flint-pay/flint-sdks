
import type { PublicResolvedBundleVariantSummaryInput } from './PublicResolvedBundleVariantSummaryInput.js';

export type PublicResolvedBundleComponentInput = { /** Format: int32. */ "position": number; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "quantity": number; "variant"?: PublicResolvedBundleVariantSummaryInput; "variant_id": string; };
