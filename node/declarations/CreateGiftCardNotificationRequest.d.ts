
import type { GiftCardNotificationRecipient } from './GiftCardNotificationRecipient.js';

export type CreateGiftCardNotificationRequest = { "gift_card_id": string; "recipient": GiftCardNotificationRecipient; "resend_of_notification_id"?: string; };
