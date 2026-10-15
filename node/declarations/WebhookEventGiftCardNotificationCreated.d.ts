
import type { GiftCardNotification } from './GiftCardNotification.js';
import type { GiftCardNotificationDelivery } from './GiftCardNotificationDelivery.js';
import type { GiftCardNotificationRecipient } from './GiftCardNotificationRecipient.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventGiftCardNotificationCreated = (((({ "data"?: GiftCardNotification; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "created_at": string; "delivery"?: GiftCardNotificationDelivery; "environment_grant_id": string; "environment_id"?: string; "gift_card_id": string; "gift_card_notification_id": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "recipient": GiftCardNotificationRecipient; "resend_of_notification_id"?: string; "sent_at"?: string; "source_type": unknown; "status": "scheduled" | "queued" | "sending" | "sent" | "failed" | "unconfirmed" | "bounced" | "canceled" | (string & {}); "updated_at": string; "version": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "gift_card_notification.created" });
