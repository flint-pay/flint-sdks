
import type { CreditNoteRefundRequestInput } from './CreditNoteRefundRequestInput.js';

export type IssueCreditNoteRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "refund"?: CreditNoteRefundRequestInput; };
