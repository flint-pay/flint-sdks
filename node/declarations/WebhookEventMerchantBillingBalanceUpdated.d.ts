
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { MoneyValue } from './MoneyValue.js';

export type WebhookEventMerchantBillingBalanceUpdated = (({ "data"?: { "available_credit_money": MoneyValue; "merchant_billing_balance_id": string; "observed_at": string; "outstanding_money": MoneyValue; }; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "merchant_billing_balance.updated" });
