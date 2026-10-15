
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';
import type { PaymentIntent } from './PaymentIntent.js';

export type WebhookEventPaymentIntentProcessing = (((({ "data"?: { "payment_intent": PaymentIntent; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "environment_grant_id": string; "environment_id"?: string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "payment_intent": PaymentIntent; "source_type": unknown; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "payment_intent.processing" });
