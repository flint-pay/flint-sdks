import type {
    ResourceReference,
    ReturnActor,
    RetryReturnResolutionRequestInput,
    ReturnCompletionBlocker,
    ReturnDisposition,
    ResponseMeta
} from './types-54.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { ReturnReplacementLineItem, ReturnResolutionAdjustment, ReturnResolution, ReturnReceipt } from './types-56.js';
import type {
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummary,
    ExpandedShipmentSummary,
    FilesCompleteParams
} from './types-24.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { Refund } from './types-52.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnResolutionRequestInput, CancelReturnLineItemRequestInput, CancelReturnRequestInput } from './types-4.js';
import type { ConfirmReturnResolutionRequestInput, CompleteReturnRequestInput } from './types-7.js';
import type { ReleaseReturnResolutionRequestInput, ReopenReturnRequestInput } from './types-53.js';
import type { UpdateReturnResolutionRequestInput, WaiveReturnLineInspectionRequestInput } from './types-68.js';
import type { BuyerAction } from './types-1.js';
import type {
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspection,
    ReturnLineItem,
    ReturnPolicyEvaluation
} from './types-55.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnRequestInput,
    CreateReturnReceiptRequestInput
} from './types-12.js';
import type { AddReturnLineItemRequestInput } from './types-0.js';
import type { CreateReturnResolutionRequestInput } from './types-13.js';
import type { DecideReturnRequestInput } from './types-16.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { ProcessExistingReturnRequestInput } from './types-49.js';
import type { UpdateReturnLineItemRequestInput, UpdateReturnRequestInput } from './types-67.js';
/** Work that must complete before a Return resolution can finish. */
export type ReturnResolutionExecutionBlocker = {
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
    /**
     * The resource the blocker waits on, such as a Refund or the replacement Order. A reference to
     * another resource by `resource_type` and `resource_id`.
     */
    "linked_resource"?: ResourceReference;
    /**
     * ID of the Return line the blocker gates. Absent when it applies to the whole resolution.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
};
/** A return line included in a resolution, with its quantity and returned total. */
export type ReturnResolutionLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** ID of the Return line the resolution covers. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id": string;
    /** ID of the resolution the line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". */
    "return_resolution_id": string;
    /**
     * ID of an existing resolution line to keep. Leave out to add a new line. Example:
     * "retresli_01KEZF7C00CR5NCDXRBP9W14CB".
     */
    "return_resolution_line_item_id": string;
    /**
     * Value of the returned units this line covers. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
/** A return line and quantity to include in a return resolution. */
export type ReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line the resolution covers. minLength: 1. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
};
/** A return line and quantity to include in a return resolution. */
export type ReturnResolutionLineItemRequestInput = ReturnResolutionLineItemRequest;
/**
 * A preview of a return resolution before it is created: returned and replacement totals,
 * adjustments, and amounts due to or from the buyer.
 */
export type ReturnResolutionPreview = {
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /** Version of the Return the preview was priced against. Format: int64. minimum: 0. */
    "based_on_return_version": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_payment_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "calculated_at": string;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Credits the proposed resolution's adjustments would add to the value returned to the buyer.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "deduction_money": MoneyValue;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItem}. A return line included in a resolution, with its quantity
     * and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
     * with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "replacement_total_money": MoneyValue;
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
    /** ID of the Return the resolution is for. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "returned_total_money": MoneyValue;
};
export type ReturnResolutionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
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
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<Refund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResolution>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_resolution.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
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
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<Refund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResolution>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_resolution.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_resolution.updated";
});
/**
 * The `return_resolution.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnResolutionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_line_value_unavailable means another refund already returned part of an
     * order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
     * units or without a refund. replacement_fulfillment_canceled means the replacement Order's
     * fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means
     * the original gift card cannot accept the refund; retry with gift_card_refund_destination set
     * to new_gift_card. store_credit_unavailable means the original payment cannot fund store
     * credit; cancel the resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed". object.failure_message
     * (Optional): string. Explanation of a failed Return resolution, when available.
     * object.fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_refund_destination (Optional):
     * string. Where the gift-card-paid portion is refunded. original credits the original gift
     * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
     * except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
     * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card". object.line_items (Required): Array of {@link
     * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on a
     * correction. object.line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
     * included in a resolution, with its quantity and returned total. object.metadata (Required):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.payment_intent_ids (Required): Array of string. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. object.payment_intents[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. object.pricing_basis
     * (Optional): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price". object.refund_ids
     * (Required): Array of string. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link Refund}.
     * object.refunds[] (Value): {@link Refund}. Money returned against a collected payment.
     * object.replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
     * Merchandise the buyer receives instead, for an exchange or replacement.
     * object.replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement
     * item added to a return resolution, with its quantity and price totals.
     * object.replacement_order (Optional): {@link ExpandedOrderSummary} or null. Present only when
     * `expand` includes `replacement_order`; `null` when expanded and there is no related order.
     * object.replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.replacement_order.anyOf[2] (Value): null.
     * object.replacement_order_id (Optional): string. ID of the replacement Order Flint created
     * for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money (Required): {@link
     * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.resolution_type (Required):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". object.return_id
     * (Required): string. ID of the Return the resolution belongs to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_revision_id (Optional): string.
     * Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string.
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * fulfilled means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open, except checkout_session. A failed resolution lists retry
     * while it has a failed effect and its failure code permits retry. It lists cancel when it
     * never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session",
     * "confirm", "release", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "checkout_session", "confirm", "release", "retry". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * minimum: 0. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_line_value_unavailable means another refund already returned part of an order
         * line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
         * units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "gift_card_refund_destination_required", "store_credit_unavailable",
         * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
         * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
         * "replacement_fulfillment_canceled", "resolution_effect_failed". failure_message
         * (Optional): string. Explanation of a failed Return resolution, when available.
         * fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". gift_card_refund_destination (Optional):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card". line_items (Required):
         * Array of {@link ReturnResolutionLineItem}. Return lines and quantities the resolution
         * covers. Absent on a correction. line_items[] (Value): {@link ReturnResolutionLineItem}.
         * A return line included in a resolution, with its quantity and returned total. metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. payment_intent_ids (Required): Array of string. payment_intent_ids[]
         * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional):
         * Array of {@link ExpandedPaymentIntentSummary}. payment_intents[] (Value): {@link
         * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
         * status, and capture method, returned when the payment intent is expanded. pricing_basis
         * (Optional): string. How replacement lines are priced. Present on exchanges and
         * replacements. Value enum: "original_price", "current_price", "merchant_agreed_price".
         * refund_ids (Required): Array of string. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds (Optional): Array of {@link Refund}. refunds[]
         * (Value): {@link Refund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_revision_id (Optional): string. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. fulfilled means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. Empty unless the parent Return is open, except checkout_session. A failed
         * resolution lists retry while it has a failed effect and its failure code permits retry.
         * It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_line_value_unavailable means another refund already returned part of an order
             * line, so retrying cannot succeed; cancel the resolution and resolve the line for
             * fewer units or without a refund. replacement_fulfillment_canceled means the
             * replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "gift_card_refund_destination_required", "store_credit_unavailable",
             * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
             * "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
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
            /**
             * When the resolution became fulfilled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**  [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_ids": Array<string>;
            /**
             *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary
             * fields, including amount, status, and capture method, returned when the payment
             * intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**  [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
            "refund_ids": Array<string>;
            /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
            "refunds"?: Array<Refund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
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
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /** Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * fulfilled means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open, except
             * checkout_session. A failed resolution lists retry while it has a failed effect and
             * its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResolution>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
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
 * The `return_resolution.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_line_value_unavailable means another refund already returned part of an
     * order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
     * units or without a refund. replacement_fulfillment_canceled means the replacement Order's
     * fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means
     * the original gift card cannot accept the refund; retry with gift_card_refund_destination set
     * to new_gift_card. store_credit_unavailable means the original payment cannot fund store
     * credit; cancel the resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed". object.failure_message
     * (Optional): string. Explanation of a failed Return resolution, when available.
     * object.fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_refund_destination (Optional):
     * string. Where the gift-card-paid portion is refunded. original credits the original gift
     * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
     * except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
     * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card". object.line_items (Required): Array of {@link
     * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on a
     * correction. object.line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
     * included in a resolution, with its quantity and returned total. object.metadata (Required):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.payment_intent_ids (Required): Array of string. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. object.payment_intents[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. object.pricing_basis
     * (Optional): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price". object.refund_ids
     * (Required): Array of string. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link Refund}.
     * object.refunds[] (Value): {@link Refund}. Money returned against a collected payment.
     * object.replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
     * Merchandise the buyer receives instead, for an exchange or replacement.
     * object.replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement
     * item added to a return resolution, with its quantity and price totals.
     * object.replacement_order (Optional): {@link ExpandedOrderSummary} or null. Present only when
     * `expand` includes `replacement_order`; `null` when expanded and there is no related order.
     * object.replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.replacement_order.anyOf[2] (Value): null.
     * object.replacement_order_id (Optional): string. ID of the replacement Order Flint created
     * for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money (Required): {@link
     * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.resolution_type (Required):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". object.return_id
     * (Required): string. ID of the Return the resolution belongs to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_revision_id (Optional): string.
     * Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string.
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * fulfilled means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open, except checkout_session. A failed resolution lists retry
     * while it has a failed effect and its failure code permits retry. It lists cancel when it
     * never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session",
     * "confirm", "release", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "checkout_session", "confirm", "release", "retry". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * minimum: 0. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_line_value_unavailable means another refund already returned part of an order
         * line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
         * units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "gift_card_refund_destination_required", "store_credit_unavailable",
         * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
         * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
         * "replacement_fulfillment_canceled", "resolution_effect_failed". failure_message
         * (Optional): string. Explanation of a failed Return resolution, when available.
         * fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". gift_card_refund_destination (Optional):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card". line_items (Required):
         * Array of {@link ReturnResolutionLineItem}. Return lines and quantities the resolution
         * covers. Absent on a correction. line_items[] (Value): {@link ReturnResolutionLineItem}.
         * A return line included in a resolution, with its quantity and returned total. metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. payment_intent_ids (Required): Array of string. payment_intent_ids[]
         * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional):
         * Array of {@link ExpandedPaymentIntentSummary}. payment_intents[] (Value): {@link
         * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
         * status, and capture method, returned when the payment intent is expanded. pricing_basis
         * (Optional): string. How replacement lines are priced. Present on exchanges and
         * replacements. Value enum: "original_price", "current_price", "merchant_agreed_price".
         * refund_ids (Required): Array of string. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds (Optional): Array of {@link Refund}. refunds[]
         * (Value): {@link Refund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_revision_id (Optional): string. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. fulfilled means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. Empty unless the parent Return is open, except checkout_session. A failed
         * resolution lists retry while it has a failed effect and its failure code permits retry.
         * It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_line_value_unavailable means another refund already returned part of an order
             * line, so retrying cannot succeed; cancel the resolution and resolve the line for
             * fewer units or without a refund. replacement_fulfillment_canceled means the
             * replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "gift_card_refund_destination_required", "store_credit_unavailable",
             * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
             * "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
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
            /**
             * When the resolution became fulfilled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**  [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_ids": Array<string>;
            /**
             *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary
             * fields, including amount, status, and capture method, returned when the payment
             * intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**  [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
            "refund_ids": Array<string>;
            /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
            "refunds"?: Array<Refund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
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
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /** Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * fulfilled means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open, except
             * checkout_session. A failed resolution lists retry while it has a failed effect and
             * its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResolution>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
});
export type ReturnResolutionsCancelParams = (InputValue<CancelReturnResolutionRequestInput>)
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
export type ReturnResolutionsConfirmParams = (InputValue<ConfirmReturnResolutionRequestInput> | {
    "expected_version"?: never;
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
export type ReturnResolutionsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: payment_intents, refunds,
     * replacement_order. Expanded relationships are returned only when explicitly requested and
     * authorized. Limits: at most 10 unique expand paths per request. To-many expansions are
     * capped at 20 related objects per path. [] enum: "payment_intents", "refunds",
     * "replacement_order". Value enum: "payment_intents", "refunds", "replacement_order". anyOf[1]
     * (Value): Array of string. [] enum: "payment_intents", "refunds", "replacement_order".
     * anyOf[1][] (Value): string. Value enum: "payment_intents", "refunds", "replacement_order".
     * anyOf[2] (Value): string. Value enum: "payment_intents", "refunds", "replacement_order".
     */
    "expand"?: InputValue<("payment_intents" | "refunds" | "replacement_order")
        | readonly ("payment_intents" | "refunds" | "replacement_order")[]>;
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
export type ReturnResolutionsListParams = {
    /**
     * Filter by action required by. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "buyer", "merchant", "integration". Value enum: "buyer", "merchant",
     * "integration". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "buyer", "merchant",
     * "integration". anyOf[1][] (Value): string. Value enum: "buyer", "merchant", "integration".
     * anyOf[2] (Value): string. Value enum: "buyer", "merchant", "integration".
     */
    "action_required_by"?: InputValue<("buyer" | "merchant" | "integration") | readonly ("buyer" | "merchant" | "integration")[]>;
    /**
     * Filter by corrects return resolution id. pattern: ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return resolution ID or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by resolution type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1][] (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /**
     * Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: InputValue<string>;
    /**
     * Filter by return policy revision id. pattern: ^rpolv_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled". Value
     * enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "proposed", "pending", "requires_action",
     * "fulfilled", "failed", "canceled". anyOf[1][] (Value): string. Value enum: "proposed",
     * "pending", "requires_action", "fulfilled", "failed", "canceled". anyOf[2] (Value): string.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status"?: InputValue<("proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled")
        | readonly ("proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: replacement_order. Include
     * the requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "replacement_order". Value enum: "replacement_order". anyOf[1] (Value): Array of string. []
     * enum: "replacement_order". anyOf[1][] (Value): string. Value enum: "replacement_order".
     * anyOf[2] (Value): string. Value enum: "replacement_order".
     */
    "expand"?: InputValue<("replacement_order") | readonly ("replacement_order")[]>;
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
export type ReturnResolutionsReleaseParams = (InputValue<ReleaseReturnResolutionRequestInput>)
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
export type ReturnResolutionsRetryParams = (InputValue<RetryReturnResolutionRequestInput>)
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
export type ReturnResolutionsUpdateParams = (InputValue<UpdateReturnResolutionRequestInput>)
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
/** A request to send purchased items back. */
export type ReturnResource = {
    /**
     * What the buyer can do with the return, in this order: withdraw, ship_items, then
     * pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's
     * buyer account, lists all three every time; merchant reads and webhooks get an empty list.
     * ship_items is required while handoff_requirements is not empty, due by the earliest
     * expires_at there. pay_balance is required while a resolution waits for the buyer's payment.
     * Example: []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * Who canceled the Return. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Why the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Detail sent with the cancellation. Merchant reads only. */
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * Who completed the Return. `system` when Flint completed it automatically. Who performed a
     * return action: a buyer, merchant, integration, or the system, with an optional ID.
     */
    "completed_by"?: ReturnActor;
    /**
     * What is still owed before the Return can complete. Empty when nothing is. [] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns.
     */
    "completion_blockers": Array<ReturnCompletionBlocker>;
    /**
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Why the Return was completed by hand. Absent when Flint completed it automatically. Value
     * enum: "manual_completion", "exception_waived", "other".
     */
    "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** Detail sent when the Return was completed by hand. */
    "completion_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Whether the requested units were approved. `pending` until one decision covers every line.
     * Value enum: "pending", "approved", "partially_approved", "declined".
     */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The Return's money in one place: the value of the returned lines, deductions and credits,
     * and what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     * What the buyer still has to send back and where. Each entry leaves the list once it is
     * satisfied, so an empty list means nothing is waiting on the buyer. [] (Value): {@link
     * ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the destination,
     * instructions, line items, and expiry.
     */
    "handoff_requirements": Array<ReturnHandoffRequirement>;
    /**
     * Who created the Return, from the credential that sent the request: buyer for a customer
     * session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for
     * an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant",
     * "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a return
     * request.
     */
    "line_items": Array<ReturnLineItem>;
    /**
     * On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception".
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
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * How your return policies judged the request when the Return was created. How a return policy
     * evaluated a return request: overall status and reason, the policy revision used, and
     * per-line results.
     */
    "policy_evaluation"?: ReturnPolicyEvaluation;
    /**
     * Whether the buyer has received the value they are owed. Combines the Return's resolutions
     * and its unsettled corrections. Value enum: "not_selected", "pending", "partially_fulfilled",
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
     * IDs of every disposition recorded for this Return, oldest first, including failed and
     * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read
     * them inline. [] (Value): string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_dispositions`. The dispositions in
     * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}. A
     * decision about how returned merchandise will be handled.
     */
    "return_dispositions"?: Array<ReturnDisposition>;
    /**
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * IDs of every inspection recorded for this Return, oldest first, including superseded
     * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "return_inspection_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_inspections`. The inspections in
     * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
     * assessment of the condition of returned items.
     */
    "return_inspections"?: Array<ReturnInspection>;
    /** Human-readable number for the Return. */
    "return_number": string;
    /**
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. [] (Value):
     * string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`,
     * in the same order. [] (Value): {@link ReturnReceipt}. A record of returned items arriving at
     * a location.
     */
    "return_receipts"?: Array<ReturnReceipt>;
    /**
     * IDs of every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_resolutions`. The resolutions in
     * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}. The
     * refund, exchange, or other outcome of a return.
     */
    "return_resolutions"?: Array<ReturnResolution>;
    /**
     * IDs of every shipment raised to send this Return's items back, oldest first, including
     * voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_ids": Array<string>;
    /**
     * Present only when `expand` includes `shipments`. Summaries of the shipments in
     * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A shipment's
     * summary fields, including direction, status, and package count, returned when the shipment
     * is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum: "cancel",
     * "complete", "decide", "reopen".
     */
    "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Goes up with every change to the Return. Each activity's `return_version` is the version
     * that activity produced. A write that takes `expected_version` or `expected_return_version`
     * for this Return compares it with this value. Format: int64. minimum: 0.
     */
    "version": number;
};
/** A restocking fee in a return policy, charged as a flat amount or a percent. */
export type ReturnRestockingFeePolicy = {
    /** How the fee is worked out. Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /**
     * Fixed fee proposed for each line, whatever the quantity. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /**
     * Percentage points of the returned units' subtotal, from 1 to 100 with up to four decimal
     * places. `10` means 10%. Format: double. multipleOf: 0.0001.
     */
    "percent"?: number;
};
/** A restocking fee in a return policy, charged as a flat amount or a percent. */
export type ReturnRestockingFeePolicyRequestInput = {
    /** How the fee is worked out. Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent";
    /**
     * Fixed fee proposed for each line, whatever the quantity. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * Percentage points of the returned units' subtotal, from 1 to 100 with up to four decimal
     * places. `10` means 10%. Format: double. multipleOf: 0.0001.
     */
    "percent"?: number;
};
/** A return line and the quantity placed in a return shipment or package. */
export type ReturnShipmentLineItemAllocationRequestInput = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Return line whose quantity is allocated to the shipment or package. minLength: 1. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
};
/** Who pays for return shipping in a return policy: the merchant or the buyer. */
export type ReturnShippingPolicy = {
    /**
     * Who pays for shipping the goods back. This states your policy and charges nothing. Value
     * enum: "merchant", "buyer".
     */
    "payer": "merchant" | "buyer" | (string & {});
};
/** Who pays for return shipping in a return policy: the merchant or the buyer. */
export type ReturnShippingPolicyRequestInput = {
    /**
     * Who pays for shipping the goods back. This states your policy and charges nothing. Value
     * enum: "merchant", "buyer".
     */
    "payer": "merchant" | "buyer";
};
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystem = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other", "flint".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | "flint" | (string & {});
});
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystemRequest = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | (string & {});
});
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystemRequestInput = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other";
});
/**
 * Merchandise received in a return that does not match an expected return line, described by name,
 * SKU, and description.
 */
export type ReturnUnverifiedItem = {
    /** Description of the unidentified item. minLength: 1. */
    "description"?: string;
    /** Name of the unidentified item. minLength: 1. */
    "name": string;
    /** SKU of the unidentified item. minLength: 1. */
    "sku"?: string;
};
/**
 * Merchandise received in a return that does not match an expected return line, described by name,
 * SKU, and description.
 */
export type ReturnUnverifiedItemInput = ReturnUnverifiedItem;
export type ReturnUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
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
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
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
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return.updated";
});
/**
 * The `return.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
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
 * The `return.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
});
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindow = {
    /**
     * Length of the window in seconds, above 0 and at most 158,112,000 (1,830 days). Format:
     * int64.
     */
    "duration_seconds": number;
    /**
     * The fulfillment event the window counts from. Value enum: "fulfilled", "delivered",
     * "picked_up", "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed" | (string & {});
};
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindowRequestInput = {
    /**
     * Length of the window in seconds, above 0 and at most 158,112,000 (1,830 days). Format:
     * int64.
     */
    "duration_seconds": number;
    /**
     * The fulfillment event the window counts from. Value enum: "fulfilled", "delivered",
     * "picked_up", "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed";
};
export type ReturnsCancelLineItemParams = (InputValue<CancelReturnLineItemRequestInput>)
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
export type ReturnsCancelParams = (InputValue<CancelReturnRequestInput>)
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
export type ReturnsCompleteParams = (InputValue<CompleteReturnRequestInput>
    | {
    "expected_version"?: never;
    "reason"?: never;
    "reason_message"?: never;
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
export type ReturnsCreateAccessLinkParams = FilesCompleteParams;
export type ReturnsCreateDispositionParams = (CreateReturnDispositionRequestInput)
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
export type ReturnsCreateInspectionParams = (InputValue<CreateReturnInspectionRequestInput>)
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
export type ReturnsCreateLineItemParams = (InputValue<AddReturnLineItemRequestInput>)
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
export type ReturnsCreateParams = (InputValue<CreateReturnRequestInput>)
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
export type ReturnsCreateReceiptParams = (InputValue<CreateReturnReceiptRequestInput>)
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
export type ReturnsCreateResolutionParams = (CreateReturnResolutionRequestInput)
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
export type ReturnsDecideParams = (InputValue<DecideReturnRequestInput>)
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
export type ReturnsDeleteLineItemParams = {
    /**
     * Optional version of the parent Return. Supply exactly once. A stale value returns
     * VERSION_CONFLICT with the current Return version. Format: int64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
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
export type ReturnsGetLineItemParams = DisputesAcceptParams;
export type ReturnsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer,
     * line_items.fulfillment, line_items.return_reason, order, return_dispositions,
     * return_inspections, return_receipts, return_resolutions, shipments. Expanded relationships
     * are returned only when explicitly requested and authorized. Limits: at most 10 unique expand
     * paths per request. To-many expansions are capped per path: at 100 related objects for
     * return_dispositions, return_inspections, return_receipts, return_resolutions, and shipments;
     * at 20 for line_items.fulfillment and line_items.return_reason. [] enum: "customer",
     * "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions",
     * "return_inspections", "return_receipts", "return_resolutions", "shipments". Value enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions",
     * "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[1][]
     * (Value): string. Value enum: "customer", "line_items.fulfillment",
     * "line_items.return_reason", "order", "return_dispositions", "return_inspections",
     * "return_receipts", "return_resolutions", "shipments". anyOf[2] (Value): string. Value enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments".
     */
    "expand"?: InputValue<("customer"
        | "line_items.fulfillment"
        | "line_items.return_reason"
        | "order"
        | "return_dispositions"
        | "return_inspections"
        | "return_receipts"
        | "return_resolutions"
        | "shipments")
        | readonly ("customer"
        | "line_items.fulfillment"
        | "line_items.return_reason"
        | "order"
        | "return_dispositions"
        | "return_inspections"
        | "return_receipts"
        | "return_resolutions"
        | "shipments")[]>;
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
export type ReturnsListActivitiesParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
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
export type ReturnsListLineItemsParams = {
    /**
     * Filter by fulfillment id. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception". Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1][] (Value): string. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")
        | readonly ("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")[]>;
    /**
     * Filter by order line item id. pattern: ^li_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_selected", "pending", "requires_action", "fulfilled", "failed". Value
     * enum: "not_selected", "pending", "requires_action", "fulfilled", "failed". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "not_selected", "pending", "requires_action",
     * "fulfilled", "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "requires_action", "fulfilled", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")[]>;
    /**
     * Filter by return reason id. pattern: ^rrsn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "requested", "open", "completed", "declined", "canceled". Value enum: "requested",
     * "open", "completed", "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value):
     * string. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2]
     * (Value): string. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
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
export type ReturnsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by customer id. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by decision status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "approved", "partially_approved", "declined". Value enum:
     * "pending", "approved", "partially_approved", "declined". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "pending", "approved", "partially_approved", "declined". anyOf[1][]
     * (Value): string. Value enum: "pending", "approved", "partially_approved", "declined".
     * anyOf[2] (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status"?: InputValue<("pending" | "approved" | "partially_approved" | "declined")
        | readonly ("pending" | "approved" | "partially_approved" | "declined")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception". Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1][] (Value): string. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")
        | readonly ("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")[]>;
    /**
     * Filter by order id. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Search by return ID, return number, external reference ID, the order's number, or the
     * buyer's email.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by receiving location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed". Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "partially_fulfilled", "requires_action", "fulfilled", "failed". anyOf[2] (Value): string.
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")[]>;
    /**
     * Filter by resolution type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1][] (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /** Filter by return number. */
    "return_number"?: InputValue<string>;
    /**
     * Filter by return reason id. pattern: ^rrsn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by return_id. Default:
     * "created_at". Value enum: "created_at".
     */
    "sort_by"?: InputValue<"created_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "requested", "open", "completed", "declined", "canceled". Value enum: "requested",
     * "open", "completed", "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value):
     * string. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2]
     * (Value): string. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by work type. Matches only returns that are still requested or open. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "decision", "handoff",
     * "receipt", "inspection", "disposition", "resolution", "exception". Value enum: "decision",
     * "handoff", "receipt", "inspection", "disposition", "resolution", "exception". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception". anyOf[1][] (Value): string. Value
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception". anyOf[2] (Value): string. Value enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception".
     */
    "work_type"?: InputValue<("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")
        | readonly ("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")[]>;
    /**
     * Include related objects in the response. Supported expansions: customer, order. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "customer", "order". Value enum: "customer", "order". anyOf[1] (Value): Array of string. []
     * enum: "customer", "order". anyOf[1][] (Value): string. Value enum: "customer", "order".
     * anyOf[2] (Value): string. Value enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type ReturnsProcessParams = (InputValue<ProcessExistingReturnRequestInput>)
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
export type ReturnsReopenParams = (InputValue<ReopenReturnRequestInput>)
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
export type ReturnsUpdateLineItemParams = (InputValue<UpdateReturnLineItemRequestInput>)
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
export type ReturnsUpdateParams = (InputValue<UpdateReturnRequestInput>)
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
export type ReturnsWaiveLineItemInspectionParams = (InputValue<WaiveReturnLineInspectionRequestInput>)
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
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequest = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Why the offline payment is being reversed, up to 4096 characters. minLength: 1. maxLength:
     * 4096.
     */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "reversed_at"?: string;
};
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequestInput = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Why the offline payment is being reversed, up to 4096 characters. minLength: 1. maxLength:
     * 4096.
     */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "reversed_at"?: string | globalThis.Date;
};
/**
 * One attribute a risk rule can test, with its value type, allowed operators, and whether it is
 * currently available.
 */
export type RiskAttribute = {
    /**
     * The stage from which the attribute's value is known. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "available_from": "pre_authorization" | "post_authorization" | (string & {});
    /** The values the attribute can take. Present for `enum` attributes. [] (Value): string. */
    "enum_values"?: Array<string>;
    /** Whether the attribute can be used in rules in this environment. */
    "is_available": boolean;
    /** Whether the attribute can be missing from a payment. */
    "is_nullable": boolean;
    /**
     * How a comparison treats a payment that has no value for the attribute. Value enum:
     * "not_applicable_except_is_missing".
     */
    "missing_value_behavior": "not_applicable_except_is_missing" | (string & {});
    /** Name of the attribute, as a rule's `attribute` field uses it. */
    "name": string;
    /**
     * Operators accepted by this attribute. [] enum: "eq", "neq", "gt", "gte", "lt", "lte", "in",
     * "in_list", "is_missing". [] (Value): string. Value enum: "eq", "neq", "gt", "gte", "lt",
     * "lte", "in", "in_list", "is_missing".
     */
    "operators": Array<"eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" | "in_list" | "is_missing" | (string & {})>;
    /**
     * Why the attribute can't be used in rules. Present when `is_available` is `false`. Value
     * enum: "risk_scoring_not_enabled", "ip_geolocation_not_enabled".
     */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
    /**
     * The kind of value the attribute holds. Value enum: "money", "currency", "string", "enum",
     * "country", "email", "ip_address", "boolean", "integer".
     */
    "value_type": "money"
        | "currency"
        | "string"
        | "enum"
        | "country"
        | "email"
        | "ip_address"
        | "boolean"
        | "integer"
        | (string & {});
};
/** The attributes available to risk rules, in the current environment. */
export type RiskAttributeRegistry = {
    /**
     * The attributes a risk rule can test. [] (Value): {@link RiskAttribute}. One attribute a risk
     * rule can test, with its value type, allowed operators, and whether it is currently
     * available.
     */
    "attributes": Array<RiskAttribute>;
};
/** A response containing `RiskAttributeRegistry` data. */
export type RiskAttributeRegistryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The attributes available
     * to risk rules, in the current environment.
     */
    "data": RiskAttributeRegistry;
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
/** A collection of values used in payment risk rules. */
export type RiskList = {
    /**
     * Name rules use to refer to this list, such as flagged_emails: a lowercase letter, then up to
     * 127 lowercase letters, digits, or underscores. Set at creation and never changed.
     */
    "alias": string;
    /**
     * RFC3339 timestamp. `null` when the resource isn't archived. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "archived_at": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The credential that created this list. Null when Flint created it, as for Flint's default
     * lists. The reference may name an API key in the other mode. anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Number of values on the list now. Format: int64. */
    "item_count": number;
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
    /** Display name of the list. */
    "name": string;
    /**
     * Whether Flint manages the list or the merchant created it. Value enum: "system_default",
     * "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    /**
     * Unique identifier for this risk list, prefixed `rl_`. Example:
     * "rl_01KEZF7C00VYSERA4QCTJP147A".
     */
    "risk_list_id": string;
    /** Whether the list can still be used. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Version of persisted list configuration and item-count changes. External observations do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** One value in a payment risk list. */
export type RiskListItem = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The credential that created this list item. Null when Flint created it. The reference may
     * name an API key in the other mode. anyOf[1] (Value): {@link ResourceReference}. A reference
     * to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** ID of the risk list this value is on. Example: "rl_01KEZF7C00VYSERA4QCTJP147A". */
    "risk_list_id": string;
    /**
     * Unique identifier for this risk list item, prefixed `rli_`. Example:
     * "rli_01KEZF7C006BND1CJYPAJW9JWE".
     */
    "risk_list_item_id": string;
    /**
     * The value as stored after item_type normalization, which is what payments are matched
     * against.
     */
    "value": string;
};
/** The risk list item matched or created for one requested value, and its creation outcome. */
export type RiskListItemAddition = {
    /**
     * Whether the value was added or was already on the list. Value enum: "created", "existing".
     */
    "outcome": "created" | "existing" | (string & {});
    /** The list item holding the value. One value in a payment risk list. */
    "risk_list_item": RiskListItem;
};
/** A page of `RiskListItem` objects. */
export type RiskListItemListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * RiskListItem}. One value in a payment risk list.
     */
    "data": Array<RiskListItem>;
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
/** A response containing `RiskListItem` data. */
export type RiskListItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One value in a payment
     * risk list.
     */
    "data": RiskListItem;
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
/** A page of `RiskList` objects. */
export type RiskListListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * RiskList}. A collection of values used in payment risk rules.
     */
    "data": Array<RiskList>;
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
