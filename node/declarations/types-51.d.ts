import type { MerchantWebhookEnvelope, MoneyValue, MetadataMap, MoneyValueInput } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ReturnResolution, ReturnReplacementLineItem, ReturnResolutionAdjustment, ReturnReceipt } from './types-50.js';
import type {
    ResourceReference,
    RetryReturnResolutionRequestInput,
    ReturnActor,
    ReturnCompletionBlocker,
    ReturnDisposition
} from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnResolutionRequestInput, CancelReturnLineItemRequestInput } from './types-4.js';
import type { ConfirmReturnResolutionRequestInput, CompleteReturnRequestInput } from './types-6.js';
import type { MeCreateReturnResolutionCheckoutSessionParams, MeCancelReturnParams } from './types-33.js';
import type { ReleaseReturnResolutionRequestInput, ReopenReturnRequestInput } from './types-47.js';
import type { UpdateReturnResolutionRequestInput, UpdateReturnLineItemRequestInput, UpdateReturnRequestInput } from './types-60.js';
import type { BuyerAction } from './types-1.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedShipmentSummary } from './types-21.js';
import type {
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspection,
    ReturnLineItem,
    ReturnPolicyEvaluation
} from './types-49.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnRequestInput,
    CreateReturnReceiptRequestInput
} from './types-10.js';
import type { AddReturnLineItemRequestInput } from './types-0.js';
import type { CreateReturnResolutionRequestInput } from './types-11.js';
import type { DecideReturnRequestInput } from './types-14.js';
import type { ProcessExistingReturnRequestInput } from './types-44.js';
import type { WaiveReturnLineInspectionRequestInput } from './types-61.js';
import type {
    RevokeDeliveryDependencyTargetInput,
    RevokeDeliveryDependencyTargetDeliveryMethodRevision,
    RevokeDeliveryDependencyTargetDeliveryRateCallback,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey,
    RevokeDeliveryDependencyTargetLocationGeography
} from './types-52.js';
export type ReturnResolutionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.created";
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
    "event_type": "return_resolution.created";
});
/**
 * The `return_resolution.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnResolutionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
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
 * The `return_resolution.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
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
    /** A reference to another resource by `resource_type` and `resource_id`. */
    "linked_resource"?: ResourceReference;
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
    "return_line_item_id": string;
    "return_resolution_id": string;
    "return_resolution_line_item_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "returned_total_money": MoneyValue;
};
/** A return line and quantity to include in a return resolution. */
export type ReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
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
     *  [] (Value): {@link ReturnResolutionAdjustment}. A fee or credit applied to a return
     * resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /** Format: int64. minimum: 0. */
    "based_on_return_version": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_payment_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "calculated_at": string;
    "corrects_return_resolution_id"?: string;
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
export type ReturnResolutionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.updated";
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
    "event_type": "return_resolution.updated";
});
/**
 * The `return_resolution.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnResolutionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
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
 * The `return_resolution.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
});
export type ReturnResolutionsCancelParams = (InputValue<CancelReturnResolutionRequestInput>);
export type ReturnResolutionsConfirmParams = (InputValue<ConfirmReturnResolutionRequestInput>);
export type ReturnResolutionsCreateCheckoutSessionParams = MeCreateReturnResolutionCheckoutSessionParams;
export type ReturnResolutionsGetParams = {
    /**
     * Supported expansions: payment_intents, refunds, replacement_order. Expanded relationships
     * are returned only when explicitly requested and authorized. Limits: at most 10 unique expand
     * paths per request. To-many expansions are capped at 20 related objects per path. Repeat
     * expand, for example expand=payment_intents&expand=refunds, or pass one comma-separated
     * value. [] enum: "payment_intents", "refunds", "replacement_order". Value enum:
     * "payment_intents", "refunds", "replacement_order". anyOf[1] (Value): Array of string. []
     * enum: "payment_intents", "refunds", "replacement_order". anyOf[1][] (Value): string. Value
     * enum: "payment_intents", "refunds", "replacement_order". anyOf[2] (Value): string. Value
     * enum: "payment_intents", "refunds", "replacement_order".
     */
    "expand"?: InputValue<("payment_intents" | "refunds" | "replacement_order")
        | readonly ("payment_intents" | "refunds" | "replacement_order")[]>;
};
export type ReturnResolutionsListParams = {
    /**
     * Filter by action required by. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "buyer",
     * "merchant", "integration". Value enum: "buyer", "merchant", "integration". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "buyer", "merchant", "integration". anyOf[1][]
     * (Value): string. Value enum: "buyer", "merchant", "integration". anyOf[2] (Value): string.
     * Value enum: "buyer", "merchant", "integration".
     */
    "action_required_by"?: InputValue<("buyer" | "merchant" | "integration") | readonly ("buyer" | "merchant" | "integration")[]>;
    /** Filter by corrects return resolution id. */
    "corrects_return_resolution_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return resolution ID or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by resolution type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1][] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /** Filter by return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_line_item_id"?: InputValue<string>;
    /** Filter by return policy revision id. Example: "rpolv_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_policy_revision_id"?: InputValue<string>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". Value enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "proposed", "pending", "requires_action", "fulfilled", "failed",
     * "canceled". anyOf[1][] (Value): string. Value enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". anyOf[2] (Value): string. Value enum:
     * "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status"?: InputValue<("proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled")
        | readonly ("proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: replacement_order. Include the requested related resources using
     * scoped batch reads for this page. Each relationship requires its existing target read
     * scopes. Expansion changes the representation without changing pagination tokens. Limits: at
     * most 10 unique expand paths per request. Pass expand=replacement_order. [] enum:
     * "replacement_order". Value enum: "replacement_order". anyOf[1] (Value): Array of string. []
     * enum: "replacement_order". anyOf[1][] (Value): string. Value enum: "replacement_order".
     * anyOf[2] (Value): string. Value enum: "replacement_order".
     */
    "expand"?: InputValue<("replacement_order") | readonly ("replacement_order")[]>;
};
export type ReturnResolutionsReleaseParams = (InputValue<ReleaseReturnResolutionRequestInput>);
export type ReturnResolutionsRetryParams = (InputValue<RetryReturnResolutionRequestInput>);
export type ReturnResolutionsUpdateParams = (InputValue<UpdateReturnResolutionRequestInput>);
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
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "canceled_by"?: ReturnActor;
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
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "completed_by"?: ReturnActor;
    /**
     *  [] (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
     * complete, with the return line or record it concerns.
     */
    "completion_blockers": Array<ReturnCompletionBlocker>;
    /**
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Value enum: "manual_completion", "exception_waived", "other". */
    "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    "completion_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /** Value enum: "pending", "approved", "partially_approved", "declined". */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * The money for a return: returned value, deductions, credits, replacement total, and amounts
     * due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     *  [] (Value): {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise
     * back: the destination, instructions, line items, and expiry.
     */
    "handoff_requirements": Array<ReturnHandoffRequirement>;
    /**
     * Who created the Return, from the credential that sent the request: buyer for a customer
     * session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for
     * an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant",
     * "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**  [] (Value): {@link ReturnLineItem}. An item included in a return request. */
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
    "order_id": string;
    /**
     * How a return policy evaluated a return request: overall status and reason, the policy
     * revision used, and per-line results.
     */
    "policy_evaluation"?: ReturnPolicyEvaluation;
    /**
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
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
     * them inline. [] (Value): string.
     */
    "return_disposition_ids": Array<string>;
    /**
     *  [] (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "return_dispositions"?: Array<ReturnDisposition>;
    "return_id": string;
    /**
     * IDs of every inspection recorded for this Return, oldest first, including superseded
     * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string.
     */
    "return_inspection_ids": Array<string>;
    /**  [] (Value): {@link ReturnInspection}. An assessment of the condition of returned items. */
    "return_inspections"?: Array<ReturnInspection>;
    "return_number": string;
    /**
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. [] (Value):
     * string.
     */
    "return_receipt_ids": Array<string>;
    /**  [] (Value): {@link ReturnReceipt}. A record of returned items arriving at a location. */
    "return_receipts"?: Array<ReturnReceipt>;
    /**
     * IDs of every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     *  [] (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "return_resolutions"?: Array<ReturnResolution>;
    /**
     * IDs of every shipment raised to send this Return's items back, oldest first, including
     * voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * [] (Value): string.
     */
    "shipment_ids": Array<string>;
    /**
     *  [] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
     * direction, status, and package count, returned when the shipment is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /** Value enum: "requested", "open", "completed", "declined", "canceled". */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum: "cancel",
     * "complete", "decide", "reopen".
     */
    "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
/** A restocking fee in a return policy, charged as a flat amount or a percent. */
export type ReturnRestockingFeePolicy = {
    /** Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    /** Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/** A restocking fee in a return policy, charged as a flat amount or a percent. */
export type ReturnRestockingFeePolicyInput = {
    /** Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValueInput;
    /** Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/** A return line and the quantity placed in a return shipment or package. */
export type ReturnShipmentLineItemAllocationRequestInput = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Return line whose quantity is allocated to the shipment or package. minLength: 1. */
    "return_line_item_id": string;
};
/** Who pays for return shipping in a return policy: the merchant or the buyer. */
export type ReturnShippingPolicy = {
    /** Value enum: "merchant", "buyer". */
    "payer": "merchant" | "buyer" | (string & {});
};
/** Who pays for return shipping in a return policy: the merchant or the buyer. */
export type ReturnShippingPolicyInput = {
    /** Value enum: "merchant", "buyer". */
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
     * minLength: 1. maxLength: 255.
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
     * minLength: 1. maxLength: 255.
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
     * minLength: 1. maxLength: 255.
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
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
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
        "object": ReturnResource;
    };
    "event_type"?: "return.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.updated";
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
    "event_type": "return.updated";
});
/**
 * The `return.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
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
 * The `return.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
});
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindow = {
    /** Format: int64. */
    "duration_seconds": number;
    /** Value enum: "fulfilled", "delivered", "picked_up", "service_completed". */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed" | (string & {});
};
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindowInput = {
    /** Format: int64. */
    "duration_seconds": number;
    /** Value enum: "fulfilled", "delivered", "picked_up", "service_completed". */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed";
};
export type ReturnsCancelLineItemParams = (InputValue<CancelReturnLineItemRequestInput>);
export type ReturnsCancelParams = MeCancelReturnParams;
export type ReturnsCompleteParams = (InputValue<CompleteReturnRequestInput>);
export type ReturnsCreateAccessLinkParams = (InputValue<{}>);
export type ReturnsCreateDispositionParams = (CreateReturnDispositionRequestInput);
export type ReturnsCreateInspectionParams = (InputValue<CreateReturnInspectionRequestInput>);
export type ReturnsCreateLineItemParams = (InputValue<AddReturnLineItemRequestInput>);
export type ReturnsCreateParams = (InputValue<CreateReturnRequestInput>);
export type ReturnsCreateReceiptParams = (InputValue<CreateReturnReceiptRequestInput>);
export type ReturnsCreateResolutionParams = (CreateReturnResolutionRequestInput);
export type ReturnsDecideParams = (InputValue<DecideReturnRequestInput>);
export type ReturnsDeleteLineItemParams = {
    /**
     * Optional version of the parent Return. Supply exactly once. A stale value returns
     * VERSION_CONFLICT with the current Return version. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type ReturnsGetLineItemParams = {};
export type ReturnsGetParams = {
    /**
     * Supported expansions: customer, line_items.fulfillment, line_items.return_reason, order,
     * return_dispositions, return_inspections, return_receipts, return_resolutions, shipments.
     * Expanded relationships are returned only when explicitly requested and authorized. Limits:
     * at most 10 unique expand paths per request. To-many expansions are capped per path: at 100
     * related objects for return_dispositions, return_inspections, return_receipts,
     * return_resolutions, and shipments; at 20 for line_items.fulfillment and
     * line_items.return_reason. Repeat expand, for example
     * expand=customer&expand=line_items.fulfillment, or pass one comma-separated value. [] enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments". Value enum: "customer", "line_items.fulfillment", "line_items.return_reason",
     * "order", "return_dispositions", "return_inspections", "return_receipts",
     * "return_resolutions", "shipments". anyOf[1] (Value): Array of string. [] enum: "customer",
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
};
export type ReturnsListActivitiesParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type ReturnsListLineItemsParams = {
    /** Filter by fulfillment id. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
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
    /** Filter by order line item id. Example: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_line_item_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed". Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "not_selected", "pending", "requires_action", "fulfilled",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "requires_action", "fulfilled", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")[]>;
    /** Filter by return reason id. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "requested", "open",
     * "completed", "declined", "canceled". Value enum: "requested", "open", "completed",
     * "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value): string. Value
     * enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): string.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
};
export type ReturnsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Filter by customer id. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by decision status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "approved", "partially_approved", "declined". Value enum: "pending", "approved",
     * "partially_approved", "declined". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "approved", "partially_approved", "declined". anyOf[1][] (Value): string. Value
     * enum: "pending", "approved", "partially_approved", "declined". anyOf[2] (Value): string.
     * Value enum: "pending", "approved", "partially_approved", "declined".
     */
    "decision_status"?: InputValue<("pending" | "approved" | "partially_approved" | "declined")
        | readonly ("pending" | "approved" | "partially_approved" | "declined")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
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
    /** Filter by order id. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Search by return ID, return number, external reference ID, the order's number, or the
     * buyer's email.
     */
    "query"?: InputValue<string>;
    /** Filter by receiving location id. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * anyOf[1][] (Value): string. Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")[]>;
    /**
     * Filter by resolution type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1][] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /** Filter by return number. */
    "return_number"?: InputValue<string>;
    /** Filter by return reason id. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by return_id. Default:
     * "created_at". Value enum: "created_at".
     */
    "sort_by"?: InputValue<"created_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "requested", "open",
     * "completed", "declined", "canceled". Value enum: "requested", "open", "completed",
     * "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value): string. Value
     * enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): string.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by work type. Matches only returns that are still requested or open. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "decision", "handoff", "receipt", "inspection", "disposition",
     * "resolution", "exception". Value enum: "decision", "handoff", "receipt", "inspection",
     * "disposition", "resolution", "exception". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception". anyOf[1][] (Value): string. Value enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception". anyOf[2] (Value): string. Value
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception".
     */
    "work_type"?: InputValue<("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")
        | readonly ("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")[]>;
    /**
     * Supported expansions: customer, order. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or
     * pass one comma-separated value. [] enum: "customer", "order". Value enum: "customer",
     * "order". anyOf[1] (Value): Array of string. [] enum: "customer", "order". anyOf[1][]
     * (Value): string. Value enum: "customer", "order". anyOf[2] (Value): string. Value enum:
     * "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
};
export type ReturnsProcessParams = (InputValue<ProcessExistingReturnRequestInput>);
export type ReturnsReopenParams = (InputValue<ReopenReturnRequestInput>);
export type ReturnsUpdateLineItemParams = (InputValue<UpdateReturnLineItemRequestInput>);
export type ReturnsUpdateParams = (InputValue<UpdateReturnRequestInput>);
export type ReturnsWaiveLineItemInspectionParams = (InputValue<WaiveReturnLineInspectionRequestInput>);
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequest = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1.
     */
    "reversed_at"?: string;
};
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequestInput = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1.
     */
    "reversed_at"?: string | globalThis.Date;
};
/** The request body for: Revoke delivery dependency. */
export type RevokeDeliveryDependencyRequest = ({
    /**
     * Required when target.target_type is delivery_method or delivery_rate_callback. The version
     * of the stable resource whose current revision will be revoked. Omit it for exact revision,
     * geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /** A typed revocation target. Each target_type accepts only its resource-specific fields. */
    "target": RevokeDeliveryDependencyTarget;
});
/** The request body for: Revoke delivery dependency. */
export type RevokeDeliveryDependencyRequestInput = ({
    /**
     * Required when target.target_type is delivery_method or delivery_rate_callback. The version
     * of the stable resource whose current revision will be revoked. Omit it for exact revision,
     * geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other";
    /** A typed revocation target. Each target_type accepts only its resource-specific fields. */
    "target": RevokeDeliveryDependencyTargetInput;
});
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTarget = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method",
     * "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision"
        | (string & {});
})
    & ((Exclude<RevokeDeliveryDependencyTargetLocationGeography & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallback & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethod & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethodRevision & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethod = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method". */
    "target_type": "delivery_method" | (string & {});
})
    & (({
    /** Value enum: "delivery_method". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_method_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethodInput = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method". */
    "target_type": "delivery_method";
})
    & (({
    /** Value enum: "delivery_method". */
    "target_type": "delivery_method";
    /** minLength: 1. */
    "delivery_method_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
