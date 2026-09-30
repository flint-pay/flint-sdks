
import type { CreditNoteRefundRequest } from './CreditNoteRefundRequest.js';

export type IssueCreditNoteRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "refund"?: CreditNoteRefundRequest; };
