
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';
import type { SubscriptionDelivery } from './SubscriptionDelivery.js';

export type WebhookEventSubscriptionPaymentSucceeded = (((({ "data"?: { "delivery"?: SubscriptionDelivery; "line_items"?: Array<{  [key: string]: unknown; }>; "order_id": string; "payment_intent_id"?: string; "subscription_id": string; "subscription_plan_id"?: string; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "delivery"?: SubscriptionDelivery; "environment_grant_id": string; "environment_id"?: string; "line_items"?: Array<{  [key: string]: unknown; }>; "merchant_id": string; "mode": "test" | "live" | (string & {}); "order_id": string; "partner_app_install_id": string; "payment_intent_id"?: string; "source_type": unknown; "subscription_id": string; "subscription_plan_id"?: string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "subscription.payment_succeeded" });
