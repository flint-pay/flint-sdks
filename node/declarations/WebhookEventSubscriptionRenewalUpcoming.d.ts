
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';
import type { SubscriptionDelivery } from './SubscriptionDelivery.js';

export type WebhookEventSubscriptionRenewalUpcoming = (((({ "data"?: { "delivery"?: SubscriptionDelivery; "next_billing_at": string; "resource_updated_at": string; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "delivery"?: SubscriptionDelivery; "environment_grant_id": string; "environment_id"?: string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "next_billing_at": string; "partner_app_install_id": string; "resource_updated_at": string; "source_type": unknown; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription.renewal_upcoming" });
