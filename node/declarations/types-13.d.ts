import type { MetadataRequestInput, MetadataMap } from './types-43.js';
import type { MoneyValueInput, MoneyValue } from './types-44.js';
import type {
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundTaxBreakdownRefundInInput,
    RefundDestinations,
    RefundCharge,
    RefundLineItem,
    RefundTaxBreakdownRefundIn
} from './types-60.js';
import type { RefundTenderAllocationRequestInput, RefundWithGiftCardCodes } from './types-61.js';
import type { SplitReversalRequestInput, SplitReversalRequest } from './types-68.js';
import type { ResponseMeta } from './types-62.js';
import type { CreateIntervalReportRequest, CreateIntervalReportRequestInput } from './types-10.js';
import type { CreateReceivablesAgingReportRequest, CreateReceivablesAgingReportRequestInput } from './types-12.js';
import type {
    GetReturnDispositionResponse,
    GetReturnInspectionResponse,
    GetReturnPolicyResponse,
    GetReturnReasonResponse,
    GetReturnReceiptResponse,
    GetReturnResolutionResponse,
    GetReturnResponse
} from './types-28.js';
import type {
    ReturnEligibilitySelection,
    ReturnEligibilitySelectionRequestInput,
    ReturnInspectionLineItemRequest,
    ReturnInspectionLineItemRequestInput,
    ReturnEligibilityPreview,
    ReturnLineItemRequest,
    ReturnLineItemRequestInput
} from './types-63.js';
import type {
    ReturnSourceSystemRequest,
    ReturnSourceSystemRequestInput,
    ReturnResolutionPreview,
    ReturnReplacementLineItemRequest,
    ReturnResolutionAdjustmentRequest,
    ReturnResolutionLineItemRequest,
    ReturnResolutionAdjustmentRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionLineItemRequestInput
} from './types-65.js';
import type {
    ReturnPolicyRevisionRequest,
    ReturnPolicyRevisionRequestInput,
    ReturnReceiptLineItemRequest,
    ReturnReceiptLineItemRequestInput
} from './types-64.js';
import type { CreateRiskPreviewRequestStoredRule, CreateRiskPreviewRequestStoredRuleInput } from './types-14.js';
import type { RiskPredicateNodeRequest, RiskPredicateNodeRequestInput } from './types-67.js';
/** The `amount` variant of `CreateRefundRequest`. */
export type CreateRefundRequestAmountInput = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundChargeInput}. An order charge to refund when creating a refund, with an optional
     * amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "amount".
     */
    "refund_type": ("amount") & ("amount");
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundInInput}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequestInput>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequestInput>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})));
/** The `credit_note` variant of `CreateRefundRequest`. */
export type CreateRefundRequestCreditNote = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant" | (string & {});
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "credit_note".
     */
    "refund_type": "credit_note" | (string & {});
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string;
})
    & ((({
    "order_id": unknown;
})
    | ({
    "payment_intent_id": unknown;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
})
    | (Record<string, unknown>)));
/** The `credit_note` variant of `CreateRefundRequest`. */
export type CreateRefundRequestCreditNoteInput = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant";
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "credit_note".
     */
    "refund_type": ("credit_note") & ("credit_note");
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string | globalThis.Date;
})
    & ((({
    "order_id": unknown;
})
    | ({
    "payment_intent_id": unknown;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})));
/** The `full` variant of `CreateRefundRequest`. */
export type CreateRefundRequestFull = ({
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full".
     */
    "refund_type": "full" | (string & {});
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})
    | (Record<string, unknown>)));
/** The `full` variant of `CreateRefundRequest`. */
export type CreateRefundRequestFullInput = ({
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full".
     */
    "refund_type": ("full") & ("full");
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    "credit_note_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})))
    & (({
    "amount_money"?: never;
})
    & ({
    "line_items"?: never;
})
    & ({
    "charges"?: never;
})
    & ({
    "tax_breakdown_refunds"?: never;
})
    & ({
    "tender_allocations"?: never;
}));
/** The request body for: Create refund. */
export type CreateRefundRequestInput = ({
    /**
     * Required for refund_type amount and optional for credit_note; omit it on credit_note to
     * refund all available credit, resolved once when Flint accepts the request. With processed_by
     * merchant, the default is capped by the invoice's manually recorded money not already
     * returned. Forbidden for full and targets. Total to refund, including named targets and any
     * value Flint allocates to the remaining components. Tender allocations must sum to this
     * amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundChargeInput}. An order charge to refund when creating a refund, with an optional
     * amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the
     * current_version. Format: int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use
     * flint for Flint to return the money to the invoice's payments. Use merchant to record money
     * you already returned outside Flint, for example by check or wire; Flint moves no money.
     * Default: "flint". Value enum: "flint", "merchant".
     */
    "processed_by"?: "flint" | "merchant";
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1
     * to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID.
     * Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400
     * INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "full",
     * "amount", "targets", "credit_note".
     */
    "refund_type": "full" | "amount" | "targets" | "credit_note";
    /**
     * When you report returning the money outside Flint. Omit to use the current time. Must be an
     * RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds
     * are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails
     * with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string | globalThis.Date;
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundInInput}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations"?: Array<RefundTenderAllocationRequestInput>;
})
    & (({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
}))
    & ((Exclude<CreateRefundRequestCreditNoteInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestFullInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestAmountInput & object, readonly unknown[]>)
    | (Exclude<CreateRefundRequestTargetsInput & object, readonly unknown[]>))
    & (({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    /**
     * Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts
     * must sum to the required amount_money. Selected line-item, charge and flat-tax components
     * must be covered by their original tenders. Additional untargeted value follows the default
     * tender order. Destinations default to original. Select new_gift_card when the original card
     * is closed or cannot accept the full credit within its balance cap. For gift card redemptions
     * made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems:
     * 21. [] (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes:
     * back to a payment intent or to a gift card redemption, with the amount.
     */
    "tender_allocations": Array<RefundTenderAllocationRequestInput>;
})
    | ({
    /**
     * Allowed with refund_type full or amount. Original standalone gift card funding load paid by
     * a Flint payment. Refunds its paid consideration and removes the corresponding eligible
     * unspent face value. Requires Idempotency-Key; cannot be combined with order, line item,
     * charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "gift_card_load_id": string;
})
    | ({
    /**
     * Issued credit note on a paid invoice whose credit is returned to the buyer. Required only
     * for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id": string;
}));
/** The `targets` variant of `CreateRefundRequest`. */
export type CreateRefundRequestTargets = ({
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundCharge}. An order charge to refund when creating a refund, with an optional amount to
     * refund.
     */
    "charges"?: Array<RefundCharge>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItem}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItem>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "targets".
     */
    "refund_type": "targets" | (string & {});
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequest}. The seller amount to take back from one eligible payment split when
     * creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequest>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundIn}. The
     * tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    "credit_note_id": unknown;
})
    | (Record<string, unknown>)))
    & (({
    /** minItems: 1. */
    "line_items": unknown;
})
    | ({
    /** minItems: 1. */
    "charges": unknown;
})
    | ({
    /** minItems: 1. */
    "tax_breakdown_refunds": unknown;
})
    | (Record<string, unknown>));
/** The `targets` variant of `CreateRefundRequest`. */
export type CreateRefundRequestTargetsInput = ({
    /**
     * Named order charges to refund. Allowed with refund_type amount or targets. In amount mode
     * their value must fit within amount_money; Flint allocates the rest. [] (Value): {@link
     * RefundChargeInput}. An order charge to refund when creating a refund, with an optional
     * amount to refund.
     */
    "charges"?: Array<RefundChargeInput>;
    /**
     * Default destinations for allocations Flint plans. Allowed with full, amount without
     * tender_allocations, and targets. Each key defaults to original, and a key for a tender
     * absent from the refund has no effect. Not allowed with tender_allocations or
     * gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment
     * intent is store credit and requires a payment belonging to an order. Payments without an
     * order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent.
     * The merchant keeps the cash and the original processing fee is not returned; no processor
     * refund is made. New gift card codes are returned for 24 hours. The refund reports each
     * result in tender_allocations, without echoing destinations. Default refund destinations for
     * payment intent and gift card redemption allocations planned by Flint. Each tender type
     * defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Named order line items to refund. Allowed with refund_type amount or targets. In amount mode
     * their resolved value must fit within amount_money; Flint allocates the rest. [] (Value):
     * {@link RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax
     * handling, and any adjustments such as a restocking fee.
     */
    "line_items"?: Array<RefundLineItemInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's
     * refund email has no reason line. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
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
    /**
     * Return the partner app's platform fee to the merchant as part of this refund. By default the
     * partner app keeps its fee. With true, each refunded payment that carries the partner app's
     * collected platform fee returns all of the fee's unreturned amount when this refund returns
     * the whole captured amount, and otherwise a proportional share, rounded half up; the refund
     * that completes the payment returns what rounding left, when every earlier refund of it also
     * returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and
     * Flint returns it to the merchant once that payment refund succeeds. Payments without a
     * platform fee are refunded normally. Only the partner app install token whose app charged the
     * fee can send true; from any other credential, or when a refunded payment carries another
     * app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with
     * refund_type credit_note. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). Default: false.
     */
    "refund_platform_fee"?: boolean;
    /**
     * What to refund and how much: credit_note returns a credit note's available credit; full
     * refunds the full remaining amount; amount requires amount_money and permits named targets
     * and tender_allocations within that amount; targets refunds named line_items, charges, or
     * tax_breakdown_refunds without amount_money. Full and targets do not accept
     * tender_allocations. Gift card loads support full and amount only. Value enum: "targets".
     */
    "refund_type": ("targets") & ("targets");
    /**
     * Exhaustive seller amounts to take back from the payments this refund covers. Omit for
     * cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back
     * nothing. Each split must be eligible and belong to a refunded payment. Each positive amount
     * uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED
     * reports maximum_money. Entries for each payment total at most that payment's refund;
     * otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@link
     * SplitReversalRequestInput}. The seller amount to take back from one eligible payment split
     * when creating a refund.
     */
    "split_reversals"?: Array<SplitReversalRequestInput>;
    /**
     * Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount
     * mode their value must fit within amount_money; Flint allocates the rest. Requires
     * commerce.refunds.tax_overrides.write. [] (Value): {@link RefundTaxBreakdownRefundInInput}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
})
    & ((({
    /**
     * Order to refund. May be combined with payment_intent_id to select a payment on that order.
     * Required for named targets unless payment_intent_id belongs to an order. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    | ({
    /**
     * Payment to refund. May be combined with its order_id. Named targets require a payment on an
     * order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    | ({
    "tender_allocations": unknown;
})
    | ({
    "gift_card_load_id": unknown;
})
    | ({
    "credit_note_id": unknown;
})))
    & ((({
    "destinations"?: never;
} | {
    "tender_allocations"?: never;
}))
    & (({
    "destinations"?: never;
} | {
    "gift_card_load_id"?: never;
})))
    & (({
    /** minItems: 1. */
    "line_items": unknown;
})
    | ({
    /** minItems: 1. */
    "charges": unknown;
})
    | ({
    /** minItems: 1. */
    "tax_breakdown_refunds": unknown;
}))
    & (({
    "amount_money"?: never;
})
    & ({
    "tender_allocations"?: never;
})
    & ({
    "gift_card_load_id"?: never;
}));
/** A response containing `RefundWithGiftCardCodes` data. */
export type CreateRefundResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A refund with newly
     * issued gift card codes available during the command recovery window. Money returned against
     * a collected payment.
     */
    "data": RefundWithGiftCardCodes;
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
/** The request body for: Create a report. */
export type CreateReportRequest = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1", "invoices_itemized_v1",
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1", "tax_transactions_itemized_v2",
     * "tax_transactions_summarized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | "tax_transactions_summarized_v2"
        | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & ((Exclude<CreateIntervalReportRequest & object, readonly unknown[]>)
    | (Exclude<CreateReceivablesAgingReportRequest & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create a report. */
export type CreateReportRequestInput = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at"?: string | globalThis.Date;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at"?: string | globalThis.Date;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "receivables_aging_v1", "invoices_itemized_v1",
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1", "tax_transactions_itemized_v2",
     * "tax_transactions_summarized_v2".
     */
    "report_type": "receivables_aging_v1"
        | "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | "tax_transactions_summarized_v2";
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & ((Exclude<CreateIntervalReportRequestInput & object, readonly unknown[]>)
    | (Exclude<CreateReceivablesAgingReportRequestInput & object, readonly unknown[]>));
/** The request body for: Create return disposition. */
export type CreateReturnDispositionRequest = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the Return the disposition belongs to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
})
    & ((Exclude<CreateReturnDispositionRequestReceiptLine & object, readonly unknown[]>)
    | (Exclude<CreateReturnDispositionRequestInspectionLine & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create return disposition. */
export type CreateReturnDispositionRequestInput = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the Return the disposition belongs to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
})
    & ((Exclude<CreateReturnDispositionRequestReceiptLineInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnDispositionRequestInspectionLineInput & object, readonly unknown[]>));
/** The `Inspection line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestInspectionLine = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the Return the disposition belongs to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id": string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
});
/** The `Inspection line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestInspectionLineInput = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the Return the disposition belongs to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id": string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
})
    & ({
    "return_receipt_line_item_id"?: never;
});
/** The `Receipt line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestReceiptLine = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the Return the disposition belongs to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
});
/** The `Receipt line` variant of `CreateReturnDispositionRequest`. */
export type CreateReturnDispositionRequestReceiptLineInput = ({
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string | globalThis.Date;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. minLength: 1. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * ID of the Return the disposition belongs to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * minLength: 1. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * minLength: 1. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
})
    & ({
    "return_inspection_line_item_id"?: never;
});
export type CreateReturnDispositionResponse = GetReturnDispositionResponse;
/** A request to preview which items of an order can be returned, given an order and a selection. */
export type CreateReturnEligibilityPreviewRequest = {
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Which fulfilled units to check. Which order lines to check for return eligibility: all
     * remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
};
/** A request to preview which items of an order can be returned, given an order and a selection. */
export type CreateReturnEligibilityPreviewRequestInput = {
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Which fulfilled units to check. Which order lines to check for return eligibility: all
     * remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelectionRequestInput;
};
/** The request body for: Create return inspection. */
export type CreateReturnInspectionRequest = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "inspected_at": string;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id": string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnInspectionLineItemRequest}. The
     * inspection result for one received return line: acceptance status, condition, and findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequest>;
    /**
     * ID of the Return the goods belong to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the receipt being inspected. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequest;
    /**
     * ID of the inspection this one corrects. minLength: 1. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "supersedes_return_inspection_id"?: string;
};
/** The request body for: Create return inspection. */
export type CreateReturnInspectionRequestInput = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "inspected_at": string | globalThis.Date;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id": string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnInspectionLineItemRequestInput}.
     * The inspection result for one received return line: acceptance status, condition, and
     * findings.
     */
    "line_items": Array<ReturnInspectionLineItemRequestInput>;
    /**
     * ID of the Return the goods belong to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the receipt being inspected. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequestInput;
    /**
     * ID of the inspection this one corrects. minLength: 1. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "supersedes_return_inspection_id"?: string;
};
export type CreateReturnInspectionResponse = GetReturnInspectionResponse;
/** The request body for: Create return policy. */
export type CreateReturnPolicyRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Name of the policy, limited to 1 through 255 bytes after trimming surrounding whitespace.
     * Surrounding whitespace is trimmed before length validation. A supplied value cannot be
     * blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
    /**
     * Whether the policy applies to new Returns. Defaults to inactive. Creating an active policy
     * checks for overlapping active policies and a usable receiving location, just like activation
     * through PATCH. Default: "inactive". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create return policy. */
export type CreateReturnPolicyRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Name of the policy, limited to 1 through 255 bytes after trimming surrounding whitespace.
     * Surrounding whitespace is trimmed before length validation. A supplied value cannot be
     * blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
    /**
     * Whether the policy applies to new Returns. Defaults to inactive. Creating an active policy
     * checks for overlapping active policies and a usable receiving location, just like activation
     * through PATCH. Default: "inactive". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
export type CreateReturnPolicyResponse = GetReturnPolicyResponse;
/**
 * A return preview, selected by `mode`: either the eligibility of the selected items or the
 * amounts of a resolution.
 */
export type CreateReturnPreviewData = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & ((Exclude<CreateReturnPreviewDataEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewDataResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
}));
/** The `resolution` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution": ReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution": ReturnResolutionPreview;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequest = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & ((Exclude<CreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibilityInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequestInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<CreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
}));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolutionInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/** A response containing `CreateReturnPreviewData` data. */
export type CreateReturnPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A return preview,
     * selected by `mode`: either the eligibility of the selected items or the amounts of a
     * resolution.
     */
    "data": CreateReturnPreviewData;
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
/** The request body for: Create return reason. */
export type CreateReturnReasonRequest = {
    /**
     * Catalog category handles this reason applies to. A reason with categories is suggested, and
     * accepted from a customer session, only for order lines whose product is in one of them. A
     * reason with no categories applies to every line. Not product types or tags: use handles from
     * GET /v1/categories. Repeated handles are dropped. maxItems: 100. [] (Value): string.
     * minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Description, limited to 2048 bytes after trimming surrounding whitespace. minLength: 1. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Stable lower_snake_case identifier. After trimming surrounding whitespace, it must start
     * with a lowercase letter and contain only lowercase letters, digits, and underscores, with 1
     * through 100 characters. minLength: 1.
     */
    "handle": string;
    /**
     * Whether a Return line with this reason needs a buyer_note. Defaults to false. Default:
     * false.
     */
    "is_note_required"?: boolean;
    /**
     * Display name, limited to 1 through 255 bytes after trimming surrounding whitespace.
     * Surrounding whitespace is trimmed before length validation. A supplied value cannot be
     * blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
};
/** The request body for: Create return reason. */
export type CreateReturnReasonRequestInput = CreateReturnReasonRequest;
export type CreateReturnReasonResponse = GetReturnReasonResponse;
/** The request body for: Create return receipt. */
export type CreateReturnReceiptRequest = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnReceiptLineItemRequest}. One line
     * of received merchandise: a matched return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequest>;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "received_at": string;
    /**
     * ID of the Location that received the goods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
    /**
     * ID of the Return the goods belong to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
     * shipment. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequest;
    /**
     * ID of the receipt this one corrects. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "supersedes_return_receipt_id"?: string;
};
/** The request body for: Create return receipt. */
export type CreateReturnReceiptRequestInput = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnReceiptLineItemRequestInput}. One
     * line of received merchandise: a matched return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequestInput>;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "received_at": string | globalThis.Date;
    /**
     * ID of the Location that received the goods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
    /**
     * ID of the Return the goods belong to. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
     * shipment. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequestInput;
    /**
     * ID of the receipt this one corrects. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "supersedes_return_receipt_id"?: string;
};
export type CreateReturnReceiptResponse = GetReturnReceiptResponse;
/** The request body for: Create return. */
export type CreateReturnRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines to check or return, each naming an order line item. minItems: 1. [] (Value):
     * {@link ReturnLineItemRequest}. An order line item to return, with the quantity, return
     * reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
/** The request body for: Create return. */
export type CreateReturnRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines to check or return, each naming an order line item. minItems: 1. [] (Value):
     * {@link ReturnLineItemRequestInput}. An order line item to return, with the quantity, return
     * reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
/**
 * A request to preview the amounts of a return resolution for a return, selected by
 * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequest = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `correction` variant of `CreateReturnResolutionPreviewRequest`. */
export type CreateReturnResolutionPreviewRequestCorrection = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: unknown;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
}));
/** The `correction` variant of `CreateReturnResolutionPreviewRequest`. */
export type CreateReturnResolutionPreviewRequestCorrectionInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: "correction";
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/**
 * A request to preview the amounts of a return resolution for a return, selected by
 * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequestInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrectionInput & object, readonly unknown[]>));
/**
 * The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action`
 * variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandard = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: unknown;
}));
/**
 * The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action`
 * variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandardInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
/** The request body for: Create return resolution. */
export type CreateReturnResolutionRequest = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `correction` variant of `CreateReturnResolutionRequest`. */
export type CreateReturnResolutionRequestCorrection = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: unknown;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
}));
/** The `correction` variant of `CreateReturnResolutionRequest`. */
export type CreateReturnResolutionRequestCorrectionInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: "correction";
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/** The request body for: Create return resolution. */
export type CreateReturnResolutionRequestInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrectionInput & object, readonly unknown[]>));
/**
 * The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandard = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: unknown;
}));
/**
 * The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandardInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
export type CreateReturnResolutionResponse = GetReturnResolutionResponse;
export type CreateReturnResponse = GetReturnResponse;
/** The request body for: Create a risk list. */
export type CreateRiskListRequest = {
    /**
     * Name rules use to refer to this list: a lowercase letter, then up to 127 lowercase letters,
     * digits, or underscores. It can't be changed after creation. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "alias": string;
    /**
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain",
     * "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string"
        | (string & {});
    /**
     * Display name of the list. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
};
/** The request body for: Create a risk list. */
export type CreateRiskListRequestInput = {
    /**
     * Name rules use to refer to this list: a lowercase letter, then up to 127 lowercase letters,
     * digits, or underscores. It can't be changed after creation. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "alias": string;
    /**
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain",
     * "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string";
    /**
     * Display name of the list. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
};
/** The request body for: Create a risk preview. */
export type CreateRiskPreviewRequest = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | null | (string & {}) | null;
    /**
     * What to check: a rule in this request, or a saved rule. Value enum: "inline", "stored_rule".
     */
    "mode": "inline" | "stored_rule" | (string & {});
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequest}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate"?: ((RiskPredicateNodeRequest) | (null) | (unknown));
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id"?: string;
})
    & ((Exclude<CreateRiskPreviewRequestInline & object, readonly unknown[]>)
    | (Exclude<CreateRiskPreviewRequestStoredRule & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `inline` variant of `CreateRiskPreviewRequest`. */
export type CreateRiskPreviewRequestInline = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action": "allow" | "block" | "review" | "require_3ds" | null | (string & {}) | null;
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": "inline" | (string & {});
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequest}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": ((RiskPredicateNodeRequest) | (null) | (unknown));
    /**
     * ID of a saved rule. Send it to check the action and predicate as an edit to that rule.
     * minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     */
    "risk_rule_id"?: string;
})
    & (({
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": "inline" | (string & {});
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Action to
     * preview. In stored_rule mode, omitted or null keeps the saved action. minLength: 1. Value
     * enum: "allow", "block", "review", "require_3ds", null.
     */
    "action": ("allow" | "block" | "review" | "require_3ds" | null | (string & {}) | null) & (string);
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequest}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": (((Exclude<RiskPredicateNodeRequest & object, readonly unknown[]>)
        | (null)
        | (Record<string, unknown>)))
        & ({});
})
    & ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. minLength:
     * 1.
     */
    "action"?: string;
    /** Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. */
    "predicate"?: {
        [key: string]: unknown;
    };
}));
/** The `inline` variant of `CreateRiskPreviewRequest`. */
export type CreateRiskPreviewRequestInlineInput = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action": "allow" | "block" | "review" | "require_3ds" | null;
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": "inline";
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequestInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": ((RiskPredicateNodeRequestInput) | (null));
    /**
     * ID of a saved rule. Send it to check the action and predicate as an edit to that rule.
     * minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     */
    "risk_rule_id"?: string;
})
    & (({
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": ("inline") & ("inline");
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Action to
     * preview. In stored_rule mode, omitted or null keeps the saved action. minLength: 1. Value
     * enum: "allow", "block", "review", "require_3ds", null.
     */
    "action": ("allow" | "block" | "review" | "require_3ds" | null) & (string);
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequestInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": (((Exclude<RiskPredicateNodeRequestInput & object, readonly unknown[]>) | (null))) & ({});
})
    & ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. minLength:
     * 1.
     */
    "action"?: string;
    /** Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. */
    "predicate"?: {
        [key: string]: unknown;
    };
}));
/** The request body for: Create a risk preview. */
export type CreateRiskPreviewRequestInput = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | null;
    /**
     * What to check: a rule in this request, or a saved rule. Value enum: "inline", "stored_rule".
     */
    "mode": "inline" | "stored_rule";
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequestInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate"?: ((RiskPredicateNodeRequestInput) | (null));
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id"?: string;
})
    & ((Exclude<CreateRiskPreviewRequestInlineInput & object, readonly unknown[]>)
    | (Exclude<CreateRiskPreviewRequestStoredRuleInput & object, readonly unknown[]>));
