
import type { GiftCardMoneyInput } from './GiftCardMoneyInput.js';

export type BuyerGiftCardTransactionInput = { "amount_money": GiftCardMoneyInput; "balance_after_money": GiftCardMoneyInput; "balance_before_money": GiftCardMoneyInput; "gift_card_id": string; "gift_card_transaction_id": string; /** RFC3339 timestamp. Format: date-time. */ "posted_at": string | globalThis.Date; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "sequence": string; "transaction_type": "load" | "import" | "redeem" | "refund" | "refund_transfer" | "adjustment" | "cash_out" | "purchase_reversal" | "funding_loss_accepted" | "purchase_refund_recovery" | "purchase_refund_recovery_transfer"; };
