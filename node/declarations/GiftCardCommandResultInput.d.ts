
import type { GiftCardInput } from './GiftCardInput.js';
import type { GiftCardLoadInput } from './GiftCardLoadInput.js';
import type { GiftCardNotificationInput } from './GiftCardNotificationInput.js';
import type { GiftCardRedemptionInput } from './GiftCardRedemptionInput.js';

export type GiftCardCommandResultInput = { "code"?: string; "gift_card"?: GiftCardInput; "gift_card_load"?: GiftCardLoadInput; "gift_card_notification"?: GiftCardNotificationInput; "gift_card_redemption"?: GiftCardRedemptionInput; "gift_card_transaction_ids": Array<string>; /** RFC3339 timestamp. Format: date-time. */ "secret_recovery_expires_at"?: string | globalThis.Date; };
