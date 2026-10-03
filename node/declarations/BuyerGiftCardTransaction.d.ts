
import type { GiftCardMoney } from './GiftCardMoney.js';

export type BuyerGiftCardTransaction = { "amount_money": GiftCardMoney; "balance_after_money": GiftCardMoney; "balance_before_money": GiftCardMoney; "gift_card_id": string; "gift_card_transaction_id": string; /** RFC3339 timestamp. Format: date-time. */ "posted_at": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "sequence": string; "transaction_type": "load" | "import" | "redeem" | "refund" | "refund_transfer" | "adjustment" | "cash_out" | "purchase_reversal" | "funding_loss_accepted" | "purchase_refund_recovery" | "purchase_refund_recovery_transfer" | (string & {}); };
