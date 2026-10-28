import type { TaxBreakdown } from './types-49.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type {
    Address,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput,
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput
} from './types-0.js';
import type {
    OrderChargeTaxAssignment,
    OrderLineItemTaxAssignment,
    OrderChargeTaxAssignmentInput,
    OrderLineItemTaxAssignmentInput
} from './types-34.js';
import type { InputValue } from '../runtime.js';
import type { CancelOrderPaymentAttemptRequestInput } from './types-3.js';
import type { CloseOrderRequestInput } from './types-5.js';
import type { CreateFulfillmentRequestInput } from './types-7.js';
import type { CreateOrderRequestInput, CreateOrderPaymentIntentRequestInput, CreateOrganizationRequestInput } from './types-8.js';
import type { PaymentIntentWithCollectionResponse, PayOrderRequestInput } from './types-37.js';
import type { MeGetOrderInput, MeListOrderActivitiesInput } from './types-31.js';
import type {
    RemoveDiscountsRequestInput,
    RepriceDiscountsRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    ResponseMeta
} from './types-42.js';
import type { SendOrderReceiptRequestInput } from './types-47.js';
import type { UpdateOrderChargeRequestInput, UpdateOrderRequestInput, UpdateLineItemRequestInput } from './types-51.js';
import type { ExpandedOrganizationSummary } from './types-18.js';
import type { MetadataMap } from './types-32.js';
import type { GrantOrganizationMembershipRequestInput } from './types-21.js';
/**
 * Shape $ (Value): {@link OrderTax}. An order's tax state, including its mode, price mode, status,
 * location, exemption, and tax breakdowns.
 */
export type OrderTax = {
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
     * Shape $ (Value): {@link OrderTaxLocation}. The location Flint uses to calculate tax on an
     * order, with its address, address type, and where the address came from.
     */
    "location"?: OrderTaxLocation;
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
 * Shape $ (Value): {@link OrderTaxCalculationInputAutomatic}. The `automatic` variant of
 * `OrderTaxCalculationInput`.
 */
export type OrderTaxCalculationInputAutomatic = {
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "mode": "automatic" | (string & {});
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/**
 * Shape $ (Value): {@link OrderTaxCalculationInputAutomaticInput}. The `automatic` variant of
 * `OrderTaxCalculationInput`.
 */
export type OrderTaxCalculationInputAutomaticInput = {
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "mode": "automatic";
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Shape $ (Value): {@link OrderTaxCalculationInputExternal}. The `external` variant of
 * `OrderTaxCalculationInput`.
 */
export type OrderTaxCalculationInputExternal = {
    /**
     * Shape $ (Value): Array of {@link OrderTaxComponentRequest}. Shape $[] (Value): {@link
     * OrderTaxComponentRequest}. One externally supplied order tax component, with its
     * jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /** Shape $ (Value): string.  Value enum: "external". */
    "mode": "external" | (string & {});
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/**
 * Shape $ (Value): {@link OrderTaxCalculationInputExternalInput}. The `external` variant of
 * `OrderTaxCalculationInput`.
 */
export type OrderTaxCalculationInputExternalInput = {
    /**
     * Shape $ (Value): Array of {@link OrderTaxComponentRequestInput}. Shape $[] (Value): {@link
     * OrderTaxComponentRequestInput}. One externally supplied order tax component, with its
     * jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /** Shape $ (Value): string.  Value enum: "external". */
    "mode": "external";
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Shape $ (Value): {@link OrderTaxCalculationRequest}. How tax is calculated on an order:
 * automatically, or externally with the tax components you supply.
 */
export type OrderTaxCalculationRequest = ({
    /**
     * Shape $ (Value): Array of {@link OrderTaxComponentRequest}. Shape $[] (Value): {@link
     * OrderTaxComponentRequest}. One externally supplied order tax component, with its
     * jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /** Shape $ (Value): string.  Value enum: "automatic", "external". */
    "mode": "automatic" | "external" | (string & {});
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
})
    & ((Exclude<OrderTaxCalculationInputAutomatic & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link OrderTaxCalculationRequestInput}. How tax is calculated on an order:
 * automatically, or externally with the tax components you supply.
 */
export type OrderTaxCalculationRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link OrderTaxComponentRequestInput}. Shape $[] (Value): {@link
     * OrderTaxComponentRequestInput}. One externally supplied order tax component, with its
     * jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /** Shape $ (Value): string.  Value enum: "automatic", "external". */
    "mode": "automatic" | "external";
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
})
    & ((Exclude<OrderTaxCalculationInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternalInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link OrderTaxComponentRequest}. One externally supplied order tax component,
 * with its jurisdiction and either a flat amount or a percentage.
 */
export type OrderTaxComponentRequest = ({
    /** Shape $ (Value): string. Default: "flat_amount". Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Flat tax in the order currency. The amount must be at
     * least 1 minor unit; otherwise, Flint returns INVALID_FLAT_TAX. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. Shape $.amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape
     * $.currency (Required): string. ISO 4217 currency code for this amount. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): {@link OrderTaxJurisdictionRequest}. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequest;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): string. Default: "retail_delivery_fee". Value enum: "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee" | (string & {});
});
/**
 * Shape $ (Value): {@link OrderTaxComponentRequestInput}. One externally supplied order tax
 * component, with its jurisdiction and either a flat amount or a percentage.
 */
export type OrderTaxComponentRequestInput = ({
    /** Shape $ (Value): string. Default: "flat_amount". Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Flat tax in the order currency. The amount must be
     * at least 1 minor unit; otherwise, Flint returns INVALID_FLAT_TAX. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Shape $.currency (Required): string. ISO 4217 currency code for this amount.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): {@link OrderTaxJurisdictionRequestInput}. The taxing jurisdiction of an
     * externally supplied tax component, identified by code, level, name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequestInput;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): string. Default: "retail_delivery_fee". Value enum: "retail_delivery_fee".
     */
    "tax_type"?: "retail_delivery_fee";
})
    & ({
    "percent"?: never;
});
/**
 * Shape $ (Value): {@link OrderTaxExemption}. Whether an order is tax exempt, and the customer it
 * was assessed from.
 */
export type OrderTaxExemption = {
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. The source of the tax exemption assessment. Omitted when the source
     * has not been established. Value enum: "none", "customer".
     */
    "source"?: "none" | "customer" | (string & {});
    /** Shape $ (Value): boolean. */
    "tax_exempt": boolean;
};
/**
 * Shape $ (Value): {@link OrderTaxJurisdictionRequest}. The taxing jurisdiction of an externally
 * supplied tax component, identified by code, level, name, state, and country.
 */
export type OrderTaxJurisdictionRequest = {
    /**
     * Shape $ (Value): string. minLength: 1. maxLength: 128. pattern:
     * ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$.
     */
    "code": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** Shape $ (Value): string.  Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district" | (string & {});
    /**
     * Shape $ (Value): string. minLength: 1. maxLength: 200. pattern:
     * ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$.
     */
    "name": string;
    /** Shape $ (Value): string. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "state": string;
};
/**
 * Shape $ (Value): {@link OrderTaxJurisdictionRequestInput}. The taxing jurisdiction of an
 * externally supplied tax component, identified by code, level, name, state, and country.
 */
export type OrderTaxJurisdictionRequestInput = {
    /**
     * Shape $ (Value): string. minLength: 1. maxLength: 128. pattern:
     * ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$.
     */
    "code": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country": "US";
    /** Shape $ (Value): string.  Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /**
     * Shape $ (Value): string. minLength: 1. maxLength: 200. pattern:
     * ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$.
     */
    "name": string;
    /** Shape $ (Value): string. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "state": string;
};
/**
 * Shape $ (Value): {@link OrderTaxLocation}. The location Flint uses to calculate tax on an order,
 * with its address, address type, and where the address came from.
 */
export type OrderTaxLocation = {
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
    "device_id"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. */
    "location_id"?: string;
};
/**
 * Shape $ (Value): {@link OrderTaxLocationFullAddressRequest}. A full street address you supply as
 * an order's tax location.
 */
export type OrderTaxLocationFullAddressRequest = {
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "city": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "line1": string;
    /** Shape $ (Value): string. minLength: 1. */
    "line2"?: string;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "postal_code": string;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "state": string;
};
/**
 * Shape $ (Value): {@link OrderTaxLocationFullAddressRequestInput}. A full street address you
 * supply as an order's tax location.
 */
export type OrderTaxLocationFullAddressRequestInput = {
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "city": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country": "US";
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "line1": string;
    /** Shape $ (Value): string. minLength: 1. */
    "line2"?: string;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "postal_code": string;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "state": string;
};
/**
 * Shape $ (Value): {@link OrderTaxLocationInputFullAddress}. The `billing_address` variant of
 * `OrderTaxLocationInput`. The `shipping_address` variant of `OrderTaxLocationInput`. The
 * `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddress = {
    /**
     * Shape $ (Value): {@link OrderTaxLocationFullAddressRequest}. A full street address you
     * supply as an order's tax location.
     */
    "address": OrderTaxLocationFullAddressRequest;
    /**
     * Shape $ (Value): string. Where the tax address comes from. The only accepted value is
     * provided, which is the default. Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "tax_address", "billing_address", "shipping_address".
     */
    "address_type": "tax_address" | "billing_address" | "shipping_address" | (string & {});
};
/**
 * Shape $ (Value): {@link OrderTaxLocationInputFullAddressInput}. The `billing_address` variant of
 * `OrderTaxLocationInput`. The `shipping_address` variant of `OrderTaxLocationInput`. The
 * `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddressInput = {
    /**
     * Shape $ (Value): {@link OrderTaxLocationFullAddressRequestInput}. A full street address you
     * supply as an order's tax location.
     */
    "address": OrderTaxLocationFullAddressRequestInput;
    /**
     * Shape $ (Value): string. Where the tax address comes from. The only accepted value is
     * provided, which is the default. Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /**
     * Shape $ (Value): string. Value enum: "tax_address", "billing_address", "shipping_address".
     */
    "address_type": "tax_address" | "billing_address" | "shipping_address";
};
/**
 * Shape $ (Value): {@link OrderTaxLocationInputPostalCode}. The `postal_code` variant of
 * `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputPostalCode = {
    /**
     * Shape $ (Value): {@link OrderTaxLocationPostalAddressRequest}. A postal code, with an
     * optional country, you supply as an order's tax location.
     */
    "address": OrderTaxLocationPostalAddressRequest;
    /**
     * Shape $ (Value): string. Where the tax address comes from. The only accepted value is
     * provided, which is the default. Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /** Shape $ (Value): string.  Value enum: "postal_code". */
    "address_type": "postal_code" | (string & {});
};
/**
 * Shape $ (Value): {@link OrderTaxLocationInputPostalCodeInput}. The `postal_code` variant of
 * `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputPostalCodeInput = {
    /**
     * Shape $ (Value): {@link OrderTaxLocationPostalAddressRequestInput}. A postal code, with an
     * optional country, you supply as an order's tax location.
     */
    "address": OrderTaxLocationPostalAddressRequestInput;
    /**
     * Shape $ (Value): string. Where the tax address comes from. The only accepted value is
     * provided, which is the default. Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /** Shape $ (Value): string.  Value enum: "postal_code". */
    "address_type": "postal_code";
};
/**
 * Shape $ (Value): {@link OrderTaxLocationPostalAddressRequest}. A postal code, with an optional
 * country, you supply as an order's tax location.
 */
export type OrderTaxLocationPostalAddressRequest = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Default: "US". Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "postal_code": string;
};
/**
 * Shape $ (Value): {@link OrderTaxLocationPostalAddressRequestInput}. A postal code, with an
 * optional country, you supply as an order's tax location.
 */
export type OrderTaxLocationPostalAddressRequestInput = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Default: "US". Example: "US". Value enum: "US".
     */
    "country"?: "US";
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "postal_code": string;
};
/**
 * Shape $ (Value): {@link OrderTaxLocationRequest}. The tax location you supply for an order, as a
 * postal code or a full address, with or without an address type.
 */
export type OrderTaxLocationRequest = ((OrderTaxLocationInputPostalCode) | (OrderTaxLocationInputFullAddress) | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link OrderTaxLocationRequestInput}. The tax location you supply for an order,
 * as a postal code or a full address, with or without an address type.
 */
export type OrderTaxLocationRequestInput = ((OrderTaxLocationInputPostalCodeInput) | (OrderTaxLocationInputFullAddressInput));
/**
 * Shape $ (Value): {@link OrderTaxRequest}. Tax settings you supply when creating an order:
 * whether tax is enabled, how it is calculated, and the tax location.
 */
export type OrderTaxRequest = ({
    /**
     * Shape $ (Value): {@link OrderTaxCalculationRequest}. How tax is calculated on an order:
     * automatically, or externally with the tax components you supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /** Shape $ (Value): boolean. Default: true. */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): {@link OrderTaxLocationRequest}. The tax location you supply for an order,
     * as a postal code or a full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Shape $ (Value): {@link OrderTaxRequestInput}. Tax settings you supply when creating an order:
 * whether tax is enabled, how it is calculated, and the tax location.
 */
export type OrderTaxRequestInput = ({
    /**
     * Shape $ (Value): {@link OrderTaxCalculationRequestInput}. How tax is calculated on an order:
     * automatically, or externally with the tax components you supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /** Shape $ (Value): boolean. Default: true. */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): {@link OrderTaxLocationRequestInput}. The tax location you supply for an
     * order, as a postal code or a full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
/**
 * Shape $ (Value): {@link OrderTaxUpdateRequest}. Changes to an order's tax settings: whether tax
 * is enabled, the calculation, the location, and per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequest = ({
    /**
     * Shape $ (Value): {@link OrderTaxCalculationRequest}. How tax is calculated on an order:
     * automatically, or externally with the tax components you supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /**
     * Shape $ (Value): Array of {@link OrderChargeTaxAssignment}. Replace calculations for the
     * listed components and keep unlisted calculations. Allowed only when the order uses external
     * tax, including a switch in this request. Settled components cannot be changed. Shape $[]
     * (Value): {@link OrderChargeTaxAssignment}. An externally calculated tax you assign to one
     * order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignment>;
    /** Shape $ (Value): boolean. */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemTaxAssignment}. Replace calculations for the
     * listed components and keep unlisted calculations. Allowed only when the order uses external
     * tax, including a switch in this request. Settled components cannot be changed. Shape $[]
     * (Value): {@link OrderLineItemTaxAssignment}. An externally calculated tax you assign to one
     * order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignment>;
    /**
     * Shape $ (Value): {@link OrderTaxLocationRequest}. The tax location you supply for an order,
     * as a postal code or a full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Shape $ (Value): {@link OrderTaxUpdateRequestInput}. Changes to an order's tax settings: whether
 * tax is enabled, the calculation, the location, and per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequestInput = ({
    /**
     * Shape $ (Value): {@link OrderTaxCalculationRequestInput}. How tax is calculated on an order:
     * automatically, or externally with the tax components you supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /**
     * Shape $ (Value): Array of {@link OrderChargeTaxAssignmentInput}. Replace calculations for
     * the listed components and keep unlisted calculations. Allowed only when the order uses
     * external tax, including a switch in this request. Settled components cannot be changed.
     * Shape $[] (Value): {@link OrderChargeTaxAssignmentInput}. An externally calculated tax you
     * assign to one order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignmentInput>;
    /** Shape $ (Value): boolean. */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemTaxAssignmentInput}. Replace calculations for
     * the listed components and keep unlisted calculations. Allowed only when the order uses
     * external tax, including a switch in this request. Settled components cannot be changed.
     * Shape $[] (Value): {@link OrderLineItemTaxAssignmentInput}. An externally calculated tax you
     * assign to one order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignmentInput>;
    /**
     * Shape $ (Value): {@link OrderTaxLocationRequestInput}. The tax location you supply for an
     * order, as a postal code or a full address, with or without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
export type OrdersAddChargeInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AddOrderChargeRequestInput}. The request body for: Add order charge.
     */
    "body": InputValue<AddOrderChargeRequestInput>;
};
export type OrdersAddLineItemsInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link AddLineItemsRequestInput}. The request body for: Add line items. */
    "body": InputValue<AddLineItemsRequestInput>;
};
export type OrdersApplyDiscountInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link ApplyDiscountRequestInput}. The request body for: Apply discount. */
    "body": InputValue<ApplyDiscountRequestInput>;
};
export type OrdersApplyGiftCardInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "Flint-Gift-Card-Challenge"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ApplyOrderGiftCardRequestInput}. The request body for: Apply a gift
     * card to an order.
     */
    "body": InputValue<ApplyOrderGiftCardRequestInput>;
};
export type OrdersCancelPaymentAttemptInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_payment_attempt_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelOrderPaymentAttemptRequestInput}. The request body for: Cancel
     * order payment attempt.
     */
    "body"?: InputValue<CancelOrderPaymentAttemptRequestInput>;
};
export type OrdersCloseSessionInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CloseOrderRequestInput}. The request body for: Close order. */
    "body"?: InputValue<CloseOrderRequestInput>;
};
export type OrdersCreateAccessLinkInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): object. maxProperties: 0. */
    "body"?: InputValue<{}>;
};
export type OrdersCreateFulfillmentInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateFulfillmentRequestInput}. Provide at most one fulfillment
     * details object: pickup_details, local_delivery_details, digital_details, or service_details.
     * Shipment execution details belong to shipments and packages.
     */
    "body": InputValue<CreateFulfillmentRequestInput>;
};
export type OrdersCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateOrderRequestInput}. The request body for: Create order. */
    "body": InputValue<CreateOrderRequestInput>;
};
export type OrdersCreatePaymentIntentInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateOrderPaymentIntentRequestInput}. The request body for: Create
     * order payment intent.
     */
    "body": InputValue<CreateOrderPaymentIntentRequestInput>;
};
export type OrdersCreatePaymentIntentResponse = ({
    "data"?: {
        "payment_collection": unknown;
    };
})
    & (Exclude<PaymentIntentWithCollectionResponse & object, readonly unknown[]>);
export type OrdersDeleteChargeInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_charge_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type OrdersDeleteLineItemInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_line_item_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type OrdersGetCurrentDeliverySelectionInput = MeGetOrderInput;
export type OrdersGetInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "fulfillments.packages",
     * "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". Shape $[]
     * (Value): string. Value enum: "customer", "fulfillments.packages", "fulfillments.shipments",
     * "payment_intents", "subscription", "subscription_plan".
     */
    "expand"?: InputValue<Array<"customer"
        | "fulfillments.packages"
        | "fulfillments.shipments"
        | "payment_intents"
        | "subscription"
        | "subscription_plan">>;
};
export type OrdersGetPaymentAttemptInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_payment_attempt_id": InputValue<string>;
};
export type OrdersListActivitiesInput = MeListOrderActivitiesInput;
export type OrdersListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 100. Shape $[] (Value): string.
     * pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_id"?: InputValue<Array<string>>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * Shape $[] (Value): string. Value enum: "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: InputValue<Array<"paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "closed". Shape $[] (Value):
     * string. Value enum: "open", "closed".
     */
    "status"?: InputValue<Array<"open" | "closed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "unpaid", "partially_paid", "paid".
     * Shape $[] (Value): string. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". Shape $[] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". Shape $[]
     * (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
    /** Shape $ (Value): string. */
    "order_number"?: InputValue<string>;
    /** Shape $ (Value): boolean. */
    "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
    /** Shape $ (Value): boolean. */
    "has_open_fulfillment"?: InputValue<boolean>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription". Shape $[] (Value): string. Value enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     */
    "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_id"?: InputValue<string>;
    /** Shape $ (Value): boolean. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "payment_link_id"?: InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "subscription", "subscription_plan".
     * Shape $[] (Value): string. Value enum: "customer", "subscription", "subscription_plan".
     */
    "expand"?: InputValue<Array<"customer" | "subscription" | "subscription_plan">>;
};
export type OrdersListPaymentAttemptsInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type OrdersPayInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. pattern: ^[a-f0-9]{32}$. */
    "Flint-Buyer-Device"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link PayOrderRequestInput}. The request body for: Pay order. */
    "body": InputValue<PayOrderRequestInput>;
};
export type OrdersRemoveDiscountsInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RemoveDiscountsRequestInput}. The request body for: Remove
     * discounts.
     */
    "body": InputValue<RemoveDiscountsRequestInput>;
};
export type OrdersRemoveGiftCardInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version": InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type OrdersRepriceDiscountsInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RepriceDiscountsRequestInput}. The request body for: Reprice
     * discounts.
     */
    "body"?: InputValue<RepriceDiscountsRequestInput>;
};
export type OrdersResolveInventoryExceptionInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResolveOrderInventoryExceptionRequestInput}. The request body for:
     * Resolve order inventory exception.
     */
    "body"?: InputValue<ResolveOrderInventoryExceptionRequestInput>;
};
export type OrdersSendReceiptInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SendOrderReceiptRequestInput}. The request body for: Send an order
     * receipt.
     */
    "body"?: InputValue<SendOrderReceiptRequestInput>;
};
export type OrdersUpdateChargeInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_charge_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateOrderChargeRequestInput}. The request body for: Update order
     * charge.
     */
    "body": InputValue<UpdateOrderChargeRequestInput>;
};
export type OrdersUpdateInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateOrderRequestInput}. The request body for: Update order.
     * minProperties: 1.
     */
    "body": InputValue<UpdateOrderRequestInput>;
};
export type OrdersUpdateLineItemInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "order_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateLineItemRequestInput}. The request body for: Update line item.
     */
    "body": InputValue<UpdateLineItemRequestInput>;
};
/** Shape $ (Value): {@link Organization}. An organization that manages merchant accounts. */
export type Organization = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "organization_id": string;
    /**
     * Shape $ (Value): {@link ExpandedOrganizationSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedOrganizationSummary}. An organization's summary fields, such as its name,
     * status, and parent, returned when the organization is expanded. Shape $.anyOf[2] (Value):
     * null.
     */
    "parent_organization"?: ((ExpandedOrganizationSummary) | (null));
    /** Shape $ (Value): string. */
    "parent_organization_id"?: string;
    /**
     * Shape $ (Value): string. Current status. Archived: deleted. API keys can no longer read or
     * list the organization. Value enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted organization configuration and membership
     * version. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link OrganizationListResponse}. A page of `Organization` objects. */
export type OrganizationListResponse = {
    /**
     * Shape $ (Value): Array of {@link Organization}. Shape $[] (Value): {@link Organization}. An
     * organization that manages merchant accounts.
     */
    "data": Array<Organization>;
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
 * Shape $ (Value): {@link OrganizationMembership}. A user's membership in an organization, with
 * the role and whether it is active or removed.
 */
export type OrganizationMembership = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "organization_id": string;
    /** Shape $ (Value): string.  Value enum: "owner", "admin", "operator", "viewer". */
    "role": "owner" | "admin" | "operator" | "viewer" | (string & {});
    /** Shape $ (Value): string.  Value enum: "active", "removed". */
    "status": "active" | "removed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "user_id": string;
};
/**
 * Shape $ (Value): {@link OrganizationMembershipListResponse}. A page of `OrganizationMembership`
 * objects.
 */
export type OrganizationMembershipListResponse = {
    /**
     * Shape $ (Value): Array of {@link OrganizationMembership}. Shape $[] (Value): {@link
     * OrganizationMembership}. A user's membership in an organization, with the role and whether
     * it is active or removed.
     */
    "data": Array<OrganizationMembership>;
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
 * Shape $ (Value): {@link OrganizationMembershipResponse}. A response containing
 * `OrganizationMembership` data.
 */
export type OrganizationMembershipResponse = {
    /**
     * Shape $ (Value): {@link OrganizationMembership}. A user's membership in an organization,
     * with the role and whether it is active or removed.
     */
    "data": OrganizationMembership;
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
/** Shape $ (Value): {@link OrganizationResponse}. A response containing `Organization` data. */
export type OrganizationResponse = {
    /** Shape $ (Value): {@link Organization}. An organization that manages merchant accounts. */
    "data": Organization;
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
export type OrganizationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateOrganizationRequestInput}. The request body for: Create
     * organization.
     */
    "body": InputValue<CreateOrganizationRequestInput>;
};
export type OrganizationsGetInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "parent_organization". Shape $[] (Value): string.
     * Value enum: "parent_organization".
     */
    "expand"?: InputValue<Array<"parent_organization">>;
};
export type OrganizationsGrantMembershipInput = {
    /** Shape $ (Value): string. */
    "organization_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link GrantOrganizationMembershipRequestInput}. The request body for:
     * Grant organization membership.
     */
    "body": InputValue<GrantOrganizationMembershipRequestInput>;
};
