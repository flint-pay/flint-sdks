import type { OnboardingProfile, MoneyValue, MoneyValueInput } from './types-35.js';
import type { ReadinessAction, PurchasedGiftCard } from './types-46.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { Merchant, MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-34.js';
import type { User } from './types-60.js';
import type { BuyerAction, BundleComponent } from './types-1.js';
import type { CheckoutBuyerContact, CategoryReference } from './types-4.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary,
    Fulfillment
} from './types-21.js';
import type { InventoryRoutingSource } from './types-27.js';
import type {
    OrderPaymentAttempt,
    OrderReturnCreditSettlement,
    OrderTax,
    OrderLineItemModifier,
    OrderLineSubscriptionOfferSummary
} from './types-37.js';
import type { PaymentCollection, PartnerWebhookEnvelope } from './types-40.js';
import type { PricingAmounts } from './types-43.js';
import type { SettlementAmounts, SelectedProductOption, SubscribedLine } from './types-53.js';
import type {
    TicketedEvent,
    Tip,
    TaxCalculationRequestInput,
    TaxCalculationRequest,
    TaxCalculationRequestModelInput
} from './types-57.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { DeliveryPreviewRoutingSourceInput } from './types-16.js';
import type { Dimensions } from './types-20.js';
import type { GiftCardPurchaseSnapshot } from './types-24.js';
import type { Image } from './types-25.js';
import type { LineItemInventorySnapshot } from './types-32.js';
import type { Weight } from './types-61.js';
/**
 * The result of starting onboarding: whether email verification began, plus the verification token
 * and its expiry.
 */
export type OnboardingStartResult = {
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    "verification_started": boolean;
    "verification_token": string;
};
/**
 * A merchant's onboarding status, profile, next step, requested capabilities, and whether an API
 * key can be issued.
 */
export type OnboardingState = {
    "can_issue_api_key": boolean;
    /**
     * Immutable business country for the selected stable provider-account target. Omitted until
     * the target has selected an effective country. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    "default_sandbox_id"?: string;
    "merchant_id": string;
    /**
     * A step that moves a merchant capability or readiness axis forward, with the party that must
     * do it (`owner`) and any required fields.
     */
    "next_step"?: ReadinessAction;
    /** Contact and website details recorded for a merchant during onboarding. */
    "profile": OnboardingProfile;
    /**
     * Canonical Flint capability intent persisted on the selected stable provider-account target.
     * The initial merchant-account configuration always includes accept_card_payments and
     * receive_payouts and may also include accept_ach_debit_payments. minItems: 2. maxItems: 3.
     * uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts",
     * "accept_ach_debit_payments". [] (Value): string. Value enum: "accept_card_payments",
     * "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
    /**
     * Onboarding workflow status for activation and remediation, not a durable account-readiness
     * boolean. Value enum: "complete", "waiting_for_review", "needs_external_action",
     * "needs_input".
     */
    "status": "complete" | "waiting_for_review" | "needs_external_action" | "needs_input" | (string & {});
};
/** A response containing `OnboardingState` data. */
export type OnboardingStateResponse = {
    /**
     * A merchant's onboarding status, profile, next step, requested capabilities, and whether an
     * API key can be issued.
     */
    "data": OnboardingState;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type OnboardingVerifyEmailParams = (InputValue<OnboardingVerifyEmailRequestInput>);
/** The request body for: Verify onboarding email. */
export type OnboardingVerifyEmailRequest = {
    /** minLength: 1. */
    "merchant_id"?: string;
    /** minLength: 1. */
    "verification_code": string;
    /** minLength: 1. */
    "verification_token": string;
};
/** The request body for: Verify onboarding email. */
export type OnboardingVerifyEmailRequestInput = OnboardingVerifyEmailRequest;
/** A response containing `OnboardingVerifyEmailResult` data. */
export type OnboardingVerifyEmailResponse = {
    /**
     * The result of verifying an onboarding email: the merchant and user, an onboarding session
     * token, and the next step.
     */
    "data": OnboardingVerifyEmailResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The result of verifying an onboarding email: the merchant and user, an onboarding session token,
 * and the next step.
 */
export type OnboardingVerifyEmailResult = {
    /** Whether the merchant has no external API key and a default sandbox exists. */
    "can_issue_api_key": boolean;
    "default_sandbox_id"?: string;
    /** The business accepting payments. */
    "merchant": Merchant;
    "merchant_created": boolean;
    /**
     * Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to
     * get a new one. Format: date-time.
     */
    "onboarding_session_expires_at": string;
    "onboarding_session_token": string;
    /** A user with access to merchant accounts. */
    "user": User;
};
export type OpenapiGetSpecParams = {
    /**
     * Supported API version in YYYY-MM-DD format, for tools and direct links that can't send
     * Flint-Version. When both are valid, this selects the returned specification. An invalid
     * Flint-Version header still returns an error.
     */
    "version"?: InputValue<string>;
};
export type OpenapiGetSpecResponse = {
    [key: string]: unknown;
};
/** A customer's purchase and its payment and fulfillment progress. */
export type Order = {
    /** An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * The amounts authorized and still capturable on an order's payments, with the authorization
     * expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * What the buyer can do with the order, in this order: start_return, then resend_receipt. A
     * buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both
     * every time; a merchant read gets an empty list. A list of orders leaves start_return out,
     * since only a read of one order checks return eligibility. start_return is due when the last
     * open return window ends. Example: []. [] (Value): {@link BuyerAction}. One thing a buyer can
     * do with an order, subscription, invoice or return they read through /v1/me. Show the actions
     * with is_required as what needs the buyer's attention, and the first available action as the
     * primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    "buyer_note"?: string;
    /**  [] (Value): {@link OrderCharge}. An additional charge applied to an order. */
    "charges": Array<OrderCharge>;
    /**  [] (Value): string. */
    "checkout_session_ids": Array<string>;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
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
     * The caller note supplied when closing the order. System closures leave it absent. It is not
     * shown to the buyer.
     */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id"?: string;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     *  [] (Value): {@link OrderDiscount}. A discount applied to an order, with its amount, status,
     * and the line items and charges it covers. It comes from a manual discount or a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
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
    /**  [] (Value): {@link Fulfillment}. Work required to deliver an order's items. */
    "fulfillments": Array<Fulfillment>;
    /**
     * An estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     *  [] (Value): {@link OrderGiftCardSettlement}. A gift card redemption applied to an order
     * payment, with the amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    "gift_card_tender_enabled": boolean;
    /**
     *  [] (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with its
     * available balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination. Null when no selection governs the order. While set, change the
     * destination through the delivery selection.
     */
    "governing_delivery_selection_id": string | null;
    "internal_note"?: string;
    /**
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     */
    "inventory_exception_reason"?: "inventory_deduction_failed"
        | "inventory_handoff_failed"
        | "auto_refund_required"
        | "auto_refund_failed"
        | "policy_resolution_failed"
        | "other"
        | (string & {});
    /**
     * The merchant note supplied when resolving the inventory exception. It is not shown to the
     * buyer.
     */
    "inventory_exception_resolution_message"?: string;
    /**
     * Whether an inventory problem after payment needs attention. Value enum:
     * "paid_inventory_failed", "resolved".
     */
    "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
    /** The reservation holding stock for this order, when one exists. */
    "inventory_reservation_id"?: string;
    /**
     * Where this order's tracked demand is routed. Required before an order containing tracked
     * variants can hold stock. Where an order, payment link, or reservation routes inventory from:
     * a fixed Location, an inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**  [] (Value): {@link OrderLineItem}. An item purchased in an order. */
    "line_items": Array<OrderLineItem>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "order_id": string;
    "order_number"?: string;
    /** Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". */
    "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | (string & {});
    /**
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**  [] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Payment link whose checkout created this order. Absent for orders that did not come from a
     * payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip,
     * and total.
     */
    "pricing_amounts": PricingAmounts;
    /**  [] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
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
     * return did not create.
     */
    "return_resolution_id"?: string;
    /**
     * How much of an order has been paid, refunded, credited, written off, and settled as tips,
     * and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A
     * subscription's summary fields, including status, billing period, and next billing time,
     * returned when the subscription is expanded. anyOf[2] (Value): null.
     */
    "subscription"?: ((ExpandedSubscriptionSummary) | (null));
    /**
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: number;
    /**
     * Time the subscriber changed delivery after this paid renewal was prepared. The order keeps
     * its committed destination until you correct it or refund and replace it. Format: date-time.
     */
    "subscription_delivery_changed_at"?: string;
    "subscription_id"?: string;
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    "subscription_plan_id"?: string;
    /**
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns.
     */
    "tax": OrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     *  [] (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
     * amounts, status, and how it was paid.
     */
    "tips": Array<Tip>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
};
/**
 * Read-only order history row for merchant timeline rendering and debugging. The owning resource
 * remains authoritative for state and money movement.
 */
export type OrderActivity = {
    /**
     * The action recorded on the order. Omitted when the activity type cannot be identified.
     * Clients must accept values added in future releases. Value enum: "created",
     * "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
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
     * Change to the order balance narrated by this row. Informational rows have amount 0. Do not
     * sum activity deltas to compute the order balance. Signed monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "balance_delta_money": MoneyValue;
    /** Related checkout session when activity_type points at checkout session lifecycle. */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Human-readable Flint description. Provider-specific raw statuses and failure values are not
     * exposed here.
     */
    "description": string;
    /**
     * Related fulfillment for a fulfillment_created, fulfillment_updated, or
     * fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment.
     */
    "fulfillment_id"?: string;
    /** Unique identifier for this activity, prefixed oact_. */
    "order_activity_id": string;
    /**
     * Related charge for a charge_added, charge_updated, charge_removed, or
     * charge_fulfillment_updated activity. Omitted when the row does not identify one charge.
     */
    "order_charge_id"?: string;
    /**
     * Related discount for a discount_applied or discount_removed activity. Omitted when the row
     * does not identify one discount.
     */
    "order_discount_id"?: string;
    /**
     * Related line item for a line_item_added, line_item_updated, or line_item_removed activity.
     * Omitted when the row does not identify one line item.
     */
    "order_line_item_id"?: string;
    /**
     * Related requested tip for a requested_tip_added, requested_tip_updated, or
     * requested_tip_removed activity. Omitted when the row does not identify one tip.
     */
    "order_tip_id"?: string;
    /** Related payment intent when activity_type points at a payment attempt or payment outcome. */
    "payment_intent_id"?: string;
    /**
     * Related refund when activity_type points at a refund outcome. Read the refund for the
     * authoritative outcome.
     */
    "refund_id"?: string;
    /**
     * Order balance after this activity in chronological time. This is context for reading the
     * log, not a reconciliation ledger. Signed monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "running_balance_money": MoneyValue;
};
/** A page of `OrderActivity` objects. */
export type OrderActivityListResponse = {
    /**
     *  [] (Value): {@link OrderActivity}. Read-only order history row for merchant timeline
     * rendering and debugging. The owning resource remains authoritative for state and money
     * movement.
     */
    "data": Array<OrderActivity>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The amounts authorized and still capturable on an order's payments, with the authorization
 * expiry.
 */
export type OrderAuthorizationAmounts = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "authorized_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "capturable_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
};
/**
 * Tax settings for an order charge calculated by Flint or supplied by you, including the charge's
 * tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTax = {
    /**
     * Tax category of the charge, which decides its automatic tax: shipping and delivery are taxed
     * at the general rate, and a taxable charge in another category fails with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery from delivery_fee,
     * shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee;
     * other types take none. The default follows type and is not returned. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    "taxable"?: boolean;
};
/**
 * Tax settings for an order charge calculated by Flint or supplied by you, including the charge's
 * tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTaxInput = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Tax category of the charge, which decides its automatic tax: shipping and delivery are taxed
     * at the general rate, and a taxable charge in another category fails with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery from delivery_fee,
     * shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee;
     * other types take none. The default follows type and is not returned. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge";
    "taxable"?: boolean;
};
/**
 * Tax settings for an order line item calculated by Flint or supplied by you, including the line
 * item tax category and whether it is taxable.
 */
export type OrderCalculatedLineItemTax = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequest;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
    "taxable"?: boolean;
};
/**
 * Tax settings for an order line item calculated by Flint or supplied by you, including the line
 * item tax category and whether it is taxable.
 */
export type OrderCalculatedLineItemTaxInput = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
    "taxable"?: boolean;
};
/** An additional charge applied to an order. */
export type OrderCharge = {
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
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "description"?: string;
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    "order_charge_id": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Charge amount already refunded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
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
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
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
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** The `amount` variant of `OrderChargeInput`. */
export type OrderChargeInputAmount = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
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
    & (({
    /** Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/** The `amount` variant of `OrderChargeInput`. */
export type OrderChargeInputAmountInput = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
    "calculation_type": "amount";
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
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
    & (({
    /** Value enum: "amount". */
    "calculation_type": ("amount") & ("amount");
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & (({
    "percent"?: never;
})));
/** The `percent` variant of `OrderChargeInput`. */
export type OrderChargeInputPercent = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent": number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
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
    & (({
    /** Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** multipleOf: 0.0001. */
    "percent": number;
}));
/** The `percent` variant of `OrderChargeInput`. */
export type OrderChargeInputPercentInput = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": "percent";
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent": number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
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
    & (({
    /** Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /** multipleOf: 0.0001. */
    "percent": number;
})
    & (({
    "amount_money"?: never;
})));
/**
 * A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a
 * percentage with its tax settings.
 */
export type OrderChargeRequest = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent" | (string & {});
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
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
    & ((Exclude<OrderChargeInputAmount & object, readonly unknown[]>)
    | (Exclude<OrderChargeInputPercent & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a
 * percentage with its tax settings.
 */
export type OrderChargeRequestInput = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent";
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
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
    & ((Exclude<OrderChargeInputAmountInput & object, readonly unknown[]>)
    | (Exclude<OrderChargeInputPercentInput & object, readonly unknown[]>));
/** An externally calculated tax you assign to one order charge. */
export type OrderChargeTaxAssignment = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation": TaxCalculationRequest;
    /** minLength: 1. */
    "order_charge_id": string;
};
/** An externally calculated tax you assign to one order charge. */
export type OrderChargeTaxAssignmentInput = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation": TaxCalculationRequestModelInput;
    /** minLength: 1. */
    "order_charge_id": string;
};
export type OrderClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.closed";
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
    "event_type": "order.closed";
});
/**
 * The `order.closed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.closed". */
    "event_type"?: "order.closed";
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
 * The `order.closed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.closed". */
    "event_type"?: "order.closed";
});
export type OrderCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.created";
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
    "event_type": "order.created";
});
/**
 * The `order.created` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.created". */
    "event_type"?: "order.created";
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
 * The `order.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.created". */
    "event_type"?: "order.created";
});
/** Where an order is delivered: the address, the recipient, and where the destination came from. */
export type OrderDeliveryDestination = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address": Address;
    /** Delivery selection that controls this destination, when checkout collected it. */
    "delivery_selection_id"?: string;
    /** Time payment froze this destination. Format: date-time. */
    "frozen_at"?: string;
    /** The name and phone number of the person receiving an order delivery. */
    "recipient"?: OrderDeliveryDestinationRecipient;
    /** Value enum: "delivery_selection", "api", "dashboard". */
    "source": "delivery_selection" | "api" | "dashboard" | (string & {});
};
/** The name and phone number of the person receiving an order delivery. */
export type OrderDeliveryDestinationRecipient = {
    /** maxLength: 255. */
    "name"?: string;
    /** maxLength: 30. */
    "phone"?: string;
};
/**
 * The recipient name and phone you supply for an order delivery. Send null to clear a field.
 * minProperties: 1.
 */
export type OrderDeliveryDestinationRecipientRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 30. */
    "phone"?: string | null;
};
/**
 * The recipient name and phone you supply for an order delivery. Send null to clear a field.
 * minProperties: 1.
 */
export type OrderDeliveryDestinationRecipientRequestInput = OrderDeliveryDestinationRecipientRequest;
/**
 * The delivery destination you set when creating or updating an order, with an address and an
 * optional recipient.
 */
export type OrderDeliveryDestinationRequest = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequest;
    /**
     * The recipient name and phone you supply for an order delivery. Send null to clear a field.
     * minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequest;
};
/**
 * The delivery destination you set when creating or updating an order, with an address and an
 * optional recipient.
 */
export type OrderDeliveryDestinationRequestInput = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequestInput;
    /**
     * The recipient name and phone you supply for an order delivery. Send null to clear a field.
     * minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequestInput;
};
/**
 * A discount applied to an order, with its amount, status, and the line items and charges it
 * covers. It comes from a manual discount or a promotion.
 */
export type OrderDiscount = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_money": MoneyValue;
    "customer_facing_name"?: string;
    /** Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**  [] (Value): string. */
    "order_charge_ids": Array<string>;
    /**
     * Order discount ID. It starts with ad_. Pass it to POST
     * /v1/orders/{order_id}/discounts/remove to remove the discount.
     */
    "order_discount_id": string;
    "order_id": string;
    /**  [] (Value): string. */
    "order_line_item_ids": Array<string>;
    /**
     * Promotion code used to create this discount. Present only when source is promotion and a
     * code was used.
     */
    "promotion_code"?: string;
    /** Promotion that created this discount. Present only when source is promotion. */
    "promotion_id"?: string;
    /** Value enum: "manual", "promotion", "plan_change_credit". */
    "source"?: "manual" | "promotion" | "plan_change_credit" | (string & {});
    /** Value enum: "pending", "redeemed", "canceled". */
    "status": "pending" | "redeemed" | "canceled" | (string & {});
};
/**
 * The quantity of one inventory item that each unit of a draft order line item uses, supplied when
 * creating the line item.
 */
export type OrderDraftLineItemInventoryDemandRequest = {
    /** minLength: 1. */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     * maximum: 9999.
     */
    "quantity_per_line_item_unit": number;
};
/**
 * The quantity of one inventory item that each unit of a draft order line item uses, supplied when
 * creating the line item.
 */
export type OrderDraftLineItemInventoryDemandRequestInput = OrderDraftLineItemInventoryDemandRequest;
/**
 * A tax calculation you supply for a draft order line item, made of tax components and a price
 * mode.
 */
export type OrderDraftLineItemTaxCalculationRequestInput = {
    /**
     * minItems: 1. [] (Value): {@link OrderDraftTaxComponentRequestInput}. One tax component of a
     * draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.
     */
    "components": Array<OrderDraftTaxComponentRequestInput>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Tax settings you supply for a draft order line item: its tax category, whether it is taxable,
 * and an optional tax calculation.
 */
export type OrderDraftLineItemTaxRequestInput = {
    /**
     * A tax calculation you supply for a draft order line item, made of tax components and a price
     * mode.
     */
    "calculation"?: OrderDraftLineItemTaxCalculationRequestInput;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
    "taxable"?: boolean;
};
/**
 * One tax component of a draft line item calculation, with its jurisdiction, tax type, and
 * percentage or flat amount.
 */
export type OrderDraftTaxComponentRequestInput = ({
    /** Default: "percentage". Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /**
     * Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor
     * units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with
     * INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment
     * option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * The taxing jurisdiction of a draft tax component, identified by code, level, name, state,
     * and country.
     */
    "jurisdiction": OrderDraftTaxJurisdictionRequestInput;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/**
 * The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and
 * country.
 */
export type OrderDraftTaxJurisdictionRequestInput = {
    /** minLength: 1. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/** The amount of an order that a gift card covers. */
export type OrderGiftCardAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "gift_card_id": string;
};
/**
 * Accept the exact gift_card_estimate returned on the current order, including all selected cards
 * and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and
 * may use one processor payment intent for the processor_money remainder. The amount and every
 * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an
 * input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
 * responsible input field. Lower payment option limits can apply.
 */
export type OrderGiftCardAllocationAcceptance = {
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "gift_card_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}`;
        /** Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * minItems: 1. maxItems: 20. [] (Value): object. [].amount_money (Required): object.
     * [].amount_money.amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. [].amount_money.currency (Required):
     * string. Value enum: "USD". [].gift_card_id (Required): string. minLength: 1. maxLength: 64.
     */
    "gift_cards": Array<{
        /**
         *  amount (Required): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value
         * enum: "USD".
         */
        "amount_money": {
            /**
             * Use an integer string (decimal digits), not a floating-point number. Format: int64.
             * minimum: 0.
             */
            "amount": `${bigint}`;
            /** Value enum: "USD". */
            "currency": "USD" | (string & {});
        };
        /** minLength: 1. maxLength: 64. */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "processor_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}`;
        /** Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * Accept the exact gift_card_estimate returned on the current order, including all selected cards
 * and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and
 * may use one processor payment intent for the processor_money remainder. The amount and every
 * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an
 * input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
 * responsible input field. Lower payment option limits can apply.
 */
export type OrderGiftCardAllocationAcceptanceInput = {
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "gift_card_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}` | bigint;
        /** Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * minItems: 1. maxItems: 20. [] (Value): object. [].amount_money (Required): object.
     * [].amount_money.amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. [].amount_money.currency (Required):
     * string. Value enum: "USD". [].gift_card_id (Required): string. minLength: 1. maxLength: 64.
     */
    "gift_cards": Array<{
        /**
         *  amount (Required): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value
         * enum: "USD".
         */
        "amount_money": {
            /**
             * Use an integer string (decimal digits), not a floating-point number. Format: int64.
             * minimum: 0.
             */
            "amount": `${bigint}` | bigint;
            /** Value enum: "USD". */
            "currency": "USD";
        };
        /** minLength: 1. maxLength: 64. */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     *  amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. Value enum:
     * "USD".
     */
    "processor_money": {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount": `${bigint}` | bigint;
        /** Value enum: "USD". */
        "currency": "USD";
    };
};
/**
 * An estimate of how an order total splits between gift cards and the payment processor, and
 * whether gift cards can pay it.
 */
export type OrderGiftCardEstimate = {
    /**
     * Whether this allocation can be used for payment. False when a selected card needs
     * authorization or the allocation cannot cover the balance while satisfying the processor
     * minimum.
     */
    "can_pay": boolean;
    /**
     * Order balance allocated to the selected gift cards. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "gift_card_money": MoneyValue;
    /**
     *  [] (Value): {@link OrderGiftCardAllocation}. The amount of an order that a gift card
     * covers.
     */
    "gift_cards": Array<OrderGiftCardAllocation>;
    /** Whether this estimate reserves gift-card funds. Estimates currently return false. */
    "is_reserved": boolean;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64.
     */
    "order_version": number;
    /**
     * Order balance remaining for the payment processor. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "processor_money": MoneyValue;
};
/**
 * A gift card available to pay an order, with its available balance and the last four characters
 * of its code.
 */
export type OrderGiftCardSelection = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "available_money": MoneyValue;
    "gift_card_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    "requires_authorization": boolean;
};
/** A gift card redemption applied to an order payment, with the amount, tip, and gift card. */
export type OrderGiftCardSettlement = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "gift_card_id": string;
    "gift_card_redemption_id": string;
    /**
     * Last four characters of the code that paid. It stays the same if the gift card's code is
     * later replaced.
     */
    "last4": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
export type OrderInventoryExceptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_created";
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
    "event_type": "order.inventory_exception_created";
});
/**
 * The `order.inventory_exception_created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type OrderInventoryExceptionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
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
 * The `order.inventory_exception_created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
});
export type OrderInventoryExceptionResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.inventory_exception_resolved";
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
    "event_type": "order.inventory_exception_resolved";
});
/**
 * The `order.inventory_exception_resolved` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type OrderInventoryExceptionResolvedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
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
 * The `order.inventory_exception_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionResolvedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
});
/**
 * Where inventory for an order is allocated from: a fixed location, an allocation policy, or a
 * specific policy revision.
 */
export type OrderInventoryRoutingSourceRequestInput = DeliveryPreviewRoutingSourceInput;
/** An item purchased in an order. */
export type OrderLineItem = {
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
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories": Array<CategoryReference>;
    "description"?: string;
    /**
     * Discount value allocated to this line item. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Current quantities for each required fulfillment obligation: one entry for a single item or
     * one per bundle component that requires fulfillment. Quantities use line units for single
     * items and component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when
     * the line needs no fulfillment or the order's obligations cannot be computed, including older
     * lines without recorded requirements. [] (Value): {@link OrderLineItemFulfillmentQuantities}.
     * Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still
     * unassigned for fulfillment.
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
     * The gift card purchase details saved on an order line item: configuration, face value, price
     * paid, and recipient.
     */
    "gift_card_purchase"?: GiftCardPurchaseSnapshot;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  anyOf[1] (Value): {@link LineItemInventorySnapshot}. Whether an order line item tracks
     * inventory, and the inventory item quantities each unit demands. anyOf[2] (Value): null.
     */
    "inventory_snapshot": ((LineItemInventorySnapshot) | (null));
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Sum of the line item's modifier totals. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    "product_id"?: string;
    /**
     * Masked card identities for fully funded units of this purchase line. Partial consideration
     * does not issue a card. [] (Value): {@link PurchasedGiftCard}. A gift card issued for one
     * unit of a purchased order line item, with its last four code characters and any card it
     * replaced.
     */
    "purchased_gift_cards": Array<PurchasedGiftCard>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "refunded_quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Recurring offer and cadence frozen for this line at signup. The subscription offer and
     * billing interval an order line was bought under, with the recurring amount.
     */
    "subscription"?: SubscribedLine;
    /** Subscription created for this line after the order is paid. */
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
     * Tax settings for an order line item calculated by Flint or supplied by you, including the
     * line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Tax calculated for this line item, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discounts, plus tax that is not already included in the price. Signed
     * monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "unit_weight"?: Weight;
    "variant_id"?: string;
};
/**
 * Fulfillment requirements for one component of a bundle line item, with the component quantity
 * per unit.
 */
export type OrderLineItemFulfillmentComponent = {
    /** ID of the bundle component these requirements apply to. */
    "bundle_component_id": string;
    /**
     * Fulfillment requirements for this component. anyOf[1] (Value): {@link
     * OrderLineItemFulfillmentProfile}. Whether an order line item requires fulfillment, and the
     * fulfillment types it allows. anyOf[2] (Value): null.
     */
    "profile": ((OrderLineItemFulfillmentProfile) | (null));
    /**
     * Number of this component per unit of the order line item; fractional quantities are not
     * supported. Format: int64.
     */
    "quantity_per_line_item_unit": number;
};
/** Whether an order line item requires fulfillment, and the fulfillment types it allows. */
export type OrderLineItemFulfillmentProfile = {
    /**
     * Fulfillment types allowed for this item. Empty when fulfillment is not required. [] enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". [] (Value): string. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /** Whether this item requires fulfillment. Value enum: "none", "required". */
    "requirement": "none" | "required" | (string & {});
};
/**
 * Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still
 * unassigned for fulfillment.
 */
export type OrderLineItemFulfillmentQuantities = {
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by a
     * non-terminal fulfillment, including a fulfillment on hold. Format: int64.
     */
    "assigned_quantity": number;
    /** ID of the bundle component these quantities describe. Omitted for a single item. */
    "bundle_component_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled
     * or no_show fulfillments. Format: int64.
     */
    "canceled_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by failed
     * fulfillments that kept their quantity. Failed fulfillments that released quantity own
     * nothing; their quantity becomes unassigned again. Format: int64.
     */
    "failed_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Quantity owned by completed
     * fulfillments. Format: int64.
     */
    "fulfilled_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Total quantity requiring
     * fulfillment, in line units for a single item or component units for a bundle component.
     * Equals the sum of the other five quantity fields. Format: int64.
     */
    "required_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Required quantity owned by
     * no fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment.
     * Format: int64.
     */
    "unassigned_quantity": number;
};
/**
 * Fulfillment requirements for an order line item, given for a single item or for each component
 * of a bundle.
 */
export type OrderLineItemFulfillmentRequirements = {
    /**
     * Fulfillment requirements for each bundle component. Present for bundle lines. [] (Value):
     * {@link OrderLineItemFulfillmentComponent}. Fulfillment requirements for one component of a
     * bundle line item, with the component quantity per unit.
     */
    "components"?: Array<OrderLineItemFulfillmentComponent>;
    /**
     * Fulfillment requirements for a single item. Present for non-bundle lines. Whether an order
     * line item requires fulfillment, and the fulfillment types it allows.
     */
    "direct"?: OrderLineItemFulfillmentProfile;
};
