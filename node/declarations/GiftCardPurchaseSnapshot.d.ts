
import type { GiftCardProductConfiguration } from './GiftCardProductConfiguration.js';
import type { GiftCardPurchaseRecipient } from './GiftCardPurchaseRecipient.js';

export type GiftCardPurchaseSnapshot = { "configuration"?: GiftCardProductConfiguration; "consideration_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD" | (string & {}); }; "face_value_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD" | (string & {}); }; "recipient"?: GiftCardPurchaseRecipient; "reference_price_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD" | (string & {}); }; };
