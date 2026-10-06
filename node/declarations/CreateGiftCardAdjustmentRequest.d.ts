
import type { SignedMoney } from './SignedMoney.js';

export type CreateGiftCardAdjustmentRequest = { "amount_money": SignedMoney; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "complimentary" | "balance_accidentally_decreased" | "support_issue" | "suspicious_activity" | "balance_accidentally_increased" | (string & {}); };
