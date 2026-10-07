
import type { GiftCardFundingLossResolution } from './GiftCardFundingLossResolution.js';

export type GiftCardFundingDispute = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "dispute_id": string; "requires_resolution": boolean; "resolution"?: GiftCardFundingLossResolution; "status": "open" | "won" | "lost" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version": string; };
