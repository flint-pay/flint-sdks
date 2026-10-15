
import type { BalanceTransaction } from './BalanceTransaction.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';

export type WebhookEventBalanceTransactionUpdated = (({ "data"?: BalanceTransaction; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>) & { "event_type": "balance_transaction.updated" });
