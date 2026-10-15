
import type { MerchantSubscriptionInvoice } from './MerchantSubscriptionInvoice.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';

export type WebhookEventMerchantSubscriptionInvoiceIssued = (({ "data"?: MerchantSubscriptionInvoice; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "merchant_subscription_invoice.issued" });
