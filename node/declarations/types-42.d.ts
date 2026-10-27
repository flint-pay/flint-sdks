import type { InputValue } from '../runtime.js';
import type { VerifyReturnReceiptLineItemRequestInput, WaiveReturnLineInspectionRequestInput } from './types-50.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { ExpandedOrderSummary, ExpandedPaymentIntentSummary, ExpandedCustomerSummary } from './types-16.js';
import type { Refund, ReleaseReturnResolutionRequestInput, ReopenReturnRequestInput } from './types-39.js';
import type {
    ReturnActor,
    ResourceReference,
    RetryReturnResolutionRequestInput,
    ReturnCompletionBlocker,
    ReturnDisposition,
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspection
} from './types-40.js';
import type { CancelReturnResolutionRequestInput, CancelReturnLineItemRequestInput } from './types-3.js';
import type { ConfirmReturnResolutionRequestInput } from './types-5.js';
import type { MeCreateReturnResolutionCheckoutSessionInput, MeCancelReturnInput } from './types-29.js';
import type { UpdateReturnResolutionRequestInput, UpdateReturnRequestInput, UpdateReturnLineItemRequestInput } from './types-49.js';
import type { BuyerAction } from './types-1.js';
import type { ExpandedShipmentSummary } from './types-17.js';
import type { ReturnLineItem, ReturnPolicyEvaluation, ReturnReceipt } from './types-41.js';
import type { AddReturnLineItemRequestInput } from './types-0.js';
import type { CompleteReturnRequestInput } from './types-4.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnReceiptRequestInput
} from './types-8.js';
import type { CreateReturnResolutionRequestInput } from './types-9.js';
import type { DecideReturnRequestInput } from './types-11.js';
import type { ProcessExistingReturnRequestInput } from './types-37.js';
export type ReturnReceiptsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp",
     * "other", "flint". Shape $[] (Value): string. Value enum: "manual", "pos", "wms", "erp",
     * "other", "flint".
     */
    "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "current", "superseded". Shape $[]
     * (Value): string. Value enum: "current", "superseded".
     */
    "status"?: InputValue<Array<"current" | "superseded">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "matched", "unverified", "excess".
     * Shape $[] (Value): string. Value enum: "matched", "unverified", "excess".
     */
    "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>;
};
export type ReturnReceiptsVerifyLineItemInput = {
    /** Shape $ (Value): string. */
    "return_receipt_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link VerifyReturnReceiptLineItemRequestInput}. The request body for:
     * Verify return receipt line item.
     */
    "body": InputValue<VerifyReturnReceiptLineItemRequestInput>;
};
/**
 * Shape $ (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return
 * resolution, with its quantity and price totals.
 */
export type ReturnReplacementLineItem = {
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_replacement_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemInputBundle}. The `bundle` variant of
 * `ReturnReplacementLineItemInput`.
 */
export type ReturnReplacementLineItemInputBundle = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "bundle". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemInputBundleInput}. The `bundle` variant of
 * `ReturnReplacementLineItemInput`.
 */
export type ReturnReplacementLineItemInputBundleInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "bundle". */
    "type": "bundle";
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemInputCustom}. The `custom` variant of
 * `ReturnReplacementLineItemInput`.
 */
export type ReturnReplacementLineItemInputCustom = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "custom". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
}));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemInputCustomInput}. The `custom` variant of
 * `ReturnReplacementLineItemInput`.
 */
export type ReturnReplacementLineItemInputCustomInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "custom".
     */
    "type": "custom";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "custom". */
    "type": "custom";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemInputVariant}. The `variant` variant of
 * `ReturnReplacementLineItemInput`.
 */
export type ReturnReplacementLineItemInputVariant = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant".
     */
    "type": "variant" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "variant". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemInputVariantInput}. The `variant` variant of
 * `ReturnReplacementLineItemInput`.
 */
export type ReturnReplacementLineItemInputVariantInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant".
     */
    "type": "variant";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "variant". */
    "type": "variant";
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a
 * return resolution, from a variant, a bundle, or a custom name and price.
 */
export type ReturnReplacementLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in
 * a return resolution, from a variant, a bundle, or a custom name and price.
 */
export type ReturnReplacementLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The source of the replacement merchandise: variant, bundle, or
     * custom. Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
 */
export type ReturnResolution = {
    /**
     * Shape $ (Value): string. Value enum: "buyer_payment", "buyer_selection", "merchant_review",
     * "manual_release", "linked_effect_retry", "other".
     */
    "action_reason"?: "buyer_payment"
        | "buyer_selection"
        | "merchant_review"
        | "manual_release"
        | "linked_effect_retry"
        | "other"
        | (string & {});
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant", "integration". */
    "action_required_by"?: "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Value returned to the buyer. For store_credit, the
     * value issued on new gift cards. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "cancellation_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "confirmed_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "confirmed_by"?: ReturnActor;
    /** Shape $ (Value): string. */
    "corrects_return_resolution_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionExecutionBlocker}. Shape $[] (Value):
     * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
     * can finish.
     */
    "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Reason code for a failed Return resolution, when available.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     */
    "failure_code"?: "gift_card_refund_destination_required"
        | "store_credit_unavailable"
        | "refund_creation_failed"
        | "refund_failed"
        | "refund_line_value_unavailable"
        | "payment_intent_creation_failed"
        | "payment_failed"
        | "replacement_order_creation_failed"
        | "replacement_fulfillment_canceled"
        | "resolution_effect_failed"
        | (string & {});
    /** Shape $ (Value): string. Explanation of a failed Return resolution, when available. */
    "failure_message"?: string;
    /** Shape $ (Value): string. When the resolution became fulfilled. Format: date-time. */
    "fulfilled_at"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata": Record<string, string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ExpandedPaymentIntentSummary}. Shape $[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link Refund}. Shape $[] (Value): {@link Refund}. Money returned
     * against a collected payment.
     */
    "refunds"?: Array<Refund>;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "replacement_order_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. fulfilled means the buyer has the value: every linked Refund
     * succeeded, any balance was collected, and any replacement Order's fulfillment_status is
     * fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action",
     * "fulfilled", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can succeed now. Empty unless the parent
     * Return is open, except checkout_session. A failed resolution lists retry while it has a
     * failed effect and its failure code permits retry. It lists cancel when it never created a
     * Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
     * "release", "retry". Shape $[] (Value): string. Value enum: "cancel", "checkout_session",
     * "confirm", "release", "retry".
     */
    "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnResolutionAdjustment}. A fee or credit applied to a return
 * resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
 */
export type ReturnResolutionAdjustment = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_adjustment_id": string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status": "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "waived_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "waived_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return
 * resolution, with the assessed and applied amounts and whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequest = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a
 * return resolution, with the assessed and applied amounts and whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionExecutionBlocker}. Work that must complete before a
 * Return resolution can finish.
 */
export type ReturnResolutionExecutionBlocker = {
    /**
     * Shape $ (Value): string. handoff_pending: The buyer has not handed off the required
     * merchandise. receipt_pending: Required merchandise has not been received.
     * inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant
     * must release the resolution. buyer_payment_pending: The buyer's balance has not been
     * collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The
     * replacement Order has not been created. fulfillment_pending: The replacement Order, in
     * linked_resource, has units not yet fulfilled. Value enum: "handoff_pending",
     * "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending",
     * "refund_pending", "replacement_order_pending", "fulfillment_pending".
     */
    "code": "handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "manual_release_pending"
        | "buyer_payment_pending"
        | "refund_pending"
        | "replacement_order_pending"
        | "fulfillment_pending"
        | (string & {});
    /**
     * Shape $ (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "linked_resource"?: ResourceReference;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution, with
 * its quantity and returned total.
 */
export type ReturnResolutionLineItem = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_line_item_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity to include
 * in a return resolution.
 */
export type ReturnResolutionLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to
 * include in a return resolution.
 */
export type ReturnResolutionLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionPreview}. A preview of a return resolution before it is
 * created: returned and replacement totals, adjustments, and amounts due to or from the buyer.
 */
export type ReturnResolutionPreview = {
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "based_on_return_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "calculated_at": string;
    /** Shape $ (Value): string. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
export type ReturnResolutionsCancelInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnResolutionRequestInput}. The request body for: Cancel
     * return resolution.
     */
    "body": InputValue<CancelReturnResolutionRequestInput>;
};
export type ReturnResolutionsConfirmInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfirmReturnResolutionRequestInput}. The request body for: Confirm
     * return resolution.
     */
    "body": InputValue<ConfirmReturnResolutionRequestInput>;
};
export type ReturnResolutionsGetInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "payment_intents", "refunds",
     * "replacement_order". Shape $[] (Value): string. Value enum: "payment_intents", "refunds",
     * "replacement_order".
     */
    "expand"?: InputValue<Array<"payment_intents" | "refunds" | "replacement_order">>;
};
export type ReturnResolutionsGetOrCreateCheckoutSessionInput = MeCreateReturnResolutionCheckoutSessionInput;
export type ReturnResolutionsListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "buyer", "merchant", "integration".
     * Shape $[] (Value): string. Value enum: "buyer", "merchant", "integration".
     */
    "action_required_by"?: InputValue<Array<"buyer" | "merchant" | "integration">>;
    /** Shape $ (Value): string. */
    "corrects_return_resolution_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement",
     * "store_credit", "no_monetary_action", "correction". Shape $[] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". Shape $[] (Value): string. Value enum:
     * "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "replacement_order". Shape $[] (Value): string.
     * Value enum: "replacement_order".
     */
    "expand"?: InputValue<Array<"replacement_order">>;
};
export type ReturnResolutionsReleaseInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ReleaseReturnResolutionRequestInput}. The request body for: Release
     * return resolution.
     */
    "body": InputValue<ReleaseReturnResolutionRequestInput>;
};
export type ReturnResolutionsRetryInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RetryReturnResolutionRequestInput}. The request body for: Retry
     * return resolution.
     */
    "body": InputValue<RetryReturnResolutionRequestInput>;
};
export type ReturnResolutionsUpdateInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateReturnResolutionRequestInput}. The request body for: Update
     * return resolution.
     */
    "body": InputValue<UpdateReturnResolutionRequestInput>;
};
/** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
export type ReturnResource = {
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the return, in
     * this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a
     * customer session on /v1/me, or in Flint's buyer account, lists all three every time;
     * merchant reads and webhooks get an empty list. ship_items is required while
     * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
     * required while a resolution waits for the buyer's payment. Example: []. Shape $[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "cancellation_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "completed_by"?: ReturnActor;
    /**
     * Shape $ (Value): Array of {@link ReturnCompletionBlocker}. Shape $[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns.
     */
    "completion_blockers": Array<ReturnCompletionBlocker>;
    /**
     * Shape $ (Value): string. automatic completes the Return when the last completion blocker
     * clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it
     * to manual. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual_completion", "exception_waived", "other". */
    "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "completion_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link ReturnFinancialSummary}. The money for a return: returned value,
     * deductions, credits, replacement total, and amounts due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     * Shape $ (Value): Array of {@link ReturnHandoffRequirement}. Shape $[] (Value): {@link
     * ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the destination,
     * instructions, line items, and expiry.
     */
    "handoff_requirements": Array<ReturnHandoffRequirement>;
    /**
     * Shape $ (Value): string. Who created the Return, from the credential that sent the request:
     * buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
     * user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
     * "merchant", "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnLineItem}. Shape $[] (Value): {@link ReturnLineItem}.
     * An item included in a return request.
     */
    "line_items": Array<ReturnLineItem>;
    /**
     * Shape $ (Value): string. On the Return, the least-finished line's value. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception"
        | (string & {});
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata": Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyEvaluation}. How a return policy evaluated a return
     * request: overall status and reason, the policy revision used, and per-line results.
     */
    "policy_evaluation"?: ReturnPolicyEvaluation;
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_fulfilled"
        | "requires_action"
        | "fulfilled"
        | "failed"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. IDs of every disposition recorded for this Return, oldest
     * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_disposition_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "return_dispositions"?: Array<ReturnDisposition>;
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): Array of string. IDs of every inspection recorded for this Return, oldest
     * first, including superseded inspections. Expand `return_inspections` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_inspection_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnInspection}. Shape $[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "return_inspections"?: Array<ReturnInspection>;
    /** Shape $ (Value): string. */
    "return_number": string;
    /**
     * Shape $ (Value): Array of string. IDs of every receipt recorded for this Return, oldest
     * first, including superseded receipts. Expand `return_receipts` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_receipt_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnReceipt}. Shape $[] (Value): {@link ReturnReceipt}. A
     * record of returned items arriving at a location.
     */
    "return_receipts"?: Array<ReturnReceipt>;
    /**
     * Shape $ (Value): Array of string. IDs of every resolution created for this Return, oldest
     * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnResolution}. Shape $[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "return_resolutions"?: Array<ReturnResolution>;
    /**
     * Shape $ (Value): Array of string. IDs of every shipment raised to send this Return's items
     * back, oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "shipment_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ExpandedShipmentSummary}. Shape $[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "cancel", "complete", "decide", "reopen". Shape
     * $[] (Value): string. Value enum: "cancel", "complete", "decide", "reopen".
     */
    "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy, charged
 * as a flat amount or a percent.
 */
export type ReturnRestockingFeePolicy = {
    /** Shape $ (Value): string.  Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Shape $ (Value): number. Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/**
 * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return policy,
 * charged as a flat amount or a percent.
 */
export type ReturnRestockingFeePolicyInput = {
    /** Shape $ (Value): string.  Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /** Shape $ (Value): number. Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/**
 * Shape $ (Value): {@link ReturnShipmentLineItemAllocationInput}. A return line and the quantity
 * placed in a return shipment or package.
 */
export type ReturnShipmentLineItemAllocationInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Return line whose quantity is allocated to the shipment or package.
     * minLength: 1.
     */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return policy:
 * the merchant or the buyer.
 */
export type ReturnShippingPolicy = {
    /** Shape $ (Value): string.  Value enum: "merchant", "buyer". */
    "payer": "merchant" | "buyer" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
 * policy: the merchant or the buyer.
 */
export type ReturnShippingPolicyInput = {
    /** Shape $ (Value): string.  Value enum: "merchant", "buyer". */
    "payer": "merchant" | "buyer";
};
/**
 * Shape $ (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a
 * point of sale or warehouse system, with its own identifier.
 */
export type ReturnSourceSystem = ({
    /**
     * Shape $ (Value): string. Your source system's identifier. Required when source_system_type
     * is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets
     * in this field. minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of
     * sale, wms for a warehouse management system, erp for an enterprise resource planning system,
     * or other for another external system. Flint-authored events use flint in responses. Value
     * enum: "manual", "pos", "wms", "erp", "other", "flint".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | "flint" | (string & {});
});
/**
 * Shape $ (Value): {@link ReturnSourceSystemInput}. The system a return event came from, such as a
 * point of sale or warehouse system, with its own identifier.
 */
export type ReturnSourceSystemInput = ({
    /**
     * Shape $ (Value): string. Your source system's identifier. Required when source_system_type
     * is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets
     * in this field. minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of
     * sale, wms for a warehouse management system, erp for an enterprise resource planning system,
     * or other for another external system. Flint-authored events use flint in responses. Value
     * enum: "manual", "pos", "wms", "erp", "other", "flint".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | "flint";
});
/**
 * Shape $ (Value): {@link ReturnUnverifiedItem}. Merchandise received in a return that does not
 * match an expected return line, described by name, SKU, and description.
 */
export type ReturnUnverifiedItem = {
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
};
/**
 * Shape $ (Value): {@link ReturnUnverifiedItemInput}. Merchandise received in a return that does
 * not match an expected return line, described by name, SKU, and description.
 */
export type ReturnUnverifiedItemInput = ReturnUnverifiedItem;
/**
 * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or delivery,
 * an order can be returned under a return policy.
 */
export type ReturnWindow = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_seconds": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "fulfilled", "delivered", "picked_up",
     * "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
 * delivery, an order can be returned under a return policy.
 */
export type ReturnWindowInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_seconds": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "fulfilled", "delivered", "picked_up",
     * "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed";
};
export type ReturnsAddLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AddReturnLineItemRequestInput}. The request body for: Add return
     * line item.
     */
    "body": InputValue<AddReturnLineItemRequestInput>;
};
export type ReturnsCancelInput = MeCancelReturnInput;
export type ReturnsCancelLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnLineItemRequestInput}. The request body for: Cancel
     * return line item.
     */
    "body": InputValue<CancelReturnLineItemRequestInput>;
};
export type ReturnsCompleteInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CompleteReturnRequestInput}. The request body for: Complete return.
     */
    "body": InputValue<CompleteReturnRequestInput>;
};
export type ReturnsCreateAccessLinkInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): object. maxProperties: 0. */
    "body"?: InputValue<{}>;
};
export type ReturnsCreateDispositionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnDispositionRequestInput}. The request body for: Create
     * return disposition.
     */
    "body": InputValue<CreateReturnDispositionRequestInput>;
};
export type ReturnsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateReturnRequestInput}. The request body for: Create return. */
    "body": InputValue<CreateReturnRequestInput>;
};
export type ReturnsCreateInspectionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnInspectionRequestInput}. The request body for: Create
     * return inspection.
     */
    "body": InputValue<CreateReturnInspectionRequestInput>;
};
export type ReturnsCreateReceiptInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnReceiptRequestInput}. The request body for: Create
     * return receipt.
     */
    "body": InputValue<CreateReturnReceiptRequestInput>;
};
export type ReturnsCreateResolutionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnResolutionRequestInput}. The request body for: Create
     * return resolution.
     */
    "body": InputValue<CreateReturnResolutionRequestInput>;
};
export type ReturnsDecideInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link DecideReturnRequestInput}. The request body for: Decide return. */
    "body": InputValue<DecideReturnRequestInput>;
};
export type ReturnsDeleteLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ReturnsGetInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "line_items.fulfillment",
     * "line_items.return_reason", "order", "return_dispositions", "return_inspections",
     * "return_receipts", "return_resolutions", "shipments". Shape $[] (Value): string. Value enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments".
     */
    "expand"?: InputValue<Array<"customer"
        | "line_items.fulfillment"
        | "line_items.return_reason"
        | "order"
        | "return_dispositions"
        | "return_inspections"
        | "return_receipts"
        | "return_resolutions"
        | "shipments">>;
};
export type ReturnsGetLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
};
export type ReturnsListActivitiesInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type ReturnsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "approved",
     * "partially_approved", "declined". Shape $[] (Value): string. Value enum: "pending",
     * "approved", "partially_approved", "declined".
     */
    "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". Shape $[]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<Array<"not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending",
     * "partially_fulfilled", "requires_action", "fulfilled", "failed". Shape $[] (Value): string.
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement",
     * "store_credit", "no_monetary_action", "correction". Shape $[] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
    /** Shape $ (Value): string. */
    "return_number"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_reason_id"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at". */
    "sort_by"?: InputValue<"created_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requested", "open", "completed",
     * "declined", "canceled". Shape $[] (Value): string. Value enum: "requested", "open",
     * "completed", "declined", "canceled".
     */
    "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception". Shape $[] (Value): string. Value
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception".
     */
    "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order". Shape $[] (Value): string.
     * Value enum: "customer", "order".
     */
    "expand"?: InputValue<Array<"customer" | "order">>;
};
export type ReturnsListLineItemsInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". Shape $[]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<Array<"not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception">>;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending",
     * "requires_action", "fulfilled", "failed". Shape $[] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "requires_action" | "fulfilled" | "failed">>;
    /** Shape $ (Value): string. */
    "return_reason_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requested", "open", "completed",
     * "declined", "canceled". Shape $[] (Value): string. Value enum: "requested", "open",
     * "completed", "declined", "canceled".
     */
    "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
};
export type ReturnsProcessExistingInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ProcessExistingReturnRequestInput}. The request body for: Process
     * existing return.
     */
    "body": InputValue<ProcessExistingReturnRequestInput>;
};
export type ReturnsReopenInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link ReopenReturnRequestInput}. The request body for: Reopen return. */
    "body": InputValue<ReopenReturnRequestInput>;
};
export type ReturnsUpdateInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdateReturnRequestInput}. The request body for: Update return. */
    "body": InputValue<UpdateReturnRequestInput>;
};
export type ReturnsUpdateLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateReturnLineItemRequestInput}. The request body for: Update
     * return line item.
     */
    "body": InputValue<UpdateReturnLineItemRequestInput>;
};
export type ReturnsWaiveLineInspectionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link WaiveReturnLineInspectionRequestInput}. The request body for: Waive
     * return line inspection.
     */
    "body": InputValue<WaiveReturnLineInspectionRequestInput>;
};
/**
 * Shape $ (Value): {@link ReverseInvoiceManualPaymentRequest}. The request body for: Reverse
 * manual invoice payment.
 */
export type ReverseInvoiceManualPaymentRequest = {
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * Shape $ (Value): string. When the payment was reversed. Defaults to now and must not precede
     * received_at. Format: date-time. minLength: 1.
     */
    "reversed_at"?: string;
};
/**
 * Shape $ (Value): {@link ReverseInvoiceManualPaymentRequestInput}. The request body for: Reverse
 * manual invoice payment.
 */
export type ReverseInvoiceManualPaymentRequestInput = {
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * Shape $ (Value): string. When the payment was reversed. Defaults to now and must not precede
     * received_at. Format: date-time. minLength: 1.
     */
    "reversed_at"?: string | globalThis.Date;
};
