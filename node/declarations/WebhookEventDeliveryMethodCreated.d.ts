
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventDeliveryMethodCreated = (((({ "data"?: {  [key: string]: unknown; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "environment_grant_id": string; "environment_id"?: string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "source_type": unknown; [key: string]: unknown; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "delivery_method.created" });
