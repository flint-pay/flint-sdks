
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventSubscriptionUpdated = (((({ "data"?: { "changed_fields": Array<string>; "initiated_by": string; "previous_values": {  [key: string]: unknown; }; "resource_updated_at": string; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "changed_fields": Array<string>; "environment_grant_id": string; "environment_id"?: string; "initiated_by": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "previous_values": {  [key: string]: unknown; }; "resource_updated_at": string; "source_type": unknown; "subscription_id": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription.updated" });
