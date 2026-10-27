import type { ResponseMeta } from './types-40.js';
import type { Merchant } from './types-30.js';
import type { OnboardingNextStep, MoneyValue, MoneyValueInput } from './types-31.js';
import type { User } from './types-49.js';
import type { BuyerAction } from './types-1.js';
import type { CheckoutBuyerContact, CategoryReference } from './types-3.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary,
    Dimensions
} from './types-16.js';
import type { Fulfillment } from './types-17.js';
import type { InventoryRoutingSource } from './types-25.js';
import type { OrderReturnCreditSettlement, OrderTax } from './types-33.js';
import type {
    PaymentCollection,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentErrorSummary,
    PaymentIntent
} from './types-35.js';
import type { PricingAmounts, PendingPaymentAction } from './types-37.js';
import type { SettlementAmounts, SubscribedLine } from './types-44.js';
import type { TicketedEvent, Tip, TextModifierRequest, TextModifierRequestInput } from './types-47.js';
import type { TaxCalculationRequestInput, TaxCalculationRequest } from './types-46.js';
import type { DeliveryPreviewRoutingSourceInput } from './types-12.js';
import type { BundleComponent } from './types-0.js';
import type { GiftCardPurchaseSnapshot, Image } from './types-19.js';
import type { LineItemInventorySnapshot } from './types-28.js';
import type { PurchasedGiftCard } from './types-39.js';
import type { SelectedProductOption } from './types-43.js';
import type { Weight } from './types-61.js';
import type { SubscriptionIntervalOption } from './types-45.js';
/**
 * Shape $ (Value): {@link OnboardingVerifyEmailRequest}. The request body for: Verify onboarding
 * email.
 */
export type OnboardingVerifyEmailRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "merchant_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "verification_code": string;
    /** Shape $ (Value): string. minLength: 1. */
    "verification_token": string;
};
/**
 * Shape $ (Value): {@link OnboardingVerifyEmailRequestInput}. The request body for: Verify
 * onboarding email.
 */
export type OnboardingVerifyEmailRequestInput = OnboardingVerifyEmailRequest;
/**
 * Shape $ (Value): {@link OnboardingVerifyEmailResponse}. A response containing
 * `OnboardingVerifyEmailResult` data.
 */
export type OnboardingVerifyEmailResponse = {
    /**
     * Shape $ (Value): {@link OnboardingVerifyEmailResult}. The result of verifying an onboarding
     * email: the merchant and user, an onboarding session token, and the next step.
     */
    "data": OnboardingVerifyEmailResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OnboardingVerifyEmailResult}. The result of verifying an onboarding
 * email: the merchant and user, an onboarding session token, and the next step.
 */
export type OnboardingVerifyEmailResult = {
    /**
     * Shape $ (Value): boolean. Whether the merchant has no external API key and a default sandbox
     * exists.
     */
    "can_issue_api_key": boolean;
    /** Shape $ (Value): string. */
    "default_sandbox_id"?: string;
    /** Shape $ (Value): {@link Merchant}. The business accepting payments. */
    "merchant": Merchant;
    /** Shape $ (Value): boolean. */
    "merchant_created": boolean;
    /**
     * Shape $ (Value): {@link OnboardingNextStep}. The next step to move onboarding forward, with
     * who owns it, whether a machine can complete it, and the endpoint to submit to.
     */
    "next_step"?: OnboardingNextStep;
    /**
     * Shape $ (Value): string. Expiry of onboarding_session_token. The token cannot be refreshed;
     * verify the email again to get a new one. Format: date-time.
     */
    "onboarding_session_expires_at": string;
    /** Shape $ (Value): string. */
    "onboarding_session_token": string;
    /** Shape $ (Value): {@link User}. A user with access to merchant accounts. */
    "user": User;
};
/**
 * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment progress.
 */
export type Order = {
    /** Shape $ (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Shape $ (Value): {@link OrderAuthorizationAmounts}. The amounts authorized and still
     * capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the order, in this
     * order: start_return, then resend_receipt. A buyer's read through a customer session on
     * /v1/me, or in Flint's buyer account, lists both every time; a merchant read gets an empty
     * list. A list of orders leaves start_return out, since only a read of one order checks return
     * eligibility. start_return is due when the last open return window ends. Example: []. Shape
     * $[] (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
     * invoice or return they read through /v1/me. Show the actions with is_required as what needs
     * the buyer's attention, and the first available action as the primary action on the
     * resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Shape $ (Value): {@link CheckoutBuyerContact}. Email and phone saved when payment started,
     * from the pay request's buyer_contact or the paying checkout session's saved contact. It does
     * not change the linked customer. Buyer contact supplied with payment or saved during
     * checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** Shape $ (Value): string. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): Array of {@link OrderCharge}. Shape $[] (Value): {@link OrderCharge}. An
     * additional charge applied to an order.
     */
    "charges": Array<OrderCharge>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "checkout_session_ids": Array<string>;
    /**
     * Shape $ (Value): string. When the order closed. Present exactly when status is closed. Set
     * once at the transition and never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Shape $ (Value): string. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. The caller note supplied when closing the order. System closures
     * leave it absent. It is not shown to the buyer.
     */
    "closed_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestination}. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. Where an order is delivered: the address, the recipient,
     * and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Shape $ (Value): Array of {@link OrderDiscount}. Shape $[] (Value): {@link OrderDiscount}. A
     * discount applied to an order, with its amount, status, and the line items and charges it
     * covers. It comes from a manual discount or a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
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
     * Shape $ (Value): Array of {@link Fulfillment}. Shape $[] (Value): {@link Fulfillment}. Work
     * required to deliver an order's items.
     */
    "fulfillments": Array<Fulfillment>;
    /**
     * Shape $ (Value): {@link OrderGiftCardEstimate}. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardSettlement}. Shape $[] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /** Shape $ (Value): boolean. */
    "gift_card_tender_enabled": boolean;
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardSelection}. Shape $[] (Value): {@link
     * OrderGiftCardSelection}. A gift card available to pay an order, with its available balance
     * and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * Shape $ (Value): string. ID of the delivery selection that governs this order, including
     * pickup choices without a delivery destination. Read with GET /v1/orders/{order_id}; other
     * order responses may omit this field. While present, change the destination through the
     * delivery selection. Omitted when no selection governs the order.
     */
    "governing_delivery_selection_id"?: string;
    /** Shape $ (Value): string. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): string. Why inventory could not be committed after payment. The cause
     * remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are
     * returned as other; new values may be added. Value enum: "inventory_deduction_failed",
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
     * Shape $ (Value): string. The merchant note supplied when resolving the inventory exception.
     * It is not shown to the buyer.
     */
    "inventory_exception_resolution_message"?: string;
    /**
     * Shape $ (Value): string. Whether an inventory problem after payment needs attention. Value
     * enum: "paid_inventory_failed", "resolved".
     */
    "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
    /** Shape $ (Value): string. The reservation holding stock for this order, when one exists. */
    "inventory_reservation_id"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where this order's tracked demand is
     * routed. Required before an order containing tracked variants can hold stock. Where an order,
     * payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link OrderLineItem}. Shape $[] (Value): {@link OrderLineItem}.
     * An item purchased in an order.
     */
    "line_items": Array<OrderLineItem>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "order_number"?: string;
    /**
     * Shape $ (Value): string. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription".
     */
    "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | (string & {});
    /**
     * Shape $ (Value): {@link PaymentCollection}. Client-side details for collecting payment from
     * the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ExpandedPaymentIntentSummary}. Shape $[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Shape $ (Value): string. Payment link whose checkout created this order. Absent for orders
     * that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a
     * link's orders.
     */
    "payment_link_id"?: string;
    /**
     * Shape $ (Value): string. Collection progress. An invoice write-off also completes collection
     * without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Shape $ (Value): {@link PricingAmounts}. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Shape $ (Value): string. Refund progress for collected money. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): Array of {@link OrderReturnCreditSettlement}. Value applied to this order
     * from items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. Shape $[] (Value): {@link OrderReturnCreditSettlement}. A
     * return credit applied to an order payment, with the amount and the return and resolution it
     * came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * Shape $ (Value): string. ID of the return resolution that created this order as a
     * replacement. Omitted for orders a return did not create.
     */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): {@link SettlementAmounts}. How much of an order has been paid, refunded,
     * credited, written off, and settled as tips, and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Shape $ (Value): {@link PaymentCollection}. Client-side details for collecting payment from
     * the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Shape $ (Value): string. Whether the order still accepts changes and new payments. Refunds,
     * fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value
     * enum: "open", "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedSubscriptionSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedSubscriptionSummary}. A subscription's summary fields, including status,
     * billing period, and next billing time, returned when the subscription is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription"?: ((ExpandedSubscriptionSummary) | (null));
    /**
     * Shape $ (Value): integer string. Charged subscription cycle associated with this order.
     * Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Time the subscriber changed delivery after this paid renewal was
     * prepared. The order keeps its committed destination until you correct it or refund and
     * replace it. Format: date-time.
     */
    "subscription_delivery_changed_at"?: string;
    /** Shape $ (Value): string. */
    "subscription_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedSubscriptionPlanSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
     * name, billing interval, currency, and status, returned when the plan is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link OrderTax}. An order's tax state, including its mode, price mode,
     * status, location, exemption, and tax breakdowns.
     */
    "tax": OrderTax;
    /**
     * Shape $ (Value): {@link TicketedEvent}. Event and tickets this order sold through an event
     * payment link. Absent on other orders. Event details for a ticketed order: name, location,
     * start time, time zone, and the tickets issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Shape $ (Value): Array of {@link Tip}. Shape $[] (Value): {@link Tip}. A tip on an order,
     * with its requested, settled, and refunded amounts, status, and how it was paid.
     */
    "tips": Array<Tip>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Order version for optimistic concurrency. Send this value
     * as the expected version when changing the order. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link OrderActivity}. Read-only order history row for merchant timeline
 * rendering and debugging. The owning resource remains authoritative for state and money movement.
 */
export type OrderActivity = {
    /**
     * Shape $ (Value): string. The action recorded on the order. Omitted when the activity type
     * cannot be identified. Clients must accept values added in future releases. Value enum:
     * "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment",
     * "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: "created"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Change to the order balance narrated by this row.
     * Informational rows have amount 0. Do not sum activity deltas to compute the order balance.
     * Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_delta_money": MoneyValue;
    /**
     * Shape $ (Value): string. Related checkout session when activity_type points at checkout
     * session lifecycle.
     */
    "checkout_session_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Human-readable Flint description. Provider-specific raw statuses
     * and failure values are not exposed here.
     */
    "description": string;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. */
    "order_activity_id": string;
    /** Shape $ (Value): string. */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. */
    "order_discount_id"?: string;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "order_tip_id"?: string;
    /**
     * Shape $ (Value): string. Related payment intent when activity_type points at a payment
     * attempt or payment outcome.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Related refund when activity_type points at a refund outcome. Read
     * the refund for the authoritative outcome.
     */
    "refund_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Order balance after this activity in chronological
     * time. This is context for reading the log, not a reconciliation ledger. Signed monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "running_balance_money": MoneyValue;
};
/** Shape $ (Value): {@link OrderActivityListResponse}. A page of `OrderActivity` objects. */
export type OrderActivityListResponse = {
    /**
     * Shape $ (Value): Array of {@link OrderActivity}. Shape $[] (Value): {@link OrderActivity}.
     * Read-only order history row for merchant timeline rendering and debugging. The owning
     * resource remains authoritative for state and money movement.
     */
    "data": Array<OrderActivity>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OrderAuthorizationAmounts}. The amounts authorized and still capturable
 * on an order's payments, with the authorization expiry.
 */
export type OrderAuthorizationAmounts = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "authorized_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "capturable_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
};
/**
 * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge calculated
 * by Flint or supplied by you, including the charge's tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTax = {
    /**
     * Shape $ (Value): string. Tax category of the charge, which decides its automatic tax:
     * shipping and delivery are taxed at the general rate, and a taxable charge in another
     * category fails with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery
     * from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling
     * from handling_fee; other types take none. The default follows type and is not returned.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderCalculatedChargeTaxInput}. Tax settings for an order charge
 * calculated by Flint or supplied by you, including the charge's tax category and whether it is
 * taxable.
 */
export type OrderCalculatedChargeTaxInput = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequestInput}. Tax you calculated yourself for a line
     * or charge: whether prices include tax, and the tax components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Shape $ (Value): string. Tax category of the charge, which decides its automatic tax:
     * shipping and delivery are taxed at the general rate, and a taxable charge in another
     * category fails with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery
     * from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling
     * from handling_fee; other types take none. The default follows type and is not returned.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge";
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings for an order line item
 * calculated by Flint or supplied by you, including the line item tax category and whether it is
 * taxable.
 */
export type OrderCalculatedLineItemTax = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequest}. Tax you calculated yourself for a line or
     * charge: whether prices include tax, and the tax components.
     */
    "calculation"?: TaxCalculationRequest;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderCalculatedLineItemTaxInput}. Tax settings for an order line item
 * calculated by Flint or supplied by you, including the line item tax category and whether it is
 * taxable.
 */
export type OrderCalculatedLineItemTaxInput = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequestInput}. Tax you calculated yourself for a line
     * or charge: whether prices include tax, and the tax components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/** Shape $ (Value): {@link OrderCharge}. An additional charge applied to an order. */
export type OrderCharge = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_charge_id": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link OrderChargeRequest}. A charge you add to an order, such as a delivery or
 * service fee, set as a fixed amount or a percentage with its tax settings.
 */
export type OrderChargeRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
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
})
    & ((({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}))
    | (({
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link OrderChargeRequestInput}. A charge you add to an order, such as a
 * delivery or service fee, set as a fixed amount or a percentage with its tax settings.
 */
export type OrderChargeRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTaxInput}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
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
        | "other";
})
    & ((({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & (({
    "percent"?: never;
})))
    | (({
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
})
    & (({
    "amount_money"?: never;
}))));
/**
 * Shape $ (Value): {@link OrderChargeTaxAssignment}. An externally calculated tax you assign to
 * one order charge.
 */
export type OrderChargeTaxAssignment = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequest}. Tax you calculated yourself for a line or
     * charge: whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "order_charge_id": string;
};
/**
 * Shape $ (Value): {@link OrderChargeTaxAssignmentInput}. An externally calculated tax you assign
 * to one order charge.
 */
export type OrderChargeTaxAssignmentInput = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequestInput}. Tax you calculated yourself for a line
     * or charge: whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_charge_id": string;
};
/**
 * Shape $ (Value): {@link OrderDeliveryDestination}. Where an order is delivered: the address, the
 * recipient, and where the destination came from.
 */
export type OrderDeliveryDestination = {
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationAddress}. The delivery address on an order.
     */
    "address": OrderDeliveryDestinationAddress;
    /**
     * Shape $ (Value): string. Delivery selection that controls this destination, when checkout
     * collected it.
     */
    "delivery_selection_id"?: string;
    /** Shape $ (Value): string. Time payment froze this destination. Format: date-time. */
    "frozen_at"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRecipient}. The name and phone number of the
     * person receiving an order delivery.
     */
    "recipient"?: OrderDeliveryDestinationRecipient;
    /** Shape $ (Value): string.  Value enum: "delivery_selection", "api", "dashboard". */
    "source": "delivery_selection" | "api" | "dashboard" | (string & {});
};
/** Shape $ (Value): {@link OrderDeliveryDestinationAddress}. The delivery address on an order. */
export type OrderDeliveryDestinationAddress = {
    /** Shape $ (Value): string. maxLength: 100. */
    "city"?: string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string. maxLength: 255. */
    "line1"?: string;
    /** Shape $ (Value): string. maxLength: 255. */
    "line2"?: string;
    /** Shape $ (Value): string. maxLength: 20. */
    "postal_code"?: string;
    /** Shape $ (Value): string. maxLength: 100. */
    "state"?: string;
};
/**
 * Shape $ (Value): {@link OrderDeliveryDestinationAddressRequest}. The delivery address you supply
 * on an order. Postal code and state are required for US addresses.
 */
export type OrderDeliveryDestinationAddressRequest = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. pattern: \S. */
    "city": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. pattern: \S. */
    "line1": string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "line2"?: string | null;
    /**
     * Shape $ (Value): string. Required for US addresses. Postal code when used by the destination
     * country's postal format. maxLength: 20.
     */
    "postal_code"?: string;
    /**
     * Shape $ (Value): string. Required for US addresses. State, province, or region when used by
     * the destination country's postal format. maxLength: 100.
     */
    "state"?: string;
});
/**
 * Shape $ (Value): {@link OrderDeliveryDestinationAddressRequestInput}. The delivery address you
 * supply on an order. Postal code and state are required for US addresses.
 */
export type OrderDeliveryDestinationAddressRequestInput = OrderDeliveryDestinationAddressRequest;
/**
 * Shape $ (Value): {@link OrderDeliveryDestinationRecipient}. The name and phone number of the
 * person receiving an order delivery.
 */
export type OrderDeliveryDestinationRecipient = {
    /** Shape $ (Value): string. maxLength: 255. */
    "name"?: string;
    /** Shape $ (Value): string. maxLength: 30. */
    "phone"?: string;
};
/**
 * Shape $ (Value): {@link OrderDeliveryDestinationRecipientRequest}. The recipient name and phone
 * you supply for an order delivery. Send null to clear a field. minProperties: 1.
 */
export type OrderDeliveryDestinationRecipientRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 30. */
    "phone"?: string | null;
};
/**
 * Shape $ (Value): {@link OrderDeliveryDestinationRecipientRequestInput}. The recipient name and
 * phone you supply for an order delivery. Send null to clear a field. minProperties: 1.
 */
export type OrderDeliveryDestinationRecipientRequestInput = OrderDeliveryDestinationRecipientRequest;
/**
 * Shape $ (Value): {@link OrderDeliveryDestinationRequest}. The delivery destination you set when
 * creating or updating an order, with an address and an optional recipient.
 */
export type OrderDeliveryDestinationRequest = {
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationAddressRequest}. The delivery address you
     * supply on an order. Postal code and state are required for US addresses.
     */
    "address": OrderDeliveryDestinationAddressRequest;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRecipientRequest}. The recipient name and
     * phone you supply for an order delivery. Send null to clear a field. minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequest;
};
/**
 * Shape $ (Value): {@link OrderDeliveryDestinationRequestInput}. The delivery destination you set
 * when creating or updating an order, with an address and an optional recipient.
 */
export type OrderDeliveryDestinationRequestInput = {
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationAddressRequestInput}. The delivery address
     * you supply on an order. Postal code and state are required for US addresses.
     */
    "address": OrderDeliveryDestinationAddressRequestInput;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRecipientRequestInput}. The recipient name
     * and phone you supply for an order delivery. Send null to clear a field. minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequestInput;
};
/**
 * Shape $ (Value): {@link OrderDiscount}. A discount applied to an order, with its amount, status,
 * and the line items and charges it covers. It comes from a manual discount or a promotion.
 */
export type OrderDiscount = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Shape $ (Value): string. */
    "customer_facing_name"?: string;
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "order_charge_ids": Array<string>;
    /**
     * Shape $ (Value): string. Order discount ID. It starts with ad_. Pass it to POST
     * /v1/orders/{order_id}/discounts/remove to remove the discount.
     */
    "order_discount_id": string;
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "order_line_item_ids": Array<string>;
    /**
     * Shape $ (Value): string. Promotion code used to create this discount. Present only when
     * source is promotion and a code was used.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Promotion that created this discount. Present only when source is
     * promotion.
     */
    "promotion_id"?: string;
    /** Shape $ (Value): string.  Value enum: "manual", "promotion", "plan_change_credit". */
    "source"?: "manual" | "promotion" | "plan_change_credit" | (string & {});
    /** Shape $ (Value): string.  Value enum: "pending", "redeemed", "canceled". */
    "status": "pending" | "redeemed" | "canceled" | (string & {});
};
/**
 * Shape $ (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
 * item that each unit of a draft order line item uses, supplied when creating the line item.
 */
export type OrderDraftLineItemInventoryDemandRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999.
     */
    "quantity_per_line_item_unit": `${bigint}`;
};
/**
 * Shape $ (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
 * inventory item that each unit of a draft order line item uses, supplied when creating the line
 * item.
 */
export type OrderDraftLineItemInventoryDemandRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999.
     */
    "quantity_per_line_item_unit": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link OrderDraftLineItemTaxCalculationRequestInput}. A tax calculation you
 * supply for a draft order line item, made of tax components and a price mode.
 */
export type OrderDraftLineItemTaxCalculationRequestInput = {
    /**
     * Shape $ (Value): Array of {@link OrderDraftTaxComponentRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link OrderDraftTaxComponentRequestInput}. One tax component of a draft line item
     * calculation, with its jurisdiction, tax type, and percentage or flat amount.
     */
    "components": Array<OrderDraftTaxComponentRequestInput>;
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Shape $ (Value): {@link OrderDraftLineItemTaxRequestInput}. Tax settings you supply for a draft
 * order line item: its tax category, whether it is taxable, and an optional tax calculation.
 */
export type OrderDraftLineItemTaxRequestInput = {
    /**
     * Shape $ (Value): {@link OrderDraftLineItemTaxCalculationRequestInput}. A tax calculation you
     * supply for a draft order line item, made of tax components and a price mode.
     */
    "calculation"?: OrderDraftLineItemTaxCalculationRequestInput;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderDraftTaxComponentRequestInput}. One tax component of a draft line
 * item calculation, with its jurisdiction, tax type, and percentage or flat amount.
 */
export type OrderDraftTaxComponentRequestInput = ({
    /** Shape $ (Value): string. Default: "percentage". Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link OrderDraftTaxJurisdictionRequestInput}. The taxing jurisdiction of a
     * draft tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": OrderDraftTaxJurisdictionRequestInput;
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/**
 * Shape $ (Value): {@link OrderDraftTaxJurisdictionRequestInput}. The taxing jurisdiction of a
 * draft tax component, identified by code, level, name, state, and country.
 */
export type OrderDraftTaxJurisdictionRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "code": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string.  Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "state": string;
};
/**
 * Shape $ (Value): {@link OrderGiftCardAllocation}. The amount of an order that a gift card
 * covers.
 */
export type OrderGiftCardAllocation = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
};
/**
 * Shape $ (Value): {@link OrderGiftCardAllocationAcceptance}. Accept the exact gift_card_estimate
 * returned on the current order, including all selected cards and both totals. Requires an
 * Idempotency-Key. Gift card payments collect the full amount due and may use one processor
 * payment intent for the processor_money remainder.
 */
export type OrderGiftCardAllocationAcceptance = {
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape $.currency
     * (Required): string. Value enum: "USD".
     */
    "gift_card_money": {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string.  Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 20. Shape $[] (Value): object.
     * Shape $[].amount_money (Required): object. Shape $[].amount_money.amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Shape $[].amount_money.currency (Required): string. Value enum: "USD". Shape
     * $[].gift_card_id (Required): string. minLength: 1. maxLength: 64.
     */
    "gift_cards": Array<{
        /**
         * Shape $ (Value): object. Shape $.amount (Required): integer string. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape
         * $.currency (Required): string. Value enum: "USD".
         */
        "amount_money": {
            /**
             * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
             * floating-point number. Format: int64. minimum: 0.
             */
            "amount": `${bigint}`;
            /** Shape $ (Value): string.  Value enum: "USD". */
            "currency": "USD" | (string & {});
        };
        /** Shape $ (Value): string. minLength: 1. maxLength: 64. */
        "gift_card_id": string;
    }>;
    /**
     * Shape $ (Value): integer string. Order version used to calculate this gift card allocation.
     * Read the order again if its version changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "order_version": `${bigint}`;
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape $.currency
     * (Required): string. Value enum: "USD".
     */
    "processor_money": {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string.  Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * Shape $ (Value): {@link OrderGiftCardAllocationAcceptanceInput}. Accept the exact
 * gift_card_estimate returned on the current order, including all selected cards and both totals.
 * Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one
 * processor payment intent for the processor_money remainder.
 */
export type OrderGiftCardAllocationAcceptanceInput = {
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape $.currency
     * (Required): string. Value enum: "USD".
     */
    "gift_card_money": {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string.  Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 20. Shape $[] (Value): object.
     * Shape $[].amount_money (Required): object. Shape $[].amount_money.amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Shape $[].amount_money.currency (Required): string. Value enum: "USD". Shape
     * $[].gift_card_id (Required): string. minLength: 1. maxLength: 64.
     */
    "gift_cards": Array<{
        /**
         * Shape $ (Value): object. Shape $.amount (Required): integer string. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape
         * $.currency (Required): string. Value enum: "USD".
         */
        "amount_money": {
            /**
             * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
             * floating-point number. Format: int64. minimum: 0.
             */
            "amount": `${bigint}` | bigint;
            /** Shape $ (Value): string.  Value enum: "USD". */
            "currency": "USD";
        };
        /** Shape $ (Value): string. minLength: 1. maxLength: 64. */
        "gift_card_id": string;
    }>;
    /**
     * Shape $ (Value): integer string. Order version used to calculate this gift card allocation.
     * Read the order again if its version changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "order_version": `${bigint}` | bigint;
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape $.currency
     * (Required): string. Value enum: "USD".
     */
    "processor_money": {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string.  Value enum: "USD". */
        "currency": "USD";
    };
};
/**
 * Shape $ (Value): {@link OrderGiftCardEstimate}. An estimate of how an order total splits between
 * gift cards and the payment processor, and whether gift cards can pay it.
 */
export type OrderGiftCardEstimate = {
    /** Shape $ (Value): boolean. */
    "can_pay": boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "gift_card_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardAllocation}. Shape $[] (Value): {@link
     * OrderGiftCardAllocation}. The amount of an order that a gift card covers.
     */
    "gift_cards": Array<OrderGiftCardAllocation>;
    /** Shape $ (Value): boolean. */
    "is_reserved": boolean;
    /**
     * Shape $ (Value): integer string. Order version used to calculate this gift card allocation.
     * Read the order again if its version changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "order_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "processor_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with its
 * available balance and the last four characters of its code.
 */
export type OrderGiftCardSelection = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. Last four characters of the card's current code. */
    "last4": string;
    /** Shape $ (Value): boolean. */
    "requires_authorization": boolean;
};
/**
 * Shape $ (Value): {@link OrderGiftCardSettlement}. A gift card redemption applied to an order
 * payment, with the amount, tip, and gift card.
 */
export type OrderGiftCardSettlement = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_redemption_id": string;
    /** Shape $ (Value): string. Last four characters of the card's current code. */
    "last4": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link OrderInventoryRoutingSourceRequestInput}. Where inventory for an order
 * is allocated from: a fixed location, an allocation policy, or a specific policy revision.
 */
export type OrderInventoryRoutingSourceRequestInput = DeliveryPreviewRoutingSourceInput;
/** Shape $ (Value): {@link OrderLineItem}. An item purchased in an order. */
export type OrderLineItem = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Shape $[] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemFulfillmentQuantities}. Current quantities for
     * each required fulfillment obligation: one entry for a single item or one per bundle
     * component that requires fulfillment. Quantities use line units for single items and
     * component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when
     * the line needs no fulfillment or the order's obligations cannot be computed, including older
     * lines without recorded requirements. Shape $[] (Value): {@link
     * OrderLineItemFulfillmentQuantities}. Counts of how much of an order line item is assigned,
     * fulfilled, failed, canceled, or still unassigned for fulfillment.
     */
    "fulfillment_quantities"?: Array<OrderLineItemFulfillmentQuantities>;
    /**
     * Shape $ (Value): {@link OrderLineItemFulfillmentRequirements}. Fulfillment requirements
     * fixed when the line item was created. direct describes a single item; components describes
     * each bundle component. Omitted for older line items without recorded requirements.
     * Fulfillment requirements for an order line item, given for a single item or for each
     * component of a bundle.
     */
    "fulfillment_requirements"?: OrderLineItemFulfillmentRequirements;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseSnapshot}. The gift card purchase details saved on
     * an order line item: configuration, face value, price paid, and recipient.
     */
    "gift_card_purchase"?: GiftCardPurchaseSnapshot;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): {@link LineItemInventorySnapshot} or null. Shape $.anyOf[1] (Value): {@link
     * LineItemInventorySnapshot}. Whether an order line item tracks inventory, and the inventory
     * item quantities each unit demands. Shape $.anyOf[2] (Value): null.
     */
    "inventory_snapshot": ((LineItemInventorySnapshot) | (null));
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): Array of {@link PurchasedGiftCard}. Masked card identities for fully funded
     * units of this purchase line. Partial consideration does not issue a card. Shape $[] (Value):
     * {@link PurchasedGiftCard}. A gift card issued for one unit of a purchased order line item,
     * with its last four code characters and any card it replaced.
     */
    "purchased_gift_cards": Array<PurchasedGiftCard>;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "refunded_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link SubscribedLine}. Recurring offer and cadence frozen for this line at
     * signup. The subscription offer and billing interval an order line was bought under, with the
     * recurring amount.
     */
    "subscription"?: SubscribedLine;
    /** Shape $ (Value): string. Subscription created for this line after the order is paid. */
    "subscription_id"?: string;
    /**
     * Shape $ (Value): {@link OrderLineSubscriptionOfferSummary}. Applicable active offer for a
     * one-time line, or the offer terms frozen for a subscribed line. A subscription offer
     * attached to an order line item, with its name, discount, and billing interval options.
     */
    "subscription_offer"?: OrderLineSubscriptionOfferSummary;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings for an order line item
     * calculated by Flint or supplied by you, including the line item tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Dimensions}. Dimensions of one unit fixed when the line was created.
     * Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Weight of one unit fixed when the line was created. Omitted
     * when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds,
     * used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link OrderLineItemFulfillmentComponent}. Fulfillment requirements for one
 * component of a bundle line item, with the component quantity per unit.
 */
export type OrderLineItemFulfillmentComponent = {
    /** Shape $ (Value): string. ID of the bundle component these requirements apply to. */
    "bundle_component_id": string;
    /**
     * Shape $ (Value): {@link OrderLineItemFulfillmentProfile} or null. Fulfillment requirements
     * for this component. Shape $.anyOf[1] (Value): {@link OrderLineItemFulfillmentProfile}.
     * Whether an order line item requires fulfillment, and the fulfillment types it allows. Shape
     * $.anyOf[2] (Value): null.
     */
    "profile": ((OrderLineItemFulfillmentProfile) | (null));
    /**
     * Shape $ (Value): integer string. Number of this component per unit of the order line item;
     * fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "quantity_per_line_item_unit": `${bigint}`;
};
/**
 * Shape $ (Value): {@link OrderLineItemFulfillmentProfile}. Whether an order line item requires
 * fulfillment, and the fulfillment types it allows.
 */
export type OrderLineItemFulfillmentProfile = {
    /**
     * Shape $ (Value): Array of string. Fulfillment types allowed for this item. Empty when
     * fulfillment is not required. [] enum: "shipment", "pickup", "local_delivery", "digital",
     * "service". Shape $[] (Value): string. Value enum: "shipment", "pickup", "local_delivery",
     * "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether this item requires fulfillment. Value enum: "none",
     * "required".
     */
    "requirement": "none" | "required" | (string & {});
};
/**
 * Shape $ (Value): {@link OrderLineItemFulfillmentQuantities}. Counts of how much of an order line
 * item is assigned, fulfilled, failed, canceled, or still unassigned for fulfillment.
 */
export type OrderLineItemFulfillmentQuantities = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "assigned_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. ID of the bundle component these quantities describe. Omitted for a
     * single item.
     */
    "bundle_component_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Quantity owned by canceled or no_show fulfillments. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "canceled_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Quantity owned by failed fulfillments that kept their quantity. Failed
     * fulfillments that released quantity own nothing; their quantity becomes unassigned again.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "failed_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Quantity owned by completed fulfillments. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "fulfilled_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Total quantity requiring fulfillment, in line units for a single item or
     * component units for a bundle component. Equals the sum of the other five quantity fields.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Required quantity owned by no fulfillment, in any resolution mode. Includes
     * quantity released by a failed fulfillment. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "unassigned_quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link OrderLineItemFulfillmentRequirements}. Fulfillment requirements for an
 * order line item, given for a single item or for each component of a bundle.
 */
export type OrderLineItemFulfillmentRequirements = {
    /**
     * Shape $ (Value): Array of {@link OrderLineItemFulfillmentComponent}. Fulfillment
     * requirements for each bundle component. Present for bundle lines. Shape $[] (Value): {@link
     * OrderLineItemFulfillmentComponent}. Fulfillment requirements for one component of a bundle
     * line item, with the component quantity per unit.
     */
    "components"?: Array<OrderLineItemFulfillmentComponent>;
    /**
     * Shape $ (Value): {@link OrderLineItemFulfillmentProfile}. Fulfillment requirements for a
     * single item. Present for non-bundle lines. Whether an order line item requires fulfillment,
     * and the fulfillment types it allows.
     */
    "direct"?: OrderLineItemFulfillmentProfile;
};
/**
 * Shape $ (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
 * its quantity, price change, total, and display flags.
 */
export type OrderLineItemModifier = {
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Name of the modifier group recorded when this selection was added
     * to the order line item.
     */
    "modifier_group_name": string;
    /**
     * Shape $ (Value): string. Identifier of the selected catalog modifier. If its group is owned
     * by a modifier set (source: inline), read the group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it.
     */
    "modifier_id"?: string;
    /** Shape $ (Value): string. Name of the selected modifier recorded on the order line item. */
    "name": string;
    /**
     * Shape $ (Value): string. Stable identifier of the selected modifier on this order line item.
     */
    "order_line_item_modifier_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): boolean. Whether this selection appears in fulfillment details, recorded
     * when selected.
     */
    "show_on_fulfillment": boolean;
    /**
     * Shape $ (Value): boolean. Whether this selection appears on buyer receipts, recorded when
     * selected.
     */
    "show_on_receipt": boolean;
    /**
     * Shape $ (Value): string. Whether the selection is a catalog list modifier or buyer-entered
     * text. Value enum: "catalog_modifier", "text".
     */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierRequest}. Selected text group and buyer-entered value.
     * Read an inline text group through its owning modifier set. Text a buyer entered for a text
     * modifier group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Shape $ (Value): string. Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total price added by this selection. Multiplies
     * unit_price_delta_money by the modifier quantity and, for per_item pricing, by the line item
     * quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount added to the item's unit price for each unit of
     * this selection, recorded when selected. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
 * item: a catalog modifier by ID or a text modifier, with a quantity.
 */
export type OrderLineItemModifierRequest = ({
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): string. Existing selection ID to retain during replacement. minLength: 1.
     * pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link TextModifierRequest}. Text a buyer entered for a text modifier group
     * on an order line item.
     */
    "text"?: TextModifierRequest;
})
    & ((({
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id": string;
}))
    | (({
    /**
     * Shape $ (Value): {@link TextModifierRequest}. Text a buyer entered for a text modifier group
     * on an order line item.
     */
    "text": TextModifierRequest;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
 * line item: a catalog modifier by ID or a text modifier, with a quantity.
 */
export type OrderLineItemModifierRequestInput = ({
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): string. Existing selection ID to retain during replacement. minLength: 1.
     * pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_line_item_modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link TextModifierRequestInput}. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text"?: TextModifierRequestInput;
})
    & ((({
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id": string;
})
    & ({
    "text"?: never;
}))
    | (({
    /**
     * Shape $ (Value): {@link TextModifierRequestInput}. Text a buyer entered for a text modifier
     * group on an order line item.
     */
    "text": TextModifierRequestInput;
})
    & (({
    "modifier_id"?: never;
}) & ({
    "quantity"?: never;
}))));
/**
 * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is taxable.
 */
export type OrderLineItemTax = {
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderLineItemTaxAssignment}. An externally calculated tax you assign to
 * one order line item.
 */
export type OrderLineItemTaxAssignment = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequest}. Tax you calculated yourself for a line or
     * charge: whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
};
/**
 * Shape $ (Value): {@link OrderLineItemTaxAssignmentInput}. An externally calculated tax you
 * assign to one order line item.
 */
export type OrderLineItemTaxAssignmentInput = {
    /**
     * Shape $ (Value): {@link TaxCalculationRequestInput}. Tax you calculated yourself for a line
     * or charge: whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
};
/**
 * Shape $ (Value): {@link OrderLineItemTaxInput}. A line item's tax category and whether it is
 * taxable.
 */
export type OrderLineItemTaxInput = {
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
};
/**
 * Shape $ (Value): {@link OrderLineSubscriptionOfferDiscount}. The discount a subscription offer
 * gives, as a fixed amount or a percentage.
 */
export type OrderLineSubscriptionOfferDiscount = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValue;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent_off"?: number;
};
/**
 * Shape $ (Value): {@link OrderLineSubscriptionOfferSummary}. A subscription offer attached to an
 * order line item, with its name, discount, and billing interval options.
 */
export type OrderLineSubscriptionOfferSummary = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. Shape $[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): {@link OrderLineSubscriptionOfferDiscount}. The discount a subscription
     * offer gives, as a fixed amount or a percentage.
     */
    "discount"?: OrderLineSubscriptionOfferDiscount;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "subscription_offer_id": string;
};
/** Shape $ (Value): {@link OrderListResponse}. A page of `Order` objects. */
export type OrderListResponse = {
    /**
     * Shape $ (Value): Array of {@link Order}. Shape $[] (Value): {@link Order}. A customer's
     * purchase and its payment and fulfillment progress.
     */
    "data": Array<Order>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
export type OrderPaymentAttempt = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "expected_outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link PaymentAttemptGiftCardRedemption}. Shape $[] (Value):
     * {@link PaymentAttemptGiftCardRedemption}. A gift card redemption made as part of an order
     * payment attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /**
     * Shape $ (Value): boolean. Whether the attempt can continue through PayOrder with action:
     * resume and this order_payment_attempt_id after any pending client action is complete. If
     * false, check status before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. The concluded failure of a payment leg that
     * failed this attempt. Absent for non-payment failures. A summary of why a payment attempt
     * failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Shape $ (Value): string.  Value enum: "payment", "setup", "settlement". */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    /** Shape $ (Value): string. */
    "order_payment_attempt_id": string;
    /**
     * Shape $ (Value): Array of {@link PaymentAttemptPaymentIntent}. Shape $[] (Value): {@link
     * PaymentAttemptPaymentIntent}. A payment intent used as one leg of an order payment attempt,
     * with its amount, status, tip, and latest error.
     */
    "payment_intents": Array<PaymentAttemptPaymentIntent>;
    /**
     * Shape $ (Value): {@link OrderPaymentAttemptPaymentMethodSave}. Set when the pay request sent
     * save_payment_method: true and the attempt paid without saving the payment method. A card
     * typed into checkout and saved has no entry here; read payment_method_save on the checkout
     * session for a card saved with a mobile phone number. What became of the buyer's
     * save_payment_method. The payment does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     * Shape $ (Value): Array of {@link PendingPaymentAction}. Shape $[] (Value): {@link
     * PendingPaymentAction}. Client-side action required before continuing a payment. Resume an
     * order through PayOrder with order_payment_attempt_id, or continue a standalone PaymentIntent
     * through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "processing", "requires_action", "requires_capture",
     * "partially_succeeded", "requires_retry", "finalizing", "succeeded", "failed", "expired",
     * "canceled".
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
     * Shape $ (Value): string. Non-payment reason an attempt failed, was canceled, or expired.
     * Failed attempts with an unmapped non-payment reason report other. Canceled and expired
     * attempts include a reason only when it adds information beyond status. New values may be
     * added. Value enum: "authorization_canceled", "coupon_reservation_failed",
     * "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable",
     * "order_changed_before_payment", "order_payment_customer_mismatch", "other",
     * "payment_authorization_canceled", "payment_authorization_expired",
     * "payment_confirmation_rejected", "payment_link_capacity_claim_failed",
     * "payment_link_capacity_validation_failed", "payment_method_activation_pending",
     * "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable",
     * "payment_source_binding_failed", "payment_source_conflict", "payment_source_not_updatable",
     * "payment_source_ownership_mismatch", "resource_guarantee_failed",
     * "setup_action_unavailable", "setup_hold_acquisition_failed", "setup_result_incomplete",
     * "tip_allocation_sync_failed", "zero_balance_hold_acquisition_failed".
     */
    "status_reason"?: "authorization_canceled"
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
/**
 * Shape $ (Value): {@link OrderPaymentAttemptListResponse}. A page of `OrderPaymentAttempt`
 * objects.
 */
export type OrderPaymentAttemptListResponse = {
    /**
     * Shape $ (Value): Array of {@link OrderPaymentAttempt}. Shape $[] (Value): {@link
     * OrderPaymentAttempt}. An attempt to pay an order.
     */
    "data": Array<OrderPaymentAttempt>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OrderPaymentAttemptPaymentMethodSave}. What became of the buyer's
 * save_payment_method. The payment does not depend on it.
 */
export type OrderPaymentAttemptPaymentMethodSave = {
    /**
     * Shape $ (Value): string. payment_method_not_saveable: the buyer paid with Apple Pay, Google
     * Pay, a bank account, or Affirm, and checkout saves only a card typed into it;
     * save_payment_method_types on the checkout session lists what it saves. other: a reason this
     * API version does not name. The values can grow. Value enum: "payment_method_not_saveable",
     * "other".
     */
    "reason": "payment_method_not_saveable" | "other" | (string & {});
    /**
     * Shape $ (Value): string. not_saved: the payment went ahead without saving the payment
     * method. The values can grow. Value enum: "not_saved".
     */
    "status": "not_saved" | (string & {});
};
/**
 * Shape $ (Value): {@link OrderPaymentAttemptResponse}. A response containing
 * `OrderPaymentAttempt` data.
 */
export type OrderPaymentAttemptResponse = {
    /** Shape $ (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
    "data": OrderPaymentAttempt;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelection}. Identifies a payment intent to confirm for
 * an order and the credential to use: a token, a saved payment method, a Stripe confirmation
 * token, or the attached source.
 */
export type OrderPaymentIntentSelection = (({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
})
    | ({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
})
    | ({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
})
    | ({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionInput}. Identifies a payment intent to
 * confirm for an order and the credential to use: a token, a saved payment method, a Stripe
 * confirmation token, or the attached source.
 */
export type OrderPaymentIntentSelectionInput = (({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
})
    | ({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
})
    | ({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
})
    | ({
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
}));
/**
 * Shape $ (Value): {@link OrderPaymentLifecycleResponse}. A response containing
 * `OrderPaymentLifecycleResult` data.
 */
export type OrderPaymentLifecycleResponse = {
    /**
     * Shape $ (Value): {@link OrderPaymentLifecycleResult}. The result of an order payment action:
     * the updated order, the payment intent, and the payment attempt when one exists.
     */
    "data": OrderPaymentLifecycleResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link OrderPaymentLifecycleResult}. The result of an order payment action: the
 * updated order, the payment intent, and the payment attempt when one exists.
 */
export type OrderPaymentLifecycleResult = {
    /**
     * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": Order;
    /** Shape $ (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
    "payment_attempt"?: OrderPaymentAttempt;
    /**
     * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg of
     * an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "payment_intent": PaymentIntent;
};
/**
 * Shape $ (Value): {@link OrderPaymentSourceCardSelection}. Card options for the payment source
 * selected on an order payment intent, including which digital wallets to offer.
 */
export type OrderPaymentSourceCardSelection = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "digital_wallets"?: Array<string>;
};
