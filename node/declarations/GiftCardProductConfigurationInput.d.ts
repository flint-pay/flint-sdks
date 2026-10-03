
import type { GiftCardCustomAmountBoundsInput } from './GiftCardCustomAmountBoundsInput.js';

export type GiftCardProductConfigurationInput = { "custom_amount_bounds"?: GiftCardCustomAmountBoundsInput; "face_value_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD"; }; "price_mode": "face_value" | "discounted"; };
