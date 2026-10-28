import type {
    BundleComponent,
    BuyerOrder,
    BuyerErrorRemediation,
    BuyerExpandedOrderSummary,
    BuyerAction,
    BuyerCheckoutSessionWithSecret
} from './types-1.js';
import type { CategoryReference, CardDetails } from './types-3.js';
import type { Dimensions } from './types-17.js';
import type { GiftCardPurchaseSnapshot, Image } from './types-21.js';
import type { LineItemInventorySnapshot } from './types-30.js';
import type { MoneyValue, OrderCalculatedLineItemTax } from './types-33.js';
import type {
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineSubscriptionOfferSummary,
    OrderPaymentAttemptPaymentMethodSave
} from './types-34.js';
import type { PurchasedGiftCard, RefundLineItemAllocation } from './types-41.js';
import type { SelectedProductOption, SubscribedLine, StripeClientSetup } from './types-47.js';
import type { Weight } from './types-65.js';
import type { TextModifierRequest } from './types-50.js';
import type { ResponseMeta, RefundTaxBreakdownRefund, RefundTenderAllocation } from './types-42.js';
import type { PaymentAttemptGiftCardRedemption, PaymentErrorSummary, PaymentFulfillmentHold } from './types-37.js';
import type { PendingPaymentAction, PaymentSourceSummary, PaymentRefund } from './types-39.js';
import type { OrderTaxExemption } from './types-35.js';
import type { TaxBreakdown } from './types-49.js';
import type { Address } from './types-0.js';
import type {
    ReturnResolutionLineItemRequest,
    ReturnReasonSummary,
    ReturnReplacementLineItem,
    ReturnResolutionLineItem
} from './types-44.js';
import type { ExpandedCustomerSummary, ExpandedPaymentIntentSummary } from './types-18.js';
import type { MetadataMap } from './types-32.js';
import type {
    ReturnFinancialSummary,
    ReturnEligibilitySelection,
    ReturnLineItemValue,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal
} from './types-43.js';
/** Shape $ (Value): {@link BuyerOrderLineItem}. An item purchased in an order. */
export type BuyerOrderLineItem = {
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
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BuyerOrderLineItemModifier}. Shape $[] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier on a buyer's order line item, either a catalog
     * modifier or entered text, with its quantity and price change.
     */
    "modifiers": Array<BuyerOrderLineItemModifier>;
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
 * Shape $ (Value): {@link BuyerOrderLineItemModifier}. A modifier on a buyer's order line item,
 * either a catalog modifier or entered text, with its quantity and price change.
 */
export type BuyerOrderLineItemModifier = {
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
/** Shape $ (Value): {@link BuyerOrderListResponse}. A page of `BuyerOrder` objects. */
export type BuyerOrderListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerOrder}. Shape $[] (Value): {@link BuyerOrder}. A
     * customer's purchase and its payment and fulfillment progress.
     */
    "data": Array<BuyerOrder>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerOrderPaymentAttempt}. An attempt to pay an order. */
export type BuyerOrderPaymentAttempt = {
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
     * Shape $ (Value): {@link BuyerPaymentErrorSummary}. The concluded failure of a payment leg
     * that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a
     * normalized `code`, a message, when it failed, and recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Shape $ (Value): string.  Value enum: "payment", "setup", "settlement". */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    /** Shape $ (Value): string. */
    "order_payment_attempt_id": string;
    /**
     * Shape $ (Value): Array of {@link BuyerPaymentAttemptPaymentIntent}. Shape $[] (Value):
     * {@link BuyerPaymentAttemptPaymentIntent}. The payment intent behind an order payment
     * attempt, with its status, amounts, authorization expiry, and last payment error.
     */
    "payment_intents": Array<BuyerPaymentAttemptPaymentIntent>;
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
/** Shape $ (Value): {@link BuyerOrderResponse}. A response containing `BuyerOrder` data. */
export type BuyerOrderResponse = {
    /**
     * Shape $ (Value): {@link BuyerOrder}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data": BuyerOrder;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerOrderTax}. Tax details on a buyer's order: whether tax is enabled,
 * its mode and status, location, exemption, and tax breakdowns.
 */
export type BuyerOrderTax = {
    /**
     * Shape $ (Value): string. Identifies which automatic tax behavior applies to this order.
     * connected means the account's tax connection calculated it. standard marks an order
     * calculated before automatic tax required a tax connection. Value enum: "standard",
     * "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "available_location_inputs"?: Array<string>;
    /** Shape $ (Value): boolean. */
    "enabled": boolean;
    /**
     * Shape $ (Value): {@link OrderTaxExemption}. Whether an order is tax exempt, and the customer
     * it was assessed from.
     */
    "exemption"?: OrderTaxExemption;
    /**
     * Shape $ (Value): {@link BuyerOrderTaxLocation}. The location used to calculate tax on a
     * buyer's order, and where its address came from.
     */
    "location"?: BuyerOrderTaxLocation;
    /** Shape $ (Value): string.  Value enum: "automatic", "external". */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Shape $ (Value): string. Whether the order's prices include tax (`inclusive`) or tax is
     * added to them (`additive`). Present on every order Flint renders after 2026-10-20; a
     * response replayed for an idempotent retry of an earlier request omits it. Each line item and
     * charge also states its own mode in `tax.calculation.price_mode`, which decides that item's
     * tax. Value enum: "additive", "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "not_required", "requires_location", "calculated",
     * "exempt", "incomplete".
     */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     * Shape $ (Value): Array of {@link TaxBreakdown}. Shape $[] (Value): {@link TaxBreakdown}. The
     * tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
     * amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/**
 * Shape $ (Value): {@link BuyerOrderTaxLocation}. The location used to calculate tax on a buyer's
 * order, and where its address came from.
 */
export type BuyerOrderTaxLocation = {
    /**
     * Shape $ (Value): {@link Address}. Omitted for a checkout session credential that doesn't act
     * for the customer the buyer verified. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /**
     * Shape $ (Value): string. Value enum: "provided", "fulfillment", "customer", "device",
     * "location", "merchant".
     */
    "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "postal_code", "tax_address", "billing_address",
     * "shipping_address", "business_address".
     */
    "address_type": "postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {});
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: string;
};
/** Shape $ (Value): {@link BuyerPackage}. A package within a shipment. */
export type BuyerPackage = {
    /** Shape $ (Value): string. Carrier transporting the package. */
    "carrier"?: string;
    /** Shape $ (Value): string. Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. Package delivery timestamp. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): {@link Dimensions}. Physical length, width, and height of the package.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * Shape $ (Value): string or null. When the carrier or merchant expects this package to
     * arrive. Null when no estimate is set. Retained after delivery as history. This estimate is
     * separate from the fulfillment's promised shipment window. Format: date-time.
     */
    "expected_delivery_at"?: string | null;
    /** Shape $ (Value): string. Fulfillment whose items are in the package. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for
     * authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified.
     */
    "label_url"?: string;
    /** Shape $ (Value): string. Order whose items are in the package. */
    "order_id": string;
    /** Shape $ (Value): string. Stable identifier of the package. */
    "package_id": string;
    /**
     * Shape $ (Value): string. Return this package belongs to. Present only on packages of return
     * shipments.
     */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Return line quantities
     * allocated to this parcel. Present only on packages of return shipments. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
     * shipment or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. Carrier service used for the package. */
    "service_code"?: string;
    /** Shape $ (Value): string. Shipment carrying this package. */
    "shipment_id": string;
    /** Shape $ (Value): string. Package handoff timestamp. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. Current package lifecycle state. Package states are the source used
     * to derive shipment status. - `created`: The package record exists but has not been packed or
     * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The
     * package was handed to the carrier. - `in_transit`: The carrier is moving the package through
     * its network. - `out_for_delivery`: The package is on its final delivery route. -
     * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier
     * attempted delivery but did not complete it. Follow the carrier instructions before retrying
     * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
     * carrier-reported issue. - `returned`: The package was returned toward or to its origin. -
     * `voided`: The package was voided and will not continue through delivery. Value enum:
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
     * Shape $ (Value): Array of string. Always empty for buyer credentials. maxItems: 0. [] enum:
     * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped". Shape $[] (Value):
     * string. Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception",
     * "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | (string & {})>;
    /**
     * Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified.
     */
    "tracking_number"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified.
     */
    "tracking_url"?: string;
    /** Shape $ (Value): string. Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic package version for expected_version checks. Use
     * an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
    /**
     * Shape $ (Value): {@link Weight}. Physical weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "weight"?: Weight;
};
/** Shape $ (Value): {@link BuyerPackageListResponse}. A page of `BuyerPackage` objects. */
export type BuyerPackageListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerPackage}. Shape $[] (Value): {@link BuyerPackage}. A
     * package within a shipment.
     */
    "data": Array<BuyerPackage>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerPackageResponse}. A response containing `BuyerPackage` data. */
export type BuyerPackageResponse = {
    /** Shape $ (Value): {@link BuyerPackage}. A package within a shipment. */
    "data": BuyerPackage;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerPauseActionOptions}. The pause lengths this subscription accepts
 * from its buyer.
 */
export type BuyerPauseActionOptions = {
    /**
     * Shape $ (Value): integer. When present, pause_duration_cycles is required and must be
     * between 1 and this value. When absent, omit pause_duration_cycles to pause until the buyer
     * resumes. Format: int32. minimum: 1. maximum: 12.
     */
    "max_pause_duration_cycles"?: number;
};
/**
 * Shape $ (Value): {@link BuyerPauseCapability}. Whether buyers may pause their own subscriptions.
 * Send at least one field. minProperties: 1.
 */
export type BuyerPauseCapability = {
    /**
     * Shape $ (Value): boolean. Whether buyers may pause. When false, a buyer's pause returns
     * PAUSE_NOT_ALLOWED. Default: true.
     */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): integer. The longest pause a buyer may choose, in billing periods. When
     * set, a buyer's pause must send pause_duration_cycles from 1 to this value. Omit it for no
     * limit, which also lets a buyer pause until they resume. Format: int32. minimum: 1. maximum:
     * 12.
     */
    "max_cycles"?: number;
};
/**
 * Shape $ (Value): {@link BuyerPauseCapabilityInput}. Whether buyers may pause their own
 * subscriptions. Send at least one field. minProperties: 1.
 */
export type BuyerPauseCapabilityInput = BuyerPauseCapability;
/**
 * Shape $ (Value): {@link BuyerPayBalanceActionOptions}. The return resolutions the buyer can pay
 * now.
 */
export type BuyerPayBalanceActionOptions = {
    /**
     * Shape $ (Value): Array of string. Payable resolutions in creation order. Read each amount
     * with GET /v1/me/return-resolutions/{return_resolution_id}, then create its checkout session
     * with POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions. minItems: 1.
     * Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
};
/**
 * Shape $ (Value): {@link BuyerPaymentAttemptPaymentIntent}. The payment intent behind an order
 * payment attempt, with its status, amounts, authorization expiry, and last payment error.
 */
export type BuyerPaymentAttemptPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Capture is unavailable at or after this time, even if the payment
     * still has requires_capture status. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payment intent's stored capturable amount. A positive
     * amount does not override authorization_expires_at or the payment status. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link BuyerPaymentErrorSummary}. Why a payment attempt failed: a
     * normalized `code`, a message, when it failed, and recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
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
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link BuyerPaymentCollection}. What a client needs to collect payment for a
 * buyer's order. The `stripe` field holds the Stripe values.
 */
export type BuyerPaymentCollection = {
    /**
     * Shape $ (Value): {@link BuyerPaymentCollectionStripe}. Client configuration for collecting
     * the payment through Stripe. Stripe values for collecting payment on a buyer's order: the
     * account ID, publishable key, return URL, and Elements settings.
     */
    "stripe"?: BuyerPaymentCollectionStripe;
};
/**
 * Shape $ (Value): {@link BuyerPaymentCollectionStripe}. Stripe values for collecting payment on a
 * buyer's order: the account ID, publishable key, return URL, and Elements settings.
 */
export type BuyerPaymentCollectionStripe = {
    /** Shape $ (Value): string. Stripe account to use when initializing the payment client. */
    "account_id"?: string;
    /**
     * Shape $ (Value): {@link BuyerPaymentCollectionStripeElements}. Stripe Elements configuration
     * for the available payment methods and amounts. Stripe Elements collection guidance. Follow
     * next_step in the browser, then submit the result to submit_to through Flint.
     */
    "elements"?: BuyerPaymentCollectionStripeElements;
    /** Shape $ (Value): string. Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** Shape $ (Value): string. URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentCollectionStripeElements}. Stripe Elements collection
 * guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.
 */
export type BuyerPaymentCollectionStripeElements = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount and currency used to initialize the payment
     * form. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of string. Digital wallets that the payment form can offer. Shape $[]
     * (Value): string.
     */
    "digital_wallets"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether Elements is collecting a payment source for an immediate
     * payment or a setup source for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Shape $ (Value): string. Browser collection operation to perform before calling submit_to.
     * Value enum: "collect_payment_source", "collect_setup_payment_source",
     * "create_confirmation_token".
     */
    "next_step": "collect_payment_source"
        | "collect_setup_payment_source"
        | "create_confirmation_token"
        | (string & {});
    /**
     * Shape $ (Value): string. Stripe Elements payment method creation mode. Follow next_step:
     * standalone PaymentIntents and checkout-authenticated order collection create a
     * ConfirmationToken, while merchant-authenticated order collection and setup collection create
     * a PaymentMethod. Value enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Shape $ (Value): object. Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /**
     * Shape $ (Value): Array of string. Payment method types that the payment form can offer.
     * Shape $[] (Value): string.
     */
    "payment_method_types": Array<string>;
    /**
     * Shape $ (Value): Array of {@link BuyerSelectableOrderPaymentIntent}. Order payment intents
     * that the buyer can select for collection. Shape $[] (Value): {@link
     * BuyerSelectableOrderPaymentIntent}. A payment intent a buyer can pay on an order, with its
     * status, amounts, payment collection details, and last payment error.
     */
    "selectable_payment_intents"?: Array<BuyerSelectableOrderPaymentIntent>;
    /**
     * Shape $ (Value): string. Flint operation that accepts the result of next_step. Value enum:
     * "pay_order", "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerPaymentErrorSummary}. Why a payment attempt failed: a normalized
 * `code`, a message, when it failed, and recovery guidance.
 */
export type BuyerPaymentErrorSummary = {
    /**
     * Shape $ (Value): string. Flint-normalized payment failure code. Unknown provider values are
     * returned as payment_failed. Value enum: "card_declined", "insufficient_funds",
     * "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized",
     * "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required",
     * "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card",
     * "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable",
     * "payment_method_declined", "payment_not_completed", "payment_action_expired",
     * "payment_method_temporarily_unavailable", "payment_failed".
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
        | "payment_failed"
        | (string & {});
    /**
     * Shape $ (Value): string. Time the payment attempt concluded in failure. Format: date-time.
     */
    "failed_at": string;
    /**
     * Shape $ (Value): string. Flint-authored merchant-facing payment failure message. This is
     * stable explanatory text, not raw provider copy.
     */
    "message": string;
    /**
     * Shape $ (Value): {@link BuyerErrorRemediation} or null. Guidance for resolving the payment
     * failure before trying to collect again. Shape $.anyOf[1] (Value): {@link
     * BuyerErrorRemediation}. Guidance for recovering from a payment error: whether and how to
     * retry (`retry`), and optional next steps. Shape $.anyOf[2] (Value): null.
     */
    "remediation": ((BuyerErrorRemediation) | (null));
};
/**
 * Shape $ (Value): {@link BuyerPaymentIntent}. A payment as the buyer sees it. Omits the store's
 * fees, net, risk assessment, and dispute state.
 */
export type BuyerPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the hold lapses if it hasn't been collected. Set when the hold
     * is placed. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Shape $ (Value): string. When the processor authorized the payment. Absent until then.
     * Format: date-time.
     */
    "authorized_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set. Absent until the payment is authorized, and on
     * payments canceled before authorization. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Flint-normalized reason the payment intent was canceled. Present
     * only while status is canceled. Unknown processor values are returned as payment_canceled.
     * Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned",
     * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled".
     */
    "cancellation_reason"?: "requested_by_customer"
        | "duplicate"
        | "fraudulent"
        | "abandoned"
        | "invoice_payment_failed"
        | "invoice_voided"
        | "order_closed"
        | "payment_canceled"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the authorization that can still be
     * collected. Positive only while status is requires_capture, and zero after it is collected,
     * released, or expires. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. When money is collected. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. When money was captured. For automatic capture, this is when the
     * payment succeeded. Absent until capture. Format: date-time.
     */
    "captured_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount collected from the buyer. Zero while a hold
     * is open, and positive whenever status is succeeded. Absent until the payment is authorized.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Flint checkout session ID associated with this payment, when
     * present.
     */
    "checkout_session_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint
     * to pause fulfillment for this payment. While its status is active, open fulfillments are on
     * hold. A hold on fulfillment tied to a payment, with the reason, the action required, and
     * whether the hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /** Shape $ (Value): string. Bill this payment collects, when it pays a bill. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary} or null. Most recent payment error. Null when
     * no payment error is recorded. Shape $.anyOf[1] (Value): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. Shape $.anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /** Shape $ (Value): string. Merchant that owns this payment intent. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): object. Caller-owned metadata. Keys starting with flint_ are reserved for
     * Flint and aren't returned. maxProperties: 0.
     */
    "metadata": {
        [key: string]: unknown;
    };
    /** Shape $ (Value): string. Order this payment belongs to. */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. How the payment was started. Fixed when the payment is created.
     * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use for this payment. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.
     * Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): {@link PaymentSourceSummary}. Summary of the card or bank account used for
     * the payment. Absent until a payment source is attached. A summary of the payment source used
     * for a payment, by funding-method family, with card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Shape $ (Value): string or null. Email address for this payment's receipt. When it isn't
     * set, Flint uses the buyer's email. Format: email. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * Shape $ (Value): string. How much of captured_money has been refunded, including value
     * issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Total refunded against captured_money, including value
     * issued as store credit and processor refunds still pending. Failed and canceled refunds
     * aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the authorization returned to the buyer
     * without being charged: the uncollected remainder after a partial capture, or the whole
     * authorization after a cancellation or expiry. It was never collected, so it needs no refund.
     * Absent until the payment is authorized. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "released_money"?: MoneyValue;
    /** Shape $ (Value): string. Flint return ID associated with this payment, when present. */
    "return_id"?: string;
    /**
     * Shape $ (Value): string. The payment option the most recent confirmation used. Absent until
     * the payment intent is first confirmed.
     */
    "selected_payment_option"?: string;
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
     * and expired are final. Refunds never change status. Value enum: "requires_payment_method",
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
     * Shape $ (Value): string. Opaque payment reference to share with merchant support. Do not
     * parse its format.
     */
    "support_reference": string;
    /**
     * Shape $ (Value): Array of string. Always empty for buyer credentials. maxItems: 0. [] enum:
     * "confirm", "capture", "cancel". Shape $[] (Value): string. Value enum: "confirm", "capture",
     * "cancel".
     */
    "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Shape $.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. Shape $.anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerPaymentIntentListResponse}. A page of `BuyerPaymentIntent` objects.
 */
export type BuyerPaymentIntentListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerPaymentIntent}. Shape $[] (Value): {@link
     * BuyerPaymentIntent}. A payment as the buyer sees it. Omits the store's fees, net, risk
     * assessment, and dispute state.
     */
    "data": Array<BuyerPaymentIntent>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentIntentResponse}. A response containing `BuyerPaymentIntent`
 * data.
 */
export type BuyerPaymentIntentResponse = {
    /**
     * Shape $ (Value): {@link BuyerPaymentIntent}. A payment as the buyer sees it. Omits the
     * store's fees, net, risk assessment, and dispute state.
     */
    "data": BuyerPaymentIntent;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerPaymentMethod}. A customer's saved payment details. */
export type BuyerPaymentMethod = {
    /**
     * Shape $ (Value): {@link CardDetails}. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used.
     */
    "card"?: CardDetails;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): boolean. Whether this is the customer's default payment method, the one
     * Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     */
    "is_default": boolean;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string. */
    "payment_method_id": string;
    /**
     * Shape $ (Value): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store".
     */
    "saved_with"?: "flint" | "store" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "pending", "active", "expired", "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Shape $ (Value): string.  Value enum: "card". */
    "type": "card" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): string. When Flint may charge the payment method. off_session payment
     * methods can pay subscriptions, automatic invoices, and other charges without the buyer, and
     * can be a customer's default. on_session payment methods were saved by the buyer in checkout
     * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
     * completes and refuses them for any charge without the buyer and as a default. Payment
     * methods saved before usage existed are off_session. Value enum: "on_session", "off_session".
     */
    "usage": "on_session" | "off_session" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerPaymentMethodListResponse}. A page of `BuyerPaymentMethod` objects.
 */
export type BuyerPaymentMethodListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerPaymentMethod}. Shape $[] (Value): {@link
     * BuyerPaymentMethod}. A customer's saved payment details.
     */
    "data": Array<BuyerPaymentMethod>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentMethodResponse}. A response containing `BuyerPaymentMethod`
 * data.
 */
export type BuyerPaymentMethodResponse = {
    /** Shape $ (Value): {@link BuyerPaymentMethod}. A customer's saved payment details. */
    "data": BuyerPaymentMethod;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentMethodWithSetup}. The saved payment method, with
 * `client_setup` when the buyer must still complete processor setup before the payment method can
 * be used. A customer's saved payment details.
 */
export type BuyerPaymentMethodWithSetup = (Exclude<BuyerPaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): {@link StripeClientSetup}. Present when the buyer must complete processor
     * setup before using this payment method. Stripe.js setup authority returned while saving a
     * payment method. Follow its stripe_js_call now. setup_collection is guidance instead and
     * never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
/** Shape $ (Value): {@link BuyerRefund}. Money returned against a collected payment. */
export type BuyerRefund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "credit_note_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
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
     * Shape $ (Value): string. Present only on refunds created through POST
     * /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAllocation}. Shape $[] (Value): {@link
     * RefundLineItemAllocation}. How a refund applied to one order line item: quantity, refunded
     * amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link BuyerExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * BuyerExpandedOrderSummary}. An order summary in a buyer response, with order status and
     * totals. Recorded buyer contact is omitted. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((BuyerExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): Array of {@link PaymentRefund}. Shape $[] (Value): {@link PaymentRefund}.
     * The part of a refund returned through one payment, with the amount, tip, status, and any
     * failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /** Shape $ (Value): null. Always null for buyer credentials. */
    "reason": null;
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "refund_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /** Shape $ (Value): string. */
    "return_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): string. Summary of payment_refunds and tender_allocations. Only failed is
     * final: succeeded and partially_succeeded can still change when a bank rejects a refund after
     * accepting it. Follow refund.updated. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefund}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocation}. Shape $[] (Value): {@link
     * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
     * allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link BuyerRefundListResponse}. A page of `BuyerRefund` objects. */
export type BuyerRefundListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerRefund}. Shape $[] (Value): {@link BuyerRefund}. Money
     * returned against a collected payment.
     */
    "data": Array<BuyerRefund>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerRefundResponse}. A response containing `BuyerRefund` data. */
export type BuyerRefundResponse = {
    /** Shape $ (Value): {@link BuyerRefund}. Money returned against a collected payment. */
    "data": BuyerRefund;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerRetentionOffer}. The offer a buyer sees before canceling. Send at
 * least one field. minProperties: 1.
 */
export type BuyerRetentionOffer = {
    /**
     * Shape $ (Value): string. none: no offer. pause_instead: offer to pause for pause_cycles
     * billing periods instead of canceling. pause_instead needs pausing turned on. Default:
     * "none". Value enum: "none", "pause_instead".
     */
    "kind"?: "none" | "pause_instead" | (string & {});
    /**
     * Shape $ (Value): integer. Billing periods the offered pause lasts. Required when kind is
     * pause_instead, and at most pause.max_cycles when that is set. Not allowed with kind none.
     * Format: int32. minimum: 1. maximum: 12.
     */
    "pause_cycles"?: number;
};
/**
 * Shape $ (Value): {@link BuyerRetentionOfferInput}. The offer a buyer sees before canceling. Send
 * at least one field. minProperties: 1.
 */
export type BuyerRetentionOfferInput = {
    /**
     * Shape $ (Value): string. none: no offer. pause_instead: offer to pause for pause_cycles
     * billing periods instead of canceling. pause_instead needs pausing turned on. Default:
     * "none". Value enum: "none", "pause_instead".
     */
    "kind"?: "none" | "pause_instead";
    /**
     * Shape $ (Value): integer. Billing periods the offered pause lasts. Required when kind is
     * pause_instead, and at most pause.max_cycles when that is set. Not allowed with kind none.
     * Format: int32. minimum: 1. maximum: 12.
     */
    "pause_cycles"?: number;
};
/** Shape $ (Value): {@link BuyerReturn}. A request to send purchased items back. */
export type BuyerReturn = {
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the return, in
     * this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a
     * customer session on /v1/me, or in Flint's buyer account, lists all three every time;
     * merchant reads and webhooks get an empty list. ship_items is required while
     * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
     * required while a resolution waits for the buyer's payment. Example: []. Shape $[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnCompletionBlocker}. Shape $[] (Value): {@link
     * BuyerReturnCompletionBlocker}. A condition the buyer can resolve before the Return can
     * complete.
     */
    "completion_blockers": Array<BuyerReturnCompletionBlocker>;
    /**
     * Shape $ (Value): string. automatic completes the Return when the last completion blocker
     * clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it
     * to manual. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnFinancialSummary}. The money for a return: returned value,
     * deductions, credits, replacement total, and amounts due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnHandoffRequirement}. Shape $[] (Value): {@link
     * BuyerReturnHandoffRequirement}. The merchandise quantities the buyer must hand off, with
     * their destination, instructions, and handoff status.
     */
    "handoff_requirements": Array<BuyerReturnHandoffRequirement>;
    /**
     * Shape $ (Value): string. Who created the Return, from the credential that sent the request:
     * buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
     * user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
     * "merchant", "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerReturnLineItem}. Shape $[] (Value): {@link
     * BuyerReturnLineItem}. An item included in a return request.
     */
    "line_items": Array<BuyerReturnLineItem>;
    /**
     * Shape $ (Value): string. On the Return, the least-finished line's value. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception".
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
    /** Shape $ (Value): object. Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_fulfilled"
        | "requires_action"
        | "fulfilled"
        | "failed"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_number": string;
    /**
     * Shape $ (Value): Array of string. IDs of every resolution created for this Return, oldest
     * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "cancel". Shape $[] (Value): string. Value enum:
     * "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerReturnCompletionBlocker}. A condition the buyer can resolve before
 * the Return can complete.
 */
export type BuyerReturnCompletionBlocker = {
    /**
     * Shape $ (Value): string. A blocker the buyer can resolve. resolution_pending is included
     * only for a payable resolution. Value enum: "resolution_pending", "handoff_pending",
     * "resolution_not_selected", "resolution_requires_action", "resolution_failed".
     */
    "code": "resolution_pending"
        | "handoff_pending"
        | "resolution_not_selected"
        | "resolution_requires_action"
        | "resolution_failed"
        | (string & {});
    /** Shape $ (Value): string. */
    "message": string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility preview
 * for an order, including eligible items and policy evaluation results.
 */
export type BuyerReturnEligibilityPreview = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnEligibilityPreviewLineItem}. Shape $[] (Value):
     * {@link BuyerReturnEligibilityPreviewLineItem}. An order line item's Return eligibility,
     * catalog details, and suggested return reasons shown to the buyer.
     */
    "line_items": Array<BuyerReturnEligibilityPreviewLineItem>;
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link BuyerReturnPolicyEvaluation}. Return policy evaluation results shown
     * to the buyer, including eligibility and results for individual order lines.
     */
    "policy_evaluation": BuyerReturnPolicyEvaluation;
    /**
     * Shape $ (Value): {@link ReturnEligibilitySelection}. Which order lines to check for return
     * eligibility: all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnEligibilityPreviewLineItem}. An order line item's Return
 * eligibility, catalog details, and suggested return reasons shown to the buyer.
 */
export type BuyerReturnEligibilityPreviewLineItem = {
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether the buyer can request this line themselves, through a
     * customer session, right now. False when no policy covers the item, when it is not eligible,
     * or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason
     * to say why.
     */
    "can_buyer_request": boolean;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link BuyerReturnLineItemEligibility}. An item's Return eligibility,
     * eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnLineItemModifier}. Shape $[] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnReasonSummary}. Active reasons that apply to this
     * item, up to 20. Category-scoped reasons come first, then reasons that apply to every item.
     * Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak.
     * maxItems: 20. Shape $[] (Value): {@link ReturnReasonSummary}. A return reason a buyer can
     * pick for a line, with its `handle` and whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnHandoffDestination}. The destination name, address, and type
 * shown to the buyer for returning merchandise.
 */
export type BuyerReturnHandoffDestination = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** Shape $ (Value): string.  Value enum: "buyer_address", "location", "external_location". */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    /** Shape $ (Value): string. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnHandoffRequirement}. The merchandise quantities the buyer
 * must hand off, with their destination, instructions, and handoff status.
 */
export type BuyerReturnHandoffRequirement = {
    /**
     * Shape $ (Value): {@link BuyerReturnHandoffDestination}. The destination name, address, and
     * type shown to the buyer for returning merchandise.
     */
    "destination": BuyerReturnHandoffDestination;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "instructions"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "shipment_count"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Whether the buyer has started sending merchandise back. A
     * requirement leaves handoff_requirements entirely once it is satisfied, so there is no
     * terminal status and an empty array means nothing is waiting on the buyer. Value enum:
     * "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** Shape $ (Value): {@link BuyerReturnLineItem}. An item included in a return request. */
export type BuyerReturnLineItem = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "accepted_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "approved_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The refund, store_credit, or no_monetary_action resolution Flint
     * creates and confirms automatically. Absent when the merchant resolves manually. Example:
     * "refund". Value enum: "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Shape $ (Value): integer string. Approved quantity that can still be assigned to a new
     * resolution. Every non-canceled resolution reserves its line quantity, including proposed,
     * pending, action-required, failed, and fulfilled resolutions. Whole-number quantity;
     * fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "available_resolution_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "canceled_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "declined_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "dispositioned_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link BuyerReturnLineItemEligibility}. An item's Return eligibility,
     * eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "handed_off_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "inspected_quantity": `${bigint}`;
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_policy_overridden": boolean;
    /**
     * Shape $ (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
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
     * Shape $ (Value): Array of {@link BuyerReturnLineItemModifier}. Shape $[] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "rejected_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Committed resolution execution gate, filled for every approved
     * line: after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when merchandise is not
     * required, unless the policy or decision sets a timing explicitly. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "resolved_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_reason_handle": string;
    /** Shape $ (Value): string. */
    "return_reason_id": string;
    /** Shape $ (Value): string. */
    "return_reason_name": string;
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "return_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. IDs of the resolutions that include this line, oldest
     * first, including failed and canceled resolutions. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): {@link ReturnLineItemValue}. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "review_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Always empty for buyer credentials. maxItems: 0. [] enum:
     * "cancel", "waive_inspection". Shape $[] (Value): string. Value enum: "cancel",
     * "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnLineItemEligibility}. An item's Return eligibility, eligible
 * quantity, allowed resolution types, and eligibility reasons shown to the buyer.
 */
export type BuyerReturnLineItemEligibility = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): {@link ReturnLineItemDecisionProposal}. The pinned policy decision
     * recomputed for based_on_quantity. A decide with only approved_quantity commits these values.
     * Policy automatic resolution selects the policy automatic_resolution_type for policy_default
     * or the line's requested_resolution_type for buyer_requested. When buyer_requested has no
     * requested_resolution_type, the proposal still exists without automatic_resolution_type, so
     * resolution is manual. Manual policy resolution also has no automatic_resolution_type. An
     * unset release_timing is filled with after_inspection when merchandise and inspection are
     * required, after_receipt when merchandise is required without inspection, or after_approval
     * when no merchandise is required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
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
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
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
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnLineItemModifier}. A selected modifier recorded on an item in
 * the buyer's Return, including its modifier group name and price.
 */
export type BuyerReturnLineItemModifier = {
    /** Shape $ (Value): object. maxProperties: 0. */
    "metadata": {};
    /** Shape $ (Value): string. */
    "modifier_group_name": string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string.  Value enum: "per_item", "per_line". */
    "pricing_scope": "per_item" | "per_line" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): boolean. */
    "show_on_fulfillment": boolean;
    /** Shape $ (Value): boolean. */
    "show_on_receipt": boolean;
    /** Shape $ (Value): string. */
    "text_value"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** Shape $ (Value): {@link BuyerReturnListResponse}. A page of `BuyerReturn` objects. */
export type BuyerReturnListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerReturn}. Shape $[] (Value): {@link BuyerReturn}. A
     * request to send purchased items back.
     */
    "data": Array<BuyerReturn>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerReturnPolicyEvaluation}. Return policy evaluation results shown to
 * the buyer, including eligibility and results for individual order lines.
 */
export type BuyerReturnPolicyEvaluation = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnPolicyEvaluationLineItem}. Shape $[] (Value):
     * {@link BuyerReturnPolicyEvaluationLineItem}. An order line's eligibility, allowed
     * resolutions, return requirements, and catalog details from the buyer's Return policy
     * evaluation.
     */
    "line_items": Array<BuyerReturnPolicyEvaluationLineItem>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
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
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string. */
    "return_policy_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnPolicyEvaluationLineItem}. An order line's eligibility,
 * allowed resolutions, return requirements, and catalog details from the buyer's Return policy
 * evaluation.
 */
export type BuyerReturnPolicyEvaluationLineItem = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required": boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnLineItemModifier}. Shape $[] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
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
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "suggested_return_reason_ids": Array<string>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnPreview}. A Return eligibility or resolution preview shown to
 * the buyer, selected by mode.
 */
export type BuyerReturnPreview = ({
    /**
     * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility"?: BuyerReturnEligibilityPreview;
    /** Shape $ (Value): string.  Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution"?: BuyerReturnResolutionPreview;
})
    & ((Exclude<BuyerReturnPreviewEligibility & object, readonly unknown[]>)
    | (Exclude<BuyerReturnPreviewResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link BuyerReturnPreviewEligibility}. The `eligibility` variant of
 * `BuyerReturnPreview`.
 */
export type BuyerReturnPreviewEligibility = ({
    /**
     * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility": BuyerReturnEligibilityPreview;
    /** Shape $ (Value): string.  Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution"?: BuyerReturnResolutionPreview;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligibility". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility": BuyerReturnEligibilityPreview;
}));
/**
 * Shape $ (Value): {@link BuyerReturnPreviewResolution}. The `resolution` variant of
 * `BuyerReturnPreview`.
 */
export type BuyerReturnPreviewResolution = ({
    /**
     * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility"?: BuyerReturnEligibilityPreview;
    /** Shape $ (Value): string.  Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution": BuyerReturnResolutionPreview;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "resolution". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution": BuyerReturnResolutionPreview;
}));
/**
 * Shape $ (Value): {@link BuyerReturnPreviewResponse}. A response containing `BuyerReturnPreview`
 * data.
 */
export type BuyerReturnPreviewResponse = {
    /**
     * Shape $ (Value): {@link BuyerReturnPreview}. A Return eligibility or resolution preview
     * shown to the buyer, selected by mode.
     */
    "data": BuyerReturnPreview;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemInputBundle}. The `bundle` variant of
 * `BuyerReturnReplacementLineItemInput`.
 */
export type BuyerReturnReplacementLineItemInputBundle = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The catalog source of the replacement merchandise. Value enum:
     * "bundle".
     */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "bundle". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemInputBundleInput}. The `bundle` variant of
 * `BuyerReturnReplacementLineItemInput`.
 */
export type BuyerReturnReplacementLineItemInputBundleInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. The catalog source of the replacement merchandise. Value enum:
     * "bundle".
     */
    "type": "bundle";
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "bundle". */
    "type": "bundle";
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})));
/**
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemInputVariant}. The `variant` variant of
 * `BuyerReturnReplacementLineItemInput`.
 */
export type BuyerReturnReplacementLineItemInputVariant = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The catalog source of the replacement merchandise. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "variant". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}));
/**
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemInputVariantInput}. The `variant` variant
 * of `BuyerReturnReplacementLineItemInput`.
 */
export type BuyerReturnReplacementLineItemInputVariantInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. The catalog source of the replacement merchandise. Value enum:
     * "variant".
     */
    "type": "variant";
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "variant". */
    "type": "variant";
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})));
/**
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemRequest}. A catalog variant or bundle and
 * quantity the buyer requests as a replacement in a Return resolution preview.
 */
export type BuyerReturnReplacementLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The catalog source of the replacement merchandise. Value enum:
     * "variant", "bundle".
     */
    "type": "variant" | "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<BuyerReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<BuyerReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemRequestInput}. A catalog variant or bundle
 * and quantity the buyer requests as a replacement in a Return resolution preview.
 */
export type BuyerReturnReplacementLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. The catalog source of the replacement merchandise. Value enum:
     * "variant", "bundle".
     */
    "type": "variant" | "bundle";
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<BuyerReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<BuyerReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link BuyerReturnResolution}. The refund, exchange, or other outcome of a
 * return.
 */
export type BuyerReturnResolution = {
    /**
     * Shape $ (Value): string. Value enum: "buyer_payment", "buyer_selection", "merchant_review",
     * "manual_release", "linked_effect_retry", "other".
     */
    "action_reason"?: "buyer_payment"
        | "buyer_selection"
        | "merchant_review"
        | "manual_release"
        | "linked_effect_retry"
        | "other"
        | (string & {});
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant", "integration". */
    "action_required_by"?: "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution shown to the buyer,
     * with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Value returned to the buyer. For store_credit, the
     * value issued on new gift cards. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "confirmed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnResolutionExecutionBlocker}. Shape $[] (Value):
     * {@link BuyerReturnResolutionExecutionBlocker}. Work that must complete before a Return
     * resolution can finish.
     */
    "execution_blockers": Array<BuyerReturnResolutionExecutionBlocker>;
    /**
     * Shape $ (Value): string. Reason code for a failed Return resolution, when available.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
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
    /** Shape $ (Value): string. Explanation of a failed Return resolution, when available. */
    "failure_message"?: string;
    /** Shape $ (Value): string. When the resolution became fulfilled. Format: date-time. */
    "fulfilled_at"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /** Shape $ (Value): object. Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. fulfilled means the buyer has the value: every linked Refund
     * succeeded, any balance was collected, and any replacement Order's fulfillment_status is
     * fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action",
     * "fulfilled", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can succeed now. Empty unless the parent
     * Return is open, except checkout_session. A failed resolution lists retry while it has a
     * failed effect and its failure code permits retry. It lists cancel when it never created a
     * Refund, PaymentIntent, or Order. [] enum: "checkout_session". Shape $[] (Value): string.
     * Value enum: "checkout_session".
     */
    "supported_actions": Array<"checkout_session" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution
 * shown to the buyer, with its assessed amount, applied amount, status, and reason.
 */
export type BuyerReturnResolutionAdjustment = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_adjustment_id": string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status": "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionCheckoutSessionResponse}. A response containing
 * `BuyerCheckoutSessionWithSecret` data.
 */
export type BuyerReturnResolutionCheckoutSessionResponse = {
    /**
     * Shape $ (Value): {@link BuyerCheckoutSessionWithSecret}. The checkout session with its
     * checkout credential. For hosted checkout, send the buyer to url. For embedded checkout, pass
     * checkout_auth_token to your checkout client. A session in which a buyer completes an order's
     * payment.
     */
    "data": BuyerCheckoutSessionWithSecret;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionExecutionBlocker}. Work that must complete before a
 * Return resolution can finish.
 */
export type BuyerReturnResolutionExecutionBlocker = {
    /**
     * Shape $ (Value): string. handoff_pending: The buyer has not handed off the required
     * merchandise. receipt_pending: Required merchandise has not been received.
     * inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant
     * must release the resolution. buyer_payment_pending: The buyer's balance has not been
     * collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The
     * replacement Order has not been created. fulfillment_pending: The replacement Order, in
     * linked_resource, has units not yet fulfilled. Value enum: "handoff_pending",
     * "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending",
     * "refund_pending", "replacement_order_pending", "fulfillment_pending".
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
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
 * resolution, including returned items, replacements, adjustments, and the amounts to refund or
 * collect.
 */
export type BuyerReturnResolutionPreview = {
    /**
     * Shape $ (Value): Array of {@link BuyerReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution shown to the buyer,
     * with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "based_on_return_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "calculated_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionResponse}. A response containing
 * `BuyerReturnResolution` data.
 */
export type BuyerReturnResolutionResponse = {
    /**
     * Shape $ (Value): {@link BuyerReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data": BuyerReturnResolution;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerReturnResponse}. A response containing `BuyerReturn` data. */
export type BuyerReturnResponse = {
    /** Shape $ (Value): {@link BuyerReturn}. A request to send purchased items back. */
    "data": BuyerReturn;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerSavePaymentMethodResponse}. A response containing
 * `BuyerPaymentMethodWithSetup` data.
 */
export type BuyerSavePaymentMethodResponse = {
    /**
     * Shape $ (Value): {@link BuyerPaymentMethodWithSetup}. The saved payment method, with
     * `client_setup` when the buyer must still complete processor setup before the payment method
     * can be used. A customer's saved payment details.
     */
    "data": BuyerPaymentMethodWithSetup;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerSelectableOrderPaymentIntent}. A payment intent a buyer can pay on
 * an order, with its status, amounts, payment collection details, and last payment error.
 */
export type BuyerSelectableOrderPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link BuyerPaymentErrorSummary}. Most recent payment failure, when one is
     * recorded. Why a payment attempt failed: a normalized `code`, a message, when it failed, and
     * recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /**
     * Shape $ (Value): {@link BuyerPaymentCollection}. Client setup details for collecting this
     * payment. What a client needs to collect payment for a buyer's order. The `stripe` field
     * holds the Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
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
     * Shape $ (Value): {@link MoneyValue}. Portion of this payment's amount allocated to a tip.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/** Shape $ (Value): {@link BuyerShipment}. A shipment carrying fulfilled order items. */
export type BuyerShipment = {
    /** Shape $ (Value): string. Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. When the shipment was delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string. Whether the shipment sends items to the buyer or returns items to
     * the merchant. Value enum: "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /** Shape $ (Value): string. Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): string. Carrier handoff timestamp for outbound and return shipments, using
     * the recorded shipped_at when no separate handoff timestamp exists. For return shipments,
     * this can satisfy an after_handoff execution gate for the declared return_line_items. Format:
     * date-time.
     */
    "handed_off_at"?: string;
    /** Shape $ (Value): string. Order whose items are transported by the shipment. */
    "order_id": string;
    /**
     * Shape $ (Value): integer. Total number of packages attached to the shipment, including
     * voided packages. Format: int32. minimum: 0.
     */
    "package_count": number;
    /**
     * Shape $ (Value): string. Return associated with this shipment, when its direction is return.
     */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Return lines and
     * quantities allocated to this return shipment. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. Stable identifier of the shipment. */
    "shipment_id": string;
    /**
     * Shape $ (Value): string. When the shipment was shipped, in RFC3339 format. Format:
     * date-time.
     */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. Read-only shipment state derived from the shipment's package
     * states. An empty shipment remains a created draft. - `created`: The shipment leg exists but
     * has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting
     * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`:
     * The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
     * is on its final delivery route. - `delivered`: The carrier reported successful delivery. -
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
    /** Shape $ (Value): string. Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic shipment version for expected_version checks. Use
     * an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link BuyerShipmentListResponse}. A page of `BuyerShipment` objects. */
export type BuyerShipmentListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerShipment}. Shape $[] (Value): {@link BuyerShipment}. A
     * shipment carrying fulfilled order items.
     */
    "data": Array<BuyerShipment>;
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
    "request_id": string;
};
