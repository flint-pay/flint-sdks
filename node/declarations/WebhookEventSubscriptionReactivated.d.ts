
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventSubscriptionReactivated = (((({ "data"?: { "initiated_by": "buyer" | "merchant" | (string & {}); "resource_updated_at": string; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "environment_grant_id": string; "environment_id"?: string; "initiated_by": "buyer" | "merchant" | (string & {}); "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "resource_updated_at": string; "source_type": unknown; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription.reactivated" });
