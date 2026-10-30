import type { CredentialProvider, InputValue } from '../runtime.js';
import type { ExpandedInvoiceSummary } from './types-21.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { TaxIdentity } from './types-57.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type { Invoice } from './types-28.js';
import type { RefundListResponse } from './types-46.js';
import type {
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRequestInput,
    CreateCreditNoteRefundRequestInput,
    CreateCustomDomainRequestInput
} from './types-6.js';
import type { IssueCreditNoteRequestInput, InvoicesMarkUncollectibleParams } from './types-32.js';
import type { UpdateCreditNoteRequestInput } from './types-58.js';
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
     * Credit available to allocate or refund. Zero on draft and void notes. On issued notes,
     * total_money equals allocated_money plus pending_refund_money plus refunded_money plus
     * available_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "available_money": MoneyValue;
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. anyOf[2] (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /** When the credit note was created. Format: date-time. */
    "created_at": string;
    /** Unique identifier of the credit note. */
    "credit_note_id": string;
    /** Assigned at issue and stable from then on. Absent while the credit note is a draft. */
    "credit_note_number"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. null when unset. minLength:
     * 1. maxLength: 255.
     */
    "external_reference_id": string | null;
    /**
     * Summary of the source invoice. Returned only with expand=invoice. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded.
     */
    "invoice"?: ExpandedInvoiceSummary;
    /** The invoice this credit note corrects. */
    "invoice_id": string;
    /** When the credit note was issued. Absent on a draft. Format: date-time. */
    "issued_at"?: string;
    /**
     * Status of the most recent refund linked to this credit note. Absent when no refund has been
     * requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Itemized corrections against frozen invoice lines. Amount and quantity corrections share
     * each source line's remaining value, discount, and tax across issued, non-void credit notes.
     * Drafts reserve no credit. [] (Value): {@link CreditNoteLineItem}. One correction calculated
     * from the frozen invoice line's remaining billed value, discount, and tax. The source line's
     * inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not
     * affect the correction. Stored issued values are never recalculated by a read.
     */
    "line_items": Array<CreditNoteLineItem>;
    /** Free text shown on the credit note, up to 4096 characters. null when unset. */
    "memo": string | null;
    /** The merchant that owns the credit note. */
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
     * document. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. anyOf[2] (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * draft while the credit note is editable, issued once it is numbered and frozen, void once
     * retired. Value enum: "draft", "issued", "void".
     */
    "status": "draft" | "issued" | "void" | (string & {});
    /**
     * The face value of the credit note, the sum of its lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the credit note last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Current credit note version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /** When the credit note was voided. Absent unless it is void. Format: date-time. */
    "voided_at"?: string;
};
/**
 * One application of credit to the invoice. Allocations are append-only: a reversal sets
 * reversed_at rather than removing the row.
 */
export type CreditNoteAllocation = {
    /** RFC3339 timestamp. Format: date-time. */
    "allocated_at": string;
    /**
     * Credit applied to the invoice balance. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Unique identifier of the allocation. */
    "credit_note_allocation_id": string;
    /** The credit note whose credit was applied. */
    "credit_note_id": string;
    /**
     * The key the caller sent when allocating, or issue: followed by the issue request's
     * Idempotency-Key for an allocation made on issue. It is this allocation's identity and is
     * filterable on the allocations list.
     */
    "idempotency_key": string;
    /** The invoice whose balance the credit reduced. */
    "invoice_id": string;
    /**
     * When the allocation was reversed and its credit returned. Absent while the allocation
     * stands. Format: date-time.
     */
    "reversed_at"?: string;
};
export type CreditNoteAllocationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link CreditNoteAllocation}. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * One application of credit to the invoice. Allocations are append-only: a reversal sets
         * reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
    /** Value enum: "credit_note_allocation.created". */
    "event_type"?: "credit_note_allocation.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `credit_note_allocation.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CreditNoteAllocationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CreditNoteAllocation}. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * One application of credit to the invoice. Allocations are append-only: a reversal sets
         * reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
    /** Value enum: "credit_note_allocation.created". */
    "event_type"?: "credit_note_allocation.created";
});
/** A page of `CreditNoteAllocation` objects. */
export type CreditNoteAllocationListResponse = {
    /**
     *  [] (Value): {@link CreditNoteAllocation}. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data": Array<CreditNoteAllocation>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `CreditNoteAllocation` data. */
export type CreditNoteAllocationResponse = {
    /**
     * One application of credit to the invoice. Allocations are append-only: a reversal sets
     * reversed_at rather than removing the row.
     */
    "data": CreditNoteAllocation;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
    /** The allocation, the credit note with its new available_money, and the recomputed invoice. */
    "data": CreditNoteAllocationResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CreditNoteAllocationReversedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.reversed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.reversed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link CreditNoteAllocation}. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * One application of credit to the invoice. Allocations are append-only: a reversal sets
         * reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
    /** Value enum: "credit_note_allocation.reversed". */
    "event_type"?: "credit_note_allocation.reversed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `credit_note_allocation.reversed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CreditNoteAllocationReversedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CreditNoteAllocation}. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "data"?: {
        /**
         * One application of credit to the invoice. Allocations are append-only: a reversal sets
         * reversed_at rather than removing the row.
         */
        "object": CreditNoteAllocation;
    };
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
    /** Value enum: "amount". */
    "type": "amount" | (string & {});
    /**
     * Positive billed value to credit in the invoice currency, no more than the frozen source
     * line's remaining value. Consumes proportional remaining tax and discount without consuming
     * quantity; later quantity corrections use the reduced remaining value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/** The `amount` variant of `CreditNoteCorrectionRequest`. */
export type CreditNoteCorrectionRequestAmountInput = ({
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
    /** Value enum: "amount". */
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
export type CreditNoteCorrectionRequestInput = ({
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
    & ((Exclude<CreditNoteCorrectionRequestQuantityInput & object, readonly unknown[]>)
    | (Exclude<CreditNoteCorrectionRequestAmountInput & object, readonly unknown[]>));
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
    /** Value enum: "quantity". */
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
/** The `quantity` variant of `CreditNoteCorrectionRequest`. */
export type CreditNoteCorrectionRequestQuantityInput = ({
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
    /** Value enum: "quantity". */
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
        "object": CreditNote;
    };
    "event_type"?: "credit_note.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
    /** Value enum: "credit_note.created". */
    "event_type"?: "credit_note.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `credit_note.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
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
        "object": CreditNote;
    };
    "event_type"?: "credit_note.issued";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.issued";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
    /** Value enum: "credit_note.issued". */
    "event_type"?: "credit_note.issued";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `credit_note.issued` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteIssuedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
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
    /** Unique identifier of the credit note line item. */
    "credit_note_line_item_id": string;
    /**
     * The credited share of the frozen line's remaining allocated merchandise discount, rounded
     * half up in currency minor units. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** The invoice snapshot line this corrects. */
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
    /** Existing credit note line item to retain. Omit to create a new line item. minLength: 1. */
    "credit_note_line_item_id"?: string;
    /** The invoice snapshot line to credit. minLength: 1. */
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
    "correction": CreditNoteCorrectionRequestInput;
    /** Existing credit note line item to retain. Omit to create a new line item. minLength: 1. */
    "credit_note_line_item_id"?: string;
    /** The invoice snapshot line to credit. minLength: 1. */
    "invoice_line_item_id": string;
};
/** A page of `CreditNote` objects. */
export type CreditNoteListResponse = {
    /**
     *  [] (Value): {@link CreditNote}. A correction against an issued invoice. Credit notes reduce
     * what is owed; refunds return what was already collected.
     */
    "data": Array<CreditNote>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CreditNoteRefundListResponse = RefundListResponse;
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
     * Why the refund is being made. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
     */
    "reason": "duplicate"
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
        | (string & {});
    /** Optional note explaining the refund. minLength: 1. */
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
     * Why the refund is being made. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other".
     */
    "reason": "duplicate"
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
        | "other";
    /** Optional note explaining the refund. minLength: 1. */
    "reason_message"?: string;
};
/** A response containing `CreditNote` data. */
export type CreditNoteResponse = {
    /**
     * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
     * what was already collected.
     */
    "data": CreditNote;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CreditNoteUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
    /** Value enum: "credit_note.updated". */
    "event_type"?: "credit_note.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `credit_note.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
    /** Value enum: "credit_note.updated". */
    "event_type"?: "credit_note.updated";
});
export type CreditNoteVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
    /** Value enum: "credit_note.voided". */
    "event_type"?: "credit_note.voided";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `credit_note.voided` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CreditNoteVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CreditNote}. A correction against an issued invoice. Credit notes
     * reduce what is owed; refunds return what was already collected.
     */
    "data"?: {
        /**
         * A correction against an issued invoice. Credit notes reduce what is owed; refunds return
         * what was already collected.
         */
        "object": CreditNote;
    };
    /** Value enum: "credit_note.voided". */
    "event_type"?: "credit_note.voided";
});
export type CreditNotesCreateAllocationParams = (InputValue<CreateCreditNoteAllocationRequestInput>);
export type CreditNotesCreateParams = (InputValue<CreateCreditNoteRequestInput>);
export type CreditNotesCreateRefundParams = (InputValue<CreateCreditNoteRefundRequestInput>);
export type CreditNotesGetAllocationParams = {};
export type CreditNotesGetPDFParams = {};
export type CreditNotesGetPDFResponse = Uint8Array;
export type CreditNotesGetParams = {
    /**
     * Supported expansions: invoice. Include the source invoice summary with expand=invoice.
     * Requires commerce.credit_notes.read and commerce.invoices.read. Limits: at most 10 unique
     * expand paths per request. Pass expand=invoice. [] enum: "invoice". Value enum: "invoice".
     * anyOf[1] (Value): Array of string. [] enum: "invoice". anyOf[1][] (Value): string. Value
     * enum: "invoice". anyOf[2] (Value): string. Value enum: "invoice".
     */
    "expand"?: InputValue<("invoice") | readonly ("invoice")[]>;
};
export type CreditNotesIssueParams = (InputValue<IssueCreditNoteRequestInput>);
export type CreditNotesListAllocationsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
};
export type CreditNotesListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Filter by invoice. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by the source invoice's current customer_id. Example:
     * "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by credit note reason. Repeat the parameter or pass comma-separated values to match
     * multiple reasons. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other". Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
     * "other". anyOf[1][] (Value): string. Value enum: "returned_goods", "order_adjustment",
     * "billing_error", "goodwill", "other". anyOf[2] (Value): string. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: InputValue<("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other")
        | readonly ("returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across credit note ID, credit note number, memo, and external reference ID. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as cn_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "draft", "issued", "void".
     * Value enum: "draft", "issued", "void". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "draft", "issued", "void". anyOf[1][] (Value): string. Value enum: "draft", "issued",
     * "void". anyOf[2] (Value): string. Value enum: "draft", "issued", "void".
     */
    "status"?: InputValue<("draft" | "issued" | "void") | readonly ("draft" | "issued" | "void")[]>;
    /**
     * Supported expansions: invoice. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=invoice. [] enum: "invoice". Value enum: "invoice".
     * anyOf[1] (Value): Array of string. [] enum: "invoice". anyOf[1][] (Value): string. Value
     * enum: "invoice". anyOf[2] (Value): string. Value enum: "invoice".
     */
    "expand"?: InputValue<("invoice") | readonly ("invoice")[]>;
};
export type CreditNotesListRefundsParams = CreditNotesListAllocationsParams;
export type CreditNotesReverseAllocationParams = InvoicesMarkUncollectibleParams;
export type CreditNotesUpdateParams = (InputValue<UpdateCreditNoteRequestInput>);
export type CreditNotesVoidParams = InvoicesMarkUncollectibleParams;
/** A merchant hostname for hosted checkout or customer account pages. */
export type CustomDomain = {
    /**
     * Payment attempts in progress on this checkout hostname; null for customer account domains.
     * Format: int64.
     */
    "active_payment_attempt_count": number | null;
    /** When this domain resource was created, in RFC3339 format. Format: date-time. */
    "created_at": string;
    /** Flint custom domain ID. */
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
     * When the domain was last checked, in RFC3339 format; null when no check time is available.
     * Format: date-time.
     */
    "last_checked_at": string | null;
    /** Payment method domain associated with this hostname, or null when none is reported. */
    "payment_method_domain_id": string | null;
    /**
     * End of the redirect window for an archived hostname. After archive, dns_records lists
     * records you can delete. Format: date-time.
     */
    "redirect_expires_at": string | null;
    /**
     * Current setup and availability state of the hostname. Archived domains retain their resource
     * identity. Value enum: "provisioning", "active", "attention_required", "inactive",
     * "archived".
     */
    "status": "provisioning" | "active" | "attention_required" | "inactive" | "archived" | (string & {});
    /**
     * Machine-readable detail for the current status, or null when no reason is reported. Value
     * enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing",
     * "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider",
     * "certificate_pending", "custom_domains_inactive", "other", null.
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
    /** When this domain resource was last updated, in RFC3339 format. Format: date-time. */
    "updated_at": string;
};
export type CustomDomainArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomDomain;
    };
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
     *  [] (Value): {@link CustomDomain}. A merchant hostname for hosted checkout or customer
     * account pages.
     */
    "data": Array<CustomDomain>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `CustomDomain` data. */
export type CustomDomainResponse = {
    /** A merchant hostname for hosted checkout or customer account pages. */
    "data": CustomDomain;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CustomDomainUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomDomain;
    };
    "event_type"?: "custom_domain.updated";
})
    & {
    "event_type": "custom_domain.updated";
});
export type CustomDomainsCreateParams = (InputValue<CreateCustomDomainRequestInput>);
export type CustomDomainsDeleteParams = {};
export type CustomDomainsGetParams = {};
