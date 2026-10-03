
import type { GiftCardPurchaseRecipientInput } from './GiftCardPurchaseRecipientInput.js';

export type GiftCardPurchaseRequestInput = { "face_value_money"?: { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD"; }; "recipient"?: GiftCardPurchaseRecipientInput; };
