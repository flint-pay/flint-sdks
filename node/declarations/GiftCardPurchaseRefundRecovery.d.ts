
import type { GiftCardPurchaseRefundRecoveryDestination } from './GiftCardPurchaseRefundRecoveryDestination.js';

export type GiftCardPurchaseRefundRecovery = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "destination": "original" | "replacement" | (string & {}); "destinations": Array<GiftCardPurchaseRefundRecoveryDestination>; };
