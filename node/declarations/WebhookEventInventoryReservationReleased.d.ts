
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';

export type WebhookEventInventoryReservationReleased = (({ "data"?: {  [key: string]: unknown; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "inventory.reservation.released" });
