
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';
import type { SubscriptionDeliveryHold } from './SubscriptionDeliveryHold.js';

export type WebhookEventSubscriptionDeliveryPauseUpcoming = (((({ "data"?: { "customer_id"?: string; "delivery_hold": SubscriptionDeliveryHold; "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {}); "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "customer_id"?: string; "delivery_hold": SubscriptionDeliveryHold; "environment_grant_id": string; "environment_id"?: string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {}); "source_type": unknown; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription.delivery_pause_upcoming" });
