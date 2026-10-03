
import type { GiftCardMoneyInput } from './GiftCardMoneyInput.js';

export type CreateGiftCardCashOutRequestInput = { "amount_money": GiftCardMoneyInput; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id": string; };
