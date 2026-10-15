
import type { GiftCard } from './GiftCard.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventGiftCardCreated = (((({ "data"?: GiftCard; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "available_money": MoneyValue; "balance_money": MoneyValue; "created_at": string; "currency": "USD" | (string & {}); "customer_id": string | null; "environment_grant_id": string; "environment_id"?: string; "external_reference_id": string | null; "gift_card_id": string; "last_characters": string; "last_loaded_at": string | null; "last_redeemed_at": string | null; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "reserved_money": MoneyValue; "source_type": unknown; "status": "pending" | "active" | "frozen" | "closed" | (string & {}); "supported_actions": Array<"freeze" | "unfreeze" | "close" | (string & {})>; "updated_at": string; "version": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "gift_card.created" });
