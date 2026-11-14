import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-24.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { PaymentRefund } from './types-47.js';
import type { Refund, RefundAdjustmentAudit, RefundAdjustmentAuditInput } from './types-52.js';
import type { CategoryReference } from './types-5.js';
import type { SelectedProductOption } from './types-59.js';
import type { ResponseMeta } from './types-54.js';
import type { OrderGiftCardAllocation } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreateRefundRequestInput } from './types-12.js';
import type { UpdateRefundRequestInput } from './types-68.js';
import type { GetReturnResolutionResponse } from './types-26.js';
/**
 * The reason recorded for a refund line item adjustment, as a `code` with an optional description.
 */
export type RefundAdjustmentReason = {
    /**
     * Why the adjustment was made. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other"
        | (string & {});
    /** Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. */
    "description"?: string;
};
/** The reason to record for a refund adjustment, as a `code` with an optional description. */
export type RefundAdjustmentReasonRequestInput = {
    /**
     * Why the adjustment was made. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other";
    /**
     * Note explaining the reason, up to 1,024 characters. Required when `code` is `other`.
     * minLength: 1.
     */
    "description"?: string;
};
/** An order charge to refund when creating a refund, with an optional amount to refund. */
export type RefundCharge = {
    /**
     * Amount to refund from this charge. Omit it to refund the charge's full remaining amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * ID of the order charge to refund. minLength: 1. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
};
/** An order charge to refund when creating a refund, with an optional amount to refund. */
export type RefundChargeInput = {
    /**
     * Amount to refund from this charge. Omit it to refund the charge's full remaining amount.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * ID of the order charge to refund. minLength: 1. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
};
export type RefundCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "refund.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "refund.created";
});
/**
 * The `refund.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "refund.created". */
    "event_type"?: "refund.created";
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
 * The `refund.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "refund.created". */
    "event_type"?: "refund.created";
});
/**
 * Default refund destinations for payment intent and gift card redemption allocations planned by
 * Flint. Each tender type defaults to original when omitted.
 */
export type RefundDestinations = {
    /**
     * Where gift card redemption value is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards, including when the original is closed or cannot accept
     * the full credit. Default: "original". Value enum: "original", "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card" | (string & {});
    /**
     * Default destination for every payment intent allocation Flint plans for this refund.
     * original returns value to the payment; new_gift_card issues store credit on new Flint gift
     * cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or
     * Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other
     * payment options, non-USD payments, and payments without an order return INVALID_REQUEST with
     * a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card
     * redemption destinations are unaffected by the payment restrictions. Default: "original".
     * Value enum: "original", "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card" | (string & {});
};
/**
 * Default refund destinations for payment intent and gift card redemption allocations planned by
 * Flint. Each tender type defaults to original when omitted.
 */
export type RefundDestinationsInput = {
    /**
     * Where gift card redemption value is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards, including when the original is closed or cannot accept
     * the full credit. Default: "original". Value enum: "original", "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card";
    /**
     * Default destination for every payment intent allocation Flint plans for this refund.
     * original returns value to the payment; new_gift_card issues store credit on new Flint gift
     * cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or
     * Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other
     * payment options, non-USD payments, and payments without an order return INVALID_REQUEST with
     * a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card
     * redemption destinations are unaffected by the payment restrictions. Default: "original".
     * Value enum: "original", "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card";
};
export type RefundFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "refund.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "refund.failed";
});
/**
 * The `refund.failed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type RefundFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "refund.failed". */
    "event_type"?: "refund.failed";
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
 * The `refund.failed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "refund.failed". */
    "event_type"?: "refund.failed";
});
/**
 * The code of a gift card issued by a refund, returned once in the refund result with its
 * `gift_card_id`.
 */
export type RefundGiftCardCode = {
    /**
     * Code that redeems the new gift card. Only the create response and a replay of it within 24
     * hours carry codes, so store it securely.
     */
    "code": string;
    /** ID of the gift card the code belongs to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
};
/**
 * An order line item to refund, with the quantity or amount, tax handling, and any adjustments
 * such as a restocking fee.
 */
export type RefundLineItem = {
    /**
     * Amounts to refund back against adjustments withheld by earlier refunds of this line. Each
     * uses the adjustment's remaining value, not the line's again. [] (Value): {@link
     * RefundLineItemAdjustmentRefundIn}. An amount to refund back against an earlier line item
     * adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundIn>;
    /**
     * Amount to refund for this line before `refund_adjustments`. Send `quantity` or
     * `amount_money`, not both. With neither, Flint refunds what remains of the line. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * ID of the order line item to refund. minLength: 1. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * Amounts to withhold from this line's refund, such as a restocking fee. Together they must be
     * less than the amount the line would otherwise refund. [] (Value): {@link
     * RefundLineItemAdjustmentIn}. An adjustment to apply to a refunded line item, such as a
     * restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentIn>;
    /**
     * Who made the adjustment and where it came from, kept for your audit trail. Required when
     * `tax_refund_mode` is `explicit`, and not allowed otherwise. Who made a manual tax adjustment
     * on a refund line item and where it came from, for audit purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAudit;
    /**
     * Why you are refunding less tax than calculated. Required when `tax_refund_mode` is
     * `explicit`, and not allowed otherwise. The reason to record for a refund adjustment, as a
     * `code` with an optional description.
     */
    "tax_adjustment_reason"?: RefundAdjustmentReason;
    /**
     * Tax to refund for each jurisdiction on the line. Required with `tax_refund_mode` `explicit`
     * when the line has jurisdiction breakdowns. [] (Value): {@link RefundTaxBreakdownRefundIn}.
     * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
     * refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Tax to refund for this line. Required when `tax_refund_mode` is `explicit`, and not allowed
     * otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money"?: MoneyValue;
    /**
     * Whether Flint calculates the tax refunded (`automatic`, the default) or you set it with
     * `tax_money` (`explicit`). Value enum: "automatic", "explicit".
     */
    "tax_refund_mode"?: "automatic" | "explicit" | (string & {});
};
/** An adjustment on a refunded line item, such as a restocking fee. */
export type RefundLineItemAdjustment = {
    /**
     * What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Amount withheld from the line's refund. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Why the amount was withheld. The reason recorded for a refund line item adjustment, as a
     * `code` with an optional description.
     */
    "reason": RefundAdjustmentReason;
    /**
     * Unique identifier for this refund line item adjustment, prefixed `rlia_`. Example:
     * "rlia_01KEZF7C00GA968004EWM2QQBC".
     */
    "refund_line_item_adjustment_id": string;
    /**
     * Part of the withheld amount that later refunds have returned. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Part of the withheld amount that can still be refunded: `amount_money` less
     * `refunded_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "remaining_money": MoneyValue;
};
/**
 * An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and
 * whether it applies to the gross amount or tax.
 */
export type RefundLineItemAdjustmentIn = {
    /**
     * What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Amount to withhold from the line's refund. Above zero, in the refund's currency. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Why the amount is withheld. The reason to record for a refund adjustment, as a `code` with
     * an optional description.
     */
    "reason": RefundAdjustmentReason;
};
/**
 * An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and
 * whether it applies to the gross amount or tax.
 */
export type RefundLineItemAdjustmentInInput = {
    /**
     * What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment";
    /**
     * Amount to withhold from the line's refund. Above zero, in the refund's currency. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax";
    /**
     * Why the amount is withheld. The reason to record for a refund adjustment, as a `code` with
     * an optional description.
     */
    "reason": RefundAdjustmentReasonRequestInput;
};
/** An amount refunded back against an earlier line item adjustment. */
export type RefundLineItemAdjustmentRefund = {
    /**
     * Amount refunded back against the adjustment. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of the adjustment this amount was refunded against. Example:
     * "rlia_01KEZF7C00GA968004EWM2QQBC".
     */
    "original_refund_line_item_adjustment_id": string;
    /**
     * Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example:
     * "rliar_01KEZF7C003HSYWXKXGJVRAKZD".
     */
    "refund_line_item_adjustment_refund_id": string;
};
/**
 * An amount to refund back against an earlier line item adjustment, identified by
 * `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundIn = {
    /**
     * Amount to refund back. Above zero and at most the adjustment's `remaining_money`. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * ID of an adjustment withheld by an earlier refund of this line, from
     * `adjustments[].refund_line_item_adjustment_id`. minLength: 1. Example:
     * "rlia_01KEZF7C00GA968004EWM2QQBC".
     */
    "refund_line_item_adjustment_id": string;
};
/**
 * An amount to refund back against an earlier line item adjustment, identified by
 * `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundInInput = {
    /**
     * Amount to refund back. Above zero and at most the adjustment's `remaining_money`. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * ID of an adjustment withheld by an earlier refund of this line, from
     * `adjustments[].refund_line_item_adjustment_id`. minLength: 1. Example:
     * "rlia_01KEZF7C00GA968004EWM2QQBC".
     */
    "refund_line_item_adjustment_id": string;
};
/**
 * How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and
 * modifier allocations.
 */
export type RefundLineItemAllocation = {
    /**
     * Amounts refunded back against adjustments withheld by earlier refunds of this line. []
     * (Value): {@link RefundLineItemAdjustmentRefund}. An amount refunded back against an earlier
     * line item adjustment.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefund>;
    /**
     * Amounts withheld from this line's refund, such as a restocking fee. [] (Value): {@link
     * RefundLineItemAdjustment}. An adjustment on a refunded line item, such as a restocking fee.
     */
    "adjustments"?: Array<RefundLineItemAdjustment>;
    /**
     * What Flint calculated for the refunded portion of the line before adjustments. The subtotal,
     * discount, tax, and total Flint calculated automatically for a refunded line item.
     */
    "automatic_refund": RefundLineItemAutomaticRefund;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Catalog categories of the item. [] (Value): {@link CategoryReference}. A reference to a
     * product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     * The part of the refund that applies to each modifier on the line. [] (Value): {@link
     * RefundLineItemModifierAllocation}. The part of a line item refund that applies to one
     * modifier, by quantity or amount.
     */
    "modifiers"?: Array<RefundLineItemModifierAllocation>;
    /**
     * ID of the order that owns the refunded line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the order line item this allocation refunded. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * ID of the catalog product the line was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Amount refunded for this line: the automatic refund less adjustments, plus any refunds back
     * against earlier adjustments. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Whether the line was sold as a catalog `variant` or a `bundle`. Value enum: "variant",
     * "bundle".
     */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Tax reversed for each jurisdiction on this line. [] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Value
     * enum: "automatic", "explicit".
     */
    "tax_refund_mode": "automatic" | "explicit" | (string & {});
    /**
     * ID of the catalog variant the line was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/**
 * The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.
 */
export type RefundLineItemAutomaticRefund = {
    /**
     * Discount allocated to the refunded portion. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Price of the refunded portion before discounts. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the refunded portion. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * What the refunded portion comes to before adjustments. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/**
 * An order line item to refund, with the quantity or amount, tax handling, and any adjustments
 * such as a restocking fee.
 */
export type RefundLineItemInput = {
    /**
     * Amounts to refund back against adjustments withheld by earlier refunds of this line. Each
     * uses the adjustment's remaining value, not the line's again. [] (Value): {@link
     * RefundLineItemAdjustmentRefundInInput}. An amount to refund back against an earlier line
     * item adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundInInput>;
    /**
     * Amount to refund for this line before `refund_adjustments`. Send `quantity` or
     * `amount_money`, not both. With neither, Flint refunds what remains of the line. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * ID of the order line item to refund. minLength: 1. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * Amounts to withhold from this line's refund, such as a restocking fee. Together they must be
     * less than the amount the line would otherwise refund. [] (Value): {@link
     * RefundLineItemAdjustmentInInput}. An adjustment to apply to a refunded line item, such as a
     * restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentInInput>;
    /**
     * Who made the adjustment and where it came from, kept for your audit trail. Required when
     * `tax_refund_mode` is `explicit`, and not allowed otherwise. Who made a manual tax adjustment
     * on a refund line item and where it came from, for audit purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAuditInput;
    /**
     * Why you are refunding less tax than calculated. Required when `tax_refund_mode` is
     * `explicit`, and not allowed otherwise. The reason to record for a refund adjustment, as a
     * `code` with an optional description.
     */
    "tax_adjustment_reason"?: RefundAdjustmentReasonRequestInput;
    /**
     * Tax to refund for each jurisdiction on the line. Required with `tax_refund_mode` `explicit`
     * when the line has jurisdiction breakdowns. [] (Value): {@link
     * RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Tax to refund for this line. Required when `tax_refund_mode` is `explicit`, and not allowed
     * otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money"?: MoneyValueInput;
    /**
     * Whether Flint calculates the tax refunded (`automatic`, the default) or you set it with
     * `tax_money` (`explicit`). Value enum: "automatic", "explicit".
     */
    "tax_refund_mode"?: "automatic" | "explicit";
};
/** The part of a line item refund that applies to one modifier, by quantity or amount. */
export type RefundLineItemModifierAllocation = {
    /**
     * Whether the line item was refunded by quantity or by amount. Value enum: "quantity",
     * "amount".
     */
    "allocation_basis": "quantity" | "amount" | (string & {});
    /**
     * Part of the line's refund that applies to this modifier. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Name of the modifier group the modifier belongs to. */
    "modifier_group_name": string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /**
     * ID of the modifier on the order line item that this part of the refund applies to. Example:
     * "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Unique identifier for this modifier's share of the refund, prefixed rlima_. Example:
     * "rlima_01KEZF7C00SRZH0NHAKJB05NEM".
     */
    "refund_line_item_modifier_allocation_id": string;
    /** Whether this selection appears in fulfillment details, recorded when selected. */
    "show_on_fulfillment": boolean;
    /** Whether this selection appears on buyer receipts, recorded when selected. */
    "show_on_receipt": boolean;
    /**
     * Whether the selection is a catalog list modifier or buyer-entered text. Value enum:
     * "catalog_modifier", "text".
     */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /** Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
};
/** A page of `Refund` objects. */
export type RefundListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Refund}. Money returned against a collected payment.
     */
    "data": Array<Refund>;
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
export type RefundPartiallySucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.partially_succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "refund.partially_succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "refund.partially_succeeded";
});
/**
 * The `refund.partially_succeeded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type RefundPartiallySucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "refund.partially_succeeded". */
    "event_type"?: "refund.partially_succeeded";
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
 * The `refund.partially_succeeded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type RefundPartiallySucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "refund.partially_succeeded". */
    "event_type"?: "refund.partially_succeeded";
});
/** A response containing `Refund` data. */
export type RefundResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Money returned against a
     * collected payment.
     */
    "data": Refund;
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
export type RefundSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "refund.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "refund.succeeded";
});
/**
 * The `refund.succeeded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded";
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
 * The `refund.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type RefundSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded";
});
/** The tax refunded for one tax breakdown on an order. */
export type RefundTaxBreakdownRefund = {
    /**
     * ID of the order charge whose tax this reverses. Present only in the refund's top-level
     * `tax_breakdown_refunds`. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * ID of the order that owns this tax breakdown and its line item or charge, when present.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the tax breakdown (one jurisdiction's tax) this entry reverses. Example:
     * "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * Tax reversed for this breakdown. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
};
/**
 * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
 * refunds explicitly.
 */
export type RefundTaxBreakdownRefundIn = {
    /**
     * ID of the tax breakdown (one jurisdiction's tax) to refund. minLength: 1. Example:
     * "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * Tax to refund for this breakdown. Used when you set the tax refund yourself. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
};
/**
 * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
 * refunds explicitly.
 */
export type RefundTaxBreakdownRefundInInput = {
    /**
     * ID of the tax breakdown (one jurisdiction's tax) to refund. minLength: 1. Example:
     * "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * Tax to refund for this breakdown. Used when you set the tax refund yourself. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValueInput;
};
/** One tender's share of a refund, listed in the refund's tender allocations. */
export type RefundTenderAllocation = {
    /**
     * Amount of the refund that went to this tender, including `refunded_tip_money`. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The gift cards that received this allocation's value, with the amount each received. Absent
     * when the value went back to a payment. [] (Value): {@link OrderGiftCardAllocation}. A gift
     * card that received part of a refund, with the amount credited.
     */
    "destination_cards"?: Array<OrderGiftCardAllocation>;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned cannot be retried through Flint;
     * the store must arrange repayment outside Flint. Fix the cause, then create a new refund with
     * a new idempotency key. Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "refund_abandoned"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * The gift card whose redemption this allocation refunded. Present when `tender_type` is
     * `gift_card_redemption`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id"?: string;
    /**
     * The gift card redemption this allocation refunded. Present when `tender_type` is
     * `gift_card_redemption`. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id"?: string;
    /**
     * The payment this allocation refunded. Present when `tender_type` is `payment_intent`.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Unique identifier for this tender allocation, prefixed `rta_`. Example:
     * "rta_01KEZF7C00KQJTFKK6C47RSMB8".
     */
    "refund_allocation_id": string;
    /**
     * Share of this allocation's `amount_money` that refunds tips. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * When this tender's `status` first became `succeeded`. Gift card credit and store credit
     * (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent`
     * tender with `destination` `original` has the same value as its `payment_refunds` entry;
     * store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on
     * the rows for this tender. Present only while `status` is `succeeded`. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /**
     * Which kind of original tender this allocation refunded. Value enum: "payment_intent",
     * "gift_card_redemption".
     */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
};
/** The `gift_card_redemption` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputGiftCardRedemption = ({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id": string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /** Which kind of original tender to refund. Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption" | (string & {});
})
    & (({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * currency (Optional): any. Uses ISO 4217 currency codes. Value enum: "USD".
     */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Uses ISO 4217 currency codes. Value enum: "USD". */
        "currency"?: unknown;
    });
    /** Which kind of original tender to refund. Value enum: "gift_card_redemption". */
    "tender_type"?: unknown;
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id": string;
}));
/** The `gift_card_redemption` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputGiftCardRedemptionInput = ({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id": string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /** Which kind of original tender to refund. Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption";
})
    & (({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * currency (Optional): any. Uses ISO 4217 currency codes. Value enum: "USD".
     */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Uses ISO 4217 currency codes. Value enum: "USD". */
        "currency"?: ("USD") & ("USD");
    });
    /** Which kind of original tender to refund. Value enum: "gift_card_redemption". */
    "tender_type"?: ("gift_card_redemption") & ("gift_card_redemption");
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/** The `payment_intent` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputPaymentIntent = ({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /** Which kind of original tender to refund. Value enum: "payment_intent". */
    "tender_type": "payment_intent" | (string & {});
})
    & (({
    /** Which kind of original tender to refund. Value enum: "payment_intent". */
    "tender_type"?: unknown;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
}));
/** The `payment_intent` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputPaymentIntentInput = ({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /** Which kind of original tender to refund. Value enum: "payment_intent". */
    "tender_type": "payment_intent";
})
    & (({
    /** Which kind of original tender to refund. Value enum: "payment_intent". */
    "tender_type"?: ("payment_intent") & ("payment_intent");
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
})
    & ({
    "gift_card_redemption_id"?: never;
}));
/**
 * Where part of a refund goes: back to a payment intent or to a gift card redemption, with the
 * amount.
 */
export type RefundTenderAllocationRequest = ({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Which kind of original tender to refund. Value enum: "payment_intent",
     * "gift_card_redemption".
     */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntent & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemption & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Where part of a refund goes: back to a payment intent or to a gift card redemption, with the
 * amount.
 */
export type RefundTenderAllocationRequestInput = ({
    /**
     * Amount to refund to this tender. Above zero. For a gift card redemption it is in USD.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Which kind of original tender to refund. Value enum: "payment_intent",
     * "gift_card_redemption".
     */
    "tender_type": "payment_intent" | "gift_card_redemption";
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntentInput & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemptionInput & object, readonly unknown[]>));
/**
 * Details of a gift card purchase refunded before the card was issued, including the amounts
 * recovered.
 */
export type RefundUnissuedGiftCardRecovery = {
    /** The order the gift card was sold on. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * The gift card line item the cash paid for. Name it in a `line_items` entry of the new
     * refund. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * The payment the returned cash belongs to. Name it in the new refund. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * ID of the gift card purchase refund allocation whose cash came back after it failed.
     * Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA".
     */
    "purchase_refund_allocation_id": string;
    /**
     * Cash that came back and funded no gift card. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "returned_amount_money": MoneyValue;
    /**
     * ID of the settlement allocation this entry draws on. Entries that share one describe the
     * same pool, so their amounts aren't additive. Example: "opsa_01KEZF7C00MB3NB1V0AM09SX8T".
     */
    "settlement_allocation_id": string;
    /**
     * Cash on the whole settlement allocation that pending refunds hold. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "source_pending_amount_money": MoneyValue;
    /**
     * Cash left on the whole settlement allocation, including cash that pending refunds hold.
     * Subtract `source_pending_amount_money` to find what you can refund now. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "source_remaining_amount_money": MoneyValue;
};
export type RefundUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "refund.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "created_at": string;
            "credit_note_id"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            "idempotency_key"?: string;
            "initiated_by": "merchant" | "flint" | (string & {});
            "invoice_id"?: string;
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_edit_id"?: string;
            "order_id"?: string;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id"?: string;
            "payment_refunds"?: Array<PaymentRefund>;
            "payment_review_id"?: string;
            "pending_reason": "manual_review" | null | (string & {}) | null;
            "processed_by": "flint" | "merchant" | (string & {});
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            "reason_message"?: string;
            "refund_id": string;
            "refund_platform_fee": boolean;
            "refund_reference"?: string;
            "refunded_at"?: string;
            "refunded_tip_money": MoneyValue;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            "tender_allocations"?: Array<RefundTenderAllocation>;
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Refund>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "refund.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "refund.updated";
});
/**
 * The `refund.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "refund.updated". */
    "event_type"?: "refund.updated";
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
 * The `refund.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Total refunded across
     * all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.credit_note_id
     * (Optional): string. ID of the credit note this refund paid out. Present only on refunds
     * issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. ID of the customer on the refunded order or payment.
     * Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_reason
     * (Optional): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again, except a refund with reason payment_returned that
     * failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
     * refund. A payment_returned refund that failed with refund_abandoned cannot be retried
     * through Flint; the store must arrange repayment outside Flint. Fix the cause, then create a
     * new refund with a new idempotency key. Unknown provider values are returned as
     * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "refund_abandoned", "payment_refund_failed",
     * "payment_refund_not_attempted", "refund_failed". object.idempotency_key (Optional): string.
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * object.initiated_by (Required): string. Who decided to make this refund: `merchant` for you
     * or your integration, `flint` for a refund Flint made on its own to return a payment it
     * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked.
     * Read-only. Value enum: "merchant", "flint". object.invoice_id (Optional): string. ID of the
     * invoice whose credit note this refund paid out. Present only on refunds issued through a
     * credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_item_allocations
     * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each order
     * line item it covered, with quantity, tax, and adjustments. object.line_item_allocations[]
     * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations. object.merchant_id
     * (Required): string. ID of the merchant this resource belongs to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_edit_id (Optional): string. ID of the
     * paid-order edit that created this refund. Present only on refunds issued through an order
     * edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". object.order_id (Optional): string. ID of
     * the order the refund was issued against. For a refund with `reason` `payment_returned`, the
     * order the returned payment was for; the order never received this money. Absent for a refund
     * of a payment that has no order, and for a standalone gift card refund. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Optional): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_refunds (Optional): Array of {@link
     * PaymentRefund}. The part of the refund returned through each payment, with its own status.
     * Absent when the refund was all gift card credit or store credit. object.payment_refunds[]
     * (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with the
     * amount, tip, status, and any failure reason. object.payment_review_id (Optional): string. ID
     * of the payment review whose decline created this refund. Present only on refunds issued for
     * a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.pending_reason
     * (Required): string or null. Why a pending refund is waiting. `null` when `status` isn't
     * `pending`, or when the refund is on its way without review. Value enum: "manual_review",
     * null. object.processed_by (Required): string. Who moved or is moving the money for this
     * refund. Flint processes refunds through a processor or a gift card; merchant means the
     * merchant returned the money outside Flint and recorded it here. Existing refunds are
     * processed by Flint. Value enum: "flint", "merchant". object.reason (Required): string or
     * null. Why the refund was issued. It never changes how the money moves. The buyer's refund
     * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null. object.reason_message
     * (Optional): string. Note explaining the refund, up to 1,024 characters. object.refund_id
     * (Required): string. Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_platform_fee (Required): boolean. Whether
     * the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     * object.refund_reference (Optional): string. The merchant's opaque check, wire, or other
     * reference for money returned outside Flint, preserved exactly. Present only when
     * processed_by is merchant and a reference was supplied. external_reference_id is the
     * merchant's own refund ID. minLength: 1. maxLength: 255. object.refunded_at (Optional):
     * string. When the merchant reports that the money was returned outside Flint. Present only
     * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refunded_tip_money (Required): {@link MoneyValue}. Share of `amount_money` that
     * refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.return_id (Optional): string. ID of the return this refund paid out. Present
     * only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. ID of the return resolution that issued this
     * refund. Present only on refunds issued by a return. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.status (Required): string. Summary of
     * payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". object.succeeded_at (Optional): string. When `status` first
     * became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when
     * the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a
     * refund Flint processes, it's when Flint recorded the outcome; with `processed_by`
     * `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for
     * every other status, including `partially_succeeded` and a refund that failed after it
     * succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.tax_breakdown_refunds (Optional): Array of {@link
     * RefundTaxBreakdownRefund}. Tax reversed on order-level charges and flat taxes, one entry per
     * tax breakdown. Tax reversed on line items is in
     * `line_item_allocations[].tax_breakdown_refunds`. object.tax_breakdown_refunds[] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * object.tender_allocations (Optional): Array of {@link RefundTenderAllocation}. Every tender
     * the refund drew from, payment or gift card, with its amount, tip share, status, and
     * destination. object.tender_allocations[] (Value): {@link RefundTenderAllocation}. One
     * tender's share of a refund, listed in the refund's tender allocations.
     * object.unissued_gift_card_recoveries (Optional): Array of {@link
     * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase refund
     * failed. Return it through a new refund against payment_intent_id and order_line_item_id. It
     * does not issue another card. Source remaining and pending amounts describe the entire
     * original settlement allocation; repeated entries for that source are not additive.
     * object.unissued_gift_card_recoveries[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Total refunded across all tenders,
         * including `refunded_tip_money`. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". credit_note_id (Optional): string. ID of the
         * credit note this refund paid out. Present only on refunds issued through a credit note.
         * Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. ID of the customer on the refunded order or payment. Absent when
         * neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". failure_reason (Optional): string. Why a
         * refund failed or a payment refund was canceled. Failed and canceled amounts become
         * refundable again, except a refund with reason payment_returned that failed with
         * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
         * payment_returned refund that failed with refund_abandoned cannot be retried through
         * Flint; the store must arrange repayment outside Flint. Fix the cause, then create a new
         * refund with a new idempotency key. Unknown provider values are returned as
         * refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
         * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
         * "payment_disputed", "refund_abandoned", "payment_refund_failed",
         * "payment_refund_not_attempted", "refund_failed". idempotency_key (Optional): string. The
         * caller's Idempotency-Key when this refund was created, including refunds created by
         * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
         * initiated_by (Required): string. Who decided to make this refund: `merchant` for you or
         * your integration, `flint` for a refund Flint made on its own to return a payment it
         * couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential
         * asked. Read-only. Value enum: "merchant", "flint". invoice_id (Optional): string. ID of
         * the invoice whose credit note this refund paid out. Present only on refunds issued
         * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_item_allocations
         * (Optional): Array of {@link RefundLineItemAllocation}. How the refund applied to each
         * order line item it covered, with quantity, tax, and adjustments. line_item_allocations[]
         * (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
         * quantity, refunded amount, tax, adjustments, and modifier allocations. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `order`; `null` when expanded and there is no related order. order.anyOf[1] (Value):
         * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
         * refund status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_edit_id (Optional): string. ID of the paid-order
         * edit that created this refund. Present only on refunds issued through an order edit.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id (Optional): string. ID of the order
         * the refund was issued against. For a refund with `reason` `payment_returned`, the order
         * the returned payment was for; the order never received this money. Absent for a refund
         * of a payment that has no order, and for a standalone gift card refund. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string. ID of the payment the refund was issued against, when it targeted
         * one payment. `payment_refunds` lists every payment it returned money through. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_refunds (Optional): Array of {@link
         * PaymentRefund}. The part of the refund returned through each payment, with its own
         * status. Absent when the refund was all gift card credit or store credit.
         * payment_refunds[] (Value): {@link PaymentRefund}. The part of a refund returned through
         * one payment, with the amount, tip, status, and any failure reason. payment_review_id
         * (Optional): string. ID of the payment review whose decline created this refund. Present
         * only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * pending_reason (Required): string or null. Why a pending refund is waiting. `null` when
         * `status` isn't `pending`, or when the refund is on its way without review. Value enum:
         * "manual_review", null. processed_by (Required): string. Who moved or is moving the money
         * for this refund. Flint processes refunds through a processor or a gift card; merchant
         * means the merchant returned the money outside Flint and recorded it here. Existing
         * refunds are processed by Flint. Value enum: "flint", "merchant". reason (Required):
         * string or null. Why the refund was issued. It never changes how the money moves. The
         * buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`,
         * `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`,
         * `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets
         * `payment_returned`, and it can't be sent in requests. `null` when no reason was
         * recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock", "payment_returned", null. reason_message (Optional): string.
         * Note explaining the refund, up to 1,024 characters. refund_id (Required): string. Unique
         * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_platform_fee (Required): boolean. Whether the request asked to return the
         * platform fee on the payments this refund refunds (refund_platform_fee). Each payment
         * refund's refunded_platform_fee_money is what it returns. refund_reference (Optional):
         * string. The merchant's opaque check, wire, or other reference for money returned outside
         * Flint, preserved exactly. Present only when processed_by is merchant and a reference was
         * supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
         * maxLength: 255. refunded_at (Optional): string. When the merchant reports that the money
         * was returned outside Flint. Present only when processed_by is merchant. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refunded_tip_money (Required): {@link
         * MoneyValue}. Share of `amount_money` that refunds tips. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. return_id (Optional): string. ID of
         * the return this refund paid out. Present only on refunds issued by a return. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional): string. ID of the
         * return resolution that issued this refund. Present only on refunds issued by a return.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". status (Required): string. Summary of
         * payment_refunds and tender_allocations. Only failed is final: succeeded and
         * partially_succeeded can still change when a bank rejects a refund after accepting it. A
         * refund Flint made to return a payment it couldn't accept goes from succeeded back to
         * pending, with pending_reason manual_review, when a bank reverses it. Follow
         * refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or
         * refund.failed when its outcome changes, and refund.updated for other changes. Value
         * enum: "pending", "succeeded", "partially_succeeded", "failed". succeeded_at (Optional):
         * string. When `status` first became `succeeded`. For a refund with `payment_refunds` or
         * `tender_allocations`, it's when the last of them first succeeded, so it equals the
         * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded
         * the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
         * `status` is `succeeded`; absent for every other status, including `partially_succeeded`
         * and a refund that failed after it succeeded. A refund that succeeds again shows its
         * first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * tax_breakdown_refunds (Optional): Array of {@link RefundTaxBreakdownRefund}. Tax
         * reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
         * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`.
         * tax_breakdown_refunds[] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for
         * one tax breakdown on an order. tender_allocations (Optional): Array of {@link
         * RefundTenderAllocation}. Every tender the refund drew from, payment or gift card, with
         * its amount, tip share, status, and destination. tender_allocations[] (Value): {@link
         * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
         * allocations. unissued_gift_card_recoveries (Optional): Array of {@link
         * RefundUnissuedGiftCardRecovery}. Cash returned after an unissued gift card purchase
         * refund failed. Return it through a new refund against payment_intent_id and
         * order_line_item_id. It does not issue another card. Source remaining and pending amounts
         * describe the entire original settlement allocation; repeated entries for that source are
         * not additive. unissued_gift_card_recoveries[] (Value): {@link
         * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the
         * card was issued, including the amounts recovered. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the credit note this refund paid out. Present only on refunds issued through a
             * credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
             */
            "credit_note_id"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer on the refunded order or payment. Absent when neither has one.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Why a refund failed or a payment refund was canceled. Failed and canceled amounts
             * become refundable again, except a refund with reason payment_returned that failed
             * with payment_disputed: the buyer won a dispute on the charge, so nothing is left to
             * refund. A payment_returned refund that failed with refund_abandoned cannot be
             * retried through Flint; the store must arrange repayment outside Flint. Fix the
             * cause, then create a new refund with a new idempotency key. Unknown provider values
             * are returned as refund_failed. Value enum: "expired_or_canceled_card",
             * "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance",
             * "declined", "merchant_request", "payment_disputed", "refund_abandoned",
             * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
             */
            "failure_reason"?: "expired_or_canceled_card"
                | "lost_or_stolen_card"
                | "insufficient_funds"
                | "insufficient_available_balance"
                | "declined"
                | "merchant_request"
                | "payment_disputed"
                | "refund_abandoned"
                | "payment_refund_failed"
                | "payment_refund_not_attempted"
                | "refund_failed"
                | (string & {});
            /**
             * The caller's Idempotency-Key when this refund was created, including refunds created
             * by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost
             * response.
             */
            "idempotency_key"?: string;
            /**
             * Who decided to make this refund: `merchant` for you or your integration, `flint` for
             * a refund Flint made on its own to return a payment it couldn't accept. Unlike a
             * Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value
             * enum: "merchant", "flint".
             */
            "initiated_by": "merchant" | "flint" | (string & {});
            /**
             * ID of the invoice whose credit note this refund paid out. Present only on refunds
             * issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * How the refund applied to each order line item it covered, with quantity, tax, and
             * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to
             * one order line item: quantity, refunded amount, tax, adjustments, and modifier
             * allocations.
             */
            "line_item_allocations"?: Array<RefundLineItemAllocation>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the paid-order edit that created this refund. Present only on refunds issued
             * through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
             */
            "order_edit_id"?: string;
            /**
             * ID of the order the refund was issued against. For a refund with `reason`
             * `payment_returned`, the order the returned payment was for; the order never received
             * this money. Absent for a refund of a payment that has no order, and for a standalone
             * gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
             * ID of the payment the refund was issued against, when it targeted one payment.
             * `payment_refunds` lists every payment it returned money through. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_id"?: string;
            /**
             * The part of the refund returned through each payment, with its own status. Absent
             * when the refund was all gift card credit or store credit. [] (Value): {@link
             * PaymentRefund}. The part of a refund returned through one payment, with the amount,
             * tip, status, and any failure reason.
             */
            "payment_refunds"?: Array<PaymentRefund>;
            /**
             * ID of the payment review whose decline created this refund. Present only on refunds
             * issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id"?: string;
            /**
             * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the
             * refund is on its way without review. Value enum: "manual_review", null.
             */
            "pending_reason": "manual_review" | null | (string & {}) | null;
            /**
             * Who moved or is moving the money for this refund. Flint processes refunds through a
             * processor or a gift card; merchant means the merchant returned the money outside
             * Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
             * "flint", "merchant".
             */
            "processed_by": "flint" | "merchant" | (string & {});
            /**
             * Why the refund was issued. It never changes how the money moves. The buyer's refund
             * receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
             * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
             * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it
             * can't be sent in requests. `null` when no reason was recorded. Value enum:
             * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
             * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
             * "customer_changed_mind", "better_price_found", "accidental_order", "other",
             * "out_of_stock", "payment_returned", null.
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
                | "out_of_stock"
                | "payment_returned"
                | null
                | (string & {})
                | null;
            /** Note explaining the refund, up to 1,024 characters. */
            "reason_message"?: string;
            /**
             * Unique identifier for this refund, prefixed `ref_`. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string;
            /**
             * Whether the request asked to return the platform fee on the payments this refund
             * refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is
             * what it returns.
             */
            "refund_platform_fee": boolean;
            /**
             * The merchant's opaque check, wire, or other reference for money returned outside
             * Flint, preserved exactly. Present only when processed_by is merchant and a reference
             * was supplied. external_reference_id is the merchant's own refund ID. minLength: 1.
             * maxLength: 255.
             */
            "refund_reference"?: string;
            /**
             * When the merchant reports that the money was returned outside Flint. Present only
             * when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refunded_at"?: string;
            /**
             * Share of `amount_money` that refunds tips. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "refunded_tip_money": MoneyValue;
            /**
             * ID of the return this refund paid out. Present only on refunds issued by a return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * ID of the return resolution that issued this refund. Present only on refunds issued
             * by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded
             * and partially_succeeded can still change when a bank rejects a refund after
             * accepting it. A refund Flint made to return a payment it couldn't accept goes from
             * succeeded back to pending, with pending_reason manual_review, when a bank reverses
             * it. Follow refund.created when it is accepted, refund.succeeded,
             * refund.partially_succeeded, or refund.failed when its outcome changes, and
             * refund.updated for other changes. Value enum: "pending", "succeeded",
             * "partially_succeeded", "failed".
             */
            "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
            /**
             * When `status` first became `succeeded`. For a refund with `payment_refunds` or
             * `tender_allocations`, it's when the last of them first succeeded, so it equals the
             * latest `succeeded_at` among them. For a refund Flint processes, it's when Flint
             * recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`.
             * Present only while `status` is `succeeded`; absent for every other status, including
             * `partially_succeeded` and a refund that failed after it succeeded. A refund that
             * succeeds again shows its first success time. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "succeeded_at"?: string;
            /**
             * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
             * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. []
             * (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on
             * an order.
             */
            "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
            /**
             * Every tender the refund drew from, payment or gift card, with its amount, tip share,
             * status, and destination. [] (Value): {@link RefundTenderAllocation}. One tender's
             * share of a refund, listed in the refund's tender allocations.
             */
            "tender_allocations"?: Array<RefundTenderAllocation>;
            /**
             * Cash returned after an unissued gift card purchase refund failed. Return it through
             * a new refund against payment_intent_id and order_line_item_id. It does not issue
             * another card. Source remaining and pending amounts describe the entire original
             * settlement allocation; repeated entries for that source are not additive. []
             * (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
             * refunded before the card was issued, including the amounts recovered.
             */
            "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Refund>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "refund.updated". */
    "event_type"?: "refund.updated";
});
/**
 * A refund with newly issued gift card codes available during the command recovery window. Money
 * returned against a collected payment.
 */
export type RefundWithGiftCardCodes = ({
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
     *  anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * ID of the customer on the refunded order or payment. Absent when neither has one. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned cannot be retried through Flint;
     * the store must arrange repayment outside Flint. Fix the cause, then create a new refund with
     * a new idempotency key. Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "refund_abandoned"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * New gift card codes recovered only within 24 hours of the original command and only while
     * each code remains current. Omitted after the recovery window and never returned by ordinary
     * refund reads or events. [] (Value): {@link RefundGiftCardCode}. The code of a gift card
     * issued by a refund, returned once in the refund result with its `gift_card_id`.
     */
    "gift_card_codes"?: Array<RefundGiftCardCode>;
    /**
     * The caller's Idempotency-Key when this refund was created, including refunds created by
     * issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     */
    "idempotency_key"?: string;
    /**
     * Who decided to make this refund: `merchant` for you or your integration, `flint` for a
     * refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's
     * `initiated_by`, it doesn't say which credential asked. Read-only. Value enum: "merchant",
     * "flint".
     */
    "initiated_by": "merchant" | "flint" | (string & {});
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
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     *  anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the paid-order edit that created this refund. Present only on refunds issued through
     * an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id"?: string;
    /**
     * ID of the order the refund was issued against. For a refund with `reason`
     * `payment_returned`, the order the returned payment was for; the order never received this
     * money. Absent for a refund of a payment that has no order, and for a standalone gift card
     * refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     *  anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     * anyOf[2] (Value): null.
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
     * ID of the payment review whose decline created this refund. Present only on refunds issued
     * for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id"?: string;
    /**
     * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is
     * on its way without review. Value enum: "manual_review", null.
     */
    "pending_reason": "manual_review" | null | (string & {}) | null;
    /**
     * Who moved or is moving the money for this refund. Flint processes refunds through a
     * processor or a gift card; merchant means the merchant returned the money outside Flint and
     * recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant".
     */
    "processed_by": "flint" | "merchant" | (string & {});
    /**
     * Why the refund was issued. It never changes how the money moves. The buyer's refund receipt
     * shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null.
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
        | "out_of_stock"
        | "payment_returned"
        | null
        | (string & {})
        | null;
    /** Note explaining the refund, up to 1,024 characters. */
    "reason_message"?: string;
    /** Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
    "refund_id": string;
    /**
     * Whether the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     */
    "refund_platform_fee": boolean;
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
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
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
    /**
     * Cash returned after an unissued gift card purchase refund failed. Return it through a new
     * refund against payment_intent_id and order_line_item_id. It does not issue another card.
     * Source remaining and pending amounts describe the entire original settlement allocation;
     * repeated entries for that source are not additive. [] (Value): {@link
     * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the card
     * was issued, including the amounts recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
})
    & (Exclude<Refund & object, readonly unknown[]>)
    & ({
    /**
     * New gift card codes recovered only within 24 hours of the original command and only while
     * each code remains current. Omitted after the recovery window and never returned by ordinary
     * refund reads or events. [] (Value): {@link RefundGiftCardCode}. The code of a gift card
     * issued by a refund, returned once in the refund result with its `gift_card_id`.
     */
    "gift_card_codes"?: Array<RefundGiftCardCode>;
});
export type RefundsCreateParams = (CreateRefundRequestInput)
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
export type RefundsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent, payment_refunds.payment_intent. Expansion requires commerce.refunds.read
     * plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per
     * request. To-many expansions are capped at 20 related objects per path. [] enum: "customer",
     * "order", "payment_intent", "payment_refunds.payment_intent". Value enum: "customer",
     * "order", "payment_intent", "payment_refunds.payment_intent". anyOf[1] (Value): Array of
     * string. [] enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent".
     * anyOf[1][] (Value): string. Value enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent". anyOf[2] (Value): string. Value enum: "customer", "order",
     * "payment_intent", "payment_refunds.payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent" | "payment_refunds.payment_intent")
        | readonly ("customer" | "order" | "payment_intent" | "payment_refunds.payment_intent")[]>;
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
export type RefundsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
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
     * Filter by order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by payment intent ID. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Filter by customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by refund status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "succeeded", "partially_succeeded", "failed". Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[1][]
     * (Value): string. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * anyOf[2] (Value): string. Value enum: "pending", "succeeded", "partially_succeeded",
     * "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "partially_succeeded" | "failed")
        | readonly ("pending" | "succeeded" | "partially_succeeded" | "failed")[]>;
    /**
     * Filter by refund reasons. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock",
     * "payment_returned". Value enum: "duplicate", "fraudulent", "requested_by_customer",
     * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
     * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
     * "other", "out_of_stock", "payment_returned". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock",
     * "payment_returned". anyOf[1][] (Value): string. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned". anyOf[2] (Value): string.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock",
     * "payment_returned".
     */
    "reason"?: InputValue<("duplicate"
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
        | "payment_returned")
        | readonly ("duplicate"
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
        | "payment_returned")[]>;
    /**
     * Inclusive lower bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Exact match on the credit note whose credit was refunded. Unknown or other-merchant IDs
     * return an empty page. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: InputValue<string>;
    /**
     * Filter by linked Return ID. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by linked ReturnResolution ID. pattern: ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Search across refund_id, external_reference_id, and reason_message. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by refund_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type RefundsUpdateParams = (InputValue<UpdateRefundRequestInput>)
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
 * Releases a merchant hold and restores the previous fulfillment status. An active payment hold
 * must lift first. Schedules and progress timestamps are preserved and no buyer notification is
 * sent.
 */
export type ReleaseFulfillmentHoldRequest = {
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/**
 * Releases a merchant hold and restores the previous fulfillment status. An active payment hold
 * must lift first. Schedules and progress timestamps are preserved and no buyer notification is
 * sent.
 */
export type ReleaseFulfillmentHoldRequestInput = {
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/**
 * Releases held or committed quantity back to available stock, for example when the buyer leaves
 * or you cancel after payment.
 */
export type ReleaseInventoryReservationRequest = {
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Reservation lines this action changes, each with a cumulative target. 1 to 100 lines.
     * minItems: 1. maxItems: 100. [] (Value): object and Alternative shapes (see declared
     * variants). [].inventory_reservation_line_id (Required): string. Reservation line this action
     * changes. minLength: 1. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5".
     * [].target_released_from_committed_quantity (Optional): integer. Cumulative whole-number
     * quantity that should have reached this target. Format: int64. minimum: 0.
     * [].target_released_from_held_quantity (Optional): integer. Cumulative whole-number quantity
     * that should have reached this target. Format: int64. minimum: 0. [].anyOf[1] (Value): any.
     * [].anyOf[2] (Value): any.
     */
    "lines": Array<({
        /**
         * Reservation line this action changes. minLength: 1. Example:
         * "invrln_01KEZF7C002JCDA729XDSNWGY5".
         */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity"?: number;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity"?: number;
    })
        & (({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity": number;
    })
        | ({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity": number;
    })
        | (Record<string, unknown>))>;
};
/**
 * Releases held or committed quantity back to available stock, for example when the buyer leaves
 * or you cancel after payment.
 */
export type ReleaseInventoryReservationRequestInput = {
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Reservation lines this action changes, each with a cumulative target. 1 to 100 lines.
     * minItems: 1. maxItems: 100. [] (Value): object and Alternative shapes (see declared
     * variants). [].inventory_reservation_line_id (Required): string. Reservation line this action
     * changes. minLength: 1. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5".
     * [].target_released_from_committed_quantity (Optional): integer. Cumulative whole-number
     * quantity that should have reached this target. Format: int64. minimum: 0.
     * [].target_released_from_held_quantity (Optional): integer. Cumulative whole-number quantity
     * that should have reached this target. Format: int64. minimum: 0. [].anyOf[1] (Value): any.
     * [].anyOf[2] (Value): any.
     */
    "lines": Array<({
        /**
         * Reservation line this action changes. minLength: 1. Example:
         * "invrln_01KEZF7C002JCDA729XDSNWGY5".
         */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity"?: number;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity"?: number;
    })
        & (({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity": number;
    })
        | ({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity": number;
    }))>;
};
/** The request body for: Release return resolution. */
export type ReleaseReturnResolutionRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the resolution is being released. Value enum: "merchant_approved", "exception_resolved",
     * "other".
     */
    "reason": "merchant_approved" | "exception_resolved" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Release return resolution. */
export type ReleaseReturnResolutionRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the resolution is being released. Value enum: "merchant_approved", "exception_resolved",
     * "other".
     */
    "reason": "merchant_approved" | "exception_resolved" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type ReleaseReturnResolutionResponse = GetReturnResolutionResponse;
/**
 * An email remembered after a checkout code. This identity never opens saved cards; the buyer must
 * confirm another code. Ended identities are not found. Tokens work only at the business and in
 * the live or sandbox environment that received them.
 */
export type RememberedBuyer = {
    /**
     * Lookup only: how recognition would send a code at this checkout, without considering caps.
     * Null when the checkout cannot request a code or has nothing saved to open. Value enum:
     * "email", "sms", null.
     */
    "code_channel": "email" | "sms" | null | (string & {}) | null;
    /**
     * When the buyer was first remembered on this device. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Always masked to the first character and domain, such as m•••@gmail.com. */
    "email": string;
    /**
     * 90 days after the last confirmed code. Lookups and code requests do not renew it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * When a code was last confirmed on the device or requested from it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "last_used_at": string;
    /**
     * ID of the remembered identity. Token replacement keeps this ID. Example:
     * "rbuy_01KEZF7C006G3NNTKE2C2ZTVM0".
     */
    "remembered_buyer_id": string;
    /**
     * Contains revoke while the identity works; empty in a revoke response. [] enum: "revoke". []
     * (Value): string. Value enum: "revoke".
     */
    "supported_actions": Array<"revoke" | (string & {})>;
};
/** A response containing `RememberedBuyer` data. */
export type RememberedBuyerResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An email remembered
     * after a checkout code. This identity never opens saved cards; the buyer must confirm another
     * code. Ended identities are not found. Tokens work only at the business and in the live or
     * sandbox environment that received them.
     */
    "data": RememberedBuyer;
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
 * An identity token held by this checkout's backend. A token identifies the buyer and never
 * authorizes saved cards.
 */
export type RememberedBuyerTokenRequest = {
    /**
     * Token returned by a successful confirmation with remember_buyer. Send it only in the body.
     * minLength: 47. maxLength: 47. pattern: ^rbt_[A-Za-z0-9_-]{43}$.
     */
    "remembered_buyer_token": string;
};
/**
 * An identity token held by this checkout's backend. A token identifies the buyer and never
 * authorizes saved cards.
 */
export type RememberedBuyerTokenRequestInput = RememberedBuyerTokenRequest;
export type RememberedBuyersLookupParams = (InputValue<RememberedBuyerTokenRequestInput>);
export type RememberedBuyersRevokeParams = RememberedBuyersLookupParams;
