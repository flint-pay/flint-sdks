
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';

export type WebhookEventInventoryReceiptCreated = (({ "data"?: {  [key: string]: unknown; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "inventory.receipt.created" });
