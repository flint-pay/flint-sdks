import type { MetadataRequestInput, MetadataMap } from './types-32.js';
import type {
    MoneyValueInput,
    OrderCalculatedChargeTaxInput,
    MoneyValue,
    OrderCalculatedChargeTax,
    OrderChargeInputAmount,
    OrderChargeInputPercent,
    OrderChargeInputAmountInput,
    OrderCalculatedLineItemTax,
    Order
} from './types-33.js';
import type { TaxCalculationRequest, TaxCalculationRequestRequestInput } from './types-49.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { DeliveryPreviewRoutingSourceInput } from './types-14.js';
import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-3.js';
import type { Dimensions } from './types-17.js';
import type { GiftCardPurchaseSnapshot, Image } from './types-21.js';
import type { LineItemInventorySnapshot } from './types-30.js';
import type { PurchasedGiftCard } from './types-41.js';
import type { SelectedProductOption, SubscribedLine } from './types-47.js';
import type { Weight } from './types-65.js';
import type { TextModifierRequest, TextModifierRequestInput } from './types-50.js';
import type { SubscriptionIntervalOption } from './types-48.js';
import type { ResponseMeta } from './types-42.js';
import type { PaymentAttemptGiftCardRedemption, PaymentAttemptPaymentIntent, PaymentErrorSummary } from './types-37.js';
import type { PendingPaymentAction } from './types-39.js';
/**
 * Shape $ (Value): {@link OrderChargeInputPercentInput}. The `percent` variant of
 * `OrderChargeInput`.
 */
export type OrderChargeInputPercentInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /**
     * Shape $ (Value): string. Selects a fixed amount or percentage calculation. Value enum:
     * "percent".
     */
    "calculation_type": "percent";
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
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
    & (({
    /** Shape $ (Value): string.  Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent": number;
})
    & (({
    "amount_money"?: never;
})));
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
    /**
     * Shape $ (Value): string. Selects a fixed amount or percentage calculation. Value enum:
     * "amount", "percent".
     */
    "calculation_type": "amount" | "percent" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
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
    & ((Exclude<OrderChargeInputAmount & object, readonly unknown[]>)
    | (Exclude<OrderChargeInputPercent & object, readonly unknown[]>)
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
    /**
     * Shape $ (Value): string. Selects a fixed amount or percentage calculation. Value enum:
     * "amount", "percent".
     */
    "calculation_type": "amount" | "percent";
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
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
    & ((Exclude<OrderChargeInputAmountInput & object, readonly unknown[]>)
    | (Exclude<OrderChargeInputPercentInput & object, readonly unknown[]>));
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
     * Shape $ (Value): {@link TaxCalculationRequestRequestInput}. Tax you calculated yourself for
     * a line or charge: whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequestRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_charge_id": string;
};
/**
 * Shape $ (Value): {@link OrderDeliveryDestination}. Where an order is delivered: the address, the
 * recipient, and where the destination came from.
 */
export type OrderDeliveryDestination = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address": Address;
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
     * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address": AddressRequest;
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
     * Shape $ (Value): {@link AddressRequestInput}. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "address": AddressRequestInput;
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
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
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
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
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
 * Shape $ (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
 * `OrderLineItemModifierInput`.
 */
export type OrderLineItemModifierInputCatalog = ({
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id": string;
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
    /** Shape $ (Value): string. Selects the type branch. Value enum: "catalog". */
    "type": "catalog" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "catalog". */
    "type": "catalog" | (string & {});
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id": string;
}));
/**
 * Shape $ (Value): {@link OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
 * `OrderLineItemModifierInput`.
 */
export type OrderLineItemModifierInputCatalogInput = ({
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id": string;
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
    /** Shape $ (Value): string. Selects the type branch. Value enum: "catalog". */
    "type": "catalog";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "catalog". */
    "type": ("catalog") & ("catalog");
    /**
     * Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource
     * reference; accepted spellings follow resource ID validation. minLength: 1.
     */
    "modifier_id": string;
})
    & ({
    "text"?: never;
}));
/**
 * Shape $ (Value): {@link OrderLineItemModifierInputText}. The `text` variant of
 * `OrderLineItemModifierInput`.
 */
export type OrderLineItemModifierInputText = ({
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
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
    "text": TextModifierRequest;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "text". */
    "type": "text" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "text". */
    "type": "text" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierRequest}. Text a buyer entered for a text modifier group
     * on an order line item.
     */
    "text": TextModifierRequest;
}));
/**
 * Shape $ (Value): {@link OrderLineItemModifierInputTextInput}. The `text` variant of
 * `OrderLineItemModifierInput`.
 */
export type OrderLineItemModifierInputTextInput = ({
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
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
    "text": TextModifierRequestInput;
    /** Shape $ (Value): string. Selects the type branch. Value enum: "text". */
    "type": "text";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "text". */
    "type": ("text") & ("text");
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
})));
/**
 * Shape $ (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
 * item: a catalog modifier by ID or a text modifier, with a quantity.
 */
export type OrderLineItemModifierRequest = ({
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
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
    /** Shape $ (Value): string. Selects the type branch. Value enum: "catalog", "text". */
    "type": "catalog" | "text" | (string & {});
})
    & ((Exclude<OrderLineItemModifierInputCatalog & object, readonly unknown[]>)
    | (Exclude<OrderLineItemModifierInputText & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
 * line item: a catalog modifier by ID or a text modifier, with a quantity.
 */
export type OrderLineItemModifierRequestInput = ({
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
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
    /** Shape $ (Value): string. Selects the type branch. Value enum: "catalog", "text". */
    "type": "catalog" | "text";
})
    & ((Exclude<OrderLineItemModifierInputCatalogInput & object, readonly unknown[]>)
    | (Exclude<OrderLineItemModifierInputTextInput & object, readonly unknown[]>));
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
     * Shape $ (Value): {@link TaxCalculationRequestRequestInput}. Tax you calculated yourself for
     * a line or charge: whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequestRequestInput;
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
    "request_id": string;
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
    "request_id": string;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelection}. Identifies a payment intent to confirm for
 * an order and the credential to use: a token, a saved payment method, a Stripe confirmation
 * token, or the attached source.
 */
export type OrderPaymentIntentSelection = ((OrderPaymentIntentSelectionToken)
    | (OrderPaymentIntentSelectionPaymentMethod)
    | (OrderPaymentIntentSelectionStripeConfirmationToken)
    | (OrderPaymentIntentSelectionAttached)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionAttached}. Confirm using the payment source
 * already attached.
 */
export type OrderPaymentIntentSelectionAttached = {
    /** Shape $ (Value): string.  Value enum: "attached". */
    "credential_type": "attached" | (string & {});
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionAttachedInput}. Confirm using the payment
 * source already attached.
 */
export type OrderPaymentIntentSelectionAttachedInput = {
    /** Shape $ (Value): string.  Value enum: "attached". */
    "credential_type": "attached";
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionInput}. Identifies a payment intent to
 * confirm for an order and the credential to use: a token, a saved payment method, a Stripe
 * confirmation token, or the attached source.
 */
export type OrderPaymentIntentSelectionInput = ((OrderPaymentIntentSelectionTokenInput)
    | (OrderPaymentIntentSelectionPaymentMethodInput)
    | (OrderPaymentIntentSelectionStripeConfirmationTokenInput)
    | (OrderPaymentIntentSelectionAttachedInput));
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionPaymentMethod}. The `payment_method` variant
 * of `OrderPaymentIntentSelection`.
 */
export type OrderPaymentIntentSelectionPaymentMethod = {
    /** Shape $ (Value): string.  Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionPaymentMethodInput}. The `payment_method`
 * variant of `OrderPaymentIntentSelection`.
 */
export type OrderPaymentIntentSelectionPaymentMethodInput = {
    /** Shape $ (Value): string.  Value enum: "payment_method". */
    "credential_type": "payment_method";
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionStripeConfirmationToken}. The
 * `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`.
 */
export type OrderPaymentIntentSelectionStripeConfirmationToken = {
    /** Shape $ (Value): string.  Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
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
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionStripeConfirmationTokenInput}. The
 * `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`.
 */
export type OrderPaymentIntentSelectionStripeConfirmationTokenInput = {
    /** Shape $ (Value): string.  Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
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
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionToken}. The `token` variant of
 * `OrderPaymentIntentSelection`.
 */
export type OrderPaymentIntentSelectionToken = {
    /** Shape $ (Value): string.  Value enum: "token". */
    "credential_type": "token" | (string & {});
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * Shape $ (Value): {@link OrderPaymentIntentSelectionTokenInput}. The `token` variant of
 * `OrderPaymentIntentSelection`.
 */
export type OrderPaymentIntentSelectionTokenInput = {
    /** Shape $ (Value): string.  Value enum: "token". */
    "credential_type": "token";
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * Shape $ (Value): {@link OrderPaymentSourceCardSelection}. Card options for the payment source
 * selected on an order payment intent, including which digital wallets to offer.
 */
export type OrderPaymentSourceCardSelection = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "digital_wallets"?: Array<string>;
};
/**
 * Shape $ (Value): {@link OrderPaymentSourceCardSelectionInput}. Card options for the payment
 * source selected on an order payment intent, including which digital wallets to offer.
 */
export type OrderPaymentSourceCardSelectionInput = OrderPaymentSourceCardSelection;
/**
 * Shape $ (Value): {@link OrderPaymentSourceSelection}. The payment source options you choose when
 * creating an order payment intent.
 */
export type OrderPaymentSourceSelection = {
    /**
     * Shape $ (Value): {@link OrderPaymentSourceCardSelection}. Card options for the payment
     * source selected on an order payment intent, including which digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelection;
};
/**
 * Shape $ (Value): {@link OrderPaymentSourceSelectionInput}. The payment source options you choose
 * when creating an order payment intent.
 */
export type OrderPaymentSourceSelectionInput = {
    /**
     * Shape $ (Value): {@link OrderPaymentSourceCardSelectionInput}. Card options for the payment
     * source selected on an order payment intent, including which digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelectionInput;
};
/** Shape $ (Value): {@link OrderResponse}. A response containing `Order` data. */
export type OrderResponse = {
    /**
     * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data": Order;
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
 * Shape $ (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order
 * payment, with the amount and the return and resolution it came from.
 */
export type OrderReturnCreditSettlement = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
};
