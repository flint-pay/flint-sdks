import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-38.js';
import type {
    MoneyValue,
    OrderCalculatedChargeTax,
    MoneyValueInput,
    OrderCalculatedChargeTaxRequestInput,
    Order,
    OrderAuthorizationAmounts
} from './types-39.js';
import type { TaxCalculationRequest, TaxCalculationRequestModelInput } from './types-65.js';
import type { ResponseMeta } from './types-54.js';
import type { CheckoutBuyerContact } from './types-5.js';
import type { CustomFieldAnswer } from './types-15.js';
import type { DeferredPromotion } from './types-17.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary
} from './types-24.js';
import type { Fulfillment } from './types-25.js';
import type { InventoryRoutingSource } from './types-30.js';
import type {
    OrderLineItem,
    OrderPaymentAttempt,
    OrderReturnCreditSettlement,
    OrderSettlementAmounts,
    OrderTax
} from './types-41.js';
import type { PartnerWebhookEnvelope, PaymentCollection } from './types-44.js';
import type { PricingAmounts } from './types-50.js';
import type { SetupCollection } from './types-59.js';
import type { TicketedEvent, Tip } from './types-66.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { DeliverySelectionRecipientRequest, DeliverySelectionRecipientRequestInput } from './types-22.js';
import type { SubscriptionServiceLocationRequest } from './types-63.js';
import type { SubscriptionDeliveryDestinationRequestInput } from './types-61.js';
import type { DeliveryRecipientResource } from './types-21.js';
import type { CreateOrderLineItemRequest, CreateOrderLineItemRequestInput } from './types-11.js';
import type { RefundCharge, RefundDestinations, RefundChargeInput, RefundDestinationsInput } from './types-53.js';
import type { InputValue } from '../runtime.js';
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
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
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
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /** Optional description of the charge. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
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
})
    & (({
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
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
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
    "calculation_type": "amount";
    /** Optional description of the charge. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxRequestInput;
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
        | "other";
})
    & (({
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
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
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** Optional description of the charge. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
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
})
    & (({
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
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
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": "percent";
    /** Optional description of the charge. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxRequestInput;
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
        | "other";
})
    & (({
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
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
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent" | (string & {});
    /** Optional description of the charge. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
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
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent";
    /** Optional description of the charge. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * What the buyer sees for this charge at checkout and on receipts. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxRequestInput;
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
        | "other";
})
    & ((Exclude<OrderChargeInputAmountInput & object, readonly unknown[]>)
    | (Exclude<OrderChargeInputPercentInput & object, readonly unknown[]>));
/** An externally calculated tax you assign to one order charge. */
export type OrderChargeTaxAssignment = {
    /**
     * The tax you supply for this charge. Tax you calculated yourself for a line or charge:
     * whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequest;
    /**
     * ID of the order charge this tax applies to. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
};
/** An externally calculated tax you assign to one order charge. */
export type OrderChargeTaxAssignmentInput = {
    /**
     * The tax you supply for this charge. Tax you calculated yourself for a line or charge:
     * whether prices include tax, and the tax components.
     */
    "calculation": TaxCalculationRequestModelInput;
    /**
     * ID of the order charge this tax applies to. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
};
/** A page of `OrderCharge` objects. */
export type OrderChargesListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderCharge}. An additional charge applied to an order.
     */
    "data": Array<OrderCharge>;
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
export type OrderClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    "event_type"?: "order.closed";
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
    "event_type"?: "order.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /** Value enum: "order.closed". */
    "event_type"?: "order.closed";
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
 * The `order.closed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "order.closed". */
    "event_type"?: "order.closed";
});
export type OrderCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.created";
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
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "order.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "order.created". */
    "event_type"?: "order.created";
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
 * The `order.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.created". */
    "event_type"?: "order.created";
});
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
/** The name and phone number of the person receiving an order delivery. */
export type OrderDeliveryDestinationRecipient = {
    /** Name of the person receiving the order. maxLength: 255. */
    "name"?: string;
    /** Phone number for contacting the recipient about the delivery. maxLength: 30. */
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
 * Nested child of an order: immutable, completed item changes with frozen values and refund
 * amounts. Refund completion is tracked on the refunds.
 */
export type OrderEdit = {
    /**
     * Added order lines, in request order, with their quantities and values frozen at commit.
     * Empty when the edit added nothing. [] (Value): {@link OrderEditLineAddition}. An order line
     * added by the enclosing edit, with its value frozen at commit.
     */
    "add_line_items": Array<OrderEditLineAddition>;
    /**
     * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit
     * added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "added_total_money": MoneyValue;
    /**
     * Charges released by this edit, frozen at commit. Empty when no charges were released. []
     * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order charge,
     * and the part refunded to the buyer.
     */
    "charge_refunds": Array<OrderEditChargeRefund>;
    /** When the edit committed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
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
     * Removed units and their refund amounts frozen at commit. [] (Value): {@link
     * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount frozen
     * at commit. The enclosing edit identifies the order.
     */
    "remove_line_items": Array<OrderEditLineRemoval>;
    /**
     * The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "removed_total_money": MoneyValue;
    /**
     * Whether this edit has committed. Refund processing has its own status on each refund. Value
     * enum: "completed".
     */
    "status": "completed" | (string & {});
    /**
     * Contains retry when unrefunded_money is positive and no linked refund is pending. Empty
     * while Flint is still processing the original refund before any linked refund exists; retry
     * becomes available if that processing ends without a refund. Independent of caller
     * permissions. [] enum: "retry". [] (Value): string. Value enum: "retry".
     */
    "supported_actions": Array<"retry" | (string & {})>;
    /**
     * Frozen refund money not covered by pending or succeeded allocations from refunds linked to
     * this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unrefunded_money": MoneyValue;
};
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
export type OrderEditCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_line_items": Array<OrderEditLineAddition>;
            "added_total_money": MoneyValue;
            "charge_refunds": Array<OrderEditChargeRefund>;
            "created_at": string;
            "note"?: string;
            "order_edit_id": string;
            "order_id": string;
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
            "refund_ids": Array<string>;
            "refund_money": MoneyValue;
            "remove_line_items": Array<OrderEditLineRemoval>;
            "removed_total_money": MoneyValue;
            "status": "completed" | (string & {});
            "supported_actions": Array<"retry" | (string & {})>;
            "unrefunded_money": MoneyValue;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order_edit.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_line_items": Array<OrderEditLineAddition>;
            "added_total_money": MoneyValue;
            "charge_refunds": Array<OrderEditChargeRefund>;
            "created_at": string;
            "note"?: string;
            "order_edit_id": string;
            "order_id": string;
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
            "refund_ids": Array<string>;
            "refund_money": MoneyValue;
            "remove_line_items": Array<OrderEditLineRemoval>;
            "removed_total_money": MoneyValue;
            "status": "completed" | (string & {});
            "supported_actions": Array<"retry" | (string & {})>;
            "unrefunded_money": MoneyValue;
        };
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `note`. object.add_line_items (Required): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at commit.
     * Empty when the edit added nothing. object.add_line_items[] (Value): {@link
     * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen at
     * commit. object.added_total_money (Required): {@link MoneyValue}. The cost of the added
     * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.charge_refunds (Required): Array of {@link OrderEditChargeRefund}. Charges released
     * by this edit, frozen at commit. Empty when no charges were released. object.charge_refunds[]
     * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order charge,
     * and the part refunded to the buyer. object.created_at (Required): string. When the edit
     * committed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.note (Optional):
     * string. Internal merchant note. Omitted from buyer and webhook payloads and refund messages.
     * maxLength: 500. object.order_edit_id (Required): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * object.order_id (Required): string. The order this edit belongs to. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.reason (Optional): string. Reason for the edit and
     * its refund. Value enum: "duplicate", "fraudulent", "requested_by_customer",
     * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
     * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
     * "other", "out_of_stock". object.refund_ids (Required): Array of string. Refunds created for
     * this edit. Empty when no refund is needed or processing has not created it yet.
     * object.refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * object.refund_money (Required): {@link MoneyValue}. Money to refund after the removed value
     * and released charges pay for added lines. May be zero; an edit with no refund money creates
     * no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.remove_line_items (Required): Array of {@link OrderEditLineRemoval}. Removed
     * units and their refund amounts frozen at commit. object.remove_line_items[] (Value): {@link
     * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount frozen
     * at commit. The enclosing edit identifies the order. object.removed_total_money (Required):
     * {@link MoneyValue}. The value of the removed units: the sum of
     * remove_line_items[].total_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.status (Required): string. Whether this edit has committed.
     * Refund processing has its own status on each refund. Value enum: "completed".
     * object.supported_actions (Required): Array of string. Contains retry when unrefunded_money
     * is positive and no linked refund is pending. Empty while Flint is still processing the
     * original refund before any linked refund exists; retry becomes available if that processing
     * ends without a refund. Independent of caller permissions. [] enum: "retry".
     * object.supported_actions[] (Value): string. Value enum: "retry". object.unrefunded_money
     * (Required): {@link MoneyValue}. Frozen refund money not covered by pending or succeeded
     * allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `note`.
         * add_line_items (Required): Array of {@link OrderEditLineAddition}. Added order lines, in
         * request order, with their quantities and values frozen at commit. Empty when the edit
         * added nothing. add_line_items[] (Value): {@link OrderEditLineAddition}. An order line
         * added by the enclosing edit, with its value frozen at commit. added_total_money
         * (Required): {@link MoneyValue}. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. charge_refunds
         * (Required): Array of {@link OrderEditChargeRefund}. Charges released by this edit,
         * frozen at commit. Empty when no charges were released. charge_refunds[] (Value): {@link
         * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
         * refunded to the buyer. created_at (Required): string. When the edit committed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". note (Optional): string. Internal merchant
         * note. Omitted from buyer and webhook payloads and refund messages. maxLength: 500.
         * order_edit_id (Required): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id
         * (Required): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". reason (Optional): string. Reason for the edit and its
         * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock". refund_ids (Required): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_money
         * (Required): {@link MoneyValue}. Money to refund after the removed value and released
         * charges pay for added lines. May be zero; an edit with no refund money creates no
         * refund. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. remove_line_items (Required): Array of {@link OrderEditLineRemoval}. Removed units
         * and their refund amounts frozen at commit. remove_line_items[] (Value): {@link
         * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount
         * frozen at commit. The enclosing edit identifies the order. removed_total_money
         * (Required): {@link MoneyValue}. The value of the removed units: the sum of
         * remove_line_items[].total_money. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. status (Required): string. Whether this edit has committed.
         * Refund processing has its own status on each refund. Value enum: "completed".
         * supported_actions (Required): Array of string. Contains retry when unrefunded_money is
         * positive and no linked refund is pending. Empty while Flint is still processing the
         * original refund before any linked refund exists; retry becomes available if that
         * processing ends without a refund. Independent of caller permissions. [] enum: "retry".
         * supported_actions[] (Value): string. Value enum: "retry". unrefunded_money (Required):
         * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         */
        "object": {
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * commit. Empty when the edit added nothing. [] (Value): {@link
             * OrderEditLineAddition}. An order line added by the enclosing edit, with its value
             * frozen at commit.
             */
            "add_line_items": Array<OrderEditLineAddition>;
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "added_total_money": MoneyValue;
            /**
             * Charges released by this edit, frozen at commit. Empty when no charges were
             * released. [] (Value): {@link OrderEditChargeRefund}. The value an edit releases from
             * one order charge, and the part refunded to the buyer.
             */
            "charge_refunds": Array<OrderEditChargeRefund>;
            /** When the edit committed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
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
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock".
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
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "refund_money": MoneyValue;
            /**
             * Removed units and their refund amounts frozen at commit. [] (Value): {@link
             * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount
             * frozen at commit. The enclosing edit identifies the order.
             */
            "remove_line_items": Array<OrderEditLineRemoval>;
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "removed_total_money": MoneyValue;
            /**
             * Whether this edit has committed. Refund processing has its own status on each
             * refund. Value enum: "completed".
             */
            "status": "completed" | (string & {});
            /**
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "retry". [] (Value): string. Value enum:
             * "retry".
             */
            "supported_actions": Array<"retry" | (string & {})>;
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unrefunded_money": MoneyValue;
        };
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `note`. object.add_line_items (Required): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at commit.
     * Empty when the edit added nothing. object.add_line_items[] (Value): {@link
     * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen at
     * commit. object.added_total_money (Required): {@link MoneyValue}. The cost of the added
     * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.charge_refunds (Required): Array of {@link OrderEditChargeRefund}. Charges released
     * by this edit, frozen at commit. Empty when no charges were released. object.charge_refunds[]
     * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order charge,
     * and the part refunded to the buyer. object.created_at (Required): string. When the edit
     * committed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.note (Optional):
     * string. Internal merchant note. Omitted from buyer and webhook payloads and refund messages.
     * maxLength: 500. object.order_edit_id (Required): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * object.order_id (Required): string. The order this edit belongs to. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.reason (Optional): string. Reason for the edit and
     * its refund. Value enum: "duplicate", "fraudulent", "requested_by_customer",
     * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
     * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
     * "other", "out_of_stock". object.refund_ids (Required): Array of string. Refunds created for
     * this edit. Empty when no refund is needed or processing has not created it yet.
     * object.refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * object.refund_money (Required): {@link MoneyValue}. Money to refund after the removed value
     * and released charges pay for added lines. May be zero; an edit with no refund money creates
     * no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.remove_line_items (Required): Array of {@link OrderEditLineRemoval}. Removed
     * units and their refund amounts frozen at commit. object.remove_line_items[] (Value): {@link
     * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount frozen
     * at commit. The enclosing edit identifies the order. object.removed_total_money (Required):
     * {@link MoneyValue}. The value of the removed units: the sum of
     * remove_line_items[].total_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.status (Required): string. Whether this edit has committed.
     * Refund processing has its own status on each refund. Value enum: "completed".
     * object.supported_actions (Required): Array of string. Contains retry when unrefunded_money
     * is positive and no linked refund is pending. Empty while Flint is still processing the
     * original refund before any linked refund exists; retry becomes available if that processing
     * ends without a refund. Independent of caller permissions. [] enum: "retry".
     * object.supported_actions[] (Value): string. Value enum: "retry". object.unrefunded_money
     * (Required): {@link MoneyValue}. Frozen refund money not covered by pending or succeeded
     * allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `note`.
         * add_line_items (Required): Array of {@link OrderEditLineAddition}. Added order lines, in
         * request order, with their quantities and values frozen at commit. Empty when the edit
         * added nothing. add_line_items[] (Value): {@link OrderEditLineAddition}. An order line
         * added by the enclosing edit, with its value frozen at commit. added_total_money
         * (Required): {@link MoneyValue}. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. charge_refunds
         * (Required): Array of {@link OrderEditChargeRefund}. Charges released by this edit,
         * frozen at commit. Empty when no charges were released. charge_refunds[] (Value): {@link
         * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
         * refunded to the buyer. created_at (Required): string. When the edit committed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". note (Optional): string. Internal merchant
         * note. Omitted from buyer and webhook payloads and refund messages. maxLength: 500.
         * order_edit_id (Required): string. Stable ID of this order edit. pattern:
         * ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_id
         * (Required): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". reason (Optional): string. Reason for the edit and its
         * refund. Value enum: "duplicate", "fraudulent", "requested_by_customer",
         * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
         * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
         * "other", "out_of_stock". refund_ids (Required): Array of string. Refunds created for
         * this edit. Empty when no refund is needed or processing has not created it yet.
         * refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_money
         * (Required): {@link MoneyValue}. Money to refund after the removed value and released
         * charges pay for added lines. May be zero; an edit with no refund money creates no
         * refund. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. remove_line_items (Required): Array of {@link OrderEditLineRemoval}. Removed units
         * and their refund amounts frozen at commit. remove_line_items[] (Value): {@link
         * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount
         * frozen at commit. The enclosing edit identifies the order. removed_total_money
         * (Required): {@link MoneyValue}. The value of the removed units: the sum of
         * remove_line_items[].total_money. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. status (Required): string. Whether this edit has committed.
         * Refund processing has its own status on each refund. Value enum: "completed".
         * supported_actions (Required): Array of string. Contains retry when unrefunded_money is
         * positive and no linked refund is pending. Empty while Flint is still processing the
         * original refund before any linked refund exists; retry becomes available if that
         * processing ends without a refund. Independent of caller permissions. [] enum: "retry".
         * supported_actions[] (Value): string. Value enum: "retry". unrefunded_money (Required):
         * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         */
        "object": {
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * commit. Empty when the edit added nothing. [] (Value): {@link
             * OrderEditLineAddition}. An order line added by the enclosing edit, with its value
             * frozen at commit.
             */
            "add_line_items": Array<OrderEditLineAddition>;
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "added_total_money": MoneyValue;
            /**
             * Charges released by this edit, frozen at commit. Empty when no charges were
             * released. [] (Value): {@link OrderEditChargeRefund}. The value an edit releases from
             * one order charge, and the part refunded to the buyer.
             */
            "charge_refunds": Array<OrderEditChargeRefund>;
            /** When the edit committed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
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
             * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
             * "requested_by_customer", "defective_product", "wrong_item_shipped",
             * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
             * "better_price_found", "accidental_order", "other", "out_of_stock".
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
             * Refunds created for this edit. Empty when no refund is needed or processing has not
             * created it yet. [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Money to refund after the removed value and released charges pay for added lines.
             * May be zero; an edit with no refund money creates no refund. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "refund_money": MoneyValue;
            /**
             * Removed units and their refund amounts frozen at commit. [] (Value): {@link
             * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount
             * frozen at commit. The enclosing edit identifies the order.
             */
            "remove_line_items": Array<OrderEditLineRemoval>;
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "removed_total_money": MoneyValue;
            /**
             * Whether this edit has committed. Refund processing has its own status on each
             * refund. Value enum: "completed".
             */
            "status": "completed" | (string & {});
            /**
             * Contains retry when unrefunded_money is positive and no linked refund is pending.
             * Empty while Flint is still processing the original refund before any linked refund
             * exists; retry becomes available if that processing ends without a refund.
             * Independent of caller permissions. [] enum: "retry". [] (Value): string. Value enum:
             * "retry".
             */
            "supported_actions": Array<"retry" | (string & {})>;
            /**
             * Frozen refund money not covered by pending or succeeded allocations from refunds
             * linked to this edit. Failed allocations do not reduce it. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unrefunded_money": MoneyValue;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order_edit.created". */
    "event_type"?: "order_edit.created";
});
/** An order line added by the enclosing edit, with its value frozen at commit. */
export type OrderEditLineAddition = {
    /** The order line created by this edit. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * Whole-number quantity added; fractional quantities are not supported. Format: int64.
     * minimum: 1.
     */
    "quantity": number;
    /**
     * The cost of these added units, including additive tax, frozen when the edit committed.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/**
 * Removed whole units of an order line and their refund amount frozen at commit. The enclosing
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
     * The part of total_money refunded to the buyer, frozen when the edit committed. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * The value of these units, including their original discount and tax shares, frozen when the
     * edit committed. The order no longer owes it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/** A page of `OrderEdit` objects. */
export type OrderEditListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * OrderEdit}. Nested child of an order: immutable, completed item changes with frozen values
     * and refund amounts. Refund completion is tracked on the refunds.
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
     * Resource, collection, or operation result returned by this request. Nested child of an
     * order: immutable, completed item changes with frozen values and refund amounts. Refund
     * completion is tracked on the refunds.
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
    "event_type"?: "order.inventory_exception_created";
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
/**
 * The `order.inventory_exception_created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type OrderInventoryExceptionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
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
 * The `order.inventory_exception_created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
});
export type OrderInventoryExceptionResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    "event_type"?: "order.inventory_exception_resolved";
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
    "event_type"?: "order.inventory_exception_resolved";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
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
 * The `order.inventory_exception_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type OrderInventoryExceptionResolvedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
});
