import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-38.js';
import type {
    MoneyValue,
    OrderCalculatedChargeTax,
    MoneyValueInput,
    OrderCalculatedChargeTaxRequestInput,
    OrderAuthorizationAmounts
} from './types-39.js';
import type { TaxCalculationRequest, TaxCalculationRequestModelInput } from './types-64.js';
import type { ResponseMeta } from './types-54.js';
import type { CheckoutBuyerContact } from './types-5.js';
import type { CustomFieldAnswer } from './types-15.js';
import type { DeferredPromotion } from './types-16.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary
} from './types-24.js';
import type { Fulfillment } from './types-25.js';
import type { InventoryRoutingSource } from './types-30.js';
import type {
    OrderGiftCardSettlement,
    OrderHandover,
    OrderLineItem,
    OrderReturnCreditSettlement,
    OrderSettlementAmounts,
    OrderTax
} from './types-41.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { PricingAmounts } from './types-50.js';
import type { TicketedEvent, Tip } from './types-66.js';
import type { WebhookOrder, WebhookOrderEdit } from './types-70.js';
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
        "object": WebhookOrder;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            "authorization_amounts"?: ((OrderAuthorizationAmounts) | (null));
            "buyer_contact"?: ((CheckoutBuyerContact) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderCharge>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string | null) | (null) | (unknown));
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
            "custom_field_answers"?: ((Array<CustomFieldAnswer>) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotion>) | (null));
            "delivery"?: ((OrderDeliverySummary) | (null));
            "delivery_destination"?: ((OrderDeliveryDestination) | (null));
            "discounts"?: ((Array<OrderDiscount>) | (null));
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
            "fulfillments"?: ((Array<Fulfillment>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimate) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlement>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelection>) | (null));
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            "handover"?: ((OrderHandover) | (null));
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
            "inventory_routing_source"?: ((InventoryRoutingSource) | (null));
            "invoice_id"?: ((string | null) | (null) | (unknown));
            "line_items"?: ((Array<OrderLineItem>) | (null));
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
            "paid_at"?: ((string | null) | (null) | (unknown));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummary>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlement>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmounts) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((((ExpandedSubscriptionSummary) | (null))) | (null) | (unknown));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((((ExpandedSubscriptionPlanSummary) | (null))) | (null) | (unknown));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTax) | (null));
            "ticketed_event"?: ((TicketedEvent) | (null));
            "tips"?: ((Array<Tip>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            "authorization_amounts"?: ((OrderAuthorizationAmounts) | (null));
            "buyer_contact"?: ((CheckoutBuyerContact) | (null));
            "buyer_note"?: ((string) | (null));
            "charges"?: ((Array<OrderCharge>) | (null));
            "checkout_session_ids"?: ((Array<string>) | (null));
            "client_reference"?: ((string | null) | (null) | (unknown));
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
            "custom_field_answers"?: ((Array<CustomFieldAnswer>) | (null));
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            "customer_id"?: ((string) | (null));
            "deferred_promotions"?: ((Array<DeferredPromotion>) | (null));
            "delivery"?: ((OrderDeliverySummary) | (null));
            "delivery_destination"?: ((OrderDeliveryDestination) | (null));
            "discounts"?: ((Array<OrderDiscount>) | (null));
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
            "fulfillments"?: ((Array<Fulfillment>) | (null));
            "gift_card_estimate"?: ((OrderGiftCardEstimate) | (null));
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlement>) | (null));
            "gift_card_tender_enabled"?: ((boolean) | (null));
            "gift_cards"?: ((Array<OrderGiftCardSelection>) | (null));
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            "handover"?: ((OrderHandover) | (null));
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
            "inventory_routing_source"?: ((InventoryRoutingSource) | (null));
            "invoice_id"?: ((string | null) | (null) | (unknown));
            "line_items"?: ((Array<OrderLineItem>) | (null));
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
            "paid_at"?: ((string | null) | (null) | (unknown));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummary>) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            "pricing_amounts"?: ((PricingAmounts) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlement>) | (null));
            "return_resolution_id"?: ((string) | (null));
            "settlement_amounts"?: ((OrderSettlementAmounts) | (null));
            "status"?: (("open" | "closed" | (string & {})) | (null));
            "subscription"?: ((((ExpandedSubscriptionSummary) | (null))) | (null) | (unknown));
            "subscription_cycle"?: ((number) | (null));
            "subscription_delivery_changed_at"?: ((string) | (null));
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((((ExpandedSubscriptionPlanSummary) | (null))) | (null) | (unknown));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            "tax"?: ((OrderTax) | (null));
            "ticketed_event"?: ((TicketedEvent) | (null));
            "tips"?: ((Array<Tip>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null or null. The
     * earliest open or resolving payment review on this order's counted payments. `null` when no
     * review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. previous_attributes.active_payment_review_id.anyOf[1] (Value):
     * string or null. The earliest open or resolving payment review on this order's counted
     * payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     * previous_attributes.active_payment_review_id.anyOf[2] (Value): null.
     * previous_attributes.authorization_amounts (Optional): {@link OrderAuthorizationAmounts} or
     * null. The amounts authorized and still capturable on the order's payments.
     * previous_attributes.authorization_amounts.anyOf[1] (Value): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContact} or null. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContact}. Email and
     * phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[2] (Value): null. previous_attributes.buyer_note
     * (Optional): string or null. A note to the buyer. previous_attributes.buyer_note.anyOf[1]
     * (Value): string. A note to the buyer. previous_attributes.buyer_note.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link OrderCharge} or null. Charges added
     * to the order, such as delivery or service fees, each with its applied amount, tax, and
     * refunded amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link OrderCharge}.
     * Charges added to the order, such as delivery or service fees, each with its applied amount,
     * tax, and refunded amount. previous_attributes.charges.anyOf[1][] (Value): {@link
     * OrderCharge}. An additional charge applied to an order. previous_attributes.charges.anyOf[2]
     * (Value): null. previous_attributes.checkout_session_ids (Optional): Array of string or null.
     * IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswer} or null. The buyer's answers to the payment link's custom fields,
     * recorded when checkout started, in the order the link showed the fields. Each answer keeps
     * the field's key, label, and type from that moment, so later changes to the link don't change
     * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
     * didn't come from a payment link, the link had no custom fields, or the buyer answered none.
     * Orders created before Flint recorded answers here also return an empty list and keep their
     * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers.
     * Returned only to merchant credentials; omitted for buyer credentials. Always present with
     * merchant credentials. previous_attributes.custom_field_answers.anyOf[1] (Value): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
     * when checkout started, in the order the link showed the fields. Each answer keeps the
     * field's key, label, and type from that moment, so later changes to the link don't change it.
     * Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't
     * come from a payment link, the link had no custom fields, or the buyer answered none. Orders
     * created before Flint recorded answers here also return an empty list and keep their answers
     * in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned
     * only to merchant credentials; omitted for buyer credentials. Always present with merchant
     * credentials. maxItems: 20. previous_attributes.custom_field_answers.anyOf[1][] (Value):
     * {@link CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
     * was when checkout started. `custom_field_type` determines the type of `value`.
     * previous_attributes.custom_field_answers.anyOf[2] (Value): null.
     * previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or null or null.
     * Customer summary included when `expand` names `customer`; `null` when expanded and no
     * customer is linked. Present only when `expand` includes `customer`; `null` when expanded and
     * there is no related customer. previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary} or null. Customer summary included when `expand` names `customer`;
     * `null` when expanded and no customer is linked. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. ID of the customer this order belongs to.
     * previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer this order
     * belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link DeferredPromotion} or
     * null. Promotions accepted at subscription signup. They attach when the subscription is
     * provisioned and first discount its first charged cycle. They do not discount this order and
     * are separate from discounts and order totals. Always present; empty when no promotions are
     * deferred. previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotion}. Promotions accepted at subscription signup. They attach when the
     * subscription is provisioned and first discount its first charged cycle. They do not discount
     * this order and are separate from discounts and order totals. Always present; empty when no
     * promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][] (Value): {@link
     * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's first
     * charged cycle. It does not discount the signup order.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummary} or null. Method, type and recipient of
     * governing_delivery_selection_id. The address remains in delivery_destination. Omitted when
     * no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link OrderDeliverySummary}. Method, type
     * and recipient of governing_delivery_selection_id. The address remains in
     * delivery_destination. Omitted when no shipment or local-delivery selection governs the
     * order. previous_attributes.delivery.anyOf[2] (Value): null.
     * previous_attributes.delivery_destination (Optional): {@link OrderDeliveryDestination} or
     * null. The shipment or local-delivery destination committed for this order. Payment freezes
     * this value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified.
     * previous_attributes.delivery_destination.anyOf[1] (Value): {@link OrderDeliveryDestination}.
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscount} or null. Discounts
     * applied to the order, each with its amount, status, and the line items and charges it
     * covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link OrderDiscount}.
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. previous_attributes.discounts.anyOf[1][] (Value): {@link OrderDiscount}. A
     * discount applied to an order, with its amount, status, and the line items and charges it
     * covers. It comes from a manual discount or a promotion.
     * previous_attributes.discounts.anyOf[2] (Value): null. previous_attributes.dispute_status
     * (Optional): string or null. Aggregate dispute state across the order's counted payment
     * intents, excluding payment_returned. Always returned to merchant credentials and omitted
     * from buyer reads. Open states take precedence in this order: needs_response, under_review,
     * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state
     * wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual
     * cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link Fulfillment} or null.
     * Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link Fulfillment}.
     * Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1][] (Value): {@link Fulfillment}. Work required to
     * deliver an order's items. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link OrderGiftCardEstimate} or null. An
     * estimate of how the order balance splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link OrderGiftCardEstimate}. An
     * estimate of how the order balance splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[2] (Value): null.
     * previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlement} or null. The gift card redemptions applied to the order's payments.
     * previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of {@link
     * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
     * previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card. previous_attributes.gift_card_settlements.anyOf[2] (Value):
     * null. previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift
     * cards can pay for this order now. Gift cards pay only USD orders that still accept changes,
     * are not subscription purchases, and whose merchant has at least one gift card that is not
     * closed in this environment. Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[1] (Value): boolean. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link OrderGiftCardSelection} or null.
     * Gift cards available to pay the order, with each card's available balance.
     * previous_attributes.gift_cards.anyOf[1] (Value): Array of {@link OrderGiftCardSelection}.
     * Gift cards available to pay the order, with each card's available balance.
     * previous_attributes.gift_cards.anyOf[1][] (Value): {@link OrderGiftCardSelection}. A gift
     * card available to pay an order, with its available balance and the last four characters of
     * its code. previous_attributes.gift_cards.anyOf[2] (Value): null.
     * previous_attributes.governing_delivery_selection_id (Optional): string or null or null. ID
     * of the delivery selection that governs this order, including pickup choices without a
     * delivery destination: the checkout's provisional selection before payment, and the selection
     * a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. previous_attributes.governing_delivery_selection_id.anyOf[1] (Value):
     * string or null. ID of the delivery selection that governs this order, including pickup
     * choices without a delivery destination: the checkout's provisional selection before payment,
     * and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandover} or null. Carry-out handover:
     * every physical item is handed to the buyer at this location when the order is paid, in place
     * of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent
     * without a handover. previous_attributes.handover.anyOf[1] (Value): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link InventoryRoutingSource} or
     * null. Where this order's tracked demand is routed. Required before an order containing
     * tracked variants can hold stock. previous_attributes.inventory_routing_source.anyOf[1]
     * (Value): {@link InventoryRoutingSource}. Where this order's tracked demand is routed.
     * Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null or null. The invoice associated
     * with this order. Null when the order has no invoice. A replacement invoice replaces this ID;
     * voiding an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string or
     * null. The invoice associated with this order. Null when the order has no invoice. A
     * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItem} or null. Items the
     * order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link OrderLineItem}. Items the
     * order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link OrderLineItem}. An item purchased
     * in an order. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for
     * key, value, and size rules. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null or null. When `payment_status`
     * became `paid`, including a final capture that releases the remaining balance. Set once and
     * never changed, including after refunds. `null` when `payment_status` isn't `paid`, including
     * an order whose balance was written off without being paid.
     * previous_attributes.paid_at.anyOf[1] (Value): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment
     * intents created to collect this order. previous_attributes.payment_intent_ids.anyOf[1][]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_ids.anyOf[2] (Value): null.
     * previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary} or null. Payment intents included when `expand` names
     * `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. previous_attributes.payment_intents.anyOf[1][] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null or null.
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string or null. Order that paid
     * for this prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link PricingAmounts} or null. The
     * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
     * previous_attributes.pricing_amounts.anyOf[1] (Value): {@link PricingAmounts}. The order's
     * money totals: subtotal, discounts, charges, tax, requested tip, and total.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlement} or null. Value applied to this order from items the buyer
     * returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlement}. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link OrderSettlementAmounts} or null.
     * How much of the order has been paid, refunded, credited, written off, and settled as tips,
     * and what is still outstanding. previous_attributes.settlement_amounts.anyOf[1] (Value):
     * {@link OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
     * written off, and settled as tips, and what is still outstanding. Money collected, returned,
     * waived, and still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether the order still accepts
     * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note
     * edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): {@link ExpandedSubscriptionSummary} or null or null. Subscription summary
     * included when `expand` names `subscription`; `null` when expanded and this order does not
     * bill a subscription. Present only when `expand` includes `subscription`; `null` when
     * expanded and there is no related subscription. previous_attributes.subscription.anyOf[1]
     * (Value): {@link ExpandedSubscriptionSummary} or null. Subscription summary included when
     * `expand` names `subscription`; `null` when expanded and this order does not bill a
     * subscription. Present only when `expand` includes `subscription`; `null` when expanded and
     * there is no related subscription. previous_attributes.subscription.anyOf[1].anyOf[1]
     * (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary fields, including
     * status, billing period, and next billing time, returned when the subscription is expanded.
     * previous_attributes.subscription.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription.anyOf[2] (Value): null.
     * previous_attributes.subscription_cycle (Optional): integer or null. Charged subscription
     * cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
     * not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order.
     * previous_attributes.subscription_delivery_number.anyOf[1] (Value): integer or null. Position
     * of this delivery among the deliveries one charge paid for, starting at 2. Null when this is
     * not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null or null. Plan summary included when `expand` names
     * `subscription_plan`; `null` when expanded and this order does not bill a subscription plan.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary} or null. Plan summary included when `expand` names
     * `subscription_plan`; `null` when expanded and this order does not bill a subscription plan.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. previous_attributes.subscription_plan.anyOf[1].anyOf[1]
     * (Value): {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields,
     * including name, billing interval, currency, and status, returned when the plan is expanded.
     * previous_attributes.subscription_plan.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTax} or null. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * previous_attributes.tax.anyOf[1] (Value): {@link OrderTax}. The order's tax state: whether
     * tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.ticketed_event
     * (Optional): {@link TicketedEvent} or null. Event and tickets this order sold through an
     * event payment link. Absent on other orders. previous_attributes.ticketed_event.anyOf[1]
     * (Value): {@link TicketedEvent}. Event and tickets this order sold through an event payment
     * link. Absent on other orders. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link Tip} or null. Tips on the order, each
     * with its requested, settled, and refunded amounts. A tip cleared before payment stays listed
     * as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link Tip}. Tips on the
     * order, each with its requested, settled, and refunded amounts. A tip cleared before payment
     * stays listed as canceled. previous_attributes.tips.anyOf[1][] (Value): {@link Tip}. A tip on
     * an order, with its requested, settled, and refunded amounts, status, and how it was paid.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null or null. The earliest open or resolving payment review on this order's counted
         * payments. `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string or null.
         * The earliest open or resolving payment review on this order's counted payments. `null`
         * when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmounts} or null. The amounts authorized and still capturable
         * on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. authorization_amounts.anyOf[2] (Value): null. buyer_contact (Optional): {@link
         * CheckoutBuyerContact} or null. Email and phone saved when payment started, from the pay
         * request's buyer_contact or the paying checkout session's saved contact. It does not
         * change the linked customer. buyer_contact.anyOf[1] (Value): {@link
         * CheckoutBuyerContact}. Email and phone saved when payment started, from the pay
         * request's buyer_contact or the paying checkout session's saved contact. It does not
         * change the linked customer. buyer_contact.anyOf[2] (Value): null. buyer_note (Optional):
         * string or null. A note to the buyer. buyer_note.anyOf[1] (Value): string. A note to the
         * buyer. buyer_note.anyOf[2] (Value): null. charges (Optional): Array of {@link
         * OrderCharge} or null. Charges added to the order, such as delivery or service fees, each
         * with its applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of
         * {@link OrderCharge}. Charges added to the order, such as delivery or service fees, each
         * with its applied amount, tax, and refunded amount. charges.anyOf[1][] (Value): {@link
         * OrderCharge}. An additional charge applied to an order. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null or null. The reference the payment
         * link URL or resolve request carried, such as your user ID. `null` when none was sent or
         * checkout did not start from a payment link. Returned only to merchant credentials;
         * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not
         * proof of identity. Always present with merchant credentials. client_reference.anyOf[1]
         * (Value): string or null. The reference the payment link URL or resolve request carried,
         * such as your user ID. `null` when none was sent or checkout did not start from a payment
         * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
         * buyer's browser, so treat it as a claim, not proof of identity. Always present with
         * merchant credentials. minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value):
         * null. closed_at (Optional): string or null. When the order closed. Present exactly when
         * status is closed. Set once at the transition and never changed. closed_at.anyOf[1]
         * (Value): string. When the order closed. Present exactly when status is closed. Set once
         * at the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswer} or null. The buyer's
         * answers to the payment link's custom fields, recorded when checkout started, in the
         * order the link showed the fields. Each answer keeps the field's key, label, and type
         * from that moment, so later changes to the link don't change it. Optional fields the
         * buyer left blank are left out. Read-only. Empty when the order didn't come from a
         * payment link, the link had no custom fields, or the buyer answered none. Orders created
         * before Flint recorded answers here also return an empty list and keep their answers in
         * `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned
         * only to merchant credentials; omitted for buyer credentials. Always present with
         * merchant credentials. custom_field_answers.anyOf[1] (Value): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * Always present with merchant credentials. maxItems: 20. custom_field_answers.anyOf[1][]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_field_answers.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Customer summary
         * included when `expand` names `customer`; `null` when expanded and no customer is linked.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[1].anyOf[2] (Value): null. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string or null. ID of the customer this order belongs to.
         * customer_id.anyOf[1] (Value): string. ID of the customer this order belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * deferred_promotions (Optional): Array of {@link DeferredPromotion} or null. Promotions
         * accepted at subscription signup. They attach when the subscription is provisioned and
         * first discount its first charged cycle. They do not discount this order and are separate
         * from discounts and order totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link DeferredPromotion}. Promotions
         * accepted at subscription signup. They attach when the subscription is provisioned and
         * first discount its first charged cycle. They do not discount this order and are separate
         * from discounts and order totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1][] (Value): {@link DeferredPromotion}. A promotion accepted
         * at subscription signup for the subscription's first charged cycle. It does not discount
         * the signup order. deferred_promotions.anyOf[2] (Value): null. delivery (Optional):
         * {@link OrderDeliverySummary} or null. Method, type and recipient of
         * governing_delivery_selection_id. The address remains in delivery_destination. Omitted
         * when no shipment or local-delivery selection governs the order. delivery.anyOf[1]
         * (Value): {@link OrderDeliverySummary}. Method, type and recipient of
         * governing_delivery_selection_id. The address remains in delivery_destination. Omitted
         * when no shipment or local-delivery selection governs the order. delivery.anyOf[2]
         * (Value): null. delivery_destination (Optional): {@link OrderDeliveryDestination} or
         * null. The shipment or local-delivery destination committed for this order. Payment
         * freezes this value; fulfillment recipient changes do not replace it. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified.
         * delivery_destination.anyOf[1] (Value): {@link OrderDeliveryDestination}. The shipment or
         * local-delivery destination committed for this order. Payment freezes this value;
         * fulfillment recipient changes do not replace it. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified.
         * delivery_destination.anyOf[2] (Value): null. discounts (Optional): Array of {@link
         * OrderDiscount} or null. Discounts applied to the order, each with its amount, status,
         * and the line items and charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscount}. Discounts applied to the order, each with its amount, status, and the
         * line items and charges it covers. discounts.anyOf[1][] (Value): {@link OrderDiscount}. A
         * discount applied to an order, with its amount, status, and the line items and charges it
         * covers. It comes from a manual discount or a promotion. discounts.anyOf[2] (Value):
         * null. dispute_status (Optional): string or null. Aggregate dispute state across the
         * order's counted payment intents, excluding payment_returned. Always returned to merchant
         * credentials and omitted from buyer reads. Open states take precedence in this order:
         * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other.
         * Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none
         * when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}.
         * Always present with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link Fulfillment} or null.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link Fulfillment}. Fulfillments created for
         * the order, each covering a set of its line items. fulfillments.anyOf[1][] (Value):
         * {@link Fulfillment}. Work required to deliver an order's items. fulfillments.anyOf[2]
         * (Value): null. gift_card_estimate (Optional): {@link OrderGiftCardEstimate} or null. An
         * estimate of how the order balance splits between gift cards and the payment processor.
         * gift_card_estimate.anyOf[1] (Value): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor.
         * gift_card_estimate.anyOf[2] (Value): null. gift_card_settlements (Optional): Array of
         * {@link OrderGiftCardSettlement} or null. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements.anyOf[1][] (Value): {@link OrderGiftCardSettlement}. A gift card
         * redemption applied to an order payment, with the amount, tip, and gift card.
         * gift_card_settlements.anyOf[2] (Value): null. gift_card_tender_enabled (Optional):
         * boolean or null. Whether gift cards can pay for this order now. Gift cards pay only USD
         * orders that still accept changes, are not subscription purchases, and whose merchant has
         * at least one gift card that is not closed in this environment. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Recomputed on each read; a spent but open
         * card still counts. gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards
         * (Optional): Array of {@link OrderGiftCardSelection} or null. Gift cards available to pay
         * the order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of
         * {@link OrderGiftCardSelection}. Gift cards available to pay the order, with each card's
         * available balance. gift_cards.anyOf[1][] (Value): {@link OrderGiftCardSelection}. A gift
         * card available to pay an order, with its available balance and the last four characters
         * of its code. gift_cards.anyOf[2] (Value): null. governing_delivery_selection_id
         * (Optional): string or null or null. ID of the delivery selection that governs this
         * order, including pickup choices without a delivery destination: the checkout's
         * provisional selection before payment, and the selection a payment committed after. Read
         * it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection
         * governs the order. While set, change the destination through the delivery selection.
         * governing_delivery_selection_id.anyOf[1] (Value): string or null. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandover} or null. Carry-out handover: every
         * physical item is handed to the buyer at this location when the order is paid, in place
         * of a delivery selection. Payment then creates one completed `handover` fulfillment.
         * Absent without a handover. handover.anyOf[1] (Value): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSource} or null. Where this order's tracked demand is routed.
         * Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where this
         * order's tracked demand is routed. Required before an order containing tracked variants
         * can hold stock. inventory_routing_source.anyOf[2] (Value): null. invoice_id (Optional):
         * string or null or null. The invoice associated with this order. Null when the order has
         * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * invoice_id.anyOf[1] (Value): string or null. The invoice associated with this order.
         * Null when the order has no invoice. A replacement invoice replaces this ID; voiding an
         * invoice preserves it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2]
         * (Value): null. line_items (Optional): Array of {@link OrderLineItem} or null. Items the
         * order sells, each with its pricing, tax, and fulfillment quantities. line_items.anyOf[1]
         * (Value): Array of {@link OrderLineItem}. Items the order sells, each with its pricing,
         * tax, and fulfillment quantities. line_items.anyOf[1][] (Value): {@link OrderLineItem}.
         * An item purchased in an order. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null or null. When `payment_status` became `paid`, including a final capture that
         * releases the remaining balance. Set once and never changed, including after refunds.
         * `null` when `payment_status` isn't `paid`, including an order whose balance was written
         * off without being paid. paid_at.anyOf[1] (Value): string or null. When `payment_status`
         * became `paid`, including a final capture that releases the remaining balance. Set once
         * and never changed, including after refunds. `null` when `payment_status` isn't `paid`,
         * including an order whose balance was written off without being paid. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids
         * (Optional): Array of string or null. IDs of the payment intents created to collect this
         * order. payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents
         * created to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link ExpandedPaymentIntentSummary} or null.
         * Payment intents included when `expand` names `payment_intents`. payment_intents.anyOf[1]
         * (Value): Array of {@link ExpandedPaymentIntentSummary}. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
         * status, and capture method, returned when the payment intent is expanded.
         * payment_intents.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * payment_link_id.anyOf[1] (Value): string. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_id.anyOf[2] (Value): null. payment_status (Optional): string or null.
         * Collection progress. An invoice write-off also completes collection without receiving
         * the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[1] (Value): string. Collection progress. An invoice write-off also
         * completes collection without receiving the written-off amount. Value enum: "unpaid",
         * "partially_paid", "paid". payment_status.anyOf[2] (Value): null. pending_order_edit_id
         * (Optional): string or null or null. The order edit waiting for its balance payment.
         * While it is set, the units that edit removes can't join a fulfillment and the order
         * refuses another edit. `null` when there is none. Omitted for buyer credentials. Always
         * present with merchant credentials. pending_order_edit_id.anyOf[1] (Value): string or
         * null. The order edit waiting for its balance payment. While it is set, the units that
         * edit removes can't join a fulfillment and the order refuses another edit. `null` when
         * there is none. Omitted for buyer credentials. Always present with merchant credentials.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". pending_order_edit_id.anyOf[2] (Value): null.
         * prepayment_order_id (Optional): string or null or null. Order that paid for this prepaid
         * delivery. Null when this is not a prepaid delivery order. prepayment_order_id.anyOf[1]
         * (Value): string or null. Order that paid for this prepaid delivery. Null when this is
         * not a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * prepayment_order_id.anyOf[2] (Value): null. pricing_amounts (Optional): {@link
         * PricingAmounts} or null. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. pricing_amounts.anyOf[1] (Value): {@link PricingAmounts}. The
         * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
         * pricing_amounts.anyOf[2] (Value): null. refund_ids (Optional): Array of string or null.
         * IDs of the refunds that name this order. This includes refunds Flint makes to return a
         * payment it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids.anyOf[1] (Value): Array of
         * string. IDs of the refunds that name this order. This includes refunds Flint makes to
         * return a payment it couldn't accept (`reason` `payment_returned`), which never count
         * toward `refund_status` or the order's refunded amounts. refund_ids.anyOf[1][] (Value):
         * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null.
         * refund_status (Optional): string or null. Refund progress for collected money. Refunds
         * with `reason` `payment_returned` return money the order never received and don't count.
         * Value enum: "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value):
         * string. Refund progress for collected money. Refunds with `reason` `payment_returned`
         * return money the order never received and don't count. Value enum: "none",
         * "partially_refunded", "refunded". refund_status.anyOf[2] (Value): null.
         * return_credit_settlements (Optional): Array of {@link OrderReturnCreditSettlement} or
         * null. Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements.anyOf[1] (Value): Array of {@link
         * OrderReturnCreditSettlement}. Value applied to this order from items the buyer returned,
         * such as an exchange's replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements.anyOf[1][] (Value): {@link OrderReturnCreditSettlement}. A
         * return credit applied to an order payment, with the amount and the return and resolution
         * it came from. return_credit_settlements.anyOf[2] (Value): null. return_resolution_id
         * (Optional): string or null. ID of the return resolution that created this order as a
         * replacement. Omitted for orders a return did not create. return_resolution_id.anyOf[1]
         * (Value): string. ID of the return resolution that created this order as a replacement.
         * Omitted for orders a return did not create. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value): null.
         * settlement_amounts (Optional): {@link OrderSettlementAmounts} or null. How much of the
         * order has been paid, refunded, credited, written off, and settled as tips, and what is
         * still outstanding. settlement_amounts.anyOf[1] (Value): {@link OrderSettlementAmounts}.
         * How much of the order has been paid, refunded, credited, written off, and settled as
         * tips, and what is still outstanding. Money collected, returned, waived, and still owed
         * on a bill. settlement_amounts.anyOf[2] (Value): null. status (Optional): string or null.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[1] (Value): string. Whether the order still accepts
         * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note
         * edits continue on a closed order. Value enum: "open", "closed". status.anyOf[2] (Value):
         * null. subscription (Optional): {@link ExpandedSubscriptionSummary} or null or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary} or null. Subscription
         * summary included when `expand` names `subscription`; `null` when expanded and this order
         * does not bill a subscription. Present only when `expand` includes `subscription`; `null`
         * when expanded and there is no related subscription. subscription.anyOf[1].anyOf[1]
         * (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary fields, including
         * status, billing period, and next billing time, returned when the subscription is
         * expanded. subscription.anyOf[1].anyOf[2] (Value): null. subscription.anyOf[2] (Value):
         * null. subscription_cycle (Optional): integer or null. Charged subscription cycle
         * associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
         * not advance the cycle. subscription_cycle.anyOf[1] (Value): integer. Charged
         * subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
         * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
         * subscription_cycle.anyOf[2] (Value): null. subscription_delivery_changed_at (Optional):
         * string or null. Time the subscriber changed delivery after this paid renewal was
         * prepared. The order keeps its committed destination until you correct it or refund and
         * replace it. subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
         * subscriber changed delivery after this paid renewal was prepared. The order keeps its
         * committed destination until you correct it or refund and replace it. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value):
         * null. subscription_delivery_number (Optional): integer or null or null. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. subscription_delivery_number.anyOf[1] (Value): integer or
         * null. Position of this delivery among the deliveries one charge paid for, starting at 2.
         * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null or null.
         * Plan summary included when `expand` names `subscription_plan`; `null` when expanded and
         * this order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary} or null.
         * Plan summary included when `expand` names `subscription_plan`; `null` when expanded and
         * this order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1].anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[1].anyOf[2] (Value):
         * null. subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string
         * or null. ID of the subscription plan this order bills. Absent on an order that isn't
         * from a subscription. subscription_plan_id.anyOf[1] (Value): string. ID of the
         * subscription plan this order bills. Absent on an order that isn't from a subscription.
         * Example: "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link OrderTax} or null. The
         * order's tax state: whether tax is enabled, its status, location, exemption, and
         * per-jurisdiction rows. tax.anyOf[1] (Value): {@link OrderTax}. The order's tax state:
         * whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
         * tax.anyOf[2] (Value): null. ticketed_event (Optional): {@link TicketedEvent} or null.
         * Event and tickets this order sold through an event payment link. Absent on other orders.
         * ticketed_event.anyOf[1] (Value): {@link TicketedEvent}. Event and tickets this order
         * sold through an event payment link. Absent on other orders. ticketed_event.anyOf[2]
         * (Value): null. tips (Optional): Array of {@link Tip} or null. Tips on the order, each
         * with its requested, settled, and refunded amounts. A tip cleared before payment stays
         * listed as canceled. tips.anyOf[1] (Value): Array of {@link Tip}. Tips on the order, each
         * with its requested, settled, and refunded amounts. A tip cleared before payment stays
         * listed as canceled. tips.anyOf[1][] (Value): {@link Tip}. A tip on an order, with its
         * requested, settled, and refunded amounts, status, and how it was paid. tips.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Order version for optimistic concurrency. Send this value as the expected
         * version when changing the order. Increases with every change to the order. Ignore an
         * order webhook snapshot whose version is lower than one you have already applied.
         * version.anyOf[1] (Value): integer. Order version for optimistic concurrency. Send this
         * value as the expected version when changing the order. Increases with every change to
         * the order. Ignore an order webhook snapshot whose version is lower than one you have
         * already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string or null. The earliest
             * open or resolving payment review on this order's counted payments. `null` when no
             * review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             * anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmounts}. The amounts authorized and still
             * capturable on the order's payments. anyOf[2] (Value): null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmounts) | (null));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContact}. Email and phone saved when payment
             * started, from the pay request's buyer_contact or the paying checkout session's saved
             * contact. It does not change the linked customer. anyOf[2] (Value): null.
             */
            "buyer_contact"?: ((CheckoutBuyerContact) | (null));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link OrderCharge}.
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1][] (Value): {@link OrderCharge}. An
             * additional charge applied to an order. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderCharge>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The reference the payment link URL or
             * resolve request carried, such as your user ID. `null` when none was sent or checkout
             * did not start from a payment link. Returned only to merchant credentials; omitted
             * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
             * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string | null) | (null) | (unknown));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
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
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom
             * fields, recorded when checkout started, in the order the link showed the fields.
             * Each answer keeps the field's key, label, and type from that moment, so later
             * changes to the link don't change it. Optional fields the buyer left blank are left
             * out. Read-only. Empty when the order didn't come from a payment link, the link had
             * no custom fields, or the buyer answered none. Orders created before Flint recorded
             * answers here also return an empty list and keep their answers in `metadata` as
             * `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswer>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
             * `customer`; `null` when expanded and no customer is linked. Present only when
             * `expand` includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link DeferredPromotion}.
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1][] (Value): {@link DeferredPromotion}. A
             * promotion accepted at subscription signup for the subscription's first charged
             * cycle. It does not discount the signup order. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotion>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummary}. Method, type and
             * recipient of governing_delivery_selection_id. The address remains in
             * delivery_destination. Omitted when no shipment or local-delivery selection governs
             * the order. anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummary) | (null));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestination}. The shipment or local-delivery
             * destination committed for this order. Payment freezes this value; fulfillment
             * recipient changes do not replace it. Omitted for a checkout session credential that
             * doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestination) | (null));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link OrderDiscount}. Discounts
             * applied to the order, each with its amount, status, and the line items and charges
             * it covers. anyOf[1][] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscount>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
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
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link Fulfillment}. Fulfillments created for the order, each
             * covering a set of its line items. anyOf[1][] (Value): {@link Fulfillment}. Work
             * required to deliver an order's items. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<Fulfillment>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimate}. An estimate of how the
             * order balance splits between gift cards and the payment processor. anyOf[2] (Value):
             * null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimate) | (null));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlement}. The gift card redemptions applied to the order's
             * payments. anyOf[1][] (Value): {@link OrderGiftCardSettlement}. A gift card
             * redemption applied to an order payment, with the amount, tip, and gift card.
             * anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlement>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts. anyOf[1] (Value): boolean. Whether gift cards
             * can pay for this order now. Gift cards pay only USD orders that still accept
             * changes, are not subscription purchases, and whose merchant has at least one gift
             * card that is not closed in this environment. Recomputed on each read; a spent but
             * open card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
             * order, with each card's available balance. anyOf[1][] (Value): {@link
             * OrderGiftCardSelection}. A gift card available to pay an order, with its available
             * balance and the last four characters of its code. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelection>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string or null. ID of the delivery selection that governs this order,
             * including pickup choices without a delivery destination: the checkout's provisional
             * selection before payment, and the selection a payment committed after. Read it with
             * GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs
             * the order. While set, change the destination through the delivery selection.
             * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandover}. Carry-out handover: every physical item is handed to the
             * buyer at this location when the order is paid, in place of a delivery selection.
             * Payment then creates one completed `handover` fulfillment. Absent without a
             * handover. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandover) | (null));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link InventoryRoutingSource}.
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSource) | (null));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string or null. The invoice associated with this order. Null when the order
             * has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves
             * it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string | null) | (null) | (unknown));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItem}. Items the order sells, each with
             * its pricing, tax, and fulfillment quantities. anyOf[1][] (Value): {@link
             * OrderLineItem}. An item purchased in an order. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItem>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. Stored caller-owned key-value data.
             * See `MetadataInput` for key, value, and size rules. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string or null. When `payment_status` became
             * `paid`, including a final capture that releases the remaining balance. Set once and
             * never changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string | null) | (null) | (unknown));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummary}. Payment intents included when
             * `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummary>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The order edit waiting for its
             * balance payment. While it is set, the units that edit removes can't join a
             * fulfillment and the order refuses another edit. `null` when there is none. Omitted
             * for buyer credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string or null. Order that paid for this prepaid delivery.
             * Null when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmounts}. The order's money totals: subtotal,
             * discounts, charges, tax, requested tip, and total. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlement}. Value applied to this order from items
             * the buyer returned, such as an exchange's replacement order. Included in
             * settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlement>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
             * written off, and settled as tips, and what is still outstanding. Money collected,
             * returned, waived, and still owed on a bill. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmounts) | (null));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary} or null. Subscription summary
             * included when `expand` names `subscription`; `null` when expanded and this order
             * does not bill a subscription. Present only when `expand` includes `subscription`;
             * `null` when expanded and there is no related subscription. anyOf[1].anyOf[1]
             * (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary fields,
             * including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "subscription"?: ((((ExpandedSubscriptionSummary) | (null))) | (null) | (unknown));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer or null.
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24. anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary} or
             * null. Plan summary included when `expand` names `subscription_plan`; `null` when
             * expanded and this order does not bill a subscription plan. Present only when
             * `expand` includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1].anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((((ExpandedSubscriptionPlanSummary) | (null))) | (null) | (unknown));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTax}. The order's tax state:
             * whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTax) | (null));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEvent}. Event and tickets this order sold
             * through an event payment link. Absent on other orders. anyOf[2] (Value): null.
             */
            "ticketed_event"?: ((TicketedEvent) | (null));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * Tip}. Tips on the order, each with its requested, settled, and refunded amounts. A
             * tip cleared before payment stays listed as canceled. anyOf[1][] (Value): {@link
             * Tip}. A tip on an order, with its requested, settled, and refunded amounts, status,
             * and how it was paid. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<Tip>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_payment_review_id (Optional): string or null or null. The
     * earliest open or resolving payment review on this order's counted payments. `null` when no
     * review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. previous_attributes.active_payment_review_id.anyOf[1] (Value):
     * string or null. The earliest open or resolving payment review on this order's counted
     * payments. `null` when no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     * previous_attributes.active_payment_review_id.anyOf[2] (Value): null.
     * previous_attributes.authorization_amounts (Optional): {@link OrderAuthorizationAmounts} or
     * null. The amounts authorized and still capturable on the order's payments.
     * previous_attributes.authorization_amounts.anyOf[1] (Value): {@link
     * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
     * payments. previous_attributes.authorization_amounts.anyOf[2] (Value): null.
     * previous_attributes.buyer_contact (Optional): {@link CheckoutBuyerContact} or null. Email
     * and phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[1] (Value): {@link CheckoutBuyerContact}. Email and
     * phone saved when payment started, from the pay request's buyer_contact or the paying
     * checkout session's saved contact. It does not change the linked customer.
     * previous_attributes.buyer_contact.anyOf[2] (Value): null. previous_attributes.buyer_note
     * (Optional): string or null. A note to the buyer. previous_attributes.buyer_note.anyOf[1]
     * (Value): string. A note to the buyer. previous_attributes.buyer_note.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link OrderCharge} or null. Charges added
     * to the order, such as delivery or service fees, each with its applied amount, tax, and
     * refunded amount. previous_attributes.charges.anyOf[1] (Value): Array of {@link OrderCharge}.
     * Charges added to the order, such as delivery or service fees, each with its applied amount,
     * tax, and refunded amount. previous_attributes.charges.anyOf[1][] (Value): {@link
     * OrderCharge}. An additional charge applied to an order. previous_attributes.charges.anyOf[2]
     * (Value): null. previous_attributes.checkout_session_ids (Optional): Array of string or null.
     * IDs of the checkout sessions opened for this order.
     * previous_attributes.checkout_session_ids.anyOf[1] (Value): Array of string. IDs of the
     * checkout sessions opened for this order. previous_attributes.checkout_session_ids.anyOf[1][]
     * (Value): string. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_ids.anyOf[2] (Value): null.
     * previous_attributes.client_reference (Optional): string or null or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials.
     * previous_attributes.client_reference.anyOf[1] (Value): string or null. The reference the
     * payment link URL or resolve request carried, such as your user ID. `null` when none was sent
     * or checkout did not start from a payment link. Returned only to merchant credentials;
     * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
     * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
     * previous_attributes.client_reference.anyOf[2] (Value): null. previous_attributes.closed_at
     * (Optional): string or null. When the order closed. Present exactly when status is closed.
     * Set once at the transition and never changed. previous_attributes.closed_at.anyOf[1]
     * (Value): string. When the order closed. Present exactly when status is closed. Set once at
     * the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.closed_at.anyOf[2] (Value): null. previous_attributes.closed_reason
     * (Optional): string or null. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[1] (Value): string. Why the order closed. Present
     * exactly when status is closed. Set once at closure. Unrecognized reasons are returned as
     * other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * previous_attributes.closed_reason.anyOf[2] (Value): null.
     * previous_attributes.closed_reason_message (Optional): string or null. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[1] (Value): string. The caller note
     * supplied when closing the order. System closures leave it absent. It is not shown to the
     * buyer. previous_attributes.closed_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.custom_field_answers (Optional): Array of {@link
     * CustomFieldAnswer} or null. The buyer's answers to the payment link's custom fields,
     * recorded when checkout started, in the order the link showed the fields. Each answer keeps
     * the field's key, label, and type from that moment, so later changes to the link don't change
     * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
     * didn't come from a payment link, the link had no custom fields, or the buyer answered none.
     * Orders created before Flint recorded answers here also return an empty list and keep their
     * answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers.
     * Returned only to merchant credentials; omitted for buyer credentials. Always present with
     * merchant credentials. previous_attributes.custom_field_answers.anyOf[1] (Value): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
     * when checkout started, in the order the link showed the fields. Each answer keeps the
     * field's key, label, and type from that moment, so later changes to the link don't change it.
     * Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't
     * come from a payment link, the link had no custom fields, or the buyer answered none. Orders
     * created before Flint recorded answers here also return an empty list and keep their answers
     * in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned
     * only to merchant credentials; omitted for buyer credentials. Always present with merchant
     * credentials. maxItems: 20. previous_attributes.custom_field_answers.anyOf[1][] (Value):
     * {@link CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
     * was when checkout started. `custom_field_type` determines the type of `value`.
     * previous_attributes.custom_field_answers.anyOf[2] (Value): null.
     * previous_attributes.customer (Optional): {@link ExpandedCustomerSummary} or null or null.
     * Customer summary included when `expand` names `customer`; `null` when expanded and no
     * customer is linked. Present only when `expand` includes `customer`; `null` when expanded and
     * there is no related customer. previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary} or null. Customer summary included when `expand` names `customer`;
     * `null` when expanded and no customer is linked. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * previous_attributes.customer.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.customer.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. ID of the customer this order belongs to.
     * previous_attributes.customer_id.anyOf[1] (Value): string. ID of the customer this order
     * belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deferred_promotions (Optional): Array of {@link DeferredPromotion} or
     * null. Promotions accepted at subscription signup. They attach when the subscription is
     * provisioned and first discount its first charged cycle. They do not discount this order and
     * are separate from discounts and order totals. Always present; empty when no promotions are
     * deferred. previous_attributes.deferred_promotions.anyOf[1] (Value): Array of {@link
     * DeferredPromotion}. Promotions accepted at subscription signup. They attach when the
     * subscription is provisioned and first discount its first charged cycle. They do not discount
     * this order and are separate from discounts and order totals. Always present; empty when no
     * promotions are deferred. previous_attributes.deferred_promotions.anyOf[1][] (Value): {@link
     * DeferredPromotion}. A promotion accepted at subscription signup for the subscription's first
     * charged cycle. It does not discount the signup order.
     * previous_attributes.deferred_promotions.anyOf[2] (Value): null. previous_attributes.delivery
     * (Optional): {@link OrderDeliverySummary} or null. Method, type and recipient of
     * governing_delivery_selection_id. The address remains in delivery_destination. Omitted when
     * no shipment or local-delivery selection governs the order.
     * previous_attributes.delivery.anyOf[1] (Value): {@link OrderDeliverySummary}. Method, type
     * and recipient of governing_delivery_selection_id. The address remains in
     * delivery_destination. Omitted when no shipment or local-delivery selection governs the
     * order. previous_attributes.delivery.anyOf[2] (Value): null.
     * previous_attributes.delivery_destination (Optional): {@link OrderDeliveryDestination} or
     * null. The shipment or local-delivery destination committed for this order. Payment freezes
     * this value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified.
     * previous_attributes.delivery_destination.anyOf[1] (Value): {@link OrderDeliveryDestination}.
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified.
     * previous_attributes.delivery_destination.anyOf[2] (Value): null.
     * previous_attributes.discounts (Optional): Array of {@link OrderDiscount} or null. Discounts
     * applied to the order, each with its amount, status, and the line items and charges it
     * covers. previous_attributes.discounts.anyOf[1] (Value): Array of {@link OrderDiscount}.
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. previous_attributes.discounts.anyOf[1][] (Value): {@link OrderDiscount}. A
     * discount applied to an order, with its amount, status, and the line items and charges it
     * covers. It comes from a manual discount or a promotion.
     * previous_attributes.discounts.anyOf[2] (Value): null. previous_attributes.dispute_status
     * (Optional): string or null. Aggregate dispute state across the order's counted payment
     * intents, excluding payment_returned. Always returned to merchant credentials and omitted
     * from buyer reads. Open states take precedence in this order: needs_response, under_review,
     * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state
     * wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual
     * cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[1] (Value): string. Aggregate dispute state across
     * the order's counted payment intents, excluding payment_returned. Always returned to merchant
     * credentials and omitted from buyer reads. Open states take precedence in this order:
     * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise
     * the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no
     * disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
     * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_status (Optional): string or null. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[1] (Value): string. Aggregate progress across
     * the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed".
     * previous_attributes.fulfillment_status.anyOf[2] (Value): null.
     * previous_attributes.fulfillments (Optional): Array of {@link Fulfillment} or null.
     * Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1] (Value): Array of {@link Fulfillment}.
     * Fulfillments created for the order, each covering a set of its line items.
     * previous_attributes.fulfillments.anyOf[1][] (Value): {@link Fulfillment}. Work required to
     * deliver an order's items. previous_attributes.fulfillments.anyOf[2] (Value): null.
     * previous_attributes.gift_card_estimate (Optional): {@link OrderGiftCardEstimate} or null. An
     * estimate of how the order balance splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[1] (Value): {@link OrderGiftCardEstimate}. An
     * estimate of how the order balance splits between gift cards and the payment processor.
     * previous_attributes.gift_card_estimate.anyOf[2] (Value): null.
     * previous_attributes.gift_card_settlements (Optional): Array of {@link
     * OrderGiftCardSettlement} or null. The gift card redemptions applied to the order's payments.
     * previous_attributes.gift_card_settlements.anyOf[1] (Value): Array of {@link
     * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
     * previous_attributes.gift_card_settlements.anyOf[1][] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card. previous_attributes.gift_card_settlements.anyOf[2] (Value):
     * null. previous_attributes.gift_card_tender_enabled (Optional): boolean or null. Whether gift
     * cards can pay for this order now. Gift cards pay only USD orders that still accept changes,
     * are not subscription purchases, and whose merchant has at least one gift card that is not
     * closed in this environment. Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[1] (Value): boolean. Whether gift cards
     * can pay for this order now. Gift cards pay only USD orders that still accept changes, are
     * not subscription purchases, and whose merchant has at least one gift card that is not closed
     * in this environment. Recomputed on each read; a spent but open card still counts.
     * previous_attributes.gift_card_tender_enabled.anyOf[2] (Value): null.
     * previous_attributes.gift_cards (Optional): Array of {@link OrderGiftCardSelection} or null.
     * Gift cards available to pay the order, with each card's available balance.
     * previous_attributes.gift_cards.anyOf[1] (Value): Array of {@link OrderGiftCardSelection}.
     * Gift cards available to pay the order, with each card's available balance.
     * previous_attributes.gift_cards.anyOf[1][] (Value): {@link OrderGiftCardSelection}. A gift
     * card available to pay an order, with its available balance and the last four characters of
     * its code. previous_attributes.gift_cards.anyOf[2] (Value): null.
     * previous_attributes.governing_delivery_selection_id (Optional): string or null or null. ID
     * of the delivery selection that governs this order, including pickup choices without a
     * delivery destination: the checkout's provisional selection before payment, and the selection
     * a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. previous_attributes.governing_delivery_selection_id.anyOf[1] (Value):
     * string or null. ID of the delivery selection that governs this order, including pickup
     * choices without a delivery destination: the checkout's provisional selection before payment,
     * and the selection a payment committed after. Read it with GET
     * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order.
     * While set, change the destination through the delivery selection. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.governing_delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.handover (Optional): {@link OrderHandover} or null. Carry-out handover:
     * every physical item is handed to the buyer at this location when the order is paid, in place
     * of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent
     * without a handover. previous_attributes.handover.anyOf[1] (Value): {@link OrderHandover}.
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. previous_attributes.handover.anyOf[2]
     * (Value): null. previous_attributes.internal_note (Optional): string or null. A note for your
     * team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[1] (Value): string.
     * A note for your team. Buyer reads leave it out. previous_attributes.internal_note.anyOf[2]
     * (Value): null. previous_attributes.inventory_exception_reason (Optional): string or null.
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[1] (Value): string. Why inventory could
     * not be committed after payment. The cause remains after resolution. Omitted when no reason
     * was recorded. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required",
     * "auto_refund_failed", "policy_resolution_failed", "other".
     * previous_attributes.inventory_exception_reason.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_resolution_message (Optional): string or null. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[1] (Value): string. The
     * merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * previous_attributes.inventory_exception_resolution_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_exception_status (Optional): string or null. Whether an
     * inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[1] (Value): string. Whether
     * an inventory problem after payment needs attention. Value enum: "paid_inventory_failed",
     * "resolved". previous_attributes.inventory_exception_status.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. The reservation
     * holding stock for this order, when one exists.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. The reservation
     * holding stock for this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link InventoryRoutingSource} or
     * null. Where this order's tracked demand is routed. Required before an order containing
     * tracked variants can hold stock. previous_attributes.inventory_routing_source.anyOf[1]
     * (Value): {@link InventoryRoutingSource}. Where this order's tracked demand is routed.
     * Required before an order containing tracked variants can hold stock.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.invoice_id (Optional): string or null or null. The invoice associated
     * with this order. Null when the order has no invoice. A replacement invoice replaces this ID;
     * voiding an invoice preserves it. previous_attributes.invoice_id.anyOf[1] (Value): string or
     * null. The invoice associated with this order. Null when the order has no invoice. A
     * replacement invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link OrderLineItem} or null. Items the
     * order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link OrderLineItem}. Items the
     * order sells, each with its pricing, tax, and fulfillment quantities.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link OrderLineItem}. An item purchased
     * in an order. previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. ID of the merchant this resource
     * belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant
     * this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for
     * key, value, and size rules. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Unique identifier for this order,
     * prefixed `ord_`. previous_attributes.order_id.anyOf[1] (Value): string. Unique identifier
     * for this order, prefixed `ord_`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable order number for receipts and merchant reference.
     * previous_attributes.order_number.anyOf[1] (Value): string. Human-readable order number for
     * receipts and merchant reference. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.origin (Optional): string or null. How the order was created. invoice
     * means a Quick Pay invoice created the order; attaching an invoice to an existing order
     * preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription", "invoice". previous_attributes.origin.anyOf[1] (Value): string. How the
     * order was created. invoice means a Quick Pay invoice created the order; attaching an invoice
     * to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription", "invoice". previous_attributes.origin.anyOf[2] (Value):
     * null. previous_attributes.paid_at (Optional): string or null or null. When `payment_status`
     * became `paid`, including a final capture that releases the remaining balance. Set once and
     * never changed, including after refunds. `null` when `payment_status` isn't `paid`, including
     * an order whose balance was written off without being paid.
     * previous_attributes.paid_at.anyOf[1] (Value): string or null. When `payment_status` became
     * `paid`, including a final capture that releases the remaining balance. Set once and never
     * changed, including after refunds. `null` when `payment_status` isn't `paid`, including an
     * order whose balance was written off without being paid. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents created to collect this order.
     * previous_attributes.payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment
     * intents created to collect this order. previous_attributes.payment_intent_ids.anyOf[1][]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_ids.anyOf[2] (Value): null.
     * previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummary} or null. Payment intents included when `expand` names
     * `payment_intents`. previous_attributes.payment_intents.anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummary}. Payment intents included when `expand` names
     * `payment_intents`. previous_attributes.payment_intents.anyOf[1][] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders.
     * previous_attributes.payment_link_id.anyOf[1] (Value): string. Payment link whose checkout
     * created this order. Absent for orders that did not come from a payment link. Filter GET
     * /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2] (Value): null.
     * previous_attributes.payment_status (Optional): string or null. Collection progress. An
     * invoice write-off also completes collection without receiving the written-off amount. Value
     * enum: "unpaid", "partially_paid", "paid". previous_attributes.payment_status.anyOf[1]
     * (Value): string. Collection progress. An invoice write-off also completes collection without
     * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * previous_attributes.payment_status.anyOf[2] (Value): null.
     * previous_attributes.pending_order_edit_id (Optional): string or null or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials.
     * previous_attributes.pending_order_edit_id.anyOf[1] (Value): string or null. The order edit
     * waiting for its balance payment. While it is set, the units that edit removes can't join a
     * fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer
     * credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.pending_order_edit_id.anyOf[2]
     * (Value): null. previous_attributes.prepayment_order_id (Optional): string or null or null.
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * previous_attributes.prepayment_order_id.anyOf[1] (Value): string or null. Order that paid
     * for this prepaid delivery. Null when this is not a prepaid delivery order. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.prepayment_order_id.anyOf[2] (Value):
     * null. previous_attributes.pricing_amounts (Optional): {@link PricingAmounts} or null. The
     * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
     * previous_attributes.pricing_amounts.anyOf[1] (Value): {@link PricingAmounts}. The order's
     * money totals: subtotal, discounts, charges, tax, requested tip, and total.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the refunds that name this order. This includes
     * refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`),
     * which never count toward `refund_status` or the order's refunded amounts.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the refunds that
     * name this order. This includes refunds Flint makes to return a payment it couldn't accept
     * (`reason` `payment_returned`), which never count toward `refund_status` or the order's
     * refunded amounts. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. Refund progress for collected
     * money. Refunds with `reason` `payment_returned` return money the order never received and
     * don't count. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.return_credit_settlements (Optional): Array of {@link
     * OrderReturnCreditSettlement} or null. Value applied to this order from items the buyer
     * returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1]
     * (Value): Array of {@link OrderReturnCreditSettlement}. Value applied to this order from
     * items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. previous_attributes.return_credit_settlements.anyOf[1][]
     * (Value): {@link OrderReturnCreditSettlement}. A return credit applied to an order payment,
     * with the amount and the return and resolution it came from.
     * previous_attributes.return_credit_settlements.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. previous_attributes.return_resolution_id.anyOf[1] (Value): string. ID of the return
     * resolution that created this order as a replacement. Omitted for orders a return did not
     * create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link OrderSettlementAmounts} or null.
     * How much of the order has been paid, refunded, credited, written off, and settled as tips,
     * and what is still outstanding. previous_attributes.settlement_amounts.anyOf[1] (Value):
     * {@link OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
     * written off, and settled as tips, and what is still outstanding. Money collected, returned,
     * waived, and still owed on a bill. previous_attributes.settlement_amounts.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether the order still accepts
     * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note
     * edits continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. Whether the order still accepts changes
     * and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits
     * continue on a closed order. Value enum: "open", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription
     * (Optional): {@link ExpandedSubscriptionSummary} or null or null. Subscription summary
     * included when `expand` names `subscription`; `null` when expanded and this order does not
     * bill a subscription. Present only when `expand` includes `subscription`; `null` when
     * expanded and there is no related subscription. previous_attributes.subscription.anyOf[1]
     * (Value): {@link ExpandedSubscriptionSummary} or null. Subscription summary included when
     * `expand` names `subscription`; `null` when expanded and this order does not bill a
     * subscription. Present only when `expand` includes `subscription`; `null` when expanded and
     * there is no related subscription. previous_attributes.subscription.anyOf[1].anyOf[1]
     * (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary fields, including
     * status, billing period, and next billing time, returned when the subscription is expanded.
     * previous_attributes.subscription.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription.anyOf[2] (Value): null.
     * previous_attributes.subscription_cycle (Optional): integer or null. Charged subscription
     * cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
     * not advance the cycle. previous_attributes.subscription_cycle.anyOf[1] (Value): integer.
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * previous_attributes.subscription_cycle.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_changed_at (Optional): string or null. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it.
     * previous_attributes.subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
     * subscriber changed delivery after this paid renewal was prepared. The order keeps its
     * committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     * previous_attributes.subscription_delivery_changed_at.anyOf[2] (Value): null.
     * previous_attributes.subscription_delivery_number (Optional): integer or null or null.
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order.
     * previous_attributes.subscription_delivery_number.anyOf[1] (Value): integer or null. Position
     * of this delivery among the deliveries one charge paid for, starting at 2. Null when this is
     * not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * previous_attributes.subscription_delivery_number.anyOf[2] (Value): null.
     * previous_attributes.subscription_id (Optional): string or null. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. ID of the subscription this
     * order bills. Absent on an order that isn't from a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". previous_attributes.subscription_id.anyOf[2] (Value):
     * null. previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null or null. Plan summary included when `expand` names
     * `subscription_plan`; `null` when expanded and this order does not bill a subscription plan.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary} or null. Plan summary included when `expand` names
     * `subscription_plan`; `null` when expanded and this order does not bill a subscription plan.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. previous_attributes.subscription_plan.anyOf[1].anyOf[1]
     * (Value): {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields,
     * including name, billing interval, currency, and status, returned when the plan is expanded.
     * previous_attributes.subscription_plan.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. ID of the subscription
     * plan this order bills. Absent on an order that isn't from a subscription. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". previous_attributes.subscription_plan_id.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Includes close when closure is allowed, and pay while open without an active attempt and
     * with an outstanding balance or payment-method setup available. Always present with merchant
     * credentials. [] enum: "close", "pay", "resolve_inventory_exception".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "close",
     * "pay", "resolve_inventory_exception". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link OrderTax} or null. The order's tax
     * state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * previous_attributes.tax.anyOf[1] (Value): {@link OrderTax}. The order's tax state: whether
     * tax is enabled, its status, location, exemption, and per-jurisdiction rows.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.ticketed_event
     * (Optional): {@link TicketedEvent} or null. Event and tickets this order sold through an
     * event payment link. Absent on other orders. previous_attributes.ticketed_event.anyOf[1]
     * (Value): {@link TicketedEvent}. Event and tickets this order sold through an event payment
     * link. Absent on other orders. previous_attributes.ticketed_event.anyOf[2] (Value): null.
     * previous_attributes.tips (Optional): Array of {@link Tip} or null. Tips on the order, each
     * with its requested, settled, and refunded amounts. A tip cleared before payment stays listed
     * as canceled. previous_attributes.tips.anyOf[1] (Value): Array of {@link Tip}. Tips on the
     * order, each with its requested, settled, and refunded amounts. A tip cleared before payment
     * stays listed as canceled. previous_attributes.tips.anyOf[1][] (Value): {@link Tip}. A tip on
     * an order, with its requested, settled, and refunded amounts, status, and how it was paid.
     * previous_attributes.tips.anyOf[2] (Value): null. previous_attributes.updated_at (Optional):
     * string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Order version for optimistic concurrency. Send this value as
     * the expected version when changing the order. Increases with every change to the order.
     * Ignore an order webhook snapshot whose version is lower than one you have already applied.
     * previous_attributes.version.anyOf[1] (Value): integer. Order version for optimistic
     * concurrency. Send this value as the expected version when changing the order. Increases with
     * every change to the order. Ignore an order webhook snapshot whose version is lower than one
     * you have already applied. Format: int64. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_payment_review_id (Optional): string or
         * null or null. The earliest open or resolving payment review on this order's counted
         * payments. `null` when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. active_payment_review_id.anyOf[1] (Value): string or null.
         * The earliest open or resolving payment review on this order's counted payments. `null`
         * when no review is open or resolving. List reviews with GET
         * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
         * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
         * active_payment_review_id.anyOf[2] (Value): null. authorization_amounts (Optional):
         * {@link OrderAuthorizationAmounts} or null. The amounts authorized and still capturable
         * on the order's payments. authorization_amounts.anyOf[1] (Value): {@link
         * OrderAuthorizationAmounts}. The amounts authorized and still capturable on the order's
         * payments. authorization_amounts.anyOf[2] (Value): null. buyer_contact (Optional): {@link
         * CheckoutBuyerContact} or null. Email and phone saved when payment started, from the pay
         * request's buyer_contact or the paying checkout session's saved contact. It does not
         * change the linked customer. buyer_contact.anyOf[1] (Value): {@link
         * CheckoutBuyerContact}. Email and phone saved when payment started, from the pay
         * request's buyer_contact or the paying checkout session's saved contact. It does not
         * change the linked customer. buyer_contact.anyOf[2] (Value): null. buyer_note (Optional):
         * string or null. A note to the buyer. buyer_note.anyOf[1] (Value): string. A note to the
         * buyer. buyer_note.anyOf[2] (Value): null. charges (Optional): Array of {@link
         * OrderCharge} or null. Charges added to the order, such as delivery or service fees, each
         * with its applied amount, tax, and refunded amount. charges.anyOf[1] (Value): Array of
         * {@link OrderCharge}. Charges added to the order, such as delivery or service fees, each
         * with its applied amount, tax, and refunded amount. charges.anyOf[1][] (Value): {@link
         * OrderCharge}. An additional charge applied to an order. charges.anyOf[2] (Value): null.
         * checkout_session_ids (Optional): Array of string or null. IDs of the checkout sessions
         * opened for this order. checkout_session_ids.anyOf[1] (Value): Array of string. IDs of
         * the checkout sessions opened for this order. checkout_session_ids.anyOf[1][] (Value):
         * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_ids.anyOf[2] (Value):
         * null. client_reference (Optional): string or null or null. The reference the payment
         * link URL or resolve request carried, such as your user ID. `null` when none was sent or
         * checkout did not start from a payment link. Returned only to merchant credentials;
         * omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not
         * proof of identity. Always present with merchant credentials. client_reference.anyOf[1]
         * (Value): string or null. The reference the payment link URL or resolve request carried,
         * such as your user ID. `null` when none was sent or checkout did not start from a payment
         * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
         * buyer's browser, so treat it as a claim, not proof of identity. Always present with
         * merchant credentials. minLength: 1. maxLength: 255. client_reference.anyOf[2] (Value):
         * null. closed_at (Optional): string or null. When the order closed. Present exactly when
         * status is closed. Set once at the transition and never changed. closed_at.anyOf[1]
         * (Value): string. When the order closed. Present exactly when status is closed. Set once
         * at the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * closed_at.anyOf[2] (Value): null. closed_reason (Optional): string or null. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[1] (Value): string. Why the
         * order closed. Present exactly when status is closed. Set once at closure. Unrecognized
         * reasons are returned as other; new values may be added. Value enum: "invoice_voided",
         * "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
         * "return_resolution_canceled", "other". closed_reason.anyOf[2] (Value): null.
         * closed_reason_message (Optional): string or null. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[1] (Value): string. The caller note supplied when closing
         * the order. System closures leave it absent. It is not shown to the buyer.
         * closed_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * custom_field_answers (Optional): Array of {@link CustomFieldAnswer} or null. The buyer's
         * answers to the payment link's custom fields, recorded when checkout started, in the
         * order the link showed the fields. Each answer keeps the field's key, label, and type
         * from that moment, so later changes to the link don't change it. Optional fields the
         * buyer left blank are left out. Read-only. Empty when the order didn't come from a
         * payment link, the link had no custom fields, or the buyer answered none. Orders created
         * before Flint recorded answers here also return an empty list and keep their answers in
         * `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned
         * only to merchant credentials; omitted for buyer credentials. Always present with
         * merchant credentials. custom_field_answers.anyOf[1] (Value): Array of {@link
         * CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, recorded
         * when checkout started, in the order the link showed the fields. Each answer keeps the
         * field's key, label, and type from that moment, so later changes to the link don't change
         * it. Optional fields the buyer left blank are left out. Read-only. Empty when the order
         * didn't come from a payment link, the link had no custom fields, or the buyer answered
         * none. Orders created before Flint recorded answers here also return an empty list and
         * keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes
         * the answers. Returned only to merchant credentials; omitted for buyer credentials.
         * Always present with merchant credentials. maxItems: 20. custom_field_answers.anyOf[1][]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_field_answers.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null or null. Customer summary included when `expand` names
         * `customer`; `null` when expanded and no customer is linked. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary} or null. Customer summary
         * included when `expand` names `customer`; `null` when expanded and no customer is linked.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[1].anyOf[2] (Value): null. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string or null. ID of the customer this order belongs to.
         * customer_id.anyOf[1] (Value): string. ID of the customer this order belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * deferred_promotions (Optional): Array of {@link DeferredPromotion} or null. Promotions
         * accepted at subscription signup. They attach when the subscription is provisioned and
         * first discount its first charged cycle. They do not discount this order and are separate
         * from discounts and order totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1] (Value): Array of {@link DeferredPromotion}. Promotions
         * accepted at subscription signup. They attach when the subscription is provisioned and
         * first discount its first charged cycle. They do not discount this order and are separate
         * from discounts and order totals. Always present; empty when no promotions are deferred.
         * deferred_promotions.anyOf[1][] (Value): {@link DeferredPromotion}. A promotion accepted
         * at subscription signup for the subscription's first charged cycle. It does not discount
         * the signup order. deferred_promotions.anyOf[2] (Value): null. delivery (Optional):
         * {@link OrderDeliverySummary} or null. Method, type and recipient of
         * governing_delivery_selection_id. The address remains in delivery_destination. Omitted
         * when no shipment or local-delivery selection governs the order. delivery.anyOf[1]
         * (Value): {@link OrderDeliverySummary}. Method, type and recipient of
         * governing_delivery_selection_id. The address remains in delivery_destination. Omitted
         * when no shipment or local-delivery selection governs the order. delivery.anyOf[2]
         * (Value): null. delivery_destination (Optional): {@link OrderDeliveryDestination} or
         * null. The shipment or local-delivery destination committed for this order. Payment
         * freezes this value; fulfillment recipient changes do not replace it. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified.
         * delivery_destination.anyOf[1] (Value): {@link OrderDeliveryDestination}. The shipment or
         * local-delivery destination committed for this order. Payment freezes this value;
         * fulfillment recipient changes do not replace it. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified.
         * delivery_destination.anyOf[2] (Value): null. discounts (Optional): Array of {@link
         * OrderDiscount} or null. Discounts applied to the order, each with its amount, status,
         * and the line items and charges it covers. discounts.anyOf[1] (Value): Array of {@link
         * OrderDiscount}. Discounts applied to the order, each with its amount, status, and the
         * line items and charges it covers. discounts.anyOf[1][] (Value): {@link OrderDiscount}. A
         * discount applied to an order, with its amount, status, and the line items and charges it
         * covers. It comes from a manual discount or a promotion. discounts.anyOf[2] (Value):
         * null. dispute_status (Optional): string or null. Aggregate dispute state across the
         * order's counted payment intents, excluding payment_returned. Always returned to merchant
         * credentials and omitted from buyer reads. Open states take precedence in this order:
         * needs_response, under_review, inquiry_needs_response, inquiry_under_review, other.
         * Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none
         * when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}.
         * Always present with merchant credentials. Value enum: "none", "inquiry_needs_response",
         * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
         * "lost", "prevented", "other". dispute_status.anyOf[1] (Value): string. Aggregate dispute
         * state across the order's counted payment intents, excluding payment_returned. Always
         * returned to merchant credentials and omitted from buyer reads. Open states take
         * precedence in this order: needs_response, under_review, inquiry_needs_response,
         * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
         * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
         * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
         * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. fulfillment_status (Optional): string or
         * null. Aggregate progress across the order's fulfillment quantities. Value enum:
         * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
         * "closed". fulfillment_status.anyOf[1] (Value): string. Aggregate progress across the
         * order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
         * "fulfilled", "canceled", "not_applicable", "closed". fulfillment_status.anyOf[2]
         * (Value): null. fulfillments (Optional): Array of {@link Fulfillment} or null.
         * Fulfillments created for the order, each covering a set of its line items.
         * fulfillments.anyOf[1] (Value): Array of {@link Fulfillment}. Fulfillments created for
         * the order, each covering a set of its line items. fulfillments.anyOf[1][] (Value):
         * {@link Fulfillment}. Work required to deliver an order's items. fulfillments.anyOf[2]
         * (Value): null. gift_card_estimate (Optional): {@link OrderGiftCardEstimate} or null. An
         * estimate of how the order balance splits between gift cards and the payment processor.
         * gift_card_estimate.anyOf[1] (Value): {@link OrderGiftCardEstimate}. An estimate of how
         * the order balance splits between gift cards and the payment processor.
         * gift_card_estimate.anyOf[2] (Value): null. gift_card_settlements (Optional): Array of
         * {@link OrderGiftCardSettlement} or null. The gift card redemptions applied to the
         * order's payments. gift_card_settlements.anyOf[1] (Value): Array of {@link
         * OrderGiftCardSettlement}. The gift card redemptions applied to the order's payments.
         * gift_card_settlements.anyOf[1][] (Value): {@link OrderGiftCardSettlement}. A gift card
         * redemption applied to an order payment, with the amount, tip, and gift card.
         * gift_card_settlements.anyOf[2] (Value): null. gift_card_tender_enabled (Optional):
         * boolean or null. Whether gift cards can pay for this order now. Gift cards pay only USD
         * orders that still accept changes, are not subscription purchases, and whose merchant has
         * at least one gift card that is not closed in this environment. Recomputed on each read;
         * a spent but open card still counts. gift_card_tender_enabled.anyOf[1] (Value): boolean.
         * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
         * accept changes, are not subscription purchases, and whose merchant has at least one gift
         * card that is not closed in this environment. Recomputed on each read; a spent but open
         * card still counts. gift_card_tender_enabled.anyOf[2] (Value): null. gift_cards
         * (Optional): Array of {@link OrderGiftCardSelection} or null. Gift cards available to pay
         * the order, with each card's available balance. gift_cards.anyOf[1] (Value): Array of
         * {@link OrderGiftCardSelection}. Gift cards available to pay the order, with each card's
         * available balance. gift_cards.anyOf[1][] (Value): {@link OrderGiftCardSelection}. A gift
         * card available to pay an order, with its available balance and the last four characters
         * of its code. gift_cards.anyOf[2] (Value): null. governing_delivery_selection_id
         * (Optional): string or null or null. ID of the delivery selection that governs this
         * order, including pickup choices without a delivery destination: the checkout's
         * provisional selection before payment, and the selection a payment committed after. Read
         * it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection
         * governs the order. While set, change the destination through the delivery selection.
         * governing_delivery_selection_id.anyOf[1] (Value): string or null. ID of the delivery
         * selection that governs this order, including pickup choices without a delivery
         * destination: the checkout's provisional selection before payment, and the selection a
         * payment committed after. Read it with GET
         * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
         * order. While set, change the destination through the delivery selection. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". governing_delivery_selection_id.anyOf[2] (Value):
         * null. handover (Optional): {@link OrderHandover} or null. Carry-out handover: every
         * physical item is handed to the buyer at this location when the order is paid, in place
         * of a delivery selection. Payment then creates one completed `handover` fulfillment.
         * Absent without a handover. handover.anyOf[1] (Value): {@link OrderHandover}. Carry-out
         * handover: every physical item is handed to the buyer at this location when the order is
         * paid, in place of a delivery selection. Payment then creates one completed `handover`
         * fulfillment. Absent without a handover. handover.anyOf[2] (Value): null. internal_note
         * (Optional): string or null. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[1] (Value): string. A note for your team. Buyer reads leave it out.
         * internal_note.anyOf[2] (Value): null. inventory_exception_reason (Optional): string or
         * null. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[1] (Value):
         * string. Why inventory could not be committed after payment. The cause remains after
         * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as
         * other; new values may be added. Value enum: "inventory_deduction_failed",
         * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
         * "policy_resolution_failed", "other". inventory_exception_reason.anyOf[2] (Value): null.
         * inventory_exception_resolution_message (Optional): string or null. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[1] (Value): string. The merchant note
         * supplied when resolving the inventory exception. It is not shown to the buyer.
         * inventory_exception_resolution_message.anyOf[2] (Value): null.
         * inventory_exception_status (Optional): string or null. Whether an inventory problem
         * after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[1] (Value): string. Whether an inventory problem after
         * payment needs attention. Value enum: "paid_inventory_failed", "resolved".
         * inventory_exception_status.anyOf[2] (Value): null. inventory_reservation_id (Optional):
         * string or null. The reservation holding stock for this order, when one exists.
         * inventory_reservation_id.anyOf[1] (Value): string. The reservation holding stock for
         * this order, when one exists. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * inventory_reservation_id.anyOf[2] (Value): null. inventory_routing_source (Optional):
         * {@link InventoryRoutingSource} or null. Where this order's tracked demand is routed.
         * Required before an order containing tracked variants can hold stock.
         * inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where this
         * order's tracked demand is routed. Required before an order containing tracked variants
         * can hold stock. inventory_routing_source.anyOf[2] (Value): null. invoice_id (Optional):
         * string or null or null. The invoice associated with this order. Null when the order has
         * no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
         * invoice_id.anyOf[1] (Value): string or null. The invoice associated with this order.
         * Null when the order has no invoice. A replacement invoice replaces this ID; voiding an
         * invoice preserves it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2]
         * (Value): null. line_items (Optional): Array of {@link OrderLineItem} or null. Items the
         * order sells, each with its pricing, tax, and fulfillment quantities. line_items.anyOf[1]
         * (Value): Array of {@link OrderLineItem}. Items the order sells, each with its pricing,
         * tax, and fulfillment quantities. line_items.anyOf[1][] (Value): {@link OrderLineItem}.
         * An item purchased in an order. line_items.anyOf[2] (Value): null. merchant_id
         * (Optional): string or null. ID of the merchant this resource belongs to.
         * merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. metadata.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Unique identifier for this order, prefixed `ord_`. order_id.anyOf[1] (Value): string.
         * Unique identifier for this order, prefixed `ord_`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable order number for receipts and merchant
         * reference. order_number.anyOf[1] (Value): string. Human-readable order number for
         * receipts and merchant reference. order_number.anyOf[2] (Value): null. origin (Optional):
         * string or null. How the order was created. invoice means a Quick Pay invoice created the
         * order; attaching an invoice to an existing order preserves its origin. Value enum:
         * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
         * origin.anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
         * invoice created the order; attaching an invoice to an existing order preserves its
         * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
         * "subscription", "invoice". origin.anyOf[2] (Value): null. paid_at (Optional): string or
         * null or null. When `payment_status` became `paid`, including a final capture that
         * releases the remaining balance. Set once and never changed, including after refunds.
         * `null` when `payment_status` isn't `paid`, including an order whose balance was written
         * off without being paid. paid_at.anyOf[1] (Value): string or null. When `payment_status`
         * became `paid`, including a final capture that releases the remaining balance. Set once
         * and never changed, including after refunds. `null` when `payment_status` isn't `paid`,
         * including an order whose balance was written off without being paid. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_intent_ids
         * (Optional): Array of string or null. IDs of the payment intents created to collect this
         * order. payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents
         * created to collect this order. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link ExpandedPaymentIntentSummary} or null.
         * Payment intents included when `expand` names `payment_intents`. payment_intents.anyOf[1]
         * (Value): Array of {@link ExpandedPaymentIntentSummary}. Payment intents included when
         * `expand` names `payment_intents`. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
         * status, and capture method, returned when the payment intent is expanded.
         * payment_intents.anyOf[2] (Value): null. payment_link_id (Optional): string or null.
         * Payment link whose checkout created this order. Absent for orders that did not come from
         * a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
         * payment_link_id.anyOf[1] (Value): string. Payment link whose checkout created this
         * order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by
         * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_id.anyOf[2] (Value): null. payment_status (Optional): string or null.
         * Collection progress. An invoice write-off also completes collection without receiving
         * the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
         * payment_status.anyOf[1] (Value): string. Collection progress. An invoice write-off also
         * completes collection without receiving the written-off amount. Value enum: "unpaid",
         * "partially_paid", "paid". payment_status.anyOf[2] (Value): null. pending_order_edit_id
         * (Optional): string or null or null. The order edit waiting for its balance payment.
         * While it is set, the units that edit removes can't join a fulfillment and the order
         * refuses another edit. `null` when there is none. Omitted for buyer credentials. Always
         * present with merchant credentials. pending_order_edit_id.anyOf[1] (Value): string or
         * null. The order edit waiting for its balance payment. While it is set, the units that
         * edit removes can't join a fulfillment and the order refuses another edit. `null` when
         * there is none. Omitted for buyer credentials. Always present with merchant credentials.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". pending_order_edit_id.anyOf[2] (Value): null.
         * prepayment_order_id (Optional): string or null or null. Order that paid for this prepaid
         * delivery. Null when this is not a prepaid delivery order. prepayment_order_id.anyOf[1]
         * (Value): string or null. Order that paid for this prepaid delivery. Null when this is
         * not a prepaid delivery order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * prepayment_order_id.anyOf[2] (Value): null. pricing_amounts (Optional): {@link
         * PricingAmounts} or null. The order's money totals: subtotal, discounts, charges, tax,
         * requested tip, and total. pricing_amounts.anyOf[1] (Value): {@link PricingAmounts}. The
         * order's money totals: subtotal, discounts, charges, tax, requested tip, and total.
         * pricing_amounts.anyOf[2] (Value): null. refund_ids (Optional): Array of string or null.
         * IDs of the refunds that name this order. This includes refunds Flint makes to return a
         * payment it couldn't accept (`reason` `payment_returned`), which never count toward
         * `refund_status` or the order's refunded amounts. refund_ids.anyOf[1] (Value): Array of
         * string. IDs of the refunds that name this order. This includes refunds Flint makes to
         * return a payment it couldn't accept (`reason` `payment_returned`), which never count
         * toward `refund_status` or the order's refunded amounts. refund_ids.anyOf[1][] (Value):
         * string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refund_ids.anyOf[2] (Value): null.
         * refund_status (Optional): string or null. Refund progress for collected money. Refunds
         * with `reason` `payment_returned` return money the order never received and don't count.
         * Value enum: "none", "partially_refunded", "refunded". refund_status.anyOf[1] (Value):
         * string. Refund progress for collected money. Refunds with `reason` `payment_returned`
         * return money the order never received and don't count. Value enum: "none",
         * "partially_refunded", "refunded". refund_status.anyOf[2] (Value): null.
         * return_credit_settlements (Optional): Array of {@link OrderReturnCreditSettlement} or
         * null. Value applied to this order from items the buyer returned, such as an exchange's
         * replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements.anyOf[1] (Value): Array of {@link
         * OrderReturnCreditSettlement}. Value applied to this order from items the buyer returned,
         * such as an exchange's replacement order. Included in settlement_amounts.paid_money.
         * return_credit_settlements.anyOf[1][] (Value): {@link OrderReturnCreditSettlement}. A
         * return credit applied to an order payment, with the amount and the return and resolution
         * it came from. return_credit_settlements.anyOf[2] (Value): null. return_resolution_id
         * (Optional): string or null. ID of the return resolution that created this order as a
         * replacement. Omitted for orders a return did not create. return_resolution_id.anyOf[1]
         * (Value): string. ID of the return resolution that created this order as a replacement.
         * Omitted for orders a return did not create. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_id.anyOf[2] (Value): null.
         * settlement_amounts (Optional): {@link OrderSettlementAmounts} or null. How much of the
         * order has been paid, refunded, credited, written off, and settled as tips, and what is
         * still outstanding. settlement_amounts.anyOf[1] (Value): {@link OrderSettlementAmounts}.
         * How much of the order has been paid, refunded, credited, written off, and settled as
         * tips, and what is still outstanding. Money collected, returned, waived, and still owed
         * on a bill. settlement_amounts.anyOf[2] (Value): null. status (Optional): string or null.
         * Whether the order still accepts changes and new payments. Refunds, fulfillment,
         * disputes, returns, and metadata or note edits continue on a closed order. Value enum:
         * "open", "closed". status.anyOf[1] (Value): string. Whether the order still accepts
         * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note
         * edits continue on a closed order. Value enum: "open", "closed". status.anyOf[2] (Value):
         * null. subscription (Optional): {@link ExpandedSubscriptionSummary} or null or null.
         * Subscription summary included when `expand` names `subscription`; `null` when expanded
         * and this order does not bill a subscription. Present only when `expand` includes
         * `subscription`; `null` when expanded and there is no related subscription.
         * subscription.anyOf[1] (Value): {@link ExpandedSubscriptionSummary} or null. Subscription
         * summary included when `expand` names `subscription`; `null` when expanded and this order
         * does not bill a subscription. Present only when `expand` includes `subscription`; `null`
         * when expanded and there is no related subscription. subscription.anyOf[1].anyOf[1]
         * (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary fields, including
         * status, billing period, and next billing time, returned when the subscription is
         * expanded. subscription.anyOf[1].anyOf[2] (Value): null. subscription.anyOf[2] (Value):
         * null. subscription_cycle (Optional): integer or null. Charged subscription cycle
         * associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do
         * not advance the cycle. subscription_cycle.anyOf[1] (Value): integer. Charged
         * subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
         * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
         * subscription_cycle.anyOf[2] (Value): null. subscription_delivery_changed_at (Optional):
         * string or null. Time the subscriber changed delivery after this paid renewal was
         * prepared. The order keeps its committed destination until you correct it or refund and
         * replace it. subscription_delivery_changed_at.anyOf[1] (Value): string. Time the
         * subscriber changed delivery after this paid renewal was prepared. The order keeps its
         * committed destination until you correct it or refund and replace it. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". subscription_delivery_changed_at.anyOf[2] (Value):
         * null. subscription_delivery_number (Optional): integer or null or null. Position of this
         * delivery among the deliveries one charge paid for, starting at 2. Null when this is not
         * a prepaid delivery order. subscription_delivery_number.anyOf[1] (Value): integer or
         * null. Position of this delivery among the deliveries one charge paid for, starting at 2.
         * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
         * subscription_delivery_number.anyOf[2] (Value): null. subscription_id (Optional): string
         * or null. ID of the subscription this order bills. Absent on an order that isn't from a
         * subscription. subscription_id.anyOf[1] (Value): string. ID of the subscription this
         * order bills. Absent on an order that isn't from a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null or null.
         * Plan summary included when `expand` names `subscription_plan`; `null` when expanded and
         * this order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary} or null.
         * Plan summary included when `expand` names `subscription_plan`; `null` when expanded and
         * this order does not bill a subscription plan. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1].anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[1].anyOf[2] (Value):
         * null. subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string
         * or null. ID of the subscription plan this order bills. Absent on an order that isn't
         * from a subscription. subscription_plan_id.anyOf[1] (Value): string. ID of the
         * subscription plan this order bills. Absent on an order that isn't from a subscription.
         * Example: "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * now, independent of permissions. Includes close when closure is allowed, and pay while
         * open without an active attempt and with an outstanding balance or payment-method setup
         * available. Always present with merchant credentials. [] enum: "close", "pay",
         * "resolve_inventory_exception". supported_actions.anyOf[1] (Value): Array of string.
         * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
         * closure is allowed, and pay while open without an active attempt and with an outstanding
         * balance or payment-method setup available. Always present with merchant credentials. []
         * enum: "close", "pay", "resolve_inventory_exception". supported_actions.anyOf[1][]
         * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
         * supported_actions.anyOf[2] (Value): null. tax (Optional): {@link OrderTax} or null. The
         * order's tax state: whether tax is enabled, its status, location, exemption, and
         * per-jurisdiction rows. tax.anyOf[1] (Value): {@link OrderTax}. The order's tax state:
         * whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
         * tax.anyOf[2] (Value): null. ticketed_event (Optional): {@link TicketedEvent} or null.
         * Event and tickets this order sold through an event payment link. Absent on other orders.
         * ticketed_event.anyOf[1] (Value): {@link TicketedEvent}. Event and tickets this order
         * sold through an event payment link. Absent on other orders. ticketed_event.anyOf[2]
         * (Value): null. tips (Optional): Array of {@link Tip} or null. Tips on the order, each
         * with its requested, settled, and refunded amounts. A tip cleared before payment stays
         * listed as canceled. tips.anyOf[1] (Value): Array of {@link Tip}. Tips on the order, each
         * with its requested, settled, and refunded amounts. A tip cleared before payment stays
         * listed as canceled. tips.anyOf[1][] (Value): {@link Tip}. A tip on an order, with its
         * requested, settled, and refunded amounts, status, and how it was paid. tips.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Order version for optimistic concurrency. Send this value as the expected
         * version when changing the order. Increases with every change to the order. Ignore an
         * order webhook snapshot whose version is lower than one you have already applied.
         * version.anyOf[1] (Value): integer. Order version for optimistic concurrency. Send this
         * value as the expected version when changing the order. Increases with every change to
         * the order. Ignore an order webhook snapshot whose version is lower than one you have
         * already applied. Format: int64. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The earliest open or resolving payment review on this order's counted payments.
             * `null` when no review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. anyOf[1] (Value): string or null. The earliest
             * open or resolving payment review on this order's counted payments. `null` when no
             * review is open or resolving. List reviews with GET
             * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always
             * present with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             * anyOf[2] (Value): null.
             */
            "active_payment_review_id"?: ((string | null) | (null) | (unknown));
            /**
             * The amounts authorized and still capturable on the order's payments. anyOf[1]
             * (Value): {@link OrderAuthorizationAmounts}. The amounts authorized and still
             * capturable on the order's payments. anyOf[2] (Value): null.
             */
            "authorization_amounts"?: ((OrderAuthorizationAmounts) | (null));
            /**
             * Email and phone saved when payment started, from the pay request's buyer_contact or
             * the paying checkout session's saved contact. It does not change the linked customer.
             * anyOf[1] (Value): {@link CheckoutBuyerContact}. Email and phone saved when payment
             * started, from the pay request's buyer_contact or the paying checkout session's saved
             * contact. It does not change the linked customer. anyOf[2] (Value): null.
             */
            "buyer_contact"?: ((CheckoutBuyerContact) | (null));
            /**
             * A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2]
             * (Value): null.
             */
            "buyer_note"?: ((string) | (null));
            /**
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1] (Value): Array of {@link OrderCharge}.
             * Charges added to the order, such as delivery or service fees, each with its applied
             * amount, tax, and refunded amount. anyOf[1][] (Value): {@link OrderCharge}. An
             * additional charge applied to an order. anyOf[2] (Value): null.
             */
            "charges"?: ((Array<OrderCharge>) | (null));
            /**
             * IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of
             * string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value):
             * string. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_ids"?: ((Array<string>) | (null));
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The reference the payment link URL or
             * resolve request carried, such as your user ID. `null` when none was sent or checkout
             * did not start from a payment link. Returned only to merchant credentials; omitted
             * for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof
             * of identity. Always present with merchant credentials. minLength: 1. maxLength: 255.
             * anyOf[2] (Value): null.
             */
            "client_reference"?: ((string | null) | (null) | (unknown));
            /**
             * When the order closed. Present exactly when status is closed. Set once at the
             * transition and never changed. anyOf[1] (Value): string. When the order closed.
             * Present exactly when status is closed. Set once at the transition and never changed.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * Why the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why
             * the order closed. Present exactly when status is closed. Set once at closure.
             * Unrecognized reasons are returned as other; new values may be added. Value enum:
             * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
             * "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
             */
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
            /**
             * The caller note supplied when closing the order. System closures leave it absent. It
             * is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when
             * closing the order. System closures leave it absent. It is not shown to the buyer.
             * anyOf[2] (Value): null.
             */
            "closed_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The buyer's answers to the payment link's custom fields, recorded when checkout
             * started, in the order the link showed the fields. Each answer keeps the field's key,
             * label, and type from that moment, so later changes to the link don't change it.
             * Optional fields the buyer left blank are left out. Read-only. Empty when the order
             * didn't come from a payment link, the link had no custom fields, or the buyer
             * answered none. Orders created before Flint recorded answers here also return an
             * empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting
             * the customer removes the answers. Returned only to merchant credentials; omitted for
             * buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array
             * of {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom
             * fields, recorded when checkout started, in the order the link showed the fields.
             * Each answer keeps the field's key, label, and type from that moment, so later
             * changes to the link don't change it. Optional fields the buyer left blank are left
             * out. Read-only. Empty when the order didn't come from a payment link, the link had
             * no custom fields, or the buyer answered none. Orders created before Flint recorded
             * answers here also return an empty list and keep their answers in `metadata` as
             * `custom_field_<key>`. Deleting the customer removes the answers. Returned only to
             * merchant credentials; omitted for buyer credentials. Always present with merchant
             * credentials. maxItems: 20. anyOf[1][] (Value): {@link CustomFieldAnswer}. One answer
             * to a payment link custom field, with the field as it was when checkout started.
             * `custom_field_type` determines the type of `value`. anyOf[2] (Value): null.
             */
            "custom_field_answers"?: ((Array<CustomFieldAnswer>) | (null));
            /**
             * Customer summary included when `expand` names `customer`; `null` when expanded and
             * no customer is linked. Present only when `expand` includes `customer`; `null` when
             * expanded and there is no related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummary} or null. Customer summary included when `expand` names
             * `customer`; `null` when expanded and no customer is linked. Present only when
             * `expand` includes `customer`; `null` when expanded and there is no related customer.
             * anyOf[1].anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "customer"?: ((((ExpandedCustomerSummary) | (null))) | (null) | (unknown));
            /**
             * ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the
             * customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2]
             * (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1] (Value): Array of {@link DeferredPromotion}.
             * Promotions accepted at subscription signup. They attach when the subscription is
             * provisioned and first discount its first charged cycle. They do not discount this
             * order and are separate from discounts and order totals. Always present; empty when
             * no promotions are deferred. anyOf[1][] (Value): {@link DeferredPromotion}. A
             * promotion accepted at subscription signup for the subscription's first charged
             * cycle. It does not discount the signup order. anyOf[2] (Value): null.
             */
            "deferred_promotions"?: ((Array<DeferredPromotion>) | (null));
            /**
             * Method, type and recipient of governing_delivery_selection_id. The address remains
             * in delivery_destination. Omitted when no shipment or local-delivery selection
             * governs the order. anyOf[1] (Value): {@link OrderDeliverySummary}. Method, type and
             * recipient of governing_delivery_selection_id. The address remains in
             * delivery_destination. Omitted when no shipment or local-delivery selection governs
             * the order. anyOf[2] (Value): null.
             */
            "delivery"?: ((OrderDeliverySummary) | (null));
            /**
             * The shipment or local-delivery destination committed for this order. Payment freezes
             * this value; fulfillment recipient changes do not replace it. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link OrderDeliveryDestination}. The shipment or local-delivery
             * destination committed for this order. Payment freezes this value; fulfillment
             * recipient changes do not replace it. Omitted for a checkout session credential that
             * doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
             */
            "delivery_destination"?: ((OrderDeliveryDestination) | (null));
            /**
             * Discounts applied to the order, each with its amount, status, and the line items and
             * charges it covers. anyOf[1] (Value): Array of {@link OrderDiscount}. Discounts
             * applied to the order, each with its amount, status, and the line items and charges
             * it covers. anyOf[1][] (Value): {@link OrderDiscount}. A discount applied to an
             * order, with its amount, status, and the line items and charges it covers. It comes
             * from a manual discount or a promotion. anyOf[2] (Value): null.
             */
            "discounts"?: ((Array<OrderDiscount>) | (null));
            /**
             * Aggregate dispute state across the order's counted payment intents, excluding
             * payment_returned. Always returned to merchant credentials and omitted from buyer
             * reads. Open states take precedence in this order: needs_response, under_review,
             * inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe
             * closed state wins: lost, won, prevented, inquiry_closed; none when no disputes
             * count. List individual cases with GET /v1/disputes?order_id={order_id}. Always
             * present with merchant credentials. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state
             * across the order's counted payment intents, excluding payment_returned. Always
             * returned to merchant credentials and omitted from buyer reads. Open states take
             * precedence in this order: needs_response, under_review, inquiry_needs_response,
             * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
             * prevented, inquiry_closed; none when no disputes count. List individual cases with
             * GET /v1/disputes?order_id={order_id}. Always present with merchant credentials.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[2] (Value): null.
             */
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
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Aggregate progress across the order's fulfillment quantities. Value enum:
             * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
             * "closed". anyOf[1] (Value): string. Aggregate progress across the order's
             * fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled",
             * "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
             */
            "fulfillment_status"?: (("not_fulfilled"
                | "partially_fulfilled"
                | "fulfilled"
                | "canceled"
                | "not_applicable"
                | "closed"
                | (string & {}))
                | (null));
            /**
             * Fulfillments created for the order, each covering a set of its line items. anyOf[1]
             * (Value): Array of {@link Fulfillment}. Fulfillments created for the order, each
             * covering a set of its line items. anyOf[1][] (Value): {@link Fulfillment}. Work
             * required to deliver an order's items. anyOf[2] (Value): null.
             */
            "fulfillments"?: ((Array<Fulfillment>) | (null));
            /**
             * An estimate of how the order balance splits between gift cards and the payment
             * processor. anyOf[1] (Value): {@link OrderGiftCardEstimate}. An estimate of how the
             * order balance splits between gift cards and the payment processor. anyOf[2] (Value):
             * null.
             */
            "gift_card_estimate"?: ((OrderGiftCardEstimate) | (null));
            /**
             * The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array
             * of {@link OrderGiftCardSettlement}. The gift card redemptions applied to the order's
             * payments. anyOf[1][] (Value): {@link OrderGiftCardSettlement}. A gift card
             * redemption applied to an order payment, with the amount, tip, and gift card.
             * anyOf[2] (Value): null.
             */
            "gift_card_settlements"?: ((Array<OrderGiftCardSettlement>) | (null));
            /**
             * Whether gift cards can pay for this order now. Gift cards pay only USD orders that
             * still accept changes, are not subscription purchases, and whose merchant has at
             * least one gift card that is not closed in this environment. Recomputed on each read;
             * a spent but open card still counts. anyOf[1] (Value): boolean. Whether gift cards
             * can pay for this order now. Gift cards pay only USD orders that still accept
             * changes, are not subscription purchases, and whose merchant has at least one gift
             * card that is not closed in this environment. Recomputed on each read; a spent but
             * open card still counts. anyOf[2] (Value): null.
             */
            "gift_card_tender_enabled"?: ((boolean) | (null));
            /**
             * Gift cards available to pay the order, with each card's available balance. anyOf[1]
             * (Value): Array of {@link OrderGiftCardSelection}. Gift cards available to pay the
             * order, with each card's available balance. anyOf[1][] (Value): {@link
             * OrderGiftCardSelection}. A gift card available to pay an order, with its available
             * balance and the last four characters of its code. anyOf[2] (Value): null.
             */
            "gift_cards"?: ((Array<OrderGiftCardSelection>) | (null));
            /**
             * ID of the delivery selection that governs this order, including pickup choices
             * without a delivery destination: the checkout's provisional selection before payment,
             * and the selection a payment committed after. Read it with GET
             * /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the
             * order. While set, change the destination through the delivery selection. anyOf[1]
             * (Value): string or null. ID of the delivery selection that governs this order,
             * including pickup choices without a delivery destination: the checkout's provisional
             * selection before payment, and the selection a payment committed after. Read it with
             * GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs
             * the order. While set, change the destination through the delivery selection.
             * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "governing_delivery_selection_id"?: ((string | null) | (null) | (unknown));
            /**
             * Carry-out handover: every physical item is handed to the buyer at this location when
             * the order is paid, in place of a delivery selection. Payment then creates one
             * completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value):
             * {@link OrderHandover}. Carry-out handover: every physical item is handed to the
             * buyer at this location when the order is paid, in place of a delivery selection.
             * Payment then creates one completed `handover` fulfillment. Absent without a
             * handover. anyOf[2] (Value): null.
             */
            "handover"?: ((OrderHandover) | (null));
            /**
             * A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for
             * your team. Buyer reads leave it out. anyOf[2] (Value): null.
             */
            "internal_note"?: ((string) | (null));
            /**
             * Why inventory could not be committed after payment. The cause remains after
             * resolution. Omitted when no reason was recorded. Unrecognized reasons are returned
             * as other; new values may be added. Value enum: "inventory_deduction_failed",
             * "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed",
             * "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could
             * not be committed after payment. The cause remains after resolution. Omitted when no
             * reason was recorded. Unrecognized reasons are returned as other; new values may be
             * added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
             * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
             * anyOf[2] (Value): null.
             */
            "inventory_exception_reason"?: (("inventory_deduction_failed"
                | "inventory_handoff_failed"
                | "auto_refund_required"
                | "auto_refund_failed"
                | "policy_resolution_failed"
                | "other"
                | (string & {}))
                | (null));
            /**
             * The merchant note supplied when resolving the inventory exception. It is not shown
             * to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving
             * the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
             */
            "inventory_exception_resolution_message"?: ((string) | (null));
            /**
             * Whether an inventory problem after payment needs attention. Value enum:
             * "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory
             * problem after payment needs attention. Value enum: "paid_inventory_failed",
             * "resolved". anyOf[2] (Value): null.
             */
            "inventory_exception_status"?: (("paid_inventory_failed" | "resolved" | (string & {})) | (null));
            /**
             * The reservation holding stock for this order, when one exists. anyOf[1] (Value):
             * string. The reservation holding stock for this order, when one exists. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[1] (Value): {@link InventoryRoutingSource}.
             * Where this order's tracked demand is routed. Required before an order containing
             * tracked variants can hold stock. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSource) | (null));
            /**
             * The invoice associated with this order. Null when the order has no invoice. A
             * replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1]
             * (Value): string or null. The invoice associated with this order. Null when the order
             * has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves
             * it. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string | null) | (null) | (unknown));
            /**
             * Items the order sells, each with its pricing, tax, and fulfillment quantities.
             * anyOf[1] (Value): Array of {@link OrderLineItem}. Items the order sells, each with
             * its pricing, tax, and fulfillment quantities. anyOf[1][] (Value): {@link
             * OrderLineItem}. An item purchased in an order. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<OrderLineItem>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. Stored caller-owned key-value data.
             * See `MetadataInput` for key, value, and size rules. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique
             * identifier for this order, prefixed `ord_`. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable order number for receipts and merchant reference. anyOf[1] (Value):
             * string. Human-readable order number for receipts and merchant reference. anyOf[2]
             * (Value): null.
             */
            "order_number"?: ((string) | (null));
            /**
             * How the order was created. invoice means a Quick Pay invoice created the order;
             * attaching an invoice to an existing order preserves its origin. Value enum:
             * "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
             * anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay
             * invoice created the order; attaching an invoice to an existing order preserves its
             * origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
             * "subscription", "invoice". anyOf[2] (Value): null.
             */
            "origin"?: (("virtual_terminal"
                | "payment_link"
                | "checkout"
                | "api"
                | "subscription"
                | "invoice"
                | (string & {}))
                | (null));
            /**
             * When `payment_status` became `paid`, including a final capture that releases the
             * remaining balance. Set once and never changed, including after refunds. `null` when
             * `payment_status` isn't `paid`, including an order whose balance was written off
             * without being paid. anyOf[1] (Value): string or null. When `payment_status` became
             * `paid`, including a final capture that releases the remaining balance. Set once and
             * never changed, including after refunds. `null` when `payment_status` isn't `paid`,
             * including an order whose balance was written off without being paid. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paid_at"?: ((string | null) | (null) | (unknown));
            /**
             * IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of
             * string. IDs of the payment intents created to collect this order. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value):
             * Array of {@link ExpandedPaymentIntentSummary}. Payment intents included when
             * `expand` names `payment_intents`. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummary>) | (null));
            /**
             * Payment link whose checkout created this order. Absent for orders that did not come
             * from a payment link. Filter GET /v1/orders by payment_link_id to list a link's
             * orders. anyOf[1] (Value): string. Payment link whose checkout created this order.
             * Absent for orders that did not come from a payment link. Filter GET /v1/orders by
             * payment_link_id to list a link's orders. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             * anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Collection progress. An invoice write-off also completes collection without
             * receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
             * anyOf[1] (Value): string. Collection progress. An invoice write-off also completes
             * collection without receiving the written-off amount. Value enum: "unpaid",
             * "partially_paid", "paid". anyOf[2] (Value): null.
             */
            "payment_status"?: (("unpaid" | "partially_paid" | "paid" | (string & {})) | (null));
            /**
             * The order edit waiting for its balance payment. While it is set, the units that edit
             * removes can't join a fulfillment and the order refuses another edit. `null` when
             * there is none. Omitted for buyer credentials. Always present with merchant
             * credentials. anyOf[1] (Value): string or null. The order edit waiting for its
             * balance payment. While it is set, the units that edit removes can't join a
             * fulfillment and the order refuses another edit. `null` when there is none. Omitted
             * for buyer credentials. Always present with merchant credentials. Example:
             * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "pending_order_edit_id"?: ((string | null) | (null) | (unknown));
            /**
             * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery
             * order. anyOf[1] (Value): string or null. Order that paid for this prepaid delivery.
             * Null when this is not a prepaid delivery order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "prepayment_order_id"?: ((string | null) | (null) | (unknown));
            /**
             * The order's money totals: subtotal, discounts, charges, tax, requested tip, and
             * total. anyOf[1] (Value): {@link PricingAmounts}. The order's money totals: subtotal,
             * discounts, charges, tax, requested tip, and total. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmounts) | (null));
            /**
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string.
             * IDs of the refunds that name this order. This includes refunds Flint makes to return
             * a payment it couldn't accept (`reason` `payment_returned`), which never count toward
             * `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string.
             * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Refund progress for collected money. Refunds with `reason` `payment_returned` return
             * money the order never received and don't count. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for
             * collected money. Refunds with `reason` `payment_returned` return money the order
             * never received and don't count. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Value applied to this order from items the buyer returned, such as an exchange's
             * replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value):
             * Array of {@link OrderReturnCreditSettlement}. Value applied to this order from items
             * the buyer returned, such as an exchange's replacement order. Included in
             * settlement_amounts.paid_money. anyOf[1][] (Value): {@link
             * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the
             * amount and the return and resolution it came from. anyOf[2] (Value): null.
             */
            "return_credit_settlements"?: ((Array<OrderReturnCreditSettlement>) | (null));
            /**
             * ID of the return resolution that created this order as a replacement. Omitted for
             * orders a return did not create. anyOf[1] (Value): string. ID of the return
             * resolution that created this order as a replacement. Omitted for orders a return did
             * not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * How much of the order has been paid, refunded, credited, written off, and settled as
             * tips, and what is still outstanding. anyOf[1] (Value): {@link
             * OrderSettlementAmounts}. How much of the order has been paid, refunded, credited,
             * written off, and settled as tips, and what is still outstanding. Money collected,
             * returned, waived, and still owed on a bill. anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((OrderSettlementAmounts) | (null));
            /**
             * Whether the order still accepts changes and new payments. Refunds, fulfillment,
             * disputes, returns, and metadata or note edits continue on a closed order. Value
             * enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts
             * changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or
             * note edits continue on a closed order. Value enum: "open", "closed". anyOf[2]
             * (Value): null.
             */
            "status"?: (("open" | "closed" | (string & {})) | (null));
            /**
             * Subscription summary included when `expand` names `subscription`; `null` when
             * expanded and this order does not bill a subscription. Present only when `expand`
             * includes `subscription`; `null` when expanded and there is no related subscription.
             * anyOf[1] (Value): {@link ExpandedSubscriptionSummary} or null. Subscription summary
             * included when `expand` names `subscription`; `null` when expanded and this order
             * does not bill a subscription. Present only when `expand` includes `subscription`;
             * `null` when expanded and there is no related subscription. anyOf[1].anyOf[1]
             * (Value): {@link ExpandedSubscriptionSummary}. A subscription's summary fields,
             * including status, billing period, and next billing time, returned when the
             * subscription is expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "subscription"?: ((((ExpandedSubscriptionSummary) | (null))) | (null) | (unknown));
            /**
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer.
             * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid
             * retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "subscription_cycle"?: ((number) | (null));
            /**
             * Time the subscriber changed delivery after this paid renewal was prepared. The order
             * keeps its committed destination until you correct it or refund and replace it.
             * anyOf[1] (Value): string. Time the subscriber changed delivery after this paid
             * renewal was prepared. The order keeps its committed destination until you correct it
             * or refund and replace it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "subscription_delivery_changed_at"?: ((string) | (null));
            /**
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. anyOf[1] (Value): integer or null.
             * Position of this delivery among the deliveries one charge paid for, starting at 2.
             * Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum:
             * 24. anyOf[2] (Value): null.
             */
            "subscription_delivery_number"?: ((number | null) | (null) | (unknown));
            /**
             * ID of the subscription this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription this order bills.
             * Absent on an order that isn't from a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Plan summary included when `expand` names `subscription_plan`; `null` when expanded
             * and this order does not bill a subscription plan. Present only when `expand`
             * includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary} or
             * null. Plan summary included when `expand` names `subscription_plan`; `null` when
             * expanded and this order does not bill a subscription plan. Present only when
             * `expand` includes `subscription_plan`; `null` when expanded and there is no related
             * subscription plan. anyOf[1].anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((((ExpandedSubscriptionPlanSummary) | (null))) | (null) | (unknown));
            /**
             * ID of the subscription plan this order bills. Absent on an order that isn't from a
             * subscription. anyOf[1] (Value): string. ID of the subscription plan this order
             * bills. Absent on an order that isn't from a subscription. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Includes close when
             * closure is allowed, and pay while open without an active attempt and with an
             * outstanding balance or payment-method setup available. Always present with merchant
             * credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1]
             * (Value): Array of string. Lifecycle actions Flint accepts now, independent of
             * permissions. Includes close when closure is allowed, and pay while open without an
             * active attempt and with an outstanding balance or payment-method setup available.
             * Always present with merchant credentials. [] enum: "close", "pay",
             * "resolve_inventory_exception". anyOf[1][] (Value): string. Value enum: "close",
             * "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>) | (null));
            /**
             * The order's tax state: whether tax is enabled, its status, location, exemption, and
             * per-jurisdiction rows. anyOf[1] (Value): {@link OrderTax}. The order's tax state:
             * whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.
             * anyOf[2] (Value): null.
             */
            "tax"?: ((OrderTax) | (null));
            /**
             * Event and tickets this order sold through an event payment link. Absent on other
             * orders. anyOf[1] (Value): {@link TicketedEvent}. Event and tickets this order sold
             * through an event payment link. Absent on other orders. anyOf[2] (Value): null.
             */
            "ticketed_event"?: ((TicketedEvent) | (null));
            /**
             * Tips on the order, each with its requested, settled, and refunded amounts. A tip
             * cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@link
             * Tip}. Tips on the order, each with its requested, settled, and refunded amounts. A
             * tip cleared before payment stays listed as canceled. anyOf[1][] (Value): {@link
             * Tip}. A tip on an order, with its requested, settled, and refunded amounts, status,
             * and how it was paid. anyOf[2] (Value): null.
             */
            "tips"?: ((Array<Tip>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Order version for optimistic concurrency. Send this value as the expected version
             * when changing the order. Increases with every change to the order. Ignore an order
             * webhook snapshot whose version is lower than one you have already applied. anyOf[1]
             * (Value): integer. Order version for optimistic concurrency. Send this value as the
             * expected version when changing the order. Increases with every change to the order.
             * Ignore an order webhook snapshot whose version is lower than one you have already
             * applied. Format: int64. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.closed". */
    "event_type"?: "order.closed";
});
export type OrderCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_attempt`, `payment_collection`, `setup_collection`.
         */
        "object": WebhookOrder;
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
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            "added_total_money"?: ((MoneyValue) | (null));
            "amount_due_money"?: ((MoneyValue) | (null));
            "canceled_at"?: ((string | null) | (null) | (unknown));
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            "completed_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string | null) | (null) | (unknown));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
            "refund_money"?: ((MoneyValue) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            "removed_total_money"?: ((MoneyValue) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValue) | (null));
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
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            "added_total_money"?: ((MoneyValue) | (null));
            "amount_due_money"?: ((MoneyValue) | (null));
            "canceled_at"?: ((string | null) | (null) | (unknown));
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            "completed_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string | null) | (null) | (unknown));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
            "refund_money"?: ((MoneyValue) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            "removed_total_money"?: ((MoneyValue) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValue) | (null));
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
     * OrderEditLineAddition} or null. Added order lines, in request order, with their quantities
     * and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. previous_attributes.add_line_items.anyOf[1][] (Value):
     * {@link OrderEditLineAddition}. An order line added by the enclosing edit, with its value
     * frozen at creation. previous_attributes.add_line_items.anyOf[2] (Value): null.
     * previous_attributes.added_total_money (Optional): {@link MoneyValue} or null. The cost of
     * the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the
     * added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValue} or null. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string or null. When the edit
     * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
     * null. Charges released by this edit, frozen at creation. Empty when no charges were
     * released. previous_attributes.charge_refunds.anyOf[1] (Value): Array of {@link
     * OrderEditChargeRefund}. Charges released by this edit, frozen at creation. Empty when no
     * charges were released. previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
     * refunded to the buyer. previous_attributes.charge_refunds.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null or null. When Flint cancels
     * the edit if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null or null. The payment
     * intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit
     * has no balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
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
     * (Value): null. previous_attributes.refund_money (Optional): {@link MoneyValue} or null.
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValue}. Money to refund after
     * the removed value and released charges pay for added lines. May be zero; an edit with no
     * refund money creates no refund. previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link OrderEditLineRemoval} or
     * null. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemoval}. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1][] (Value): {@link OrderEditLineRemoval}.
     * Removed whole units of an order line and their refund amount frozen at creation. The
     * enclosing edit identifies the order. previous_attributes.remove_line_items.anyOf[2] (Value):
     * null. previous_attributes.removed_total_money (Optional): {@link MoneyValue} or null. The
     * value of the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[1] (Value): {@link MoneyValue}. The value of
     * the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Pending while waiting for a balance payment, completed once the
     * item changes are applied, or canceled when it ends without changing the order. Refund
     * processing has its own status on each refund. Value enum: "pending", "completed",
     * "canceled". previous_attributes.status.anyOf[1] (Value): string. Pending while waiting for a
     * balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains
     * cancel while pending and the payment is neither processing nor succeeded. Contains retry
     * when unrefunded_money is positive and no linked refund is pending. Empty while Flint is
     * still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValue} or null. Frozen refund
     * money not covered by pending or succeeded allocations from refunds linked to this edit.
     * Failed allocations do not reduce it. previous_attributes.unrefunded_money.anyOf[1] (Value):
     * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations from
     * refunds linked to this edit. Failed allocations do not reduce it.
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
         * OrderEditLineAddition} or null. Added order lines, in request order, with their
         * quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}. Added order
         * lines, in request order, with their quantities and values frozen at creation. Empty when
         * the edit added nothing. add_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen
         * at creation. add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValue} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the added lines: the
         * sum of add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValue} or null. What the added lines cost beyond the removed value and released
         * charges, tax included, frozen when the edit was created. Zero when the edit had no
         * balance. amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added lines
         * cost beyond the removed value and released charges, tax included, frozen when the edit
         * was created. Zero when the edit had no balance. amount_due_money.anyOf[2] (Value): null.
         * canceled_at (Optional): string or null or null. When the edit was canceled. `null` when
         * the edit is not canceled. canceled_at.anyOf[1] (Value): string or null. When the edit
         * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null or null. Why the edit was canceled. `null` when the edit is
         * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[1] (Value): string or null. Why the
         * edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request",
         * "expired", "payment_disputed", "payment_returned", null. cancellation_reason.anyOf[2]
         * (Value): null. charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
         * null. Charges released by this edit, frozen at creation. Empty when no charges were
         * released. charge_refunds.anyOf[1] (Value): Array of {@link OrderEditChargeRefund}.
         * Charges released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1][] (Value): {@link OrderEditChargeRefund}. The value an edit
         * releases from one order charge, and the part refunded to the buyer.
         * charge_refunds.anyOf[2] (Value): null. completed_at (Optional): string or null or null.
         * When the item changes were applied to the order. `null` when the edit is pending or
         * canceled. completed_at.anyOf[1] (Value): string or null. When the item changes were
         * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the edit was created. created_at.anyOf[1] (Value):
         * string. When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. expires_at (Optional): string or null or null. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit if the
         * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. order_edit_id
         * (Optional): string or null. Stable ID of this order edit. order_edit_id.anyOf[1]
         * (Value): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_edit_id.anyOf[2] (Value): null.
         * order_id (Optional): string or null. The order this edit belongs to. order_id.anyOf[1]
         * (Value): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string or null or null. The payment intent that collects amount_due_money.
         * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
         * while Flint is still creating it. payment_intent_id.anyOf[1] (Value): string or null.
         * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
         * when the edit has no balance, and for a moment while Flint is still creating it.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * reason (Optional): string or null. Reason for the edit and its refund. Value enum:
         * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
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
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link MoneyValue} or null.
         * Money to refund after the removed value and released charges pay for added lines. May be
         * zero; an edit with no refund money creates no refund. refund_money.anyOf[1] (Value):
         * {@link MoneyValue}. Money to refund after the removed value and released charges pay for
         * added lines. May be zero; an edit with no refund money creates no refund.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemoval} or null. Removed units and their refund amounts frozen at
         * creation. remove_line_items.anyOf[1] (Value): Array of {@link OrderEditLineRemoval}.
         * Removed units and their refund amounts frozen at creation. remove_line_items.anyOf[1][]
         * (Value): {@link OrderEditLineRemoval}. Removed whole units of an order line and their
         * refund amount frozen at creation. The enclosing edit identifies the order.
         * remove_line_items.anyOf[2] (Value): null. removed_total_money (Optional): {@link
         * MoneyValue} or null. The value of the removed units: the sum of
         * remove_line_items[].total_money. removed_total_money.anyOf[1] (Value): {@link
         * MoneyValue}. The value of the removed units: the sum of remove_line_items[].total_money.
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
         * MoneyValue} or null. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it.
         * unrefunded_money.anyOf[1] (Value): {@link MoneyValue}. Frozen refund money not covered
         * by pending or succeeded allocations from refunds linked to this edit. Failed allocations
         * do not reduce it. unrefunded_money.anyOf[2] (Value): null. version (Optional): integer
         * or null. The counter advances when status, payment_intent_id, completed_at, canceled_at
         * or cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances
         * when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAddition}. Added order lines, in request order, with their quantities
             * and values frozen at creation. Empty when the edit added nothing. anyOf[1][]
             * (Value): {@link OrderEditLineAddition}. An order line added by the enclosing edit,
             * with its value frozen at creation. anyOf[2] (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValue}. The cost of the added
             * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
             * anyOf[2] (Value): null.
             */
            "added_total_money"?: ((MoneyValue) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValue}. What the added lines cost beyond the removed
             * value and released charges, tax included, frozen when the edit was created. Zero
             * when the edit had no balance. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValue) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string or null. When the edit was canceled. `null` when the edit is not canceled.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string | null) | (null) | (unknown));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string or null. Why the edit was canceled. `null` when the edit is
             * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link OrderEditChargeRefund}. Charges released
             * by this edit, frozen at creation. Empty when no charges were released. anyOf[1][]
             * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order
             * charge, and the part refunded to the buyer. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string or null. When the item changes were applied to
             * the order. `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string | null) | (null) | (unknown));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string or null. When Flint cancels the edit if the
             * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string | null) | (null) | (unknown));
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
             * it. anyOf[1] (Value): string or null. The payment intent that collects
             * amount_due_money. Confirm it to pay the balance. `null` when the edit has no
             * balance, and for a moment while Flint is still creating it. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
             * {@link MoneyValue}. Money to refund after the removed value and released charges pay
             * for added lines. May be zero; an edit with no refund money creates no refund.
             * anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValue) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemoval}. Removed units and their refund amounts frozen at
             * creation. anyOf[1][] (Value): {@link OrderEditLineRemoval}. Removed whole units of
             * an order line and their refund amount frozen at creation. The enclosing edit
             * identifies the order. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValue}. The value of the removed units: the sum of
             * remove_line_items[].total_money. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValue) | (null));
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
             * MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
             * from refunds linked to this edit. Failed allocations do not reduce it. anyOf[2]
             * (Value): null.
             */
            "unrefunded_money"?: ((MoneyValue) | (null));
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
     * OrderEditLineAddition} or null. Added order lines, in request order, with their quantities
     * and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. previous_attributes.add_line_items.anyOf[1][] (Value):
     * {@link OrderEditLineAddition}. An order line added by the enclosing edit, with its value
     * frozen at creation. previous_attributes.add_line_items.anyOf[2] (Value): null.
     * previous_attributes.added_total_money (Optional): {@link MoneyValue} or null. The cost of
     * the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the
     * added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValue} or null. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string or null. When the edit
     * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
     * null. Charges released by this edit, frozen at creation. Empty when no charges were
     * released. previous_attributes.charge_refunds.anyOf[1] (Value): Array of {@link
     * OrderEditChargeRefund}. Charges released by this edit, frozen at creation. Empty when no
     * charges were released. previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
     * refunded to the buyer. previous_attributes.charge_refunds.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null or null. When Flint cancels
     * the edit if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null or null. The payment
     * intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit
     * has no balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
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
     * (Value): null. previous_attributes.refund_money (Optional): {@link MoneyValue} or null.
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValue}. Money to refund after
     * the removed value and released charges pay for added lines. May be zero; an edit with no
     * refund money creates no refund. previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link OrderEditLineRemoval} or
     * null. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemoval}. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1][] (Value): {@link OrderEditLineRemoval}.
     * Removed whole units of an order line and their refund amount frozen at creation. The
     * enclosing edit identifies the order. previous_attributes.remove_line_items.anyOf[2] (Value):
     * null. previous_attributes.removed_total_money (Optional): {@link MoneyValue} or null. The
     * value of the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[1] (Value): {@link MoneyValue}. The value of
     * the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Pending while waiting for a balance payment, completed once the
     * item changes are applied, or canceled when it ends without changing the order. Refund
     * processing has its own status on each refund. Value enum: "pending", "completed",
     * "canceled". previous_attributes.status.anyOf[1] (Value): string. Pending while waiting for a
     * balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains
     * cancel while pending and the payment is neither processing nor succeeded. Contains retry
     * when unrefunded_money is positive and no linked refund is pending. Empty while Flint is
     * still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValue} or null. Frozen refund
     * money not covered by pending or succeeded allocations from refunds linked to this edit.
     * Failed allocations do not reduce it. previous_attributes.unrefunded_money.anyOf[1] (Value):
     * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations from
     * refunds linked to this edit. Failed allocations do not reduce it.
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
         * OrderEditLineAddition} or null. Added order lines, in request order, with their
         * quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}. Added order
         * lines, in request order, with their quantities and values frozen at creation. Empty when
         * the edit added nothing. add_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen
         * at creation. add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValue} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the added lines: the
         * sum of add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValue} or null. What the added lines cost beyond the removed value and released
         * charges, tax included, frozen when the edit was created. Zero when the edit had no
         * balance. amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added lines
         * cost beyond the removed value and released charges, tax included, frozen when the edit
         * was created. Zero when the edit had no balance. amount_due_money.anyOf[2] (Value): null.
         * canceled_at (Optional): string or null or null. When the edit was canceled. `null` when
         * the edit is not canceled. canceled_at.anyOf[1] (Value): string or null. When the edit
         * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null or null. Why the edit was canceled. `null` when the edit is
         * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[1] (Value): string or null. Why the
         * edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request",
         * "expired", "payment_disputed", "payment_returned", null. cancellation_reason.anyOf[2]
         * (Value): null. charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
         * null. Charges released by this edit, frozen at creation. Empty when no charges were
         * released. charge_refunds.anyOf[1] (Value): Array of {@link OrderEditChargeRefund}.
         * Charges released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1][] (Value): {@link OrderEditChargeRefund}. The value an edit
         * releases from one order charge, and the part refunded to the buyer.
         * charge_refunds.anyOf[2] (Value): null. completed_at (Optional): string or null or null.
         * When the item changes were applied to the order. `null` when the edit is pending or
         * canceled. completed_at.anyOf[1] (Value): string or null. When the item changes were
         * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the edit was created. created_at.anyOf[1] (Value):
         * string. When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. expires_at (Optional): string or null or null. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit if the
         * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. order_edit_id
         * (Optional): string or null. Stable ID of this order edit. order_edit_id.anyOf[1]
         * (Value): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_edit_id.anyOf[2] (Value): null.
         * order_id (Optional): string or null. The order this edit belongs to. order_id.anyOf[1]
         * (Value): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string or null or null. The payment intent that collects amount_due_money.
         * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
         * while Flint is still creating it. payment_intent_id.anyOf[1] (Value): string or null.
         * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
         * when the edit has no balance, and for a moment while Flint is still creating it.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * reason (Optional): string or null. Reason for the edit and its refund. Value enum:
         * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
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
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link MoneyValue} or null.
         * Money to refund after the removed value and released charges pay for added lines. May be
         * zero; an edit with no refund money creates no refund. refund_money.anyOf[1] (Value):
         * {@link MoneyValue}. Money to refund after the removed value and released charges pay for
         * added lines. May be zero; an edit with no refund money creates no refund.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemoval} or null. Removed units and their refund amounts frozen at
         * creation. remove_line_items.anyOf[1] (Value): Array of {@link OrderEditLineRemoval}.
         * Removed units and their refund amounts frozen at creation. remove_line_items.anyOf[1][]
         * (Value): {@link OrderEditLineRemoval}. Removed whole units of an order line and their
         * refund amount frozen at creation. The enclosing edit identifies the order.
         * remove_line_items.anyOf[2] (Value): null. removed_total_money (Optional): {@link
         * MoneyValue} or null. The value of the removed units: the sum of
         * remove_line_items[].total_money. removed_total_money.anyOf[1] (Value): {@link
         * MoneyValue}. The value of the removed units: the sum of remove_line_items[].total_money.
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
         * MoneyValue} or null. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it.
         * unrefunded_money.anyOf[1] (Value): {@link MoneyValue}. Frozen refund money not covered
         * by pending or succeeded allocations from refunds linked to this edit. Failed allocations
         * do not reduce it. unrefunded_money.anyOf[2] (Value): null. version (Optional): integer
         * or null. The counter advances when status, payment_intent_id, completed_at, canceled_at
         * or cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances
         * when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAddition}. Added order lines, in request order, with their quantities
             * and values frozen at creation. Empty when the edit added nothing. anyOf[1][]
             * (Value): {@link OrderEditLineAddition}. An order line added by the enclosing edit,
             * with its value frozen at creation. anyOf[2] (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValue}. The cost of the added
             * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
             * anyOf[2] (Value): null.
             */
            "added_total_money"?: ((MoneyValue) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValue}. What the added lines cost beyond the removed
             * value and released charges, tax included, frozen when the edit was created. Zero
             * when the edit had no balance. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValue) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string or null. When the edit was canceled. `null` when the edit is not canceled.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string | null) | (null) | (unknown));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string or null. Why the edit was canceled. `null` when the edit is
             * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link OrderEditChargeRefund}. Charges released
             * by this edit, frozen at creation. Empty when no charges were released. anyOf[1][]
             * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order
             * charge, and the part refunded to the buyer. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string or null. When the item changes were applied to
             * the order. `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string | null) | (null) | (unknown));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string or null. When Flint cancels the edit if the
             * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string | null) | (null) | (unknown));
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
             * it. anyOf[1] (Value): string or null. The payment intent that collects
             * amount_due_money. Confirm it to pay the balance. `null` when the edit has no
             * balance, and for a moment while Flint is still creating it. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
             * {@link MoneyValue}. Money to refund after the removed value and released charges pay
             * for added lines. May be zero; an edit with no refund money creates no refund.
             * anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValue) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemoval}. Removed units and their refund amounts frozen at
             * creation. anyOf[1][] (Value): {@link OrderEditLineRemoval}. Removed whole units of
             * an order line and their refund amount frozen at creation. The enclosing edit
             * identifies the order. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValue}. The value of the removed units: the sum of
             * remove_line_items[].total_money. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValue) | (null));
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
             * MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
             * from refunds linked to this edit. Failed allocations do not reduce it. anyOf[2]
             * (Value): null.
             */
            "unrefunded_money"?: ((MoneyValue) | (null));
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
export type OrderEditCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrderEdit;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            "added_total_money"?: ((MoneyValue) | (null));
            "amount_due_money"?: ((MoneyValue) | (null));
            "canceled_at"?: ((string | null) | (null) | (unknown));
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            "completed_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string | null) | (null) | (unknown));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
            "refund_money"?: ((MoneyValue) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            "removed_total_money"?: ((MoneyValue) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValue) | (null));
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
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            "added_total_money"?: ((MoneyValue) | (null));
            "amount_due_money"?: ((MoneyValue) | (null));
            "canceled_at"?: ((string | null) | (null) | (unknown));
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            "completed_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string | null) | (null) | (unknown));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
            "refund_money"?: ((MoneyValue) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            "removed_total_money"?: ((MoneyValue) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValue) | (null));
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
     * OrderEditLineAddition} or null. Added order lines, in request order, with their quantities
     * and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. previous_attributes.add_line_items.anyOf[1][] (Value):
     * {@link OrderEditLineAddition}. An order line added by the enclosing edit, with its value
     * frozen at creation. previous_attributes.add_line_items.anyOf[2] (Value): null.
     * previous_attributes.added_total_money (Optional): {@link MoneyValue} or null. The cost of
     * the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the
     * added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValue} or null. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string or null. When the edit
     * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
     * null. Charges released by this edit, frozen at creation. Empty when no charges were
     * released. previous_attributes.charge_refunds.anyOf[1] (Value): Array of {@link
     * OrderEditChargeRefund}. Charges released by this edit, frozen at creation. Empty when no
     * charges were released. previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
     * refunded to the buyer. previous_attributes.charge_refunds.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null or null. When Flint cancels
     * the edit if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null or null. The payment
     * intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit
     * has no balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
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
     * (Value): null. previous_attributes.refund_money (Optional): {@link MoneyValue} or null.
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValue}. Money to refund after
     * the removed value and released charges pay for added lines. May be zero; an edit with no
     * refund money creates no refund. previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link OrderEditLineRemoval} or
     * null. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemoval}. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1][] (Value): {@link OrderEditLineRemoval}.
     * Removed whole units of an order line and their refund amount frozen at creation. The
     * enclosing edit identifies the order. previous_attributes.remove_line_items.anyOf[2] (Value):
     * null. previous_attributes.removed_total_money (Optional): {@link MoneyValue} or null. The
     * value of the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[1] (Value): {@link MoneyValue}. The value of
     * the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Pending while waiting for a balance payment, completed once the
     * item changes are applied, or canceled when it ends without changing the order. Refund
     * processing has its own status on each refund. Value enum: "pending", "completed",
     * "canceled". previous_attributes.status.anyOf[1] (Value): string. Pending while waiting for a
     * balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains
     * cancel while pending and the payment is neither processing nor succeeded. Contains retry
     * when unrefunded_money is positive and no linked refund is pending. Empty while Flint is
     * still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValue} or null. Frozen refund
     * money not covered by pending or succeeded allocations from refunds linked to this edit.
     * Failed allocations do not reduce it. previous_attributes.unrefunded_money.anyOf[1] (Value):
     * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations from
     * refunds linked to this edit. Failed allocations do not reduce it.
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
         * OrderEditLineAddition} or null. Added order lines, in request order, with their
         * quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}. Added order
         * lines, in request order, with their quantities and values frozen at creation. Empty when
         * the edit added nothing. add_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen
         * at creation. add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValue} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the added lines: the
         * sum of add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValue} or null. What the added lines cost beyond the removed value and released
         * charges, tax included, frozen when the edit was created. Zero when the edit had no
         * balance. amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added lines
         * cost beyond the removed value and released charges, tax included, frozen when the edit
         * was created. Zero when the edit had no balance. amount_due_money.anyOf[2] (Value): null.
         * canceled_at (Optional): string or null or null. When the edit was canceled. `null` when
         * the edit is not canceled. canceled_at.anyOf[1] (Value): string or null. When the edit
         * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null or null. Why the edit was canceled. `null` when the edit is
         * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[1] (Value): string or null. Why the
         * edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request",
         * "expired", "payment_disputed", "payment_returned", null. cancellation_reason.anyOf[2]
         * (Value): null. charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
         * null. Charges released by this edit, frozen at creation. Empty when no charges were
         * released. charge_refunds.anyOf[1] (Value): Array of {@link OrderEditChargeRefund}.
         * Charges released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1][] (Value): {@link OrderEditChargeRefund}. The value an edit
         * releases from one order charge, and the part refunded to the buyer.
         * charge_refunds.anyOf[2] (Value): null. completed_at (Optional): string or null or null.
         * When the item changes were applied to the order. `null` when the edit is pending or
         * canceled. completed_at.anyOf[1] (Value): string or null. When the item changes were
         * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the edit was created. created_at.anyOf[1] (Value):
         * string. When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. expires_at (Optional): string or null or null. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit if the
         * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. order_edit_id
         * (Optional): string or null. Stable ID of this order edit. order_edit_id.anyOf[1]
         * (Value): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_edit_id.anyOf[2] (Value): null.
         * order_id (Optional): string or null. The order this edit belongs to. order_id.anyOf[1]
         * (Value): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string or null or null. The payment intent that collects amount_due_money.
         * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
         * while Flint is still creating it. payment_intent_id.anyOf[1] (Value): string or null.
         * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
         * when the edit has no balance, and for a moment while Flint is still creating it.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * reason (Optional): string or null. Reason for the edit and its refund. Value enum:
         * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
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
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link MoneyValue} or null.
         * Money to refund after the removed value and released charges pay for added lines. May be
         * zero; an edit with no refund money creates no refund. refund_money.anyOf[1] (Value):
         * {@link MoneyValue}. Money to refund after the removed value and released charges pay for
         * added lines. May be zero; an edit with no refund money creates no refund.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemoval} or null. Removed units and their refund amounts frozen at
         * creation. remove_line_items.anyOf[1] (Value): Array of {@link OrderEditLineRemoval}.
         * Removed units and their refund amounts frozen at creation. remove_line_items.anyOf[1][]
         * (Value): {@link OrderEditLineRemoval}. Removed whole units of an order line and their
         * refund amount frozen at creation. The enclosing edit identifies the order.
         * remove_line_items.anyOf[2] (Value): null. removed_total_money (Optional): {@link
         * MoneyValue} or null. The value of the removed units: the sum of
         * remove_line_items[].total_money. removed_total_money.anyOf[1] (Value): {@link
         * MoneyValue}. The value of the removed units: the sum of remove_line_items[].total_money.
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
         * MoneyValue} or null. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it.
         * unrefunded_money.anyOf[1] (Value): {@link MoneyValue}. Frozen refund money not covered
         * by pending or succeeded allocations from refunds linked to this edit. Failed allocations
         * do not reduce it. unrefunded_money.anyOf[2] (Value): null. version (Optional): integer
         * or null. The counter advances when status, payment_intent_id, completed_at, canceled_at
         * or cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances
         * when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAddition}. Added order lines, in request order, with their quantities
             * and values frozen at creation. Empty when the edit added nothing. anyOf[1][]
             * (Value): {@link OrderEditLineAddition}. An order line added by the enclosing edit,
             * with its value frozen at creation. anyOf[2] (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValue}. The cost of the added
             * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
             * anyOf[2] (Value): null.
             */
            "added_total_money"?: ((MoneyValue) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValue}. What the added lines cost beyond the removed
             * value and released charges, tax included, frozen when the edit was created. Zero
             * when the edit had no balance. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValue) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string or null. When the edit was canceled. `null` when the edit is not canceled.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string | null) | (null) | (unknown));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string or null. Why the edit was canceled. `null` when the edit is
             * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link OrderEditChargeRefund}. Charges released
             * by this edit, frozen at creation. Empty when no charges were released. anyOf[1][]
             * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order
             * charge, and the part refunded to the buyer. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string or null. When the item changes were applied to
             * the order. `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string | null) | (null) | (unknown));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string or null. When Flint cancels the edit if the
             * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string | null) | (null) | (unknown));
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
             * it. anyOf[1] (Value): string or null. The payment intent that collects
             * amount_due_money. Confirm it to pay the balance. `null` when the edit has no
             * balance, and for a moment while Flint is still creating it. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
             * {@link MoneyValue}. Money to refund after the removed value and released charges pay
             * for added lines. May be zero; an edit with no refund money creates no refund.
             * anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValue) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemoval}. Removed units and their refund amounts frozen at
             * creation. anyOf[1][] (Value): {@link OrderEditLineRemoval}. Removed whole units of
             * an order line and their refund amount frozen at creation. The enclosing edit
             * identifies the order. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValue}. The value of the removed units: the sum of
             * remove_line_items[].total_money. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValue) | (null));
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
             * MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
             * from refunds linked to this edit. Failed allocations do not reduce it. anyOf[2]
             * (Value): null.
             */
            "unrefunded_money"?: ((MoneyValue) | (null));
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
     * OrderEditLineAddition} or null. Added order lines, in request order, with their quantities
     * and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. previous_attributes.add_line_items.anyOf[1][] (Value):
     * {@link OrderEditLineAddition}. An order line added by the enclosing edit, with its value
     * frozen at creation. previous_attributes.add_line_items.anyOf[2] (Value): null.
     * previous_attributes.added_total_money (Optional): {@link MoneyValue} or null. The cost of
     * the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the
     * added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValue} or null. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string or null. When the edit
     * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
     * null. Charges released by this edit, frozen at creation. Empty when no charges were
     * released. previous_attributes.charge_refunds.anyOf[1] (Value): Array of {@link
     * OrderEditChargeRefund}. Charges released by this edit, frozen at creation. Empty when no
     * charges were released. previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
     * refunded to the buyer. previous_attributes.charge_refunds.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null or null. When Flint cancels
     * the edit if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null or null. The payment
     * intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit
     * has no balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
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
     * (Value): null. previous_attributes.refund_money (Optional): {@link MoneyValue} or null.
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValue}. Money to refund after
     * the removed value and released charges pay for added lines. May be zero; an edit with no
     * refund money creates no refund. previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link OrderEditLineRemoval} or
     * null. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemoval}. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1][] (Value): {@link OrderEditLineRemoval}.
     * Removed whole units of an order line and their refund amount frozen at creation. The
     * enclosing edit identifies the order. previous_attributes.remove_line_items.anyOf[2] (Value):
     * null. previous_attributes.removed_total_money (Optional): {@link MoneyValue} or null. The
     * value of the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[1] (Value): {@link MoneyValue}. The value of
     * the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Pending while waiting for a balance payment, completed once the
     * item changes are applied, or canceled when it ends without changing the order. Refund
     * processing has its own status on each refund. Value enum: "pending", "completed",
     * "canceled". previous_attributes.status.anyOf[1] (Value): string. Pending while waiting for a
     * balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains
     * cancel while pending and the payment is neither processing nor succeeded. Contains retry
     * when unrefunded_money is positive and no linked refund is pending. Empty while Flint is
     * still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValue} or null. Frozen refund
     * money not covered by pending or succeeded allocations from refunds linked to this edit.
     * Failed allocations do not reduce it. previous_attributes.unrefunded_money.anyOf[1] (Value):
     * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations from
     * refunds linked to this edit. Failed allocations do not reduce it.
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
         * OrderEditLineAddition} or null. Added order lines, in request order, with their
         * quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}. Added order
         * lines, in request order, with their quantities and values frozen at creation. Empty when
         * the edit added nothing. add_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen
         * at creation. add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValue} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the added lines: the
         * sum of add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValue} or null. What the added lines cost beyond the removed value and released
         * charges, tax included, frozen when the edit was created. Zero when the edit had no
         * balance. amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added lines
         * cost beyond the removed value and released charges, tax included, frozen when the edit
         * was created. Zero when the edit had no balance. amount_due_money.anyOf[2] (Value): null.
         * canceled_at (Optional): string or null or null. When the edit was canceled. `null` when
         * the edit is not canceled. canceled_at.anyOf[1] (Value): string or null. When the edit
         * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null or null. Why the edit was canceled. `null` when the edit is
         * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[1] (Value): string or null. Why the
         * edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request",
         * "expired", "payment_disputed", "payment_returned", null. cancellation_reason.anyOf[2]
         * (Value): null. charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
         * null. Charges released by this edit, frozen at creation. Empty when no charges were
         * released. charge_refunds.anyOf[1] (Value): Array of {@link OrderEditChargeRefund}.
         * Charges released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1][] (Value): {@link OrderEditChargeRefund}. The value an edit
         * releases from one order charge, and the part refunded to the buyer.
         * charge_refunds.anyOf[2] (Value): null. completed_at (Optional): string or null or null.
         * When the item changes were applied to the order. `null` when the edit is pending or
         * canceled. completed_at.anyOf[1] (Value): string or null. When the item changes were
         * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the edit was created. created_at.anyOf[1] (Value):
         * string. When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. expires_at (Optional): string or null or null. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit if the
         * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. order_edit_id
         * (Optional): string or null. Stable ID of this order edit. order_edit_id.anyOf[1]
         * (Value): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_edit_id.anyOf[2] (Value): null.
         * order_id (Optional): string or null. The order this edit belongs to. order_id.anyOf[1]
         * (Value): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string or null or null. The payment intent that collects amount_due_money.
         * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
         * while Flint is still creating it. payment_intent_id.anyOf[1] (Value): string or null.
         * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
         * when the edit has no balance, and for a moment while Flint is still creating it.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * reason (Optional): string or null. Reason for the edit and its refund. Value enum:
         * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
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
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link MoneyValue} or null.
         * Money to refund after the removed value and released charges pay for added lines. May be
         * zero; an edit with no refund money creates no refund. refund_money.anyOf[1] (Value):
         * {@link MoneyValue}. Money to refund after the removed value and released charges pay for
         * added lines. May be zero; an edit with no refund money creates no refund.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemoval} or null. Removed units and their refund amounts frozen at
         * creation. remove_line_items.anyOf[1] (Value): Array of {@link OrderEditLineRemoval}.
         * Removed units and their refund amounts frozen at creation. remove_line_items.anyOf[1][]
         * (Value): {@link OrderEditLineRemoval}. Removed whole units of an order line and their
         * refund amount frozen at creation. The enclosing edit identifies the order.
         * remove_line_items.anyOf[2] (Value): null. removed_total_money (Optional): {@link
         * MoneyValue} or null. The value of the removed units: the sum of
         * remove_line_items[].total_money. removed_total_money.anyOf[1] (Value): {@link
         * MoneyValue}. The value of the removed units: the sum of remove_line_items[].total_money.
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
         * MoneyValue} or null. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it.
         * unrefunded_money.anyOf[1] (Value): {@link MoneyValue}. Frozen refund money not covered
         * by pending or succeeded allocations from refunds linked to this edit. Failed allocations
         * do not reduce it. unrefunded_money.anyOf[2] (Value): null. version (Optional): integer
         * or null. The counter advances when status, payment_intent_id, completed_at, canceled_at
         * or cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances
         * when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAddition}. Added order lines, in request order, with their quantities
             * and values frozen at creation. Empty when the edit added nothing. anyOf[1][]
             * (Value): {@link OrderEditLineAddition}. An order line added by the enclosing edit,
             * with its value frozen at creation. anyOf[2] (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValue}. The cost of the added
             * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
             * anyOf[2] (Value): null.
             */
            "added_total_money"?: ((MoneyValue) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValue}. What the added lines cost beyond the removed
             * value and released charges, tax included, frozen when the edit was created. Zero
             * when the edit had no balance. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValue) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string or null. When the edit was canceled. `null` when the edit is not canceled.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string | null) | (null) | (unknown));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string or null. Why the edit was canceled. `null` when the edit is
             * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link OrderEditChargeRefund}. Charges released
             * by this edit, frozen at creation. Empty when no charges were released. anyOf[1][]
             * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order
             * charge, and the part refunded to the buyer. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string or null. When the item changes were applied to
             * the order. `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string | null) | (null) | (unknown));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string or null. When Flint cancels the edit if the
             * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string | null) | (null) | (unknown));
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
             * it. anyOf[1] (Value): string or null. The payment intent that collects
             * amount_due_money. Confirm it to pay the balance. `null` when the edit has no
             * balance, and for a moment while Flint is still creating it. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
             * {@link MoneyValue}. Money to refund after the removed value and released charges pay
             * for added lines. May be zero; an edit with no refund money creates no refund.
             * anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValue) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemoval}. Removed units and their refund amounts frozen at
             * creation. anyOf[1][] (Value): {@link OrderEditLineRemoval}. Removed whole units of
             * an order line and their refund amount frozen at creation. The enclosing edit
             * identifies the order. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValue}. The value of the removed units: the sum of
             * remove_line_items[].total_money. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValue) | (null));
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
             * MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
             * from refunds linked to this edit. Failed allocations do not reduce it. anyOf[2]
             * (Value): null.
             */
            "unrefunded_money"?: ((MoneyValue) | (null));
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
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            "added_total_money"?: ((MoneyValue) | (null));
            "amount_due_money"?: ((MoneyValue) | (null));
            "canceled_at"?: ((string | null) | (null) | (unknown));
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            "completed_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string | null) | (null) | (unknown));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
            "refund_money"?: ((MoneyValue) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            "removed_total_money"?: ((MoneyValue) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValue) | (null));
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
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            "added_total_money"?: ((MoneyValue) | (null));
            "amount_due_money"?: ((MoneyValue) | (null));
            "canceled_at"?: ((string | null) | (null) | (unknown));
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            "completed_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string | null) | (null) | (unknown));
            "order_edit_id"?: ((string) | (null));
            "order_id"?: ((string) | (null));
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
            "refund_money"?: ((MoneyValue) | (null));
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            "removed_total_money"?: ((MoneyValue) | (null));
            "status"?: (("pending" | "completed" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "retry" | (string & {})>) | (null));
            "unrefunded_money"?: ((MoneyValue) | (null));
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
     * OrderEditLineAddition} or null. Added order lines, in request order, with their quantities
     * and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. previous_attributes.add_line_items.anyOf[1][] (Value):
     * {@link OrderEditLineAddition}. An order line added by the enclosing edit, with its value
     * frozen at creation. previous_attributes.add_line_items.anyOf[2] (Value): null.
     * previous_attributes.added_total_money (Optional): {@link MoneyValue} or null. The cost of
     * the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the
     * added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValue} or null. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string or null. When the edit
     * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
     * null. Charges released by this edit, frozen at creation. Empty when no charges were
     * released. previous_attributes.charge_refunds.anyOf[1] (Value): Array of {@link
     * OrderEditChargeRefund}. Charges released by this edit, frozen at creation. Empty when no
     * charges were released. previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
     * refunded to the buyer. previous_attributes.charge_refunds.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null or null. When Flint cancels
     * the edit if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null or null. The payment
     * intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit
     * has no balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
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
     * (Value): null. previous_attributes.refund_money (Optional): {@link MoneyValue} or null.
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValue}. Money to refund after
     * the removed value and released charges pay for added lines. May be zero; an edit with no
     * refund money creates no refund. previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link OrderEditLineRemoval} or
     * null. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemoval}. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1][] (Value): {@link OrderEditLineRemoval}.
     * Removed whole units of an order line and their refund amount frozen at creation. The
     * enclosing edit identifies the order. previous_attributes.remove_line_items.anyOf[2] (Value):
     * null. previous_attributes.removed_total_money (Optional): {@link MoneyValue} or null. The
     * value of the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[1] (Value): {@link MoneyValue}. The value of
     * the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Pending while waiting for a balance payment, completed once the
     * item changes are applied, or canceled when it ends without changing the order. Refund
     * processing has its own status on each refund. Value enum: "pending", "completed",
     * "canceled". previous_attributes.status.anyOf[1] (Value): string. Pending while waiting for a
     * balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains
     * cancel while pending and the payment is neither processing nor succeeded. Contains retry
     * when unrefunded_money is positive and no linked refund is pending. Empty while Flint is
     * still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValue} or null. Frozen refund
     * money not covered by pending or succeeded allocations from refunds linked to this edit.
     * Failed allocations do not reduce it. previous_attributes.unrefunded_money.anyOf[1] (Value):
     * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations from
     * refunds linked to this edit. Failed allocations do not reduce it.
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
         * OrderEditLineAddition} or null. Added order lines, in request order, with their
         * quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}. Added order
         * lines, in request order, with their quantities and values frozen at creation. Empty when
         * the edit added nothing. add_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen
         * at creation. add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValue} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the added lines: the
         * sum of add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValue} or null. What the added lines cost beyond the removed value and released
         * charges, tax included, frozen when the edit was created. Zero when the edit had no
         * balance. amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added lines
         * cost beyond the removed value and released charges, tax included, frozen when the edit
         * was created. Zero when the edit had no balance. amount_due_money.anyOf[2] (Value): null.
         * canceled_at (Optional): string or null or null. When the edit was canceled. `null` when
         * the edit is not canceled. canceled_at.anyOf[1] (Value): string or null. When the edit
         * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null or null. Why the edit was canceled. `null` when the edit is
         * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[1] (Value): string or null. Why the
         * edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request",
         * "expired", "payment_disputed", "payment_returned", null. cancellation_reason.anyOf[2]
         * (Value): null. charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
         * null. Charges released by this edit, frozen at creation. Empty when no charges were
         * released. charge_refunds.anyOf[1] (Value): Array of {@link OrderEditChargeRefund}.
         * Charges released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1][] (Value): {@link OrderEditChargeRefund}. The value an edit
         * releases from one order charge, and the part refunded to the buyer.
         * charge_refunds.anyOf[2] (Value): null. completed_at (Optional): string or null or null.
         * When the item changes were applied to the order. `null` when the edit is pending or
         * canceled. completed_at.anyOf[1] (Value): string or null. When the item changes were
         * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the edit was created. created_at.anyOf[1] (Value):
         * string. When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. expires_at (Optional): string or null or null. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit if the
         * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. order_edit_id
         * (Optional): string or null. Stable ID of this order edit. order_edit_id.anyOf[1]
         * (Value): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_edit_id.anyOf[2] (Value): null.
         * order_id (Optional): string or null. The order this edit belongs to. order_id.anyOf[1]
         * (Value): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string or null or null. The payment intent that collects amount_due_money.
         * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
         * while Flint is still creating it. payment_intent_id.anyOf[1] (Value): string or null.
         * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
         * when the edit has no balance, and for a moment while Flint is still creating it.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * reason (Optional): string or null. Reason for the edit and its refund. Value enum:
         * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
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
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link MoneyValue} or null.
         * Money to refund after the removed value and released charges pay for added lines. May be
         * zero; an edit with no refund money creates no refund. refund_money.anyOf[1] (Value):
         * {@link MoneyValue}. Money to refund after the removed value and released charges pay for
         * added lines. May be zero; an edit with no refund money creates no refund.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemoval} or null. Removed units and their refund amounts frozen at
         * creation. remove_line_items.anyOf[1] (Value): Array of {@link OrderEditLineRemoval}.
         * Removed units and their refund amounts frozen at creation. remove_line_items.anyOf[1][]
         * (Value): {@link OrderEditLineRemoval}. Removed whole units of an order line and their
         * refund amount frozen at creation. The enclosing edit identifies the order.
         * remove_line_items.anyOf[2] (Value): null. removed_total_money (Optional): {@link
         * MoneyValue} or null. The value of the removed units: the sum of
         * remove_line_items[].total_money. removed_total_money.anyOf[1] (Value): {@link
         * MoneyValue}. The value of the removed units: the sum of remove_line_items[].total_money.
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
         * MoneyValue} or null. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it.
         * unrefunded_money.anyOf[1] (Value): {@link MoneyValue}. Frozen refund money not covered
         * by pending or succeeded allocations from refunds linked to this edit. Failed allocations
         * do not reduce it. unrefunded_money.anyOf[2] (Value): null. version (Optional): integer
         * or null. The counter advances when status, payment_intent_id, completed_at, canceled_at
         * or cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances
         * when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAddition}. Added order lines, in request order, with their quantities
             * and values frozen at creation. Empty when the edit added nothing. anyOf[1][]
             * (Value): {@link OrderEditLineAddition}. An order line added by the enclosing edit,
             * with its value frozen at creation. anyOf[2] (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValue}. The cost of the added
             * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
             * anyOf[2] (Value): null.
             */
            "added_total_money"?: ((MoneyValue) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValue}. What the added lines cost beyond the removed
             * value and released charges, tax included, frozen when the edit was created. Zero
             * when the edit had no balance. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValue) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string or null. When the edit was canceled. `null` when the edit is not canceled.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string | null) | (null) | (unknown));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string or null. Why the edit was canceled. `null` when the edit is
             * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link OrderEditChargeRefund}. Charges released
             * by this edit, frozen at creation. Empty when no charges were released. anyOf[1][]
             * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order
             * charge, and the part refunded to the buyer. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string or null. When the item changes were applied to
             * the order. `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string | null) | (null) | (unknown));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string or null. When Flint cancels the edit if the
             * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string | null) | (null) | (unknown));
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
             * it. anyOf[1] (Value): string or null. The payment intent that collects
             * amount_due_money. Confirm it to pay the balance. `null` when the edit has no
             * balance, and for a moment while Flint is still creating it. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
             * {@link MoneyValue}. Money to refund after the removed value and released charges pay
             * for added lines. May be zero; an edit with no refund money creates no refund.
             * anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValue) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemoval}. Removed units and their refund amounts frozen at
             * creation. anyOf[1][] (Value): {@link OrderEditLineRemoval}. Removed whole units of
             * an order line and their refund amount frozen at creation. The enclosing edit
             * identifies the order. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValue}. The value of the removed units: the sum of
             * remove_line_items[].total_money. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValue) | (null));
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
             * MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
             * from refunds linked to this edit. Failed allocations do not reduce it. anyOf[2]
             * (Value): null.
             */
            "unrefunded_money"?: ((MoneyValue) | (null));
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
     * OrderEditLineAddition} or null. Added order lines, in request order, with their quantities
     * and values frozen at creation. Empty when the edit added nothing.
     * previous_attributes.add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}.
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. previous_attributes.add_line_items.anyOf[1][] (Value):
     * {@link OrderEditLineAddition}. An order line added by the enclosing edit, with its value
     * frozen at creation. previous_attributes.add_line_items.anyOf[2] (Value): null.
     * previous_attributes.added_total_money (Optional): {@link MoneyValue} or null. The cost of
     * the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the
     * added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
     * previous_attributes.added_total_money.anyOf[2] (Value): null.
     * previous_attributes.amount_due_money (Optional): {@link MoneyValue} or null. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added
     * lines cost beyond the removed value and released charges, tax included, frozen when the edit
     * was created. Zero when the edit had no balance.
     * previous_attributes.amount_due_money.anyOf[2] (Value): null. previous_attributes.canceled_at
     * (Optional): string or null or null. When the edit was canceled. `null` when the edit is not
     * canceled. previous_attributes.canceled_at.anyOf[1] (Value): string or null. When the edit
     * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string or null. Why the edit was
     * canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired",
     * "payment_disputed", "payment_returned", null.
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
     * null. Charges released by this edit, frozen at creation. Empty when no charges were
     * released. previous_attributes.charge_refunds.anyOf[1] (Value): Array of {@link
     * OrderEditChargeRefund}. Charges released by this edit, frozen at creation. Empty when no
     * charges were released. previous_attributes.charge_refunds.anyOf[1][] (Value): {@link
     * OrderEditChargeRefund}. The value an edit releases from one order charge, and the part
     * refunded to the buyer. previous_attributes.charge_refunds.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled.
     * previous_attributes.completed_at.anyOf[1] (Value): string or null. When the item changes
     * were applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the edit was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the edit was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.expires_at (Optional): string or null or null. When Flint cancels
     * the edit if the balance isn't paid. `null` when the edit never had a balance.
     * previous_attributes.expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit
     * if the balance isn't paid. `null` when the edit never had a balance. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. Stable ID of this order edit.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. Stable ID of this order edit.
     * pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * previous_attributes.order_edit_id.anyOf[2] (Value): null. previous_attributes.order_id
     * (Optional): string or null. The order this edit belongs to.
     * previous_attributes.order_id.anyOf[1] (Value): string. The order this edit belongs to.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value):
     * null. previous_attributes.payment_intent_id (Optional): string or null or null. The payment
     * intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit
     * has no balance, and for a moment while Flint is still creating it.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string or null. The payment intent
     * that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no
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
     * (Value): null. previous_attributes.refund_money (Optional): {@link MoneyValue} or null.
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund.
     * previous_attributes.refund_money.anyOf[1] (Value): {@link MoneyValue}. Money to refund after
     * the removed value and released charges pay for added lines. May be zero; an edit with no
     * refund money creates no refund. previous_attributes.refund_money.anyOf[2] (Value): null.
     * previous_attributes.remove_line_items (Optional): Array of {@link OrderEditLineRemoval} or
     * null. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1] (Value): Array of {@link
     * OrderEditLineRemoval}. Removed units and their refund amounts frozen at creation.
     * previous_attributes.remove_line_items.anyOf[1][] (Value): {@link OrderEditLineRemoval}.
     * Removed whole units of an order line and their refund amount frozen at creation. The
     * enclosing edit identifies the order. previous_attributes.remove_line_items.anyOf[2] (Value):
     * null. previous_attributes.removed_total_money (Optional): {@link MoneyValue} or null. The
     * value of the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[1] (Value): {@link MoneyValue}. The value of
     * the removed units: the sum of remove_line_items[].total_money.
     * previous_attributes.removed_total_money.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Pending while waiting for a balance payment, completed once the
     * item changes are applied, or canceled when it ends without changing the order. Refund
     * processing has its own status on each refund. Value enum: "pending", "completed",
     * "canceled". previous_attributes.status.anyOf[1] (Value): string. Pending while waiting for a
     * balance payment, completed once the item changes are applied, or canceled when it ends
     * without changing the order. Refund processing has its own status on each refund. Value enum:
     * "pending", "completed", "canceled". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Contains cancel
     * while pending and the payment is neither processing nor succeeded. Contains retry when
     * unrefunded_money is positive and no linked refund is pending. Empty while Flint is still
     * processing the original refund before any linked refund exists; retry becomes available if
     * that processing ends without a refund. Independent of caller permissions. [] enum: "cancel",
     * "retry". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains
     * cancel while pending and the payment is neither processing nor succeeded. Contains retry
     * when unrefunded_money is positive and no linked refund is pending. Empty while Flint is
     * still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[1][] (Value): string.
     * Value enum: "cancel", "retry". previous_attributes.supported_actions.anyOf[2] (Value): null.
     * previous_attributes.unrefunded_money (Optional): {@link MoneyValue} or null. Frozen refund
     * money not covered by pending or succeeded allocations from refunds linked to this edit.
     * Failed allocations do not reduce it. previous_attributes.unrefunded_money.anyOf[1] (Value):
     * {@link MoneyValue}. Frozen refund money not covered by pending or succeeded allocations from
     * refunds linked to this edit. Failed allocations do not reduce it.
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
         * OrderEditLineAddition} or null. Added order lines, in request order, with their
         * quantities and values frozen at creation. Empty when the edit added nothing.
         * add_line_items.anyOf[1] (Value): Array of {@link OrderEditLineAddition}. Added order
         * lines, in request order, with their quantities and values frozen at creation. Empty when
         * the edit added nothing. add_line_items.anyOf[1][] (Value): {@link
         * OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen
         * at creation. add_line_items.anyOf[2] (Value): null. added_total_money (Optional): {@link
         * MoneyValue} or null. The cost of the added lines: the sum of
         * add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[1] (Value): {@link MoneyValue}. The cost of the added lines: the
         * sum of add_line_items[].total_money. Zero when the edit added nothing.
         * added_total_money.anyOf[2] (Value): null. amount_due_money (Optional): {@link
         * MoneyValue} or null. What the added lines cost beyond the removed value and released
         * charges, tax included, frozen when the edit was created. Zero when the edit had no
         * balance. amount_due_money.anyOf[1] (Value): {@link MoneyValue}. What the added lines
         * cost beyond the removed value and released charges, tax included, frozen when the edit
         * was created. Zero when the edit had no balance. amount_due_money.anyOf[2] (Value): null.
         * canceled_at (Optional): string or null or null. When the edit was canceled. `null` when
         * the edit is not canceled. canceled_at.anyOf[1] (Value): string or null. When the edit
         * was canceled. `null` when the edit is not canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null or null. Why the edit was canceled. `null` when the edit is
         * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
         * "payment_returned", null. cancellation_reason.anyOf[1] (Value): string or null. Why the
         * edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request",
         * "expired", "payment_disputed", "payment_returned", null. cancellation_reason.anyOf[2]
         * (Value): null. charge_refunds (Optional): Array of {@link OrderEditChargeRefund} or
         * null. Charges released by this edit, frozen at creation. Empty when no charges were
         * released. charge_refunds.anyOf[1] (Value): Array of {@link OrderEditChargeRefund}.
         * Charges released by this edit, frozen at creation. Empty when no charges were released.
         * charge_refunds.anyOf[1][] (Value): {@link OrderEditChargeRefund}. The value an edit
         * releases from one order charge, and the part refunded to the buyer.
         * charge_refunds.anyOf[2] (Value): null. completed_at (Optional): string or null or null.
         * When the item changes were applied to the order. `null` when the edit is pending or
         * canceled. completed_at.anyOf[1] (Value): string or null. When the item changes were
         * applied to the order. `null` when the edit is pending or canceled. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the edit was created. created_at.anyOf[1] (Value):
         * string. When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. expires_at (Optional): string or null or null. When
         * Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
         * balance. expires_at.anyOf[1] (Value): string or null. When Flint cancels the edit if the
         * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. order_edit_id
         * (Optional): string or null. Stable ID of this order edit. order_edit_id.anyOf[1]
         * (Value): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". order_edit_id.anyOf[2] (Value): null.
         * order_id (Optional): string or null. The order this edit belongs to. order_id.anyOf[1]
         * (Value): string. The order this edit belongs to. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. payment_intent_id
         * (Optional): string or null or null. The payment intent that collects amount_due_money.
         * Confirm it to pay the balance. `null` when the edit has no balance, and for a moment
         * while Flint is still creating it. payment_intent_id.anyOf[1] (Value): string or null.
         * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
         * when the edit has no balance, and for a moment while Flint is still creating it.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * reason (Optional): string or null. Reason for the edit and its refund. Value enum:
         * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
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
         * refund_ids.anyOf[2] (Value): null. refund_money (Optional): {@link MoneyValue} or null.
         * Money to refund after the removed value and released charges pay for added lines. May be
         * zero; an edit with no refund money creates no refund. refund_money.anyOf[1] (Value):
         * {@link MoneyValue}. Money to refund after the removed value and released charges pay for
         * added lines. May be zero; an edit with no refund money creates no refund.
         * refund_money.anyOf[2] (Value): null. remove_line_items (Optional): Array of {@link
         * OrderEditLineRemoval} or null. Removed units and their refund amounts frozen at
         * creation. remove_line_items.anyOf[1] (Value): Array of {@link OrderEditLineRemoval}.
         * Removed units and their refund amounts frozen at creation. remove_line_items.anyOf[1][]
         * (Value): {@link OrderEditLineRemoval}. Removed whole units of an order line and their
         * refund amount frozen at creation. The enclosing edit identifies the order.
         * remove_line_items.anyOf[2] (Value): null. removed_total_money (Optional): {@link
         * MoneyValue} or null. The value of the removed units: the sum of
         * remove_line_items[].total_money. removed_total_money.anyOf[1] (Value): {@link
         * MoneyValue}. The value of the removed units: the sum of remove_line_items[].total_money.
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
         * MoneyValue} or null. Frozen refund money not covered by pending or succeeded allocations
         * from refunds linked to this edit. Failed allocations do not reduce it.
         * unrefunded_money.anyOf[1] (Value): {@link MoneyValue}. Frozen refund money not covered
         * by pending or succeeded allocations from refunds linked to this edit. Failed allocations
         * do not reduce it. unrefunded_money.anyOf[2] (Value): null. version (Optional): integer
         * or null. The counter advances when status, payment_intent_id, completed_at, canceled_at
         * or cancellation_reason change. version.anyOf[1] (Value): integer. The counter advances
         * when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Added order lines, in request order, with their quantities and values frozen at
             * creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@link
             * OrderEditLineAddition}. Added order lines, in request order, with their quantities
             * and values frozen at creation. Empty when the edit added nothing. anyOf[1][]
             * (Value): {@link OrderEditLineAddition}. An order line added by the enclosing edit,
             * with its value frozen at creation. anyOf[2] (Value): null.
             */
            "add_line_items"?: ((Array<OrderEditLineAddition>) | (null));
            /**
             * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the
             * edit added nothing. anyOf[1] (Value): {@link MoneyValue}. The cost of the added
             * lines: the sum of add_line_items[].total_money. Zero when the edit added nothing.
             * anyOf[2] (Value): null.
             */
            "added_total_money"?: ((MoneyValue) | (null));
            /**
             * What the added lines cost beyond the removed value and released charges, tax
             * included, frozen when the edit was created. Zero when the edit had no balance.
             * anyOf[1] (Value): {@link MoneyValue}. What the added lines cost beyond the removed
             * value and released charges, tax included, frozen when the edit was created. Zero
             * when the edit had no balance. anyOf[2] (Value): null.
             */
            "amount_due_money"?: ((MoneyValue) | (null));
            /**
             * When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value):
             * string or null. When the edit was canceled. `null` when the edit is not canceled.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string | null) | (null) | (unknown));
            /**
             * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
             * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
             * anyOf[1] (Value): string or null. Why the edit was canceled. `null` when the edit is
             * not canceled. Value enum: "merchant_request", "expired", "payment_disputed",
             * "payment_returned", null. anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("merchant_request"
                | "expired"
                | "payment_disputed"
                | "payment_returned"
                | null
                | (string & {})
                | null)
                | (null)
                | (unknown));
            /**
             * Charges released by this edit, frozen at creation. Empty when no charges were
             * released. anyOf[1] (Value): Array of {@link OrderEditChargeRefund}. Charges released
             * by this edit, frozen at creation. Empty when no charges were released. anyOf[1][]
             * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order
             * charge, and the part refunded to the buyer. anyOf[2] (Value): null.
             */
            "charge_refunds"?: ((Array<OrderEditChargeRefund>) | (null));
            /**
             * When the item changes were applied to the order. `null` when the edit is pending or
             * canceled. anyOf[1] (Value): string or null. When the item changes were applied to
             * the order. `null` when the edit is pending or canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string | null) | (null) | (unknown));
            /**
             * When the edit was created. anyOf[1] (Value): string. When the edit was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When Flint cancels the edit if the balance isn't paid. `null` when the edit never
             * had a balance. anyOf[1] (Value): string or null. When Flint cancels the edit if the
             * balance isn't paid. `null` when the edit never had a balance. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string | null) | (null) | (unknown));
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
             * it. anyOf[1] (Value): string or null. The payment intent that collects
             * amount_due_money. Confirm it to pay the balance. `null` when the edit has no
             * balance, and for a moment while Flint is still creating it. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_id"?: ((string | null) | (null) | (unknown));
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
             * {@link MoneyValue}. Money to refund after the removed value and released charges pay
             * for added lines. May be zero; an edit with no refund money creates no refund.
             * anyOf[2] (Value): null.
             */
            "refund_money"?: ((MoneyValue) | (null));
            /**
             * Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array
             * of {@link OrderEditLineRemoval}. Removed units and their refund amounts frozen at
             * creation. anyOf[1][] (Value): {@link OrderEditLineRemoval}. Removed whole units of
             * an order line and their refund amount frozen at creation. The enclosing edit
             * identifies the order. anyOf[2] (Value): null.
             */
            "remove_line_items"?: ((Array<OrderEditLineRemoval>) | (null));
            /**
             * The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1]
             * (Value): {@link MoneyValue}. The value of the removed units: the sum of
             * remove_line_items[].total_money. anyOf[2] (Value): null.
             */
            "removed_total_money"?: ((MoneyValue) | (null));
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
             * MoneyValue}. Frozen refund money not covered by pending or succeeded allocations
             * from refunds linked to this edit. Failed allocations do not reduce it. anyOf[2]
             * (Value): null.
             */
            "unrefunded_money"?: ((MoneyValue) | (null));
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
