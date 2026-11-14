import type { Dispute } from './types-23.js';
import type { MoneyValue, NextAction } from './types-39.js';
import type {
    PartnerWebhookEnvelope,
    PartnerAppPermissionManifestEntry,
    PartnerEnvironmentGrantPaymentSplits,
    PartnerEnvironmentGrant
} from './types-44.js';
import type { SplitReversalReference, SimulateDisputeRequestInput } from './types-60.js';
import type { MerchantWebhookEnvelope } from './types-38.js';
import type { InputValue } from '../runtime.js';
import type { ResponseMeta } from './types-54.js';
import type { LookupEmailPreferencesRequestInput } from './types-35.js';
import type { PartnerAppMerchantReadiness } from './types-43.js';
import type { PlatformFeeCap } from './types-49.js';
import type { CustomDomain } from './types-15.js';
import type { DeliveryRevocation } from './types-21.js';
import type { Fulfillment } from './types-25.js';
import type { GiftCardRestriction } from './types-27.js';
import type { Package } from './types-42.js';
import type { QuotaDetails } from './types-52.js';
import type { ScopeRequirement, SelectableErrorResource, Shipment } from './types-59.js';
import type { CheckoutBuyerContact, CardDetails } from './types-5.js';
import type { DeferredPromotion } from './types-17.js';
import type { OrderSettlementAmounts } from './types-41.js';
import type { PricingAmounts } from './types-50.js';
import type { PaymentSourceSummary } from './types-47.js';
import type { SubscriptionIntervalOption } from './types-62.js';
import type { SubscriptionPlanLineItem } from './types-63.js';
import type { CreateFeedbackReportRequestInput, CreateFileRequestInput } from './types-9.js';
import type { CheckoutSessionsListCustomerVerificationsParams } from './types-6.js';
/**
 * The `dispute.won` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type DisputeWonInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            /**
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "dispute.won". */
    "event_type"?: "dispute.won";
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
 * The `dispute.won` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type DisputeWonMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount in dispute.
     * For a chargeback, this amount left your balance when the case opened; an inquiry moves no
     * money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
     * response window. It stays true after the window closes or a decision is made. Use
     * is_action_required to know whether a response is needed now. object.case_type (Required):
     * string. Kind of case the card network or bank opened. `status` and `is_action_required` say
     * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
     * "resolution", "block", "other", "bank_return". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. The customer on the disputed payment. Absent when the
     * payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.dispute_id (Required):
     * string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * object.evidence_due_at (Required): string or null. Deadline for submitting evidence. Respond
     * before it when is_action_required is true. `null` when the dispute has no response window,
     * such as a bank return or a case your processor gave no deadline for. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.evidence_submission_count (Required): integer. How
     * many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * object.fraud_warning_id (Optional): string. The fraud warning the card network sent for this
     * payment before the dispute. Absent when there was none. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.has_evidence (Required): boolean. Whether evidence
     * is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft
     * Flint saves when the dispute first needs a response, so it doesn't mean someone started a
     * response. evidence_submission_count says whether evidence was submitted.
     * object.is_action_required (Required): boolean. True when status is needs_response or
     * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
     * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded
     * the change. It turns false once evidence_due_at has passed, with no event.
     * object.is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed
     * on a dispute with a response window. Always false when can_respond_with_evidence is false.
     * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
     * change. It turns true once evidence_due_at has passed, with no event. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.network_reason_code (Required): string or null.
     * Opaque reason code assigned by the card network. Read it with the disputed payment's card
     * brand; codes differ by network. `null` when the network supplied no code or the supplied
     * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. object.order (Optional): {@link
     * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * disputed payment was for. Absent when Flint can't link the dispute to an order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment intent that took the disputed payment. Absent when Flint can't link the
     * dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_option
     * (Required): string or null. How the buyer paid for the disputed payment. `null` when Flint
     * hasn't linked the dispute to a payment intent that records a payment option. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. object.reason (Required):
     * string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
     * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * object.recommended_evidence_types (Required): Array of string. Evidence types that usually
     * answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold.
     * Empty when Flint has no recommendation, including bank returns. Chosen from the stored
     * reason and case_type; in a webhook, frozen when Flint records the change. [] enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.recommended_evidence_types[] (Value): string. Value enum:
     * "customer_details", "customer_communication", "customer_signature", "receipt",
     * "shipping_documentation", "service_documentation", "access_activity_log",
     * "product_description", "refund_policy", "duplicate_charge_documentation",
     * "cancellation_policy". object.response_unavailable_reason (Optional): string. Why a response
     * is unavailable when can_respond_with_evidence is false. Absent when no reason is reported.
     * Current values are bank_return_not_contestable and response_window_unavailable.
     * response_window_unavailable means no evidence deadline was supplied. Value enum:
     * "bank_return_not_contestable", "response_window_unavailable". object.split_reversals
     * (Optional): Array of {@link SplitReversalReference}. Fixed seller allocations on the
     * payment, each naming its payment split and reversal. Present only when the payment has
     * splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for
     * status, shortfall, and reinstated amounts. object.split_reversals[] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes. object.status
     * (Required): string. Where the dispute stands. `needs_response` and `inquiry_needs_response`
     * ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". object.status_changed_at (Optional):
     * string. Recorded time of the current status. On first observation this is the dispute
     * creation time. Later status changes use the provider event time when available, or the time
     * Flint observed the change. This may not be the exact decision or submission time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.supported_actions (Required): Array of
     * string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
     * webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at
     * has passed, with no event. [] enum: "accept". object.supported_actions[] (Value): string.
     * Value enum: "accept". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount in dispute. For a chargeback, this
         * amount left your balance when the case opened; an inquiry moves no money. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * can_respond_with_evidence (Required): boolean. Whether this dispute has an evidence
         * response window. It stays true after the window closes or a decision is made. Use
         * is_action_required to know whether a response is needed now. case_type (Required):
         * string. Kind of case the card network or bank opened. `status` and `is_action_required`
         * say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
         * "resolution", "block", "other", "bank_return". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional):
         * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. The customer on the disputed payment. Absent when the payment has
         * none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". dispute_id (Required): string. Stable
         * identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". evidence_due_at
         * (Required): string or null. Deadline for submitting evidence. Respond before it when
         * is_action_required is true. `null` when the dispute has no response window, such as a
         * bank return or a case your processor gave no deadline for. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". evidence_submission_count (Required): integer. How many times
         * evidence was submitted for this dispute. 0 until you submit. Format: int32.
         * fraud_warning_id (Optional): string. The fraud warning the card network sent for this
         * payment before the dispute. Absent when there was none. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". has_evidence (Required): boolean. Whether evidence is
         * saved for this dispute, submitted or not. In test mode this includes an unsubmitted
         * draft Flint saves when the dispute first needs a response, so it doesn't mean someone
         * started a response. evidence_submission_count says whether evidence was submitted.
         * is_action_required (Required): boolean. True when status is needs_response or
         * inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't
         * passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint
         * recorded the change. It turns false once evidence_due_at has passed, with no event.
         * is_evidence_deadline_passed (Required): boolean. Whether evidence_due_at has passed on a
         * dispute with a response window. Always false when can_respond_with_evidence is false.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns true once evidence_due_at has passed, with no event. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". network_reason_code (Required): string or null. Opaque
         * reason code assigned by the card network. Read it with the disputed payment's card
         * brand; codes differ by network. `null` when the network supplied no code or the supplied
         * code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order the disputed
         * payment was for. Absent when Flint can't link the dispute to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment intent that took the disputed payment. Absent when
         * Flint can't link the dispute to a payment intent. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_option (Required): string or null. How the
         * buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a
         * payment intent that records a payment option. Value enum: "card", "apple_pay",
         * "google_pay", "affirm", "ach_debit", null. reason (Required): string. Why the payment
         * was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent",
         * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
         * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
         * "debit_not_authorized", "bank_account_not_found", "other". recommended_evidence_types
         * (Required): Array of string. Evidence types that usually answer this reason, chosen by
         * Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no
         * recommendation, including bank returns. Chosen from the stored reason and case_type; in
         * a webhook, frozen when Flint records the change. [] enum: "customer_details",
         * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
         * "service_documentation", "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". recommended_evidence_types[]
         * (Value): string. Value enum: "customer_details", "customer_communication",
         * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
         * "access_activity_log", "product_description", "refund_policy",
         * "duplicate_charge_documentation", "cancellation_policy". response_unavailable_reason
         * (Optional): string. Why a response is unavailable when can_respond_with_evidence is
         * false. Absent when no reason is reported. Current values are bank_return_not_contestable
         * and response_window_unavailable. response_window_unavailable means no evidence deadline
         * was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
         * split_reversals (Optional): Array of {@link SplitReversalReference}. Fixed seller
         * allocations on the payment, each naming its payment split and reversal. Present only
         * when the payment has splits; an empty array means no seller share was allocated. Read
         * PaymentSplit.reversals for status, shortfall, and reinstated amounts. split_reversals[]
         * (Value): {@link SplitReversalReference}. A fixed allocation referencing a read-only
         * reversal nested in a payment split. This reference has no independent lifecycle or write
         * routes. status (Required): string. Where the dispute stands. `needs_response` and
         * `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and
         * `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review",
         * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
         * status_changed_at (Optional): string. Recorded time of the current status. On first
         * observation this is the dispute creation time. Later status changes use the provider
         * event time when available, or the time Flint observed the change. This may not be the
         * exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * supported_actions (Required): Array of string. Lifecycle actions Flint accepts now.
         * Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the
         * change. It turns empty once evidence_due_at has passed, with no event. [] enum:
         * "accept". supported_actions[] (Value): string. Value enum: "accept". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount in dispute. For a chargeback, this amount left your balance when the case
             * opened; an inquiry moves no money. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Whether this dispute has an evidence response window. It stays true after the window
             * closes or a decision is made. Use is_action_required to know whether a response is
             * needed now.
             */
            "can_respond_with_evidence": boolean;
            /**
             * Kind of case the card network or bank opened. `status` and `is_action_required` say
             * whether a response is needed. Value enum: "inquiry", "chargeback", "compliance",
             * "resolution", "block", "other", "bank_return".
             */
            "case_type": "inquiry"
                | "chargeback"
                | "compliance"
                | "resolution"
                | "block"
                | "other"
                | "bank_return"
                | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer on the disputed payment. Absent when the payment has none. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
            "dispute_id": string;
            /**
             * Deadline for submitting evidence. Respond before it when is_action_required is true.
             * `null` when the dispute has no response window, such as a bank return or a case your
             * processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "evidence_due_at": string | null;
            /**
             * How many times evidence was submitted for this dispute. 0 until you submit. Format:
             * int32.
             */
            "evidence_submission_count": number;
            /**
             * The fraud warning the card network sent for this payment before the dispute. Absent
             * when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id"?: string;
            /**
             * Whether evidence is saved for this dispute, submitted or not. In test mode this
             * includes an unsubmitted draft Flint saves when the dispute first needs a response,
             * so it doesn't mean someone started a response. evidence_submission_count says
             * whether evidence was submitted.
             */
            "has_evidence": boolean;
            /**
             * True when status is needs_response or inquiry_needs_response,
             * can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when
             * the dispute is read; in a webhook payload, as of when Flint recorded the change. It
             * turns false once evidence_due_at has passed, with no event.
             */
            "is_action_required": boolean;
            /**
             * Whether evidence_due_at has passed on a dispute with a response window. Always false
             * when can_respond_with_evidence is false. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns true once
             * evidence_due_at has passed, with no event.
             */
            "is_evidence_deadline_passed": boolean;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Opaque reason code assigned by the card network. Read it with the disputed payment's
             * card brand; codes differ by network. `null` when the network supplied no code or the
             * supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
             */
            "network_reason_code": string | null;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the disputed payment was for. Absent when Flint can't link the
             * dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /**
             * ID of the payment intent that took the disputed payment. Absent when Flint can't
             * link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * How the buyer paid for the disputed payment. `null` when Flint hasn't linked the
             * dispute to a payment intent that records a payment option. Value enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", null.
             */
            "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
            /**
             * Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value
             * enum: "fraudulent", "unrecognized", "duplicate", "product_not_received",
             * "product_not_as_described", "refund_not_processed", "subscription_canceled",
             * "noncompliant", "insufficient_funds", "debit_not_authorized",
             * "bank_account_not_found", "other".
             */
            "reason": "fraudulent"
                | "unrecognized"
                | "duplicate"
                | "product_not_received"
                | "product_not_as_described"
                | "refund_not_processed"
                | "subscription_canceled"
                | "noncompliant"
                | "insufficient_funds"
                | "debit_not_authorized"
                | "bank_account_not_found"
                | "other"
                | (string & {});
            /**
             * Evidence types that usually answer this reason, chosen by Flint, most useful first.
             * Use the ones that fit what you sold. Empty when Flint has no recommendation,
             * including bank returns. Chosen from the stored reason and case_type; in a webhook,
             * frozen when Flint records the change. [] enum: "customer_details",
             * "customer_communication", "customer_signature", "receipt", "shipping_documentation",
             * "service_documentation", "access_activity_log", "product_description",
             * "refund_policy", "duplicate_charge_documentation", "cancellation_policy". []
             * (Value): string. Value enum: "customer_details", "customer_communication",
             * "customer_signature", "receipt", "shipping_documentation", "service_documentation",
             * "access_activity_log", "product_description", "refund_policy",
             * "duplicate_charge_documentation", "cancellation_policy".
             */
            "recommended_evidence_types": Array<"customer_details"
                | "customer_communication"
                | "customer_signature"
                | "receipt"
                | "shipping_documentation"
                | "service_documentation"
                | "access_activity_log"
                | "product_description"
                | "refund_policy"
                | "duplicate_charge_documentation"
                | "cancellation_policy"
                | (string & {})>;
            /**
             * Why a response is unavailable when can_respond_with_evidence is false. Absent when
             * no reason is reported. Current values are bank_return_not_contestable and
             * response_window_unavailable. response_window_unavailable means no evidence deadline
             * was supplied. Value enum: "bank_return_not_contestable",
             * "response_window_unavailable".
             */
            "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
            /**
             * Fixed seller allocations on the payment, each naming its payment split and reversal.
             * Present only when the payment has splits; an empty array means no seller share was
             * allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated
             * amounts. [] (Value): {@link SplitReversalReference}. A fixed allocation referencing
             * a read-only reversal nested in a payment split. This reference has no independent
             * lifecycle or write routes.
             */
            "split_reversals"?: Array<SplitReversalReference>;
            /**
             * Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to
             * respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum:
             * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "status": "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {});
            /**
             * Recorded time of the current status. On first observation this is the dispute
             * creation time. Later status changes use the provider event time when available, or
             * the time Flint observed the change. This may not be the exact decision or submission
             * time. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "status_changed_at"?: string;
            /**
             * Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a
             * webhook payload, as of when Flint recorded the change. It turns empty once
             * evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.
             * Value enum: "accept".
             */
            "supported_actions": Array<"accept" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Dispute>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "dispute.won". */
    "event_type"?: "dispute.won";
});
export type DisputesAcceptParams = {
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
export type DisputesCreateResponseSessionParams = DisputesAcceptParams;
export type DisputesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent. Expansion requires payments.disputes.read plus the read scope for each
     * expanded resource. Limits: at most 10 unique expand paths per request. [] enum: "customer",
     * "order", "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "order", "payment_intent". anyOf[1][]
     * (Value): string. Value enum: "customer", "order", "payment_intent". anyOf[2] (Value):
     * string. Value enum: "customer", "order", "payment_intent".
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
export type DisputesListParams = {
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Optional Flint payment intent ID filter. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Optional Flint order ID filter. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Optional Flint customer ID filter. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Optional dispute status filter. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other". Value enum:
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1][] (Value):
     * string. Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value):
     * string. Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "status"?: InputValue<("inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")
        | readonly ("inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")[]>;
    /**
     * Optional normalized dispute reason filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "fraudulent", "unrecognized", "duplicate",
     * "product_not_received", "product_not_as_described", "refund_not_processed",
     * "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized",
     * "bank_account_not_found", "other". Value enum: "fraudulent", "unrecognized", "duplicate",
     * "product_not_received", "product_not_as_described", "refund_not_processed",
     * "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized",
     * "bank_account_not_found", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "fraudulent", "unrecognized", "duplicate", "product_not_received",
     * "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant",
     * "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[1][]
     * (Value): string. Value enum: "fraudulent", "unrecognized", "duplicate",
     * "product_not_received", "product_not_as_described", "refund_not_processed",
     * "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized",
     * "bank_account_not_found", "other". anyOf[2] (Value): string. Value enum: "fraudulent",
     * "unrecognized", "duplicate", "product_not_received", "product_not_as_described",
     * "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds",
     * "debit_not_authorized", "bank_account_not_found", "other".
     */
    "reason"?: InputValue<("fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other")
        | readonly ("fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other")[]>;
    /**
     * Optional dispute case type filter. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other",
     * "bank_return". Value enum: "inquiry", "chargeback", "compliance", "resolution", "block",
     * "other", "bank_return". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "inquiry",
     * "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[1][]
     * (Value): string. Value enum: "inquiry", "chargeback", "compliance", "resolution", "block",
     * "other", "bank_return". anyOf[2] (Value): string. Value enum: "inquiry", "chargeback",
     * "compliance", "resolution", "block", "other", "bank_return".
     */
    "case_type"?: InputValue<("inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return")
        | readonly ("inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return")[]>;
    /**
     * Filter by whether a merchant response is needed now. True includes needs_response and
     * inquiry_needs_response disputes that allow evidence and whose evidence deadline has not
     * passed; false includes the remaining disputes.
     */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by dispute_id. Default:
     * "created_at". Value enum: "created_at", "evidence_due_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on evidence_due_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "evidence_due_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on evidence_due_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "evidence_due_before"?: InputValue<string | globalThis.Date>;
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
export type DisputesSimulateParams = (InputValue<SimulateDisputeRequestInput>)
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
/**
 * A tax identifier printed on documents, with its country, optional region, identifier type, and
 * value. Flint does not verify the value.
 */
export type DocumentTaxID = {
    /**
     * Two-letter ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * Example: "US".
     */
    "country": string;
    /**
     * Server-generated identity of an existing entry. Omit when adding an entry. minLength: 1.
     * pattern: ^dti_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dti_01KEZF7C00NS1FDK30F1BE6HPH".
     */
    "document_tax_id"?: string;
    /**
     * Provider-independent identifier type, for example vat, gst, or ein. This is an open
     * vocabulary. minLength: 1. maxLength: 64. pattern: ^[a-z][a-z0-9_]*$.
     */
    "identifier_type": string;
    /**
     * State or province of the country, when the ID applies to one region only. Omitted for IDs
     * that apply to the whole country. minLength: 1. maxLength: 64.
     */
    "region"?: string;
    /**
     * Full identifier printed on documents. Not verified by Flint. minLength: 1. maxLength: 255.
     */
    "value": string;
};
/**
 * A tax identifier printed on documents, with its country, optional region, identifier type, and
 * value. Flint does not verify the value.
 */
export type DocumentTaxIDRequestInput = DocumentTaxID;
/**
 * Nested child of Customer. A request to change this customer's sign-in email. Only one request
 * can be pending per customer.
 */
export type EmailChangeRequest = {
    /**
     * When a person canceled this request or a newer request replaced it. Null when it has not
     * been canceled or replaced. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "canceled_at": string | null;
    /**
     * When the customer email changed. Null when the request has not been confirmed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "confirmed_at": string | null;
    /** When Flint recorded the request. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Whether the customer must also confirm a code sent to their current address. False for
     * requests started by store staff or integrations.
     */
    "current_email_confirmation_required": boolean;
    /**
     * Flint ID of the customer whose email would change. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Flint ID of this customer's email change request. Example:
     * "cecr_01KEZF7C00B8VJX4M828K0430H".
     */
    "email_change_request_id": string;
    /**
     * When the request expires if it has not been confirmed or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Returned only by confirm, to customer sessions that can access cards saved with Flint after
     * a live email-code sign-in at a Flint-hosted account. Omitted when the previous email had no
     * saved cards. Never returned to merchant credentials. Value enum: "moved", "kept",
     * "new_email_has_wallet".
     */
    "flint_wallet_outcome"?: "moved" | "kept" | "new_email_has_wallet" | (string & {});
    /**
     * The proposed email address. Null when the request is confirmed, canceled, or expired.
     * Format: email. Example: "buyer@example.com".
     */
    "new_email": string | null;
    /** Who started this email change request. Value enum: "buyer", "merchant", "integration". */
    "requested_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * The request's current confirmation state. Value enum: "pending", "confirmed", "canceled",
     * "expired".
     */
    "status": "pending" | "confirmed" | "canceled" | "expired" | (string & {});
    /**
     * Actions available for this request in its current state. Empty when the request is final. []
     * enum: "cancel". [] (Value): string. Value enum: "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
};
/** A page of `EmailChangeRequest` objects. */
export type EmailChangeRequestListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * EmailChangeRequest}. Nested child of Customer. A request to change this customer's sign-in
     * email. Only one request can be pending per customer.
     */
    "data": Array<EmailChangeRequest>;
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
/** A response containing `EmailChangeRequest` data. */
export type EmailChangeRequestResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Nested child of
     * Customer. A request to change this customer's sign-in email. Only one request can be pending
     * per customer.
     */
    "data": EmailChangeRequest;
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
 * An email preference for one address, such as shipping updates or checkout reminders, with
 * whether it is enabled and the matching customer if any.
 */
export type EmailPreferenceLink = {
    /**
     * Flint customer ID when the email belongs to an active customer in this merchant environment.
     * `null` when the email belongs to a guest. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /** The email address the preference applies to. */
    "email": string;
    /**
     * The kind of email the preference controls. Value enum: "shipping_updates",
     * "checkout_reminders".
     */
    "email_preference": "shipping_updates" | "checkout_reminders" | (string & {});
    /** Whether Flint sends this kind of email to the address. */
    "enabled": boolean;
};
/** The request body for: Look up an email preference link; Unsubscribe an email preference link. */
export type EmailPreferenceLinkRequest = {
    /** minLength: 1. */
    "token": string;
};
/** The request body for: Look up an email preference link; Unsubscribe an email preference link. */
export type EmailPreferenceLinkRequestInput = EmailPreferenceLinkRequest;
/** A response containing `EmailPreferenceLink` data. */
export type EmailPreferenceLinkResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An email preference for
     * one address, such as shipping updates or checkout reminders, with whether it is enabled and
     * the matching customer if any.
     */
    "data": EmailPreferenceLink;
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
export type EmailPreferenceLinksLookupParams = (InputValue<EmailPreferenceLinkRequestInput>);
export type EmailPreferenceLinksUnsubscribeParams = EmailPreferenceLinksLookupParams;
export type EmailPreferencesLookupParams = (InputValue<LookupEmailPreferencesRequestInput>)
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
export type EnvironmentGrantCreatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "created_at": string;
            "environment_grant_id": string;
            "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
            "granted_scopes": Array<string>;
            "merchant_readiness"?: PartnerAppMerchantReadiness;
            "mode": "test" | "live" | (string & {});
            "partner_app_install_id": string;
            "payment_splits"?: PartnerEnvironmentGrantPaymentSplits;
            "platform_fee_cap"?: PlatformFeeCap;
            "revoked_at"?: string;
            "revoked_by_user_id"?: string;
            "sandbox_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        });
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "environment_grant.created";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "environment_grant.created";
});
export type EnvironmentGrantRevokedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "created_at": string;
            "environment_grant_id": string;
            "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
            "granted_scopes": Array<string>;
            "merchant_readiness"?: PartnerAppMerchantReadiness;
            "mode": "test" | "live" | (string & {});
            "partner_app_install_id": string;
            "payment_splits"?: PartnerEnvironmentGrantPaymentSplits;
            "platform_fee_cap"?: PlatformFeeCap;
            "revoked_at"?: string;
            "revoked_by_user_id"?: string;
            "sandbox_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        });
        "previous_attributes"?: Partial<PartnerEnvironmentGrant>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "environment_grant.revoked";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "environment_grant.revoked";
});
export type EnvironmentGrantUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ({
            "created_at": string;
            "environment_grant_id": string;
            "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
            "granted_scopes": Array<string>;
            "merchant_readiness"?: PartnerAppMerchantReadiness;
            "mode": "test" | "live" | (string & {});
            "partner_app_install_id": string;
            "payment_splits"?: PartnerEnvironmentGrantPaymentSplits;
            "platform_fee_cap"?: PlatformFeeCap;
            "revoked_at"?: string;
            "revoked_by_user_id"?: string;
            "sandbox_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        });
        "previous_attributes"?: Partial<PartnerEnvironmentGrant>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "environment_grant.updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "environment_grant.updated";
});
/**
 * One specific failure within an error, with a `code` and `message` plus fields that depend on the
 * code, such as the `param`, resource, quantity, or amount involved.
 */
export type ErrorDetail = {
    /**
     * Credential types this endpoint accepts, on INVALID_CREDENTIAL with reason
     * wrong_credential_type. The list excludes first-party dashboard sessions and secrets that
     * cannot authenticate requests. [] enum: "api_key", "cli_login", "workload_identity",
     * "partner_app", "onboarding_session", "checkout_session", "checkout_launch",
     * "customer_session", "invoice_access", "cli_refresh", "customer_refresh", "cli_device_code",
     * "checkout_stored_secret", "payment_link_resolution". [] (Value): string. Value enum:
     * "api_key", "cli_login", "workload_identity", "partner_app", "onboarding_session",
     * "checkout_session", "checkout_launch", "customer_session", "invoice_access", "cli_refresh",
     * "customer_refresh", "cli_device_code", "checkout_stored_secret", "payment_link_resolution".
     */
    "accepted_auth_types"?: Array<"api_key"
        | "cli_login"
        | "workload_identity"
        | "partner_app"
        | "onboarding_session"
        | "checkout_session"
        | "checkout_launch"
        | "customer_session"
        | "invoice_access"
        | "cli_refresh"
        | "customer_refresh"
        | "cli_device_code"
        | "checkout_stored_secret"
        | "payment_link_resolution"
        | (string & {})>;
    /**
     * API key modes in which this scope may be granted. [] enum: "live", "test". [] (Value):
     * string. Value enum: "live", "test".
     */
    "allowed_key_modes"?: Array<"live" | "test" | (string & {})>;
    /**
     * Recognized credential type on INVALID_CREDENTIAL with reason unknown, expired, revoked, or
     * wrong_credential_type. Omitted for malformed headers and first-party dashboard sessions.
     * Value enum: "api_key", "cli_login", "workload_identity", "partner_app",
     * "onboarding_session", "checkout_session", "checkout_launch", "customer_session",
     * "invoice_access", "cli_refresh", "customer_refresh", "cli_device_code",
     * "checkout_stored_secret", "payment_link_resolution".
     */
    "auth_type"?: "api_key"
        | "cli_login"
        | "workload_identity"
        | "partner_app"
        | "onboarding_session"
        | "checkout_session"
        | "checkout_launch"
        | "customer_session"
        | "invoice_access"
        | "cli_refresh"
        | "customer_refresh"
        | "cli_device_code"
        | "checkout_stored_secret"
        | "payment_link_resolution"
        | (string & {});
    /**
     * Signed available amounts grouped by balance source type on LIMIT_EXCEEDED when the requested
     * amount exceeds the available balance. Keys are an open set; US accounts use card and
     * bank_account. An empty object means no per-source amounts are reported. * (Value): {@link
     * MoneyValue}. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "available_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Whole-number quantity currently available for the requested operation; fractional quantities
     * are not supported. Format: int64.
     */
    "available_quantity"?: number;
    /**
     * Total number of blocking resources when a dependency refusal publishes a count.
     * blocking_resources lists up to 25 of them. Invoice ownership conflicts use current_resource
     * instead. Format: int64.
     */
    "blocking_resource_count"?: number;
    /**
     * Resources that must transition or be corrected before the operation can succeed. Dependency
     * conflicts list up to 25 resources, with blocking_resource_count as the total when present.
     * OPERATION_IN_PROGRESS identifies work Flint is finishing, and PAYMENT_ATTEMPT_ACTIVE
     * identifies the active attempt. Buyer credentials do not receive merchant-only blocking
     * resources. On ACTION_NOT_ALLOWED with reason in_progress, a subscription payment retry is
     * included when the buyer can read it. Manual payment conflicts identify their owning
     * invoices. [] (Value): {@link ErrorResourceReference}. A reference to a public resource named
     * in an error, with its type, ID, and current status when available.
     */
    "blocking_resources"?: Array<ErrorResourceReference>;
    /**
     * Bundle component whose inventory demand cannot be satisfied. Present on
     * INVENTORY_INSUFFICIENT when the demand belongs to a bundle component. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /**
     * Flint capability associated with this error, when applicable. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings", "merchant_onboarding",
     * "create_merchants".
     */
    "capability"?: "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | "merchant_onboarding"
        | "create_merchants"
        | (string & {});
    /**
     * Physical basis submitted with the observation, or saved on the count line when apply refuses
     * it. Read the current level and physically recount this item before replacing the basis.
     * Format: int64. minimum: 0.
     */
    "captured_physical_version"?: number;
    /**
     * How the inventory reservation ended on ACTION_NOT_ALLOWED with reason terminal_status. Value
     * enum: "consumed", "released", "expired", "reallocated", "mixed", "adopted".
     */
    "closed_reason"?: "consumed" | "released" | "expired" | "reallocated" | "mixed" | "adopted" | (string & {});
    /**
     * On INVALID_REQUEST, one of the detail codes; on every other error, repeats the top-level
     * code. Value enum: "REQUIRED", "INVALID_VALUE", "UNKNOWN_FIELD", "NOT_ALLOWED",
     * "ACTION_NOT_ALLOWED", "ALREADY_EXISTS", "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED",
     * "CONCURRENT_MODIFICATION", "CUSTOMER_EMAIL_REQUIRED", "DELIVERY_REQUOTE_REQUIRED",
     * "EXTERNAL_SERVICE_ERROR", "FORBIDDEN", "GIFT_CARD_CHALLENGE_REQUIRED",
     * "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED", "IDEMPOTENCY_RECOVERY_REQUIRED",
     * "IDENTITY_VERIFICATION_REQUIRED", "INSUFFICIENT_SCOPE", "INTERNAL_ERROR",
     * "INVALID_CREDENTIAL", "INVALID_REQUEST", "INVENTORY_INSUFFICIENT", "LIMIT_EXCEEDED",
     * "LIMIT_REACHED", "MERCHANT_NOT_READY", "METHOD_NOT_ALLOWED", "OPERATION_IN_PROGRESS",
     * "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_OPTION_UNAVAILABLE", "PAYMENT_PROCESSING_UNAVAILABLE",
     * "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_REVIEW_OPEN", "PROMOTION_DECLINED",
     * "RATE_LIMIT_EXCEEDED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT",
     * "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "ROUTE_NOT_FOUND", "SERVICE_UNAVAILABLE",
     * "UNSUPPORTED_CONTENT_TYPE", "VERSION_CONFLICT". anyOf[1] (Value): {@link ErrorDetailCode}.
     * Validation detail code on INVALID_REQUEST; param identifies the input to correct. Value
     * enum: "REQUIRED", "INVALID_VALUE", "UNKNOWN_FIELD", "NOT_ALLOWED". anyOf[2] (Value): string.
     * Value enum: "ACTION_NOT_ALLOWED", "ALREADY_EXISTS", "API_VERSION_RETIRED",
     * "AUTHENTICATION_REQUIRED", "CONCURRENT_MODIFICATION", "CUSTOMER_EMAIL_REQUIRED",
     * "DELIVERY_REQUOTE_REQUIRED", "EXTERNAL_SERVICE_ERROR", "FORBIDDEN",
     * "GIFT_CARD_CHALLENGE_REQUIRED", "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED",
     * "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED", "INSUFFICIENT_SCOPE",
     * "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_REQUEST", "INVENTORY_INSUFFICIENT",
     * "LIMIT_EXCEEDED", "LIMIT_REACHED", "MERCHANT_NOT_READY", "METHOD_NOT_ALLOWED",
     * "OPERATION_IN_PROGRESS", "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_OPTION_UNAVAILABLE",
     * "PAYMENT_PROCESSING_UNAVAILABLE", "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_REVIEW_OPEN",
     * "PROMOTION_DECLINED", "RATE_LIMIT_EXCEEDED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED",
     * "REQUEST_TIMEOUT", "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "ROUTE_NOT_FOUND",
     * "SERVICE_UNAVAILABLE", "UNSUPPORTED_CONTENT_TYPE", "VERSION_CONFLICT".
     */
    "code": (string)
        & ((ErrorDetailCode)
        | ("ACTION_NOT_ALLOWED"
        | "ALREADY_EXISTS"
        | "API_VERSION_RETIRED"
        | "AUTHENTICATION_REQUIRED"
        | "CONCURRENT_MODIFICATION"
        | "CUSTOMER_EMAIL_REQUIRED"
        | "DELIVERY_REQUOTE_REQUIRED"
        | "EXTERNAL_SERVICE_ERROR"
        | "FORBIDDEN"
        | "GIFT_CARD_CHALLENGE_REQUIRED"
        | "IDEMPOTENCY_KEY_IN_PROGRESS"
        | "IDEMPOTENCY_KEY_REUSED"
        | "IDEMPOTENCY_RECOVERY_REQUIRED"
        | "IDENTITY_VERIFICATION_REQUIRED"
        | "INSUFFICIENT_SCOPE"
        | "INTERNAL_ERROR"
        | "INVALID_CREDENTIAL"
        | "INVALID_REQUEST"
        | "INVENTORY_INSUFFICIENT"
        | "LIMIT_EXCEEDED"
        | "LIMIT_REACHED"
        | "MERCHANT_NOT_READY"
        | "METHOD_NOT_ALLOWED"
        | "OPERATION_IN_PROGRESS"
        | "PAYMENT_ATTEMPT_ACTIVE"
        | "PAYMENT_OPTION_UNAVAILABLE"
        | "PAYMENT_PROCESSING_UNAVAILABLE"
        | "PAYMENT_PROCESSOR_REJECTED"
        | "PAYMENT_REVIEW_OPEN"
        | "PROMOTION_DECLINED"
        | "RATE_LIMIT_EXCEEDED"
        | "REQUEST_BODY_TOO_LARGE"
        | "REQUEST_CANCELED"
        | "REQUEST_TIMEOUT"
        | "RESOURCE_IN_USE"
        | "RESOURCE_NOT_FOUND"
        | "ROUTE_NOT_FOUND"
        | "SERVICE_UNAVAILABLE"
        | "UNSUPPORTED_CONTENT_TYPE"
        | "VERSION_CONFLICT"
        | (string & {}))
        | (unknown));
    /**
     * Which inventory count check failed for this line. Sent on VERSION_CONFLICT for physical
     * observations or stale source observation sequences. Value enum: "physical_version",
     * "source_observation_sequence".
     */
    "conflict_type"?: "physical_version" | "source_observation_sequence" | (string & {});
    /**
     * The other request inputs in a conflict, as param-form paths; never the detail's own param.
     * Sent on INVALID_REQUEST with detail NOT_ALLOWED when inputs can't be sent together: param is
     * the input to remove, and conflicting_fields lists the inputs it conflicts with, such as the
     * type or mode field whose value excludes it. Also sent with detail INVALID_VALUE when entries
     * in one product create repeat an option name, identifier, or selected option combination. []
     * (Value): string.
     */
    "conflicting_fields"?: Array<string>;
    /** Current API version pin on VERSION_CONFLICT when expected_api_version is stale. */
    "current_api_version"?: string;
    /**
     * The current resource count. On LIMIT_REACHED with reason product_variants, the product's
     * non-archived variant count. Format: int64.
     */
    "current_count"?: number;
    /**
     * Current effective delivery selection ID on VERSION_CONFLICT when
     * expected_delivery_selection_id is stale. `null` when no delivery selection is current.
     * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "current_delivery_selection_id"?: string | null;
    /**
     * Current disclosure version. Show the seller the current disclosure from GET
     * /v1/tax-connection and get their agreement before sending its version.
     */
    "current_disclosure_version"?: string;
    /**
     * Current payout schedule interval on ACTION_NOT_ALLOWED with reason configuration_required.
     * Change the payout schedule to manual before creating a standard payout. Value enum: "daily",
     * "weekly", "monthly".
     */
    "current_interval"?: "daily" | "weekly" | "monthly" | (string & {});
    /**
     * Current money amount counted toward the threshold, when the error is threshold-based. On
     * VERSION_CONFLICT, the order's current outstanding balance. On ACTION_NOT_ALLOWED with reason
     * already_applied after a capture amount mismatch, the amount already captured. On an order
     * total floor refusal, the resulting order total. Retained errors keep their captured values.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "current_money"?: MoneyValue;
    /**
     * Current physical version of the inventory level. This is a physical-value assertion, not the
     * resource version in current_version. Format: int64. minimum: 0.
     */
    "current_physical_version"?: number;
    /**
     * The existing resource reference, custom domain, or delivery revocation on ALREADY_EXISTS. On
     * VERSION_CONFLICT when replace_checkout_session_id is stale, the current checkout session
     * reference. On ACTION_NOT_ALLOWED with reason in_progress when a checkout surface cannot
     * change, the existing checkout session reference. Also the current fulfillment, shipment, or
     * package when a conditional write conflicts with resource state. oneOf[1] (Value): object and
     * {@link ErrorResourceReference}. A reference to a public resource named in an error, with its
     * type, ID, and current status when available. oneOf[1].resource_id (Required): string. Public
     * Flint ID of the referenced resource. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * oneOf[1].resource_type (Required): string. Stable public resource name for the referenced
     * resource: a ResourceType value, or resource when the resource has no public type. Example:
     * "order". oneOf[1].status (Optional): string. Current public status of the referenced
     * resource when available. oneOf[2] (Value): object and {@link Fulfillment}. Work required to
     * deliver an order's items. oneOf[2].active_hold (Optional): {@link FulfillmentHold}. Current
     * hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its
     * reason, who placed it, and when it became active. oneOf[2].charges (Optional): Array of
     * {@link FulfillmentChargeLink}. Order charges associated with this fulfillment.
     * oneOf[2].charges[] (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order
     * charge by `order_charge_id`. oneOf[2].completed_at (Optional): string. When the fulfillment
     * was completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". oneOf[2].created_at
     * (Required): string. When the fulfillment was created, in RFC3339 format. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". oneOf[2].customer_id (Optional): string. Customer receiving
     * this fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * oneOf[2].delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * oneOf[2].delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". oneOf[2].delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * oneOf[2].delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". oneOf[2].device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". oneOf[2].digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. oneOf[2].dispatched_at (Optional): string. First time this fulfillment
     * reached dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * oneOf[2].external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". oneOf[2].fulfillment_id
     * (Required): string. Stable identifier of the fulfillment. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T". oneOf[2].line_items (Required): Array of {@link
     * FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * oneOf[2].line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. oneOf[2].local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. oneOf[2].location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * oneOf[2].metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata
     * associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them. oneOf[2].order (Optional): {@link ExpandedOrderSummary} or null. Order summary
     * returned when the order relationship is expanded. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. oneOf[2].order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * oneOf[2].order.anyOf[2] (Value): null. oneOf[2].order_id (Required): string. Order whose
     * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * oneOf[2].order_number (Optional): string. Human-readable number of the order this
     * fulfillment belongs to. Omitted when the order has no number. oneOf[2].outcome (Optional):
     * {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when status is
     * no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its
     * reason, notes, and when it occurred. oneOf[2].packages (Optional): Array of {@link
     * ExpandedPackageSummary}. Packages associated with this fulfillment. oneOf[2].packages[]
     * (Value): {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
     * tracking, status, and supported actions, returned when the package is expanded.
     * oneOf[2].packed_at (Optional): string. First time this fulfillment reached packed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". oneOf[2].picked_at (Optional): string. First
     * time this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * oneOf[2].pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup
     * mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
     * creates, location_name, address, and instructions name the store the buyer chose and the
     * delivery method's pickup instructions. The note the buyer left for the store is in
     * recipient.instructions. oneOf[2].recipient (Optional): {@link FulfillmentRecipient}. Omitted
     * for a checkout session credential that doesn't act for the customer the buyer verified. The
     * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
     * oneOf[2].scheduled_start_at (Required): string or null. Derived start of the service
     * schedule or pickup, local delivery, or shipment window. Null when no schedule is booked,
     * including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort
     * first ascending and last descending, then by fulfillment_id in the same direction. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". oneOf[2].service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. oneOf[2].shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
     * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
     * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
     * window, timezone, and when the shipment was handed to the carrier. oneOf[2].shipments
     * (Optional): Array of {@link ExpandedShipmentSummary}. Shipments associated with this
     * fulfillment. oneOf[2].shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's
     * summary fields, including direction, status, and package count, returned when the shipment
     * is expanded. oneOf[2].status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * oneOf[2].supported_actions (Required): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores. []
     * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
     * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule",
     * "start". oneOf[2].supported_actions[] (Value): string. Value enum: "accept", "cancel",
     * "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
     * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". oneOf[2].terminal_at
     * (Optional): string. When the fulfillment entered a terminal state: completed, canceled,
     * failed, or no_show. This records the state transition; completed_at records completion
     * evidence supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * oneOf[2].type (Required): string. How the items are delivered: shipment, pickup, local
     * delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery",
     * "digital", "service", "handover". oneOf[2].updated_at (Required): string. When the
     * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". oneOf[2].version (Required): integer. Monotonic fulfillment version
     * for expected_version checks. Format: uint64. minimum: 1. oneOf[3] (Value): object and {@link
     * Shipment}. A shipment carrying fulfilled order items. oneOf[3].created_at (Required):
     * string. Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * oneOf[3].delivered_at (Optional): string. When the shipment was delivered, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". oneOf[3].direction (Required):
     * string. Whether the shipment sends items to the buyer or returns items to the merchant.
     * Value enum: "outbound", "return". oneOf[3].external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     * Example: "warehouse-1842". oneOf[3].external_system (Optional): string. Name of the external
     * system that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. oneOf[3].fulfillment_id (Required): string. Fulfillment
     * associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * oneOf[3].handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
     * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
     * return shipments, this can satisfy an after_handoff execution gate for the declared
     * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". oneOf[3].metadata
     * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
     * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. oneOf[3].order
     * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
     * relationship is expanded. Present only when `expand` includes `order`; `null` when expanded
     * and there is no related order. oneOf[3].order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * oneOf[3].order.anyOf[2] (Value): null. oneOf[3].order_id (Required): string. Order whose
     * items are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * oneOf[3].package_count (Required): integer. Total number of packages attached to the
     * shipment, including voided packages. Format: int32. minimum: 0. oneOf[3].packages
     * (Optional): Array of {@link ExpandedPackageSummary}. Summaries of the shipment's packages in
     * creation order, returned when the packages relationship is expanded or when the shipment is
     * created with packages. oneOf[3].packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. oneOf[3].return_id (Optional): string. Return
     * associated with this shipment, when its direction is return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". oneOf[3].return_line_items (Optional): Array of {@link
     * ReturnHandoffRequirementLineItem}. Return lines and quantities allocated to this return
     * shipment. oneOf[3].return_line_items[] (Value): {@link ReturnHandoffRequirementLineItem}. A
     * return line and the quantity placed in a return shipment or package. oneOf[3].shipment_id
     * (Required): string. Stable identifier of the shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". oneOf[3].shipped_at (Optional): string. When the shipment
     * was shipped, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * oneOf[3].status (Required): string. Read-only shipment state derived from the shipment's
     * package states. An empty shipment remains a created draft. - `created`: The shipment leg
     * exists but has not been packed or handed off. - `packed`: The shipment leg is packed and
     * awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
     * `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`:
     * The shipment is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment
     * was returned toward or to its origin. - `voided`: The shipment was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * oneOf[3].supported_actions (Required): Array of string. Lifecycle actions Flint accepts now,
     * independent of permissions. Contains void while the shipment and its fulfillment permit
     * voiding. [] enum: "void". oneOf[3].supported_actions[] (Value): string. Value enum: "void".
     * oneOf[3].updated_at (Required): string. Last update timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". oneOf[3].version (Required): integer. Monotonic shipment version for
     * expected_version checks. Format: uint64. minimum: 1. oneOf[4] (Value): object and {@link
     * Package}. A package within a shipment. oneOf[4].carrier (Optional): string. Carrier
     * transporting the package. oneOf[4].created_at (Required): string. Creation timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". oneOf[4].delivered_at (Optional):
     * string. Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * oneOf[4].dimensions (Optional): {@link Dimensions}. Physical length, width, and height of
     * the package. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. oneOf[4].expected_delivery_at (Optional): string or null. When the carrier or
     * merchant expects this package to arrive. Null when no estimate is set. Retained after
     * delivery as history. This estimate is separate from the fulfillment's promised shipment
     * window. Format: date-time. Example: "2026-08-02T16:00:00Z". oneOf[4].external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. maxLength: 255. Example: "warehouse-1842". oneOf[4].external_system (Optional):
     * string. Name of the external system that external_reference_id belongs to. External
     * references are not unique. Use Idempotency-Key for retries. oneOf[4].fulfillment_id
     * (Required): string. Fulfillment whose items are in the package. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T". oneOf[4].label_url (Optional): string. HTTPS
     * shipping-label URL supplied by your integration. Non-Flint URLs require external_system for
     * provenance. Flint does not host the label file. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. oneOf[4].metadata (Optional): {@link
     * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. oneOf[4].order (Optional): {@link
     * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
     * expanded. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. oneOf[4].order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. oneOf[4].order.anyOf[2] (Value): null.
     * oneOf[4].order_id (Required): string. Order whose items are in the package. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". oneOf[4].package_id (Required): string. Stable identifier
     * of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". oneOf[4].return_id (Optional):
     * string. Return this package belongs to. Present only on packages of return shipments.
     * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". oneOf[4].return_line_items (Optional): Array of
     * {@link ReturnHandoffRequirementLineItem}. Return line quantities allocated to this parcel.
     * Present only on packages of return shipments. oneOf[4].return_line_items[] (Value): {@link
     * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
     * shipment or package. oneOf[4].service_code (Optional): string. Carrier service used for the
     * package. oneOf[4].shipment_id (Required): string. Shipment carrying this package. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". oneOf[4].shipped_at (Optional): string. Package handoff
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". oneOf[4].status (Required):
     * string. Current package lifecycle state. Package states are the source used to derive
     * shipment status. - `created`: The package record exists but has not been packed or handed
     * off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The
     * package was handed to the carrier. - `in_transit`: The carrier is moving the package through
     * its network. - `out_for_delivery`: The package is on its final delivery route. -
     * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier
     * attempted delivery but did not complete it. Follow the carrier instructions before retrying
     * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
     * carrier-reported issue. - `returned`: The package was returned toward or to its origin. -
     * `voided`: The package was voided and will not continue through delivery. Value enum:
     * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided". oneOf[4].status_reason (Optional):
     * string. Additional explanation of the package's current status. oneOf[4].supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat
     * while in transit to refresh expected_delivery_at. [] enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". oneOf[4].supported_actions[]
     * (Value): string. Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception",
     * "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped",
     * "void". oneOf[4].tracking_number (Optional): string. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. oneOf[4].tracking_url
     * (Optional): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. oneOf[4].updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". oneOf[4].version (Required): integer. Monotonic
     * package version for expected_version checks. Format: uint64. minimum: 1. oneOf[4].weight
     * (Optional): {@link Weight}. Physical weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration. oneOf[5] (Value):
     * object and {@link CustomDomain}. A merchant hostname for hosted checkout or customer account
     * pages. oneOf[5].active_payment_attempt_count (Required): integer or null. Payment attempts
     * in progress on this checkout hostname. `null` when `type` is `customer_account`. Format:
     * int64. oneOf[5].created_at (Required): string. When this domain resource was created, in
     * RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * oneOf[5].custom_domain_id (Required): string. Flint custom domain ID. Example:
     * "cdom_01KEZF7C00483JTTKHZVFQHKS8". oneOf[5].dns_records (Required): Array of {@link
     * CustomDomainDNSRecord}. DNS records to add for setup or verification. For an archived
     * hostname, records that can be deleted. oneOf[5].dns_records[] (Value): {@link
     * CustomDomainDNSRecord}. A DNS record for configuring or verifying a custom hostname.
     * oneOf[5].hostname (Required): string. Configured hostname, normalized to lowercase without a
     * trailing dot. oneOf[5].last_checked_at (Required): string or null. When the domain was last
     * checked, in RFC3339 format; `null` when no check time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". oneOf[5].payment_method_domain_id (Required): string or
     * null. Payment method domain associated with this hostname. `null` when none is reported.
     * Example: "pmdom_01KEZF7C001WQCSRGH9GWR6628". oneOf[5].redirect_expires_at (Required): string
     * or null. End of the redirect window for an archived hostname. After archive, dns_records
     * lists records you can delete. `null` when the hostname isn't archived. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". oneOf[5].status (Required): string. Current setup and
     * availability state of the hostname. Archived domains retain their resource identity. Value
     * enum: "provisioning", "active", "attention_required", "inactive", "archived".
     * oneOf[5].status_reason (Required): string or null. Machine-readable detail for the current
     * status. `null` when no reason is reported, including for active and archived domains. Value
     * enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing",
     * "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider",
     * "certificate_pending", "custom_domains_inactive", "other", null. oneOf[5].type (Required):
     * string. Whether the hostname serves checkout pages or the customer account Flint hosts.
     * Value enum: "checkout", "customer_account". oneOf[5].updated_at (Required): string. When
     * this domain resource was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". oneOf[6] (Value): object and {@link DeliveryRevocation}. A permanent
     * fence on an exact delivery method revision, rate callback revision, callback signing key, or
     * Location geography version. Quotes that depend on it are revoked, and selections that depend
     * on it stop being current. oneOf[6].created_at (Required): string. When Flint created this
     * permanent fence, as an RFC 3339 timestamp in UTC. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". oneOf[6].delivery_revocation_id (Required): string. Unique ID of
     * this permanent delivery revocation. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * oneOf[6].estimated_impact (Required): {@link DeliveryRevocationImpact}. Counts of active
     * quotes and provisional selections that depended on the target when the fence was created.
     * Later reads keep these recorded counts. Counts of active delivery quotes and current
     * delivery selections affected by a delivery revocation. oneOf[6].merchant_note (Optional):
     * string. Optional incident context recorded when this revocation was created. oneOf[6].reason
     * (Required): string. Why the dependency was permanently fenced. Value enum:
     * "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other". oneOf[6].target (Required): {@link DeliveryRevocationTarget}.
     * The parent and exact revision, HMAC signing key, or recorded geography version permanently
     * fenced by this revocation. The parent and exact child identity permanently fenced by this
     * revocation.
     */
    "current_resource"?: ((({
        /**
         * Stable public resource name for the referenced resource: a ResourceType value, or
         * resource when the resource has no public type. Example: "order".
         */
        "resource_type": string;
        /**
         * Public Flint ID of the referenced resource. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         */
        "resource_id": string;
    })
        & (Exclude<ErrorResourceReference & object, readonly unknown[]>))
        | (({
        /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
        "fulfillment_id": string;
    })
        & (Exclude<Fulfillment & object, readonly unknown[]>))
        | (({
        /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
        "shipment_id": string;
    })
        & (Exclude<Shipment & object, readonly unknown[]>))
        | (({
        /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
        "package_id": string;
    })
        & (Exclude<Package & object, readonly unknown[]>))
        | (({
        /** Flint custom domain ID. Example: "cdom_01KEZF7C00483JTTKHZVFQHKS8". */
        "custom_domain_id": string;
    })
        & (Exclude<CustomDomain & object, readonly unknown[]>))
        | (({
        /**
         * Unique ID of this permanent delivery revocation. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B".
         */
        "delivery_revocation_id": string;
    })
        & (Exclude<DeliveryRevocation & object, readonly unknown[]>))
        | (Record<string, unknown>));
    /**
     * Current effective delivery selection ID returned with a selection concurrency conflict.
     * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "current_selection_id"?: string;
    /**
     * Latest accepted absolute source sequence for this item and Location. Format: uint64.
     * minimum: 0.
     */
    "current_source_observation_sequence"?: number;
    /** Current lifecycle status of the resource when the requested mutation is not allowed. */
    "current_status"?: string;
    /**
     * On VERSION_CONFLICT, the resource's current version; send it as expected_version after
     * rereading. Format: uint64. minimum: 0.
     */
    "current_version"?: number;
    /**
     * Delivery method this failure concerns on ACTION_NOT_ALLOWED with reason method_unavailable,
     * destination_not_served, or configuration_required. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string;
    /**
     * Key of the inventory demand this failure concerns. Sent on INVENTORY_INSUFFICIENT, and on
     * INVENTORY_INSUFFICIENT with reason location_ineligible when one demand cannot use the
     * Location.
     */
    "demand_key"?: string;
    /**
     * On INVENTORY_INSUFFICIENT with reason location_ineligible, why the Location in location_id
     * cannot supply the demand. Value enum: "location_not_active",
     * "inventory_allocation_inactive", "forced_location_mismatch", "fulfillment_incompatible",
     * "split_prohibited", "insufficient_quantity".
     */
    "eligibility_reason"?: "location_not_active"
        | "inventory_allocation_inactive"
        | "forced_location_mismatch"
        | "fulfillment_incompatible"
        | "split_prohibited"
        | "insufficient_quantity"
        | (string & {});
    /**
     * On VERSION_CONFLICT when you resume a payment attempt, the outstanding balance the attempt
     * started with. expected_outstanding_money must match it. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_attempt_outstanding_money"?: MoneyValue;
    /**
     * Delivery pricing failure category on ACTION_NOT_ALLOWED with reason method_unavailable,
     * destination_not_served, or configuration_required, when the rate cannot be calculated, and
     * the merchant callback failure category on EXTERNAL_SERVICE_ERROR with reason
     * rate_callback_failed or tax_callback_failed. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Decline reason for a failed payment, from the same vocabulary as the payment's
     * last_payment_error.code. Unrecognized provider reasons are payment_failed. Value enum:
     * "card_declined", "card_declined_do_not_retry", "card_details_outdated",
     * "insufficient_funds", "bank_account_closed", "bank_account_not_found",
     * "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded",
     * "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card",
     * "stolen_card", "do_not_honor", "fraudulent", "processing_error",
     * "payment_method_unavailable", "payment_method_declined", "payment_not_completed",
     * "payment_action_expired", "payment_method_temporarily_unavailable", "incorrect_pin",
     * "pin_try_exceeded", "pin_required", "payment_failed".
     */
    "failure_code"?: "card_declined"
        | "card_declined_do_not_retry"
        | "card_details_outdated"
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
        | "lost_card"
        | "stolen_card"
        | "do_not_honor"
        | "fraudulent"
        | "processing_error"
        | "payment_method_unavailable"
        | "payment_method_declined"
        | "payment_not_completed"
        | "payment_action_expired"
        | "payment_method_temporarily_unavailable"
        | "incorrect_pin"
        | "pin_try_exceeded"
        | "pin_required"
        | "payment_failed"
        | (string & {});
    /**
     * Merchant-provided buyer-facing text on ACTION_NOT_ALLOWED with reason unsupported_state,
     * not_offered, or terminal_status. Present only when the merchant set an inactive message.
     */
    "inactive_message"?: string;
    /**
     * Inventory count line this conflict concerns. Sent on VERSION_CONFLICT for physical
     * observations or stale source observation sequences. Example:
     * "invcln_01KEZF7C00BJK1S36219KK040Q".
     */
    "inventory_count_line_id"?: string;
    /**
     * Inventory item this failure concerns. Omitted for buyer credentials. Sent on
     * INVENTORY_INSUFFICIENT and on VERSION_CONFLICT for physical observations or stale source
     * observation sequences. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: string;
    /**
     * Inventory reservation line this failure concerns. Sent when a reservation line cannot
     * satisfy an inventory operation. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5".
     */
    "inventory_reservation_line_id"?: string;
    /**
     * Latest recorded package status time. On ACTION_NOT_ALLOWED with reason out_of_order, a
     * reroute to in_transit must have occurred_at at or after this instant. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "latest_status_occurred_at"?: string;
    /**
     * The limit that was reached. On LIMIT_REACHED with reason product_variants, the most
     * non-archived variants a product can hold. On LIMIT_REACHED with reason enabled_risk_rules,
     * the most active risk rules in the environment. On LIMIT_REACHED with reason
     * partner_app_credentials, the most active credentials a partner app can hold. On
     * LIMIT_REACHED with reason payment_intents_per_order, the most payment intents an order can
     * have over its lifetime. On LIMIT_REACHED with reason payment_retries_per_period, the most
     * payment retries a subscription allows in one billing period. On LIMIT_REACHED with reason
     * test_clock_subscriptions, the most subscriptions that aren't canceled one test clock can
     * hold. Format: int64.
     */
    "limit"?: number;
    /**
     * Location this failure concerns on INVENTORY_INSUFFICIENT with reason location_ineligible, on
     * VERSION_CONFLICT for physical observations or stale source observation sequences, or on
     * SERVICE_UNAVAILABLE when pickup availability cannot be evaluated. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * On INVENTORY_INSUFFICIENT with reason location_ineligible, the routing outcome for the
     * Location in location_id: for the demand in demand_key when present, otherwise for every
     * demand. Value enum: "ineligible".
     */
    "location_outcome"?: "ineligible" | (string & {});
    /**
     * RFC 3339 timestamp in UTC of the latest time this advance can reach. Sent on
     * ACTION_NOT_ALLOWED with reason advance_limit_exceeded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "maximum_frozen_at"?: string;
    /**
     * Maximum money amount accepted by the failed validation, calculated from the current resource
     * state. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_money"?: MoneyValue;
    /**
     * Human-readable explanation of this failure for your logs. The wording can change, so branch
     * on code.
     */
    "message": string;
    /**
     * Smallest money amount the input at param may contain in the resource's current state. On an
     * order total floor refusal without param, the minimum resulting order total, including any
     * unpaid tip. On ACTION_NOT_ALLOWED with reason minimum_charge, the processor minimum for the
     * prorated net charge. Retained errors keep their captured values. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_money"?: MoneyValue;
    /**
     * Minimum accepted whole-number quantity for the input at param, based on stored state;
     * fractional quantities are not supported. Sent on LIMIT_EXCEEDED. Format: int64.
     */
    "minimum_quantity"?: number;
    /**
     * Unsatisfied entries from scope_requirement after write-implies-read evaluation. Example:
     * ["accounts.api_keys.write"]. [] (Value): string.
     */
    "missing_scopes"?: Array<string>;
    /**
     * Environment mode the referenced connected app install must authorize. Value enum: "live",
     * "test".
     */
    "mode"?: "live" | "test" | (string & {});
    /**
     * Order that owns the line item in order_line_item_id. Sent on INVENTORY_INSUFFICIENT for an
     * order inventory demand. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Order line item whose inventory demand cannot be satisfied. Sent on INVENTORY_INSUFFICIENT.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Path of the input associated with this failure. Present on every INVALID_REQUEST detail.
     * Uses a body path such as line_items[0].name or metadata.order_ref, a path or query parameter
     * name, a published header name, or body for a whole-body failure.
     */
    "param"?: string;
    /**
     * Flint payment option associated with this error, when the error is about a specific
     * requested or selected payment option. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * RFC 3339 timestamp in UTC when new account payout terms end on ACTION_NOT_ALLOWED with
     * reason payout_frequency or payout_delay. Sent at second precision. Choose an allowed
     * schedule or delay, or make the change after this time. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "payout_terms_expires_at"?: string;
    /**
     * RFC 3339 timestamp when the previous signing key expires on ACTION_NOT_ALLOWED with reason
     * in_progress. Retry after this time, or revoke the current key before rotating if it leaked.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "previous_key_expires_at"?: string;
    /**
     * Structured resource quota state when the error is caused by quota exhaustion. Storage usage
     * and limits for a resource, returned in the error details when an image quota is exhausted.
     */
    "quota"?: QuotaDetails;
    /**
     * Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of:
     * advance_limit_exceeded, already_applied, archived, authorization_expired,
     * bank_return_not_contestable, cancellation_scheduled, choice_group_unavailable,
     * configuration_required, confirmation_token_unusable, credit_exceeds_charge,
     * credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold,
     * delivery_requirement_changes, dependency_revoked, derived_from_packages,
     * destination_not_served, disclosure_changed, dispute_payment_unavailable, end_after_reached,
     * environment_not_granted, existing_order_checkout, external_billing_schedule, field_locked,
     * first_period_unpaid, frozen_at_not_later, image_ingestion_restart_required, in_progress,
     * inventory_wait, invoice_finalized, jwt_signing_not_enabled, managed_by_owner,
     * managed_externally, merchant_hosted_customer_accounts, merchant_managed_email,
     * method_unavailable, minimum_charge, mixed_tax_treatment, not_itemized, not_offered,
     * not_paused, offer_subscription, on_hold, order_owned, out_of_order, owner_identity_conflict,
     * paid_period_required, payload_expired, payment_collected, payment_disputed,
     * payment_method_not_reusable, payment_required, payment_split_consent_required,
     * payout_defaults_managed_externally, payout_delay, payout_frequency, period_end_unavailable,
     * plan_change_scheduled, platform_capability_inactive, platform_fee_consent_required,
     * platform_onboarding_required, platform_pending_review, platform_rejected,
     * prepaid_deliveries_remaining, previous_refund_failed, provider_action_unsupported,
     * quantity_not_carried, reader_offline, reader_type_not_supported, reader_unavailable,
     * reconciliation_required, refund_created, refund_unavailable, refund_window_expired,
     * restricted, return_checkout, return_owned, return_tax_mismatch, sandbox_reset_failed,
     * secret_not_issued, seller_not_ready, simulated_reader_required, status_not_reached,
     * stock_at_risk, store_credit_unavailable, subscription_owned, subscription_terms_locked,
     * terminal_status, test_event, trial_in_progress, unsupported_state, variant_not_targeted,
     * verification_required. When code is ALREADY_EXISTS, one of: dashboard_sign_in_required,
     * device_reader_already_exists, hardware_fingerprint_already_exists. When code is
     * CONCURRENT_MODIFICATION, one of: credit_note_refund_retry_exhausted. When code is
     * DELIVERY_REQUOTE_REQUIRED, one of: calculation_expired, caller_rates_required,
     * destination_changed, input_required, option_expired, quote_expired, quote_revoked,
     * quote_stale, selection_changed, selection_expired, window_expired. When code is
     * EXTERNAL_SERVICE_ERROR, one of: issuer_unavailable, outcome_unknown, rate_callback_failed,
     * rate_unavailable, tax_callback_failed. When code is FORBIDDEN, one of:
     * checkout_launch_token_restricted, checkout_recovery_attempt_mismatch,
     * checkout_recovery_restricted, checkout_session_order_mismatch,
     * checkout_session_payment_required, context_mismatch, demo_session_route_not_allowed,
     * direct_owner_required, environment_grant_required, environment_mismatch,
     * expansion_not_permitted, full_access_required, linked_key_not_allowed, live_mode_required,
     * merchant_access_required, merchant_credential_required, merchant_role_insufficient,
     * not_checkout_session, not_permitted, organization_membership_required,
     * organization_role_insufficient, owner_workflow_required, request_blocked,
     * role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden,
     * self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one
     * of: page_origin_required, proof_rejected, proof_required. When code is
     * IDEMPOTENCY_KEY_REUSED, one of: transport_mismatch. When code is INSUFFICIENT_SCOPE, one of:
     * install_scope_not_granted, scope_not_granted, scope_not_held. When code is INTERNAL_ERROR,
     * one of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed,
     * mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is
     * INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is
     * LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, insufficient_available_value,
     * merchant_adjustments_daily, merchant_imports_daily, order_edit_balance_due. When code is
     * LIMIT_REACHED, one of: active_readers, checkout_tax_calculations, consecutive_skips,
     * customer_tax_exemptions, daily_demo_sessions, daily_gift_card_purchases,
     * delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage,
     * merchant_signups, monthly_tax_calculations, owned_merchants, partner_app_credentials,
     * partner_app_install_links, payment_intents_per_order, payment_link_completions,
     * payment_retries_per_period, pending_reports, price_list_prices, product_variants,
     * receipt_recipients, saved_card_codes, test_clock_subscriptions, verification_attempts,
     * verification_codes, webhook_event_streams, webhook_listener_signatures_daily,
     * workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable,
     * account_setup_repair_required, account_setup_unavailable, billing_suspended,
     * capability_blocked, capability_not_requested, capability_pending, capability_unavailable,
     * default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled, onboarding_required,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, payment_splits_unavailable,
     * platform_funding_unavailable, platform_review, pricing_not_authorized,
     * processing_not_enabled, processing_restricted, processor_not_configured, requirements_due,
     * tax_category_required. When code is OPERATION_IN_PROGRESS, one of:
     * delivery_selection_materializing, reader_busy, sandbox_resetting. When code is
     * PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range,
     * capability_blocked, capability_pending, disabled_by_merchant_settings,
     * disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is
     * PAYMENT_PROCESSING_UNAVAILABLE, one of: platform_funding_unavailable. When code is
     * PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing,
     * code_invalid, code_required, codes_disabled, currency_mismatch, customer_limit_reached,
     * customer_mismatch, customer_required, exhausted, expired, inactive, max_promotions_reached,
     * minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started,
     * recurrence_completed, superseded, superseded_by_better_offer, superseded_by_higher_priority,
     * unknown_type. When code is RESOURCE_IN_USE, one of: selected_by_active_variants. When code
     * is RESOURCE_NOT_FOUND, one of: email_missing, resource_in_different_environment. When code
     * is SERVICE_UNAVAILABLE, one of: outcome_unknown, processor_unavailable, repair_required.
     * Additional reasons may be added. Value enum: "account_sessions_unavailable",
     * "account_setup_repair_required", "account_setup_unavailable", "action_window_too_short",
     * "active_readers", "advance_limit_exceeded", "already_applied", "amount_out_of_range",
     * "archived", "authorization_expired", "automatic_disabled", "bank_return_not_contestable",
     * "billing_suspended", "buy_item_missing", "buyer_daily", "calculation_expired",
     * "caller_rates_required", "cancellation_scheduled", "capability_blocked",
     * "capability_not_requested", "capability_pending", "capability_unavailable", "card_balance",
     * "card_daily", "checkout_launch_token_restricted", "checkout_recovery_attempt_mismatch",
     * "checkout_recovery_restricted", "checkout_session_order_mismatch",
     * "checkout_session_payment_required", "checkout_tax_calculations",
     * "choice_group_unavailable", "code_invalid", "code_required", "codes_disabled",
     * "configuration_required", "confirmation_token_unusable", "consecutive_skips",
     * "context_mismatch", "credit_exceeds_charge", "credit_note_refund_retry_exhausted",
     * "credit_note_tax_reconciliation_required", "currency_mismatch",
     * "customer_account_mode_conflict", "customer_limit_reached", "customer_mismatch",
     * "customer_required", "customer_tax_exemptions", "daily_demo_sessions",
     * "daily_gift_card_purchases", "dashboard_sign_in_required", "default_environment_required",
     * "delivery_hold", "delivery_requirement_changes", "delivery_selection_materializing",
     * "delivery_selection_replacements", "demo_session_route_not_allowed", "dependency_revoked",
     * "derived_from_packages", "destination_changed", "destination_not_served",
     * "device_reader_already_exists", "direct_owner_required", "disabled_by_merchant_settings",
     * "disabled_by_platform_policy", "disclosure_changed", "dispute_payment_unavailable",
     * "email_missing", "enabled_risk_rules", "end_after_reached", "environment_grant_required",
     * "environment_mismatch", "environment_not_granted", "exhausted", "existing_order_checkout",
     * "expansion_not_permitted", "expired", "external_billing_schedule", "external_paid_orders",
     * "field_locked", "first_period_unpaid", "frozen_at_not_later", "full_access_required",
     * "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage",
     * "in_progress", "inactive", "input_required", "install_scope_not_granted",
     * "insufficient_available_value", "inventory_wait", "invoice_finalized", "issuer_unavailable",
     * "jwt_signing_not_enabled", "linked_key_not_allowed", "live_mode_required",
     * "location_ineligible", "location_limit", "malformed", "managed_by_owner",
     * "managed_externally", "max_promotions_reached", "merchant_access_required",
     * "merchant_account_action_required", "merchant_adjustments_daily",
     * "merchant_credential_required", "merchant_hosted_customer_accounts",
     * "merchant_imports_daily", "merchant_managed_email", "merchant_payments_disabled",
     * "merchant_role_insufficient", "merchant_signups", "method_unavailable", "minimum_charge",
     * "minimum_not_met", "mixed_tax_treatment", "mode_mismatch", "monthly_tax_calculations",
     * "no_discountable_balance", "not_checkout_session", "not_combinable", "not_eligible",
     * "not_itemized", "not_offered", "not_paused", "not_permitted", "not_yet_started",
     * "offer_subscription", "on_hold", "onboarding_required", "option_expired",
     * "order_edit_balance_due", "order_owned", "organization_membership_required",
     * "organization_role_insufficient", "out_of_order", "outcome_unknown", "owned_merchants",
     * "owner_identity_conflict", "owner_workflow_required", "page_origin_required",
     * "paid_period_required", "partner_app_credentials", "partner_app_install_links",
     * "payload_expired", "payment_account_context_invalid", "payment_account_setup_incomplete",
     * "payment_collected", "payment_disputed", "payment_intents_per_order",
     * "payment_link_completions", "payment_method_not_reusable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_available", "payment_option_not_in_plan", "payment_required",
     * "payment_retries_per_period", "payment_split_consent_required",
     * "payment_splits_unavailable", "payout_defaults_managed_externally", "payout_delay",
     * "payout_frequency", "pending_reports", "period_end_unavailable", "plan_change_scheduled",
     * "platform_capability_inactive", "platform_fee_consent_required",
     * "platform_funding_unavailable", "platform_onboarding_required", "platform_pending_review",
     * "platform_rejected", "platform_review", "prepaid_deliveries_remaining",
     * "previous_refund_failed", "price_list_prices", "pricing_not_authorized",
     * "processing_not_enabled", "processing_restricted", "processor_not_configured",
     * "processor_unavailable", "product_variants", "proof_rejected", "proof_required",
     * "provider_action_unsupported", "quantity_not_carried", "quote_expired", "quote_revoked",
     * "quote_stale", "rate_callback_failed", "rate_unavailable", "reader_busy", "reader_offline",
     * "reader_type_not_supported", "reader_unavailable", "receipt_recipients",
     * "reconciliation_required", "recurrence_completed", "refund_created", "refund_unavailable",
     * "refund_window_expired", "repair_required", "request_blocked", "requirements_due",
     * "resource_in_different_environment", "restricted", "return_checkout", "return_owned",
     * "return_tax_mismatch", "revoked", "risk_action_unsupported", "role_not_assignable",
     * "sandbox_not_accessible", "sandbox_reset_failed", "sandbox_resetting",
     * "sandbox_selection_forbidden", "saved_card_codes", "scope_not_granted", "scope_not_held",
     * "secret_not_issued", "selected_by_active_variants", "selection_changed",
     * "selection_expired", "self_role_edit_forbidden", "seller_not_ready", "session_ended",
     * "simulated_reader_required", "status_not_reached", "stock_at_risk",
     * "store_credit_unavailable", "subscription_owned", "subscription_terms_locked", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "tax_callback_failed",
     * "tax_category_required", "terminal_status", "test_clock_subscriptions", "test_event",
     * "test_mode_required", "transaction_purpose_unresolved", "transport_mismatch",
     * "trial_in_progress", "unknown", "unknown_type", "unsupported_state", "variant_not_targeted",
     * "verification_attempts", "verification_codes", "verification_required",
     * "webhook_event_streams", "webhook_listener_signatures_daily", "window_expired",
     * "workload_identities", "wrong_credential_type".
     */
    "reason"?: "account_sessions_unavailable"
        | "account_setup_repair_required"
        | "account_setup_unavailable"
        | "action_window_too_short"
        | "active_readers"
        | "advance_limit_exceeded"
        | "already_applied"
        | "amount_out_of_range"
        | "archived"
        | "authorization_expired"
        | "automatic_disabled"
        | "bank_return_not_contestable"
        | "billing_suspended"
        | "buy_item_missing"
        | "buyer_daily"
        | "calculation_expired"
        | "caller_rates_required"
        | "cancellation_scheduled"
        | "capability_blocked"
        | "capability_not_requested"
        | "capability_pending"
        | "capability_unavailable"
        | "card_balance"
        | "card_daily"
        | "checkout_launch_token_restricted"
        | "checkout_recovery_attempt_mismatch"
        | "checkout_recovery_restricted"
        | "checkout_session_order_mismatch"
        | "checkout_session_payment_required"
        | "checkout_tax_calculations"
        | "choice_group_unavailable"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "configuration_required"
        | "confirmation_token_unusable"
        | "consecutive_skips"
        | "context_mismatch"
        | "credit_exceeds_charge"
        | "credit_note_refund_retry_exhausted"
        | "credit_note_tax_reconciliation_required"
        | "currency_mismatch"
        | "customer_account_mode_conflict"
        | "customer_limit_reached"
        | "customer_mismatch"
        | "customer_required"
        | "customer_tax_exemptions"
        | "daily_demo_sessions"
        | "daily_gift_card_purchases"
        | "dashboard_sign_in_required"
        | "default_environment_required"
        | "delivery_hold"
        | "delivery_requirement_changes"
        | "delivery_selection_materializing"
        | "delivery_selection_replacements"
        | "demo_session_route_not_allowed"
        | "dependency_revoked"
        | "derived_from_packages"
        | "destination_changed"
        | "destination_not_served"
        | "device_reader_already_exists"
        | "direct_owner_required"
        | "disabled_by_merchant_settings"
        | "disabled_by_platform_policy"
        | "disclosure_changed"
        | "dispute_payment_unavailable"
        | "email_missing"
        | "enabled_risk_rules"
        | "end_after_reached"
        | "environment_grant_required"
        | "environment_mismatch"
        | "environment_not_granted"
        | "exhausted"
        | "existing_order_checkout"
        | "expansion_not_permitted"
        | "expired"
        | "external_billing_schedule"
        | "external_paid_orders"
        | "field_locked"
        | "first_period_unpaid"
        | "frozen_at_not_later"
        | "full_access_required"
        | "hardware_fingerprint_already_exists"
        | "image_ingestion_restart_required"
        | "image_storage"
        | "in_progress"
        | "inactive"
        | "input_required"
        | "install_scope_not_granted"
        | "insufficient_available_value"
        | "inventory_wait"
        | "invoice_finalized"
        | "issuer_unavailable"
        | "jwt_signing_not_enabled"
        | "linked_key_not_allowed"
        | "live_mode_required"
        | "location_ineligible"
        | "location_limit"
        | "malformed"
        | "managed_by_owner"
        | "managed_externally"
        | "max_promotions_reached"
        | "merchant_access_required"
        | "merchant_account_action_required"
        | "merchant_adjustments_daily"
        | "merchant_credential_required"
        | "merchant_hosted_customer_accounts"
        | "merchant_imports_daily"
        | "merchant_managed_email"
        | "merchant_payments_disabled"
        | "merchant_role_insufficient"
        | "merchant_signups"
        | "method_unavailable"
        | "minimum_charge"
        | "minimum_not_met"
        | "mixed_tax_treatment"
        | "mode_mismatch"
        | "monthly_tax_calculations"
        | "no_discountable_balance"
        | "not_checkout_session"
        | "not_combinable"
        | "not_eligible"
        | "not_itemized"
        | "not_offered"
        | "not_paused"
        | "not_permitted"
        | "not_yet_started"
        | "offer_subscription"
        | "on_hold"
        | "onboarding_required"
        | "option_expired"
        | "order_edit_balance_due"
        | "order_owned"
        | "organization_membership_required"
        | "organization_role_insufficient"
        | "out_of_order"
        | "outcome_unknown"
        | "owned_merchants"
        | "owner_identity_conflict"
        | "owner_workflow_required"
        | "page_origin_required"
        | "paid_period_required"
        | "partner_app_credentials"
        | "partner_app_install_links"
        | "payload_expired"
        | "payment_account_context_invalid"
        | "payment_account_setup_incomplete"
        | "payment_collected"
        | "payment_disputed"
        | "payment_intents_per_order"
        | "payment_link_completions"
        | "payment_method_not_reusable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_available"
        | "payment_option_not_in_plan"
        | "payment_required"
        | "payment_retries_per_period"
        | "payment_split_consent_required"
        | "payment_splits_unavailable"
        | "payout_defaults_managed_externally"
        | "payout_delay"
        | "payout_frequency"
        | "pending_reports"
        | "period_end_unavailable"
        | "plan_change_scheduled"
        | "platform_capability_inactive"
        | "platform_fee_consent_required"
        | "platform_funding_unavailable"
        | "platform_onboarding_required"
        | "platform_pending_review"
        | "platform_rejected"
        | "platform_review"
        | "prepaid_deliveries_remaining"
        | "previous_refund_failed"
        | "price_list_prices"
        | "pricing_not_authorized"
        | "processing_not_enabled"
        | "processing_restricted"
        | "processor_not_configured"
        | "processor_unavailable"
        | "product_variants"
        | "proof_rejected"
        | "proof_required"
        | "provider_action_unsupported"
        | "quantity_not_carried"
        | "quote_expired"
        | "quote_revoked"
        | "quote_stale"
        | "rate_callback_failed"
        | "rate_unavailable"
        | "reader_busy"
        | "reader_offline"
        | "reader_type_not_supported"
        | "reader_unavailable"
        | "receipt_recipients"
        | "reconciliation_required"
        | "recurrence_completed"
        | "refund_created"
        | "refund_unavailable"
        | "refund_window_expired"
        | "repair_required"
        | "request_blocked"
        | "requirements_due"
        | "resource_in_different_environment"
        | "restricted"
        | "return_checkout"
        | "return_owned"
        | "return_tax_mismatch"
        | "revoked"
        | "risk_action_unsupported"
        | "role_not_assignable"
        | "sandbox_not_accessible"
        | "sandbox_reset_failed"
        | "sandbox_resetting"
        | "sandbox_selection_forbidden"
        | "saved_card_codes"
        | "scope_not_granted"
        | "scope_not_held"
        | "secret_not_issued"
        | "selected_by_active_variants"
        | "selection_changed"
        | "selection_expired"
        | "self_role_edit_forbidden"
        | "seller_not_ready"
        | "session_ended"
        | "simulated_reader_required"
        | "status_not_reached"
        | "stock_at_risk"
        | "store_credit_unavailable"
        | "subscription_owned"
        | "subscription_terms_locked"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "tax_callback_failed"
        | "tax_category_required"
        | "terminal_status"
        | "test_clock_subscriptions"
        | "test_event"
        | "test_mode_required"
        | "transaction_purpose_unresolved"
        | "transport_mismatch"
        | "trial_in_progress"
        | "unknown"
        | "unknown_type"
        | "unsupported_state"
        | "variant_not_targeted"
        | "verification_attempts"
        | "verification_codes"
        | "verification_required"
        | "webhook_event_streams"
        | "webhook_listener_signatures_daily"
        | "window_expired"
        | "workload_identities"
        | "wrong_credential_type"
        | (string & {});
    /**
     * Recovery guidance for this failure: whether retrying can succeed and what to do next.
     * Omitted on the details of INVALID_REQUEST, where the error's own remediation applies to
     * every input. Recovery guidance for an error: whether and how to `retry`, plus next steps and
     * suggested actions.
     */
    "remediation"?: ErrorRemediation;
    /**
     * Whole-number quantity submitted by the caller when a quantity-bearing operation conflicts
     * with current capacity; fractional quantities are not supported. Format: int64.
     */
    "requested_quantity"?: number;
    /**
     * Shipping total computed for the new destination, when available. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "requoted_shipping_money"?: MoneyValue;
    /**
     * Tax total computed for the new destination, when available. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "requoted_tax_money"?: MoneyValue;
    /**
     * RFC 3339 instant when time alone frees capacity for LIMIT_REACHED or LIMIT_EXCEEDED. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "resets_at"?: string;
    /**
     * ID of the referenced public resource, when available. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * Public resource named by RESOURCE_NOT_FOUND or a generic conflict: a ResourceType value, or
     * resource when the resource has no public type. Example: "order".
     */
    "resource_type"?: string;
    /**
     * Restrictions that prevented this gift card action, in the same shape as
     * GiftCard.restrictions. Sent on ACTION_NOT_ALLOWED with reason restricted. [] (Value): {@link
     * GiftCardRestriction}. A restriction on a gift card, either a merchant freeze or a funding
     * dispute, with its reason or dispute details.
     */
    "restrictions"?: Array<GiftCardRestriction>;
    /**
     * Sandbox the referenced connected app install must authorize for a test-mode link. pattern:
     * ^(test|menv)_[0-9A-HJKMNP-TV-Z]{26}$. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /** Canonical public scope rejected by validation, when the detail concerns one scope. */
    "scope"?: string;
    /**
     * Complete route or delegation scope requirement for an INSUFFICIENT_SCOPE error. The scopes
     * an authorization decision required and whether `all` or `any` of them were needed, returned
     * in error details.
     */
    "scope_requirement"?: ScopeRequirement;
    /**
     * Resources offered for the field named by param under INVALID_REQUEST. Submit one of their
     * resource_id values. [] (Value): {@link SelectableErrorResource}. A resource the caller can
     * select for a request field.
     */
    "selectable_resources"?: Array<SelectableErrorResource>;
    /**
     * Committed shipping total on the paid order when its destination cannot change without
     * repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "shipping_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "shortage_quantity"?: number;
    /**
     * Amount from your request that failed the check. On ACTION_NOT_ALLOWED with
     * reconciliation_required, the unpaid tip the payment would have to carry. On VERSION_CONFLICT
     * or LIMIT_EXCEEDED, the expected_outstanding_money you sent, or the total of the selected
     * payment legs when they do not fit the outstanding balance. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "submitted_money"?: MoneyValue;
    /**
     * Absolute source sequence submitted for this inventory count line. Format: uint64. minimum:
     * 0.
     */
    "submitted_source_observation_sequence"?: number;
    /** Concrete corrective actions for this validation error. [] (Value): string. */
    "suggestions"?: Array<string>;
    /** Actions accepted for the current resource state. [] (Value): string. */
    "supported_actions"?: Array<string>;
    /**
     * On INVALID_REQUEST with param Flint-Version, and on API_VERSION_RETIRED, the API versions
     * you can use now. [] (Value): string.
     */
    "supported_api_versions"?: Array<string>;
    /**
     * Committed tax total on a paid order when its destination cannot change without repricing.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /**
     * Delivery eligibility reason on ACTION_NOT_ALLOWED with reason method_unavailable,
     * destination_not_served, or configuration_required, when the selected method is unavailable.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /**
     * How many seconds an identity verification lasts for this request, on
     * IDENTITY_VERIFICATION_REQUIRED. Verify again when verified_at is older than this. Format:
     * int64.
     */
    "verification_max_age_seconds"?: number;
    /**
     * When the calling user session last verified the user's identity, on
     * IDENTITY_VERIFICATION_REQUIRED. Dashboard sessions report it to the minute. Omitted when the
     * session has no recorded verification. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "verified_at"?: string;
};
/**
 * Validation detail code on INVALID_REQUEST; param identifies the input to correct. Value enum:
 * "REQUIRED", "INVALID_VALUE", "UNKNOWN_FIELD", "NOT_ALLOWED".
 */
export type ErrorDetailCode = "REQUIRED" | "INVALID_VALUE" | "UNKNOWN_FIELD" | "NOT_ALLOWED" | (string & {});
/** An error response containing `ErrorObject`. */
export type ErrorEnvelope = {
    /**
     * Error code, message, request context, and guidance for resolving the failure. The error
     * returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a
     * list of `details` for individual failures.
     */
    "error": ErrorObject;
};
/**
 * The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`,
 * and a list of `details` for individual failures.
 */
export type ErrorObject = {
    /**
     * Stable Flint error code. Each operation lists its codes in x-flint-error-codes, and each
     * error response lists the codes it can carry at that status. Value enum:
     * "ACTION_NOT_ALLOWED", "ALREADY_EXISTS", "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED",
     * "CONCURRENT_MODIFICATION", "CUSTOMER_EMAIL_REQUIRED", "DELIVERY_REQUOTE_REQUIRED",
     * "EXTERNAL_SERVICE_ERROR", "FORBIDDEN", "GIFT_CARD_CHALLENGE_REQUIRED",
     * "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED", "IDEMPOTENCY_RECOVERY_REQUIRED",
     * "IDENTITY_VERIFICATION_REQUIRED", "INSUFFICIENT_SCOPE", "INTERNAL_ERROR",
     * "INVALID_CREDENTIAL", "INVALID_REQUEST", "INVENTORY_INSUFFICIENT", "LIMIT_EXCEEDED",
     * "LIMIT_REACHED", "MERCHANT_NOT_READY", "METHOD_NOT_ALLOWED", "OPERATION_IN_PROGRESS",
     * "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_OPTION_UNAVAILABLE", "PAYMENT_PROCESSING_UNAVAILABLE",
     * "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_REVIEW_OPEN", "PROMOTION_DECLINED",
     * "RATE_LIMIT_EXCEEDED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT",
     * "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "ROUTE_NOT_FOUND", "SERVICE_UNAVAILABLE",
     * "UNSUPPORTED_CONTENT_TYPE", "VERSION_CONFLICT".
     */
    "code": "ACTION_NOT_ALLOWED"
        | "ALREADY_EXISTS"
        | "API_VERSION_RETIRED"
        | "AUTHENTICATION_REQUIRED"
        | "CONCURRENT_MODIFICATION"
        | "CUSTOMER_EMAIL_REQUIRED"
        | "DELIVERY_REQUOTE_REQUIRED"
        | "EXTERNAL_SERVICE_ERROR"
        | "FORBIDDEN"
        | "GIFT_CARD_CHALLENGE_REQUIRED"
        | "IDEMPOTENCY_KEY_IN_PROGRESS"
        | "IDEMPOTENCY_KEY_REUSED"
        | "IDEMPOTENCY_RECOVERY_REQUIRED"
        | "IDENTITY_VERIFICATION_REQUIRED"
        | "INSUFFICIENT_SCOPE"
        | "INTERNAL_ERROR"
        | "INVALID_CREDENTIAL"
        | "INVALID_REQUEST"
        | "INVENTORY_INSUFFICIENT"
        | "LIMIT_EXCEEDED"
        | "LIMIT_REACHED"
        | "MERCHANT_NOT_READY"
        | "METHOD_NOT_ALLOWED"
        | "OPERATION_IN_PROGRESS"
        | "PAYMENT_ATTEMPT_ACTIVE"
        | "PAYMENT_OPTION_UNAVAILABLE"
        | "PAYMENT_PROCESSING_UNAVAILABLE"
        | "PAYMENT_PROCESSOR_REJECTED"
        | "PAYMENT_REVIEW_OPEN"
        | "PROMOTION_DECLINED"
        | "RATE_LIMIT_EXCEEDED"
        | "REQUEST_BODY_TOO_LARGE"
        | "REQUEST_CANCELED"
        | "REQUEST_TIMEOUT"
        | "RESOURCE_IN_USE"
        | "RESOURCE_NOT_FOUND"
        | "ROUTE_NOT_FOUND"
        | "SERVICE_UNAVAILABLE"
        | "UNSUPPORTED_CONTENT_TYPE"
        | "VERSION_CONFLICT"
        | (string & {});
    /**
     * Individual failures belonging to this error. Present on every validation error and every
     * error carrying facts. On non-validation errors the first item repeats the top-level code and
     * param. Facts appear only in typed detail fields; param contains public request field paths.
     * [] (Value): {@link ErrorDetail}. One specific failure within an error, with a `code` and
     * `message` plus fields that depend on the code, such as the `param`, resource, quantity, or
     * amount involved.
     */
    "details"?: Array<ErrorDetail>;
    /**
     * Error reference at https://developers.withflintpay.com/docs/errors# followed by the
     * lowercase error code.
     */
    "doc_url": string;
    /**
     * Who must act before the request can succeed. It depends only on code and details[0].reason;
     * the errors reference lists the value for each. Use it to route the failure, and code and
     * details[0].reason for the fix. Value enum: "caller", "merchant", "merchant_endpoint",
     * "flint".
     */
    "error_source": "caller" | "merchant" | "merchant_endpoint" | "flint" | (string & {});
    /**
     * Human-readable explanation for your logs. The wording can change, so branch on code, and do
     * not show it to buyers as is.
     */
    "message": string;
    /**
     * Path of the one input to change: a body path such as line_items[0].name or
     * metadata.order_ref, a path or query parameter name, a header name such as Idempotency-Key,
     * or body for the whole body. Present on every validation error and whenever one input is
     * responsible.
     */
    "param"?: string;
    /**
     * Recovery guidance: whether retrying can succeed and what to do next. Recovery guidance for
     * an error: whether and how to `retry`, plus next steps and suggested actions.
     */
    "remediation": ErrorRemediation;
    /**
     * ID of this request, also sent in the X-Request-Id response header. Include it when you
     * contact Flint support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /**
     * Path of this request's log in the request-logs API, present when the credential can read it.
     * The detail endpoint waits up to three seconds for a recent request log to become available.
     */
    "request_log_url"?: string;
    /**
     * Coarse category determined by the HTTP status. 400: validation_error; 401:
     * authentication_error; 403: authorization_error; 404: not_found_error; 405, 410, 413, 415,
     * 499: protocol_error; 409: conflict_error; 429: rate_limit_error; 502:
     * external_service_error; 503: unavailable_error; 504: timeout_error. All other error
     * statuses: internal_error. Value enum: "authentication_error", "authorization_error",
     * "validation_error", "not_found_error", "conflict_error", "rate_limit_error",
     * "external_service_error", "timeout_error", "unavailable_error", "internal_error",
     * "protocol_error".
     */
    "type": "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
};
/**
 * Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested
 * actions.
 */
export type ErrorRemediation = {
    /**
     * Suggested actions for resolving the error, including the target resource and any required
     * input. [] (Value): {@link NextAction}. A follow-up action. When target_resource is present,
     * send its resource_id in the target request field named {resource_type}_id.
     */
    "next_actions"?: Array<NextAction>;
    /** What to change or check before attempting the operation again. */
    "next_steps"?: string;
    /**
     * Whether sending this request again can succeed, and how. It depends only on code and
     * details[0].reason; the errors reference lists the value for each. Value enum:
     * "same_request", "after_refresh", "none".
     */
    "retry": "same_request" | "after_refresh" | "none" | (string & {});
};
/**
 * A reference to a public resource named in an error, with its type, ID, and current status when
 * available.
 */
export type ErrorResourceReference = {
    /** Public Flint ID of the referenced resource. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id": string;
    /**
     * Stable public resource name for the referenced resource: a ResourceType value, or resource
     * when the resource has no public type. Example: "order".
     */
    "resource_type": string;
    /** Current public status of the referenced resource when available. */
    "status"?: string;
};
/**
 * A customer's summary fields, returned in place of a customer ID when the customer is expanded.
 */
export type ExpandedCustomerSummary = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /**
     * Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Customer email. `null` when the customer has none. Unique among the environment's customers.
     */
    "email": string | null;
    /** Customer name. `null` when none is set. */
    "name": string | null;
    /** Customer phone number. `null` when none is set. */
    "phone": string | null;
    /**
     * Where the customer is in the deletion lifecycle. Value enum: "active",
     * "deletion_processing", "deleted".
     */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
/**
 * An invoice's summary fields, including status, due date, and paid, outstanding, and refunded
 * amounts, returned when the invoice is expanded.
 */
export type ExpandedInvoiceSummary = {
    /**
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status"?: "none" | "inventory_blocked" | "resolved" | (string & {});
    /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /**
     * Customer billed by the invoice. Absent when the invoice has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
     * outstanding balance becomes overdue only after this date ends. Automatic collection runs at
     * the later of issue and the start of this date. With payment terms, issue computes this date
     * from issued_at. Absent when there is no due date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /** Sequential document number assigned when the invoice is issued. Absent on a draft. */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining, as
     * is_overdue on the full Invoice reports it.
     */
    "is_overdue": boolean;
    /** The order the invoice bills. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: string;
    /**
     * What is still owed, as outstanding_money on the full Invoice reports it: never below zero, 0
     * on paid, credited, uncollectible, and voided invoices, and equal to total_money on a draft.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments collected toward this invoice, online or as recorded manual payments, minus
     * reversed payments, including payments toward late fees. Never below zero. Disputes,
     * including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     */
    "status": "draft"
        | "open"
        | "partially_paid"
        | "paid"
        | "voided"
        | "uncollectible"
        | "credited"
        | (string & {});
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". [] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void".
     */
    "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
    /**
     * The invoice document total, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a
     * draft previews the backing order total. Late fees are in late_fee_money on the full invoice.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
/**
 * An order's summary fields, including status, payment and refund status, and pricing and
 * settlement amounts, returned when the order is expanded.
 */
export type ExpandedOrderSummary = {
    /**
     * Buyer contact recorded on the order, including guest contact when retained. Omitted when the
     * order has no recorded contact. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: "invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * When the order was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Customer associated with the order, when one is set. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Promotions accepted at subscription signup. They attach when the subscription is provisioned
     * and first discount its first charged cycle. They do not discount this order and are separate
     * from discounts and order totals. Always present; empty when no promotions are deferred. []
     * (Value): {@link DeferredPromotion}. A promotion accepted at subscription signup for the
     * subscription's first charged cycle. It does not discount the signup order.
     */
    "deferred_promotions": Array<DeferredPromotion>;
    /**
     * Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /**
     * ID of the delivery selection that governs this order. Null when no selection governs the
     * order. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "governing_delivery_selection_id": string | null;
    /** Stable identifier of the expanded order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at": string | null;
    /**
     * Payment intents associated with the order. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Order totals before accounting for collected payments and refunds. The money totals for an
     * order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * Refund progress for collected money. Refunds with `reason` `payment_returned` return money
     * the order never received and don't count. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Payments, refunds, credits, and amounts still owed for the order. The bill settlement
     * amounts plus order overpayments, settled tips, debt discharged by final capture, and value
     * order edits removed. Money collected, returned, waived, and still owed on a bill.
     */
    "settlement_amounts": OrderSettlementAmounts;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Lifecycle actions Flint accepts on the order now, independent of permissions. [] enum:
     * "close", "pay", "resolve_inventory_exception". [] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception".
     */
    "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
    /**
     * When the order was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
};
/**
 * A package's summary fields, including carrier, tracking, status, and supported actions, returned
 * when the package is expanded.
 */
export type ExpandedPackageSummary = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /**
     * When the package was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * When the package was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /** Stable identifier of the expanded package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /**
     * When the package was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Current package lifecycle state. - `created`: The package record exists but has not been
     * packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. -
     * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the
     * package through its network. - `out_for_delivery`: The package is on its final delivery
     * route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
     * carrier attempted delivery but did not complete it. Follow the carrier instructions before
     * retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
     * the carrier-reported issue. - `returned`: The package was returned toward or to its origin.
     * - `voided`: The package was voided and will not continue through delivery. Value enum:
     * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided".
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
    /**
     * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh
     * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
     * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
     * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | "void"
        | (string & {})>;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_url"?: string;
    /**
     * When the package was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/**
 * A payment intent's summary fields, including amount, status, and capture method, returned when
 * the payment intent is expanded.
 */
export type ExpandedPaymentIntentSummary = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Dispute state of this payment. none means no dispute or inquiry is open or recorded. The
     * inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the
     * dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status": "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Order this payment intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * How much of captured_money has been refunded, including value issued as store credit, based
     * on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * A payment link's summary fields, including name, type, status, and URL, returned when the
 * payment link is expanded.
 */
export type ExpandedPaymentLinkSummary = {
    /** Number of paid checkout sessions started from this link. Format: int32. */
    "completed_count": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** Text about what the link sells, returned to buyers when they open it. */
    "description"?: string;
    /** Name of the payment link. */
    "name": string;
    /**
     * Unique identifier for this payment link, prefixed `pl_`. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id": string;
    /** What kind of link this is. Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
    /** URL buyers open to use the link. */
    "url"?: string;
};
/**
 * A payment method's summary fields, including type, status, and card details, returned when the
 * payment method is expanded.
 */
export type ExpandedPaymentMethodSummary = {
    /**
     * Card details on a payment method: brand, expiration month and year, last four digits, and
     * the wallet when one was used.
     */
    "card"?: CardDetails;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Unique identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
    /** Value enum: "pending", "active", "expired", "archived", "failed". */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Value enum: "card". */
    "type": "card" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
/**
 * A payout destination's summary fields, such as type, bank name, last four digits, and status,
 * returned when the destination is expanded.
 */
export type ExpandedPayoutDestinationSummary = {
    /**
     * Payout methods available through Flint for this destination. Only standard is currently
     * available. [] enum: "standard". [] (Value): string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    /** Name of the bank, when your processor reports it. */
    "bank_name"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Whether this is the default destination for its currency. Scheduled payouts, and payouts
     * created without payout_destination_id, go to the default, and only an active destination can
     * be it.
     */
    "is_default_for_currency": boolean;
    /** Last four digits of the account or card number. */
    "last4"?: string;
    /**
     * Unique identifier for this payout destination, prefixed `pdest_`. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id": string;
    /**
     * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /**
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * A payout's summary fields, including amount, method, status, and arrival date, returned when the
 * payout is expanded.
 */
export type ExpandedPayoutSummary = {
    /**
     * Amount sent to your bank. Always positive. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC
     * date of the expected arrival. Format: date. Example: "2026-08-02".
     */
    "arrival_date"?: string;
    /**
     * Balance source this payout draws from. Flint chooses the source when balance_source_type is
     * omitted at create. Clients must accept source types added in future releases. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears
     * only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a
     * method Flint doesn't map. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: string;
    /**
     * Unique identifier for this payout, prefixed `po_`. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "payout_id": string;
    /**
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed".
     */
    "reversal_status": "none" | "reversed" | (string & {});
    /**
     * Where the payout is: pending until it is sent, in_transit on its way to your bank, then
     * succeeded or failed. A succeeded payout can still become failed if the bank returns the
     * deposit, and canceled means a manual payout was canceled while pending. Value enum:
     * "pending", "in_transit", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. [] enum: "cancel". [] (Value): string. Value enum:
     * "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
/**
 * A shipment's summary fields, including direction, status, and package count, returned when the
 * shipment is expanded.
 */
export type ExpandedShipmentSummary = {
    /**
     * When the shipment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
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
     * When the carrier accepted the shipment, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "handed_off_at"?: string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /**
     * ID of the Return this shipment sends back. Present only on return shipments. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /** Stable identifier of the expanded shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /**
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Read-only shipment state. - `created`: The shipment leg exists but has not been packed or
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
    /**
     * Lifecycle actions Flint accepts now, independent of permissions. Contains void while the
     * shipment and its fulfillment permit voiding. [] enum: "void". [] (Value): string. Value
     * enum: "void".
     */
    "supported_actions": Array<"void" | (string & {})>;
    /**
     * When the shipment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
};
/**
 * A subscription plan's summary fields, including name, billing interval, currency, and status,
 * returned when the plan is expanded.
 */
export type ExpandedSubscriptionPlanSummary = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /**
     * Offered billing interval and count pairs, including the plan's default pair. Prices of lines
     * that ship are per delivery. Each option charges for all deliveries in its period. Use
     * separate plans or promotions for different prices per interval. maxItems: 12. uniqueItems:
     * true. [] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as every 2
     * months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship
     * are per delivery, and each option charges for all deliveries in its period. Without a
     * delivery cadence there is one delivery per period, so every option bills the same line
     * prices once per period. With a delivery cadence, a longer period bills more deliveries of
     * the lines that ship; other lines bill once per period. For a different price per interval
     * with no delivery cadence, create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    "description"?: string;
    /**  [] (Value): {@link SubscriptionPlanLineItem}. A line item on a subscription plan. */
    "line_items"?: Array<SubscriptionPlanLineItem>;
    "name": string;
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
    "quantity_options"?: Array<number>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "setup_fee_money"?: MoneyValue;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Unique identifier for this subscription plan, prefixed `plan_`. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
    /** Format: int32. */
    "trial_period_days"?: number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
/**
 * A subscription's summary fields, including status, billing period, and next billing time,
 * returned when the subscription is expanded.
 */
export type ExpandedSubscriptionSummary = {
    /** Format: int32. */
    "billing_anchor_day": number;
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_start_at"?: string;
    /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
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
    /**
     * Unique identifier for this subscription, prefixed `sub_`. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
    /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
    /** Value enum: "subscription_plan", "subscription_offer". */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
/** Records fulfillment failure and explicitly releases or preserves the allocated quantities. */
export type FailFulfillmentRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * Whether the failed fulfillment releases its quantities for another fulfillment. false
     * preserves the allocation.
     */
    "release_quantity": boolean;
};
/** Records fulfillment failure and explicitly releases or preserves the allocated quantities. */
export type FailFulfillmentRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * Whether the failed fulfillment releases its quantities for another fulfillment. false
     * preserves the allocation.
     */
    "release_quantity": boolean;
};
/** Feedback submitted about the developer experience. */
export type FeedbackReport = ({
    /**
     * Observed outcome, when the report included it. Stored as submitted, trimmed, with line
     * endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. minLength: 1.
     * maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * File in the reporter's own repository this feedback is about, optionally followed by `:line`
     * or `:line:column`, such as `src/sync/products.ts:42`. Stored as submitted, trimmed, with
     * line endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength:
     * 500.
     */
    "code_location"?: string;
    /**
     * Feature or subsystem within the product, when the report named one. Stored as submitted,
     * trimmed, with line endings normalized and secrets replaced by redaction markers. minLength:
     * 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Server-assigned time when Flint stored the report. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Details about the feedback, when the report included them. Stored as submitted, trimmed,
     * with line endings normalized and secrets replaced by redaction markers. minLength: 1.
     * maxLength: 8000.
     */
    "description"?: string;
    /**
     * Desired outcome, when the report included it. Stored as submitted, trimmed, with line
     * endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Server-assigned ID of the stored feedback report. pattern: ^fbr_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "fbr_01KEZF7C00CFKWW2MH94F39D7B".
     */
    "feedback_report_id": string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "rating",
     * "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. minLength: 1. maxLength: 255. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, sorted. maxItems: 20. uniqueItems: true.
     * [] (Value): string. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool that submitted the feedback, independently of the product being discussed. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Steps in reproduction order. maxItems: 20. uniqueItems: true. [] (Value): string. minLength:
     * 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Always present on a rating. Value enum:
     * "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Present on every report except a rating that sent none.
     * Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction
     * markers. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product the feedback is about, independently of how the report was submitted. Value enum:
     * "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /** The public API route template this feedback is about. minLength: 1. maxLength: 500. */
    "surface_route"?: string;
})
    & ((Exclude<FeedbackReportRating & object, readonly unknown[]>)
    | (Exclude<FeedbackReportNarrative & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A page of `FeedbackReport` objects. */
export type FeedbackReportListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * FeedbackReport}. Feedback submitted about the developer experience.
     */
    "data": Array<FeedbackReport>;
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
/** Feedback submitted about the developer experience. */
export type FeedbackReportNarrative = ({
    /**
     * Observed outcome, when the report included it. Stored as submitted, trimmed, with line
     * endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. minLength: 1.
     * maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * File in the reporter's own repository this feedback is about, optionally followed by `:line`
     * or `:line:column`, such as `src/sync/products.ts:42`. Stored as submitted, trimmed, with
     * line endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength:
     * 500.
     */
    "code_location"?: string;
    /**
     * Feature or subsystem within the product, when the report named one. Stored as submitted,
     * trimmed, with line endings normalized and secrets replaced by redaction markers. minLength:
     * 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Server-assigned time when Flint stored the report. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Details about the feedback, when the report included them. Stored as submitted, trimmed,
     * with line endings normalized and secrets replaced by redaction markers. minLength: 1.
     * maxLength: 8000.
     */
    "description"?: string;
    /**
     * Desired outcome, when the report included it. Stored as submitted, trimmed, with line
     * endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Server-assigned ID of the stored feedback report. pattern: ^fbr_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "fbr_01KEZF7C00CFKWW2MH94F39D7B".
     */
    "feedback_report_id": string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. minLength: 1. maxLength: 255. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, sorted. maxItems: 20. uniqueItems: true.
     * [] (Value): string. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool that submitted the feedback, independently of the product being discussed. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Steps in reproduction order. maxItems: 20. uniqueItems: true. [] (Value): string. minLength:
     * 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Always present on a rating. Value enum:
     * "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Present on every report except a rating that sent none.
     * Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction
     * markers. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Product the feedback is about, independently of how the report was submitted. Value enum:
     * "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /** The public API route template this feedback is about. minLength: 1. maxLength: 500. */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "papercut", "bug", "feature_request", "praise", "other". */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Product the feedback is about, independently of how the report was submitted. Value enum:
     * "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Brief account of the feedback. Present on every report except a rating that sent none.
     * Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction
     * markers. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/** Feedback submitted about the developer experience. */
export type FeedbackReportRating = ({
    /**
     * Observed outcome, when the report included it. Stored as submitted, trimmed, with line
     * endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. minLength: 1.
     * maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * File in the reporter's own repository this feedback is about, optionally followed by `:line`
     * or `:line:column`, such as `src/sync/products.ts:42`. Stored as submitted, trimmed, with
     * line endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength:
     * 500.
     */
    "code_location"?: string;
    /**
     * Feature or subsystem within the product, when the report named one. Stored as submitted,
     * trimmed, with line endings normalized and secrets replaced by redaction markers. minLength:
     * 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Server-assigned time when Flint stored the report. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Details about the feedback, when the report included them. Stored as submitted, trimmed,
     * with line endings normalized and secrets replaced by redaction markers. minLength: 1.
     * maxLength: 8000.
     */
    "description"?: string;
    /**
     * Desired outcome, when the report included it. Stored as submitted, trimmed, with line
     * endings normalized and secrets replaced by redaction markers. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Server-assigned ID of the stored feedback report. pattern: ^fbr_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "fbr_01KEZF7C00CFKWW2MH94F39D7B".
     */
    "feedback_report_id": string;
    /** Classification of the feedback. Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Flint request ID associated with this feedback. minLength: 1. maxLength: 255. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, sorted. maxItems: 20. uniqueItems: true.
     * [] (Value): string. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool that submitted the feedback, independently of the product being discussed. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Steps in reproduction order. maxItems: 20. uniqueItems: true. [] (Value): string. minLength:
     * 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Always present on a rating. Value enum:
     * "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Present on every report except a rating that sent none.
     * Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction
     * markers. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product the feedback is about, independently of how the report was submitted. Value enum:
     * "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /** The public API route template this feedback is about. minLength: 1. maxLength: 500. */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Product the feedback is about, independently of how the report was submitted. Value enum:
     * "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Positive, negative, or neutral assessment. Always present on a rating. Value enum:
     * "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
});
/** A response containing `FeedbackReport` data. */
export type FeedbackReportResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Feedback submitted about
     * the developer experience.
     */
    "data": FeedbackReport;
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
 * The client that submits a feedback report, with its name, platform, version, and schema version.
 */
export type FeedbackReportingClient = {
    /**
     * Name of the submitting tool. Required when reporting_client is present. Limited to 64
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 64.
     */
    "name": string;
    /**
     * Platform on which the submitting client runs. Value enum: "macos", "linux", "windows",
     * "ios", "android", "web", "other".
     */
    "platform"?: "macos" | "linux" | "windows" | "ios" | "android" | "web" | "other" | (string & {});
    /**
     * Feedback schema version used by the submitting tool. Limited to 64 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 64.
     */
    "schema_version"?: string;
    /**
     * Version of the submitting tool. Limited to 64 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 64.
     */
    "version"?: string;
};
/**
 * The client that submits a feedback report, with its name, platform, version, and schema version.
 */
export type FeedbackReportingClientRequestInput = {
    /**
     * Name of the submitting tool. Required when reporting_client is present. Limited to 64
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 64.
     */
    "name": string;
    /**
     * Platform on which the submitting client runs. Value enum: "macos", "linux", "windows",
     * "ios", "android", "web", "other".
     */
    "platform"?: "macos" | "linux" | "windows" | "ios" | "android" | "web" | "other";
    /**
     * Feedback schema version used by the submitting tool. Limited to 64 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 64.
     */
    "schema_version"?: string;
    /**
     * Version of the submitting tool. Limited to 64 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 64.
     */
    "version"?: string;
};
export type FeedbackReportsCreateParams = (CreateFeedbackReportRequestInput);
export type FeedbackReportsGetParams = {};
export type FeedbackReportsListParams = CheckoutSessionsListCustomerVerificationsParams;
/**
 * An image uploaded to Flint. Create the file, PUT its bytes to upload.url with upload.headers,
 * then complete it. Attach a ready file with images[].file_id on a catalog resource or file_id in
 * a branding image field. A ready unattached file expires after 24 hours; attachment removes that
 * deadline. Each upload has its own file_id, including uploads of identical bytes.
 */
export type File = {
    /**
     * The stored image media type when ready; the declared upload media type otherwise. Value
     * enum: "image/jpeg", "image/png", "image/webp".
     */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /** When the upload was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When this file expires if it stays in its current status. While awaiting_upload, equals
     * upload.expires_at. While ready and unattached, 24 hours after processing or 7 days after its
     * last detachment. Omitted while attached and in every other status. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * A safe failure category, present only when failed. Unknown processing causes use
     * processing_failed. Value enum: "image_unsupported", "image_too_large", "processing_failed".
     */
    "failure_code"?: "image_unsupported" | "image_too_large" | "processing_failed" | (string & {});
    /**
     * The file's stable Flint ID. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id": string;
    /** The stored image height in pixels, present only when ready. Format: int32. */
    "height"?: number;
    /**
     * What the image is used for. Set when the file is created. Value enum: "product",
     * "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo",
     * "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon"
        | (string & {});
    /** The stored image size when ready; the declared upload size otherwise. Format: int64. */
    "size_bytes": number;
    /**
     * Where the file is in its lifecycle. Only a `ready` file can be attached. Value enum:
     * "awaiting_upload", "processing", "ready", "failed", "expired".
     */
    "status": "awaiting_upload" | "processing" | "ready" | "failed" | "expired" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. complete is offered while awaiting_upload or processing
     * and remains accepted for completed files, returning the completed file. It can remain
     * available after an attachment deadline expires until Flint removes the stored file. An
     * in-progress completion can still return a transient refusal. [] enum: "complete". []
     * (Value): string. Value enum: "complete".
     */
    "supported_actions": Array<"complete" | (string & {})>;
    /**
     * Present only in the create response while awaiting_upload. GET never returns upload
     * credentials. PUT bytes before upload.expires_at, then complete the file. The signed upload
     * target for a file: the URL, HTTP method, headers to send, and when the URL expires.
     */
    "upload"?: FileUpload;
    /**
     * The canonical image URL, present when ready. Attach the file with images[].file_id, or copy
     * this URL into source_url on another resource. Format: uri. Example:
     * "https://example.com/receipt".
     */
    "url"?: string;
    /** The stored image width in pixels, present only when ready. Format: int32. */
    "width"?: number;
};
/** A response containing `File` data. */
export type FileResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An image uploaded to
     * Flint. Create the file, PUT its bytes to upload.url with upload.headers, then complete it.
     * Attach a ready file with images[].file_id on a catalog resource or file_id in a branding
     * image field. A ready unattached file expires after 24 hours; attachment removes that
     * deadline. Each upload has its own file_id, including uploads of identical bytes.
     */
    "data": File;
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
 * The signed upload target for a file: the URL, HTTP method, headers to send, and when the URL
 * expires.
 */
export type FileUpload = {
    /**
     * When the signed upload URL expires, 15 minutes after creation. Create a new file if it
     * expires. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /** Headers to send verbatim with the upload. * (Value): string. */
    "headers": Record<string, string>;
    /** HTTP method to upload the bytes with. Value enum: "PUT". */
    "method": "PUT" | (string & {});
    /**
     * A signed upload target. Send the bytes with method and headers verbatim; keep the URL out of
     * logs. Format: uri. Example: "https://example.com/receipt".
     */
    "url": string;
};
export type FilesCompleteParams = (InputValue<{}> | {})
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
export type FilesCreateParams = (InputValue<CreateFileRequestInput>)
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
export type FilesGetParams = DisputesAcceptParams;
/** A notice that a payment may be fraudulent. */
export type FraudWarning = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Present only when `expand` includes `dispute`; `null` when expanded and there is no related
     * dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment. anyOf[2]
     * (Value): null.
     */
    "dispute"?: ((Dispute) | (null));
    /**
     * The dispute that opened on this payment after the warning. `null` when no dispute has
     * opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string | null;
    /**
     * The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other".
     */
    "fraud_type": "card_never_received"
        | "fraudulent_card_application"
        | "made_with_counterfeit_card"
        | "made_with_lost_card"
        | "made_with_stolen_card"
        | "unauthorized_use_of_card"
        | "other"
        | (string & {});
    /**
     * Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W".
     */
    "fraud_warning_id": string;
    /**
     * true until the payment is refunded in full, a dispute opens on it, or the card network marks
     * the warning resolved; after that it stays false. A partial refund doesn't change it.
     */
    "is_actionable": boolean;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * The payment's amount, buyer email, and card, for recognizing it. Payment details shown on a
     * public fraud warning: amount, buyer email, card brand, and last four digits.
     */
    "payment_summary": FraudWarningPaymentSummary;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "reported_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type FraudWarningCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "dispute"?: ((Dispute) | (null));
            "dispute_id": string | null;
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            "fraud_warning_id": string;
            "is_actionable": boolean;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_summary": FraudWarningPaymentSummary;
            "reported_at": string;
            "updated_at": string;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fraud_warning.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "dispute"?: ((Dispute) | (null));
            "dispute_id": string | null;
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            "fraud_warning_id": string;
            "is_actionable": boolean;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_summary": FraudWarningPaymentSummary;
            "reported_at": string;
            "updated_at": string;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fraud_warning.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fraud_warning.created";
});
/**
 * The `fraud_warning.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FraudWarningCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.dispute (Optional): {@link Dispute} or
     * null. Present only when `expand` includes `dispute`; `null` when expanded and there is no
     * related dispute. object.dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a
     * collected payment. object.dispute.anyOf[2] (Value): null. object.dispute_id (Required):
     * string or null. The dispute that opened on this payment after the warning. `null` when no
     * dispute has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". object.fraud_type (Required):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other". object.fraud_warning_id
     * (Required): string. Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.is_actionable (Required): boolean. true until the
     * payment is refunded in full, a dispute opens on it, or the card network marks the warning
     * resolved; after that it stays false. A partial refund doesn't change it.
     * object.payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. object.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_summary (Required): {@link FraudWarningPaymentSummary}. The payment's amount,
     * buyer email, and card, for recognizing it. Payment details shown on a public fraud warning:
     * amount, buyer email, card brand, and last four digits. object.reported_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dispute (Optional): {@link Dispute} or null. Present only when
         * `expand` includes `dispute`; `null` when expanded and there is no related dispute.
         * dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment.
         * dispute.anyOf[2] (Value): null. dispute_id (Required): string or null. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". fraud_type (Required): string. The kind of fraud the
         * card network reported. Value enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_warning_id (Required): string. Unique
         * identifier for this fraud warning, prefixed `frw_`. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". is_actionable (Required): boolean. true until the
         * payment is refunded in full, a dispute opens on it, or the card network marks the
         * warning resolved; after that it stays false. A partial refund doesn't change it.
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment the warning is about. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_summary (Required): {@link
         * FraudWarningPaymentSummary}. The payment's amount, buyer email, and card, for
         * recognizing it. Payment details shown on a public fraud warning: amount, buyer email,
         * card brand, and last four digits. reported_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected
             * payment. anyOf[2] (Value): null.
             */
            "dispute"?: ((Dispute) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
             */
            "dispute_id": string | null;
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other".
             */
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id": string;
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it.
             */
            "is_actionable": boolean;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * The payment's amount, buyer email, and card, for recognizing it. Payment details
             * shown on a public fraud warning: amount, buyer email, card brand, and last four
             * digits.
             */
            "payment_summary": FraudWarningPaymentSummary;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "reported_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created";
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
 * The `fraud_warning.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FraudWarningCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.dispute (Optional): {@link Dispute} or
     * null. Present only when `expand` includes `dispute`; `null` when expanded and there is no
     * related dispute. object.dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a
     * collected payment. object.dispute.anyOf[2] (Value): null. object.dispute_id (Required):
     * string or null. The dispute that opened on this payment after the warning. `null` when no
     * dispute has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". object.fraud_type (Required):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other". object.fraud_warning_id
     * (Required): string. Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.is_actionable (Required): boolean. true until the
     * payment is refunded in full, a dispute opens on it, or the card network marks the warning
     * resolved; after that it stays false. A partial refund doesn't change it.
     * object.payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. object.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_summary (Required): {@link FraudWarningPaymentSummary}. The payment's amount,
     * buyer email, and card, for recognizing it. Payment details shown on a public fraud warning:
     * amount, buyer email, card brand, and last four digits. object.reported_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dispute (Optional): {@link Dispute} or null. Present only when
         * `expand` includes `dispute`; `null` when expanded and there is no related dispute.
         * dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment.
         * dispute.anyOf[2] (Value): null. dispute_id (Required): string or null. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". fraud_type (Required): string. The kind of fraud the
         * card network reported. Value enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_warning_id (Required): string. Unique
         * identifier for this fraud warning, prefixed `frw_`. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". is_actionable (Required): boolean. true until the
         * payment is refunded in full, a dispute opens on it, or the card network marks the
         * warning resolved; after that it stays false. A partial refund doesn't change it.
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment the warning is about. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_summary (Required): {@link
         * FraudWarningPaymentSummary}. The payment's amount, buyer email, and card, for
         * recognizing it. Payment details shown on a public fraud warning: amount, buyer email,
         * card brand, and last four digits. reported_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected
             * payment. anyOf[2] (Value): null.
             */
            "dispute"?: ((Dispute) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
             */
            "dispute_id": string | null;
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other".
             */
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id": string;
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it.
             */
            "is_actionable": boolean;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * The payment's amount, buyer email, and card, for recognizing it. Payment details
             * shown on a public fraud warning: amount, buyer email, card brand, and last four
             * digits.
             */
            "payment_summary": FraudWarningPaymentSummary;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "reported_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created";
});
/** A page of `FraudWarning` objects. */
export type FraudWarningListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * FraudWarning}. A notice that a payment may be fraudulent.
     */
    "data": Array<FraudWarning>;
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
 * Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four
 * digits.
 */
export type FraudWarningPaymentSummary = {
    /**
     * The payment amount. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /** Email address the buyer gave for the payment. */
    "email": string;
    /** Last four digits of the card. */
    "last4": string;
    /**
     * The card network. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay",
     * "visa", "unknown".
     */
    "payment_method_brand": "amex"
        | "discover"
        | "diners"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "visa"
        | "unknown"
        | (string & {});
};
