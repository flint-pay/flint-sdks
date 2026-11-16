import type { DisputeResponseSessionStripeAccountSession, DisputesAcceptParams } from './types-25.js';
import type { InputValue } from '../runtime.js';
import type { MerchantAccountSessionCreateRequestInput, MerchantAccountSessionRefreshRequestInput, Merchant } from './types-40.js';
import type { MoneyValue, MoneyValuePreviousAttributes, ModifierPreviousAttributes } from './types-42.js';
import type { ResponseMeta } from './types-60.js';
import type { CapabilityReadiness, CapabilityReadinessPreviousAttributes } from './types-5.js';
import type {
    ReadinessAxis,
    ReadinessRequirements,
    ReadinessAxisPreviousAttributes,
    ReadinessRequirementsPreviousAttributes
} from './types-58.js';
import type { AddressPreviousAttributes } from './types-0.js';
import type { ImageAttachmentPreviousAttributes } from './types-30.js';
import type { PartnerWebhookEnvelope } from './types-49.js';
import type { WebhookMerchant } from './types-77.js';
import type { PlatformFeeCap } from './types-54.js';
import type { CreateMerchantSignupRequestInput } from './types-11.js';
import type { VerifyMerchantSignupRequestInput } from './types-76.js';
import type { UpdateMerchantRequestInput } from './types-74.js';
import type { TextModifierConfig, TextModifierConfigPreviousAttributes } from './types-72.js';
/**
 * Stripe Connect initialization data for a merchant account session: the account session,
 * publishable key, and authorized components.
 */
export type MerchantAccountSessionStripe = {
    /**
     * Account session authority for initializing Stripe Connect in the browser. The account
     * session authority for initializing Stripe Connect in the browser, including the client
     * secret.
     */
    "account_session": DisputeResponseSessionStripeAccountSession;
    /**
     * Authorized Stripe component names and collection options to apply when mounting each
     * component. [] (Value): {@link MerchantAccountSessionStripeComponent}. One embedded component
     * a merchant account session authorizes, with the collection options to apply to it.
     */
    "components": Array<MerchantAccountSessionStripeComponent>;
    /** Stripe publishable key to pass as publishableKey to loadConnectAndInitialize. */
    "publishable_key": string;
};
/**
 * Requirement collection options to apply when mounting one embedded component: field breadth,
 * future requirements, and any targeted requirements.
 */
export type MerchantAccountSessionStripeCollectionOptions = {
    /**
     * Requirement collection breadth to pass as fields to setCollectionOptions. Value enum:
     * "currently_due", "eventually_due".
     */
    "fields": "currently_due" | "eventually_due" | (string & {});
    /**
     * Whether to collect future requirements. Pass this value as futureRequirements to
     * setCollectionOptions. Value enum: "omit", "include".
     */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Targeted requirement collection restriction to pass as requirements to setCollectionOptions.
     * Omitted when collection is not targeted. The Stripe requirement paths to collect exclusively
     * when a session's targeting is `targeted`.
     */
    "requirements"?: MerchantAccountSessionStripeRequirements;
};
/**
 * One embedded component a merchant account session authorizes, with the collection options to
 * apply to it.
 */
export type MerchantAccountSessionStripeComponent = {
    /**
     * Collection instructions for a policy-aware component. Omitted for other components. Map
     * future_requirements to futureRequirements when calling setCollectionOptions. Requirement
     * collection options to apply when mounting one embedded component: field breadth, future
     * requirements, and any targeted requirements.
     */
    "collection_options"?: MerchantAccountSessionStripeCollectionOptions;
    /**
     * Stripe component name authorized by this session. tax_documents uses the Stripe name
     * documents. Convert underscores to hyphens when calling Connect.create. Value enum:
     * "account_onboarding", "account_management", "payouts", "balances", "documents",
     * "notification_banner", "payments".
     */
    "component": "account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "documents"
        | "notification_banner"
        | "payments"
        | (string & {});
};
/** The Stripe requirement paths to collect exclusively when a session's targeting is `targeted`. */
export type MerchantAccountSessionStripeRequirements = {
    /**
     * Stripe requirement paths to collect exclusively when effective_policy.targeting is targeted.
     * They come from the targeted_requirements you sent or from Flint's remediation
     * recommendation. [] (Value): string.
     */
    "only": Array<string>;
};
export type MerchantAccountSessionsCreateParams = (InputValue<MerchantAccountSessionCreateRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type MerchantAccountSessionsRefreshParams = (InputValue<MerchantAccountSessionRefreshRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/** Current Flint merchant billing balance for one billing account and currency. */
export type MerchantBillingBalance = {
    /**
     * Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application
     * lowers both amounts and records a credit_applied entry. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "available_credit_money": MoneyValue;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Stable identifier for this billing account and currency balance projection. Example:
     * "mbbal_01KEZF7C002TWWZA70R4DRVJC9".
     */
    "merchant_billing_balance_id": string;
    /**
     * RFC3339 timestamp for the balance snapshot. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "observed_at": string;
    /**
     * What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this
     * amount only when Flint applies it, which records a credit_applied entry. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when
     * nothing is past due. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "past_due_at"?: string;
    /**
     * Amount that is past its due date and still unpaid. Zero when nothing is past due. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "past_due_money": MoneyValue;
    /**
     * Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC
     * timestamp. The hold can begin later than this while a collection is in progress. Payouts are
     * actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`.
     * Omitted when no hold is scheduled, for example when the only past-due amounts never hold
     * payouts. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "payout_hold_at"?: string;
};
/** A list of `MerchantBillingBalance` objects. */
export type MerchantBillingBalanceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantBillingBalance}. Current Flint merchant billing balance for one billing account and
     * currency.
     */
    "data": Array<MerchantBillingBalance>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `MerchantBillingBalance` data. */
export type MerchantBillingBalanceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Current Flint merchant
     * billing balance for one billing account and currency.
     */
    "data": MerchantBillingBalance;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantBillingBalanceUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_credit_money": MoneyValue;
            "currency": string;
            "merchant_billing_balance_id": string;
            "observed_at": string;
            "outstanding_money": MoneyValue;
            "past_due_at"?: string;
            "past_due_money": MoneyValue;
            "payout_hold_at"?: string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available_credit_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "currency"?: ((string) | (null));
            "merchant_billing_balance_id"?: ((string) | (null));
            "observed_at"?: ((string) | (null));
            "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "past_due_at"?: ((string) | (null));
            "past_due_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "payout_hold_at"?: ((string) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "merchant_billing_balance.updated";
})
    & {
    "event_type": "merchant_billing_balance.updated";
});
export type MerchantBillingBalancesGetParams = {};
export type MerchantBillingBalancesListParams = {};
export type MerchantBillingEntriesListParams = {
    /**
     * Filter by one or more merchant billing entry types. Repeat or comma-separate values. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "event_fee",
     * "invoice", "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off". Value
     * enum: "event_fee", "invoice", "custom_domain", "custom_domain_collection", "correction",
     * "credit_issued", "credit_applied", "credit_refunded", "collection", "collection_reversal",
     * "write_off". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "event_fee",
     * "invoice", "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off".
     * anyOf[1][] (Value): string. Value enum: "event_fee", "invoice", "custom_domain",
     * "custom_domain_collection", "correction", "credit_issued", "credit_applied",
     * "credit_refunded", "collection", "collection_reversal", "write_off". anyOf[2] (Value):
     * string. Value enum: "event_fee", "invoice", "custom_domain", "custom_domain_collection",
     * "correction", "credit_issued", "credit_applied", "credit_refunded", "collection",
     * "collection_reversal", "write_off".
     */
    "type"?: InputValue<("event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off")
        | readonly ("event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off")[]>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by Flint payment intent ID. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Filter by Flint dispute ID. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: InputValue<string>;
    /**
     * Filter by Flint merchant billing invoice ID. pattern: ^msinv_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "msinv_01KEZF7C00MB754KPEPACGRMNP".
     */
    "merchant_billing_invoice_id"?: InputValue<string>;
    /**
     * Filter by Flint balance transaction ID. pattern: ^btxn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "balance_transaction_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
};
/** An immutable merchant billing charge, credit, collection, correction, or write-off. */
export type MerchantBillingEntry = {
    /**
     * Signed change in available billing credit. credit_issued increases it; credit_applied and
     * credit_refunded decrease it. Other entry types do not change it. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "available_credit_effect_money": MoneyValue;
    /**
     * Balance transaction for this collection or collection reversal, when present. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "balance_transaction_id"?: string;
    /**
     * When Flint inserted the entry. Never changes and is never backdated from occurred_at.
     * Overlap created_after passes by a few minutes and deduplicate by merchant_billing_entry_id
     * to pick up late commits. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Human-readable description of the billing event. */
    "description": string;
    /**
     * Related dispute, when the entry is associated with a dispute. Example:
     * "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: string;
    /**
     * Event fee category. Present only for event_fee entries. card_dispute and
     * card_dispute_countered apply only when Flint paid the processor's dispute fee; a fee already
     * deducted from your balance is recorded on the dispute balance transaction instead. Value
     * enum: "bank_verification", "failed_ach_payment", "ach_dispute", "card_dispute",
     * "card_dispute_countered", "external_paid_order_overage".
     */
    "event_fee_type"?: "bank_verification"
        | "failed_ach_payment"
        | "ach_dispute"
        | "card_dispute"
        | "card_dispute_countered"
        | "external_paid_order_overage"
        | (string & {});
    /**
     * Stable entry ID. Re-reading an entry returns the same values. Example:
     * "mbe_01KEZF7C00S06A5G1B4867TF78".
     */
    "merchant_billing_entry_id": string;
    /**
     * Related invoice issued by Flint, when applicable. Example:
     * "msinv_01KEZF7C00MB754KPEPACGRMNP".
     */
    "merchant_billing_invoice_id"?: string;
    /**
     * Signed outstanding effect minus the available credit effect. Charges and collection_reversal
     * are positive; credit_issued, collection, custom_domain_collection, and write_off are
     * negative; credit_refunded is positive; credit_applied is zero; correction may be positive or
     * negative. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "net_billing_effect_money": MoneyValue;
    /**
     * When the billing event happened. An entry can be recorded after entries that occurred later.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at": string;
    /**
     * Signed change in the amount owed Flint. Charges (event_fee, invoice, custom_domain) and
     * collection_reversal increase it; credit_applied, collection, custom_domain_collection, and
     * write_off decrease it; correction may increase or decrease it. Credit issuance and refund do
     * not change it. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_effect_money": MoneyValue;
    /**
     * Related payment intent, when the entry is associated with a payment. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Entry corrected, credited, collected, reversed, or written off by this entry, when
     * applicable. Example: "mbe_01KEZF7C00S06A5G1B4867TF78".
     */
    "related_merchant_billing_entry_id"?: string;
    /**
     * The billing event represented by this entry. Value enum: "event_fee", "invoice",
     * "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off".
     */
    "type": "event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off"
        | (string & {});
};
/** A page of `MerchantBillingEntry` objects. */
export type MerchantBillingEntryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantBillingEntry}. An immutable merchant billing charge, credit, collection, correction,
     * or write-off.
     */
    "data": Array<MerchantBillingEntry>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A Flint invoice for the merchant's Flint subscription. */
export type MerchantBillingInvoice = {
    /**
     * Credit applied to the invoice: the sum of its credit line items. Never more than
     * subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "applied_credit_money": MoneyValue;
    /** When Flint created the invoice. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** When payment of the invoice is due. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "due_at": string;
    /**
     * Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001},
     * sequential per billing account; existing numbers are retained.
     */
    "invoice_number": string;
    /** When Flint issued the invoice. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "issued_at": string;
    /**
     * Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to
     * applied_credit_money. [] (Value): {@link MerchantBillingInvoiceLineItem}. One line on a
     * merchant billing invoice, either a subscription charge or a credit, with quantity, unit
     * price, and total.
     */
    "line_items": Array<MerchantBillingInvoiceLineItem>;
    /** Stable identifier of the invoice. Example: "msinv_01KEZF7C00MB754KPEPACGRMNP". */
    "merchant_billing_invoice_id": string;
    /**
     * Part of total_money Flint still has to collect. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * When the invoice was paid. Removed if a reversed collection reopens it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "paid_at"?: string;
    /**
     * Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open
     * and marks it paid once collected; a reversed collection returns it to open, and written_off
     * means Flint stopped collecting it. Value enum: "open", "paid", "written_off".
     */
    "status": "open" | "paid" | "written_off" | (string & {});
    /**
     * Sum of the subscription line items, before credit. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * What the invoice charges: subtotal_money minus applied_credit_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type MerchantBillingInvoiceIssuedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_credit_money": MoneyValue;
            "created_at": string;
            "due_at": string;
            "invoice_number": string;
            "issued_at": string;
            "line_items": Array<MerchantBillingInvoiceLineItem>;
            "merchant_billing_invoice_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "period_end_at": string;
            "period_start_at": string;
            "status": "open" | "paid" | "written_off" | (string & {});
            "subtotal_money": MoneyValue;
            "total_money": MoneyValue;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "applied_credit_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "due_at"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "line_items"?: ((Array<MerchantBillingInvoiceLineItemPreviousAttributes>) | (null));
            "merchant_billing_invoice_id"?: ((string) | (null));
            "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "paid_at"?: ((string) | (null));
            "period_end_at"?: ((string) | (null));
            "period_start_at"?: ((string) | (null));
            "status"?: (("open" | "paid" | "written_off" | (string & {})) | (null));
            "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "merchant_billing_invoice.issued";
})
    & {
    "event_type": "merchant_billing_invoice.issued";
});
/**
 * One line on a merchant billing invoice, either a subscription charge or a credit, with quantity,
 * unit price, and total.
 */
export type MerchantBillingInvoiceLineItem = {
    /**
     * When Flint added this line to the invoice. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Stable identifier of this line item. Example: "msinvl_01KEZF7C00YB825JWZ87C5HDF0". */
    "merchant_billing_invoice_line_item_id": string;
    /** Name of the subscription charge or credit. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Whether the line adds a subscription charge or applies credit. Value enum: "subscription",
     * "credit".
     */
    "type": "subscription" | "credit" | (string & {});
    /**
     * Unsigned price of one unit. total_money is quantity times this amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
export type MerchantBillingInvoiceLineItemPreviousAttributes = {
    /**
     * When Flint added this line to the invoice. anyOf[1] (Value): string. When Flint added this
     * line to the invoice. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
     * null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Stable identifier of this line item. anyOf[1] (Value): string. Stable identifier of this
     * line item. Example: "msinvl_01KEZF7C00YB825JWZ87C5HDF0". anyOf[2] (Value): null.
     */
    "merchant_billing_invoice_line_item_id"?: ((string) | (null));
    /**
     * Name of the subscription charge or credit. anyOf[1] (Value): string. Name of the
     * subscription charge or credit. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Unsigned line total, calculated as quantity multiplied by unit_price_money. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
    /**
     * Whether the line adds a subscription charge or applies credit. Value enum: "subscription",
     * "credit". anyOf[1] (Value): string. Whether the line adds a subscription charge or applies
     * credit. Value enum: "subscription", "credit". anyOf[2] (Value): null.
     */
    "type"?: (("subscription" | "credit" | (string & {})) | (null));
    /**
     * Unsigned price of one unit. total_money is quantity times this amount. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
};
/** A page of `MerchantBillingInvoice` objects. */
export type MerchantBillingInvoiceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantBillingInvoice}. A Flint invoice for the merchant's Flint subscription.
     */
    "data": Array<MerchantBillingInvoice>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `MerchantBillingInvoice` data. */
export type MerchantBillingInvoiceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A Flint invoice for the
     * merchant's Flint subscription.
     */
    "data": MerchantBillingInvoice;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantBillingInvoiceUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_credit_money": MoneyValue;
            "created_at": string;
            "due_at": string;
            "invoice_number": string;
            "issued_at": string;
            "line_items": Array<MerchantBillingInvoiceLineItem>;
            "merchant_billing_invoice_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "period_end_at": string;
            "period_start_at": string;
            "status": "open" | "paid" | "written_off" | (string & {});
            "subtotal_money": MoneyValue;
            "total_money": MoneyValue;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "applied_credit_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "due_at"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "line_items"?: ((Array<MerchantBillingInvoiceLineItemPreviousAttributes>) | (null));
            "merchant_billing_invoice_id"?: ((string) | (null));
            "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "paid_at"?: ((string) | (null));
            "period_end_at"?: ((string) | (null));
            "period_start_at"?: ((string) | (null));
            "status"?: (("open" | "paid" | "written_off" | (string & {})) | (null));
            "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "merchant_billing_invoice.updated";
})
    & {
    "event_type": "merchant_billing_invoice.updated";
});
export type MerchantBillingInvoicesGetParams = {};
export type MerchantBillingInvoicesListParams = {
    /**
     * Filter by one or more merchant billing invoice statuses. Values are trimmed and deduplicated
     * in first-seen order; empty or unknown entries are rejected. Values within this filter are
     * ORed; separate filters are ANDed. [] enum: "open", "paid", "written_off". Value enum:
     * "open", "paid", "written_off". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "open", "paid", "written_off". anyOf[1][] (Value): string. Value enum: "open", "paid",
     * "written_off". anyOf[2] (Value): string. Value enum: "open", "paid", "written_off".
     */
    "status"?: InputValue<("open" | "paid" | "written_off") | readonly ("open" | "paid" | "written_off")[]>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type MerchantGetParams = DisputesAcceptParams;
/**
 * A merchant's readiness to accept payments and receive payouts, with per-capability status and
 * outstanding requirements.
 */
export type MerchantReadiness = {
    /**
     * Readiness of each payment and money movement capability, with its own status, requirements,
     * and next actions. [] (Value): {@link CapabilityReadiness}. Merchant capability readiness for
     * a payment or money movement capability.
     */
    "capabilities": Array<CapabilityReadiness>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "observed_at": string;
    /**
     * Readiness to accept payments. Readiness for one area of a merchant account, with its
     * `status`, the reason for it, and the actions that would advance it.
     */
    "payments": ReadinessAxis;
    /**
     * Readiness to receive payouts. Readiness for one area of a merchant account, with its
     * `status`, the reason for it, and the actions that would advance it.
     */
    "payouts": ReadinessAxis;
    /**
     * Account information still needed, grouped by when it is due. Each capability also lists the
     * requirements that affect it. Account information requirements for a merchant, grouped as
     * currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
};
export type MerchantReadinessPreviousAttributes = {
    /**
     * Readiness of each payment and money movement capability, with its own status, requirements,
     * and next actions. anyOf[1] (Value): Array of {@link CapabilityReadinessPreviousAttributes}.
     * Readiness of each payment and money movement capability, with its own status, requirements,
     * and next actions. anyOf[1][] (Value): {@link CapabilityReadinessPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "capabilities"?: ((Array<CapabilityReadinessPreviousAttributes>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "observed_at"?: ((string) | (null));
    /**
     * Readiness to accept payments. anyOf[1] (Value): {@link ReadinessAxisPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "payments"?: ((ReadinessAxisPreviousAttributes) | (null) | (unknown));
    /**
     * Readiness to receive payouts. anyOf[1] (Value): {@link ReadinessAxisPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "payouts"?: ((ReadinessAxisPreviousAttributes) | (null) | (unknown));
    /**
     * Account information still needed, grouped by when it is due. Each capability also lists the
     * requirements that affect it. anyOf[1] (Value): {@link
     * ReadinessRequirementsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "requirements"?: ((ReadinessRequirementsPreviousAttributes) | (null) | (unknown));
};
export type MerchantReadinessUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookMerchant;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_pinned_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "business_name"?: ((string) | (null));
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "email"?: ((string | null) | (null) | (unknown));
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "phone"?: ((string) | (null));
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            "support_email"?: ((string) | (null));
            "support_phone"?: ((string) | (null));
            "support_url"?: ((string) | (null));
            "timezone"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "website_url"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "merchant.readiness_updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookMerchant;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_pinned_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "business_name"?: ((string) | (null));
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "email"?: ((string | null) | (null) | (unknown));
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "phone"?: ((string) | (null));
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            "support_email"?: ((string) | (null));
            "support_phone"?: ((string) | (null));
            "support_url"?: ((string) | (null));
            "timezone"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "website_url"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "merchant.readiness_updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "merchant.readiness_updated";
});
/**
 * The `merchant.readiness_updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type MerchantReadinessUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookMerchant}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `banners`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.address (Optional): {@link
     * AddressPreviousAttributes} or null. The merchant's business address.
     * previous_attributes.address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.address.anyOf[2] (Value): null. previous_attributes.api_version
     * (Optional): string or null. Default API version for requests without a Flint-Version header.
     * Shared across live and test environments. previous_attributes.api_version.anyOf[1] (Value):
     * string. Default API version for requests without a Flint-Version header. Shared across live
     * and test environments. previous_attributes.api_version.anyOf[2] (Value): null.
     * previous_attributes.api_version_changed_at (Optional): string or null. When the merchant's
     * default API version last changed. previous_attributes.api_version_changed_at.anyOf[1]
     * (Value): string. When the merchant's default API version last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.api_version_changed_at.anyOf[2]
     * (Value): null. previous_attributes.api_version_pinned_at (Optional): string or null. When
     * the merchant's default API version was first set.
     * previous_attributes.api_version_pinned_at.anyOf[1] (Value): string. When the merchant's
     * default API version was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_pinned_at.anyOf[2] (Value): null.
     * previous_attributes.api_version_previous (Optional): string or null. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[1] (Value): string. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[2] (Value): null.
     * previous_attributes.api_version_rollback_expires_at (Optional): string or null. When the
     * 72-hour rollback offer expires. Explicit changes to any supported version remain available
     * afterward. previous_attributes.api_version_rollback_expires_at.anyOf[1] (Value): string.
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_rollback_expires_at.anyOf[2] (Value): null.
     * previous_attributes.business_name (Optional): string or null. Business name buyers see on
     * checkout, payment links, and receipts. Once the merchant starts verification, it stays in
     * sync with the business name on the live Stripe account: a change on either side applies, and
     * the latest change wins. previous_attributes.business_name.anyOf[1] (Value): string. Business
     * name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins.
     * previous_attributes.business_name.anyOf[2] (Value): null. previous_attributes.business_type
     * (Optional): string or null. Merchant's business type. - `other`: A business type Flint does
     * not map yet. Value enum: "individual", "company", "non_profit", "government_entity",
     * "other". previous_attributes.business_type.anyOf[1] (Value): string. Merchant's business
     * type. - `other`: A business type Flint does not map yet. Value enum: "individual",
     * "company", "non_profit", "government_entity", "other".
     * previous_attributes.business_type.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.email (Optional):
     * string or null or null. The account's contact email address. A new account starts with the
     * sign-up email. `null` when none is set. previous_attributes.email.anyOf[1] (Value): string
     * or null. The account's contact email address. A new account starts with the sign-up email.
     * `null` when none is set. previous_attributes.email.anyOf[2] (Value): null.
     * previous_attributes.icon (Optional): {@link ImageAttachmentPreviousAttributes} or null. A
     * square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser
     * tabs and compact headers. previous_attributes.icon.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.icon.anyOf[2] (Value): null.
     * previous_attributes.logo (Optional): {@link ImageAttachmentPreviousAttributes} or null. The
     * merchant's public brand mark. previous_attributes.logo.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.logo.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Stable identifier of the
     * merchant. previous_attributes.merchant_id.anyOf[1] (Value): string. Stable identifier of the
     * merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.phone (Optional): string or null. The account's contact phone number, in
     * international format such as +12125551234. previous_attributes.phone.anyOf[1] (Value):
     * string. The account's contact phone number, in international format such as +12125551234.
     * previous_attributes.phone.anyOf[2] (Value): null. previous_attributes.readiness (Optional):
     * {@link MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept
     * payments and receive payouts, and what is still needed.
     * previous_attributes.readiness.anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}.
     * previous_attributes.readiness.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Whether Flint lets the account operate. `readiness` says whether payments
     * and payouts are available. Value enum: "active", "suspended", "restricted", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether Flint lets the account operate.
     * `readiness` says whether payments and payouts are available. Value enum: "active",
     * "suspended", "restricted", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.support_email (Optional): string or null. Support email address shown to
     * buyers, for example on receipts and checkout. previous_attributes.support_email.anyOf[1]
     * (Value): string. Support email address shown to buyers, for example on receipts and
     * checkout. previous_attributes.support_email.anyOf[2] (Value): null.
     * previous_attributes.support_phone (Optional): string or null. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[1] (Value): string. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[2] (Value): null. previous_attributes.support_url
     * (Optional): string or null. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[1] (Value): string. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[2] (Value): null. previous_attributes.timezone
     * (Optional): string or null. Business IANA time zone, such as America/New_York. Used for
     * invoice deadlines, new locations, notifications, and reporting when a request omits its time
     * zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox
     * Locations do not set the business time zone. Existing resources keep their saved time zone.
     * previous_attributes.timezone.anyOf[1] (Value): string. Business IANA time zone, such as
     * America/New_York. Used for invoice deadlines, new locations, notifications, and reporting
     * when a request omits its time zone. Omitted when unset; UTC then applies until the first
     * live Location sets it. Sandbox Locations do not set the business time zone. Existing
     * resources keep their saved time zone. previous_attributes.timezone.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Merchant version. Profile,
     * status, and API version changes advance this version, including business name and business
     * type changes synced from the payment provider. Readiness updates alone do not.
     * previous_attributes.version.anyOf[1] (Value): integer. Merchant version. Profile, status,
     * and API version changes advance this version, including business name and business type
     * changes synced from the payment provider. Readiness updates alone do not. Format: int64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     * previous_attributes.website_url (Optional): string or null. The business's website.
     * previous_attributes.website_url.anyOf[1] (Value): string. The business's website.
     * previous_attributes.website_url.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `banners`. */
        "object": WebhookMerchant;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. address (Optional): {@link
         * AddressPreviousAttributes} or null. The merchant's business address. address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. address.anyOf[2] (Value): null. api_version
         * (Optional): string or null. Default API version for requests without a Flint-Version
         * header. Shared across live and test environments. api_version.anyOf[1] (Value): string.
         * Default API version for requests without a Flint-Version header. Shared across live and
         * test environments. api_version.anyOf[2] (Value): null. api_version_changed_at
         * (Optional): string or null. When the merchant's default API version last changed.
         * api_version_changed_at.anyOf[1] (Value): string. When the merchant's default API version
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_changed_at.anyOf[2] (Value): null. api_version_pinned_at (Optional): string
         * or null. When the merchant's default API version was first set.
         * api_version_pinned_at.anyOf[1] (Value): string. When the merchant's default API version
         * was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_pinned_at.anyOf[2] (Value): null. api_version_previous (Optional): string or
         * null. Previous API version, present while a supported rollback is available.
         * api_version_previous.anyOf[1] (Value): string. Previous API version, present while a
         * supported rollback is available. api_version_previous.anyOf[2] (Value): null.
         * api_version_rollback_expires_at (Optional): string or null. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * api_version_rollback_expires_at.anyOf[1] (Value): string. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_rollback_expires_at.anyOf[2] (Value): null. business_name (Optional): string
         * or null. Business name buyers see on checkout, payment links, and receipts. Once the
         * merchant starts verification, it stays in sync with the business name on the live Stripe
         * account: a change on either side applies, and the latest change wins.
         * business_name.anyOf[1] (Value): string. Business name buyers see on checkout, payment
         * links, and receipts. Once the merchant starts verification, it stays in sync with the
         * business name on the live Stripe account: a change on either side applies, and the
         * latest change wins. business_name.anyOf[2] (Value): null. business_type (Optional):
         * string or null. Merchant's business type. - `other`: A business type Flint does not map
         * yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
         * business_type.anyOf[1] (Value): string. Merchant's business type. - `other`: A business
         * type Flint does not map yet. Value enum: "individual", "company", "non_profit",
         * "government_entity", "other". business_type.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. email (Optional): string or null or null. The
         * account's contact email address. A new account starts with the sign-up email. `null`
         * when none is set. email.anyOf[1] (Value): string or null. The account's contact email
         * address. A new account starts with the sign-up email. `null` when none is set.
         * email.anyOf[2] (Value): null. icon (Optional): {@link ImageAttachmentPreviousAttributes}
         * or null. A square image, at least 128 by 128 pixels, shown where the store needs a small
         * mark: browser tabs and compact headers. icon.anyOf[1] (Value): {@link
         * ImageAttachmentPreviousAttributes}. icon.anyOf[2] (Value): null. logo (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. The merchant's public brand mark.
         * logo.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}. logo.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. Stable identifier of the merchant.
         * merchant_id.anyOf[1] (Value): string. Stable identifier of the merchant. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. phone (Optional): string or null. The
         * account's contact phone number, in international format such as +12125551234.
         * phone.anyOf[1] (Value): string. The account's contact phone number, in international
         * format such as +12125551234. phone.anyOf[2] (Value): null. readiness (Optional): {@link
         * MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept payments
         * and receive payouts, and what is still needed. readiness.anyOf[1] (Value): {@link
         * MerchantReadinessPreviousAttributes}. readiness.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether Flint lets the account operate. `readiness` says
         * whether payments and payouts are available. Value enum: "active", "suspended",
         * "restricted", "closed". status.anyOf[1] (Value): string. Whether Flint lets the account
         * operate. `readiness` says whether payments and payouts are available. Value enum:
         * "active", "suspended", "restricted", "closed". status.anyOf[2] (Value): null.
         * support_email (Optional): string or null. Support email address shown to buyers, for
         * example on receipts and checkout. support_email.anyOf[1] (Value): string. Support email
         * address shown to buyers, for example on receipts and checkout. support_email.anyOf[2]
         * (Value): null. support_phone (Optional): string or null. Support phone number shown to
         * buyers, in international format such as +12125551234. support_phone.anyOf[1] (Value):
         * string. Support phone number shown to buyers, in international format such as
         * +12125551234. support_phone.anyOf[2] (Value): null. support_url (Optional): string or
         * null. Support page shown to buyers. support_url.anyOf[1] (Value): string. Support page
         * shown to buyers. support_url.anyOf[2] (Value): null. timezone (Optional): string or
         * null. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
         * locations, notifications, and reporting when a request omits its time zone. Omitted when
         * unset; UTC then applies until the first live Location sets it. Sandbox Locations do not
         * set the business time zone. Existing resources keep their saved time zone.
         * timezone.anyOf[1] (Value): string. Business IANA time zone, such as America/New_York.
         * Used for invoice deadlines, new locations, notifications, and reporting when a request
         * omits its time zone. Omitted when unset; UTC then applies until the first live Location
         * sets it. Sandbox Locations do not set the business time zone. Existing resources keep
         * their saved time zone. timezone.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Merchant version. Profile, status, and API version changes
         * advance this version, including business name and business type changes synced from the
         * payment provider. Readiness updates alone do not. version.anyOf[1] (Value): integer.
         * Merchant version. Profile, status, and API version changes advance this version,
         * including business name and business type changes synced from the payment provider.
         * Readiness updates alone do not. Format: int64. minimum: 1. version.anyOf[2] (Value):
         * null. website_url (Optional): string or null. The business's website.
         * website_url.anyOf[1] (Value): string. The business's website. website_url.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The merchant's business address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            /**
             * Default API version for requests without a Flint-Version header. Shared across live
             * and test environments. anyOf[1] (Value): string. Default API version for requests
             * without a Flint-Version header. Shared across live and test environments. anyOf[2]
             * (Value): null.
             */
            "api_version"?: ((string) | (null));
            /**
             * When the merchant's default API version last changed. anyOf[1] (Value): string. When
             * the merchant's default API version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_changed_at"?: ((string) | (null));
            /**
             * When the merchant's default API version was first set. anyOf[1] (Value): string.
             * When the merchant's default API version was first set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_pinned_at"?: ((string) | (null));
            /**
             * Previous API version, present while a supported rollback is available. anyOf[1]
             * (Value): string. Previous API version, present while a supported rollback is
             * available. anyOf[2] (Value): null.
             */
            "api_version_previous"?: ((string) | (null));
            /**
             * When the 72-hour rollback offer expires. Explicit changes to any supported version
             * remain available afterward. anyOf[1] (Value): string. When the 72-hour rollback
             * offer expires. Explicit changes to any supported version remain available afterward.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_rollback_expires_at"?: ((string) | (null));
            /**
             * Business name buyers see on checkout, payment links, and receipts. Once the merchant
             * starts verification, it stays in sync with the business name on the live Stripe
             * account: a change on either side applies, and the latest change wins. anyOf[1]
             * (Value): string. Business name buyers see on checkout, payment links, and receipts.
             * Once the merchant starts verification, it stays in sync with the business name on
             * the live Stripe account: a change on either side applies, and the latest change
             * wins. anyOf[2] (Value): null.
             */
            "business_name"?: ((string) | (null));
            /**
             * Merchant's business type. - `other`: A business type Flint does not map yet. Value
             * enum: "individual", "company", "non_profit", "government_entity", "other". anyOf[1]
             * (Value): string. Merchant's business type. - `other`: A business type Flint does not
             * map yet. Value enum: "individual", "company", "non_profit", "government_entity",
             * "other". anyOf[2] (Value): null.
             */
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The account's contact email address. A new account starts with the sign-up email.
             * `null` when none is set. anyOf[1] (Value): string or null. The account's contact
             * email address. A new account starts with the sign-up email. `null` when none is set.
             * anyOf[2] (Value): null.
             */
            "email"?: ((string | null) | (null) | (unknown));
            /**
             * A square image, at least 128 by 128 pixels, shown where the store needs a small
             * mark: browser tabs and compact headers. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * The merchant's public brand mark. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * Stable identifier of the merchant. anyOf[1] (Value): string. Stable identifier of
             * the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * The account's contact phone number, in international format such as +12125551234.
             * anyOf[1] (Value): string. The account's contact phone number, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "phone"?: ((string) | (null));
            /**
             * Whether the merchant can accept payments and receive payouts, and what is still
             * needed. anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            /**
             * Whether Flint lets the account operate. `readiness` says whether payments and
             * payouts are available. Value enum: "active", "suspended", "restricted", "closed".
             * anyOf[1] (Value): string. Whether Flint lets the account operate. `readiness` says
             * whether payments and payouts are available. Value enum: "active", "suspended",
             * "restricted", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            /**
             * Support email address shown to buyers, for example on receipts and checkout.
             * anyOf[1] (Value): string. Support email address shown to buyers, for example on
             * receipts and checkout. anyOf[2] (Value): null.
             */
            "support_email"?: ((string) | (null));
            /**
             * Support phone number shown to buyers, in international format such as +12125551234.
             * anyOf[1] (Value): string. Support phone number shown to buyers, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "support_phone"?: ((string) | (null));
            /**
             * Support page shown to buyers. anyOf[1] (Value): string. Support page shown to
             * buyers. anyOf[2] (Value): null.
             */
            "support_url"?: ((string) | (null));
            /**
             * Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
             * locations, notifications, and reporting when a request omits its time zone. Omitted
             * when unset; UTC then applies until the first live Location sets it. Sandbox
             * Locations do not set the business time zone. Existing resources keep their saved
             * time zone. anyOf[1] (Value): string. Business IANA time zone, such as
             * America/New_York. Used for invoice deadlines, new locations, notifications, and
             * reporting when a request omits its time zone. Omitted when unset; UTC then applies
             * until the first live Location sets it. Sandbox Locations do not set the business
             * time zone. Existing resources keep their saved time zone. anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Merchant version. Profile, status, and API version changes advance this version,
             * including business name and business type changes synced from the payment provider.
             * Readiness updates alone do not. anyOf[1] (Value): integer. Merchant version.
             * Profile, status, and API version changes advance this version, including business
             * name and business type changes synced from the payment provider. Readiness updates
             * alone do not. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * The business's website. anyOf[1] (Value): string. The business's website. anyOf[2]
             * (Value): null.
             */
            "website_url"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "merchant.readiness_updated". */
    "event_type"?: "merchant.readiness_updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `merchant.readiness_updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type MerchantReadinessUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookMerchant}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `banners`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.address (Optional): {@link
     * AddressPreviousAttributes} or null. The merchant's business address.
     * previous_attributes.address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.address.anyOf[2] (Value): null. previous_attributes.api_version
     * (Optional): string or null. Default API version for requests without a Flint-Version header.
     * Shared across live and test environments. previous_attributes.api_version.anyOf[1] (Value):
     * string. Default API version for requests without a Flint-Version header. Shared across live
     * and test environments. previous_attributes.api_version.anyOf[2] (Value): null.
     * previous_attributes.api_version_changed_at (Optional): string or null. When the merchant's
     * default API version last changed. previous_attributes.api_version_changed_at.anyOf[1]
     * (Value): string. When the merchant's default API version last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.api_version_changed_at.anyOf[2]
     * (Value): null. previous_attributes.api_version_pinned_at (Optional): string or null. When
     * the merchant's default API version was first set.
     * previous_attributes.api_version_pinned_at.anyOf[1] (Value): string. When the merchant's
     * default API version was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_pinned_at.anyOf[2] (Value): null.
     * previous_attributes.api_version_previous (Optional): string or null. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[1] (Value): string. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[2] (Value): null.
     * previous_attributes.api_version_rollback_expires_at (Optional): string or null. When the
     * 72-hour rollback offer expires. Explicit changes to any supported version remain available
     * afterward. previous_attributes.api_version_rollback_expires_at.anyOf[1] (Value): string.
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_rollback_expires_at.anyOf[2] (Value): null.
     * previous_attributes.business_name (Optional): string or null. Business name buyers see on
     * checkout, payment links, and receipts. Once the merchant starts verification, it stays in
     * sync with the business name on the live Stripe account: a change on either side applies, and
     * the latest change wins. previous_attributes.business_name.anyOf[1] (Value): string. Business
     * name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins.
     * previous_attributes.business_name.anyOf[2] (Value): null. previous_attributes.business_type
     * (Optional): string or null. Merchant's business type. - `other`: A business type Flint does
     * not map yet. Value enum: "individual", "company", "non_profit", "government_entity",
     * "other". previous_attributes.business_type.anyOf[1] (Value): string. Merchant's business
     * type. - `other`: A business type Flint does not map yet. Value enum: "individual",
     * "company", "non_profit", "government_entity", "other".
     * previous_attributes.business_type.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.email (Optional):
     * string or null or null. The account's contact email address. A new account starts with the
     * sign-up email. `null` when none is set. previous_attributes.email.anyOf[1] (Value): string
     * or null. The account's contact email address. A new account starts with the sign-up email.
     * `null` when none is set. previous_attributes.email.anyOf[2] (Value): null.
     * previous_attributes.icon (Optional): {@link ImageAttachmentPreviousAttributes} or null. A
     * square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser
     * tabs and compact headers. previous_attributes.icon.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.icon.anyOf[2] (Value): null.
     * previous_attributes.logo (Optional): {@link ImageAttachmentPreviousAttributes} or null. The
     * merchant's public brand mark. previous_attributes.logo.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.logo.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Stable identifier of the
     * merchant. previous_attributes.merchant_id.anyOf[1] (Value): string. Stable identifier of the
     * merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.phone (Optional): string or null. The account's contact phone number, in
     * international format such as +12125551234. previous_attributes.phone.anyOf[1] (Value):
     * string. The account's contact phone number, in international format such as +12125551234.
     * previous_attributes.phone.anyOf[2] (Value): null. previous_attributes.readiness (Optional):
     * {@link MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept
     * payments and receive payouts, and what is still needed.
     * previous_attributes.readiness.anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}.
     * previous_attributes.readiness.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Whether Flint lets the account operate. `readiness` says whether payments
     * and payouts are available. Value enum: "active", "suspended", "restricted", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether Flint lets the account operate.
     * `readiness` says whether payments and payouts are available. Value enum: "active",
     * "suspended", "restricted", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.support_email (Optional): string or null. Support email address shown to
     * buyers, for example on receipts and checkout. previous_attributes.support_email.anyOf[1]
     * (Value): string. Support email address shown to buyers, for example on receipts and
     * checkout. previous_attributes.support_email.anyOf[2] (Value): null.
     * previous_attributes.support_phone (Optional): string or null. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[1] (Value): string. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[2] (Value): null. previous_attributes.support_url
     * (Optional): string or null. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[1] (Value): string. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[2] (Value): null. previous_attributes.timezone
     * (Optional): string or null. Business IANA time zone, such as America/New_York. Used for
     * invoice deadlines, new locations, notifications, and reporting when a request omits its time
     * zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox
     * Locations do not set the business time zone. Existing resources keep their saved time zone.
     * previous_attributes.timezone.anyOf[1] (Value): string. Business IANA time zone, such as
     * America/New_York. Used for invoice deadlines, new locations, notifications, and reporting
     * when a request omits its time zone. Omitted when unset; UTC then applies until the first
     * live Location sets it. Sandbox Locations do not set the business time zone. Existing
     * resources keep their saved time zone. previous_attributes.timezone.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Merchant version. Profile,
     * status, and API version changes advance this version, including business name and business
     * type changes synced from the payment provider. Readiness updates alone do not.
     * previous_attributes.version.anyOf[1] (Value): integer. Merchant version. Profile, status,
     * and API version changes advance this version, including business name and business type
     * changes synced from the payment provider. Readiness updates alone do not. Format: int64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     * previous_attributes.website_url (Optional): string or null. The business's website.
     * previous_attributes.website_url.anyOf[1] (Value): string. The business's website.
     * previous_attributes.website_url.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `banners`. */
        "object": WebhookMerchant;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. address (Optional): {@link
         * AddressPreviousAttributes} or null. The merchant's business address. address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. address.anyOf[2] (Value): null. api_version
         * (Optional): string or null. Default API version for requests without a Flint-Version
         * header. Shared across live and test environments. api_version.anyOf[1] (Value): string.
         * Default API version for requests without a Flint-Version header. Shared across live and
         * test environments. api_version.anyOf[2] (Value): null. api_version_changed_at
         * (Optional): string or null. When the merchant's default API version last changed.
         * api_version_changed_at.anyOf[1] (Value): string. When the merchant's default API version
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_changed_at.anyOf[2] (Value): null. api_version_pinned_at (Optional): string
         * or null. When the merchant's default API version was first set.
         * api_version_pinned_at.anyOf[1] (Value): string. When the merchant's default API version
         * was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_pinned_at.anyOf[2] (Value): null. api_version_previous (Optional): string or
         * null. Previous API version, present while a supported rollback is available.
         * api_version_previous.anyOf[1] (Value): string. Previous API version, present while a
         * supported rollback is available. api_version_previous.anyOf[2] (Value): null.
         * api_version_rollback_expires_at (Optional): string or null. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * api_version_rollback_expires_at.anyOf[1] (Value): string. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_rollback_expires_at.anyOf[2] (Value): null. business_name (Optional): string
         * or null. Business name buyers see on checkout, payment links, and receipts. Once the
         * merchant starts verification, it stays in sync with the business name on the live Stripe
         * account: a change on either side applies, and the latest change wins.
         * business_name.anyOf[1] (Value): string. Business name buyers see on checkout, payment
         * links, and receipts. Once the merchant starts verification, it stays in sync with the
         * business name on the live Stripe account: a change on either side applies, and the
         * latest change wins. business_name.anyOf[2] (Value): null. business_type (Optional):
         * string or null. Merchant's business type. - `other`: A business type Flint does not map
         * yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
         * business_type.anyOf[1] (Value): string. Merchant's business type. - `other`: A business
         * type Flint does not map yet. Value enum: "individual", "company", "non_profit",
         * "government_entity", "other". business_type.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. email (Optional): string or null or null. The
         * account's contact email address. A new account starts with the sign-up email. `null`
         * when none is set. email.anyOf[1] (Value): string or null. The account's contact email
         * address. A new account starts with the sign-up email. `null` when none is set.
         * email.anyOf[2] (Value): null. icon (Optional): {@link ImageAttachmentPreviousAttributes}
         * or null. A square image, at least 128 by 128 pixels, shown where the store needs a small
         * mark: browser tabs and compact headers. icon.anyOf[1] (Value): {@link
         * ImageAttachmentPreviousAttributes}. icon.anyOf[2] (Value): null. logo (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. The merchant's public brand mark.
         * logo.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}. logo.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. Stable identifier of the merchant.
         * merchant_id.anyOf[1] (Value): string. Stable identifier of the merchant. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. phone (Optional): string or null. The
         * account's contact phone number, in international format such as +12125551234.
         * phone.anyOf[1] (Value): string. The account's contact phone number, in international
         * format such as +12125551234. phone.anyOf[2] (Value): null. readiness (Optional): {@link
         * MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept payments
         * and receive payouts, and what is still needed. readiness.anyOf[1] (Value): {@link
         * MerchantReadinessPreviousAttributes}. readiness.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether Flint lets the account operate. `readiness` says
         * whether payments and payouts are available. Value enum: "active", "suspended",
         * "restricted", "closed". status.anyOf[1] (Value): string. Whether Flint lets the account
         * operate. `readiness` says whether payments and payouts are available. Value enum:
         * "active", "suspended", "restricted", "closed". status.anyOf[2] (Value): null.
         * support_email (Optional): string or null. Support email address shown to buyers, for
         * example on receipts and checkout. support_email.anyOf[1] (Value): string. Support email
         * address shown to buyers, for example on receipts and checkout. support_email.anyOf[2]
         * (Value): null. support_phone (Optional): string or null. Support phone number shown to
         * buyers, in international format such as +12125551234. support_phone.anyOf[1] (Value):
         * string. Support phone number shown to buyers, in international format such as
         * +12125551234. support_phone.anyOf[2] (Value): null. support_url (Optional): string or
         * null. Support page shown to buyers. support_url.anyOf[1] (Value): string. Support page
         * shown to buyers. support_url.anyOf[2] (Value): null. timezone (Optional): string or
         * null. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
         * locations, notifications, and reporting when a request omits its time zone. Omitted when
         * unset; UTC then applies until the first live Location sets it. Sandbox Locations do not
         * set the business time zone. Existing resources keep their saved time zone.
         * timezone.anyOf[1] (Value): string. Business IANA time zone, such as America/New_York.
         * Used for invoice deadlines, new locations, notifications, and reporting when a request
         * omits its time zone. Omitted when unset; UTC then applies until the first live Location
         * sets it. Sandbox Locations do not set the business time zone. Existing resources keep
         * their saved time zone. timezone.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Merchant version. Profile, status, and API version changes
         * advance this version, including business name and business type changes synced from the
         * payment provider. Readiness updates alone do not. version.anyOf[1] (Value): integer.
         * Merchant version. Profile, status, and API version changes advance this version,
         * including business name and business type changes synced from the payment provider.
         * Readiness updates alone do not. Format: int64. minimum: 1. version.anyOf[2] (Value):
         * null. website_url (Optional): string or null. The business's website.
         * website_url.anyOf[1] (Value): string. The business's website. website_url.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The merchant's business address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            /**
             * Default API version for requests without a Flint-Version header. Shared across live
             * and test environments. anyOf[1] (Value): string. Default API version for requests
             * without a Flint-Version header. Shared across live and test environments. anyOf[2]
             * (Value): null.
             */
            "api_version"?: ((string) | (null));
            /**
             * When the merchant's default API version last changed. anyOf[1] (Value): string. When
             * the merchant's default API version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_changed_at"?: ((string) | (null));
            /**
             * When the merchant's default API version was first set. anyOf[1] (Value): string.
             * When the merchant's default API version was first set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_pinned_at"?: ((string) | (null));
            /**
             * Previous API version, present while a supported rollback is available. anyOf[1]
             * (Value): string. Previous API version, present while a supported rollback is
             * available. anyOf[2] (Value): null.
             */
            "api_version_previous"?: ((string) | (null));
            /**
             * When the 72-hour rollback offer expires. Explicit changes to any supported version
             * remain available afterward. anyOf[1] (Value): string. When the 72-hour rollback
             * offer expires. Explicit changes to any supported version remain available afterward.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_rollback_expires_at"?: ((string) | (null));
            /**
             * Business name buyers see on checkout, payment links, and receipts. Once the merchant
             * starts verification, it stays in sync with the business name on the live Stripe
             * account: a change on either side applies, and the latest change wins. anyOf[1]
             * (Value): string. Business name buyers see on checkout, payment links, and receipts.
             * Once the merchant starts verification, it stays in sync with the business name on
             * the live Stripe account: a change on either side applies, and the latest change
             * wins. anyOf[2] (Value): null.
             */
            "business_name"?: ((string) | (null));
            /**
             * Merchant's business type. - `other`: A business type Flint does not map yet. Value
             * enum: "individual", "company", "non_profit", "government_entity", "other". anyOf[1]
             * (Value): string. Merchant's business type. - `other`: A business type Flint does not
             * map yet. Value enum: "individual", "company", "non_profit", "government_entity",
             * "other". anyOf[2] (Value): null.
             */
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The account's contact email address. A new account starts with the sign-up email.
             * `null` when none is set. anyOf[1] (Value): string or null. The account's contact
             * email address. A new account starts with the sign-up email. `null` when none is set.
             * anyOf[2] (Value): null.
             */
            "email"?: ((string | null) | (null) | (unknown));
            /**
             * A square image, at least 128 by 128 pixels, shown where the store needs a small
             * mark: browser tabs and compact headers. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * The merchant's public brand mark. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * Stable identifier of the merchant. anyOf[1] (Value): string. Stable identifier of
             * the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * The account's contact phone number, in international format such as +12125551234.
             * anyOf[1] (Value): string. The account's contact phone number, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "phone"?: ((string) | (null));
            /**
             * Whether the merchant can accept payments and receive payouts, and what is still
             * needed. anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            /**
             * Whether Flint lets the account operate. `readiness` says whether payments and
             * payouts are available. Value enum: "active", "suspended", "restricted", "closed".
             * anyOf[1] (Value): string. Whether Flint lets the account operate. `readiness` says
             * whether payments and payouts are available. Value enum: "active", "suspended",
             * "restricted", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            /**
             * Support email address shown to buyers, for example on receipts and checkout.
             * anyOf[1] (Value): string. Support email address shown to buyers, for example on
             * receipts and checkout. anyOf[2] (Value): null.
             */
            "support_email"?: ((string) | (null));
            /**
             * Support phone number shown to buyers, in international format such as +12125551234.
             * anyOf[1] (Value): string. Support phone number shown to buyers, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "support_phone"?: ((string) | (null));
            /**
             * Support page shown to buyers. anyOf[1] (Value): string. Support page shown to
             * buyers. anyOf[2] (Value): null.
             */
            "support_url"?: ((string) | (null));
            /**
             * Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
             * locations, notifications, and reporting when a request omits its time zone. Omitted
             * when unset; UTC then applies until the first live Location sets it. Sandbox
             * Locations do not set the business time zone. Existing resources keep their saved
             * time zone. anyOf[1] (Value): string. Business IANA time zone, such as
             * America/New_York. Used for invoice deadlines, new locations, notifications, and
             * reporting when a request omits its time zone. Omitted when unset; UTC then applies
             * until the first live Location sets it. Sandbox Locations do not set the business
             * time zone. Existing resources keep their saved time zone. anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Merchant version. Profile, status, and API version changes advance this version,
             * including business name and business type changes synced from the payment provider.
             * Readiness updates alone do not. anyOf[1] (Value): integer. Merchant version.
             * Profile, status, and API version changes advance this version, including business
             * name and business type changes synced from the payment provider. Readiness updates
             * alone do not. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * The business's website. anyOf[1] (Value): string. The business's website. anyOf[2]
             * (Value): null.
             */
            "website_url"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "merchant.readiness_updated". */
    "event_type"?: "merchant.readiness_updated";
});
/** A response containing `Merchant` data. */
export type MerchantResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The business accepting
     * payments.
     */
    "data": Merchant;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A platform's request to create a merchant for an owner, who confirms it with a code Flint emails
 * them. Once verified, it is the record of the owner's consent, kept for as long as the merchant
 * exists.
 */
export type MerchantSignup = {
    /**
     * The new merchant's display name until onboarding sets its legal name. Absent when the
     * request didn't send one: Flint then names the merchant from the owner's email.
     */
    "business_name"?: string;
    /** When the signup was canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * When the current code expires, present while the signup is `pending` and its code still
     * works. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "code_expires_at"?: string;
    /** When the signup completed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** When the signup was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When a `pending` signup expires: 24 hours after it was created. A signup Flint is completing
     * never expires. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Your identifier for this business, as you sent it. Absent when you didn't send one.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The merchant the signup created, present once it is `completed`. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /** Unique identifier for the merchant signup. Example: "msu_01KEZF7C00SRGYRMBPKRKW8V9J". */
    "merchant_signup_id": string;
    /**
     * Flint's merchant terms the owner must accept. Flint's merchant terms the owner accepts by
     * entering the code, fixed when the signup was created.
     */
    "merchant_terms": MerchantSignupTerms;
    /**
     * The modes the signup installs the app in, one environment grant each, `test` first. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "modes": Array<"test" | "live" | (string & {})>;
    /**
     * The owner the code went to. The person who will own the new merchant, as the platform
     * supplied them.
     */
    "owner": MerchantSignupOwner;
    /**
     * The partner app the signup installs on the new merchant. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * The install the signup created, present once it is `completed`. Its `merchant_signup_id`
     * names this signup. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string;
    /**
     * The app's platform fee cap the code email showed, frozen at create. Absent when the app has
     * none. The most a platform fee can take from one payment. The largest platform fee on a
     * payment is percent of the amount it collects, rounded half up to the minor unit, plus the
     * currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1%
     * + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency
     * without a maximum can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /**
     * The permissions the code email asked the owner to approve, frozen at create: the requested
     * ones, or the app's defaults, plus every required permission, in manifest order. At verify,
     * each grant gets them narrowed to what the app's manifest still offers. [] (Value): {@link
     * MerchantSignupPermission}. A permission the code email asked the owner to approve, as the
     * app's manifest stated it when the signup was created.
     */
    "requested_permissions": Array<MerchantSignupPermission>;
    /**
     * The onboarding state of the new merchant's default sandbox, which the test grant points at.
     * Value enum: "complete", "not_started".
     */
    "sandbox_initial_onboarding": "complete" | "not_started" | (string & {});
    /**
     * Where the signup is. `completed`, `expired` and `canceled` are final. `expired` follows from
     * `expires_at`, so it doesn't advance `version`. Value enum: "pending", "completed",
     * "expired", "canceled".
     */
    "status": "pending" | "completed" | "expired" | "canceled" | (string & {});
    /**
     * Lifecycle actions Flint accepts now: `verify` and `cancel` while `pending`, only `verify`
     * while Flint is completing it after verify, `[]` otherwise. resend-code and
     * rotate-authorization-codes are operations, not lifecycle actions, so they are never listed.
     * [] enum: "cancel", "verify". [] (Value): string. Value enum: "cancel", "verify".
     */
    "supported_actions": Array<"cancel" | "verify" | (string & {})>;
    /**
     * The owner's acceptance, present once the signup is `completed`. The owner's acceptance of
     * Flint's merchant terms, recorded at verify. Flint also stores the IP address and user agent
     * you reported; they aren't returned.
     */
    "terms_acceptance"?: MerchantSignupTermsAcceptance;
    /** When the signup last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `MerchantSignup` objects. */
export type MerchantSignupListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * MerchantSignup}. A platform's request to create a merchant for an owner, who confirms it
     * with a code Flint emails them. Once verified, it is the record of the owner's consent, kept
     * for as long as the merchant exists.
     */
    "data": Array<MerchantSignup>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The person who will own the new merchant, as the platform supplied them. */
export type MerchantSignupOwner = {
    /**
     * The owner's email address, lowercased, at most 254 characters. Flint emails the code here,
     * and it becomes the new merchant's account email and the owner's Flint login. Send an address
     * the owner gave you, never one on a domain you control.
     */
    "email": string;
    /**
     * The owner's first name, 1 to 100 characters. It becomes the Flint user's first name when
     * Flint creates the user.
     */
    "first_name": string;
    /**
     * The owner's last name, 1 to 100 characters. It becomes the Flint user's last name when Flint
     * creates the user.
     */
    "last_name": string;
};
/** The person who will own the new merchant. Flint emails the code to this address. */
export type MerchantSignupOwnerRequestInput = {
    /**
     * The owner's email address, lowercased, at most 254 characters. Flint emails the code here,
     * and it becomes the new merchant's account email and the owner's Flint login. Send an address
     * the owner gave you, never one on a domain you control. Format: email. minLength: 3.
     * maxLength: 254. Example: "buyer@example.com".
     */
    "email": string;
    /**
     * The owner's first name, 1 to 100 characters, without links or email addresses: the code
     * email shows it. minLength: 1. maxLength: 100.
     */
    "first_name": string;
    /**
     * The owner's last name, 1 to 100 characters, without links or email addresses: the code email
     * shows it. minLength: 1. maxLength: 100.
     */
    "last_name": string;
};
/**
 * A permission the code email asked the owner to approve, as the app's manifest stated it when the
 * signup was created.
 */
export type MerchantSignupPermission = {
    /** The permission's description. */
    "description": string;
    /** The manifest permission ID. Example: "manage_orders". */
    "permission_id": string;
    /** The Flint scopes the permission grants. [] (Value): string. */
    "required_scopes": Array<string>;
    /** The permission's title, as the code email showed it. */
    "title": string;
};
/** A response containing `MerchantSignup` data. */
export type MerchantSignupResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A platform's request to
     * create a merchant for an owner, who confirms it with a code Flint emails them. Once
     * verified, it is the record of the owner's consent, kept for as long as the merchant exists.
     */
    "data": MerchantSignup;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Flint's merchant terms the owner accepts by entering the code, fixed when the signup was
 * created.
 */
export type MerchantSignupTerms = {
    /** Where the terms are published. Link to it beside the checkbox in your form. */
    "url": string;
    /** The terms version. Send it as `terms_acceptance.merchant_terms_version` on verify. */
    "version": string;
};
/**
 * The owner's acceptance of Flint's merchant terms, recorded at verify. Flint also stores the IP
 * address and user agent you reported; they aren't returned.
 */
export type MerchantSignupTermsAcceptance = {
    /** When the owner accepted the terms. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "accepted_at": string;
    /** The terms version accepted. */
    "merchant_terms_version": string;
};
/**
 * Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording.
 * The platform terms oblige you to show it and to report real values.
 */
export type MerchantSignupTermsAcceptanceRequest = {
    /**
     * The owner's browser IP address, IPv4 or IPv6. Request logs redact it. minLength: 2.
     * maxLength: 64.
     */
    "ip_address": string;
    /** Must equal the signup's `merchant_terms.version`. minLength: 1. */
    "merchant_terms_version": string;
    /**
     * The owner's browser user agent, 1 to 1,024 characters. Request logs redact it. minLength: 1.
     * maxLength: 1024.
     */
    "user_agent": string;
};
/**
 * Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording.
 * The platform terms oblige you to show it and to report real values.
 */
export type MerchantSignupTermsAcceptanceRequestInput = MerchantSignupTermsAcceptanceRequest;
/**
 * The request body for: Cancel a merchant signup; Mint new authorization codes for a merchant
 * signup; Send a new merchant signup code.
 */
export type MerchantSignupVersionRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/**
 * A completed merchant signup with the authorization codes to exchange for its grants' tokens. A
 * platform's request to create a merchant for an owner, who confirms it with a code Flint emails
 * them. Once verified, it is the record of the owner's consent, kept for as long as the merchant
 * exists.
 */
export type MerchantSignupWithAuthorizationCodes = ({})
    & (Exclude<MerchantSignup & object, readonly unknown[]>)
    & ({
    /**
     * When the codes in this response expire, 5 minutes after they were minted. Present with them.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "authorization_codes_expire_at"?: string;
    /**
     * Exchange it at POST /v1/oauth/token for the live grant's tokens, with the code_verifier for
     * the signup's code_challenge and without redirect_uri. Present when the signup installed in
     * live mode and the code was minted by this request. Single use. An idempotent replay
     * withholds it: mint new codes with rotate-authorization-codes.
     */
    "live_authorization_code"?: string;
    /**
     * Exchange it at POST /v1/oauth/token for the test grant's tokens, with the code_verifier for
     * the signup's code_challenge and without redirect_uri. Present when the signup installed in
     * test mode and the code was minted by this request. Single use. An idempotent replay
     * withholds it: mint new codes with rotate-authorization-codes.
     */
    "test_authorization_code"?: string;
});
/** A response containing `MerchantSignupWithAuthorizationCodes` data. */
export type MerchantSignupWithAuthorizationCodesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A completed merchant
     * signup with the authorization codes to exchange for its grants' tokens. A platform's request
     * to create a merchant for an owner, who confirms it with a code Flint emails them. Once
     * verified, it is the record of the owner's consent, kept for as long as the merchant exists.
     */
    "data": MerchantSignupWithAuthorizationCodes;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantSignupsCancelParams = (InputValue<MerchantSignupVersionRequestInput>);
export type MerchantSignupsCreateParams = (InputValue<CreateMerchantSignupRequestInput>);
export type MerchantSignupsGetParams = {};
export type MerchantSignupsListParams = {
    /**
     * Return signups of this partner app. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Return signups with this external_reference_id. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Return signups for this owner email, compared in lower case. Format: email. Example:
     * "buyer@example.com".
     */
    "owner_email"?: InputValue<string>;
    /**
     * Return signups with any of these statuses. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "pending", "completed", "expired", "canceled". Value enum:
     * "pending", "completed", "expired", "canceled". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "pending", "completed", "expired", "canceled". anyOf[1][] (Value): string. Value
     * enum: "pending", "completed", "expired", "canceled". anyOf[2] (Value): string. Value enum:
     * "pending", "completed", "expired", "canceled".
     */
    "status"?: InputValue<("pending" | "completed" | "expired" | "canceled")
        | readonly ("pending" | "completed" | "expired" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type MerchantSignupsResendCodeParams = MerchantSignupsCancelParams;
export type MerchantSignupsRotateAuthorizationCodesParams = MerchantSignupsCancelParams;
export type MerchantSignupsVerifyParams = (InputValue<VerifyMerchantSignupRequestInput>);
export type MerchantUpdateParams = (InputValue<UpdateMerchantRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type MerchantUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookMerchant;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_pinned_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "business_name"?: ((string) | (null));
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "email"?: ((string | null) | (null) | (unknown));
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "phone"?: ((string) | (null));
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            "support_email"?: ((string) | (null));
            "support_phone"?: ((string) | (null));
            "support_url"?: ((string) | (null));
            "timezone"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "website_url"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "merchant.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookMerchant;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_pinned_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "business_name"?: ((string) | (null));
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "email"?: ((string | null) | (null) | (unknown));
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "phone"?: ((string) | (null));
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            "support_email"?: ((string) | (null));
            "support_phone"?: ((string) | (null));
            "support_url"?: ((string) | (null));
            "timezone"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "website_url"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "merchant.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "merchant.updated";
});
/**
 * The `merchant.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type MerchantUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookMerchant}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `banners`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.address (Optional): {@link
     * AddressPreviousAttributes} or null. The merchant's business address.
     * previous_attributes.address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.address.anyOf[2] (Value): null. previous_attributes.api_version
     * (Optional): string or null. Default API version for requests without a Flint-Version header.
     * Shared across live and test environments. previous_attributes.api_version.anyOf[1] (Value):
     * string. Default API version for requests without a Flint-Version header. Shared across live
     * and test environments. previous_attributes.api_version.anyOf[2] (Value): null.
     * previous_attributes.api_version_changed_at (Optional): string or null. When the merchant's
     * default API version last changed. previous_attributes.api_version_changed_at.anyOf[1]
     * (Value): string. When the merchant's default API version last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.api_version_changed_at.anyOf[2]
     * (Value): null. previous_attributes.api_version_pinned_at (Optional): string or null. When
     * the merchant's default API version was first set.
     * previous_attributes.api_version_pinned_at.anyOf[1] (Value): string. When the merchant's
     * default API version was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_pinned_at.anyOf[2] (Value): null.
     * previous_attributes.api_version_previous (Optional): string or null. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[1] (Value): string. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[2] (Value): null.
     * previous_attributes.api_version_rollback_expires_at (Optional): string or null. When the
     * 72-hour rollback offer expires. Explicit changes to any supported version remain available
     * afterward. previous_attributes.api_version_rollback_expires_at.anyOf[1] (Value): string.
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_rollback_expires_at.anyOf[2] (Value): null.
     * previous_attributes.business_name (Optional): string or null. Business name buyers see on
     * checkout, payment links, and receipts. Once the merchant starts verification, it stays in
     * sync with the business name on the live Stripe account: a change on either side applies, and
     * the latest change wins. previous_attributes.business_name.anyOf[1] (Value): string. Business
     * name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins.
     * previous_attributes.business_name.anyOf[2] (Value): null. previous_attributes.business_type
     * (Optional): string or null. Merchant's business type. - `other`: A business type Flint does
     * not map yet. Value enum: "individual", "company", "non_profit", "government_entity",
     * "other". previous_attributes.business_type.anyOf[1] (Value): string. Merchant's business
     * type. - `other`: A business type Flint does not map yet. Value enum: "individual",
     * "company", "non_profit", "government_entity", "other".
     * previous_attributes.business_type.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.email (Optional):
     * string or null or null. The account's contact email address. A new account starts with the
     * sign-up email. `null` when none is set. previous_attributes.email.anyOf[1] (Value): string
     * or null. The account's contact email address. A new account starts with the sign-up email.
     * `null` when none is set. previous_attributes.email.anyOf[2] (Value): null.
     * previous_attributes.icon (Optional): {@link ImageAttachmentPreviousAttributes} or null. A
     * square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser
     * tabs and compact headers. previous_attributes.icon.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.icon.anyOf[2] (Value): null.
     * previous_attributes.logo (Optional): {@link ImageAttachmentPreviousAttributes} or null. The
     * merchant's public brand mark. previous_attributes.logo.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.logo.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Stable identifier of the
     * merchant. previous_attributes.merchant_id.anyOf[1] (Value): string. Stable identifier of the
     * merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.phone (Optional): string or null. The account's contact phone number, in
     * international format such as +12125551234. previous_attributes.phone.anyOf[1] (Value):
     * string. The account's contact phone number, in international format such as +12125551234.
     * previous_attributes.phone.anyOf[2] (Value): null. previous_attributes.readiness (Optional):
     * {@link MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept
     * payments and receive payouts, and what is still needed.
     * previous_attributes.readiness.anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}.
     * previous_attributes.readiness.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Whether Flint lets the account operate. `readiness` says whether payments
     * and payouts are available. Value enum: "active", "suspended", "restricted", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether Flint lets the account operate.
     * `readiness` says whether payments and payouts are available. Value enum: "active",
     * "suspended", "restricted", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.support_email (Optional): string or null. Support email address shown to
     * buyers, for example on receipts and checkout. previous_attributes.support_email.anyOf[1]
     * (Value): string. Support email address shown to buyers, for example on receipts and
     * checkout. previous_attributes.support_email.anyOf[2] (Value): null.
     * previous_attributes.support_phone (Optional): string or null. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[1] (Value): string. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[2] (Value): null. previous_attributes.support_url
     * (Optional): string or null. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[1] (Value): string. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[2] (Value): null. previous_attributes.timezone
     * (Optional): string or null. Business IANA time zone, such as America/New_York. Used for
     * invoice deadlines, new locations, notifications, and reporting when a request omits its time
     * zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox
     * Locations do not set the business time zone. Existing resources keep their saved time zone.
     * previous_attributes.timezone.anyOf[1] (Value): string. Business IANA time zone, such as
     * America/New_York. Used for invoice deadlines, new locations, notifications, and reporting
     * when a request omits its time zone. Omitted when unset; UTC then applies until the first
     * live Location sets it. Sandbox Locations do not set the business time zone. Existing
     * resources keep their saved time zone. previous_attributes.timezone.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Merchant version. Profile,
     * status, and API version changes advance this version, including business name and business
     * type changes synced from the payment provider. Readiness updates alone do not.
     * previous_attributes.version.anyOf[1] (Value): integer. Merchant version. Profile, status,
     * and API version changes advance this version, including business name and business type
     * changes synced from the payment provider. Readiness updates alone do not. Format: int64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     * previous_attributes.website_url (Optional): string or null. The business's website.
     * previous_attributes.website_url.anyOf[1] (Value): string. The business's website.
     * previous_attributes.website_url.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `banners`. */
        "object": WebhookMerchant;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. address (Optional): {@link
         * AddressPreviousAttributes} or null. The merchant's business address. address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. address.anyOf[2] (Value): null. api_version
         * (Optional): string or null. Default API version for requests without a Flint-Version
         * header. Shared across live and test environments. api_version.anyOf[1] (Value): string.
         * Default API version for requests without a Flint-Version header. Shared across live and
         * test environments. api_version.anyOf[2] (Value): null. api_version_changed_at
         * (Optional): string or null. When the merchant's default API version last changed.
         * api_version_changed_at.anyOf[1] (Value): string. When the merchant's default API version
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_changed_at.anyOf[2] (Value): null. api_version_pinned_at (Optional): string
         * or null. When the merchant's default API version was first set.
         * api_version_pinned_at.anyOf[1] (Value): string. When the merchant's default API version
         * was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_pinned_at.anyOf[2] (Value): null. api_version_previous (Optional): string or
         * null. Previous API version, present while a supported rollback is available.
         * api_version_previous.anyOf[1] (Value): string. Previous API version, present while a
         * supported rollback is available. api_version_previous.anyOf[2] (Value): null.
         * api_version_rollback_expires_at (Optional): string or null. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * api_version_rollback_expires_at.anyOf[1] (Value): string. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_rollback_expires_at.anyOf[2] (Value): null. business_name (Optional): string
         * or null. Business name buyers see on checkout, payment links, and receipts. Once the
         * merchant starts verification, it stays in sync with the business name on the live Stripe
         * account: a change on either side applies, and the latest change wins.
         * business_name.anyOf[1] (Value): string. Business name buyers see on checkout, payment
         * links, and receipts. Once the merchant starts verification, it stays in sync with the
         * business name on the live Stripe account: a change on either side applies, and the
         * latest change wins. business_name.anyOf[2] (Value): null. business_type (Optional):
         * string or null. Merchant's business type. - `other`: A business type Flint does not map
         * yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
         * business_type.anyOf[1] (Value): string. Merchant's business type. - `other`: A business
         * type Flint does not map yet. Value enum: "individual", "company", "non_profit",
         * "government_entity", "other". business_type.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. email (Optional): string or null or null. The
         * account's contact email address. A new account starts with the sign-up email. `null`
         * when none is set. email.anyOf[1] (Value): string or null. The account's contact email
         * address. A new account starts with the sign-up email. `null` when none is set.
         * email.anyOf[2] (Value): null. icon (Optional): {@link ImageAttachmentPreviousAttributes}
         * or null. A square image, at least 128 by 128 pixels, shown where the store needs a small
         * mark: browser tabs and compact headers. icon.anyOf[1] (Value): {@link
         * ImageAttachmentPreviousAttributes}. icon.anyOf[2] (Value): null. logo (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. The merchant's public brand mark.
         * logo.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}. logo.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. Stable identifier of the merchant.
         * merchant_id.anyOf[1] (Value): string. Stable identifier of the merchant. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. phone (Optional): string or null. The
         * account's contact phone number, in international format such as +12125551234.
         * phone.anyOf[1] (Value): string. The account's contact phone number, in international
         * format such as +12125551234. phone.anyOf[2] (Value): null. readiness (Optional): {@link
         * MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept payments
         * and receive payouts, and what is still needed. readiness.anyOf[1] (Value): {@link
         * MerchantReadinessPreviousAttributes}. readiness.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether Flint lets the account operate. `readiness` says
         * whether payments and payouts are available. Value enum: "active", "suspended",
         * "restricted", "closed". status.anyOf[1] (Value): string. Whether Flint lets the account
         * operate. `readiness` says whether payments and payouts are available. Value enum:
         * "active", "suspended", "restricted", "closed". status.anyOf[2] (Value): null.
         * support_email (Optional): string or null. Support email address shown to buyers, for
         * example on receipts and checkout. support_email.anyOf[1] (Value): string. Support email
         * address shown to buyers, for example on receipts and checkout. support_email.anyOf[2]
         * (Value): null. support_phone (Optional): string or null. Support phone number shown to
         * buyers, in international format such as +12125551234. support_phone.anyOf[1] (Value):
         * string. Support phone number shown to buyers, in international format such as
         * +12125551234. support_phone.anyOf[2] (Value): null. support_url (Optional): string or
         * null. Support page shown to buyers. support_url.anyOf[1] (Value): string. Support page
         * shown to buyers. support_url.anyOf[2] (Value): null. timezone (Optional): string or
         * null. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
         * locations, notifications, and reporting when a request omits its time zone. Omitted when
         * unset; UTC then applies until the first live Location sets it. Sandbox Locations do not
         * set the business time zone. Existing resources keep their saved time zone.
         * timezone.anyOf[1] (Value): string. Business IANA time zone, such as America/New_York.
         * Used for invoice deadlines, new locations, notifications, and reporting when a request
         * omits its time zone. Omitted when unset; UTC then applies until the first live Location
         * sets it. Sandbox Locations do not set the business time zone. Existing resources keep
         * their saved time zone. timezone.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Merchant version. Profile, status, and API version changes
         * advance this version, including business name and business type changes synced from the
         * payment provider. Readiness updates alone do not. version.anyOf[1] (Value): integer.
         * Merchant version. Profile, status, and API version changes advance this version,
         * including business name and business type changes synced from the payment provider.
         * Readiness updates alone do not. Format: int64. minimum: 1. version.anyOf[2] (Value):
         * null. website_url (Optional): string or null. The business's website.
         * website_url.anyOf[1] (Value): string. The business's website. website_url.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The merchant's business address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            /**
             * Default API version for requests without a Flint-Version header. Shared across live
             * and test environments. anyOf[1] (Value): string. Default API version for requests
             * without a Flint-Version header. Shared across live and test environments. anyOf[2]
             * (Value): null.
             */
            "api_version"?: ((string) | (null));
            /**
             * When the merchant's default API version last changed. anyOf[1] (Value): string. When
             * the merchant's default API version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_changed_at"?: ((string) | (null));
            /**
             * When the merchant's default API version was first set. anyOf[1] (Value): string.
             * When the merchant's default API version was first set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_pinned_at"?: ((string) | (null));
            /**
             * Previous API version, present while a supported rollback is available. anyOf[1]
             * (Value): string. Previous API version, present while a supported rollback is
             * available. anyOf[2] (Value): null.
             */
            "api_version_previous"?: ((string) | (null));
            /**
             * When the 72-hour rollback offer expires. Explicit changes to any supported version
             * remain available afterward. anyOf[1] (Value): string. When the 72-hour rollback
             * offer expires. Explicit changes to any supported version remain available afterward.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_rollback_expires_at"?: ((string) | (null));
            /**
             * Business name buyers see on checkout, payment links, and receipts. Once the merchant
             * starts verification, it stays in sync with the business name on the live Stripe
             * account: a change on either side applies, and the latest change wins. anyOf[1]
             * (Value): string. Business name buyers see on checkout, payment links, and receipts.
             * Once the merchant starts verification, it stays in sync with the business name on
             * the live Stripe account: a change on either side applies, and the latest change
             * wins. anyOf[2] (Value): null.
             */
            "business_name"?: ((string) | (null));
            /**
             * Merchant's business type. - `other`: A business type Flint does not map yet. Value
             * enum: "individual", "company", "non_profit", "government_entity", "other". anyOf[1]
             * (Value): string. Merchant's business type. - `other`: A business type Flint does not
             * map yet. Value enum: "individual", "company", "non_profit", "government_entity",
             * "other". anyOf[2] (Value): null.
             */
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The account's contact email address. A new account starts with the sign-up email.
             * `null` when none is set. anyOf[1] (Value): string or null. The account's contact
             * email address. A new account starts with the sign-up email. `null` when none is set.
             * anyOf[2] (Value): null.
             */
            "email"?: ((string | null) | (null) | (unknown));
            /**
             * A square image, at least 128 by 128 pixels, shown where the store needs a small
             * mark: browser tabs and compact headers. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * The merchant's public brand mark. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * Stable identifier of the merchant. anyOf[1] (Value): string. Stable identifier of
             * the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * The account's contact phone number, in international format such as +12125551234.
             * anyOf[1] (Value): string. The account's contact phone number, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "phone"?: ((string) | (null));
            /**
             * Whether the merchant can accept payments and receive payouts, and what is still
             * needed. anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            /**
             * Whether Flint lets the account operate. `readiness` says whether payments and
             * payouts are available. Value enum: "active", "suspended", "restricted", "closed".
             * anyOf[1] (Value): string. Whether Flint lets the account operate. `readiness` says
             * whether payments and payouts are available. Value enum: "active", "suspended",
             * "restricted", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            /**
             * Support email address shown to buyers, for example on receipts and checkout.
             * anyOf[1] (Value): string. Support email address shown to buyers, for example on
             * receipts and checkout. anyOf[2] (Value): null.
             */
            "support_email"?: ((string) | (null));
            /**
             * Support phone number shown to buyers, in international format such as +12125551234.
             * anyOf[1] (Value): string. Support phone number shown to buyers, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "support_phone"?: ((string) | (null));
            /**
             * Support page shown to buyers. anyOf[1] (Value): string. Support page shown to
             * buyers. anyOf[2] (Value): null.
             */
            "support_url"?: ((string) | (null));
            /**
             * Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
             * locations, notifications, and reporting when a request omits its time zone. Omitted
             * when unset; UTC then applies until the first live Location sets it. Sandbox
             * Locations do not set the business time zone. Existing resources keep their saved
             * time zone. anyOf[1] (Value): string. Business IANA time zone, such as
             * America/New_York. Used for invoice deadlines, new locations, notifications, and
             * reporting when a request omits its time zone. Omitted when unset; UTC then applies
             * until the first live Location sets it. Sandbox Locations do not set the business
             * time zone. Existing resources keep their saved time zone. anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Merchant version. Profile, status, and API version changes advance this version,
             * including business name and business type changes synced from the payment provider.
             * Readiness updates alone do not. anyOf[1] (Value): integer. Merchant version.
             * Profile, status, and API version changes advance this version, including business
             * name and business type changes synced from the payment provider. Readiness updates
             * alone do not. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * The business's website. anyOf[1] (Value): string. The business's website. anyOf[2]
             * (Value): null.
             */
            "website_url"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "merchant.updated". */
    "event_type"?: "merchant.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `merchant.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type MerchantUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookMerchant}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `banners`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.address (Optional): {@link
     * AddressPreviousAttributes} or null. The merchant's business address.
     * previous_attributes.address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.address.anyOf[2] (Value): null. previous_attributes.api_version
     * (Optional): string or null. Default API version for requests without a Flint-Version header.
     * Shared across live and test environments. previous_attributes.api_version.anyOf[1] (Value):
     * string. Default API version for requests without a Flint-Version header. Shared across live
     * and test environments. previous_attributes.api_version.anyOf[2] (Value): null.
     * previous_attributes.api_version_changed_at (Optional): string or null. When the merchant's
     * default API version last changed. previous_attributes.api_version_changed_at.anyOf[1]
     * (Value): string. When the merchant's default API version last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.api_version_changed_at.anyOf[2]
     * (Value): null. previous_attributes.api_version_pinned_at (Optional): string or null. When
     * the merchant's default API version was first set.
     * previous_attributes.api_version_pinned_at.anyOf[1] (Value): string. When the merchant's
     * default API version was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_pinned_at.anyOf[2] (Value): null.
     * previous_attributes.api_version_previous (Optional): string or null. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[1] (Value): string. Previous API version,
     * present while a supported rollback is available.
     * previous_attributes.api_version_previous.anyOf[2] (Value): null.
     * previous_attributes.api_version_rollback_expires_at (Optional): string or null. When the
     * 72-hour rollback offer expires. Explicit changes to any supported version remain available
     * afterward. previous_attributes.api_version_rollback_expires_at.anyOf[1] (Value): string.
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.api_version_rollback_expires_at.anyOf[2] (Value): null.
     * previous_attributes.business_name (Optional): string or null. Business name buyers see on
     * checkout, payment links, and receipts. Once the merchant starts verification, it stays in
     * sync with the business name on the live Stripe account: a change on either side applies, and
     * the latest change wins. previous_attributes.business_name.anyOf[1] (Value): string. Business
     * name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins.
     * previous_attributes.business_name.anyOf[2] (Value): null. previous_attributes.business_type
     * (Optional): string or null. Merchant's business type. - `other`: A business type Flint does
     * not map yet. Value enum: "individual", "company", "non_profit", "government_entity",
     * "other". previous_attributes.business_type.anyOf[1] (Value): string. Merchant's business
     * type. - `other`: A business type Flint does not map yet. Value enum: "individual",
     * "company", "non_profit", "government_entity", "other".
     * previous_attributes.business_type.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.email (Optional):
     * string or null or null. The account's contact email address. A new account starts with the
     * sign-up email. `null` when none is set. previous_attributes.email.anyOf[1] (Value): string
     * or null. The account's contact email address. A new account starts with the sign-up email.
     * `null` when none is set. previous_attributes.email.anyOf[2] (Value): null.
     * previous_attributes.icon (Optional): {@link ImageAttachmentPreviousAttributes} or null. A
     * square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser
     * tabs and compact headers. previous_attributes.icon.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.icon.anyOf[2] (Value): null.
     * previous_attributes.logo (Optional): {@link ImageAttachmentPreviousAttributes} or null. The
     * merchant's public brand mark. previous_attributes.logo.anyOf[1] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.logo.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Stable identifier of the
     * merchant. previous_attributes.merchant_id.anyOf[1] (Value): string. Stable identifier of the
     * merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.phone (Optional): string or null. The account's contact phone number, in
     * international format such as +12125551234. previous_attributes.phone.anyOf[1] (Value):
     * string. The account's contact phone number, in international format such as +12125551234.
     * previous_attributes.phone.anyOf[2] (Value): null. previous_attributes.readiness (Optional):
     * {@link MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept
     * payments and receive payouts, and what is still needed.
     * previous_attributes.readiness.anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}.
     * previous_attributes.readiness.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Whether Flint lets the account operate. `readiness` says whether payments
     * and payouts are available. Value enum: "active", "suspended", "restricted", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether Flint lets the account operate.
     * `readiness` says whether payments and payouts are available. Value enum: "active",
     * "suspended", "restricted", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.support_email (Optional): string or null. Support email address shown to
     * buyers, for example on receipts and checkout. previous_attributes.support_email.anyOf[1]
     * (Value): string. Support email address shown to buyers, for example on receipts and
     * checkout. previous_attributes.support_email.anyOf[2] (Value): null.
     * previous_attributes.support_phone (Optional): string or null. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[1] (Value): string. Support phone number shown to
     * buyers, in international format such as +12125551234.
     * previous_attributes.support_phone.anyOf[2] (Value): null. previous_attributes.support_url
     * (Optional): string or null. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[1] (Value): string. Support page shown to buyers.
     * previous_attributes.support_url.anyOf[2] (Value): null. previous_attributes.timezone
     * (Optional): string or null. Business IANA time zone, such as America/New_York. Used for
     * invoice deadlines, new locations, notifications, and reporting when a request omits its time
     * zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox
     * Locations do not set the business time zone. Existing resources keep their saved time zone.
     * previous_attributes.timezone.anyOf[1] (Value): string. Business IANA time zone, such as
     * America/New_York. Used for invoice deadlines, new locations, notifications, and reporting
     * when a request omits its time zone. Omitted when unset; UTC then applies until the first
     * live Location sets it. Sandbox Locations do not set the business time zone. Existing
     * resources keep their saved time zone. previous_attributes.timezone.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Merchant version. Profile,
     * status, and API version changes advance this version, including business name and business
     * type changes synced from the payment provider. Readiness updates alone do not.
     * previous_attributes.version.anyOf[1] (Value): integer. Merchant version. Profile, status,
     * and API version changes advance this version, including business name and business type
     * changes synced from the payment provider. Readiness updates alone do not. Format: int64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     * previous_attributes.website_url (Optional): string or null. The business's website.
     * previous_attributes.website_url.anyOf[1] (Value): string. The business's website.
     * previous_attributes.website_url.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `banners`. */
        "object": WebhookMerchant;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. address (Optional): {@link
         * AddressPreviousAttributes} or null. The merchant's business address. address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. address.anyOf[2] (Value): null. api_version
         * (Optional): string or null. Default API version for requests without a Flint-Version
         * header. Shared across live and test environments. api_version.anyOf[1] (Value): string.
         * Default API version for requests without a Flint-Version header. Shared across live and
         * test environments. api_version.anyOf[2] (Value): null. api_version_changed_at
         * (Optional): string or null. When the merchant's default API version last changed.
         * api_version_changed_at.anyOf[1] (Value): string. When the merchant's default API version
         * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_changed_at.anyOf[2] (Value): null. api_version_pinned_at (Optional): string
         * or null. When the merchant's default API version was first set.
         * api_version_pinned_at.anyOf[1] (Value): string. When the merchant's default API version
         * was first set. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_pinned_at.anyOf[2] (Value): null. api_version_previous (Optional): string or
         * null. Previous API version, present while a supported rollback is available.
         * api_version_previous.anyOf[1] (Value): string. Previous API version, present while a
         * supported rollback is available. api_version_previous.anyOf[2] (Value): null.
         * api_version_rollback_expires_at (Optional): string or null. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * api_version_rollback_expires_at.anyOf[1] (Value): string. When the 72-hour rollback
         * offer expires. Explicit changes to any supported version remain available afterward.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * api_version_rollback_expires_at.anyOf[2] (Value): null. business_name (Optional): string
         * or null. Business name buyers see on checkout, payment links, and receipts. Once the
         * merchant starts verification, it stays in sync with the business name on the live Stripe
         * account: a change on either side applies, and the latest change wins.
         * business_name.anyOf[1] (Value): string. Business name buyers see on checkout, payment
         * links, and receipts. Once the merchant starts verification, it stays in sync with the
         * business name on the live Stripe account: a change on either side applies, and the
         * latest change wins. business_name.anyOf[2] (Value): null. business_type (Optional):
         * string or null. Merchant's business type. - `other`: A business type Flint does not map
         * yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
         * business_type.anyOf[1] (Value): string. Merchant's business type. - `other`: A business
         * type Flint does not map yet. Value enum: "individual", "company", "non_profit",
         * "government_entity", "other". business_type.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. email (Optional): string or null or null. The
         * account's contact email address. A new account starts with the sign-up email. `null`
         * when none is set. email.anyOf[1] (Value): string or null. The account's contact email
         * address. A new account starts with the sign-up email. `null` when none is set.
         * email.anyOf[2] (Value): null. icon (Optional): {@link ImageAttachmentPreviousAttributes}
         * or null. A square image, at least 128 by 128 pixels, shown where the store needs a small
         * mark: browser tabs and compact headers. icon.anyOf[1] (Value): {@link
         * ImageAttachmentPreviousAttributes}. icon.anyOf[2] (Value): null. logo (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. The merchant's public brand mark.
         * logo.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}. logo.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. Stable identifier of the merchant.
         * merchant_id.anyOf[1] (Value): string. Stable identifier of the merchant. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. phone (Optional): string or null. The
         * account's contact phone number, in international format such as +12125551234.
         * phone.anyOf[1] (Value): string. The account's contact phone number, in international
         * format such as +12125551234. phone.anyOf[2] (Value): null. readiness (Optional): {@link
         * MerchantReadinessPreviousAttributes} or null. Whether the merchant can accept payments
         * and receive payouts, and what is still needed. readiness.anyOf[1] (Value): {@link
         * MerchantReadinessPreviousAttributes}. readiness.anyOf[2] (Value): null. status
         * (Optional): string or null. Whether Flint lets the account operate. `readiness` says
         * whether payments and payouts are available. Value enum: "active", "suspended",
         * "restricted", "closed". status.anyOf[1] (Value): string. Whether Flint lets the account
         * operate. `readiness` says whether payments and payouts are available. Value enum:
         * "active", "suspended", "restricted", "closed". status.anyOf[2] (Value): null.
         * support_email (Optional): string or null. Support email address shown to buyers, for
         * example on receipts and checkout. support_email.anyOf[1] (Value): string. Support email
         * address shown to buyers, for example on receipts and checkout. support_email.anyOf[2]
         * (Value): null. support_phone (Optional): string or null. Support phone number shown to
         * buyers, in international format such as +12125551234. support_phone.anyOf[1] (Value):
         * string. Support phone number shown to buyers, in international format such as
         * +12125551234. support_phone.anyOf[2] (Value): null. support_url (Optional): string or
         * null. Support page shown to buyers. support_url.anyOf[1] (Value): string. Support page
         * shown to buyers. support_url.anyOf[2] (Value): null. timezone (Optional): string or
         * null. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
         * locations, notifications, and reporting when a request omits its time zone. Omitted when
         * unset; UTC then applies until the first live Location sets it. Sandbox Locations do not
         * set the business time zone. Existing resources keep their saved time zone.
         * timezone.anyOf[1] (Value): string. Business IANA time zone, such as America/New_York.
         * Used for invoice deadlines, new locations, notifications, and reporting when a request
         * omits its time zone. Omitted when unset; UTC then applies until the first live Location
         * sets it. Sandbox Locations do not set the business time zone. Existing resources keep
         * their saved time zone. timezone.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Merchant version. Profile, status, and API version changes
         * advance this version, including business name and business type changes synced from the
         * payment provider. Readiness updates alone do not. version.anyOf[1] (Value): integer.
         * Merchant version. Profile, status, and API version changes advance this version,
         * including business name and business type changes synced from the payment provider.
         * Readiness updates alone do not. Format: int64. minimum: 1. version.anyOf[2] (Value):
         * null. website_url (Optional): string or null. The business's website.
         * website_url.anyOf[1] (Value): string. The business's website. website_url.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The merchant's business address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
            /**
             * Default API version for requests without a Flint-Version header. Shared across live
             * and test environments. anyOf[1] (Value): string. Default API version for requests
             * without a Flint-Version header. Shared across live and test environments. anyOf[2]
             * (Value): null.
             */
            "api_version"?: ((string) | (null));
            /**
             * When the merchant's default API version last changed. anyOf[1] (Value): string. When
             * the merchant's default API version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_changed_at"?: ((string) | (null));
            /**
             * When the merchant's default API version was first set. anyOf[1] (Value): string.
             * When the merchant's default API version was first set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_pinned_at"?: ((string) | (null));
            /**
             * Previous API version, present while a supported rollback is available. anyOf[1]
             * (Value): string. Previous API version, present while a supported rollback is
             * available. anyOf[2] (Value): null.
             */
            "api_version_previous"?: ((string) | (null));
            /**
             * When the 72-hour rollback offer expires. Explicit changes to any supported version
             * remain available afterward. anyOf[1] (Value): string. When the 72-hour rollback
             * offer expires. Explicit changes to any supported version remain available afterward.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "api_version_rollback_expires_at"?: ((string) | (null));
            /**
             * Business name buyers see on checkout, payment links, and receipts. Once the merchant
             * starts verification, it stays in sync with the business name on the live Stripe
             * account: a change on either side applies, and the latest change wins. anyOf[1]
             * (Value): string. Business name buyers see on checkout, payment links, and receipts.
             * Once the merchant starts verification, it stays in sync with the business name on
             * the live Stripe account: a change on either side applies, and the latest change
             * wins. anyOf[2] (Value): null.
             */
            "business_name"?: ((string) | (null));
            /**
             * Merchant's business type. - `other`: A business type Flint does not map yet. Value
             * enum: "individual", "company", "non_profit", "government_entity", "other". anyOf[1]
             * (Value): string. Merchant's business type. - `other`: A business type Flint does not
             * map yet. Value enum: "individual", "company", "non_profit", "government_entity",
             * "other". anyOf[2] (Value): null.
             */
            "business_type"?: (("individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The account's contact email address. A new account starts with the sign-up email.
             * `null` when none is set. anyOf[1] (Value): string or null. The account's contact
             * email address. A new account starts with the sign-up email. `null` when none is set.
             * anyOf[2] (Value): null.
             */
            "email"?: ((string | null) | (null) | (unknown));
            /**
             * A square image, at least 128 by 128 pixels, shown where the store needs a small
             * mark: browser tabs and compact headers. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "icon"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * The merchant's public brand mark. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "logo"?: ((ImageAttachmentPreviousAttributes) | (null) | (unknown));
            /**
             * Stable identifier of the merchant. anyOf[1] (Value): string. Stable identifier of
             * the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * The account's contact phone number, in international format such as +12125551234.
             * anyOf[1] (Value): string. The account's contact phone number, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "phone"?: ((string) | (null));
            /**
             * Whether the merchant can accept payments and receive payouts, and what is still
             * needed. anyOf[1] (Value): {@link MerchantReadinessPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "readiness"?: ((MerchantReadinessPreviousAttributes) | (null) | (unknown));
            /**
             * Whether Flint lets the account operate. `readiness` says whether payments and
             * payouts are available. Value enum: "active", "suspended", "restricted", "closed".
             * anyOf[1] (Value): string. Whether Flint lets the account operate. `readiness` says
             * whether payments and payouts are available. Value enum: "active", "suspended",
             * "restricted", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "suspended" | "restricted" | "closed" | (string & {})) | (null));
            /**
             * Support email address shown to buyers, for example on receipts and checkout.
             * anyOf[1] (Value): string. Support email address shown to buyers, for example on
             * receipts and checkout. anyOf[2] (Value): null.
             */
            "support_email"?: ((string) | (null));
            /**
             * Support phone number shown to buyers, in international format such as +12125551234.
             * anyOf[1] (Value): string. Support phone number shown to buyers, in international
             * format such as +12125551234. anyOf[2] (Value): null.
             */
            "support_phone"?: ((string) | (null));
            /**
             * Support page shown to buyers. anyOf[1] (Value): string. Support page shown to
             * buyers. anyOf[2] (Value): null.
             */
            "support_url"?: ((string) | (null));
            /**
             * Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
             * locations, notifications, and reporting when a request omits its time zone. Omitted
             * when unset; UTC then applies until the first live Location sets it. Sandbox
             * Locations do not set the business time zone. Existing resources keep their saved
             * time zone. anyOf[1] (Value): string. Business IANA time zone, such as
             * America/New_York. Used for invoice deadlines, new locations, notifications, and
             * reporting when a request omits its time zone. Omitted when unset; UTC then applies
             * until the first live Location sets it. Sandbox Locations do not set the business
             * time zone. Existing resources keep their saved time zone. anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Merchant version. Profile, status, and API version changes advance this version,
             * including business name and business type changes synced from the payment provider.
             * Readiness updates alone do not. anyOf[1] (Value): integer. Merchant version.
             * Profile, status, and API version changes advance this version, including business
             * name and business type changes synced from the payment provider. Readiness updates
             * alone do not. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * The business's website. anyOf[1] (Value): string. The business's website. anyOf[2]
             * (Value): null.
             */
            "website_url"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "merchant.updated". */
    "event_type"?: "merchant.updated";
});
/** Fields shared by merchant webhook payloads. */
export type MerchantWebhookEnvelope = ({
    /**
     * API version used to render this delivery attempt. The older of the event version and the
     * endpoint version when the attempt runs, with default resolved to the merchant pin. Format:
     * date. Example: "2026-08-02".
     */
    "api_version": string;
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The resource snapshot recorded for this event and rendered at the delivery API version.
     * object (Required): object. The affected public resource without expansions, client authority
     * fields, or fields computed for an individual caller. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data": {
        /**
         * The affected public resource without expansions, client authority fields, or fields
         * computed for an individual caller.
         */
        "object": {
            [key: string]: unknown;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: {
            [key: string]: unknown;
        };
    };
    /**
     * The origin of the event. Selects the webhook envelope and the fields in source. Value enum:
     * "merchant".
     */
    "event_source": "merchant" | (string & {});
    /**
     * The resource change or condition this event announces. Value enum: "api_key.created",
     * "api_key.updated", "api_key.revoked", "test_clock.created", "test_clock.advancing",
     * "test_clock.ready", "test_clock.failed", "test_clock.archived", "tax_connection.updated",
     * "customer_deletion_request.processing", "customer_deletion_request.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.suppressed", "fulfillment.canceled", "fulfillment.failed",
     * "merchant.updated", "product.created", "product.updated", "product.archived",
     * "product_variant.created", "product_variant.updated", "product_variant.archived",
     * "bundle.created", "bundle.updated", "bundle.archived", "price_list.created",
     * "price_list.updated", "price_list.archived", "reader.created", "reader.updated",
     * "reader.archived", "category.created", "category.updated", "category.deleted",
     * "modifier_group.created", "modifier_group.updated", "modifier_group.archived",
     * "modifier_set.created", "modifier_set.updated", "modifier_set.archived",
     * "promotion.created", "promotion.updated", "promotion.archived", "promotion_code.created",
     * "promotion_code.updated", "promotion_code.archived", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated",
     * "checkout_session.partially_paid", "checkout_session.created", "checkout_session.updated",
     * "checkout_session.paid", "checkout_session.closed", "checkout_session.expired",
     * "checkout_session.invalidated", "credit_note_allocation.created",
     * "credit_note_allocation.reversed", "credit_note.created", "credit_note.issued",
     * "credit_note.updated", "credit_note.voided", "customer_email_preferences.updated",
     * "customer.created", "customer_deletion_request.completed",
     * "customer_deletion_request.rejected", "customer_deletion_request.created",
     * "customer.updated", "customer.deleted", "custom_domain.updated", "custom_domain.archived",
     * "dispute.created", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.inquiry_closed", "dispute.won", "fraud_warning.created",
     * "fraud_warning.updated", "ticket.created", "ticket.voided", "ticket.checked_in",
     * "ticket.updated", "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created",
     * "delivery_rate_callback.archived", "tax_calculation_callback.archived",
     * "delivery_rate_callback.created", "tax_calculation_callback.created",
     * "delivery_rate_callback.deactivated", "tax_calculation_callback.deactivated",
     * "delivery_rate_callback.activated", "tax_calculation_callback.activated",
     * "delivery_rate_callback.updated", "tax_calculation_callback.updated",
     * "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated",
     * "delivery_method.activated", "delivery_method.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_profile.archived", "delivery_profile.created", "delivery_profile.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "invoice.collection_block_resolved",
     * "invoice.collection_blocked", "invoice.credited", "invoice.created", "invoice.issued",
     * "invoice.issue_failed", "invoice.late_fee_due", "invoice.late_fee_assessed",
     * "invoice.late_fee_waived", "invoice.marked_uncollectible", "invoice_manual_payment.created",
     * "invoice_manual_payment.reversed", "invoice.overdue", "invoice.paid",
     * "invoice_payment_attempt.processing", "invoice_payment_attempt.canceled",
     * "invoice_payment_attempt.expired", "invoice_payment_attempt.failed",
     * "invoice_payment_attempt.succeeded", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "inventory_reservation.action_required",
     * "inventory_count.applied", "inventory_count.updated", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_reservation.updated", "inventory_level.shortage_detected",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
     * "merchant_billing_balance.updated", "merchant.readiness_updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "order.partially_refunded", "order.closed", "order_edit.completed", "order_edit.canceled",
     * "order_edit.updated", "order_edit.created", "order.created", "fulfillment.completed",
     * "fulfillment.created", "fulfillment_event.created", "package.created", "package.updated",
     * "shipment.created", "shipment.updated", "fulfillment.updated",
     * "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.partially_paid", "order.paid", "order.refunded", "order.updated",
     * "payment_intent.authorization_expiring", "payment_intent.expired", "payment_intent.updated",
     * "payment_intent.created", "payment_intent.canceled",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_link.created",
     * "payment_link.updated", "payment_method.archived", "payment_method.failed",
     * "payment_method.activated", "payment_method.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.succeeded", "payout.reversed", "payout.updated",
     * "payout_destination.created", "payout_destination.archived", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "refund.partially_succeeded",
     * "refund.succeeded", "refund.created", "refund.failed", "refund.updated", "report.failed",
     * "report.succeeded", "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.updated",
     * "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "payment_review.closed", "payment_review.reopened", "payment_review.opened",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded",
     * "subscription_payment_retry.created", "subscription_payment_retry.succeeded",
     * "subscription_payment_retry.failed", "subscription.reactivated", "subscription.resumed",
     * "subscription.end_upcoming", "subscription.renewal_upcoming", "subscription.trial_ending",
     * "subscription.plan_change_scheduled", "subscription.plan_change_canceled",
     * "subscription.plan_changed", "subscription.updated",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.cycle_skipped",
     * "subscription_delivery_migration.completed", "partner_app.updated",
     * "partner_app.platform_approved", "partner_app.platform_limited",
     * "partner_app.platform_rejected", "platform_fee_payout.created",
     * "platform_fee_payout.succeeded", "platform_fee_payout.failed", "payment_split.created",
     * "payment_split.succeeded", "payment_split.failed", "payment_split.canceled",
     * "payment_split.updated", "platform_fee.created", "platform_fee.succeeded",
     * "platform_fee.canceled", "platform_fee.updated".
     */
    "event_type": "api_key.created"
        | "api_key.updated"
        | "api_key.revoked"
        | "test_clock.created"
        | "test_clock.advancing"
        | "test_clock.ready"
        | "test_clock.failed"
        | "test_clock.archived"
        | "tax_connection.updated"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.suppressed"
        | "fulfillment.canceled"
        | "fulfillment.failed"
        | "merchant.updated"
        | "product.created"
        | "product.updated"
        | "product.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "product_variant.archived"
        | "bundle.created"
        | "bundle.updated"
        | "bundle.archived"
        | "price_list.created"
        | "price_list.updated"
        | "price_list.archived"
        | "reader.created"
        | "reader.updated"
        | "reader.archived"
        | "category.created"
        | "category.updated"
        | "category.deleted"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_group.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "modifier_set.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "promotion_code.archived"
        | "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "checkout_session.partially_paid"
        | "checkout_session.created"
        | "checkout_session.updated"
        | "checkout_session.paid"
        | "checkout_session.closed"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "customer_email_preferences.updated"
        | "customer.created"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.rejected"
        | "customer_deletion_request.created"
        | "customer.updated"
        | "customer.deleted"
        | "custom_domain.updated"
        | "custom_domain.archived"
        | "dispute.created"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.inquiry_closed"
        | "dispute.won"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "ticket.created"
        | "ticket.voided"
        | "ticket.checked_in"
        | "ticket.updated"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "delivery_rate_callback.archived"
        | "tax_calculation_callback.archived"
        | "delivery_rate_callback.created"
        | "tax_calculation_callback.created"
        | "delivery_rate_callback.deactivated"
        | "tax_calculation_callback.deactivated"
        | "delivery_rate_callback.activated"
        | "tax_calculation_callback.activated"
        | "delivery_rate_callback.updated"
        | "tax_calculation_callback.updated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.activated"
        | "delivery_method.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.updated"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.credited"
        | "invoice.created"
        | "invoice.issued"
        | "invoice.issue_failed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.succeeded"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "inventory_reservation.action_required"
        | "inventory_count.applied"
        | "inventory_count.updated"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_reservation.updated"
        | "inventory_level.shortage_detected"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
        | "merchant_billing_balance.updated"
        | "merchant.readiness_updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "order.partially_refunded"
        | "order.closed"
        | "order_edit.completed"
        | "order_edit.canceled"
        | "order_edit.updated"
        | "order_edit.created"
        | "order.created"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment_event.created"
        | "package.created"
        | "package.updated"
        | "shipment.created"
        | "shipment.updated"
        | "fulfillment.updated"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.partially_paid"
        | "order.paid"
        | "order.refunded"
        | "order.updated"
        | "payment_intent.authorization_expiring"
        | "payment_intent.expired"
        | "payment_intent.updated"
        | "payment_intent.created"
        | "payment_intent.canceled"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_method.activated"
        | "payment_method.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.succeeded"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.created"
        | "payout_destination.archived"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.created"
        | "refund.failed"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "payment_review.closed"
        | "payment_review.reopened"
        | "payment_review.opened"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.succeeded"
        | "subscription_payment_retry.failed"
        | "subscription.reactivated"
        | "subscription.resumed"
        | "subscription.end_upcoming"
        | "subscription.renewal_upcoming"
        | "subscription.trial_ending"
        | "subscription.plan_change_scheduled"
        | "subscription.plan_change_canceled"
        | "subscription.plan_changed"
        | "subscription.updated"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.cycle_skipped"
        | "subscription_delivery_migration.completed"
        | "partner_app.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "platform_fee_payout.created"
        | "platform_fee_payout.succeeded"
        | "platform_fee_payout.failed"
        | "payment_split.created"
        | "payment_split.succeeded"
        | "payment_split.failed"
        | "payment_split.canceled"
        | "payment_split.updated"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.canceled"
        | "platform_fee.updated"
        | (string & {});
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /**
     * 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered
     * afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     * The originating request. `null` when the event has no originating request ID. id (Required):
     * string. Request ID of the request that caused the event. idempotency_key (Optional): string.
     * The Idempotency-Key the originating request sent. Absent when it sent none.
     */
    "request": {
        /** Request ID of the request that caused the event. */
        "id": string;
        /** The Idempotency-Key the originating request sent. Absent when it sent none. */
        "idempotency_key"?: string;
    }
        | null;
    /**
     * Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode.
     * Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /** true for a synthetic event sent from the test-events endpoint, false otherwise. */
    "test": boolean;
    /**
     * Stable ID of the recorded webhook event, shared by its delivery attempts. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
});
/**
 * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
 * Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
 * maps written before those limits may not satisfy them.
 */
export type MetadataMap = Record<string, string>;
/**
 * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
 * sets a value, a null value deletes the key, and an empty object makes no change; send null for
 * the whole field to clear all caller-owned metadata. The resulting map is limited the same way as
 * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
 * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
 * that does not exist is allowed, so the number of operations is not itself the stored-map limit.
 * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
 */
export type MetadataPatchRequest = Record<string, string | null>;
/**
 * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
 * sets a value, a null value deletes the key, and an empty object makes no change; send null for
 * the whole field to clear all caller-owned metadata. The resulting map is limited the same way as
 * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
 * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
 * that does not exist is allowed, so the number of operations is not itself the stored-map limit.
 * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
 */
export type MetadataPatchRequestInput = MetadataPatchRequest;
/**
 * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
 * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
 * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and
 * keys starting with flint_ are reserved for Flint. maxProperties: 50.
 */
export type MetadataRequestInput = MetadataMap;
/** A purchasable customization choice. */
export type Modifier = {
    /**
     * When the modifier was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Identifier of the group that owns this modifier. For an inline group, read the group through
     * its modifier set. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /** Name of the choice shown to buyers. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position": number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     */
    "selected_by_default": boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment": boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt": boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
    /**
     * When the modifier last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
};
/** A group of choices that customize an item. */
export type ModifierGroup = {
    /** Whether buyers can select more than one unit of a list modifier. */
    "allow_quantities": boolean;
    /**
     * When the modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
    /**
     * Identifier of the merchant that owns this modifier group. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`),
     * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
     * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type": "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link Modifier}. A
     * purchasable customization choice.
     */
    "modifiers": Array<Modifier>;
    /** Name of the modifier group shown to buyers. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment": boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt": boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group: whether input is required or
     * multiline, and its length limits.
     */
    "text"?: TextModifierConfig;
    /**
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
    "version": number;
};
export type ModifierGroupArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allow_quantities"?: ((boolean) | (null));
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "max_quantity"?: ((number) | (null));
            "max_selected"?: ((number) | (null));
            "max_total_quantity"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "min_quantity"?: ((number) | (null));
            "min_selected"?: ((number) | (null));
            "modifier_group_id"?: ((string) | (null));
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            "name"?: ((string) | (null));
            "show_on_fulfillment"?: ((boolean) | (null));
            "show_on_receipt"?: ((boolean) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_group.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allow_quantities"?: ((boolean) | (null));
            "created_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "max_quantity"?: ((number) | (null));
            "max_selected"?: ((number) | (null));
            "max_total_quantity"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "min_quantity"?: ((number) | (null));
            "min_selected"?: ((number) | (null));
            "modifier_group_id"?: ((string) | (null));
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            "name"?: ((string) | (null));
            "show_on_fulfillment"?: ((boolean) | (null));
            "show_on_receipt"?: ((boolean) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_group.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_group.archived";
});
/**
 * The `modifier_group.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object and {@link ModifierGroupPreviousAttributes}. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allow_quantities (Optional): boolean or null. Whether buyers can select
     * more than one unit of a list modifier. previous_attributes.allow_quantities.anyOf[1]
     * (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * previous_attributes.allow_quantities.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the modifier group was created, as an RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the modifier group was
     * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.max_quantity (Optional): integer or null. Maximum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. previous_attributes.max_quantity.anyOf[1] (Value): integer. Maximum whole-number
     * quantity for each selected list modifier when allow_quantities is true; fractional
     * quantities are not supported. Format: int64. previous_attributes.max_quantity.anyOf[2]
     * (Value): null. previous_attributes.max_selected (Optional): integer or null. Maximum number
     * of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier
     * set can override this value. previous_attributes.max_selected.anyOf[1] (Value): integer.
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     * previous_attributes.max_selected.anyOf[2] (Value): null.
     * previous_attributes.max_total_quantity (Optional): integer or null. Maximum combined
     * whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. previous_attributes.max_total_quantity.anyOf[1] (Value): integer. Maximum
     * combined whole-number quantity across selected list modifiers; fractional quantities are not
     * supported. Format: int64. previous_attributes.max_total_quantity.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this modifier group. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns this modifier group. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.min_quantity
     * (Optional): integer or null. Minimum whole-number quantity for each selected list modifier
     * when allow_quantities is true; fractional quantities are not supported.
     * previous_attributes.min_quantity.anyOf[1] (Value): integer. Minimum whole-number quantity
     * for each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. previous_attributes.min_quantity.anyOf[2] (Value): null.
     * previous_attributes.min_selected (Optional): integer or null. Minimum number of distinct
     * modifiers buyers must select from a list group. Omit it to require no selections. A modifier
     * set can override this value. previous_attributes.min_selected.anyOf[1] (Value): integer.
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     * previous_attributes.min_selected.anyOf[2] (Value): null.
     * previous_attributes.modifier_group_id (Optional): string or null. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
     * previous_attributes.modifier_group_id.anyOf[1] (Value): string. Stable identifier of the
     * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
     * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9". previous_attributes.modifier_group_id.anyOf[2] (Value):
     * null. previous_attributes.modifier_group_type (Optional): string or null. Whether buyers
     * choose from a list of modifiers or enter text. On create, inferred as text when text
     * configuration is supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[1] (Value): string. Whether buyers choose from
     * a list of modifiers or enter text. On create, inferred as text when text configuration is
     * supplied, otherwise list. Value enum: "list", "text".
     * previous_attributes.modifier_group_type.anyOf[2] (Value): null.
     * previous_attributes.modifiers (Optional): Array of {@link ModifierPreviousAttributes} or
     * null. Choices in a list group. Only active modifiers whose set override's available is not
     * false are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1] (Value): Array of {@link ModifierPreviousAttributes}.
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices.
     * previous_attributes.modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
     * previous_attributes.modifiers.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name of the modifier group shown to buyers.
     * previous_attributes.name.anyOf[1] (Value): string. Name of the modifier group shown to
     * buyers. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.show_on_fulfillment (Optional): boolean or null. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
     * this group appear in fulfillment details unless overridden for a modifier set.
     * previous_attributes.show_on_fulfillment.anyOf[2] (Value): null.
     * previous_attributes.show_on_receipt (Optional): boolean or null. Whether selections from
     * this group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
     * group appear on buyer receipts unless overridden for a modifier set.
     * previous_attributes.show_on_receipt.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status of the modifier group. Only active groups can
     * be offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.text
     * (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules for a
     * text group. Use text.required to require a value; list groups use min_selected instead.
     * previous_attributes.text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
     * previous_attributes.text.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. When the modifier group or its modifiers last changed, as an RFC3339
     * timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When the modifier group
     * or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Version of the modifier group and
     * its modifiers. previous_attributes.version.anyOf[1] (Value): integer. Version of the
     * modifier group and its modifiers. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allow_quantities (Optional): boolean or null.
         * Whether buyers can select more than one unit of a list modifier.
         * allow_quantities.anyOf[1] (Value): boolean. Whether buyers can select more than one unit
         * of a list modifier. allow_quantities.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When the modifier group was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When the modifier group was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. max_quantity
         * (Optional): integer or null. Maximum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported.
         * max_quantity.anyOf[1] (Value): integer. Maximum whole-number quantity for each selected
         * list modifier when allow_quantities is true; fractional quantities are not supported.
         * Format: int64. max_quantity.anyOf[2] (Value): null. max_selected (Optional): integer or
         * null. Maximum number of distinct modifiers buyers can select from a list group. Omit it
         * for no limit. A modifier set can override this value. max_selected.anyOf[1] (Value):
         * integer. Maximum number of distinct modifiers buyers can select from a list group. Omit
         * it for no limit. A modifier set can override this value. Format: int32.
         * max_selected.anyOf[2] (Value): null. max_total_quantity (Optional): integer or null.
         * Maximum combined whole-number quantity across selected list modifiers; fractional
         * quantities are not supported. max_total_quantity.anyOf[1] (Value): integer. Maximum
         * combined whole-number quantity across selected list modifiers; fractional quantities are
         * not supported. Format: int64. max_total_quantity.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. Identifier of the merchant that owns this modifier group.
         * merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null.
         * metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be
         * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
         * cannot be written through the public API. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. min_quantity (Optional): integer or null.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. min_quantity.anyOf[1] (Value): integer.
         * Minimum whole-number quantity for each selected list modifier when allow_quantities is
         * true; fractional quantities are not supported. Format: int64. min_quantity.anyOf[2]
         * (Value): null. min_selected (Optional): integer or null. Minimum number of distinct
         * modifiers buyers must select from a list group. Omit it to require no selections. A
         * modifier set can override this value. min_selected.anyOf[1] (Value): integer. Minimum
         * number of distinct modifiers buyers must select from a list group. Omit it to require no
         * selections. A modifier set can override this value. Format: int32. min_selected.anyOf[2]
         * (Value): null. modifier_group_id (Optional): string or null. Stable identifier of the
         * modifier group. For a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
         * modifier_group_id.anyOf[1] (Value): string. Stable identifier of the modifier group. For
         * a group a modifier set owns (`source: inline`), read it through `GET
         * /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example:
         * "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_id.anyOf[2] (Value): null.
         * modifier_group_type (Optional): string or null. Whether buyers choose from a list of
         * modifiers or enter text. On create, inferred as text when text configuration is
         * supplied, otherwise list. Value enum: "list", "text". modifier_group_type.anyOf[1]
         * (Value): string. Whether buyers choose from a list of modifiers or enter text. On
         * create, inferred as text when text configuration is supplied, otherwise list. Value
         * enum: "list", "text". modifier_group_type.anyOf[2] (Value): null. modifiers (Optional):
         * Array of {@link ModifierPreviousAttributes} or null. Choices in a list group. Only
         * active modifiers whose set override's available is not false are offered to buyers. Text
         * groups do not have choices. modifiers.anyOf[1] (Value): Array of {@link
         * ModifierPreviousAttributes}. Choices in a list group. Only active modifiers whose set
         * override's available is not false are offered to buyers. Text groups do not have
         * choices. modifiers.anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
         * modifiers.anyOf[2] (Value): null. name (Optional): string or null. Name of the modifier
         * group shown to buyers. name.anyOf[1] (Value): string. Name of the modifier group shown
         * to buyers. name.anyOf[2] (Value): null. show_on_fulfillment (Optional): boolean or null.
         * Whether selections from this group appear in fulfillment details unless overridden for a
         * modifier set. show_on_fulfillment.anyOf[1] (Value): boolean. Whether selections from
         * this group appear in fulfillment details unless overridden for a modifier set.
         * show_on_fulfillment.anyOf[2] (Value): null. show_on_receipt (Optional): boolean or null.
         * Whether selections from this group appear on buyer receipts unless overridden for a
         * modifier set. show_on_receipt.anyOf[1] (Value): boolean. Whether selections from this
         * group appear on buyer receipts unless overridden for a modifier set.
         * show_on_receipt.anyOf[2] (Value): null. status (Optional): string or null. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". status.anyOf[1] (Value): string. Lifecycle status of the modifier group.
         * Only active groups can be offered to buyers; archived groups remain readable and cannot
         * be edited. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null.
         * text (Optional): {@link TextModifierConfigPreviousAttributes} or null. Text entry rules
         * for a text group. Use text.required to require a value; list groups use min_selected
         * instead. text.anyOf[1] (Value): {@link TextModifierConfigPreviousAttributes}.
         * text.anyOf[2] (Value): null. updated_at (Optional): string or null. When the modifier
         * group or its modifiers last changed, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the modifier group or its modifiers last changed, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Version of the modifier group and
         * its modifiers. version.anyOf[1] (Value): integer. Version of the modifier group and its
         * modifiers. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether buyers can select more than one unit of a list modifier. anyOf[1] (Value):
             * boolean. Whether buyers can select more than one unit of a list modifier. anyOf[2]
             * (Value): null.
             */
            "allow_quantities"?: ((boolean) | (null));
            /**
             * When the modifier group was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the modifier group was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_quantity"?: ((number) | (null));
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. anyOf[1] (Value): integer.
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32. anyOf[2]
             * (Value): null.
             */
            "max_selected"?: ((number) | (null));
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. anyOf[1] (Value): integer. Maximum combined
             * whole-number quantity across selected list modifiers; fractional quantities are not
             * supported. Format: int64. anyOf[2] (Value): null.
             */
            "max_total_quantity"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns this modifier group. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum
             * whole-number quantity for each selected list modifier when allow_quantities is true;
             * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
             */
            "min_quantity"?: ((number) | (null));
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. anyOf[1] (Value):
             * integer. Minimum number of distinct modifiers buyers must select from a list group.
             * Omit it to require no selections. A modifier set can override this value. Format:
             * int32. anyOf[2] (Value): null.
             */
            "min_selected"?: ((number) | (null));
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. anyOf[1] (Value): string. Stable identifier
             * of the modifier group. For a group a modifier set owns (`source: inline`), read it
             * through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
             * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
             */
            "modifier_group_id"?: ((string) | (null));
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text". anyOf[1] (Value): string. Whether buyers choose from a list of modifiers or
             * enter text. On create, inferred as text when text configuration is supplied,
             * otherwise list. Value enum: "list", "text". anyOf[2] (Value): null.
             */
            "modifier_group_type"?: (("list" | "text" | (string & {})) | (null));
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. anyOf[1] (Value):
             * Array of {@link ModifierPreviousAttributes}. Choices in a list group. Only active
             * modifiers whose set override's available is not false are offered to buyers. Text
             * groups do not have choices. anyOf[1][] (Value): {@link ModifierPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "modifiers"?: ((Array<ModifierPreviousAttributes>) | (null));
            /**
             * Name of the modifier group shown to buyers. anyOf[1] (Value): string. Name of the
             * modifier group shown to buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group
             * appear in fulfillment details unless overridden for a modifier set. anyOf[2]
             * (Value): null.
             */
            "show_on_fulfillment"?: ((boolean) | (null));
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear
             * on buyer receipts unless overridden for a modifier set. anyOf[2] (Value): null.
             */
            "show_on_receipt"?: ((boolean) | (null));
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier
             * group. Only active groups can be offered to buyers; archived groups remain readable
             * and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. anyOf[1] (Value): {@link
             * TextModifierConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "text"?: ((TextModifierConfigPreviousAttributes) | (null) | (unknown));
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * anyOf[1] (Value): string. When the modifier group or its modifiers last changed, as
             * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Version of the modifier group and its modifiers. anyOf[1] (Value): integer. Version
             * of the modifier group and its modifiers. Format: uint64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
