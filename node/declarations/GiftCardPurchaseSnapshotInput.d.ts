
import type { GiftCardProductConfigurationInput } from './GiftCardProductConfigurationInput.js';
import type { GiftCardPurchaseRecipientInput } from './GiftCardPurchaseRecipientInput.js';

export type GiftCardPurchaseSnapshotInput = { "configuration"?: GiftCardProductConfigurationInput; "consideration_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD"; }; "face_value_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD"; }; "recipient"?: GiftCardPurchaseRecipientInput; "reference_price_money": { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 200000. */ "amount": string; "currency": "USD"; }; };
