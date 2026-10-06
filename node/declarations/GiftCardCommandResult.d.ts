
import type { GiftCard } from './GiftCard.js';
import type { GiftCardLoad } from './GiftCardLoad.js';
import type { GiftCardNotification } from './GiftCardNotification.js';
import type { GiftCardRedemption } from './GiftCardRedemption.js';

export type GiftCardCommandResult = { "code"?: string; "gift_card"?: GiftCard; "gift_card_load"?: GiftCardLoad; "gift_card_notification"?: GiftCardNotification; "gift_card_redemption"?: GiftCardRedemption; "gift_card_transaction_ids": Array<string>; /** RFC3339 timestamp. Format: date-time. */ "secret_recovery_expires_at"?: string; };
