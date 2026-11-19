import type {
    BuyerLicenseKey,
    BuyerFulfillment,
    BuyerErrorRemediation,
    BuyerExpandedPaymentIntentSummary,
    BuyerExpandedPaymentIntentSummaryPreviousAttributes,
    BuyerExpandedOrderSummary,
    BuyerExpandedOrderSummaryPreviousAttributes
} from './types-2.js';
import type { ResponseMeta } from './types-62.js';
import type { BuyerAction, BundleComponent } from './types-1.js';
import type { BuyerSetupCollection, BuyerTip, BuyerSelectableOrderPaymentIntent, BuyerReturnResolutionPreview } from './types-4.js';
import type { CheckoutBuyerContact } from './types-6.js';
import type { DeferredPromotion, CustomerTaxExemptionCoverage } from './types-17.js';
import type {
    OrderAuthorizationAmounts,
    OrderDeliveryDestination,
    OrderDeliverySummary,
    OrderDiscount,
    OrderCalculatedChargeTax,
    OrderCalculatedLineItemTax
} from './types-45.js';
import type {
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements
} from './types-46.js';
import type {
    OrderReturnCreditSettlement,
    OrderSettlementAmounts,
    OrderLineItemRefundable,
    OrderLineSubscriptionOfferSummary,
    OrderPaymentAttemptPaymentMethodSave
} from './types-47.js';
import type { PricingAmounts } from './types-56.js';
import type { TicketedEvent, TextModifierRequest } from './types-75.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { CategoryReference, CardDetails } from './types-5.js';
import type { Dimensions } from './types-25.js';
import type { GiftCardPurchaseSnapshot } from './types-30.js';
import type { Image } from './types-31.js';
import type { LineItemInventorySnapshot } from './types-40.js';
import type { PurchasedGiftCard } from './types-59.js';
import type { SelectedProductOption, StripeClientSetup } from './types-68.js';
import type { SubscribedLine } from './types-69.js';
import type { Weight } from './types-80.js';
import type { PaymentAttemptGiftCardRedemption, PaymentErrorSummary, PaymentFulfillmentHold } from './types-51.js';
import type { PendingPaymentAction } from './types-55.js';
import type { DeliveryChargeTaxCalculationRequest } from './types-18.js';
import type { TaxBreakdown } from './types-73.js';
import type { TaxReverseCharge } from './types-74.js';
import type { Address } from './types-0.js';
import type { ReturnHandoffRequirementLineItem, ReturnFinancialSummary, ReturnEligibilitySelection } from './types-63.js';
import type { PaymentSourceSummary } from './types-54.js';
import type { ExpandedCustomerSummary, ExpandedCustomerSummaryPreviousAttributes } from './types-26.js';
import type { RefundLineItemAllocation, RefundLineItemAllocationPreviousAttributes } from './types-60.js';
import type {
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundTaxBreakdownRefundPreviousAttributes,
    RefundTenderAllocationPreviousAttributes
} from './types-61.js';
import type {
    ReturnReasonSummary,
    ReturnLineItemValue,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal
} from './types-64.js';
import type { ReturnRefundTenderEstimate } from './types-65.js';
/** A response containing `BuyerLicenseKey` data. */
export type BuyerLicenseKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A license key issued to
     * the current buyer.
     */
    "data": BuyerLicenseKey;
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
/** A customer's purchase and its payment and fulfillment progress. */
export type BuyerOrder = {
    /**
     * The payment attempt currently collecting this order. Omitted when no attempt is active or
     * its collection surface belongs to another caller. An attempt to pay an order.
     */
    "active_payment_attempt"?: BuyerOrderPaymentAttempt;
    /**
     * The amounts authorized and still capturable on the order's payments. The amounts authorized
     * and still capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * What the buyer can do with the order, in this order: start_return, then resend_receipt. A
     * buyer's read through a customer session on /v1/me, a checkout credential on GET
     * /v1/orders/{order_id}, or Flint's buyer account lists both every time. Merchant order
     * responses omit this field. A list of orders leaves start_return out, since only a read of
     * one order checks return eligibility. start_return is due when the last open return window
     * ends. Example: []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** A note to the buyer. */
    "buyer_note"?: string;
    /**
     * Charges added to the order, such as delivery or service fees, each with its applied amount,
     * tax, and refunded amount. [] (Value): {@link BuyerOrderCharge}. An additional charge applied
     * to an order.
     */
    "charges": Array<BuyerOrderCharge>;
    /**
     * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_ids": Array<string>;
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
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
     * Method, type and recipient of governing_delivery_selection_id. The address remains in
     * delivery_destination. Omitted when no shipment or local-delivery selection governs the
     * order. Method, type and recipient of governing_delivery_selection_id. delivery_destination
     * contains the resolved address. These values describe the same selection.
     */
    "delivery"?: OrderDeliverySummary;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. [] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion.
     */
    "discounts": Array<OrderDiscount>;
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
     * Fulfillments created for the order, each covering a set of its line items. [] (Value):
     * {@link BuyerFulfillment}. Work required to deliver an order's items.
     */
    "fulfillments": Array<BuyerFulfillment>;
    /**
     * An estimate of how the order balance splits between gift cards and the payment processor. An
     * estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * The gift card redemptions applied to the order's payments. [] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /**
     * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
     * accept changes, are not subscription purchases, and whose merchant has at least one gift
     * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
     * this is false when those purchases leave no amount eligible for gift card tender. Recomputed
     * on each read; a spent but open card still counts.
     */
    "gift_card_tender_enabled": boolean;
    /**
     * Gift cards available to pay the order, with each card's available balance. [] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination: the checkout's provisional selection before payment, and the selection
     * a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "governing_delivery_selection_id": string | null;
    /**
     * The invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string | null;
    /**
     * Items the order sells, each with its pricing, tax, and fulfillment quantities. [] (Value):
     * {@link BuyerOrderLineItem}. An item purchased in an order.
     */
    "line_items": Array<BuyerOrderLineItem>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * How the order was created. invoice means a Quick Pay invoice created the order; attaching an
     * invoice to an existing order preserves its origin. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription", "invoice".
     */
    "origin"?: "virtual_terminal"
        | "payment_link"
        | "checkout"
        | "api"
        | "subscription"
        | "invoice"
        | (string & {});
    /**
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at": string | null;
    /**
     * Payment options and collection instructions for the order's outstanding balance. Omitted
     * when collection is unavailable to this caller. What a client needs to collect payment for a
     * buyer's order. The `stripe` field holds the Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /**
     * IDs of the payment intents created to collect this order. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids": Array<string>;
    /**
     * Payment link that created this order or started the subscription it renews. Absent for other
     * orders. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "prepayment_order_id": string | null;
    /**
     * The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The
     * money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
     * total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * IDs of the refunds that name this order. This includes refunds Flint makes to return a
     * payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Refunds with `reason` `payment_returned` return money
     * the order never received and don't count. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. [] (Value): {@link
     * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the amount
     * and the return and resolution it came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * ID of the return resolution that created this order as a replacement. Omitted for orders a
     * return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * How much of the order has been paid, refunded, credited, written off, and settled as tips,
     * and what is still outstanding. The bill settlement amounts plus order overpayments, settled
     * tips, debt discharged by final capture, and value order edits removed. Money collected,
     * returned, waived, and still owed on a bill.
     */
    "settlement_amounts": OrderSettlementAmounts;
    /**
     * Instructions for saving a payment method for a subscription order. Omitted when setup is
     * unavailable. Client guidance for saving a payment method on the merchant's connected
     * account.
     */
    "setup_collection"?: BuyerSetupCollection;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: number;
    /**
     * Time the subscriber changed delivery after this paid renewal was prepared. The order keeps
     * its committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "subscription_delivery_changed_at"?: string;
    /**
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     */
    "subscription_delivery_number": number | null;
    /**
     * ID of the subscription this order bills. Absent on an order that isn't from a subscription.
     * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * ID of the subscription plan this order bills. Absent on an order that isn't from a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. Tax details on a buyer's order: whether tax is enabled, its mode and
     * status, location, exemption, and tax breakdowns.
     */
    "tax": BuyerOrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared
     * before payment stays listed as canceled. [] (Value): {@link BuyerTip}. A tip on a buyer's
     * order, with its requested, effective, settled, and refunded amounts and how it was allocated
     * to payments.
     */
    "tips": Array<BuyerTip>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
};
/** An additional charge applied to an order. */
export type BuyerOrderCharge = {
    /**
     * Fixed charge amount before charge discounts and tax. Percentage charges use percent instead.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Resolved charge amount after charge discounts and before additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Optional description of the charge. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /** What the buyer sees for this charge at checkout and on receipts. */
    "name": string;
    /**
     * Unique identifier for this order charge, prefixed `och_`. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
    /**
     * Order that owns this charge, including the source order of an invoice snapshot. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Remaining amount for an ID-only charge refund target. Accounts for original-tender capacity,
     * reversals, accepted refunds, and whole-value edit reservations, including credit transferred
     * to added lines and pending or retryable failed edit refunds. Zero when exhausted. Refund
     * eligibility is checked again on submission. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refundable_money": MoneyValue;
    /**
     * Charge amount already refunded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Tax calculated for the charge, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Applied charge amount plus tax that is not already included in the price. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * What the charge is for. It classifies the charge in reporting and sets its default tax
     * category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee",
     * "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee",
     * "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee",
     * "restocking_fee", "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** An item purchased in an order. */
export type BuyerOrderLineItem = ({
    /**
     * Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "backordered_quantity": number;
    /**
     * Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Components fixed when the bundle line was added. The line takes their shared taxability and
     * tax category; all component variants must share both stored values. An unset category equals
     * only another unset category. [] (Value): {@link BundleComponent}. An item included in a
     * bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Catalog categories of the item. [] (Value): {@link CategoryReference}. A reference to a
     * product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Discount value allocated to this line item. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold
     * exists. Null when no hold exists yet, or when neither a future copied release_date nor the
     * inventory item supplies an applicable date. A future copied release_date takes precedence
     * even when physical stock covers every unit; otherwise the inventory item's expected ship
     * date applies only to backordered units when it is today or later in the merchant's timezone.
     * Past item dates are omitted and never frozen. The estimate may change before payment and
     * freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation
     * preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format:
     * date. Example: "2026-08-02".
     */
    "expected_ship_date": string | null;
    /**
     * Current quantities for each required fulfillment obligation: one entry for a single item or
     * one per bundle component that requires fulfillment. Quantities use line units for single
     * items and component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity +
     * removed_quantity. Omitted when the line needs no fulfillment or the order's obligations
     * cannot be computed, including older lines without recorded requirements. [] (Value): {@link
     * OrderLineItemFulfillmentQuantities}. Counts of how much of an order line item is assigned,
     * fulfilled, failed, canceled, removed, or still unassigned for fulfillment.
     */
    "fulfillment_quantities"?: Array<OrderLineItemFulfillmentQuantities>;
    /**
     * Fulfillment requirements fixed when the line item was created. direct describes a single
     * item; components describes each bundle component. Omitted for older line items without
     * recorded requirements. Fulfillment requirements for an order line item, given for a single
     * item or for each component of a bundle.
     */
    "fulfillment_requirements"?: OrderLineItemFulfillmentRequirements;
    /**
     * Gift card details for a gift card purchase line. The gift card purchase details saved on an
     * order line item: configuration, face value, price paid, and recipient.
     */
    "gift_card_purchase"?: GiftCardPurchaseSnapshot;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Whether the line tracks inventory, and the inventory demands fixed when the line was added.
     * `null` when no inventory snapshot was recorded for the line. anyOf[1] (Value): {@link
     * LineItemInventorySnapshot}. Whether an order line item tracks inventory, and the inventory
     * item quantities each unit demands. anyOf[2] (Value): null.
     */
    "inventory_snapshot": ((LineItemInventorySnapshot) | (null));
    /**
     * Number of license keys promised by this line: quantity when its frozen catalog setting
     * issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal
     * lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment,
     * so they may not exist yet when order.paid arrives. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "license_key_quantity": number;
    /**
     * Sum of the line item's modifier totals. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Modifiers selected on the line, with their prices. [] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<BuyerOrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /**
     * The edit that added this line. Null when the line was not added by an order edit. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id": string | null;
    /**
     * Order that owns this record or its referenced line item and charge. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Unique identifier for this order line item, prefixed `li_`. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * The `key` of the payment link line item this line was created from. Match order lines to the
     * link's line items with it instead of by name. Flint sets it when checkout starts and it
     * never changes; metadata updates don't affect it. `null` when the line didn't come from a
     * payment link line item: the order didn't come from a payment link, the line was added to the
     * order later, or the line came from a subscription plan through a subscription signup link.
     * minLength: 1. maxLength: 100.
     */
    "payment_link_line_item_key": string | null;
    /**
     * ID of the catalog product the item was sold from. Required whenever variant_id is present.
     * Absent on bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Product classification frozen on this line. Null when the line is unclassified. Custom lines
     * accept physical, digital, service, or fee; catalog lines use the product's type when added.
     * Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen
     * classification; void and reissue to change it. Value enum: "physical", "service", "fee",
     * "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /**
     * Masked card identities for fully funded units of this purchase line. Partial consideration
     * does not issue a card. [] (Value): {@link PurchasedGiftCard}. A gift card issued for one
     * unit of a purchased order line item, with its last four code characters and any card it
     * replaced.
     */
    "purchased_gift_cards": Array<PurchasedGiftCard>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Remaining quantity and components for an ID-only line refund target. Accounts for
     * original-tender capacity, reversals, accepted refunds, and whole-value edit reservations,
     * including credit transferred to added lines and pending or retryable failed edit refunds.
     * All values are zero when exhausted. Refund eligibility is checked again on submission.
     * Remaining refundable quantity and value of an order line, after prior refunds and order edit
     * reservations.
     */
    "refundable": OrderLineItemRefundable;
    /**
     * Amount of this line already refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "refunded_quantity": number;
    /**
     * Future release date copied when the line was created, in YYYY-MM-DD format. Null when the
     * line is not a pre-order. Earlier fulfillment is permitted. Format: date. Example:
     * "2026-08-02".
     */
    "release_date": string | null;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed by
     * paid-order edits. For bundles, each removed line unit removes all of its component units.
     * The original quantity and pricing remain the sale record; refunds are tracked separately.
     * Format: int64.
     */
    "removed_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Recurring offer and cadence frozen for this line at signup. The subscription offer and
     * billing interval an order line was bought under, with the recurring amount.
     */
    "subscription"?: SubscribedLine;
    /**
     * Subscription created for this line after the order is paid. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * Applicable active offer for a one-time line, or the offer terms frozen for a subscribed
     * line. A subscription offer attached to an order line item, with its name, discount, and
     * billing interval options.
     */
    "subscription_offer"?: OrderLineSubscriptionOfferSummary;
    /**
     * Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * How tax was calculated for this line item. Tax settings for an order line item calculated by
     * Flint or supplied by you, including the line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Tax calculated for this line item, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discounts, plus tax that is not already included in the price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit before modifiers, discounts, and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "unit_weight"?: Weight;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
});
/** A modifier selected on an order line item. */
export type BuyerOrderLineItemModifier = {
    /** Name of the modifier group recorded when this selection was added to the order line item. */
    "modifier_group_name": string;
    /**
     * Identifier of the selected catalog modifier. If its group is owned by a modifier set
     * (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /**
     * Stable identifier of the selected modifier on this order line item. Example:
     * "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Whether this selection appears in fulfillment details, recorded when selected. */
    "show_on_fulfillment": boolean;
    /** Whether this selection appears on buyer receipts, recorded when selected. */
    "show_on_receipt": boolean;
    /**
     * Whether the selection is a catalog list modifier or buyer-entered text. Value enum:
     * "catalog_modifier", "text".
     */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /**
     * Selected text group and buyer-entered value. Read an inline text group through its owning
     * modifier set. Text a buyer entered for a text modifier group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
    /**
     * Total price this selection adds to the line: `unit_price_delta_money` times the selection's
     * `quantity` times the line item's `quantity`. Always 0 for text selections. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Amount added to the item's unit price for each unit of this selection, recorded when
     * selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** A page of `BuyerOrder` objects. */
export type BuyerOrderListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerOrder}. A customer's purchase and its payment and fulfillment progress.
     */
    "data": Array<BuyerOrder>;
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
/** An attempt to pay an order. */
export type BuyerOrderPaymentAttempt = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * The outstanding balance this attempt was started to collect, fixed when it started. For an
     * order that gift cards partly cover, it includes the gift card part. Later changes to the
     * order's balance don't change it, and a resume request that sends
     * `expected_outstanding_money` is compared with this amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money": MoneyValue;
    /**
     * Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved
     * while the attempt is open and is taken from the card when the attempt succeeds. A failed or
     * canceled attempt releases it. Empty when no gift card is used. [] (Value): {@link
     * PaymentAttemptGiftCardRedemption}. A gift card redemption made as part of an order payment
     * attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /** Null when read from a buyer route. */
    "idempotency_key": null;
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and
     * recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /**
     * Whether the attempt collects the order's balance, saves a payment method without charging
     * it, or settles the order without a processor payment. Value enum: "payment", "setup",
     * "settlement".
     */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    /**
     * The order this payment attempt collects money for or saves a payment method for. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Unique identifier for this order payment attempt, prefixed `opat_`. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "order_payment_attempt_id": string;
    /**
     * The payment intents this attempt collects through, each with its amount, status, tip, and
     * latest error. Empty for an attempt that collects no processor payment, such as a setup, or
     * an order that gift cards or return credit settle alone. [] (Value): {@link
     * BuyerPaymentAttemptPaymentIntent}. The payment intent behind an order payment attempt, with
     * its status, amounts, authorization expiry, and last payment error.
     */
    "payment_intents": Array<BuyerPaymentAttemptPaymentIntent>;
    /**
     * Reports only a checkout buyer's skipped save when the pay request sent save_payment_method:
     * true and the attempt paid without saving the payment method. A merchant save has no entry
     * here; read payment_source.card.payment_method_id on the payment intent. A card typed into
     * checkout and saved has no entry here; read payment_method_save on the checkout session for a
     * card waiting for confirmation. What became of the buyer's save_payment_method. The payment
     * does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     * Steps the buyer must finish in your client before the attempt can continue, such as
     * authentication. Empty when none is pending. Complete them, then resume the attempt. []
     * (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
     * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
     * standalone PaymentIntent through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Where the attempt is in collecting payment or saving a payment method.
     * `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value
     * enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "succeeded", "failed", "expired", "canceled".
     */
    "status": "processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
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
     * "payment_source_not_updatable", "payment_source_ownership_mismatch", "rate_limit_exceeded",
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
        | "rate_limit_exceeded"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {});
};
/** A response containing `BuyerOrder` data. */
export type BuyerOrderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's purchase
     * and its payment and fulfillment progress.
     */
    "data": BuyerOrder;
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
 * Tax details on a buyer's order: whether tax is enabled, its mode and status, location,
 * exemption, and tax breakdowns.
 */
export type BuyerOrderTax = {
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
     * older snapshots omit details that were never recorded. The recorded exemption assessment,
     * without merchant evidence references.
     */
    "exemption"?: BuyerOrderTaxExemption;
    /**
     * The order's tax location, once one is established. Flint taxes items and charges without a
     * fulfillment destination of their own there. Omitted when every taxable item and charge is
     * taxed at its own fulfillment destination and those destinations differ, unless you provided
     * one. The location used to calculate tax on a buyer's order, and where its address came from.
     */
    "location"?: BuyerOrderTaxLocation;
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
/** The recorded exemption assessment, without merchant evidence references. */
export type BuyerOrderTaxExemption = {
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
/** The location used to calculate tax on a buyer's order, and where its address came from. */
export type BuyerOrderTaxLocation = {
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
};
/** A package within a shipment. */
export type BuyerPackage = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * Physical length, width, and height of the package. Package or item dimensions as `length`,
     * `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Order line quantities allocated to this outbound package. Present when the package has
     * items. [] (Value): {@link BuyerPackageItem}. An order line quantity allocated to this
     * package.
     */
    "items"?: Array<BuyerPackageItem>;
    /**
     * Return-label URL supplied by the merchant's integration. Included for return packages;
     * omitted for outbound packages. Omitted for a checkout session credential that doesn't act
     * for the customer the buyer verified.
     */
    "label_url"?: string;
    /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /**
     * Return this package belongs to. Present only on packages of return shipments. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the
     * quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "shipped_at"?: string;
    /**
     * Current package lifecycle state. Package states are the source used to derive shipment
     * status. - `created`: The package record exists but has not been packed or handed off. -
     * `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was
     * handed to the carrier. - `in_transit`: The carrier is moving the package through its
     * network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`:
     * The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
     * delivery but did not complete it. Follow the carrier instructions before retrying delivery.
     * - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported
     * issue. - `returned`: The package was returned toward or to its origin. - `voided`: The
     * package was voided and will not continue through delivery. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
    /**
     * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
};
/** An order line quantity allocated to this package. */
export type BuyerPackageItem = {
    /**
     * Bundle component packed in this package. Look it up in the order line's bundle_components.
     * Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /** Order containing the allocated line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Order line packed in this package. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** Package containing this item. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /** Flint ID for this package allocation. Example: "pki_01KEZF7C00CEFTYV5RD7XVYQ7B". */
    "package_item_id": string;
    /**
     * Quantity in order line units, or in component units when bundle_component_id is present;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
};
/** A page of `BuyerPackage` objects. */
export type BuyerPackageListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerPackage}. A package within a shipment.
     */
    "data": Array<BuyerPackage>;
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
/** A response containing `BuyerPackage` data. */
export type BuyerPackageResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A package within a
     * shipment.
     */
    "data": BuyerPackage;
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
/** The pause lengths this subscription accepts from its buyer. */
export type BuyerPauseActionOptions = {
    /**
     * When present, pause_duration_cycles is required and must be between 1 and this value. When
     * absent, omit pause_duration_cycles to pause until the buyer resumes. Format: int32. minimum:
     * 1. maximum: 12.
     */
    "max_pause_duration_cycles"?: number;
};
/** Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1. */
export type BuyerPauseCapability = {
    /**
     * Whether buyers may pause. When false, a buyer's pause returns 409 ACTION_NOT_ALLOWED with
     * reason not_offered. Default: true.
     */
    "enabled"?: boolean;
    /**
     * The longest pause a buyer may choose, in billing periods. When set, a buyer's pause must
     * send pause_duration_cycles from 1 to this value. Omit it for no limit, which also lets a
     * buyer pause until they resume. Format: int32. minimum: 1. maximum: 12.
     */
    "max_cycles"?: number;
};
/** Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1. */
export type BuyerPauseCapabilityInput = BuyerPauseCapability;
/** The return resolutions the buyer can pay now. */
export type BuyerPayBalanceActionOptions = {
    /**
     * Payable resolutions in creation order. Read each amount with GET
     * /v1/me/return-resolutions/{return_resolution_id}, then create its checkout session with POST
     * /v1/me/checkout-sessions and type return_resolution. minItems: 1. [] (Value): string.
     * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
};
/**
 * The payment intent behind an order payment attempt, with its status, amounts, authorization
 * expiry, and last payment error.
 */
export type BuyerPaymentAttemptPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Effective Flint capture deadline, equal to the earlier of the provider capture deadline and
     * this attempt's sealed resource guarantee. Capture is refused at or after this time, even
     * while status is requires_capture. Omitted until a hold is placed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at"?: string;
    /**
     * Payment intent's stored capturable amount. A positive amount does not override
     * authorization_expires_at or the payment status. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Money collected through this payment, once nothing more can be collected. Positive when
     * money was collected, including a payment Flint couldn't accept and is refunding (the payment
     * intent's cancellation_reason is payment_returned). Zero when nothing was collected, for
     * example after a decline or a released authorization. Absent while the outcome can still
     * change, such as an ACH debit that hasn't settled or an open hold. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * The most recent payment error recorded on this payment, when it has a public error code.
     * Absent when none is recorded. Why a payment attempt failed: a normalized `code`, a message,
     * when it failed, and recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
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
     * The part of `amount_money` that is a tip. Zero when the payment carries no tip. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe
 * values.
 */
export type BuyerPaymentCollection = {
    /**
     * Client configuration for collecting the payment through Stripe. Stripe values for collecting
     * payment on a buyer's order: the account ID, publishable key, return URL, and Elements
     * settings.
     */
    "stripe"?: BuyerPaymentCollectionStripe;
};
/**
 * Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return
 * URL, and Elements settings.
 */
export type BuyerPaymentCollectionStripe = {
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when
     * the payment has splits. When null, omit stripeAccount when initializing Stripe.js. Example:
     * "acct_1234567890".
     */
    "account_id": string | null;
    /**
     * Stripe Elements configuration for the available payment methods and amounts. Stripe Elements
     * collection guidance. Follow next_step in the browser, then submit the result to submit_to
     * through Flint.
     */
    "elements"?: BuyerPaymentCollectionStripeElements;
    /**
     * Stripe account ID of the collecting merchant. Present when this payment uses Stripe
     * on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe
     * Elements.
     */
    "on_behalf_of"?: string;
    /** Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to
 * submit_to through Flint.
 */
export type BuyerPaymentCollectionStripeElements = {
    /**
     * Amount and currency used to initialize the payment form. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in
     * a later release. [] (Value): string.
     */
    "digital_wallets"?: Array<string>;
    /**
     * Whether Elements is collecting a payment source for an immediate payment or a setup source
     * for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Browser collection operation to perform before calling submit_to. Value enum:
     * "collect_setup_payment_source", "create_confirmation_token".
     */
    "next_step": "collect_setup_payment_source" | "create_confirmation_token" | (string & {});
    /**
     * Stripe Elements payment method creation mode. Follow next_step: payment collection creates a
     * ConfirmationToken, and setup collection creates a PaymentMethod. Value enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /**
     * Deprecated: use payment_options. Processor payment method types that the payment form can
     * offer. Removed in a later release. [] (Value): string.
     */
    "payment_method_types": Array<string>;
    /**
     * Payment options the payment form can offer, in display order. Skip values you don't
     * recognize. Stripe Elements takes processor payment method types: pass card for card,
     * apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the
     * Payment Element's wallets option so it shows only the wallets listed. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Order payment intents that the buyer can select for collection. [] (Value): {@link
     * BuyerSelectableOrderPaymentIntent}. A payment intent a buyer can pay on an order, with its
     * status, amounts, payment collection details, and last payment error.
     */
    "selectable_payment_intents"?: Array<BuyerSelectableOrderPaymentIntent>;
    /**
     * Flint operation that accepts the result of next_step. Value enum: "pay_order",
     * "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
/**
 * Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery
 * guidance.
 */
export type BuyerPaymentErrorSummary = {
    /**
     * Flint-normalized payment failure code. Unknown provider values are returned as
     * payment_failed. Value enum: "card_declined", "card_details_outdated", "insufficient_funds",
     * "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized",
     * "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required",
     * "payment_blocked", "expired_card", "incorrect_cvc", "processing_error",
     * "payment_method_unavailable", "payment_method_declined", "payment_not_completed",
     * "payment_action_expired", "payment_method_temporarily_unavailable", "incorrect_pin",
     * "pin_try_exceeded", "pin_required", "confirmation_token_account_mismatch", "payment_failed".
     */
    "code": "card_declined"
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
        | "processing_error"
        | "payment_method_unavailable"
        | "payment_method_declined"
        | "payment_not_completed"
        | "payment_action_expired"
        | "payment_method_temporarily_unavailable"
        | "incorrect_pin"
        | "pin_try_exceeded"
        | "pin_required"
        | "confirmation_token_account_mismatch"
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
    /**
     * Guidance for resolving the payment failure before trying to collect again. Guidance for
     * recovering from a payment error: whether and how to retry (`retry`), and optional next
     * steps.
     */
    "remediation": BuyerErrorRemediation;
};
/**
 * A payment as the buyer sees it. Omits the store's fees, net, risk assessment, and dispute state.
 */
export type BuyerPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
    /**
     * When the hold lapses if it hasn't been collected: the earlier of the payment provider's
     * deadline and any guarantee for reserved resources. Omitted until a hold is placed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at"?: string;
    /**
     * When the processor authorized the payment. Absent until then. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "authorized_at"?: string;
    /**
     * The amount the processor authorized. It always equals amount_money and doesn't change once
     * set, even when a capture collects more. On a payment intent canceled with
     * cancellation_reason payment_returned, it equals the authorization Flint released instead.
     * Absent until the payment is authorized, and on payments canceled before authorization.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Flint-normalized reason the payment intent was canceled. Present only while status is
     * canceled. A cancellation without a specific reason returns payment_canceled. Absent while
     * last_payment_error.code is payment_blocked and Flint has not identified money to return.
     * Unknown processor values are returned as payment_canceled. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed",
     * "invoice_voided", "order_closed", "payment_canceled", "payment_returned".
     */
    "cancellation_reason"?: "requested_by_customer"
        | "duplicate"
        | "fraudulent"
        | "abandoned"
        | "invoice_payment_failed"
        | "invoice_voided"
        | "order_closed"
        | "payment_canceled"
        | "payment_returned"
        | (string & {});
    /**
     * The part of the authorization that can still be collected. Positive only while status is
     * requires_capture, and zero after it is collected, released, or expires. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "capturable_money"?: MoneyValue;
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * When money was captured. For automatic capture, this is when the payment succeeded. Absent
     * until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "captured_at"?: string;
    /**
     * The amount collected from the buyer. Zero while a hold is open, and positive whenever status
     * is succeeded. Absent until the payment is authorized. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * The part of captured_money that is a tip. Absent until the payment is collected. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_tip_money"?: MoneyValue;
    /**
     * Flint checkout session ID associated with this payment, when present. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Whether you took part in the latest charge. absent means the store charged your saved card
     * while you weren't there, such as for a renewal or a fee. Each payment attempt sets it again.
     * Value enum: "present", "absent".
     */
    "customer_presence": "present" | "absent" | (string & {});
    /**
     * Present when a payment provider asked Flint to pause fulfillment for this payment. While its
     * status is active, open fulfillments are on hold. A hold on fulfillment tied to a payment,
     * with the reason, the action required, and whether the hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /**
     * Bill this payment collects, when it pays a bill. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /** The bill installment this payment collects. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". */
    "invoice_schedule_entry_id"?: string;
    /**
     * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@link
     * PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error
     * code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /** Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /**
     * The edit whose added balance this payment collects. Omitted when this payment doesn't
     * collect an edit's balance. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id"?: string;
    /** Order this payment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: string;
    /**
     * How the payment was started. Fixed when the payment is created. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Email address for this payment's receipt. When it isn't set, Flint uses the buyer's email.
     * `null` when no receipt email has been set on the payment. Format: email. maxLength: 255.
     * Example: "buyer@example.com".
     */
    "receipt_email"?: string | null;
    /**
     * How much of captured_money has been refunded, including value issued as store credit, based
     * on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * The part of the authorization returned to the buyer without being charged: the uncollected
     * remainder after a partial capture, or the whole authorization after a cancellation or
     * expiry. It was never collected, so it needs no refund. Absent until the payment is
     * authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "released_money"?: MoneyValue;
    /**
     * Flint return ID associated with this payment, when present. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * The return resolution whose balance this payment collects. Set for exchange balances and
     * corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * The payment option the most recent confirmation used. Absent until the payment intent is
     * first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
    /**
     * The text shown on the buyer's card or bank statement for this payment. `null` until the
     * charge is created. `null` when the provider supplies no descriptor. Frozen when the charge
     * is created.
     */
    "statement_descriptor": string | null;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment and one whose last
     * attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are
     * final. Refunds never change status. Value enum: "requires_payment_method",
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
     * The subscription whose billing charged this payment: its first charge, a renewal, a retry or
     * a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /** Opaque payment reference to share with merchant support. Do not parse its format. */
    "support_reference": string;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. `null` when no tip is set, and for a payment that is part of a purchase until
     * its payment attempt has moved past requires_payment_method and requires_confirmation. A
     * payment that is part of a purchase without a tip can return an amount of 0 instead. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once
     * the payment intent exists. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `BuyerPaymentIntent` objects. */
export type BuyerPaymentIntentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerPaymentIntent}. A payment as the buyer sees it. Omits the store's fees, net, risk
     * assessment, and dispute state.
     */
    "data": Array<BuyerPaymentIntent>;
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
/** A response containing `BuyerPaymentIntent` data. */
export type BuyerPaymentIntentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A payment as the buyer
     * sees it. Omits the store's fees, net, risk assessment, and dispute state.
     */
    "data": BuyerPaymentIntent;
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
/** A customer's saved payment details. */
export type BuyerPaymentMethod = {
    /**
     * Brand, expiry and last four digits. Present when `type` is `card`. Card details on a payment
     * method: brand, expiration month and year, last four digits, and the wallet when one was
     * used.
     */
    "card"?: CardDetails;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * Whether this is the customer's default payment method, the one
     * BuyerCustomer.default_payment_method_id names. Change it with default_payment_method_id on
     * PATCH /v1/me. Existing subscriptions keep their payment_method_id.
     */
    "is_default": boolean;
    /**
     * Removal is in progress. Show this card as Removing and offer retry with DELETE
     * /v1/payment-methods/{payment_method_id}, or DELETE
     * /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment,
     * subscription, or default. Flint retries abandoned removals automatically.
     */
    "is_removing": boolean;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Unique identifier for this payment method, prefixed `pm_`. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
    /**
     * Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when
     * Flint wallet support is enabled. Accept future values. Value enum: "flint", "store".
     */
    "saved_with"?: "flint" | "store" | (string & {});
    /**
     * The saved card lifecycle. Offer the card for a new payment only when status is active and
     * is_removing is false. Treat any other status as not chargeable, including values added
     * later. Value enum: "pending", "active", "expired", "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Kind of payment method. Value enum: "card". */
    "type": "card" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * When Flint may charge the payment method. off_session payment methods can pay subscriptions,
     * automatic invoices, and other charges without the buyer, and can be a customer's default.
     * on_session payment methods were saved by the buyer in checkout for faster checkout at this
     * merchant; Flint charges them only in checkouts the buyer completes and refuses them for any
     * charge without the buyer and as a default. Payment methods saved before usage existed are
     * off_session. Value enum: "on_session", "off_session".
     */
    "usage": "on_session" | "off_session" | (string & {});
};
/** A page of `BuyerPaymentMethod` objects. */
export type BuyerPaymentMethodListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerPaymentMethod}. A customer's saved payment details.
     */
    "data": Array<BuyerPaymentMethod>;
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
/**
 * The part of a refund returned through one payment, with the amount, tip, status, and any failure
 * reason.
 */
export type BuyerPaymentRefund = {
    /**
     * Amount refunded through this payment, including `refunded_tip_money`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned can't be retried through Flint
     * either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way
     * if you haven't already. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
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
     * The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand`
     * parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1]
     * (Value): {@link BuyerExpandedPaymentIntentSummary}. A payment intent summary in a buyer
     * response, with its amount, status, payment source, and capture method. anyOf[2] (Value):
     * null.
     */
    "payment_intent"?: ((BuyerExpandedPaymentIntentSummary) | (null));
    /**
     * The payment this part of the refund returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * The platform fee this payment refund returns to you, present when the payment carries a
     * collected platform fee: its share when the refund was created with refund_platform_fee true,
     * 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If
     * this payment refund then fails, Flint doesn't take the returned fee back. See [Platform
     * fees](/docs/guides/platform-fees). Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_platform_fee_money"?: MoneyValue;
    /**
     * Share of `amount_money` that refunds tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
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
     * When this payment refund's `status` first became `succeeded`, as Flint recorded the
     * processor's outcome. It keeps that time if the part fails and later succeeds again. The
     * refund's `tender_allocations` entry for the same payment has the same value. Present only
     * while `status` is `succeeded`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
};
export type BuyerPaymentRefundPreviousAttributes = {
    /**
     * Amount refunded through this payment, including `refunded_tip_money`. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned can't be retried through Flint
     * either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way
     * if you haven't already. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed". anyOf[1] (Value): string. Why a refund failed or a payment refund was
     * canceled. Failed and canceled amounts become refundable again, except a refund with reason
     * payment_returned that failed with payment_disputed: the buyer won a dispute on the charge,
     * so nothing is left to refund. A payment_returned refund that failed with refund_abandoned
     * can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the
     * buyer. Repay them another way if you haven't already. Fix the cause, then create a new
     * refund with a new idempotency key. Unknown provider values are returned as refund_failed.
     * Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed". anyOf[2] (Value): null.
     */
    "failure_reason"?: (("expired_or_canceled_card"
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
        | (string & {}))
        | (null));
    /**
     * The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand`
     * parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1]
     * (Value): {@link BuyerExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "payment_intent"?: ((BuyerExpandedPaymentIntentSummaryPreviousAttributes) | (null));
    /**
     * The payment this part of the refund returned money through. anyOf[1] (Value): string. The
     * payment this part of the refund returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     */
    "payment_intent_id"?: ((string) | (null));
    /**
     * The platform fee this payment refund returns to you, present when the payment carries a
     * collected platform fee: its share when the refund was created with refund_platform_fee true,
     * 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If
     * this payment refund then fails, Flint doesn't take the returned fee back. See [Platform
     * fees](/docs/guides/platform-fees). anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "refunded_platform_fee_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Share of `amount_money` that refunds tips. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunded_tip_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[1]
     * (Value): string. Status of this payment refund or tender allocation. A succeeded refund can
     * still fail after a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[2]
     * (Value): null.
     */
    "status"?: (("pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {})) | (null));
    /**
     * When this payment refund's `status` first became `succeeded`, as Flint recorded the
     * processor's outcome. It keeps that time if the part fails and later succeeds again. The
     * refund's `tender_allocations` entry for the same payment has the same value. Present only
     * while `status` is `succeeded`. anyOf[1] (Value): string. When this payment refund's `status`
     * first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if
     * the part fails and later succeeds again. The refund's `tender_allocations` entry for the
     * same payment has the same value. Present only while `status` is `succeeded`. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "succeeded_at"?: ((string) | (null));
};
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
     * Money paid for Return resolution credits, included in amount_money. It carries no
     * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
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
     * A coarse buyer-visible failure category. refund_abandoned means the refund could not be
     * completed; contact the store to get your money back. refund_failed means the refund failed.
     * Omitted when there is no failure. Value enum: "refund_failed", "refund_abandoned".
     */
    "failure_reason"?: "refund_failed" | "refund_abandoned" | (string & {});
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
     * ID of the order the refund was issued against. For a refund with `reason`
     * `payment_returned`, the order the returned payment was for; the order never received this
     * money. Absent for a refund of a payment that has no order, and for a standalone gift card
     * refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand`
     * parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1]
     * (Value): {@link BuyerExpandedPaymentIntentSummary}. A payment intent summary in a buyer
     * response, with its amount, status, payment source, and capture method. anyOf[2] (Value):
     * null.
     */
    "payment_intent"?: ((BuyerExpandedPaymentIntentSummary) | (null));
    /**
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * The part of the refund returned through each payment, with its own status. Absent when the
     * refund was all gift card credit or store credit. [] (Value): {@link BuyerPaymentRefund}. The
     * part of a refund returned through one payment, with the amount, tip, status, and any failure
     * reason.
     */
    "payment_refunds"?: Array<BuyerPaymentRefund>;
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
     * `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when
     * the store made the refund, because a store's reasons aren't shared with buyers. Value enum:
     * "payment_returned", null.
     */
    "reason": "payment_returned" | null | (string & {}) | null;
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
export type BuyerRefundPreviousAttributes = {
    /**
     * Total refunded across all tenders, including `refunded_tip_money`. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Money paid for Return resolution credits, included in amount_money. It carries no
     * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the credit note this refund paid out. Present only on refunds issued through a credit
     * note. anyOf[1] (Value): string. ID of the credit note this refund paid out. Present only on
     * refunds issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2]
     * (Value): null.
     */
    "credit_note_id"?: ((string) | (null));
    /**
     * The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter,
     * so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value):
     * {@link ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
    /**
     * ID of the customer on the refunded order or payment. Absent when neither has one. anyOf[1]
     * (Value): string. ID of the customer on the refunded order or payment. Absent when neither
     * has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     */
    "customer_id"?: ((string) | (null));
    /**
     * A coarse buyer-visible failure category. refund_abandoned means the refund could not be
     * completed; contact the store to get your money back. refund_failed means the refund failed.
     * Omitted when there is no failure. Value enum: "refund_failed", "refund_abandoned". anyOf[1]
     * (Value): string. A coarse buyer-visible failure category. refund_abandoned means the refund
     * could not be completed; contact the store to get your money back. refund_failed means the
     * refund failed. Omitted when there is no failure. Value enum: "refund_failed",
     * "refund_abandoned". anyOf[2] (Value): null.
     */
    "failure_reason"?: (("refund_failed" | "refund_abandoned" | (string & {})) | (null));
    /**
     * ID of the invoice whose credit note this refund paid out. Present only on refunds issued
     * through a credit note. anyOf[1] (Value): string. ID of the invoice whose credit note this
     * refund paid out. Present only on refunds issued through a credit note. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
     */
    "invoice_id"?: ((string) | (null));
    /**
     * How the refund applied to each order line item it covered, with quantity, tax, and
     * adjustments. anyOf[1] (Value): Array of {@link RefundLineItemAllocationPreviousAttributes}.
     * How the refund applied to each order line item it covered, with quantity, tax, and
     * adjustments. anyOf[1][] (Value): {@link RefundLineItemAllocationPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "line_item_allocations"?: ((Array<RefundLineItemAllocationPreviousAttributes>) | (null));
    /**
     * The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it
     * is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@link
     * BuyerExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     */
    "order"?: ((BuyerExpandedOrderSummaryPreviousAttributes) | (null));
    /**
     * ID of the paid-order edit that created this refund. Present only on refunds issued through
     * an order edit. anyOf[1] (Value): string. ID of the paid-order edit that created this refund.
     * Present only on refunds issued through an order edit. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
     */
    "order_edit_id"?: ((string) | (null));
    /**
     * ID of the order the refund was issued against. For a refund with `reason`
     * `payment_returned`, the order the returned payment was for; the order never received this
     * money. Absent for a refund of a payment that has no order, and for a standalone gift card
     * refund. anyOf[1] (Value): string. ID of the order the refund was issued against. For a
     * refund with `reason` `payment_returned`, the order the returned payment was for; the order
     * never received this money. Absent for a refund of a payment that has no order, and for a
     * standalone gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
     * null.
     */
    "order_id"?: ((string) | (null));
    /**
     * The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand`
     * parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1]
     * (Value): {@link BuyerExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "payment_intent"?: ((BuyerExpandedPaymentIntentSummaryPreviousAttributes) | (null));
    /**
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. anyOf[1] (Value): string.
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     */
    "payment_intent_id"?: ((string) | (null));
    /**
     * The part of the refund returned through each payment, with its own status. Absent when the
     * refund was all gift card credit or store credit. anyOf[1] (Value): Array of {@link
     * BuyerPaymentRefundPreviousAttributes}. The part of the refund returned through each payment,
     * with its own status. Absent when the refund was all gift card credit or store credit.
     * anyOf[1][] (Value): {@link BuyerPaymentRefundPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_refunds"?: ((Array<BuyerPaymentRefundPreviousAttributes>) | (null));
    /**
     * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is
     * on its way without review. Value enum: "manual_review", null. anyOf[1] (Value): string. Why
     * a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on
     * its way without review. Value enum: "manual_review", null. anyOf[2] (Value): null.
     */
    "pending_reason"?: (("manual_review" | null | (string & {})) | (null));
    /**
     * Who moved or is moving the money for this refund. Flint processes refunds through a
     * processor or a gift card; merchant means the merchant returned the money outside Flint and
     * recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant".
     * anyOf[1] (Value): string. Who moved or is moving the money for this refund. Flint processes
     * refunds through a processor or a gift card; merchant means the merchant returned the money
     * outside Flint and recorded it here. Existing refunds are processed by Flint. Value enum:
     * "flint", "merchant". anyOf[2] (Value): null.
     */
    "processed_by"?: (("flint" | "merchant" | (string & {})) | (null));
    /**
     * `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when
     * the store made the refund, because a store's reasons aren't shared with buyers. Value enum:
     * "payment_returned", null. anyOf[1] (Value): string. `payment_returned` when Flint refunded a
     * payment it couldn't apply to the order. `null` when the store made the refund, because a
     * store's reasons aren't shared with buyers. Value enum: "payment_returned", null. anyOf[2]
     * (Value): null.
     */
    "reason"?: (("payment_returned" | null | (string & {})) | (null));
    /**
     * Note explaining the refund, up to 1,024 characters. anyOf[1] (Value): string. Note
     * explaining the refund, up to 1,024 characters. anyOf[2] (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * Unique identifier for this refund, prefixed `ref_`. anyOf[1] (Value): string. Unique
     * identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * anyOf[2] (Value): null.
     */
    "refund_id"?: ((string) | (null));
    /**
     * The merchant's opaque check, wire, or other reference for money returned outside Flint,
     * preserved exactly. Present only when processed_by is merchant and a reference was supplied.
     * external_reference_id is the merchant's own refund ID. anyOf[1] (Value): string. The
     * merchant's opaque check, wire, or other reference for money returned outside Flint,
     * preserved exactly. Present only when processed_by is merchant and a reference was supplied.
     * external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255.
     * anyOf[2] (Value): null.
     */
    "refund_reference"?: ((string) | (null));
    /**
     * When the merchant reports that the money was returned outside Flint. Present only when
     * processed_by is merchant. anyOf[1] (Value): string. When the merchant reports that the money
     * was returned outside Flint. Present only when processed_by is merchant. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "refunded_at"?: ((string) | (null));
    /**
     * Share of `amount_money` that refunds tips. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunded_tip_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the return this refund paid out. Present only on refunds issued by a return. anyOf[1]
     * (Value): string. ID of the return this refund paid out. Present only on refunds issued by a
     * return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the return resolution that issued this refund. Present only on refunds issued by a
     * return. anyOf[1] (Value): string. ID of the return resolution that issued this refund.
     * Present only on refunds issued by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * anyOf[2] (Value): null.
     */
    "return_resolution_id"?: ((string) | (null));
    /**
     * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". anyOf[1] (Value): string. Summary of payment_refunds and
     * tender_allocations. Only failed is final: succeeded and partially_succeeded can still change
     * when a bank rejects a refund after accepting it. A refund Flint made to return a payment it
     * couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when
     * a bank reverses it. Follow refund.created when it is accepted, refund.succeeded,
     * refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated
     * for other changes. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * anyOf[2] (Value): null.
     */
    "status"?: (("pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {})) | (null));
    /**
     * When `status` first became `succeeded`. For a refund with `payment_refunds` or
     * `tender_allocations`, it's when the last of them first succeeded, so it equals the latest
     * `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the
     * outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
     * `status` is `succeeded`; absent for every other status, including `partially_succeeded` and
     * a refund that failed after it succeeded. A refund that succeeds again shows its first
     * success time. anyOf[1] (Value): string. When `status` first became `succeeded`. For a refund
     * with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded,
     * so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when
     * Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present
     * only while `status` is `succeeded`; absent for every other status, including
     * `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds
     * again shows its first success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "succeeded_at"?: ((string) | (null));
    /**
     * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
     * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. anyOf[1]
     * (Value): Array of {@link RefundTaxBreakdownRefundPreviousAttributes}. Tax reversed on
     * order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items
     * is in `line_item_allocations[].tax_breakdown_refunds`. anyOf[1][] (Value): {@link
     * RefundTaxBreakdownRefundPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_breakdown_refunds"?: ((Array<RefundTaxBreakdownRefundPreviousAttributes>) | (null));
    /**
     * Every tender the refund drew from, payment or gift card, with its amount, tip share, status,
     * and destination. anyOf[1] (Value): Array of {@link
     * RefundTenderAllocationPreviousAttributes}. Every tender the refund drew from, payment or
     * gift card, with its amount, tip share, status, and destination. anyOf[1][] (Value): {@link
     * RefundTenderAllocationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tender_allocations"?: ((Array<RefundTenderAllocationPreviousAttributes>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
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
/**
 * A store-reach remembered identity for the current customer at this business and environment.
 * Customer sessions never receive code_channel.
 */
export type BuyerRememberedBuyer = {
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
/**
 * Every working store-reach remembered buyer for the current customer's email, at most ten. This
 * bounded list has no pagination.
 */
export type BuyerRememberedBuyerListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. maxItems: 10. []
     * (Value): {@link BuyerRememberedBuyer}. A store-reach remembered identity for the current
     * customer at this business and environment. Customer sessions never receive code_channel.
     */
    "data": Array<BuyerRememberedBuyer>;
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
/** A response containing `BuyerRememberedBuyer` data. */
export type BuyerRememberedBuyerResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A store-reach remembered
     * identity for the current customer at this business and environment. Customer sessions never
     * receive code_channel.
     */
    "data": BuyerRememberedBuyer;
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
/**
 * How many payment retries the buyer has left this billing period, and the retry that is running.
 */
export type BuyerRetryPaymentActionOptions = {
    /**
     * The retry that is pending or processing. Read it with GET
     * /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id} until
     * its status is succeeded or failed. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     */
    "active_subscription_payment_retry_id"?: string;
    /** The buyer limit per billing period. Currently 3. Format: int32. minimum: 1. */
    "max_retries": number;
    /**
     * Retries left this billing period. Retries the store starts count too. The count starts again
     * when a later billing period becomes past due. Format: int32. minimum: 0. maximum: 3.
     */
    "remaining_retries": number;
};
/** A request to send purchased items back. */
export type BuyerReturn = {
    /**
     * What the buyer can do with the return, in this order: withdraw, ship_items, then
     * pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's
     * buyer account, lists all three every time. Merchant responses and webhooks omit this field.
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
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer routes return only keys
     * from your buyer namespace.
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
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string | null;
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
     * Estimate for selected eligible quantities requested as refund, or with no requested
     * resolution when refund is allowed. Also includes explicitly requested eligible store credit.
     * Null when no selected line qualifies for refund or store credit. The store's inspection and
     * its final decision can change the refund. Nothing is reserved. anyOf[1] (Value): {@link
     * BuyerReturnRefundEstimate}. Estimated refund for the selected eligible quantities. The
     * store's inspection and its final decision can change the refund. Nothing is reserved.
     * anyOf[2] (Value): null.
     */
    "refund_estimate": ((BuyerReturnRefundEstimate) | (null));
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
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
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
     * ReturnHandoffRequirementLineItem}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnHandoffRequirementLineItem>;
    /** Reserved. Flint doesn't set it today, so it's always omitted. Format: int64. */
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
     * and completed resolutions. Whole-number quantity; fractional quantities are not supported.
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
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
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
     * "not_selected", "pending", "requires_action", "completed", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "completed" | "failed" | (string & {});
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
     * Who pays return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null.
     */
    "return_shipping_payer": "merchant" | "buyer" | null | (string & {}) | null;
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
    /** Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {};
    /** Name of the modifier group recorded when this selection was added to the order line item. */
    "modifier_group_name": string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /**
     * Whether this selection's price applies to each unit of the line item or once to the whole
     * line. Value enum: "per_item", "per_line".
     */
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
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
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
/**
 * Estimated refund for the selected eligible quantities. The store's inspection and its final
 * decision can change the refund. Nothing is reserved.
 */
export type BuyerReturnRefundEstimate = {
    /**
     * Returned total less policy deductions, floored at zero. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /**
     * Net store credit for explicitly selected eligible store-credit quantities after policy
     * deductions, floored per line at zero. Separate from returned_total_money, deduction_money,
     * and buyer_refund_amount_money, which cover refund quantities only. Zero when no store credit
     * qualifies. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "buyer_store_credit_amount_money": MoneyValue;
    /**
     * Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * What the buyer paid for these quantities after discounts, including tax. Uses the same
     * allocation as a return resolution. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Store credit is issued as a new gift card by email. Applies to
     * buyer_store_credit_amount_money. Value enum: "new_gift_card".
     */
    "store_credit_destination": "new_gift_card" | (string & {});
    /**
     * Estimated original-payment funding in refund order. Amounts sum to buyer_refund_amount_money
     * plus buyer_store_credit_amount_money less refund_shortfall_money. Empty when no value is
     * payable. [] (Value): {@link ReturnRefundTenderEstimate}. One estimated original-payment
     * destination for a return refund.
     */
    "tender_estimates": Array<ReturnRefundTenderEstimate>;
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
