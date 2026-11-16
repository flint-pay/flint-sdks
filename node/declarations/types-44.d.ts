import type { Address, AddressPreviousAttributes, AddressRequest, AddressRequestInput } from './types-0.js';
import type { DeliverySelectionRecipientRequest, DeliverySelectionRecipientRequestInput } from './types-24.js';
import type { MoneyValue, MoneyValueInput, MoneyValuePreviousAttributes } from './types-42.js';
import type { SubscriptionServiceLocationRequest } from './types-70.js';
import type { SubscriptionDeliveryDestinationRequestInput } from './types-67.js';
import type { DeliveryRecipientResource, DeliveryRecipientResourcePreviousAttributes } from './types-23.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-41.js';
import type { PartnerWebhookEnvelope } from './types-49.js';
import type { WebhookOrderEdit, WebhookOrder } from './types-77.js';
import type { ResponseMeta } from './types-60.js';
import type { CreateOrderLineItemRequest, CreateOrderLineItemRequestInput } from './types-11.js';
import type { RefundCharge, RefundDestinations, RefundChargeInput, RefundDestinationsInput } from './types-58.js';
import type { InputValue } from '../runtime.js';
import type { CheckoutBuyerContactPreviousAttributes } from './types-5.js';
import type { CustomFieldAnswerPreviousAttributes } from './types-15.js';
import type { DeferredPromotionPreviousAttributes } from './types-17.js';
import type {
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedPaymentIntentSummaryPreviousAttributes,
    ExpandedSubscriptionPlanSummaryPreviousAttributes,
    ExpandedSubscriptionSummaryPreviousAttributes
} from './types-26.js';
import type { FulfillmentPreviousAttributes } from './types-27.js';
import type { InventoryRoutingSourcePreviousAttributes } from './types-33.js';
import type { OrderAuthorizationAmountsPreviousAttributes, OrderChargePreviousAttributes } from './types-43.js';
import type {
    OrderLineItemPreviousAttributes,
    OrderReturnCreditSettlementPreviousAttributes,
    OrderSettlementAmountsPreviousAttributes
} from './types-45.js';
import type { OrderTaxPreviousAttributes } from './types-46.js';
import type { PricingAmountsPreviousAttributes } from './types-55.js';
import type { TicketedEventPreviousAttributes, TipPreviousAttributes } from './types-73.js';
/** Where an order is delivered: the address, the recipient, and where the destination came from. */
export type OrderDeliveryDestination = {
    /**
     * Address the order's items are delivered to. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address": Address;
    /**
     * Delivery selection that controls this destination, when checkout collected it. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "delivery_selection_id"?: string;
    /** Time payment froze this destination. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "frozen_at"?: string;
    /**
     * Who receives the order. Omitted when no recipient was saved. The name and phone number of
     * the person receiving an order delivery.
     */
    "recipient"?: OrderDeliveryDestinationRecipient;
    /** Where the destination came from. Value enum: "delivery_selection", "api", "dashboard". */
    "source": "delivery_selection" | "api" | "dashboard" | (string & {});
};
export type OrderDeliveryDestinationPreviousAttributes = {
    /**
     * Address the order's items are delivered to. anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null));
    /**
     * Delivery selection that controls this destination, when checkout collected it. anyOf[1]
     * (Value): string. Delivery selection that controls this destination, when checkout collected
     * it. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     */
    "delivery_selection_id"?: ((string) | (null));
    /**
     * Time payment froze this destination. anyOf[1] (Value): string. Time payment froze this
     * destination. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "frozen_at"?: ((string) | (null));
    /**
     * Who receives the order. Omitted when no recipient was saved. anyOf[1] (Value): {@link
     * OrderDeliveryDestinationRecipientPreviousAttributes}. anyOf[2] (Value): null.
     */
    "recipient"?: ((OrderDeliveryDestinationRecipientPreviousAttributes) | (null));
    /**
     * Where the destination came from. Value enum: "delivery_selection", "api", "dashboard".
     * anyOf[1] (Value): string. Where the destination came from. Value enum: "delivery_selection",
     * "api", "dashboard". anyOf[2] (Value): null.
     */
    "source"?: (("delivery_selection" | "api" | "dashboard" | (string & {})) | (null));
};
/** The name and phone number of the person receiving an order delivery. */
export type OrderDeliveryDestinationRecipient = {
    /** Name of the person receiving the order. maxLength: 255. */
    "name"?: string;
    /** Phone number for contacting the recipient about the delivery. maxLength: 30. */
    "phone"?: string;
};
export type OrderDeliveryDestinationRecipientPreviousAttributes = {
    /**
     * Name of the person receiving the order. anyOf[1] (Value): string. Name of the person
     * receiving the order. maxLength: 255. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Phone number for contacting the recipient about the delivery. anyOf[1] (Value): string.
     * Phone number for contacting the recipient about the delivery. maxLength: 30. anyOf[2]
     * (Value): null.
     */
    "phone"?: ((string) | (null));
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
     * Address to deliver the order's items to. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address": AddressRequest;
    /**
     * Who receives the order. The recipient name and phone you supply for an order delivery. Send
     * null to clear a field. minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequest;
};
/**
 * The delivery destination you set when creating or updating an order, with an address and an
 * optional recipient.
 */
export type OrderDeliveryDestinationRequestInput = {
    /**
     * Address to deliver the order's items to. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address": AddressRequestInput;
    /**
     * Who receives the order. The recipient name and phone you supply for an order delivery. Send
     * null to clear a field. minProperties: 1.
     */
    "recipient"?: OrderDeliveryDestinationRecipientRequestInput;
};
/**
 * Complete delivery preference to quote and select together with the order's delivery charge and
 * inventory hold.
 */
export type OrderDeliveryRequest = {
    /**
     * The exact delivery method to quote and select. Flint refuses an unavailable method instead
     * of choosing another. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * Address to serve, supplied directly or selected from the order customer's saved addresses.
     * The resolved address is returned as delivery_destination. Where to deliver a subscription: a
     * saved customer address by ID, or a new address.
     */
    "destination": SubscriptionServiceLocationRequest;
    /**
     * Optional price guard. A changed delivery amount returns delivery_requote_required with the
     * current amount in details, without changing the order, selection or hold. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
    /**
     * Merchant cart reservations to credit in the quote and adopt atomically into the selected
     * hold. Only matching held item and location units are adopted; unused and committed units
     * stay with their source reservation. Remaining demand uses available stock. Ineligible IDs
     * are refused as not found. maxItems: 100. [] (Value): string. minLength: 1. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Name, email and phone for the person receiving this delivery. Recipient details you supply
     * with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequest;
    /** How the selected method delivers the order. Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
};
/**
 * Complete delivery preference to quote and select together with the order's delivery charge and
 * inventory hold.
 */
export type OrderDeliveryRequestInput = {
    /**
     * The exact delivery method to quote and select. Flint refuses an unavailable method instead
     * of choosing another. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * Address to serve, supplied directly or selected from the order customer's saved addresses.
     * The resolved address is returned as delivery_destination. Where to deliver a subscription: a
     * saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /**
     * Optional price guard. A changed delivery amount returns delivery_requote_required with the
     * current amount in details, without changing the order, selection or hold. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValueInput;
    /**
     * Merchant cart reservations to credit in the quote and adopt atomically into the selected
     * hold. Only matching held item and location units are adopted; unused and committed units
     * stay with their source reservation. Remaining demand uses available stock. Ineligible IDs
     * are refused as not found. maxItems: 100. [] (Value): string. minLength: 1. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Name, email and phone for the person receiving this delivery. Recipient details you supply
     * with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequestInput;
    /** How the selected method delivers the order. Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery";
};
/**
 * Method, type and recipient of governing_delivery_selection_id. delivery_destination contains the
 * resolved address. These values describe the same selection.
 */
export type OrderDeliverySummary = {
    /**
     * Method used by governing_delivery_selection_id. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * Name, email and phone of the recipient recorded by the governing selection. The person
     * receiving a delivery selection, with optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliveryRecipientResource;
    /**
     * How the governing selection delivers this order. Value enum: "shipment", "local_delivery".
     */
    "type": "shipment" | "local_delivery" | (string & {});
};
export type OrderDeliverySummaryPreviousAttributes = {
    /**
     * Method used by governing_delivery_selection_id. anyOf[1] (Value): string. Method used by
     * governing_delivery_selection_id. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
     * (Value): null.
     */
    "delivery_method_id"?: ((string) | (null));
    /**
     * Name, email and phone of the recipient recorded by the governing selection. anyOf[1]
     * (Value): {@link DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
    /**
     * How the governing selection delivers this order. Value enum: "shipment", "local_delivery".
     * anyOf[1] (Value): string. How the governing selection delivers this order. Value enum:
     * "shipment", "local_delivery". anyOf[2] (Value): null.
     */
    "type"?: (("shipment" | "local_delivery" | (string & {})) | (null));
};
/**
 * A discount applied to an order, with its amount, status, and the line items and charges it
 * covers. It comes from a manual discount or a promotion.
 */
export type OrderDiscount = {
    /**
     * Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Amount the discount took off. It is less than `amount_money` when a limit applies, such as a
     * discount that would take the order below zero. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Name the buyer sees for the discount. */
    "customer_facing_name"?: string;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * IDs of the charges this discount reduces. [] (Value): string. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids": Array<string>;
    /**
     * Order discount ID. It starts with ad_. Pass it to POST
     * /v1/orders/{order_id}/discounts/remove to remove the discount. Example:
     * "ad_01KEZF7C00T30DH97GR0A9BF31".
     */
    "order_discount_id": string;
    /** ID of the order the discount applies to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids": Array<string>;
    /**
     * Promotion code used to create this discount. Present only when source is promotion and a
     * code was used.
     */
    "promotion_code"?: string;
    /**
     * Promotion that created this discount. Present only when source is promotion. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string;
    /**
     * Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit",
     * "proration", "prepaid_delivery".
     */
    "source"?: "manual" | "promotion" | "plan_change_credit" | "proration" | "prepaid_delivery" | (string & {});
    /** Redemption state of the discount. Value enum: "pending", "redeemed", "canceled". */
    "status": "pending" | "redeemed" | "canceled" | (string & {});
};
export type OrderDiscountPreviousAttributes = {
    /**
     * Discount amount before limits apply, such as 20% of $100 resolving to $20. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Amount the discount took off. It is less than `amount_money` when a limit applies, such as a
     * discount that would take the order below zero. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "applied_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name the buyer sees for the discount. anyOf[1] (Value): string. Name the buyer sees for the
     * discount. anyOf[2] (Value): null.
     */
    "customer_facing_name"?: ((string) | (null));
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge". anyOf[1] (Value): string. Which part of the order the discount reduces.
     * Value enum: "order", "line_item", "service_charge". anyOf[2] (Value): null.
     */
    "discount_class"?: (("order" | "line_item" | "service_charge" | (string & {})) | (null));
    /**
     * IDs of the charges this discount reduces. anyOf[1] (Value): Array of string. IDs of the
     * charges this discount reduces. anyOf[1][] (Value): string. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     */
    "order_charge_ids"?: ((Array<string>) | (null));
    /**
     * Order discount ID. It starts with ad_. Pass it to POST
     * /v1/orders/{order_id}/discounts/remove to remove the discount. anyOf[1] (Value): string.
     * Order discount ID. It starts with ad_. Pass it to POST
     * /v1/orders/{order_id}/discounts/remove to remove the discount. Example:
     * "ad_01KEZF7C00T30DH97GR0A9BF31". anyOf[2] (Value): null.
     */
    "order_discount_id"?: ((string) | (null));
    /**
     * ID of the order the discount applies to. anyOf[1] (Value): string. ID of the order the
     * discount applies to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * IDs of the order line items this discount applies to. anyOf[1] (Value): Array of string. IDs
     * of the order line items this discount applies to. anyOf[1][] (Value): string. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     */
    "order_line_item_ids"?: ((Array<string>) | (null));
    /**
     * Promotion code used to create this discount. Present only when source is promotion and a
     * code was used. anyOf[1] (Value): string. Promotion code used to create this discount.
     * Present only when source is promotion and a code was used. anyOf[2] (Value): null.
     */
    "promotion_code"?: ((string) | (null));
    /**
     * Promotion that created this discount. Present only when source is promotion. anyOf[1]
     * (Value): string. Promotion that created this discount. Present only when source is
     * promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". anyOf[2] (Value): null.
     */
    "promotion_id"?: ((string) | (null));
    /**
     * Where the discount came from. Value enum: "manual", "promotion", "plan_change_credit",
     * "proration", "prepaid_delivery". anyOf[1] (Value): string. Where the discount came from.
     * Value enum: "manual", "promotion", "plan_change_credit", "proration", "prepaid_delivery".
     * anyOf[2] (Value): null.
     */
    "source"?: (("manual" | "promotion" | "plan_change_credit" | "proration" | "prepaid_delivery" | (string & {}))
        | (null));
    /**
     * Redemption state of the discount. Value enum: "pending", "redeemed", "canceled". anyOf[1]
     * (Value): string. Redemption state of the discount. Value enum: "pending", "redeemed",
     * "canceled". anyOf[2] (Value): null.
     */
    "status"?: (("pending" | "redeemed" | "canceled" | (string & {})) | (null));
};
/**
 * The quantity of one inventory item that each unit of a draft order line item uses, supplied when
 * creating the line item.
 */
export type OrderDraftLineItemInventoryDemandRequest = {
    /**
     * ID of the inventory item each unit of the line item uses. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
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
export type OrderDraftLineItemTaxCalculationRequestModelInput = {
    /**
     * The tax for this line item or charge, one component per jurisdiction and tax type. Each is a
     * `percentage` tax. minItems: 1. [] (Value): {@link OrderDraftTaxComponentRequestModelInput}.
     * One tax component of a draft line item calculation, with its jurisdiction, tax type, and
     * percentage or flat amount.
     */
    "components": Array<OrderDraftTaxComponentRequestModelInput>;
    /**
     * Whether the price this tax applies to already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/**
 * Tax settings you supply for a draft order line item: its tax category, whether it is taxable,
 * and an optional tax calculation.
 */
export type OrderDraftLineItemTaxRequestModelInput = {
    /**
     * The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax
     * calculation you supply for a draft order line item, made of tax components and a price mode.
     */
    "calculation"?: OrderDraftLineItemTaxCalculationRequestModelInput;
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
    /** Whether the line item is subject to tax. */
    "taxable"?: boolean;
};
/**
 * One tax component of a draft line item calculation, with its jurisdiction, tax type, and
 * percentage or flat amount.
 */
export type OrderDraftTaxComponentRequestModelInput = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default:
     * "percentage". Value enum: "percentage".
     */
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
     * The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft
     * tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": OrderDraftTaxJurisdictionRequestModelInput;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum:
     * 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst",
     * "hst", "pst", "qst".
     */
    "tax_type": "sales_tax" | "use_tax" | "vat" | "gst" | "hst" | "pst" | "qst";
    /**
     * Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum:
     * "reverse_charge".
     */
    "taxability_reason"?: "reverse_charge";
})
    & ({
    "flat_money"?: never;
});
/**
 * The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and
 * country.
 */
export type OrderDraftTaxJurisdictionRequestModelInput = {
    /**
     * Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`,
     * starting with a letter or digit. Reports group tax by this code. minLength: 1.
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
    /** Name of the jurisdiction, up to 200 characters. minLength: 1. */
    "name": string;
    /**
     * Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase
     * letters or digits), required below country level and omitted at country level. minLength: 1.
     */
    "state"?: string;
};
/**
 * Nested child of an order with frozen item changes, balance and refund amounts. A pending edit
 * changes the order only when its balance payment succeeds. Refund completion is tracked on the
 * refunds.
 */
export type OrderEdit = {
    /**
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. [] (Value): {@link OrderEditLineAddition}. An order line
     * added by the enclosing edit, with its value frozen at creation.
     */
    "add_line_items": Array<OrderEditLineAddition>;
    /**
     * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit
     * added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "added_total_money": MoneyValue;
    /**
     * What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_due_money": MoneyValue;
    /**
     * When the edit was canceled. `null` when the edit is not canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "canceled_at": string | null;
    /**
     * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
     * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
     */
    "cancellation_reason": "merchant_request"
        | "expired"
        | "payment_disputed"
        | "payment_returned"
        | null
        | (string & {})
        | null;
    /**
     * Charges released by this edit, frozen at creation. Empty when no charges were released. []
     * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order charge,
     * and the part refunded to the buyer.
     */
    "charge_refunds": Array<OrderEditChargeRefund>;
    /**
     * When the item changes were applied to the order. `null` when the edit is pending or
     * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "completed_at": string | null;
    /** When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
     * balance. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | null;
    /**
     * Internal merchant note. Omitted from buyer and webhook payloads and refund messages.
     * maxLength: 500.
     */
    "note"?: string;
    /**
     * Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id": string;
    /** The order this edit belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
     * when the edit has no balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string | null;
    /**
     * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
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
        | (string & {});
    /**
     * Refunds created for this edit. Empty when no refund is needed or processing has not created
     * it yet. [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * Removed units and their refund amounts frozen at creation. [] (Value): {@link
     * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount frozen
     * at creation. The enclosing edit identifies the order.
     */
    "remove_line_items": Array<OrderEditLineRemoval>;
    /**
     * The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "removed_total_money": MoneyValue;
    /**
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     */
    "status": "pending" | "completed" | "canceled" | (string & {});
    /**
     * Contains cancel while pending and the payment is neither processing nor succeeded. Contains
     * retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint
     * is still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". [] (Value): string. Value enum: "cancel", "retry".
     */
    "supported_actions": Array<"cancel" | "retry" | (string & {})>;
    /**
     * Frozen refund money not covered by pending or succeeded allocations from refunds linked to
     * this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unrefunded_money": MoneyValue;
    /**
     * The counter advances when status, payment_intent_id, completed_at, canceled_at or
     * cancellation_reason change. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type OrderEditCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order_edit.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order_edit.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order_edit.canceled";
});
/**
 * The `order_edit.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderEditCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. status (Optional): string or null. Pending
         * while waiting for a balance payment, completed once the item changes are applied, or
         * canceled when it ends without changing the order. Refund processing has its own status
         * on each refund. Value enum: "pending", "completed", "canceled". status.anyOf[1] (Value):
         * string. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Contains cancel while pending and the payment is neither processing nor succeeded.
         * Contains retry when unrefunded_money is positive and no linked refund is pending. Empty
         * while Flint is still processing the original refund before any linked refund exists;
         * retry becomes available if that processing ends without a refund. Independent of caller
         * permissions. [] enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of
         * string. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order_edit.canceled". */
    "event_type"?: "order_edit.canceled";
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
 * The `order_edit.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderEditCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. status (Optional): string or null. Pending
         * while waiting for a balance payment, completed once the item changes are applied, or
         * canceled when it ends without changing the order. Refund processing has its own status
         * on each refund. Value enum: "pending", "completed", "canceled". status.anyOf[1] (Value):
         * string. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Contains cancel while pending and the payment is neither processing nor succeeded.
         * Contains retry when unrefunded_money is positive and no linked refund is pending. Empty
         * while Flint is still processing the original refund before any linked refund exists;
         * retry becomes available if that processing ends without a refund. Independent of caller
         * permissions. [] enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of
         * string. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order_edit.canceled". */
    "event_type"?: "order_edit.canceled";
});
/** The value an edit releases from one order charge, and the part refunded to the buyer. */
export type OrderEditChargeRefund = {
    /**
     * The charge value released. The order no longer owes it. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** The order charge whose value is released. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". */
    "order_charge_id": string;
    /**
     * The part of amount_money refunded to the buyer. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
};
export type OrderEditChargeRefundPreviousAttributes = {
    /**
     * The charge value released. The order no longer owes it. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The order charge whose value is released. anyOf[1] (Value): string. The order charge whose
     * value is released. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * The part of amount_money refunded to the buyer. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
};
export type OrderEditCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order_edit.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order_edit.completed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order_edit.completed";
});
/**
 * The `order_edit.completed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderEditCompletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. status (Optional): string or null. Pending
         * while waiting for a balance payment, completed once the item changes are applied, or
         * canceled when it ends without changing the order. Refund processing has its own status
         * on each refund. Value enum: "pending", "completed", "canceled". status.anyOf[1] (Value):
         * string. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Contains cancel while pending and the payment is neither processing nor succeeded.
         * Contains retry when unrefunded_money is positive and no linked refund is pending. Empty
         * while Flint is still processing the original refund before any linked refund exists;
         * retry becomes available if that processing ends without a refund. Independent of caller
         * permissions. [] enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of
         * string. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order_edit.completed". */
    "event_type"?: "order_edit.completed";
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
 * The `order_edit.completed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderEditCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. status (Optional): string or null. Pending
         * while waiting for a balance payment, completed once the item changes are applied, or
         * canceled when it ends without changing the order. Refund processing has its own status
         * on each refund. Value enum: "pending", "completed", "canceled". status.anyOf[1] (Value):
         * string. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Contains cancel while pending and the payment is neither processing nor succeeded.
         * Contains retry when unrefunded_money is positive and no linked refund is pending. Empty
         * while Flint is still processing the original refund before any linked refund exists;
         * retry becomes available if that processing ends without a refund. Independent of caller
         * permissions. [] enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of
         * string. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order_edit.completed". */
    "event_type"?: "order_edit.completed";
});
export type OrderEditCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order_edit.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order_edit.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order_edit.created";
});
/**
 * The `order_edit.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderEditCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order_edit.created". */
    "event_type"?: "order_edit.created";
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
 * The `order_edit.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderEditCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order_edit.created". */
    "event_type"?: "order_edit.created";
});
/** An order line added by the enclosing edit, with its value frozen at creation. */
export type OrderEditLineAddition = {
    /** The catalog bundle, for a bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** The line's name. */
    "name": string;
    /**
     * The order line reserved by this edit. While pending, the line isn't on the order yet.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * ID of the catalog product the item was sold from. Absent on bundle and custom lines.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Units to add. Format: int64.
     * minimum: 1.
     */
    "quantity": number;
    /** The line's SKU, when it has one. */
    "sku"?: string;
    /**
     * Unit price times quantity, including modifiers. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the line, calculated through the order's tax settings. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** The kind of line, as in the request. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * The unit price from the catalog, price list, customer pricing or request. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** The catalog variant, for a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
};
export type OrderEditLineAdditionPreviousAttributes = {
    /**
     * The catalog bundle, for a bundle line. anyOf[1] (Value): string. The catalog bundle, for a
     * bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Always zero: promotions aren't re-evaluated for added lines. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /** The line's name. anyOf[1] (Value): string. The line's name. anyOf[2] (Value): null. */
    "name"?: ((string) | (null));
    /**
     * The order line reserved by this edit. While pending, the line isn't on the order yet.
     * anyOf[1] (Value): string. The order line reserved by this edit. While pending, the line
     * isn't on the order yet. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * ID of the catalog product the item was sold from. Absent on bundle and custom lines.
     * anyOf[1] (Value): string. ID of the catalog product the item was sold from. Absent on bundle
     * and custom lines. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Units to add. anyOf[1]
     * (Value): integer. Whole-number quantity; fractional quantities are not supported. Units to
     * add. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * The line's SKU, when it has one. anyOf[1] (Value): string. The line's SKU, when it has one.
     * anyOf[2] (Value): null.
     */
    "sku"?: ((string) | (null));
    /**
     * Unit price times quantity, including modifiers. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tax on the line, calculated through the order's tax settings. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * What the line costs: subtotal_money minus discount_money plus additive tax. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The kind of line, as in the request. Value enum: "variant", "bundle", "custom". anyOf[1]
     * (Value): string. The kind of line, as in the request. Value enum: "variant", "bundle",
     * "custom". anyOf[2] (Value): null.
     */
    "type"?: (("variant" | "bundle" | "custom" | (string & {})) | (null));
    /**
     * The unit price from the catalog, price list, customer pricing or request. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The catalog variant, for a variant line. anyOf[1] (Value): string. The catalog variant, for
     * a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     */
    "variant_id"?: ((string) | (null));
};
/**
 * Removed whole units of an order line and their refund amount frozen at creation. The enclosing
 * edit identifies the order.
 */
export type OrderEditLineRemoval = {
    /**
     * The original order line whose units were removed. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed,
     * without changing the original line quantity. Format: int64. minimum: 1.
     */
    "quantity": number;
    /**
     * The part of total_money refunded to the buyer, frozen when the edit was created. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * The value of these units, including their original discount and tax shares, frozen when the
     * edit was created. The order no longer owes it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
export type OrderEditLineRemovalPreviousAttributes = {
    /**
     * The original order line whose units were removed. anyOf[1] (Value): string. The original
     * order line whose units were removed. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2]
     * (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed,
     * without changing the original line quantity. anyOf[1] (Value): integer. Whole-number
     * quantity; fractional quantities are not supported. Whole line units removed, without
     * changing the original line quantity. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * The part of total_money refunded to the buyer, frozen when the edit was created. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The value of these units, including their original discount and tax shares, frozen when the
     * edit was created. The order no longer owes it. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/** A page of `OrderEdit` objects. */
export type OrderEditListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderEdit}. Nested child of an order with frozen item changes, balance and refund amounts. A
     * pending edit changes the order only when its balance payment succeeds. Refund completion is
     * tracked on the refunds.
     */
    "data": Array<OrderEdit>;
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
/** A calculation against an order version. Previewing does not create an order edit. */
export type OrderEditPreview = {
    /**
     * The requested additions, in request order, priced and taxed. Empty when the request adds
     * nothing. [] (Value): {@link OrderEditPreviewAddition}. A line the preview would add, priced
     * and taxed as it would be added to the order.
     */
    "add_line_items": Array<OrderEditPreviewAddition>;
    /**
     * The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "added_total_money": MoneyValue;
    /**
     * What the added lines cost beyond the removed value and released charges. At most one of
     * refund_money and amount_due_money is above zero, and refund_money minus amount_due_money
     * equals removed_total_money plus the charges' amount_money minus added_total_money. An edit
     * with an amount due can't be committed yet. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_due_money": MoneyValue;
    /**
     * The order version this calculation read. Eligibility and the refundable amount can change
     * afterward, so calculate again before relying on it. Format: int64.
     */
    "based_on_order_version": number;
    /** When this preview was calculated. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "calculated_at": string;
    /**
     * The charges that would be released, with the value and refund for each. Empty when the
     * request lists no charges. [] (Value): {@link OrderEditChargeRefund}. The value an edit
     * releases from one order charge, and the part refunded to the buyer.
     */
    "charge_refunds": Array<OrderEditChargeRefund>;
    /**
     * The order whose unassigned units were evaluated. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Money that would go back to the buyer. The removed value and released charges pay for added
     * lines first, removals in request order and then charges, and the rest is refunded. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * The requested removals, in request order, each with its value and refund. [] (Value): {@link
     * OrderEditRemoval}. The units of one order line that the preview would remove, with their
     * refund.
     */
    "remove_line_items": Array<OrderEditRemoval>;
    /**
     * The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "removed_total_money": MoneyValue;
};
/** A line the preview would add, priced and taxed as it would be added to the order. */
export type OrderEditPreviewAddition = {
    /** The catalog bundle, for a bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** The line's name. */
    "name": string;
    /**
     * ID of the catalog product the item was sold from. Absent on bundle and custom lines.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Units to add. Format: int64.
     * minimum: 1.
     */
    "quantity": number;
    /** The line's SKU, when it has one. */
    "sku"?: string;
    /**
     * Unit price times quantity, including modifiers. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the line, calculated through the order's tax settings. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** The kind of line, as in the request. Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * The unit price from the catalog, price list, customer pricing or request. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** The catalog variant, for a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
};
/** Compute a paid-order removal without reserving quantities or refund capacity. */
export type OrderEditPreviewRequest = {
    /**
     * Lines to add after the removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only lines Flint can fulfill can be added: variant, bundle, and custom lines with a delivery
     * requirement. Added lines are priced and taxed as usual, without promotions, and don't join
     * the order's delivery selection. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreateOrderLineItemRequest}. A line item to add to an order: a catalog variant, a bundle, or
     * a custom item with a name and unit price.
     */
    "add_line_items"?: Array<CreateOrderLineItemRequest>;
    /**
     * Charges to release. Omitting amount_money releases the charge's remaining refundable amount.
     * Charges you don't list are unchanged. [] (Value): {@link RefundCharge}. An order charge to
     * refund when creating a refund, with an optional amount to refund.
     */
    "charge_refunds"?: Array<RefundCharge>;
    /**
     * Where each original payment is refunded to, with the same defaults as a refund. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
    /**
     * The paid order to edit. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Reason for removing the items. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
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
        | (string & {});
    /**
     * Original line units to remove. Each line can appear only once. Send remove_line_items,
     * add_line_items, or both. minItems: 1. maxItems: 100. [] (Value): {@link
     * OrderEditRemovalRequest}. An order line and the whole units to take off it.
     */
    "remove_line_items"?: Array<OrderEditRemovalRequest>;
};
/** Compute a paid-order removal without reserving quantities or refund capacity. */
export type OrderEditPreviewRequestInput = {
    /**
     * Lines to add after the removals, in the same shape as POST /v1/orders/{order_id}/line-items.
     * Only lines Flint can fulfill can be added: variant, bundle, and custom lines with a delivery
     * requirement. Added lines are priced and taxed as usual, without promotions, and don't join
     * the order's delivery selection. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "add_line_items"?: Array<CreateOrderLineItemRequestInput>;
    /**
     * Charges to release. Omitting amount_money releases the charge's remaining refundable amount.
     * Charges you don't list are unchanged. [] (Value): {@link RefundChargeInput}. An order charge
     * to refund when creating a refund, with an optional amount to refund.
     */
    "charge_refunds"?: Array<RefundChargeInput>;
    /**
     * Where each original payment is refunded to, with the same defaults as a refund. Default
     * refund destinations for payment intent and gift card redemption allocations planned by
     * Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
    /**
     * The paid order to edit. minLength: 1. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Reason for removing the items. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
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
        | "out_of_stock";
    /**
     * Original line units to remove. Each line can appear only once. Send remove_line_items,
     * add_line_items, or both. minItems: 1. maxItems: 100. [] (Value): {@link
     * OrderEditRemovalRequestInput}. An order line and the whole units to take off it.
     */
    "remove_line_items"?: Array<OrderEditRemovalRequestInput>;
};
/** The result of an order edit preview. */
export type OrderEditPreviewResponse = {
    /**
     * The calculated removal and its refund. A calculation against an order version. Previewing
     * does not create an order edit.
     */
    "data": OrderEditPreview;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type OrderEditPreviewsCreateParams = (InputValue<OrderEditPreviewRequestInput>)
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
/** The units of one order line that the preview would remove, with their refund. */
export type OrderEditRemoval = {
    /** The order line the units come off. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units requested
     * for removal, including all components of a bundle unit. Format: int64.
     */
    "quantity": number;
    /**
     * The part of total_money that would be refunded to the buyer. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units currently
     * unassigned across every fulfillment component, before this requested removal. Format: int64.
     */
    "removable_quantity": number;
    /**
     * The value of these units at the price the buyer paid, including their share of discounts and
     * tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/** An order line and the whole units to take off it. */
export type OrderEditRemovalRequest = {
    /**
     * An existing line on this order. minLength: 1. pattern: ^li_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units to remove,
     * including all components of a bundle unit. Format: int64. minimum: 1.
     */
    "quantity": number;
};
/** An order line and the whole units to take off it. */
export type OrderEditRemovalRequestInput = OrderEditRemovalRequest;
/** A response containing `OrderEdit` data. */
export type OrderEditResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Nested child of an order
     * with frozen item changes, balance and refund amounts. A pending edit changes the order only
     * when its balance payment succeeds. Refund completion is tracked on the refunds.
     */
    "data": OrderEdit;
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
export type OrderEditUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order_edit.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order_edit.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order_edit.updated";
});
/**
 * The `order_edit.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type OrderEditUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. status (Optional): string or null. Pending
         * while waiting for a balance payment, completed once the item changes are applied, or
         * canceled when it ends without changing the order. Refund processing has its own status
         * on each refund. Value enum: "pending", "completed", "canceled". status.anyOf[1] (Value):
         * string. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Contains cancel while pending and the payment is neither processing nor succeeded.
         * Contains retry when unrefunded_money is positive and no linked refund is pending. Empty
         * while Flint is still processing the original refund before any linked refund exists;
         * retry becomes available if that processing ends without a refund. Independent of caller
         * permissions. [] enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of
         * string. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order_edit.updated". */
    "event_type"?: "order_edit.updated";
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
 * The `order_edit.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type OrderEditUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookOrderEdit}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `note`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.add_line_items (Optional): Array of {@link
     * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order, with
     * their quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their
     * quantities and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineAdditionPreviousAttributes}. previous_attributes.add_line_items.anyOf[2]
     * (Value): null. previous_attributes.added_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
     * add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string. When the edit was
     * canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled.
     * `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link
     * OrderEditChargeRefundPreviousAttributes} or null. Charges released by this edit, frozen at
     * creation. Empty when no charges were released. previous_attributes.charge_refunds.anyOf[1]
     * (Value): Array of {@link OrderEditChargeRefundPreviousAttributes}. Charges released by this
     * edit, frozen at creation. Empty when no charges were released.
     * previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefundPreviousAttributes}. previous_attributes.charge_refunds.anyOf[2]
     * (Value): null. previous_attributes.completed_at (Optional): string or null. When the item
     * changes were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string. When the item changes were
     * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string. When Flint cancels the edit if the
     * balance isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. The payment intent that
     * collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
     * balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2] (Value):
     * null. previous_attributes.reason (Optional): string or null. Reason for the edit and its
     * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[1] (Value): string. Reason for the edit and its refund.
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * previous_attributes.reason.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. Refunds created for this edit. Empty when no refund is
     * needed or processing has not created it yet. previous_attributes.refund_ids.anyOf[1]
     * (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or
     * processing has not created it yet. previous_attributes.refund_ids.anyOf[1][] (Value):
     * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2]
     * (Value): null. previous_attributes.refund_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and released
     * charges pay for added lines. May be zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link
     * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
     * frozen at creation. previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at
     * creation. previous_attributes.remove_line_items.anyOf[1][] (Value): {@link
     * OrderEditLineRemovalPreviousAttributes}. previous_attributes.remove_line_items.anyOf[2]
     * (Value): null. previous_attributes.removed_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The value of the removed units: the sum of
     * remove_line_items[].total_money. previous_attributes.removed_total_money.anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. previous_attributes.removed_total_money.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Pending while waiting
     * for a balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[1] (Value): string.
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains cancel while pending and the payment is
     * neither processing nor succeeded. Contains retry when unrefunded_money is positive and no
     * linked refund is pending. Empty while Flint is still processing the original refund before
     * any linked refund exists; retry becomes available if that processing ends without a refund.
     * Independent of caller permissions. [] enum: "cancel", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Frozen refund money not covered by pending or succeeded allocations from refunds
     * linked to this edit. Failed allocations do not reduce it.
     * previous_attributes.unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.unrefunded_money.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The counter advances when status, payment_intent_id,
     * completed_at, canceled_at or cancellation_reason change.
     * previous_attributes.version.anyOf[1] (Value): integer. The counter advances when status,
     * payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
        "object": WebhookOrderEdit;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. add_line_items (Optional): Array of {@link
         * OrderEditLineAdditionPreviousAttributes} or null. Added order lines, in request order,
         * with their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
         * their quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}.
         * add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. What the added lines cost beyond the removed
         * value and released charges, tax included, frozen when the edit was created. Zero when
         * the edit had no balance. amount_due_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_due_money.anyOf[2] (Value): null. canceled_at
         * (Optional): string or null. When the edit was canceled. `null` when the edit is not
         * canceled. canceled_at.anyOf[1] (Value): string. When the edit was canceled. `null` when
         * the edit is not canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * canceled_at.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the edit was canceled. `null` when the edit is not canceled. Value enum:
         * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
         * cancellation_reason.anyOf[1] (Value): string. Why the edit was canceled. `null` when the
         * edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[2] (Value): null. charge_refunds
         * (Optional): Array of {@link OrderEditChargeRefundPreviousAttributes} or null. Charges
         * released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1] (Value): Array of {@link
         * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
         * creation. Empty when no charges were released. charge_refunds.anyOf[1][] (Value): {@link
         * OrderEditChargeRefundPreviousAttributes}. charge_refunds.anyOf[2] (Value): null.
         * completed_at (Optional): string or null. When the item changes were applied to the
         * order. `null` when the edit is pending or canceled. completed_at.anyOf[1] (Value):
         * string. When the item changes were applied to the order. `null` when the edit is pending
         * or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the edit was created.
         * created_at.anyOf[1] (Value): string. When the edit was created. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When Flint cancels the edit if the balance isn't paid.
         * `null` when the edit never had a balance. expires_at.anyOf[1] (Value): string. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2]
         * (Value): null. order_edit_id (Optional): string or null. Stable ID of this order edit.
         * order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. The order
         * this edit belongs to. order_id.anyOf[1] (Value): string. The order this edit belongs to.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. The payment intent that collects
         * amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance,
         * and for a moment while Flint is still creating it. payment_intent_id.anyOf[1] (Value):
         * string. The payment intent that collects amount_due_money. Confirm it to pay the
         * balance. `null` when the edit has no balance, and for a moment while Flint is still
         * creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2]
         * (Value): null. reason (Optional): string or null. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[1] (Value): string. Reason for the edit and its refund.
         * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
         * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
         * "customer_changed_mind", "better_price_found", "accidental_order", "other",
         * "out_of_stock". reason.anyOf[2] (Value): null. refund_ids (Optional): Array of string or
         * null. Refunds created for this edit. Empty when no refund is needed or processing has
         * not created it yet. refund_ids.anyOf[1] (Value): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Money to refund after the removed value and
         * released charges pay for added lines. May be zero; an edit with no refund money creates
         * no refund. refund_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemovalPreviousAttributes} or null. Removed units and their refund amounts
         * frozen at creation. remove_line_items.anyOf[1] (Value): Array of {@link
         * OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen
         * at creation. remove_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineRemovalPreviousAttributes}. remove_line_items.anyOf[2] (Value): null.
         * removed_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. The value
         * of the removed units: the sum of remove_line_items[].total_money.
         * removed_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * removed_total_money.anyOf[2] (Value): null. status (Optional): string or null. Pending
         * while waiting for a balance payment, completed once the item changes are applied, or
         * canceled when it ends without changing the order. Refund processing has its own status
         * on each refund. Value enum: "pending", "completed", "canceled". status.anyOf[1] (Value):
         * string. Pending while waiting for a balance payment, completed once the item changes are
         * applied, or canceled when it ends without changing the order. Refund processing has its
         * own status on each refund. Value enum: "pending", "completed", "canceled".
         * status.anyOf[2] (Value): null. supported_actions (Optional): Array of string or null.
         * Contains cancel while pending and the payment is neither processing nor succeeded.
         * Contains retry when unrefunded_money is positive and no linked refund is pending. Empty
         * while Flint is still processing the original refund before any linked refund exists;
         * retry becomes available if that processing ends without a refund. Independent of caller
         * permissions. [] enum: "cancel", "retry". supported_actions.anyOf[1] (Value): Array of
         * string. Contains cancel while pending and the payment is neither processing nor
         * succeeded. Contains retry when unrefunded_money is positive and no linked refund is
         * pending. Empty while Flint is still processing the original refund before any linked
         * refund exists; retry becomes available if that processing ends without a refund.
         * Independent of caller permissions. [] enum: "cancel", "retry".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "cancel", "retry".
         * supported_actions.anyOf[2] (Value): null. unrefunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Frozen refund money not covered by pending or
         * succeeded allocations from refunds linked to this edit. Failed allocations do not reduce
         * it. unrefunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * unrefunded_money.anyOf[2] (Value): null. version (Optional): integer or null. The
         * counter advances when status, payment_intent_id, completed_at, canceled_at or
         * cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances when
         * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with
             * their quantities and values frozen at creation. Empty when the edit added nothing.
             * anyOf[1][] (Value): {@link OrderEditLineAdditionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAdditionPreviousAttributes>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "added_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string. When the edit was canceled. `null` when the edit is not canceled. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not
             * canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request" | "expired" | "payment_disputed" | "payment_returned" | null | (string & {}))
                | (null));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link
             * OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at
             * creation. Empty when no charges were released. anyOf[1][] (Value): {@link
             * OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefundPreviousAttributes>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string. When the item changes were applied to the order.
             * `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance
             * isn't paid. `null` when the edit never had a balance. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order
             * edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * The order this edit belongs to. anyOf[1] (Value): string. The order this edit
             * belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * The payment intent that collects amount_due_money. Confirm it to pay the balance.
             * `null` when the edit has no balance, and for a moment while Flint is still creating
             * it. anyOf[1] (Value): string. The payment intent that collects amount_due_money.
             * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
             * while Flint is still creating it. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2]
             * (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value):
             * string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value):
             * null.
             */
            "reason"?: (("duplicate"
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
                | (string & {}))
                | (null));
            /**
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit.
             * Empty when no refund is needed or processing has not created it yet. anyOf[1][]
             * (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. anyOf[1] (Value):
             * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemovalPreviousAttributes}. Removed units and their refund
             * amounts frozen at creation. anyOf[1][] (Value): {@link
             * OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemovalPreviousAttributes>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Pending while waiting for a balance payment, completed once the item changes are
             * applied, or canceled when it ends without changing the order. Refund processing has
             * its own status on each refund. Value enum: "pending", "completed", "canceled".
             * anyOf[1] (Value): string. Pending while waiting for a balance payment, completed
             * once the item changes are applied, or canceled when it ends without changing the
             * order. Refund processing has its own status on each refund. Value enum: "pending",
             * "completed", "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            /**
             * Contains cancel while pending and the payment is neither processing nor succeeded.
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value):
             * Array of string. Contains cancel while pending and the payment is neither processing
             * nor succeeded. Contains retry when unrefunded_money is positive and no linked refund
             * is pending. Empty while Flint is still processing the original refund before any
             * linked refund exists; retry becomes available if that processing ends without a
             * refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][]
             * (Value): string. Value enum: "cancel", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "unrefunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The counter advances when status, payment_intent_id, completed_at, canceled_at or
             * cancellation_reason change. anyOf[1] (Value): integer. The counter advances when
             * status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order_edit.updated". */
    "event_type"?: "order_edit.updated";
});
/** The amount of an order that a gift card covers. */
export type OrderGiftCardAllocation = {
    /**
     * The amount this gift card covers. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** ID of the gift card the amount is taken from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
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
     * Order balance allocated to the selected gift cards. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "gift_card_money": MoneyValue;
    /**
     * The gift cards the allocation draws from, each with the amount it covers. Copy them from the
     * order's `gift_card_estimate`. minItems: 1. maxItems: 20. [] (Value): object. [].amount_money
     * (Required): {@link MoneyValue}. Order balance allocated to this gift card. Currency must be
     * USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. [].gift_card_id (Required): string. ID of the
     * gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_cards": Array<{
        /**
         * Order balance allocated to this gift card. Currency must be USD. Amount must be
         * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "amount_money": MoneyValue;
        /**
         * ID of the gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG".
         */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     * Order balance remaining for the payment processor. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "processor_money": MoneyValue;
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
     * Order balance allocated to the selected gift cards. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "gift_card_money": MoneyValueInput;
    /**
     * The gift cards the allocation draws from, each with the amount it covers. Copy them from the
     * order's `gift_card_estimate`. minItems: 1. maxItems: 20. [] (Value): object. [].amount_money
     * (Required): {@link MoneyValueInput}. Order balance allocated to this gift card. Currency
     * must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. [].gift_card_id (Required): string. ID
     * of the gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_cards": Array<{
        /**
         * Order balance allocated to this gift card. Currency must be USD. Amount must be
         * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "amount_money": MoneyValueInput;
        /**
         * ID of the gift card the amount is taken from. minLength: 1. maxLength: 64. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG".
         */
        "gift_card_id": string;
    }>;
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. Format: int64. minimum: 1.
     */
    "order_version": number;
    /**
     * Order balance remaining for the payment processor. Currency must be USD. Amount must be
     * nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "processor_money": MoneyValueInput;
};
export type OrderGiftCardAllocationPreviousAttributes = {
    /**
     * The amount this gift card covers. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the gift card the amount is taken from. anyOf[1] (Value): string. ID of the gift card
     * the amount is taken from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     */
    "gift_card_id"?: ((string) | (null));
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
     * The gift cards the estimate draws from, each with the amount it covers. [] (Value): {@link
     * OrderGiftCardAllocation}. The amount of an order that a gift card covers.
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
export type OrderGiftCardEstimatePreviousAttributes = {
    /**
     * Whether this allocation can be used for payment. False when a selected card needs
     * authorization or the allocation cannot cover the balance while satisfying the processor
     * minimum. anyOf[1] (Value): boolean. Whether this allocation can be used for payment. False
     * when a selected card needs authorization or the allocation cannot cover the balance while
     * satisfying the processor minimum. anyOf[2] (Value): null.
     */
    "can_pay"?: ((boolean) | (null));
    /**
     * Order balance allocated to the selected gift cards. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "gift_card_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The gift cards the estimate draws from, each with the amount it covers. anyOf[1] (Value):
     * Array of {@link OrderGiftCardAllocationPreviousAttributes}. The gift cards the estimate
     * draws from, each with the amount it covers. anyOf[1][] (Value): {@link
     * OrderGiftCardAllocationPreviousAttributes}. anyOf[2] (Value): null.
     */
    "gift_cards"?: ((Array<OrderGiftCardAllocationPreviousAttributes>) | (null));
    /**
     * Whether this estimate reserves gift-card funds. Estimates currently return false. anyOf[1]
     * (Value): boolean. Whether this estimate reserves gift-card funds. Estimates currently return
     * false. anyOf[2] (Value): null.
     */
    "is_reserved"?: ((boolean) | (null));
    /**
     * Order version used to calculate this gift card allocation. Read the order again if its
     * version changed. anyOf[1] (Value): integer. Order version used to calculate this gift card
     * allocation. Read the order again if its version changed. Format: int64. anyOf[2] (Value):
     * null.
     */
    "order_version"?: ((number) | (null));
    /**
     * Order balance remaining for the payment processor. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "processor_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/**
 * A gift card available to pay an order, with its available balance and the last four characters
 * of its code.
 */
export type OrderGiftCardSelection = {
    /**
     * The card's available balance. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "available_money": MoneyValue;
    /** ID of the gift card selected for the order. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    /** Whether the card's current code must be applied again before the order can use it. */
    "requires_authorization": boolean;
};
export type OrderGiftCardSelectionPreviousAttributes = {
    /**
     * The card's available balance. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "available_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the gift card selected for the order. anyOf[1] (Value): string. ID of the gift card
     * selected for the order. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     */
    "gift_card_id"?: ((string) | (null));
    /**
     * Last four characters of the card's current code. anyOf[1] (Value): string. Last four
     * characters of the card's current code. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * Whether the card's current code must be applied again before the order can use it. anyOf[1]
     * (Value): boolean. Whether the card's current code must be applied again before the order can
     * use it. anyOf[2] (Value): null.
     */
    "requires_authorization"?: ((boolean) | (null));
};
/** A gift card redemption applied to an order payment, with the amount, tip, and gift card. */
export type OrderGiftCardSettlement = {
    /**
     * The amount the redemption paid toward the order, not counting the tip. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the gift card the redemption spent. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** ID of the redemption that posted the spend. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". */
    "gift_card_redemption_id": string;
    /**
     * Last four characters of the code that paid. It stays the same if the gift card's code is
     * later replaced.
     */
    "last4": string;
    /**
     * The part of the redemption that paid a tip. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
export type OrderGiftCardSettlementPreviousAttributes = {
    /**
     * The amount the redemption paid toward the order, not counting the tip. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * ID of the gift card the redemption spent. anyOf[1] (Value): string. ID of the gift card the
     * redemption spent. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     */
    "gift_card_id"?: ((string) | (null));
    /**
     * ID of the redemption that posted the spend. anyOf[1] (Value): string. ID of the redemption
     * that posted the spend. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". anyOf[2] (Value): null.
     */
    "gift_card_redemption_id"?: ((string) | (null));
    /**
     * Last four characters of the code that paid. It stays the same if the gift card's code is
     * later replaced. anyOf[1] (Value): string. Last four characters of the code that paid. It
     * stays the same if the gift card's code is later replaced. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * The part of the redemption that paid a tip. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/**
 * Every physical item is handed to the buyer at this location when the order is paid. Replaces a
 * delivery selection.
 */
export type OrderHandover = {
    /**
     * Active location with a complete address where the buyer receives the goods. Tracked items
     * take stock from it, and automatic tax treats the sale as made there. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
export type OrderHandoverPreviousAttributes = {
    /**
     * Active location with a complete address where the buyer receives the goods. Tracked items
     * take stock from it, and automatic tax treats the sale as made there. anyOf[1] (Value):
     * string. Active location with a complete address where the buyer receives the goods. Tracked
     * items take stock from it, and automatic tax treats the sale as made there. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
};
/**
 * Every physical item is handed to the buyer at this location when the order is paid. Replaces a
 * delivery selection.
 */
export type OrderHandoverRequestInput = {
    /**
     * Active location with a complete address where the buyer receives the goods. minLength: 1.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
export type OrderInventoryExceptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string) | (null));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string) | (null));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string) | (null));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string) | (null));
            "prepayment_order_id"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.inventory_exception_created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string) | (null));
            "authorization_amounts"?: ((OrderAuthorizationAmountsPreviousAttributes) | (null));
            "buyer_contact"?: ((CheckoutBuyerContactPreviousAttributes) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderChargePreviousAttributes>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string) | (null));
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("invoice_voided"
                | "paid"
                | "closed_by_merchant"
                | "checkout_expired"
                | "written_off"
                | "superseded"
                | "return_resolution_canceled"
                | "other"
                | (string & {}))
                | (null));
            "closed_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "custom_field_answers"?: ((Array<CustomFieldAnswerPreviousAttributes>) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotionPreviousAttributes>) | (null));
            "delivery"?: ((OrderDeliverySummaryPreviousAttributes) | (null));
            "delivery_destination"?: ((OrderDeliveryDestinationPreviousAttributes) | (null));
            "discounts"?: ((Array<OrderDiscountPreviousAttributes>) | (null));
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            "fulfillments"?: ((Array<FulfillmentPreviousAttributes>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimatePreviousAttributes) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlementPreviousAttributes>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelectionPreviousAttributes>) | (null));
            "governing_delivery_selection_id"?: ((string) | (null));
            "handover"?: ((OrderHandoverPreviousAttributes) | (null));
            "internal_note"?: ((string) | (null));
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            "inventory_exception_resolution_message"?: ((string) | (null));
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "invoice_id"?: ((string) | (null));
            "line_items"?: ((Array<OrderLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            "paid_at"?: ((string) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string) | (null));
            "prepayment_order_id"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlementPreviousAttributes>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmountsPreviousAttributes) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((ExpandedSubscriptionSummaryPreviousAttributes) | (null));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number) | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTaxPreviousAttributes) | (null));
            "ticketed_event"?: ((TicketedEventPreviousAttributes) | (null));
            "tips"?: ((Array<TipPreviousAttributes>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.inventory_exception_created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "order.inventory_exception_created";
});
