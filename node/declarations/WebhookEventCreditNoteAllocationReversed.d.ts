
import type { CreditNoteAllocation } from './CreditNoteAllocation.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventCreditNoteAllocationReversed = (((({ "data"?: CreditNoteAllocation; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "allocated_at": string; "amount_money": MoneyValue; "credit_note_allocation_id": string; "credit_note_id": string; "environment_grant_id": string; "environment_id"?: string; "idempotency_key": string; "invoice_id": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "reversed_at"?: string; "source_type": unknown; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "credit_note.allocation_reversed" });
