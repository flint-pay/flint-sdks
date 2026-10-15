
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventSubscriptionCycleSkipped = (((({ "data"?: { "initiated_by": "buyer" | "merchant" | "integration" | (string & {}); "next_billing_at": string; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "environment_grant_id": string; "environment_id"?: string; "initiated_by": "buyer" | "merchant" | "integration" | (string & {}); "merchant_id": string; "mode": "test" | "live" | (string & {}); "next_billing_at": string; "partner_app_install_id": string; "source_type": unknown; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription.cycle_skipped" });
