import type { MetadataRequestInput, MetadataMap, MerchantWebhookEnvelope } from './types-38.js';
import type {
    MoneyValueInput,
    OrderCalculatedChargeTaxRequestInput,
    MoneyValue,
    OrderCalculatedChargeTax,
    OrderChargeInputAmount,
    OrderCharge,
    OrderCalculatedLineItemTax
} from './types-39.js';
import type { TaxCalculationRequest, TaxCalculationRequestModelInput } from './types-64.js';
import type { ResponseMeta } from './types-54.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { WebhookOrder, WebhookOrderEdit, Weight } from './types-70.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { DeliverySelectionRecipientRequest, DeliverySelectionRecipientRequestInput } from './types-22.js';
import type { SubscriptionServiceLocationRequest } from './types-63.js';
import type { SubscriptionDeliveryDestinationRequestInput } from './types-61.js';
import type { DeliveryRecipientResource } from './types-21.js';
import type { CreateOrderLineItemRequest, CreateOrderLineItemRequestInput } from './types-11.js';
import type { RefundCharge, RefundDestinations, RefundChargeInput, RefundDestinationsInput } from './types-53.js';
import type { InputValue } from '../runtime.js';
import type { BundleComponent } from './types-1.js';
import type { CatalogPricing, CategoryReference } from './types-5.js';
import type { Dimensions } from './types-23.js';
import type { GiftCardPurchaseSnapshot } from './types-27.js';
import type { Image } from './types-28.js';
import type { LineItemInventorySnapshot } from './types-35.js';
import type {
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemModifier,
    OrderLineSubscriptionOfferSummary,
    OrderLineItemFulfillmentProfile
} from './types-41.js';
import type { PurchasedGiftCard } from './types-52.js';
import type { SelectedProductOption } from './types-59.js';
import type { SubscribedLine } from './types-60.js';
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
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
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
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.inventory_exception_created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.inventory_exception_created". */
    "event_type"?: "order.inventory_exception_created";
});
export type OrderInventoryExceptionResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "order.inventory_exception_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookOrder;
        "previous_attributes"?: Partial<WebhookOrder>;
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
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
     *  object (Required): {@link WebhookOrder}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_attempt`, `payment_collection`,
     * `setup_collection`. previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<WebhookOrder>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "order.inventory_exception_resolved". */
    "event_type"?: "order.inventory_exception_resolved";
});
/** An item purchased in an order. */
export type OrderLineItem = ({
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
     * Price source and applied quantity break frozen for a catalog variant line. Omitted for older
     * lines, custom lines, and bundles. The source of a catalog variant line's selected net unit
     * price.
     */
    "catalog_pricing"?: CatalogPricing;
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
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
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
     * Modifiers selected on the line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
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
/**
 * Fulfillment requirements for one component of a bundle line item, with the component quantity
 * per unit.
 */
export type OrderLineItemFulfillmentComponent = {
    /**
     * ID of the bundle component these requirements apply to. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
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
