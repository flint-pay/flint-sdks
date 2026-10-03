
import type { GiftCardCustomAmountBounds } from './GiftCardCustomAmountBounds.js';

export type GiftCardProductConfiguration = { "custom_amount_bounds"?: GiftCardCustomAmountBounds; "face_value_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD" | (string & {}); }; "price_mode": "face_value" | "discounted" | (string & {}); };
