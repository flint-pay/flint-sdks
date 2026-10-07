
import type { MoneyValue } from './MoneyValue.js';
import type { SignedMoney } from './SignedMoney.js';

export type BuyerGiftCardTransaction = { /** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money": SignedMoney; "balance_after_money": MoneyValue; "balance_before_money": MoneyValue; "gift_card_id": string; "gift_card_transaction_id": string; /** RFC3339 timestamp. Format: date-time. */ "posted_at": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "sequence": string; "transaction_type": "load" | "import" | "redeem" | "refund" | "refund_transfer" | "adjustment" | "cash_out" | "purchase_reversal" | "funding_loss_accepted" | "purchase_refund_recovery" | "purchase_refund_recovery_transfer" | (string & {}); };
