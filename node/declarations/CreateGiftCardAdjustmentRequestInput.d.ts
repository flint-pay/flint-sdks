
import type { GiftCardMoneyInput } from './GiftCardMoneyInput.js';

export type CreateGiftCardAdjustmentRequestInput = { "amount_money": GiftCardMoneyInput; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "complimentary" | "balance_accidentally_decreased" | "support_issue" | "suspicious_activity" | "balance_accidentally_increased"; };
