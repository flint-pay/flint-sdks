
import type { GiftCardRedemption } from './GiftCardRedemption.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventGiftCardRedemptionUpdated = (((({ "data"?: GiftCardRedemption; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "capture_mode": "automatic" | "manual" | (string & {}); "captured_money": MoneyValue; "created_at": string; "environment_grant_id": string; "environment_id"?: string; "expires_at": string; "external_reference_id": string; "gift_card_id": string; "gift_card_redemption_id": string; "idempotency_key": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "order_id": string | null; "partner_app_install_id": string; "refunded_money": MoneyValue; "remaining_refundable_money": MoneyValue; "requested_money": MoneyValue; "reserved_money": MoneyValue; "source_type": unknown; "status": "reserved" | "captured" | "canceled" | "expired" | (string & {}); "updated_at": string; "version": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "gift_card_redemption.updated" });
