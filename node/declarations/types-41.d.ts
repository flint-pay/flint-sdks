import type { CheckoutBuyerContact } from './types-5.js';
import type { CustomFieldAnswer } from './types-15.js';
import type { DeferredPromotion, CustomerTaxExemptionCoverage, CustomerTaxExemptionCoverageRequestInput } from './types-16.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary,
    Fulfillment
} from './types-24.js';
import type { InventoryRoutingSource } from './types-30.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { Order, OrderAuthorizationAmounts, OrderCharge, OrderDeliveryDestination } from './types-39.js';
import type {
    OrderDeliverySummary,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderHandover,
    OrderLineItem
} from './types-40.js';
import type {
    PartnerWebhookEnvelope,
    PaymentCollection,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentErrorSummary
} from './types-44.js';
import type { PricingAmounts } from './types-49.js';
import type { SetupCollection, SettlementAmounts } from './types-59.js';
import type { TicketedEvent, Tip, TaxReverseCharge } from './types-65.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { PendingPaymentAction } from './types-48.js';
import type { ResponseMeta } from './types-54.js';
import type { ReaderPaymentSourceTip, ReaderPaymentSourceTipInput } from './types-52.js';
import type { DeliveryChargeTaxCalculationRequest } from './types-17.js';
import type { TaxBreakdown, TaxJurisdiction } from './types-64.js';
import type { Address } from './types-0.js';
export type OrderPartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "active_payment_review_id": string | null;
            "authorization_amounts"?: OrderAuthorizationAmounts;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_note"?: string;
            "charges": Array<OrderCharge>;
            "checkout_session_ids": Array<string>;
            "client_reference": string | null;
            "closed_at"?: string;
            "closed_reason"?: "invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {});
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "deferred_promotions": Array<DeferredPromotion>;
            "delivery"?: OrderDeliverySummary;
            "delivery_destination"?: OrderDeliveryDestination;
            "discounts": Array<OrderDiscount>;
            "dispute_status"?: "none"
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
            "external_reference_id"?: string;
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            "fulfillments": Array<Fulfillment>;
            "gift_card_estimate"?: OrderGiftCardEstimate;
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            "gift_card_tender_enabled": boolean;
            "gift_cards": Array<OrderGiftCardSelection>;
            "governing_delivery_selection_id": string | null;
            "handover"?: OrderHandover;
            "internal_note"?: string;
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            "inventory_exception_resolution_message"?: string;
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            "inventory_reservation_id"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "invoice_id": string | null;
            "line_items": Array<OrderLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order_id": string;
            "order_number"?: string;
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            "paid_at": string | null;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link_id"?: string;
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            "prepayment_order_id": string | null;
            "pricing_amounts": PricingAmounts;
            "refund_ids": Array<string>;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            "return_resolution_id"?: string;
            "settlement_amounts": OrderSettlementAmounts;
            "setup_collection"?: SetupCollection;
            "status": "open" | "closed" | (string & {});
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            "subscription_cycle"?: number;
            "subscription_delivery_changed_at"?: string;
            "subscription_delivery_number": number | null;
            "subscription_id"?: string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            "tax": OrderTax;
            "ticketed_event"?: TicketedEvent;
            "tips": Array<Tip>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Order>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "active_payment_review_id": string | null;
            "authorization_amounts"?: OrderAuthorizationAmounts;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_note"?: string;
            "charges": Array<OrderCharge>;
            "checkout_session_ids": Array<string>;
            "client_reference": string | null;
            "closed_at"?: string;
            "closed_reason"?: "invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {});
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "deferred_promotions": Array<DeferredPromotion>;
            "delivery"?: OrderDeliverySummary;
            "delivery_destination"?: OrderDeliveryDestination;
            "discounts": Array<OrderDiscount>;
            "dispute_status"?: "none"
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
            "external_reference_id"?: string;
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            "fulfillments": Array<Fulfillment>;
            "gift_card_estimate"?: OrderGiftCardEstimate;
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            "gift_card_tender_enabled": boolean;
            "gift_cards": Array<OrderGiftCardSelection>;
            "governing_delivery_selection_id": string | null;
            "handover"?: OrderHandover;
            "internal_note"?: string;
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            "inventory_exception_resolution_message"?: string;
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            "inventory_reservation_id"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "invoice_id": string | null;
            "line_items": Array<OrderLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order_id": string;
            "order_number"?: string;
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            "paid_at": string | null;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link_id"?: string;
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            "prepayment_order_id": string | null;
            "pricing_amounts": PricingAmounts;
            "refund_ids": Array<string>;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            "return_resolution_id"?: string;
            "settlement_amounts": OrderSettlementAmounts;
            "setup_collection"?: SetupCollection;
            "status": "open" | "closed" | (string & {});
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            "subscription_cycle"?: number;
            "subscription_delivery_changed_at"?: string;
            "subscription_delivery_number": number | null;
            "subscription_id"?: string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            "tax": OrderTax;
            "ticketed_event"?: TicketedEvent;
            "tips": Array<Tip>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Order>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.partially_paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.partially_paid";
});
/**
 * The `order.partially_paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderPartiallyPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
     * currently collecting this order. Omitted when no attempt is active or its collection surface
     * belongs to another caller. An attempt to pay an order. object.active_payment_review_id
     * (Required): string or null. The earliest open or resolving payment review on this order's
     * counted payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. The amounts authorized and still capturable on an order's payments, with the
     * authorization expiry. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer. Buyer contact
     * supplied with payment or saved during checkout. object.buyer_note (Optional): string. A note
     * to the buyer. object.charges (Required): Array of {@link OrderCharge}. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. object.charges[] (Value): {@link OrderCharge}. An additional charge applied to an
     * order. object.checkout_session_ids (Required): Array of string. IDs of the checkout sessions
     * opened for this order. object.checkout_session_ids[] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference (Required): string or null. The
     * reference the payment link URL or resolve request carried, such as your user ID. `null` when
     * none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255. object.closed_at (Optional):
     * string. When the order closed. Present exactly when status is closed. Set once at the
     * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_reason (Optional): string. Why the order closed. Present exactly when status
     * is closed. Set once at closure. Unrecognized reasons are returned as other; new values may
     * be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     * object.closed_reason_message (Optional): string. The caller note supplied when closing the
     * order. System closures leave it absent. It is not shown to the buyer. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_field_answers (Required): Array of {@link CustomFieldAnswer}. The buyer's
     * answers to the payment link's custom fields, recorded when checkout started, in the order
     * the link showed the fields. Each answer keeps the field's key, label, and type from that
     * moment, so later changes to the link don't change it. Optional fields the buyer left blank
     * are left out. Read-only. Empty when the order didn't come from a payment link, the link had
     * no custom fields, or the buyer answered none. Orders created before Flint recorded answers
     * here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`.
     * Deleting the customer removes the answers. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deferred_promotions (Required): Array of {@link DeferredPromotion}. Promotions
     * accepted at subscription signup. They attach when the subscription is provisioned and first
     * discount its first charged cycle. They do not discount this order and are separate from
     * discounts and order totals. Always present; empty when no promotions are deferred.
     * object.deferred_promotions[] (Value): {@link DeferredPromotion}. A promotion accepted at
     * subscription signup for the subscription's first charged cycle. It does not discount the
     * signup order. object.delivery (Optional): {@link OrderDeliverySummary}. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order. Method, type and
     * recipient of governing_delivery_selection_id. delivery_destination contains the resolved
     * address. These values describe the same selection. object.delivery_destination (Optional):
     * {@link OrderDeliveryDestination}. The shipment or local-delivery destination committed for
     * this order. Payment freezes this value; fulfillment recipient changes do not replace it.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. Where an order is delivered: the address, the recipient, and where the destination
     * came from. object.discounts (Required): Array of {@link OrderDiscount}. Discounts applied to
     * the order, each with its amount, status, and the line items and charges it covers.
     * object.discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion. object.dispute_status (Optional): string. Aggregate dispute state across the
     * order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_status
     * (Optional): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed". object.fulfillments (Required): Array of {@link Fulfillment}. Fulfillments created
     * for the order, each covering a set of its line items. object.fulfillments[] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items. object.gift_card_estimate
     * (Optional): {@link OrderGiftCardEstimate}. An estimate of how the order balance splits
     * between gift cards and the payment processor. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     * object.gift_card_settlements (Required): Array of {@link OrderGiftCardSettlement}. The gift
     * card redemptions applied to the order's payments. object.gift_card_settlements[] (Value):
     * {@link OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
     * the amount, tip, and gift card. object.gift_card_tender_enabled (Required): boolean. Whether
     * gift cards can pay for this order now. Gift cards pay only USD orders that still accept
     * changes, are not subscription purchases, and whose merchant has at least one gift card that
     * is not closed in this environment. Recomputed on each read; a spent but open card still
     * counts. object.gift_cards (Required): Array of {@link OrderGiftCardSelection}. Gift cards
     * available to pay the order, with each card's available balance. object.gift_cards[] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code. object.governing_delivery_selection_id
     * (Required): string or null. ID of the delivery selection that governs this order, including
     * pickup choices without a delivery destination: the checkout's provisional selection before
     * payment, and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.handover (Optional): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     * object.internal_note (Optional): string. A note for your team. Buyer reads leave it out.
     * object.inventory_exception_reason (Optional): string. Why inventory could not be committed
     * after payment. The cause remains after resolution. Omitted when no reason was recorded.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * object.inventory_exception_resolution_message (Optional): string. The merchant note supplied
     * when resolving the inventory exception. It is not shown to the buyer.
     * object.inventory_exception_status (Optional): string. Whether an inventory problem after
     * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * object.inventory_reservation_id (Optional): string. The reservation holding stock for this
     * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this
     * order's tracked demand is routed. Required before an order containing tracked variants can
     * hold stock. Where an order, payment link, or reservation routes inventory from: a fixed
     * Location, an inventory allocation policy, or one policy revision. object.invoice_id
     * (Required): string or null. The invoice associated with this order. Null when the order has
     * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_items (Required): Array of {@link
     * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
     * quantities. object.line_items[] (Value): {@link OrderLineItem}. An item purchased in an
     * order. object.merchant_id (Required): string. ID of the merchant this resource belongs to.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order_id
     * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string. Human-readable
     * order number for receipts and merchant reference. object.origin (Optional): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". object.paid_at (Required): string or null.
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.payment_collection (Optional): {@link
     * PaymentCollection}. Payment options and collection instructions for the order's outstanding
     * balance. Omitted when collection is unavailable to this caller. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Required): Array of string. IDs of the payment intents created to
     * collect this order. object.payment_intent_ids[] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.payment_link_id (Optional): string. Payment link
     * whose checkout created this order. Absent for orders that did not come from a payment link.
     * Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_status (Required): string. Collection
     * progress. An invoice write-off also completes collection without receiving the written-off
     * amount. Value enum: "unpaid", "partially_paid", "paid". object.prepayment_order_id
     * (Required): string or null. Order that paid for this prepaid delivery. Null when this is not
     * a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.pricing_amounts
     * (Required): {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges,
     * tax, requested tip, and total. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total. object.refund_ids (Required): Array of
     * string. IDs of the refunds that name this order. This includes refunds Flint makes to return
     * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. object.refund_ids[] (Value): string.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_status (Required): string. Refund
     * progress for collected money. Refunds with `reason` `payment_returned` return money the
     * order never received and don't count. Value enum: "none", "partially_refunded", "refunded".
     * object.return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. object.return_credit_settlements[]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from. object.return_resolution_id
     * (Optional): string. ID of the return resolution that created this order as a replacement.
     * Omitted for orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * object.settlement_amounts (Required): {@link OrderSettlementAmounts}. How much of the order
     * has been paid, refunded, credited, written off, and settled as tips, and what is still
     * outstanding. The bill settlement amounts plus order overpayments, settled tips, debt
     * discharged by final capture, and value order edits removed. Money collected, returned,
     * waived, and still owed on a bill. object.setup_collection (Optional): {@link
     * SetupCollection}. Instructions for saving a payment method for a subscription order. Omitted
     * when setup is unavailable. Client guidance for saving a payment method on the merchant's
     * connected account. object.status (Required): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed". object.subscription (Optional):
     * {@link ExpandedSubscriptionSummary} or null. Subscription summary included when `expand`
     * names `subscription`; `null` when expanded and this order does not bill a subscription.
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. object.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded.
     * object.subscription.anyOf[2] (Value): null. object.subscription_cycle (Optional): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * object.subscription_delivery_changed_at (Optional): string. Time the subscriber changed
     * delivery after this paid renewal was prepared. The order keeps its committed destination
     * until you correct it or refund and replace it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.subscription_delivery_number (Required): integer or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * object.subscription_id (Optional): string. ID of the subscription this order bills. Absent
     * on an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
     * summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. ID of the subscription plan this order
     * bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception".
     * object.supported_actions[] (Value): string. Value enum: "close", "pay",
     * "resolve_inventory_exception". object.tax (Required): {@link OrderTax}. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns. object.ticketed_event (Optional): {@link TicketedEvent}. Event and tickets this
     * order sold through an event payment link. Absent on other orders. Event details for a
     * ticketed order: name, location, start time, time zone, and the tickets issued. object.tips
     * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled, and
     * refunded amounts. A tip cleared before payment stays listed as canceled. object.tips[]
     * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded amounts,
     * status, and how it was paid. object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         * active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
         * currently collecting this order. Omitted when no attempt is active or its collection
         * surface belongs to another caller. An attempt to pay an order. active_payment_review_id
         * (Required): string or null. The earliest open or resolving payment review on this
         * order's counted payments. `null` when no review is open or resolving. List reviews with
         * GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". authorization_amounts (Optional): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. The amounts authorized and still capturable on an order's payments, with the
         * authorization expiry. buyer_contact (Optional): {@link CheckoutBuyerContact}. Email and
         * phone saved when payment started, from the pay request's buyer_contact or the paying
         * checkout session's saved contact. It does not change the linked customer. Buyer contact
         * supplied with payment or saved during checkout. buyer_note (Optional): string. A note to
         * the buyer. charges (Required): Array of {@link OrderCharge}. Charges added to the order,
         * such as delivery or service fees, each with its applied amount, tax, and refunded
         * amount. charges[] (Value): {@link OrderCharge}. An additional charge applied to an
         * order. checkout_session_ids (Required): Array of string. IDs of the checkout sessions
         * opened for this order. checkout_session_ids[] (Value): string. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". client_reference (Required): string or null. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. minLength: 1. maxLength: 255. closed_at
         * (Optional): string. When the order closed. Present exactly when status is closed. Set
         * once at the transition and never changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string. Why the order closed. Present
         * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "invoice_voided", "paid",
         * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason_message (Optional): string. The
         * caller note supplied when closing the order. System closures leave it absent. It is not
         * shown to the buyer. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * maxItems: 20. custom_field_answers[] (Value): {@link CustomFieldAnswer}. One answer to a
         * payment link custom field, with the field as it was when checkout started.
         * `custom_field_type` determines the type of `value`. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer this order belongs to.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". deferred_promotions (Required): Array of
         * {@link DeferredPromotion}. Promotions accepted at subscription signup. They attach when
         * the subscription is provisioned and first discount its first charged cycle. They do not
         * discount this order and are separate from discounts and order totals. Always present;
         * empty when no promotions are deferred. deferred_promotions[] (Value): {@link
         * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's
         * first charged cycle. It does not discount the signup order. delivery (Optional): {@link
         * OrderDeliverySummary}. Method, type and recipient of governing_delivery_selection_id.
         * The address remains in delivery_destination. Omitted when no shipment or local-delivery
         * selection governs the order. Method, type and recipient of
         * governing_delivery_selection_id. delivery_destination contains the resolved address.
         * These values describe the same selection. delivery_destination (Optional): {@link
         * OrderDeliveryDestination}. The shipment or local-delivery destination committed for this
         * order. Payment freezes this value; fulfillment recipient changes do not replace it.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. Where an order is delivered: the address, the recipient, and where the
         * destination came from. discounts (Required): Array of {@link OrderDiscount}. Discounts
         * applied to the order, each with its amount, status, and the line items and charges it
         * covers. discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with
         * its amount, status, and the line items and charges it covers. It comes from a manual
         * discount or a promotion. dispute_status (Optional): string. Aggregate dispute state
         * across the order's counted payment intents, excluding payment_returned. Always returned
         * to merchant credentials and omitted from buyer reads. Open states take precedence in
         * this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
         * other. Otherwise the most severe closed state wins: lost, won, prevented,
         * inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_status (Optional): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillments (Required): Array of
         * {@link Fulfillment}. Fulfillments created for the order, each covering a set of its line
         * items. fulfillments[] (Value): {@link Fulfillment}. Work required to deliver an order's
         * items. gift_card_estimate (Optional): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor. An estimate of
         * how an order total splits between gift cards and the payment processor, and whether gift
         * cards can pay it. gift_card_settlements (Required): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements[] (Value): {@link OrderGiftCardSettlement}. A gift card redemption
         * applied to an order payment, with the amount, tip, and gift card.
         * gift_card_tender_enabled (Required): boolean. Whether gift cards can pay for this order
         * now. Gift cards pay only USD orders that still accept changes, are not subscription
         * purchases, and whose merchant has at least one gift card that is not closed in this
         * environment. Recomputed on each read; a spent but open card still counts. gift_cards
         * (Required): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
         * order, with each card's available balance. gift_cards[] (Value): {@link
         * OrderGiftCardSelection}. A gift card available to pay an order, with its available
         * balance and the last four characters of its code. governing_delivery_selection_id
         * (Required): string or null. ID of the delivery selection that governs this order,
         * including pickup choices without a delivery destination: the checkout's provisional
         * selection before payment, and the selection a payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". handover (Optional): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. Every physical item is handed to the buyer at
         * this location when the order is paid. Replaces a delivery selection. internal_note
         * (Optional): string. A note for your team. Buyer reads leave it out.
         * inventory_exception_reason (Optional): string. Why inventory could not be committed
         * after payment. The cause remains after resolution. Omitted when no reason was recorded.
         * Unrecognized reasons are returned as other; new values may be added. Value enum:
         * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
         * "auto_refund_failed", "policy_resolution_failed", "other".
         * inventory_exception_resolution_message (Optional): string. The merchant note supplied
         * when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_status (Optional): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_reservation_id (Optional): string. The reservation holding stock for this
         * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this order's
         * tracked demand is routed. Required before an order containing tracked variants can hold
         * stock. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. invoice_id (Required):
         * string or null. The invoice associated with this order. Null when the order has no
         * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_items (Required): Array of {@link
         * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
         * quantities. line_items[] (Value): {@link OrderLineItem}. An item purchased in an order.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order_id
         * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable order
         * number for receipts and merchant reference. origin (Optional): string. How the order was
         * created. invoice means a Quick Pay invoice created the order; attaching an invoice to an
         * existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
         * "checkout", "api", "subscription", "invoice". paid_at (Required): string or null. When
         * `payment_status` became `paid`, including a final capture that releases the remaining
         * balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_collection
         * (Optional): {@link PaymentCollection}. Payment options and collection instructions for
         * the order's outstanding balance. Omitted when collection is unavailable to this caller.
         * Client-side details for collecting payment from the buyer, such as the Stripe settings
         * to initialize Stripe.js. payment_intent_ids (Required): Array of string. IDs of the
         * payment intents created to collect this order. payment_intent_ids[] (Value): string.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
         * `payment_intents`. payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_link_id (Optional): string. Payment link
         * whose checkout created this order. Absent for orders that did not come from a payment
         * link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_status (Required): string. Collection progress.
         * An invoice write-off also completes collection without receiving the written-off amount.
         * Value enum: "unpaid", "partially_paid", "paid". prepayment_order_id (Required): string
         * or null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". pricing_amounts (Required):
         * {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. The money totals for an order or invoice: subtotal, discounts,
         * charges, tax, requested tip, and total. refund_ids (Required): Array of string. IDs of
         * the refunds that name this order. This includes refunds Flint makes to return a payment
         * it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_status (Required): string. Refund progress for
         * collected money. Refunds with `reason` `payment_returned` return money the order never
         * received and don't count. Value enum: "none", "partially_refunded", "refunded".
         * return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
         * Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements[] (Value): {@link OrderReturnCreditSettlement}. A return
         * credit applied to an order payment, with the amount and the return and resolution it
         * came from. return_resolution_id (Optional): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". settlement_amounts (Required): {@link
         * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
         * written off, and settled as tips, and what is still outstanding. The bill settlement
         * amounts plus order overpayments, settled tips, debt discharged by final capture, and
         * value order edits removed. Money collected, returned, waived, and still owed on a bill.
         * setup_collection (Optional): {@link SetupCollection}. Instructions for saving a payment
         * method for a subscription order. Omitted when setup is unavailable. Client guidance for
         * saving a payment method on the merchant's connected account. status (Required): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". subscription (Optional): {@link ExpandedSubscriptionSummary} or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's
         * summary fields, including status, billing period, and next billing time, returned when
         * the subscription is expanded. subscription.anyOf[2] (Value): null. subscription_cycle
         * (Optional): integer. Charged subscription cycle associated with this order. Signup is
         * cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_delivery_changed_at (Optional): string. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_number (Required): integer or null.
         * Position of this delivery among the deliveries one charge paid for, starting at 2. Null
         * when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_id (Optional): string. ID of the subscription this order bills. Absent on
         * an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
         * summary included when `expand` names `subscription_plan`; `null` when expanded and this
         * order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. ID of the subscription plan this order bills.
         * Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions[] (Value): string. Value enum: "close",
         * "pay", "resolve_inventory_exception". tax (Required): {@link OrderTax}. The order's tax
         * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction
         * rows. An order's tax state, including its mode, price mode, status, location, exemption,
         * and tax breakdowns. ticketed_event (Optional): {@link TicketedEvent}. Event and tickets
         * this order sold through an event payment link. Absent on other orders. Event details for
         * a ticketed order: name, location, start time, time zone, and the tickets issued. tips
         * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled,
         * and refunded amounts. A tip cleared before payment stays listed as canceled. tips[]
         * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
         * amounts, status, and how it was paid. updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Order
         * version for optimistic concurrency. Send this value as the expected version when
         * changing the order. Increases with every change to the order. Ignore an order webhook
         * snapshot whose version is lower than one you have already applied. Format: int64.
         */
        "object": {
            /**
             * The payment attempt currently collecting this order. Omitted when no attempt is
             * active or its collection surface belongs to another caller. An attempt to pay an
             * order.
             */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "active_payment_review_id": string | null;
            /**
             * The amounts authorized and still capturable on the order's payments. The amounts
             * authorized and still capturable on an order's payments, with the authorization
             * expiry.
             */
            "authorization_amounts"?: OrderAuthorizationAmounts;
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * Buyer contact supplied with payment or saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /** A note to the buyer. */
            "buyer_note"?: string;
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional
             * charge applied to an order.
             */
            "charges": Array<OrderCharge>;
            /**
             * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_ids": Array<string>;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer.
             */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. [] (Value): {@link DeferredPromotion}. A promotion
             * accepted at subscription signup for the subscription's first charged cycle. It does
             * not discount the signup order.
             */
            "deferred_promotions": Array<DeferredPromotion>;
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. Method, type and recipient of governing_delivery_selection_id.
             * delivery_destination contains the resolved address. These values describe the same
             * selection.
             */
            "delivery"?: OrderDeliverySummary;
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. Where an
             * order is delivered: the address, the recipient, and where the destination came from.
             */
            "delivery_destination"?: OrderDeliveryDestination;
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. [] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion.
             */
            "discounts": Array<OrderDiscount>;
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
             * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "dispute_status"?: "none"
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed".
             */
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            /**
             * Fulfillments created for the order, each covering a set of its line items. []
             * (Value): {@link Fulfillment}. Work required to deliver an order's items.
             */
            "fulfillments": Array<Fulfillment>;
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. An estimate of how an order total splits between gift cards and the
             * payment processor, and whether gift cards can pay it.
             */
            "gift_card_estimate"?: OrderGiftCardEstimate;
            /**
             * The gift card redemptions applied to the order's payments. [] (Value): {@link
             * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
             * the amount, tip, and gift card.
             */
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts.
             */
            "gift_card_tender_enabled": boolean;
            /**
             * Gift cards available to pay the order, with each card's available balance. []
             * (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with
             * its available balance and the last four characters of its code.
             */
            "gift_cards": Array<OrderGiftCardSelection>;
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "governing_delivery_selection_id": string | null;
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. Every physical item is
             * handed to the buyer at this location when the order is paid. Replaces a delivery
             * selection.
             */
            "handover"?: OrderHandover;
            /** A note for your team. Buyer reads leave it out. */
            "internal_note"?: string;
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other".
             */
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer.
             */
            "inventory_exception_resolution_message"?: string;
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved".
             */
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            /**
             * The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id"?: string;
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string | null;
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities. []
             * (Value): {@link OrderLineItem}. An item purchased in an order.
             */
            "line_items": Array<OrderLineItem>;
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
             * Unique identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /** Human-readable order number for receipts and merchant reference. */
            "order_number"?: string;
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             */
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "paid_at": string | null;
            /**
             * Payment options and collection instructions for the order's outstanding balance.
             * Omitted when collection is unavailable to this caller. Client-side details for
             * collecting payment from the buyer, such as the Stripe settings to initialize
             * Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents created to collect this order. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             */
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "prepayment_order_id": string | null;
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. The money totals for an order or invoice: subtotal, discounts, charges, tax,
             * requested tip, and total.
             */
            "pricing_amounts": PricingAmounts;
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. [] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from.
             */
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. The bill settlement amounts plus order
             * overpayments, settled tips, debt discharged by final capture, and value order edits
             * removed. Money collected, returned, waived, and still owed on a bill.
             */
            "settlement_amounts": OrderSettlementAmounts;
            /**
             * Instructions for saving a payment method for a subscription order. Omitted when
             * setup is unavailable. Client guidance for saving a payment method on the merchant's
             * connected account.
             */
            "setup_collection"?: SetupCollection;
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed".
             */
            "status": "open" | "closed" | (string & {});
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary
             * fields, including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[2] (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             */
            "subscription_cycle"?: number;
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "subscription_delivery_changed_at"?: string;
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24.
             */
            "subscription_delivery_number": number | null;
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
             * subscription plan's summary fields, including name, billing interval, currency, and
             * status, returned when the plan is expanded. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. [] enum: "close", "pay",
             * "resolve_inventory_exception". [] (Value): string. Value enum: "close", "pay",
             * "resolve_inventory_exception".
             */
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
             * location, exemption, and tax breakdowns.
             */
            "tax": OrderTax;
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. Event details for a ticketed order: name, location, start time, time zone,
             * and the tickets issued.
             */
            "ticketed_event"?: TicketedEvent;
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on
             * an order, with its requested, settled, and refunded amounts, status, and how it was
             * paid.
             */
            "tips": Array<Tip>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. Format:
             * int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Order>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid";
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
 * The `order.partially_paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderPartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
     * currently collecting this order. Omitted when no attempt is active or its collection surface
     * belongs to another caller. An attempt to pay an order. object.active_payment_review_id
     * (Required): string or null. The earliest open or resolving payment review on this order's
     * counted payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. The amounts authorized and still capturable on an order's payments, with the
     * authorization expiry. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer. Buyer contact
     * supplied with payment or saved during checkout. object.buyer_note (Optional): string. A note
     * to the buyer. object.charges (Required): Array of {@link OrderCharge}. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. object.charges[] (Value): {@link OrderCharge}. An additional charge applied to an
     * order. object.checkout_session_ids (Required): Array of string. IDs of the checkout sessions
     * opened for this order. object.checkout_session_ids[] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference (Required): string or null. The
     * reference the payment link URL or resolve request carried, such as your user ID. `null` when
     * none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255. object.closed_at (Optional):
     * string. When the order closed. Present exactly when status is closed. Set once at the
     * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_reason (Optional): string. Why the order closed. Present exactly when status
     * is closed. Set once at closure. Unrecognized reasons are returned as other; new values may
     * be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     * object.closed_reason_message (Optional): string. The caller note supplied when closing the
     * order. System closures leave it absent. It is not shown to the buyer. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_field_answers (Required): Array of {@link CustomFieldAnswer}. The buyer's
     * answers to the payment link's custom fields, recorded when checkout started, in the order
     * the link showed the fields. Each answer keeps the field's key, label, and type from that
     * moment, so later changes to the link don't change it. Optional fields the buyer left blank
     * are left out. Read-only. Empty when the order didn't come from a payment link, the link had
     * no custom fields, or the buyer answered none. Orders created before Flint recorded answers
     * here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`.
     * Deleting the customer removes the answers. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deferred_promotions (Required): Array of {@link DeferredPromotion}. Promotions
     * accepted at subscription signup. They attach when the subscription is provisioned and first
     * discount its first charged cycle. They do not discount this order and are separate from
     * discounts and order totals. Always present; empty when no promotions are deferred.
     * object.deferred_promotions[] (Value): {@link DeferredPromotion}. A promotion accepted at
     * subscription signup for the subscription's first charged cycle. It does not discount the
     * signup order. object.delivery (Optional): {@link OrderDeliverySummary}. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order. Method, type and
     * recipient of governing_delivery_selection_id. delivery_destination contains the resolved
     * address. These values describe the same selection. object.delivery_destination (Optional):
     * {@link OrderDeliveryDestination}. The shipment or local-delivery destination committed for
     * this order. Payment freezes this value; fulfillment recipient changes do not replace it.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. Where an order is delivered: the address, the recipient, and where the destination
     * came from. object.discounts (Required): Array of {@link OrderDiscount}. Discounts applied to
     * the order, each with its amount, status, and the line items and charges it covers.
     * object.discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion. object.dispute_status (Optional): string. Aggregate dispute state across the
     * order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_status
     * (Optional): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed". object.fulfillments (Required): Array of {@link Fulfillment}. Fulfillments created
     * for the order, each covering a set of its line items. object.fulfillments[] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items. object.gift_card_estimate
     * (Optional): {@link OrderGiftCardEstimate}. An estimate of how the order balance splits
     * between gift cards and the payment processor. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     * object.gift_card_settlements (Required): Array of {@link OrderGiftCardSettlement}. The gift
     * card redemptions applied to the order's payments. object.gift_card_settlements[] (Value):
     * {@link OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
     * the amount, tip, and gift card. object.gift_card_tender_enabled (Required): boolean. Whether
     * gift cards can pay for this order now. Gift cards pay only USD orders that still accept
     * changes, are not subscription purchases, and whose merchant has at least one gift card that
     * is not closed in this environment. Recomputed on each read; a spent but open card still
     * counts. object.gift_cards (Required): Array of {@link OrderGiftCardSelection}. Gift cards
     * available to pay the order, with each card's available balance. object.gift_cards[] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code. object.governing_delivery_selection_id
     * (Required): string or null. ID of the delivery selection that governs this order, including
     * pickup choices without a delivery destination: the checkout's provisional selection before
     * payment, and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.handover (Optional): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     * object.internal_note (Optional): string. A note for your team. Buyer reads leave it out.
     * object.inventory_exception_reason (Optional): string. Why inventory could not be committed
     * after payment. The cause remains after resolution. Omitted when no reason was recorded.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * object.inventory_exception_resolution_message (Optional): string. The merchant note supplied
     * when resolving the inventory exception. It is not shown to the buyer.
     * object.inventory_exception_status (Optional): string. Whether an inventory problem after
     * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * object.inventory_reservation_id (Optional): string. The reservation holding stock for this
     * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this
     * order's tracked demand is routed. Required before an order containing tracked variants can
     * hold stock. Where an order, payment link, or reservation routes inventory from: a fixed
     * Location, an inventory allocation policy, or one policy revision. object.invoice_id
     * (Required): string or null. The invoice associated with this order. Null when the order has
     * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_items (Required): Array of {@link
     * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
     * quantities. object.line_items[] (Value): {@link OrderLineItem}. An item purchased in an
     * order. object.merchant_id (Required): string. ID of the merchant this resource belongs to.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order_id
     * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string. Human-readable
     * order number for receipts and merchant reference. object.origin (Optional): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". object.paid_at (Required): string or null.
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.payment_collection (Optional): {@link
     * PaymentCollection}. Payment options and collection instructions for the order's outstanding
     * balance. Omitted when collection is unavailable to this caller. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Required): Array of string. IDs of the payment intents created to
     * collect this order. object.payment_intent_ids[] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.payment_link_id (Optional): string. Payment link
     * whose checkout created this order. Absent for orders that did not come from a payment link.
     * Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_status (Required): string. Collection
     * progress. An invoice write-off also completes collection without receiving the written-off
     * amount. Value enum: "unpaid", "partially_paid", "paid". object.prepayment_order_id
     * (Required): string or null. Order that paid for this prepaid delivery. Null when this is not
     * a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.pricing_amounts
     * (Required): {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges,
     * tax, requested tip, and total. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total. object.refund_ids (Required): Array of
     * string. IDs of the refunds that name this order. This includes refunds Flint makes to return
     * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. object.refund_ids[] (Value): string.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_status (Required): string. Refund
     * progress for collected money. Refunds with `reason` `payment_returned` return money the
     * order never received and don't count. Value enum: "none", "partially_refunded", "refunded".
     * object.return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. object.return_credit_settlements[]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from. object.return_resolution_id
     * (Optional): string. ID of the return resolution that created this order as a replacement.
     * Omitted for orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * object.settlement_amounts (Required): {@link OrderSettlementAmounts}. How much of the order
     * has been paid, refunded, credited, written off, and settled as tips, and what is still
     * outstanding. The bill settlement amounts plus order overpayments, settled tips, debt
     * discharged by final capture, and value order edits removed. Money collected, returned,
     * waived, and still owed on a bill. object.setup_collection (Optional): {@link
     * SetupCollection}. Instructions for saving a payment method for a subscription order. Omitted
     * when setup is unavailable. Client guidance for saving a payment method on the merchant's
     * connected account. object.status (Required): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed". object.subscription (Optional):
     * {@link ExpandedSubscriptionSummary} or null. Subscription summary included when `expand`
     * names `subscription`; `null` when expanded and this order does not bill a subscription.
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. object.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded.
     * object.subscription.anyOf[2] (Value): null. object.subscription_cycle (Optional): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * object.subscription_delivery_changed_at (Optional): string. Time the subscriber changed
     * delivery after this paid renewal was prepared. The order keeps its committed destination
     * until you correct it or refund and replace it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.subscription_delivery_number (Required): integer or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * object.subscription_id (Optional): string. ID of the subscription this order bills. Absent
     * on an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
     * summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. ID of the subscription plan this order
     * bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception".
     * object.supported_actions[] (Value): string. Value enum: "close", "pay",
     * "resolve_inventory_exception". object.tax (Required): {@link OrderTax}. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns. object.ticketed_event (Optional): {@link TicketedEvent}. Event and tickets this
     * order sold through an event payment link. Absent on other orders. Event details for a
     * ticketed order: name, location, start time, time zone, and the tickets issued. object.tips
     * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled, and
     * refunded amounts. A tip cleared before payment stays listed as canceled. object.tips[]
     * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded amounts,
     * status, and how it was paid. object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         * active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
         * currently collecting this order. Omitted when no attempt is active or its collection
         * surface belongs to another caller. An attempt to pay an order. active_payment_review_id
         * (Required): string or null. The earliest open or resolving payment review on this
         * order's counted payments. `null` when no review is open or resolving. List reviews with
         * GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". authorization_amounts (Optional): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. The amounts authorized and still capturable on an order's payments, with the
         * authorization expiry. buyer_contact (Optional): {@link CheckoutBuyerContact}. Email and
         * phone saved when payment started, from the pay request's buyer_contact or the paying
         * checkout session's saved contact. It does not change the linked customer. Buyer contact
         * supplied with payment or saved during checkout. buyer_note (Optional): string. A note to
         * the buyer. charges (Required): Array of {@link OrderCharge}. Charges added to the order,
         * such as delivery or service fees, each with its applied amount, tax, and refunded
         * amount. charges[] (Value): {@link OrderCharge}. An additional charge applied to an
         * order. checkout_session_ids (Required): Array of string. IDs of the checkout sessions
         * opened for this order. checkout_session_ids[] (Value): string. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". client_reference (Required): string or null. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. minLength: 1. maxLength: 255. closed_at
         * (Optional): string. When the order closed. Present exactly when status is closed. Set
         * once at the transition and never changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string. Why the order closed. Present
         * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "invoice_voided", "paid",
         * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason_message (Optional): string. The
         * caller note supplied when closing the order. System closures leave it absent. It is not
         * shown to the buyer. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * maxItems: 20. custom_field_answers[] (Value): {@link CustomFieldAnswer}. One answer to a
         * payment link custom field, with the field as it was when checkout started.
         * `custom_field_type` determines the type of `value`. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer this order belongs to.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". deferred_promotions (Required): Array of
         * {@link DeferredPromotion}. Promotions accepted at subscription signup. They attach when
         * the subscription is provisioned and first discount its first charged cycle. They do not
         * discount this order and are separate from discounts and order totals. Always present;
         * empty when no promotions are deferred. deferred_promotions[] (Value): {@link
         * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's
         * first charged cycle. It does not discount the signup order. delivery (Optional): {@link
         * OrderDeliverySummary}. Method, type and recipient of governing_delivery_selection_id.
         * The address remains in delivery_destination. Omitted when no shipment or local-delivery
         * selection governs the order. Method, type and recipient of
         * governing_delivery_selection_id. delivery_destination contains the resolved address.
         * These values describe the same selection. delivery_destination (Optional): {@link
         * OrderDeliveryDestination}. The shipment or local-delivery destination committed for this
         * order. Payment freezes this value; fulfillment recipient changes do not replace it.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. Where an order is delivered: the address, the recipient, and where the
         * destination came from. discounts (Required): Array of {@link OrderDiscount}. Discounts
         * applied to the order, each with its amount, status, and the line items and charges it
         * covers. discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with
         * its amount, status, and the line items and charges it covers. It comes from a manual
         * discount or a promotion. dispute_status (Optional): string. Aggregate dispute state
         * across the order's counted payment intents, excluding payment_returned. Always returned
         * to merchant credentials and omitted from buyer reads. Open states take precedence in
         * this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
         * other. Otherwise the most severe closed state wins: lost, won, prevented,
         * inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_status (Optional): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillments (Required): Array of
         * {@link Fulfillment}. Fulfillments created for the order, each covering a set of its line
         * items. fulfillments[] (Value): {@link Fulfillment}. Work required to deliver an order's
         * items. gift_card_estimate (Optional): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor. An estimate of
         * how an order total splits between gift cards and the payment processor, and whether gift
         * cards can pay it. gift_card_settlements (Required): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements[] (Value): {@link OrderGiftCardSettlement}. A gift card redemption
         * applied to an order payment, with the amount, tip, and gift card.
         * gift_card_tender_enabled (Required): boolean. Whether gift cards can pay for this order
         * now. Gift cards pay only USD orders that still accept changes, are not subscription
         * purchases, and whose merchant has at least one gift card that is not closed in this
         * environment. Recomputed on each read; a spent but open card still counts. gift_cards
         * (Required): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
         * order, with each card's available balance. gift_cards[] (Value): {@link
         * OrderGiftCardSelection}. A gift card available to pay an order, with its available
         * balance and the last four characters of its code. governing_delivery_selection_id
         * (Required): string or null. ID of the delivery selection that governs this order,
         * including pickup choices without a delivery destination: the checkout's provisional
         * selection before payment, and the selection a payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". handover (Optional): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. Every physical item is handed to the buyer at
         * this location when the order is paid. Replaces a delivery selection. internal_note
         * (Optional): string. A note for your team. Buyer reads leave it out.
         * inventory_exception_reason (Optional): string. Why inventory could not be committed
         * after payment. The cause remains after resolution. Omitted when no reason was recorded.
         * Unrecognized reasons are returned as other; new values may be added. Value enum:
         * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
         * "auto_refund_failed", "policy_resolution_failed", "other".
         * inventory_exception_resolution_message (Optional): string. The merchant note supplied
         * when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_status (Optional): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_reservation_id (Optional): string. The reservation holding stock for this
         * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this order's
         * tracked demand is routed. Required before an order containing tracked variants can hold
         * stock. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. invoice_id (Required):
         * string or null. The invoice associated with this order. Null when the order has no
         * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_items (Required): Array of {@link
         * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
         * quantities. line_items[] (Value): {@link OrderLineItem}. An item purchased in an order.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order_id
         * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable order
         * number for receipts and merchant reference. origin (Optional): string. How the order was
         * created. invoice means a Quick Pay invoice created the order; attaching an invoice to an
         * existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
         * "checkout", "api", "subscription", "invoice". paid_at (Required): string or null. When
         * `payment_status` became `paid`, including a final capture that releases the remaining
         * balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_collection
         * (Optional): {@link PaymentCollection}. Payment options and collection instructions for
         * the order's outstanding balance. Omitted when collection is unavailable to this caller.
         * Client-side details for collecting payment from the buyer, such as the Stripe settings
         * to initialize Stripe.js. payment_intent_ids (Required): Array of string. IDs of the
         * payment intents created to collect this order. payment_intent_ids[] (Value): string.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
         * `payment_intents`. payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_link_id (Optional): string. Payment link
         * whose checkout created this order. Absent for orders that did not come from a payment
         * link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_status (Required): string. Collection progress.
         * An invoice write-off also completes collection without receiving the written-off amount.
         * Value enum: "unpaid", "partially_paid", "paid". prepayment_order_id (Required): string
         * or null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". pricing_amounts (Required):
         * {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. The money totals for an order or invoice: subtotal, discounts,
         * charges, tax, requested tip, and total. refund_ids (Required): Array of string. IDs of
         * the refunds that name this order. This includes refunds Flint makes to return a payment
         * it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_status (Required): string. Refund progress for
         * collected money. Refunds with `reason` `payment_returned` return money the order never
         * received and don't count. Value enum: "none", "partially_refunded", "refunded".
         * return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
         * Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements[] (Value): {@link OrderReturnCreditSettlement}. A return
         * credit applied to an order payment, with the amount and the return and resolution it
         * came from. return_resolution_id (Optional): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". settlement_amounts (Required): {@link
         * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
         * written off, and settled as tips, and what is still outstanding. The bill settlement
         * amounts plus order overpayments, settled tips, debt discharged by final capture, and
         * value order edits removed. Money collected, returned, waived, and still owed on a bill.
         * setup_collection (Optional): {@link SetupCollection}. Instructions for saving a payment
         * method for a subscription order. Omitted when setup is unavailable. Client guidance for
         * saving a payment method on the merchant's connected account. status (Required): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". subscription (Optional): {@link ExpandedSubscriptionSummary} or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's
         * summary fields, including status, billing period, and next billing time, returned when
         * the subscription is expanded. subscription.anyOf[2] (Value): null. subscription_cycle
         * (Optional): integer. Charged subscription cycle associated with this order. Signup is
         * cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_delivery_changed_at (Optional): string. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_number (Required): integer or null.
         * Position of this delivery among the deliveries one charge paid for, starting at 2. Null
         * when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_id (Optional): string. ID of the subscription this order bills. Absent on
         * an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
         * summary included when `expand` names `subscription_plan`; `null` when expanded and this
         * order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. ID of the subscription plan this order bills.
         * Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions[] (Value): string. Value enum: "close",
         * "pay", "resolve_inventory_exception". tax (Required): {@link OrderTax}. The order's tax
         * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction
         * rows. An order's tax state, including its mode, price mode, status, location, exemption,
         * and tax breakdowns. ticketed_event (Optional): {@link TicketedEvent}. Event and tickets
         * this order sold through an event payment link. Absent on other orders. Event details for
         * a ticketed order: name, location, start time, time zone, and the tickets issued. tips
         * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled,
         * and refunded amounts. A tip cleared before payment stays listed as canceled. tips[]
         * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
         * amounts, status, and how it was paid. updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Order
         * version for optimistic concurrency. Send this value as the expected version when
         * changing the order. Increases with every change to the order. Ignore an order webhook
         * snapshot whose version is lower than one you have already applied. Format: int64.
         */
        "object": {
            /**
             * The payment attempt currently collecting this order. Omitted when no attempt is
             * active or its collection surface belongs to another caller. An attempt to pay an
             * order.
             */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "active_payment_review_id": string | null;
            /**
             * The amounts authorized and still capturable on the order's payments. The amounts
             * authorized and still capturable on an order's payments, with the authorization
             * expiry.
             */
            "authorization_amounts"?: OrderAuthorizationAmounts;
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * Buyer contact supplied with payment or saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /** A note to the buyer. */
            "buyer_note"?: string;
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional
             * charge applied to an order.
             */
            "charges": Array<OrderCharge>;
            /**
             * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_ids": Array<string>;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer.
             */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. [] (Value): {@link DeferredPromotion}. A promotion
             * accepted at subscription signup for the subscription's first charged cycle. It does
             * not discount the signup order.
             */
            "deferred_promotions": Array<DeferredPromotion>;
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. Method, type and recipient of governing_delivery_selection_id.
             * delivery_destination contains the resolved address. These values describe the same
             * selection.
             */
            "delivery"?: OrderDeliverySummary;
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. Where an
             * order is delivered: the address, the recipient, and where the destination came from.
             */
            "delivery_destination"?: OrderDeliveryDestination;
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. [] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion.
             */
            "discounts": Array<OrderDiscount>;
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
             * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "dispute_status"?: "none"
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed".
             */
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            /**
             * Fulfillments created for the order, each covering a set of its line items. []
             * (Value): {@link Fulfillment}. Work required to deliver an order's items.
             */
            "fulfillments": Array<Fulfillment>;
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. An estimate of how an order total splits between gift cards and the
             * payment processor, and whether gift cards can pay it.
             */
            "gift_card_estimate"?: OrderGiftCardEstimate;
            /**
             * The gift card redemptions applied to the order's payments. [] (Value): {@link
             * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
             * the amount, tip, and gift card.
             */
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts.
             */
            "gift_card_tender_enabled": boolean;
            /**
             * Gift cards available to pay the order, with each card's available balance. []
             * (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with
             * its available balance and the last four characters of its code.
             */
            "gift_cards": Array<OrderGiftCardSelection>;
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "governing_delivery_selection_id": string | null;
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. Every physical item is
             * handed to the buyer at this location when the order is paid. Replaces a delivery
             * selection.
             */
            "handover"?: OrderHandover;
            /** A note for your team. Buyer reads leave it out. */
            "internal_note"?: string;
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other".
             */
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer.
             */
            "inventory_exception_resolution_message"?: string;
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved".
             */
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            /**
             * The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id"?: string;
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string | null;
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities. []
             * (Value): {@link OrderLineItem}. An item purchased in an order.
             */
            "line_items": Array<OrderLineItem>;
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
             * Unique identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /** Human-readable order number for receipts and merchant reference. */
            "order_number"?: string;
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             */
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "paid_at": string | null;
            /**
             * Payment options and collection instructions for the order's outstanding balance.
             * Omitted when collection is unavailable to this caller. Client-side details for
             * collecting payment from the buyer, such as the Stripe settings to initialize
             * Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents created to collect this order. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             */
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "prepayment_order_id": string | null;
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. The money totals for an order or invoice: subtotal, discounts, charges, tax,
             * requested tip, and total.
             */
            "pricing_amounts": PricingAmounts;
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. [] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from.
             */
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. The bill settlement amounts plus order
             * overpayments, settled tips, debt discharged by final capture, and value order edits
             * removed. Money collected, returned, waived, and still owed on a bill.
             */
            "settlement_amounts": OrderSettlementAmounts;
            /**
             * Instructions for saving a payment method for a subscription order. Omitted when
             * setup is unavailable. Client guidance for saving a payment method on the merchant's
             * connected account.
             */
            "setup_collection"?: SetupCollection;
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed".
             */
            "status": "open" | "closed" | (string & {});
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary
             * fields, including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[2] (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             */
            "subscription_cycle"?: number;
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "subscription_delivery_changed_at"?: string;
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24.
             */
            "subscription_delivery_number": number | null;
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
             * subscription plan's summary fields, including name, billing interval, currency, and
             * status, returned when the plan is expanded. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. [] enum: "close", "pay",
             * "resolve_inventory_exception". [] (Value): string. Value enum: "close", "pay",
             * "resolve_inventory_exception".
             */
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
             * location, exemption, and tax breakdowns.
             */
            "tax": OrderTax;
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. Event details for a ticketed order: name, location, start time, time zone,
             * and the tickets issued.
             */
            "ticketed_event"?: TicketedEvent;
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on
             * an order, with its requested, settled, and refunded amounts, status, and how it was
             * paid.
             */
            "tips": Array<Tip>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. Format:
             * int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Order>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.partially_paid". */
    "event_type"?: "order.partially_paid";
});
export type OrderPartiallyRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "active_payment_review_id": string | null;
            "authorization_amounts"?: OrderAuthorizationAmounts;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_note"?: string;
            "charges": Array<OrderCharge>;
            "checkout_session_ids": Array<string>;
            "client_reference": string | null;
            "closed_at"?: string;
            "closed_reason"?: "invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {});
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "deferred_promotions": Array<DeferredPromotion>;
            "delivery"?: OrderDeliverySummary;
            "delivery_destination"?: OrderDeliveryDestination;
            "discounts": Array<OrderDiscount>;
            "dispute_status"?: "none"
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
            "external_reference_id"?: string;
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            "fulfillments": Array<Fulfillment>;
            "gift_card_estimate"?: OrderGiftCardEstimate;
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            "gift_card_tender_enabled": boolean;
            "gift_cards": Array<OrderGiftCardSelection>;
            "governing_delivery_selection_id": string | null;
            "handover"?: OrderHandover;
            "internal_note"?: string;
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            "inventory_exception_resolution_message"?: string;
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            "inventory_reservation_id"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "invoice_id": string | null;
            "line_items": Array<OrderLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order_id": string;
            "order_number"?: string;
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            "paid_at": string | null;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link_id"?: string;
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            "prepayment_order_id": string | null;
            "pricing_amounts": PricingAmounts;
            "refund_ids": Array<string>;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            "return_resolution_id"?: string;
            "settlement_amounts": OrderSettlementAmounts;
            "setup_collection"?: SetupCollection;
            "status": "open" | "closed" | (string & {});
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            "subscription_cycle"?: number;
            "subscription_delivery_changed_at"?: string;
            "subscription_delivery_number": number | null;
            "subscription_id"?: string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            "tax": OrderTax;
            "ticketed_event"?: TicketedEvent;
            "tips": Array<Tip>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Order>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.partially_refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "active_payment_review_id": string | null;
            "authorization_amounts"?: OrderAuthorizationAmounts;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_note"?: string;
            "charges": Array<OrderCharge>;
            "checkout_session_ids": Array<string>;
            "client_reference": string | null;
            "closed_at"?: string;
            "closed_reason"?: "invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {});
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "deferred_promotions": Array<DeferredPromotion>;
            "delivery"?: OrderDeliverySummary;
            "delivery_destination"?: OrderDeliveryDestination;
            "discounts": Array<OrderDiscount>;
            "dispute_status"?: "none"
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
            "external_reference_id"?: string;
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            "fulfillments": Array<Fulfillment>;
            "gift_card_estimate"?: OrderGiftCardEstimate;
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            "gift_card_tender_enabled": boolean;
            "gift_cards": Array<OrderGiftCardSelection>;
            "governing_delivery_selection_id": string | null;
            "handover"?: OrderHandover;
            "internal_note"?: string;
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            "inventory_exception_resolution_message"?: string;
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            "inventory_reservation_id"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "invoice_id": string | null;
            "line_items": Array<OrderLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order_id": string;
            "order_number"?: string;
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            "paid_at": string | null;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link_id"?: string;
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            "prepayment_order_id": string | null;
            "pricing_amounts": PricingAmounts;
            "refund_ids": Array<string>;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            "return_resolution_id"?: string;
            "settlement_amounts": OrderSettlementAmounts;
            "setup_collection"?: SetupCollection;
            "status": "open" | "closed" | (string & {});
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            "subscription_cycle"?: number;
            "subscription_delivery_changed_at"?: string;
            "subscription_delivery_number": number | null;
            "subscription_id"?: string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            "tax": OrderTax;
            "ticketed_event"?: TicketedEvent;
            "tips": Array<Tip>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Order>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.partially_refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.partially_refunded";
});
/**
 * The `order.partially_refunded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type OrderPartiallyRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
     * currently collecting this order. Omitted when no attempt is active or its collection surface
     * belongs to another caller. An attempt to pay an order. object.active_payment_review_id
     * (Required): string or null. The earliest open or resolving payment review on this order's
     * counted payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. The amounts authorized and still capturable on an order's payments, with the
     * authorization expiry. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer. Buyer contact
     * supplied with payment or saved during checkout. object.buyer_note (Optional): string. A note
     * to the buyer. object.charges (Required): Array of {@link OrderCharge}. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. object.charges[] (Value): {@link OrderCharge}. An additional charge applied to an
     * order. object.checkout_session_ids (Required): Array of string. IDs of the checkout sessions
     * opened for this order. object.checkout_session_ids[] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference (Required): string or null. The
     * reference the payment link URL or resolve request carried, such as your user ID. `null` when
     * none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255. object.closed_at (Optional):
     * string. When the order closed. Present exactly when status is closed. Set once at the
     * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_reason (Optional): string. Why the order closed. Present exactly when status
     * is closed. Set once at closure. Unrecognized reasons are returned as other; new values may
     * be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     * object.closed_reason_message (Optional): string. The caller note supplied when closing the
     * order. System closures leave it absent. It is not shown to the buyer. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_field_answers (Required): Array of {@link CustomFieldAnswer}. The buyer's
     * answers to the payment link's custom fields, recorded when checkout started, in the order
     * the link showed the fields. Each answer keeps the field's key, label, and type from that
     * moment, so later changes to the link don't change it. Optional fields the buyer left blank
     * are left out. Read-only. Empty when the order didn't come from a payment link, the link had
     * no custom fields, or the buyer answered none. Orders created before Flint recorded answers
     * here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`.
     * Deleting the customer removes the answers. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deferred_promotions (Required): Array of {@link DeferredPromotion}. Promotions
     * accepted at subscription signup. They attach when the subscription is provisioned and first
     * discount its first charged cycle. They do not discount this order and are separate from
     * discounts and order totals. Always present; empty when no promotions are deferred.
     * object.deferred_promotions[] (Value): {@link DeferredPromotion}. A promotion accepted at
     * subscription signup for the subscription's first charged cycle. It does not discount the
     * signup order. object.delivery (Optional): {@link OrderDeliverySummary}. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order. Method, type and
     * recipient of governing_delivery_selection_id. delivery_destination contains the resolved
     * address. These values describe the same selection. object.delivery_destination (Optional):
     * {@link OrderDeliveryDestination}. The shipment or local-delivery destination committed for
     * this order. Payment freezes this value; fulfillment recipient changes do not replace it.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. Where an order is delivered: the address, the recipient, and where the destination
     * came from. object.discounts (Required): Array of {@link OrderDiscount}. Discounts applied to
     * the order, each with its amount, status, and the line items and charges it covers.
     * object.discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion. object.dispute_status (Optional): string. Aggregate dispute state across the
     * order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_status
     * (Optional): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed". object.fulfillments (Required): Array of {@link Fulfillment}. Fulfillments created
     * for the order, each covering a set of its line items. object.fulfillments[] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items. object.gift_card_estimate
     * (Optional): {@link OrderGiftCardEstimate}. An estimate of how the order balance splits
     * between gift cards and the payment processor. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     * object.gift_card_settlements (Required): Array of {@link OrderGiftCardSettlement}. The gift
     * card redemptions applied to the order's payments. object.gift_card_settlements[] (Value):
     * {@link OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
     * the amount, tip, and gift card. object.gift_card_tender_enabled (Required): boolean. Whether
     * gift cards can pay for this order now. Gift cards pay only USD orders that still accept
     * changes, are not subscription purchases, and whose merchant has at least one gift card that
     * is not closed in this environment. Recomputed on each read; a spent but open card still
     * counts. object.gift_cards (Required): Array of {@link OrderGiftCardSelection}. Gift cards
     * available to pay the order, with each card's available balance. object.gift_cards[] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code. object.governing_delivery_selection_id
     * (Required): string or null. ID of the delivery selection that governs this order, including
     * pickup choices without a delivery destination: the checkout's provisional selection before
     * payment, and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.handover (Optional): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     * object.internal_note (Optional): string. A note for your team. Buyer reads leave it out.
     * object.inventory_exception_reason (Optional): string. Why inventory could not be committed
     * after payment. The cause remains after resolution. Omitted when no reason was recorded.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * object.inventory_exception_resolution_message (Optional): string. The merchant note supplied
     * when resolving the inventory exception. It is not shown to the buyer.
     * object.inventory_exception_status (Optional): string. Whether an inventory problem after
     * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * object.inventory_reservation_id (Optional): string. The reservation holding stock for this
     * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this
     * order's tracked demand is routed. Required before an order containing tracked variants can
     * hold stock. Where an order, payment link, or reservation routes inventory from: a fixed
     * Location, an inventory allocation policy, or one policy revision. object.invoice_id
     * (Required): string or null. The invoice associated with this order. Null when the order has
     * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_items (Required): Array of {@link
     * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
     * quantities. object.line_items[] (Value): {@link OrderLineItem}. An item purchased in an
     * order. object.merchant_id (Required): string. ID of the merchant this resource belongs to.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order_id
     * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string. Human-readable
     * order number for receipts and merchant reference. object.origin (Optional): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". object.paid_at (Required): string or null.
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.payment_collection (Optional): {@link
     * PaymentCollection}. Payment options and collection instructions for the order's outstanding
     * balance. Omitted when collection is unavailable to this caller. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Required): Array of string. IDs of the payment intents created to
     * collect this order. object.payment_intent_ids[] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.payment_link_id (Optional): string. Payment link
     * whose checkout created this order. Absent for orders that did not come from a payment link.
     * Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_status (Required): string. Collection
     * progress. An invoice write-off also completes collection without receiving the written-off
     * amount. Value enum: "unpaid", "partially_paid", "paid". object.prepayment_order_id
     * (Required): string or null. Order that paid for this prepaid delivery. Null when this is not
     * a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.pricing_amounts
     * (Required): {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges,
     * tax, requested tip, and total. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total. object.refund_ids (Required): Array of
     * string. IDs of the refunds that name this order. This includes refunds Flint makes to return
     * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. object.refund_ids[] (Value): string.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_status (Required): string. Refund
     * progress for collected money. Refunds with `reason` `payment_returned` return money the
     * order never received and don't count. Value enum: "none", "partially_refunded", "refunded".
     * object.return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. object.return_credit_settlements[]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from. object.return_resolution_id
     * (Optional): string. ID of the return resolution that created this order as a replacement.
     * Omitted for orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * object.settlement_amounts (Required): {@link OrderSettlementAmounts}. How much of the order
     * has been paid, refunded, credited, written off, and settled as tips, and what is still
     * outstanding. The bill settlement amounts plus order overpayments, settled tips, debt
     * discharged by final capture, and value order edits removed. Money collected, returned,
     * waived, and still owed on a bill. object.setup_collection (Optional): {@link
     * SetupCollection}. Instructions for saving a payment method for a subscription order. Omitted
     * when setup is unavailable. Client guidance for saving a payment method on the merchant's
     * connected account. object.status (Required): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed". object.subscription (Optional):
     * {@link ExpandedSubscriptionSummary} or null. Subscription summary included when `expand`
     * names `subscription`; `null` when expanded and this order does not bill a subscription.
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. object.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded.
     * object.subscription.anyOf[2] (Value): null. object.subscription_cycle (Optional): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * object.subscription_delivery_changed_at (Optional): string. Time the subscriber changed
     * delivery after this paid renewal was prepared. The order keeps its committed destination
     * until you correct it or refund and replace it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.subscription_delivery_number (Required): integer or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * object.subscription_id (Optional): string. ID of the subscription this order bills. Absent
     * on an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
     * summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. ID of the subscription plan this order
     * bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception".
     * object.supported_actions[] (Value): string. Value enum: "close", "pay",
     * "resolve_inventory_exception". object.tax (Required): {@link OrderTax}. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns. object.ticketed_event (Optional): {@link TicketedEvent}. Event and tickets this
     * order sold through an event payment link. Absent on other orders. Event details for a
     * ticketed order: name, location, start time, time zone, and the tickets issued. object.tips
     * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled, and
     * refunded amounts. A tip cleared before payment stays listed as canceled. object.tips[]
     * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded amounts,
     * status, and how it was paid. object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         * active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
         * currently collecting this order. Omitted when no attempt is active or its collection
         * surface belongs to another caller. An attempt to pay an order. active_payment_review_id
         * (Required): string or null. The earliest open or resolving payment review on this
         * order's counted payments. `null` when no review is open or resolving. List reviews with
         * GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". authorization_amounts (Optional): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. The amounts authorized and still capturable on an order's payments, with the
         * authorization expiry. buyer_contact (Optional): {@link CheckoutBuyerContact}. Email and
         * phone saved when payment started, from the pay request's buyer_contact or the paying
         * checkout session's saved contact. It does not change the linked customer. Buyer contact
         * supplied with payment or saved during checkout. buyer_note (Optional): string. A note to
         * the buyer. charges (Required): Array of {@link OrderCharge}. Charges added to the order,
         * such as delivery or service fees, each with its applied amount, tax, and refunded
         * amount. charges[] (Value): {@link OrderCharge}. An additional charge applied to an
         * order. checkout_session_ids (Required): Array of string. IDs of the checkout sessions
         * opened for this order. checkout_session_ids[] (Value): string. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". client_reference (Required): string or null. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. minLength: 1. maxLength: 255. closed_at
         * (Optional): string. When the order closed. Present exactly when status is closed. Set
         * once at the transition and never changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string. Why the order closed. Present
         * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "invoice_voided", "paid",
         * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason_message (Optional): string. The
         * caller note supplied when closing the order. System closures leave it absent. It is not
         * shown to the buyer. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * maxItems: 20. custom_field_answers[] (Value): {@link CustomFieldAnswer}. One answer to a
         * payment link custom field, with the field as it was when checkout started.
         * `custom_field_type` determines the type of `value`. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer this order belongs to.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". deferred_promotions (Required): Array of
         * {@link DeferredPromotion}. Promotions accepted at subscription signup. They attach when
         * the subscription is provisioned and first discount its first charged cycle. They do not
         * discount this order and are separate from discounts and order totals. Always present;
         * empty when no promotions are deferred. deferred_promotions[] (Value): {@link
         * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's
         * first charged cycle. It does not discount the signup order. delivery (Optional): {@link
         * OrderDeliverySummary}. Method, type and recipient of governing_delivery_selection_id.
         * The address remains in delivery_destination. Omitted when no shipment or local-delivery
         * selection governs the order. Method, type and recipient of
         * governing_delivery_selection_id. delivery_destination contains the resolved address.
         * These values describe the same selection. delivery_destination (Optional): {@link
         * OrderDeliveryDestination}. The shipment or local-delivery destination committed for this
         * order. Payment freezes this value; fulfillment recipient changes do not replace it.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. Where an order is delivered: the address, the recipient, and where the
         * destination came from. discounts (Required): Array of {@link OrderDiscount}. Discounts
         * applied to the order, each with its amount, status, and the line items and charges it
         * covers. discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with
         * its amount, status, and the line items and charges it covers. It comes from a manual
         * discount or a promotion. dispute_status (Optional): string. Aggregate dispute state
         * across the order's counted payment intents, excluding payment_returned. Always returned
         * to merchant credentials and omitted from buyer reads. Open states take precedence in
         * this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
         * other. Otherwise the most severe closed state wins: lost, won, prevented,
         * inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_status (Optional): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillments (Required): Array of
         * {@link Fulfillment}. Fulfillments created for the order, each covering a set of its line
         * items. fulfillments[] (Value): {@link Fulfillment}. Work required to deliver an order's
         * items. gift_card_estimate (Optional): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor. An estimate of
         * how an order total splits between gift cards and the payment processor, and whether gift
         * cards can pay it. gift_card_settlements (Required): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements[] (Value): {@link OrderGiftCardSettlement}. A gift card redemption
         * applied to an order payment, with the amount, tip, and gift card.
         * gift_card_tender_enabled (Required): boolean. Whether gift cards can pay for this order
         * now. Gift cards pay only USD orders that still accept changes, are not subscription
         * purchases, and whose merchant has at least one gift card that is not closed in this
         * environment. Recomputed on each read; a spent but open card still counts. gift_cards
         * (Required): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
         * order, with each card's available balance. gift_cards[] (Value): {@link
         * OrderGiftCardSelection}. A gift card available to pay an order, with its available
         * balance and the last four characters of its code. governing_delivery_selection_id
         * (Required): string or null. ID of the delivery selection that governs this order,
         * including pickup choices without a delivery destination: the checkout's provisional
         * selection before payment, and the selection a payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". handover (Optional): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. Every physical item is handed to the buyer at
         * this location when the order is paid. Replaces a delivery selection. internal_note
         * (Optional): string. A note for your team. Buyer reads leave it out.
         * inventory_exception_reason (Optional): string. Why inventory could not be committed
         * after payment. The cause remains after resolution. Omitted when no reason was recorded.
         * Unrecognized reasons are returned as other; new values may be added. Value enum:
         * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
         * "auto_refund_failed", "policy_resolution_failed", "other".
         * inventory_exception_resolution_message (Optional): string. The merchant note supplied
         * when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_status (Optional): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_reservation_id (Optional): string. The reservation holding stock for this
         * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this order's
         * tracked demand is routed. Required before an order containing tracked variants can hold
         * stock. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. invoice_id (Required):
         * string or null. The invoice associated with this order. Null when the order has no
         * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_items (Required): Array of {@link
         * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
         * quantities. line_items[] (Value): {@link OrderLineItem}. An item purchased in an order.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order_id
         * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable order
         * number for receipts and merchant reference. origin (Optional): string. How the order was
         * created. invoice means a Quick Pay invoice created the order; attaching an invoice to an
         * existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
         * "checkout", "api", "subscription", "invoice". paid_at (Required): string or null. When
         * `payment_status` became `paid`, including a final capture that releases the remaining
         * balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_collection
         * (Optional): {@link PaymentCollection}. Payment options and collection instructions for
         * the order's outstanding balance. Omitted when collection is unavailable to this caller.
         * Client-side details for collecting payment from the buyer, such as the Stripe settings
         * to initialize Stripe.js. payment_intent_ids (Required): Array of string. IDs of the
         * payment intents created to collect this order. payment_intent_ids[] (Value): string.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
         * `payment_intents`. payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_link_id (Optional): string. Payment link
         * whose checkout created this order. Absent for orders that did not come from a payment
         * link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_status (Required): string. Collection progress.
         * An invoice write-off also completes collection without receiving the written-off amount.
         * Value enum: "unpaid", "partially_paid", "paid". prepayment_order_id (Required): string
         * or null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". pricing_amounts (Required):
         * {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. The money totals for an order or invoice: subtotal, discounts,
         * charges, tax, requested tip, and total. refund_ids (Required): Array of string. IDs of
         * the refunds that name this order. This includes refunds Flint makes to return a payment
         * it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_status (Required): string. Refund progress for
         * collected money. Refunds with `reason` `payment_returned` return money the order never
         * received and don't count. Value enum: "none", "partially_refunded", "refunded".
         * return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
         * Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements[] (Value): {@link OrderReturnCreditSettlement}. A return
         * credit applied to an order payment, with the amount and the return and resolution it
         * came from. return_resolution_id (Optional): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". settlement_amounts (Required): {@link
         * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
         * written off, and settled as tips, and what is still outstanding. The bill settlement
         * amounts plus order overpayments, settled tips, debt discharged by final capture, and
         * value order edits removed. Money collected, returned, waived, and still owed on a bill.
         * setup_collection (Optional): {@link SetupCollection}. Instructions for saving a payment
         * method for a subscription order. Omitted when setup is unavailable. Client guidance for
         * saving a payment method on the merchant's connected account. status (Required): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". subscription (Optional): {@link ExpandedSubscriptionSummary} or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's
         * summary fields, including status, billing period, and next billing time, returned when
         * the subscription is expanded. subscription.anyOf[2] (Value): null. subscription_cycle
         * (Optional): integer. Charged subscription cycle associated with this order. Signup is
         * cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_delivery_changed_at (Optional): string. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_number (Required): integer or null.
         * Position of this delivery among the deliveries one charge paid for, starting at 2. Null
         * when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_id (Optional): string. ID of the subscription this order bills. Absent on
         * an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
         * summary included when `expand` names `subscription_plan`; `null` when expanded and this
         * order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. ID of the subscription plan this order bills.
         * Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions[] (Value): string. Value enum: "close",
         * "pay", "resolve_inventory_exception". tax (Required): {@link OrderTax}. The order's tax
         * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction
         * rows. An order's tax state, including its mode, price mode, status, location, exemption,
         * and tax breakdowns. ticketed_event (Optional): {@link TicketedEvent}. Event and tickets
         * this order sold through an event payment link. Absent on other orders. Event details for
         * a ticketed order: name, location, start time, time zone, and the tickets issued. tips
         * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled,
         * and refunded amounts. A tip cleared before payment stays listed as canceled. tips[]
         * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
         * amounts, status, and how it was paid. updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Order
         * version for optimistic concurrency. Send this value as the expected version when
         * changing the order. Increases with every change to the order. Ignore an order webhook
         * snapshot whose version is lower than one you have already applied. Format: int64.
         */
        "object": {
            /**
             * The payment attempt currently collecting this order. Omitted when no attempt is
             * active or its collection surface belongs to another caller. An attempt to pay an
             * order.
             */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "active_payment_review_id": string | null;
            /**
             * The amounts authorized and still capturable on the order's payments. The amounts
             * authorized and still capturable on an order's payments, with the authorization
             * expiry.
             */
            "authorization_amounts"?: OrderAuthorizationAmounts;
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * Buyer contact supplied with payment or saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /** A note to the buyer. */
            "buyer_note"?: string;
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional
             * charge applied to an order.
             */
            "charges": Array<OrderCharge>;
            /**
             * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_ids": Array<string>;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer.
             */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. [] (Value): {@link DeferredPromotion}. A promotion
             * accepted at subscription signup for the subscription's first charged cycle. It does
             * not discount the signup order.
             */
            "deferred_promotions": Array<DeferredPromotion>;
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. Method, type and recipient of governing_delivery_selection_id.
             * delivery_destination contains the resolved address. These values describe the same
             * selection.
             */
            "delivery"?: OrderDeliverySummary;
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. Where an
             * order is delivered: the address, the recipient, and where the destination came from.
             */
            "delivery_destination"?: OrderDeliveryDestination;
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. [] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion.
             */
            "discounts": Array<OrderDiscount>;
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
             * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "dispute_status"?: "none"
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed".
             */
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            /**
             * Fulfillments created for the order, each covering a set of its line items. []
             * (Value): {@link Fulfillment}. Work required to deliver an order's items.
             */
            "fulfillments": Array<Fulfillment>;
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. An estimate of how an order total splits between gift cards and the
             * payment processor, and whether gift cards can pay it.
             */
            "gift_card_estimate"?: OrderGiftCardEstimate;
            /**
             * The gift card redemptions applied to the order's payments. [] (Value): {@link
             * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
             * the amount, tip, and gift card.
             */
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts.
             */
            "gift_card_tender_enabled": boolean;
            /**
             * Gift cards available to pay the order, with each card's available balance. []
             * (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with
             * its available balance and the last four characters of its code.
             */
            "gift_cards": Array<OrderGiftCardSelection>;
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "governing_delivery_selection_id": string | null;
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. Every physical item is
             * handed to the buyer at this location when the order is paid. Replaces a delivery
             * selection.
             */
            "handover"?: OrderHandover;
            /** A note for your team. Buyer reads leave it out. */
            "internal_note"?: string;
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other".
             */
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer.
             */
            "inventory_exception_resolution_message"?: string;
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved".
             */
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            /**
             * The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id"?: string;
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string | null;
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities. []
             * (Value): {@link OrderLineItem}. An item purchased in an order.
             */
            "line_items": Array<OrderLineItem>;
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
             * Unique identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /** Human-readable order number for receipts and merchant reference. */
            "order_number"?: string;
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             */
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "paid_at": string | null;
            /**
             * Payment options and collection instructions for the order's outstanding balance.
             * Omitted when collection is unavailable to this caller. Client-side details for
             * collecting payment from the buyer, such as the Stripe settings to initialize
             * Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents created to collect this order. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             */
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "prepayment_order_id": string | null;
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. The money totals for an order or invoice: subtotal, discounts, charges, tax,
             * requested tip, and total.
             */
            "pricing_amounts": PricingAmounts;
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. [] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from.
             */
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. The bill settlement amounts plus order
             * overpayments, settled tips, debt discharged by final capture, and value order edits
             * removed. Money collected, returned, waived, and still owed on a bill.
             */
            "settlement_amounts": OrderSettlementAmounts;
            /**
             * Instructions for saving a payment method for a subscription order. Omitted when
             * setup is unavailable. Client guidance for saving a payment method on the merchant's
             * connected account.
             */
            "setup_collection"?: SetupCollection;
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed".
             */
            "status": "open" | "closed" | (string & {});
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary
             * fields, including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[2] (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             */
            "subscription_cycle"?: number;
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "subscription_delivery_changed_at"?: string;
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24.
             */
            "subscription_delivery_number": number | null;
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
             * subscription plan's summary fields, including name, billing interval, currency, and
             * status, returned when the plan is expanded. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. [] enum: "close", "pay",
             * "resolve_inventory_exception". [] (Value): string. Value enum: "close", "pay",
             * "resolve_inventory_exception".
             */
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
             * location, exemption, and tax breakdowns.
             */
            "tax": OrderTax;
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. Event details for a ticketed order: name, location, start time, time zone,
             * and the tickets issued.
             */
            "ticketed_event"?: TicketedEvent;
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on
             * an order, with its requested, settled, and refunded amounts, status, and how it was
             * paid.
             */
            "tips": Array<Tip>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. Format:
             * int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Order>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded";
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
 * The `order.partially_refunded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderPartiallyRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
     * currently collecting this order. Omitted when no attempt is active or its collection surface
     * belongs to another caller. An attempt to pay an order. object.active_payment_review_id
     * (Required): string or null. The earliest open or resolving payment review on this order's
     * counted payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. The amounts authorized and still capturable on an order's payments, with the
     * authorization expiry. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer. Buyer contact
     * supplied with payment or saved during checkout. object.buyer_note (Optional): string. A note
     * to the buyer. object.charges (Required): Array of {@link OrderCharge}. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. object.charges[] (Value): {@link OrderCharge}. An additional charge applied to an
     * order. object.checkout_session_ids (Required): Array of string. IDs of the checkout sessions
     * opened for this order. object.checkout_session_ids[] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference (Required): string or null. The
     * reference the payment link URL or resolve request carried, such as your user ID. `null` when
     * none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255. object.closed_at (Optional):
     * string. When the order closed. Present exactly when status is closed. Set once at the
     * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_reason (Optional): string. Why the order closed. Present exactly when status
     * is closed. Set once at closure. Unrecognized reasons are returned as other; new values may
     * be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     * object.closed_reason_message (Optional): string. The caller note supplied when closing the
     * order. System closures leave it absent. It is not shown to the buyer. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_field_answers (Required): Array of {@link CustomFieldAnswer}. The buyer's
     * answers to the payment link's custom fields, recorded when checkout started, in the order
     * the link showed the fields. Each answer keeps the field's key, label, and type from that
     * moment, so later changes to the link don't change it. Optional fields the buyer left blank
     * are left out. Read-only. Empty when the order didn't come from a payment link, the link had
     * no custom fields, or the buyer answered none. Orders created before Flint recorded answers
     * here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`.
     * Deleting the customer removes the answers. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deferred_promotions (Required): Array of {@link DeferredPromotion}. Promotions
     * accepted at subscription signup. They attach when the subscription is provisioned and first
     * discount its first charged cycle. They do not discount this order and are separate from
     * discounts and order totals. Always present; empty when no promotions are deferred.
     * object.deferred_promotions[] (Value): {@link DeferredPromotion}. A promotion accepted at
     * subscription signup for the subscription's first charged cycle. It does not discount the
     * signup order. object.delivery (Optional): {@link OrderDeliverySummary}. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order. Method, type and
     * recipient of governing_delivery_selection_id. delivery_destination contains the resolved
     * address. These values describe the same selection. object.delivery_destination (Optional):
     * {@link OrderDeliveryDestination}. The shipment or local-delivery destination committed for
     * this order. Payment freezes this value; fulfillment recipient changes do not replace it.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. Where an order is delivered: the address, the recipient, and where the destination
     * came from. object.discounts (Required): Array of {@link OrderDiscount}. Discounts applied to
     * the order, each with its amount, status, and the line items and charges it covers.
     * object.discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion. object.dispute_status (Optional): string. Aggregate dispute state across the
     * order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_status
     * (Optional): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed". object.fulfillments (Required): Array of {@link Fulfillment}. Fulfillments created
     * for the order, each covering a set of its line items. object.fulfillments[] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items. object.gift_card_estimate
     * (Optional): {@link OrderGiftCardEstimate}. An estimate of how the order balance splits
     * between gift cards and the payment processor. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     * object.gift_card_settlements (Required): Array of {@link OrderGiftCardSettlement}. The gift
     * card redemptions applied to the order's payments. object.gift_card_settlements[] (Value):
     * {@link OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
     * the amount, tip, and gift card. object.gift_card_tender_enabled (Required): boolean. Whether
     * gift cards can pay for this order now. Gift cards pay only USD orders that still accept
     * changes, are not subscription purchases, and whose merchant has at least one gift card that
     * is not closed in this environment. Recomputed on each read; a spent but open card still
     * counts. object.gift_cards (Required): Array of {@link OrderGiftCardSelection}. Gift cards
     * available to pay the order, with each card's available balance. object.gift_cards[] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code. object.governing_delivery_selection_id
     * (Required): string or null. ID of the delivery selection that governs this order, including
     * pickup choices without a delivery destination: the checkout's provisional selection before
     * payment, and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.handover (Optional): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     * object.internal_note (Optional): string. A note for your team. Buyer reads leave it out.
     * object.inventory_exception_reason (Optional): string. Why inventory could not be committed
     * after payment. The cause remains after resolution. Omitted when no reason was recorded.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * object.inventory_exception_resolution_message (Optional): string. The merchant note supplied
     * when resolving the inventory exception. It is not shown to the buyer.
     * object.inventory_exception_status (Optional): string. Whether an inventory problem after
     * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * object.inventory_reservation_id (Optional): string. The reservation holding stock for this
     * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this
     * order's tracked demand is routed. Required before an order containing tracked variants can
     * hold stock. Where an order, payment link, or reservation routes inventory from: a fixed
     * Location, an inventory allocation policy, or one policy revision. object.invoice_id
     * (Required): string or null. The invoice associated with this order. Null when the order has
     * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_items (Required): Array of {@link
     * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
     * quantities. object.line_items[] (Value): {@link OrderLineItem}. An item purchased in an
     * order. object.merchant_id (Required): string. ID of the merchant this resource belongs to.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order_id
     * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string. Human-readable
     * order number for receipts and merchant reference. object.origin (Optional): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". object.paid_at (Required): string or null.
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.payment_collection (Optional): {@link
     * PaymentCollection}. Payment options and collection instructions for the order's outstanding
     * balance. Omitted when collection is unavailable to this caller. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Required): Array of string. IDs of the payment intents created to
     * collect this order. object.payment_intent_ids[] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.payment_link_id (Optional): string. Payment link
     * whose checkout created this order. Absent for orders that did not come from a payment link.
     * Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_status (Required): string. Collection
     * progress. An invoice write-off also completes collection without receiving the written-off
     * amount. Value enum: "unpaid", "partially_paid", "paid". object.prepayment_order_id
     * (Required): string or null. Order that paid for this prepaid delivery. Null when this is not
     * a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.pricing_amounts
     * (Required): {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges,
     * tax, requested tip, and total. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total. object.refund_ids (Required): Array of
     * string. IDs of the refunds that name this order. This includes refunds Flint makes to return
     * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. object.refund_ids[] (Value): string.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_status (Required): string. Refund
     * progress for collected money. Refunds with `reason` `payment_returned` return money the
     * order never received and don't count. Value enum: "none", "partially_refunded", "refunded".
     * object.return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. object.return_credit_settlements[]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from. object.return_resolution_id
     * (Optional): string. ID of the return resolution that created this order as a replacement.
     * Omitted for orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * object.settlement_amounts (Required): {@link OrderSettlementAmounts}. How much of the order
     * has been paid, refunded, credited, written off, and settled as tips, and what is still
     * outstanding. The bill settlement amounts plus order overpayments, settled tips, debt
     * discharged by final capture, and value order edits removed. Money collected, returned,
     * waived, and still owed on a bill. object.setup_collection (Optional): {@link
     * SetupCollection}. Instructions for saving a payment method for a subscription order. Omitted
     * when setup is unavailable. Client guidance for saving a payment method on the merchant's
     * connected account. object.status (Required): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed". object.subscription (Optional):
     * {@link ExpandedSubscriptionSummary} or null. Subscription summary included when `expand`
     * names `subscription`; `null` when expanded and this order does not bill a subscription.
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. object.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded.
     * object.subscription.anyOf[2] (Value): null. object.subscription_cycle (Optional): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * object.subscription_delivery_changed_at (Optional): string. Time the subscriber changed
     * delivery after this paid renewal was prepared. The order keeps its committed destination
     * until you correct it or refund and replace it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.subscription_delivery_number (Required): integer or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * object.subscription_id (Optional): string. ID of the subscription this order bills. Absent
     * on an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
     * summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. ID of the subscription plan this order
     * bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception".
     * object.supported_actions[] (Value): string. Value enum: "close", "pay",
     * "resolve_inventory_exception". object.tax (Required): {@link OrderTax}. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns. object.ticketed_event (Optional): {@link TicketedEvent}. Event and tickets this
     * order sold through an event payment link. Absent on other orders. Event details for a
     * ticketed order: name, location, start time, time zone, and the tickets issued. object.tips
     * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled, and
     * refunded amounts. A tip cleared before payment stays listed as canceled. object.tips[]
     * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded amounts,
     * status, and how it was paid. object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         * active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
         * currently collecting this order. Omitted when no attempt is active or its collection
         * surface belongs to another caller. An attempt to pay an order. active_payment_review_id
         * (Required): string or null. The earliest open or resolving payment review on this
         * order's counted payments. `null` when no review is open or resolving. List reviews with
         * GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". authorization_amounts (Optional): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. The amounts authorized and still capturable on an order's payments, with the
         * authorization expiry. buyer_contact (Optional): {@link CheckoutBuyerContact}. Email and
         * phone saved when payment started, from the pay request's buyer_contact or the paying
         * checkout session's saved contact. It does not change the linked customer. Buyer contact
         * supplied with payment or saved during checkout. buyer_note (Optional): string. A note to
         * the buyer. charges (Required): Array of {@link OrderCharge}. Charges added to the order,
         * such as delivery or service fees, each with its applied amount, tax, and refunded
         * amount. charges[] (Value): {@link OrderCharge}. An additional charge applied to an
         * order. checkout_session_ids (Required): Array of string. IDs of the checkout sessions
         * opened for this order. checkout_session_ids[] (Value): string. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". client_reference (Required): string or null. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. minLength: 1. maxLength: 255. closed_at
         * (Optional): string. When the order closed. Present exactly when status is closed. Set
         * once at the transition and never changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string. Why the order closed. Present
         * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "invoice_voided", "paid",
         * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason_message (Optional): string. The
         * caller note supplied when closing the order. System closures leave it absent. It is not
         * shown to the buyer. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * maxItems: 20. custom_field_answers[] (Value): {@link CustomFieldAnswer}. One answer to a
         * payment link custom field, with the field as it was when checkout started.
         * `custom_field_type` determines the type of `value`. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer this order belongs to.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". deferred_promotions (Required): Array of
         * {@link DeferredPromotion}. Promotions accepted at subscription signup. They attach when
         * the subscription is provisioned and first discount its first charged cycle. They do not
         * discount this order and are separate from discounts and order totals. Always present;
         * empty when no promotions are deferred. deferred_promotions[] (Value): {@link
         * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's
         * first charged cycle. It does not discount the signup order. delivery (Optional): {@link
         * OrderDeliverySummary}. Method, type and recipient of governing_delivery_selection_id.
         * The address remains in delivery_destination. Omitted when no shipment or local-delivery
         * selection governs the order. Method, type and recipient of
         * governing_delivery_selection_id. delivery_destination contains the resolved address.
         * These values describe the same selection. delivery_destination (Optional): {@link
         * OrderDeliveryDestination}. The shipment or local-delivery destination committed for this
         * order. Payment freezes this value; fulfillment recipient changes do not replace it.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. Where an order is delivered: the address, the recipient, and where the
         * destination came from. discounts (Required): Array of {@link OrderDiscount}. Discounts
         * applied to the order, each with its amount, status, and the line items and charges it
         * covers. discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with
         * its amount, status, and the line items and charges it covers. It comes from a manual
         * discount or a promotion. dispute_status (Optional): string. Aggregate dispute state
         * across the order's counted payment intents, excluding payment_returned. Always returned
         * to merchant credentials and omitted from buyer reads. Open states take precedence in
         * this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
         * other. Otherwise the most severe closed state wins: lost, won, prevented,
         * inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_status (Optional): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillments (Required): Array of
         * {@link Fulfillment}. Fulfillments created for the order, each covering a set of its line
         * items. fulfillments[] (Value): {@link Fulfillment}. Work required to deliver an order's
         * items. gift_card_estimate (Optional): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor. An estimate of
         * how an order total splits between gift cards and the payment processor, and whether gift
         * cards can pay it. gift_card_settlements (Required): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements[] (Value): {@link OrderGiftCardSettlement}. A gift card redemption
         * applied to an order payment, with the amount, tip, and gift card.
         * gift_card_tender_enabled (Required): boolean. Whether gift cards can pay for this order
         * now. Gift cards pay only USD orders that still accept changes, are not subscription
         * purchases, and whose merchant has at least one gift card that is not closed in this
         * environment. Recomputed on each read; a spent but open card still counts. gift_cards
         * (Required): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
         * order, with each card's available balance. gift_cards[] (Value): {@link
         * OrderGiftCardSelection}. A gift card available to pay an order, with its available
         * balance and the last four characters of its code. governing_delivery_selection_id
         * (Required): string or null. ID of the delivery selection that governs this order,
         * including pickup choices without a delivery destination: the checkout's provisional
         * selection before payment, and the selection a payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". handover (Optional): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. Every physical item is handed to the buyer at
         * this location when the order is paid. Replaces a delivery selection. internal_note
         * (Optional): string. A note for your team. Buyer reads leave it out.
         * inventory_exception_reason (Optional): string. Why inventory could not be committed
         * after payment. The cause remains after resolution. Omitted when no reason was recorded.
         * Unrecognized reasons are returned as other; new values may be added. Value enum:
         * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
         * "auto_refund_failed", "policy_resolution_failed", "other".
         * inventory_exception_resolution_message (Optional): string. The merchant note supplied
         * when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_status (Optional): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_reservation_id (Optional): string. The reservation holding stock for this
         * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this order's
         * tracked demand is routed. Required before an order containing tracked variants can hold
         * stock. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. invoice_id (Required):
         * string or null. The invoice associated with this order. Null when the order has no
         * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_items (Required): Array of {@link
         * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
         * quantities. line_items[] (Value): {@link OrderLineItem}. An item purchased in an order.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order_id
         * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable order
         * number for receipts and merchant reference. origin (Optional): string. How the order was
         * created. invoice means a Quick Pay invoice created the order; attaching an invoice to an
         * existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
         * "checkout", "api", "subscription", "invoice". paid_at (Required): string or null. When
         * `payment_status` became `paid`, including a final capture that releases the remaining
         * balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_collection
         * (Optional): {@link PaymentCollection}. Payment options and collection instructions for
         * the order's outstanding balance. Omitted when collection is unavailable to this caller.
         * Client-side details for collecting payment from the buyer, such as the Stripe settings
         * to initialize Stripe.js. payment_intent_ids (Required): Array of string. IDs of the
         * payment intents created to collect this order. payment_intent_ids[] (Value): string.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
         * `payment_intents`. payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_link_id (Optional): string. Payment link
         * whose checkout created this order. Absent for orders that did not come from a payment
         * link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_status (Required): string. Collection progress.
         * An invoice write-off also completes collection without receiving the written-off amount.
         * Value enum: "unpaid", "partially_paid", "paid". prepayment_order_id (Required): string
         * or null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". pricing_amounts (Required):
         * {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. The money totals for an order or invoice: subtotal, discounts,
         * charges, tax, requested tip, and total. refund_ids (Required): Array of string. IDs of
         * the refunds that name this order. This includes refunds Flint makes to return a payment
         * it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_status (Required): string. Refund progress for
         * collected money. Refunds with `reason` `payment_returned` return money the order never
         * received and don't count. Value enum: "none", "partially_refunded", "refunded".
         * return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
         * Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements[] (Value): {@link OrderReturnCreditSettlement}. A return
         * credit applied to an order payment, with the amount and the return and resolution it
         * came from. return_resolution_id (Optional): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". settlement_amounts (Required): {@link
         * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
         * written off, and settled as tips, and what is still outstanding. The bill settlement
         * amounts plus order overpayments, settled tips, debt discharged by final capture, and
         * value order edits removed. Money collected, returned, waived, and still owed on a bill.
         * setup_collection (Optional): {@link SetupCollection}. Instructions for saving a payment
         * method for a subscription order. Omitted when setup is unavailable. Client guidance for
         * saving a payment method on the merchant's connected account. status (Required): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". subscription (Optional): {@link ExpandedSubscriptionSummary} or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's
         * summary fields, including status, billing period, and next billing time, returned when
         * the subscription is expanded. subscription.anyOf[2] (Value): null. subscription_cycle
         * (Optional): integer. Charged subscription cycle associated with this order. Signup is
         * cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_delivery_changed_at (Optional): string. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_number (Required): integer or null.
         * Position of this delivery among the deliveries one charge paid for, starting at 2. Null
         * when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_id (Optional): string. ID of the subscription this order bills. Absent on
         * an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
         * summary included when `expand` names `subscription_plan`; `null` when expanded and this
         * order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. ID of the subscription plan this order bills.
         * Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions[] (Value): string. Value enum: "close",
         * "pay", "resolve_inventory_exception". tax (Required): {@link OrderTax}. The order's tax
         * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction
         * rows. An order's tax state, including its mode, price mode, status, location, exemption,
         * and tax breakdowns. ticketed_event (Optional): {@link TicketedEvent}. Event and tickets
         * this order sold through an event payment link. Absent on other orders. Event details for
         * a ticketed order: name, location, start time, time zone, and the tickets issued. tips
         * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled,
         * and refunded amounts. A tip cleared before payment stays listed as canceled. tips[]
         * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
         * amounts, status, and how it was paid. updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Order
         * version for optimistic concurrency. Send this value as the expected version when
         * changing the order. Increases with every change to the order. Ignore an order webhook
         * snapshot whose version is lower than one you have already applied. Format: int64.
         */
        "object": {
            /**
             * The payment attempt currently collecting this order. Omitted when no attempt is
             * active or its collection surface belongs to another caller. An attempt to pay an
             * order.
             */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "active_payment_review_id": string | null;
            /**
             * The amounts authorized and still capturable on the order's payments. The amounts
             * authorized and still capturable on an order's payments, with the authorization
             * expiry.
             */
            "authorization_amounts"?: OrderAuthorizationAmounts;
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * Buyer contact supplied with payment or saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /** A note to the buyer. */
            "buyer_note"?: string;
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional
             * charge applied to an order.
             */
            "charges": Array<OrderCharge>;
            /**
             * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_ids": Array<string>;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer.
             */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. [] (Value): {@link DeferredPromotion}. A promotion
             * accepted at subscription signup for the subscription's first charged cycle. It does
             * not discount the signup order.
             */
            "deferred_promotions": Array<DeferredPromotion>;
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. Method, type and recipient of governing_delivery_selection_id.
             * delivery_destination contains the resolved address. These values describe the same
             * selection.
             */
            "delivery"?: OrderDeliverySummary;
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. Where an
             * order is delivered: the address, the recipient, and where the destination came from.
             */
            "delivery_destination"?: OrderDeliveryDestination;
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. [] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion.
             */
            "discounts": Array<OrderDiscount>;
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
             * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "dispute_status"?: "none"
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed".
             */
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            /**
             * Fulfillments created for the order, each covering a set of its line items. []
             * (Value): {@link Fulfillment}. Work required to deliver an order's items.
             */
            "fulfillments": Array<Fulfillment>;
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. An estimate of how an order total splits between gift cards and the
             * payment processor, and whether gift cards can pay it.
             */
            "gift_card_estimate"?: OrderGiftCardEstimate;
            /**
             * The gift card redemptions applied to the order's payments. [] (Value): {@link
             * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
             * the amount, tip, and gift card.
             */
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts.
             */
            "gift_card_tender_enabled": boolean;
            /**
             * Gift cards available to pay the order, with each card's available balance. []
             * (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with
             * its available balance and the last four characters of its code.
             */
            "gift_cards": Array<OrderGiftCardSelection>;
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "governing_delivery_selection_id": string | null;
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. Every physical item is
             * handed to the buyer at this location when the order is paid. Replaces a delivery
             * selection.
             */
            "handover"?: OrderHandover;
            /** A note for your team. Buyer reads leave it out. */
            "internal_note"?: string;
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other".
             */
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer.
             */
            "inventory_exception_resolution_message"?: string;
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved".
             */
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            /**
             * The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id"?: string;
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string | null;
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities. []
             * (Value): {@link OrderLineItem}. An item purchased in an order.
             */
            "line_items": Array<OrderLineItem>;
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
             * Unique identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /** Human-readable order number for receipts and merchant reference. */
            "order_number"?: string;
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             */
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "paid_at": string | null;
            /**
             * Payment options and collection instructions for the order's outstanding balance.
             * Omitted when collection is unavailable to this caller. Client-side details for
             * collecting payment from the buyer, such as the Stripe settings to initialize
             * Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents created to collect this order. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             */
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "prepayment_order_id": string | null;
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. The money totals for an order or invoice: subtotal, discounts, charges, tax,
             * requested tip, and total.
             */
            "pricing_amounts": PricingAmounts;
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. [] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from.
             */
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. The bill settlement amounts plus order
             * overpayments, settled tips, debt discharged by final capture, and value order edits
             * removed. Money collected, returned, waived, and still owed on a bill.
             */
            "settlement_amounts": OrderSettlementAmounts;
            /**
             * Instructions for saving a payment method for a subscription order. Omitted when
             * setup is unavailable. Client guidance for saving a payment method on the merchant's
             * connected account.
             */
            "setup_collection"?: SetupCollection;
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed".
             */
            "status": "open" | "closed" | (string & {});
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary
             * fields, including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[2] (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             */
            "subscription_cycle"?: number;
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "subscription_delivery_changed_at"?: string;
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24.
             */
            "subscription_delivery_number": number | null;
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
             * subscription plan's summary fields, including name, billing interval, currency, and
             * status, returned when the plan is expanded. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. [] enum: "close", "pay",
             * "resolve_inventory_exception". [] (Value): string. Value enum: "close", "pay",
             * "resolve_inventory_exception".
             */
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
             * location, exemption, and tax breakdowns.
             */
            "tax": OrderTax;
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. Event details for a ticketed order: name, location, start time, time zone,
             * and the tickets issued.
             */
            "ticketed_event"?: TicketedEvent;
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on
             * an order, with its requested, settled, and refunded amounts, status, and how it was
             * paid.
             */
            "tips": Array<Tip>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. Format:
             * int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Order>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.partially_refunded". */
    "event_type"?: "order.partially_refunded";
});
/** An attempt to pay an order. */
export type OrderPaymentAttempt = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "expected_outstanding_money": MoneyValue;
    /**
     *  [] (Value): {@link PaymentAttemptGiftCardRedemption}. A gift card redemption made as part
     * of an order payment attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Value enum: "payment", "setup", "settlement". */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    /**
     * Unique identifier for this order payment attempt, prefixed `opat_`. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "order_payment_attempt_id": string;
    /**
     *  [] (Value): {@link PaymentAttemptPaymentIntent}. A payment intent used as one leg of an
     * order payment attempt, with its amount, status, tip, and latest error.
     */
    "payment_intents": Array<PaymentAttemptPaymentIntent>;
    /**
     * Set when the pay request sent save_payment_method: true and the attempt paid without saving
     * the payment method. A card typed into checkout and saved has no entry here; read
     * payment_method_save on the checkout session for a card waiting for confirmation. What became
     * of the buyer's save_payment_method. The payment does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     *  [] (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
     * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
     * standalone PaymentIntent through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "requires_retry", "finalizing", "succeeded", "failed", "expired", "canceled".
     */
    "status": "processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
        | "requires_retry"
        | "finalizing"
        | "succeeded"
        | "failed"
        | "expired"
        | "canceled"
        | (string & {});
    /**
     * Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an
     * unmapped non-payment reason report other. Canceled and expired attempts include a reason
     * only when it adds information beyond status. New values may be added. Value enum:
     * "authorization_canceled", "canceled_on_reader", "reader_unavailable",
     * "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source",
     * "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch",
     * "other", "payment_authorization_canceled", "payment_authorization_expired",
     * "payment_confirmation_rejected", "payment_link_capacity_claim_failed",
     * "payment_link_capacity_validation_failed", "payment_method_activation_pending",
     * "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable",
     * "payment_returned", "payment_source_binding_failed", "payment_source_conflict",
     * "payment_source_not_updatable", "payment_source_ownership_mismatch",
     * "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed",
     * "setup_result_incomplete", "tip_allocation_sync_failed",
     * "zero_balance_hold_acquisition_failed".
     */
    "status_reason"?: "authorization_canceled"
        | "canceled_on_reader"
        | "reader_unavailable"
        | "coupon_reservation_failed"
        | "gift_card_hold_acquisition_failed"
        | "invalid_payment_source"
        | "inventory_unavailable"
        | "order_changed_before_payment"
        | "order_payment_customer_mismatch"
        | "other"
        | "payment_authorization_canceled"
        | "payment_authorization_expired"
        | "payment_confirmation_rejected"
        | "payment_link_capacity_claim_failed"
        | "payment_link_capacity_validation_failed"
        | "payment_method_activation_pending"
        | "payment_method_required"
        | "payment_option_not_allowed"
        | "payment_option_unavailable"
        | "payment_returned"
        | "payment_source_binding_failed"
        | "payment_source_conflict"
        | "payment_source_not_updatable"
        | "payment_source_ownership_mismatch"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {});
};
/** A page of `OrderPaymentAttempt` objects. */
export type OrderPaymentAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderPaymentAttempt}. An attempt to pay an order.
     */
    "data": Array<OrderPaymentAttempt>;
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
/** What became of the buyer's save_payment_method. The payment does not depend on it. */
export type OrderPaymentAttemptPaymentMethodSave = {
    /**
     * payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or
     * Affirm, and checkout saves only a card typed into it; save_payment_method_types on the
     * checkout session lists what it saves. other: a reason this API version does not name. The
     * values can grow. Value enum: "payment_method_not_saveable", "other".
     */
    "reason": "payment_method_not_saveable" | "other" | (string & {});
    /**
     * not_saved: the payment went ahead without saving the payment method. The values can grow.
     * Value enum: "not_saved".
     */
    "status": "not_saved" | (string & {});
};
/** A response containing `OrderPaymentAttempt` data. */
export type OrderPaymentAttemptResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to pay an
     * order.
     */
    "data": OrderPaymentAttempt;
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
 * Identifies a payment intent to confirm for an order and the credential to use: a token, a saved
 * payment method, a Stripe confirmation token, or the attached source.
 */
export type OrderPaymentIntentSelection = ((OrderPaymentIntentSelectionToken)
    | (OrderPaymentIntentSelectionPaymentMethod)
    | (OrderPaymentIntentSelectionStripeConfirmationToken)
    | (OrderPaymentIntentSelectionAttached)
    | (OrderPaymentIntentSelectionReader)
    | (Record<string, unknown>));
/** Confirm using the payment source already attached. */
export type OrderPaymentIntentSelectionAttached = {
    /** Value enum: "attached". */
    "credential_type": "attached" | (string & {});
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
};
/** Confirm using the payment source already attached. */
export type OrderPaymentIntentSelectionAttachedInput = {
    /** Value enum: "attached". */
    "credential_type": "attached";
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
};
/**
 * Identifies a payment intent to confirm for an order and the credential to use: a token, a saved
 * payment method, a Stripe confirmation token, or the attached source.
 */
export type OrderPaymentIntentSelectionInput = ((OrderPaymentIntentSelectionTokenInput)
    | (OrderPaymentIntentSelectionPaymentMethodInput)
    | (OrderPaymentIntentSelectionStripeConfirmationTokenInput)
    | (OrderPaymentIntentSelectionAttachedInput)
    | (OrderPaymentIntentSelectionReaderInput));
/** The `payment_method` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionPaymentMethod = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
/** The `payment_method` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionPaymentMethodInput = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method";
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
/** The `reader` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionReader = {
    /** Selects payment collection on a reader. Value enum: "reader". */
    "credential_type": "reader" | (string & {});
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation’s scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTip;
};
/** The `reader` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionReaderInput = {
    /** Selects payment collection on a reader. Value enum: "reader". */
    "credential_type": "reader";
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation’s scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTipInput;
};
/** The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionStripeConfirmationToken = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionStripeConfirmationTokenInput = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionToken = {
    /** Value enum: "token". */
    "credential_type": "token" | (string & {});
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/** The `token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionTokenInput = {
    /** Value enum: "token". */
    "credential_type": "token";
    /** Payment intent to confirm. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelection = {
    /**  [] (Value): string. minLength: 1. */
    "digital_wallets"?: Array<string>;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelectionInput = OrderPaymentSourceCardSelection;
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelection = {
    /**
     * Card options for the payment source selected on an order payment intent, including which
     * digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelection;
};
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelectionInput = {
    /**
     * Card options for the payment source selected on an order payment intent, including which
     * digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelectionInput;
};
export type OrderRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "active_payment_review_id": string | null;
            "authorization_amounts"?: OrderAuthorizationAmounts;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_note"?: string;
            "charges": Array<OrderCharge>;
            "checkout_session_ids": Array<string>;
            "client_reference": string | null;
            "closed_at"?: string;
            "closed_reason"?: "invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {});
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "deferred_promotions": Array<DeferredPromotion>;
            "delivery"?: OrderDeliverySummary;
            "delivery_destination"?: OrderDeliveryDestination;
            "discounts": Array<OrderDiscount>;
            "dispute_status"?: "none"
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
            "external_reference_id"?: string;
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            "fulfillments": Array<Fulfillment>;
            "gift_card_estimate"?: OrderGiftCardEstimate;
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            "gift_card_tender_enabled": boolean;
            "gift_cards": Array<OrderGiftCardSelection>;
            "governing_delivery_selection_id": string | null;
            "handover"?: OrderHandover;
            "internal_note"?: string;
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            "inventory_exception_resolution_message"?: string;
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            "inventory_reservation_id"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "invoice_id": string | null;
            "line_items": Array<OrderLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order_id": string;
            "order_number"?: string;
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            "paid_at": string | null;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link_id"?: string;
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            "prepayment_order_id": string | null;
            "pricing_amounts": PricingAmounts;
            "refund_ids": Array<string>;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            "return_resolution_id"?: string;
            "settlement_amounts": OrderSettlementAmounts;
            "setup_collection"?: SetupCollection;
            "status": "open" | "closed" | (string & {});
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            "subscription_cycle"?: number;
            "subscription_delivery_changed_at"?: string;
            "subscription_delivery_number": number | null;
            "subscription_id"?: string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            "tax": OrderTax;
            "ticketed_event"?: TicketedEvent;
            "tips": Array<Tip>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Order>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "active_payment_review_id": string | null;
            "authorization_amounts"?: OrderAuthorizationAmounts;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_note"?: string;
            "charges": Array<OrderCharge>;
            "checkout_session_ids": Array<string>;
            "client_reference": string | null;
            "closed_at"?: string;
            "closed_reason"?: "invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {});
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "deferred_promotions": Array<DeferredPromotion>;
            "delivery"?: OrderDeliverySummary;
            "delivery_destination"?: OrderDeliveryDestination;
            "discounts": Array<OrderDiscount>;
            "dispute_status"?: "none"
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
            "external_reference_id"?: string;
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            "fulfillments": Array<Fulfillment>;
            "gift_card_estimate"?: OrderGiftCardEstimate;
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            "gift_card_tender_enabled": boolean;
            "gift_cards": Array<OrderGiftCardSelection>;
            "governing_delivery_selection_id": string | null;
            "handover"?: OrderHandover;
            "internal_note"?: string;
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            "inventory_exception_resolution_message"?: string;
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            "inventory_reservation_id"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "invoice_id": string | null;
            "line_items": Array<OrderLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order_id": string;
            "order_number"?: string;
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            "paid_at": string | null;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link_id"?: string;
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            "prepayment_order_id": string | null;
            "pricing_amounts": PricingAmounts;
            "refund_ids": Array<string>;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            "return_resolution_id"?: string;
            "settlement_amounts": OrderSettlementAmounts;
            "setup_collection"?: SetupCollection;
            "status": "open" | "closed" | (string & {});
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            "subscription_cycle"?: number;
            "subscription_delivery_changed_at"?: string;
            "subscription_delivery_number": number | null;
            "subscription_id"?: string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            "tax": OrderTax;
            "ticketed_event"?: TicketedEvent;
            "tips": Array<Tip>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Order>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.refunded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.refunded";
});
/**
 * The `order.refunded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type OrderRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
     * currently collecting this order. Omitted when no attempt is active or its collection surface
     * belongs to another caller. An attempt to pay an order. object.active_payment_review_id
     * (Required): string or null. The earliest open or resolving payment review on this order's
     * counted payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. The amounts authorized and still capturable on an order's payments, with the
     * authorization expiry. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer. Buyer contact
     * supplied with payment or saved during checkout. object.buyer_note (Optional): string. A note
     * to the buyer. object.charges (Required): Array of {@link OrderCharge}. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. object.charges[] (Value): {@link OrderCharge}. An additional charge applied to an
     * order. object.checkout_session_ids (Required): Array of string. IDs of the checkout sessions
     * opened for this order. object.checkout_session_ids[] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference (Required): string or null. The
     * reference the payment link URL or resolve request carried, such as your user ID. `null` when
     * none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255. object.closed_at (Optional):
     * string. When the order closed. Present exactly when status is closed. Set once at the
     * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_reason (Optional): string. Why the order closed. Present exactly when status
     * is closed. Set once at closure. Unrecognized reasons are returned as other; new values may
     * be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     * object.closed_reason_message (Optional): string. The caller note supplied when closing the
     * order. System closures leave it absent. It is not shown to the buyer. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_field_answers (Required): Array of {@link CustomFieldAnswer}. The buyer's
     * answers to the payment link's custom fields, recorded when checkout started, in the order
     * the link showed the fields. Each answer keeps the field's key, label, and type from that
     * moment, so later changes to the link don't change it. Optional fields the buyer left blank
     * are left out. Read-only. Empty when the order didn't come from a payment link, the link had
     * no custom fields, or the buyer answered none. Orders created before Flint recorded answers
     * here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`.
     * Deleting the customer removes the answers. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deferred_promotions (Required): Array of {@link DeferredPromotion}. Promotions
     * accepted at subscription signup. They attach when the subscription is provisioned and first
     * discount its first charged cycle. They do not discount this order and are separate from
     * discounts and order totals. Always present; empty when no promotions are deferred.
     * object.deferred_promotions[] (Value): {@link DeferredPromotion}. A promotion accepted at
     * subscription signup for the subscription's first charged cycle. It does not discount the
     * signup order. object.delivery (Optional): {@link OrderDeliverySummary}. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order. Method, type and
     * recipient of governing_delivery_selection_id. delivery_destination contains the resolved
     * address. These values describe the same selection. object.delivery_destination (Optional):
     * {@link OrderDeliveryDestination}. The shipment or local-delivery destination committed for
     * this order. Payment freezes this value; fulfillment recipient changes do not replace it.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. Where an order is delivered: the address, the recipient, and where the destination
     * came from. object.discounts (Required): Array of {@link OrderDiscount}. Discounts applied to
     * the order, each with its amount, status, and the line items and charges it covers.
     * object.discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion. object.dispute_status (Optional): string. Aggregate dispute state across the
     * order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_status
     * (Optional): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed". object.fulfillments (Required): Array of {@link Fulfillment}. Fulfillments created
     * for the order, each covering a set of its line items. object.fulfillments[] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items. object.gift_card_estimate
     * (Optional): {@link OrderGiftCardEstimate}. An estimate of how the order balance splits
     * between gift cards and the payment processor. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     * object.gift_card_settlements (Required): Array of {@link OrderGiftCardSettlement}. The gift
     * card redemptions applied to the order's payments. object.gift_card_settlements[] (Value):
     * {@link OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
     * the amount, tip, and gift card. object.gift_card_tender_enabled (Required): boolean. Whether
     * gift cards can pay for this order now. Gift cards pay only USD orders that still accept
     * changes, are not subscription purchases, and whose merchant has at least one gift card that
     * is not closed in this environment. Recomputed on each read; a spent but open card still
     * counts. object.gift_cards (Required): Array of {@link OrderGiftCardSelection}. Gift cards
     * available to pay the order, with each card's available balance. object.gift_cards[] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code. object.governing_delivery_selection_id
     * (Required): string or null. ID of the delivery selection that governs this order, including
     * pickup choices without a delivery destination: the checkout's provisional selection before
     * payment, and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.handover (Optional): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     * object.internal_note (Optional): string. A note for your team. Buyer reads leave it out.
     * object.inventory_exception_reason (Optional): string. Why inventory could not be committed
     * after payment. The cause remains after resolution. Omitted when no reason was recorded.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * object.inventory_exception_resolution_message (Optional): string. The merchant note supplied
     * when resolving the inventory exception. It is not shown to the buyer.
     * object.inventory_exception_status (Optional): string. Whether an inventory problem after
     * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * object.inventory_reservation_id (Optional): string. The reservation holding stock for this
     * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this
     * order's tracked demand is routed. Required before an order containing tracked variants can
     * hold stock. Where an order, payment link, or reservation routes inventory from: a fixed
     * Location, an inventory allocation policy, or one policy revision. object.invoice_id
     * (Required): string or null. The invoice associated with this order. Null when the order has
     * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_items (Required): Array of {@link
     * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
     * quantities. object.line_items[] (Value): {@link OrderLineItem}. An item purchased in an
     * order. object.merchant_id (Required): string. ID of the merchant this resource belongs to.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order_id
     * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string. Human-readable
     * order number for receipts and merchant reference. object.origin (Optional): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". object.paid_at (Required): string or null.
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.payment_collection (Optional): {@link
     * PaymentCollection}. Payment options and collection instructions for the order's outstanding
     * balance. Omitted when collection is unavailable to this caller. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Required): Array of string. IDs of the payment intents created to
     * collect this order. object.payment_intent_ids[] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.payment_link_id (Optional): string. Payment link
     * whose checkout created this order. Absent for orders that did not come from a payment link.
     * Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_status (Required): string. Collection
     * progress. An invoice write-off also completes collection without receiving the written-off
     * amount. Value enum: "unpaid", "partially_paid", "paid". object.prepayment_order_id
     * (Required): string or null. Order that paid for this prepaid delivery. Null when this is not
     * a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.pricing_amounts
     * (Required): {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges,
     * tax, requested tip, and total. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total. object.refund_ids (Required): Array of
     * string. IDs of the refunds that name this order. This includes refunds Flint makes to return
     * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. object.refund_ids[] (Value): string.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_status (Required): string. Refund
     * progress for collected money. Refunds with `reason` `payment_returned` return money the
     * order never received and don't count. Value enum: "none", "partially_refunded", "refunded".
     * object.return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. object.return_credit_settlements[]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from. object.return_resolution_id
     * (Optional): string. ID of the return resolution that created this order as a replacement.
     * Omitted for orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * object.settlement_amounts (Required): {@link OrderSettlementAmounts}. How much of the order
     * has been paid, refunded, credited, written off, and settled as tips, and what is still
     * outstanding. The bill settlement amounts plus order overpayments, settled tips, debt
     * discharged by final capture, and value order edits removed. Money collected, returned,
     * waived, and still owed on a bill. object.setup_collection (Optional): {@link
     * SetupCollection}. Instructions for saving a payment method for a subscription order. Omitted
     * when setup is unavailable. Client guidance for saving a payment method on the merchant's
     * connected account. object.status (Required): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed". object.subscription (Optional):
     * {@link ExpandedSubscriptionSummary} or null. Subscription summary included when `expand`
     * names `subscription`; `null` when expanded and this order does not bill a subscription.
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. object.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded.
     * object.subscription.anyOf[2] (Value): null. object.subscription_cycle (Optional): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * object.subscription_delivery_changed_at (Optional): string. Time the subscriber changed
     * delivery after this paid renewal was prepared. The order keeps its committed destination
     * until you correct it or refund and replace it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.subscription_delivery_number (Required): integer or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * object.subscription_id (Optional): string. ID of the subscription this order bills. Absent
     * on an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
     * summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. ID of the subscription plan this order
     * bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception".
     * object.supported_actions[] (Value): string. Value enum: "close", "pay",
     * "resolve_inventory_exception". object.tax (Required): {@link OrderTax}. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns. object.ticketed_event (Optional): {@link TicketedEvent}. Event and tickets this
     * order sold through an event payment link. Absent on other orders. Event details for a
     * ticketed order: name, location, start time, time zone, and the tickets issued. object.tips
     * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled, and
     * refunded amounts. A tip cleared before payment stays listed as canceled. object.tips[]
     * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded amounts,
     * status, and how it was paid. object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         * active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
         * currently collecting this order. Omitted when no attempt is active or its collection
         * surface belongs to another caller. An attempt to pay an order. active_payment_review_id
         * (Required): string or null. The earliest open or resolving payment review on this
         * order's counted payments. `null` when no review is open or resolving. List reviews with
         * GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". authorization_amounts (Optional): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. The amounts authorized and still capturable on an order's payments, with the
         * authorization expiry. buyer_contact (Optional): {@link CheckoutBuyerContact}. Email and
         * phone saved when payment started, from the pay request's buyer_contact or the paying
         * checkout session's saved contact. It does not change the linked customer. Buyer contact
         * supplied with payment or saved during checkout. buyer_note (Optional): string. A note to
         * the buyer. charges (Required): Array of {@link OrderCharge}. Charges added to the order,
         * such as delivery or service fees, each with its applied amount, tax, and refunded
         * amount. charges[] (Value): {@link OrderCharge}. An additional charge applied to an
         * order. checkout_session_ids (Required): Array of string. IDs of the checkout sessions
         * opened for this order. checkout_session_ids[] (Value): string. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". client_reference (Required): string or null. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. minLength: 1. maxLength: 255. closed_at
         * (Optional): string. When the order closed. Present exactly when status is closed. Set
         * once at the transition and never changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string. Why the order closed. Present
         * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "invoice_voided", "paid",
         * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason_message (Optional): string. The
         * caller note supplied when closing the order. System closures leave it absent. It is not
         * shown to the buyer. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * maxItems: 20. custom_field_answers[] (Value): {@link CustomFieldAnswer}. One answer to a
         * payment link custom field, with the field as it was when checkout started.
         * `custom_field_type` determines the type of `value`. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer this order belongs to.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". deferred_promotions (Required): Array of
         * {@link DeferredPromotion}. Promotions accepted at subscription signup. They attach when
         * the subscription is provisioned and first discount its first charged cycle. They do not
         * discount this order and are separate from discounts and order totals. Always present;
         * empty when no promotions are deferred. deferred_promotions[] (Value): {@link
         * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's
         * first charged cycle. It does not discount the signup order. delivery (Optional): {@link
         * OrderDeliverySummary}. Method, type and recipient of governing_delivery_selection_id.
         * The address remains in delivery_destination. Omitted when no shipment or local-delivery
         * selection governs the order. Method, type and recipient of
         * governing_delivery_selection_id. delivery_destination contains the resolved address.
         * These values describe the same selection. delivery_destination (Optional): {@link
         * OrderDeliveryDestination}. The shipment or local-delivery destination committed for this
         * order. Payment freezes this value; fulfillment recipient changes do not replace it.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. Where an order is delivered: the address, the recipient, and where the
         * destination came from. discounts (Required): Array of {@link OrderDiscount}. Discounts
         * applied to the order, each with its amount, status, and the line items and charges it
         * covers. discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with
         * its amount, status, and the line items and charges it covers. It comes from a manual
         * discount or a promotion. dispute_status (Optional): string. Aggregate dispute state
         * across the order's counted payment intents, excluding payment_returned. Always returned
         * to merchant credentials and omitted from buyer reads. Open states take precedence in
         * this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
         * other. Otherwise the most severe closed state wins: lost, won, prevented,
         * inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_status (Optional): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillments (Required): Array of
         * {@link Fulfillment}. Fulfillments created for the order, each covering a set of its line
         * items. fulfillments[] (Value): {@link Fulfillment}. Work required to deliver an order's
         * items. gift_card_estimate (Optional): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor. An estimate of
         * how an order total splits between gift cards and the payment processor, and whether gift
         * cards can pay it. gift_card_settlements (Required): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements[] (Value): {@link OrderGiftCardSettlement}. A gift card redemption
         * applied to an order payment, with the amount, tip, and gift card.
         * gift_card_tender_enabled (Required): boolean. Whether gift cards can pay for this order
         * now. Gift cards pay only USD orders that still accept changes, are not subscription
         * purchases, and whose merchant has at least one gift card that is not closed in this
         * environment. Recomputed on each read; a spent but open card still counts. gift_cards
         * (Required): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
         * order, with each card's available balance. gift_cards[] (Value): {@link
         * OrderGiftCardSelection}. A gift card available to pay an order, with its available
         * balance and the last four characters of its code. governing_delivery_selection_id
         * (Required): string or null. ID of the delivery selection that governs this order,
         * including pickup choices without a delivery destination: the checkout's provisional
         * selection before payment, and the selection a payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". handover (Optional): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. Every physical item is handed to the buyer at
         * this location when the order is paid. Replaces a delivery selection. internal_note
         * (Optional): string. A note for your team. Buyer reads leave it out.
         * inventory_exception_reason (Optional): string. Why inventory could not be committed
         * after payment. The cause remains after resolution. Omitted when no reason was recorded.
         * Unrecognized reasons are returned as other; new values may be added. Value enum:
         * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
         * "auto_refund_failed", "policy_resolution_failed", "other".
         * inventory_exception_resolution_message (Optional): string. The merchant note supplied
         * when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_status (Optional): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_reservation_id (Optional): string. The reservation holding stock for this
         * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this order's
         * tracked demand is routed. Required before an order containing tracked variants can hold
         * stock. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. invoice_id (Required):
         * string or null. The invoice associated with this order. Null when the order has no
         * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_items (Required): Array of {@link
         * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
         * quantities. line_items[] (Value): {@link OrderLineItem}. An item purchased in an order.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order_id
         * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable order
         * number for receipts and merchant reference. origin (Optional): string. How the order was
         * created. invoice means a Quick Pay invoice created the order; attaching an invoice to an
         * existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
         * "checkout", "api", "subscription", "invoice". paid_at (Required): string or null. When
         * `payment_status` became `paid`, including a final capture that releases the remaining
         * balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_collection
         * (Optional): {@link PaymentCollection}. Payment options and collection instructions for
         * the order's outstanding balance. Omitted when collection is unavailable to this caller.
         * Client-side details for collecting payment from the buyer, such as the Stripe settings
         * to initialize Stripe.js. payment_intent_ids (Required): Array of string. IDs of the
         * payment intents created to collect this order. payment_intent_ids[] (Value): string.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
         * `payment_intents`. payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_link_id (Optional): string. Payment link
         * whose checkout created this order. Absent for orders that did not come from a payment
         * link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_status (Required): string. Collection progress.
         * An invoice write-off also completes collection without receiving the written-off amount.
         * Value enum: "unpaid", "partially_paid", "paid". prepayment_order_id (Required): string
         * or null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". pricing_amounts (Required):
         * {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. The money totals for an order or invoice: subtotal, discounts,
         * charges, tax, requested tip, and total. refund_ids (Required): Array of string. IDs of
         * the refunds that name this order. This includes refunds Flint makes to return a payment
         * it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_status (Required): string. Refund progress for
         * collected money. Refunds with `reason` `payment_returned` return money the order never
         * received and don't count. Value enum: "none", "partially_refunded", "refunded".
         * return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
         * Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements[] (Value): {@link OrderReturnCreditSettlement}. A return
         * credit applied to an order payment, with the amount and the return and resolution it
         * came from. return_resolution_id (Optional): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". settlement_amounts (Required): {@link
         * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
         * written off, and settled as tips, and what is still outstanding. The bill settlement
         * amounts plus order overpayments, settled tips, debt discharged by final capture, and
         * value order edits removed. Money collected, returned, waived, and still owed on a bill.
         * setup_collection (Optional): {@link SetupCollection}. Instructions for saving a payment
         * method for a subscription order. Omitted when setup is unavailable. Client guidance for
         * saving a payment method on the merchant's connected account. status (Required): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". subscription (Optional): {@link ExpandedSubscriptionSummary} or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's
         * summary fields, including status, billing period, and next billing time, returned when
         * the subscription is expanded. subscription.anyOf[2] (Value): null. subscription_cycle
         * (Optional): integer. Charged subscription cycle associated with this order. Signup is
         * cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_delivery_changed_at (Optional): string. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_number (Required): integer or null.
         * Position of this delivery among the deliveries one charge paid for, starting at 2. Null
         * when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_id (Optional): string. ID of the subscription this order bills. Absent on
         * an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
         * summary included when `expand` names `subscription_plan`; `null` when expanded and this
         * order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. ID of the subscription plan this order bills.
         * Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions[] (Value): string. Value enum: "close",
         * "pay", "resolve_inventory_exception". tax (Required): {@link OrderTax}. The order's tax
         * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction
         * rows. An order's tax state, including its mode, price mode, status, location, exemption,
         * and tax breakdowns. ticketed_event (Optional): {@link TicketedEvent}. Event and tickets
         * this order sold through an event payment link. Absent on other orders. Event details for
         * a ticketed order: name, location, start time, time zone, and the tickets issued. tips
         * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled,
         * and refunded amounts. A tip cleared before payment stays listed as canceled. tips[]
         * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
         * amounts, status, and how it was paid. updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Order
         * version for optimistic concurrency. Send this value as the expected version when
         * changing the order. Increases with every change to the order. Ignore an order webhook
         * snapshot whose version is lower than one you have already applied. Format: int64.
         */
        "object": {
            /**
             * The payment attempt currently collecting this order. Omitted when no attempt is
             * active or its collection surface belongs to another caller. An attempt to pay an
             * order.
             */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "active_payment_review_id": string | null;
            /**
             * The amounts authorized and still capturable on the order's payments. The amounts
             * authorized and still capturable on an order's payments, with the authorization
             * expiry.
             */
            "authorization_amounts"?: OrderAuthorizationAmounts;
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * Buyer contact supplied with payment or saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /** A note to the buyer. */
            "buyer_note"?: string;
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional
             * charge applied to an order.
             */
            "charges": Array<OrderCharge>;
            /**
             * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_ids": Array<string>;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer.
             */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. [] (Value): {@link DeferredPromotion}. A promotion
             * accepted at subscription signup for the subscription's first charged cycle. It does
             * not discount the signup order.
             */
            "deferred_promotions": Array<DeferredPromotion>;
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. Method, type and recipient of governing_delivery_selection_id.
             * delivery_destination contains the resolved address. These values describe the same
             * selection.
             */
            "delivery"?: OrderDeliverySummary;
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. Where an
             * order is delivered: the address, the recipient, and where the destination came from.
             */
            "delivery_destination"?: OrderDeliveryDestination;
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. [] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion.
             */
            "discounts": Array<OrderDiscount>;
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
             * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "dispute_status"?: "none"
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed".
             */
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            /**
             * Fulfillments created for the order, each covering a set of its line items. []
             * (Value): {@link Fulfillment}. Work required to deliver an order's items.
             */
            "fulfillments": Array<Fulfillment>;
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. An estimate of how an order total splits between gift cards and the
             * payment processor, and whether gift cards can pay it.
             */
            "gift_card_estimate"?: OrderGiftCardEstimate;
            /**
             * The gift card redemptions applied to the order's payments. [] (Value): {@link
             * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
             * the amount, tip, and gift card.
             */
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts.
             */
            "gift_card_tender_enabled": boolean;
            /**
             * Gift cards available to pay the order, with each card's available balance. []
             * (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with
             * its available balance and the last four characters of its code.
             */
            "gift_cards": Array<OrderGiftCardSelection>;
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "governing_delivery_selection_id": string | null;
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. Every physical item is
             * handed to the buyer at this location when the order is paid. Replaces a delivery
             * selection.
             */
            "handover"?: OrderHandover;
            /** A note for your team. Buyer reads leave it out. */
            "internal_note"?: string;
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other".
             */
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer.
             */
            "inventory_exception_resolution_message"?: string;
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved".
             */
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            /**
             * The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id"?: string;
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string | null;
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities. []
             * (Value): {@link OrderLineItem}. An item purchased in an order.
             */
            "line_items": Array<OrderLineItem>;
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
             * Unique identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /** Human-readable order number for receipts and merchant reference. */
            "order_number"?: string;
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             */
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "paid_at": string | null;
            /**
             * Payment options and collection instructions for the order's outstanding balance.
             * Omitted when collection is unavailable to this caller. Client-side details for
             * collecting payment from the buyer, such as the Stripe settings to initialize
             * Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents created to collect this order. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             */
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "prepayment_order_id": string | null;
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. The money totals for an order or invoice: subtotal, discounts, charges, tax,
             * requested tip, and total.
             */
            "pricing_amounts": PricingAmounts;
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. [] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from.
             */
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. The bill settlement amounts plus order
             * overpayments, settled tips, debt discharged by final capture, and value order edits
             * removed. Money collected, returned, waived, and still owed on a bill.
             */
            "settlement_amounts": OrderSettlementAmounts;
            /**
             * Instructions for saving a payment method for a subscription order. Omitted when
             * setup is unavailable. Client guidance for saving a payment method on the merchant's
             * connected account.
             */
            "setup_collection"?: SetupCollection;
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed".
             */
            "status": "open" | "closed" | (string & {});
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary
             * fields, including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[2] (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             */
            "subscription_cycle"?: number;
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "subscription_delivery_changed_at"?: string;
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24.
             */
            "subscription_delivery_number": number | null;
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
             * subscription plan's summary fields, including name, billing interval, currency, and
             * status, returned when the plan is expanded. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. [] enum: "close", "pay",
             * "resolve_inventory_exception". [] (Value): string. Value enum: "close", "pay",
             * "resolve_inventory_exception".
             */
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
             * location, exemption, and tax breakdowns.
             */
            "tax": OrderTax;
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. Event details for a ticketed order: name, location, start time, time zone,
             * and the tickets issued.
             */
            "ticketed_event"?: TicketedEvent;
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on
             * an order, with its requested, settled, and refunded amounts, status, and how it was
             * paid.
             */
            "tips": Array<Tip>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. Format:
             * int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Order>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
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
 * The `order.refunded` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `active_payment_attempt`, `payment_collection`, `setup_collection`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
     * currently collecting this order. Omitted when no attempt is active or its collection surface
     * belongs to another caller. An attempt to pay an order. object.active_payment_review_id
     * (Required): string or null. The earliest open or resolving payment review on this order's
     * counted payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.authorization_amounts (Optional): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. The amounts authorized and still capturable on an order's payments, with the
     * authorization expiry. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer. Buyer contact
     * supplied with payment or saved during checkout. object.buyer_note (Optional): string. A note
     * to the buyer. object.charges (Required): Array of {@link OrderCharge}. Charges added to the
     * order, such as delivery or service fees, each with its applied amount, tax, and refunded
     * amount. object.charges[] (Value): {@link OrderCharge}. An additional charge applied to an
     * order. object.checkout_session_ids (Required): Array of string. IDs of the checkout sessions
     * opened for this order. object.checkout_session_ids[] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference (Required): string or null. The
     * reference the payment link URL or resolve request carried, such as your user ID. `null` when
     * none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255. object.closed_at (Optional):
     * string. When the order closed. Present exactly when status is closed. Set once at the
     * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.closed_reason (Optional): string. Why the order closed. Present exactly when status
     * is closed. Set once at closure. Unrecognized reasons are returned as other; new values may
     * be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     * object.closed_reason_message (Optional): string. The caller note supplied when closing the
     * order. System closures leave it absent. It is not shown to the buyer. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_field_answers (Required): Array of {@link CustomFieldAnswer}. The buyer's
     * answers to the payment link's custom fields, recorded when checkout started, in the order
     * the link showed the fields. Each answer keeps the field's key, label, and type from that
     * moment, so later changes to the link don't change it. Optional fields the buyer left blank
     * are left out. Read-only. Empty when the order didn't come from a payment link, the link had
     * no custom fields, or the buyer answered none. Orders created before Flint recorded answers
     * here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`.
     * Deleting the customer removes the answers. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.customer
     * (Optional): {@link ExpandedCustomerSummary} or null. Customer summary included when `expand`
     * names `customer`; `null` when expanded and no customer is linked. Present only when `expand`
     * includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. ID of the
     * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deferred_promotions (Required): Array of {@link DeferredPromotion}. Promotions
     * accepted at subscription signup. They attach when the subscription is provisioned and first
     * discount its first charged cycle. They do not discount this order and are separate from
     * discounts and order totals. Always present; empty when no promotions are deferred.
     * object.deferred_promotions[] (Value): {@link DeferredPromotion}. A promotion accepted at
     * subscription signup for the subscription's first charged cycle. It does not discount the
     * signup order. object.delivery (Optional): {@link OrderDeliverySummary}. Method, type and
     * recipient of governing_delivery_selection_id. The address remains in delivery_destination.
     * Omitted when no shipment or local-delivery selection governs the order. Method, type and
     * recipient of governing_delivery_selection_id. delivery_destination contains the resolved
     * address. These values describe the same selection. object.delivery_destination (Optional):
     * {@link OrderDeliveryDestination}. The shipment or local-delivery destination committed for
     * this order. Payment freezes this value; fulfillment recipient changes do not replace it.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. Where an order is delivered: the address, the recipient, and where the destination
     * came from. object.discounts (Required): Array of {@link OrderDiscount}. Discounts applied to
     * the order, each with its amount, status, and the line items and charges it covers.
     * object.discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion. object.dispute_status (Optional): string. Aggregate dispute state across the
     * order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_status
     * (Optional): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed". object.fulfillments (Required): Array of {@link Fulfillment}. Fulfillments created
     * for the order, each covering a set of its line items. object.fulfillments[] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items. object.gift_card_estimate
     * (Optional): {@link OrderGiftCardEstimate}. An estimate of how the order balance splits
     * between gift cards and the payment processor. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     * object.gift_card_settlements (Required): Array of {@link OrderGiftCardSettlement}. The gift
     * card redemptions applied to the order's payments. object.gift_card_settlements[] (Value):
     * {@link OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
     * the amount, tip, and gift card. object.gift_card_tender_enabled (Required): boolean. Whether
     * gift cards can pay for this order now. Gift cards pay only USD orders that still accept
     * changes, are not subscription purchases, and whose merchant has at least one gift card that
     * is not closed in this environment. Recomputed on each read; a spent but open card still
     * counts. object.gift_cards (Required): Array of {@link OrderGiftCardSelection}. Gift cards
     * available to pay the order, with each card's available balance. object.gift_cards[] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code. object.governing_delivery_selection_id
     * (Required): string or null. ID of the delivery selection that governs this order, including
     * pickup choices without a delivery destination: the checkout's provisional selection before
     * payment, and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.handover (Optional): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     * object.internal_note (Optional): string. A note for your team. Buyer reads leave it out.
     * object.inventory_exception_reason (Optional): string. Why inventory could not be committed
     * after payment. The cause remains after resolution. Omitted when no reason was recorded.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * object.inventory_exception_resolution_message (Optional): string. The merchant note supplied
     * when resolving the inventory exception. It is not shown to the buyer.
     * object.inventory_exception_status (Optional): string. Whether an inventory problem after
     * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * object.inventory_reservation_id (Optional): string. The reservation holding stock for this
     * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this
     * order's tracked demand is routed. Required before an order containing tracked variants can
     * hold stock. Where an order, payment link, or reservation routes inventory from: a fixed
     * Location, an inventory allocation policy, or one policy revision. object.invoice_id
     * (Required): string or null. The invoice associated with this order. Null when the order has
     * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.line_items (Required): Array of {@link
     * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
     * quantities. object.line_items[] (Value): {@link OrderLineItem}. An item purchased in an
     * order. object.merchant_id (Required): string. ID of the merchant this resource belongs to.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order_id
     * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string. Human-readable
     * order number for receipts and merchant reference. object.origin (Optional): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". object.paid_at (Required): string or null.
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.payment_collection (Optional): {@link
     * PaymentCollection}. Payment options and collection instructions for the order's outstanding
     * balance. Omitted when collection is unavailable to this caller. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Required): Array of string. IDs of the payment intents created to
     * collect this order. object.payment_intent_ids[] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.payment_link_id (Optional): string. Payment link
     * whose checkout created this order. Absent for orders that did not come from a payment link.
     * Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_status (Required): string. Collection
     * progress. An invoice write-off also completes collection without receiving the written-off
     * amount. Value enum: "unpaid", "partially_paid", "paid". object.prepayment_order_id
     * (Required): string or null. Order that paid for this prepaid delivery. Null when this is not
     * a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.pricing_amounts
     * (Required): {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges,
     * tax, requested tip, and total. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total. object.refund_ids (Required): Array of
     * string. IDs of the refunds that name this order. This includes refunds Flint makes to return
     * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. object.refund_ids[] (Value): string.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refund_status (Required): string. Refund
     * progress for collected money. Refunds with `reason` `payment_returned` return money the
     * order never received and don't count. Value enum: "none", "partially_refunded", "refunded".
     * object.return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. object.return_credit_settlements[]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from. object.return_resolution_id
     * (Optional): string. ID of the return resolution that created this order as a replacement.
     * Omitted for orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * object.settlement_amounts (Required): {@link OrderSettlementAmounts}. How much of the order
     * has been paid, refunded, credited, written off, and settled as tips, and what is still
     * outstanding. The bill settlement amounts plus order overpayments, settled tips, debt
     * discharged by final capture, and value order edits removed. Money collected, returned,
     * waived, and still owed on a bill. object.setup_collection (Optional): {@link
     * SetupCollection}. Instructions for saving a payment method for a subscription order. Omitted
     * when setup is unavailable. Client guidance for saving a payment method on the merchant's
     * connected account. object.status (Required): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed". object.subscription (Optional):
     * {@link ExpandedSubscriptionSummary} or null. Subscription summary included when `expand`
     * names `subscription`; `null` when expanded and this order does not bill a subscription.
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. object.subscription.anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded.
     * object.subscription.anyOf[2] (Value): null. object.subscription_cycle (Optional): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * object.subscription_delivery_changed_at (Optional): string. Time the subscriber changed
     * delivery after this paid renewal was prepared. The order keeps its committed destination
     * until you correct it or refund and replace it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.subscription_delivery_number (Required): integer or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * object.subscription_id (Optional): string. ID of the subscription this order bills. Absent
     * on an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
     * summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. ID of the subscription plan this order
     * bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception".
     * object.supported_actions[] (Value): string. Value enum: "close", "pay",
     * "resolve_inventory_exception". object.tax (Required): {@link OrderTax}. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns. object.ticketed_event (Optional): {@link TicketedEvent}. Event and tickets this
     * order sold through an event payment link. Absent on other orders. Event details for a
     * ticketed order: name, location, start time, time zone, and the tickets issued. object.tips
     * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled, and
     * refunded amounts. A tip cleared before payment stays listed as canceled. object.tips[]
     * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded amounts,
     * status, and how it was paid. object.updated_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         * active_payment_attempt (Optional): {@link OrderPaymentAttempt}. The payment attempt
         * currently collecting this order. Omitted when no attempt is active or its collection
         * surface belongs to another caller. An attempt to pay an order. active_payment_review_id
         * (Required): string or null. The earliest open or resolving payment review on this
         * order's counted payments. `null` when no review is open or resolving. List reviews with
         * GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". authorization_amounts (Optional): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. The amounts authorized and still capturable on an order's payments, with the
         * authorization expiry. buyer_contact (Optional): {@link CheckoutBuyerContact}. Email and
         * phone saved when payment started, from the pay request's buyer_contact or the paying
         * checkout session's saved contact. It does not change the linked customer. Buyer contact
         * supplied with payment or saved during checkout. buyer_note (Optional): string. A note to
         * the buyer. charges (Required): Array of {@link OrderCharge}. Charges added to the order,
         * such as delivery or service fees, each with its applied amount, tax, and refunded
         * amount. charges[] (Value): {@link OrderCharge}. An additional charge applied to an
         * order. checkout_session_ids (Required): Array of string. IDs of the checkout sessions
         * opened for this order. checkout_session_ids[] (Value): string. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". client_reference (Required): string or null. The
         * reference the payment link URL or resolve request carried, such as your user ID. `null`
         * when none was sent or checkout did not start from a payment link. Returned only to
         * merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so
         * treat it as a claim, not proof of identity. minLength: 1. maxLength: 255. closed_at
         * (Optional): string. When the order closed. Present exactly when status is closed. Set
         * once at the transition and never changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string. Why the order closed. Present
         * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "invoice_voided", "paid",
         * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason_message (Optional): string. The
         * caller note supplied when closing the order. System closures leave it absent. It is not
         * shown to the buyer. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * maxItems: 20. custom_field_answers[] (Value): {@link CustomFieldAnswer}. One answer to a
         * payment link custom field, with the field as it was when checkout started.
         * `custom_field_type` determines the type of `value`. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. ID of the customer this order belongs to.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". deferred_promotions (Required): Array of
         * {@link DeferredPromotion}. Promotions accepted at subscription signup. They attach when
         * the subscription is provisioned and first discount its first charged cycle. They do not
         * discount this order and are separate from discounts and order totals. Always present;
         * empty when no promotions are deferred. deferred_promotions[] (Value): {@link
         * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's
         * first charged cycle. It does not discount the signup order. delivery (Optional): {@link
         * OrderDeliverySummary}. Method, type and recipient of governing_delivery_selection_id.
         * The address remains in delivery_destination. Omitted when no shipment or local-delivery
         * selection governs the order. Method, type and recipient of
         * governing_delivery_selection_id. delivery_destination contains the resolved address.
         * These values describe the same selection. delivery_destination (Optional): {@link
         * OrderDeliveryDestination}. The shipment or local-delivery destination committed for this
         * order. Payment freezes this value; fulfillment recipient changes do not replace it.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. Where an order is delivered: the address, the recipient, and where the
         * destination came from. discounts (Required): Array of {@link OrderDiscount}. Discounts
         * applied to the order, each with its amount, status, and the line items and charges it
         * covers. discounts[] (Value): {@link OrderDiscount}. A discount applied to an order, with
         * its amount, status, and the line items and charges it covers. It comes from a manual
         * discount or a promotion. dispute_status (Optional): string. Aggregate dispute state
         * across the order's counted payment intents, excluding payment_returned. Always returned
         * to merchant credentials and omitted from buyer reads. Open states take precedence in
         * this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review,
         * other. Otherwise the most severe closed state wins: lost, won, prevented,
         * inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_status (Optional): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillments (Required): Array of
         * {@link Fulfillment}. Fulfillments created for the order, each covering a set of its line
         * items. fulfillments[] (Value): {@link Fulfillment}. Work required to deliver an order's
         * items. gift_card_estimate (Optional): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor. An estimate of
         * how an order total splits between gift cards and the payment processor, and whether gift
         * cards can pay it. gift_card_settlements (Required): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements[] (Value): {@link OrderGiftCardSettlement}. A gift card redemption
         * applied to an order payment, with the amount, tip, and gift card.
         * gift_card_tender_enabled (Required): boolean. Whether gift cards can pay for this order
         * now. Gift cards pay only USD orders that still accept changes, are not subscription
         * purchases, and whose merchant has at least one gift card that is not closed in this
         * environment. Recomputed on each read; a spent but open card still counts. gift_cards
         * (Required): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
         * order, with each card's available balance. gift_cards[] (Value): {@link
         * OrderGiftCardSelection}. A gift card available to pay an order, with its available
         * balance and the last four characters of its code. governing_delivery_selection_id
         * (Required): string or null. ID of the delivery selection that governs this order,
         * including pickup choices without a delivery destination: the checkout's provisional
         * selection before payment, and the selection a payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". handover (Optional): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. Every physical item is handed to the buyer at
         * this location when the order is paid. Replaces a delivery selection. internal_note
         * (Optional): string. A note for your team. Buyer reads leave it out.
         * inventory_exception_reason (Optional): string. Why inventory could not be committed
         * after payment. The cause remains after resolution. Omitted when no reason was recorded.
         * Unrecognized reasons are returned as other; new values may be added. Value enum:
         * "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
         * "auto_refund_failed", "policy_resolution_failed", "other".
         * inventory_exception_resolution_message (Optional): string. The merchant note supplied
         * when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_status (Optional): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_reservation_id (Optional): string. The reservation holding stock for this
         * order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_routing_source (Optional): {@link InventoryRoutingSource}. Where this order's
         * tracked demand is routed. Required before an order containing tracked variants can hold
         * stock. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. invoice_id (Required):
         * string or null. The invoice associated with this order. Null when the order has no
         * invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". line_items (Required): Array of {@link
         * OrderLineItem}. Items the order sells, each with its pricing, tax, and fulfillment
         * quantities. line_items[] (Value): {@link OrderLineItem}. An item purchased in an order.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order_id
         * (Required): string. Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable order
         * number for receipts and merchant reference. origin (Optional): string. How the order was
         * created. invoice means a Quick Pay invoice created the order; attaching an invoice to an
         * existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
         * "checkout", "api", "subscription", "invoice". paid_at (Required): string or null. When
         * `payment_status` became `paid`, including a final capture that releases the remaining
         * balance. Set once and never changed, including after refunds. `null` when
         * `payment_status` isn't `paid`, including an order whose balance was written off without
         * being paid. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_collection
         * (Optional): {@link PaymentCollection}. Payment options and collection instructions for
         * the order's outstanding balance. Omitted when collection is unavailable to this caller.
         * Client-side details for collecting payment from the buyer, such as the Stripe settings
         * to initialize Stripe.js. payment_intent_ids (Required): Array of string. IDs of the
         * payment intents created to collect this order. payment_intent_ids[] (Value): string.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
         * `payment_intents`. payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_link_id (Optional): string. Payment link
         * whose checkout created this order. Absent for orders that did not come from a payment
         * link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_status (Required): string. Collection progress.
         * An invoice write-off also completes collection without receiving the written-off amount.
         * Value enum: "unpaid", "partially_paid", "paid". prepayment_order_id (Required): string
         * or null. Order that paid for this prepaid delivery. Null when this is not a prepaid
         * delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". pricing_amounts (Required):
         * {@link PricingAmounts}. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. The money totals for an order or invoice: subtotal, discounts,
         * charges, tax, requested tip, and total. refund_ids (Required): Array of string. IDs of
         * the refunds that name this order. This includes refunds Flint makes to return a payment
         * it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_status (Required): string. Refund progress for
         * collected money. Refunds with `reason` `payment_returned` return money the order never
         * received and don't count. Value enum: "none", "partially_refunded", "refunded".
         * return_credit_settlements (Required): Array of {@link OrderReturnCreditSettlement}.
         * Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements[] (Value): {@link OrderReturnCreditSettlement}. A return
         * credit applied to an order payment, with the amount and the return and resolution it
         * came from. return_resolution_id (Optional): string. ID of the return resolution that
         * created this order as a replacement. Omitted for orders a return did not create.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". settlement_amounts (Required): {@link
         * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
         * written off, and settled as tips, and what is still outstanding. The bill settlement
         * amounts plus order overpayments, settled tips, debt discharged by final capture, and
         * value order edits removed. Money collected, returned, waived, and still owed on a bill.
         * setup_collection (Optional): {@link SetupCollection}. Instructions for saving a payment
         * method for a subscription order. Omitted when setup is unavailable. Client guidance for
         * saving a payment method on the merchant's connected account. status (Required): string.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". subscription (Optional): {@link ExpandedSubscriptionSummary} or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's
         * summary fields, including status, billing period, and next billing time, returned when
         * the subscription is expanded. subscription.anyOf[2] (Value): null. subscription_cycle
         * (Optional): integer. Charged subscription cycle associated with this order. Signup is
         * cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64.
         * minimum: 0. subscription_delivery_changed_at (Optional): string. Time the subscriber
         * changed delivery after this paid renewal was prepared. The order keeps its committed
         * destination until you correct it or refund and replace it. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". subscription_delivery_number (Required): integer or null.
         * Position of this delivery among the deliveries one charge paid for, starting at 2. Null
         * when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_id (Optional): string. ID of the subscription this order bills. Absent on
         * an order that isn't from a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Plan
         * summary included when `expand` names `subscription_plan`; `null` when expanded and this
         * order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. ID of the subscription plan this order bills.
         * Absent on an order that isn't from a subscription. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions[] (Value): string. Value enum: "close",
         * "pay", "resolve_inventory_exception". tax (Required): {@link OrderTax}. The order's tax
         * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction
         * rows. An order's tax state, including its mode, price mode, status, location, exemption,
         * and tax breakdowns. ticketed_event (Optional): {@link TicketedEvent}. Event and tickets
         * this order sold through an event payment link. Absent on other orders. Event details for
         * a ticketed order: name, location, start time, time zone, and the tickets issued. tips
         * (Required): Array of {@link Tip}. Tips on the order, each with its requested, settled,
         * and refunded amounts. A tip cleared before payment stays listed as canceled. tips[]
         * (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
         * amounts, status, and how it was paid. updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Order
         * version for optimistic concurrency. Send this value as the expected version when
         * changing the order. Increases with every change to the order. Ignore an order webhook
         * snapshot whose version is lower than one you have already applied. Format: int64.
         */
        "object": {
            /**
             * The payment attempt currently collecting this order. Omitted when no attempt is
             * active or its collection surface belongs to another caller. An attempt to pay an
             * order.
             */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "active_payment_review_id": string | null;
            /**
             * The amounts authorized and still capturable on the order's payments. The amounts
             * authorized and still capturable on an order's payments, with the authorization
             * expiry.
             */
            "authorization_amounts"?: OrderAuthorizationAmounts;
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * Buyer contact supplied with payment or saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /** A note to the buyer. */
            "buyer_note"?: string;
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional
             * charge applied to an order.
             */
            "charges": Array<OrderCharge>;
            /**
             * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_ids": Array<string>;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer.
             */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
             * customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. [] (Value): {@link DeferredPromotion}. A promotion
             * accepted at subscription signup for the subscription's first charged cycle. It does
             * not discount the signup order.
             */
            "deferred_promotions": Array<DeferredPromotion>;
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. Method, type and recipient of governing_delivery_selection_id.
             * delivery_destination contains the resolved address. These values describe the same
             * selection.
             */
            "delivery"?: OrderDeliverySummary;
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. Where an
             * order is delivered: the address, the recipient, and where the destination came from.
             */
            "delivery_destination"?: OrderDeliveryDestination;
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. [] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion.
             */
            "discounts": Array<OrderDiscount>;
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum:
             * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
             * "needs_response", "under_review", "won", "lost", "prevented", "other".
             */
            "dispute_status"?: "none"
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed".
             */
            "fulfillment_status"?: "not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {});
            /**
             * Fulfillments created for the order, each covering a set of its line items. []
             * (Value): {@link Fulfillment}. Work required to deliver an order's items.
             */
            "fulfillments": Array<Fulfillment>;
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. An estimate of how an order total splits between gift cards and the
             * payment processor, and whether gift cards can pay it.
             */
            "gift_card_estimate"?: OrderGiftCardEstimate;
            /**
             * The gift card redemptions applied to the order's payments. [] (Value): {@link
             * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with
             * the amount, tip, and gift card.
             */
            "gift_card_settlements": Array<OrderGiftCardSettlement>;
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts.
             */
            "gift_card_tender_enabled": boolean;
            /**
             * Gift cards available to pay the order, with each card's available balance. []
             * (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with
             * its available balance and the last four characters of its code.
             */
            "gift_cards": Array<OrderGiftCardSelection>;
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "governing_delivery_selection_id": string | null;
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. Every physical item is
             * handed to the buyer at this location when the order is paid. Replaces a delivery
             * selection.
             */
            "handover"?: OrderHandover;
            /** A note for your team. Buyer reads leave it out. */
            "internal_note"?: string;
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other".
             */
            "inventory_exception_reason"?: "inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {});
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer.
             */
            "inventory_exception_resolution_message"?: string;
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved".
             */
            "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
            /**
             * The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id"?: string;
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id": string | null;
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities. []
             * (Value): {@link OrderLineItem}. An item purchased in an order.
             */
            "line_items": Array<OrderLineItem>;
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
             * Unique identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /** Human-readable order number for receipts and merchant reference. */
            "order_number"?: string;
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             */
            "origin"?: "virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {});
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "paid_at": string | null;
            /**
             * Payment options and collection instructions for the order's outstanding balance.
             * Omitted when collection is unavailable to this caller. Client-side details for
             * collecting payment from the buyer, such as the Stripe settings to initialize
             * Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents created to collect this order. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             */
            "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "prepayment_order_id": string | null;
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. The money totals for an order or invoice: subtotal, discounts, charges, tax,
             * requested tip, and total.
             */
            "pricing_amounts": PricingAmounts;
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. [] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from.
             */
            "return_credit_settlements": Array<OrderReturnCreditSettlement>;
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. The bill settlement amounts plus order
             * overpayments, settled tips, debt discharged by final capture, and value order edits
             * removed. Money collected, returned, waived, and still owed on a bill.
             */
            "settlement_amounts": OrderSettlementAmounts;
            /**
             * Instructions for saving a payment method for a subscription order. Omitted when
             * setup is unavailable. Client guidance for saving a payment method on the merchant's
             * connected account.
             */
            "setup_collection"?: SetupCollection;
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed".
             */
            "status": "open" | "closed" | (string & {});
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary
             * fields, including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[2] (Value): null.
             */
            "subscription"?: ((ExpandedSubscriptionSummary) | (null));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             */
            "subscription_cycle"?: number;
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "subscription_delivery_changed_at"?: string;
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24.
             */
            "subscription_delivery_number": number | null;
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
             * subscription plan's summary fields, including name, billing interval, currency, and
             * status, returned when the plan is expanded. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. [] enum: "close", "pay",
             * "resolve_inventory_exception". [] (Value): string. Value enum: "close", "pay",
             * "resolve_inventory_exception".
             */
            "supported_actions": Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
             * location, exemption, and tax breakdowns.
             */
            "tax": OrderTax;
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. Event details for a ticketed order: name, location, start time, time zone,
             * and the tickets issued.
             */
            "ticketed_event"?: TicketedEvent;
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on
             * an order, with its requested, settled, and refunded amounts, status, and how it was
             * paid.
             */
            "tips": Array<Tip>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. Format:
             * int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Order>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
});
/** A response containing `Order` data. */
export type OrderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's purchase
     * and its payment and fulfillment progress.
     */
    "data": Order;
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
 * A return credit applied to an order payment, with the amount and the return and resolution it
 * came from.
 */
export type OrderReturnCreditSettlement = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /** Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". */
    "return_resolution_id": string;
};
/**
 * The bill settlement amounts plus order overpayments, settled tips, debt discharged by final
 * capture, and value order edits removed. Money collected, returned, waived, and still owed on a
 * bill.
 */
export type OrderSettlementAmounts = ({
    /**
     * Principal lost to chargebacks on counted order payments. A later win removes that dispute
     * from this amount. Excludes dispute fees and does not reopen outstanding_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "dispute_lost_money": MoneyValue;
    /**
     * Principal of open chargebacks on counted order payments. Inquiries and disputes on
     * payment_returned payments contribute zero. Open disputes do not reduce net_collected_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "disputed_money": MoneyValue;
    /**
     * Money collected beyond what the order is owed and not yet refunded. Write-offs do not create
     * overpayments, and neither does value order edits removed: an edit's unrefunded_money reports
     * what it still owes the buyer. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "overpaid_money": MoneyValue;
    /**
     * Authorized money a final capture released instead of collecting, which the order no longer
     * owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "released_money": MoneyValue;
    /**
     * Value order edits removed from the order, which it no longer owes: removed units' value plus
     * each edit's charge_refunds[].amount_money, whether that value was refunded or applied to
     * lines the edit added. Not collected money, so it never changes paid_money or refunded_money.
     * outstanding_money is the total minus paid, written-off, released, and removed money, never
     * below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "removed_money": MoneyValue;
    /**
     * Portion of the collected money settled as tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "settled_tip_money": MoneyValue;
    /**
     * paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_collected_money": MoneyValue;
    /**
     * Money still owed on the bill, never below zero. Refunds return money already collected and
     * do not add to it. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Money collected toward the bill, net of reversed payments. Excludes written-off debt. On
     * orders, dispute losses do not reduce this amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Money returned to the buyer from what was collected toward the bill. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money
     * or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
})
    & (Exclude<SettlementAmounts & object, readonly unknown[]>);
/**
 * An order's tax state, including its mode, price mode, status, location, exemption, and tax
 * breakdowns.
 */
export type OrderTax = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /**
     * How you can give Flint a tax location while `status` is `requires_location`. `provided`
     * means send `tax.location`. [] (Value): string.
     */
    "available_location_inputs"?: Array<string>;
    /**
     * The tax calculation callback evaluation whose components the order's tax uses. Returned only
     * on a `callback` order after your callback has answered; absent while tax is
     * `requires_location` or `incomplete`, and on orders with nothing to tax. The tax calculation
     * callback evaluation an order's tax uses.
     */
    "callback_evaluation"?: OrderTaxCallbackEvaluation;
    /**
     * Where the order's external tax components come from: `provided` when you send them, or
     * `callback` when Flint asks your selected tax calculation callback. Returned only while tax
     * is enabled in external mode; absent for automatic tax and when tax is off. Value enum:
     * "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * The percentage tax template for checkout-generated delivery charges, including paid pickup.
     * Returned only when tax is enabled in external mode with `components_source` `provided` and a
     * template is set. Existing charges retain their own tax.calculation. A percentage tax
     * template for the delivery charges checkout generates, including paid pickup: whether the
     * charge includes the tax, and the tax components. Allowed only on orders that use external
     * tax.
     */
    "delivery_charge_calculation"?: DeliveryChargeTaxCalculationRequest;
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. */
    "enabled": boolean;
    /**
     * The exemption assessment recorded for this sale, when one exists. Frozen when tax commits;
     * older snapshots omit details that were never recorded. The exemption assessment recorded for
     * an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay
     * omitted.
     */
    "exemption"?: OrderTaxExemption;
    /**
     * The order's tax location, once one is established. Flint taxes items and charges without a
     * fulfillment destination of their own there. Omitted when every taxable item and charge is
     * taxed at its own fulfillment destination and those destinations differ, unless you provided
     * one. The location Flint uses to calculate tax on an order, with its address, address type,
     * and where the address came from.
     */
    "location"?: OrderTaxLocation;
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the
     * customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its
     * rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1]
     * (Value): {@link TaxReverseCharge}. The buyer accounts for the tax under the reverse charge.
     * Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2] (Value):
     * null.
     */
    "reverse_charge"?: ((TaxReverseCharge) | (null));
    /**
     * Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or
     * `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt",
     * "incomplete".
     */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     * Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate
     * every taxable line. Present only when tax is enabled in automatic mode. US destinations are
     * covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods,
     * software and saas are covered; services, professional_services, physical goods and taxable
     * charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect
     * with delivery supported_countries when collecting a shipping address. [] (Value): string.
     */
    "supported_countries"?: Array<string>;
    /**
     * One row per jurisdiction for each line item and charge, plus any flat order taxes. External
     * tax always produces rows. Automatic tax produces rows outside the US, one per national or
     * provincial tax; US automatic tax doesn't produce rows. [] (Value): {@link TaxBreakdown}. The
     * tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
     * amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomatic = {
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomaticInput = {
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic".
     */
    "mode": "automatic";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternal = {
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequest}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "external".
     */
    "mode": "external" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternalInput = {
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequestInput}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback";
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "external".
     */
    "mode": "external";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequest = ({
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequest}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
})
    & ((Exclude<OrderTaxCalculationInputAutomatic & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequestInput = ({
    /**
     * Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic`
     * mode doesn't accept them. [] (Value): {@link OrderTaxComponentRequestInput}. One externally
     * supplied order tax component, with its jurisdiction and either a flat amount or a
     * percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /**
     * Where external tax components come from. `provided` (the default): you send components for
     * every line item and charge with an amount. `callback`: Flint asks the environment's selected
     * tax calculation callback for them whenever tax would be recalculated, and refuses
     * components, `line_item_calculations`, `charge_calculations`, and
     * `delivery_charge_calculation` in requests. A request that needs an evaluation while no
     * active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason
     * `configuration_required`. Default: "provided". Value enum: "provided", "callback".
     */
    "components_source"?: "provided" | "callback";
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external";
    /**
     * Whether prices already include tax. `automatic` mode and flat order taxes require
     * `additive`. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
})
    & ((Exclude<OrderTaxCalculationInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternalInput & object, readonly unknown[]>));
/** The tax calculation callback evaluation an order's tax uses. */
export type OrderTaxCallbackEvaluation = {
    /**
     * When Flint saved your callback's answer for the order's current inputs. A change that
     * recalculates tax with identical inputs after the 15-minute cache updates it; a payment that
     * confirms an unchanged answer doesn't. Payment calls your callback again when it is more than
     * 24 hours old. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "evaluated_at": string;
    /**
     * The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id`
     * and `webhook-id`. Identical inputs keep the same ID. Example:
     * "tce_01KEZF7C00Z61NNPEAF0CNSXP4".
     */
    "tax_calculation_evaluation_id": string;
};
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequest = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "flat_amount". Value enum: "flat_amount".
     */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise Flint
     * fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on `flat_money`. The amount and
     * every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint
     * rejects an input or calculation above this ceiling with INVALID_REQUEST and detail
     * INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * The kind of tax this component collects. Default: "retail_delivery_fee". Value enum:
     * "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee" | (string & {});
});
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequestInput = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "flat_amount". Value enum: "flat_amount".
     */
    "calculation_type"?: "flat_amount";
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise Flint
     * fails with `INVALID_REQUEST` and an `INVALID_VALUE` detail on `flat_money`. The amount and
     * every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint
     * rejects an input or calculation above this ceiling with INVALID_REQUEST and detail
     * INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequestInput;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * The kind of tax this component collects. Default: "retail_delivery_fee". Value enum:
     * "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee";
})
    & ({
    "percent"?: never;
});
/**
 * The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields
 * absent from historical snapshots stay omitted.
 */
export type OrderTaxExemption = {
    /** Certificate number recorded at assessment. Omitted when none was recorded. */
    "certificate_number"?: string;
    /**
     * Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded.
     * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit
     * list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverage;
    /**
     * ID of the customer the exemption was assessed from, when one was linked. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Customer exemption record used for this assessment. Omitted for blanket flags, order
     * declarations, and older snapshots. Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW".
     */
    "customer_tax_exemption_id"?: string;
    /**
     * Last day of the selected record's exemption, inclusive. Omitted when no end date was
     * recorded. Format: date. Example: "2026-08-02".
     */
    "end_date"?: string;
    /**
     * Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it.
     * Never printed on buyer documents.
     */
    "evidence_reference"?: string;
    /**
     * Exemption reason recorded at assessment. Omitted when no reason was recorded. Value enum:
     * "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
    /**
     * The source of the tax exemption assessment. Omitted when the source has not been
     * established. Value enum: "none", "customer", "order".
     */
    "source"?: "none" | "customer" | "order" | (string & {});
    /**
     * First day of the selected record's exemption, inclusive. Omitted when no date was recorded.
     * Format: date. Example: "2026-08-02".
     */
    "start_date"?: string;
    /**
     * Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason
     * customer_exempt.
     */
    "tax_exempt": boolean;
};
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputCustomer = ({}) & (({
    /** Value enum: "customer". */
    "type"?: "customer" | (string & {});
}));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputCustomerInput = ({
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "customer".
     */
    "type": "customer";
})
    & (({
    /** Value enum: "customer". */
    "type"?: "customer";
})
    & (({
    "reason"?: never;
})
    & ({
    "coverage"?: never;
})
    & ({
    "certificate_number"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "evidence_reference"?: never;
})));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputNone = ({}) & (({
    /** Value enum: "none". */
    "type"?: "none" | (string & {});
}));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputNoneInput = ({
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "none".
     */
    "type": "none";
})
    & (({
    /** Value enum: "none". */
    "type"?: "none";
})
    & (({
    "reason"?: never;
})
    & ({
    "coverage"?: never;
})
    & ({
    "certificate_number"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "evidence_reference"?: never;
})));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputOrder = ({}) & ({
    /** Value enum: "order". */
    "type"?: "order" | (string & {});
});
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionInputOrderInput = ({
    /**
     * Merchant's exemption certificate number. Optional for type order. minLength: 1. maxLength:
     * 255.
     */
    "certificate_number"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverageRequestInput;
    /**
     * Explanation of the exemption. Required when reason is other; optional for every other
     * reason. Up to 500 characters. minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string;
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "order".
     */
    "type": "order";
})
    & ({
    /** Value enum: "order". */
    "type"?: "order";
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverageRequestInput;
});
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionRequest = ({
    /**
     * Merchant's exemption certificate number. Optional for type order. minLength: 1. maxLength:
     * 255.
     */
    "certificate_number"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverage;
    /**
     * Explanation of the exemption. Required when reason is other; optional for every other
     * reason. Up to 500 characters. minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string;
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
})
    & ((Exclude<OrderTaxExemptionInputCustomer & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputNone & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputOrder & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Replaced as a whole: send every field you want to keep. Choose customer assessment, no
 * exemption, or a one-off order declaration. Write-only: responses return the exemption that
 * applied in tax.exemption, not this selection. Cannot change after tax commits; a change returns
 * 409 ACTION_NOT_ALLOWED with reason payment_collected.
 */
export type OrderTaxExemptionRequestInput = ({
    /**
     * Merchant's exemption certificate number. Optional for type order. minLength: 1. maxLength:
     * 255.
     */
    "certificate_number"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Required for type order. Covers all
     * US states or an explicit list of states and DC. Replaced as a whole: send every field you
     * want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverageRequestInput;
    /**
     * Explanation of the exemption. Required when reason is other; optional for every other
     * reason. Up to 500 characters. minLength: 1. maxLength: 500.
     */
    "description"?: string;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string;
    /**
     * Required for type order. other requires description; description is optional for every other
     * reason. Value enum: "federal_government", "state_or_local_government", "tribal_government",
     * "foreign_diplomat", "charitable_organization", "religious_organization",
     * "educational_organization", "resale", "agricultural_production", "industrial_production",
     * "direct_pay_permit", "direct_mail", "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * Required selector. customer uses the linked customer; none ignores customer exemptions;
     * order supplies a declaration. Value enum: "customer", "none", "order".
     */
    "type": "customer" | "none" | "order";
})
    & ((Exclude<OrderTaxExemptionInputCustomerInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputNoneInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxExemptionInputOrderInput & object, readonly unknown[]>));
/**
 * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
 * name, state, and country.
 */
export type OrderTaxJurisdictionRequestInput = {
    /**
     * Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`,
     * starting with a letter or digit. Reports group tax by this code. minLength: 1. maxLength:
     * 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$.
     */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /**
     * The level of government that imposes the tax. Value enum: "state", "county", "city",
     * "district", "country", "province".
     */
    "level": "state" | "county" | "city" | "district" | "country" | "province";
    /**
     * Name of the jurisdiction, up to 200 characters. minLength: 1. maxLength: 200. pattern:
     * ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$.
     */
    "name": string;
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. minLength: 1.
     * maxLength: 3. pattern: ^[A-Z0-9]{1,3}$.
     */
    "state"?: string;
};
/**
 * The location Flint uses to calculate tax on an order, with its address, address type, and where
 * the address came from.
 */
export type OrderTaxLocation = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * Where the tax address came from. Value enum: "provided", "fulfillment", "customer",
     * "location", "merchant".
     */
    "address_source": "provided" | "fulfillment" | "customer" | "location" | "merchant" | (string & {});
    /**
     * The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address",
     * "billing_address", "shipping_address", "business_address".
     */
    "address_type": "postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {});
    /**
     * ID of the customer whose saved address Flint used, when `address_source` is `customer`.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * ID of the fulfillment whose shipping address Flint used. Absent when the address is the
     * order's `delivery_destination`. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the pickup store whose address Flint used, when `address_source` is `location`.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
};
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequest = ({
    /** City. minLength: 1. pattern: \S. */
    "city": string;
    /**
     * ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax
     * supports only AT, AU, BE, BG, CA, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT,
     * LT, LU, LV, MT, NL, NZ, PL, PT, RO, SE, SI, SK, US. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** First line of the street address. minLength: 1. pattern: \S. */
    "line1": string;
    /** Second line of the street address, such as an apartment or suite. minLength: 1. */
    "line2"?: string;
    /**
     * Postal code. A full address in Ireland may omit it; every other address needs one.
     * minLength: 1. pattern: \S.
     */
    "postal_code"?: string;
    /**
     * State or province code, such as `WA` or `ON`. Required for US and Canadian full addresses;
     * omit it elsewhere when the address has none. minLength: 1. pattern: \S.
     */
    "state"?: string;
});
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequestInput = OrderTaxLocationFullAddressRequest;
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddress = {
    /**
     * The address to calculate tax from. A full street address you supply as an order's tax
     * location.
     */
    "address": OrderTaxLocationFullAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /**
     * The kind of address you are sending. Value enum: "tax_address", "billing_address",
     * "shipping_address".
     */
    "address_type": "tax_address" | "billing_address" | "shipping_address" | (string & {});
};
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddressInput = {
    /**
     * The address to calculate tax from. A full street address you supply as an order's tax
     * location.
     */
    "address": OrderTaxLocationFullAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /**
     * The kind of address you are sending. Value enum: "tax_address", "billing_address",
     * "shipping_address".
     */
    "address_type": "tax_address" | "billing_address" | "shipping_address";
};
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCode = {
    /**
     * The address to calculate tax from. A postal code, with an optional country, you supply as an
     * order's tax location.
     */
    "address": OrderTaxLocationPostalAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /** The kind of address you are sending. Value enum: "postal_code". */
    "address_type": "postal_code" | (string & {});
};
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCodeInput = {
    /**
     * The address to calculate tax from. A postal code, with an optional country, you supply as an
     * order's tax location.
     */
    "address": OrderTaxLocationPostalAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /** The kind of address you are sending. Value enum: "postal_code". */
    "address_type": "postal_code";
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. External tax accepts any ISO country; automatic tax
     * supports only AT, AU, BE, BG, CA, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HR, HU, IE, IT,
     * LT, LU, LV, MT, NL, NZ, PL, PT, RO, SE, SI, SK, US. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Default: "US". Example: "US".
     */
    "country"?: string;
    /**
     * Postal code. A full address in Ireland may omit it; every other address needs one.
     * minLength: 1. pattern: \S.
     */
    "postal_code": string;
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequestInput = OrderTaxLocationPostalAddressRequest;
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequest = ((OrderTaxLocationInputPostalCode) | (OrderTaxLocationInputFullAddress) | (Record<string, unknown>));
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequestInput = ((OrderTaxLocationInputPostalCodeInput) | (OrderTaxLocationInputFullAddressInput));
/**
 * Tax settings for a new order: whether tax is enabled, its calculation, location, and exemption
 * selection.
 */
export type OrderTaxRequest = ({
    /**
     * How tax is calculated: automatically through Flint's tax connection, or from components you
     * supply. How tax is calculated on an order: automatically, or externally with the tax
     * components you supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /**
     * Percentage tax template copied onto every positive delivery charge generated by checkout,
     * including paid pickup. Allowed only with external tax. Changing it leaves existing charges
     * unchanged; use tax.charge_calculations to override those. A new selection copies the
     * template again. Set it before issuing an invoice; the invoice freezes it with the order. A
     * percentage tax template for the delivery charges checkout generates, including paid pickup:
     * whether the charge includes the tax, and the tax components. Allowed only on orders that use
     * external tax.
     */
    "delivery_charge_calculation"?: DeliveryChargeTaxCalculationRequest;
    /**
     * Whether Flint calculates tax. When exemption is the only tax field, omission uses the
     * merchant's tax defaults. Other tax inputs default to true. When false, calculation,
     * location, delivery_charge_calculation, and exemption must be omitted.
     */
    "enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Defaults to customer assessment on
     * create: the customer's blanket tax_exempt flag, then applicable exemption records. Cannot be
     * null. Replaced as a whole: send every field you want to keep. Choose customer assessment, no
     * exemption, or a one-off order declaration. Write-only: responses return the exemption that
     * applied in tax.exemption, not this selection. Cannot change after tax commits; a change
     * returns 409 ACTION_NOT_ALLOWED with reason payment_collected.
     */
    "exemption"?: OrderTaxExemptionRequest;
    /**
     * The address Flint calculates automatic tax at for items and charges without a fulfillment
     * destination of their own. The tax location you supply for an order, as a postal code or a
     * full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
