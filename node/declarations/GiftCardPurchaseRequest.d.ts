
import type { GiftCardPurchaseRecipient } from './GiftCardPurchaseRecipient.js';

export type GiftCardPurchaseRequest = { "face_value_money"?: { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD" | (string & {}); }; "recipient"?: GiftCardPurchaseRecipient; };
