
import type { SignedMoney } from './SignedMoney.js';

export type PayoutEntry = { /** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money": SignedMoney; "balance_transaction_id": string; /** The balance transaction occurrence instant. Format: date-time. */ "occurred_at": string; "payout_entry_id": string; "type": "payment" | "refund" | "dispute" | "dispute_reversal" | "return" | "recovery" | "payout" | "payout_failure" | "payout_cancellation" | "payout_reversal" | "payout_advance" | "payout_advance_funding" | "reserve_hold" | "reserve_release" | "payout_hold" | "payout_hold_release" | "adjustment" | "merchant_billing_payment" | "merchant_billing_payment_reversal" | (string & {}); };
