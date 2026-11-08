import type {
    BuyerPaymentMethod,
    BuyerExpandedOrderSummary,
    BuyerPaymentCollection,
    BuyerPaymentErrorSummary,
    BuyerExpandedSubscriptionPlanSummary,
    BuyerOrderLineItemModifier,
    BuyerOrder,
    BuyerOrderPaymentAttempt
} from './types-2.js';
import type { ResponseMeta, ResolvePaymentLinkResponse } from './types-51.js';
import type { StripeClientSetup } from './types-57.js';
import type { ExpandedCustomerSummary, ExpandedPaymentIntentSummary } from './types-23.js';
import type { MoneyValue } from './types-37.js';
import type { PaymentRefund } from './types-45.js';
import type { RefundLineItemAllocation, RefundTaxBreakdownRefund, RefundTenderAllocation } from './types-50.js';
import type { BuyerAction, BundleComponent } from './types-1.js';
import type {
    ReturnFinancialSummary,
    ReturnEligibilitySelection,
    ReturnLineItemValue,
    ReturnLineItemDecisionProposal
} from './types-52.js';
import type { Image } from './types-27.js';
import type { ReturnReasonSummary, ReturnPolicyAdjustmentProposal } from './types-53.js';
import type { SelectedProductOption } from './types-56.js';
import type { Address } from './types-0.js';
import type { ReturnResolutionLineItemRequest, ReturnReplacementLineItem, ReturnResolutionLineItem } from './types-54.js';
import type { BuyerSubscriptionServiceLocation } from './types-4.js';
import type { SubscriptionDelivery, SubscriptionDeliveryHold, SubscriptionEndAfter, SubscriptionIntervalOption } from './types-58.js';
import type {
    SubscriptionPromotion,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionQuantityChangePreview,
    SubscriptionRenewalPreview
} from './types-60.js';
import type { CategoryReference } from './types-5.js';
import type { PaymentErrorSummary } from './types-43.js';
import type { OrderLineItemTax } from './types-39.js';
import type { SubscriptionPlanSwapVariant, SubscriptionPlanChangePreview, SubscriptionPreview } from './types-59.js';
/** A response containing `BuyerPaymentMethod` data. */
export type BuyerPaymentMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's saved
     * payment details.
     */
    "data": BuyerPaymentMethod;
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
 * The saved payment method, with `client_setup` when the buyer must still complete processor setup
 * before the payment method can be used. A customer's saved payment details.
 */
export type BuyerPaymentMethodWithSetup = (Exclude<BuyerPaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Present when the buyer must complete processor setup before using this payment method.
     * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call
     * now. setup_collection is guidance instead and never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
/** Money returned against a collected payment. */
export type BuyerRefund = {
    /**
     * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the credit note this refund paid out. Present only on refunds issued through a credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter,
     * so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * ID of the customer on the refunded order or payment. Absent when neither has one. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     */
    "idempotency_key"?: string;
    /**
     * ID of the invoice whose credit note this refund paid out. Present only on refunds issued
     * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * How the refund applied to each order line item it covered, with quantity, tax, and
     * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to one order
     * line item: quantity, refunded amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /**
     * The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it
     * is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@link
     * BuyerExpandedOrderSummary}. An order summary in a buyer response, with order status and
     * totals. Recorded buyer contact is omitted. anyOf[2] (Value): null.
     */
    "order"?: ((BuyerExpandedOrderSummary) | (null));
    /**
     * ID of the paid-order edit that created this refund. Present only on refunds issued through
     * an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id"?: string;
    /**
     * ID of the order the refund was issued against. Absent for a refund of a payment that has no
     * order, and for a standalone gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand`
     * parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded. anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /**
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * The part of the refund returned through each payment, with its own status. Absent when the
     * refund was all gift card credit or store credit. [] (Value): {@link PaymentRefund}. The part
     * of a refund returned through one payment, with the amount, tip, status, and any failure
     * reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /**
     * Who moved or is moving the money for this refund. Flint processes refunds through a
     * processor or a gift card; merchant means the merchant returned the money outside Flint and
     * recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant".
     */
    "processed_by": "flint" | "merchant" | (string & {});
    /**
     * The merchant's reason for the refund, which buyers never see. `null` when read with buyer
     * credentials, so it is always `null` here.
     */
    "reason": null;
    /** Note explaining the refund, up to 1,024 characters. */
    "reason_message"?: string;
    /**
     * Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string;
    /**
     * The merchant's opaque check, wire, or other reference for money returned outside Flint,
     * preserved exactly. Present only when processed_by is merchant and a reference was supplied.
     * external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * When the merchant reports that the money was returned outside Flint. Present only when
     * processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string;
    /**
     * Share of `amount_money` that refunds tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * ID of the return this refund paid out. Present only on refunds issued by a return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * ID of the return resolution that issued this refund. Present only on refunds issued by a
     * return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. Follow
     * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
     * refund.failed when its outcome changes, and refund.updated for other changes. Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * When `status` first became `succeeded`. For a refund with `payment_refunds` or
     * `tender_allocations`, it's when the last of them first succeeded, so it equals the latest
     * `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the
     * outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
     * `status` is `succeeded`; absent for every other status, including `partially_succeeded` and
     * a refund that failed after it succeeded. A refund that succeeds again shows its first
     * success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /**
     * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
     * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. [] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Every tender the refund drew from, payment or gift card, with its amount, tip share, status,
     * and destination. [] (Value): {@link RefundTenderAllocation}. One tender's share of a refund,
     * listed in the refund's tender allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `BuyerRefund` objects. */
export type BuyerRefundListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerRefund}. Money returned against a collected payment.
     */
    "data": Array<BuyerRefund>;
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
/** A response containing `BuyerRefund` data. */
export type BuyerRefundResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Money returned against a
     * collected payment.
     */
    "data": BuyerRefund;
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
/** The offer a buyer sees before canceling. Send at least one field. minProperties: 1. */
export type BuyerRetentionOffer = {
    /**
     * none: no offer. pause_instead: offer to pause for pause_cycles billing periods instead of
     * canceling. pause_instead needs pausing turned on. Default: "none". Value enum: "none",
     * "pause_instead".
     */
    "kind"?: "none" | "pause_instead" | (string & {});
    /**
     * Billing periods the offered pause lasts. Required when kind is pause_instead, and at most
     * pause.max_cycles when that is set. Not allowed with kind none. Format: int32. minimum: 1.
     * maximum: 12.
     */
    "pause_cycles"?: number;
};
/** The offer a buyer sees before canceling. Send at least one field. minProperties: 1. */
export type BuyerRetentionOfferRequestInput = {
    /**
     * none: no offer. pause_instead: offer to pause for pause_cycles billing periods instead of
     * canceling. pause_instead needs pausing turned on. Default: "none". Value enum: "none",
     * "pause_instead".
     */
    "kind"?: "none" | "pause_instead";
    /**
     * Billing periods the offered pause lasts. Required when kind is pause_instead, and at most
     * pause.max_cycles when that is set. Not allowed with kind none. Format: int32. minimum: 1.
     * maximum: 12.
     */
    "pause_cycles"?: number;
};
/** A request to send purchased items back. */
export type BuyerReturn = {
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * What is still owed before the Return can complete. Empty when nothing is. [] (Value): {@link
     * BuyerReturnCompletionBlocker}. A condition the buyer can resolve before the Return can
     * complete.
     */
    "completion_blockers": Array<BuyerReturnCompletionBlocker>;
    /**
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Whether the requested units were approved. `pending` until one decision covers every line.
     * Value enum: "pending", "approved", "partially_approved", "declined".
     */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * The Return's money in one place: the value of the returned lines, deductions and credits,
     * and what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     * What the buyer still has to send back and where. Each entry leaves the list once it is
     * satisfied, so an empty list means nothing is waiting on the buyer. [] (Value): {@link
     * BuyerReturnHandoffRequirement}. The merchandise quantities the buyer must hand off, with
     * their destination, instructions, and handoff status.
     */
    "handoff_requirements": Array<BuyerReturnHandoffRequirement>;
    /**
     * Who created the Return, from the credential that sent the request: buyer for a customer
     * session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for
     * an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant",
     * "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * The lines being returned. [] (Value): {@link BuyerReturnLineItem}. An item included in a
     * return request.
     */
    "line_items": Array<BuyerReturnLineItem>;
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
    /** Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
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
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /** Human-readable number for the Return. */
    "return_number": string;
    /**
     * IDs of every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /** [] enum: "cancel". [] (Value): string.  Value enum: "cancel". */
    "supported_actions": Array<"cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Goes up with every change to the Return. Each activity's `return_version` is the version
     * that activity produced. A write that takes `expected_version` or `expected_return_version`
     * for this Return compares it with this value. Format: int64. minimum: 0.
     */
    "version": number;
};
/** A condition the buyer can resolve before the Return can complete. */
export type BuyerReturnCompletionBlocker = {
    /**
     * A blocker the buyer can resolve. resolution_pending is included only for a payable
     * resolution. Value enum: "resolution_pending", "handoff_pending", "resolution_not_selected",
     * "resolution_requires_action", "resolution_failed".
     */
    "code": "resolution_pending"
        | "handoff_pending"
        | "resolution_not_selected"
        | "resolution_requires_action"
        | "resolution_failed"
        | (string & {});
    /** Explanation of what is still owed. */
    "message": string;
    /** ID of the Return line the entry is about. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id"?: string;
    /**
     * ID of the resolution holding this blocker up. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
};
/**
 * The buyer's Return eligibility preview for an order, including eligible items and policy
 * evaluation results.
 */
export type BuyerReturnEligibilityPreview = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /**
     * Eligibility of each line asked about. [] (Value): {@link
     * BuyerReturnEligibilityPreviewLineItem}. An order line item's Return eligibility, catalog
     * details, and suggested return reasons shown to the buyer.
     */
    "line_items": Array<BuyerReturnEligibilityPreviewLineItem>;
    /** ID of the Order the units come from. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * How the active return policies judged the lines. Return policy evaluation results shown to
     * the buyer, including eligibility and results for individual order lines.
     */
    "policy_evaluation": BuyerReturnPolicyEvaluation;
    /**
     * The selection the preview was run for. Which order lines to check for return eligibility:
     * all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /**
     * Overall result for the selection. `review_required` when the lines differ. Value enum:
     * "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * An order line item's Return eligibility, catalog details, and suggested return reasons shown to
 * the buyer.
 */
export type BuyerReturnEligibilityPreviewLineItem = {
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Whether the buyer can request this line themselves, through a customer session, right now.
     * False when no policy covers the item, when it is not eligible, or when the store offers no
     * reason for it. Read eligibility.reason and ineligibility_reason to say why.
     */
    "can_buyer_request": boolean;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * How the policy judged this line. An item's Return eligibility, eligible quantity, allowed
     * resolution types, and eligibility reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then
     * reasons that apply to every item. Each group sorts by handle ascending, with
     * return_reason_id ascending as the tiebreak. maxItems: 20. [] (Value): {@link
     * ReturnReasonSummary}. A return reason a buyer can pick for a line, with its `handle` and
     * whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/** The destination name, address, and type shown to the buyer for returning merchandise. */
export type BuyerReturnHandoffDestination = {
    /**
     * Postal address the buyer sends the merchandise to. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * What kind of place the destination is. Value enum: "buyer_address", "location",
     * "external_location".
     */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    /** Name of the destination. */
    "name"?: string;
};
/**
 * The merchandise quantities the buyer must hand off, with their destination, instructions, and
 * handoff status.
 */
export type BuyerReturnHandoffRequirement = {
    /**
     * Where the buyer sends the merchandise. The destination name, address, and type shown to the
     * buyer for returning merchandise.
     */
    "destination": BuyerReturnHandoffDestination;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** Instructions for the buyer on sending the merchandise. */
    "instructions"?: string;
    /**
     * Return lines and the quantities still expected. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /** Format: int64. */
    "shipment_count"?: number;
    /**
     * Whether the buyer has started sending merchandise back. A requirement leaves
     * handoff_requirements entirely once it is satisfied, so there is no terminal status and an
     * empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** An item included in a return request. */
export type BuyerReturnLineItem = {
    /**
     * Inspected units that were accepted. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "accepted_quantity": number;
    /**
     * Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Units the decision approved. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "approved_quantity": number;
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Example: "refund". Value enum:
     * "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "available_resolution_quantity": number;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Note the buyer gave about this line. Some return reasons require one. */
    "buyer_note"?: string;
    /**
     * Approved units canceled later. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "canceled_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Why the line's declined quantity was declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the decline. */
    "decline_reason_message"?: string;
    /**
     * Units the decision declined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "declined_quantity": number;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Units with a successful disposition. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "dispositioned_quantity": number;
    /**
     * How the pinned return policy judged this line when the Return was created, with the policy
     * revision it used. An item's Return eligibility, eligible quantity, allowed resolution types,
     * and eligibility reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /**
     * Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities
     * are not supported. Format: int64.
     */
    "handed_off_quantity": number;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Units that have been inspected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "inspected_quantity": number;
    /** Whether returned units of this line must be inspected. */
    "is_inspection_required"?: boolean;
    /**
     * Whether the decision overrode the pinned return policy's proposal. `override_reason` says
     * why.
     */
    "is_policy_overridden": boolean;
    /**
     * Where this line's merchandise stands, from handoff through disposition. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved".
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
        | (string & {});
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Units that arrived. Whole-number quantity; fractional quantities are not supported. Format:
     * int64.
     */
    "received_quantity": number;
    /**
     * Inspected units that were rejected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "rejected_quantity": number;
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Units the request asked to return. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "requested_quantity": number;
    /**
     * Outcome requested for this line when it was created. Absent when none was requested. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /**
     * Units whose resolution has finished. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "resolved_quantity": number;
    /** ID of the Return this line belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return line item, prefixed `retli_`. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_handle": string;
    /** ID of the reason chosen for this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id": string;
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_name": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64.
     */
    "return_required_quantity": number;
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Value of the line's units, fixed when the line was created: what the buyer paid for them,
     * less what was already refunded or returned. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "review_required_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Where this line stands. Same values and meanings as the Return's `status`, applied to the
     * line. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Always empty for buyer credentials. maxItems: 0. [] enum: "cancel", "waive_inspection". []
     * (Value): string. Value enum: "cancel", "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/**
 * An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility
 * reasons shown to the buyer.
 */
export type BuyerReturnLineItemEligibility = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Terms the policy proposes if the line is approved. Absent when the policy can't propose any.
     * The pinned policy decision recomputed for based_on_quantity. A decide with only
     * approved_quantity commits these values. Policy automatic resolution selects the policy
     * automatic_resolution_type for policy_default or the line's requested_resolution_type for
     * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
     * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution
     * also has no automatic_resolution_type. An unset release_timing is filled with
     * after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments. []
     * (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes
     * for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Explanation of `reason`. */
    "reason_message": string;
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * A selected modifier recorded on an item in the buyer's Return, including its modifier group name
 * and price.
 */
export type BuyerReturnLineItemModifier = {
    /** maxProperties: 0. */
    "metadata": {};
    /** Name of the modifier group recorded when this selection was added to the order line item. */
    "modifier_group_name": string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /** Value enum: "per_item", "per_line". */
    "pricing_scope": "per_item" | "per_line" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Whether this selection appears in fulfillment details, recorded when selected. */
    "show_on_fulfillment": boolean;
    /** Whether this selection appears on buyer receipts, recorded when selected. */
    "show_on_receipt": boolean;
    /** Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
    /**
     * Total price this selection adds to the line. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Amount added to the item's unit price for each unit of this selection, recorded when
     * selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** A page of `BuyerReturn` objects. */
export type BuyerReturnListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerReturn}. A request to send purchased items back.
     */
    "data": Array<BuyerReturn>;
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
 * Return policy evaluation results shown to the buyer, including eligibility and results for
 * individual order lines.
 */
export type BuyerReturnPolicyEvaluation = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * Eligibility of each line asked about. [] (Value): {@link
     * BuyerReturnPolicyEvaluationLineItem}. An order line's eligibility, allowed resolutions,
     * return requirements, and catalog details from the buyer's Return policy evaluation.
     */
    "line_items": Array<BuyerReturnPolicyEvaluationLineItem>;
    /**
     * Why the selection got this result. Value enum: "eligible_under_policy",
     * "manual_review_required", "return_window_expired", "quantity_unavailable",
     * "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict",
     * "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Explanation of `reason`. */
    "reason_message": string;
    /**
     * ID of the policy that judged the lines. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id"?: string;
    /**
     * ID of the policy revision that judged the lines. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Overall result for the selection. `review_required` when the lines differ. Value enum:
     * "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * An order line's eligibility, allowed resolutions, return requirements, and catalog details from
 * the buyer's Return policy evaluation.
 */
export type BuyerReturnPolicyEvaluationLineItem = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Description of the item as sold. */
    "description"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Whether the policy requires inspection of the returned units. */
    "is_inspection_required": boolean;
    /** Whether the policy requires the buyer to send the merchandise back. */
    "is_merchandise_return_required": boolean;
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments. []
     * (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes
     * for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /**
     * ID of the Location the policy sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then
     * reasons with no categories, each group sorted by handle. [] (Value): string. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "suggested_return_reason_ids": Array<string>;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/** A Return eligibility or resolution preview shown to the buyer, selected by mode. */
export type BuyerReturnPreview = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility"?: BuyerReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution"?: BuyerReturnResolutionPreview;
})
    & ((Exclude<BuyerReturnPreviewEligibility & object, readonly unknown[]>)
    | (Exclude<BuyerReturnPreviewResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `BuyerReturnPreview`. */
export type BuyerReturnPreviewEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility": BuyerReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution"?: BuyerReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility": BuyerReturnEligibilityPreview;
}));
/** The `resolution` variant of `BuyerReturnPreview`. */
export type BuyerReturnPreviewResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility"?: BuyerReturnEligibilityPreview;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution": BuyerReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution": BuyerReturnResolutionPreview;
}));
/** A response containing `BuyerReturnPreview` data. */
export type BuyerReturnPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A Return eligibility or
     * resolution preview shown to the buyer, selected by mode.
     */
    "data": BuyerReturnPreview;
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
/** The `bundle` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputBundle = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /** The catalog source of the replacement merchandise. Value enum: "bundle". */
    "type": unknown;
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputBundleInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "bundle". */
    "type": "bundle";
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /** The catalog source of the replacement merchandise. Value enum: "bundle". */
    "type": "bundle";
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})));
/** The `variant` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputVariant = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /** The catalog source of the replacement merchandise. Value enum: "variant". */
    "type": unknown;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The `variant` variant of `BuyerReturnReplacementLineItemInput`. */
export type BuyerReturnReplacementLineItemInputVariantInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant". */
    "type": "variant";
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /** The catalog source of the replacement merchandise. Value enum: "variant". */
    "type": "variant";
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
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
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant", "bundle". */
    "type": "variant" | "bundle" | (string & {});
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
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
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /** The catalog source of the replacement merchandise. Value enum: "variant", "bundle". */
    "type": "variant" | "bundle";
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<BuyerReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<BuyerReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>));
/** The refund, exchange, or other outcome of a return. */
export type BuyerReturnResolution = {
    /**
     * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the
     * exchange balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release".
     */
    "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
    /**
     * Who has to act while the resolution's status is `requires_action`. Value enum: "buyer",
     * "merchant".
     */
    "action_required_by"?: "buyer" | "merchant" | (string & {});
    /**
     * Fees and credits applied to the resolution's amounts. [] (Value): {@link
     * BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution shown to the buyer,
     * with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and
     * for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
     * deduction_money and replacement_total_money, when that balance is zero or more. For
     * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "confirmed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Credits added by the resolution's adjustments. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value): {@link
     * BuyerReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
     * can finish.
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
    /** When the resolution became fulfilled. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
     * Return lines and quantities the resolution covers. Absent on a correction. [] (Value):
     * {@link ReturnResolutionLineItem}. A return line included in a resolution, with its quantity
     * and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /** Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    /**
     * How replacement lines are priced. Present on exchanges and replacements. Value enum:
     * "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Total of the replacement items the buyer receives. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
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
    /** ID of the Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 0.
     */
    "version": number;
};
/**
 * An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied
 * amount, status, and reason.
 */
export type BuyerReturnResolutionAdjustment = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example:
     * "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ".
     */
    "return_resolution_adjustment_id": string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status": "applied" | "waived" | (string & {});
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
};
export type BuyerReturnResolutionCheckoutSessionResponse = ResolvePaymentLinkResponse;
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
    /**
     * ID of the Return line the blocker gates. Absent when it applies to the whole resolution.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
};
/**
 * The buyer's preview of a Return resolution, including returned items, replacements, adjustments,
 * and the amounts to refund or collect.
 */
export type BuyerReturnResolutionPreview = {
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution shown to the buyer,
     * with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /** Version of the Return the preview was priced against. Format: int64. minimum: 0. */
    "based_on_return_version": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_payment_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "calculated_at": string;
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
/** A response containing `BuyerReturnResolution` data. */
export type BuyerReturnResolutionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The refund, exchange, or
     * other outcome of a return.
     */
    "data": BuyerReturnResolution;
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
/** A response containing `BuyerReturn` data. */
export type BuyerReturnResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A request to send
     * purchased items back.
     */
    "data": BuyerReturn;
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
/** A response containing `BuyerPaymentMethodWithSetup` data. */
export type BuyerSavePaymentMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The saved payment
     * method, with `client_setup` when the buyer must still complete processor setup before the
     * payment method can be used. A customer's saved payment details.
     */
    "data": BuyerPaymentMethodWithSetup;
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
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
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
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /** Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at
     * when no separate handoff timestamp exists. For return shipments, this can satisfy an
     * after_handoff execution gate for the declared return_line_items. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "handed_off_at"?: string;
    /**
     * Order whose items are transported by the shipment. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /**
     * Return associated with this shipment, when its direction is return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return lines and quantities allocated to this return shipment. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /**
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/** A page of `BuyerShipment` objects. */
export type BuyerShipmentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerShipment}. A shipment carrying fulfilled order items.
     */
    "data": Array<BuyerShipment>;
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
/** A response containing `BuyerShipment` data. */
export type BuyerShipmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A shipment carrying
     * fulfilled order items.
     */
    "data": BuyerShipment;
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
     * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
     * schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * How often the subscription bills now. Read with billing_interval_count: monthly with a count
     * of 3 bills quarterly. A change applies from the next renewal that has not been paid;
     * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of billing_interval units between charges. Changes with billing_interval. Format:
     * int32.
     */
    "billing_interval_count": number;
    /**
     * Billing interval and count pairs frozen from the plan or shared by the subscription offers.
     * Every option bills the same recorded line prices once per period. Changing the interval does
     * not scale those prices. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
     * Every option bills the same line prices once per period; prices are not scaled by the
     * interval. For a different price per interval, create separate plans.
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
     * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change, then
     * renew, under the store's buyer policy. The available cancel and pause actions carry the
     * choices they accept. A buyer's read or change through a customer session on /v1/me, or in
     * Flint's buyer account, lists all fourteen every time; a merchant read gets an empty list.
     * update_payment_method is required while a payment is past due, due by next_retry_at when a
     * retry is scheduled, and when the card expires before next_billing_at, due by then. Example:
     * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
     * invoice or return they read through /v1/me. Show the actions with is_required as what needs
     * the buyer's attention, and the first available action as the primary action on the
     * resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
     * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when the
     * automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
     */
    "cancellation_reason"?: "buyer"
        | "merchant"
        | "integration"
        | "payment_failed"
        | "other"
        | "end_after_reached"
        | (string & {});
    /**
     * Billing cycles charged so far, including cycles imported with
     * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
     * number plus one. Format: uint64. minimum: 0.
     */
    "completed_cycles": number;
    /**
     * When the recorded contract term ends. Does not move when the subscription pauses or changes
     * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "contract_end_at"?: string;
    /**
     * When the recorded contract term started. Does not move when the subscription pauses or
     * changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "contract_start_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_start_at"?: string;
    /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
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
     * Recorded automatic end condition. Null when no automatic end is set. Cycles count charged
     * billing periods, including imported completed_cycles. Pauses and skips do not use cycles.
     * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date,
     * and cancellation waits for the last remaining delivery. Skipping defers a delivery without
     * consuming its entitlement. Ending never refunds. anyOf[1] (Value): {@link
     * SubscriptionEndAfter}. The subscription's automatic end condition, measured by charged
     * billing cycles or a saved local calendar date. anyOf[2] (Value): null.
     */
    "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
    /**
     * Projected end under the current schedule and committed plan changes, including an earlier
     * scheduled cancellation. A date limit preserves already-paid entitlement without requiring a
     * future charge schedule. A reached cycle limit uses the last paid period end, or
     * current_period_end_at when no paid history exists; that fallback includes any skip or pause
     * extension. A cycle limit with cycles left needs a future charge schedule unless a known
     * scheduled cancellation determines the end. Null when the end cannot be determined or the
     * subscription is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | null;
    /**
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date.
     */
    "is_awaiting_billing_schedule"?: boolean;
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
     * failure. Format: date-time. Example: "2026-08-02T16:00:00Z". message (Required): string.
     * Flint-authored payment failure message written for the buyer. This is stable explanatory
     * text, not raw provider copy.
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
        /**
         * Time the payment attempt concluded in failure. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
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
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is
     * past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "missed_billing_at"?: string;
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "next_billing_at"?: string;
    /**
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "next_retry_at": string | null;
    /**
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "paused_at"?: string;
    /**
     * First charge boundary while no card is bound: the later of trial_end_at and next_billing_at
     * during a trial, or the next billing date for an imported period, even when that cycle's
     * charge is zero. Recomputed when the schedule changes. A trial still without a card at its
     * boundary cancels without an order or payment attempt. At that boundary, an imported
     * subscription with a positive charge that still has no card enters its normal dunning
     * schedule without a payment attempt. For an imported subscription, a zero charge completes
     * the renewal without a card and the deadline advances to the following boundary. Null when a
     * card is bound, collection is not scheduled (paused, canceled, or set to cancel at period
     * end), or an external schedule has no known boundary. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "payment_method_due_at": string | null;
    /**
     * Saved payment method used for renewal charges. Null when no card is bound. Bind a card to
     * this subscription with PATCH; changing the customer's default alone does not bind it.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string | null;
    /**
     * Plans this subscription may choose, in the store's display order. Includes only active plans
     * with the same currency and delivery requirement whose billing timing is allowed in this
     * subscription's current state. Empty when no plan change is available. maxItems: 25. []
     * (Value): {@link BuyerSubscriptionPlanChangeOption}. A subscription plan this buyer may
     * choose, with the store's billing timing and the target plan's summary.
     */
    "plan_change_options": Array<BuyerSubscriptionPlanChangeOption>;
    /**
     * Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. [] (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
     * subscription, including its recurrence and remaining discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * Whether this subscription was created to prorate its first anchored paid period. Set at
     * creation and never changes; starting on the anchor day still bills a normal full period.
     */
    "prorate_first_period": boolean;
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
     * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when
     * there is no cycle limit or the subscription is canceled. Format: uint64. minimum: 0.
     */
    "remaining_cycles": number | null;
    /**
     * When Flint accepted a pending resume request. Set only while paused with a resume Flint has
     * not applied yet. Clears when Flint resumes the subscription or refuses the request. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "resume_requested_at": string | null;
    /**
     * When the scheduled cancellation takes effect: trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. Null when
     * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_cancel_at": string | null;
    /**
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. anyOf[1]
     * (Value): {@link BuyerSubscriptionScheduledPlanChange}. Frozen target terms that apply at the
     * next charged renewal. anyOf[2] (Value): null.
     */
    "scheduled_plan_change": ((BuyerSubscriptionScheduledPlanChange) | (null));
    /**
     * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1.
     * Always present; empty when no promotions are scheduled. [] (Value): {@link
     * SubscriptionPromotion}. A recurring promotion applied to a subscription, including its
     * recurrence and remaining discounted cycles.
     */
    "scheduled_promotions": Array<SubscriptionPromotion>;
    /**
     * When a pause with a length (pause_duration_cycles) resumes on its own: that many billing
     * intervals after paused_at. Null when the subscription is not paused or the pause has no
     * length, such as a pause until you resume it or the pause Flint starts when a delivery hold
     * runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /**
     * Where the subscription is in its lifecycle. Each value says what it means. Value enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id": string;
    /**
     *  anyOf[1] (Value): {@link BuyerExpandedSubscriptionPlanSummary}. A subscription plan
     * expanded on a buyer's order: billing interval, setup fee, trial length, status, and line
     * items. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((BuyerExpandedSubscriptionPlanSummary) | (null));
    /**
     * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Terms come from the subscription plan in subscription_plan_id, or from subscription offers
     * identified on each offer line by subscription_offer_id. Value enum: "subscription_plan",
     * "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "trial_end_at"?: string;
    /**
     * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
     * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
     * subscription's delivery, and who can fix it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Goes up with every change to the subscription, including renewals and other changes Flint
     * makes. Send it as `expected_version` to apply an update only if nothing changed. Format:
     * uint64. minimum: 0.
     */
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
    /** When the cancellation was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "requested_at": string;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the
     * attribution with initiated_by; customer sessions always record buyer. Value enum: "buyer",
     * "merchant", "integration".
     */
    "requested_by": "buyer" | "merchant" | "integration" | (string & {});
};
/** An item included in a customer's recurring purchase. */
export type BuyerSubscriptionLineItem = {
    /** Whether the frozen terms allow the buyer to adjust this line quantity. */
    "allow_quantity_adjustment": boolean;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "base_subtotal_money": MoneyValue;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any
     * quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1. maximum: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     */
    "min_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "modifier_total_money": MoneyValue;
    /**
     *  [] (Value): {@link BuyerOrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers"?: Array<BuyerOrderLineItemModifier>;
    "name": string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription line item, prefixed `sli_`. Example:
     * "sli_01KEZF7C00PPWVJ2N321V84ASA".
     */
    "subscription_line_item_id"?: string;
    /** Example: "soffer_01KEZF7C00KAA9Y1X1KM70YFAA". */
    "subscription_offer_id"?: string;
    /** Example: "spli_01KEZF7C00H9FGC2KBRF82H87N". */
    "subscription_plan_line_item_id"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /**
     * Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
};
/** A page of `BuyerSubscription` objects. */
export type BuyerSubscriptionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerSubscription}. A customer's recurring purchase.
     */
    "data": Array<BuyerSubscription>;
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
 * A retry of a past-due payment on the buyer's subscription. Includes, when available, the buyer's
 * order and a failure they can act on. Omits the store's idempotency keys and payment attempt IDs.
 */
export type BuyerSubscriptionPaymentRetry = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /** Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id": string;
    /**
     * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
     * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     */
    "subscription_payment_retry_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `BuyerSubscriptionPaymentRetry` objects. */
export type BuyerSubscriptionPaymentRetryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the buyer's subscription.
     * Includes, when available, the buyer's order and a failure they can act on. Omits the store's
     * idempotency keys and payment attempt IDs.
     */
    "data": Array<BuyerSubscriptionPaymentRetry>;
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
/** A response containing `BuyerSubscriptionPaymentRetry` data. */
export type BuyerSubscriptionPaymentRetryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A retry of a past-due
     * payment on the buyer's subscription. Includes, when available, the buyer's order and a
     * failure they can act on. Omits the store's idempotency keys and payment attempt IDs.
     */
    "data": BuyerSubscriptionPaymentRetry;
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
 * A subscription plan this buyer may choose, with the store's billing timing and the target plan's
 * summary.
 */
export type BuyerSubscriptionPlanChangeOption = {
    /**
     * The store's billing timing for this target: now collects a new period with unused-time
     * credit; next_renewal changes the plan now and keeps the current paid period and next billing
     * date; period_end keeps the current plan until the next charged renewal; prorated_now charges
     * the difference for the rest of the current period and keeps the period and anchor. Value
     * enum: "now", "next_renewal", "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * The target plan's current summary. A subscription plan expanded on a buyer's order: billing
     * interval, setup fee, trial length, status, and line items.
     */
    "subscription_plan": BuyerExpandedSubscriptionPlanSummary;
    /**
     * The target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
/**
 * The subscription is the primary resource and expected_version target; the result uses the same
 * subscription and order fields as the corresponding /v1/me reads. The order and
 * order_payment_attempt are null when billing_starts is next_renewal or period_end, or the
 * prorated_now net charge is zero.
 */
export type BuyerSubscriptionPlanChangeResult = {
    /**
     * The resolved billing timing for this plan change. Value enum: "now", "next_renewal",
     * "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * The new period or proration order when billing_starts is now or prorated_now, including a
     * closed unpaid order when payment fails. Null when billing_starts is next_renewal or
     * period_end, or a prorated_now net charge is zero. anyOf[1] (Value): {@link BuyerOrder}. A
     * customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((BuyerOrder) | (null));
    /**
     * The recorded payment attempt when billing_starts is now or prorated_now, including declines.
     * Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is
     * zero. anyOf[1] (Value): {@link BuyerOrderPaymentAttempt}. An attempt to pay an order.
     * anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /**
     * The subscription after this request, including any scheduled plan change, or the unchanged
     * subscription when payment fails. A customer's recurring purchase.
     */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionPlanChangeResult` data. */
export type BuyerSubscriptionPlanChangeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription is the
     * primary resource and expected_version target; the result uses the same subscription and
     * order fields as the corresponding /v1/me reads. The order and order_payment_attempt are null
     * when billing_starts is next_renewal or period_end, or the prorated_now net charge is zero.
     */
    "data": BuyerSubscriptionPlanChangeResult;
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
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItem = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & ((Exclude<BuyerSubscriptionPlanLineItemVariant & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemBundle & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemBundle = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
}));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemCustom = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    "name": string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemVariant = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
}));
/** The response for: Preview subscription. */
export type BuyerSubscriptionPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@link
     * SubscriptionPreview}. Available subscription delivery methods shown to the buyer. oneOf[2]
     * (Value): {@link SubscriptionRenewalPreview}. A preview of a subscription's next renewal and
     * its estimated pricing. oneOf[3] (Value): {@link SubscriptionPlanChangePreview}. Estimated
     * pricing for a subscription plan change, including the recurring item subtotal and renewal
     * amounts. oneOf[4] (Value): {@link SubscriptionQuantityChangePreview}. Estimated pricing for
     * a quantity change that keeps the billing period and anchor.
     */
    "data": ((SubscriptionPreview)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (SubscriptionQuantityChangePreview)
        | (Record<string, unknown>));
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
 * The subscription and any immediate prorated billing outcome. A decline leaves the subscription
 * unchanged.
 */
export type BuyerSubscriptionQuantityChangeResult = {
    /**
     * The resolved billing timing for this quantity change. Value enum: "prorated_now",
     * "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end" | (string & {});
    /**
     * The proration order, including a closed unpaid order on decline. Null when billing_starts is
     * next_renewal or period_end, or the net charge is zero. anyOf[1] (Value): {@link BuyerOrder}.
     * A customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((BuyerOrder) | (null));
    /**
     * The payment attempt, including declines. Null when billing_starts is next_renewal or
     * period_end, or the net charge is zero. anyOf[1] (Value): {@link BuyerOrderPaymentAttempt}.
     * An attempt to pay an order. anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /**
     * The updated subscription, or the unchanged subscription when payment fails. A customer's
     * recurring purchase.
     */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionQuantityChangeResult` data. */
export type BuyerSubscriptionQuantityChangeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription and any
     * immediate prorated billing outcome. A decline leaves the subscription unchanged.
     */
    "data": BuyerSubscriptionQuantityChangeResult;
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
     * Resource, collection, or operation result returned by this request. The subscription is the
     * primary resource and expected_version target; the result uses the same subscription and
     * order fields as the corresponding /v1/me reads.
     */
    "data": BuyerSubscriptionRenewalResult;
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
/** A response containing `BuyerSubscription` data. */
export type BuyerSubscriptionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's recurring
     * purchase.
     */
    "data": BuyerSubscription;
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
/** Frozen target terms that apply at the next charged renewal. */
export type BuyerSubscriptionScheduledPlanChange = {
    /** The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Number of target billing_interval units between charges. Format: int32. */
    "billing_interval_count": number;
    /**
     * Expected boundary from the current billing schedule. Null when the subscription is paused
     * without a scheduled resume or is waiting for an external billing date. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "effective_at": string | null;
    /**
     * Frozen target lines, including buyer quantity permissions and bounds. [] (Value): {@link
     * BuyerSubscriptionLineItem}. An item included in a customer's recurring purchase.
     */
    "line_items": Array<BuyerSubscriptionLineItem>;
    /**
     * The frozen target subscription quantity. Whole-number quantity; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity": number;
    /**
     * Frozen item subtotal per target billing period, before discounts, shipping, and tax.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "recurring_subtotal_money": MoneyValue;
    /** Who scheduled the plan change. Value enum: "buyer", "merchant". */
    "requested_by": "buyer" | "merchant" | (string & {});
    /** When the plan change was scheduled. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "scheduled_at": string;
    /**
     * The scheduled target plan summary, including archived plans. A subscription plan expanded on
     * a buyer's order: billing interval, setup fee, trial length, status, and line items.
     */
    "subscription_plan": BuyerExpandedSubscriptionPlanSummary;
    /**
     * The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
