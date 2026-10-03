
import type { GiftCardMoney } from './GiftCardMoney.js';
import type { OrderGiftCardAllocation } from './OrderGiftCardAllocation.js';

export type OrderGiftCardEstimate = { "can_pay": boolean; "gift_card_money": GiftCardMoney; "gift_cards": Array<OrderGiftCardAllocation>; "is_reserved": boolean; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "order_revision": string; "processor_money": GiftCardMoney; };
