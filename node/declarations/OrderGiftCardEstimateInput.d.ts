
import type { GiftCardMoneyInput } from './GiftCardMoneyInput.js';
import type { OrderGiftCardAllocationInput } from './OrderGiftCardAllocationInput.js';

export type OrderGiftCardEstimateInput = { "can_pay": boolean; "gift_card_money": GiftCardMoneyInput; "gift_cards": Array<OrderGiftCardAllocationInput>; "is_reserved": boolean; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "order_revision": string; "processor_money": GiftCardMoneyInput; };
