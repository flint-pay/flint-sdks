
import type { MoneyValueInput } from './MoneyValueInput.js';

export type BuyerGiftCardTransactionInput = { /** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money"?: never; "balance_after_money": MoneyValueInput; "balance_before_money": MoneyValueInput; "gift_card_id": string; "gift_card_transaction_id": string; /** RFC3339 timestamp. Format: date-time. */ "posted_at": string | globalThis.Date; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "sequence": string; "transaction_type": "load" | "import" | "redeem" | "refund" | "refund_transfer" | "adjustment" | "cash_out" | "purchase_reversal" | "funding_loss_accepted" | "purchase_refund_recovery" | "purchase_refund_recovery_transfer"; };
