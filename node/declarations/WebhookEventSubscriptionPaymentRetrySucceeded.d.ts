
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';
import type { SubscriptionPaymentRetry } from './SubscriptionPaymentRetry.js';

export type WebhookEventSubscriptionPaymentRetrySucceeded = (((({ "data"?: { "object": SubscriptionPaymentRetry; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "environment_grant_id": string; "environment_id"?: string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "object": SubscriptionPaymentRetry; "partner_app_install_id": string; "source_type": unknown; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription_payment_retry.succeeded" });
