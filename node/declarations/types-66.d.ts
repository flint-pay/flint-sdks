import type { MoneyValueInput, MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type {
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedPaymentIntentSummaryPreviousAttributes,
    ExpandedCustomerSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    DisputesAcceptParams
} from './types-26.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type {
    ReturnActor,
    ReturnActorPreviousAttributes,
    RetryReturnResolutionRequestInput,
    ReturnCompletionBlocker,
    ReturnDisposition,
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspection,
    ReturnCompletionBlockerPreviousAttributes,
    ReturnDispositionPreviousAttributes,
    ReturnFinancialSummaryPreviousAttributes,
    ReturnHandoffRequirementPreviousAttributes
} from './types-63.js';
import type {
    ReturnReplacementLineItem,
    ReturnResolutionAdjustment,
    ReturnRefundTenderEstimate,
    ReturnReplacementLineItemPreviousAttributes,
    ReturnResolutionAdjustmentPreviousAttributes,
    ReturnReceipt,
    ReturnResolution,
    ReturnReceiptPreviousAttributes
} from './types-65.js';
import type {
    WebhookSnapshotRefund,
    WebhookSnapshotReturnDisposition,
    WebhookSnapshotReturnInspection,
    WebhookSnapshotReturnLineItem,
    WebhookSnapshotReturnReceipt,
    WebhookSnapshotReturnResolution
} from './types-80.js';
import type { ResourceReference, ResourceReferencePreviousAttributes, ReopenReturnRequestInput } from './types-62.js';
import type { RefundPreviousAttributes, ReleaseReturnResolutionRequestInput } from './types-61.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnResolutionRequestInput, CancelReturnLineItemRequestInput, CancelReturnRequestInput } from './types-5.js';
import type { ConfirmReturnResolutionRequestInput, CompleteReturnRequestInput } from './types-8.js';
import type { CreateReturnResolutionRequestInput, CreateReturnRequestInput } from './types-13.js';
import type { UpdateReturnResolutionRequestInput, UpdateReturnLineItemRequestInput, UpdateReturnRequestInput } from './types-78.js';
import type { ExpandedShipmentSummary, ExpandedShipmentSummaryPreviousAttributes, FilesCompleteParams } from './types-27.js';
import type {
    ReturnLineItem,
    ReturnPolicyEvaluation,
    ReturnInspectionPreviousAttributes,
    ReturnLineItemPreviousAttributes,
    ReturnPolicyEvaluationPreviousAttributes
} from './types-64.js';
import type { AddReturnLineItemRequestInput } from './types-0.js';
import type { DecideReturnRequestInput } from './types-17.js';
import type { ProcessExistingReturnRequestInput } from './types-57.js';
import type { WaiveReturnLineInspectionRequestInput } from './types-79.js';
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequestInput = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived";
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit";
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
export type ReturnResolutionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_resolution.created";
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
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_resolution.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_resolution.created";
});
/**
 * The `return_resolution.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnResolutionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0.
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
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
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
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
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
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
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
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
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
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
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
 * The `return_resolution.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0.
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
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
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
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
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
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
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
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
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
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
});
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
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string | null;
    /**
     * ID of the Return line the blocker gates. Absent when it applies to the whole resolution.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
};
export type ReturnResolutionExecutionBlockerPreviousAttributes = {
    /**
     * handoff_pending: The buyer has not handed off the required merchandise. receipt_pending:
     * Required merchandise has not been received. inspection_pending: Required inspection is
     * incomplete. manual_release_pending: The merchant must release the resolution.
     * buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked
     * Refund has not succeeded. replacement_order_pending: The replacement Order has not been
     * created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet
     * fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending",
     * "manual_release_pending", "buyer_payment_pending", "refund_pending",
     * "replacement_order_pending", "fulfillment_pending". anyOf[1] (Value): string.
     * handoff_pending: The buyer has not handed off the required merchandise. receipt_pending:
     * Required merchandise has not been received. inspection_pending: Required inspection is
     * incomplete. manual_release_pending: The merchant must release the resolution.
     * buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked
     * Refund has not succeeded. replacement_order_pending: The replacement Order has not been
     * created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet
     * fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending",
     * "manual_release_pending", "buyer_payment_pending", "refund_pending",
     * "replacement_order_pending", "fulfillment_pending". anyOf[2] (Value): null.
     */
    "code"?: (("handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "manual_release_pending"
        | "buyer_payment_pending"
        | "refund_pending"
        | "replacement_order_pending"
        | "fulfillment_pending"
        | (string & {}))
        | (null));
    /**
     * The resource the blocker waits on, such as a Refund or the replacement Order. anyOf[1]
     * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "linked_resource"?: ((ResourceReferencePreviousAttributes) | (null));
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1]
     * (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is
     * null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the Return line the blocker gates. Absent when it applies to the whole resolution.
     * anyOf[1] (Value): string. ID of the Return line the blocker gates. Absent when it applies to
     * the whole resolution. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
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
    /** Return that owns return_line_item_id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
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
export type ReturnResolutionLineItemPreviousAttributes = {
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual". anyOf[1] (Value): string. Release gate for every resolution type, including
     * exchanges and replacements. Released after the Return is approved. Released after the buyer
     * hands back the required merchandise. Released after the required merchandise is received.
     * Released after the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     */
    "release_timing"?: (("after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {}))
        | (null));
    /**
     * Return that owns return_line_item_id. anyOf[1] (Value): string. Return that owns
     * return_line_item_id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the Return line the resolution covers. anyOf[1] (Value): string. ID of the Return line
     * the resolution covers. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * ID of the resolution the line belongs to. anyOf[1] (Value): string. ID of the resolution the
     * line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "return_resolution_id"?: ((string) | (null));
    /**
     * ID of an existing resolution line to keep. Leave out to add a new line. anyOf[1] (Value):
     * string. ID of an existing resolution line to keep. Leave out to add a new line. Example:
     * "retresli_01KEZF7C00CR5NCDXRBP9W14CB". anyOf[2] (Value): null.
     */
    "return_resolution_line_item_id"?: ((string) | (null));
    /**
     * Value of the returned units this line covers. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
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
    /**
     * Amount the buyer owes when `deduction_money` and `replacement_total_money` exceed
     * `returned_total_money` plus `credit_adjustment_money`. Zero when the buyer is owed a refund
     * and for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value that goes back to the buyer: `returned_total_money` plus `credit_adjustment_money`,
     * minus `deduction_money` and `replacement_total_money`, when that balance is zero or more.
     * For `store_credit`, the value issued on new gift cards. Zero for `no_monetary_action`.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
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
    /**
     * Deductions the proposed resolution's adjustments would take, such as a restocking fee.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItem}. A return line included in a resolution, with its quantity
     * and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Buyer refund value that the original payments cannot fund. Zero when fully payable.
     * buyer_refund_amount_money remains the full entitlement. Create and confirm refuse a
     * shortfall with 409 LIMIT_EXCEEDED and maximum_money. Merchant only. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_shortfall_money": MoneyValue;
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
     * with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Total of the replacement items the buyer would receive. Monetary amount represented as
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
    /** ID of the Return the resolution is for. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Value of the returned units the proposed resolution covers. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Estimated amounts by original tender and refund destination. For a replacement return,
     * order_id identifies the order that collected each tender. Empty when no amount is payable.
     * [] (Value): {@link ReturnRefundTenderEstimate}. One original tender and its estimated share
     * of a return refund.
     */
    "tender_estimates": Array<ReturnRefundTenderEstimate>;
};
export type ReturnResolutionPreviousAttributes = {
    /**
     * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the
     * exchange balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a requires_action
     * resolution is waiting. buyer_payment means the buyer must pay the exchange balance;
     * manual_release means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". anyOf[2] (Value): null.
     */
    "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
    /**
     * Who has to act while the resolution's status is `requires_action`. Value enum: "buyer",
     * "merchant". anyOf[1] (Value): string. Who has to act while the resolution's status is
     * `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     */
    "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
    /**
     * Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the resolution's
     * amounts. anyOf[1][] (Value): {@link ReturnResolutionAdjustmentPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and
     * for no_monetary_action. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
     * deduction_money and replacement_total_money, when that balance is zero or more. For
     * store_credit, the value issued on new gift cards. Zero for no_monetary_action. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "canceled_at"?: ((string) | (null));
    /**
     * Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why the
     * resolution was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other". anyOf[2] (Value): null.
     */
    "cancellation_reason"?: (("buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string. Detail
     * sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
     */
    "cancellation_reason_message"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "confirmed_at"?: ((string) | (null));
    /**
     * Who confirmed the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * ID of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. anyOf[1] (Value): string. ID of the settled resolution this correction
     * adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "corrects_return_resolution_id"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Who created the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "created_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Credits added by the resolution's adjustments. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1] (Value):
     * Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a confirmed
     * resolution is still waiting for. Empty when nothing is. anyOf[1][] (Value): {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes}. anyOf[2] (Value): null.
     */
    "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Reason code for a failed Return resolution, when available.
     * refund_payment_balance_unavailable means the original payments cannot fund the resolution;
     * cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed". anyOf[2] (Value): null.
     */
    "failure_code"?: (("refund_payment_balance_unavailable"
        | "gift_card_refund_destination_required"
        | "store_credit_unavailable"
        | "refund_creation_failed"
        | "refund_failed"
        | "refund_line_value_unavailable"
        | "payment_intent_creation_failed"
        | "payment_failed"
        | "replacement_order_creation_failed"
        | "replacement_fulfillment_canceled"
        | "resolution_effect_failed"
        | (string & {}))
        | (null));
    /**
     * Explanation of a failed Return resolution, when available. anyOf[1] (Value): string.
     * Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
     */
    "failure_message"?: ((string) | (null));
    /**
     * When the resolution completed. anyOf[1] (Value): string. When the resolution completed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "fulfilled_at"?: ((string) | (null));
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Value enum: "original", "new_gift_card".
     * anyOf[1] (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
     * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card". anyOf[2] (Value): null.
     */
    "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
    /**
     * Return lines and quantities the resolution covers. Absent on a correction. anyOf[1] (Value):
     * Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
     * resolution covers. Absent on a correction. anyOf[1][] (Value): {@link
     * ReturnResolutionLineItemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * IDs of the payment intents that collect the buyer's balance for this resolution, in the
     * order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array of string.
     * IDs of the payment intents that collect the buyer's balance for this resolution, in the
     * order Flint linked them. Empty until a payment exists. anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     */
    "payment_intent_ids"?: ((Array<string>) | (null));
    /**
     * Present only when `expand` includes `payment_intents`. Summaries of the payment intents in
     * `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. anyOf[1][] (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
    /**
     * How replacement lines are priced. Present on exchanges and replacements. Value enum:
     * "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value): string. How
     * replacement lines are priced. Present on exchanges and replacements. Value enum:
     * "original_price", "current_price", "merchant_agreed_price". anyOf[2] (Value): null.
     */
    "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
    /**
     * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them.
     * Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the Refunds that pay
     * the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists.
     * anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value):
     * null.
     */
    "refund_ids"?: ((Array<string>) | (null));
    /**
     * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
     * order. anyOf[1] (Value): Array of {@link RefundPreviousAttributes}. Present only when
     * `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. anyOf[1][]
     * (Value): {@link RefundPreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
    /**
     * Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1] (Value):
     * Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer receives
     * instead, for an exchange or replacement. anyOf[1][] (Value): {@link
     * ReturnReplacementLineItemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
    /**
     * Present only when `expand` includes `replacement_order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
    /**
     * ID of the replacement Order Flint created for an exchange or replacement. Absent until it
     * exists. anyOf[1] (Value): string. ID of the replacement Order Flint created for an exchange
     * or replacement. Absent until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
     * (Value): null.
     */
    "replacement_order_id"?: ((string) | (null));
    /**
     * Total of the replacement items the buyer receives. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value): string.
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[2] (Value): null.
     */
    "resolution_type"?: (("refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {}))
        | (null));
    /**
     * ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the Return the
     * resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
     * anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null` when
     * return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2]
     * (Value): null.
     */
    "return_policy_id"?: ((string) | (null));
    /**
     * ID of the return policy revision that judged the lines. Set only when Flint created the
     * resolution itself and no merchant decision overrode the policy. Absent otherwise, including
     * on resolutions you create and on corrections. anyOf[1] (Value): string. ID of the return
     * policy revision that judged the lines. Set only when Flint created the resolution itself and
     * no merchant decision overrode the policy. Absent otherwise, including on resolutions you
     * create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value):
     * null.
     */
    "return_policy_revision_id"?: ((string) | (null));
    /**
     * Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value): string.
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "return_resolution_id"?: ((string) | (null));
    /**
     * Value of the returned units this resolution covers. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * anyOf[1] (Value): string. completed means the buyer has the value: every linked Refund
     * succeeded, any balance was collected, and any replacement Order's fulfillment_status is
     * fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action",
     * "completed", "failed", "canceled". anyOf[2] (Value): null.
     */
    "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
        | (null));
    /**
     * Actions that can succeed now. checkout_session is listed while a replacement Order needs a
     * buyer payment, including when the parent Return is not open. Other actions require an open
     * Return. A failed resolution lists retry while it has a failed effect and its failure code
     * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. []
     * enum: "cancel", "checkout_session", "confirm", "release", "retry". anyOf[1] (Value): Array
     * of string. Actions that can succeed now. checkout_session is listed while a replacement
     * Order needs a buyer payment, including when the parent Return is not open. Other actions
     * require an open Return. A failed resolution lists retry while it has a failed effect and its
     * failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent,
     * or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". anyOf[1][]
     * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
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
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "confirmed_at"?: ((string) | (null));
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "corrects_return_resolution_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            "failure_message"?: ((string) | (null));
            "fulfilled_at"?: ((string) | (null));
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "replacement_order_id"?: ((string) | (null));
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            "return_id"?: ((string) | (null));
            "return_policy_id"?: ((string) | (null));
            "return_policy_revision_id"?: ((string) | (null));
            "return_resolution_id"?: ((string) | (null));
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "confirmed_at"?: ((string) | (null));
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "corrects_return_resolution_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            "failure_message"?: ((string) | (null));
            "fulfilled_at"?: ((string) | (null));
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "replacement_order_id"?: ((string) | (null));
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            "return_id"?: ((string) | (null));
            "return_policy_id"?: ((string) | (null));
            "return_policy_revision_id"?: ((string) | (null));
            "return_resolution_id"?: ((string) | (null));
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. previous_attributes (Optional): object and {@link
     * ReturnResolutionPreviousAttributes}. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.action_reason (Optional): string or null. Why a requires_action
     * resolution is waiting. buyer_payment means the buyer must pay the exchange balance;
     * manual_release means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". previous_attributes.action_reason.anyOf[1] (Value): string. Why a
     * requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange
     * balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release". previous_attributes.action_reason.anyOf[2] (Value): null.
     * previous_attributes.action_required_by (Optional): string or null. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[1] (Value): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[2] (Value): null.
     * previous_attributes.adjustments (Optional): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
     * resolution's amounts. previous_attributes.adjustments.anyOf[1] (Value): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the resolution's
     * amounts. previous_attributes.adjustments.anyOf[1][] (Value): {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. previous_attributes.adjustments.anyOf[2]
     * (Value): null. previous_attributes.buyer_payment_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Amount the buyer owes when deduction_money and
     * replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when
     * the buyer is owed a refund and for no_monetary_action.
     * previous_attributes.buyer_payment_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_payment_amount_money.anyOf[2]
     * (Value): null. previous_attributes.buyer_refund_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Value returned to the buyer: returned_total_money
     * plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that
     * balance is zero or more. For store_credit, the value issued on new gift cards. Zero for
     * no_monetary_action. previous_attributes.buyer_refund_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_refund_amount_money.anyOf[2]
     * (Value): null. previous_attributes.canceled_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.canceled_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who canceled the resolution. Merchant reads only.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the resolution was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.confirmed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.confirmed_at.anyOf[2]
     * (Value): null. previous_attributes.confirmed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who confirmed the resolution.
     * previous_attributes.confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.confirmed_by.anyOf[2] (Value): null.
     * previous_attributes.corrects_return_resolution_id (Optional): string or null. ID of the
     * settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. previous_attributes.corrects_return_resolution_id.anyOf[1] (Value): string. ID
     * of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.corrects_return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.created_by (Optional): {@link ReturnActorPreviousAttributes} or
     * null. Who created the resolution. previous_attributes.created_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.created_by.anyOf[2] (Value): null.
     * previous_attributes.credit_adjustment_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Credits added by the resolution's adjustments.
     * previous_attributes.credit_adjustment_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.credit_adjustment_money.anyOf[2] (Value):
     * null. previous_attributes.deduction_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Deductions taken by the resolution's adjustments, such as a restocking fee.
     * previous_attributes.deduction_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.deduction_money.anyOf[2] (Value): null.
     * previous_attributes.execution_blockers (Optional): Array of {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution is
     * still waiting for. Empty when nothing is. previous_attributes.execution_blockers.anyOf[1]
     * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
     * confirmed resolution is still waiting for. Empty when nothing is.
     * previous_attributes.execution_blockers.anyOf[1][] (Value): {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes}.
     * previous_attributes.execution_blockers.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[1] (Value): string. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[2] (Value): null. previous_attributes.failure_message
     * (Optional): string or null. Explanation of a failed Return resolution, when available.
     * previous_attributes.failure_message.anyOf[1] (Value): string. Explanation of a failed Return
     * resolution, when available. previous_attributes.failure_message.anyOf[2] (Value): null.
     * previous_attributes.fulfilled_at (Optional): string or null. When the resolution completed.
     * previous_attributes.fulfilled_at.anyOf[1] (Value): string. When the resolution completed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.fulfilled_at.anyOf[2] (Value): null.
     * previous_attributes.gift_card_refund_destination (Optional): string or null. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Value enum: "original", "new_gift_card".
     * previous_attributes.gift_card_refund_destination.anyOf[1] (Value): string. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card". previous_attributes.gift_card_refund_destination.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1][]
     * (Value): {@link ReturnResolutionLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents that collect the buyer's balance for this resolution, in the order Flint
     * linked them. Empty until a payment exists. previous_attributes.payment_intent_ids.anyOf[1]
     * (Value): Array of string. IDs of the payment intents that collect the buyer's balance for
     * this resolution, in the order Flint linked them. Empty until a payment exists.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1][] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.pricing_basis (Optional): string or null. How replacement lines are
     * priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". previous_attributes.pricing_basis.anyOf[1]
     * (Value): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price".
     * previous_attributes.pricing_basis.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the Refunds that pay the buyer for this
     * resolution, in the order Flint linked them. Empty until a Refund exists.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that
     * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
     * exists. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refunds (Optional): Array of {@link RefundPreviousAttributes} or null.
     * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
     * order. previous_attributes.refunds.anyOf[1] (Value): Array of {@link
     * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. previous_attributes.refunds.anyOf[1][] (Value): {@link
     * RefundPreviousAttributes}. previous_attributes.refunds.anyOf[2] (Value): null.
     * previous_attributes.replacement_line_items (Optional): Array of {@link
     * ReturnReplacementLineItemPreviousAttributes} or null. Merchandise the buyer receives
     * instead, for an exchange or replacement. previous_attributes.replacement_line_items.anyOf[1]
     * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer
     * receives instead, for an exchange or replacement.
     * previous_attributes.replacement_line_items.anyOf[1][] (Value): {@link
     * ReturnReplacementLineItemPreviousAttributes}.
     * previous_attributes.replacement_line_items.anyOf[2] (Value): null.
     * previous_attributes.replacement_order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `replacement_order`; `null` when expanded and there is no related order.
     * previous_attributes.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.replacement_order.anyOf[2]
     * (Value): null. previous_attributes.replacement_order_id (Optional): string or null. ID of
     * the replacement Order Flint created for an exchange or replacement. Absent until it exists.
     * previous_attributes.replacement_order_id.anyOf[1] (Value): string. ID of the replacement
     * Order Flint created for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.replacement_order_id.anyOf[2] (Value):
     * null. previous_attributes.replacement_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Total of the replacement items the buyer receives.
     * previous_attributes.replacement_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.replacement_total_money.anyOf[2] (Value):
     * null. previous_attributes.resolution_type (Optional): string or null. What the buyer gets
     * for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". previous_attributes.resolution_type.anyOf[1] (Value):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     * previous_attributes.resolution_type.anyOf[2] (Value): null. previous_attributes.return_id
     * (Optional): string or null. ID of the Return the resolution belongs to.
     * previous_attributes.return_id.anyOf[1] (Value): string. ID of the Return the resolution
     * belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_policy_id
     * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
     * return_policy_revision_id is null. previous_attributes.return_policy_id.anyOf[1] (Value):
     * string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
     * previous_attributes.return_policy_id.anyOf[2] (Value): null.
     * previous_attributes.return_policy_revision_id (Optional): string or null. ID of the return
     * policy revision that judged the lines. Set only when Flint created the resolution itself and
     * no merchant decision overrode the policy. Absent otherwise, including on resolutions you
     * create and on corrections. previous_attributes.return_policy_revision_id.anyOf[1] (Value):
     * string. ID of the return policy revision that judged the lines. Set only when Flint created
     * the resolution itself and no merchant decision overrode the policy. Absent otherwise,
     * including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". previous_attributes.return_policy_revision_id.anyOf[2]
     * (Value): null. previous_attributes.return_resolution_id (Optional): string or null. Unique
     * identifier for this return resolution, prefixed `retres_`.
     * previous_attributes.return_resolution_id.anyOf[1] (Value): string. Unique identifier for
     * this return resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.returned_total_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Value of the returned units this resolution covers.
     * previous_attributes.returned_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.returned_total_money.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. completed means the buyer has
     * the value: every linked Refund succeeded, any balance was collected, and any replacement
     * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
     * "pending", "requires_action", "completed", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. completed means the buyer has the
     * value: every linked Refund succeeded, any balance was collected, and any replacement Order's
     * fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending",
     * "requires_action", "completed", "failed", "canceled". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Actions that can succeed now. checkout_session is listed while a replacement Order needs a
     * buyer payment, including when the parent Return is not open. Other actions require an open
     * Return. A failed resolution lists retry while it has a failed effect and its failure code
     * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. []
     * enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
     * including when the parent Return is not open. Other actions require an open Return. A failed
     * resolution lists retry while it has a failed effect and its failure code permits retry. It
     * lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value): null.
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
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
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
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
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
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
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
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
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
         * state, including synthetic test events. action_reason (Optional): string or null. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[1] (Value): string. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[2] (Value): null.
         * action_required_by (Optional): string or null. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[1] (Value): string. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[2] (Value): null. adjustments (Optional): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1] (Value): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1][] (Value): {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. adjustments.anyOf[2] (Value): null.
         * buyer_payment_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. buyer_payment_amount_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. buyer_payment_amount_money.anyOf[2] (Value): null.
         * buyer_refund_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action.
         * buyer_refund_amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * buyer_refund_amount_money.anyOf[2] (Value): null. canceled_at (Optional): string or
         * null. RFC3339 timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null.
         * canceled_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the
         * resolution. Merchant reads only. canceled_by.anyOf[1] (Value): {@link
         * ReturnActorPreviousAttributes}. canceled_by.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null. Why the resolution was canceled. Value enum:
         * "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
         * "other". cancellation_reason.anyOf[1] (Value): string. Why the resolution was canceled.
         * Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason.anyOf[2] (Value): null.
         * cancellation_reason_message (Optional): string or null. Detail sent with the
         * cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value): string.
         * Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. confirmed_at (Optional): string or
         * null. RFC3339 timestamp. confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". confirmed_at.anyOf[2] (Value): null.
         * confirmed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who confirmed
         * the resolution. confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * confirmed_by.anyOf[2] (Value): null. corrects_return_resolution_id (Optional): string or
         * null. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. corrects_return_resolution_id.anyOf[1] (Value):
         * string. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * corrects_return_resolution_id.anyOf[2] (Value): null. created_at (Optional): string or
         * null. RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * created_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who created the
         * resolution. created_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * created_by.anyOf[2] (Value): null. credit_adjustment_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credits added by the resolution's adjustments.
         * credit_adjustment_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * credit_adjustment_money.anyOf[2] (Value): null. deduction_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Deductions taken by the resolution's adjustments,
         * such as a restocking fee. deduction_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. deduction_money.anyOf[2] (Value): null.
         * execution_blockers (Optional): Array of {@link
         * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution
         * is still waiting for. Empty when nothing is. execution_blockers.anyOf[1] (Value): Array
         * of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a confirmed
         * resolution is still waiting for. Empty when nothing is. execution_blockers.anyOf[1][]
         * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}.
         * execution_blockers.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. failure_code (Optional): string or null.
         * Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[1] (Value): string. Reason code for a
         * failed Return resolution, when available. refund_payment_balance_unavailable means the
         * original payments cannot fund the resolution; cancel it, then add an explicit deduction
         * or settle the shortfall outside Flint. refund_line_value_unavailable means another
         * refund already returned part of an order line, so retrying cannot succeed; cancel the
         * resolution and resolve the line for fewer units or without a refund.
         * replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled,
         * so it won't be sent. gift_card_refund_destination_required means the original gift card
         * cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[2] (Value): null. failure_message
         * (Optional): string or null. Explanation of a failed Return resolution, when available.
         * failure_message.anyOf[1] (Value): string. Explanation of a failed Return resolution,
         * when available. failure_message.anyOf[2] (Value): null. fulfilled_at (Optional): string
         * or null. When the resolution completed. fulfilled_at.anyOf[1] (Value): string. When the
         * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * fulfilled_at.anyOf[2] (Value): null. gift_card_refund_destination (Optional): string or
         * null. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt. Value
         * enum: "original", "new_gift_card". gift_card_refund_destination.anyOf[1] (Value):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card".
         * gift_card_refund_destination.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities
         * the resolution covers. Absent on a correction. line_items.anyOf[1] (Value): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
         * resolution covers. Absent on a correction. line_items.anyOf[1][] (Value): {@link
         * ReturnResolutionLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. payment_intent_ids (Optional): Array of
         * string or null. IDs of the payment intents that collect the buyer's balance for this
         * resolution, in the order Flint linked them. Empty until a payment exists.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in
         * the same order. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
         * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
         * order. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * pricing_basis (Optional): string or null. How replacement lines are priced. Present on
         * exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". pricing_basis.anyOf[1] (Value): string. How replacement lines
         * are priced. Present on exchanges and replacements. Value enum: "original_price",
         * "current_price", "merchant_agreed_price". pricing_basis.anyOf[2] (Value): null.
         * refund_ids (Optional): Array of string or null. IDs of the Refunds that pay the buyer
         * for this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that pay the buyer for
         * this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refunds (Optional): Array of {@link
         * RefundPreviousAttributes} or null. Present only when `expand` includes `refunds`. The
         * refunds in `refund_ids`, in the same order. refunds.anyOf[1] (Value): Array of {@link
         * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
         * `refund_ids`, in the same order. refunds.anyOf[1][] (Value): {@link
         * RefundPreviousAttributes}. refunds.anyOf[2] (Value): null. replacement_line_items
         * (Optional): Array of {@link ReturnReplacementLineItemPreviousAttributes} or null.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items.anyOf[1] (Value): Array of {@link
         * ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer receives instead,
         * for an exchange or replacement. replacement_line_items.anyOf[1][] (Value): {@link
         * ReturnReplacementLineItemPreviousAttributes}. replacement_line_items.anyOf[2] (Value):
         * null. replacement_order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
         * null. Present only when `expand` includes `replacement_order`; `null` when expanded and
         * there is no related order. replacement_order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string or null. ID of the replacement Order Flint
         * created for an exchange or replacement. Absent until it exists.
         * replacement_order_id.anyOf[1] (Value): string. ID of the replacement Order Flint created
         * for an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_order_id.anyOf[2] (Value): null.
         * replacement_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. Total
         * of the replacement items the buyer receives. replacement_total_money.anyOf[1] (Value):
         * {@link MoneyValuePreviousAttributes}. replacement_total_money.anyOf[2] (Value): null.
         * resolution_type (Optional): string or null. What the buyer gets for the approved
         * quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
         * "no_monetary_action", "correction". resolution_type.anyOf[1] (Value): string. What the
         * buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement",
         * "store_credit", "no_monetary_action", "correction". resolution_type.anyOf[2] (Value):
         * null. return_id (Optional): string or null. ID of the Return the resolution belongs to.
         * return_id.anyOf[1] (Value): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_policy_id
         * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
         * return_policy_revision_id is null. return_policy_id.anyOf[1] (Value): string. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_id.anyOf[2] (Value): null.
         * return_policy_revision_id (Optional): string or null. ID of the return policy revision
         * that judged the lines. Set only when Flint created the resolution itself and no merchant
         * decision overrode the policy. Absent otherwise, including on resolutions you create and
         * on corrections. return_policy_revision_id.anyOf[1] (Value): string. ID of the return
         * policy revision that judged the lines. Set only when Flint created the resolution itself
         * and no merchant decision overrode the policy. Absent otherwise, including on resolutions
         * you create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
         * return_policy_revision_id.anyOf[2] (Value): null. return_resolution_id (Optional):
         * string or null. Unique identifier for this return resolution, prefixed `retres_`.
         * return_resolution_id.anyOf[1] (Value): string. Unique identifier for this return
         * resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * return_resolution_id.anyOf[2] (Value): null. returned_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Value of the returned units this resolution
         * covers. returned_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * returned_total_money.anyOf[2] (Value): null. status (Optional): string or null.
         * completed means the buyer has the value: every linked Refund succeeded, any balance was
         * collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". status.anyOf[1] (Value): string. completed means the buyer has the
         * value: every linked Refund succeeded, any balance was collected, and any replacement
         * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
         * "pending", "requires_action", "completed", "failed", "canceled". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[1]
         * (Value): Array of string. Actions that can succeed now. checkout_session is listed while
         * a replacement Order needs a buyer payment, including when the parent Return is not open.
         * Other actions require an open Return. A failed resolution lists retry while it has a
         * failed effect and its failure code permits retry. It lists cancel when it never created
         * a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
         * "release", "retry". supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
         * "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a
             * requires_action resolution is waiting. buyer_payment means the buyer must pay the
             * exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[2] (Value): null.
             */
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant". anyOf[1] (Value): string. Who has to act while the resolution's
             * status is `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value):
             * null.
             */
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            /**
             * Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of
             * {@link ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to
             * the resolution's amounts. anyOf[1][] (Value): {@link
             * ReturnResolutionAdjustmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "confirmed_at"?: ((string) | (null));
            /**
             * Who confirmed the resolution. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. anyOf[1] (Value): string. ID of the settled
             * resolution this correction adjusts. Present only when `resolution_type` is
             * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "corrects_return_resolution_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Who created the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Credits added by the resolution's adjustments. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
             * confirmed resolution is still waiting for. Empty when nothing is. anyOf[1][]
             * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed
             * Return resolution, when available. refund_payment_balance_unavailable means the
             * original payments cannot fund the resolution; cancel it, then add an explicit
             * deduction or settle the shortfall outside Flint. refund_line_value_unavailable means
             * another refund already returned part of an order line, so retrying cannot succeed;
             * cancel the resolution and resolve the line for fewer units or without a refund.
             * replacement_fulfillment_canceled means the replacement Order's fulfillment was
             * canceled, so it won't be sent. gift_card_refund_destination_required means the
             * original gift card cannot accept the refund; retry with gift_card_refund_destination
             * set to new_gift_card. store_credit_unavailable means the original payment cannot
             * fund store credit; cancel the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[2] (Value): null.
             */
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            /**
             * Explanation of a failed Return resolution, when available. anyOf[1] (Value): string.
             * Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * When the resolution completed. anyOf[1] (Value): string. When the resolution
             * completed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "fulfilled_at"?: ((string) | (null));
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where
             * the gift-card-paid portion is refunded. original credits the original gift card;
             * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
             * except a correction of store_credit. Omit for store_credit, replacement, and
             * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
             * gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card". anyOf[2]
             * (Value): null.
             */
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. anyOf[1]
             * (Value): Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines
             * and quantities the resolution covers. Absent on a correction. anyOf[1][] (Value):
             * {@link ReturnResolutionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array
             * of string. IDs of the payment intents that collect the buyer's balance for this
             * resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of
             * {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand`
             * includes `payment_intents`. Summaries of the payment intents in
             * `payment_intent_ids`, in the same order. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value):
             * string. How replacement lines are priced. Present on exchanges and replacements.
             * Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[2]
             * (Value): null.
             */
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the
             * Refunds that pay the buyer for this resolution, in the order Flint linked them.
             * Empty until a Refund exists. anyOf[1][] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. anyOf[1] (Value): Array of {@link RefundPreviousAttributes}. Present
             * only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
             * order. anyOf[1][] (Value): {@link RefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1]
             * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise
             * the buyer receives instead, for an exchange or replacement. anyOf[1][] (Value):
             * {@link ReturnReplacementLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. anyOf[1] (Value): string. ID of the replacement Order Flint created
             * for an exchange or replacement. Absent until it exists. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "replacement_order_id"?: ((string) | (null));
            /**
             * Total of the replacement items the buyer receives. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value):
             * string. What the buyer gets for the approved quantity. Value enum: "refund",
             * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
             * anyOf[2] (Value): null.
             */
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            /**
             * ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the
             * Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             * anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null`
             * when return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             * anyOf[2] (Value): null.
             */
            "return_policy_id"?: ((string) | (null));
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. anyOf[1] (Value):
             * string. ID of the return policy revision that judged the lines. Set only when Flint
             * created the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
             */
            "return_policy_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value):
             * string. Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * Value of the returned units this resolution covers. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled". anyOf[1] (Value): string. completed means the buyer has the
             * value: every linked Refund succeeded, any balance was collected, and any replacement
             * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
             * "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value):
             * null.
             */
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[1] (Value): Array of string. Actions that can succeed now.
             * checkout_session is listed while a replacement Order needs a buyer payment,
             * including when the parent Return is not open. Other actions require an open Return.
             * A failed resolution lists retry while it has a failed effect and its failure code
             * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or
             * Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry".
             * anyOf[1][] (Value): string. Value enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
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
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. previous_attributes (Optional): object and {@link
     * ReturnResolutionPreviousAttributes}. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.action_reason (Optional): string or null. Why a requires_action
     * resolution is waiting. buyer_payment means the buyer must pay the exchange balance;
     * manual_release means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". previous_attributes.action_reason.anyOf[1] (Value): string. Why a
     * requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange
     * balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release". previous_attributes.action_reason.anyOf[2] (Value): null.
     * previous_attributes.action_required_by (Optional): string or null. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[1] (Value): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[2] (Value): null.
     * previous_attributes.adjustments (Optional): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
     * resolution's amounts. previous_attributes.adjustments.anyOf[1] (Value): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the resolution's
     * amounts. previous_attributes.adjustments.anyOf[1][] (Value): {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. previous_attributes.adjustments.anyOf[2]
     * (Value): null. previous_attributes.buyer_payment_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Amount the buyer owes when deduction_money and
     * replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when
     * the buyer is owed a refund and for no_monetary_action.
     * previous_attributes.buyer_payment_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_payment_amount_money.anyOf[2]
     * (Value): null. previous_attributes.buyer_refund_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Value returned to the buyer: returned_total_money
     * plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that
     * balance is zero or more. For store_credit, the value issued on new gift cards. Zero for
     * no_monetary_action. previous_attributes.buyer_refund_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_refund_amount_money.anyOf[2]
     * (Value): null. previous_attributes.canceled_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.canceled_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who canceled the resolution. Merchant reads only.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the resolution was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.confirmed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.confirmed_at.anyOf[2]
     * (Value): null. previous_attributes.confirmed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who confirmed the resolution.
     * previous_attributes.confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.confirmed_by.anyOf[2] (Value): null.
     * previous_attributes.corrects_return_resolution_id (Optional): string or null. ID of the
     * settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. previous_attributes.corrects_return_resolution_id.anyOf[1] (Value): string. ID
     * of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.corrects_return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.created_by (Optional): {@link ReturnActorPreviousAttributes} or
     * null. Who created the resolution. previous_attributes.created_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.created_by.anyOf[2] (Value): null.
     * previous_attributes.credit_adjustment_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Credits added by the resolution's adjustments.
     * previous_attributes.credit_adjustment_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.credit_adjustment_money.anyOf[2] (Value):
     * null. previous_attributes.deduction_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Deductions taken by the resolution's adjustments, such as a restocking fee.
     * previous_attributes.deduction_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.deduction_money.anyOf[2] (Value): null.
     * previous_attributes.execution_blockers (Optional): Array of {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution is
     * still waiting for. Empty when nothing is. previous_attributes.execution_blockers.anyOf[1]
     * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
     * confirmed resolution is still waiting for. Empty when nothing is.
     * previous_attributes.execution_blockers.anyOf[1][] (Value): {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes}.
     * previous_attributes.execution_blockers.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[1] (Value): string. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[2] (Value): null. previous_attributes.failure_message
     * (Optional): string or null. Explanation of a failed Return resolution, when available.
     * previous_attributes.failure_message.anyOf[1] (Value): string. Explanation of a failed Return
     * resolution, when available. previous_attributes.failure_message.anyOf[2] (Value): null.
     * previous_attributes.fulfilled_at (Optional): string or null. When the resolution completed.
     * previous_attributes.fulfilled_at.anyOf[1] (Value): string. When the resolution completed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.fulfilled_at.anyOf[2] (Value): null.
     * previous_attributes.gift_card_refund_destination (Optional): string or null. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Value enum: "original", "new_gift_card".
     * previous_attributes.gift_card_refund_destination.anyOf[1] (Value): string. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card". previous_attributes.gift_card_refund_destination.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1][]
     * (Value): {@link ReturnResolutionLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents that collect the buyer's balance for this resolution, in the order Flint
     * linked them. Empty until a payment exists. previous_attributes.payment_intent_ids.anyOf[1]
     * (Value): Array of string. IDs of the payment intents that collect the buyer's balance for
     * this resolution, in the order Flint linked them. Empty until a payment exists.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1][] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.pricing_basis (Optional): string or null. How replacement lines are
     * priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". previous_attributes.pricing_basis.anyOf[1]
     * (Value): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price".
     * previous_attributes.pricing_basis.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the Refunds that pay the buyer for this
     * resolution, in the order Flint linked them. Empty until a Refund exists.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that
     * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
     * exists. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refunds (Optional): Array of {@link RefundPreviousAttributes} or null.
     * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
     * order. previous_attributes.refunds.anyOf[1] (Value): Array of {@link
     * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. previous_attributes.refunds.anyOf[1][] (Value): {@link
     * RefundPreviousAttributes}. previous_attributes.refunds.anyOf[2] (Value): null.
     * previous_attributes.replacement_line_items (Optional): Array of {@link
     * ReturnReplacementLineItemPreviousAttributes} or null. Merchandise the buyer receives
     * instead, for an exchange or replacement. previous_attributes.replacement_line_items.anyOf[1]
     * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer
     * receives instead, for an exchange or replacement.
     * previous_attributes.replacement_line_items.anyOf[1][] (Value): {@link
     * ReturnReplacementLineItemPreviousAttributes}.
     * previous_attributes.replacement_line_items.anyOf[2] (Value): null.
     * previous_attributes.replacement_order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `replacement_order`; `null` when expanded and there is no related order.
     * previous_attributes.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.replacement_order.anyOf[2]
     * (Value): null. previous_attributes.replacement_order_id (Optional): string or null. ID of
     * the replacement Order Flint created for an exchange or replacement. Absent until it exists.
     * previous_attributes.replacement_order_id.anyOf[1] (Value): string. ID of the replacement
     * Order Flint created for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.replacement_order_id.anyOf[2] (Value):
     * null. previous_attributes.replacement_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Total of the replacement items the buyer receives.
     * previous_attributes.replacement_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.replacement_total_money.anyOf[2] (Value):
     * null. previous_attributes.resolution_type (Optional): string or null. What the buyer gets
     * for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". previous_attributes.resolution_type.anyOf[1] (Value):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     * previous_attributes.resolution_type.anyOf[2] (Value): null. previous_attributes.return_id
     * (Optional): string or null. ID of the Return the resolution belongs to.
     * previous_attributes.return_id.anyOf[1] (Value): string. ID of the Return the resolution
     * belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_policy_id
     * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
     * return_policy_revision_id is null. previous_attributes.return_policy_id.anyOf[1] (Value):
     * string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
     * previous_attributes.return_policy_id.anyOf[2] (Value): null.
     * previous_attributes.return_policy_revision_id (Optional): string or null. ID of the return
     * policy revision that judged the lines. Set only when Flint created the resolution itself and
     * no merchant decision overrode the policy. Absent otherwise, including on resolutions you
     * create and on corrections. previous_attributes.return_policy_revision_id.anyOf[1] (Value):
     * string. ID of the return policy revision that judged the lines. Set only when Flint created
     * the resolution itself and no merchant decision overrode the policy. Absent otherwise,
     * including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". previous_attributes.return_policy_revision_id.anyOf[2]
     * (Value): null. previous_attributes.return_resolution_id (Optional): string or null. Unique
     * identifier for this return resolution, prefixed `retres_`.
     * previous_attributes.return_resolution_id.anyOf[1] (Value): string. Unique identifier for
     * this return resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.returned_total_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Value of the returned units this resolution covers.
     * previous_attributes.returned_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.returned_total_money.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. completed means the buyer has
     * the value: every linked Refund succeeded, any balance was collected, and any replacement
     * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
     * "pending", "requires_action", "completed", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. completed means the buyer has the
     * value: every linked Refund succeeded, any balance was collected, and any replacement Order's
     * fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending",
     * "requires_action", "completed", "failed", "canceled". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Actions that can succeed now. checkout_session is listed while a replacement Order needs a
     * buyer payment, including when the parent Return is not open. Other actions require an open
     * Return. A failed resolution lists retry while it has a failed effect and its failure code
     * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. []
     * enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
     * including when the parent Return is not open. Other actions require an open Return. A failed
     * resolution lists retry while it has a failed effect and its failure code permits retry. It
     * lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value): null.
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
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
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
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
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
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
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
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
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
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
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
         * state, including synthetic test events. action_reason (Optional): string or null. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[1] (Value): string. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[2] (Value): null.
         * action_required_by (Optional): string or null. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[1] (Value): string. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[2] (Value): null. adjustments (Optional): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1] (Value): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1][] (Value): {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. adjustments.anyOf[2] (Value): null.
         * buyer_payment_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. buyer_payment_amount_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. buyer_payment_amount_money.anyOf[2] (Value): null.
         * buyer_refund_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action.
         * buyer_refund_amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * buyer_refund_amount_money.anyOf[2] (Value): null. canceled_at (Optional): string or
         * null. RFC3339 timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null.
         * canceled_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the
         * resolution. Merchant reads only. canceled_by.anyOf[1] (Value): {@link
         * ReturnActorPreviousAttributes}. canceled_by.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null. Why the resolution was canceled. Value enum:
         * "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
         * "other". cancellation_reason.anyOf[1] (Value): string. Why the resolution was canceled.
         * Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason.anyOf[2] (Value): null.
         * cancellation_reason_message (Optional): string or null. Detail sent with the
         * cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value): string.
         * Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. confirmed_at (Optional): string or
         * null. RFC3339 timestamp. confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". confirmed_at.anyOf[2] (Value): null.
         * confirmed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who confirmed
         * the resolution. confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * confirmed_by.anyOf[2] (Value): null. corrects_return_resolution_id (Optional): string or
         * null. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. corrects_return_resolution_id.anyOf[1] (Value):
         * string. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * corrects_return_resolution_id.anyOf[2] (Value): null. created_at (Optional): string or
         * null. RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * created_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who created the
         * resolution. created_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * created_by.anyOf[2] (Value): null. credit_adjustment_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credits added by the resolution's adjustments.
         * credit_adjustment_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * credit_adjustment_money.anyOf[2] (Value): null. deduction_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Deductions taken by the resolution's adjustments,
         * such as a restocking fee. deduction_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. deduction_money.anyOf[2] (Value): null.
         * execution_blockers (Optional): Array of {@link
         * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution
         * is still waiting for. Empty when nothing is. execution_blockers.anyOf[1] (Value): Array
         * of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a confirmed
         * resolution is still waiting for. Empty when nothing is. execution_blockers.anyOf[1][]
         * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}.
         * execution_blockers.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. failure_code (Optional): string or null.
         * Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[1] (Value): string. Reason code for a
         * failed Return resolution, when available. refund_payment_balance_unavailable means the
         * original payments cannot fund the resolution; cancel it, then add an explicit deduction
         * or settle the shortfall outside Flint. refund_line_value_unavailable means another
         * refund already returned part of an order line, so retrying cannot succeed; cancel the
         * resolution and resolve the line for fewer units or without a refund.
         * replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled,
         * so it won't be sent. gift_card_refund_destination_required means the original gift card
         * cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[2] (Value): null. failure_message
         * (Optional): string or null. Explanation of a failed Return resolution, when available.
         * failure_message.anyOf[1] (Value): string. Explanation of a failed Return resolution,
         * when available. failure_message.anyOf[2] (Value): null. fulfilled_at (Optional): string
         * or null. When the resolution completed. fulfilled_at.anyOf[1] (Value): string. When the
         * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * fulfilled_at.anyOf[2] (Value): null. gift_card_refund_destination (Optional): string or
         * null. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt. Value
         * enum: "original", "new_gift_card". gift_card_refund_destination.anyOf[1] (Value):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card".
         * gift_card_refund_destination.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities
         * the resolution covers. Absent on a correction. line_items.anyOf[1] (Value): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
         * resolution covers. Absent on a correction. line_items.anyOf[1][] (Value): {@link
         * ReturnResolutionLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. payment_intent_ids (Optional): Array of
         * string or null. IDs of the payment intents that collect the buyer's balance for this
         * resolution, in the order Flint linked them. Empty until a payment exists.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in
         * the same order. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
         * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
         * order. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * pricing_basis (Optional): string or null. How replacement lines are priced. Present on
         * exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". pricing_basis.anyOf[1] (Value): string. How replacement lines
         * are priced. Present on exchanges and replacements. Value enum: "original_price",
         * "current_price", "merchant_agreed_price". pricing_basis.anyOf[2] (Value): null.
         * refund_ids (Optional): Array of string or null. IDs of the Refunds that pay the buyer
         * for this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that pay the buyer for
         * this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refunds (Optional): Array of {@link
         * RefundPreviousAttributes} or null. Present only when `expand` includes `refunds`. The
         * refunds in `refund_ids`, in the same order. refunds.anyOf[1] (Value): Array of {@link
         * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
         * `refund_ids`, in the same order. refunds.anyOf[1][] (Value): {@link
         * RefundPreviousAttributes}. refunds.anyOf[2] (Value): null. replacement_line_items
         * (Optional): Array of {@link ReturnReplacementLineItemPreviousAttributes} or null.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items.anyOf[1] (Value): Array of {@link
         * ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer receives instead,
         * for an exchange or replacement. replacement_line_items.anyOf[1][] (Value): {@link
         * ReturnReplacementLineItemPreviousAttributes}. replacement_line_items.anyOf[2] (Value):
         * null. replacement_order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
         * null. Present only when `expand` includes `replacement_order`; `null` when expanded and
         * there is no related order. replacement_order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string or null. ID of the replacement Order Flint
         * created for an exchange or replacement. Absent until it exists.
         * replacement_order_id.anyOf[1] (Value): string. ID of the replacement Order Flint created
         * for an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_order_id.anyOf[2] (Value): null.
         * replacement_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. Total
         * of the replacement items the buyer receives. replacement_total_money.anyOf[1] (Value):
         * {@link MoneyValuePreviousAttributes}. replacement_total_money.anyOf[2] (Value): null.
         * resolution_type (Optional): string or null. What the buyer gets for the approved
         * quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
         * "no_monetary_action", "correction". resolution_type.anyOf[1] (Value): string. What the
         * buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement",
         * "store_credit", "no_monetary_action", "correction". resolution_type.anyOf[2] (Value):
         * null. return_id (Optional): string or null. ID of the Return the resolution belongs to.
         * return_id.anyOf[1] (Value): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_policy_id
         * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
         * return_policy_revision_id is null. return_policy_id.anyOf[1] (Value): string. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_id.anyOf[2] (Value): null.
         * return_policy_revision_id (Optional): string or null. ID of the return policy revision
         * that judged the lines. Set only when Flint created the resolution itself and no merchant
         * decision overrode the policy. Absent otherwise, including on resolutions you create and
         * on corrections. return_policy_revision_id.anyOf[1] (Value): string. ID of the return
         * policy revision that judged the lines. Set only when Flint created the resolution itself
         * and no merchant decision overrode the policy. Absent otherwise, including on resolutions
         * you create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
         * return_policy_revision_id.anyOf[2] (Value): null. return_resolution_id (Optional):
         * string or null. Unique identifier for this return resolution, prefixed `retres_`.
         * return_resolution_id.anyOf[1] (Value): string. Unique identifier for this return
         * resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * return_resolution_id.anyOf[2] (Value): null. returned_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Value of the returned units this resolution
         * covers. returned_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * returned_total_money.anyOf[2] (Value): null. status (Optional): string or null.
         * completed means the buyer has the value: every linked Refund succeeded, any balance was
         * collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". status.anyOf[1] (Value): string. completed means the buyer has the
         * value: every linked Refund succeeded, any balance was collected, and any replacement
         * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
         * "pending", "requires_action", "completed", "failed", "canceled". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[1]
         * (Value): Array of string. Actions that can succeed now. checkout_session is listed while
         * a replacement Order needs a buyer payment, including when the parent Return is not open.
         * Other actions require an open Return. A failed resolution lists retry while it has a
         * failed effect and its failure code permits retry. It lists cancel when it never created
         * a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
         * "release", "retry". supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
         * "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a
             * requires_action resolution is waiting. buyer_payment means the buyer must pay the
             * exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[2] (Value): null.
             */
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant". anyOf[1] (Value): string. Who has to act while the resolution's
             * status is `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value):
             * null.
             */
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            /**
             * Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of
             * {@link ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to
             * the resolution's amounts. anyOf[1][] (Value): {@link
             * ReturnResolutionAdjustmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "confirmed_at"?: ((string) | (null));
            /**
             * Who confirmed the resolution. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. anyOf[1] (Value): string. ID of the settled
             * resolution this correction adjusts. Present only when `resolution_type` is
             * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "corrects_return_resolution_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Who created the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Credits added by the resolution's adjustments. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
             * confirmed resolution is still waiting for. Empty when nothing is. anyOf[1][]
             * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed
             * Return resolution, when available. refund_payment_balance_unavailable means the
             * original payments cannot fund the resolution; cancel it, then add an explicit
             * deduction or settle the shortfall outside Flint. refund_line_value_unavailable means
             * another refund already returned part of an order line, so retrying cannot succeed;
             * cancel the resolution and resolve the line for fewer units or without a refund.
             * replacement_fulfillment_canceled means the replacement Order's fulfillment was
             * canceled, so it won't be sent. gift_card_refund_destination_required means the
             * original gift card cannot accept the refund; retry with gift_card_refund_destination
             * set to new_gift_card. store_credit_unavailable means the original payment cannot
             * fund store credit; cancel the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[2] (Value): null.
             */
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            /**
             * Explanation of a failed Return resolution, when available. anyOf[1] (Value): string.
             * Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * When the resolution completed. anyOf[1] (Value): string. When the resolution
             * completed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "fulfilled_at"?: ((string) | (null));
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where
             * the gift-card-paid portion is refunded. original credits the original gift card;
             * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
             * except a correction of store_credit. Omit for store_credit, replacement, and
             * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
             * gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card". anyOf[2]
             * (Value): null.
             */
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. anyOf[1]
             * (Value): Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines
             * and quantities the resolution covers. Absent on a correction. anyOf[1][] (Value):
             * {@link ReturnResolutionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array
             * of string. IDs of the payment intents that collect the buyer's balance for this
             * resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of
             * {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand`
             * includes `payment_intents`. Summaries of the payment intents in
             * `payment_intent_ids`, in the same order. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value):
             * string. How replacement lines are priced. Present on exchanges and replacements.
             * Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[2]
             * (Value): null.
             */
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the
             * Refunds that pay the buyer for this resolution, in the order Flint linked them.
             * Empty until a Refund exists. anyOf[1][] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. anyOf[1] (Value): Array of {@link RefundPreviousAttributes}. Present
             * only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
             * order. anyOf[1][] (Value): {@link RefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1]
             * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise
             * the buyer receives instead, for an exchange or replacement. anyOf[1][] (Value):
             * {@link ReturnReplacementLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. anyOf[1] (Value): string. ID of the replacement Order Flint created
             * for an exchange or replacement. Absent until it exists. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "replacement_order_id"?: ((string) | (null));
            /**
             * Total of the replacement items the buyer receives. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value):
             * string. What the buyer gets for the approved quantity. Value enum: "refund",
             * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
             * anyOf[2] (Value): null.
             */
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            /**
             * ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the
             * Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             * anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null`
             * when return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             * anyOf[2] (Value): null.
             */
            "return_policy_id"?: ((string) | (null));
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. anyOf[1] (Value):
             * string. ID of the return policy revision that judged the lines. Set only when Flint
             * created the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
             */
            "return_policy_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value):
             * string. Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * Value of the returned units this resolution covers. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled". anyOf[1] (Value): string. completed means the buyer has the
             * value: every linked Refund succeeded, any balance was collected, and any replacement
             * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
             * "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value):
             * null.
             */
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[1] (Value): Array of string. Actions that can succeed now.
             * checkout_session is listed while a replacement Order needs a buyer payment,
             * including when the parent Return is not open. Other actions require an open Return.
             * A failed resolution lists retry while it has a failed effect and its failure code
             * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or
             * Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry".
             * anyOf[1][] (Value): string. Value enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
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
export type ReturnResolutionsCreateParams = (CreateReturnResolutionRequestInput)
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
     * enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". Value
     * enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "proposed", "pending", "requires_action",
     * "completed", "failed", "canceled". anyOf[1][] (Value): string. Value enum: "proposed",
     * "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value): string.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     */
    "status"?: InputValue<("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled")
        | readonly ("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled")[]>;
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
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer routes return only keys
     * from the buyer's namespace.
     */
    "idempotency_key": string | null;
    /**
     * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
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
     * and its unsettled corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_completed"
        | "requires_action"
        | "completed"
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
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists
     * `cancel` only while no units have been received, inspected, dispositioned, or resolved, and
     * it has no current receipts or inspections, non-canceled dispositions or resolutions, or
     * non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen". [] (Value):
     * string. Value enum: "cancel", "complete", "decide", "process", "reopen".
     */
    "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
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
     * Percentage points of the returned units' subtotal, from 1 through 100 with at most four
     * decimal places on every revision. `10` means 10%. Format: double. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
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
     * Percentage points of the returned units' subtotal, from 1 through 100 with at most four
     * decimal places on every revision. `10` means 10%. Format: double. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
};
/**
 * A Return line and the quantity to place in a return shipment or package. The enclosing Return or
 * shipment determines its parent.
 */
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
export type ReturnSourceSystemPreviousAttributes = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * anyOf[1] (Value): string. Your source system's identifier. Required when source_system_type
     * is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets
     * in this field. minLength: 1. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value):
     * null.
     */
    "external_source_id"?: ((string) | (null));
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other", "flint". anyOf[1] (Value): string. Source of the event: manual for a
     * manual entry, pos for a point of sale, wms for a warehouse management system, erp for an
     * enterprise resource planning system, or other for another external system. Flint-authored
     * events use flint in responses. Value enum: "manual", "pos", "wms", "erp", "other", "flint".
     * anyOf[2] (Value): null.
     */
    "source_system_type"?: (("manual" | "pos" | "wms" | "erp" | "other" | "flint" | (string & {})) | (null));
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
    /**
     * Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /** SKU of the unidentified item. minLength: 1. */
    "sku"?: string;
};
/**
 * Merchandise received in a return that does not match an expected return line, described by name,
 * SKU, and description.
 */
export type ReturnUnverifiedItemInput = ReturnUnverifiedItem;
export type ReturnUnverifiedItemPreviousAttributes = {
    /**
     * Description of the unidentified item. anyOf[1] (Value): string. Description of the
     * unidentified item. minLength: 1. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. anyOf[1] (Value):
     * string. Name of the unidentified item. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * SKU of the unidentified item. anyOf[1] (Value): string. SKU of the unidentified item.
     * minLength: 1. anyOf[2] (Value): null.
     */
    "sku"?: ((string) | (null));
};
export type ReturnUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
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
            "idempotency_key"?: string | null;
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            "line_items": Array<WebhookSnapshotReturnLineItem>;
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
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "completed_at"?: ((string) | (null));
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            "completion_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "decision_at"?: ((string) | (null));
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            "return_disposition_ids"?: ((Array<string>) | (null));
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_ids"?: ((Array<string>) | (null));
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            "return_number"?: ((string) | (null));
            "return_receipt_ids"?: ((Array<string>) | (null));
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            "return_resolution_ids"?: ((Array<string>) | (null));
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            "shipment_ids"?: ((Array<string>) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
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
            "idempotency_key"?: string | null;
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            "line_items": Array<WebhookSnapshotReturnLineItem>;
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
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "completed_at"?: ((string) | (null));
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            "completion_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "decision_at"?: ((string) | (null));
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            "return_disposition_ids"?: ((Array<string>) | (null));
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_ids"?: ((Array<string>) | (null));
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            "return_number"?: ((string) | (null));
            "return_receipt_ids"?: ((Array<string>) | (null));
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            "return_resolution_ids"?: ((Array<string>) | (null));
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            "shipment_ids"?: ((Array<string>) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.cancellation_reason (Optional):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". object.cancellation_reason_message
     * (Optional): string. Detail sent with the cancellation. Merchant reads only.
     * object.completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link ReturnActor}. Who completed
     * the Return. `system` when Flint completed it automatically. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.completion_blockers
     * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the Return
     * can complete. Empty when nothing is. object.completion_blockers[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns. object.completion_mode (Optional): string. automatic completes
     * the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". object.completion_reason (Optional): string. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other". object.completion_reason_message
     * (Optional): string. Detail sent when the Return was completed by hand. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.decision_status (Required): string. Whether the requested units were approved.
     * `pending` until one decision covers every line. Value enum: "pending", "approved",
     * "partially_approved", "declined". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.financial_summary (Required): {@link ReturnFinancialSummary}. The
     * Return's money in one place: the value of the returned lines, deductions and credits, and
     * what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     * object.handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
     * buyer still has to send back and where. Each entry leaves the list once it is satisfied, so
     * an empty list means nothing is waiting on the buyer. object.handoff_requirements[] (Value):
     * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
     * destination, instructions, line items, and expiry. object.idempotency_key (Optional): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes
     * return only keys from the buyer's namespace. object.initiated_by (Required): string. Who
     * created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system". object.line_items (Required): Array of {@link WebhookSnapshotReturnLineItem}. The
     * lines being returned. object.line_items[] (Value): {@link WebhookSnapshotReturnLineItem}. An
     * item included in a return request. object.merchandise_status (Required): string. On the
     * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
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
     * "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * WebhookSnapshotReturnDisposition}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * object.return_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
     * about how returned merchandise will be handled. object.return_id (Required): string. Unique
     * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_ids (Required): Array of string. IDs of every inspection recorded
     * for this Return, oldest first, including superseded inspections. Expand `return_inspections`
     * on `GET /v1/returns/{return_id}` to read them inline. object.return_inspection_ids[]
     * (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections
     * (Optional): Array of {@link WebhookSnapshotReturnInspection}. Present only when `expand`
     * includes `return_inspections`. The inspections in `return_inspection_ids`, in the same
     * order. object.return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An
     * assessment of the condition of returned items. object.return_number (Required): string.
     * Human-readable number for the Return. object.return_receipt_ids (Required): Array of string.
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present
     * only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
     * same order. object.return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record
     * of returned items arriving at a location. object.return_resolution_ids (Required): Array of
     * string. IDs of every resolution created for this Return, oldest first, including failed and
     * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * WebhookSnapshotReturnResolution}. Present only when `expand` includes `return_resolutions`.
     * The resolutions in `return_resolution_ids`, in the same order. object.return_resolutions[]
     * (Value): {@link WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of
     * a return. object.shipment_ids (Required): Array of string. IDs of every shipment raised to
     * send this Return's items back, oldest first, including voided shipments. Expand `shipments`
     * on `GET /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. Actions that
     * can succeed now. Actions the API key or token doesn't have the scope for are left out. A
     * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
     * only while no units have been received, inspected, dispositioned, or resolved, and it has no
     * current receipts or inspections, non-canceled dispositions or resolutions, or non-voided
     * return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen".
     * object.supported_actions[] (Value): string. Value enum: "cancel", "complete", "decide",
     * "process", "reopen". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with
     * every change to the Return. Each activity's `return_version` is the version that activity
     * produced. A write that takes `expected_version` or `expected_return_version` for this Return
     * compares it with this value. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.canceled_at (Optional): string or null.
     * RFC3339 timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.canceled_at.anyOf[2] (Value): null. previous_attributes.canceled_by
     * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the Return was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.completed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.completed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who completed the Return. `system` when Flint
     * completed it automatically. previous_attributes.completed_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.completed_by.anyOf[2] (Value): null.
     * previous_attributes.completion_blockers (Optional): Array of {@link
     * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return can
     * complete. Empty when nothing is. previous_attributes.completion_blockers.anyOf[1] (Value):
     * Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the
     * Return can complete. Empty when nothing is.
     * previous_attributes.completion_blockers.anyOf[1][] (Value): {@link
     * ReturnCompletionBlockerPreviousAttributes}. previous_attributes.completion_blockers.anyOf[2]
     * (Value): null. previous_attributes.completion_mode (Optional): string or null. automatic
     * completes the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[1] (Value): string.
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[2] (Value): null.
     * previous_attributes.completion_reason (Optional): string or null. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other".
     * previous_attributes.completion_reason.anyOf[1] (Value): string. Why the Return was completed
     * by hand. Absent when Flint completed it automatically. Value enum: "manual_completion",
     * "exception_waived", "other". previous_attributes.completion_reason.anyOf[2] (Value): null.
     * previous_attributes.completion_reason_message (Optional): string or null. Detail sent when
     * the Return was completed by hand. previous_attributes.completion_reason_message.anyOf[1]
     * (Value): string. Detail sent when the Return was completed by hand.
     * previous_attributes.completion_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer the Return
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. The customer the
     * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.decision_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.decision_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.decision_at.anyOf[2] (Value): null. previous_attributes.decision_status
     * (Optional): string or null. Whether the requested units were approved. `pending` until one
     * decision covers every line. Value enum: "pending", "approved", "partially_approved",
     * "declined". previous_attributes.decision_status.anyOf[1] (Value): string. Whether the
     * requested units were approved. `pending` until one decision covers every line. Value enum:
     * "pending", "approved", "partially_approved", "declined".
     * previous_attributes.decision_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.financial_summary (Optional): {@link
     * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
     * value of the returned lines, deductions and credits, and what has been refunded or
     * collected. previous_attributes.financial_summary.anyOf[1] (Value): {@link
     * ReturnFinancialSummaryPreviousAttributes}. previous_attributes.financial_summary.anyOf[2]
     * (Value): null. previous_attributes.handoff_requirements (Optional): Array of {@link
     * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1] (Value): Array of
     * {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementPreviousAttributes}.
     * previous_attributes.handoff_requirements.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer routes return only keys from the buyer's
     * namespace. previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
     * of the request that created this resource. `null` when that request sent no key, Flint
     * created the resource, the reader isn't the caller that created it (another app install, a
     * buyer, or the merchant reading an app's or buyer's record), or the caller that created an
     * older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
     * payloads, including replayed responses and webhook events, can return `null`. To find a key
     * that a replay returns as `null`, read the resource. Buyer routes return only keys from the
     * buyer's namespace. previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.initiated_by (Optional): string or null. Who created the Return: buyer
     * for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[1] (Value): string. Who created the Return: buyer for
     * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link ReturnLineItemPreviousAttributes} or null. The lines being
     * returned. previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnLineItemPreviousAttributes}. The lines being returned.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchandise_status (Optional): string or null. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[1] (Value): string. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. ID of the Order the Return is
     * against. previous_attributes.order_id.anyOf[1] (Value): string. ID of the Order the Return
     * is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.policy_evaluation (Optional): {@link
     * ReturnPolicyEvaluationPreviousAttributes} or null. How your return policies judged the
     * request when the Return was created. previous_attributes.policy_evaluation.anyOf[1] (Value):
     * {@link ReturnPolicyEvaluationPreviousAttributes}.
     * previous_attributes.policy_evaluation.anyOf[2] (Value): null.
     * previous_attributes.resolution_status (Optional): string or null. Whether the buyer has
     * received the value they are owed. Combines the Return's resolutions and its unsettled
     * corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". previous_attributes.resolution_status.anyOf[1]
     * (Value): string. Whether the buyer has received the value they are owed. Combines the
     * Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed".
     * previous_attributes.resolution_status.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_ids (Optional): Array of string or null. IDs of every
     * disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1] (Value): Array of string. IDs of
     * every disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1][] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". previous_attributes.return_disposition_ids.anyOf[2]
     * (Value): null. previous_attributes.return_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.return_dispositions.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. Unique identifier
     * for this return, prefixed `ret_`. previous_attributes.return_id.anyOf[1] (Value): string.
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_ids (Optional): Array of string or null. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1][] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_ids.anyOf[2]
     * (Value): null. previous_attributes.return_inspections (Optional): Array of {@link
     * ReturnInspectionPreviousAttributes} or null. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1] (Value): Array of {@link
     * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1][] (Value): {@link
     * ReturnInspectionPreviousAttributes}. previous_attributes.return_inspections.anyOf[2]
     * (Value): null. previous_attributes.return_number (Optional): string or null. Human-readable
     * number for the Return. previous_attributes.return_number.anyOf[1] (Value): string.
     * Human-readable number for the Return. previous_attributes.return_number.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_ids (Optional): Array of string or null. IDs of
     * every receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1] (Value): Array of string. IDs of every
     * receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1][] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_ids.anyOf[2] (Value):
     * null. previous_attributes.return_receipts (Optional): Array of {@link
     * ReturnReceiptPreviousAttributes} or null. Present only when `expand` includes
     * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1] (Value): Array of {@link
     * ReturnReceiptPreviousAttributes}. Present only when `expand` includes `return_receipts`. The
     * receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1][] (Value): {@link
     * ReturnReceiptPreviousAttributes}. previous_attributes.return_receipts.anyOf[2] (Value):
     * null. previous_attributes.return_resolution_ids (Optional): Array of string or null. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1] (Value): Array of string. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1][] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". previous_attributes.return_resolution_ids.anyOf[2]
     * (Value): null. previous_attributes.return_resolutions (Optional): Array of {@link
     * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1] (Value): Array of {@link
     * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1][] (Value): {@link
     * ReturnResolutionPreviousAttributes}. previous_attributes.return_resolutions.anyOf[2]
     * (Value): null. previous_attributes.shipment_ids (Optional): Array of string or null. IDs of
     * every shipment raised to send this Return's items back, oldest first, including voided
     * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
     * raised to send this Return's items back, oldest first, including voided shipments. Expand
     * `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1][] (Value): string. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_ids.anyOf[2] (Value): null.
     * previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes `shipments`.
     * Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Where the whole Return stands.
     * Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the whole Return stands. Read
     * `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Actions the API key or
     * token doesn't have the scope for are left out. A Return waiting for a decision lists
     * `decide` and `cancel`. An open Return lists `cancel` only while no units have been received,
     * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
     * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
     * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
     * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
     * "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. Actions the API key or token doesn't have the scope for are left out. A Return
     * waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while
     * no units have been received, inspected, dispositioned, or resolved, and it has no current
     * receipts or inspections, non-canceled dispositions or resolutions, or non-voided return
     * shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers`
     * is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. []
     * enum: "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "complete", "decide", "process", "reopen". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the Return. Each activity's `return_version` is the version that activity produced. A write
     * that takes `expected_version` or `expected_return_version` for this Return compares it with
     * this value. previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change
     * to the Return. Each activity's `return_version` is the version that activity produced. A
     * write that takes `expected_version` or `expected_return_version` for this Return compares it
     * with this value. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * Return. Who performed a return action: a buyer, merchant, integration, or the system,
         * with an optional ID. cancellation_reason (Optional): string. Why the Return was
         * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason_message (Optional): string. Detail sent
         * with the cancellation. Merchant reads only. completed_at (Optional): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_by (Optional):
         * {@link ReturnActor}. Who completed the Return. `system` when Flint completed it
         * automatically. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. completion_blockers (Required): Array of {@link
         * ReturnCompletionBlocker}. What is still owed before the Return can complete. Empty when
         * nothing is. completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something
         * still owed before a return can complete, with the return line or record it concerns.
         * completion_mode (Optional): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_reason (Optional): string. Why the Return was completed by hand. Absent when
         * Flint completed it automatically. Value enum: "manual_completion", "exception_waived",
         * "other". completion_reason_message (Optional): string. Detail sent when the Return was
         * completed by hand. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer (Optional): {@link ExpandedCustomerSummary} or
         * null. Present only when `expand` includes `customer`; `null` when expanded and there is
         * no related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". decision_status (Required): string. Whether the requested units
         * were approved. `pending` until one decision covers every line. Value enum: "pending",
         * "approved", "partially_approved", "declined". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". financial_summary (Required): {@link ReturnFinancialSummary}.
         * The Return's money in one place: the value of the returned lines, deductions and
         * credits, and what has been refunded or collected. The money for a return: returned
         * value, deductions, credits, replacement total, and amounts due to or from the buyer.
         * handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
         * buyer still has to send back and where. Each entry leaves the list once it is satisfied,
         * so an empty list means nothing is waiting on the buyer. handoff_requirements[] (Value):
         * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
         * destination, instructions, line items, and expiry. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer routes return only keys from the buyer's namespace. initiated_by
         * (Required): string. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". line_items (Required): Array of {@link
         * WebhookSnapshotReturnLineItem}. The lines being returned. line_items[] (Value): {@link
         * WebhookSnapshotReturnLineItem}. An item included in a return request. merchandise_status
         * (Required): string. On the Return, the least-finished line's value. Value enum:
         * "not_required", "awaiting_handoff", "in_transit", "partially_received",
         * "inspection_required", "partially_inspected", "inspection_review_required",
         * "disposition_required", "resolved", "exception". metadata (Required): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Required): string. ID of the Order
         * the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation
         * (Optional): {@link ReturnPolicyEvaluation}. How your return policies judged the request
         * when the Return was created. How a return policy evaluated a return request: overall
         * status and reason, the policy revision used, and per-line results. resolution_status
         * (Required): string. Whether the buyer has received the value they are owed. Combines the
         * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
         * "pending", "partially_completed", "requires_action", "completed", "failed".
         * return_disposition_ids (Required): Array of string. IDs of every disposition recorded
         * for this Return, oldest first, including failed and canceled dispositions. Expand
         * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
         * return_disposition_ids[] (Value): string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * return_dispositions (Optional): Array of {@link WebhookSnapshotReturnDisposition}.
         * Present only when `expand` includes `return_dispositions`. The dispositions in
         * `return_disposition_ids`, in the same order. return_dispositions[] (Value): {@link
         * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link WebhookSnapshotReturnInspection}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An assessment of
         * the condition of returned items. return_number (Required): string. Human-readable number
         * for the Return. return_receipt_ids (Required): Array of string. IDs of every receipt
         * recorded for this Return, oldest first, including superseded receipts. Expand
         * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
         * return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present only
         * when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
         * same order. return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record of
         * returned items arriving at a location. return_resolution_ids (Required): Array of
         * string. IDs of every resolution created for this Return, oldest first, including failed
         * and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
         * to read them inline. return_resolution_ids[] (Value): string. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of {@link
         * WebhookSnapshotReturnResolution}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions[] (Value): {@link WebhookSnapshotReturnResolution}. The refund,
         * exchange, or other outcome of a return. shipment_ids (Required): Array of string. IDs of
         * every shipment raised to send this Return's items back, oldest first, including voided
         * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids[] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments
         * (Optional): Array of {@link ExpandedShipmentSummary}. Present only when `expand`
         * includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". supported_actions (Required):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions[] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Goes up with every change to the Return. Each activity's
         * `return_version` is the version that activity produced. A write that takes
         * `expected_version` or `expected_return_version` for this Return compares it with this
         * value. Format: int64. minimum: 0.
         */
        "object": {
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
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace.
             */
            "idempotency_key"?: string | null;
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link WebhookSnapshotReturnLineItem}. An item
             * included in a return request.
             */
            "line_items": Array<WebhookSnapshotReturnLineItem>;
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
             * "partially_completed", "requires_action", "completed", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
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
             * `return_disposition_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
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
             * `return_inspection_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnInspection}. An assessment of the condition of returned items.
             */
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
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
             * `return_receipt_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnReceipt}. A record of returned items arriving at a location.
             */
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of a
             * return.
             */
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
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
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "process", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
         * canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * canceled_by.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
         * "expired", "created_in_error", "other". cancellation_reason.anyOf[1] (Value): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason.anyOf[2]
         * (Value): null. cancellation_reason_message (Optional): string or null. Detail sent with
         * the cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value):
         * string. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. completed_at (Optional): string or
         * null. RFC3339 timestamp. completed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null.
         * completed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who completed
         * the Return. `system` when Flint completed it automatically. completed_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. completed_by.anyOf[2] (Value): null.
         * completion_blockers (Optional): Array of {@link
         * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1] (Value): Array of
         * {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1][] (Value): {@link
         * ReturnCompletionBlockerPreviousAttributes}. completion_blockers.anyOf[2] (Value): null.
         * completion_mode (Optional): string or null. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[1] (Value): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[2] (Value): null. completion_reason (Optional): string or null.
         * Why the Return was completed by hand. Absent when Flint completed it automatically.
         * Value enum: "manual_completion", "exception_waived", "other". completion_reason.anyOf[1]
         * (Value): string. Why the Return was completed by hand. Absent when Flint completed it
         * automatically. Value enum: "manual_completion", "exception_waived", "other".
         * completion_reason.anyOf[2] (Value): null. completion_reason_message (Optional): string
         * or null. Detail sent when the Return was completed by hand.
         * completion_reason_message.anyOf[1] (Value): string. Detail sent when the Return was
         * completed by hand. completion_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. The customer the Return belongs to.
         * customer_id.anyOf[1] (Value): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. decision_at
         * (Optional): string or null. RFC3339 timestamp. decision_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * decision_at.anyOf[2] (Value): null. decision_status (Optional): string or null. Whether
         * the requested units were approved. `pending` until one decision covers every line. Value
         * enum: "pending", "approved", "partially_approved", "declined". decision_status.anyOf[1]
         * (Value): string. Whether the requested units were approved. `pending` until one decision
         * covers every line. Value enum: "pending", "approved", "partially_approved", "declined".
         * decision_status.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. financial_summary (Optional): {@link
         * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
         * value of the returned lines, deductions and credits, and what has been refunded or
         * collected. financial_summary.anyOf[1] (Value): {@link
         * ReturnFinancialSummaryPreviousAttributes}. financial_summary.anyOf[2] (Value): null.
         * handoff_requirements (Optional): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send
         * back and where. Each entry leaves the list once it is satisfied, so an empty list means
         * nothing is waiting on the buyer. handoff_requirements.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back and
         * where. Each entry leaves the list once it is satisfied, so an empty list means nothing
         * is waiting on the buyer. handoff_requirements.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementPreviousAttributes}. handoff_requirements.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource. `null` when that request sent no key, Flint created
         * the resource, the reader isn't the caller that created it (another app install, a buyer,
         * or the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[2] (Value): null. initiated_by (Optional):
         * string or null. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". initiated_by.anyOf[1] (Value): string. Who created
         * the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app, or system for Flint
         * automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system".
         * initiated_by.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * ReturnLineItemPreviousAttributes} or null. The lines being returned. line_items.anyOf[1]
         * (Value): Array of {@link ReturnLineItemPreviousAttributes}. The lines being returned.
         * line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. merchandise_status (Optional): string or null. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[1] (Value): string. On the Return, the least-finished line's
         * value. Value enum: "not_required", "awaiting_handoff", "in_transit",
         * "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or
         * null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
         * rules. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the Order the Return is
         * against. order_id.anyOf[1] (Value): string. ID of the Order the Return is against.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * policy_evaluation (Optional): {@link ReturnPolicyEvaluationPreviousAttributes} or null.
         * How your return policies judged the request when the Return was created.
         * policy_evaluation.anyOf[1] (Value): {@link ReturnPolicyEvaluationPreviousAttributes}.
         * policy_evaluation.anyOf[2] (Value): null. resolution_status (Optional): string or null.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed".
         * resolution_status.anyOf[1] (Value): string. Whether the buyer has received the value
         * they are owed. Combines the Return's resolutions and its unsettled corrections. Value
         * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
         * "failed". resolution_status.anyOf[2] (Value): null. return_disposition_ids (Optional):
         * Array of string or null. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1] (Value):
         * Array of string. IDs of every disposition recorded for this Return, oldest first,
         * including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1][] (Value):
         * string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_ids.anyOf[2]
         * (Value): null. return_dispositions (Optional): Array of {@link
         * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1] (Value): Array of {@link
         * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
         * return_dispositions.anyOf[2] (Value): null. return_id (Optional): string or null. Unique
         * identifier for this return, prefixed `ret_`. return_id.anyOf[1] (Value): string. Unique
         * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_ids (Optional): Array of string or
         * null. IDs of every inspection recorded for this Return, oldest first, including
         * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to
         * read them inline. return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
         * inspection recorded for this Return, oldest first, including superseded inspections.
         * Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
         * return_inspection_ids.anyOf[1][] (Value): string. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_ids.anyOf[2] (Value): null.
         * return_inspections (Optional): Array of {@link ReturnInspectionPreviousAttributes} or
         * null. Present only when `expand` includes `return_inspections`. The inspections in
         * `return_inspection_ids`, in the same order. return_inspections.anyOf[1] (Value): Array
         * of {@link ReturnInspectionPreviousAttributes}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections.anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}.
         * return_inspections.anyOf[2] (Value): null. return_number (Optional): string or null.
         * Human-readable number for the Return. return_number.anyOf[1] (Value): string.
         * Human-readable number for the Return. return_number.anyOf[2] (Value): null.
         * return_receipt_ids (Optional): Array of string or null. IDs of every receipt recorded
         * for this Return, oldest first, including superseded receipts. Expand `return_receipts`
         * on `GET /v1/returns/{return_id}` to read them inline. return_receipt_ids.anyOf[1]
         * (Value): Array of string. IDs of every receipt recorded for this Return, oldest first,
         * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}`
         * to read them inline. return_receipt_ids.anyOf[1][] (Value): string. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_ids.anyOf[2] (Value): null.
         * return_receipts (Optional): Array of {@link ReturnReceiptPreviousAttributes} or null.
         * Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts.anyOf[1] (Value): Array of
         * {@link ReturnReceiptPreviousAttributes}. Present only when `expand` includes
         * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
         * return_receipts.anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}.
         * return_receipts.anyOf[2] (Value): null. return_resolution_ids (Optional): Array of
         * string or null. IDs of every resolution created for this Return, oldest first, including
         * failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1] (Value):
         * Array of string. IDs of every resolution created for this Return, oldest first,
         * including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1][] (Value):
         * string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_ids.anyOf[2]
         * (Value): null. return_resolutions (Optional): Array of {@link
         * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1] (Value): Array of {@link
         * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}.
         * return_resolutions.anyOf[2] (Value): null. shipment_ids (Optional): Array of string or
         * null. IDs of every shipment raised to send this Return's items back, oldest first,
         * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read
         * them inline. shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
         * raised to send this Return's items back, oldest first, including voided shipments.
         * Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids.anyOf[1][] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
         * shipment_ids.anyOf[2] (Value): null. shipments (Optional): Array of {@link
         * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments.anyOf[1] (Value): Array of {@link ExpandedShipmentSummaryPreviousAttributes}.
         * Present only when `expand` includes `shipments`. Summaries of the shipments in
         * `shipment_ids`, in the same order. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". status.anyOf[1] (Value):
         * string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Actions that can succeed now. Actions the API key or token
         * doesn't have the scope for are left out. A Return waiting for a decision lists `decide`
         * and `cancel`. An open Return lists `cancel` only while no units have been received,
         * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
         * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
         * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
         * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[1] (Value):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. version.anyOf[1] (Value): integer. Goes up
         * with every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the Return. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * Who completed the Return. `system` when Flint completed it automatically. anyOf[1]
             * (Value): {@link ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What is still owed before the Return can complete. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still
             * owed before the Return can complete. Empty when nothing is. anyOf[1][] (Value):
             * {@link ReturnCompletionBlockerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic". anyOf[1] (Value): string. automatic completes the
             * Return when the last completion blocker clears; manual waits for POST
             * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
             * "manual", "automatic". anyOf[2] (Value): null.
             */
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other". anyOf[1] (Value):
             * string. Why the Return was completed by hand. Absent when Flint completed it
             * automatically. Value enum: "manual_completion", "exception_waived", "other".
             * anyOf[2] (Value): null.
             */
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            /**
             * Detail sent when the Return was completed by hand. anyOf[1] (Value): string. Detail
             * sent when the Return was completed by hand. anyOf[2] (Value): null.
             */
            "completion_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer the Return belongs to. anyOf[1] (Value): string. The customer the
             * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "decision_at"?: ((string) | (null));
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1]
             * (Value): string. Whether the requested units were approved. `pending` until one
             * decision covers every line. Value enum: "pending", "approved", "partially_approved",
             * "declined". anyOf[2] (Value): null.
             */
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. anyOf[1] (Value): {@link
             * ReturnFinancialSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1]
             * (Value): Array of {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer
             * still has to send back and where. Each entry leaves the list once it is satisfied,
             * so an empty list means nothing is waiting on the buyer. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created
             * this resource. `null` when that request sent no key, Flint created the resource, the
             * reader isn't the caller that created it (another app install, a buyer, or the
             * merchant reading an app's or buyer's record), or the caller that created an older
             * record is unknown. Filter its list with `idempotency_key` to find it. Recorded
             * payloads, including replayed responses and webhook events, can return `null`. To
             * find a key that a replay returns as `null`, read the resource. Buyer routes return
             * only keys from the buyer's namespace. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system". anyOf[1] (Value): string. Who created the Return: buyer for
             * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
             * user, integration for an API key or partner app, or system for Flint automation. It
             * cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[2]
             * (Value): null.
             */
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            /**
             * The lines being returned. anyOf[1] (Value): Array of {@link
             * ReturnLineItemPreviousAttributes}. The lines being returned. anyOf[1][] (Value):
             * {@link ReturnLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception". anyOf[1] (Value): string. On the Return, the least-finished
             * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
             * "partially_received", "inspection_required", "partially_inspected",
             * "inspection_review_required", "disposition_required", "resolved", "exception".
             * anyOf[2] (Value): null.
             */
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the Order the Return is against. anyOf[1] (Value): string. ID of the Order the
             * Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How your return policies judged the request when the Return was created. anyOf[1]
             * (Value): {@link ReturnPolicyEvaluationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed". anyOf[1] (Value):
             * string. Whether the buyer has received the value they are owed. Combines the
             * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
             * "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[2]
             * (Value): null.
             */
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs
             * of every disposition recorded for this Return, oldest first, including failed and
             * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1][] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
             * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same
             * order. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * Unique identifier for this return, prefixed `ret_`. anyOf[1] (Value): string. Unique
             * identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. anyOf[1] (Value): Array of string. IDs of every inspection recorded for
             * this Return, oldest first, including superseded inspections. Expand
             * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "return_inspection_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
             * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            /**
             * Human-readable number for the Return. anyOf[1] (Value): string. Human-readable
             * number for the Return. anyOf[2] (Value): null.
             */
            "return_number"?: ((string) | (null));
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. anyOf[1] (Value): Array of string. IDs of every receipt recorded for this
             * Return, oldest first, including superseded receipts. Expand `return_receipts` on
             * `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnReceiptPreviousAttributes}. Present only when `expand` includes
             * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1] (Value): Array of string. IDs of every resolution
             * created for this Return, oldest first, including failed and canceled resolutions.
             * Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2]
             * (Value): null.
             */
            "return_resolution_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
             * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. anyOf[1] (Value): Array of string. IDs of every shipment raised to
             * send this Return's items back, oldest first, including voided shipments. Expand
             * `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][]
             * (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes
             * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
             * anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled". anyOf[1] (Value): string. Where the whole
             * Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status`
             * for the part you need. Value enum: "requested", "open", "completed", "declined",
             * "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1] (Value): Array of
             * string. Actions that can succeed now. Actions the API key or token doesn't have the
             * scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
             * An open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1][] (Value): string.
             * Value enum: "cancel", "complete", "decide", "process", "reopen". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. anyOf[1]
             * (Value): integer. Goes up with every change to the Return. Each activity's
             * `return_version` is the version that activity produced. A write that takes
             * `expected_version` or `expected_return_version` for this Return compares it with
             * this value. Format: int64. minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.cancellation_reason (Optional):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". object.cancellation_reason_message
     * (Optional): string. Detail sent with the cancellation. Merchant reads only.
     * object.completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link ReturnActor}. Who completed
     * the Return. `system` when Flint completed it automatically. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.completion_blockers
     * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the Return
     * can complete. Empty when nothing is. object.completion_blockers[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns. object.completion_mode (Optional): string. automatic completes
     * the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". object.completion_reason (Optional): string. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other". object.completion_reason_message
     * (Optional): string. Detail sent when the Return was completed by hand. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.decision_status (Required): string. Whether the requested units were approved.
     * `pending` until one decision covers every line. Value enum: "pending", "approved",
     * "partially_approved", "declined". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.financial_summary (Required): {@link ReturnFinancialSummary}. The
     * Return's money in one place: the value of the returned lines, deductions and credits, and
     * what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     * object.handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
     * buyer still has to send back and where. Each entry leaves the list once it is satisfied, so
     * an empty list means nothing is waiting on the buyer. object.handoff_requirements[] (Value):
     * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
     * destination, instructions, line items, and expiry. object.idempotency_key (Optional): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes
     * return only keys from the buyer's namespace. object.initiated_by (Required): string. Who
     * created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system". object.line_items (Required): Array of {@link WebhookSnapshotReturnLineItem}. The
     * lines being returned. object.line_items[] (Value): {@link WebhookSnapshotReturnLineItem}. An
     * item included in a return request. object.merchandise_status (Required): string. On the
     * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
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
     * "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * WebhookSnapshotReturnDisposition}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * object.return_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
     * about how returned merchandise will be handled. object.return_id (Required): string. Unique
     * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_ids (Required): Array of string. IDs of every inspection recorded
     * for this Return, oldest first, including superseded inspections. Expand `return_inspections`
     * on `GET /v1/returns/{return_id}` to read them inline. object.return_inspection_ids[]
     * (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections
     * (Optional): Array of {@link WebhookSnapshotReturnInspection}. Present only when `expand`
     * includes `return_inspections`. The inspections in `return_inspection_ids`, in the same
     * order. object.return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An
     * assessment of the condition of returned items. object.return_number (Required): string.
     * Human-readable number for the Return. object.return_receipt_ids (Required): Array of string.
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present
     * only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
     * same order. object.return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record
     * of returned items arriving at a location. object.return_resolution_ids (Required): Array of
     * string. IDs of every resolution created for this Return, oldest first, including failed and
     * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * WebhookSnapshotReturnResolution}. Present only when `expand` includes `return_resolutions`.
     * The resolutions in `return_resolution_ids`, in the same order. object.return_resolutions[]
     * (Value): {@link WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of
     * a return. object.shipment_ids (Required): Array of string. IDs of every shipment raised to
     * send this Return's items back, oldest first, including voided shipments. Expand `shipments`
     * on `GET /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. Actions that
     * can succeed now. Actions the API key or token doesn't have the scope for are left out. A
     * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
     * only while no units have been received, inspected, dispositioned, or resolved, and it has no
     * current receipts or inspections, non-canceled dispositions or resolutions, or non-voided
     * return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen".
     * object.supported_actions[] (Value): string. Value enum: "cancel", "complete", "decide",
     * "process", "reopen". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with
     * every change to the Return. Each activity's `return_version` is the version that activity
     * produced. A write that takes `expected_version` or `expected_return_version` for this Return
     * compares it with this value. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.canceled_at (Optional): string or null.
     * RFC3339 timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.canceled_at.anyOf[2] (Value): null. previous_attributes.canceled_by
     * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the Return was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.completed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.completed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who completed the Return. `system` when Flint
     * completed it automatically. previous_attributes.completed_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.completed_by.anyOf[2] (Value): null.
     * previous_attributes.completion_blockers (Optional): Array of {@link
     * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return can
     * complete. Empty when nothing is. previous_attributes.completion_blockers.anyOf[1] (Value):
     * Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the
     * Return can complete. Empty when nothing is.
     * previous_attributes.completion_blockers.anyOf[1][] (Value): {@link
     * ReturnCompletionBlockerPreviousAttributes}. previous_attributes.completion_blockers.anyOf[2]
     * (Value): null. previous_attributes.completion_mode (Optional): string or null. automatic
     * completes the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[1] (Value): string.
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[2] (Value): null.
     * previous_attributes.completion_reason (Optional): string or null. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other".
     * previous_attributes.completion_reason.anyOf[1] (Value): string. Why the Return was completed
     * by hand. Absent when Flint completed it automatically. Value enum: "manual_completion",
     * "exception_waived", "other". previous_attributes.completion_reason.anyOf[2] (Value): null.
     * previous_attributes.completion_reason_message (Optional): string or null. Detail sent when
     * the Return was completed by hand. previous_attributes.completion_reason_message.anyOf[1]
     * (Value): string. Detail sent when the Return was completed by hand.
     * previous_attributes.completion_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer the Return
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. The customer the
     * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.decision_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.decision_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.decision_at.anyOf[2] (Value): null. previous_attributes.decision_status
     * (Optional): string or null. Whether the requested units were approved. `pending` until one
     * decision covers every line. Value enum: "pending", "approved", "partially_approved",
     * "declined". previous_attributes.decision_status.anyOf[1] (Value): string. Whether the
     * requested units were approved. `pending` until one decision covers every line. Value enum:
     * "pending", "approved", "partially_approved", "declined".
     * previous_attributes.decision_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.financial_summary (Optional): {@link
     * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
     * value of the returned lines, deductions and credits, and what has been refunded or
     * collected. previous_attributes.financial_summary.anyOf[1] (Value): {@link
     * ReturnFinancialSummaryPreviousAttributes}. previous_attributes.financial_summary.anyOf[2]
     * (Value): null. previous_attributes.handoff_requirements (Optional): Array of {@link
     * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1] (Value): Array of
     * {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementPreviousAttributes}.
     * previous_attributes.handoff_requirements.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer routes return only keys from the buyer's
     * namespace. previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
     * of the request that created this resource. `null` when that request sent no key, Flint
     * created the resource, the reader isn't the caller that created it (another app install, a
     * buyer, or the merchant reading an app's or buyer's record), or the caller that created an
     * older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
     * payloads, including replayed responses and webhook events, can return `null`. To find a key
     * that a replay returns as `null`, read the resource. Buyer routes return only keys from the
     * buyer's namespace. previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.initiated_by (Optional): string or null. Who created the Return: buyer
     * for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[1] (Value): string. Who created the Return: buyer for
     * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link ReturnLineItemPreviousAttributes} or null. The lines being
     * returned. previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnLineItemPreviousAttributes}. The lines being returned.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchandise_status (Optional): string or null. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[1] (Value): string. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. ID of the Order the Return is
     * against. previous_attributes.order_id.anyOf[1] (Value): string. ID of the Order the Return
     * is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.policy_evaluation (Optional): {@link
     * ReturnPolicyEvaluationPreviousAttributes} or null. How your return policies judged the
     * request when the Return was created. previous_attributes.policy_evaluation.anyOf[1] (Value):
     * {@link ReturnPolicyEvaluationPreviousAttributes}.
     * previous_attributes.policy_evaluation.anyOf[2] (Value): null.
     * previous_attributes.resolution_status (Optional): string or null. Whether the buyer has
     * received the value they are owed. Combines the Return's resolutions and its unsettled
     * corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". previous_attributes.resolution_status.anyOf[1]
     * (Value): string. Whether the buyer has received the value they are owed. Combines the
     * Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed".
     * previous_attributes.resolution_status.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_ids (Optional): Array of string or null. IDs of every
     * disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1] (Value): Array of string. IDs of
     * every disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1][] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". previous_attributes.return_disposition_ids.anyOf[2]
     * (Value): null. previous_attributes.return_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.return_dispositions.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. Unique identifier
     * for this return, prefixed `ret_`. previous_attributes.return_id.anyOf[1] (Value): string.
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_ids (Optional): Array of string or null. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1][] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_ids.anyOf[2]
     * (Value): null. previous_attributes.return_inspections (Optional): Array of {@link
     * ReturnInspectionPreviousAttributes} or null. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1] (Value): Array of {@link
     * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1][] (Value): {@link
     * ReturnInspectionPreviousAttributes}. previous_attributes.return_inspections.anyOf[2]
     * (Value): null. previous_attributes.return_number (Optional): string or null. Human-readable
     * number for the Return. previous_attributes.return_number.anyOf[1] (Value): string.
     * Human-readable number for the Return. previous_attributes.return_number.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_ids (Optional): Array of string or null. IDs of
     * every receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1] (Value): Array of string. IDs of every
     * receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1][] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_ids.anyOf[2] (Value):
     * null. previous_attributes.return_receipts (Optional): Array of {@link
     * ReturnReceiptPreviousAttributes} or null. Present only when `expand` includes
     * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1] (Value): Array of {@link
     * ReturnReceiptPreviousAttributes}. Present only when `expand` includes `return_receipts`. The
     * receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1][] (Value): {@link
     * ReturnReceiptPreviousAttributes}. previous_attributes.return_receipts.anyOf[2] (Value):
     * null. previous_attributes.return_resolution_ids (Optional): Array of string or null. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1] (Value): Array of string. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1][] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". previous_attributes.return_resolution_ids.anyOf[2]
     * (Value): null. previous_attributes.return_resolutions (Optional): Array of {@link
     * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1] (Value): Array of {@link
     * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1][] (Value): {@link
     * ReturnResolutionPreviousAttributes}. previous_attributes.return_resolutions.anyOf[2]
     * (Value): null. previous_attributes.shipment_ids (Optional): Array of string or null. IDs of
     * every shipment raised to send this Return's items back, oldest first, including voided
     * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
     * raised to send this Return's items back, oldest first, including voided shipments. Expand
     * `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1][] (Value): string. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_ids.anyOf[2] (Value): null.
     * previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes `shipments`.
     * Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Where the whole Return stands.
     * Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the whole Return stands. Read
     * `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Actions the API key or
     * token doesn't have the scope for are left out. A Return waiting for a decision lists
     * `decide` and `cancel`. An open Return lists `cancel` only while no units have been received,
     * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
     * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
     * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
     * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
     * "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. Actions the API key or token doesn't have the scope for are left out. A Return
     * waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while
     * no units have been received, inspected, dispositioned, or resolved, and it has no current
     * receipts or inspections, non-canceled dispositions or resolutions, or non-voided return
     * shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers`
     * is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. []
     * enum: "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "complete", "decide", "process", "reopen". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the Return. Each activity's `return_version` is the version that activity produced. A write
     * that takes `expected_version` or `expected_return_version` for this Return compares it with
     * this value. previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change
     * to the Return. Each activity's `return_version` is the version that activity produced. A
     * write that takes `expected_version` or `expected_return_version` for this Return compares it
     * with this value. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * Return. Who performed a return action: a buyer, merchant, integration, or the system,
         * with an optional ID. cancellation_reason (Optional): string. Why the Return was
         * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason_message (Optional): string. Detail sent
         * with the cancellation. Merchant reads only. completed_at (Optional): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_by (Optional):
         * {@link ReturnActor}. Who completed the Return. `system` when Flint completed it
         * automatically. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. completion_blockers (Required): Array of {@link
         * ReturnCompletionBlocker}. What is still owed before the Return can complete. Empty when
         * nothing is. completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something
         * still owed before a return can complete, with the return line or record it concerns.
         * completion_mode (Optional): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_reason (Optional): string. Why the Return was completed by hand. Absent when
         * Flint completed it automatically. Value enum: "manual_completion", "exception_waived",
         * "other". completion_reason_message (Optional): string. Detail sent when the Return was
         * completed by hand. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer (Optional): {@link ExpandedCustomerSummary} or
         * null. Present only when `expand` includes `customer`; `null` when expanded and there is
         * no related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". decision_status (Required): string. Whether the requested units
         * were approved. `pending` until one decision covers every line. Value enum: "pending",
         * "approved", "partially_approved", "declined". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". financial_summary (Required): {@link ReturnFinancialSummary}.
         * The Return's money in one place: the value of the returned lines, deductions and
         * credits, and what has been refunded or collected. The money for a return: returned
         * value, deductions, credits, replacement total, and amounts due to or from the buyer.
         * handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
         * buyer still has to send back and where. Each entry leaves the list once it is satisfied,
         * so an empty list means nothing is waiting on the buyer. handoff_requirements[] (Value):
         * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
         * destination, instructions, line items, and expiry. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer routes return only keys from the buyer's namespace. initiated_by
         * (Required): string. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". line_items (Required): Array of {@link
         * WebhookSnapshotReturnLineItem}. The lines being returned. line_items[] (Value): {@link
         * WebhookSnapshotReturnLineItem}. An item included in a return request. merchandise_status
         * (Required): string. On the Return, the least-finished line's value. Value enum:
         * "not_required", "awaiting_handoff", "in_transit", "partially_received",
         * "inspection_required", "partially_inspected", "inspection_review_required",
         * "disposition_required", "resolved", "exception". metadata (Required): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Required): string. ID of the Order
         * the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation
         * (Optional): {@link ReturnPolicyEvaluation}. How your return policies judged the request
         * when the Return was created. How a return policy evaluated a return request: overall
         * status and reason, the policy revision used, and per-line results. resolution_status
         * (Required): string. Whether the buyer has received the value they are owed. Combines the
         * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
         * "pending", "partially_completed", "requires_action", "completed", "failed".
         * return_disposition_ids (Required): Array of string. IDs of every disposition recorded
         * for this Return, oldest first, including failed and canceled dispositions. Expand
         * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
         * return_disposition_ids[] (Value): string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * return_dispositions (Optional): Array of {@link WebhookSnapshotReturnDisposition}.
         * Present only when `expand` includes `return_dispositions`. The dispositions in
         * `return_disposition_ids`, in the same order. return_dispositions[] (Value): {@link
         * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link WebhookSnapshotReturnInspection}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An assessment of
         * the condition of returned items. return_number (Required): string. Human-readable number
         * for the Return. return_receipt_ids (Required): Array of string. IDs of every receipt
         * recorded for this Return, oldest first, including superseded receipts. Expand
         * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
         * return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present only
         * when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
         * same order. return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record of
         * returned items arriving at a location. return_resolution_ids (Required): Array of
         * string. IDs of every resolution created for this Return, oldest first, including failed
         * and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
         * to read them inline. return_resolution_ids[] (Value): string. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of {@link
         * WebhookSnapshotReturnResolution}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions[] (Value): {@link WebhookSnapshotReturnResolution}. The refund,
         * exchange, or other outcome of a return. shipment_ids (Required): Array of string. IDs of
         * every shipment raised to send this Return's items back, oldest first, including voided
         * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids[] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments
         * (Optional): Array of {@link ExpandedShipmentSummary}. Present only when `expand`
         * includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". supported_actions (Required):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions[] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Goes up with every change to the Return. Each activity's
         * `return_version` is the version that activity produced. A write that takes
         * `expected_version` or `expected_return_version` for this Return compares it with this
         * value. Format: int64. minimum: 0.
         */
        "object": {
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
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace.
             */
            "idempotency_key"?: string | null;
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link WebhookSnapshotReturnLineItem}. An item
             * included in a return request.
             */
            "line_items": Array<WebhookSnapshotReturnLineItem>;
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
             * "partially_completed", "requires_action", "completed", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
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
             * `return_disposition_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
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
             * `return_inspection_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnInspection}. An assessment of the condition of returned items.
             */
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
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
             * `return_receipt_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnReceipt}. A record of returned items arriving at a location.
             */
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of a
             * return.
             */
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
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
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "process", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
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
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
         * canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * canceled_by.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
         * "expired", "created_in_error", "other". cancellation_reason.anyOf[1] (Value): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason.anyOf[2]
         * (Value): null. cancellation_reason_message (Optional): string or null. Detail sent with
         * the cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value):
         * string. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. completed_at (Optional): string or
         * null. RFC3339 timestamp. completed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null.
         * completed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who completed
         * the Return. `system` when Flint completed it automatically. completed_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. completed_by.anyOf[2] (Value): null.
         * completion_blockers (Optional): Array of {@link
         * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1] (Value): Array of
         * {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1][] (Value): {@link
         * ReturnCompletionBlockerPreviousAttributes}. completion_blockers.anyOf[2] (Value): null.
         * completion_mode (Optional): string or null. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[1] (Value): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[2] (Value): null. completion_reason (Optional): string or null.
         * Why the Return was completed by hand. Absent when Flint completed it automatically.
         * Value enum: "manual_completion", "exception_waived", "other". completion_reason.anyOf[1]
         * (Value): string. Why the Return was completed by hand. Absent when Flint completed it
         * automatically. Value enum: "manual_completion", "exception_waived", "other".
         * completion_reason.anyOf[2] (Value): null. completion_reason_message (Optional): string
         * or null. Detail sent when the Return was completed by hand.
         * completion_reason_message.anyOf[1] (Value): string. Detail sent when the Return was
         * completed by hand. completion_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. The customer the Return belongs to.
         * customer_id.anyOf[1] (Value): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. decision_at
         * (Optional): string or null. RFC3339 timestamp. decision_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * decision_at.anyOf[2] (Value): null. decision_status (Optional): string or null. Whether
         * the requested units were approved. `pending` until one decision covers every line. Value
         * enum: "pending", "approved", "partially_approved", "declined". decision_status.anyOf[1]
         * (Value): string. Whether the requested units were approved. `pending` until one decision
         * covers every line. Value enum: "pending", "approved", "partially_approved", "declined".
         * decision_status.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. financial_summary (Optional): {@link
         * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
         * value of the returned lines, deductions and credits, and what has been refunded or
         * collected. financial_summary.anyOf[1] (Value): {@link
         * ReturnFinancialSummaryPreviousAttributes}. financial_summary.anyOf[2] (Value): null.
         * handoff_requirements (Optional): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send
         * back and where. Each entry leaves the list once it is satisfied, so an empty list means
         * nothing is waiting on the buyer. handoff_requirements.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back and
         * where. Each entry leaves the list once it is satisfied, so an empty list means nothing
         * is waiting on the buyer. handoff_requirements.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementPreviousAttributes}. handoff_requirements.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource. `null` when that request sent no key, Flint created
         * the resource, the reader isn't the caller that created it (another app install, a buyer,
         * or the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[2] (Value): null. initiated_by (Optional):
         * string or null. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". initiated_by.anyOf[1] (Value): string. Who created
         * the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app, or system for Flint
         * automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system".
         * initiated_by.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * ReturnLineItemPreviousAttributes} or null. The lines being returned. line_items.anyOf[1]
         * (Value): Array of {@link ReturnLineItemPreviousAttributes}. The lines being returned.
         * line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. merchandise_status (Optional): string or null. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[1] (Value): string. On the Return, the least-finished line's
         * value. Value enum: "not_required", "awaiting_handoff", "in_transit",
         * "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or
         * null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
         * rules. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the Order the Return is
         * against. order_id.anyOf[1] (Value): string. ID of the Order the Return is against.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * policy_evaluation (Optional): {@link ReturnPolicyEvaluationPreviousAttributes} or null.
         * How your return policies judged the request when the Return was created.
         * policy_evaluation.anyOf[1] (Value): {@link ReturnPolicyEvaluationPreviousAttributes}.
         * policy_evaluation.anyOf[2] (Value): null. resolution_status (Optional): string or null.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed".
         * resolution_status.anyOf[1] (Value): string. Whether the buyer has received the value
         * they are owed. Combines the Return's resolutions and its unsettled corrections. Value
         * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
         * "failed". resolution_status.anyOf[2] (Value): null. return_disposition_ids (Optional):
         * Array of string or null. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1] (Value):
         * Array of string. IDs of every disposition recorded for this Return, oldest first,
         * including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1][] (Value):
         * string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_ids.anyOf[2]
         * (Value): null. return_dispositions (Optional): Array of {@link
         * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1] (Value): Array of {@link
         * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
         * return_dispositions.anyOf[2] (Value): null. return_id (Optional): string or null. Unique
         * identifier for this return, prefixed `ret_`. return_id.anyOf[1] (Value): string. Unique
         * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_ids (Optional): Array of string or
         * null. IDs of every inspection recorded for this Return, oldest first, including
         * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to
         * read them inline. return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
         * inspection recorded for this Return, oldest first, including superseded inspections.
         * Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
         * return_inspection_ids.anyOf[1][] (Value): string. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_ids.anyOf[2] (Value): null.
         * return_inspections (Optional): Array of {@link ReturnInspectionPreviousAttributes} or
         * null. Present only when `expand` includes `return_inspections`. The inspections in
         * `return_inspection_ids`, in the same order. return_inspections.anyOf[1] (Value): Array
         * of {@link ReturnInspectionPreviousAttributes}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections.anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}.
         * return_inspections.anyOf[2] (Value): null. return_number (Optional): string or null.
         * Human-readable number for the Return. return_number.anyOf[1] (Value): string.
         * Human-readable number for the Return. return_number.anyOf[2] (Value): null.
         * return_receipt_ids (Optional): Array of string or null. IDs of every receipt recorded
         * for this Return, oldest first, including superseded receipts. Expand `return_receipts`
         * on `GET /v1/returns/{return_id}` to read them inline. return_receipt_ids.anyOf[1]
         * (Value): Array of string. IDs of every receipt recorded for this Return, oldest first,
         * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}`
         * to read them inline. return_receipt_ids.anyOf[1][] (Value): string. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_ids.anyOf[2] (Value): null.
         * return_receipts (Optional): Array of {@link ReturnReceiptPreviousAttributes} or null.
         * Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts.anyOf[1] (Value): Array of
         * {@link ReturnReceiptPreviousAttributes}. Present only when `expand` includes
         * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
         * return_receipts.anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}.
         * return_receipts.anyOf[2] (Value): null. return_resolution_ids (Optional): Array of
         * string or null. IDs of every resolution created for this Return, oldest first, including
         * failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1] (Value):
         * Array of string. IDs of every resolution created for this Return, oldest first,
         * including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1][] (Value):
         * string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_ids.anyOf[2]
         * (Value): null. return_resolutions (Optional): Array of {@link
         * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1] (Value): Array of {@link
         * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}.
         * return_resolutions.anyOf[2] (Value): null. shipment_ids (Optional): Array of string or
         * null. IDs of every shipment raised to send this Return's items back, oldest first,
         * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read
         * them inline. shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
         * raised to send this Return's items back, oldest first, including voided shipments.
         * Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids.anyOf[1][] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
         * shipment_ids.anyOf[2] (Value): null. shipments (Optional): Array of {@link
         * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments.anyOf[1] (Value): Array of {@link ExpandedShipmentSummaryPreviousAttributes}.
         * Present only when `expand` includes `shipments`. Summaries of the shipments in
         * `shipment_ids`, in the same order. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". status.anyOf[1] (Value):
         * string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Actions that can succeed now. Actions the API key or token
         * doesn't have the scope for are left out. A Return waiting for a decision lists `decide`
         * and `cancel`. An open Return lists `cancel` only while no units have been received,
         * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
         * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
         * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
         * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[1] (Value):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. version.anyOf[1] (Value): integer. Goes up
         * with every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the Return. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * Who completed the Return. `system` when Flint completed it automatically. anyOf[1]
             * (Value): {@link ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What is still owed before the Return can complete. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still
             * owed before the Return can complete. Empty when nothing is. anyOf[1][] (Value):
             * {@link ReturnCompletionBlockerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic". anyOf[1] (Value): string. automatic completes the
             * Return when the last completion blocker clears; manual waits for POST
             * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
             * "manual", "automatic". anyOf[2] (Value): null.
             */
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other". anyOf[1] (Value):
             * string. Why the Return was completed by hand. Absent when Flint completed it
             * automatically. Value enum: "manual_completion", "exception_waived", "other".
             * anyOf[2] (Value): null.
             */
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            /**
             * Detail sent when the Return was completed by hand. anyOf[1] (Value): string. Detail
             * sent when the Return was completed by hand. anyOf[2] (Value): null.
             */
            "completion_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer the Return belongs to. anyOf[1] (Value): string. The customer the
             * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "decision_at"?: ((string) | (null));
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1]
             * (Value): string. Whether the requested units were approved. `pending` until one
             * decision covers every line. Value enum: "pending", "approved", "partially_approved",
             * "declined". anyOf[2] (Value): null.
             */
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. anyOf[1] (Value): {@link
             * ReturnFinancialSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1]
             * (Value): Array of {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer
             * still has to send back and where. Each entry leaves the list once it is satisfied,
             * so an empty list means nothing is waiting on the buyer. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created
             * this resource. `null` when that request sent no key, Flint created the resource, the
             * reader isn't the caller that created it (another app install, a buyer, or the
             * merchant reading an app's or buyer's record), or the caller that created an older
             * record is unknown. Filter its list with `idempotency_key` to find it. Recorded
             * payloads, including replayed responses and webhook events, can return `null`. To
             * find a key that a replay returns as `null`, read the resource. Buyer routes return
             * only keys from the buyer's namespace. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system". anyOf[1] (Value): string. Who created the Return: buyer for
             * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
             * user, integration for an API key or partner app, or system for Flint automation. It
             * cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[2]
             * (Value): null.
             */
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            /**
             * The lines being returned. anyOf[1] (Value): Array of {@link
             * ReturnLineItemPreviousAttributes}. The lines being returned. anyOf[1][] (Value):
             * {@link ReturnLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception". anyOf[1] (Value): string. On the Return, the least-finished
             * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
             * "partially_received", "inspection_required", "partially_inspected",
             * "inspection_review_required", "disposition_required", "resolved", "exception".
             * anyOf[2] (Value): null.
             */
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the Order the Return is against. anyOf[1] (Value): string. ID of the Order the
             * Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How your return policies judged the request when the Return was created. anyOf[1]
             * (Value): {@link ReturnPolicyEvaluationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed". anyOf[1] (Value):
             * string. Whether the buyer has received the value they are owed. Combines the
             * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
             * "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[2]
             * (Value): null.
             */
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs
             * of every disposition recorded for this Return, oldest first, including failed and
             * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1][] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
             * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same
             * order. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * Unique identifier for this return, prefixed `ret_`. anyOf[1] (Value): string. Unique
             * identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. anyOf[1] (Value): Array of string. IDs of every inspection recorded for
             * this Return, oldest first, including superseded inspections. Expand
             * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "return_inspection_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
             * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            /**
             * Human-readable number for the Return. anyOf[1] (Value): string. Human-readable
             * number for the Return. anyOf[2] (Value): null.
             */
            "return_number"?: ((string) | (null));
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. anyOf[1] (Value): Array of string. IDs of every receipt recorded for this
             * Return, oldest first, including superseded receipts. Expand `return_receipts` on
             * `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnReceiptPreviousAttributes}. Present only when `expand` includes
             * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1] (Value): Array of string. IDs of every resolution
             * created for this Return, oldest first, including failed and canceled resolutions.
             * Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2]
             * (Value): null.
             */
            "return_resolution_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
             * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. anyOf[1] (Value): Array of string. IDs of every shipment raised to
             * send this Return's items back, oldest first, including voided shipments. Expand
             * `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][]
             * (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes
             * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
             * anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled". anyOf[1] (Value): string. Where the whole
             * Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status`
             * for the part you need. Value enum: "requested", "open", "completed", "declined",
             * "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1] (Value): Array of
             * string. Actions that can succeed now. Actions the API key or token doesn't have the
             * scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
             * An open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1][] (Value): string.
             * Value enum: "cancel", "complete", "decide", "process", "reopen". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. anyOf[1]
             * (Value): integer. Goes up with every change to the Return. Each activity's
             * `return_version` is the version that activity produced. A write that takes
             * `expected_version` or `expected_return_version` for this Return compares it with
             * this value. Format: int64. minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * int64. minimum: 1. maximum: 158112000.
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
     * int64. minimum: 1. maximum: 158112000.
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
     * ANDed. [] enum: "not_selected", "pending", "requires_action", "completed", "failed". Value
     * enum: "not_selected", "pending", "requires_action", "completed", "failed". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "not_selected", "pending", "requires_action",
     * "completed", "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "requires_action", "completed", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "requires_action" | "completed" | "failed")
        | readonly ("not_selected" | "pending" | "requires_action" | "completed" | "failed")[]>;
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
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
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
     * ANDed. [] enum: "not_selected", "pending", "partially_completed", "requires_action",
     * "completed", "failed". Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed". anyOf[2] (Value): string.
     * Value enum: "not_selected", "pending", "partially_completed", "requires_action",
     * "completed", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_completed" | "requires_action" | "completed" | "failed")
        | readonly ("not_selected" | "pending" | "partially_completed" | "requires_action" | "completed" | "failed")[]>;
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
/** The request body for: Reveal a license key. */
export type RevealLicenseKeyRequestInput = {};
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
