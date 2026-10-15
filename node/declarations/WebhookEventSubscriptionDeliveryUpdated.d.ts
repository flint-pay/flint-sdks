
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';
import type { SubscriptionDelivery } from './SubscriptionDelivery.js';

export type WebhookEventSubscriptionDeliveryUpdated = (((({ "data"?: { "changed_by": "buyer" | "merchant" | "migration" | (string & {}); "delivery": SubscriptionDelivery; "open_renewal_order_id"?: string; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "changed_by": "buyer" | "merchant" | "migration" | (string & {}); "delivery": SubscriptionDelivery; "environment_grant_id": string; "environment_id"?: string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "open_renewal_order_id"?: string; "partner_app_install_id": string; "source_type": unknown; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription.delivery_updated" });
