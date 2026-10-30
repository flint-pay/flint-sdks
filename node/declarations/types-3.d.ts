import type {
    BuyerReturnPreview,
    BuyerReturn,
    BuyerPaymentMethodWithSetup,
    BuyerPaymentCollection,
    BuyerPaymentErrorSummary,
    BuyerOrderLineItemModifier,
    BuyerOrder,
    BuyerOrderPaymentAttempt
} from './types-2.js';
import type { ResponseMeta } from './types-48.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { ReturnReplacementLineItem, ReturnResolutionLineItem, ReturnResolutionLineItemRequest } from './types-50.js';
import type { BuyerCheckoutSessionWithSecret, BuyerAction, BuyerExpandedSubscriptionPlanSummary } from './types-1.js';
import type {
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionIntervalOption,
    SubscriptionDeliveryOption
} from './types-54.js';
import type { SubscriptionPromotion, SubscriptionUpcomingDeliveryHold, SubscriptionRenewalPreview } from './types-56.js';
import type { CategoryReference } from './types-4.js';
import type { Image } from './types-25.js';
import type { SelectedProductOption, SubscriptionAddressVerification } from './types-53.js';
import type { PaymentErrorSummary, PayOrderResponse } from './types-40.js';
import type { OrderLineItemTax } from './types-37.js';
import type { SubscriptionPlanSwapVariant } from './types-55.js';
import type { Address } from './types-0.js';
import type { TipPaymentIntentAllocation, TipValueSettlementAllocation } from './types-57.js';
import type { DeliveryWindowRequest, DeliveryWindowRequestInput } from './types-19.js';
import type { GetReturnDispositionResponse, GetReturnResponse } from './types-23.js';
/** A response containing `BuyerReturnPreview` data. */
export type BuyerReturnPreviewResponse = {
    /** A Return eligibility or resolution preview shown to the buyer, selected by mode. */
    "data": BuyerReturnPreview;
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
/** The `bundle` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputBundle = ({
    /** minLength: 1. */
    "bundle_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": unknown;
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "bundle". */
    "type": "bundle";
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle";
    /** minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})));
/** The `variant` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputVariant = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant". */
    "type": "variant" | (string & {});
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": unknown;
    /** minLength: 1. */
    "variant_id": string;
}));
/** The `variant` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant". */
    "type": "variant";
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant";
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})));
/**
 * A catalog variant or bundle and quantity the buyer requests as a replacement in a Return
 * resolution preview.
 */
export type BuyerReturnReplacementLineItemRequest = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant", "bundle". */
    "type": "variant" | "bundle" | (string & {});
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<BuyerReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<BuyerReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A catalog variant or bundle and quantity the buyer requests as a replacement in a Return
 * resolution preview.
 */
export type BuyerReturnReplacementLineItemRequestInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant", "bundle". */
    "type": "variant" | "bundle";
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<BuyerReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<BuyerReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>));
/** The refund, exchange, or other outcome of a return. */
export type BuyerReturnResolution = {
    /**
     * Value enum: "buyer_payment", "buyer_selection", "merchant_review", "manual_release",
     * "linked_effect_retry", "other".
     */
    "action_reason"?: "buyer_payment"
        | "buyer_selection"
        | "merchant_review"
        | "manual_release"
        | "linked_effect_retry"
        | "other"
        | (string & {});
    /** Value enum: "buyer", "merchant". */
    "action_required_by"?: "buyer" | "merchant" | (string & {});
    /**
     *  [] (Value): {@link BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution
     * shown to the buyer, with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_money. Zero when the buyer is owed a refund and for
     * no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value returned to the buyer: returned_total_money plus credit_money, minus deduction_money
     * and replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "confirmed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Credits added by the resolution's adjustments. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     *  [] (Value): {@link BuyerReturnResolutionExecutionBlocker}. Work that must complete before a
     * Return resolution can finish.
     */
    "execution_blockers": Array<BuyerReturnResolutionExecutionBlocker>;
    /**
     * Reason code for a failed Return resolution, when available. refund_line_value_unavailable
     * means another refund already returned part of an order line, so retrying cannot succeed;
     * cancel the resolution and resolve the line for fewer units or without a refund.
     * replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so
     * it won't be sent. gift_card_refund_destination_required means the original gift card cannot
     * accept the refund; retry with gift_card_refund_destination set to new_gift_card.
     * store_credit_unavailable means the original payment cannot fund store credit; cancel the
     * resolution and create a refund resolution. Value enum:
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
    /** Explanation of a failed Return resolution, when available. */
    "failure_message"?: string;
    /** When the resolution became fulfilled. Format: date-time. */
    "fulfilled_at"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     *  [] (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution, with
     * its quantity and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /** Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     *  [] (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return
     * resolution, with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Total of the replacement items the buyer receives. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    "return_id": string;
    "return_resolution_id": string;
    /**
     * Value of the returned units this resolution covers. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * fulfilled means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
    /**
     * Lists checkout_session while the buyer owes buyer_payment_amount_money for a replacement and
     * the resolution is pending or requires_action. Pay it with POST
     * /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions. Otherwise empty. []
     * enum: "checkout_session". [] (Value): string. Value enum: "checkout_session".
     */
    "supported_actions": Array<"checkout_session" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
/**
 * An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied
 * amount, status, and reason.
 */
export type BuyerReturnResolutionAdjustment = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValue;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    "reason_message"?: string;
    "return_line_item_id"?: string;
    "return_resolution_adjustment_id": string;
    /** Value enum: "applied", "waived". */
    "status": "applied" | "waived" | (string & {});
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
};
/** A response containing `BuyerCheckoutSessionWithSecret` data. */
export type BuyerReturnResolutionCheckoutSessionResponse = {
    /**
     * The checkout session with its checkout credential. For hosted checkout, send the buyer to
     * url. For embedded checkout, pass checkout_auth_token to your checkout client. A session in
     * which a buyer completes an order's payment.
     */
    "data": BuyerCheckoutSessionWithSecret;
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
/** Work that must complete before a Return resolution can finish. */
export type BuyerReturnResolutionExecutionBlocker = {
    /**
     * handoff_pending: The buyer has not handed off the required merchandise. receipt_pending:
     * Required merchandise has not been received. inspection_pending: Required inspection is
     * incomplete. manual_release_pending: The merchant must release the resolution.
     * buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked
     * Refund has not succeeded. replacement_order_pending: The replacement Order has not been
     * created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet
     * fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending",
     * "manual_release_pending", "buyer_payment_pending", "refund_pending",
     * "replacement_order_pending", "fulfillment_pending".
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
    "return_line_item_id"?: string;
};
/**
 * The buyer's preview of a Return resolution, including returned items, replacements, adjustments,
 * and the amounts to refund or collect.
 */
export type BuyerReturnResolutionPreview = {
    /**
     *  [] (Value): {@link BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution
     * shown to the buyer, with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /** Format: int64. minimum: 0. */
    "based_on_return_version": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_payment_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "calculated_at": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "credit_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "deduction_money": MoneyValue;
    /**
     *  [] (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution, with
     * its quantity and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     *  [] (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return
     * resolution, with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "replacement_total_money": MoneyValue;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    "return_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "returned_total_money": MoneyValue;
};
/** A response containing `BuyerReturnResolution` data. */
export type BuyerReturnResolutionResponse = {
    /** The refund, exchange, or other outcome of a return. */
    "data": BuyerReturnResolution;
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
/** A response containing `BuyerReturn` data. */
export type BuyerReturnResponse = {
    /** A request to send purchased items back. */
    "data": BuyerReturn;
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
/** A response containing `BuyerPaymentMethodWithSetup` data. */
export type BuyerSavePaymentMethodResponse = {
    /**
     * The saved payment method, with `client_setup` when the buyer must still complete processor
     * setup before the payment method can be used. A customer's saved payment details.
     */
    "data": BuyerPaymentMethodWithSetup;
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
/**
 * A payment intent a buyer can pay on an order, with its status, amounts, payment collection
 * details, and last payment error.
 */
export type BuyerSelectableOrderPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Most recent payment failure, when one is recorded. Why a payment attempt failed: a
     * normalized `code`, a message, when it failed, and recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /**
     * Client setup details for collecting this payment. What a client needs to collect payment for
     * a buyer's order. The `stripe` field holds the Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Portion of this payment's amount allocated to a tip. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/** A shipment carrying fulfilled order items. */
export type BuyerShipment = {
    /** Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** When the shipment was delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /** Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /**
     * Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at
     * when no separate handoff timestamp exists. For return shipments, this can satisfy an
     * after_handoff execution gate for the declared return_line_items. Format: date-time.
     */
    "handed_off_at"?: string;
    /** Order whose items are transported by the shipment. */
    "order_id": string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /** Return associated with this shipment, when its direction is return. */
    "return_id"?: string;
    /**
     * Return lines and quantities allocated to this return shipment. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Stable identifier of the shipment. */
    "shipment_id": string;
    /** When the shipment was shipped, in RFC3339 format. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Read-only shipment state derived from the shipment's package states. An empty shipment
     * remains a created draft. - `created`: The shipment leg exists but has not been packed or
     * handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. -
     * `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving
     * the shipment through its network. - `out_for_delivery`: The shipment is on its final
     * delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/** A page of `BuyerShipment` objects. */
export type BuyerShipmentListResponse = {
    /**  [] (Value): {@link BuyerShipment}. A shipment carrying fulfilled order items. */
    "data": Array<BuyerShipment>;
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
/** A response containing `BuyerShipment` data. */
export type BuyerShipmentResponse = {
    /** A shipment carrying fulfilled order items. */
    "data": BuyerShipment;
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
/** Whether buyers may skip renewals. Send at least one field. minProperties: 1. */
export type BuyerSkipCapability = {
    /**
     * Whether buyers may skip a renewal. Merchant credentials may always skip an eligible cycle.
     * Default: true.
     */
    "enabled"?: boolean;
    /**
     * Maximum consecutive cycles a buyer may skip. Omit it for no limit. The count resets after a
     * paid renewal. Format: int32. minimum: 1. maximum: 12.
     */
    "max_consecutive_skips"?: number;
};
/** Whether buyers may skip renewals. Send at least one field. minProperties: 1. */
export type BuyerSkipCapabilityInput = BuyerSkipCapability;
/** A customer's recurring purchase. */
export type BuyerSubscription = {
    /**
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date.
     */
    "awaiting_billing_schedule"?: boolean;
    /**
     * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
     * schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of billing_interval units between charges. Changes with billing_interval. Format:
     * int32.
     */
    "billing_interval_count": number;
    /**
     * maxItems: 12. uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Who supplies billing dates: flint advances the schedule after each paid renewal; external
     * uses dates the merchant supplies. Read-only for buyers. Value enum: "flint", "external".
     */
    "billing_schedule_owner": "flint" | "external" | (string & {});
    /**
     * What the buyer can do with the subscription, in this order: cancel, pause, resume,
     * reactivate, update_payment_method, retry_payment, update_delivery, skip,
     * update_billing_interval, update_quantity, swap_items, then renew, under the store's buyer
     * policy. The available cancel and pause actions carry the choices they accept. A buyer's read
     * or change through a customer session on /v1/me, or in Flint's buyer account, lists all
     * twelve every time; a merchant read gets an empty list. update_payment_method is required
     * while a payment is past due, due by next_retry_at when a retry is scheduled, and when the
     * card expires before next_billing_at, due by then. Example: []. [] (Value): {@link
     * BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they
     * read through /v1/me. Show the actions with is_required as what needs the buyer's attention,
     * and the first available action as the primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who asked to cancel, when, and why. Present once a cancellation is requested, whether it
     * takes effect at the end of the billing period or right away. Omitted when no one asked, and
     * removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and
     * payment-related cancellations. The cancellation request behind a scheduled or completed
     * cancellation.
     */
    "cancellation_details"?: BuyerSubscriptionCancellationDetails;
    /**
     * Why the subscription is canceled or scheduled to cancel. Uses
     * cancellation_details.requested_by when recorded, payment_failed for a canceled subscription
     * without a requester, and other for a scheduled cancellation without a requester. Omitted
     * otherwise. Value enum: "buyer", "merchant", "payment_failed", "other".
     */
    "cancellation_reason"?: "buyer" | "merchant" | "payment_failed" | "other" | (string & {});
    /** Format: uint64. minimum: 0. */
    "completed_cycles": number;
    /**
     * When the recorded contract term ends. Does not move when the subscription pauses or changes
     * plan. Flint does not stop the buyer from canceling earlier. Format: date-time.
     */
    "contract_end_at"?: string;
    /**
     * When the recorded contract term started. Does not move when the subscription pauses or
     * changes plan. Format: date-time.
     */
    "contract_start_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    "customer_id": string;
    /**
     * Saved delivery preference with the current delivery method display. Write responses use the
     * same display as GET: fixed shipping reflects the current method configuration, and quoted
     * shipping shows the last paid shipping amount when available. A subscription's saved delivery
     * preference: method, destination, recipient, shipping cost, and who last changed it.
     */
    "delivery"?: SubscriptionDelivery;
    /**
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it.
     */
    "delivery_hold"?: SubscriptionDeliveryHold;
    /**
     * The fee in the recorded contract terms. Present whenever those terms include a fee. It
     * applies only to a cancellation before contract_end_at. Flint never charges it. Later plan
     * changes do not change this fee. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Why the latest subscription renewal payment failed. Omits merchant remediation and sensitive
     * decline signals. code (Required): string. Flint-normalized payment failure code. Unknown
     * provider values are returned as payment_failed. Value enum: "card_declined",
     * "insufficient_funds", "bank_account_closed", "bank_account_not_found",
     * "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded",
     * "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc",
     * "processing_error", "payment_method_unavailable", "payment_method_declined",
     * "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable",
     * "payment_failed". failed_at (Required): string. Time the payment attempt concluded in
     * failure. Format: date-time. message (Required): string. Flint-authored payment failure
     * message written for the buyer. This is stable explanatory text, not raw provider copy.
     */
    "last_payment_error"?: {
        /**
         * Flint-normalized payment failure code. Unknown provider values are returned as
         * payment_failed. Value enum: "card_declined", "insufficient_funds",
         * "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized",
         * "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required",
         * "payment_blocked", "expired_card", "incorrect_cvc", "processing_error",
         * "payment_method_unavailable", "payment_method_declined", "payment_not_completed",
         * "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
         */
        "code": "card_declined"
            | "insufficient_funds"
            | "bank_account_closed"
            | "bank_account_not_found"
            | "bank_debit_not_authorized"
            | "bank_account_restricted"
            | "bank_debit_limit_exceeded"
            | "authentication_required"
            | "payment_blocked"
            | "expired_card"
            | "incorrect_cvc"
            | "processing_error"
            | "payment_method_unavailable"
            | "payment_method_declined"
            | "payment_not_completed"
            | "payment_action_expired"
            | "payment_method_temporarily_unavailable"
            | "payment_failed"
            | (string & {});
        /** Time the payment attempt concluded in failure. Format: date-time. */
        "failed_at": string;
        /**
         * Flint-authored payment failure message written for the buyer. This is stable explanatory
         * text, not raw provider copy.
         */
        "message": string;
    };
    /**
     * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line
     * takes that variant's current catalog price, which then stays until the line changes again.
     * [] (Value): {@link BuyerSubscriptionLineItem}. An item included in a customer's recurring
     * purchase.
     */
    "line_items": Array<BuyerSubscriptionLineItem>;
    "merchant_id"?: string;
    /**
     * The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is
     * past_due. Format: date-time.
     */
    "missed_billing_at"?: string;
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time.
     */
    "next_retry_at": string | null;
    /**
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included.
     */
    "open_renewal_order_id"?: string;
    /**
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money"?: MoneyValue;
    /**
     * Why the subscription is paused: merchant for a pause made with your API key or dashboard,
     * buyer for the buyer's own pause, delivery_action_required for a pause during or after a
     * delivery hold, and payment_failed when renewal payment retries ran out and your dunning
     * settings pause the subscription. Omitted when the subscription is not paused. Value enum:
     * "buyer", "delivery_action_required", "merchant", "payment_failed".
     */
    "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "paused_at"?: string;
    /** The saved payment method renewals charge. Change it with PATCH. */
    "payment_method_id": string;
    /**
     * Recurring promotions applying to the next charged cycle. Empty when none apply; signup-only
     * and exhausted promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * How many of each line the subscription bills each period, as a whole number; fractional
     * quantities are not supported. A change applies from the next renewal that has not been paid.
     * Format: int32.
     */
    "quantity": number;
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
    "quantity_options"?: Array<number>;
    /**
     * What one billing period's items cost before discounts, shipping, and tax: each line's price
     * with modifiers, times quantity. It changes when items, quantity, or the plan change; editing
     * the plan doesn't change it. For the next charge, use a subscription preview in next_renewal
     * mode. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "recurring_subtotal_money": ((MoneyValue) | (null));
    /**
     * When Flint accepted a pending resume request. Set only while paused with a resume Flint has
     * not applied yet. Clears when Flint resumes the subscription or refuses the request. Format:
     * date-time.
     */
    "resume_requested_at": string | null;
    /**
     * When the scheduled cancellation takes effect: trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. Null when
     * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     */
    "scheduled_cancel_at": string | null;
    /**
     * When a pause with a length (pause_duration_cycles) resumes on its own: that many billing
     * intervals after paused_at. Null when the subscription is not paused or the pause has no
     * length, such as a pause until you resume it or the pause Flint starts when a delivery hold
     * runs out. Format: date-time.
     */
    "scheduled_resume_at": string | null;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The customer address reference or address used as the buyer's subscription service
     * location.
     */
    "service_location"?: BuyerSubscriptionServiceLocation;
    /**
     * When a scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time.
     */
    "starts_at"?: string;
    /**
     * Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    "subscription_id": string;
    /**
     *  anyOf[1] (Value): {@link BuyerExpandedSubscriptionPlanSummary}. A subscription plan
     * expanded on a buyer's order: billing interval, setup fee, trial length, status, and line
     * items. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((BuyerExpandedSubscriptionPlanSummary) | (null));
    /** Subscription plan ID. Omitted when terms_type is subscription_offer. */
    "subscription_plan_id"?: string;
    /**
     * Terms come from the subscription plan in subscription_plan_id, or from subscription offers
     * identified on each offer line by subscription_offer_id. Value enum: "subscription_plan",
     * "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "trial_end_at"?: string;
    /**
     * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
     * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
     * subscription's delivery, and who can fix it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 0. */
    "version": number;
};
/** The cancellation request behind a scheduled or completed cancellation. */
export type BuyerSubscriptionCancellationDetails = {
    /**
     * The reason the requester chose. Omitted when none was given. Value enum: "too_expensive",
     * "missing_features", "switched_service", "unused", "customer_service", "too_complex",
     * "low_quality", "other".
     */
    "reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /** When the cancellation was requested. Format: date-time. */
    "requested_at": string;
    /**
     * buyer: the buyer, in Flint's buyer account or with a customer session. merchant: a merchant
     * credential, such as an API key or the dashboard. Value enum: "buyer", "merchant".
     */
    "requested_by": "buyer" | "merchant" | (string & {});
};
/** An item included in a customer's recurring purchase. */
export type BuyerSubscriptionLineItem = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "base_subtotal_money": MoneyValue;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "modifier_total_money": MoneyValue;
    /**
     *  [] (Value): {@link BuyerOrderLineItemModifier}. A modifier on a buyer's order line item,
     * either a catalog modifier or entered text, with its quantity and price change.
     */
    "modifiers"?: Array<BuyerOrderLineItemModifier>;
    "name": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    "subscription_line_item_id"?: string;
    "subscription_offer_id"?: string;
    "subscription_plan_line_item_id"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
};
/** A page of `BuyerSubscription` objects. */
export type BuyerSubscriptionListResponse = {
    /**  [] (Value): {@link BuyerSubscription}. A customer's recurring purchase. */
    "data": Array<BuyerSubscription>;
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
/**
 * A retry of a past-due payment on the buyer's subscription. Includes, when available, the buyer's
 * order and a failure they can act on. Omits the store's idempotency keys and payment attempt IDs.
 */
export type BuyerSubscriptionPaymentRetry = {
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    "order_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    "subscription_id": string;
    "subscription_payment_retry_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/** A page of `BuyerSubscriptionPaymentRetry` objects. */
export type BuyerSubscriptionPaymentRetryListResponse = {
    /**
     *  [] (Value): {@link BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the
     * buyer's subscription. Includes, when available, the buyer's order and a failure they can act
     * on. Omits the store's idempotency keys and payment attempt IDs.
     */
    "data": Array<BuyerSubscriptionPaymentRetry>;
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
/** A response containing `BuyerSubscriptionPaymentRetry` data. */
export type BuyerSubscriptionPaymentRetryResponse = {
    /**
     * A retry of a past-due payment on the buyer's subscription. Includes, when available, the
     * buyer's order and a failure they can act on. Omits the store's idempotency keys and payment
     * attempt IDs.
     */
    "data": BuyerSubscriptionPaymentRetry;
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
/**
 * A line item of a subscription plan as a buyer sees it: the product, bundle, or variant,
 * quantity, unit price, and swap variants.
 */
export type BuyerSubscriptionPlanLineItem = ({
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    "name"?: string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
})
    & ((Exclude<BuyerSubscriptionPlanLineItemVariant & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemBundle & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `bundle` variant of `BuyerSubscriptionPlanLineItem`. */
export type BuyerSubscriptionPlanLineItemBundle = ({
    "bundle_id": string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    "name"?: string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    "bundle_id": string;
}));
/** The `custom` variant of `BuyerSubscriptionPlanLineItem`. */
export type BuyerSubscriptionPlanLineItemCustom = ({
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    "name": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `variant` variant of `BuyerSubscriptionPlanLineItem`. */
export type BuyerSubscriptionPlanLineItemVariant = ({
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    "name"?: string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    "variant_id": string;
}));
/** Available subscription delivery methods shown to the buyer. */
export type BuyerSubscriptionPreview = {
    /**
     * The verification state of a subscription's delivery address: `verified`, `unverified`,
     * `needs_review`, or `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: string;
    /**
     * Present in delivery_options mode ([] when no method applies); absent in create mode. []
     * (Value): {@link SubscriptionDeliveryOption}. A delivery method offered for a subscription,
     * with its availability, price, and the reason it is unavailable if it is.
     */
    "delivery_methods"?: Array<SubscriptionDeliveryOption>;
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /** Always delivery_options for buyer previews. Value enum: "delivery_options". */
    "mode": "delivery_options" | (string & {});
    "subscription_id"?: string;
};
/** The response for: Preview subscription. */
export type BuyerSubscriptionPreviewResponse = {
    /**
     *  oneOf[1] (Value): {@link BuyerSubscriptionPreview}. Available subscription delivery methods
     * shown to the buyer. oneOf[2] (Value): {@link SubscriptionRenewalPreview}. A preview of a
     * subscription's next renewal and its estimated pricing.
     */
    "data": ((BuyerSubscriptionPreview) | (SubscriptionRenewalPreview) | (Record<string, unknown>));
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
/**
 * The subscription is the primary resource and expected_version target; the result uses the same
 * subscription and order fields as the corresponding /v1/me reads.
 */
export type BuyerSubscriptionRenewalResult = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "order": BuyerOrder;
    /**
     *  anyOf[1] (Value): {@link BuyerOrderPaymentAttempt}. An attempt to pay an order. anyOf[2]
     * (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /** A customer's recurring purchase. */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionRenewalResult` data. */
export type BuyerSubscriptionRenewalResultResponse = {
    /**
     * The subscription is the primary resource and expected_version target; the result uses the
     * same subscription and order fields as the corresponding /v1/me reads.
     */
    "data": BuyerSubscriptionRenewalResult;
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
/** A response containing `BuyerSubscription` data. */
export type BuyerSubscriptionResponse = {
    /** A customer's recurring purchase. */
    "data": BuyerSubscription;
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
/** The customer address reference or address used as the buyer's subscription service location. */
export type BuyerSubscriptionServiceLocation = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
};
/**
 * A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how
 * it was allocated to payments.
 */
export type BuyerTip = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "effective_amount_money": MoneyValue;
    "name"?: string;
    "order_tip_id": string;
    /**
     *  [] (Value): {@link TipPaymentIntentAllocation}. The part of a tip paid through one payment
     * intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "settled_amount_money": MoneyValue;
    /** Value enum: "requested", "settled", "partially_refunded", "refunded", "canceled". */
    "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     *  [] (Value): {@link TipValueSettlementAllocation}. The part of a tip paid through one value
     * settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequest = {
    /** minLength: 1. */
    "delivery_choice_group_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
    /**
     * Your outcome for a caller-priced delivery method, selected by `type`: available with a price
     * and windows, unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequest;
};
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequestInput = {
    /** minLength: 1. */
    "delivery_choice_group_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
    /**
     * Your outcome for a caller-priced delivery method, selected by `type`: available with a price
     * and windows, unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequestInput;
};
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequest = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailable = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Value enum: "available". */
    "type": "available" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string;
});
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailableInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available". */
    "type": "available";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Value enum: "available". */
    "type": "available";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string | globalThis.Date;
});
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculate = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable": boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    "retryable": boolean;
});
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable": boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    "retryable": boolean;
});
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequestInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput & object, readonly unknown[]>));
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailable = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
});
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailableInput = ({
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     *  [] (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
     * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer
     * can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** minLength: 1. */
    "service_level"?: string;
    /** Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
});
/** The request body for: Cancel a gift card notification. */
export type CancelGiftCardNotificationRequestInput = {};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
};
export type CancelOrderPaymentAttemptResponse = PayOrderResponse;
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequest = {};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequestInput = {};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "created_in_error", "changed_disposition", "duplicate", "other". */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "created_in_error", "changed_disposition", "duplicate", "other". */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Value enum: "buyer_request", "merchant_request", "expired", "created_in_error", "other". */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Value enum: "buyer_request", "merchant_request", "expired", "created_in_error", "other". */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnLineItemResponse = GetReturnResponse;
/** The request body for: Cancel one of the current buyer's Returns; Cancel return. */
export type CancelReturnRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other".
     */
    "reason": "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
