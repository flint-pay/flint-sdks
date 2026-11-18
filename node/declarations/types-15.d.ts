import type { CredentialProvider, InputValue } from '../runtime.js';
import type { ExpandedInvoiceSummary, ExpandedInvoiceSummaryPreviousAttributes, DisputesAcceptParams } from './types-26.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type {
    TaxCurrencyConversion,
    TaxIdentity,
    TaxCurrencyConversionPreviousAttributes,
    TaxIdentityPreviousAttributes
} from './types-74.js';
import type { MerchantWebhookEnvelope } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { ResponseMeta } from './types-62.js';
import type { Invoice } from './types-34.js';
import type { CreateCreditNoteAllocationRequestInput, CreateCreditNoteRequestInput } from './types-8.js';
import type { IssueCreditNoteRequestInput, InvoicesMarkUncollectibleParams } from './types-38.js';
import type { UpdateCreditNoteRequestInput } from './types-75.js';
import type { CreateCustomDomainRequestInput } from './types-9.js';
export interface Credentials {
    "checkout": {
        "CheckoutSessionBearer": string | CredentialProvider;
    };
    "customer": {
        "CustomerSessionBearer": string | CredentialProvider;
    };
    "invoice": {
        "InvoiceAccessTokenBearer": string | CredentialProvider;
    };
    "merchant": {
        "BearerAuth": string | CredentialProvider;
    };
    "onboarding": {
        "OnboardingSessionBearer": string | CredentialProvider;
    };
}
/**
 * A correction against an issued invoice. Credit notes reduce what is owed; refunds return what
 * was already collected.
 */
export type CreditNote = {
    /**
     * Credit applied to the invoice, net of reversed allocations. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "allocated_money": MoneyValue;
    /**
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "available_money": MoneyValue;
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes. anyOf[1]
     * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
     * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for
     * an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other
     * IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing
     * the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value):
     * null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /** When the credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
    "credit_note_id": string;
    /** Assigned at issue and stable from then on. Absent while the credit note is a draft. */
    "credit_note_number"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. `null` when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded.
     */
    "invoice"?: ExpandedInvoiceSummary;
    /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "issued_at"?: string;
    /**
     * Status of the most recent refund linked to this credit note. Absent when no refund has been
     * requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Itemized corrections against frozen invoice lines. Amount and quantity corrections share
     * each source line's remaining value, discount, and tax across issued credit notes that have
     * not been voided. Drafts reserve no credit. [] (Value): {@link CreditNoteLineItem}. One
     * correction calculated from the frozen invoice line's remaining billed value, discount, and
     * tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices
     * and tax settings do not affect the correction. Stored issued values are never recalculated
     * by a read.
     */
    "line_items": Array<CreditNoteLineItem>;
    /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
    "memo": string | null;
    /** The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or
     * is canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "pending_refund_money": MoneyValue;
    /**
     * Why the invoice is being corrected. Shown on the credit note document. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
    /**
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured. anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Flint
     * does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ
     * destination to its tax provider, which can apply a reverse charge; other IDs do not change
     * tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * draft while the credit note is editable, issued once it is numbered and frozen, voided once
     * withdrawn. Value enum: "draft", "issued", "voided".
     */
    "status": "draft" | "issued" | "voided" | (string & {});
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "issue", "void". [] (Value): string. Value enum: "issue",
     * "void".
     */
    "supported_actions": Array<"issue" | "void" | (string & {})>;
    /**
     * The credit note's VAT stated in the currency of the country that charges it, frozen at
     * issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source
     * from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. [] (Value): {@link TaxCurrencyConversion}. VAT on
     * an issued document converted into the currency of the country whose VAT is charged.
     */
    "tax_currency_conversions": Array<TaxCurrencyConversion>;
    /**
     * The face value of the credit note, the sum of its lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the credit note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current credit note version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /**
     * When the credit note was voided. Absent unless its status is voided. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "voided_at"?: string;
};
/**
 * One application of credit to the invoice. Allocations are append-only: a reversal sets
 * reversed_at rather than removing the row.
 */
export type CreditNoteAllocation = {
    /**
     * When the credit was applied to the invoice balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "allocated_at": string;
    /**
     * Credit applied to the invoice balance. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". */
    "credit_note_allocation_id": string;
    /** The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
    "credit_note_id": string;
    /**
     * The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key
     * for an allocation made on issue. Filterable on the allocations list.
     */
    "idempotency_key": string;
    /** The invoice whose balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * When the allocation was reversed and its credit returned. Absent while the allocation
     * stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "reversed_at"?: string;
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "reverse". [] (Value): string. Value enum: "reverse".
     */
    "supported_actions": Array<"reverse" | (string & {})>;
};
export type CreditNoteAllocationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_at": string;
            "amount_money": MoneyValue;
            "credit_note_allocation_id": string;
            "credit_note_id": string;
            "idempotency_key": string;
            "invoice_id": string;
            "reversed_at"?: string;
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "credit_note_allocation.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_at": string;
            "amount_money": MoneyValue;
            "credit_note_allocation_id": string;
            "credit_note_id": string;
            "idempotency_key": string;
            "invoice_id": string;
            "reversed_at"?: string;
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "credit_note_allocation.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "credit_note_allocation.created";
});
/**
 * The `credit_note_allocation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CreditNoteAllocationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_at (Required): string. When the credit was applied to
     * the invoice balance. Format: date-time. Example: "2026-08-02T16:00:00Z". object.amount_money
     * (Required): {@link MoneyValue}. Credit applied to the invoice balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.credit_note_allocation_id (Required): string. Unique identifier of the allocation.
     * Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". object.credit_note_id (Required): string. The
     * credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * object.idempotency_key (Required): string. The Idempotency-Key the caller sent when
     * allocating, or the issue request's Idempotency-Key for an allocation made on issue.
     * Filterable on the allocations list. object.invoice_id (Required): string. The invoice whose
     * balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.reversed_at
     * (Optional): string. When the allocation was reversed and its credit returned. Absent while
     * the allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "reverse". object.supported_actions[] (Value): string. Value enum: "reverse".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_at (Required): string. When the credit was applied to the invoice balance.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". amount_money (Required): {@link
         * MoneyValue}. Credit applied to the invoice balance. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. credit_note_allocation_id
         * (Required): string. Unique identifier of the allocation. Example:
         * "cna_01KEZF7C00EH6DMS9BD8F72CMA". credit_note_id (Required): string. The credit note
         * whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". idempotency_key
         * (Required): string. The Idempotency-Key the caller sent when allocating, or the issue
         * request's Idempotency-Key for an allocation made on issue. Filterable on the allocations
         * list. invoice_id (Required): string. The invoice whose balance the credit reduced.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". reversed_at (Optional): string. When the
         * allocation was reversed and its credit returned. Absent while the allocation stands.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". supported_actions (Required): Array
         * of string. Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "reverse". supported_actions[] (Value):
         * string. Value enum: "reverse".
         */
        "object": {
            /**
             * When the credit was applied to the invoice balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "allocated_at": string;
            /**
             * Credit applied to the invoice balance. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". */
            "credit_note_allocation_id": string;
            /**
             * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id": string;
            /**
             * The Idempotency-Key the caller sent when allocating, or the issue request's
             * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
             */
            "idempotency_key": string;
            /**
             * The invoice whose balance the credit reduced. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the allocation was reversed and its credit returned. Absent while the
             * allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "credit_note_allocation.created". */
    "event_type"?: "credit_note_allocation.created";
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
 * The `credit_note_allocation.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CreditNoteAllocationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_at (Required): string. When the credit was applied to
     * the invoice balance. Format: date-time. Example: "2026-08-02T16:00:00Z". object.amount_money
     * (Required): {@link MoneyValue}. Credit applied to the invoice balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.credit_note_allocation_id (Required): string. Unique identifier of the allocation.
     * Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". object.credit_note_id (Required): string. The
     * credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * object.idempotency_key (Required): string. The Idempotency-Key the caller sent when
     * allocating, or the issue request's Idempotency-Key for an allocation made on issue.
     * Filterable on the allocations list. object.invoice_id (Required): string. The invoice whose
     * balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.reversed_at
     * (Optional): string. When the allocation was reversed and its credit returned. Absent while
     * the allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "reverse". object.supported_actions[] (Value): string. Value enum: "reverse".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_at (Required): string. When the credit was applied to the invoice balance.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". amount_money (Required): {@link
         * MoneyValue}. Credit applied to the invoice balance. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. credit_note_allocation_id
         * (Required): string. Unique identifier of the allocation. Example:
         * "cna_01KEZF7C00EH6DMS9BD8F72CMA". credit_note_id (Required): string. The credit note
         * whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". idempotency_key
         * (Required): string. The Idempotency-Key the caller sent when allocating, or the issue
         * request's Idempotency-Key for an allocation made on issue. Filterable on the allocations
         * list. invoice_id (Required): string. The invoice whose balance the credit reduced.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". reversed_at (Optional): string. When the
         * allocation was reversed and its credit returned. Absent while the allocation stands.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". supported_actions (Required): Array
         * of string. Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "reverse". supported_actions[] (Value):
         * string. Value enum: "reverse".
         */
        "object": {
            /**
             * When the credit was applied to the invoice balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "allocated_at": string;
            /**
             * Credit applied to the invoice balance. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". */
            "credit_note_allocation_id": string;
            /**
             * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id": string;
            /**
             * The Idempotency-Key the caller sent when allocating, or the issue request's
             * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
             */
            "idempotency_key": string;
            /**
             * The invoice whose balance the credit reduced. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the allocation was reversed and its credit returned. Absent while the
             * allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "credit_note_allocation.created". */
    "event_type"?: "credit_note_allocation.created";
});
/** A page of `CreditNoteAllocation` objects. */
export type CreditNoteAllocationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * CreditNoteAllocation}. One application of credit to the invoice. Allocations are
     * append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data": Array<CreditNoteAllocation>;
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
/** A response containing `CreditNoteAllocation` data. */
export type CreditNoteAllocationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One application of
     * credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than
     * removing the row.
     */
    "data": CreditNoteAllocation;
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
/** The allocation, the credit note with its new available_money, and the recomputed invoice. */
export type CreditNoteAllocationResult = {
    /**
     * The credit note with its recomputed available_money and allocated_money. A correction
     * against an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "credit_note": CreditNote;
    /**
     * The allocation that was created or reversed. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "credit_note_allocation": CreditNoteAllocation;
    /**
     * The invoice with its recomputed outstanding balance and status. A bill issued to a customer.
     */
    "invoice": Invoice;
};
/** A response containing `CreditNoteAllocationResult` data. */
export type CreditNoteAllocationResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The allocation, the
     * credit note with its new available_money, and the recomputed invoice.
     */
    "data": CreditNoteAllocationResult;
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
export type CreditNoteAllocationReversedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_at": string;
            "amount_money": MoneyValue;
            "credit_note_allocation_id": string;
            "credit_note_id": string;
            "idempotency_key": string;
            "invoice_id": string;
            "reversed_at"?: string;
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_at"?: ((string) | (null));
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "credit_note_allocation_id"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "reversed_at"?: ((string) | (null));
            "supported_actions"?: ((Array<"reverse" | (string & {})>) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "credit_note_allocation.reversed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_at": string;
            "amount_money": MoneyValue;
            "credit_note_allocation_id": string;
            "credit_note_id": string;
            "idempotency_key": string;
            "invoice_id": string;
            "reversed_at"?: string;
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_at"?: ((string) | (null));
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "credit_note_allocation_id"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "reversed_at"?: ((string) | (null));
            "supported_actions"?: ((Array<"reverse" | (string & {})>) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "credit_note_allocation.reversed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "credit_note_allocation.reversed";
});
/**
 * The `credit_note_allocation.reversed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CreditNoteAllocationReversedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_at (Required): string. When the credit was applied to
     * the invoice balance. Format: date-time. Example: "2026-08-02T16:00:00Z". object.amount_money
     * (Required): {@link MoneyValue}. Credit applied to the invoice balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.credit_note_allocation_id (Required): string. Unique identifier of the allocation.
     * Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". object.credit_note_id (Required): string. The
     * credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * object.idempotency_key (Required): string. The Idempotency-Key the caller sent when
     * allocating, or the issue request's Idempotency-Key for an allocation made on issue.
     * Filterable on the allocations list. object.invoice_id (Required): string. The invoice whose
     * balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.reversed_at
     * (Optional): string. When the allocation was reversed and its credit returned. Absent while
     * the allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "reverse". object.supported_actions[] (Value): string. Value enum: "reverse".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_at (Optional): string or null. When the credit was applied to
     * the invoice balance. previous_attributes.allocated_at.anyOf[1] (Value): string. When the
     * credit was applied to the invoice balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.allocated_at.anyOf[2] (Value): null.
     * previous_attributes.amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit applied to the invoice balance. previous_attributes.amount_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value):
     * null. previous_attributes.credit_note_allocation_id (Optional): string or null. Unique
     * identifier of the allocation. previous_attributes.credit_note_allocation_id.anyOf[1]
     * (Value): string. Unique identifier of the allocation. Example:
     * "cna_01KEZF7C00EH6DMS9BD8F72CMA". previous_attributes.credit_note_allocation_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_id (Optional): string or null. The credit
     * note whose credit was applied. previous_attributes.credit_note_id.anyOf[1] (Value): string.
     * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * previous_attributes.credit_note_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key the
     * caller sent when allocating, or the issue request's Idempotency-Key for an allocation made
     * on issue. Filterable on the allocations list. previous_attributes.idempotency_key.anyOf[1]
     * (Value): string. The Idempotency-Key the caller sent when allocating, or the issue request's
     * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. The invoice whose balance the credit reduced.
     * previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice whose balance the
     * credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.reversed_at
     * (Optional): string or null. When the allocation was reversed and its credit returned. Absent
     * while the allocation stands. previous_attributes.reversed_at.anyOf[1] (Value): string. When
     * the allocation was reversed and its credit returned. Absent while the allocation stands.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.reversed_at.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "reverse". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "reverse".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "reverse".
     * previous_attributes.supported_actions.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_at (Required): string. When the credit was applied to the invoice balance.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". amount_money (Required): {@link
         * MoneyValue}. Credit applied to the invoice balance. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. credit_note_allocation_id
         * (Required): string. Unique identifier of the allocation. Example:
         * "cna_01KEZF7C00EH6DMS9BD8F72CMA". credit_note_id (Required): string. The credit note
         * whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". idempotency_key
         * (Required): string. The Idempotency-Key the caller sent when allocating, or the issue
         * request's Idempotency-Key for an allocation made on issue. Filterable on the allocations
         * list. invoice_id (Required): string. The invoice whose balance the credit reduced.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". reversed_at (Optional): string. When the
         * allocation was reversed and its credit returned. Absent while the allocation stands.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". supported_actions (Required): Array
         * of string. Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "reverse". supported_actions[] (Value):
         * string. Value enum: "reverse".
         */
        "object": {
            /**
             * When the credit was applied to the invoice balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "allocated_at": string;
            /**
             * Credit applied to the invoice balance. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". */
            "credit_note_allocation_id": string;
            /**
             * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id": string;
            /**
             * The Idempotency-Key the caller sent when allocating, or the issue request's
             * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
             */
            "idempotency_key": string;
            /**
             * The invoice whose balance the credit reduced. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the allocation was reversed and its credit returned. Absent while the
             * allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_at (Optional): string or null. When
         * the credit was applied to the invoice balance. allocated_at.anyOf[1] (Value): string.
         * When the credit was applied to the invoice balance. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". allocated_at.anyOf[2] (Value): null. amount_money (Optional):
         * {@link MoneyValuePreviousAttributes} or null. Credit applied to the invoice balance.
         * amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. credit_note_allocation_id (Optional): string or
         * null. Unique identifier of the allocation. credit_note_allocation_id.anyOf[1] (Value):
         * string. Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA".
         * credit_note_allocation_id.anyOf[2] (Value): null. credit_note_id (Optional): string or
         * null. The credit note whose credit was applied. credit_note_id.anyOf[1] (Value): string.
         * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
         * credit_note_id.anyOf[2] (Value): null. idempotency_key (Optional): string or null. The
         * Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key
         * for an allocation made on issue. Filterable on the allocations list.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key the caller sent when
         * allocating, or the issue request's Idempotency-Key for an allocation made on issue.
         * Filterable on the allocations list. idempotency_key.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice whose balance the credit reduced.
         * invoice_id.anyOf[1] (Value): string. The invoice whose balance the credit reduced.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null.
         * reversed_at (Optional): string or null. When the allocation was reversed and its credit
         * returned. Absent while the allocation stands. reversed_at.anyOf[1] (Value): string. When
         * the allocation was reversed and its credit returned. Absent while the allocation stands.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". reversed_at.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "reverse". supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
         * Flint accepts for this resource now, based on stored state. Independent of the caller's
         * permissions; each action still requires its route's scope. Always [] when no action is
         * available. [] enum: "reverse". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "reverse". supported_actions.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the credit was applied to the invoice balance. anyOf[1] (Value): string. When
             * the credit was applied to the invoice balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "allocated_at"?: ((string) | (null));
            /**
             * Credit applied to the invoice balance. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Unique identifier of the allocation. anyOf[1] (Value): string. Unique identifier of
             * the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". anyOf[2] (Value): null.
             */
            "credit_note_allocation_id"?: ((string) | (null));
            /**
             * The credit note whose credit was applied. anyOf[1] (Value): string. The credit note
             * whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2]
             * (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * The Idempotency-Key the caller sent when allocating, or the issue request's
             * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
             * anyOf[1] (Value): string. The Idempotency-Key the caller sent when allocating, or
             * the issue request's Idempotency-Key for an allocation made on issue. Filterable on
             * the allocations list. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * The invoice whose balance the credit reduced. anyOf[1] (Value): string. The invoice
             * whose balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             * anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the allocation was reversed and its credit returned. Absent while the
             * allocation stands. anyOf[1] (Value): string. When the allocation was reversed and
             * its credit returned. Absent while the allocation stands. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reversed_at"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". anyOf[1] (Value):
             * Array of string. Lifecycle actions Flint accepts for this resource now, based on
             * stored state. Independent of the caller's permissions; each action still requires
             * its route's scope. Always [] when no action is available. [] enum: "reverse".
             * anyOf[1][] (Value): string. Value enum: "reverse". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"reverse" | (string & {})>) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "credit_note_allocation.reversed". */
    "event_type"?: "credit_note_allocation.reversed";
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
 * The `credit_note_allocation.reversed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CreditNoteAllocationReversedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_at (Required): string. When the credit was applied to
     * the invoice balance. Format: date-time. Example: "2026-08-02T16:00:00Z". object.amount_money
     * (Required): {@link MoneyValue}. Credit applied to the invoice balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.credit_note_allocation_id (Required): string. Unique identifier of the allocation.
     * Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". object.credit_note_id (Required): string. The
     * credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * object.idempotency_key (Required): string. The Idempotency-Key the caller sent when
     * allocating, or the issue request's Idempotency-Key for an allocation made on issue.
     * Filterable on the allocations list. object.invoice_id (Required): string. The invoice whose
     * balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.reversed_at
     * (Optional): string. When the allocation was reversed and its credit returned. Absent while
     * the allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "reverse". object.supported_actions[] (Value): string. Value enum: "reverse".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_at (Optional): string or null. When the credit was applied to
     * the invoice balance. previous_attributes.allocated_at.anyOf[1] (Value): string. When the
     * credit was applied to the invoice balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.allocated_at.anyOf[2] (Value): null.
     * previous_attributes.amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit applied to the invoice balance. previous_attributes.amount_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value):
     * null. previous_attributes.credit_note_allocation_id (Optional): string or null. Unique
     * identifier of the allocation. previous_attributes.credit_note_allocation_id.anyOf[1]
     * (Value): string. Unique identifier of the allocation. Example:
     * "cna_01KEZF7C00EH6DMS9BD8F72CMA". previous_attributes.credit_note_allocation_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_id (Optional): string or null. The credit
     * note whose credit was applied. previous_attributes.credit_note_id.anyOf[1] (Value): string.
     * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * previous_attributes.credit_note_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key the
     * caller sent when allocating, or the issue request's Idempotency-Key for an allocation made
     * on issue. Filterable on the allocations list. previous_attributes.idempotency_key.anyOf[1]
     * (Value): string. The Idempotency-Key the caller sent when allocating, or the issue request's
     * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. The invoice whose balance the credit reduced.
     * previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice whose balance the
     * credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.reversed_at
     * (Optional): string or null. When the allocation was reversed and its credit returned. Absent
     * while the allocation stands. previous_attributes.reversed_at.anyOf[1] (Value): string. When
     * the allocation was reversed and its credit returned. Absent while the allocation stands.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.reversed_at.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "reverse". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "reverse".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "reverse".
     * previous_attributes.supported_actions.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_at (Required): string. When the credit was applied to the invoice balance.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". amount_money (Required): {@link
         * MoneyValue}. Credit applied to the invoice balance. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. credit_note_allocation_id
         * (Required): string. Unique identifier of the allocation. Example:
         * "cna_01KEZF7C00EH6DMS9BD8F72CMA". credit_note_id (Required): string. The credit note
         * whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". idempotency_key
         * (Required): string. The Idempotency-Key the caller sent when allocating, or the issue
         * request's Idempotency-Key for an allocation made on issue. Filterable on the allocations
         * list. invoice_id (Required): string. The invoice whose balance the credit reduced.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". reversed_at (Optional): string. When the
         * allocation was reversed and its credit returned. Absent while the allocation stands.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". supported_actions (Required): Array
         * of string. Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "reverse". supported_actions[] (Value):
         * string. Value enum: "reverse".
         */
        "object": {
            /**
             * When the credit was applied to the invoice balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "allocated_at": string;
            /**
             * Credit applied to the invoice balance. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". */
            "credit_note_allocation_id": string;
            /**
             * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id": string;
            /**
             * The Idempotency-Key the caller sent when allocating, or the issue request's
             * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
             */
            "idempotency_key": string;
            /**
             * The invoice whose balance the credit reduced. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string;
            /**
             * When the allocation was reversed and its credit returned. Absent while the
             * allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reversed_at"?: string;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". [] (Value):
             * string. Value enum: "reverse".
             */
            "supported_actions": Array<"reverse" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_at (Optional): string or null. When
         * the credit was applied to the invoice balance. allocated_at.anyOf[1] (Value): string.
         * When the credit was applied to the invoice balance. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". allocated_at.anyOf[2] (Value): null. amount_money (Optional):
         * {@link MoneyValuePreviousAttributes} or null. Credit applied to the invoice balance.
         * amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. credit_note_allocation_id (Optional): string or
         * null. Unique identifier of the allocation. credit_note_allocation_id.anyOf[1] (Value):
         * string. Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA".
         * credit_note_allocation_id.anyOf[2] (Value): null. credit_note_id (Optional): string or
         * null. The credit note whose credit was applied. credit_note_id.anyOf[1] (Value): string.
         * The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
         * credit_note_id.anyOf[2] (Value): null. idempotency_key (Optional): string or null. The
         * Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key
         * for an allocation made on issue. Filterable on the allocations list.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key the caller sent when
         * allocating, or the issue request's Idempotency-Key for an allocation made on issue.
         * Filterable on the allocations list. idempotency_key.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice whose balance the credit reduced.
         * invoice_id.anyOf[1] (Value): string. The invoice whose balance the credit reduced.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null.
         * reversed_at (Optional): string or null. When the allocation was reversed and its credit
         * returned. Absent while the allocation stands. reversed_at.anyOf[1] (Value): string. When
         * the allocation was reversed and its credit returned. Absent while the allocation stands.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". reversed_at.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "reverse". supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
         * Flint accepts for this resource now, based on stored state. Independent of the caller's
         * permissions; each action still requires its route's scope. Always [] when no action is
         * available. [] enum: "reverse". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "reverse". supported_actions.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When the credit was applied to the invoice balance. anyOf[1] (Value): string. When
             * the credit was applied to the invoice balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "allocated_at"?: ((string) | (null));
            /**
             * Credit applied to the invoice balance. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Unique identifier of the allocation. anyOf[1] (Value): string. Unique identifier of
             * the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA". anyOf[2] (Value): null.
             */
            "credit_note_allocation_id"?: ((string) | (null));
            /**
             * The credit note whose credit was applied. anyOf[1] (Value): string. The credit note
             * whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2]
             * (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * The Idempotency-Key the caller sent when allocating, or the issue request's
             * Idempotency-Key for an allocation made on issue. Filterable on the allocations list.
             * anyOf[1] (Value): string. The Idempotency-Key the caller sent when allocating, or
             * the issue request's Idempotency-Key for an allocation made on issue. Filterable on
             * the allocations list. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * The invoice whose balance the credit reduced. anyOf[1] (Value): string. The invoice
             * whose balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             * anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the allocation was reversed and its credit returned. Absent while the
             * allocation stands. anyOf[1] (Value): string. When the allocation was reversed and
             * its credit returned. Absent while the allocation stands. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reversed_at"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "reverse". anyOf[1] (Value):
             * Array of string. Lifecycle actions Flint accepts for this resource now, based on
             * stored state. Independent of the caller's permissions; each action still requires
             * its route's scope. Always [] when no action is available. [] enum: "reverse".
             * anyOf[1][] (Value): string. Value enum: "reverse". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"reverse" | (string & {})>) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "credit_note_allocation.reversed". */
    "event_type"?: "credit_note_allocation.reversed";
});
/**
 * How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`,
 * chosen by `type`.
 */
export type CreditNoteCorrectionRequest = ({
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. Format: int64.
     */
    "quantity"?: number;
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity", "amount".
     */
    "type": "quantity" | "amount" | (string & {});
})
    & ((Exclude<CreditNoteCorrectionRequestQuantity & object, readonly unknown[]>)
    | (Exclude<CreditNoteCorrectionRequestAmount & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `amount` variant of `CreditNoteCorrectionRequest`. */
export type CreditNoteCorrectionRequestAmount = ({
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "amount".
     */
    "type": "amount" | (string & {});
})
    & (({
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "amount".
     */
    "type": "amount" | (string & {});
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
export type CreditNoteCorrectionRequestAmountPreviousAttributes = ({
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "amount". anyOf[1]
     * (Value): string. quantity credits whole units and requires quantity. amount credits a named
     * figure and requires amount_money. The two are mutually exclusive. Value enum: "amount".
     * anyOf[2] (Value): null.
     */
    "type"?: (("amount" | (string & {})) | (null));
})
    & ({
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "amount". anyOf[1]
     * (Value): string. quantity credits whole units and requires quantity. amount credits a named
     * figure and requires amount_money. The two are mutually exclusive. Value enum: "amount".
     * anyOf[2] (Value): null.
     */
    "type"?: (("amount" | (string & {})) | (null));
});
/** The `amount` variant of `CreditNoteCorrectionRequest`. */
export type CreditNoteCorrectionRequestAmountRequestInput = ({
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "amount".
     */
    "type": "amount";
})
    & (({
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "amount".
     */
    "type": "amount";
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & ({
    "quantity"?: never;
}));
/**
 * How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`,
 * chosen by `type`.
 */
export type CreditNoteCorrectionRequestModelInput = ({
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. Format: int64.
     */
    "quantity"?: number;
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity", "amount".
     */
    "type": "quantity" | "amount";
})
    & ((Exclude<CreditNoteCorrectionRequestQuantityRequestInput & object, readonly unknown[]>)
    | (Exclude<CreditNoteCorrectionRequestAmountRequestInput & object, readonly unknown[]>));
export type CreditNoteCorrectionRequestPreviousAttributes = ({
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. anyOf[1] (Value): integer. Positive whole units; fractional quantities
     * are not supported. No more than the source line's remaining uncredited quantity. Credits
     * that fraction of its remaining billed value, rounded half up once at line level. Earlier
     * amount corrections reduce that remaining value without consuming quantity. A share that
     * rounds to zero is rejected; use a larger quantity or a positive amount. Format: int64.
     * anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity", "amount".
     * anyOf[1] (Value): string. quantity credits whole units and requires quantity. amount credits
     * a named figure and requires amount_money. The two are mutually exclusive. Value enum:
     * "quantity", "amount". anyOf[2] (Value): null.
     */
    "type"?: (("quantity" | "amount" | (string & {})) | (null));
})
    & (((Exclude<CreditNoteCorrectionRequestQuantityPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<CreditNoteCorrectionRequestAmountPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The `quantity` variant of `CreditNoteCorrectionRequest`. */
export type CreditNoteCorrectionRequestQuantity = ({
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. Format: int64.
     */
    "quantity": number;
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity".
     */
    "type": "quantity" | (string & {});
})
    & (({
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity".
     */
    "type": "quantity" | (string & {});
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. Format: int64.
     */
    "quantity": number;
}));
export type CreditNoteCorrectionRequestQuantityPreviousAttributes = ({
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. anyOf[1] (Value): integer. Positive whole units; fractional quantities
     * are not supported. No more than the source line's remaining uncredited quantity. Credits
     * that fraction of its remaining billed value, rounded half up once at line level. Earlier
     * amount corrections reduce that remaining value without consuming quantity. A share that
     * rounds to zero is rejected; use a larger quantity or a positive amount. Format: int64.
     * anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity". anyOf[1]
     * (Value): string. quantity credits whole units and requires quantity. amount credits a named
     * figure and requires amount_money. The two are mutually exclusive. Value enum: "quantity".
     * anyOf[2] (Value): null.
     */
    "type"?: (("quantity" | (string & {})) | (null));
})
    & ({
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity". anyOf[1]
     * (Value): string. quantity credits whole units and requires quantity. amount credits a named
     * figure and requires amount_money. The two are mutually exclusive. Value enum: "quantity".
     * anyOf[2] (Value): null.
     */
    "type"?: (("quantity" | (string & {})) | (null));
});
/** The `quantity` variant of `CreditNoteCorrectionRequest`. */
export type CreditNoteCorrectionRequestQuantityRequestInput = ({
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. Format: int64.
     */
    "quantity": number;
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity".
     */
    "type": "quantity";
})
    & (({
    /**
     * quantity credits whole units and requires quantity. amount credits a named figure and
     * requires amount_money. The two are mutually exclusive. Value enum: "quantity".
     */
    "type": "quantity";
    /**
     * Positive whole units; fractional quantities are not supported. No more than the source
     * line's remaining uncredited quantity. Credits that fraction of its remaining billed value,
     * rounded half up once at line level. Earlier amount corrections reduce that remaining value
     * without consuming quantity. A share that rounds to zero is rejected; use a larger quantity
     * or a positive amount. Format: int64.
     */
    "quantity": number;
})
    & ({
    "amount_money"?: never;
}));
export type CreditNoteCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "credit_note.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "credit_note.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "credit_note.created";
});
/**
 * The `credit_note.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CreditNoteCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "credit_note.created". */
    "event_type"?: "credit_note.created";
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
 * The `credit_note.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "credit_note.created". */
    "event_type"?: "credit_note.created";
});
/** Credit to apply to the invoice when issuing a credit note. */
export type CreditNoteIssueAllocationRequest = {
    /**
     * Credit to apply. Omit to apply the smaller of the credit available after issue and the
     * invoice's outstanding balance. An explicit amount must be positive, use the invoice's
     * currency, and fit both balances. Either way, the allocation must leave the order's unpaid
     * tip outstanding. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValue;
};
/** Credit to apply to the invoice when issuing a credit note. */
export type CreditNoteIssueAllocationRequestInput = {
    /**
     * Credit to apply. Omit to apply the smaller of the credit available after issue and the
     * invoice's outstanding balance. An explicit amount must be positive, use the invoice's
     * currency, and fit both balances. Either way, the allocation must leave the order's unpaid
     * tip outstanding. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValueInput;
};
export type CreditNoteIssuedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "credit_note_number"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "credit_note.issued";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "credit_note_number"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "credit_note.issued";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "credit_note.issued";
});
/**
 * The `credit_note.issued` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CreditNoteIssuedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit applied to the invoice, net of reversed allocations.
     * previous_attributes.allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.allocated_money.anyOf[2] (Value): null.
     * previous_attributes.available_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit available to allocate or refund. Zero on draft and voided notes. On issued
     * notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. previous_attributes.available_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.available_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes.
     * previous_attributes.buyer_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.buyer_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the credit note was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. When the credit note was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.credit_note_id
     * (Optional): string or null. Unique identifier of the credit note.
     * previous_attributes.credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". previous_attributes.credit_note_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_number (Optional): string or null. Assigned
     * at issue and stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[1] (Value): string. Assigned at issue and
     * stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.invoice (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or
     * null. Summary of the source invoice. Returned only with expand=invoice.
     * previous_attributes.invoice.anyOf[1] (Value): {@link
     * ExpandedInvoiceSummaryPreviousAttributes}. previous_attributes.invoice.anyOf[2] (Value):
     * null. previous_attributes.invoice_id (Optional): string or null. The invoice this credit
     * note corrects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this
     * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the credit note was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the credit note was issued.
     * Absent on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null.
     * previous_attributes.latest_refund_status (Optional): string or null. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[1] (Value): string. Status of the most recent
     * refund linked to this credit note. Absent when no refund has been requested. Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against frozen invoice
     * lines. Amount and quantity corrections share each source line's remaining value, discount,
     * and tax across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * CreditNoteLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.memo (Optional): string or null. Free text shown on the credit
     * note, up to 4096 characters. `null` when unset. previous_attributes.memo.anyOf[1] (Value):
     * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. The merchant that owns the credit note.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. The merchant that owns the credit
     * note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2]
     * (Value): null. previous_attributes.pending_refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Credit reserved by linked refunds that have not
     * resolved yet. Released if a refund fails or is canceled.
     * previous_attributes.pending_refund_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.pending_refund_money.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the invoice is being
     * corrected. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     * previous_attributes.reason.anyOf[1] (Value): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". previous_attributes.reason.anyOf[2] (Value): null.
     * previous_attributes.refunded_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit consumed by linked refunds that succeeded.
     * previous_attributes.refunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured.
     * previous_attributes.seller_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.seller_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. draft while the credit note is
     * editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
     * "issued", "voided". previous_attributes.status.anyOf[1] (Value): string. draft while the
     * credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value
     * enum: "draft", "issued", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "issue", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
     * state. Independent of the caller's permissions; each action still requires its route's
     * scope. Always [] when no action is available. [] enum: "issue", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
     * "void". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.tax_currency_conversions (Optional): Array of {@link
     * TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT stated in the
     * currency of the country that charges it, frozen at issue. Each entry reuses the invoice's
     * currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions,
     * with this note's credited VAT and taxable amount converted the same way. Always [] on drafts
     * and when the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1] (Value): Array of {@link
     * TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated in the currency of
     * the country that charges it, frozen at issue. Each entry reuses the invoice's currency,
     * exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this
     * note's credited VAT and taxable amount converted the same way. Always [] on drafts and when
     * the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1][] (Value): {@link
     * TaxCurrencyConversionPreviousAttributes}.
     * previous_attributes.tax_currency_conversions.anyOf[2] (Value): null.
     * previous_attributes.total_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The face value of the credit note, the sum of its lines.
     * previous_attributes.total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.total_money.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the credit note last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the credit note last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current credit note
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current credit note version. Send
     * this as expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the credit note was voided. Absent unless its status is
     * voided. previous_attributes.voided_at.anyOf[1] (Value): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit applied to the invoice, net of reversed
         * allocations. allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * allocated_money.anyOf[2] (Value): null. available_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit available to allocate or refund. Zero on
         * draft and voided notes. On issued notes, total_money equals allocated_money plus
         * pending_refund_money plus refunded_money plus available_money. available_money.anyOf[1]
         * (Value): {@link MoneyValuePreviousAttributes}. available_money.anyOf[2] (Value): null.
         * buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
         * preserves identities captured on issued invoices and credit notes.
         * buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}.
         * buyer_tax_identity.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the credit note was created. created_at.anyOf[1] (Value): string. When the credit note
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. credit_note_id (Optional): string or null. Unique identifier of the
         * credit note. credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
         * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_id.anyOf[2] (Value): null.
         * credit_note_number (Optional): string or null. Assigned at issue and stable from then
         * on. Absent while the credit note is a draft. credit_note_number.anyOf[1] (Value):
         * string. Assigned at issue and stable from then on. Absent while the credit note is a
         * draft. credit_note_number.anyOf[2] (Value): null. external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for
         * this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. invoice
         * (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or null. Summary of the
         * source invoice. Returned only with expand=invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummaryPreviousAttributes}. invoice.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice this credit note corrects. invoice_id.anyOf[1]
         * (Value): string. The invoice this credit note corrects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. issued_at
         * (Optional): string or null. When the credit note was issued. Absent on a draft.
         * issued_at.anyOf[1] (Value): string. When the credit note was issued. Absent on a draft.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null.
         * latest_refund_status (Optional): string or null. Status of the most recent refund linked
         * to this credit note. Absent when no refund has been requested. Value enum: "pending",
         * "succeeded", "partially_succeeded", "failed". latest_refund_status.anyOf[1] (Value):
         * string. Status of the most recent refund linked to this credit note. Absent when no
         * refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
         * "failed". latest_refund_status.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against
         * frozen invoice lines. Amount and quantity corrections share each source line's remaining
         * value, discount, and tax across issued credit notes that have not been voided. Drafts
         * reserve no credit. line_items.anyOf[1] (Value): Array of {@link
         * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice
         * lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items.anyOf[1][] (Value): {@link CreditNoteLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. memo (Optional): string or null. Free text shown on
         * the credit note, up to 4096 characters. `null` when unset. memo.anyOf[1] (Value):
         * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
         * memo.anyOf[2] (Value): null. merchant_id (Optional): string or null. The merchant that
         * owns the credit note. merchant_id.anyOf[1] (Value): string. The merchant that owns the
         * credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. pending_refund_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Credit reserved by linked refunds that have not resolved yet. Released if a refund fails
         * or is canceled. pending_refund_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. pending_refund_money.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the invoice is being corrected. Shown on the credit note
         * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
         * "other". reason.anyOf[1] (Value): string. Why the invoice is being corrected. Shown on
         * the credit note document. Value enum: "returned_goods", "order_adjustment",
         * "billing_error", "goodwill", "other". reason.anyOf[2] (Value): null. refunded_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. Credit consumed by linked
         * refunds that succeeded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no seller tax identity was captured. seller_tax_identity.anyOf[1] (Value):
         * {@link TaxIdentityPreviousAttributes}. seller_tax_identity.anyOf[2] (Value): null.
         * status (Optional): string or null. draft while the credit note is editable, issued once
         * it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued",
         * "voided". status.anyOf[1] (Value): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Lifecycle actions Flint accepts for this resource now, based on
         * stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "issue", "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for
         * this resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
         * "void". supported_actions.anyOf[2] (Value): null. tax_currency_conversions (Optional):
         * Array of {@link TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT
         * stated in the currency of the country that charges it, frozen at issue. Each entry
         * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1] (Value):
         * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated
         * in the currency of the country that charges it, frozen at issue. Each entry reuses the
         * invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1][]
         * (Value): {@link TaxCurrencyConversionPreviousAttributes}.
         * tax_currency_conversions.anyOf[2] (Value): null. total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The face value of the credit note, the sum of its
         * lines. total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * total_money.anyOf[2] (Value): null. updated_at (Optional): string or null. When the
         * credit note last changed. updated_at.anyOf[1] (Value): string. When the credit note last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Current credit note version. Send
         * this as expected_version when updating the draft. version.anyOf[1] (Value): integer.
         * Current credit note version. Send this as expected_version when updating the draft.
         * Format: int64. minimum: 1. version.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the credit note was voided. Absent unless its status is voided.
         * voided_at.anyOf[1] (Value): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Credit applied to the invoice, net of reversed allocations. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * When the credit note was created. anyOf[1] (Value): string. When the credit note was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Unique identifier of the credit note. anyOf[1] (Value): string. Unique identifier of
             * the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2] (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             * anyOf[1] (Value): string. Assigned at issue and stable from then on. Absent while
             * the credit note is a draft. anyOf[2] (Value): null.
             */
            "credit_note_number"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Summary of the source invoice. Returned only with expand=invoice. anyOf[1] (Value):
             * {@link ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            /**
             * The invoice this credit note corrects. anyOf[1] (Value): string. The invoice this
             * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value):
             * null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the credit note was issued. Absent on a draft. anyOf[1] (Value): string. When
             * the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed". anyOf[1] (Value): string. Status of the most recent refund linked to this
             * credit note. Absent when no refund has been requested. Value enum: "pending",
             * "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
             */
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. anyOf[1] (Value): Array
             * of {@link CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen
             * invoice lines. Amount and quantity corrections share each source line's remaining
             * value, discount, and tax across issued credit notes that have not been voided.
             * Drafts reserve no credit. anyOf[1][] (Value): {@link
             * CreditNoteLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            /**
             * Free text shown on the credit note, up to 4096 characters. `null` when unset.
             * anyOf[1] (Value): string. Free text shown on the credit note, up to 4096 characters.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * The merchant that owns the credit note. anyOf[1] (Value): string. The merchant that
             * owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value):
             * null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1]
             * (Value): string. Why the invoice is being corrected. Shown on the credit note
             * document. Value enum: "returned_goods", "order_adjustment", "billing_error",
             * "goodwill", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            /**
             * Credit consumed by linked refunds that succeeded. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[1] (Value):
             * string. draft while the credit note is editable, issued once it is numbered and
             * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts for this resource now,
             * based on stored state. Independent of the caller's permissions; each action still
             * requires its route's scope. Always [] when no action is available. [] enum: "issue",
             * "void". anyOf[1][] (Value): string. Value enum: "issue", "void". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. anyOf[1] (Value):
             * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT
             * stated in the currency of the country that charges it, frozen at issue. Each entry
             * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
             * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
             * converted the same way. Always [] on drafts and when the invoice froze no
             * conversion. The credit note PDF prints the same figures. anyOf[1][] (Value): {@link
             * TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            /**
             * The face value of the credit note, the sum of its lines. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the credit note last changed. anyOf[1] (Value): string. When the credit note
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current credit note version. Send this as
             * expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the credit note was voided. Absent unless its status is voided. anyOf[1]
             * (Value): string. When the credit note was voided. Absent unless its status is
             * voided. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "credit_note.issued". */
    "event_type"?: "credit_note.issued";
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
 * The `credit_note.issued` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteIssuedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit applied to the invoice, net of reversed allocations.
     * previous_attributes.allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.allocated_money.anyOf[2] (Value): null.
     * previous_attributes.available_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit available to allocate or refund. Zero on draft and voided notes. On issued
     * notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. previous_attributes.available_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.available_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes.
     * previous_attributes.buyer_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.buyer_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the credit note was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. When the credit note was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.credit_note_id
     * (Optional): string or null. Unique identifier of the credit note.
     * previous_attributes.credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". previous_attributes.credit_note_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_number (Optional): string or null. Assigned
     * at issue and stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[1] (Value): string. Assigned at issue and
     * stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.invoice (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or
     * null. Summary of the source invoice. Returned only with expand=invoice.
     * previous_attributes.invoice.anyOf[1] (Value): {@link
     * ExpandedInvoiceSummaryPreviousAttributes}. previous_attributes.invoice.anyOf[2] (Value):
     * null. previous_attributes.invoice_id (Optional): string or null. The invoice this credit
     * note corrects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this
     * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the credit note was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the credit note was issued.
     * Absent on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null.
     * previous_attributes.latest_refund_status (Optional): string or null. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[1] (Value): string. Status of the most recent
     * refund linked to this credit note. Absent when no refund has been requested. Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against frozen invoice
     * lines. Amount and quantity corrections share each source line's remaining value, discount,
     * and tax across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * CreditNoteLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.memo (Optional): string or null. Free text shown on the credit
     * note, up to 4096 characters. `null` when unset. previous_attributes.memo.anyOf[1] (Value):
     * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. The merchant that owns the credit note.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. The merchant that owns the credit
     * note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2]
     * (Value): null. previous_attributes.pending_refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Credit reserved by linked refunds that have not
     * resolved yet. Released if a refund fails or is canceled.
     * previous_attributes.pending_refund_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.pending_refund_money.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the invoice is being
     * corrected. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     * previous_attributes.reason.anyOf[1] (Value): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". previous_attributes.reason.anyOf[2] (Value): null.
     * previous_attributes.refunded_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit consumed by linked refunds that succeeded.
     * previous_attributes.refunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured.
     * previous_attributes.seller_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.seller_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. draft while the credit note is
     * editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
     * "issued", "voided". previous_attributes.status.anyOf[1] (Value): string. draft while the
     * credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value
     * enum: "draft", "issued", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "issue", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
     * state. Independent of the caller's permissions; each action still requires its route's
     * scope. Always [] when no action is available. [] enum: "issue", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
     * "void". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.tax_currency_conversions (Optional): Array of {@link
     * TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT stated in the
     * currency of the country that charges it, frozen at issue. Each entry reuses the invoice's
     * currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions,
     * with this note's credited VAT and taxable amount converted the same way. Always [] on drafts
     * and when the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1] (Value): Array of {@link
     * TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated in the currency of
     * the country that charges it, frozen at issue. Each entry reuses the invoice's currency,
     * exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this
     * note's credited VAT and taxable amount converted the same way. Always [] on drafts and when
     * the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1][] (Value): {@link
     * TaxCurrencyConversionPreviousAttributes}.
     * previous_attributes.tax_currency_conversions.anyOf[2] (Value): null.
     * previous_attributes.total_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The face value of the credit note, the sum of its lines.
     * previous_attributes.total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.total_money.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the credit note last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the credit note last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current credit note
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current credit note version. Send
     * this as expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the credit note was voided. Absent unless its status is
     * voided. previous_attributes.voided_at.anyOf[1] (Value): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit applied to the invoice, net of reversed
         * allocations. allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * allocated_money.anyOf[2] (Value): null. available_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit available to allocate or refund. Zero on
         * draft and voided notes. On issued notes, total_money equals allocated_money plus
         * pending_refund_money plus refunded_money plus available_money. available_money.anyOf[1]
         * (Value): {@link MoneyValuePreviousAttributes}. available_money.anyOf[2] (Value): null.
         * buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
         * preserves identities captured on issued invoices and credit notes.
         * buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}.
         * buyer_tax_identity.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the credit note was created. created_at.anyOf[1] (Value): string. When the credit note
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. credit_note_id (Optional): string or null. Unique identifier of the
         * credit note. credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
         * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_id.anyOf[2] (Value): null.
         * credit_note_number (Optional): string or null. Assigned at issue and stable from then
         * on. Absent while the credit note is a draft. credit_note_number.anyOf[1] (Value):
         * string. Assigned at issue and stable from then on. Absent while the credit note is a
         * draft. credit_note_number.anyOf[2] (Value): null. external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for
         * this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. invoice
         * (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or null. Summary of the
         * source invoice. Returned only with expand=invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummaryPreviousAttributes}. invoice.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice this credit note corrects. invoice_id.anyOf[1]
         * (Value): string. The invoice this credit note corrects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. issued_at
         * (Optional): string or null. When the credit note was issued. Absent on a draft.
         * issued_at.anyOf[1] (Value): string. When the credit note was issued. Absent on a draft.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null.
         * latest_refund_status (Optional): string or null. Status of the most recent refund linked
         * to this credit note. Absent when no refund has been requested. Value enum: "pending",
         * "succeeded", "partially_succeeded", "failed". latest_refund_status.anyOf[1] (Value):
         * string. Status of the most recent refund linked to this credit note. Absent when no
         * refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
         * "failed". latest_refund_status.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against
         * frozen invoice lines. Amount and quantity corrections share each source line's remaining
         * value, discount, and tax across issued credit notes that have not been voided. Drafts
         * reserve no credit. line_items.anyOf[1] (Value): Array of {@link
         * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice
         * lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items.anyOf[1][] (Value): {@link CreditNoteLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. memo (Optional): string or null. Free text shown on
         * the credit note, up to 4096 characters. `null` when unset. memo.anyOf[1] (Value):
         * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
         * memo.anyOf[2] (Value): null. merchant_id (Optional): string or null. The merchant that
         * owns the credit note. merchant_id.anyOf[1] (Value): string. The merchant that owns the
         * credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. pending_refund_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Credit reserved by linked refunds that have not resolved yet. Released if a refund fails
         * or is canceled. pending_refund_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. pending_refund_money.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the invoice is being corrected. Shown on the credit note
         * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
         * "other". reason.anyOf[1] (Value): string. Why the invoice is being corrected. Shown on
         * the credit note document. Value enum: "returned_goods", "order_adjustment",
         * "billing_error", "goodwill", "other". reason.anyOf[2] (Value): null. refunded_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. Credit consumed by linked
         * refunds that succeeded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no seller tax identity was captured. seller_tax_identity.anyOf[1] (Value):
         * {@link TaxIdentityPreviousAttributes}. seller_tax_identity.anyOf[2] (Value): null.
         * status (Optional): string or null. draft while the credit note is editable, issued once
         * it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued",
         * "voided". status.anyOf[1] (Value): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Lifecycle actions Flint accepts for this resource now, based on
         * stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "issue", "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for
         * this resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
         * "void". supported_actions.anyOf[2] (Value): null. tax_currency_conversions (Optional):
         * Array of {@link TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT
         * stated in the currency of the country that charges it, frozen at issue. Each entry
         * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1] (Value):
         * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated
         * in the currency of the country that charges it, frozen at issue. Each entry reuses the
         * invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1][]
         * (Value): {@link TaxCurrencyConversionPreviousAttributes}.
         * tax_currency_conversions.anyOf[2] (Value): null. total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The face value of the credit note, the sum of its
         * lines. total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * total_money.anyOf[2] (Value): null. updated_at (Optional): string or null. When the
         * credit note last changed. updated_at.anyOf[1] (Value): string. When the credit note last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Current credit note version. Send
         * this as expected_version when updating the draft. version.anyOf[1] (Value): integer.
         * Current credit note version. Send this as expected_version when updating the draft.
         * Format: int64. minimum: 1. version.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the credit note was voided. Absent unless its status is voided.
         * voided_at.anyOf[1] (Value): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Credit applied to the invoice, net of reversed allocations. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * When the credit note was created. anyOf[1] (Value): string. When the credit note was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Unique identifier of the credit note. anyOf[1] (Value): string. Unique identifier of
             * the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2] (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             * anyOf[1] (Value): string. Assigned at issue and stable from then on. Absent while
             * the credit note is a draft. anyOf[2] (Value): null.
             */
            "credit_note_number"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Summary of the source invoice. Returned only with expand=invoice. anyOf[1] (Value):
             * {@link ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            /**
             * The invoice this credit note corrects. anyOf[1] (Value): string. The invoice this
             * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value):
             * null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the credit note was issued. Absent on a draft. anyOf[1] (Value): string. When
             * the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed". anyOf[1] (Value): string. Status of the most recent refund linked to this
             * credit note. Absent when no refund has been requested. Value enum: "pending",
             * "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
             */
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. anyOf[1] (Value): Array
             * of {@link CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen
             * invoice lines. Amount and quantity corrections share each source line's remaining
             * value, discount, and tax across issued credit notes that have not been voided.
             * Drafts reserve no credit. anyOf[1][] (Value): {@link
             * CreditNoteLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            /**
             * Free text shown on the credit note, up to 4096 characters. `null` when unset.
             * anyOf[1] (Value): string. Free text shown on the credit note, up to 4096 characters.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * The merchant that owns the credit note. anyOf[1] (Value): string. The merchant that
             * owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value):
             * null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1]
             * (Value): string. Why the invoice is being corrected. Shown on the credit note
             * document. Value enum: "returned_goods", "order_adjustment", "billing_error",
             * "goodwill", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            /**
             * Credit consumed by linked refunds that succeeded. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[1] (Value):
             * string. draft while the credit note is editable, issued once it is numbered and
             * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts for this resource now,
             * based on stored state. Independent of the caller's permissions; each action still
             * requires its route's scope. Always [] when no action is available. [] enum: "issue",
             * "void". anyOf[1][] (Value): string. Value enum: "issue", "void". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. anyOf[1] (Value):
             * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT
             * stated in the currency of the country that charges it, frozen at issue. Each entry
             * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
             * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
             * converted the same way. Always [] on drafts and when the invoice froze no
             * conversion. The credit note PDF prints the same figures. anyOf[1][] (Value): {@link
             * TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            /**
             * The face value of the credit note, the sum of its lines. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the credit note last changed. anyOf[1] (Value): string. When the credit note
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current credit note version. Send this as
             * expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the credit note was voided. Absent unless its status is voided. anyOf[1]
             * (Value): string. When the credit note was voided. Absent unless its status is
             * voided. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "credit_note.issued". */
    "event_type"?: "credit_note.issued";
});
/**
 * One correction calculated from the frozen invoice line's remaining billed value, discount, and
 * tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices and
 * tax settings do not affect the correction. Stored issued values are never recalculated by a
 * read.
 */
export type CreditNoteLineItem = {
    /**
     * The correction that produced this line, using the same shape accepted by draft writes.
     * Amount corrections return the requested billed value in amount_money, equal to total_money.
     * How much of an invoice line item a credit note line credits, by whole `quantity` or by
     * `amount`, chosen by `type`.
     */
    "correction": CreditNoteCorrectionRequest;
    /**
     * Unique identifier of the credit note line item. Example: "cnli_01KEZF7C006N101PGMWKNHFD1J".
     */
    "credit_note_line_item_id": string;
    /**
     * The credited share of the frozen line's remaining allocated merchandise discount, rounded
     * half up in currency minor units. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** The invoice snapshot line this corrects. Example: "invli_01KEZF7C00H767MAT1DY7ZWSVW". */
    "invoice_line_item_id": string;
    /** Label of the credited invoice line. */
    "name": string;
    /**
     * Credited subtotal before the credited discount, in the source line's inclusive or additive
     * price units. Balances the total after tax and discount are rounded from the remaining pool;
     * it is not a rounded per-unit price. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * The credited share of the frozen line's remaining tax, rounded half up in currency minor
     * units. Included tax is already part of total_money. Tax-exclusive consideration is
     * total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money.
     * For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value
     * correction consumes the exact remaining components. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
export type CreditNoteLineItemPreviousAttributes = {
    /**
     * The correction that produced this line, using the same shape accepted by draft writes.
     * Amount corrections return the requested billed value in amount_money, equal to total_money.
     * anyOf[1] (Value): {@link CreditNoteCorrectionRequestPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "correction"?: ((CreditNoteCorrectionRequestPreviousAttributes) | (null));
    /**
     * Unique identifier of the credit note line item. anyOf[1] (Value): string. Unique identifier
     * of the credit note line item. Example: "cnli_01KEZF7C006N101PGMWKNHFD1J". anyOf[2] (Value):
     * null.
     */
    "credit_note_line_item_id"?: ((string) | (null));
    /**
     * The credited share of the frozen line's remaining allocated merchandise discount, rounded
     * half up in currency minor units. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The invoice snapshot line this corrects. anyOf[1] (Value): string. The invoice snapshot line
     * this corrects. Example: "invli_01KEZF7C00H767MAT1DY7ZWSVW". anyOf[2] (Value): null.
     */
    "invoice_line_item_id"?: ((string) | (null));
    /**
     * Label of the credited invoice line. anyOf[1] (Value): string. Label of the credited invoice
     * line. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Credited subtotal before the credited discount, in the source line's inclusive or additive
     * price units. Balances the total after tax and discount are rounded from the remaining pool;
     * it is not a rounded per-unit price. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The credited share of the frozen line's remaining tax, rounded half up in currency minor
     * units. Included tax is already part of total_money. Tax-exclusive consideration is
     * total_money minus tax_money. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money.
     * For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value
     * correction consumes the exact remaining components. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/**
 * A credit note line you supply when creating or updating a credit note: the invoice line item it
 * credits and how much, or an existing line to keep.
 */
export type CreditNoteLineItemRequest = {
    /**
     * How much of the invoice line to credit, by quantity or by amount. How much of an invoice
     * line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.
     */
    "correction": CreditNoteCorrectionRequest;
    /**
     * Existing credit note line item to retain. Omit to create a new line item. minLength: 1.
     * Example: "cnli_01KEZF7C006N101PGMWKNHFD1J".
     */
    "credit_note_line_item_id"?: string;
    /**
     * The invoice snapshot line to credit. minLength: 1. Example:
     * "invli_01KEZF7C00H767MAT1DY7ZWSVW".
     */
    "invoice_line_item_id": string;
};
/**
 * A credit note line you supply when creating or updating a credit note: the invoice line item it
 * credits and how much, or an existing line to keep.
 */
export type CreditNoteLineItemRequestInput = {
    /**
     * How much of the invoice line to credit, by quantity or by amount. How much of an invoice
     * line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.
     */
    "correction": CreditNoteCorrectionRequestModelInput;
    /**
     * Existing credit note line item to retain. Omit to create a new line item. minLength: 1.
     * Example: "cnli_01KEZF7C006N101PGMWKNHFD1J".
     */
    "credit_note_line_item_id"?: string;
    /**
     * The invoice snapshot line to credit. minLength: 1. Example:
     * "invli_01KEZF7C00H767MAT1DY7ZWSVW".
     */
    "invoice_line_item_id": string;
};
/** A page of `CreditNote` objects. */
export type CreditNoteListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * CreditNote}. A correction against an issued invoice. Credit notes reduce what is owed;
     * refunds return what was already collected.
     */
    "data": Array<CreditNote>;
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
/**
 * Refund details you supply when issuing a credit note: the reason, an optional message, and an
 * optional amount.
 */
export type CreditNoteRefundRequest = {
    /**
     * Credit to refund. Omit to refund all available credit, which Flint resolves once when it
     * accepts the request. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Why the refund is being made. Omit to record no reason. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
};
/**
 * Refund details you supply when issuing a credit note: the reason, an optional message, and an
 * optional amount.
 */
export type CreditNoteRefundRequestInput = {
    /**
     * Credit to refund. Omit to refund all available credit, which Flint resolves once when it
     * accepts the request. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Why the refund is being made. Omit to record no reason. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock";
    /**
     * Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     */
    "reason_message"?: string;
};
/** A response containing `CreditNote` data. */
export type CreditNoteResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A correction against an
     * issued invoice. Credit notes reduce what is owed; refunds return what was already collected.
     */
    "data": CreditNote;
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
export type CreditNoteUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "credit_note_number"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "credit_note.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "credit_note_number"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "credit_note.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "credit_note.updated";
});
/**
 * The `credit_note.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CreditNoteUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit applied to the invoice, net of reversed allocations.
     * previous_attributes.allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.allocated_money.anyOf[2] (Value): null.
     * previous_attributes.available_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit available to allocate or refund. Zero on draft and voided notes. On issued
     * notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. previous_attributes.available_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.available_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes.
     * previous_attributes.buyer_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.buyer_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the credit note was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. When the credit note was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.credit_note_id
     * (Optional): string or null. Unique identifier of the credit note.
     * previous_attributes.credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". previous_attributes.credit_note_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_number (Optional): string or null. Assigned
     * at issue and stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[1] (Value): string. Assigned at issue and
     * stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.invoice (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or
     * null. Summary of the source invoice. Returned only with expand=invoice.
     * previous_attributes.invoice.anyOf[1] (Value): {@link
     * ExpandedInvoiceSummaryPreviousAttributes}. previous_attributes.invoice.anyOf[2] (Value):
     * null. previous_attributes.invoice_id (Optional): string or null. The invoice this credit
     * note corrects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this
     * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the credit note was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the credit note was issued.
     * Absent on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null.
     * previous_attributes.latest_refund_status (Optional): string or null. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[1] (Value): string. Status of the most recent
     * refund linked to this credit note. Absent when no refund has been requested. Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against frozen invoice
     * lines. Amount and quantity corrections share each source line's remaining value, discount,
     * and tax across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * CreditNoteLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.memo (Optional): string or null. Free text shown on the credit
     * note, up to 4096 characters. `null` when unset. previous_attributes.memo.anyOf[1] (Value):
     * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. The merchant that owns the credit note.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. The merchant that owns the credit
     * note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2]
     * (Value): null. previous_attributes.pending_refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Credit reserved by linked refunds that have not
     * resolved yet. Released if a refund fails or is canceled.
     * previous_attributes.pending_refund_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.pending_refund_money.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the invoice is being
     * corrected. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     * previous_attributes.reason.anyOf[1] (Value): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". previous_attributes.reason.anyOf[2] (Value): null.
     * previous_attributes.refunded_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit consumed by linked refunds that succeeded.
     * previous_attributes.refunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured.
     * previous_attributes.seller_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.seller_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. draft while the credit note is
     * editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
     * "issued", "voided". previous_attributes.status.anyOf[1] (Value): string. draft while the
     * credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value
     * enum: "draft", "issued", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "issue", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
     * state. Independent of the caller's permissions; each action still requires its route's
     * scope. Always [] when no action is available. [] enum: "issue", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
     * "void". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.tax_currency_conversions (Optional): Array of {@link
     * TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT stated in the
     * currency of the country that charges it, frozen at issue. Each entry reuses the invoice's
     * currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions,
     * with this note's credited VAT and taxable amount converted the same way. Always [] on drafts
     * and when the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1] (Value): Array of {@link
     * TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated in the currency of
     * the country that charges it, frozen at issue. Each entry reuses the invoice's currency,
     * exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this
     * note's credited VAT and taxable amount converted the same way. Always [] on drafts and when
     * the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1][] (Value): {@link
     * TaxCurrencyConversionPreviousAttributes}.
     * previous_attributes.tax_currency_conversions.anyOf[2] (Value): null.
     * previous_attributes.total_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The face value of the credit note, the sum of its lines.
     * previous_attributes.total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.total_money.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the credit note last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the credit note last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current credit note
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current credit note version. Send
     * this as expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the credit note was voided. Absent unless its status is
     * voided. previous_attributes.voided_at.anyOf[1] (Value): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit applied to the invoice, net of reversed
         * allocations. allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * allocated_money.anyOf[2] (Value): null. available_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit available to allocate or refund. Zero on
         * draft and voided notes. On issued notes, total_money equals allocated_money plus
         * pending_refund_money plus refunded_money plus available_money. available_money.anyOf[1]
         * (Value): {@link MoneyValuePreviousAttributes}. available_money.anyOf[2] (Value): null.
         * buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
         * preserves identities captured on issued invoices and credit notes.
         * buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}.
         * buyer_tax_identity.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the credit note was created. created_at.anyOf[1] (Value): string. When the credit note
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. credit_note_id (Optional): string or null. Unique identifier of the
         * credit note. credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
         * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_id.anyOf[2] (Value): null.
         * credit_note_number (Optional): string or null. Assigned at issue and stable from then
         * on. Absent while the credit note is a draft. credit_note_number.anyOf[1] (Value):
         * string. Assigned at issue and stable from then on. Absent while the credit note is a
         * draft. credit_note_number.anyOf[2] (Value): null. external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for
         * this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. invoice
         * (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or null. Summary of the
         * source invoice. Returned only with expand=invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummaryPreviousAttributes}. invoice.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice this credit note corrects. invoice_id.anyOf[1]
         * (Value): string. The invoice this credit note corrects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. issued_at
         * (Optional): string or null. When the credit note was issued. Absent on a draft.
         * issued_at.anyOf[1] (Value): string. When the credit note was issued. Absent on a draft.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null.
         * latest_refund_status (Optional): string or null. Status of the most recent refund linked
         * to this credit note. Absent when no refund has been requested. Value enum: "pending",
         * "succeeded", "partially_succeeded", "failed". latest_refund_status.anyOf[1] (Value):
         * string. Status of the most recent refund linked to this credit note. Absent when no
         * refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
         * "failed". latest_refund_status.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against
         * frozen invoice lines. Amount and quantity corrections share each source line's remaining
         * value, discount, and tax across issued credit notes that have not been voided. Drafts
         * reserve no credit. line_items.anyOf[1] (Value): Array of {@link
         * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice
         * lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items.anyOf[1][] (Value): {@link CreditNoteLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. memo (Optional): string or null. Free text shown on
         * the credit note, up to 4096 characters. `null` when unset. memo.anyOf[1] (Value):
         * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
         * memo.anyOf[2] (Value): null. merchant_id (Optional): string or null. The merchant that
         * owns the credit note. merchant_id.anyOf[1] (Value): string. The merchant that owns the
         * credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. pending_refund_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Credit reserved by linked refunds that have not resolved yet. Released if a refund fails
         * or is canceled. pending_refund_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. pending_refund_money.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the invoice is being corrected. Shown on the credit note
         * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
         * "other". reason.anyOf[1] (Value): string. Why the invoice is being corrected. Shown on
         * the credit note document. Value enum: "returned_goods", "order_adjustment",
         * "billing_error", "goodwill", "other". reason.anyOf[2] (Value): null. refunded_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. Credit consumed by linked
         * refunds that succeeded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no seller tax identity was captured. seller_tax_identity.anyOf[1] (Value):
         * {@link TaxIdentityPreviousAttributes}. seller_tax_identity.anyOf[2] (Value): null.
         * status (Optional): string or null. draft while the credit note is editable, issued once
         * it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued",
         * "voided". status.anyOf[1] (Value): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Lifecycle actions Flint accepts for this resource now, based on
         * stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "issue", "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for
         * this resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
         * "void". supported_actions.anyOf[2] (Value): null. tax_currency_conversions (Optional):
         * Array of {@link TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT
         * stated in the currency of the country that charges it, frozen at issue. Each entry
         * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1] (Value):
         * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated
         * in the currency of the country that charges it, frozen at issue. Each entry reuses the
         * invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1][]
         * (Value): {@link TaxCurrencyConversionPreviousAttributes}.
         * tax_currency_conversions.anyOf[2] (Value): null. total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The face value of the credit note, the sum of its
         * lines. total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * total_money.anyOf[2] (Value): null. updated_at (Optional): string or null. When the
         * credit note last changed. updated_at.anyOf[1] (Value): string. When the credit note last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Current credit note version. Send
         * this as expected_version when updating the draft. version.anyOf[1] (Value): integer.
         * Current credit note version. Send this as expected_version when updating the draft.
         * Format: int64. minimum: 1. version.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the credit note was voided. Absent unless its status is voided.
         * voided_at.anyOf[1] (Value): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Credit applied to the invoice, net of reversed allocations. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * When the credit note was created. anyOf[1] (Value): string. When the credit note was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Unique identifier of the credit note. anyOf[1] (Value): string. Unique identifier of
             * the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2] (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             * anyOf[1] (Value): string. Assigned at issue and stable from then on. Absent while
             * the credit note is a draft. anyOf[2] (Value): null.
             */
            "credit_note_number"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Summary of the source invoice. Returned only with expand=invoice. anyOf[1] (Value):
             * {@link ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            /**
             * The invoice this credit note corrects. anyOf[1] (Value): string. The invoice this
             * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value):
             * null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the credit note was issued. Absent on a draft. anyOf[1] (Value): string. When
             * the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed". anyOf[1] (Value): string. Status of the most recent refund linked to this
             * credit note. Absent when no refund has been requested. Value enum: "pending",
             * "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
             */
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. anyOf[1] (Value): Array
             * of {@link CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen
             * invoice lines. Amount and quantity corrections share each source line's remaining
             * value, discount, and tax across issued credit notes that have not been voided.
             * Drafts reserve no credit. anyOf[1][] (Value): {@link
             * CreditNoteLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            /**
             * Free text shown on the credit note, up to 4096 characters. `null` when unset.
             * anyOf[1] (Value): string. Free text shown on the credit note, up to 4096 characters.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * The merchant that owns the credit note. anyOf[1] (Value): string. The merchant that
             * owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value):
             * null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1]
             * (Value): string. Why the invoice is being corrected. Shown on the credit note
             * document. Value enum: "returned_goods", "order_adjustment", "billing_error",
             * "goodwill", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            /**
             * Credit consumed by linked refunds that succeeded. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[1] (Value):
             * string. draft while the credit note is editable, issued once it is numbered and
             * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts for this resource now,
             * based on stored state. Independent of the caller's permissions; each action still
             * requires its route's scope. Always [] when no action is available. [] enum: "issue",
             * "void". anyOf[1][] (Value): string. Value enum: "issue", "void". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. anyOf[1] (Value):
             * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT
             * stated in the currency of the country that charges it, frozen at issue. Each entry
             * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
             * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
             * converted the same way. Always [] on drafts and when the invoice froze no
             * conversion. The credit note PDF prints the same figures. anyOf[1][] (Value): {@link
             * TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            /**
             * The face value of the credit note, the sum of its lines. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the credit note last changed. anyOf[1] (Value): string. When the credit note
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current credit note version. Send this as
             * expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the credit note was voided. Absent unless its status is voided. anyOf[1]
             * (Value): string. When the credit note was voided. Absent unless its status is
             * voided. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "credit_note.updated". */
    "event_type"?: "credit_note.updated";
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
 * The `credit_note.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit applied to the invoice, net of reversed allocations.
     * previous_attributes.allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.allocated_money.anyOf[2] (Value): null.
     * previous_attributes.available_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit available to allocate or refund. Zero on draft and voided notes. On issued
     * notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. previous_attributes.available_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.available_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes.
     * previous_attributes.buyer_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.buyer_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the credit note was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. When the credit note was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.credit_note_id
     * (Optional): string or null. Unique identifier of the credit note.
     * previous_attributes.credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". previous_attributes.credit_note_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_number (Optional): string or null. Assigned
     * at issue and stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[1] (Value): string. Assigned at issue and
     * stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.invoice (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or
     * null. Summary of the source invoice. Returned only with expand=invoice.
     * previous_attributes.invoice.anyOf[1] (Value): {@link
     * ExpandedInvoiceSummaryPreviousAttributes}. previous_attributes.invoice.anyOf[2] (Value):
     * null. previous_attributes.invoice_id (Optional): string or null. The invoice this credit
     * note corrects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this
     * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the credit note was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the credit note was issued.
     * Absent on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null.
     * previous_attributes.latest_refund_status (Optional): string or null. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[1] (Value): string. Status of the most recent
     * refund linked to this credit note. Absent when no refund has been requested. Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against frozen invoice
     * lines. Amount and quantity corrections share each source line's remaining value, discount,
     * and tax across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * CreditNoteLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.memo (Optional): string or null. Free text shown on the credit
     * note, up to 4096 characters. `null` when unset. previous_attributes.memo.anyOf[1] (Value):
     * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. The merchant that owns the credit note.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. The merchant that owns the credit
     * note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2]
     * (Value): null. previous_attributes.pending_refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Credit reserved by linked refunds that have not
     * resolved yet. Released if a refund fails or is canceled.
     * previous_attributes.pending_refund_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.pending_refund_money.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the invoice is being
     * corrected. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     * previous_attributes.reason.anyOf[1] (Value): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". previous_attributes.reason.anyOf[2] (Value): null.
     * previous_attributes.refunded_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit consumed by linked refunds that succeeded.
     * previous_attributes.refunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured.
     * previous_attributes.seller_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.seller_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. draft while the credit note is
     * editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
     * "issued", "voided". previous_attributes.status.anyOf[1] (Value): string. draft while the
     * credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value
     * enum: "draft", "issued", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "issue", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
     * state. Independent of the caller's permissions; each action still requires its route's
     * scope. Always [] when no action is available. [] enum: "issue", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
     * "void". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.tax_currency_conversions (Optional): Array of {@link
     * TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT stated in the
     * currency of the country that charges it, frozen at issue. Each entry reuses the invoice's
     * currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions,
     * with this note's credited VAT and taxable amount converted the same way. Always [] on drafts
     * and when the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1] (Value): Array of {@link
     * TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated in the currency of
     * the country that charges it, frozen at issue. Each entry reuses the invoice's currency,
     * exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this
     * note's credited VAT and taxable amount converted the same way. Always [] on drafts and when
     * the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1][] (Value): {@link
     * TaxCurrencyConversionPreviousAttributes}.
     * previous_attributes.tax_currency_conversions.anyOf[2] (Value): null.
     * previous_attributes.total_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The face value of the credit note, the sum of its lines.
     * previous_attributes.total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.total_money.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the credit note last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the credit note last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current credit note
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current credit note version. Send
     * this as expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the credit note was voided. Absent unless its status is
     * voided. previous_attributes.voided_at.anyOf[1] (Value): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit applied to the invoice, net of reversed
         * allocations. allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * allocated_money.anyOf[2] (Value): null. available_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit available to allocate or refund. Zero on
         * draft and voided notes. On issued notes, total_money equals allocated_money plus
         * pending_refund_money plus refunded_money plus available_money. available_money.anyOf[1]
         * (Value): {@link MoneyValuePreviousAttributes}. available_money.anyOf[2] (Value): null.
         * buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
         * preserves identities captured on issued invoices and credit notes.
         * buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}.
         * buyer_tax_identity.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the credit note was created. created_at.anyOf[1] (Value): string. When the credit note
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. credit_note_id (Optional): string or null. Unique identifier of the
         * credit note. credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
         * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_id.anyOf[2] (Value): null.
         * credit_note_number (Optional): string or null. Assigned at issue and stable from then
         * on. Absent while the credit note is a draft. credit_note_number.anyOf[1] (Value):
         * string. Assigned at issue and stable from then on. Absent while the credit note is a
         * draft. credit_note_number.anyOf[2] (Value): null. external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for
         * this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. invoice
         * (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or null. Summary of the
         * source invoice. Returned only with expand=invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummaryPreviousAttributes}. invoice.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice this credit note corrects. invoice_id.anyOf[1]
         * (Value): string. The invoice this credit note corrects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. issued_at
         * (Optional): string or null. When the credit note was issued. Absent on a draft.
         * issued_at.anyOf[1] (Value): string. When the credit note was issued. Absent on a draft.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null.
         * latest_refund_status (Optional): string or null. Status of the most recent refund linked
         * to this credit note. Absent when no refund has been requested. Value enum: "pending",
         * "succeeded", "partially_succeeded", "failed". latest_refund_status.anyOf[1] (Value):
         * string. Status of the most recent refund linked to this credit note. Absent when no
         * refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
         * "failed". latest_refund_status.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against
         * frozen invoice lines. Amount and quantity corrections share each source line's remaining
         * value, discount, and tax across issued credit notes that have not been voided. Drafts
         * reserve no credit. line_items.anyOf[1] (Value): Array of {@link
         * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice
         * lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items.anyOf[1][] (Value): {@link CreditNoteLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. memo (Optional): string or null. Free text shown on
         * the credit note, up to 4096 characters. `null` when unset. memo.anyOf[1] (Value):
         * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
         * memo.anyOf[2] (Value): null. merchant_id (Optional): string or null. The merchant that
         * owns the credit note. merchant_id.anyOf[1] (Value): string. The merchant that owns the
         * credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. pending_refund_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Credit reserved by linked refunds that have not resolved yet. Released if a refund fails
         * or is canceled. pending_refund_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. pending_refund_money.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the invoice is being corrected. Shown on the credit note
         * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
         * "other". reason.anyOf[1] (Value): string. Why the invoice is being corrected. Shown on
         * the credit note document. Value enum: "returned_goods", "order_adjustment",
         * "billing_error", "goodwill", "other". reason.anyOf[2] (Value): null. refunded_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. Credit consumed by linked
         * refunds that succeeded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no seller tax identity was captured. seller_tax_identity.anyOf[1] (Value):
         * {@link TaxIdentityPreviousAttributes}. seller_tax_identity.anyOf[2] (Value): null.
         * status (Optional): string or null. draft while the credit note is editable, issued once
         * it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued",
         * "voided". status.anyOf[1] (Value): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Lifecycle actions Flint accepts for this resource now, based on
         * stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "issue", "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for
         * this resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
         * "void". supported_actions.anyOf[2] (Value): null. tax_currency_conversions (Optional):
         * Array of {@link TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT
         * stated in the currency of the country that charges it, frozen at issue. Each entry
         * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1] (Value):
         * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated
         * in the currency of the country that charges it, frozen at issue. Each entry reuses the
         * invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1][]
         * (Value): {@link TaxCurrencyConversionPreviousAttributes}.
         * tax_currency_conversions.anyOf[2] (Value): null. total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The face value of the credit note, the sum of its
         * lines. total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * total_money.anyOf[2] (Value): null. updated_at (Optional): string or null. When the
         * credit note last changed. updated_at.anyOf[1] (Value): string. When the credit note last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Current credit note version. Send
         * this as expected_version when updating the draft. version.anyOf[1] (Value): integer.
         * Current credit note version. Send this as expected_version when updating the draft.
         * Format: int64. minimum: 1. version.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the credit note was voided. Absent unless its status is voided.
         * voided_at.anyOf[1] (Value): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Credit applied to the invoice, net of reversed allocations. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * When the credit note was created. anyOf[1] (Value): string. When the credit note was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Unique identifier of the credit note. anyOf[1] (Value): string. Unique identifier of
             * the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2] (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             * anyOf[1] (Value): string. Assigned at issue and stable from then on. Absent while
             * the credit note is a draft. anyOf[2] (Value): null.
             */
            "credit_note_number"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Summary of the source invoice. Returned only with expand=invoice. anyOf[1] (Value):
             * {@link ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            /**
             * The invoice this credit note corrects. anyOf[1] (Value): string. The invoice this
             * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value):
             * null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the credit note was issued. Absent on a draft. anyOf[1] (Value): string. When
             * the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed". anyOf[1] (Value): string. Status of the most recent refund linked to this
             * credit note. Absent when no refund has been requested. Value enum: "pending",
             * "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
             */
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. anyOf[1] (Value): Array
             * of {@link CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen
             * invoice lines. Amount and quantity corrections share each source line's remaining
             * value, discount, and tax across issued credit notes that have not been voided.
             * Drafts reserve no credit. anyOf[1][] (Value): {@link
             * CreditNoteLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            /**
             * Free text shown on the credit note, up to 4096 characters. `null` when unset.
             * anyOf[1] (Value): string. Free text shown on the credit note, up to 4096 characters.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * The merchant that owns the credit note. anyOf[1] (Value): string. The merchant that
             * owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value):
             * null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1]
             * (Value): string. Why the invoice is being corrected. Shown on the credit note
             * document. Value enum: "returned_goods", "order_adjustment", "billing_error",
             * "goodwill", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            /**
             * Credit consumed by linked refunds that succeeded. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[1] (Value):
             * string. draft while the credit note is editable, issued once it is numbered and
             * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts for this resource now,
             * based on stored state. Independent of the caller's permissions; each action still
             * requires its route's scope. Always [] when no action is available. [] enum: "issue",
             * "void". anyOf[1][] (Value): string. Value enum: "issue", "void". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. anyOf[1] (Value):
             * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT
             * stated in the currency of the country that charges it, frozen at issue. Each entry
             * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
             * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
             * converted the same way. Always [] on drafts and when the invoice froze no
             * conversion. The credit note PDF prints the same figures. anyOf[1][] (Value): {@link
             * TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            /**
             * The face value of the credit note, the sum of its lines. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the credit note last changed. anyOf[1] (Value): string. When the credit note
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current credit note version. Send this as
             * expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the credit note was voided. Absent unless its status is voided. anyOf[1]
             * (Value): string. When the credit note was voided. Absent unless its status is
             * voided. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "credit_note.updated". */
    "event_type"?: "credit_note.updated";
});
export type CreditNoteVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "credit_note_number"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "credit_note.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allocated_money": MoneyValue;
            "available_money": MoneyValue;
            "buyer_tax_identity": ((TaxIdentity) | (null));
            "created_at": string;
            "credit_note_id": string;
            "credit_note_number"?: string;
            "external_reference_id": string | null;
            "invoice"?: ExpandedInvoiceSummary;
            "invoice_id": string;
            "issued_at"?: string;
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "line_items": Array<CreditNoteLineItem>;
            "memo": string | null;
            "merchant_id": string;
            "pending_refund_money": MoneyValue;
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            "refunded_money": MoneyValue;
            "seller_tax_identity": ((TaxIdentity) | (null));
            "status": "draft" | "issued" | "voided" | (string & {});
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            "total_money": MoneyValue;
            "updated_at": string;
            "version": number;
            "voided_at"?: string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "credit_note_id"?: ((string) | (null));
            "credit_note_number"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "issued_at"?: ((string) | (null));
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "credit_note.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "credit_note.voided";
});
/**
 * The `credit_note.voided` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CreditNoteVoidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit applied to the invoice, net of reversed allocations.
     * previous_attributes.allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.allocated_money.anyOf[2] (Value): null.
     * previous_attributes.available_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit available to allocate or refund. Zero on draft and voided notes. On issued
     * notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. previous_attributes.available_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.available_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes.
     * previous_attributes.buyer_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.buyer_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the credit note was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. When the credit note was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.credit_note_id
     * (Optional): string or null. Unique identifier of the credit note.
     * previous_attributes.credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". previous_attributes.credit_note_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_number (Optional): string or null. Assigned
     * at issue and stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[1] (Value): string. Assigned at issue and
     * stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.invoice (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or
     * null. Summary of the source invoice. Returned only with expand=invoice.
     * previous_attributes.invoice.anyOf[1] (Value): {@link
     * ExpandedInvoiceSummaryPreviousAttributes}. previous_attributes.invoice.anyOf[2] (Value):
     * null. previous_attributes.invoice_id (Optional): string or null. The invoice this credit
     * note corrects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this
     * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the credit note was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the credit note was issued.
     * Absent on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null.
     * previous_attributes.latest_refund_status (Optional): string or null. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[1] (Value): string. Status of the most recent
     * refund linked to this credit note. Absent when no refund has been requested. Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against frozen invoice
     * lines. Amount and quantity corrections share each source line's remaining value, discount,
     * and tax across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * CreditNoteLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.memo (Optional): string or null. Free text shown on the credit
     * note, up to 4096 characters. `null` when unset. previous_attributes.memo.anyOf[1] (Value):
     * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. The merchant that owns the credit note.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. The merchant that owns the credit
     * note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2]
     * (Value): null. previous_attributes.pending_refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Credit reserved by linked refunds that have not
     * resolved yet. Released if a refund fails or is canceled.
     * previous_attributes.pending_refund_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.pending_refund_money.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the invoice is being
     * corrected. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     * previous_attributes.reason.anyOf[1] (Value): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". previous_attributes.reason.anyOf[2] (Value): null.
     * previous_attributes.refunded_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit consumed by linked refunds that succeeded.
     * previous_attributes.refunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured.
     * previous_attributes.seller_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.seller_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. draft while the credit note is
     * editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
     * "issued", "voided". previous_attributes.status.anyOf[1] (Value): string. draft while the
     * credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value
     * enum: "draft", "issued", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "issue", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
     * state. Independent of the caller's permissions; each action still requires its route's
     * scope. Always [] when no action is available. [] enum: "issue", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
     * "void". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.tax_currency_conversions (Optional): Array of {@link
     * TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT stated in the
     * currency of the country that charges it, frozen at issue. Each entry reuses the invoice's
     * currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions,
     * with this note's credited VAT and taxable amount converted the same way. Always [] on drafts
     * and when the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1] (Value): Array of {@link
     * TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated in the currency of
     * the country that charges it, frozen at issue. Each entry reuses the invoice's currency,
     * exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this
     * note's credited VAT and taxable amount converted the same way. Always [] on drafts and when
     * the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1][] (Value): {@link
     * TaxCurrencyConversionPreviousAttributes}.
     * previous_attributes.tax_currency_conversions.anyOf[2] (Value): null.
     * previous_attributes.total_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The face value of the credit note, the sum of its lines.
     * previous_attributes.total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.total_money.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the credit note last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the credit note last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current credit note
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current credit note version. Send
     * this as expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the credit note was voided. Absent unless its status is
     * voided. previous_attributes.voided_at.anyOf[1] (Value): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit applied to the invoice, net of reversed
         * allocations. allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * allocated_money.anyOf[2] (Value): null. available_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit available to allocate or refund. Zero on
         * draft and voided notes. On issued notes, total_money equals allocated_money plus
         * pending_refund_money plus refunded_money plus available_money. available_money.anyOf[1]
         * (Value): {@link MoneyValuePreviousAttributes}. available_money.anyOf[2] (Value): null.
         * buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
         * preserves identities captured on issued invoices and credit notes.
         * buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}.
         * buyer_tax_identity.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the credit note was created. created_at.anyOf[1] (Value): string. When the credit note
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. credit_note_id (Optional): string or null. Unique identifier of the
         * credit note. credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
         * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_id.anyOf[2] (Value): null.
         * credit_note_number (Optional): string or null. Assigned at issue and stable from then
         * on. Absent while the credit note is a draft. credit_note_number.anyOf[1] (Value):
         * string. Assigned at issue and stable from then on. Absent while the credit note is a
         * draft. credit_note_number.anyOf[2] (Value): null. external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for
         * this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. invoice
         * (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or null. Summary of the
         * source invoice. Returned only with expand=invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummaryPreviousAttributes}. invoice.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice this credit note corrects. invoice_id.anyOf[1]
         * (Value): string. The invoice this credit note corrects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. issued_at
         * (Optional): string or null. When the credit note was issued. Absent on a draft.
         * issued_at.anyOf[1] (Value): string. When the credit note was issued. Absent on a draft.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null.
         * latest_refund_status (Optional): string or null. Status of the most recent refund linked
         * to this credit note. Absent when no refund has been requested. Value enum: "pending",
         * "succeeded", "partially_succeeded", "failed". latest_refund_status.anyOf[1] (Value):
         * string. Status of the most recent refund linked to this credit note. Absent when no
         * refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
         * "failed". latest_refund_status.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against
         * frozen invoice lines. Amount and quantity corrections share each source line's remaining
         * value, discount, and tax across issued credit notes that have not been voided. Drafts
         * reserve no credit. line_items.anyOf[1] (Value): Array of {@link
         * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice
         * lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items.anyOf[1][] (Value): {@link CreditNoteLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. memo (Optional): string or null. Free text shown on
         * the credit note, up to 4096 characters. `null` when unset. memo.anyOf[1] (Value):
         * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
         * memo.anyOf[2] (Value): null. merchant_id (Optional): string or null. The merchant that
         * owns the credit note. merchant_id.anyOf[1] (Value): string. The merchant that owns the
         * credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. pending_refund_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Credit reserved by linked refunds that have not resolved yet. Released if a refund fails
         * or is canceled. pending_refund_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. pending_refund_money.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the invoice is being corrected. Shown on the credit note
         * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
         * "other". reason.anyOf[1] (Value): string. Why the invoice is being corrected. Shown on
         * the credit note document. Value enum: "returned_goods", "order_adjustment",
         * "billing_error", "goodwill", "other". reason.anyOf[2] (Value): null. refunded_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. Credit consumed by linked
         * refunds that succeeded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no seller tax identity was captured. seller_tax_identity.anyOf[1] (Value):
         * {@link TaxIdentityPreviousAttributes}. seller_tax_identity.anyOf[2] (Value): null.
         * status (Optional): string or null. draft while the credit note is editable, issued once
         * it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued",
         * "voided". status.anyOf[1] (Value): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Lifecycle actions Flint accepts for this resource now, based on
         * stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "issue", "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for
         * this resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
         * "void". supported_actions.anyOf[2] (Value): null. tax_currency_conversions (Optional):
         * Array of {@link TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT
         * stated in the currency of the country that charges it, frozen at issue. Each entry
         * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1] (Value):
         * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated
         * in the currency of the country that charges it, frozen at issue. Each entry reuses the
         * invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1][]
         * (Value): {@link TaxCurrencyConversionPreviousAttributes}.
         * tax_currency_conversions.anyOf[2] (Value): null. total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The face value of the credit note, the sum of its
         * lines. total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * total_money.anyOf[2] (Value): null. updated_at (Optional): string or null. When the
         * credit note last changed. updated_at.anyOf[1] (Value): string. When the credit note last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Current credit note version. Send
         * this as expected_version when updating the draft. version.anyOf[1] (Value): integer.
         * Current credit note version. Send this as expected_version when updating the draft.
         * Format: int64. minimum: 1. version.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the credit note was voided. Absent unless its status is voided.
         * voided_at.anyOf[1] (Value): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Credit applied to the invoice, net of reversed allocations. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * When the credit note was created. anyOf[1] (Value): string. When the credit note was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Unique identifier of the credit note. anyOf[1] (Value): string. Unique identifier of
             * the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2] (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             * anyOf[1] (Value): string. Assigned at issue and stable from then on. Absent while
             * the credit note is a draft. anyOf[2] (Value): null.
             */
            "credit_note_number"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Summary of the source invoice. Returned only with expand=invoice. anyOf[1] (Value):
             * {@link ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            /**
             * The invoice this credit note corrects. anyOf[1] (Value): string. The invoice this
             * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value):
             * null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the credit note was issued. Absent on a draft. anyOf[1] (Value): string. When
             * the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed". anyOf[1] (Value): string. Status of the most recent refund linked to this
             * credit note. Absent when no refund has been requested. Value enum: "pending",
             * "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
             */
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. anyOf[1] (Value): Array
             * of {@link CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen
             * invoice lines. Amount and quantity corrections share each source line's remaining
             * value, discount, and tax across issued credit notes that have not been voided.
             * Drafts reserve no credit. anyOf[1][] (Value): {@link
             * CreditNoteLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            /**
             * Free text shown on the credit note, up to 4096 characters. `null` when unset.
             * anyOf[1] (Value): string. Free text shown on the credit note, up to 4096 characters.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * The merchant that owns the credit note. anyOf[1] (Value): string. The merchant that
             * owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value):
             * null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1]
             * (Value): string. Why the invoice is being corrected. Shown on the credit note
             * document. Value enum: "returned_goods", "order_adjustment", "billing_error",
             * "goodwill", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            /**
             * Credit consumed by linked refunds that succeeded. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[1] (Value):
             * string. draft while the credit note is editable, issued once it is numbered and
             * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts for this resource now,
             * based on stored state. Independent of the caller's permissions; each action still
             * requires its route's scope. Always [] when no action is available. [] enum: "issue",
             * "void". anyOf[1][] (Value): string. Value enum: "issue", "void". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. anyOf[1] (Value):
             * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT
             * stated in the currency of the country that charges it, frozen at issue. Each entry
             * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
             * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
             * converted the same way. Always [] on drafts and when the invoice froze no
             * conversion. The credit note PDF prints the same figures. anyOf[1][] (Value): {@link
             * TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            /**
             * The face value of the credit note, the sum of its lines. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the credit note last changed. anyOf[1] (Value): string. When the credit note
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current credit note version. Send this as
             * expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the credit note was voided. Absent unless its status is voided. anyOf[1]
             * (Value): string. When the credit note was voided. Absent unless its status is
             * voided. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "credit_note.voided". */
    "event_type"?: "credit_note.voided";
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
 * The `credit_note.voided` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allocated_money (Required): {@link MoneyValue}. Credit applied to
     * the invoice, net of reversed allocations. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.available_money (Required): {@link MoneyValue}.
     * Credit available to allocate or refund. Zero on draft and voided notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity
     * frozen on the source invoice at issue. Later profile edits do not change this document.
     * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
     * preserves identities captured on issued invoices and credit notes.
     * object.buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
     * object.created_at (Required): string. When the credit note was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_note_id (Required): string. Unique identifier
     * of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.credit_note_number
     * (Optional): string. Assigned at issue and stable from then on. Absent while the credit note
     * is a draft. object.external_reference_id (Required): string or null. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.invoice (Optional): {@link ExpandedInvoiceSummary}.
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice_id (Required): string. The invoice this credit
     * note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.issued_at (Optional):
     * string. When the credit note was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.latest_refund_status (Optional): string. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". object.line_items (Required):
     * Array of {@link CreditNoteLineItem}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * object.line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated from the
     * frozen invoice line's remaining billed value, discount, and tax. The source line's inclusive
     * or additive tax mode is preserved. Current catalog prices and tax settings do not affect the
     * correction. Stored issued values are never recalculated by a read. object.memo (Required):
     * string or null. Free text shown on the credit note, up to 4096 characters. `null` when
     * unset. object.merchant_id (Required): string. The merchant that owns the credit note.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.pending_refund_money (Required): {@link
     * MoneyValue}. Credit reserved by linked refunds that have not resolved yet. Released if a
     * refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.reason (Required): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". object.refunded_money (Required): {@link MoneyValue}.
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.seller_tax_identity (Required): {@link
     * TaxIdentity} or null. Identity frozen on the source invoice at issue. Later profile edits do
     * not change this document. `null` when no seller tax identity was captured.
     * object.seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer,
     * automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider,
     * which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null. object.status
     * (Required): string. draft while the credit note is editable, issued once it is numbered and
     * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
     * object.supported_actions (Required): Array of string. Lifecycle actions Flint accepts for
     * this resource now, based on stored state. Independent of the caller's permissions; each
     * action still requires its route's scope. Always [] when no action is available. [] enum:
     * "issue", "void". object.supported_actions[] (Value): string. Value enum: "issue", "void".
     * object.tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The
     * credit note's VAT stated in the currency of the country that charges it, frozen at issue.
     * Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
     * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. object.tax_currency_conversions[] (Value): {@link
     * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the country
     * whose VAT is charged. object.total_money (Required): {@link MoneyValue}. The face value of
     * the credit note, the sum of its lines. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.updated_at (Required): string. When the credit note
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current credit note version. Send this as expected_version when updating the draft.
     * Format: int64. minimum: 1. object.voided_at (Optional): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.allocated_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit applied to the invoice, net of reversed allocations.
     * previous_attributes.allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.allocated_money.anyOf[2] (Value): null.
     * previous_attributes.available_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Credit available to allocate or refund. Zero on draft and voided notes. On issued
     * notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. previous_attributes.available_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.available_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes.
     * previous_attributes.buyer_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.buyer_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the credit note was
     * created. previous_attributes.created_at.anyOf[1] (Value): string. When the credit note was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.credit_note_id
     * (Optional): string or null. Unique identifier of the credit note.
     * previous_attributes.credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". previous_attributes.credit_note_id.anyOf[2]
     * (Value): null. previous_attributes.credit_note_number (Optional): string or null. Assigned
     * at issue and stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[1] (Value): string. Assigned at issue and
     * stable from then on. Absent while the credit note is a draft.
     * previous_attributes.credit_note_number.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.invoice (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or
     * null. Summary of the source invoice. Returned only with expand=invoice.
     * previous_attributes.invoice.anyOf[1] (Value): {@link
     * ExpandedInvoiceSummaryPreviousAttributes}. previous_attributes.invoice.anyOf[2] (Value):
     * null. previous_attributes.invoice_id (Optional): string or null. The invoice this credit
     * note corrects. previous_attributes.invoice_id.anyOf[1] (Value): string. The invoice this
     * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the credit note was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the credit note was issued.
     * Absent on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null.
     * previous_attributes.latest_refund_status (Optional): string or null. Status of the most
     * recent refund linked to this credit note. Absent when no refund has been requested. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[1] (Value): string. Status of the most recent
     * refund linked to this credit note. Absent when no refund has been requested. Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed".
     * previous_attributes.latest_refund_status.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against frozen invoice
     * lines. Amount and quantity corrections share each source line's remaining value, discount,
     * and tax across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice lines.
     * Amount and quantity corrections share each source line's remaining value, discount, and tax
     * across issued credit notes that have not been voided. Drafts reserve no credit.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * CreditNoteLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.memo (Optional): string or null. Free text shown on the credit
     * note, up to 4096 characters. `null` when unset. previous_attributes.memo.anyOf[1] (Value):
     * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. The merchant that owns the credit note.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. The merchant that owns the credit
     * note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2]
     * (Value): null. previous_attributes.pending_refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Credit reserved by linked refunds that have not
     * resolved yet. Released if a refund fails or is canceled.
     * previous_attributes.pending_refund_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.pending_refund_money.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Why the invoice is being
     * corrected. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     * previous_attributes.reason.anyOf[1] (Value): string. Why the invoice is being corrected.
     * Shown on the credit note document. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". previous_attributes.reason.anyOf[2] (Value): null.
     * previous_attributes.refunded_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * Credit consumed by linked refunds that succeeded.
     * previous_attributes.refunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or
     * null. Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no seller tax identity was captured.
     * previous_attributes.seller_tax_identity.anyOf[1] (Value): {@link
     * TaxIdentityPreviousAttributes}. previous_attributes.seller_tax_identity.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. draft while the credit note is
     * editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
     * "issued", "voided". previous_attributes.status.anyOf[1] (Value): string. draft while the
     * credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value
     * enum: "draft", "issued", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "issue", "void". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Lifecycle actions Flint accepts for this resource now, based on stored
     * state. Independent of the caller's permissions; each action still requires its route's
     * scope. Always [] when no action is available. [] enum: "issue", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
     * "void". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.tax_currency_conversions (Optional): Array of {@link
     * TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT stated in the
     * currency of the country that charges it, frozen at issue. Each entry reuses the invoice's
     * currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions,
     * with this note's credited VAT and taxable amount converted the same way. Always [] on drafts
     * and when the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1] (Value): Array of {@link
     * TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated in the currency of
     * the country that charges it, frozen at issue. Each entry reuses the invoice's currency,
     * exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this
     * note's credited VAT and taxable amount converted the same way. Always [] on drafts and when
     * the invoice froze no conversion. The credit note PDF prints the same figures.
     * previous_attributes.tax_currency_conversions.anyOf[1][] (Value): {@link
     * TaxCurrencyConversionPreviousAttributes}.
     * previous_attributes.tax_currency_conversions.anyOf[2] (Value): null.
     * previous_attributes.total_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The face value of the credit note, the sum of its lines.
     * previous_attributes.total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.total_money.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the credit note last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the credit note last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current credit note
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current credit note version. Send
     * this as expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the credit note was voided. Absent unless its status is
     * voided. previous_attributes.voided_at.anyOf[1] (Value): string. When the credit note was
     * voided. Absent unless its status is voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allocated_money (Required): {@link MoneyValue}. Credit applied to the invoice, net of
         * reversed allocations. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. available_money (Required): {@link MoneyValue}. Credit available to
         * allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals
         * allocated_money plus pending_refund_money plus refunded_money plus available_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * buyer_tax_identity (Required): {@link TaxIdentity} or null. Identity frozen on the
         * source invoice at issue. Later profile edits do not change this document. `null` when no
         * buyer tax identity was captured on the source invoice. Customer deletion preserves
         * identities captured on issued invoices and credit notes. buyer_tax_identity.anyOf[1]
         * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
         * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID
         * for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
         * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in
         * display order; replacing the array requires the parent's expected_version. Existing
         * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
         * one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string. When the
         * credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_note_id (Required): string. Unique identifier of the credit note. Example:
         * "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_number (Optional): string. Assigned at
         * issue and stable from then on. Absent while the credit note is a draft.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". invoice (Optional): {@link ExpandedInvoiceSummary}. Summary
         * of the source invoice. Returned only with expand=invoice. An invoice's summary fields,
         * including status, due date, and paid, outstanding, and refunded amounts, returned when
         * the invoice is expanded. invoice_id (Required): string. The invoice this credit note
         * corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". issued_at (Optional): string. When
         * the credit note was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". latest_refund_status (Optional): string. Status of the most
         * recent refund linked to this credit note. Absent when no refund has been requested.
         * Value enum: "pending", "succeeded", "partially_succeeded", "failed". line_items
         * (Required): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
         * invoice lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items[] (Value): {@link CreditNoteLineItem}. One correction calculated
         * from the frozen invoice line's remaining billed value, discount, and tax. The source
         * line's inclusive or additive tax mode is preserved. Current catalog prices and tax
         * settings do not affect the correction. Stored issued values are never recalculated by a
         * read. memo (Required): string or null. Free text shown on the credit note, up to 4096
         * characters. `null` when unset. merchant_id (Required): string. The merchant that owns
         * the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". pending_refund_money
         * (Required): {@link MoneyValue}. Credit reserved by linked refunds that have not resolved
         * yet. Released if a refund fails or is canceled. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reason (Required): string. Why the invoice
         * is being corrected. Shown on the credit note document. Value enum: "returned_goods",
         * "order_adjustment", "billing_error", "goodwill", "other". refunded_money (Required):
         * {@link MoneyValue}. Credit consumed by linked refunds that succeeded. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. seller_tax_identity
         * (Required): {@link TaxIdentity} or null. Identity frozen on the source invoice at issue.
         * Later profile edits do not change this document. `null` when no seller tax identity was
         * captured. seller_tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided
         * legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a
         * customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax
         * provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. seller_tax_identity.anyOf[2] (Value): null. status
         * (Required): string. draft while the credit note is editable, issued once it is numbered
         * and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts for this
         * resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions[] (Value): string. Value enum: "issue", "void".
         * tax_currency_conversions (Required): Array of {@link TaxCurrencyConversion}. The credit
         * note's VAT stated in the currency of the country that charges it, frozen at issue. Each
         * entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions[] (Value): {@link
         * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
         * country whose VAT is charged. total_money (Required): {@link MoneyValue}. The face value
         * of the credit note, the sum of its lines. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. updated_at (Required): string. When the credit
         * note last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Current credit note version. Send this as expected_version when
         * updating the draft. Format: int64. minimum: 1. voided_at (Optional): string. When the
         * credit note was voided. Absent unless its status is voided. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Credit applied to the invoice, net of reversed allocations. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "allocated_money": MoneyValue;
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
             * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax
             * sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
             * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "buyer_tax_identity": ((TaxIdentity) | (null));
            /**
             * When the credit note was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
            "credit_note_id": string;
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             */
            "credit_note_number"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Summary of the source invoice. Returned only with expand=invoice. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded.
             */
            "invoice"?: ExpandedInvoiceSummary;
            /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * When the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed".
             */
            "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. [] (Value): {@link
             * CreditNoteLineItem}. One correction calculated from the frozen invoice line's
             * remaining billed value, discount, and tax. The source line's inclusive or additive
             * tax mode is preserved. Current catalog prices and tax settings do not affect the
             * correction. Stored issued values are never recalculated by a read.
             */
            "line_items": Array<CreditNoteLineItem>;
            /** Free text shown on the credit note, up to 4096 characters. `null` when unset. */
            "memo": string | null;
            /**
             * The merchant that owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "pending_refund_money": MoneyValue;
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
             */
            "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
            /**
             * Credit consumed by linked refunds that succeeded. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
             * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax
             * ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a
             * reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "seller_tax_identity": ((TaxIdentity) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided".
             */
            "status": "draft" | "issued" | "voided" | (string & {});
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". [] (Value):
             * string. Value enum: "issue", "void".
             */
            "supported_actions": Array<"issue" | "void" | (string & {})>;
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. [] (Value): {@link
             * TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
             * country whose VAT is charged.
             */
            "tax_currency_conversions": Array<TaxCurrencyConversion>;
            /**
             * The face value of the credit note, the sum of its lines. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the credit note last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the credit note was voided. Absent unless its status is voided. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. allocated_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit applied to the invoice, net of reversed
         * allocations. allocated_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * allocated_money.anyOf[2] (Value): null. available_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credit available to allocate or refund. Zero on
         * draft and voided notes. On issued notes, total_money equals allocated_money plus
         * pending_refund_money plus refunded_money plus available_money. available_money.anyOf[1]
         * (Value): {@link MoneyValuePreviousAttributes}. available_money.anyOf[2] (Value): null.
         * buyer_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no buyer tax identity was captured on the source invoice. Customer deletion
         * preserves identities captured on issued invoices and credit notes.
         * buyer_tax_identity.anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}.
         * buyer_tax_identity.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the credit note was created. created_at.anyOf[1] (Value): string. When the credit note
         * was created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. credit_note_id (Optional): string or null. Unique identifier of the
         * credit note. credit_note_id.anyOf[1] (Value): string. Unique identifier of the credit
         * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". credit_note_id.anyOf[2] (Value): null.
         * credit_note_number (Optional): string or null. Assigned at issue and stable from then
         * on. Absent while the credit note is a draft. credit_note_number.anyOf[1] (Value):
         * string. Assigned at issue and stable from then on. Absent while the credit note is a
         * draft. credit_note_number.anyOf[2] (Value): null. external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for
         * this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. invoice
         * (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or null. Summary of the
         * source invoice. Returned only with expand=invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummaryPreviousAttributes}. invoice.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. The invoice this credit note corrects. invoice_id.anyOf[1]
         * (Value): string. The invoice this credit note corrects. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2] (Value): null. issued_at
         * (Optional): string or null. When the credit note was issued. Absent on a draft.
         * issued_at.anyOf[1] (Value): string. When the credit note was issued. Absent on a draft.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null.
         * latest_refund_status (Optional): string or null. Status of the most recent refund linked
         * to this credit note. Absent when no refund has been requested. Value enum: "pending",
         * "succeeded", "partially_succeeded", "failed". latest_refund_status.anyOf[1] (Value):
         * string. Status of the most recent refund linked to this credit note. Absent when no
         * refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
         * "failed". latest_refund_status.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link CreditNoteLineItemPreviousAttributes} or null. Itemized corrections against
         * frozen invoice lines. Amount and quantity corrections share each source line's remaining
         * value, discount, and tax across issued credit notes that have not been voided. Drafts
         * reserve no credit. line_items.anyOf[1] (Value): Array of {@link
         * CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice
         * lines. Amount and quantity corrections share each source line's remaining value,
         * discount, and tax across issued credit notes that have not been voided. Drafts reserve
         * no credit. line_items.anyOf[1][] (Value): {@link CreditNoteLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. memo (Optional): string or null. Free text shown on
         * the credit note, up to 4096 characters. `null` when unset. memo.anyOf[1] (Value):
         * string. Free text shown on the credit note, up to 4096 characters. `null` when unset.
         * memo.anyOf[2] (Value): null. merchant_id (Optional): string or null. The merchant that
         * owns the credit note. merchant_id.anyOf[1] (Value): string. The merchant that owns the
         * credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. pending_refund_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Credit reserved by linked refunds that have not resolved yet. Released if a refund fails
         * or is canceled. pending_refund_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. pending_refund_money.anyOf[2] (Value): null. reason
         * (Optional): string or null. Why the invoice is being corrected. Shown on the credit note
         * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
         * "other". reason.anyOf[1] (Value): string. Why the invoice is being corrected. Shown on
         * the credit note document. Value enum: "returned_goods", "order_adjustment",
         * "billing_error", "goodwill", "other". reason.anyOf[2] (Value): null. refunded_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. Credit consumed by linked
         * refunds that succeeded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * seller_tax_identity (Optional): {@link TaxIdentityPreviousAttributes} or null. Identity
         * frozen on the source invoice at issue. Later profile edits do not change this document.
         * `null` when no seller tax identity was captured. seller_tax_identity.anyOf[1] (Value):
         * {@link TaxIdentityPreviousAttributes}. seller_tax_identity.anyOf[2] (Value): null.
         * status (Optional): string or null. draft while the credit note is editable, issued once
         * it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued",
         * "voided". status.anyOf[1] (Value): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array
         * of string or null. Lifecycle actions Flint accepts for this resource now, based on
         * stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "issue", "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for
         * this resource now, based on stored state. Independent of the caller's permissions; each
         * action still requires its route's scope. Always [] when no action is available. [] enum:
         * "issue", "void". supported_actions.anyOf[1][] (Value): string. Value enum: "issue",
         * "void". supported_actions.anyOf[2] (Value): null. tax_currency_conversions (Optional):
         * Array of {@link TaxCurrencyConversionPreviousAttributes} or null. The credit note's VAT
         * stated in the currency of the country that charges it, frozen at issue. Each entry
         * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1] (Value):
         * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated
         * in the currency of the country that charges it, frozen at issue. Each entry reuses the
         * invoice's currency, exchange_rate, rate_date, and rate_source from
         * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
         * converted the same way. Always [] on drafts and when the invoice froze no conversion.
         * The credit note PDF prints the same figures. tax_currency_conversions.anyOf[1][]
         * (Value): {@link TaxCurrencyConversionPreviousAttributes}.
         * tax_currency_conversions.anyOf[2] (Value): null. total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The face value of the credit note, the sum of its
         * lines. total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * total_money.anyOf[2] (Value): null. updated_at (Optional): string or null. When the
         * credit note last changed. updated_at.anyOf[1] (Value): string. When the credit note last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. version (Optional): integer or null. Current credit note version. Send
         * this as expected_version when updating the draft. version.anyOf[1] (Value): integer.
         * Current credit note version. Send this as expected_version when updating the draft.
         * Format: int64. minimum: 1. version.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the credit note was voided. Absent unless its status is voided.
         * voided_at.anyOf[1] (Value): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z". voided_at.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Credit applied to the invoice, net of reversed allocations. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "allocated_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Credit available to allocate or refund. Zero on draft and voided notes. On issued
             * notes, total_money equals allocated_money plus pending_refund_money plus
             * refunded_money plus available_money. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "available_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no buyer tax identity was captured on the source invoice.
             * Customer deletion preserves identities captured on issued invoices and credit notes.
             * anyOf[1] (Value): {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * When the credit note was created. anyOf[1] (Value): string. When the credit note was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Unique identifier of the credit note. anyOf[1] (Value): string. Unique identifier of
             * the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2] (Value): null.
             */
            "credit_note_id"?: ((string) | (null));
            /**
             * Assigned at issue and stable from then on. Absent while the credit note is a draft.
             * anyOf[1] (Value): string. Assigned at issue and stable from then on. Absent while
             * the credit note is a draft. anyOf[2] (Value): null.
             */
            "credit_note_number"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Summary of the source invoice. Returned only with expand=invoice. anyOf[1] (Value):
             * {@link ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            /**
             * The invoice this credit note corrects. anyOf[1] (Value): string. The invoice this
             * credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value):
             * null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * When the credit note was issued. Absent on a draft. anyOf[1] (Value): string. When
             * the credit note was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Status of the most recent refund linked to this credit note. Absent when no refund
             * has been requested. Value enum: "pending", "succeeded", "partially_succeeded",
             * "failed". anyOf[1] (Value): string. Status of the most recent refund linked to this
             * credit note. Absent when no refund has been requested. Value enum: "pending",
             * "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
             */
            "latest_refund_status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
            /**
             * Itemized corrections against frozen invoice lines. Amount and quantity corrections
             * share each source line's remaining value, discount, and tax across issued credit
             * notes that have not been voided. Drafts reserve no credit. anyOf[1] (Value): Array
             * of {@link CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen
             * invoice lines. Amount and quantity corrections share each source line's remaining
             * value, discount, and tax across issued credit notes that have not been voided.
             * Drafts reserve no credit. anyOf[1][] (Value): {@link
             * CreditNoteLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<CreditNoteLineItemPreviousAttributes>) | (null));
            /**
             * Free text shown on the credit note, up to 4096 characters. `null` when unset.
             * anyOf[1] (Value): string. Free text shown on the credit note, up to 4096 characters.
             * `null` when unset. anyOf[2] (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * The merchant that owns the credit note. anyOf[1] (Value): string. The merchant that
             * owns the credit note. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value):
             * null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Credit reserved by linked refunds that have not resolved yet. Released if a refund
             * fails or is canceled. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "pending_refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the invoice is being corrected. Shown on the credit note document. Value enum:
             * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1]
             * (Value): string. Why the invoice is being corrected. Shown on the credit note
             * document. Value enum: "returned_goods", "order_adjustment", "billing_error",
             * "goodwill", "other". anyOf[2] (Value): null.
             */
            "reason"?: (("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}))
                | (null));
            /**
             * Credit consumed by linked refunds that succeeded. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Identity frozen on the source invoice at issue. Later profile edits do not change
             * this document. `null` when no seller tax identity was captured. anyOf[1] (Value):
             * {@link TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "seller_tax_identity"?: ((TaxIdentityPreviousAttributes) | (null));
            /**
             * draft while the credit note is editable, issued once it is numbered and frozen,
             * voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[1] (Value):
             * string. draft while the credit note is editable, issued once it is numbered and
             * frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("draft" | "issued" | "voided" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts for this resource now,
             * based on stored state. Independent of the caller's permissions; each action still
             * requires its route's scope. Always [] when no action is available. [] enum: "issue",
             * "void". anyOf[1][] (Value): string. Value enum: "issue", "void". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"issue" | "void" | (string & {})>) | (null));
            /**
             * The credit note's VAT stated in the currency of the country that charges it, frozen
             * at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and
             * rate_source from snapshot.tax_currency_conversions, with this note's credited VAT
             * and taxable amount converted the same way. Always [] on drafts and when the invoice
             * froze no conversion. The credit note PDF prints the same figures. anyOf[1] (Value):
             * Array of {@link TaxCurrencyConversionPreviousAttributes}. The credit note's VAT
             * stated in the currency of the country that charges it, frozen at issue. Each entry
             * reuses the invoice's currency, exchange_rate, rate_date, and rate_source from
             * snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
             * converted the same way. Always [] on drafts and when the invoice froze no
             * conversion. The credit note PDF prints the same figures. anyOf[1][] (Value): {@link
             * TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax_currency_conversions"?: ((Array<TaxCurrencyConversionPreviousAttributes>) | (null));
            /**
             * The face value of the credit note, the sum of its lines. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the credit note last changed. anyOf[1] (Value): string. When the credit note
             * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current credit note version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current credit note version. Send this as
             * expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the credit note was voided. Absent unless its status is voided. anyOf[1]
             * (Value): string. When the credit note was voided. Absent unless its status is
             * voided. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "credit_note.voided". */
    "event_type"?: "credit_note.voided";
});
export type CreditNotesCreateAllocationParams = (InputValue<CreateCreditNoteAllocationRequestInput>)
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
export type CreditNotesCreateParams = (InputValue<CreateCreditNoteRequestInput>)
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
export type CreditNotesGetAllocationParams = DisputesAcceptParams;
export type CreditNotesGetPDFParams = DisputesAcceptParams;
export type CreditNotesGetPDFResponse = Uint8Array;
export type CreditNotesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: invoice. Include the source
     * invoice summary with expand=invoice. Requires commerce.credit_notes.read and
     * commerce.invoices.read. Limits: at most 10 unique expand paths per request. [] enum:
     * "invoice". Value enum: "invoice". anyOf[1] (Value): Array of string. [] enum: "invoice".
     * anyOf[1][] (Value): string. Value enum: "invoice". anyOf[2] (Value): string. Value enum:
     * "invoice".
     */
    "expand"?: InputValue<("invoice") | readonly ("invoice")[]>;
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
export type CreditNotesIssueParams = (InputValue<IssueCreditNoteRequestInput>
    | {
    "allocation"?: never;
    "expected_version"?: never;
    "refund"?: never;
})
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
export type CreditNotesListAllocationsParams = {
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
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength:
     * 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
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
export type CreditNotesListParams = {
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
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by invoice. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by the source invoice's current customer_id. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by credit note reason. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other". anyOf[1][] (Value): string. Value
     * enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[2]
     * (Value): string. Value enum: "returned_goods", "order_adjustment", "billing_error",
     * "goodwill", "other".
     */
    "reason"?: InputValue<("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other")
        | readonly ("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across credit note ID, credit note number, memo, and external reference ID. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as cn_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "draft", "issued", "voided". Value enum: "draft", "issued", "voided". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "draft", "issued", "voided". anyOf[1][]
     * (Value): string. Value enum: "draft", "issued", "voided". anyOf[2] (Value): string. Value
     * enum: "draft", "issued", "voided".
     */
    "status"?: InputValue<("draft" | "issued" | "voided") | readonly ("draft" | "issued" | "voided")[]>;
    /**
     * Include related objects in the response. Supported expansions: invoice. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "invoice". Value enum: "invoice". anyOf[1] (Value): Array of string. [] enum: "invoice".
     * anyOf[1][] (Value): string. Value enum: "invoice". anyOf[2] (Value): string. Value enum:
     * "invoice".
     */
    "expand"?: InputValue<("invoice") | readonly ("invoice")[]>;
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
export type CreditNotesReverseAllocationParams = InvoicesMarkUncollectibleParams;
export type CreditNotesUpdateParams = (InputValue<UpdateCreditNoteRequestInput>)
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
export type CreditNotesVoidParams = InvoicesMarkUncollectibleParams;
/** A merchant hostname for hosted checkout or customer account pages. */
export type CustomDomain = {
    /**
     * Payment attempts in progress on this checkout hostname. `null` when `type` is
     * `customer_account`. Format: int64.
     */
    "active_payment_attempt_count": number | null;
    /**
     * When this domain resource was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Flint custom domain ID. Example: "cdom_01KEZF7C00483JTTKHZVFQHKS8". */
    "custom_domain_id": string;
    /**
     * DNS records to add for setup or verification. For an archived hostname, records that can be
     * deleted. [] (Value): {@link CustomDomainDNSRecord}. A DNS record for configuring or
     * verifying a custom hostname.
     */
    "dns_records": Array<CustomDomainDNSRecord>;
    /** Configured hostname, normalized to lowercase without a trailing dot. */
    "hostname": string;
    /**
     * When the domain was last checked, in RFC3339 format; `null` when no check time is available.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "last_checked_at": string | null;
    /**
     * Payment method domain associated with this hostname. `null` when none is reported. Example:
     * "pmdom_01KEZF7C001WQCSRGH9GWR6628".
     */
    "payment_method_domain_id": string | null;
    /**
     * End of the redirect window for an archived hostname. After archive, dns_records lists
     * records you can delete. `null` when the hostname isn't archived. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "redirect_expires_at": string | null;
    /**
     * Current setup and availability state of the hostname. Archived domains retain their resource
     * identity. Value enum: "provisioning", "active", "attention_required", "inactive",
     * "archived".
     */
    "status": "provisioning" | "active" | "attention_required" | "inactive" | "archived" | (string & {});
    /**
     * Machine-readable detail for the current status. `null` when no reason is reported, including
     * for active and archived domains. Value enum: "dns_record_missing", "dns_record_mismatch",
     * "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate",
     * "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other",
     * null.
     */
    "status_reason": "dns_record_missing"
        | "dns_record_mismatch"
        | "ownership_record_missing"
        | "ownership_record_mismatch"
        | "caa_record_blocks_certificate"
        | "proxied_by_another_provider"
        | "certificate_pending"
        | "custom_domains_inactive"
        | "other"
        | null
        | (string & {})
        | null;
    /**
     * Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum:
     * "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account" | (string & {});
    /**
     * When this domain resource was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
};
export type CustomDomainArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt_count": number | null;
            "created_at": string;
            "custom_domain_id": string;
            "dns_records": Array<CustomDomainDNSRecord>;
            "hostname": string;
            "last_checked_at": string | null;
            "payment_method_domain_id": string | null;
            "redirect_expires_at": string | null;
            "status": "provisioning" | "active" | "attention_required" | "inactive" | "archived" | (string & {});
            "status_reason": "dns_record_missing"
                | "dns_record_mismatch"
                | "ownership_record_missing"
                | "ownership_record_mismatch"
                | "caa_record_blocks_certificate"
                | "proxied_by_another_provider"
                | "certificate_pending"
                | "custom_domains_inactive"
                | "other"
                | null
                | (string & {})
                | null;
            "type": "checkout" | "customer_account" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_attempt_count"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "custom_domain_id"?: ((string) | (null));
            "dns_records"?: ((Array<CustomDomainDNSRecordPreviousAttributes>) | (null));
            "hostname"?: ((string) | (null));
            "last_checked_at"?: ((string) | (null));
            "payment_method_domain_id"?: ((string) | (null));
            "redirect_expires_at"?: ((string) | (null));
            "status"?: (("provisioning" | "active" | "attention_required" | "inactive" | "archived" | (string & {}))
                | (null));
            "status_reason"?: (("dns_record_missing"
                | "dns_record_mismatch"
                | "ownership_record_missing"
                | "ownership_record_mismatch"
                | "caa_record_blocks_certificate"
                | "proxied_by_another_provider"
                | "certificate_pending"
                | "custom_domains_inactive"
                | "other"
                | null
                | (string & {}))
                | (null));
            "type"?: (("checkout" | "customer_account" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "custom_domain.archived";
})
    & {
    "event_type": "custom_domain.archived";
});
/** A DNS record for configuring or verifying a custom hostname. */
export type CustomDomainDNSRecord = {
    /** DNS name at which to publish this record. */
    "name": string;
    /** DNS record type to publish, such as cname or txt. Value enum: "cname", "txt". */
    "type": "cname" | "txt" | (string & {});
    /** DNS record value to publish at name. */
    "value": string;
};
export type CustomDomainDNSRecordPreviousAttributes = {
    /**
     * DNS name at which to publish this record. anyOf[1] (Value): string. DNS name at which to
     * publish this record. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * DNS record type to publish, such as cname or txt. Value enum: "cname", "txt". anyOf[1]
     * (Value): string. DNS record type to publish, such as cname or txt. Value enum: "cname",
     * "txt". anyOf[2] (Value): null.
     */
    "type"?: (("cname" | "txt" | (string & {})) | (null));
    /**
     * DNS record value to publish at name. anyOf[1] (Value): string. DNS record value to publish
     * at name. anyOf[2] (Value): null.
     */
    "value"?: ((string) | (null));
};
/** A page of `CustomDomain` objects. */
export type CustomDomainListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * CustomDomain}. A merchant hostname for hosted checkout or customer account pages.
     */
    "data": Array<CustomDomain>;
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
/** A response containing `CustomDomain` data. */
export type CustomDomainResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant hostname for
     * hosted checkout or customer account pages.
     */
    "data": CustomDomain;
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
export type CustomDomainUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt_count": number | null;
            "created_at": string;
            "custom_domain_id": string;
            "dns_records": Array<CustomDomainDNSRecord>;
            "hostname": string;
            "last_checked_at": string | null;
            "payment_method_domain_id": string | null;
            "redirect_expires_at": string | null;
            "status": "provisioning" | "active" | "attention_required" | "inactive" | "archived" | (string & {});
            "status_reason": "dns_record_missing"
                | "dns_record_mismatch"
                | "ownership_record_missing"
                | "ownership_record_mismatch"
                | "caa_record_blocks_certificate"
                | "proxied_by_another_provider"
                | "certificate_pending"
                | "custom_domains_inactive"
                | "other"
                | null
                | (string & {})
                | null;
            "type": "checkout" | "customer_account" | (string & {});
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_attempt_count"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "custom_domain_id"?: ((string) | (null));
            "dns_records"?: ((Array<CustomDomainDNSRecordPreviousAttributes>) | (null));
            "hostname"?: ((string) | (null));
            "last_checked_at"?: ((string) | (null));
            "payment_method_domain_id"?: ((string) | (null));
            "redirect_expires_at"?: ((string) | (null));
            "status"?: (("provisioning" | "active" | "attention_required" | "inactive" | "archived" | (string & {}))
                | (null));
            "status_reason"?: (("dns_record_missing"
                | "dns_record_mismatch"
                | "ownership_record_missing"
                | "ownership_record_mismatch"
                | "caa_record_blocks_certificate"
                | "proxied_by_another_provider"
                | "certificate_pending"
                | "custom_domains_inactive"
                | "other"
                | null
                | (string & {}))
                | (null));
            "type"?: (("checkout" | "customer_account" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "custom_domain.updated";
})
    & {
    "event_type": "custom_domain.updated";
});
export type CustomDomainsCreateParams = (InputValue<CreateCustomDomainRequestInput>)
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
