import type { CreditNote, CreditNoteLineItem } from './types-13.js';
import type { ResponseMeta } from './types-51.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { ExpandedInvoiceSummary, ExpandedPaymentMethodSummary } from './types-23.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { TaxCurrencyConversion, TaxIdentity } from './types-61.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRequestInput,
    CreateCustomDomainRequestInput
} from './types-7.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { IssueCreditNoteRequestInput } from './types-34.js';
import type { InvoicesMarkUncollectibleParams } from './types-33.js';
import type { UpdateCreditNoteRequestInput } from './types-63.js';
import type { Address } from './types-0.js';
import type { CustomerReceivables } from './types-15.js';
import type { BuyerCapabilities, BuyerCapabilitiesRequestInput } from './types-1.js';
import type { CreateCustomerDeletionRequestInput } from './types-8.js';
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
        "previous_attributes"?: Partial<CreditNote>;
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
        "previous_attributes"?: Partial<CreditNote>;
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null.
     * object.status (Required): string. draft while the credit note is editable, issued once it is
     * numbered and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
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
         * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
         * collection in display order; replacing the array requires the parent's expected_version.
         * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its
         * ID to add one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string.
         * When the credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
         * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
         * treatment. Tax IDs are an owned collection in display order; replacing the array
         * requires the parent's expected_version. Existing entries retain their document_tax_id;
         * omit an entry to remove it, or omit its ID to add one. seller_tax_identity.anyOf[2]
         * (Value): null. status (Required): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". supported_actions (Required): Array of string. Lifecycle actions
         * Flint accepts for this resource now, based on stored state. Independent of the caller's
         * permissions; each action still requires its route's scope. Always [] when no action is
         * available. [] enum: "issue", "void". supported_actions[] (Value): string. Value enum:
         * "issue", "void". tax_currency_conversions (Required): Array of {@link
         * TaxCurrencyConversion}. The credit note's VAT stated in the currency of the country that
         * charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate,
         * rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's
         * credited VAT and taxable amount converted the same way. Always [] on drafts and when the
         * invoice froze no conversion. The credit note PDF prints the same figures.
         * tax_currency_conversions[] (Value): {@link TaxCurrencyConversion}. VAT on an issued
         * document converted into the currency of the country whose VAT is charged. total_money
         * (Required): {@link MoneyValue}. The face value of the credit note, the sum of its lines.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * updated_at (Required): string. When the credit note last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current credit note
         * version. Send this as expected_version when updating the draft. Format: int64. minimum:
         * 1. voided_at (Optional): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are
             * an owned collection in display order; replacing the array requires the parent's
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
             * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CreditNote>;
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null.
     * object.status (Required): string. draft while the credit note is editable, issued once it is
     * numbered and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
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
         * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
         * collection in display order; replacing the array requires the parent's expected_version.
         * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its
         * ID to add one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string.
         * When the credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
         * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
         * treatment. Tax IDs are an owned collection in display order; replacing the array
         * requires the parent's expected_version. Existing entries retain their document_tax_id;
         * omit an entry to remove it, or omit its ID to add one. seller_tax_identity.anyOf[2]
         * (Value): null. status (Required): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". supported_actions (Required): Array of string. Lifecycle actions
         * Flint accepts for this resource now, based on stored state. Independent of the caller's
         * permissions; each action still requires its route's scope. Always [] when no action is
         * available. [] enum: "issue", "void". supported_actions[] (Value): string. Value enum:
         * "issue", "void". tax_currency_conversions (Required): Array of {@link
         * TaxCurrencyConversion}. The credit note's VAT stated in the currency of the country that
         * charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate,
         * rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's
         * credited VAT and taxable amount converted the same way. Always [] on drafts and when the
         * invoice froze no conversion. The credit note PDF prints the same figures.
         * tax_currency_conversions[] (Value): {@link TaxCurrencyConversion}. VAT on an issued
         * document converted into the currency of the country whose VAT is charged. total_money
         * (Required): {@link MoneyValue}. The face value of the credit note, the sum of its lines.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * updated_at (Required): string. When the credit note last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current credit note
         * version. Send this as expected_version when updating the draft. Format: int64. minimum:
         * 1. voided_at (Optional): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are
             * an owned collection in display order; replacing the array requires the parent's
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
             * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CreditNote>;
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
        "previous_attributes"?: Partial<CreditNote>;
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
        "previous_attributes"?: Partial<CreditNote>;
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null.
     * object.status (Required): string. draft while the credit note is editable, issued once it is
     * numbered and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
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
         * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
         * collection in display order; replacing the array requires the parent's expected_version.
         * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its
         * ID to add one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string.
         * When the credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
         * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
         * treatment. Tax IDs are an owned collection in display order; replacing the array
         * requires the parent's expected_version. Existing entries retain their document_tax_id;
         * omit an entry to remove it, or omit its ID to add one. seller_tax_identity.anyOf[2]
         * (Value): null. status (Required): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". supported_actions (Required): Array of string. Lifecycle actions
         * Flint accepts for this resource now, based on stored state. Independent of the caller's
         * permissions; each action still requires its route's scope. Always [] when no action is
         * available. [] enum: "issue", "void". supported_actions[] (Value): string. Value enum:
         * "issue", "void". tax_currency_conversions (Required): Array of {@link
         * TaxCurrencyConversion}. The credit note's VAT stated in the currency of the country that
         * charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate,
         * rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's
         * credited VAT and taxable amount converted the same way. Always [] on drafts and when the
         * invoice froze no conversion. The credit note PDF prints the same figures.
         * tax_currency_conversions[] (Value): {@link TaxCurrencyConversion}. VAT on an issued
         * document converted into the currency of the country whose VAT is charged. total_money
         * (Required): {@link MoneyValue}. The face value of the credit note, the sum of its lines.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * updated_at (Required): string. When the credit note last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current credit note
         * version. Send this as expected_version when updating the draft. Format: int64. minimum:
         * 1. voided_at (Optional): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are
             * an owned collection in display order; replacing the array requires the parent's
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
             * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CreditNote>;
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.buyer_tax_identity.anyOf[2] (Value): null.
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
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.seller_tax_identity.anyOf[2] (Value): null.
     * object.status (Required): string. draft while the credit note is editable, issued once it is
     * numbered and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided".
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
         * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
         * collection in display order; replacing the array requires the parent's expected_version.
         * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its
         * ID to add one. buyer_tax_identity.anyOf[2] (Value): null. created_at (Required): string.
         * When the credit note was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
         * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
         * treatment. Tax IDs are an owned collection in display order; replacing the array
         * requires the parent's expected_version. Existing entries retain their document_tax_id;
         * omit an entry to remove it, or omit its ID to add one. seller_tax_identity.anyOf[2]
         * (Value): null. status (Required): string. draft while the credit note is editable,
         * issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft",
         * "issued", "voided". supported_actions (Required): Array of string. Lifecycle actions
         * Flint accepts for this resource now, based on stored state. Independent of the caller's
         * permissions; each action still requires its route's scope. Always [] when no action is
         * available. [] enum: "issue", "void". supported_actions[] (Value): string. Value enum:
         * "issue", "void". tax_currency_conversions (Required): Array of {@link
         * TaxCurrencyConversion}. The credit note's VAT stated in the currency of the country that
         * charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate,
         * rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's
         * credited VAT and taxable amount converted the same way. Always [] on drafts and when the
         * invoice froze no conversion. The credit note PDF prints the same figures.
         * tax_currency_conversions[] (Value): {@link TaxCurrencyConversion}. VAT on an issued
         * document converted into the currency of the country whose VAT is charged. total_money
         * (Required): {@link MoneyValue}. The face value of the credit note, the sum of its lines.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * updated_at (Required): string. When the credit note last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current credit note
         * version. Send this as expected_version when updating the draft. Format: int64. minimum:
         * 1. voided_at (Optional): string. When the credit note was voided. Absent unless its
         * status is voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are
             * an owned collection in display order; replacing the array requires the parent's
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
             * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CreditNote>;
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
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
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
    /** Filter by invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by the source invoice's current customer_id. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
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
        "previous_attributes"?: Partial<CustomDomain>;
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
        "previous_attributes"?: Partial<CustomDomain>;
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
export type CustomDomainsDeleteParams = DisputesAcceptParams;
export type CustomDomainsGetParams = DisputesAcceptParams;
export type CustomDomainsListParams = {
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
     * Return domains of these types. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "checkout", "customer_account". Value enum: "checkout",
     * "customer_account". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "checkout",
     * "customer_account". anyOf[1][] (Value): string. Value enum: "checkout", "customer_account".
     * anyOf[2] (Value): string. Value enum: "checkout", "customer_account".
     */
    "type"?: InputValue<("checkout" | "customer_account") | readonly ("checkout" | "customer_account")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "provisioning", "active", "attention_required", "inactive", "archived". Value enum:
     * "provisioning", "active", "attention_required", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "provisioning", "active", "attention_required",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "provisioning", "active",
     * "attention_required", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "provisioning", "active", "attention_required", "inactive", "archived".
     */
    "status"?: InputValue<("provisioning" | "active" | "attention_required" | "inactive" | "archived")
        | readonly ("provisioning" | "active" | "attention_required" | "inactive" | "archived")[]>;
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
export type CustomDomainsValidateParams = DisputesAcceptParams;
/**
 * One answer to a payment link custom field, with the field as it was when checkout started.
 * `custom_field_type` determines the type of `value`.
 */
export type CustomFieldAnswer = ({
    /**
     * The kind of field answered, which determines the type of `value`. Value enum: "text",
     * "textarea", "dropdown", "checkbox".
     */
    "custom_field_type": "text" | "textarea" | "dropdown" | "checkbox" | (string & {});
    /** The field's `key` when checkout started. minLength: 1. maxLength: 243. */
    "key": string;
    /**
     * The question the buyer saw: the field's `label` when checkout started. minLength: 1.
     * maxLength: 255.
     */
    "label": string;
    /**
     * ID of the payment link custom field the buyer answered. The link may have changed or removed
     * the field since. pattern: ^plcf_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /**
     * The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for
     * `checkbox`. anyOf[1] (Value): string. minLength: 1. maxLength: 4096. anyOf[2] (Value):
     * boolean.
     */
    "value": ((string) | (boolean) | (unknown));
})
    & ((Exclude<CustomFieldAnswerText & object, readonly unknown[]>)
    | (Exclude<CustomFieldAnswerTextarea & object, readonly unknown[]>)
    | (Exclude<CustomFieldAnswerDropdown & object, readonly unknown[]>)
    | (Exclude<CustomFieldAnswerCheckbox & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * One answer to a payment link custom field, with the field as it was when checkout started.
 * `custom_field_type` determines the type of `value`.
 */
export type CustomFieldAnswerCheckbox = ({
    /** The kind of field answered, which determines the type of `value`. Value enum: "checkbox". */
    "custom_field_type": "checkbox" | (string & {});
    /** The field's `key` when checkout started. minLength: 1. maxLength: 243. */
    "key": string;
    /**
     * The question the buyer saw: the field's `label` when checkout started. minLength: 1.
     * maxLength: 255.
     */
    "label": string;
    /**
     * ID of the payment link custom field the buyer answered. The link may have changed or removed
     * the field since. pattern: ^plcf_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /**
     * The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for
     * `checkbox`. anyOf[1] (Value): string. minLength: 1. maxLength: 4096. anyOf[2] (Value):
     * boolean.
     */
    "value": ((string) | (boolean) | (unknown));
})
    & ({
    /** Value enum: "checkbox". */
    "custom_field_type"?: "checkbox" | (string & {});
    /** `true` when the buyer checked the box, `false` when they left an optional box unchecked. */
    "value"?: boolean;
});
/**
 * One answer to a payment link custom field, with the field as it was when checkout started.
 * `custom_field_type` determines the type of `value`.
 */
export type CustomFieldAnswerDropdown = ({
    /** The kind of field answered, which determines the type of `value`. Value enum: "dropdown". */
    "custom_field_type": "dropdown" | (string & {});
    /** The field's `key` when checkout started. minLength: 1. maxLength: 243. */
    "key": string;
    /**
     * The question the buyer saw: the field's `label` when checkout started. minLength: 1.
     * maxLength: 255.
     */
    "label": string;
    /**
     * ID of the payment link custom field the buyer answered. The link may have changed or removed
     * the field since. pattern: ^plcf_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /**
     * The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for
     * `checkbox`. anyOf[1] (Value): string. minLength: 1. maxLength: 4096. anyOf[2] (Value):
     * boolean.
     */
    "value": ((string) | (boolean) | (unknown));
})
    & ({
    /** Value enum: "dropdown". */
    "custom_field_type"?: "dropdown" | (string & {});
    /**
     * The option the buyer chose, exactly as the link listed it when checkout started. minLength:
     * 1. maxLength: 4096.
     */
    "value"?: string;
});
/**
 * One answer to a payment link custom field, with the field as it was when checkout started.
 * `custom_field_type` determines the type of `value`.
 */
export type CustomFieldAnswerText = ({
    /** The kind of field answered, which determines the type of `value`. Value enum: "text". */
    "custom_field_type": "text" | (string & {});
    /** The field's `key` when checkout started. minLength: 1. maxLength: 243. */
    "key": string;
    /**
     * The question the buyer saw: the field's `label` when checkout started. minLength: 1.
     * maxLength: 255.
     */
    "label": string;
    /**
     * ID of the payment link custom field the buyer answered. The link may have changed or removed
     * the field since. pattern: ^plcf_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /**
     * The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for
     * `checkbox`. anyOf[1] (Value): string. minLength: 1. maxLength: 4096. anyOf[2] (Value):
     * boolean.
     */
    "value": ((string) | (boolean) | (unknown));
})
    & ({
    /** Value enum: "text". */
    "custom_field_type"?: "text" | (string & {});
    /**
     * The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.
     * minLength: 1. maxLength: 4096.
     */
    "value"?: string;
});
/**
 * One answer to a payment link custom field, with the field as it was when checkout started.
 * `custom_field_type` determines the type of `value`.
 */
export type CustomFieldAnswerTextarea = ({
    /** The kind of field answered, which determines the type of `value`. Value enum: "textarea". */
    "custom_field_type": "textarea" | (string & {});
    /** The field's `key` when checkout started. minLength: 1. maxLength: 243. */
    "key": string;
    /**
     * The question the buyer saw: the field's `label` when checkout started. minLength: 1.
     * maxLength: 255.
     */
    "label": string;
    /**
     * ID of the payment link custom field the buyer answered. The link may have changed or removed
     * the field since. pattern: ^plcf_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /**
     * The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for
     * `checkbox`. anyOf[1] (Value): string. minLength: 1. maxLength: 4096. anyOf[2] (Value):
     * boolean.
     */
    "value": ((string) | (boolean) | (unknown));
})
    & ({
    /** Value enum: "textarea". */
    "custom_field_type"?: "textarea" | (string & {});
    /**
     * The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.
     * minLength: 1. maxLength: 4096.
     */
    "value"?: string;
});
/** A merchant's customer profile. */
export type Customer = {
    /**
     * The customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. `null` when no saved address
     * is the billing default. anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. anyOf[2] (Value): null.
     */
    "billing_address": ((Address) | (null));
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Present only when `expand` includes `default_payment_method`; `null` when expanded and there
     * is no related payment method. anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. anyOf[2] (Value): null.
     */
    "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
    /**
     * ID of the customer's default off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "default_payment_method_id": string | null;
    /**
     * Customer email. `null` when the customer has none. Unique among the environment's customers.
     */
    "email": string | null;
    /**
     * Caller-owned identifier for this customer in an external system. `null` when none is set.
     * Not returned to customer sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Internal note about this customer. `null` when none is set. Not returned to customer
     * sessions.
     */
    "internal_note": string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Customer name. `null` when none is set. */
    "name": string | null;
    /** Customer phone number. `null` when none is set. */
    "phone": string | null;
    /**
     * ID of the customer's direct wholesale price list. `null` when none is set. An inactive list
     * can be assigned but does not apply. Not returned to customer sessions. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string | null;
    /**
     * What this customer owes you on invoices: the outstanding and overdue amounts, one balance
     * per currency. Present only when `expand` includes `receivables`. A customer's receivable
     * balances by currency and when they were observed.
     */
    "receivables"?: CustomerReceivables;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. `null`
     * when none is set. Not returned to customer sessions.
     */
    "segment": string | null;
    /**
     * The customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. `null` when no saved address is the shipping default. anyOf[1]
     * (Value): {@link Address}. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country. anyOf[2] (Value): null.
     */
    "shipping_address": ((Address) | (null));
    /**
     * Where the customer is in the deletion lifecycle. Value enum: "active",
     * "deletion_processing", "deleted".
     */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /**
     * Whether Flint treats this customer as exempt from tax on their orders, so it skips tax
     * calculation for them. Not returned to customer sessions.
     */
    "tax_exempt"?: boolean;
    /**
     * Legal name, registered address and tax IDs printed on this customer's invoices and credit
     * notes. `null` when none is set. Always `null` for customer sessions. anyOf[1] (Value):
     * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in
     * display order; replacing the array requires the parent's expected_version. Existing entries
     * retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.
     * anyOf[2] (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /**
     * ID of the test clock the customer was created on. The customer and its subscriptions read
     * the clock's `frozen_at` as the current time. Present only for customers created on a test
     * clock. Not returned to customer sessions. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * How the Flint-hosted customer account is presented. The account's hostname is a custom domain;
 * manage it with /v1/custom-domains. Send null to clear a value.
 */
export type CustomerAccountPresentation = {
    /**
     * Name shown at the top of the Flint-hosted customer account, up to 100 characters. `null`
     * when none is set, so the account shows your business name. Send null to clear it. minLength:
     * 1.
     */
    "account_name"?: string | null;
};
/**
 * How the Flint-hosted customer account is presented. The account's hostname is a custom domain;
 * manage it with /v1/custom-domains. Send null to clear a value.
 */
export type CustomerAccountPresentationRequestInput = CustomerAccountPresentation;
/**
 * Route templates for a merchant-hosted customer account: email preferences, invoice, order,
 * return, and subscription pages. Send null to clear one.
 */
export type CustomerAccountRouteTemplates = {
    /**
     * Path under `merchant_account_url` for the email preferences page, with no placeholder.
     * `null` when no template is set, so links land on `merchant_account_url`. Send null to clear
     * it. minLength: 1.
     */
    "email_preferences"?: string | null;
    /**
     * Path under `merchant_account_url` for an invoice page, containing `{resource_id}` once.
     * `null` when no template is set, so links land on `merchant_account_url`. Send null to clear
     * it. minLength: 1.
     */
    "invoice"?: string | null;
    /**
     * Path under `merchant_account_url` for an order page, containing `{resource_id}` once. `null`
     * when no template is set, so links land on `merchant_account_url`. Send null to clear it.
     * minLength: 1.
     */
    "order"?: string | null;
    /**
     * Path under `merchant_account_url` for a return page, containing `{resource_id}` once. `null`
     * when no template is set, so links land on `merchant_account_url`. Send null to clear it.
     * minLength: 1.
     */
    "return"?: string | null;
    /**
     * Path under `merchant_account_url` for a subscription page, containing `{resource_id}` once.
     * `null` when no template is set, so links land on `merchant_account_url`. Send null to clear
     * it. minLength: 1.
     */
    "subscription"?: string | null;
};
/**
 * Route templates for a merchant-hosted customer account: email preferences, invoice, order,
 * return, and subscription pages. Send null to clear one.
 */
export type CustomerAccountRouteTemplatesRequestInput = CustomerAccountRouteTemplates;
/**
 * Customer account settings: hosted mode, merchant account URL, presentation, route templates, and
 * what buyers may do to their own subscriptions.
 */
export type CustomerAccountSettings = {
    /**
     * Replaced as a whole: send every field you want to keep. What buyers may do to their own
     * subscriptions in Flint's buyer account or through a customer session, in either mode.
     * Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an
     * update that includes buyer_capabilities replaces the stored value, and each field it omits
     * takes its default. Effective settings include every default. What a store lets buyers do to
     * their own subscriptions. minProperties: 1.
     */
    "buyer_capabilities"?: BuyerCapabilities;
    /**
     * Your customer account page's URL, when you host it. `null` when you don't host the account.
     * minLength: 1.
     */
    "merchant_account_url"?: string | null;
    /**
     * Who hosts the customer account where buyers see their orders, subscriptions, returns, and
     * invoices. Value enum: "flint_hosted", "merchant_hosted".
     */
    "mode"?: "flint_hosted" | "merchant_hosted" | (string & {});
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. How the
     * Flint-hosted customer account is presented. The account's hostname is a custom domain;
     * manage it with /v1/custom-domains. Send null to clear a value.
     */
    "presentation"?: CustomerAccountPresentation;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Route templates
     * for a merchant-hosted customer account: email preferences, invoice, order, return, and
     * subscription pages. Send null to clear one.
     */
    "route_templates"?: CustomerAccountRouteTemplates;
};
/**
 * Customer account settings: hosted mode, merchant account URL, presentation, route templates, and
 * what buyers may do to their own subscriptions.
 */
export type CustomerAccountSettingsRequestInput = {
    /**
     * Replaced as a whole: send every field you want to keep. What buyers may do to their own
     * subscriptions in Flint's buyer account or through a customer session, in either mode.
     * Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an
     * update that includes buyer_capabilities replaces the stored value, and each field it omits
     * takes its default. Send at least one field. What a store lets buyers do to their own
     * subscriptions. minProperties: 1.
     */
    "buyer_capabilities"?: BuyerCapabilitiesRequestInput;
    /** Your customer account page's URL, when you host it. Send null to clear it. minLength: 1. */
    "merchant_account_url"?: string | null;
    /**
     * Who hosts the customer account where buyers see their orders, subscriptions, returns, and
     * invoices. Value enum: "flint_hosted", "merchant_hosted".
     */
    "mode"?: "flint_hosted" | "merchant_hosted";
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. How the
     * Flint-hosted customer account is presented. The account's hostname is a custom domain;
     * manage it with /v1/custom-domains. Send null to clear a value.
     */
    "presentation"?: CustomerAccountPresentationRequestInput;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Route templates
     * for a merchant-hosted customer account: email preferences, invoice, order, return, and
     * subscription pages. Send null to clear one.
     */
    "route_templates"?: CustomerAccountRouteTemplatesRequestInput;
};
/** An address saved on a customer's profile. */
export type CustomerAddress = {
    /**
     * The postal address. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "address": Address;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Unique identifier for this customer address, prefixed `caddr_`. Example:
     * "caddr_01KEZF7C00K2Q127FBJAXWB0FP".
     */
    "customer_address_id": string;
    /** ID of the customer this address belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * Whether this is the customer's default billing address. At most one saved address holds each
     * default.
     */
    "is_default_billing": boolean;
    /**
     * Whether this is the customer's default shipping address. At most one saved address holds
     * each default.
     */
    "is_default_shipping": boolean;
    /** Limited to 100 characters (Unicode code points). maxLength: 100. */
    "label"?: string;
    /** E.164 phone number. Limited to 30 characters (Unicode code points). maxLength: 30. */
    "phone"?: string;
    /** Limited to 255 characters (Unicode code points). maxLength: 255. */
    "recipient_name": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `CustomerAddress` objects. */
export type CustomerAddressListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * CustomerAddress}. An address saved on a customer's profile.
     */
    "data": Array<CustomerAddress>;
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
/** A response containing `CustomerAddress` data. */
export type CustomerAddressResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An address saved on a
     * customer's profile.
     */
    "data": CustomerAddress;
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
export type CustomerCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_address": ((Address) | (null));
            "created_at": string;
            "customer_id": string;
            "default_invoice_payment_term_id"?: string;
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "default_payment_method_id": string | null;
            "email": string | null;
            "external_reference_id": string | null;
            "internal_note": string | null;
            "is_merchant_verified"?: boolean;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string | null;
            "phone": string | null;
            "price_list_id": string | null;
            "receivables"?: CustomerReceivables;
            "segment": string | null;
            "shipping_address": ((Address) | (null));
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            "tax_exempt"?: boolean;
            "tax_identity": ((TaxIdentity) | (null));
            "test_clock_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "customer.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_address": ((Address) | (null));
            "created_at": string;
            "customer_id": string;
            "default_invoice_payment_term_id"?: string;
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "default_payment_method_id": string | null;
            "email": string | null;
            "external_reference_id": string | null;
            "internal_note": string | null;
            "is_merchant_verified"?: boolean;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string | null;
            "phone": string | null;
            "price_list_id": string | null;
            "receivables"?: CustomerReceivables;
            "segment": string | null;
            "shipping_address": ((Address) | (null));
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            "tax_exempt"?: boolean;
            "tax_identity": ((TaxIdentity) | (null));
            "test_clock_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "customer.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "customer.created";
});
/**
 * The `customer.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CustomerCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_address (Required): {@link Address} or null. The
     * customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. `null` when no saved address
     * is the billing default. object.billing_address.anyOf[1] (Value): {@link Address}. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.billing_address.anyOf[2] (Value): null. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string. Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.default_invoice_payment_term_id (Optional): string.
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4". object.default_payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
     * `default_payment_method`; `null` when expanded and there is no related payment method.
     * object.default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. object.default_payment_method.anyOf[2] (Value): null.
     * object.default_payment_method_id (Required): string or null. ID of the customer's default
     * off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.email (Required): string or null. Customer email.
     * `null` when the customer has none. Unique among the environment's customers.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * customer in an external system. `null` when none is set. Not returned to customer sessions.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.internal_note (Required):
     * string or null. Internal note about this customer. `null` when none is set. Not returned to
     * customer sessions. object.is_merchant_verified (Optional): boolean. Flag you set on the
     * customer, for example after checking ID in store. Promotion and delivery rules can match it.
     * Flint does not set it; it is unrelated to customer verifications, which prove a buyer
     * controls an email address. object.merchant_id (Required): string. ID of the merchant this
     * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string or null. Customer name. `null` when none is set. object.phone (Required):
     * string or null. Customer phone number. `null` when none is set. object.price_list_id
     * (Required): string or null. ID of the customer's direct wholesale price list. `null` when
     * none is set. An inactive list can be assigned but does not apply. Not returned to customer
     * sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * object.receivables (Optional): {@link CustomerReceivables}. What this customer owes you on
     * invoices: the outstanding and overdue amounts, one balance per currency. Present only when
     * `expand` includes `receivables`. A customer's receivable balances by currency and when they
     * were observed. object.segment (Required): string or null. Free-form label you assign, such
     * as wholesale, so promotion and delivery rules can match groups of customers. It is not an
     * ID; Flint does not check it against any resource. `null` when none is set. Not returned to
     * customer sessions. object.shipping_address (Required): {@link Address} or null. The
     * customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. `null` when no saved address is the shipping default.
     * object.shipping_address.anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.shipping_address.anyOf[2] (Value):
     * null. object.status (Required): string. Where the customer is in the deletion lifecycle.
     * Value enum: "active", "deletion_processing", "deleted". object.tax_exempt (Optional):
     * boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips
     * tax calculation for them. Not returned to customer sessions. object.tax_identity (Required):
     * {@link TaxIdentity} or null. Legal name, registered address and tax IDs printed on this
     * customer's invoices and credit notes. `null` when none is set. Always `null` for customer
     * sessions. object.tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.tax_identity.anyOf[2] (Value): null.
     * object.test_clock_id (Optional): string. ID of the test clock the customer was created on.
     * The customer and its subscriptions read the clock's `frozen_at` as the current time. Present
     * only for customers created on a test clock. Not returned to customer sessions. Example:
     * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_address (Required): {@link Address} or null. The customer's default billing
         * address: a copy of the address of the saved address marked is_default_billing.
         * Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders
         * with no other tax location at this address. `null` when no saved address is the billing
         * default. billing_address.anyOf[1] (Value): {@link Address}. A postal address. Every
         * address has country. Addresses Flint checked as complete (customer and saved addresses,
         * merchant, location, invoice, order delivery destination, tax identity, fulfillment
         * recipient and pickup addresses) always have line1 and city, and US ones always have
         * state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
         * locations hold only what was provided, such as postal_code and country.
         * billing_address.anyOf[2] (Value): null. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Required):
         * string. Unique identifier for this customer, prefixed `cus_`. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". default_invoice_payment_term_id (Optional): string. ID
         * of the invoice payment term that applies to this customer's invoices created with
         * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
         * "ipt_01KEZF7C0064N1V301BBMQ37R4". default_payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `default_payment_method`; `null` when expanded and there is no related payment method.
         * default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. default_payment_method.anyOf[2] (Value): null.
         * default_payment_method_id (Required): string or null. ID of the customer's default
         * off-session payment method. `null` when none is set. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". email (Required): string or null. Customer email.
         * `null` when the customer has none. Unique among the environment's customers.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * customer in an external system. `null` when none is set. Not returned to customer
         * sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842". internal_note
         * (Required): string or null. Internal note about this customer. `null` when none is set.
         * Not returned to customer sessions. is_merchant_verified (Optional): boolean. Flag you
         * set on the customer, for example after checking ID in store. Promotion and delivery
         * rules can match it. Flint does not set it; it is unrelated to customer verifications,
         * which prove a buyer controls an email address. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata
         * (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string or null. Customer name. `null` when none is set.
         * phone (Required): string or null. Customer phone number. `null` when none is set.
         * price_list_id (Required): string or null. ID of the customer's direct wholesale price
         * list. `null` when none is set. An inactive list can be assigned but does not apply. Not
         * returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". receivables (Optional): {@link CustomerReceivables}.
         * What this customer owes you on invoices: the outstanding and overdue amounts, one
         * balance per currency. Present only when `expand` includes `receivables`. A customer's
         * receivable balances by currency and when they were observed. segment (Required): string
         * or null. Free-form label you assign, such as wholesale, so promotion and delivery rules
         * can match groups of customers. It is not an ID; Flint does not check it against any
         * resource. `null` when none is set. Not returned to customer sessions. shipping_address
         * (Required): {@link Address} or null. The customer's default shipping address: a copy of
         * the address of the saved address marked is_default_shipping. Read-only; change it
         * through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no
         * saved address is the shipping default. shipping_address.anyOf[1] (Value): {@link
         * Address}. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. shipping_address.anyOf[2] (Value): null. status (Required):
         * string. Where the customer is in the deletion lifecycle. Value enum: "active",
         * "deletion_processing", "deleted". tax_exempt (Optional): boolean. Whether Flint treats
         * this customer as exempt from tax on their orders, so it skips tax calculation for them.
         * Not returned to customer sessions. tax_identity (Required): {@link TaxIdentity} or null.
         * Legal name, registered address and tax IDs printed on this customer's invoices and
         * credit notes. `null` when none is set. Always `null` for customer sessions.
         * tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity
         * displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. tax_identity.anyOf[2] (Value): null. test_clock_id
         * (Optional): string. ID of the test clock the customer was created on. The customer and
         * its subscriptions read the clock's `frozen_at` as the current time. Present only for
         * customers created on a test clock. Not returned to customer sessions. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current
         * version of this resource's owned state. Send it as `expected_version` when changing the
         * resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * The customer's default billing address: a copy of the address of the saved address
             * marked is_default_billing. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location
             * at this address. `null` when no saved address is the billing default. anyOf[1]
             * (Value): {@link Address}. A postal address. Every address has country. Addresses
             * Flint checked as complete (customer and saved addresses, merchant, location,
             * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
             * addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country. anyOf[2]
             * (Value): null.
             */
            "billing_address": ((Address) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Unique identifier for this customer, prefixed `cus_`. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * ID of the invoice payment term that applies to this customer's invoices created with
             * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
             * "ipt_01KEZF7C0064N1V301BBMQ37R4".
             */
            "default_invoice_payment_term_id"?: string;
            /**
             * Present only when `expand` includes `default_payment_method`; `null` when expanded
             * and there is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * ID of the customer's default off-session payment method. `null` when none is set.
             * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "default_payment_method_id": string | null;
            /**
             * Customer email. `null` when the customer has none. Unique among the environment's
             * customers.
             */
            "email": string | null;
            /**
             * Caller-owned identifier for this customer in an external system. `null` when none is
             * set. Not returned to customer sessions. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Internal note about this customer. `null` when none is set. Not returned to customer
             * sessions.
             */
            "internal_note": string | null;
            /**
             * Flag you set on the customer, for example after checking ID in store. Promotion and
             * delivery rules can match it. Flint does not set it; it is unrelated to customer
             * verifications, which prove a buyer controls an email address.
             */
            "is_merchant_verified"?: boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Customer name. `null` when none is set. */
            "name": string | null;
            /** Customer phone number. `null` when none is set. */
            "phone": string | null;
            /**
             * ID of the customer's direct wholesale price list. `null` when none is set. An
             * inactive list can be assigned but does not apply. Not returned to customer sessions.
             * pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string | null;
            /**
             * What this customer owes you on invoices: the outstanding and overdue amounts, one
             * balance per currency. Present only when `expand` includes `receivables`. A
             * customer's receivable balances by currency and when they were observed.
             */
            "receivables"?: CustomerReceivables;
            /**
             * Free-form label you assign, such as wholesale, so promotion and delivery rules can
             * match groups of customers. It is not an ID; Flint does not check it against any
             * resource. `null` when none is set. Not returned to customer sessions.
             */
            "segment": string | null;
            /**
             * The customer's default shipping address: a copy of the address of the saved address
             * marked is_default_shipping. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved
             * address is the shipping default. anyOf[1] (Value): {@link Address}. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country. anyOf[2] (Value): null.
             */
            "shipping_address": ((Address) | (null));
            /**
             * Where the customer is in the deletion lifecycle. Value enum: "active",
             * "deletion_processing", "deleted".
             */
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            /**
             * Whether Flint treats this customer as exempt from tax on their orders, so it skips
             * tax calculation for them. Not returned to customer sessions.
             */
            "tax_exempt"?: boolean;
            /**
             * Legal name, registered address and tax IDs printed on this customer's invoices and
             * credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1]
             * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices
             * and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "tax_identity": ((TaxIdentity) | (null));
            /**
             * ID of the test clock the customer was created on. The customer and its subscriptions
             * read the clock's `frozen_at` as the current time. Present only for customers created
             * on a test clock. Not returned to customer sessions. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "customer.created". */
    "event_type"?: "customer.created";
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
 * The `customer.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CustomerCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_address (Required): {@link Address} or null. The
     * customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. `null` when no saved address
     * is the billing default. object.billing_address.anyOf[1] (Value): {@link Address}. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.billing_address.anyOf[2] (Value): null. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string. Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.default_invoice_payment_term_id (Optional): string.
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4". object.default_payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
     * `default_payment_method`; `null` when expanded and there is no related payment method.
     * object.default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. object.default_payment_method.anyOf[2] (Value): null.
     * object.default_payment_method_id (Required): string or null. ID of the customer's default
     * off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.email (Required): string or null. Customer email.
     * `null` when the customer has none. Unique among the environment's customers.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * customer in an external system. `null` when none is set. Not returned to customer sessions.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.internal_note (Required):
     * string or null. Internal note about this customer. `null` when none is set. Not returned to
     * customer sessions. object.is_merchant_verified (Optional): boolean. Flag you set on the
     * customer, for example after checking ID in store. Promotion and delivery rules can match it.
     * Flint does not set it; it is unrelated to customer verifications, which prove a buyer
     * controls an email address. object.merchant_id (Required): string. ID of the merchant this
     * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string or null. Customer name. `null` when none is set. object.phone (Required):
     * string or null. Customer phone number. `null` when none is set. object.price_list_id
     * (Required): string or null. ID of the customer's direct wholesale price list. `null` when
     * none is set. An inactive list can be assigned but does not apply. Not returned to customer
     * sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * object.receivables (Optional): {@link CustomerReceivables}. What this customer owes you on
     * invoices: the outstanding and overdue amounts, one balance per currency. Present only when
     * `expand` includes `receivables`. A customer's receivable balances by currency and when they
     * were observed. object.segment (Required): string or null. Free-form label you assign, such
     * as wholesale, so promotion and delivery rules can match groups of customers. It is not an
     * ID; Flint does not check it against any resource. `null` when none is set. Not returned to
     * customer sessions. object.shipping_address (Required): {@link Address} or null. The
     * customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. `null` when no saved address is the shipping default.
     * object.shipping_address.anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.shipping_address.anyOf[2] (Value):
     * null. object.status (Required): string. Where the customer is in the deletion lifecycle.
     * Value enum: "active", "deletion_processing", "deleted". object.tax_exempt (Optional):
     * boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips
     * tax calculation for them. Not returned to customer sessions. object.tax_identity (Required):
     * {@link TaxIdentity} or null. Legal name, registered address and tax IDs printed on this
     * customer's invoices and credit notes. `null` when none is set. Always `null` for customer
     * sessions. object.tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.tax_identity.anyOf[2] (Value): null.
     * object.test_clock_id (Optional): string. ID of the test clock the customer was created on.
     * The customer and its subscriptions read the clock's `frozen_at` as the current time. Present
     * only for customers created on a test clock. Not returned to customer sessions. Example:
     * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_address (Required): {@link Address} or null. The customer's default billing
         * address: a copy of the address of the saved address marked is_default_billing.
         * Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders
         * with no other tax location at this address. `null` when no saved address is the billing
         * default. billing_address.anyOf[1] (Value): {@link Address}. A postal address. Every
         * address has country. Addresses Flint checked as complete (customer and saved addresses,
         * merchant, location, invoice, order delivery destination, tax identity, fulfillment
         * recipient and pickup addresses) always have line1 and city, and US ones always have
         * state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
         * locations hold only what was provided, such as postal_code and country.
         * billing_address.anyOf[2] (Value): null. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Required):
         * string. Unique identifier for this customer, prefixed `cus_`. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". default_invoice_payment_term_id (Optional): string. ID
         * of the invoice payment term that applies to this customer's invoices created with
         * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
         * "ipt_01KEZF7C0064N1V301BBMQ37R4". default_payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `default_payment_method`; `null` when expanded and there is no related payment method.
         * default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. default_payment_method.anyOf[2] (Value): null.
         * default_payment_method_id (Required): string or null. ID of the customer's default
         * off-session payment method. `null` when none is set. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". email (Required): string or null. Customer email.
         * `null` when the customer has none. Unique among the environment's customers.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * customer in an external system. `null` when none is set. Not returned to customer
         * sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842". internal_note
         * (Required): string or null. Internal note about this customer. `null` when none is set.
         * Not returned to customer sessions. is_merchant_verified (Optional): boolean. Flag you
         * set on the customer, for example after checking ID in store. Promotion and delivery
         * rules can match it. Flint does not set it; it is unrelated to customer verifications,
         * which prove a buyer controls an email address. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata
         * (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string or null. Customer name. `null` when none is set.
         * phone (Required): string or null. Customer phone number. `null` when none is set.
         * price_list_id (Required): string or null. ID of the customer's direct wholesale price
         * list. `null` when none is set. An inactive list can be assigned but does not apply. Not
         * returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". receivables (Optional): {@link CustomerReceivables}.
         * What this customer owes you on invoices: the outstanding and overdue amounts, one
         * balance per currency. Present only when `expand` includes `receivables`. A customer's
         * receivable balances by currency and when they were observed. segment (Required): string
         * or null. Free-form label you assign, such as wholesale, so promotion and delivery rules
         * can match groups of customers. It is not an ID; Flint does not check it against any
         * resource. `null` when none is set. Not returned to customer sessions. shipping_address
         * (Required): {@link Address} or null. The customer's default shipping address: a copy of
         * the address of the saved address marked is_default_shipping. Read-only; change it
         * through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no
         * saved address is the shipping default. shipping_address.anyOf[1] (Value): {@link
         * Address}. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. shipping_address.anyOf[2] (Value): null. status (Required):
         * string. Where the customer is in the deletion lifecycle. Value enum: "active",
         * "deletion_processing", "deleted". tax_exempt (Optional): boolean. Whether Flint treats
         * this customer as exempt from tax on their orders, so it skips tax calculation for them.
         * Not returned to customer sessions. tax_identity (Required): {@link TaxIdentity} or null.
         * Legal name, registered address and tax IDs printed on this customer's invoices and
         * credit notes. `null` when none is set. Always `null` for customer sessions.
         * tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity
         * displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. tax_identity.anyOf[2] (Value): null. test_clock_id
         * (Optional): string. ID of the test clock the customer was created on. The customer and
         * its subscriptions read the clock's `frozen_at` as the current time. Present only for
         * customers created on a test clock. Not returned to customer sessions. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current
         * version of this resource's owned state. Send it as `expected_version` when changing the
         * resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * The customer's default billing address: a copy of the address of the saved address
             * marked is_default_billing. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location
             * at this address. `null` when no saved address is the billing default. anyOf[1]
             * (Value): {@link Address}. A postal address. Every address has country. Addresses
             * Flint checked as complete (customer and saved addresses, merchant, location,
             * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
             * addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country. anyOf[2]
             * (Value): null.
             */
            "billing_address": ((Address) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Unique identifier for this customer, prefixed `cus_`. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * ID of the invoice payment term that applies to this customer's invoices created with
             * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
             * "ipt_01KEZF7C0064N1V301BBMQ37R4".
             */
            "default_invoice_payment_term_id"?: string;
            /**
             * Present only when `expand` includes `default_payment_method`; `null` when expanded
             * and there is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * ID of the customer's default off-session payment method. `null` when none is set.
             * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "default_payment_method_id": string | null;
            /**
             * Customer email. `null` when the customer has none. Unique among the environment's
             * customers.
             */
            "email": string | null;
            /**
             * Caller-owned identifier for this customer in an external system. `null` when none is
             * set. Not returned to customer sessions. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Internal note about this customer. `null` when none is set. Not returned to customer
             * sessions.
             */
            "internal_note": string | null;
            /**
             * Flag you set on the customer, for example after checking ID in store. Promotion and
             * delivery rules can match it. Flint does not set it; it is unrelated to customer
             * verifications, which prove a buyer controls an email address.
             */
            "is_merchant_verified"?: boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Customer name. `null` when none is set. */
            "name": string | null;
            /** Customer phone number. `null` when none is set. */
            "phone": string | null;
            /**
             * ID of the customer's direct wholesale price list. `null` when none is set. An
             * inactive list can be assigned but does not apply. Not returned to customer sessions.
             * pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string | null;
            /**
             * What this customer owes you on invoices: the outstanding and overdue amounts, one
             * balance per currency. Present only when `expand` includes `receivables`. A
             * customer's receivable balances by currency and when they were observed.
             */
            "receivables"?: CustomerReceivables;
            /**
             * Free-form label you assign, such as wholesale, so promotion and delivery rules can
             * match groups of customers. It is not an ID; Flint does not check it against any
             * resource. `null` when none is set. Not returned to customer sessions.
             */
            "segment": string | null;
            /**
             * The customer's default shipping address: a copy of the address of the saved address
             * marked is_default_shipping. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved
             * address is the shipping default. anyOf[1] (Value): {@link Address}. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country. anyOf[2] (Value): null.
             */
            "shipping_address": ((Address) | (null));
            /**
             * Where the customer is in the deletion lifecycle. Value enum: "active",
             * "deletion_processing", "deleted".
             */
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            /**
             * Whether Flint treats this customer as exempt from tax on their orders, so it skips
             * tax calculation for them. Not returned to customer sessions.
             */
            "tax_exempt"?: boolean;
            /**
             * Legal name, registered address and tax IDs printed on this customer's invoices and
             * credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1]
             * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices
             * and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "tax_identity": ((TaxIdentity) | (null));
            /**
             * ID of the test clock the customer was created on. The customer and its subscriptions
             * read the clock's `frozen_at` as the current time. Present only for customers created
             * on a test clock. Not returned to customer sessions. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "customer.created". */
    "event_type"?: "customer.created";
});
export type CustomerDeletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_address": ((Address) | (null));
            "created_at": string;
            "customer_id": string;
            "default_invoice_payment_term_id"?: string;
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "default_payment_method_id": string | null;
            "email": string | null;
            "external_reference_id": string | null;
            "internal_note": string | null;
            "is_merchant_verified"?: boolean;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string | null;
            "phone": string | null;
            "price_list_id": string | null;
            "receivables"?: CustomerReceivables;
            "segment": string | null;
            "shipping_address": ((Address) | (null));
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            "tax_exempt"?: boolean;
            "tax_identity": ((TaxIdentity) | (null));
            "test_clock_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "customer.deleted";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_address": ((Address) | (null));
            "created_at": string;
            "customer_id": string;
            "default_invoice_payment_term_id"?: string;
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "default_payment_method_id": string | null;
            "email": string | null;
            "external_reference_id": string | null;
            "internal_note": string | null;
            "is_merchant_verified"?: boolean;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string | null;
            "phone": string | null;
            "price_list_id": string | null;
            "receivables"?: CustomerReceivables;
            "segment": string | null;
            "shipping_address": ((Address) | (null));
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            "tax_exempt"?: boolean;
            "tax_identity": ((TaxIdentity) | (null));
            "test_clock_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "customer.deleted";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "customer.deleted";
});
/**
 * The `customer.deleted` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CustomerDeletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_address (Required): {@link Address} or null. The
     * customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. `null` when no saved address
     * is the billing default. object.billing_address.anyOf[1] (Value): {@link Address}. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.billing_address.anyOf[2] (Value): null. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string. Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.default_invoice_payment_term_id (Optional): string.
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4". object.default_payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
     * `default_payment_method`; `null` when expanded and there is no related payment method.
     * object.default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. object.default_payment_method.anyOf[2] (Value): null.
     * object.default_payment_method_id (Required): string or null. ID of the customer's default
     * off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.email (Required): string or null. Customer email.
     * `null` when the customer has none. Unique among the environment's customers.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * customer in an external system. `null` when none is set. Not returned to customer sessions.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.internal_note (Required):
     * string or null. Internal note about this customer. `null` when none is set. Not returned to
     * customer sessions. object.is_merchant_verified (Optional): boolean. Flag you set on the
     * customer, for example after checking ID in store. Promotion and delivery rules can match it.
     * Flint does not set it; it is unrelated to customer verifications, which prove a buyer
     * controls an email address. object.merchant_id (Required): string. ID of the merchant this
     * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string or null. Customer name. `null` when none is set. object.phone (Required):
     * string or null. Customer phone number. `null` when none is set. object.price_list_id
     * (Required): string or null. ID of the customer's direct wholesale price list. `null` when
     * none is set. An inactive list can be assigned but does not apply. Not returned to customer
     * sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * object.receivables (Optional): {@link CustomerReceivables}. What this customer owes you on
     * invoices: the outstanding and overdue amounts, one balance per currency. Present only when
     * `expand` includes `receivables`. A customer's receivable balances by currency and when they
     * were observed. object.segment (Required): string or null. Free-form label you assign, such
     * as wholesale, so promotion and delivery rules can match groups of customers. It is not an
     * ID; Flint does not check it against any resource. `null` when none is set. Not returned to
     * customer sessions. object.shipping_address (Required): {@link Address} or null. The
     * customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. `null` when no saved address is the shipping default.
     * object.shipping_address.anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.shipping_address.anyOf[2] (Value):
     * null. object.status (Required): string. Where the customer is in the deletion lifecycle.
     * Value enum: "active", "deletion_processing", "deleted". object.tax_exempt (Optional):
     * boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips
     * tax calculation for them. Not returned to customer sessions. object.tax_identity (Required):
     * {@link TaxIdentity} or null. Legal name, registered address and tax IDs printed on this
     * customer's invoices and credit notes. `null` when none is set. Always `null` for customer
     * sessions. object.tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.tax_identity.anyOf[2] (Value): null.
     * object.test_clock_id (Optional): string. ID of the test clock the customer was created on.
     * The customer and its subscriptions read the clock's `frozen_at` as the current time. Present
     * only for customers created on a test clock. Not returned to customer sessions. Example:
     * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_address (Required): {@link Address} or null. The customer's default billing
         * address: a copy of the address of the saved address marked is_default_billing.
         * Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders
         * with no other tax location at this address. `null` when no saved address is the billing
         * default. billing_address.anyOf[1] (Value): {@link Address}. A postal address. Every
         * address has country. Addresses Flint checked as complete (customer and saved addresses,
         * merchant, location, invoice, order delivery destination, tax identity, fulfillment
         * recipient and pickup addresses) always have line1 and city, and US ones always have
         * state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
         * locations hold only what was provided, such as postal_code and country.
         * billing_address.anyOf[2] (Value): null. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Required):
         * string. Unique identifier for this customer, prefixed `cus_`. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". default_invoice_payment_term_id (Optional): string. ID
         * of the invoice payment term that applies to this customer's invoices created with
         * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
         * "ipt_01KEZF7C0064N1V301BBMQ37R4". default_payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `default_payment_method`; `null` when expanded and there is no related payment method.
         * default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. default_payment_method.anyOf[2] (Value): null.
         * default_payment_method_id (Required): string or null. ID of the customer's default
         * off-session payment method. `null` when none is set. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". email (Required): string or null. Customer email.
         * `null` when the customer has none. Unique among the environment's customers.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * customer in an external system. `null` when none is set. Not returned to customer
         * sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842". internal_note
         * (Required): string or null. Internal note about this customer. `null` when none is set.
         * Not returned to customer sessions. is_merchant_verified (Optional): boolean. Flag you
         * set on the customer, for example after checking ID in store. Promotion and delivery
         * rules can match it. Flint does not set it; it is unrelated to customer verifications,
         * which prove a buyer controls an email address. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata
         * (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string or null. Customer name. `null` when none is set.
         * phone (Required): string or null. Customer phone number. `null` when none is set.
         * price_list_id (Required): string or null. ID of the customer's direct wholesale price
         * list. `null` when none is set. An inactive list can be assigned but does not apply. Not
         * returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". receivables (Optional): {@link CustomerReceivables}.
         * What this customer owes you on invoices: the outstanding and overdue amounts, one
         * balance per currency. Present only when `expand` includes `receivables`. A customer's
         * receivable balances by currency and when they were observed. segment (Required): string
         * or null. Free-form label you assign, such as wholesale, so promotion and delivery rules
         * can match groups of customers. It is not an ID; Flint does not check it against any
         * resource. `null` when none is set. Not returned to customer sessions. shipping_address
         * (Required): {@link Address} or null. The customer's default shipping address: a copy of
         * the address of the saved address marked is_default_shipping. Read-only; change it
         * through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no
         * saved address is the shipping default. shipping_address.anyOf[1] (Value): {@link
         * Address}. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. shipping_address.anyOf[2] (Value): null. status (Required):
         * string. Where the customer is in the deletion lifecycle. Value enum: "active",
         * "deletion_processing", "deleted". tax_exempt (Optional): boolean. Whether Flint treats
         * this customer as exempt from tax on their orders, so it skips tax calculation for them.
         * Not returned to customer sessions. tax_identity (Required): {@link TaxIdentity} or null.
         * Legal name, registered address and tax IDs printed on this customer's invoices and
         * credit notes. `null` when none is set. Always `null` for customer sessions.
         * tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity
         * displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. tax_identity.anyOf[2] (Value): null. test_clock_id
         * (Optional): string. ID of the test clock the customer was created on. The customer and
         * its subscriptions read the clock's `frozen_at` as the current time. Present only for
         * customers created on a test clock. Not returned to customer sessions. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current
         * version of this resource's owned state. Send it as `expected_version` when changing the
         * resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * The customer's default billing address: a copy of the address of the saved address
             * marked is_default_billing. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location
             * at this address. `null` when no saved address is the billing default. anyOf[1]
             * (Value): {@link Address}. A postal address. Every address has country. Addresses
             * Flint checked as complete (customer and saved addresses, merchant, location,
             * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
             * addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country. anyOf[2]
             * (Value): null.
             */
            "billing_address": ((Address) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Unique identifier for this customer, prefixed `cus_`. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * ID of the invoice payment term that applies to this customer's invoices created with
             * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
             * "ipt_01KEZF7C0064N1V301BBMQ37R4".
             */
            "default_invoice_payment_term_id"?: string;
            /**
             * Present only when `expand` includes `default_payment_method`; `null` when expanded
             * and there is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * ID of the customer's default off-session payment method. `null` when none is set.
             * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "default_payment_method_id": string | null;
            /**
             * Customer email. `null` when the customer has none. Unique among the environment's
             * customers.
             */
            "email": string | null;
            /**
             * Caller-owned identifier for this customer in an external system. `null` when none is
             * set. Not returned to customer sessions. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Internal note about this customer. `null` when none is set. Not returned to customer
             * sessions.
             */
            "internal_note": string | null;
            /**
             * Flag you set on the customer, for example after checking ID in store. Promotion and
             * delivery rules can match it. Flint does not set it; it is unrelated to customer
             * verifications, which prove a buyer controls an email address.
             */
            "is_merchant_verified"?: boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Customer name. `null` when none is set. */
            "name": string | null;
            /** Customer phone number. `null` when none is set. */
            "phone": string | null;
            /**
             * ID of the customer's direct wholesale price list. `null` when none is set. An
             * inactive list can be assigned but does not apply. Not returned to customer sessions.
             * pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string | null;
            /**
             * What this customer owes you on invoices: the outstanding and overdue amounts, one
             * balance per currency. Present only when `expand` includes `receivables`. A
             * customer's receivable balances by currency and when they were observed.
             */
            "receivables"?: CustomerReceivables;
            /**
             * Free-form label you assign, such as wholesale, so promotion and delivery rules can
             * match groups of customers. It is not an ID; Flint does not check it against any
             * resource. `null` when none is set. Not returned to customer sessions.
             */
            "segment": string | null;
            /**
             * The customer's default shipping address: a copy of the address of the saved address
             * marked is_default_shipping. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved
             * address is the shipping default. anyOf[1] (Value): {@link Address}. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country. anyOf[2] (Value): null.
             */
            "shipping_address": ((Address) | (null));
            /**
             * Where the customer is in the deletion lifecycle. Value enum: "active",
             * "deletion_processing", "deleted".
             */
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            /**
             * Whether Flint treats this customer as exempt from tax on their orders, so it skips
             * tax calculation for them. Not returned to customer sessions.
             */
            "tax_exempt"?: boolean;
            /**
             * Legal name, registered address and tax IDs printed on this customer's invoices and
             * credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1]
             * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices
             * and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "tax_identity": ((TaxIdentity) | (null));
            /**
             * ID of the test clock the customer was created on. The customer and its subscriptions
             * read the clock's `frozen_at` as the current time. Present only for customers created
             * on a test clock. Not returned to customer sessions. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "customer.deleted". */
    "event_type"?: "customer.deleted";
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
 * The `customer.deleted` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CustomerDeletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_address (Required): {@link Address} or null. The
     * customer's default billing address: a copy of the address of the saved address marked
     * is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Flint taxes orders with no other tax location at this address. `null` when no saved address
     * is the billing default. object.billing_address.anyOf[1] (Value): {@link Address}. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     * object.billing_address.anyOf[2] (Value): null. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer_id
     * (Required): string. Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.default_invoice_payment_term_id (Optional): string.
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4". object.default_payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
     * `default_payment_method`; `null` when expanded and there is no related payment method.
     * object.default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A
     * payment method's summary fields, including type, status, and card details, returned when the
     * payment method is expanded. object.default_payment_method.anyOf[2] (Value): null.
     * object.default_payment_method_id (Required): string or null. ID of the customer's default
     * off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". object.email (Required): string or null. Customer email.
     * `null` when the customer has none. Unique among the environment's customers.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * customer in an external system. `null` when none is set. Not returned to customer sessions.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.internal_note (Required):
     * string or null. Internal note about this customer. `null` when none is set. Not returned to
     * customer sessions. object.is_merchant_verified (Optional): boolean. Flag you set on the
     * customer, for example after checking ID in store. Promotion and delivery rules can match it.
     * Flint does not set it; it is unrelated to customer verifications, which prove a buyer
     * controls an email address. object.merchant_id (Required): string. ID of the merchant this
     * resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string or null. Customer name. `null` when none is set. object.phone (Required):
     * string or null. Customer phone number. `null` when none is set. object.price_list_id
     * (Required): string or null. ID of the customer's direct wholesale price list. `null` when
     * none is set. An inactive list can be assigned but does not apply. Not returned to customer
     * sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * object.receivables (Optional): {@link CustomerReceivables}. What this customer owes you on
     * invoices: the outstanding and overdue amounts, one balance per currency. Present only when
     * `expand` includes `receivables`. A customer's receivable balances by currency and when they
     * were observed. object.segment (Required): string or null. Free-form label you assign, such
     * as wholesale, so promotion and delivery rules can match groups of customers. It is not an
     * ID; Flint does not check it against any resource. `null` when none is set. Not returned to
     * customer sessions. object.shipping_address (Required): {@link Address} or null. The
     * customer's default shipping address: a copy of the address of the saved address marked
     * is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses.
     * Checkout prefills it. `null` when no saved address is the shipping default.
     * object.shipping_address.anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.shipping_address.anyOf[2] (Value):
     * null. object.status (Required): string. Where the customer is in the deletion lifecycle.
     * Value enum: "active", "deletion_processing", "deleted". object.tax_exempt (Optional):
     * boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips
     * tax calculation for them. Not returned to customer sessions. object.tax_identity (Required):
     * {@link TaxIdentity} or null. Legal name, registered address and tax IDs printed on this
     * customer's invoices and credit notes. `null` when none is set. Always `null` for customer
     * sessions. object.tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal
     * identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. object.tax_identity.anyOf[2] (Value): null.
     * object.test_clock_id (Optional): string. ID of the test clock the customer was created on.
     * The customer and its subscriptions read the clock's `frozen_at` as the current time. Present
     * only for customers created on a test clock. Not returned to customer sessions. Example:
     * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_address (Required): {@link Address} or null. The customer's default billing
         * address: a copy of the address of the saved address marked is_default_billing.
         * Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders
         * with no other tax location at this address. `null` when no saved address is the billing
         * default. billing_address.anyOf[1] (Value): {@link Address}. A postal address. Every
         * address has country. Addresses Flint checked as complete (customer and saved addresses,
         * merchant, location, invoice, order delivery destination, tax identity, fulfillment
         * recipient and pickup addresses) always have line1 and city, and US ones always have
         * state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
         * locations hold only what was provided, such as postal_code and country.
         * billing_address.anyOf[2] (Value): null. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Required):
         * string. Unique identifier for this customer, prefixed `cus_`. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". default_invoice_payment_term_id (Optional): string. ID
         * of the invoice payment term that applies to this customer's invoices created with
         * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
         * "ipt_01KEZF7C0064N1V301BBMQ37R4". default_payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `default_payment_method`; `null` when expanded and there is no related payment method.
         * default_payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. default_payment_method.anyOf[2] (Value): null.
         * default_payment_method_id (Required): string or null. ID of the customer's default
         * off-session payment method. `null` when none is set. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". email (Required): string or null. Customer email.
         * `null` when the customer has none. Unique among the environment's customers.
         * external_reference_id (Required): string or null. Caller-owned identifier for this
         * customer in an external system. `null` when none is set. Not returned to customer
         * sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842". internal_note
         * (Required): string or null. Internal note about this customer. `null` when none is set.
         * Not returned to customer sessions. is_merchant_verified (Optional): boolean. Flag you
         * set on the customer, for example after checking ID in store. Promotion and delivery
         * rules can match it. Flint does not set it; it is unrelated to customer verifications,
         * which prove a buyer controls an email address. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata
         * (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string or null. Customer name. `null` when none is set.
         * phone (Required): string or null. Customer phone number. `null` when none is set.
         * price_list_id (Required): string or null. ID of the customer's direct wholesale price
         * list. `null` when none is set. An inactive list can be assigned but does not apply. Not
         * returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". receivables (Optional): {@link CustomerReceivables}.
         * What this customer owes you on invoices: the outstanding and overdue amounts, one
         * balance per currency. Present only when `expand` includes `receivables`. A customer's
         * receivable balances by currency and when they were observed. segment (Required): string
         * or null. Free-form label you assign, such as wholesale, so promotion and delivery rules
         * can match groups of customers. It is not an ID; Flint does not check it against any
         * resource. `null` when none is set. Not returned to customer sessions. shipping_address
         * (Required): {@link Address} or null. The customer's default shipping address: a copy of
         * the address of the saved address marked is_default_shipping. Read-only; change it
         * through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no
         * saved address is the shipping default. shipping_address.anyOf[1] (Value): {@link
         * Address}. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. shipping_address.anyOf[2] (Value): null. status (Required):
         * string. Where the customer is in the deletion lifecycle. Value enum: "active",
         * "deletion_processing", "deleted". tax_exempt (Optional): boolean. Whether Flint treats
         * this customer as exempt from tax on their orders, so it skips tax calculation for them.
         * Not returned to customer sessions. tax_identity (Required): {@link TaxIdentity} or null.
         * Legal name, registered address and tax IDs printed on this customer's invoices and
         * credit notes. `null` when none is set. Always `null` for customer sessions.
         * tax_identity.anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity
         * displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax
         * IDs are an owned collection in display order; replacing the array requires the parent's
         * expected_version. Existing entries retain their document_tax_id; omit an entry to remove
         * it, or omit its ID to add one. tax_identity.anyOf[2] (Value): null. test_clock_id
         * (Optional): string. ID of the test clock the customer was created on. The customer and
         * its subscriptions read the clock's `frozen_at` as the current time. Present only for
         * customers created on a test clock. Not returned to customer sessions. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current
         * version of this resource's owned state. Send it as `expected_version` when changing the
         * resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * The customer's default billing address: a copy of the address of the saved address
             * marked is_default_billing. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location
             * at this address. `null` when no saved address is the billing default. anyOf[1]
             * (Value): {@link Address}. A postal address. Every address has country. Addresses
             * Flint checked as complete (customer and saved addresses, merchant, location,
             * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
             * addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country. anyOf[2]
             * (Value): null.
             */
            "billing_address": ((Address) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Unique identifier for this customer, prefixed `cus_`. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string;
            /**
             * ID of the invoice payment term that applies to this customer's invoices created with
             * `payment_due.type` set to `customer_default`. Absent when none is set. Example:
             * "ipt_01KEZF7C0064N1V301BBMQ37R4".
             */
            "default_invoice_payment_term_id"?: string;
            /**
             * Present only when `expand` includes `default_payment_method`; `null` when expanded
             * and there is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "default_payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * ID of the customer's default off-session payment method. `null` when none is set.
             * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "default_payment_method_id": string | null;
            /**
             * Customer email. `null` when the customer has none. Unique among the environment's
             * customers.
             */
            "email": string | null;
            /**
             * Caller-owned identifier for this customer in an external system. `null` when none is
             * set. Not returned to customer sessions. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Internal note about this customer. `null` when none is set. Not returned to customer
             * sessions.
             */
            "internal_note": string | null;
            /**
             * Flag you set on the customer, for example after checking ID in store. Promotion and
             * delivery rules can match it. Flint does not set it; it is unrelated to customer
             * verifications, which prove a buyer controls an email address.
             */
            "is_merchant_verified"?: boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Customer name. `null` when none is set. */
            "name": string | null;
            /** Customer phone number. `null` when none is set. */
            "phone": string | null;
            /**
             * ID of the customer's direct wholesale price list. `null` when none is set. An
             * inactive list can be assigned but does not apply. Not returned to customer sessions.
             * pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string | null;
            /**
             * What this customer owes you on invoices: the outstanding and overdue amounts, one
             * balance per currency. Present only when `expand` includes `receivables`. A
             * customer's receivable balances by currency and when they were observed.
             */
            "receivables"?: CustomerReceivables;
            /**
             * Free-form label you assign, such as wholesale, so promotion and delivery rules can
             * match groups of customers. It is not an ID; Flint does not check it against any
             * resource. `null` when none is set. Not returned to customer sessions.
             */
            "segment": string | null;
            /**
             * The customer's default shipping address: a copy of the address of the saved address
             * marked is_default_shipping. Read-only; change it through
             * /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved
             * address is the shipping default. anyOf[1] (Value): {@link Address}. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country. anyOf[2] (Value): null.
             */
            "shipping_address": ((Address) | (null));
            /**
             * Where the customer is in the deletion lifecycle. Value enum: "active",
             * "deletion_processing", "deleted".
             */
            "status": "active" | "deletion_processing" | "deleted" | (string & {});
            /**
             * Whether Flint treats this customer as exempt from tax on their orders, so it skips
             * tax calculation for them. Not returned to customer sessions.
             */
            "tax_exempt"?: boolean;
            /**
             * Legal name, registered address and tax IDs printed on this customer's invoices and
             * credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1]
             * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices
             * and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
             * collection in display order; replacing the array requires the parent's
             * expected_version. Existing entries retain their document_tax_id; omit an entry to
             * remove it, or omit its ID to add one. anyOf[2] (Value): null.
             */
            "tax_identity": ((TaxIdentity) | (null));
            /**
             * ID of the test clock the customer was created on. The customer and its subscriptions
             * read the clock's `frozen_at` as the current time. Present only for customers created
             * on a test clock. Not returned to customer sessions. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "customer.deleted". */
    "event_type"?: "customer.deleted";
});
/** A request to delete a customer's personal information. */
export type CustomerDeletionRequest = {
    /**
     * Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status.
     * Example: "cdel_01KEZF7C009P94WEXW5RMRFXAY".
     */
    "customer_deletion_request_id": string;
    /** ID of the customer the request would erase. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * Time of the most recent approve or reject decision. `null` when the request is
     * pending_review or when a pre-existing decision time cannot be determined. Approval sets this
     * before asynchronous erasure finishes; retry approval sets it again. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "decided_at": string | null;
    /**
     * Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null`
     * when no reason was provided or the customer's personal data has since been erased.
     */
    "decision_reason": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "requested_at": string;
    /**
     * Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf.
     * `null` when the source of a pre-existing request cannot be determined. Value enum: "buyer",
     * "merchant", null.
     */
    "requested_by": "buyer" | "merchant" | null | (string & {}) | null;
    /**
     * Unlike decided_at, which records the merchant's decision, this is the time of the most
     * recent resolved outcome: rejected, completed, or failed. Absent while pending_review or
     * processing. Cleared when a failed request is approved again. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "resolved_at"?: string;
    /**
     * Requested time plus one calendar month in UTC, clamped to the last day of that month. This
     * is the deadline for responding to the buyer's request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "response_due_at": string;
    /**
     * What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes,
     * payments, and refunds stay for accounting, tax, and disputes, without the customer's email
     * address or phone number. Issued invoices and credit notes keep the buyer name, billing
     * address, and tax ID they were issued with, because tax law requires them. Orders keep the
     * delivery recipient's name and address. Contact copies created while deletion is finishing
     * are erased within minutes, with another check about 24 hours later. Value enum:
     * "retain_required_commerce_records".
     */
    "retention_policy": "retain_required_commerce_records" | (string & {});
    /**
     * Where the request is in review and erasure. Value enum: "pending_review", "processing",
     * "completed", "rejected", "failed".
     */
    "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
    /**
     * Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains
     * resolve while awaiting review, when retrying a failed deletion, and after resolution because
     * repeating the original decision succeeds. An opposite decision is refused with field_locked
     * at decision. [] enum: "resolve". [] (Value): string. Value enum: "resolve".
     */
    "supported_actions": Array<"resolve" | (string & {})>;
};
export type CustomerDeletionRequestCompletedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "customer_deletion_request_id": string;
            "customer_id": string;
            "decided_at": string | null;
            "decision_reason": string | null;
            "requested_at": string;
            "requested_by": "buyer" | "merchant" | null | (string & {}) | null;
            "resolved_at"?: string;
            "response_due_at": string;
            "retention_policy": "retain_required_commerce_records" | (string & {});
            "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
            "supported_actions": Array<"resolve" | (string & {})>;
        };
        "previous_attributes"?: Partial<CustomerDeletionRequest>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "customer_deletion_request.completed";
})
    & {
    "event_type": "customer_deletion_request.completed";
});
export type CustomerDeletionRequestCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "customer_deletion_request_id": string;
            "customer_id": string;
            "decided_at": string | null;
            "decision_reason": string | null;
            "requested_at": string;
            "requested_by": "buyer" | "merchant" | null | (string & {}) | null;
            "resolved_at"?: string;
            "response_due_at": string;
            "retention_policy": "retain_required_commerce_records" | (string & {});
            "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
            "supported_actions": Array<"resolve" | (string & {})>;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "customer_deletion_request.created";
})
    & {
    "event_type": "customer_deletion_request.created";
});
export type CustomerDeletionRequestFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "customer_deletion_request_id": string;
            "customer_id": string;
            "decided_at": string | null;
            "decision_reason": string | null;
            "requested_at": string;
            "requested_by": "buyer" | "merchant" | null | (string & {}) | null;
            "resolved_at"?: string;
            "response_due_at": string;
            "retention_policy": "retain_required_commerce_records" | (string & {});
            "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
            "supported_actions": Array<"resolve" | (string & {})>;
        };
        "previous_attributes"?: Partial<CustomerDeletionRequest>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "customer_deletion_request.failed";
})
    & {
    "event_type": "customer_deletion_request.failed";
});
/** A page of tracked customer deletion requests. */
export type CustomerDeletionRequestListResponse = {
    /**
     * Deletion requests matching the supplied filters, in the published list order. [] (Value):
     * {@link CustomerDeletionRequest}. A request to delete a customer's personal information.
     */
    "data": Array<CustomerDeletionRequest>;
    /**
     * Metadata about this response, including warnings when present. Metadata returned with a
     * response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any
     * warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque cursor to pass as page_token to fetch the next page. Omitted when no more results
     * remain.
     */
    "next_page_token"?: string;
    /**
     * ID of this API request. Include it when asking Flint to investigate the response. maxLength:
     * 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CustomerDeletionRequestProcessingEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "customer_deletion_request_id": string;
            "customer_id": string;
            "decided_at": string | null;
            "decision_reason": string | null;
            "requested_at": string;
            "requested_by": "buyer" | "merchant" | null | (string & {}) | null;
            "resolved_at"?: string;
            "response_due_at": string;
            "retention_policy": "retain_required_commerce_records" | (string & {});
            "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
            "supported_actions": Array<"resolve" | (string & {})>;
        };
        "previous_attributes"?: Partial<CustomerDeletionRequest>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "customer_deletion_request.processing";
})
    & {
    "event_type": "customer_deletion_request.processing";
});
export type CustomerDeletionRequestRejectedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "customer_deletion_request_id": string;
            "customer_id": string;
            "decided_at": string | null;
            "decision_reason": string | null;
            "requested_at": string;
            "requested_by": "buyer" | "merchant" | null | (string & {}) | null;
            "resolved_at"?: string;
            "response_due_at": string;
            "retention_policy": "retain_required_commerce_records" | (string & {});
            "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
            "supported_actions": Array<"resolve" | (string & {})>;
        };
        "previous_attributes"?: Partial<CustomerDeletionRequest>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "customer_deletion_request.rejected";
})
    & {
    "event_type": "customer_deletion_request.rejected";
});
/** A tracked deletion request and metadata about the API response. */
export type CustomerDeletionRequestResponse = {
    /**
     * The tracked request to review and erase this customer's personal data. A request to delete a
     * customer's personal information.
     */
    "data": CustomerDeletionRequest;
    /**
     * Metadata about this response, including idempotency replay and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * ID of this API request. Include it when asking Flint to investigate the response. maxLength:
     * 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CustomerDeletionRequestsCreateParams = (InputValue<CreateCustomerDeletionRequestInput>);
export type CustomerDeletionRequestsGetParams = {};
