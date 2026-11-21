import type {
    ExpandedCustomerSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedOrderSummary,
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentIntentSummaryPreviousAttributes,
    DisputesAcceptParams,
    ExpandedPayoutDestinationSummary,
    ExpandedPayoutDestinationSummaryPreviousAttributes
} from './types-26.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type { ResourceReference, ResourceReferencePreviousAttributes, ResponseMeta } from './types-62.js';
import type { PaymentReview } from './types-53.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { InputValue } from '../runtime.js';
import type { DeclinePaymentReviewRequestInput } from './types-17.js';
import type { StatementDescriptorStatus } from './types-68.js';
import type { ReaderPaymentSourceTip, ReaderPaymentSourceTipInput } from './types-59.js';
import type { ExpandedPayoutSummary, ExpandedPayoutSummaryPreviousAttributes } from './types-27.js';
import type { PayoutTraceID, PayoutTraceIDPreviousAttributes } from './types-55.js';
/**
 * The `payment_review.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. `null`
     * when the review isn't closed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_by (Required): {@link ResourceReference} or null. The credential that closed
     * this payment review. Null when Flint closed it. object.closed_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.closed_by.anyOf[2] (Value): null. object.closed_reason (Required): string or null.
     * How the review was resolved. `null` when the review isn't closed. Value enum: "approved",
     * "declined", "refunded", "disputed", "payment_canceled", "expired", null. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. ID of the customer the payment was made for.
     * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. The buyer's IP address recorded for the
     * payment when it was confirmed. `null` when no buyer IP address was supplied for the payment.
     * object.last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null.
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. object.last_resolution_failure.anyOf[1]
     * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
     * refund, with the `refund_id` and when it failed. object.last_resolution_failure.anyOf[2]
     * (Value): null. object.matched_risk_rule_id (Required): string. ID of the risk rule with the
     * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * object.opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.opened_reason (Required): string. Why Flint opened the
     * review. Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id
     * (Required): string or null. ID of the order the payment belongs to. `null` when the payment
     * doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow
     * (Required): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_review_id (Required): string. Unique identifier for this payment review,
     * prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary
     * (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the payment as it was when
     * the review opened. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund created when the payment was
     * declined. It can be set while status is resolving, before the refund finishes and the review
     * closes. `null` when no refund exists for the review, including after a decline that needed
     * none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * object.refunded_money (Required): {@link MoneyValue} or null. Refunded amount for this
     * review. Null when no refund is recorded. object.refunded_money.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. `null` when nobody has started approving or declining the
     * review and Flint hasn't started expiring it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.resolution_started_by (Required): {@link ResourceReference}
     * or null. The credential that started resolving this payment review, retained after closure.
     * Null when no resolution has started or Flint started it.
     * object.resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.resolution_started_by.anyOf[2]
     * (Value): null. object.risk (Required): {@link PaymentReviewRisk}. The payment's risk level
     * and score when the review opened. The risk assessment shown on a review: a `level` and, when
     * available, a numeric `score`. object.status (Required): string. Where the review is in its
     * lifecycle. Value enum: "open", "resolving", "closed". object.supported_actions (Required):
     * Array of string. Lifecycle actions accepted in the current stored review state. An action
     * remains listed while it is processing or can be repeated without changing the result. []
     * enum: "approve", "decline". object.supported_actions[] (Value): string. Value enum:
     * "approve", "decline". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.closed_at (Optional): string or null. RFC3339
     * timestamp. `null` when the review isn't closed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. `null` when the review isn't closed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value): null.
     * previous_attributes.closed_by (Optional): {@link ResourceReferencePreviousAttributes} or
     * null. The credential that closed this payment review. Null when Flint closed it.
     * previous_attributes.closed_by.anyOf[1] (Value): {@link ResourceReferencePreviousAttributes}.
     * previous_attributes.closed_by.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. How the review was resolved. `null` when the review isn't
     * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
     * "expired", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the review
     * was resolved. `null` when the review isn't closed. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.customer
     * (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer the
     * payment was made for. `null` when the payment has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer the payment was
     * made for. `null` when the payment has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.ip_address (Optional): string or null. The buyer's IP address recorded
     * for the payment when it was confirmed. `null` when no buyer IP address was supplied for the
     * payment. previous_attributes.ip_address.anyOf[1] (Value): string. The buyer's IP address
     * recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied
     * for the payment. previous_attributes.ip_address.anyOf[2] (Value): null.
     * previous_attributes.last_resolution_failure (Optional): {@link
     * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
     * attempt that failed. Set when a decline's refund failed and the review reopened. Null when
     * no attempt has failed. previous_attributes.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailurePreviousAttributes}.
     * previous_attributes.last_resolution_failure.anyOf[2] (Value): null.
     * previous_attributes.matched_risk_rule_id (Optional): string or null. ID of the risk rule
     * with the review action that opened this review.
     * previous_attributes.matched_risk_rule_id.anyOf[1] (Value): string. ID of the risk rule with
     * the review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * previous_attributes.matched_risk_rule_id.anyOf[2] (Value): null.
     * previous_attributes.opened_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.opened_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.opened_at.anyOf[2] (Value):
     * null. previous_attributes.opened_reason (Optional): string or null. Why Flint opened the
     * review. Value enum: "rule". previous_attributes.opened_reason.anyOf[1] (Value): string. Why
     * Flint opened the review. Value enum: "rule". previous_attributes.opened_reason.anyOf[2]
     * (Value): null. previous_attributes.order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order.
     * previous_attributes.order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
     * belong to an order. previous_attributes.order_id.anyOf[1] (Value): string. ID of the order
     * the payment belongs to. `null` when the payment doesn't belong to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.payment_flow (Optional): string or null. How the reviewed payment was
     * started. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[1]
     * (Value): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[2] (Value): null.
     * previous_attributes.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intent`; `null` when expanded and there is no related payment intent.
     * previous_attributes.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. previous_attributes.payment_intent.anyOf[2]
     * (Value): null. previous_attributes.payment_intent_id (Optional): string or null. ID of the
     * payment intent under review. previous_attributes.payment_intent_id.anyOf[1] (Value): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null.
     * previous_attributes.payment_review_id (Optional): string or null. Unique identifier for this
     * payment review, prefixed `rev_`. previous_attributes.payment_review_id.anyOf[1] (Value):
     * string. Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.payment_review_id.anyOf[2] (Value):
     * null. previous_attributes.payment_summary (Optional): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes} or null. A snapshot of the payment as it was
     * when the review opened. previous_attributes.payment_summary.anyOf[1] (Value): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes}. previous_attributes.payment_summary.anyOf[2]
     * (Value): null. previous_attributes.pending_action (Optional): string or null. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[1] (Value): string. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[2] (Value): null.
     * previous_attributes.refund_id (Optional): string or null. The refund created when the
     * payment was declined. It can be set while status is resolving, before the refund finishes
     * and the review closes. `null` when no refund exists for the review, including after a
     * decline that needed none or when the review is open. previous_attributes.refund_id.anyOf[1]
     * (Value): string. The refund created when the payment was declined. It can be set while
     * status is resolving, before the refund finishes and the review closes. `null` when no refund
     * exists for the review, including after a decline that needed none or when the review is
     * open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_id.anyOf[2]
     * (Value): null. previous_attributes.refunded_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no refund
     * is recorded. previous_attributes.refunded_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_at (Optional): string or null. RFC3339 timestamp.
     * `null` when nobody has started approving or declining the review and Flint hasn't started
     * expiring it. previous_attributes.resolution_started_at.anyOf[1] (Value): string. RFC3339
     * timestamp. `null` when nobody has started approving or declining the review and Flint hasn't
     * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.resolution_started_at.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_by (Optional): {@link
     * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
     * payment review, retained after closure. Null when no resolution has started or Flint started
     * it. previous_attributes.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReferencePreviousAttributes}. previous_attributes.resolution_started_by.anyOf[2]
     * (Value): null. previous_attributes.risk (Optional): {@link
     * PaymentReviewRiskPreviousAttributes} or null. The payment's risk level and score when the
     * review opened. previous_attributes.risk.anyOf[1] (Value): {@link
     * PaymentReviewRiskPreviousAttributes}. previous_attributes.risk.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Where the review is in its lifecycle.
     * Value enum: "open", "resolving", "closed". previous_attributes.status.anyOf[1] (Value):
     * string. Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted in the current stored review
     * state. An action remains listed while it is processing or can be repeated without changing
     * the result. [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions accepted in the current stored review state. An
     * action remains listed while it is processing or can be repeated without changing the result.
     * [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "approve", "decline". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. `null` when the review isn't closed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". closed_by (Required): {@link
         * ResourceReference} or null. The credential that closed this payment review. Null when
         * Flint closed it. closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null.
         * closed_reason (Required): string or null. How the review was resolved. `null` when the
         * review isn't closed. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. ID of the customer the payment was made for. `null` when the
         * payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. The buyer's IP address recorded for the payment when it was
         * confirmed. `null` when no buyer IP address was supplied for the payment.
         * last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null. The
         * most recent resolution attempt that failed. Set when a decline's refund failed and the
         * review reopened. Null when no attempt has failed. last_resolution_failure.anyOf[1]
         * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
         * refund, with the `refund_id` and when it failed. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Required): string. ID of the risk rule with the
         * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
         * opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". opened_reason (Required): string. Why Flint opened the review.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
         * belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment intent under review. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id (Required): string. Unique identifier
         * for this payment review, prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * payment_summary (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the
         * payment as it was when the review opened. The payment details shown on a review: amount,
         * capture method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund created when the payment was declined. It can be
         * set while status is resolving, before the refund finishes and the review closes. `null`
         * when no refund exists for the review, including after a decline that needed none or when
         * the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money
         * (Required): {@link MoneyValue} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * refunded_money.anyOf[2] (Value): null. resolution_started_at (Required): string or null.
         * RFC3339 timestamp. `null` when nobody has started approving or declining the review and
         * Flint hasn't started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * resolution_started_by (Required): {@link ResourceReference} or null. The credential that
         * started resolving this payment review, retained after closure. Null when no resolution
         * has started or Flint started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReference}. A reference to another resource by `resource_type` and
         * `resource_id`. resolution_started_by.anyOf[2] (Value): null. risk (Required): {@link
         * PaymentReviewRisk}. The payment's risk level and score when the review opened. The risk
         * assessment shown on a review: a `level` and, when available, a numeric `score`. status
         * (Required): string. Where the review is in its lifecycle. Value enum: "open",
         * "resolving", "closed". supported_actions (Required): Array of string. Lifecycle actions
         * accepted in the current stored review state. An action remains listed while it is
         * processing or can be repeated without changing the result. [] enum: "approve",
         * "decline". supported_actions[] (Value): string. Value enum: "approve", "decline".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment.
             */
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. Example:
             * "rule_01KEZF7C00FWGAQJXXA8CRA319".
             */
            "matched_risk_rule_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Why Flint opened the review. Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * A snapshot of the payment as it was when the review opened. The payment details
             * shown on a review: amount, capture method, authorization expiry, card brand and last
             * four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The payment's risk level and score when the review opened. The risk assessment shown
             * on a review: a `level` and, when available, a numeric `score`.
             */
            "risk": PaymentReviewRisk;
            /** Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. `null` when the review isn't closed. closed_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that closed this payment
         * review. Null when Flint closed it. closed_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. closed_by.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the review was resolved. `null` when the review isn't
         * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
         * "expired", null. closed_reason.anyOf[1] (Value): string. How the review was resolved.
         * `null` when the review isn't closed. Value enum: "approved", "declined", "refunded",
         * "disputed", "payment_canceled", "expired", null. closed_reason.anyOf[2] (Value): null.
         * customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer the payment was made for. `null` when the payment has no customer.
         * customer_id.anyOf[1] (Value): string. ID of the customer the payment was made for.
         * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. ip_address (Optional): string or null. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[1] (Value): string. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[2] (Value): null.
         * last_resolution_failure (Optional): {@link
         * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
         * attempt that failed. Set when a decline's refund failed and the review reopened. Null
         * when no attempt has failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailurePreviousAttributes}. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Optional): string or null. ID of the risk rule with
         * the review action that opened this review. matched_risk_rule_id.anyOf[1] (Value):
         * string. ID of the risk rule with the review action that opened this review. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". matched_risk_rule_id.anyOf[2] (Value): null.
         * opened_at (Optional): string or null. RFC3339 timestamp. opened_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * opened_at.anyOf[2] (Value): null. opened_reason (Optional): string or null. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[1] (Value): string. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[2] (Value): null. order
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the order the payment belongs
         * to. `null` when the payment doesn't belong to an order. order_id.anyOf[1] (Value):
         * string. ID of the order the payment belongs to. `null` when the payment doesn't belong
         * to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_flow (Optional): string or null. How the reviewed payment was started. Value
         * enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_flow.anyOf[1] (Value):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_flow.anyOf[2] (Value): null. payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
         * payment_intent.anyOf[2] (Value): null. payment_intent_id (Optional): string or null. ID
         * of the payment intent under review. payment_intent_id.anyOf[1] (Value): string. ID of
         * the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. payment_review_id (Optional): string or null.
         * Unique identifier for this payment review, prefixed `rev_`. payment_review_id.anyOf[1]
         * (Value): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_review_id.anyOf[2] (Value): null.
         * payment_summary (Optional): {@link PaymentReviewPaymentSummaryPreviousAttributes} or
         * null. A snapshot of the payment as it was when the review opened.
         * payment_summary.anyOf[1] (Value): {@link PaymentReviewPaymentSummaryPreviousAttributes}.
         * payment_summary.anyOf[2] (Value): null. pending_action (Optional): string or null. The
         * decision being carried out. `null` when status isn't resolving. Value enum: "approve",
         * "decline", "expire", null. pending_action.anyOf[1] (Value): string. The decision being
         * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
         * "expire", null. pending_action.anyOf[2] (Value): null. refund_id (Optional): string or
         * null. The refund created when the payment was declined. It can be set while status is
         * resolving, before the refund finishes and the review closes. `null` when no refund
         * exists for the review, including after a decline that needed none or when the review is
         * open. refund_id.anyOf[1] (Value): string. The refund created when the payment was
         * declined. It can be set while status is resolving, before the refund finishes and the
         * review closes. `null` when no refund exists for the review, including after a decline
         * that needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_id.anyOf[2] (Value): null. refunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * resolution_started_at (Optional): string or null. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * resolution_started_at.anyOf[1] (Value): string. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". resolution_started_at.anyOf[2]
         * (Value): null. resolution_started_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
         * payment review, retained after closure. Null when no resolution has started or Flint
         * started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. resolution_started_by.anyOf[2] (Value): null. risk
         * (Optional): {@link PaymentReviewRiskPreviousAttributes} or null. The payment's risk
         * level and score when the review opened. risk.anyOf[1] (Value): {@link
         * PaymentReviewRiskPreviousAttributes}. risk.anyOf[2] (Value): null. status (Optional):
         * string or null. Where the review is in its lifecycle. Value enum: "open", "resolving",
         * "closed". status.anyOf[1] (Value): string. Where the review is in its lifecycle. Value
         * enum: "open", "resolving", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Lifecycle actions accepted in the current stored
         * review state. An action remains listed while it is processing or can be repeated without
         * changing the result. [] enum: "approve", "decline". supported_actions.anyOf[1] (Value):
         * Array of string. Lifecycle actions accepted in the current stored review state. An
         * action remains listed while it is processing or can be repeated without changing the
         * result. [] enum: "approve", "decline". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "approve", "decline". supported_actions.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. anyOf[1] (Value): string.
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             * anyOf[1] (Value): string. How the review was resolved. `null` when the review isn't
             * closed. Value enum: "approved", "declined", "refunded", "disputed",
             * "payment_canceled", "expired", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. anyOf[1] (Value): string. ID of the customer the payment was made for.
             * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             * anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment. anyOf[1] (Value): string. The
             * buyer's IP address recorded for the payment when it was confirmed. `null` when no
             * buyer IP address was supplied for the payment. anyOf[2] (Value): null.
             */
            "ip_address"?: ((string) | (null));
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailurePreviousAttributes}. anyOf[2] (Value): null.
             */
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. anyOf[1]
             * (Value): string. ID of the risk rule with the review action that opened this review.
             * Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". anyOf[2] (Value): null.
             */
            "matched_risk_rule_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "opened_at"?: ((string) | (null));
            /**
             * Why Flint opened the review. Value enum: "rule". anyOf[1] (Value): string. Why Flint
             * opened the review. Value enum: "rule". anyOf[2] (Value): null.
             */
            "opened_reason"?: (("rule" | (string & {})) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. anyOf[1] (Value): string. ID of the order the payment belongs to. `null` when
             * the payment doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             * anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api". anyOf[1] (Value): string. How the reviewed payment was started. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
             */
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            /**
             * ID of the payment intent under review. anyOf[1] (Value): string. ID of the payment
             * intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value):
             * null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Unique identifier for this payment review, prefixed `rev_`. anyOf[1] (Value):
             * string. Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "payment_review_id"?: ((string) | (null));
            /**
             * A snapshot of the payment as it was when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null. anyOf[1] (Value): string. The decision being
             * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
             * "expire", null. anyOf[2] (Value): null.
             */
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. anyOf[1] (Value): string. The refund created when the payment was declined.
             * It can be set while status is resolving, before the refund finishes and the review
             * closes. `null` when no refund exists for the review, including after a decline that
             * needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             * anyOf[2] (Value): null.
             */
            "refund_id"?: ((string) | (null));
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. anyOf[1] (Value): string. RFC3339 timestamp.
             * `null` when nobody has started approving or declining the review and Flint hasn't
             * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "resolution_started_at"?: ((string) | (null));
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * The payment's risk level and score when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewRiskPreviousAttributes}. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            /**
             * Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
             * anyOf[1] (Value): string. Where the review is in its lifecycle. Value enum: "open",
             * "resolving", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". anyOf[1] (Value): Array of string. Lifecycle actions
             * accepted in the current stored review state. An action remains listed while it is
             * processing or can be repeated without changing the result. [] enum: "approve",
             * "decline". anyOf[1][] (Value): string. Value enum: "approve", "decline". anyOf[2]
             * (Value): null.
             */
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
});
/** A page of `PaymentReview` objects. */
export type PaymentReviewListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentReview}. A payment review requiring a merchant decision.
     */
    "data": Array<PaymentReview>;
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
export type PaymentReviewOpenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "ip_address"?: ((string) | (null));
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            "matched_risk_rule_id"?: ((string) | (null));
            "opened_at"?: ((string) | (null));
            "opened_reason"?: (("rule" | (string & {})) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_review_id"?: ((string) | (null));
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            "refund_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_started_at"?: ((string) | (null));
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.opened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "ip_address"?: ((string) | (null));
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            "matched_risk_rule_id"?: ((string) | (null));
            "opened_at"?: ((string) | (null));
            "opened_reason"?: (("rule" | (string & {})) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_review_id"?: ((string) | (null));
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            "refund_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_started_at"?: ((string) | (null));
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.opened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.opened";
});
/**
 * The `payment_review.opened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewOpenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. `null`
     * when the review isn't closed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_by (Required): {@link ResourceReference} or null. The credential that closed
     * this payment review. Null when Flint closed it. object.closed_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.closed_by.anyOf[2] (Value): null. object.closed_reason (Required): string or null.
     * How the review was resolved. `null` when the review isn't closed. Value enum: "approved",
     * "declined", "refunded", "disputed", "payment_canceled", "expired", null. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. ID of the customer the payment was made for.
     * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. The buyer's IP address recorded for the
     * payment when it was confirmed. `null` when no buyer IP address was supplied for the payment.
     * object.last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null.
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. object.last_resolution_failure.anyOf[1]
     * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
     * refund, with the `refund_id` and when it failed. object.last_resolution_failure.anyOf[2]
     * (Value): null. object.matched_risk_rule_id (Required): string. ID of the risk rule with the
     * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * object.opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.opened_reason (Required): string. Why Flint opened the
     * review. Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id
     * (Required): string or null. ID of the order the payment belongs to. `null` when the payment
     * doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow
     * (Required): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_review_id (Required): string. Unique identifier for this payment review,
     * prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary
     * (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the payment as it was when
     * the review opened. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund created when the payment was
     * declined. It can be set while status is resolving, before the refund finishes and the review
     * closes. `null` when no refund exists for the review, including after a decline that needed
     * none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * object.refunded_money (Required): {@link MoneyValue} or null. Refunded amount for this
     * review. Null when no refund is recorded. object.refunded_money.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. `null` when nobody has started approving or declining the
     * review and Flint hasn't started expiring it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.resolution_started_by (Required): {@link ResourceReference}
     * or null. The credential that started resolving this payment review, retained after closure.
     * Null when no resolution has started or Flint started it.
     * object.resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.resolution_started_by.anyOf[2]
     * (Value): null. object.risk (Required): {@link PaymentReviewRisk}. The payment's risk level
     * and score when the review opened. The risk assessment shown on a review: a `level` and, when
     * available, a numeric `score`. object.status (Required): string. Where the review is in its
     * lifecycle. Value enum: "open", "resolving", "closed". object.supported_actions (Required):
     * Array of string. Lifecycle actions accepted in the current stored review state. An action
     * remains listed while it is processing or can be repeated without changing the result. []
     * enum: "approve", "decline". object.supported_actions[] (Value): string. Value enum:
     * "approve", "decline". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.closed_at (Optional): string or null. RFC3339
     * timestamp. `null` when the review isn't closed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. `null` when the review isn't closed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value): null.
     * previous_attributes.closed_by (Optional): {@link ResourceReferencePreviousAttributes} or
     * null. The credential that closed this payment review. Null when Flint closed it.
     * previous_attributes.closed_by.anyOf[1] (Value): {@link ResourceReferencePreviousAttributes}.
     * previous_attributes.closed_by.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. How the review was resolved. `null` when the review isn't
     * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
     * "expired", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the review
     * was resolved. `null` when the review isn't closed. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.customer
     * (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer the
     * payment was made for. `null` when the payment has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer the payment was
     * made for. `null` when the payment has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.ip_address (Optional): string or null. The buyer's IP address recorded
     * for the payment when it was confirmed. `null` when no buyer IP address was supplied for the
     * payment. previous_attributes.ip_address.anyOf[1] (Value): string. The buyer's IP address
     * recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied
     * for the payment. previous_attributes.ip_address.anyOf[2] (Value): null.
     * previous_attributes.last_resolution_failure (Optional): {@link
     * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
     * attempt that failed. Set when a decline's refund failed and the review reopened. Null when
     * no attempt has failed. previous_attributes.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailurePreviousAttributes}.
     * previous_attributes.last_resolution_failure.anyOf[2] (Value): null.
     * previous_attributes.matched_risk_rule_id (Optional): string or null. ID of the risk rule
     * with the review action that opened this review.
     * previous_attributes.matched_risk_rule_id.anyOf[1] (Value): string. ID of the risk rule with
     * the review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * previous_attributes.matched_risk_rule_id.anyOf[2] (Value): null.
     * previous_attributes.opened_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.opened_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.opened_at.anyOf[2] (Value):
     * null. previous_attributes.opened_reason (Optional): string or null. Why Flint opened the
     * review. Value enum: "rule". previous_attributes.opened_reason.anyOf[1] (Value): string. Why
     * Flint opened the review. Value enum: "rule". previous_attributes.opened_reason.anyOf[2]
     * (Value): null. previous_attributes.order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order.
     * previous_attributes.order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
     * belong to an order. previous_attributes.order_id.anyOf[1] (Value): string. ID of the order
     * the payment belongs to. `null` when the payment doesn't belong to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.payment_flow (Optional): string or null. How the reviewed payment was
     * started. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[1]
     * (Value): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[2] (Value): null.
     * previous_attributes.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intent`; `null` when expanded and there is no related payment intent.
     * previous_attributes.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. previous_attributes.payment_intent.anyOf[2]
     * (Value): null. previous_attributes.payment_intent_id (Optional): string or null. ID of the
     * payment intent under review. previous_attributes.payment_intent_id.anyOf[1] (Value): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null.
     * previous_attributes.payment_review_id (Optional): string or null. Unique identifier for this
     * payment review, prefixed `rev_`. previous_attributes.payment_review_id.anyOf[1] (Value):
     * string. Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.payment_review_id.anyOf[2] (Value):
     * null. previous_attributes.payment_summary (Optional): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes} or null. A snapshot of the payment as it was
     * when the review opened. previous_attributes.payment_summary.anyOf[1] (Value): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes}. previous_attributes.payment_summary.anyOf[2]
     * (Value): null. previous_attributes.pending_action (Optional): string or null. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[1] (Value): string. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[2] (Value): null.
     * previous_attributes.refund_id (Optional): string or null. The refund created when the
     * payment was declined. It can be set while status is resolving, before the refund finishes
     * and the review closes. `null` when no refund exists for the review, including after a
     * decline that needed none or when the review is open. previous_attributes.refund_id.anyOf[1]
     * (Value): string. The refund created when the payment was declined. It can be set while
     * status is resolving, before the refund finishes and the review closes. `null` when no refund
     * exists for the review, including after a decline that needed none or when the review is
     * open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_id.anyOf[2]
     * (Value): null. previous_attributes.refunded_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no refund
     * is recorded. previous_attributes.refunded_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_at (Optional): string or null. RFC3339 timestamp.
     * `null` when nobody has started approving or declining the review and Flint hasn't started
     * expiring it. previous_attributes.resolution_started_at.anyOf[1] (Value): string. RFC3339
     * timestamp. `null` when nobody has started approving or declining the review and Flint hasn't
     * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.resolution_started_at.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_by (Optional): {@link
     * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
     * payment review, retained after closure. Null when no resolution has started or Flint started
     * it. previous_attributes.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReferencePreviousAttributes}. previous_attributes.resolution_started_by.anyOf[2]
     * (Value): null. previous_attributes.risk (Optional): {@link
     * PaymentReviewRiskPreviousAttributes} or null. The payment's risk level and score when the
     * review opened. previous_attributes.risk.anyOf[1] (Value): {@link
     * PaymentReviewRiskPreviousAttributes}. previous_attributes.risk.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Where the review is in its lifecycle.
     * Value enum: "open", "resolving", "closed". previous_attributes.status.anyOf[1] (Value):
     * string. Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted in the current stored review
     * state. An action remains listed while it is processing or can be repeated without changing
     * the result. [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions accepted in the current stored review state. An
     * action remains listed while it is processing or can be repeated without changing the result.
     * [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "approve", "decline". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. `null` when the review isn't closed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". closed_by (Required): {@link
         * ResourceReference} or null. The credential that closed this payment review. Null when
         * Flint closed it. closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null.
         * closed_reason (Required): string or null. How the review was resolved. `null` when the
         * review isn't closed. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. ID of the customer the payment was made for. `null` when the
         * payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. The buyer's IP address recorded for the payment when it was
         * confirmed. `null` when no buyer IP address was supplied for the payment.
         * last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null. The
         * most recent resolution attempt that failed. Set when a decline's refund failed and the
         * review reopened. Null when no attempt has failed. last_resolution_failure.anyOf[1]
         * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
         * refund, with the `refund_id` and when it failed. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Required): string. ID of the risk rule with the
         * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
         * opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". opened_reason (Required): string. Why Flint opened the review.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
         * belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment intent under review. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id (Required): string. Unique identifier
         * for this payment review, prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * payment_summary (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the
         * payment as it was when the review opened. The payment details shown on a review: amount,
         * capture method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund created when the payment was declined. It can be
         * set while status is resolving, before the refund finishes and the review closes. `null`
         * when no refund exists for the review, including after a decline that needed none or when
         * the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money
         * (Required): {@link MoneyValue} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * refunded_money.anyOf[2] (Value): null. resolution_started_at (Required): string or null.
         * RFC3339 timestamp. `null` when nobody has started approving or declining the review and
         * Flint hasn't started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * resolution_started_by (Required): {@link ResourceReference} or null. The credential that
         * started resolving this payment review, retained after closure. Null when no resolution
         * has started or Flint started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReference}. A reference to another resource by `resource_type` and
         * `resource_id`. resolution_started_by.anyOf[2] (Value): null. risk (Required): {@link
         * PaymentReviewRisk}. The payment's risk level and score when the review opened. The risk
         * assessment shown on a review: a `level` and, when available, a numeric `score`. status
         * (Required): string. Where the review is in its lifecycle. Value enum: "open",
         * "resolving", "closed". supported_actions (Required): Array of string. Lifecycle actions
         * accepted in the current stored review state. An action remains listed while it is
         * processing or can be repeated without changing the result. [] enum: "approve",
         * "decline". supported_actions[] (Value): string. Value enum: "approve", "decline".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment.
             */
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. Example:
             * "rule_01KEZF7C00FWGAQJXXA8CRA319".
             */
            "matched_risk_rule_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Why Flint opened the review. Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * A snapshot of the payment as it was when the review opened. The payment details
             * shown on a review: amount, capture method, authorization expiry, card brand and last
             * four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The payment's risk level and score when the review opened. The risk assessment shown
             * on a review: a `level` and, when available, a numeric `score`.
             */
            "risk": PaymentReviewRisk;
            /** Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. `null` when the review isn't closed. closed_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that closed this payment
         * review. Null when Flint closed it. closed_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. closed_by.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the review was resolved. `null` when the review isn't
         * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
         * "expired", null. closed_reason.anyOf[1] (Value): string. How the review was resolved.
         * `null` when the review isn't closed. Value enum: "approved", "declined", "refunded",
         * "disputed", "payment_canceled", "expired", null. closed_reason.anyOf[2] (Value): null.
         * customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer the payment was made for. `null` when the payment has no customer.
         * customer_id.anyOf[1] (Value): string. ID of the customer the payment was made for.
         * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. ip_address (Optional): string or null. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[1] (Value): string. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[2] (Value): null.
         * last_resolution_failure (Optional): {@link
         * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
         * attempt that failed. Set when a decline's refund failed and the review reopened. Null
         * when no attempt has failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailurePreviousAttributes}. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Optional): string or null. ID of the risk rule with
         * the review action that opened this review. matched_risk_rule_id.anyOf[1] (Value):
         * string. ID of the risk rule with the review action that opened this review. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". matched_risk_rule_id.anyOf[2] (Value): null.
         * opened_at (Optional): string or null. RFC3339 timestamp. opened_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * opened_at.anyOf[2] (Value): null. opened_reason (Optional): string or null. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[1] (Value): string. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[2] (Value): null. order
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the order the payment belongs
         * to. `null` when the payment doesn't belong to an order. order_id.anyOf[1] (Value):
         * string. ID of the order the payment belongs to. `null` when the payment doesn't belong
         * to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_flow (Optional): string or null. How the reviewed payment was started. Value
         * enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_flow.anyOf[1] (Value):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_flow.anyOf[2] (Value): null. payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
         * payment_intent.anyOf[2] (Value): null. payment_intent_id (Optional): string or null. ID
         * of the payment intent under review. payment_intent_id.anyOf[1] (Value): string. ID of
         * the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. payment_review_id (Optional): string or null.
         * Unique identifier for this payment review, prefixed `rev_`. payment_review_id.anyOf[1]
         * (Value): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_review_id.anyOf[2] (Value): null.
         * payment_summary (Optional): {@link PaymentReviewPaymentSummaryPreviousAttributes} or
         * null. A snapshot of the payment as it was when the review opened.
         * payment_summary.anyOf[1] (Value): {@link PaymentReviewPaymentSummaryPreviousAttributes}.
         * payment_summary.anyOf[2] (Value): null. pending_action (Optional): string or null. The
         * decision being carried out. `null` when status isn't resolving. Value enum: "approve",
         * "decline", "expire", null. pending_action.anyOf[1] (Value): string. The decision being
         * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
         * "expire", null. pending_action.anyOf[2] (Value): null. refund_id (Optional): string or
         * null. The refund created when the payment was declined. It can be set while status is
         * resolving, before the refund finishes and the review closes. `null` when no refund
         * exists for the review, including after a decline that needed none or when the review is
         * open. refund_id.anyOf[1] (Value): string. The refund created when the payment was
         * declined. It can be set while status is resolving, before the refund finishes and the
         * review closes. `null` when no refund exists for the review, including after a decline
         * that needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_id.anyOf[2] (Value): null. refunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * resolution_started_at (Optional): string or null. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * resolution_started_at.anyOf[1] (Value): string. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". resolution_started_at.anyOf[2]
         * (Value): null. resolution_started_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
         * payment review, retained after closure. Null when no resolution has started or Flint
         * started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. resolution_started_by.anyOf[2] (Value): null. risk
         * (Optional): {@link PaymentReviewRiskPreviousAttributes} or null. The payment's risk
         * level and score when the review opened. risk.anyOf[1] (Value): {@link
         * PaymentReviewRiskPreviousAttributes}. risk.anyOf[2] (Value): null. status (Optional):
         * string or null. Where the review is in its lifecycle. Value enum: "open", "resolving",
         * "closed". status.anyOf[1] (Value): string. Where the review is in its lifecycle. Value
         * enum: "open", "resolving", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Lifecycle actions accepted in the current stored
         * review state. An action remains listed while it is processing or can be repeated without
         * changing the result. [] enum: "approve", "decline". supported_actions.anyOf[1] (Value):
         * Array of string. Lifecycle actions accepted in the current stored review state. An
         * action remains listed while it is processing or can be repeated without changing the
         * result. [] enum: "approve", "decline". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "approve", "decline". supported_actions.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. anyOf[1] (Value): string.
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             * anyOf[1] (Value): string. How the review was resolved. `null` when the review isn't
             * closed. Value enum: "approved", "declined", "refunded", "disputed",
             * "payment_canceled", "expired", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. anyOf[1] (Value): string. ID of the customer the payment was made for.
             * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             * anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment. anyOf[1] (Value): string. The
             * buyer's IP address recorded for the payment when it was confirmed. `null` when no
             * buyer IP address was supplied for the payment. anyOf[2] (Value): null.
             */
            "ip_address"?: ((string) | (null));
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailurePreviousAttributes}. anyOf[2] (Value): null.
             */
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. anyOf[1]
             * (Value): string. ID of the risk rule with the review action that opened this review.
             * Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". anyOf[2] (Value): null.
             */
            "matched_risk_rule_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "opened_at"?: ((string) | (null));
            /**
             * Why Flint opened the review. Value enum: "rule". anyOf[1] (Value): string. Why Flint
             * opened the review. Value enum: "rule". anyOf[2] (Value): null.
             */
            "opened_reason"?: (("rule" | (string & {})) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. anyOf[1] (Value): string. ID of the order the payment belongs to. `null` when
             * the payment doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             * anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api". anyOf[1] (Value): string. How the reviewed payment was started. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
             */
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            /**
             * ID of the payment intent under review. anyOf[1] (Value): string. ID of the payment
             * intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value):
             * null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Unique identifier for this payment review, prefixed `rev_`. anyOf[1] (Value):
             * string. Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "payment_review_id"?: ((string) | (null));
            /**
             * A snapshot of the payment as it was when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null. anyOf[1] (Value): string. The decision being
             * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
             * "expire", null. anyOf[2] (Value): null.
             */
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. anyOf[1] (Value): string. The refund created when the payment was declined.
             * It can be set while status is resolving, before the refund finishes and the review
             * closes. `null` when no refund exists for the review, including after a decline that
             * needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             * anyOf[2] (Value): null.
             */
            "refund_id"?: ((string) | (null));
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. anyOf[1] (Value): string. RFC3339 timestamp.
             * `null` when nobody has started approving or declining the review and Flint hasn't
             * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "resolution_started_at"?: ((string) | (null));
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * The payment's risk level and score when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewRiskPreviousAttributes}. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            /**
             * Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
             * anyOf[1] (Value): string. Where the review is in its lifecycle. Value enum: "open",
             * "resolving", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". anyOf[1] (Value): Array of string. Lifecycle actions
             * accepted in the current stored review state. An action remains listed while it is
             * processing or can be repeated without changing the result. [] enum: "approve",
             * "decline". anyOf[1][] (Value): string. Value enum: "approve", "decline". anyOf[2]
             * (Value): null.
             */
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened";
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
 * The `payment_review.opened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewOpenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. `null`
     * when the review isn't closed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_by (Required): {@link ResourceReference} or null. The credential that closed
     * this payment review. Null when Flint closed it. object.closed_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.closed_by.anyOf[2] (Value): null. object.closed_reason (Required): string or null.
     * How the review was resolved. `null` when the review isn't closed. Value enum: "approved",
     * "declined", "refunded", "disputed", "payment_canceled", "expired", null. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. ID of the customer the payment was made for.
     * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. The buyer's IP address recorded for the
     * payment when it was confirmed. `null` when no buyer IP address was supplied for the payment.
     * object.last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null.
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. object.last_resolution_failure.anyOf[1]
     * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
     * refund, with the `refund_id` and when it failed. object.last_resolution_failure.anyOf[2]
     * (Value): null. object.matched_risk_rule_id (Required): string. ID of the risk rule with the
     * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * object.opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.opened_reason (Required): string. Why Flint opened the
     * review. Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id
     * (Required): string or null. ID of the order the payment belongs to. `null` when the payment
     * doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow
     * (Required): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_review_id (Required): string. Unique identifier for this payment review,
     * prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary
     * (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the payment as it was when
     * the review opened. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund created when the payment was
     * declined. It can be set while status is resolving, before the refund finishes and the review
     * closes. `null` when no refund exists for the review, including after a decline that needed
     * none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * object.refunded_money (Required): {@link MoneyValue} or null. Refunded amount for this
     * review. Null when no refund is recorded. object.refunded_money.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. `null` when nobody has started approving or declining the
     * review and Flint hasn't started expiring it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.resolution_started_by (Required): {@link ResourceReference}
     * or null. The credential that started resolving this payment review, retained after closure.
     * Null when no resolution has started or Flint started it.
     * object.resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.resolution_started_by.anyOf[2]
     * (Value): null. object.risk (Required): {@link PaymentReviewRisk}. The payment's risk level
     * and score when the review opened. The risk assessment shown on a review: a `level` and, when
     * available, a numeric `score`. object.status (Required): string. Where the review is in its
     * lifecycle. Value enum: "open", "resolving", "closed". object.supported_actions (Required):
     * Array of string. Lifecycle actions accepted in the current stored review state. An action
     * remains listed while it is processing or can be repeated without changing the result. []
     * enum: "approve", "decline". object.supported_actions[] (Value): string. Value enum:
     * "approve", "decline". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.closed_at (Optional): string or null. RFC3339
     * timestamp. `null` when the review isn't closed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. `null` when the review isn't closed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value): null.
     * previous_attributes.closed_by (Optional): {@link ResourceReferencePreviousAttributes} or
     * null. The credential that closed this payment review. Null when Flint closed it.
     * previous_attributes.closed_by.anyOf[1] (Value): {@link ResourceReferencePreviousAttributes}.
     * previous_attributes.closed_by.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. How the review was resolved. `null` when the review isn't
     * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
     * "expired", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the review
     * was resolved. `null` when the review isn't closed. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.customer
     * (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer the
     * payment was made for. `null` when the payment has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer the payment was
     * made for. `null` when the payment has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.ip_address (Optional): string or null. The buyer's IP address recorded
     * for the payment when it was confirmed. `null` when no buyer IP address was supplied for the
     * payment. previous_attributes.ip_address.anyOf[1] (Value): string. The buyer's IP address
     * recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied
     * for the payment. previous_attributes.ip_address.anyOf[2] (Value): null.
     * previous_attributes.last_resolution_failure (Optional): {@link
     * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
     * attempt that failed. Set when a decline's refund failed and the review reopened. Null when
     * no attempt has failed. previous_attributes.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailurePreviousAttributes}.
     * previous_attributes.last_resolution_failure.anyOf[2] (Value): null.
     * previous_attributes.matched_risk_rule_id (Optional): string or null. ID of the risk rule
     * with the review action that opened this review.
     * previous_attributes.matched_risk_rule_id.anyOf[1] (Value): string. ID of the risk rule with
     * the review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * previous_attributes.matched_risk_rule_id.anyOf[2] (Value): null.
     * previous_attributes.opened_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.opened_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.opened_at.anyOf[2] (Value):
     * null. previous_attributes.opened_reason (Optional): string or null. Why Flint opened the
     * review. Value enum: "rule". previous_attributes.opened_reason.anyOf[1] (Value): string. Why
     * Flint opened the review. Value enum: "rule". previous_attributes.opened_reason.anyOf[2]
     * (Value): null. previous_attributes.order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order.
     * previous_attributes.order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
     * belong to an order. previous_attributes.order_id.anyOf[1] (Value): string. ID of the order
     * the payment belongs to. `null` when the payment doesn't belong to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.payment_flow (Optional): string or null. How the reviewed payment was
     * started. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[1]
     * (Value): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[2] (Value): null.
     * previous_attributes.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intent`; `null` when expanded and there is no related payment intent.
     * previous_attributes.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. previous_attributes.payment_intent.anyOf[2]
     * (Value): null. previous_attributes.payment_intent_id (Optional): string or null. ID of the
     * payment intent under review. previous_attributes.payment_intent_id.anyOf[1] (Value): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null.
     * previous_attributes.payment_review_id (Optional): string or null. Unique identifier for this
     * payment review, prefixed `rev_`. previous_attributes.payment_review_id.anyOf[1] (Value):
     * string. Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.payment_review_id.anyOf[2] (Value):
     * null. previous_attributes.payment_summary (Optional): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes} or null. A snapshot of the payment as it was
     * when the review opened. previous_attributes.payment_summary.anyOf[1] (Value): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes}. previous_attributes.payment_summary.anyOf[2]
     * (Value): null. previous_attributes.pending_action (Optional): string or null. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[1] (Value): string. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[2] (Value): null.
     * previous_attributes.refund_id (Optional): string or null. The refund created when the
     * payment was declined. It can be set while status is resolving, before the refund finishes
     * and the review closes. `null` when no refund exists for the review, including after a
     * decline that needed none or when the review is open. previous_attributes.refund_id.anyOf[1]
     * (Value): string. The refund created when the payment was declined. It can be set while
     * status is resolving, before the refund finishes and the review closes. `null` when no refund
     * exists for the review, including after a decline that needed none or when the review is
     * open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_id.anyOf[2]
     * (Value): null. previous_attributes.refunded_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no refund
     * is recorded. previous_attributes.refunded_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_at (Optional): string or null. RFC3339 timestamp.
     * `null` when nobody has started approving or declining the review and Flint hasn't started
     * expiring it. previous_attributes.resolution_started_at.anyOf[1] (Value): string. RFC3339
     * timestamp. `null` when nobody has started approving or declining the review and Flint hasn't
     * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.resolution_started_at.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_by (Optional): {@link
     * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
     * payment review, retained after closure. Null when no resolution has started or Flint started
     * it. previous_attributes.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReferencePreviousAttributes}. previous_attributes.resolution_started_by.anyOf[2]
     * (Value): null. previous_attributes.risk (Optional): {@link
     * PaymentReviewRiskPreviousAttributes} or null. The payment's risk level and score when the
     * review opened. previous_attributes.risk.anyOf[1] (Value): {@link
     * PaymentReviewRiskPreviousAttributes}. previous_attributes.risk.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Where the review is in its lifecycle.
     * Value enum: "open", "resolving", "closed". previous_attributes.status.anyOf[1] (Value):
     * string. Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted in the current stored review
     * state. An action remains listed while it is processing or can be repeated without changing
     * the result. [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions accepted in the current stored review state. An
     * action remains listed while it is processing or can be repeated without changing the result.
     * [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "approve", "decline". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. `null` when the review isn't closed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". closed_by (Required): {@link
         * ResourceReference} or null. The credential that closed this payment review. Null when
         * Flint closed it. closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null.
         * closed_reason (Required): string or null. How the review was resolved. `null` when the
         * review isn't closed. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. ID of the customer the payment was made for. `null` when the
         * payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. The buyer's IP address recorded for the payment when it was
         * confirmed. `null` when no buyer IP address was supplied for the payment.
         * last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null. The
         * most recent resolution attempt that failed. Set when a decline's refund failed and the
         * review reopened. Null when no attempt has failed. last_resolution_failure.anyOf[1]
         * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
         * refund, with the `refund_id` and when it failed. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Required): string. ID of the risk rule with the
         * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
         * opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". opened_reason (Required): string. Why Flint opened the review.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
         * belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment intent under review. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id (Required): string. Unique identifier
         * for this payment review, prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * payment_summary (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the
         * payment as it was when the review opened. The payment details shown on a review: amount,
         * capture method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund created when the payment was declined. It can be
         * set while status is resolving, before the refund finishes and the review closes. `null`
         * when no refund exists for the review, including after a decline that needed none or when
         * the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money
         * (Required): {@link MoneyValue} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * refunded_money.anyOf[2] (Value): null. resolution_started_at (Required): string or null.
         * RFC3339 timestamp. `null` when nobody has started approving or declining the review and
         * Flint hasn't started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * resolution_started_by (Required): {@link ResourceReference} or null. The credential that
         * started resolving this payment review, retained after closure. Null when no resolution
         * has started or Flint started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReference}. A reference to another resource by `resource_type` and
         * `resource_id`. resolution_started_by.anyOf[2] (Value): null. risk (Required): {@link
         * PaymentReviewRisk}. The payment's risk level and score when the review opened. The risk
         * assessment shown on a review: a `level` and, when available, a numeric `score`. status
         * (Required): string. Where the review is in its lifecycle. Value enum: "open",
         * "resolving", "closed". supported_actions (Required): Array of string. Lifecycle actions
         * accepted in the current stored review state. An action remains listed while it is
         * processing or can be repeated without changing the result. [] enum: "approve",
         * "decline". supported_actions[] (Value): string. Value enum: "approve", "decline".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment.
             */
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. Example:
             * "rule_01KEZF7C00FWGAQJXXA8CRA319".
             */
            "matched_risk_rule_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Why Flint opened the review. Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * A snapshot of the payment as it was when the review opened. The payment details
             * shown on a review: amount, capture method, authorization expiry, card brand and last
             * four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The payment's risk level and score when the review opened. The risk assessment shown
             * on a review: a `level` and, when available, a numeric `score`.
             */
            "risk": PaymentReviewRisk;
            /** Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. `null` when the review isn't closed. closed_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that closed this payment
         * review. Null when Flint closed it. closed_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. closed_by.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the review was resolved. `null` when the review isn't
         * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
         * "expired", null. closed_reason.anyOf[1] (Value): string. How the review was resolved.
         * `null` when the review isn't closed. Value enum: "approved", "declined", "refunded",
         * "disputed", "payment_canceled", "expired", null. closed_reason.anyOf[2] (Value): null.
         * customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer the payment was made for. `null` when the payment has no customer.
         * customer_id.anyOf[1] (Value): string. ID of the customer the payment was made for.
         * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. ip_address (Optional): string or null. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[1] (Value): string. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[2] (Value): null.
         * last_resolution_failure (Optional): {@link
         * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
         * attempt that failed. Set when a decline's refund failed and the review reopened. Null
         * when no attempt has failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailurePreviousAttributes}. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Optional): string or null. ID of the risk rule with
         * the review action that opened this review. matched_risk_rule_id.anyOf[1] (Value):
         * string. ID of the risk rule with the review action that opened this review. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". matched_risk_rule_id.anyOf[2] (Value): null.
         * opened_at (Optional): string or null. RFC3339 timestamp. opened_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * opened_at.anyOf[2] (Value): null. opened_reason (Optional): string or null. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[1] (Value): string. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[2] (Value): null. order
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the order the payment belongs
         * to. `null` when the payment doesn't belong to an order. order_id.anyOf[1] (Value):
         * string. ID of the order the payment belongs to. `null` when the payment doesn't belong
         * to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_flow (Optional): string or null. How the reviewed payment was started. Value
         * enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_flow.anyOf[1] (Value):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_flow.anyOf[2] (Value): null. payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
         * payment_intent.anyOf[2] (Value): null. payment_intent_id (Optional): string or null. ID
         * of the payment intent under review. payment_intent_id.anyOf[1] (Value): string. ID of
         * the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. payment_review_id (Optional): string or null.
         * Unique identifier for this payment review, prefixed `rev_`. payment_review_id.anyOf[1]
         * (Value): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_review_id.anyOf[2] (Value): null.
         * payment_summary (Optional): {@link PaymentReviewPaymentSummaryPreviousAttributes} or
         * null. A snapshot of the payment as it was when the review opened.
         * payment_summary.anyOf[1] (Value): {@link PaymentReviewPaymentSummaryPreviousAttributes}.
         * payment_summary.anyOf[2] (Value): null. pending_action (Optional): string or null. The
         * decision being carried out. `null` when status isn't resolving. Value enum: "approve",
         * "decline", "expire", null. pending_action.anyOf[1] (Value): string. The decision being
         * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
         * "expire", null. pending_action.anyOf[2] (Value): null. refund_id (Optional): string or
         * null. The refund created when the payment was declined. It can be set while status is
         * resolving, before the refund finishes and the review closes. `null` when no refund
         * exists for the review, including after a decline that needed none or when the review is
         * open. refund_id.anyOf[1] (Value): string. The refund created when the payment was
         * declined. It can be set while status is resolving, before the refund finishes and the
         * review closes. `null` when no refund exists for the review, including after a decline
         * that needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_id.anyOf[2] (Value): null. refunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * resolution_started_at (Optional): string or null. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * resolution_started_at.anyOf[1] (Value): string. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". resolution_started_at.anyOf[2]
         * (Value): null. resolution_started_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
         * payment review, retained after closure. Null when no resolution has started or Flint
         * started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. resolution_started_by.anyOf[2] (Value): null. risk
         * (Optional): {@link PaymentReviewRiskPreviousAttributes} or null. The payment's risk
         * level and score when the review opened. risk.anyOf[1] (Value): {@link
         * PaymentReviewRiskPreviousAttributes}. risk.anyOf[2] (Value): null. status (Optional):
         * string or null. Where the review is in its lifecycle. Value enum: "open", "resolving",
         * "closed". status.anyOf[1] (Value): string. Where the review is in its lifecycle. Value
         * enum: "open", "resolving", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Lifecycle actions accepted in the current stored
         * review state. An action remains listed while it is processing or can be repeated without
         * changing the result. [] enum: "approve", "decline". supported_actions.anyOf[1] (Value):
         * Array of string. Lifecycle actions accepted in the current stored review state. An
         * action remains listed while it is processing or can be repeated without changing the
         * result. [] enum: "approve", "decline". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "approve", "decline". supported_actions.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. anyOf[1] (Value): string.
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             * anyOf[1] (Value): string. How the review was resolved. `null` when the review isn't
             * closed. Value enum: "approved", "declined", "refunded", "disputed",
             * "payment_canceled", "expired", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. anyOf[1] (Value): string. ID of the customer the payment was made for.
             * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             * anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment. anyOf[1] (Value): string. The
             * buyer's IP address recorded for the payment when it was confirmed. `null` when no
             * buyer IP address was supplied for the payment. anyOf[2] (Value): null.
             */
            "ip_address"?: ((string) | (null));
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailurePreviousAttributes}. anyOf[2] (Value): null.
             */
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. anyOf[1]
             * (Value): string. ID of the risk rule with the review action that opened this review.
             * Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". anyOf[2] (Value): null.
             */
            "matched_risk_rule_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "opened_at"?: ((string) | (null));
            /**
             * Why Flint opened the review. Value enum: "rule". anyOf[1] (Value): string. Why Flint
             * opened the review. Value enum: "rule". anyOf[2] (Value): null.
             */
            "opened_reason"?: (("rule" | (string & {})) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. anyOf[1] (Value): string. ID of the order the payment belongs to. `null` when
             * the payment doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             * anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api". anyOf[1] (Value): string. How the reviewed payment was started. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
             */
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            /**
             * ID of the payment intent under review. anyOf[1] (Value): string. ID of the payment
             * intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value):
             * null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Unique identifier for this payment review, prefixed `rev_`. anyOf[1] (Value):
             * string. Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "payment_review_id"?: ((string) | (null));
            /**
             * A snapshot of the payment as it was when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null. anyOf[1] (Value): string. The decision being
             * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
             * "expire", null. anyOf[2] (Value): null.
             */
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. anyOf[1] (Value): string. The refund created when the payment was declined.
             * It can be set while status is resolving, before the refund finishes and the review
             * closes. `null` when no refund exists for the review, including after a decline that
             * needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             * anyOf[2] (Value): null.
             */
            "refund_id"?: ((string) | (null));
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. anyOf[1] (Value): string. RFC3339 timestamp.
             * `null` when nobody has started approving or declining the review and Flint hasn't
             * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "resolution_started_at"?: ((string) | (null));
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * The payment's risk level and score when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewRiskPreviousAttributes}. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            /**
             * Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
             * anyOf[1] (Value): string. Where the review is in its lifecycle. Value enum: "open",
             * "resolving", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". anyOf[1] (Value): Array of string. Lifecycle actions
             * accepted in the current stored review state. An action remains listed while it is
             * processing or can be repeated without changing the result. [] enum: "approve",
             * "decline". anyOf[1][] (Value): string. Value enum: "approve", "decline". anyOf[2]
             * (Value): null.
             */
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened";
});
/**
 * The payment details shown on a review: amount, capture method, authorization expiry, card brand
 * and last four digits, and buyer email.
 */
export type PaymentReviewPaymentSummary = {
    /**
     * The payment's requested amount when it was confirmed. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Effective Flint capture deadline: the earlier of the provider capture deadline and any order
     * resource guarantee. `null` when the payment has no authorization deadline. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at": string | null;
    /**
     * Whether the payment collects when confirmed or holds the funds for a later capture. Value
     * enum: "automatic", "manual".
     */
    "capture_method": "automatic" | "manual" | (string & {});
    /**
     * The buyer's email address used for screening: the payment's receipt email, or else the email
     * on the payment method, in lowercase. Empty when neither is known.
     */
    "email": string;
    /** Last four digits of the card number. Empty when the payment has no card details. */
    "last4": string;
    /**
     * The card network, as recorded when the payment was confirmed. Value enum: "amex",
     * "discover", "diners", "jcb", "mastercard", "unionpay", "visa".
     */
    "payment_method_brand": "amex" | "discover" | "diners" | "jcb" | "mastercard" | "unionpay" | "visa" | (string & {});
};
export type PaymentReviewPaymentSummaryPreviousAttributes = {
    /**
     * The payment's requested amount when it was confirmed. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Effective Flint capture deadline: the earlier of the provider capture deadline and any order
     * resource guarantee. `null` when the payment has no authorization deadline. anyOf[1] (Value):
     * string. Effective Flint capture deadline: the earlier of the provider capture deadline and
     * any order resource guarantee. `null` when the payment has no authorization deadline. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "authorization_expires_at"?: ((string) | (null));
    /**
     * Whether the payment collects when confirmed or holds the funds for a later capture. Value
     * enum: "automatic", "manual". anyOf[1] (Value): string. Whether the payment collects when
     * confirmed or holds the funds for a later capture. Value enum: "automatic", "manual".
     * anyOf[2] (Value): null.
     */
    "capture_method"?: (("automatic" | "manual" | (string & {})) | (null));
    /**
     * The buyer's email address used for screening: the payment's receipt email, or else the email
     * on the payment method, in lowercase. Empty when neither is known. anyOf[1] (Value): string.
     * The buyer's email address used for screening: the payment's receipt email, or else the email
     * on the payment method, in lowercase. Empty when neither is known. anyOf[2] (Value): null.
     */
    "email"?: ((string) | (null));
    /**
     * Last four digits of the card number. Empty when the payment has no card details. anyOf[1]
     * (Value): string. Last four digits of the card number. Empty when the payment has no card
     * details. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * The card network, as recorded when the payment was confirmed. Value enum: "amex",
     * "discover", "diners", "jcb", "mastercard", "unionpay", "visa". anyOf[1] (Value): string. The
     * card network, as recorded when the payment was confirmed. Value enum: "amex", "discover",
     * "diners", "jcb", "mastercard", "unionpay", "visa". anyOf[2] (Value): null.
     */
    "payment_method_brand"?: (("amex" | "discover" | "diners" | "jcb" | "mastercard" | "unionpay" | "visa" | (string & {}))
        | (null));
};
export type PaymentReviewReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "ip_address"?: ((string) | (null));
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            "matched_risk_rule_id"?: ((string) | (null));
            "opened_at"?: ((string) | (null));
            "opened_reason"?: (("rule" | (string & {})) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_review_id"?: ((string) | (null));
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            "refund_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_started_at"?: ((string) | (null));
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "ip_address"?: ((string) | (null));
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            "matched_risk_rule_id"?: ((string) | (null));
            "opened_at"?: ((string) | (null));
            "opened_reason"?: (("rule" | (string & {})) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_review_id"?: ((string) | (null));
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            "refund_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_started_at"?: ((string) | (null));
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.reopened";
});
/**
 * The `payment_review.reopened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. `null`
     * when the review isn't closed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_by (Required): {@link ResourceReference} or null. The credential that closed
     * this payment review. Null when Flint closed it. object.closed_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.closed_by.anyOf[2] (Value): null. object.closed_reason (Required): string or null.
     * How the review was resolved. `null` when the review isn't closed. Value enum: "approved",
     * "declined", "refunded", "disputed", "payment_canceled", "expired", null. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. ID of the customer the payment was made for.
     * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. The buyer's IP address recorded for the
     * payment when it was confirmed. `null` when no buyer IP address was supplied for the payment.
     * object.last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null.
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. object.last_resolution_failure.anyOf[1]
     * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
     * refund, with the `refund_id` and when it failed. object.last_resolution_failure.anyOf[2]
     * (Value): null. object.matched_risk_rule_id (Required): string. ID of the risk rule with the
     * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * object.opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.opened_reason (Required): string. Why Flint opened the
     * review. Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id
     * (Required): string or null. ID of the order the payment belongs to. `null` when the payment
     * doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow
     * (Required): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_review_id (Required): string. Unique identifier for this payment review,
     * prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary
     * (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the payment as it was when
     * the review opened. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund created when the payment was
     * declined. It can be set while status is resolving, before the refund finishes and the review
     * closes. `null` when no refund exists for the review, including after a decline that needed
     * none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * object.refunded_money (Required): {@link MoneyValue} or null. Refunded amount for this
     * review. Null when no refund is recorded. object.refunded_money.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. `null` when nobody has started approving or declining the
     * review and Flint hasn't started expiring it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.resolution_started_by (Required): {@link ResourceReference}
     * or null. The credential that started resolving this payment review, retained after closure.
     * Null when no resolution has started or Flint started it.
     * object.resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.resolution_started_by.anyOf[2]
     * (Value): null. object.risk (Required): {@link PaymentReviewRisk}. The payment's risk level
     * and score when the review opened. The risk assessment shown on a review: a `level` and, when
     * available, a numeric `score`. object.status (Required): string. Where the review is in its
     * lifecycle. Value enum: "open", "resolving", "closed". object.supported_actions (Required):
     * Array of string. Lifecycle actions accepted in the current stored review state. An action
     * remains listed while it is processing or can be repeated without changing the result. []
     * enum: "approve", "decline". object.supported_actions[] (Value): string. Value enum:
     * "approve", "decline". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.closed_at (Optional): string or null. RFC3339
     * timestamp. `null` when the review isn't closed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. `null` when the review isn't closed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value): null.
     * previous_attributes.closed_by (Optional): {@link ResourceReferencePreviousAttributes} or
     * null. The credential that closed this payment review. Null when Flint closed it.
     * previous_attributes.closed_by.anyOf[1] (Value): {@link ResourceReferencePreviousAttributes}.
     * previous_attributes.closed_by.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. How the review was resolved. `null` when the review isn't
     * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
     * "expired", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the review
     * was resolved. `null` when the review isn't closed. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.customer
     * (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer the
     * payment was made for. `null` when the payment has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer the payment was
     * made for. `null` when the payment has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.ip_address (Optional): string or null. The buyer's IP address recorded
     * for the payment when it was confirmed. `null` when no buyer IP address was supplied for the
     * payment. previous_attributes.ip_address.anyOf[1] (Value): string. The buyer's IP address
     * recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied
     * for the payment. previous_attributes.ip_address.anyOf[2] (Value): null.
     * previous_attributes.last_resolution_failure (Optional): {@link
     * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
     * attempt that failed. Set when a decline's refund failed and the review reopened. Null when
     * no attempt has failed. previous_attributes.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailurePreviousAttributes}.
     * previous_attributes.last_resolution_failure.anyOf[2] (Value): null.
     * previous_attributes.matched_risk_rule_id (Optional): string or null. ID of the risk rule
     * with the review action that opened this review.
     * previous_attributes.matched_risk_rule_id.anyOf[1] (Value): string. ID of the risk rule with
     * the review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * previous_attributes.matched_risk_rule_id.anyOf[2] (Value): null.
     * previous_attributes.opened_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.opened_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.opened_at.anyOf[2] (Value):
     * null. previous_attributes.opened_reason (Optional): string or null. Why Flint opened the
     * review. Value enum: "rule". previous_attributes.opened_reason.anyOf[1] (Value): string. Why
     * Flint opened the review. Value enum: "rule". previous_attributes.opened_reason.anyOf[2]
     * (Value): null. previous_attributes.order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order.
     * previous_attributes.order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
     * belong to an order. previous_attributes.order_id.anyOf[1] (Value): string. ID of the order
     * the payment belongs to. `null` when the payment doesn't belong to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.payment_flow (Optional): string or null. How the reviewed payment was
     * started. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[1]
     * (Value): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[2] (Value): null.
     * previous_attributes.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intent`; `null` when expanded and there is no related payment intent.
     * previous_attributes.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. previous_attributes.payment_intent.anyOf[2]
     * (Value): null. previous_attributes.payment_intent_id (Optional): string or null. ID of the
     * payment intent under review. previous_attributes.payment_intent_id.anyOf[1] (Value): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null.
     * previous_attributes.payment_review_id (Optional): string or null. Unique identifier for this
     * payment review, prefixed `rev_`. previous_attributes.payment_review_id.anyOf[1] (Value):
     * string. Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.payment_review_id.anyOf[2] (Value):
     * null. previous_attributes.payment_summary (Optional): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes} or null. A snapshot of the payment as it was
     * when the review opened. previous_attributes.payment_summary.anyOf[1] (Value): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes}. previous_attributes.payment_summary.anyOf[2]
     * (Value): null. previous_attributes.pending_action (Optional): string or null. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[1] (Value): string. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[2] (Value): null.
     * previous_attributes.refund_id (Optional): string or null. The refund created when the
     * payment was declined. It can be set while status is resolving, before the refund finishes
     * and the review closes. `null` when no refund exists for the review, including after a
     * decline that needed none or when the review is open. previous_attributes.refund_id.anyOf[1]
     * (Value): string. The refund created when the payment was declined. It can be set while
     * status is resolving, before the refund finishes and the review closes. `null` when no refund
     * exists for the review, including after a decline that needed none or when the review is
     * open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_id.anyOf[2]
     * (Value): null. previous_attributes.refunded_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no refund
     * is recorded. previous_attributes.refunded_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_at (Optional): string or null. RFC3339 timestamp.
     * `null` when nobody has started approving or declining the review and Flint hasn't started
     * expiring it. previous_attributes.resolution_started_at.anyOf[1] (Value): string. RFC3339
     * timestamp. `null` when nobody has started approving or declining the review and Flint hasn't
     * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.resolution_started_at.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_by (Optional): {@link
     * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
     * payment review, retained after closure. Null when no resolution has started or Flint started
     * it. previous_attributes.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReferencePreviousAttributes}. previous_attributes.resolution_started_by.anyOf[2]
     * (Value): null. previous_attributes.risk (Optional): {@link
     * PaymentReviewRiskPreviousAttributes} or null. The payment's risk level and score when the
     * review opened. previous_attributes.risk.anyOf[1] (Value): {@link
     * PaymentReviewRiskPreviousAttributes}. previous_attributes.risk.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Where the review is in its lifecycle.
     * Value enum: "open", "resolving", "closed". previous_attributes.status.anyOf[1] (Value):
     * string. Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted in the current stored review
     * state. An action remains listed while it is processing or can be repeated without changing
     * the result. [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions accepted in the current stored review state. An
     * action remains listed while it is processing or can be repeated without changing the result.
     * [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "approve", "decline". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. `null` when the review isn't closed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". closed_by (Required): {@link
         * ResourceReference} or null. The credential that closed this payment review. Null when
         * Flint closed it. closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null.
         * closed_reason (Required): string or null. How the review was resolved. `null` when the
         * review isn't closed. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. ID of the customer the payment was made for. `null` when the
         * payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. The buyer's IP address recorded for the payment when it was
         * confirmed. `null` when no buyer IP address was supplied for the payment.
         * last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null. The
         * most recent resolution attempt that failed. Set when a decline's refund failed and the
         * review reopened. Null when no attempt has failed. last_resolution_failure.anyOf[1]
         * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
         * refund, with the `refund_id` and when it failed. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Required): string. ID of the risk rule with the
         * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
         * opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". opened_reason (Required): string. Why Flint opened the review.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
         * belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment intent under review. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id (Required): string. Unique identifier
         * for this payment review, prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * payment_summary (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the
         * payment as it was when the review opened. The payment details shown on a review: amount,
         * capture method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund created when the payment was declined. It can be
         * set while status is resolving, before the refund finishes and the review closes. `null`
         * when no refund exists for the review, including after a decline that needed none or when
         * the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money
         * (Required): {@link MoneyValue} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * refunded_money.anyOf[2] (Value): null. resolution_started_at (Required): string or null.
         * RFC3339 timestamp. `null` when nobody has started approving or declining the review and
         * Flint hasn't started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * resolution_started_by (Required): {@link ResourceReference} or null. The credential that
         * started resolving this payment review, retained after closure. Null when no resolution
         * has started or Flint started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReference}. A reference to another resource by `resource_type` and
         * `resource_id`. resolution_started_by.anyOf[2] (Value): null. risk (Required): {@link
         * PaymentReviewRisk}. The payment's risk level and score when the review opened. The risk
         * assessment shown on a review: a `level` and, when available, a numeric `score`. status
         * (Required): string. Where the review is in its lifecycle. Value enum: "open",
         * "resolving", "closed". supported_actions (Required): Array of string. Lifecycle actions
         * accepted in the current stored review state. An action remains listed while it is
         * processing or can be repeated without changing the result. [] enum: "approve",
         * "decline". supported_actions[] (Value): string. Value enum: "approve", "decline".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment.
             */
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. Example:
             * "rule_01KEZF7C00FWGAQJXXA8CRA319".
             */
            "matched_risk_rule_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Why Flint opened the review. Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * A snapshot of the payment as it was when the review opened. The payment details
             * shown on a review: amount, capture method, authorization expiry, card brand and last
             * four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The payment's risk level and score when the review opened. The risk assessment shown
             * on a review: a `level` and, when available, a numeric `score`.
             */
            "risk": PaymentReviewRisk;
            /** Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. `null` when the review isn't closed. closed_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that closed this payment
         * review. Null when Flint closed it. closed_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. closed_by.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the review was resolved. `null` when the review isn't
         * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
         * "expired", null. closed_reason.anyOf[1] (Value): string. How the review was resolved.
         * `null` when the review isn't closed. Value enum: "approved", "declined", "refunded",
         * "disputed", "payment_canceled", "expired", null. closed_reason.anyOf[2] (Value): null.
         * customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer the payment was made for. `null` when the payment has no customer.
         * customer_id.anyOf[1] (Value): string. ID of the customer the payment was made for.
         * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. ip_address (Optional): string or null. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[1] (Value): string. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[2] (Value): null.
         * last_resolution_failure (Optional): {@link
         * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
         * attempt that failed. Set when a decline's refund failed and the review reopened. Null
         * when no attempt has failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailurePreviousAttributes}. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Optional): string or null. ID of the risk rule with
         * the review action that opened this review. matched_risk_rule_id.anyOf[1] (Value):
         * string. ID of the risk rule with the review action that opened this review. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". matched_risk_rule_id.anyOf[2] (Value): null.
         * opened_at (Optional): string or null. RFC3339 timestamp. opened_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * opened_at.anyOf[2] (Value): null. opened_reason (Optional): string or null. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[1] (Value): string. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[2] (Value): null. order
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the order the payment belongs
         * to. `null` when the payment doesn't belong to an order. order_id.anyOf[1] (Value):
         * string. ID of the order the payment belongs to. `null` when the payment doesn't belong
         * to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_flow (Optional): string or null. How the reviewed payment was started. Value
         * enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_flow.anyOf[1] (Value):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_flow.anyOf[2] (Value): null. payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
         * payment_intent.anyOf[2] (Value): null. payment_intent_id (Optional): string or null. ID
         * of the payment intent under review. payment_intent_id.anyOf[1] (Value): string. ID of
         * the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. payment_review_id (Optional): string or null.
         * Unique identifier for this payment review, prefixed `rev_`. payment_review_id.anyOf[1]
         * (Value): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_review_id.anyOf[2] (Value): null.
         * payment_summary (Optional): {@link PaymentReviewPaymentSummaryPreviousAttributes} or
         * null. A snapshot of the payment as it was when the review opened.
         * payment_summary.anyOf[1] (Value): {@link PaymentReviewPaymentSummaryPreviousAttributes}.
         * payment_summary.anyOf[2] (Value): null. pending_action (Optional): string or null. The
         * decision being carried out. `null` when status isn't resolving. Value enum: "approve",
         * "decline", "expire", null. pending_action.anyOf[1] (Value): string. The decision being
         * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
         * "expire", null. pending_action.anyOf[2] (Value): null. refund_id (Optional): string or
         * null. The refund created when the payment was declined. It can be set while status is
         * resolving, before the refund finishes and the review closes. `null` when no refund
         * exists for the review, including after a decline that needed none or when the review is
         * open. refund_id.anyOf[1] (Value): string. The refund created when the payment was
         * declined. It can be set while status is resolving, before the refund finishes and the
         * review closes. `null` when no refund exists for the review, including after a decline
         * that needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_id.anyOf[2] (Value): null. refunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * resolution_started_at (Optional): string or null. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * resolution_started_at.anyOf[1] (Value): string. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". resolution_started_at.anyOf[2]
         * (Value): null. resolution_started_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
         * payment review, retained after closure. Null when no resolution has started or Flint
         * started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. resolution_started_by.anyOf[2] (Value): null. risk
         * (Optional): {@link PaymentReviewRiskPreviousAttributes} or null. The payment's risk
         * level and score when the review opened. risk.anyOf[1] (Value): {@link
         * PaymentReviewRiskPreviousAttributes}. risk.anyOf[2] (Value): null. status (Optional):
         * string or null. Where the review is in its lifecycle. Value enum: "open", "resolving",
         * "closed". status.anyOf[1] (Value): string. Where the review is in its lifecycle. Value
         * enum: "open", "resolving", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Lifecycle actions accepted in the current stored
         * review state. An action remains listed while it is processing or can be repeated without
         * changing the result. [] enum: "approve", "decline". supported_actions.anyOf[1] (Value):
         * Array of string. Lifecycle actions accepted in the current stored review state. An
         * action remains listed while it is processing or can be repeated without changing the
         * result. [] enum: "approve", "decline". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "approve", "decline". supported_actions.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. anyOf[1] (Value): string.
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             * anyOf[1] (Value): string. How the review was resolved. `null` when the review isn't
             * closed. Value enum: "approved", "declined", "refunded", "disputed",
             * "payment_canceled", "expired", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. anyOf[1] (Value): string. ID of the customer the payment was made for.
             * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             * anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment. anyOf[1] (Value): string. The
             * buyer's IP address recorded for the payment when it was confirmed. `null` when no
             * buyer IP address was supplied for the payment. anyOf[2] (Value): null.
             */
            "ip_address"?: ((string) | (null));
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailurePreviousAttributes}. anyOf[2] (Value): null.
             */
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. anyOf[1]
             * (Value): string. ID of the risk rule with the review action that opened this review.
             * Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". anyOf[2] (Value): null.
             */
            "matched_risk_rule_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "opened_at"?: ((string) | (null));
            /**
             * Why Flint opened the review. Value enum: "rule". anyOf[1] (Value): string. Why Flint
             * opened the review. Value enum: "rule". anyOf[2] (Value): null.
             */
            "opened_reason"?: (("rule" | (string & {})) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. anyOf[1] (Value): string. ID of the order the payment belongs to. `null` when
             * the payment doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             * anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api". anyOf[1] (Value): string. How the reviewed payment was started. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
             */
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            /**
             * ID of the payment intent under review. anyOf[1] (Value): string. ID of the payment
             * intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value):
             * null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Unique identifier for this payment review, prefixed `rev_`. anyOf[1] (Value):
             * string. Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "payment_review_id"?: ((string) | (null));
            /**
             * A snapshot of the payment as it was when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null. anyOf[1] (Value): string. The decision being
             * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
             * "expire", null. anyOf[2] (Value): null.
             */
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. anyOf[1] (Value): string. The refund created when the payment was declined.
             * It can be set while status is resolving, before the refund finishes and the review
             * closes. `null` when no refund exists for the review, including after a decline that
             * needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             * anyOf[2] (Value): null.
             */
            "refund_id"?: ((string) | (null));
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. anyOf[1] (Value): string. RFC3339 timestamp.
             * `null` when nobody has started approving or declining the review and Flint hasn't
             * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "resolution_started_at"?: ((string) | (null));
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * The payment's risk level and score when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewRiskPreviousAttributes}. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            /**
             * Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
             * anyOf[1] (Value): string. Where the review is in its lifecycle. Value enum: "open",
             * "resolving", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". anyOf[1] (Value): Array of string. Lifecycle actions
             * accepted in the current stored review state. An action remains listed while it is
             * processing or can be repeated without changing the result. [] enum: "approve",
             * "decline". anyOf[1][] (Value): string. Value enum: "approve", "decline". anyOf[2]
             * (Value): null.
             */
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
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
 * The `payment_review.reopened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. `null`
     * when the review isn't closed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_by (Required): {@link ResourceReference} or null. The credential that closed
     * this payment review. Null when Flint closed it. object.closed_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.closed_by.anyOf[2] (Value): null. object.closed_reason (Required): string or null.
     * How the review was resolved. `null` when the review isn't closed. Value enum: "approved",
     * "declined", "refunded", "disputed", "payment_canceled", "expired", null. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. ID of the customer the payment was made for.
     * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. The buyer's IP address recorded for the
     * payment when it was confirmed. `null` when no buyer IP address was supplied for the payment.
     * object.last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null.
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. object.last_resolution_failure.anyOf[1]
     * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
     * refund, with the `refund_id` and when it failed. object.last_resolution_failure.anyOf[2]
     * (Value): null. object.matched_risk_rule_id (Required): string. ID of the risk rule with the
     * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * object.opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.opened_reason (Required): string. Why Flint opened the
     * review. Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id
     * (Required): string or null. ID of the order the payment belongs to. `null` when the payment
     * doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow
     * (Required): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_review_id (Required): string. Unique identifier for this payment review,
     * prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary
     * (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the payment as it was when
     * the review opened. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund created when the payment was
     * declined. It can be set while status is resolving, before the refund finishes and the review
     * closes. `null` when no refund exists for the review, including after a decline that needed
     * none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * object.refunded_money (Required): {@link MoneyValue} or null. Refunded amount for this
     * review. Null when no refund is recorded. object.refunded_money.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. `null` when nobody has started approving or declining the
     * review and Flint hasn't started expiring it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.resolution_started_by (Required): {@link ResourceReference}
     * or null. The credential that started resolving this payment review, retained after closure.
     * Null when no resolution has started or Flint started it.
     * object.resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.resolution_started_by.anyOf[2]
     * (Value): null. object.risk (Required): {@link PaymentReviewRisk}. The payment's risk level
     * and score when the review opened. The risk assessment shown on a review: a `level` and, when
     * available, a numeric `score`. object.status (Required): string. Where the review is in its
     * lifecycle. Value enum: "open", "resolving", "closed". object.supported_actions (Required):
     * Array of string. Lifecycle actions accepted in the current stored review state. An action
     * remains listed while it is processing or can be repeated without changing the result. []
     * enum: "approve", "decline". object.supported_actions[] (Value): string. Value enum:
     * "approve", "decline". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.closed_at (Optional): string or null. RFC3339
     * timestamp. `null` when the review isn't closed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. `null` when the review isn't closed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value): null.
     * previous_attributes.closed_by (Optional): {@link ResourceReferencePreviousAttributes} or
     * null. The credential that closed this payment review. Null when Flint closed it.
     * previous_attributes.closed_by.anyOf[1] (Value): {@link ResourceReferencePreviousAttributes}.
     * previous_attributes.closed_by.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. How the review was resolved. `null` when the review isn't
     * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
     * "expired", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the review
     * was resolved. `null` when the review isn't closed. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.customer
     * (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. ID of the customer the
     * payment was made for. `null` when the payment has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer the payment was
     * made for. `null` when the payment has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.ip_address (Optional): string or null. The buyer's IP address recorded
     * for the payment when it was confirmed. `null` when no buyer IP address was supplied for the
     * payment. previous_attributes.ip_address.anyOf[1] (Value): string. The buyer's IP address
     * recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied
     * for the payment. previous_attributes.ip_address.anyOf[2] (Value): null.
     * previous_attributes.last_resolution_failure (Optional): {@link
     * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
     * attempt that failed. Set when a decline's refund failed and the review reopened. Null when
     * no attempt has failed. previous_attributes.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailurePreviousAttributes}.
     * previous_attributes.last_resolution_failure.anyOf[2] (Value): null.
     * previous_attributes.matched_risk_rule_id (Optional): string or null. ID of the risk rule
     * with the review action that opened this review.
     * previous_attributes.matched_risk_rule_id.anyOf[1] (Value): string. ID of the risk rule with
     * the review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * previous_attributes.matched_risk_rule_id.anyOf[2] (Value): null.
     * previous_attributes.opened_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.opened_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.opened_at.anyOf[2] (Value):
     * null. previous_attributes.opened_reason (Optional): string or null. Why Flint opened the
     * review. Value enum: "rule". previous_attributes.opened_reason.anyOf[1] (Value): string. Why
     * Flint opened the review. Value enum: "rule". previous_attributes.opened_reason.anyOf[2]
     * (Value): null. previous_attributes.order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order.
     * previous_attributes.order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
     * previous_attributes.order.anyOf[2] (Value): null. previous_attributes.order_id (Optional):
     * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
     * belong to an order. previous_attributes.order_id.anyOf[1] (Value): string. ID of the order
     * the payment belongs to. `null` when the payment doesn't belong to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.payment_flow (Optional): string or null. How the reviewed payment was
     * started. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[1]
     * (Value): string. How the reviewed payment was started. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[2] (Value): null.
     * previous_attributes.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intent`; `null` when expanded and there is no related payment intent.
     * previous_attributes.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. previous_attributes.payment_intent.anyOf[2]
     * (Value): null. previous_attributes.payment_intent_id (Optional): string or null. ID of the
     * payment intent under review. previous_attributes.payment_intent_id.anyOf[1] (Value): string.
     * ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null.
     * previous_attributes.payment_review_id (Optional): string or null. Unique identifier for this
     * payment review, prefixed `rev_`. previous_attributes.payment_review_id.anyOf[1] (Value):
     * string. Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". previous_attributes.payment_review_id.anyOf[2] (Value):
     * null. previous_attributes.payment_summary (Optional): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes} or null. A snapshot of the payment as it was
     * when the review opened. previous_attributes.payment_summary.anyOf[1] (Value): {@link
     * PaymentReviewPaymentSummaryPreviousAttributes}. previous_attributes.payment_summary.anyOf[2]
     * (Value): null. previous_attributes.pending_action (Optional): string or null. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[1] (Value): string. The decision
     * being carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
     * "expire", null. previous_attributes.pending_action.anyOf[2] (Value): null.
     * previous_attributes.refund_id (Optional): string or null. The refund created when the
     * payment was declined. It can be set while status is resolving, before the refund finishes
     * and the review closes. `null` when no refund exists for the review, including after a
     * decline that needed none or when the review is open. previous_attributes.refund_id.anyOf[1]
     * (Value): string. The refund created when the payment was declined. It can be set while
     * status is resolving, before the refund finishes and the review closes. `null` when no refund
     * exists for the review, including after a decline that needed none or when the review is
     * open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_id.anyOf[2]
     * (Value): null. previous_attributes.refunded_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no refund
     * is recorded. previous_attributes.refunded_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_at (Optional): string or null. RFC3339 timestamp.
     * `null` when nobody has started approving or declining the review and Flint hasn't started
     * expiring it. previous_attributes.resolution_started_at.anyOf[1] (Value): string. RFC3339
     * timestamp. `null` when nobody has started approving or declining the review and Flint hasn't
     * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.resolution_started_at.anyOf[2] (Value): null.
     * previous_attributes.resolution_started_by (Optional): {@link
     * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
     * payment review, retained after closure. Null when no resolution has started or Flint started
     * it. previous_attributes.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReferencePreviousAttributes}. previous_attributes.resolution_started_by.anyOf[2]
     * (Value): null. previous_attributes.risk (Optional): {@link
     * PaymentReviewRiskPreviousAttributes} or null. The payment's risk level and score when the
     * review opened. previous_attributes.risk.anyOf[1] (Value): {@link
     * PaymentReviewRiskPreviousAttributes}. previous_attributes.risk.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Where the review is in its lifecycle.
     * Value enum: "open", "resolving", "closed". previous_attributes.status.anyOf[1] (Value):
     * string. Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Lifecycle actions accepted in the current stored review
     * state. An action remains listed while it is processing or can be repeated without changing
     * the result. [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions accepted in the current stored review state. An
     * action remains listed while it is processing or can be repeated without changing the result.
     * [] enum: "approve", "decline". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "approve", "decline". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. `null` when the review isn't closed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". closed_by (Required): {@link
         * ResourceReference} or null. The credential that closed this payment review. Null when
         * Flint closed it. closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null.
         * closed_reason (Required): string or null. How the review was resolved. `null` when the
         * review isn't closed. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. ID of the customer the payment was made for. `null` when the
         * payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. The buyer's IP address recorded for the payment when it was
         * confirmed. `null` when no buyer IP address was supplied for the payment.
         * last_resolution_failure (Required): {@link PaymentReviewResolutionFailure} or null. The
         * most recent resolution attempt that failed. Set when a decline's refund failed and the
         * review reopened. Null when no attempt has failed. last_resolution_failure.anyOf[1]
         * (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
         * refund, with the `refund_id` and when it failed. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Required): string. ID of the risk rule with the
         * review action that opened this review. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
         * opened_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". opened_reason (Required): string. Why Flint opened the review.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. ID of the order the payment belongs to. `null` when the payment doesn't
         * belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment intent under review. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id (Required): string. Unique identifier
         * for this payment review, prefixed `rev_`. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * payment_summary (Required): {@link PaymentReviewPaymentSummary}. A snapshot of the
         * payment as it was when the review opened. The payment details shown on a review: amount,
         * capture method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund created when the payment was declined. It can be
         * set while status is resolving, before the refund finishes and the review closes. `null`
         * when no refund exists for the review, including after a decline that needed none or when
         * the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money
         * (Required): {@link MoneyValue} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * refunded_money.anyOf[2] (Value): null. resolution_started_at (Required): string or null.
         * RFC3339 timestamp. `null` when nobody has started approving or declining the review and
         * Flint hasn't started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * resolution_started_by (Required): {@link ResourceReference} or null. The credential that
         * started resolving this payment review, retained after closure. Null when no resolution
         * has started or Flint started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReference}. A reference to another resource by `resource_type` and
         * `resource_id`. resolution_started_by.anyOf[2] (Value): null. risk (Required): {@link
         * PaymentReviewRisk}. The payment's risk level and score when the review opened. The risk
         * assessment shown on a review: a `level` and, when available, a numeric `score`. status
         * (Required): string. Where the review is in its lifecycle. Value enum: "open",
         * "resolving", "closed". supported_actions (Required): Array of string. Lifecycle actions
         * accepted in the current stored review state. An action remains listed while it is
         * processing or can be repeated without changing the result. [] enum: "approve",
         * "decline". supported_actions[] (Value): string. Value enum: "approve", "decline".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             */
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment.
             */
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. Example:
             * "rule_01KEZF7C00FWGAQJXXA8CRA319".
             */
            "matched_risk_rule_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Why Flint opened the review. Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api".
             */
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * A snapshot of the payment as it was when the review opened. The payment details
             * shown on a review: amount, capture method, authorization expiry, card brand and last
             * four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The payment's risk level and score when the review opened. The risk assessment shown
             * on a review: a `level` and, when available, a numeric `score`.
             */
            "risk": PaymentReviewRisk;
            /** Where the review is in its lifecycle. Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. `null` when the review isn't closed. closed_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that closed this payment
         * review. Null when Flint closed it. closed_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. closed_by.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the review was resolved. `null` when the review isn't
         * closed. Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
         * "expired", null. closed_reason.anyOf[1] (Value): string. How the review was resolved.
         * `null` when the review isn't closed. Value enum: "approved", "declined", "refunded",
         * "disputed", "payment_canceled", "expired", null. closed_reason.anyOf[2] (Value): null.
         * customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. ID of the
         * customer the payment was made for. `null` when the payment has no customer.
         * customer_id.anyOf[1] (Value): string. ID of the customer the payment was made for.
         * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. ip_address (Optional): string or null. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[1] (Value): string. The buyer's
         * IP address recorded for the payment when it was confirmed. `null` when no buyer IP
         * address was supplied for the payment. ip_address.anyOf[2] (Value): null.
         * last_resolution_failure (Optional): {@link
         * PaymentReviewResolutionFailurePreviousAttributes} or null. The most recent resolution
         * attempt that failed. Set when a decline's refund failed and the review reopened. Null
         * when no attempt has failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailurePreviousAttributes}. last_resolution_failure.anyOf[2]
         * (Value): null. matched_risk_rule_id (Optional): string or null. ID of the risk rule with
         * the review action that opened this review. matched_risk_rule_id.anyOf[1] (Value):
         * string. ID of the risk rule with the review action that opened this review. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". matched_risk_rule_id.anyOf[2] (Value): null.
         * opened_at (Optional): string or null. RFC3339 timestamp. opened_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * opened_at.anyOf[2] (Value): null. opened_reason (Optional): string or null. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[1] (Value): string. Why Flint
         * opened the review. Value enum: "rule". opened_reason.anyOf[2] (Value): null. order
         * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the order the payment belongs
         * to. `null` when the payment doesn't belong to an order. order_id.anyOf[1] (Value):
         * string. ID of the order the payment belongs to. `null` when the payment doesn't belong
         * to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_flow (Optional): string or null. How the reviewed payment was started. Value
         * enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_flow.anyOf[1] (Value):
         * string. How the reviewed payment was started. Value enum: "checkout", "payment_link",
         * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_flow.anyOf[2] (Value): null. payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}.
         * payment_intent.anyOf[2] (Value): null. payment_intent_id (Optional): string or null. ID
         * of the payment intent under review. payment_intent_id.anyOf[1] (Value): string. ID of
         * the payment intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
         * payment_intent_id.anyOf[2] (Value): null. payment_review_id (Optional): string or null.
         * Unique identifier for this payment review, prefixed `rev_`. payment_review_id.anyOf[1]
         * (Value): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_review_id.anyOf[2] (Value): null.
         * payment_summary (Optional): {@link PaymentReviewPaymentSummaryPreviousAttributes} or
         * null. A snapshot of the payment as it was when the review opened.
         * payment_summary.anyOf[1] (Value): {@link PaymentReviewPaymentSummaryPreviousAttributes}.
         * payment_summary.anyOf[2] (Value): null. pending_action (Optional): string or null. The
         * decision being carried out. `null` when status isn't resolving. Value enum: "approve",
         * "decline", "expire", null. pending_action.anyOf[1] (Value): string. The decision being
         * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
         * "expire", null. pending_action.anyOf[2] (Value): null. refund_id (Optional): string or
         * null. The refund created when the payment was declined. It can be set while status is
         * resolving, before the refund finishes and the review closes. `null` when no refund
         * exists for the review, including after a decline that needed none or when the review is
         * open. refund_id.anyOf[1] (Value): string. The refund created when the payment was
         * declined. It can be set while status is resolving, before the refund finishes and the
         * review closes. `null` when no refund exists for the review, including after a decline
         * that needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_id.anyOf[2] (Value): null. refunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Refunded amount for this review. Null when no
         * refund is recorded. refunded_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * resolution_started_at (Optional): string or null. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * resolution_started_at.anyOf[1] (Value): string. RFC3339 timestamp. `null` when nobody
         * has started approving or declining the review and Flint hasn't started expiring it.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". resolution_started_at.anyOf[2]
         * (Value): null. resolution_started_by (Optional): {@link
         * ResourceReferencePreviousAttributes} or null. The credential that started resolving this
         * payment review, retained after closure. Null when no resolution has started or Flint
         * started it. resolution_started_by.anyOf[1] (Value): {@link
         * ResourceReferencePreviousAttributes}. resolution_started_by.anyOf[2] (Value): null. risk
         * (Optional): {@link PaymentReviewRiskPreviousAttributes} or null. The payment's risk
         * level and score when the review opened. risk.anyOf[1] (Value): {@link
         * PaymentReviewRiskPreviousAttributes}. risk.anyOf[2] (Value): null. status (Optional):
         * string or null. Where the review is in its lifecycle. Value enum: "open", "resolving",
         * "closed". status.anyOf[1] (Value): string. Where the review is in its lifecycle. Value
         * enum: "open", "resolving", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Lifecycle actions accepted in the current stored
         * review state. An action remains listed while it is processing or can be repeated without
         * changing the result. [] enum: "approve", "decline". supported_actions.anyOf[1] (Value):
         * Array of string. Lifecycle actions accepted in the current stored review state. An
         * action remains listed while it is processing or can be repeated without changing the
         * result. [] enum: "approve", "decline". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "approve", "decline". supported_actions.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. `null` when the review isn't closed. anyOf[1] (Value): string.
             * RFC3339 timestamp. `null` when the review isn't closed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "closed_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * How the review was resolved. `null` when the review isn't closed. Value enum:
             * "approved", "declined", "refunded", "disputed", "payment_canceled", "expired", null.
             * anyOf[1] (Value): string. How the review was resolved. `null` when the review isn't
             * closed. Value enum: "approved", "declined", "refunded", "disputed",
             * "payment_canceled", "expired", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * ID of the customer the payment was made for. `null` when the payment has no
             * customer. anyOf[1] (Value): string. ID of the customer the payment was made for.
             * `null` when the payment has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             * anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * The buyer's IP address recorded for the payment when it was confirmed. `null` when
             * no buyer IP address was supplied for the payment. anyOf[1] (Value): string. The
             * buyer's IP address recorded for the payment when it was confirmed. `null` when no
             * buyer IP address was supplied for the payment. anyOf[2] (Value): null.
             */
            "ip_address"?: ((string) | (null));
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailurePreviousAttributes}. anyOf[2] (Value): null.
             */
            "last_resolution_failure"?: ((PaymentReviewResolutionFailurePreviousAttributes) | (null));
            /**
             * ID of the risk rule with the review action that opened this review. anyOf[1]
             * (Value): string. ID of the risk rule with the review action that opened this review.
             * Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". anyOf[2] (Value): null.
             */
            "matched_risk_rule_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "opened_at"?: ((string) | (null));
            /**
             * Why Flint opened the review. Value enum: "rule". anyOf[1] (Value): string. Why Flint
             * opened the review. Value enum: "rule". anyOf[2] (Value): null.
             */
            "opened_reason"?: (("rule" | (string & {})) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the order the payment belongs to. `null` when the payment doesn't belong to an
             * order. anyOf[1] (Value): string. ID of the order the payment belongs to. `null` when
             * the payment doesn't belong to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             * anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How the reviewed payment was started. Value enum: "checkout", "payment_link",
             * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal",
             * "api". anyOf[1] (Value): string. How the reviewed payment was started. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
             */
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            /**
             * ID of the payment intent under review. anyOf[1] (Value): string. ID of the payment
             * intent under review. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value):
             * null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Unique identifier for this payment review, prefixed `rev_`. anyOf[1] (Value):
             * string. Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
             */
            "payment_review_id"?: ((string) | (null));
            /**
             * A snapshot of the payment as it was when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_summary"?: ((PaymentReviewPaymentSummaryPreviousAttributes) | (null));
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null. anyOf[1] (Value): string. The decision being
             * carried out. `null` when status isn't resolving. Value enum: "approve", "decline",
             * "expire", null. anyOf[2] (Value): null.
             */
            "pending_action"?: (("approve" | "decline" | "expire" | null | (string & {})) | (null));
            /**
             * The refund created when the payment was declined. It can be set while status is
             * resolving, before the refund finishes and the review closes. `null` when no refund
             * exists for the review, including after a decline that needed none or when the review
             * is open. anyOf[1] (Value): string. The refund created when the payment was declined.
             * It can be set while status is resolving, before the refund finishes and the review
             * closes. `null` when no refund exists for the review, including after a decline that
             * needed none or when the review is open. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             * anyOf[2] (Value): null.
             */
            "refund_id"?: ((string) | (null));
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. `null` when nobody has started approving or declining the review
             * and Flint hasn't started expiring it. anyOf[1] (Value): string. RFC3339 timestamp.
             * `null` when nobody has started approving or declining the review and Flint hasn't
             * started expiring it. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "resolution_started_at"?: ((string) | (null));
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
             */
            "resolution_started_by"?: ((ResourceReferencePreviousAttributes) | (null));
            /**
             * The payment's risk level and score when the review opened. anyOf[1] (Value): {@link
             * PaymentReviewRiskPreviousAttributes}. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentReviewRiskPreviousAttributes) | (null));
            /**
             * Where the review is in its lifecycle. Value enum: "open", "resolving", "closed".
             * anyOf[1] (Value): string. Where the review is in its lifecycle. Value enum: "open",
             * "resolving", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("open" | "resolving" | "closed" | (string & {})) | (null));
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". anyOf[1] (Value): Array of string. Lifecycle actions
             * accepted in the current stored review state. An action remains listed while it is
             * processing or can be repeated without changing the result. [] enum: "approve",
             * "decline". anyOf[1][] (Value): string. Value enum: "approve", "decline". anyOf[2]
             * (Value): null.
             */
            "supported_actions"?: ((Array<"approve" | "decline" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
});
/** A failed attempt to resolve a review by refund, with the `refund_id` and when it failed. */
export type PaymentReviewResolutionFailure = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "failed_at": string;
    /**
     * ID of the refund that failed and reopened the review. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string;
};
export type PaymentReviewResolutionFailurePreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "failed_at"?: ((string) | (null));
    /**
     * ID of the refund that failed and reopened the review. anyOf[1] (Value): string. ID of the
     * refund that failed and reopened the review. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * anyOf[2] (Value): null.
     */
    "refund_id"?: ((string) | (null));
};
/** A response containing `PaymentReview` data. */
export type PaymentReviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A payment review
     * requiring a merchant decision.
     */
    "data": PaymentReview;
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
/** The risk assessment shown on a review: a `level` and, when available, a numeric `score`. */
export type PaymentReviewRisk = {
    /**
     * Fraud risk level from the card processor's screening, recorded when the review opened. Value
     * enum: "normal", "elevated", "highest", "not_assessed".
     */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum:
     * 99.
     */
    "score"?: number;
};
export type PaymentReviewRiskPreviousAttributes = {
    /**
     * Fraud risk level from the card processor's screening, recorded when the review opened. Value
     * enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): string. Fraud risk
     * level from the card processor's screening, recorded when the review opened. Value enum:
     * "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value): null.
     */
    "level"?: (("normal" | "elevated" | "highest" | "not_assessed" | (string & {})) | (null));
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. anyOf[1] (Value): integer. Fraud score
     * from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no
     * score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99.
     * anyOf[2] (Value): null.
     */
    "score"?: ((number) | (null));
};
export type PaymentReviewsApproveParams = DisputesAcceptParams;
export type PaymentReviewsDeclineParams = (InputValue<DeclinePaymentReviewRequestInput> | {
    "add_to_block_lists"?: never;
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
export type PaymentReviewsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent. Expansion requires risk.read plus the read scope for each expanded resource.
     * Limits: at most 10 unique expand paths per request. [] enum: "customer", "order",
     * "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1] (Value): Array
     * of string. [] enum: "customer", "order", "payment_intent". anyOf[1][] (Value): string. Value
     * enum: "customer", "order", "payment_intent". anyOf[2] (Value): string. Value enum:
     * "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
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
export type PaymentReviewsListParams = {
    /**
     * Filter by review status. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "open", "resolving", "closed". Value
     * enum: "open", "resolving", "closed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "open", "resolving", "closed". anyOf[1][] (Value): string. Value enum: "open",
     * "resolving", "closed". anyOf[2] (Value): string. Value enum: "open", "resolving", "closed".
     */
    "status"?: InputValue<("open" | "resolving" | "closed") | readonly ("open" | "resolving" | "closed")[]>;
    /**
     * Filter by immutable review risk level. Repeat or comma-separate values. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated", "highest",
     * "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[1][] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[2] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1][] (Value): string. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[2] (Value): string. Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")
        | readonly ("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")[]>;
    /**
     * Filter by Flint payment intent ID. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Filter by Flint order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by Flint customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /** Inclusive lower bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_before"?: InputValue<string | globalThis.Date>;
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
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer", "order", "payment_intent". Value enum: "customer",
     * "order", "payment_intent". anyOf[1] (Value): Array of string. [] enum: "customer", "order",
     * "payment_intent". anyOf[1][] (Value): string. Value enum: "customer", "order",
     * "payment_intent". anyOf[2] (Value): string. Value enum: "customer", "order",
     * "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
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
/**
 * The risk assessment for a payment intent, with its risk level, score, outcome, and any matched
 * rule or review.
 */
export type PaymentRisk = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /**
     * Fraud risk level from the card processor's screening of the payment intent's latest payment
     * attempt. Value enum: "normal", "elevated", "highest", "not_assessed".
     */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /**
     * The risk rule that decided the outcome. Absent when no risk rule did. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319".
     */
    "matched_risk_rule_id"?: string;
    /**
     * What the risk evaluation decided about the payment intent's latest payment attempt. `null`
     * when the evaluation has no outcome to report, such as when the attempt was canceled. Value
     * enum: "authorized", "manual_review", "blocked", "issuer_declined", "invalid", null.
     */
    "outcome"?: "authorized"
        | "manual_review"
        | "blocked"
        | "issuer_declined"
        | "invalid"
        | null
        | (string & {})
        | null;
    /**
     * Why the evaluation reached its outcome. `null` when the evaluation has no reason to report,
     * such as an authorized payment that raised no flags. Value enum: "highest_risk",
     * "elevated_risk", "low_authorization_probability", "risk_rule", "risk_policy", null.
     */
    "outcome_reason"?: "highest_risk"
        | "elevated_risk"
        | "low_authorization_probability"
        | "risk_rule"
        | "risk_policy"
        | null
        | (string & {})
        | null;
    /**
     * The payment review opened for the attempt. Present only when the outcome is manual_review.
     * Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id"?: string;
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum:
     * 99.
     */
    "score"?: number;
    /** A plain-language summary of the evaluation. */
    "statement": string;
};
export type PaymentRiskPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "evaluated_at"?: ((string) | (null));
    /**
     * Fraud risk level from the card processor's screening of the payment intent's latest payment
     * attempt. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value):
     * string. Fraud risk level from the card processor's screening of the payment intent's latest
     * payment attempt. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2]
     * (Value): null.
     */
    "level"?: (("normal" | "elevated" | "highest" | "not_assessed" | (string & {})) | (null));
    /**
     * The risk rule that decided the outcome. Absent when no risk rule did. anyOf[1] (Value):
     * string. The risk rule that decided the outcome. Absent when no risk rule did. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". anyOf[2] (Value): null.
     */
    "matched_risk_rule_id"?: ((string) | (null));
    /**
     * What the risk evaluation decided about the payment intent's latest payment attempt. `null`
     * when the evaluation has no outcome to report, such as when the attempt was canceled. Value
     * enum: "authorized", "manual_review", "blocked", "issuer_declined", "invalid", null. anyOf[1]
     * (Value): string. What the risk evaluation decided about the payment intent's latest payment
     * attempt. `null` when the evaluation has no outcome to report, such as when the attempt was
     * canceled. Value enum: "authorized", "manual_review", "blocked", "issuer_declined",
     * "invalid", null. anyOf[2] (Value): null.
     */
    "outcome"?: (("authorized" | "manual_review" | "blocked" | "issuer_declined" | "invalid" | null | (string & {}))
        | (null));
    /**
     * Why the evaluation reached its outcome. `null` when the evaluation has no reason to report,
     * such as an authorized payment that raised no flags. Value enum: "highest_risk",
     * "elevated_risk", "low_authorization_probability", "risk_rule", "risk_policy", null. anyOf[1]
     * (Value): string. Why the evaluation reached its outcome. `null` when the evaluation has no
     * reason to report, such as an authorized payment that raised no flags. Value enum:
     * "highest_risk", "elevated_risk", "low_authorization_probability", "risk_rule",
     * "risk_policy", null. anyOf[2] (Value): null.
     */
    "outcome_reason"?: (("highest_risk"
        | "elevated_risk"
        | "low_authorization_probability"
        | "risk_rule"
        | "risk_policy"
        | null
        | (string & {}))
        | (null));
    /**
     * The payment review opened for the attempt. Present only when the outcome is manual_review.
     * anyOf[1] (Value): string. The payment review opened for the attempt. Present only when the
     * outcome is manual_review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
     */
    "payment_review_id"?: ((string) | (null));
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. anyOf[1] (Value): integer. Fraud score
     * from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no
     * score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99.
     * anyOf[2] (Value): null.
     */
    "score"?: ((number) | (null));
    /**
     * A plain-language summary of the evaluation. anyOf[1] (Value): string. A plain-language
     * summary of the evaluation. anyOf[2] (Value): null.
     */
    "statement"?: ((string) | (null));
};
/** Settings for the statement text on new payments. */
export type PaymentSettings = {
    /**
     * Static text shown on buyers' statements for new payments. `null` when the provider default
     * is used. Changing it does not change past payments. Once this setting has been applied,
     * changes made directly in the processor are overwritten by Flint's applied value.
     */
    "statement_descriptor": string | null;
    /**
     * Stripe's current decision, returned by GET /v1/settings and GET /v1/settings/effective. A
     * successful save does not guarantee Stripe will accept the name. Stripe's current decision
     * about the card statement name.
     */
    "statement_descriptor_status"?: StatementDescriptorStatus;
};
/** Changes to the statement text for new payments. */
export type PaymentSettingsPatch = {
    /**
     * Static text for new payments: 5 to 22 Latin characters, including at least one letter,
     * without < > \ ' " * or control characters. Omit to leave unchanged. Send null to restore the
     * provider default. minLength: 5. maxLength: 22.
     */
    "statement_descriptor"?: string | null;
};
/** Changes to the statement text for new payments. */
export type PaymentSettingsPatchInput = PaymentSettingsPatch;
/**
 * Display details for a bank account payment source: account type, bank name, and last four
 * digits.
 */
export type PaymentSourceAchDebitSummary = {
    /** The kind of bank account. Value enum: "checking", "savings", "other". */
    "account_type"?: "checking" | "savings" | "other" | (string & {});
    /** Name of the bank that holds the account. */
    "bank_name"?: string;
    /** Last four digits of the bank account number. */
    "last4"?: string;
};
export type PaymentSourceAchDebitSummaryPreviousAttributes = {
    /**
     * The kind of bank account. Value enum: "checking", "savings", "other". anyOf[1] (Value):
     * string. The kind of bank account. Value enum: "checking", "savings", "other". anyOf[2]
     * (Value): null.
     */
    "account_type"?: (("checking" | "savings" | "other" | (string & {})) | (null));
    /**
     * Name of the bank that holds the account. anyOf[1] (Value): string. Name of the bank that
     * holds the account. anyOf[2] (Value): null.
     */
    "bank_name"?: ((string) | (null));
    /**
     * Last four digits of the bank account number. anyOf[1] (Value): string. Last four digits of
     * the bank account number. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
};
/** Card and wallet details recorded when a payment is presented on a reader. */
export type PaymentSourceCardPresentDetails = {
    /**
     * EMV application identifier (AID). Null when absent or outside the supported shape. pattern:
     * ^[0-9A-F]{10,32}$. Example: "A0000000031010".
     */
    "application_id": string | null;
    /**
     * Card application's label, such as VISA CREDIT. Null when absent or outside the supported
     * shape. pattern: ^[ -~]{1,16}$.
     */
    "application_name": string | null;
    /**
     * Issuer's authorization code. Null when absent or outside the supported shape. pattern:
     * ^[0-9A-Za-z]{1,12}$.
     */
    "authorization_code": string | null;
    /**
     * How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized
     * methods are other. Value enum: "pin", "signature", "consumer_device", "none", "other".
     */
    "cardholder_verification": "pin" | "signature" | "consumer_device" | "none" | "other" | (string & {});
    /**
     * How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized
     * methods are other. Value enum: "contactless", "chip", "swipe", "swipe_fallback", "other".
     */
    "read_method": "contactless" | "chip" | "swipe" | "swipe_fallback" | "other" | (string & {});
    /**
     * Wallet used on the reader. Absent when a card was used; unrecognized wallets are other.
     * Value enum: "apple_pay", "google_pay", "samsung_pay", "other".
     */
    "wallet"?: "apple_pay" | "google_pay" | "samsung_pay" | "other" | (string & {});
};
export type PaymentSourceCardPresentDetailsPreviousAttributes = {
    /**
     * EMV application identifier (AID). Null when absent or outside the supported shape. anyOf[1]
     * (Value): string. EMV application identifier (AID). Null when absent or outside the supported
     * shape. pattern: ^[0-9A-F]{10,32}$. Example: "A0000000031010". anyOf[2] (Value): null.
     */
    "application_id"?: ((string) | (null));
    /**
     * Card application's label, such as VISA CREDIT. Null when absent or outside the supported
     * shape. anyOf[1] (Value): string. Card application's label, such as VISA CREDIT. Null when
     * absent or outside the supported shape. pattern: ^[ -~]{1,16}$. anyOf[2] (Value): null.
     */
    "application_name"?: ((string) | (null));
    /**
     * Issuer's authorization code. Null when absent or outside the supported shape. anyOf[1]
     * (Value): string. Issuer's authorization code. Null when absent or outside the supported
     * shape. pattern: ^[0-9A-Za-z]{1,12}$. anyOf[2] (Value): null.
     */
    "authorization_code"?: ((string) | (null));
    /**
     * How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized
     * methods are other. Value enum: "pin", "signature", "consumer_device", "none", "other".
     * anyOf[1] (Value): string. How the buyer was verified. consumer_device means the phone
     * verified the buyer. Unrecognized methods are other. Value enum: "pin", "signature",
     * "consumer_device", "none", "other". anyOf[2] (Value): null.
     */
    "cardholder_verification"?: (("pin" | "signature" | "consumer_device" | "none" | "other" | (string & {})) | (null));
    /**
     * How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized
     * methods are other. Value enum: "contactless", "chip", "swipe", "swipe_fallback", "other".
     * anyOf[1] (Value): string. How the card was read. swipe_fallback means a swipe after a failed
     * chip read. Unrecognized methods are other. Value enum: "contactless", "chip", "swipe",
     * "swipe_fallback", "other". anyOf[2] (Value): null.
     */
    "read_method"?: (("contactless" | "chip" | "swipe" | "swipe_fallback" | "other" | (string & {})) | (null));
    /**
     * Wallet used on the reader. Absent when a card was used; unrecognized wallets are other.
     * Value enum: "apple_pay", "google_pay", "samsung_pay", "other". anyOf[1] (Value): string.
     * Wallet used on the reader. Absent when a card was used; unrecognized wallets are other.
     * Value enum: "apple_pay", "google_pay", "samsung_pay", "other". anyOf[2] (Value): null.
     */
    "wallet"?: (("apple_pay" | "google_pay" | "samsung_pay" | "other" | (string & {})) | (null));
};
/**
 * Display details for a card payment source: brand, last four digits, issuing country, funding
 * type, and payment method ID.
 */
export type PaymentSourceCardSummary = {
    /**
     * The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay".
     */
    "brand"?: "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /**
     * Details of a card read on a reader, present once the card was read. Card-present cards are
     * not saved, so payment_method_id is absent. Card and wallet details recorded when a payment
     * is presented on a reader.
     */
    "card_present"?: PaymentSourceCardPresentDetails;
    /**
     * ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded,
     * including older payments. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string | null;
    /**
     * How the card is funded. `null` when no recognized funding type was recorded. Value enum:
     * "credit", "debit", "prepaid", null.
     */
    "funding": "credit" | "debit" | "prepaid" | null | (string & {}) | null;
    /** Last four digits of the card number. */
    "last4"?: string;
    /**
     * ID of the saved Flint payment method for this card. Absent when the card isn't saved, as
     * with a card read on a reader. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string;
};
export type PaymentSourceCardSummaryPreviousAttributes = {
    /**
     * The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay". anyOf[1] (Value): string. The card network. Value enum: "visa", "mastercard",
     * "amex", "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): null.
     */
    "brand"?: (("visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {}))
        | (null));
    /**
     * Details of a card read on a reader, present once the card was read. Card-present cards are
     * not saved, so payment_method_id is absent. anyOf[1] (Value): {@link
     * PaymentSourceCardPresentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "card_present"?: ((PaymentSourceCardPresentDetailsPreviousAttributes) | (null));
    /**
     * ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded,
     * including older payments. anyOf[1] (Value): string. ISO 3166-1 alpha-2 issuing country.
     * `null` when the issuing country was not recorded, including older payments. minLength: 2.
     * maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     */
    "country"?: ((string) | (null));
    /**
     * How the card is funded. `null` when no recognized funding type was recorded. Value enum:
     * "credit", "debit", "prepaid", null. anyOf[1] (Value): string. How the card is funded. `null`
     * when no recognized funding type was recorded. Value enum: "credit", "debit", "prepaid",
     * null. anyOf[2] (Value): null.
     */
    "funding"?: (("credit" | "debit" | "prepaid" | null | (string & {})) | (null));
    /**
     * Last four digits of the card number. anyOf[1] (Value): string. Last four digits of the card
     * number. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * ID of the saved Flint payment method for this card. Absent when the card isn't saved, as
     * with a card read on a reader. anyOf[1] (Value): string. ID of the saved Flint payment method
     * for this card. Absent when the card isn't saved, as with a card read on a reader. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     */
    "payment_method_id"?: ((string) | (null));
};
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredential = ((PaymentSourceCredentialPaymentMethod)
    | (PaymentSourceCredentialStripeConfirmationToken)
    | (PaymentSourceCredentialStripePaymentMethod)
    | (PaymentSourceCredentialReader)
    | (Record<string, unknown>));
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredentialInput = ((PaymentSourceCredentialPaymentMethodInput)
    | (PaymentSourceCredentialStripeConfirmationTokenInput)
    | (PaymentSourceCredentialStripePaymentMethodInput)
    | (PaymentSourceCredentialReaderInput));
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethod = {
    /** Selects the credential supplied for this payment. Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent" | (string & {});
    /**
     * A payment method saved in Flint for the customer making this payment. minLength: 1. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethodInput = {
    /** Selects the credential supplied for this payment. Value enum: "payment_method". */
    "credential_type": "payment_method";
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent";
    /**
     * A payment method saved in Flint for the customer making this payment. minLength: 1. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
/** The `reader` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialReader = {
    /** Selects the credential supplied for this payment. Value enum: "reader". */
    "credential_type": "reader" | (string & {});
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation's scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTip;
};
/** The `reader` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialReaderInput = {
    /** Selects the credential supplied for this payment. Value enum: "reader". */
    "credential_type": "reader";
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation's scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTipInput;
};
/** The `stripe_confirmation_token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripeConfirmationToken = {
    /**
     * Selects the credential supplied for this payment. Value enum: "stripe_confirmation_token".
     */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. A
     * Stripe ConfirmationToken your page created with Stripe.js createConfirmationToken. Use this
     * for cards, wallets, ACH and Affirm collected in the browser. minLength: 1.
     */
    "stripe": {
        /**
         * A Stripe ConfirmationToken your page created with Stripe.js createConfirmationToken. Use
         * this for cards, wallets, ACH and Affirm collected in the browser. minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `stripe_confirmation_token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripeConfirmationTokenInput = {
    /**
     * Selects the credential supplied for this payment. Value enum: "stripe_confirmation_token".
     */
    "credential_type": "stripe_confirmation_token";
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. A
     * Stripe ConfirmationToken your page created with Stripe.js createConfirmationToken. Use this
     * for cards, wallets, ACH and Affirm collected in the browser. minLength: 1.
     */
    "stripe": {
        /**
         * A Stripe ConfirmationToken your page created with Stripe.js createConfirmationToken. Use
         * this for cards, wallets, ACH and Affirm collected in the browser. minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `stripe_payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripePaymentMethod = {
    /** Selects the credential supplied for this payment. Value enum: "stripe_payment_method". */
    "credential_type": "stripe_payment_method" | (string & {});
    /**
     * Stripe credential collected for this payment. payment_method (Required): string. A Stripe
     * PaymentMethod your app created with createPaymentMethod, or a Stripe test payment method
     * such as pm_card_visa in a sandbox. It isn't a Flint saved payment method; send those as
     * payment_method. minLength: 1.
     */
    "stripe": {
        /**
         * A Stripe PaymentMethod your app created with createPaymentMethod, or a Stripe test
         * payment method such as pm_card_visa in a sandbox. It isn't a Flint saved payment method;
         * send those as payment_method. minLength: 1.
         */
        "payment_method": string;
    };
};
/** The `stripe_payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripePaymentMethodInput = {
    /** Selects the credential supplied for this payment. Value enum: "stripe_payment_method". */
    "credential_type": "stripe_payment_method";
    /**
     * Stripe credential collected for this payment. payment_method (Required): string. A Stripe
     * PaymentMethod your app created with createPaymentMethod, or a Stripe test payment method
     * such as pm_card_visa in a sandbox. It isn't a Flint saved payment method; send those as
     * payment_method. minLength: 1.
     */
    "stripe": {
        /**
         * A Stripe PaymentMethod your app created with createPaymentMethod, or a Stripe test
         * payment method such as pm_card_visa in a sandbox. It isn't a Flint saved payment method;
         * send those as payment_method. minLength: 1.
         */
        "payment_method": string;
    };
};
/**
 * A summary of the payment source used for a payment, by funding-method family, with card or bank
 * account display details.
 */
export type PaymentSourceSummary = {
    /**
     * Bank account details. Present when type is ach_debit. Display details for a bank account
     * payment source: account type, bank name, and last four digits.
     */
    "ach_debit"?: PaymentSourceAchDebitSummary;
    /**
     * Card details. Present when type is card. Display details for a card payment source: brand,
     * last four digits, issuing country, funding type, and payment method ID.
     */
    "card"?: PaymentSourceCardSummary;
    /**
     * Funding-method family. Wallet payment options use card because their underlying funding
     * source is a card. Value enum: "card", "ach_debit", "affirm".
     */
    "type": "card" | "ach_debit" | "affirm" | (string & {});
};
export type PaymentSourceSummaryPreviousAttributes = {
    /**
     * Bank account details. Present when type is ach_debit. anyOf[1] (Value): {@link
     * PaymentSourceAchDebitSummaryPreviousAttributes}. anyOf[2] (Value): null.
     */
    "ach_debit"?: ((PaymentSourceAchDebitSummaryPreviousAttributes) | (null));
    /**
     * Card details. Present when type is card. anyOf[1] (Value): {@link
     * PaymentSourceCardSummaryPreviousAttributes}. anyOf[2] (Value): null.
     */
    "card"?: ((PaymentSourceCardSummaryPreviousAttributes) | (null));
    /**
     * Funding-method family. Wallet payment options use card because their underlying funding
     * source is a card. Value enum: "card", "ach_debit", "affirm". anyOf[1] (Value): string.
     * Funding-method family. Wallet payment options use card because their underlying funding
     * source is a card. Value enum: "card", "ach_debit", "affirm". anyOf[2] (Value): null.
     */
    "type"?: (("card" | "ach_debit" | "affirm" | (string & {})) | (null));
};
/**
 * A top-level child of a payment intent dividing the collecting merchant's payment funds with one
 * seller. Both parties read this same resource with their own credentials.
 */
export type PaymentSplit = {
    /**
     * The admitted amount, or its final amount set at capture. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Present when status is canceled. Can gain values. Value enum: "payment_not_completed",
     * "install_revoked", "fully_reversed".
     */
    "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
    /**
     * The merchant of record that collected the payment. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "collecting_merchant_id": string;
    /**
     * When the payment's create recorded the split. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** The collecting merchant's description, shown to the seller. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Shown to the seller. Exact,
     * case-sensitive matching. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Present when status is failed. Can gain values; unknown reasons use split_failed. Value
     * enum: "seller_cannot_receive", "split_failed".
     */
    "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
    /**
     * When the funds become available on Flint's balance. Null when Stripe has not reported it or
     * the payment never succeeded. Can move later after a won dispute; frozen at release. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "funds_available_at": string | null;
    /** The collecting merchant's partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /** The seller's install of the app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". */
    "partner_app_install_id": string;
    /**
     * The collecting merchant's payment. Sellers can read the split, but not the payment. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /** Unique identifier for the split. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". */
    "payment_split_id": string;
    /**
     * Present when status is pending. Can gain values. Value enum: "awaiting_payment",
     * "dispute_open", "reversals_pending", "awaiting_funds".
     */
    "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
    /**
     * Read-only nested children created by Flint, embedded whole. Empty when none. At most one per
     * refund and one per dispute. [] (Value): {@link PaymentSplitReversal}. A read-only nested
     * child of a payment split, created by Flint for a refund or dispute. Embedded whole in
     * PaymentSplit.reversals; no routes of its own.
     */
    "reversals": Array<PaymentSplitReversal>;
    /**
     * Reversals' total amount minus their reinstated amounts. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "reversed_money": MoneyValue;
    /** The merchant receiving the split. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "seller_merchant_id": string;
    /**
     * Reversed funds the collecting merchant covered for the seller, less reinstatements. The
     * seller's net is amount_money minus reversed_money plus shortfall_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "shortfall_money": MoneyValue;
    /**
     * The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed",
     * "canceled".
     */
    "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * When the split reached the seller's balance. Present when succeeded. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /** When the split last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PaymentSplitCanceledEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_reason"?: (("payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {})) | (null));
            "collecting_merchant_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_reason"?: (("seller_cannot_receive" | "split_failed" | (string & {})) | (null));
            "funds_available_at"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_split_id"?: ((string) | (null));
            "pending_reason"?: (("awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {}))
                | (null));
            "reversals"?: ((Array<PaymentSplitReversalPreviousAttributes>) | (null));
            "reversed_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_merchant_id"?: ((string) | (null));
            "shortfall_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.canceled";
})
    & {
    "event_type": "payment_split.canceled";
});
export type PaymentSplitCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.created";
})
    & {
    "event_type": "payment_split.created";
});
export type PaymentSplitFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_reason"?: (("payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {})) | (null));
            "collecting_merchant_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_reason"?: (("seller_cannot_receive" | "split_failed" | (string & {})) | (null));
            "funds_available_at"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_split_id"?: ((string) | (null));
            "pending_reason"?: (("awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {}))
                | (null));
            "reversals"?: ((Array<PaymentSplitReversalPreviousAttributes>) | (null));
            "reversed_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_merchant_id"?: ((string) | (null));
            "shortfall_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.failed";
})
    & {
    "event_type": "payment_split.failed";
});
/** A page of `PaymentSplit` objects. */
export type PaymentSplitListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentSplit}. A top-level child of a payment intent dividing the collecting merchant's
     * payment funds with one seller. Both parties read this same resource with their own
     * credentials.
     */
    "data": Array<PaymentSplit>;
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
export type PaymentSplitPreviousAttributes = {
    /**
     * The admitted amount, or its final amount set at capture. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Present when status is canceled. Can gain values. Value enum: "payment_not_completed",
     * "install_revoked", "fully_reversed". anyOf[1] (Value): string. Present when status is
     * canceled. Can gain values. Value enum: "payment_not_completed", "install_revoked",
     * "fully_reversed". anyOf[2] (Value): null.
     */
    "canceled_reason"?: (("payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {})) | (null));
    /**
     * The merchant of record that collected the payment. anyOf[1] (Value): string. The merchant of
     * record that collected the payment. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2]
     * (Value): null.
     */
    "collecting_merchant_id"?: ((string) | (null));
    /**
     * When the payment's create recorded the split. anyOf[1] (Value): string. When the payment's
     * create recorded the split. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * The collecting merchant's description, shown to the seller. anyOf[1] (Value): string. The
     * collecting merchant's description, shown to the seller. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. Shown to the seller. Exact,
     * case-sensitive matching. anyOf[1] (Value): string. Caller-owned identifier for this resource
     * in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: 255.
     * Example: "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Present when status is failed. Can gain values; unknown reasons use split_failed. Value
     * enum: "seller_cannot_receive", "split_failed". anyOf[1] (Value): string. Present when status
     * is failed. Can gain values; unknown reasons use split_failed. Value enum:
     * "seller_cannot_receive", "split_failed". anyOf[2] (Value): null.
     */
    "failure_reason"?: (("seller_cannot_receive" | "split_failed" | (string & {})) | (null));
    /**
     * When the funds become available on Flint's balance. Null when Stripe has not reported it or
     * the payment never succeeded. Can move later after a won dispute; frozen at release. anyOf[1]
     * (Value): string. When the funds become available on Flint's balance. Null when Stripe has
     * not reported it or the payment never succeeded. Can move later after a won dispute; frozen
     * at release. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "funds_available_at"?: ((string) | (null));
    /**
     * The collecting merchant's partner app. anyOf[1] (Value): string. The collecting merchant's
     * partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". anyOf[2] (Value): null.
     */
    "partner_app_id"?: ((string) | (null));
    /**
     * The seller's install of the app. anyOf[1] (Value): string. The seller's install of the app.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". anyOf[2] (Value): null.
     */
    "partner_app_install_id"?: ((string) | (null));
    /**
     * The collecting merchant's payment. Sellers can read the split, but not the payment. anyOf[1]
     * (Value): string. The collecting merchant's payment. Sellers can read the split, but not the
     * payment. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     */
    "payment_intent_id"?: ((string) | (null));
    /**
     * Unique identifier for the split. anyOf[1] (Value): string. Unique identifier for the split.
     * Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". anyOf[2] (Value): null.
     */
    "payment_split_id"?: ((string) | (null));
    /**
     * Present when status is pending. Can gain values. Value enum: "awaiting_payment",
     * "dispute_open", "reversals_pending", "awaiting_funds". anyOf[1] (Value): string. Present
     * when status is pending. Can gain values. Value enum: "awaiting_payment", "dispute_open",
     * "reversals_pending", "awaiting_funds". anyOf[2] (Value): null.
     */
    "pending_reason"?: (("awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {}))
        | (null));
    /**
     * Read-only nested children created by Flint, embedded whole. Empty when none. At most one per
     * refund and one per dispute. anyOf[1] (Value): Array of {@link
     * PaymentSplitReversalPreviousAttributes}. Read-only nested children created by Flint,
     * embedded whole. Empty when none. At most one per refund and one per dispute. anyOf[1][]
     * (Value): {@link PaymentSplitReversalPreviousAttributes}. anyOf[2] (Value): null.
     */
    "reversals"?: ((Array<PaymentSplitReversalPreviousAttributes>) | (null));
    /**
     * Reversals' total amount minus their reinstated amounts. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "reversed_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The merchant receiving the split. anyOf[1] (Value): string. The merchant receiving the
     * split. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     */
    "seller_merchant_id"?: ((string) | (null));
    /**
     * Reversed funds the collecting merchant covered for the seller, less reinstatements. The
     * seller's net is amount_money minus reversed_money plus shortfall_money. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "shortfall_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed",
     * "canceled". anyOf[1] (Value): string. The split lifecycle status. Value enum: "pending",
     * "processing", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     */
    "status"?: (("pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
    /**
     * When the split reached the seller's balance. Present when succeeded. anyOf[1] (Value):
     * string. When the split reached the seller's balance. Present when succeeded. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "succeeded_at"?: ((string) | (null));
    /**
     * When the split last changed. anyOf[1] (Value): string. When the split last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. anyOf[1] (Value): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
/**
 * A seller's fixed share of one payment, created with that payment. This divides the payment's
 * funds; split tender divides how the buyer pays.
 */
export type PaymentSplitRequest = {
    /**
     * Seller's share above zero, in the payment's currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Description shown to the seller, 1 to 500 characters. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Shown to the seller. Exact,
     * case-sensitive matching. Must contain 1 to 255 characters (Unicode code points). minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Seller install of the collecting merchant's partner app. At most one split per install.
     * minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
};
/**
 * A seller's fixed share of one payment, created with that payment. This divides the payment's
 * funds; split tender divides how the buyer pays.
 */
export type PaymentSplitRequestInput = {
    /**
     * Seller's share above zero, in the payment's currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Description shown to the seller, 1 to 500 characters. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Shown to the seller. Exact,
     * case-sensitive matching. Must contain 1 to 255 characters (Unicode code points). minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Seller install of the collecting merchant's partner app. At most one split per install.
     * minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
};
/** A response containing `PaymentSplit` data. */
export type PaymentSplitResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A top-level child of a
     * payment intent dividing the collecting merchant's payment funds with one seller. Both
     * parties read this same resource with their own credentials.
     */
    "data": PaymentSplit;
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
 * A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded
 * whole in PaymentSplit.reversals; no routes of its own.
 */
export type PaymentSplitReversal = {
    /**
     * The split's share taken back. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** When the reversal was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Unique identifier for the reversal. Example: "psrev_01KEZF7C00XC1HA7S8YCQJDBDM". */
    "payment_split_reversal_id": string;
    /** Why Flint created the reversal. Value enum: "refund", "dispute", "other". */
    "reason": "refund" | "dispute" | "other" | (string & {});
    /**
     * Funds returned to whoever funded the reversal, such as after a won dispute or failed refund.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "reinstated_money": MoneyValue;
    /**
     * The part the collecting merchant covered. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "shortfall_money": MoneyValue;
    /**
     * The refund or dispute behind the reversal. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "source": ResourceReference;
    /** The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled". */
    "status": "pending" | "succeeded" | "canceled" | (string & {});
    /**
     * When the split's share was recovered. Present when succeeded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
};
export type PaymentSplitReversalPreviousAttributes = {
    /**
     * The split's share taken back. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * When the reversal was recorded. anyOf[1] (Value): string. When the reversal was recorded.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Unique identifier for the reversal. anyOf[1] (Value): string. Unique identifier for the
     * reversal. Example: "psrev_01KEZF7C00XC1HA7S8YCQJDBDM". anyOf[2] (Value): null.
     */
    "payment_split_reversal_id"?: ((string) | (null));
    /**
     * Why Flint created the reversal. Value enum: "refund", "dispute", "other". anyOf[1] (Value):
     * string. Why Flint created the reversal. Value enum: "refund", "dispute", "other". anyOf[2]
     * (Value): null.
     */
    "reason"?: (("refund" | "dispute" | "other" | (string & {})) | (null));
    /**
     * Funds returned to whoever funded the reversal, such as after a won dispute or failed refund.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "reinstated_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The part the collecting merchant covered. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "shortfall_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The refund or dispute behind the reversal. anyOf[1] (Value): {@link
     * ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "source"?: ((ResourceReferencePreviousAttributes) | (null));
    /**
     * The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled". anyOf[1]
     * (Value): string. The reversal lifecycle status. Value enum: "pending", "succeeded",
     * "canceled". anyOf[2] (Value): null.
     */
    "status"?: (("pending" | "succeeded" | "canceled" | (string & {})) | (null));
    /**
     * When the split's share was recovered. Present when succeeded. anyOf[1] (Value): string. When
     * the split's share was recovered. Present when succeeded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "succeeded_at"?: ((string) | (null));
};
export type PaymentSplitSucceededEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_reason"?: (("payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {})) | (null));
            "collecting_merchant_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_reason"?: (("seller_cannot_receive" | "split_failed" | (string & {})) | (null));
            "funds_available_at"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_split_id"?: ((string) | (null));
            "pending_reason"?: (("awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {}))
                | (null));
            "reversals"?: ((Array<PaymentSplitReversalPreviousAttributes>) | (null));
            "reversed_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_merchant_id"?: ((string) | (null));
            "shortfall_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.succeeded";
})
    & {
    "event_type": "payment_split.succeeded";
});
export type PaymentSplitUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_reason"?: (("payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {})) | (null));
            "collecting_merchant_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_reason"?: (("seller_cannot_receive" | "split_failed" | (string & {})) | (null));
            "funds_available_at"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_split_id"?: ((string) | (null));
            "pending_reason"?: (("awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {}))
                | (null));
            "reversals"?: ((Array<PaymentSplitReversalPreviousAttributes>) | (null));
            "reversed_money"?: ((MoneyValuePreviousAttributes) | (null));
            "seller_merchant_id"?: ((string) | (null));
            "shortfall_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.updated";
})
    & {
    "event_type": "payment_split.updated";
});
export type PaymentSplitsGetParams = {};
export type PaymentSplitsListParams = {
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
     * Exact match on the payment intent. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Exact match on the collecting merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "collecting_merchant_id"?: InputValue<string>;
    /**
     * Exact match on the seller. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "seller_merchant_id"?: InputValue<string>;
    /**
     * Exact match on the partner app. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact match on the install. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: InputValue<string>;
    /**
     * Exact, case-sensitive match on the collecting merchant's external identifier. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Statuses to include. Omit to include all statuses. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "processing", "succeeded", "failed",
     * "canceled". Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "processing", "succeeded",
     * "failed", "canceled". anyOf[1][] (Value): string. Value enum: "pending", "processing",
     * "succeeded", "failed", "canceled". anyOf[2] (Value): string. Value enum: "pending",
     * "processing", "succeeded", "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "processing" | "succeeded" | "failed" | "canceled")
        | readonly ("pending" | "processing" | "succeeded" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type PaymentVolumeBucket = {
    /**
     * Succeeded payments captured in this bucket, restricted to the response currency. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * Format: int64.
     */
    "payments_count": number;
    /**
     * Exclusive bucket end instant, clipped to the resolved period. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * Captured amounts for succeeded payments captured in this bucket, in the response currency.
     * Excludes gift card and store credit redemptions. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "volume_money": MoneyValue;
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type PaymentVolumeTimeseries = {
    /**
     * Payment capture-time buckets clipped to the period, including empty buckets. Repeated local
     * hours produce two buckets; skipped hours and days produce none. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. [] (Value):
     * {@link PaymentVolumeBucket}. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies.
     */
    "buckets": Array<PaymentVolumeBucket>;
    /**
     * Currencies of succeeded payments captured in the period and qualifying refunds that
     * succeeded in the period, regardless of the currency filter. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. [] (Value):
     * string.
     */
    "currencies": Array<string>;
    /**
     * ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Value enum:
     * "hour", "day", "week", "month".
     */
    "granularity": "hour" | "day" | "week" | "month" | (string & {});
    /**
     * Exclusive resolved end instant. Omitted or future request ends resolve to the request time
     * truncated to the second. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * IANA timezone used only for local bucket boundaries. Defaults to the merchant's timezone,
     * then UTC. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies.
     */
    "timezone": string;
};
/** A response containing `PaymentVolumeTimeseries` data. */
export type PaymentVolumeTimeseriesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "data": PaymentVolumeTimeseries;
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
/** Funds sent from a merchant balance to a payout destination. */
export type Payout = {
    /**
     * Amount moved between your bank and Flint. Always positive. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of the
     * expected arrival. Format: date. Example: "2026-08-02".
     */
    "arrival_date"?: string;
    /**
     * Balance source this payout draws from. Flint chooses the source when balance_source_type is
     * omitted at create. Clients must accept source types added in future releases. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /** Description sent when the payout was created. Absent when there is none. */
    "description"?: string;
    /**
     * Direction of the money movement. Outbound payouts deposit funds in your bank; inbound
     * payouts withdraw funds to cover a negative Flint balance. Value enum: "outbound", "inbound".
     */
    "direction": "outbound" | "inbound" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Flint-normalized payout failure code. Unknown provider values are returned as payout_failed.
     * Value enum: "account_closed", "account_frozen", "bank_account_restricted",
     * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
     * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed".
     */
    "failure_code"?: "account_closed"
        | "account_frozen"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
        | "declined"
        | "insufficient_funds"
        | "invalid_account_number"
        | "incorrect_account_holder_name"
        | "incorrect_account_holder_address"
        | "incorrect_account_holder_tax_id"
        | "invalid_currency"
        | "no_account"
        | "unsupported_card"
        | "payout_failed"
        | (string & {});
    /**
     * Flint-authored payout failure message. This is stable explanatory text, not a raw provider
     * message.
     */
    "failure_message"?: string;
    /**
     * Whether the payout fee is estimated or final. not_applicable means no applicable fee status
     * is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     */
    "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
    /**
     * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor
     * records the payout. `null` when your processor hasn't recorded the payout yet. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
     */
    "fee_money": ((MoneyValue) | (null));
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key": string | null;
    /**
     * What started the payout. Inbound payouts are always platform initiated. An outbound payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled outbound payouts list their balance
     * transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with
     * reason not_itemized. Unmapped sources are returned as other. Value enum: "manual",
     * "scheduled", "platform", "other".
     */
    "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
    /** Merchant whose balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears
     * only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a
     * method Flint doesn't map. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Signed effect of this payout on your Flint balance. Negative for outbound payouts and
     * positive for inbound payouts. `null` when your processor hasn't recorded the payout yet.
     * anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "net_money": ((MoneyValue) | (null));
    /**
     * The payout this one reverses, inlined when you request expand=original_payout. null when
     * expanded and original_payout_id is absent. Present only when `expand` includes
     * `original_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "original_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * On a payout that reverses another payout, the payout it reverses. Present only when Flint
     * has the matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "original_payout_id"?: string;
    /**
     * The payout destination, inlined when you request expand=payout_destination. null when
     * expanded and payout_destination_id is absent. Present only when `expand` includes
     * `payout_destination`; `null` when expanded and there is no related payout destination.
     * anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout destination's summary
     * fields, such as type, bank name, last four digits, and status, returned when the destination
     * is expanded. anyOf[2] (Value): null.
     */
    "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
    /**
     * Bank account or debit card used for the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: string;
    /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
    "payout_id": string;
    /**
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed".
     */
    "reversal_status": "none" | "reversed" | (string & {});
    /**
     * The payout reversing this one, inlined when you request expand=reversed_by_payout. null when
     * expanded and reversed_by_payout_id is absent. Present only when `expand` includes
     * `reversed_by_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * The separate payout reversing this one, when Flint has the matching payout. Its presence
     * does not mean the reversal has completed; read reversal_status. A payout has at most one of
     * original_payout_id and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "reversed_by_payout_id"?: string;
    /** Text shown on your bank statement for the transfer, when one was set. */
    "statement_descriptor"?: string;
    /**
     * Where the payout is: pending until it is sent, in_transit moving between Flint and your
     * bank, then succeeded or failed. A succeeded payout can still become failed if the bank
     * returns the transfer, and canceled means a manual payout was canceled while pending. Value
     * enum: "pending", "in_transit", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is pending
     * unless it was scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * [] (Value): string. Value enum: "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /**
     * The bank's trace number for the transfer, which your bank can use to locate it. Its status
     * says whether the number is pending, available, or unsupported, and value holds the number
     * when Flint has it. Absent when Flint has no trace information. A payout's bank trace ID,
     * with whether it is pending, available, or unsupported.
     */
    "trace_id"?: PayoutTraceID;
    /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PayoutCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "direction": "outbound" | "inbound" | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "idempotency_key"?: string | null;
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "arrival_date"?: ((string) | (null));
            "balance_source_type"?: (("card" | "bank_account" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "description"?: ((string) | (null));
            "direction"?: (("outbound" | "inbound" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {}))
                | (null));
            "failure_message"?: ((string) | (null));
            "fee_amount_status"?: (("estimated" | "final" | "not_applicable" | (string & {})) | (null));
            "fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("manual" | "scheduled" | "platform" | "other" | (string & {})) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "method"?: (("standard" | "instant" | "other" | (string & {})) | (null));
            "net_money"?: ((MoneyValuePreviousAttributes) | (null));
            "original_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            "original_payout_id"?: ((string) | (null));
            "payout_destination"?: ((ExpandedPayoutDestinationSummaryPreviousAttributes) | (null));
            "payout_destination_id"?: ((string) | (null));
            "payout_id"?: ((string) | (null));
            "reversal_status"?: (("none" | "reversed" | (string & {})) | (null));
            "reversed_by_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            "reversed_by_payout_id"?: ((string) | (null));
            "statement_descriptor"?: ((string) | (null));
            "status"?: (("pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "trace_id"?: ((PayoutTraceIDPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "direction": "outbound" | "inbound" | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "idempotency_key"?: string | null;
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "arrival_date"?: ((string) | (null));
            "balance_source_type"?: (("card" | "bank_account" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "description"?: ((string) | (null));
            "direction"?: (("outbound" | "inbound" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {}))
                | (null));
            "failure_message"?: ((string) | (null));
            "fee_amount_status"?: (("estimated" | "final" | "not_applicable" | (string & {})) | (null));
            "fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("manual" | "scheduled" | "platform" | "other" | (string & {})) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "method"?: (("standard" | "instant" | "other" | (string & {})) | (null));
            "net_money"?: ((MoneyValuePreviousAttributes) | (null));
            "original_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            "original_payout_id"?: ((string) | (null));
            "payout_destination"?: ((ExpandedPayoutDestinationSummaryPreviousAttributes) | (null));
            "payout_destination_id"?: ((string) | (null));
            "payout_id"?: ((string) | (null));
            "reversal_status"?: (("none" | "reversed" | (string & {})) | (null));
            "reversed_by_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            "reversed_by_payout_id"?: ((string) | (null));
            "statement_descriptor"?: ((string) | (null));
            "status"?: (("pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            "trace_id"?: ((PayoutTraceIDPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.canceled";
});
/**
 * The `payout.canceled` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount moved between
     * your bank and Flint. Always positive. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.arrival_date (Optional): string. Expected settlement
     * date of the transfer, in YYYY-MM-DD format using the UTC date of the expected arrival.
     * Format: date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance
     * source this payout draws from. Flint chooses the source when balance_source_type is omitted
     * at create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.direction (Required): string. Direction of the money movement.
     * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a
     * negative Flint balance. Value enum: "outbound", "inbound". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.failure_code (Optional): string.
     * Flint-normalized payout failure code. Unknown provider values are returned as payout_failed.
     * Value enum: "account_closed", "account_frozen", "bank_account_restricted",
     * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
     * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed". object.failure_message (Optional):
     * string. Flint-authored payout failure message. This is stable explanatory text, not a raw
     * provider message. object.fee_amount_status (Required): string. Whether the payout fee is
     * estimated or final. not_applicable means no applicable fee status is known, including
     * unmapped fee states. Value enum: "estimated", "final", "not_applicable". object.fee_money
     * (Required): {@link MoneyValue} or null. Fee for this payout, never negative. Payouts carry
     * no fee, so this is 0 once your processor records the payout. `null` when your processor
     * hasn't recorded the payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.fee_money.anyOf[2] (Value): null. object.idempotency_key (Optional): string or null.
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. object.initiated_by
     * (Required): string. What started the payout. Inbound payouts are always platform initiated.
     * An outbound payout imported from your processor follows the processor: scheduled when it
     * sent the payout automatically, otherwise manual. Only scheduled outbound payouts list their
     * balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return
     * 409 with reason not_itemized. Unmapped sources are returned as other. Value enum: "manual",
     * "scheduled", "platform", "other". object.merchant_id (Required): string. Merchant whose
     * balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.method
     * (Required): string. Payouts Flint sends, by API, Dashboard or schedule, are always
     * `standard`. `instant` appears only on a payout Flint recorded from the processor that was
     * sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard",
     * "instant", "other". object.net_money (Required): {@link MoneyValue} or null. Signed effect
     * of this payout on your Flint balance. Negative for outbound payouts and positive for inbound
     * payouts. `null` when your processor hasn't recorded the payout yet.
     * object.net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null.
     * object.original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this
     * one reverses, inlined when you request expand=original_payout. null when expanded and
     * original_payout_id is absent. Present only when `expand` includes `original_payout`; `null`
     * when expanded and there is no related payout. object.original_payout.anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. object.original_payout.anyOf[2]
     * (Value): null. object.original_payout_id (Optional): string. On a payout that reverses
     * another payout, the payout it reverses. Present only when Flint has the matching original
     * payout. A payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card used for the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * transfer, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit moving between Flint and your bank, then succeeded or failed. A
     * succeeded payout can still become failed if the bank returns the transfer, and canceled
     * means a manual payout was canceled while pending. Value enum: "pending", "in_transit",
     * "succeeded", "failed", "canceled". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is pending
     * unless it was scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * object.supported_actions[] (Value): string. Value enum: "cancel". object.trace_id
     * (Optional): {@link PayoutTraceID}. The bank's trace number for the transfer, which your bank
     * can use to locate it. Its status says whether the number is pending, available, or
     * unsupported, and value holds the number when Flint has it. Absent when Flint has no trace
     * information. A payout's bank trace ID, with whether it is pending, available, or
     * unsupported. object.updated_at (Required): string. When the payout last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Amount moved between your bank and Flint. Always
     * positive. previous_attributes.amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value): null.
     * previous_attributes.arrival_date (Optional): string or null. Expected settlement date of the
     * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival.
     * previous_attributes.arrival_date.anyOf[1] (Value): string. Expected settlement date of the
     * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
     * Example: "2026-08-02". previous_attributes.arrival_date.anyOf[2] (Value): null.
     * previous_attributes.balance_source_type (Optional): string or null. Balance source this
     * payout draws from. Flint chooses the source when balance_source_type is omitted at create.
     * Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". previous_attributes.balance_source_type.anyOf[1] (Value): string. Balance
     * source this payout draws from. Flint chooses the source when balance_source_type is omitted
     * at create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". previous_attributes.balance_source_type.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the payout was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the payout was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.currency (Optional): string or null. ISO 4217 currency
     * code. previous_attributes.currency.anyOf[1] (Value): string. ISO 4217 currency code.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * previous_attributes.currency.anyOf[2] (Value): null. previous_attributes.description
     * (Optional): string or null. Description sent when the payout was created. Absent when there
     * is none. previous_attributes.description.anyOf[1] (Value): string. Description sent when the
     * payout was created. Absent when there is none. previous_attributes.description.anyOf[2]
     * (Value): null. previous_attributes.direction (Optional): string or null. Direction of the
     * money movement. Outbound payouts deposit funds in your bank; inbound payouts withdraw funds
     * to cover a negative Flint balance. Value enum: "outbound", "inbound".
     * previous_attributes.direction.anyOf[1] (Value): string. Direction of the money movement.
     * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a
     * negative Flint balance. Value enum: "outbound", "inbound".
     * previous_attributes.direction.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Flint-normalized payout failure
     * code. Unknown provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". previous_attributes.failure_code.anyOf[1] (Value): string. Flint-normalized
     * payout failure code. Unknown provider values are returned as payout_failed. Value enum:
     * "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed",
     * "could_not_process", "debit_not_authorized", "declined", "insufficient_funds",
     * "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed". previous_attributes.failure_code.anyOf[2]
     * (Value): null. previous_attributes.failure_message (Optional): string or null.
     * Flint-authored payout failure message. This is stable explanatory text, not a raw provider
     * message. previous_attributes.failure_message.anyOf[1] (Value): string. Flint-authored payout
     * failure message. This is stable explanatory text, not a raw provider message.
     * previous_attributes.failure_message.anyOf[2] (Value): null.
     * previous_attributes.fee_amount_status (Optional): string or null. Whether the payout fee is
     * estimated or final. not_applicable means no applicable fee status is known, including
     * unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     * previous_attributes.fee_amount_status.anyOf[1] (Value): string. Whether the payout fee is
     * estimated or final. not_applicable means no applicable fee status is known, including
     * unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     * previous_attributes.fee_amount_status.anyOf[2] (Value): null. previous_attributes.fee_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Fee for this payout, never
     * negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null`
     * when your processor hasn't recorded the payout yet. previous_attributes.fee_money.anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. previous_attributes.fee_money.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[2] (Value):
     * null. previous_attributes.initiated_by (Optional): string or null. What started the payout.
     * Inbound payouts are always platform initiated. An outbound payout imported from your
     * processor follows the processor: scheduled when it sent the payout automatically, otherwise
     * manual. Only scheduled outbound payouts list their balance transactions through GET
     * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
     * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
     * "other". previous_attributes.initiated_by.anyOf[1] (Value): string. What started the payout.
     * Inbound payouts are always platform initiated. An outbound payout imported from your
     * processor follows the processor: scheduled when it sent the payout automatically, otherwise
     * manual. Only scheduled outbound payouts list their balance transactions through GET
     * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
     * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
     * "other". previous_attributes.initiated_by.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Merchant whose balance the
     * payout changes. previous_attributes.merchant_id.anyOf[1] (Value): string. Merchant whose
     * balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.method (Optional): string or null. Payouts Flint sends, by API,
     * Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint
     * recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't
     * map. Value enum: "standard", "instant", "other". previous_attributes.method.anyOf[1]
     * (Value): string. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`.
     * `instant` appears only on a payout Flint recorded from the processor that was sent outside
     * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
     * previous_attributes.method.anyOf[2] (Value): null. previous_attributes.net_money (Optional):
     * {@link MoneyValuePreviousAttributes} or null. Signed effect of this payout on your Flint
     * balance. Negative for outbound payouts and positive for inbound payouts. `null` when your
     * processor hasn't recorded the payout yet. previous_attributes.net_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.net_money.anyOf[2] (Value): null.
     * previous_attributes.original_payout (Optional): {@link
     * ExpandedPayoutSummaryPreviousAttributes} or null. The payout this one reverses, inlined when
     * you request expand=original_payout. null when expanded and original_payout_id is absent.
     * Present only when `expand` includes `original_payout`; `null` when expanded and there is no
     * related payout. previous_attributes.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummaryPreviousAttributes}. previous_attributes.original_payout.anyOf[2]
     * (Value): null. previous_attributes.original_payout_id (Optional): string or null. On a
     * payout that reverses another payout, the payout it reverses. Present only when Flint has the
     * matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id. previous_attributes.original_payout_id.anyOf[1] (Value): string. On a
     * payout that reverses another payout, the payout it reverses. Present only when Flint has the
     * matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * previous_attributes.original_payout_id.anyOf[2] (Value): null.
     * previous_attributes.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummaryPreviousAttributes} or null. The payout destination, inlined
     * when you request expand=payout_destination. null when expanded and payout_destination_id is
     * absent. Present only when `expand` includes `payout_destination`; `null` when expanded and
     * there is no related payout destination. previous_attributes.payout_destination.anyOf[1]
     * (Value): {@link ExpandedPayoutDestinationSummaryPreviousAttributes}.
     * previous_attributes.payout_destination.anyOf[2] (Value): null.
     * previous_attributes.payout_destination_id (Optional): string or null. Bank account or debit
     * card used for the payout. Absent when Flint can't match your processor's destination to a
     * payout destination. previous_attributes.payout_destination_id.anyOf[1] (Value): string. Bank
     * account or debit card used for the payout. Absent when Flint can't match your processor's
     * destination to a payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     * previous_attributes.payout_destination_id.anyOf[2] (Value): null.
     * previous_attributes.payout_id (Optional): string or null. Stable identifier of the payout.
     * previous_attributes.payout_id.anyOf[1] (Value): string. Stable identifier of the payout.
     * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". previous_attributes.payout_id.anyOf[2] (Value):
     * null. previous_attributes.reversal_status (Optional): string or null. Whether Flint has
     * pulled a paid payout back from your bank: none until the reversal completes, then reversed.
     * A payout_reversal balance transaction returns the money, and status stays succeeded. Value
     * enum: "none", "reversed". previous_attributes.reversal_status.anyOf[1] (Value): string.
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed".
     * previous_attributes.reversal_status.anyOf[2] (Value): null.
     * previous_attributes.reversed_by_payout (Optional): {@link
     * ExpandedPayoutSummaryPreviousAttributes} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. previous_attributes.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummaryPreviousAttributes}. previous_attributes.reversed_by_payout.anyOf[2]
     * (Value): null. previous_attributes.reversed_by_payout_id (Optional): string or null. The
     * separate payout reversing this one, when Flint has the matching payout. Its presence does
     * not mean the reversal has completed; read reversal_status. A payout has at most one of
     * original_payout_id and reversed_by_payout_id.
     * previous_attributes.reversed_by_payout_id.anyOf[1] (Value): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * previous_attributes.reversed_by_payout_id.anyOf[2] (Value): null.
     * previous_attributes.statement_descriptor (Optional): string or null. Text shown on your bank
     * statement for the transfer, when one was set.
     * previous_attributes.statement_descriptor.anyOf[1] (Value): string. Text shown on your bank
     * statement for the transfer, when one was set.
     * previous_attributes.statement_descriptor.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Where the payout is: pending until it is sent, in_transit moving
     * between Flint and your bank, then succeeded or failed. A succeeded payout can still become
     * failed if the bank returns the transfer, and canceled means a manual payout was canceled
     * while pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the payout is: pending until it
     * is sent, in_transit moving between Flint and your bank, then succeeded or failed. A
     * succeeded payout can still become failed if the bank returns the transfer, and canceled
     * means a manual payout was canceled while pending. Value enum: "pending", "in_transit",
     * "succeeded", "failed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts now. cancel is offered while an outbound payout is pending unless it was
     * scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts now. cancel is offered while an outbound payout is pending unless it was
     * scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.trace_id
     * (Optional): {@link PayoutTraceIDPreviousAttributes} or null. The bank's trace number for the
     * transfer, which your bank can use to locate it. Its status says whether the number is
     * pending, available, or unsupported, and value holds the number when Flint has it. Absent
     * when Flint has no trace information. previous_attributes.trace_id.anyOf[1] (Value): {@link
     * PayoutTraceIDPreviousAttributes}. previous_attributes.trace_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the payout last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the payout last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount moved between your bank and Flint.
         * Always positive. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. arrival_date (Optional): string. Expected settlement date of the
         * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. direction (Required): string. Direction of the money movement.
         * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a
         * negative Flint balance. Value enum: "outbound", "inbound". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_code (Optional): string.
         * Flint-normalized payout failure code. Unknown provider values are returned as
         * payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. initiated_by (Required): string. What
         * started the payout. Inbound payouts are always platform initiated. An outbound payout
         * imported from your processor follows the processor: scheduled when it sent the payout
         * automatically, otherwise manual. Only scheduled outbound payouts list their balance
         * transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409
         * with reason not_itemized. Unmapped sources are returned as other. Value enum: "manual",
         * "scheduled", "platform", "other". merchant_id (Required): string. Merchant whose balance
         * the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting
         * with flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. method
         * (Required): string. Payouts Flint sends, by API, Dashboard or schedule, are always
         * `standard`. `instant` appears only on a payout Flint recorded from the processor that
         * was sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard",
         * "instant", "other". net_money (Required): {@link MoneyValue} or null. Signed effect of
         * this payout on your Flint balance. Negative for outbound payouts and positive for
         * inbound payouts. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card used for the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the transfer, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit moving between Flint and your bank,
         * then succeeded or failed. A succeeded payout can still become failed if the bank returns
         * the transfer, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while an outbound payout is pending unless it was scheduled automatically. Inbound
         * payouts offer no actions. [] enum: "cancel". supported_actions[] (Value): string. Value
         * enum: "cancel". trace_id (Optional): {@link PayoutTraceID}. The bank's trace number for
         * the transfer, which your bank can use to locate it. Its status says whether the number
         * is pending, available, or unsupported, and value holds the number when Flint has it.
         * Absent when Flint has no trace information. A payout's bank trace ID, with whether it is
         * pending, available, or unsupported. updated_at (Required): string. When the payout last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount moved between your bank and Flint. Always positive. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of
             * the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Direction of the money movement. Outbound payouts deposit funds in your bank;
             * inbound payouts withdraw funds to cover a negative Flint balance. Value enum:
             * "outbound", "inbound".
             */
            "direction": "outbound" | "inbound" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * What started the payout. Inbound payouts are always platform initiated. An outbound
             * payout imported from your processor follows the processor: scheduled when it sent
             * the payout automatically, otherwise manual. Only scheduled outbound payouts list
             * their balance transactions through GET /v1/balance-transactions?payout_id=; other
             * payouts return 409 with reason not_itemized. Unmapped sources are returned as other.
             * Value enum: "manual", "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /**
             * Merchant whose balance the payout changes. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. Negative for outbound payouts
             * and positive for inbound payouts. `null` when your processor hasn't recorded the
             * payout yet. anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented
             * as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card used for the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the transfer, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit moving between Flint and
             * your bank, then succeeded or failed. A succeeded payout can still become failed if
             * the bank returns the transfer, and canceled means a manual payout was canceled while
             * pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is
             * pending unless it was scheduled automatically. Inbound payouts offer no actions. []
             * enum: "cancel". [] (Value): string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the transfer, which your bank can use to locate it. Its
             * status says whether the number is pending, available, or unsupported, and value
             * holds the number when Flint has it. Absent when Flint has no trace information. A
             * payout's bank trace ID, with whether it is pending, available, or unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. amount_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Amount moved between your bank and Flint. Always
         * positive. amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. arrival_date (Optional): string or null. Expected
         * settlement date of the transfer, in YYYY-MM-DD format using the UTC date of the expected
         * arrival. arrival_date.anyOf[1] (Value): string. Expected settlement date of the
         * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". arrival_date.anyOf[2] (Value): null. balance_source_type
         * (Optional): string or null. Balance source this payout draws from. Flint chooses the
         * source when balance_source_type is omitted at create. Clients must accept source types
         * added in future releases. Value enum: "card", "bank_account".
         * balance_source_type.anyOf[1] (Value): string. Balance source this payout draws from.
         * Flint chooses the source when balance_source_type is omitted at create. Clients must
         * accept source types added in future releases. Value enum: "card", "bank_account".
         * balance_source_type.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the payout was created. created_at.anyOf[1] (Value): string. When the payout was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. currency (Optional): string or null. ISO 4217 currency code.
         * currency.anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
         * pattern: ^[A-Z]{3}$. Example: "USD". currency.anyOf[2] (Value): null. description
         * (Optional): string or null. Description sent when the payout was created. Absent when
         * there is none. description.anyOf[1] (Value): string. Description sent when the payout
         * was created. Absent when there is none. description.anyOf[2] (Value): null. direction
         * (Optional): string or null. Direction of the money movement. Outbound payouts deposit
         * funds in your bank; inbound payouts withdraw funds to cover a negative Flint balance.
         * Value enum: "outbound", "inbound". direction.anyOf[1] (Value): string. Direction of the
         * money movement. Outbound payouts deposit funds in your bank; inbound payouts withdraw
         * funds to cover a negative Flint balance. Value enum: "outbound", "inbound".
         * direction.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. failure_code (Optional): string or null.
         * Flint-normalized payout failure code. Unknown provider values are returned as
         * payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_code.anyOf[1] (Value): string. Flint-normalized payout failure
         * code. Unknown provider values are returned as payout_failed. Value enum:
         * "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed",
         * "could_not_process", "debit_not_authorized", "declined", "insufficient_funds",
         * "invalid_account_number", "incorrect_account_holder_name",
         * "incorrect_account_holder_address", "incorrect_account_holder_tax_id",
         * "invalid_currency", "no_account", "unsupported_card", "payout_failed".
         * failure_code.anyOf[2] (Value): null. failure_message (Optional): string or null.
         * Flint-authored payout failure message. This is stable explanatory text, not a raw
         * provider message. failure_message.anyOf[1] (Value): string. Flint-authored payout
         * failure message. This is stable explanatory text, not a raw provider message.
         * failure_message.anyOf[2] (Value): null. fee_amount_status (Optional): string or null.
         * Whether the payout fee is estimated or final. not_applicable means no applicable fee
         * status is known, including unmapped fee states. Value enum: "estimated", "final",
         * "not_applicable". fee_amount_status.anyOf[1] (Value): string. Whether the payout fee is
         * estimated or final. not_applicable means no applicable fee status is known, including
         * unmapped fee states. Value enum: "estimated", "final", "not_applicable".
         * fee_amount_status.anyOf[2] (Value): null. fee_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Fee for this payout, never negative. Payouts
         * carry no fee, so this is 0 once your processor records the payout. `null` when your
         * processor hasn't recorded the payout yet. fee_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. fee_money.anyOf[2] (Value): null. idempotency_key
         * (Optional): string or null. The Idempotency-Key of the request that created this
         * resource. `null` when that request sent no key, Flint created the resource, the reader
         * isn't the caller that created it (another app install, a buyer, or the merchant reading
         * an app's or buyer's record), or the caller that created an older record is unknown.
         * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
         * responses and webhook events, can return `null`. To find a key that a replay returns as
         * `null`, read the resource. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
         * of the request that created this resource. `null` when that request sent no key, Flint
         * created the resource, the reader isn't the caller that created it (another app install,
         * a buyer, or the merchant reading an app's or buyer's record), or the caller that created
         * an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
         * payloads, including replayed responses and webhook events, can return `null`. To find a
         * key that a replay returns as `null`, read the resource. idempotency_key.anyOf[2]
         * (Value): null. initiated_by (Optional): string or null. What started the payout. Inbound
         * payouts are always platform initiated. An outbound payout imported from your processor
         * follows the processor: scheduled when it sent the payout automatically, otherwise
         * manual. Only scheduled outbound payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". initiated_by.anyOf[1] (Value): string. What started the payout. Inbound payouts
         * are always platform initiated. An outbound payout imported from your processor follows
         * the processor: scheduled when it sent the payout automatically, otherwise manual. Only
         * scheduled outbound payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". initiated_by.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Merchant whose balance the payout changes. merchant_id.anyOf[1] (Value): string.
         * Merchant whose balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or null.
         * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
         * reserved for Flint, are not returned, and cannot be written through the public API.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. method
         * (Optional): string or null. Payouts Flint sends, by API, Dashboard or schedule, are
         * always `standard`. `instant` appears only on a payout Flint recorded from the processor
         * that was sent outside Flint. `other` is a method Flint doesn't map. Value enum:
         * "standard", "instant", "other". method.anyOf[1] (Value): string. Payouts Flint sends, by
         * API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout
         * Flint recorded from the processor that was sent outside Flint. `other` is a method Flint
         * doesn't map. Value enum: "standard", "instant", "other". method.anyOf[2] (Value): null.
         * net_money (Optional): {@link MoneyValuePreviousAttributes} or null. Signed effect of
         * this payout on your Flint balance. Negative for outbound payouts and positive for
         * inbound payouts. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. net_money.anyOf[2]
         * (Value): null. original_payout (Optional): {@link
         * ExpandedPayoutSummaryPreviousAttributes} or null. The payout this one reverses, inlined
         * when you request expand=original_payout. null when expanded and original_payout_id is
         * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
         * there is no related payout. original_payout.anyOf[1] (Value): {@link
         * ExpandedPayoutSummaryPreviousAttributes}. original_payout.anyOf[2] (Value): null.
         * original_payout_id (Optional): string or null. On a payout that reverses another payout,
         * the payout it reverses. Present only when Flint has the matching original payout. A
         * payout has at most one of original_payout_id and reversed_by_payout_id.
         * original_payout_id.anyOf[1] (Value): string. On a payout that reverses another payout,
         * the payout it reverses. Present only when Flint has the matching original payout. A
         * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". original_payout_id.anyOf[2] (Value): null.
         * payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummaryPreviousAttributes} or null. The payout destination,
         * inlined when you request expand=payout_destination. null when expanded and
         * payout_destination_id is absent. Present only when `expand` includes
         * `payout_destination`; `null` when expanded and there is no related payout destination.
         * payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummaryPreviousAttributes}. payout_destination.anyOf[2]
         * (Value): null. payout_destination_id (Optional): string or null. Bank account or debit
         * card used for the payout. Absent when Flint can't match your processor's destination to
         * a payout destination. payout_destination_id.anyOf[1] (Value): string. Bank account or
         * debit card used for the payout. Absent when Flint can't match your processor's
         * destination to a payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
         * payout_destination_id.anyOf[2] (Value): null. payout_id (Optional): string or null.
         * Stable identifier of the payout. payout_id.anyOf[1] (Value): string. Stable identifier
         * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_id.anyOf[2] (Value):
         * null. reversal_status (Optional): string or null. Whether Flint has pulled a paid payout
         * back from your bank: none until the reversal completes, then reversed. A payout_reversal
         * balance transaction returns the money, and status stays succeeded. Value enum: "none",
         * "reversed". reversal_status.anyOf[1] (Value): string. Whether Flint has pulled a paid
         * payout back from your bank: none until the reversal completes, then reversed. A
         * payout_reversal balance transaction returns the money, and status stays succeeded. Value
         * enum: "none", "reversed". reversal_status.anyOf[2] (Value): null. reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummaryPreviousAttributes} or null. The payout
         * reversing this one, inlined when you request expand=reversed_by_payout. null when
         * expanded and reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummaryPreviousAttributes}.
         * reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional): string or
         * null. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. reversed_by_payout_id.anyOf[1]
         * (Value): string. The separate payout reversing this one, when Flint has the matching
         * payout. Its presence does not mean the reversal has completed; read reversal_status. A
         * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". reversed_by_payout_id.anyOf[2] (Value): null.
         * statement_descriptor (Optional): string or null. Text shown on your bank statement for
         * the transfer, when one was set. statement_descriptor.anyOf[1] (Value): string. Text
         * shown on your bank statement for the transfer, when one was set.
         * statement_descriptor.anyOf[2] (Value): null. status (Optional): string or null. Where
         * the payout is: pending until it is sent, in_transit moving between Flint and your bank,
         * then succeeded or failed. A succeeded payout can still become failed if the bank returns
         * the transfer, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". status.anyOf[1] (Value):
         * string. Where the payout is: pending until it is sent, in_transit moving between Flint
         * and your bank, then succeeded or failed. A succeeded payout can still become failed if
         * the bank returns the transfer, and canceled means a manual payout was canceled while
         * pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is
         * pending unless it was scheduled automatically. Inbound payouts offer no actions. []
         * enum: "cancel". supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
         * Flint accepts now. cancel is offered while an outbound payout is pending unless it was
         * scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. trace_id (Optional): {@link
         * PayoutTraceIDPreviousAttributes} or null. The bank's trace number for the transfer,
         * which your bank can use to locate it. Its status says whether the number is pending,
         * available, or unsupported, and value holds the number when Flint has it. Absent when
         * Flint has no trace information. trace_id.anyOf[1] (Value): {@link
         * PayoutTraceIDPreviousAttributes}. trace_id.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the payout last changed. updated_at.anyOf[1] (Value):
         * string. When the payout last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Amount moved between your bank and Flint. Always positive. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of
             * the expected arrival. anyOf[1] (Value): string. Expected settlement date of the
             * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
             * date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "arrival_date"?: ((string) | (null));
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account". anyOf[1] (Value): string.
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account". anyOf[2] (Value): null.
             */
            "balance_source_type"?: (("card" | "bank_account" | (string & {})) | (null));
            /**
             * When the payout was created. anyOf[1] (Value): string. When the payout was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength:
             * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Description sent when the payout was created. Absent when there is none. anyOf[1]
             * (Value): string. Description sent when the payout was created. Absent when there is
             * none. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Direction of the money movement. Outbound payouts deposit funds in your bank;
             * inbound payouts withdraw funds to cover a negative Flint balance. Value enum:
             * "outbound", "inbound". anyOf[1] (Value): string. Direction of the money movement.
             * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover
             * a negative Flint balance. Value enum: "outbound", "inbound". anyOf[2] (Value): null.
             */
            "direction"?: (("outbound" | "inbound" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed". anyOf[1] (Value): string. Flint-normalized
             * payout failure code. Unknown provider values are returned as payout_failed. Value
             * enum: "account_closed", "account_frozen", "bank_account_restricted",
             * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
             * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
             * "incorrect_account_holder_address", "incorrect_account_holder_tax_id",
             * "invalid_currency", "no_account", "unsupported_card", "payout_failed". anyOf[2]
             * (Value): null.
             */
            "failure_code"?: (("account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {}))
                | (null));
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message. anyOf[1] (Value): string. Flint-authored payout failure message.
             * This is stable explanatory text, not a raw provider message. anyOf[2] (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable". anyOf[1] (Value): string. Whether the payout fee is estimated or
             * final. not_applicable means no applicable fee status is known, including unmapped
             * fee states. Value enum: "estimated", "final", "not_applicable". anyOf[2] (Value):
             * null.
             */
            "fee_amount_status"?: (("estimated" | "final" | "not_applicable" | (string & {})) | (null));
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the
             * request that created this resource. `null` when that request sent no key, Flint
             * created the resource, the reader isn't the caller that created it (another app
             * install, a buyer, or the merchant reading an app's or buyer's record), or the caller
             * that created an older record is unknown. Filter its list with `idempotency_key` to
             * find it. Recorded payloads, including replayed responses and webhook events, can
             * return `null`. To find a key that a replay returns as `null`, read the resource.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * What started the payout. Inbound payouts are always platform initiated. An outbound
             * payout imported from your processor follows the processor: scheduled when it sent
             * the payout automatically, otherwise manual. Only scheduled outbound payouts list
             * their balance transactions through GET /v1/balance-transactions?payout_id=; other
             * payouts return 409 with reason not_itemized. Unmapped sources are returned as other.
             * Value enum: "manual", "scheduled", "platform", "other". anyOf[1] (Value): string.
             * What started the payout. Inbound payouts are always platform initiated. An outbound
             * payout imported from your processor follows the processor: scheduled when it sent
             * the payout automatically, otherwise manual. Only scheduled outbound payouts list
             * their balance transactions through GET /v1/balance-transactions?payout_id=; other
             * payouts return 409 with reason not_itemized. Unmapped sources are returned as other.
             * Value enum: "manual", "scheduled", "platform", "other". anyOf[2] (Value): null.
             */
            "initiated_by"?: (("manual" | "scheduled" | "platform" | "other" | (string & {})) | (null));
            /**
             * Merchant whose balance the payout changes. anyOf[1] (Value): string. Merchant whose
             * balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2]
             * (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other". anyOf[1] (Value): string. Payouts Flint sends, by API, Dashboard or
             * schedule, are always `standard`. `instant` appears only on a payout Flint recorded
             * from the processor that was sent outside Flint. `other` is a method Flint doesn't
             * map. Value enum: "standard", "instant", "other". anyOf[2] (Value): null.
             */
            "method"?: (("standard" | "instant" | "other" | (string & {})) | (null));
            /**
             * Signed effect of this payout on your Flint balance. Negative for outbound payouts
             * and positive for inbound payouts. `null` when your processor hasn't recorded the
             * payout yet. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "net_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. anyOf[1] (Value): string. On a payout
             * that reverses another payout, the payout it reverses. Present only when Flint has
             * the matching original payout. A payout has at most one of original_payout_id and
             * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". anyOf[2] (Value):
             * null.
             */
            "original_payout_id"?: ((string) | (null));
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link
             * ExpandedPayoutDestinationSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummaryPreviousAttributes) | (null));
            /**
             * Bank account or debit card used for the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. anyOf[1] (Value): string. Bank
             * account or debit card used for the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". anyOf[2] (Value): null.
             */
            "payout_destination_id"?: ((string) | (null));
            /**
             * Stable identifier of the payout. anyOf[1] (Value): string. Stable identifier of the
             * payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". anyOf[2] (Value): null.
             */
            "payout_id"?: ((string) | (null));
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed". anyOf[1] (Value):
             * string. Whether Flint has pulled a paid payout back from your bank: none until the
             * reversal completes, then reversed. A payout_reversal balance transaction returns the
             * money, and status stays succeeded. Value enum: "none", "reversed". anyOf[2] (Value):
             * null.
             */
            "reversal_status"?: (("none" | "reversed" | (string & {})) | (null));
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. anyOf[1] (Value):
             * string. The separate payout reversing this one, when Flint has the matching payout.
             * Its presence does not mean the reversal has completed; read reversal_status. A
             * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV". anyOf[2] (Value): null.
             */
            "reversed_by_payout_id"?: ((string) | (null));
            /**
             * Text shown on your bank statement for the transfer, when one was set. anyOf[1]
             * (Value): string. Text shown on your bank statement for the transfer, when one was
             * set. anyOf[2] (Value): null.
             */
            "statement_descriptor"?: ((string) | (null));
            /**
             * Where the payout is: pending until it is sent, in_transit moving between Flint and
             * your bank, then succeeded or failed. A succeeded payout can still become failed if
             * the bank returns the transfer, and canceled means a manual payout was canceled while
             * pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             * anyOf[1] (Value): string. Where the payout is: pending until it is sent, in_transit
             * moving between Flint and your bank, then succeeded or failed. A succeeded payout can
             * still become failed if the bank returns the transfer, and canceled means a manual
             * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
             * "failed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is
             * pending unless it was scheduled automatically. Inbound payouts offer no actions. []
             * enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts
             * now. cancel is offered while an outbound payout is pending unless it was scheduled
             * automatically. Inbound payouts offer no actions. [] enum: "cancel". anyOf[1][]
             * (Value): string. Value enum: "cancel". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * The bank's trace number for the transfer, which your bank can use to locate it. Its
             * status says whether the number is pending, available, or unsupported, and value
             * holds the number when Flint has it. Absent when Flint has no trace information.
             * anyOf[1] (Value): {@link PayoutTraceIDPreviousAttributes}. anyOf[2] (Value): null.
             */
            "trace_id"?: ((PayoutTraceIDPreviousAttributes) | (null));
            /**
             * When the payout last changed. anyOf[1] (Value): string. When the payout last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.canceled". */
    "event_type"?: "payout.canceled";
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
 * The `payout.canceled` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount moved between
     * your bank and Flint. Always positive. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.arrival_date (Optional): string. Expected settlement
     * date of the transfer, in YYYY-MM-DD format using the UTC date of the expected arrival.
     * Format: date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance
     * source this payout draws from. Flint chooses the source when balance_source_type is omitted
     * at create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.direction (Required): string. Direction of the money movement.
     * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a
     * negative Flint balance. Value enum: "outbound", "inbound". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.failure_code (Optional): string.
     * Flint-normalized payout failure code. Unknown provider values are returned as payout_failed.
     * Value enum: "account_closed", "account_frozen", "bank_account_restricted",
     * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
     * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed". object.failure_message (Optional):
     * string. Flint-authored payout failure message. This is stable explanatory text, not a raw
     * provider message. object.fee_amount_status (Required): string. Whether the payout fee is
     * estimated or final. not_applicable means no applicable fee status is known, including
     * unmapped fee states. Value enum: "estimated", "final", "not_applicable". object.fee_money
     * (Required): {@link MoneyValue} or null. Fee for this payout, never negative. Payouts carry
     * no fee, so this is 0 once your processor records the payout. `null` when your processor
     * hasn't recorded the payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.fee_money.anyOf[2] (Value): null. object.idempotency_key (Optional): string or null.
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. object.initiated_by
     * (Required): string. What started the payout. Inbound payouts are always platform initiated.
     * An outbound payout imported from your processor follows the processor: scheduled when it
     * sent the payout automatically, otherwise manual. Only scheduled outbound payouts list their
     * balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return
     * 409 with reason not_itemized. Unmapped sources are returned as other. Value enum: "manual",
     * "scheduled", "platform", "other". object.merchant_id (Required): string. Merchant whose
     * balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.method
     * (Required): string. Payouts Flint sends, by API, Dashboard or schedule, are always
     * `standard`. `instant` appears only on a payout Flint recorded from the processor that was
     * sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard",
     * "instant", "other". object.net_money (Required): {@link MoneyValue} or null. Signed effect
     * of this payout on your Flint balance. Negative for outbound payouts and positive for inbound
     * payouts. `null` when your processor hasn't recorded the payout yet.
     * object.net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null.
     * object.original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this
     * one reverses, inlined when you request expand=original_payout. null when expanded and
     * original_payout_id is absent. Present only when `expand` includes `original_payout`; `null`
     * when expanded and there is no related payout. object.original_payout.anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. object.original_payout.anyOf[2]
     * (Value): null. object.original_payout_id (Optional): string. On a payout that reverses
     * another payout, the payout it reverses. Present only when Flint has the matching original
     * payout. A payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card used for the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * transfer, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit moving between Flint and your bank, then succeeded or failed. A
     * succeeded payout can still become failed if the bank returns the transfer, and canceled
     * means a manual payout was canceled while pending. Value enum: "pending", "in_transit",
     * "succeeded", "failed", "canceled". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is pending
     * unless it was scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * object.supported_actions[] (Value): string. Value enum: "cancel". object.trace_id
     * (Optional): {@link PayoutTraceID}. The bank's trace number for the transfer, which your bank
     * can use to locate it. Its status says whether the number is pending, available, or
     * unsupported, and value holds the number when Flint has it. Absent when Flint has no trace
     * information. A payout's bank trace ID, with whether it is pending, available, or
     * unsupported. object.updated_at (Required): string. When the payout last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Amount moved between your bank and Flint. Always
     * positive. previous_attributes.amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value): null.
     * previous_attributes.arrival_date (Optional): string or null. Expected settlement date of the
     * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival.
     * previous_attributes.arrival_date.anyOf[1] (Value): string. Expected settlement date of the
     * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
     * Example: "2026-08-02". previous_attributes.arrival_date.anyOf[2] (Value): null.
     * previous_attributes.balance_source_type (Optional): string or null. Balance source this
     * payout draws from. Flint chooses the source when balance_source_type is omitted at create.
     * Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". previous_attributes.balance_source_type.anyOf[1] (Value): string. Balance
     * source this payout draws from. Flint chooses the source when balance_source_type is omitted
     * at create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". previous_attributes.balance_source_type.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the payout was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the payout was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.currency (Optional): string or null. ISO 4217 currency
     * code. previous_attributes.currency.anyOf[1] (Value): string. ISO 4217 currency code.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * previous_attributes.currency.anyOf[2] (Value): null. previous_attributes.description
     * (Optional): string or null. Description sent when the payout was created. Absent when there
     * is none. previous_attributes.description.anyOf[1] (Value): string. Description sent when the
     * payout was created. Absent when there is none. previous_attributes.description.anyOf[2]
     * (Value): null. previous_attributes.direction (Optional): string or null. Direction of the
     * money movement. Outbound payouts deposit funds in your bank; inbound payouts withdraw funds
     * to cover a negative Flint balance. Value enum: "outbound", "inbound".
     * previous_attributes.direction.anyOf[1] (Value): string. Direction of the money movement.
     * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a
     * negative Flint balance. Value enum: "outbound", "inbound".
     * previous_attributes.direction.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Flint-normalized payout failure
     * code. Unknown provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". previous_attributes.failure_code.anyOf[1] (Value): string. Flint-normalized
     * payout failure code. Unknown provider values are returned as payout_failed. Value enum:
     * "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed",
     * "could_not_process", "debit_not_authorized", "declined", "insufficient_funds",
     * "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed". previous_attributes.failure_code.anyOf[2]
     * (Value): null. previous_attributes.failure_message (Optional): string or null.
     * Flint-authored payout failure message. This is stable explanatory text, not a raw provider
     * message. previous_attributes.failure_message.anyOf[1] (Value): string. Flint-authored payout
     * failure message. This is stable explanatory text, not a raw provider message.
     * previous_attributes.failure_message.anyOf[2] (Value): null.
     * previous_attributes.fee_amount_status (Optional): string or null. Whether the payout fee is
     * estimated or final. not_applicable means no applicable fee status is known, including
     * unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     * previous_attributes.fee_amount_status.anyOf[1] (Value): string. Whether the payout fee is
     * estimated or final. not_applicable means no applicable fee status is known, including
     * unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     * previous_attributes.fee_amount_status.anyOf[2] (Value): null. previous_attributes.fee_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Fee for this payout, never
     * negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null`
     * when your processor hasn't recorded the payout yet. previous_attributes.fee_money.anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. previous_attributes.fee_money.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[2] (Value):
     * null. previous_attributes.initiated_by (Optional): string or null. What started the payout.
     * Inbound payouts are always platform initiated. An outbound payout imported from your
     * processor follows the processor: scheduled when it sent the payout automatically, otherwise
     * manual. Only scheduled outbound payouts list their balance transactions through GET
     * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
     * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
     * "other". previous_attributes.initiated_by.anyOf[1] (Value): string. What started the payout.
     * Inbound payouts are always platform initiated. An outbound payout imported from your
     * processor follows the processor: scheduled when it sent the payout automatically, otherwise
     * manual. Only scheduled outbound payouts list their balance transactions through GET
     * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
     * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
     * "other". previous_attributes.initiated_by.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Merchant whose balance the
     * payout changes. previous_attributes.merchant_id.anyOf[1] (Value): string. Merchant whose
     * balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.method (Optional): string or null. Payouts Flint sends, by API,
     * Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint
     * recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't
     * map. Value enum: "standard", "instant", "other". previous_attributes.method.anyOf[1]
     * (Value): string. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`.
     * `instant` appears only on a payout Flint recorded from the processor that was sent outside
     * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
     * previous_attributes.method.anyOf[2] (Value): null. previous_attributes.net_money (Optional):
     * {@link MoneyValuePreviousAttributes} or null. Signed effect of this payout on your Flint
     * balance. Negative for outbound payouts and positive for inbound payouts. `null` when your
     * processor hasn't recorded the payout yet. previous_attributes.net_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.net_money.anyOf[2] (Value): null.
     * previous_attributes.original_payout (Optional): {@link
     * ExpandedPayoutSummaryPreviousAttributes} or null. The payout this one reverses, inlined when
     * you request expand=original_payout. null when expanded and original_payout_id is absent.
     * Present only when `expand` includes `original_payout`; `null` when expanded and there is no
     * related payout. previous_attributes.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummaryPreviousAttributes}. previous_attributes.original_payout.anyOf[2]
     * (Value): null. previous_attributes.original_payout_id (Optional): string or null. On a
     * payout that reverses another payout, the payout it reverses. Present only when Flint has the
     * matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id. previous_attributes.original_payout_id.anyOf[1] (Value): string. On a
     * payout that reverses another payout, the payout it reverses. Present only when Flint has the
     * matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * previous_attributes.original_payout_id.anyOf[2] (Value): null.
     * previous_attributes.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummaryPreviousAttributes} or null. The payout destination, inlined
     * when you request expand=payout_destination. null when expanded and payout_destination_id is
     * absent. Present only when `expand` includes `payout_destination`; `null` when expanded and
     * there is no related payout destination. previous_attributes.payout_destination.anyOf[1]
     * (Value): {@link ExpandedPayoutDestinationSummaryPreviousAttributes}.
     * previous_attributes.payout_destination.anyOf[2] (Value): null.
     * previous_attributes.payout_destination_id (Optional): string or null. Bank account or debit
     * card used for the payout. Absent when Flint can't match your processor's destination to a
     * payout destination. previous_attributes.payout_destination_id.anyOf[1] (Value): string. Bank
     * account or debit card used for the payout. Absent when Flint can't match your processor's
     * destination to a payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     * previous_attributes.payout_destination_id.anyOf[2] (Value): null.
     * previous_attributes.payout_id (Optional): string or null. Stable identifier of the payout.
     * previous_attributes.payout_id.anyOf[1] (Value): string. Stable identifier of the payout.
     * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". previous_attributes.payout_id.anyOf[2] (Value):
     * null. previous_attributes.reversal_status (Optional): string or null. Whether Flint has
     * pulled a paid payout back from your bank: none until the reversal completes, then reversed.
     * A payout_reversal balance transaction returns the money, and status stays succeeded. Value
     * enum: "none", "reversed". previous_attributes.reversal_status.anyOf[1] (Value): string.
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed".
     * previous_attributes.reversal_status.anyOf[2] (Value): null.
     * previous_attributes.reversed_by_payout (Optional): {@link
     * ExpandedPayoutSummaryPreviousAttributes} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. previous_attributes.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummaryPreviousAttributes}. previous_attributes.reversed_by_payout.anyOf[2]
     * (Value): null. previous_attributes.reversed_by_payout_id (Optional): string or null. The
     * separate payout reversing this one, when Flint has the matching payout. Its presence does
     * not mean the reversal has completed; read reversal_status. A payout has at most one of
     * original_payout_id and reversed_by_payout_id.
     * previous_attributes.reversed_by_payout_id.anyOf[1] (Value): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * previous_attributes.reversed_by_payout_id.anyOf[2] (Value): null.
     * previous_attributes.statement_descriptor (Optional): string or null. Text shown on your bank
     * statement for the transfer, when one was set.
     * previous_attributes.statement_descriptor.anyOf[1] (Value): string. Text shown on your bank
     * statement for the transfer, when one was set.
     * previous_attributes.statement_descriptor.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Where the payout is: pending until it is sent, in_transit moving
     * between Flint and your bank, then succeeded or failed. A succeeded payout can still become
     * failed if the bank returns the transfer, and canceled means a manual payout was canceled
     * while pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the payout is: pending until it
     * is sent, in_transit moving between Flint and your bank, then succeeded or failed. A
     * succeeded payout can still become failed if the bank returns the transfer, and canceled
     * means a manual payout was canceled while pending. Value enum: "pending", "in_transit",
     * "succeeded", "failed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts now. cancel is offered while an outbound payout is pending unless it was
     * scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts now. cancel is offered while an outbound payout is pending unless it was
     * scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.trace_id
     * (Optional): {@link PayoutTraceIDPreviousAttributes} or null. The bank's trace number for the
     * transfer, which your bank can use to locate it. Its status says whether the number is
     * pending, available, or unsupported, and value holds the number when Flint has it. Absent
     * when Flint has no trace information. previous_attributes.trace_id.anyOf[1] (Value): {@link
     * PayoutTraceIDPreviousAttributes}. previous_attributes.trace_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the payout last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the payout last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount moved between your bank and Flint.
         * Always positive. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. arrival_date (Optional): string. Expected settlement date of the
         * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. direction (Required): string. Direction of the money movement.
         * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a
         * negative Flint balance. Value enum: "outbound", "inbound". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_code (Optional): string.
         * Flint-normalized payout failure code. Unknown provider values are returned as
         * payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. initiated_by (Required): string. What
         * started the payout. Inbound payouts are always platform initiated. An outbound payout
         * imported from your processor follows the processor: scheduled when it sent the payout
         * automatically, otherwise manual. Only scheduled outbound payouts list their balance
         * transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409
         * with reason not_itemized. Unmapped sources are returned as other. Value enum: "manual",
         * "scheduled", "platform", "other". merchant_id (Required): string. Merchant whose balance
         * the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting
         * with flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. method
         * (Required): string. Payouts Flint sends, by API, Dashboard or schedule, are always
         * `standard`. `instant` appears only on a payout Flint recorded from the processor that
         * was sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard",
         * "instant", "other". net_money (Required): {@link MoneyValue} or null. Signed effect of
         * this payout on your Flint balance. Negative for outbound payouts and positive for
         * inbound payouts. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card used for the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the transfer, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit moving between Flint and your bank,
         * then succeeded or failed. A succeeded payout can still become failed if the bank returns
         * the transfer, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while an outbound payout is pending unless it was scheduled automatically. Inbound
         * payouts offer no actions. [] enum: "cancel". supported_actions[] (Value): string. Value
         * enum: "cancel". trace_id (Optional): {@link PayoutTraceID}. The bank's trace number for
         * the transfer, which your bank can use to locate it. Its status says whether the number
         * is pending, available, or unsupported, and value holds the number when Flint has it.
         * Absent when Flint has no trace information. A payout's bank trace ID, with whether it is
         * pending, available, or unsupported. updated_at (Required): string. When the payout last
         * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount moved between your bank and Flint. Always positive. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of
             * the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Direction of the money movement. Outbound payouts deposit funds in your bank;
             * inbound payouts withdraw funds to cover a negative Flint balance. Value enum:
             * "outbound", "inbound".
             */
            "direction": "outbound" | "inbound" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * What started the payout. Inbound payouts are always platform initiated. An outbound
             * payout imported from your processor follows the processor: scheduled when it sent
             * the payout automatically, otherwise manual. Only scheduled outbound payouts list
             * their balance transactions through GET /v1/balance-transactions?payout_id=; other
             * payouts return 409 with reason not_itemized. Unmapped sources are returned as other.
             * Value enum: "manual", "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /**
             * Merchant whose balance the payout changes. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. Negative for outbound payouts
             * and positive for inbound payouts. `null` when your processor hasn't recorded the
             * payout yet. anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented
             * as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card used for the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the transfer, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit moving between Flint and
             * your bank, then succeeded or failed. A succeeded payout can still become failed if
             * the bank returns the transfer, and canceled means a manual payout was canceled while
             * pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is
             * pending unless it was scheduled automatically. Inbound payouts offer no actions. []
             * enum: "cancel". [] (Value): string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the transfer, which your bank can use to locate it. Its
             * status says whether the number is pending, available, or unsupported, and value
             * holds the number when Flint has it. Absent when Flint has no trace information. A
             * payout's bank trace ID, with whether it is pending, available, or unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. amount_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Amount moved between your bank and Flint. Always
         * positive. amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. arrival_date (Optional): string or null. Expected
         * settlement date of the transfer, in YYYY-MM-DD format using the UTC date of the expected
         * arrival. arrival_date.anyOf[1] (Value): string. Expected settlement date of the
         * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". arrival_date.anyOf[2] (Value): null. balance_source_type
         * (Optional): string or null. Balance source this payout draws from. Flint chooses the
         * source when balance_source_type is omitted at create. Clients must accept source types
         * added in future releases. Value enum: "card", "bank_account".
         * balance_source_type.anyOf[1] (Value): string. Balance source this payout draws from.
         * Flint chooses the source when balance_source_type is omitted at create. Clients must
         * accept source types added in future releases. Value enum: "card", "bank_account".
         * balance_source_type.anyOf[2] (Value): null. created_at (Optional): string or null. When
         * the payout was created. created_at.anyOf[1] (Value): string. When the payout was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. currency (Optional): string or null. ISO 4217 currency code.
         * currency.anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
         * pattern: ^[A-Z]{3}$. Example: "USD". currency.anyOf[2] (Value): null. description
         * (Optional): string or null. Description sent when the payout was created. Absent when
         * there is none. description.anyOf[1] (Value): string. Description sent when the payout
         * was created. Absent when there is none. description.anyOf[2] (Value): null. direction
         * (Optional): string or null. Direction of the money movement. Outbound payouts deposit
         * funds in your bank; inbound payouts withdraw funds to cover a negative Flint balance.
         * Value enum: "outbound", "inbound". direction.anyOf[1] (Value): string. Direction of the
         * money movement. Outbound payouts deposit funds in your bank; inbound payouts withdraw
         * funds to cover a negative Flint balance. Value enum: "outbound", "inbound".
         * direction.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. failure_code (Optional): string or null.
         * Flint-normalized payout failure code. Unknown provider values are returned as
         * payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_code.anyOf[1] (Value): string. Flint-normalized payout failure
         * code. Unknown provider values are returned as payout_failed. Value enum:
         * "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed",
         * "could_not_process", "debit_not_authorized", "declined", "insufficient_funds",
         * "invalid_account_number", "incorrect_account_holder_name",
         * "incorrect_account_holder_address", "incorrect_account_holder_tax_id",
         * "invalid_currency", "no_account", "unsupported_card", "payout_failed".
         * failure_code.anyOf[2] (Value): null. failure_message (Optional): string or null.
         * Flint-authored payout failure message. This is stable explanatory text, not a raw
         * provider message. failure_message.anyOf[1] (Value): string. Flint-authored payout
         * failure message. This is stable explanatory text, not a raw provider message.
         * failure_message.anyOf[2] (Value): null. fee_amount_status (Optional): string or null.
         * Whether the payout fee is estimated or final. not_applicable means no applicable fee
         * status is known, including unmapped fee states. Value enum: "estimated", "final",
         * "not_applicable". fee_amount_status.anyOf[1] (Value): string. Whether the payout fee is
         * estimated or final. not_applicable means no applicable fee status is known, including
         * unmapped fee states. Value enum: "estimated", "final", "not_applicable".
         * fee_amount_status.anyOf[2] (Value): null. fee_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Fee for this payout, never negative. Payouts
         * carry no fee, so this is 0 once your processor records the payout. `null` when your
         * processor hasn't recorded the payout yet. fee_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. fee_money.anyOf[2] (Value): null. idempotency_key
         * (Optional): string or null. The Idempotency-Key of the request that created this
         * resource. `null` when that request sent no key, Flint created the resource, the reader
         * isn't the caller that created it (another app install, a buyer, or the merchant reading
         * an app's or buyer's record), or the caller that created an older record is unknown.
         * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
         * responses and webhook events, can return `null`. To find a key that a replay returns as
         * `null`, read the resource. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
         * of the request that created this resource. `null` when that request sent no key, Flint
         * created the resource, the reader isn't the caller that created it (another app install,
         * a buyer, or the merchant reading an app's or buyer's record), or the caller that created
         * an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
         * payloads, including replayed responses and webhook events, can return `null`. To find a
         * key that a replay returns as `null`, read the resource. idempotency_key.anyOf[2]
         * (Value): null. initiated_by (Optional): string or null. What started the payout. Inbound
         * payouts are always platform initiated. An outbound payout imported from your processor
         * follows the processor: scheduled when it sent the payout automatically, otherwise
         * manual. Only scheduled outbound payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". initiated_by.anyOf[1] (Value): string. What started the payout. Inbound payouts
         * are always platform initiated. An outbound payout imported from your processor follows
         * the processor: scheduled when it sent the payout automatically, otherwise manual. Only
         * scheduled outbound payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". initiated_by.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Merchant whose balance the payout changes. merchant_id.anyOf[1] (Value): string.
         * Merchant whose balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or null.
         * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
         * reserved for Flint, are not returned, and cannot be written through the public API.
         * metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. method
         * (Optional): string or null. Payouts Flint sends, by API, Dashboard or schedule, are
         * always `standard`. `instant` appears only on a payout Flint recorded from the processor
         * that was sent outside Flint. `other` is a method Flint doesn't map. Value enum:
         * "standard", "instant", "other". method.anyOf[1] (Value): string. Payouts Flint sends, by
         * API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout
         * Flint recorded from the processor that was sent outside Flint. `other` is a method Flint
         * doesn't map. Value enum: "standard", "instant", "other". method.anyOf[2] (Value): null.
         * net_money (Optional): {@link MoneyValuePreviousAttributes} or null. Signed effect of
         * this payout on your Flint balance. Negative for outbound payouts and positive for
         * inbound payouts. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. net_money.anyOf[2]
         * (Value): null. original_payout (Optional): {@link
         * ExpandedPayoutSummaryPreviousAttributes} or null. The payout this one reverses, inlined
         * when you request expand=original_payout. null when expanded and original_payout_id is
         * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
         * there is no related payout. original_payout.anyOf[1] (Value): {@link
         * ExpandedPayoutSummaryPreviousAttributes}. original_payout.anyOf[2] (Value): null.
         * original_payout_id (Optional): string or null. On a payout that reverses another payout,
         * the payout it reverses. Present only when Flint has the matching original payout. A
         * payout has at most one of original_payout_id and reversed_by_payout_id.
         * original_payout_id.anyOf[1] (Value): string. On a payout that reverses another payout,
         * the payout it reverses. Present only when Flint has the matching original payout. A
         * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". original_payout_id.anyOf[2] (Value): null.
         * payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummaryPreviousAttributes} or null. The payout destination,
         * inlined when you request expand=payout_destination. null when expanded and
         * payout_destination_id is absent. Present only when `expand` includes
         * `payout_destination`; `null` when expanded and there is no related payout destination.
         * payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummaryPreviousAttributes}. payout_destination.anyOf[2]
         * (Value): null. payout_destination_id (Optional): string or null. Bank account or debit
         * card used for the payout. Absent when Flint can't match your processor's destination to
         * a payout destination. payout_destination_id.anyOf[1] (Value): string. Bank account or
         * debit card used for the payout. Absent when Flint can't match your processor's
         * destination to a payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
         * payout_destination_id.anyOf[2] (Value): null. payout_id (Optional): string or null.
         * Stable identifier of the payout. payout_id.anyOf[1] (Value): string. Stable identifier
         * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_id.anyOf[2] (Value):
         * null. reversal_status (Optional): string or null. Whether Flint has pulled a paid payout
         * back from your bank: none until the reversal completes, then reversed. A payout_reversal
         * balance transaction returns the money, and status stays succeeded. Value enum: "none",
         * "reversed". reversal_status.anyOf[1] (Value): string. Whether Flint has pulled a paid
         * payout back from your bank: none until the reversal completes, then reversed. A
         * payout_reversal balance transaction returns the money, and status stays succeeded. Value
         * enum: "none", "reversed". reversal_status.anyOf[2] (Value): null. reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummaryPreviousAttributes} or null. The payout
         * reversing this one, inlined when you request expand=reversed_by_payout. null when
         * expanded and reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummaryPreviousAttributes}.
         * reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional): string or
         * null. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. reversed_by_payout_id.anyOf[1]
         * (Value): string. The separate payout reversing this one, when Flint has the matching
         * payout. Its presence does not mean the reversal has completed; read reversal_status. A
         * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". reversed_by_payout_id.anyOf[2] (Value): null.
         * statement_descriptor (Optional): string or null. Text shown on your bank statement for
         * the transfer, when one was set. statement_descriptor.anyOf[1] (Value): string. Text
         * shown on your bank statement for the transfer, when one was set.
         * statement_descriptor.anyOf[2] (Value): null. status (Optional): string or null. Where
         * the payout is: pending until it is sent, in_transit moving between Flint and your bank,
         * then succeeded or failed. A succeeded payout can still become failed if the bank returns
         * the transfer, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". status.anyOf[1] (Value):
         * string. Where the payout is: pending until it is sent, in_transit moving between Flint
         * and your bank, then succeeded or failed. A succeeded payout can still become failed if
         * the bank returns the transfer, and canceled means a manual payout was canceled while
         * pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is
         * pending unless it was scheduled automatically. Inbound payouts offer no actions. []
         * enum: "cancel". supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
         * Flint accepts now. cancel is offered while an outbound payout is pending unless it was
         * scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel".
         * supported_actions.anyOf[2] (Value): null. trace_id (Optional): {@link
         * PayoutTraceIDPreviousAttributes} or null. The bank's trace number for the transfer,
         * which your bank can use to locate it. Its status says whether the number is pending,
         * available, or unsupported, and value holds the number when Flint has it. Absent when
         * Flint has no trace information. trace_id.anyOf[1] (Value): {@link
         * PayoutTraceIDPreviousAttributes}. trace_id.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the payout last changed. updated_at.anyOf[1] (Value):
         * string. When the payout last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Amount moved between your bank and Flint. Always positive. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of
             * the expected arrival. anyOf[1] (Value): string. Expected settlement date of the
             * transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
             * date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "arrival_date"?: ((string) | (null));
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account". anyOf[1] (Value): string.
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account". anyOf[2] (Value): null.
             */
            "balance_source_type"?: (("card" | "bank_account" | (string & {})) | (null));
            /**
             * When the payout was created. anyOf[1] (Value): string. When the payout was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength:
             * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Description sent when the payout was created. Absent when there is none. anyOf[1]
             * (Value): string. Description sent when the payout was created. Absent when there is
             * none. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Direction of the money movement. Outbound payouts deposit funds in your bank;
             * inbound payouts withdraw funds to cover a negative Flint balance. Value enum:
             * "outbound", "inbound". anyOf[1] (Value): string. Direction of the money movement.
             * Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover
             * a negative Flint balance. Value enum: "outbound", "inbound". anyOf[2] (Value): null.
             */
            "direction"?: (("outbound" | "inbound" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed". anyOf[1] (Value): string. Flint-normalized
             * payout failure code. Unknown provider values are returned as payout_failed. Value
             * enum: "account_closed", "account_frozen", "bank_account_restricted",
             * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
             * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
             * "incorrect_account_holder_address", "incorrect_account_holder_tax_id",
             * "invalid_currency", "no_account", "unsupported_card", "payout_failed". anyOf[2]
             * (Value): null.
             */
            "failure_code"?: (("account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {}))
                | (null));
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message. anyOf[1] (Value): string. Flint-authored payout failure message.
             * This is stable explanatory text, not a raw provider message. anyOf[2] (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable". anyOf[1] (Value): string. Whether the payout fee is estimated or
             * final. not_applicable means no applicable fee status is known, including unmapped
             * fee states. Value enum: "estimated", "final", "not_applicable". anyOf[2] (Value):
             * null.
             */
            "fee_amount_status"?: (("estimated" | "final" | "not_applicable" | (string & {})) | (null));
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the
             * request that created this resource. `null` when that request sent no key, Flint
             * created the resource, the reader isn't the caller that created it (another app
             * install, a buyer, or the merchant reading an app's or buyer's record), or the caller
             * that created an older record is unknown. Filter its list with `idempotency_key` to
             * find it. Recorded payloads, including replayed responses and webhook events, can
             * return `null`. To find a key that a replay returns as `null`, read the resource.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * What started the payout. Inbound payouts are always platform initiated. An outbound
             * payout imported from your processor follows the processor: scheduled when it sent
             * the payout automatically, otherwise manual. Only scheduled outbound payouts list
             * their balance transactions through GET /v1/balance-transactions?payout_id=; other
             * payouts return 409 with reason not_itemized. Unmapped sources are returned as other.
             * Value enum: "manual", "scheduled", "platform", "other". anyOf[1] (Value): string.
             * What started the payout. Inbound payouts are always platform initiated. An outbound
             * payout imported from your processor follows the processor: scheduled when it sent
             * the payout automatically, otherwise manual. Only scheduled outbound payouts list
             * their balance transactions through GET /v1/balance-transactions?payout_id=; other
             * payouts return 409 with reason not_itemized. Unmapped sources are returned as other.
             * Value enum: "manual", "scheduled", "platform", "other". anyOf[2] (Value): null.
             */
            "initiated_by"?: (("manual" | "scheduled" | "platform" | "other" | (string & {})) | (null));
            /**
             * Merchant whose balance the payout changes. anyOf[1] (Value): string. Merchant whose
             * balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2]
             * (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other". anyOf[1] (Value): string. Payouts Flint sends, by API, Dashboard or
             * schedule, are always `standard`. `instant` appears only on a payout Flint recorded
             * from the processor that was sent outside Flint. `other` is a method Flint doesn't
             * map. Value enum: "standard", "instant", "other". anyOf[2] (Value): null.
             */
            "method"?: (("standard" | "instant" | "other" | (string & {})) | (null));
            /**
             * Signed effect of this payout on your Flint balance. Negative for outbound payouts
             * and positive for inbound payouts. `null` when your processor hasn't recorded the
             * payout yet. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "net_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. anyOf[1] (Value): string. On a payout
             * that reverses another payout, the payout it reverses. Present only when Flint has
             * the matching original payout. A payout has at most one of original_payout_id and
             * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". anyOf[2] (Value):
             * null.
             */
            "original_payout_id"?: ((string) | (null));
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link
             * ExpandedPayoutDestinationSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummaryPreviousAttributes) | (null));
            /**
             * Bank account or debit card used for the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. anyOf[1] (Value): string. Bank
             * account or debit card used for the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". anyOf[2] (Value): null.
             */
            "payout_destination_id"?: ((string) | (null));
            /**
             * Stable identifier of the payout. anyOf[1] (Value): string. Stable identifier of the
             * payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". anyOf[2] (Value): null.
             */
            "payout_id"?: ((string) | (null));
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed". anyOf[1] (Value):
             * string. Whether Flint has pulled a paid payout back from your bank: none until the
             * reversal completes, then reversed. A payout_reversal balance transaction returns the
             * money, and status stays succeeded. Value enum: "none", "reversed". anyOf[2] (Value):
             * null.
             */
            "reversal_status"?: (("none" | "reversed" | (string & {})) | (null));
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummaryPreviousAttributes) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. anyOf[1] (Value):
             * string. The separate payout reversing this one, when Flint has the matching payout.
             * Its presence does not mean the reversal has completed; read reversal_status. A
             * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV". anyOf[2] (Value): null.
             */
            "reversed_by_payout_id"?: ((string) | (null));
            /**
             * Text shown on your bank statement for the transfer, when one was set. anyOf[1]
             * (Value): string. Text shown on your bank statement for the transfer, when one was
             * set. anyOf[2] (Value): null.
             */
            "statement_descriptor"?: ((string) | (null));
            /**
             * Where the payout is: pending until it is sent, in_transit moving between Flint and
             * your bank, then succeeded or failed. A succeeded payout can still become failed if
             * the bank returns the transfer, and canceled means a manual payout was canceled while
             * pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             * anyOf[1] (Value): string. Where the payout is: pending until it is sent, in_transit
             * moving between Flint and your bank, then succeeded or failed. A succeeded payout can
             * still become failed if the bank returns the transfer, and canceled means a manual
             * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
             * "failed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is
             * pending unless it was scheduled automatically. Inbound payouts offer no actions. []
             * enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts
             * now. cancel is offered while an outbound payout is pending unless it was scheduled
             * automatically. Inbound payouts offer no actions. [] enum: "cancel". anyOf[1][]
             * (Value): string. Value enum: "cancel". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
            /**
             * The bank's trace number for the transfer, which your bank can use to locate it. Its
             * status says whether the number is pending, available, or unsupported, and value
             * holds the number when Flint has it. Absent when Flint has no trace information.
             * anyOf[1] (Value): {@link PayoutTraceIDPreviousAttributes}. anyOf[2] (Value): null.
             */
            "trace_id"?: ((PayoutTraceIDPreviousAttributes) | (null));
            /**
             * When the payout last changed. anyOf[1] (Value): string. When the payout last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.canceled". */
    "event_type"?: "payout.canceled";
});
