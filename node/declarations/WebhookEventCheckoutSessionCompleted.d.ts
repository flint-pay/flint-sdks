
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventCheckoutSessionCompleted = (((({ "data"?: { "checkout_session_id": string; "order_id": string; "payment_intent_id"?: string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "checkout_session_id": string; "environment_grant_id": string; "environment_id"?: string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "order_id": string; "partner_app_install_id": string; "payment_intent_id"?: string; "source_type": unknown; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "checkout_session.completed" });
