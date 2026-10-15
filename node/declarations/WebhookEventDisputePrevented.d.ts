
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';

export type WebhookEventDisputePrevented = (({ "data"?: { "dispute_id": string; [key: string]: unknown; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "dispute.prevented" });
