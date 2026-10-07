
import type { MoneyValue } from './MoneyValue.js';

export type CreateCreditNoteAllocationRequest = { /** Credit to apply, no more than the credit note's unallocated_money or the invoice's outstanding balance. */ "amount_money": MoneyValue; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; };
