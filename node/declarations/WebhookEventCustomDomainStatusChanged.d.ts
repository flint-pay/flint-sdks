
import type { CustomDomainStatusChange } from './CustomDomainStatusChange.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';

export type WebhookEventCustomDomainStatusChanged = (({ "data"?: { "object": CustomDomainStatusChange; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "custom_domain.status_changed" });
