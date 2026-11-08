import type { MerchantWebhookEnvelope, MoneyValue, MoneyValueInput } from './types-35.js';
import type { Order, OrderChargeTaxAssignment, OrderChargeTaxAssignmentInput } from './types-36.js';
import type { PartnerWebhookEnvelope, PayOrderRequestInput } from './types-40.js';
import type { ResponseMeta, RepriceDiscountsRequestInput, ResolveOrderInventoryExceptionRequestInput } from './types-48.js';
import type { TaxBreakdown } from './types-57.js';
import type {
    Address,
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput
} from './types-0.js';
import type { OrderLineItemTaxAssignment, OrderLineItemTaxAssignmentInput } from './types-37.js';
import type { InputValue } from '../runtime.js';
import type { CancelOrderPaymentAttemptRequestInput } from './types-3.js';
import type { CloseOrderRequestInput } from './types-5.js';
import type { CreateFulfillmentRequestInput } from './types-8.js';
import type { CreateOrderRequestInput, CreateOrderPaymentIntentRequestInput } from './types-9.js';
import type { PaymentIntentWithCollectionResponse } from './types-41.js';
import type { MeListOrderActivitiesParams } from './types-34.js';
import type { RemoveDiscountsRequestInput } from './types-47.js';
/** The `token` variant of `OrderPaymentIntentSelection`. */
export type OrderPaymentIntentSelectionTokenInput = {
    /** Value enum: "token". */
    "credential_type": "token";
    /** Payment intent to confirm. minLength: 1. */
    "payment_intent_id": string;
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelection = {
    /**  [] (Value): string. minLength: 1. */
    "digital_wallets"?: Array<string>;
};
/**
 * Card options for the payment source selected on an order payment intent, including which digital
 * wallets to offer.
 */
export type OrderPaymentSourceCardSelectionInput = OrderPaymentSourceCardSelection;
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelection = {
    /**
     * Card options for the payment source selected on an order payment intent, including which
     * digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelection;
};
/** The payment source options you choose when creating an order payment intent. */
export type OrderPaymentSourceSelectionInput = {
    /**
     * Card options for the payment source selected on an order payment intent, including which
     * digital wallets to offer.
     */
    "card"?: OrderPaymentSourceCardSelectionInput;
};
export type OrderRefundedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.refunded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.refunded";
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
    "event_type": "order.refunded";
});
/**
 * The `order.refunded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type OrderRefundedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
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
 * The `order.refunded` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderRefundedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.refunded". */
    "event_type"?: "order.refunded";
});
/** A response containing `Order` data. */
export type OrderResponse = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "data": Order;
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
 * A return credit applied to an order payment, with the amount and the return and resolution it
 * came from.
 */
export type OrderReturnCreditSettlement = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "return_id": string;
    "return_resolution_id": string;
};
/**
 * An order's tax state, including its mode, price mode, status, location, exemption, and tax
 * breakdowns.
 */
export type OrderTax = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /**  [] (Value): string. */
    "available_location_inputs"?: Array<string>;
    "enabled": boolean;
    /** Whether an order is tax exempt, and the customer it was assessed from. */
    "exemption"?: OrderTaxExemption;
    /**
     * The location Flint uses to calculate tax on an order, with its address, address type, and
     * where the address came from.
     */
    "location"?: OrderTaxLocation;
    /** Value enum: "automatic", "external". */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /** Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete". */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     *  [] (Value): {@link TaxBreakdown}. The tax calculated for one jurisdiction on an order, line
     * item, or charge, with the taxable amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomatic = {
    /** Value enum: "automatic". */
    "mode": "automatic" | (string & {});
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `automatic` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputAutomaticInput = {
    /** Value enum: "automatic". */
    "mode": "automatic";
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternal = {
    /**
     *  [] (Value): {@link OrderTaxComponentRequest}. One externally supplied order tax component,
     * with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /** Value enum: "external". */
    "mode": "external" | (string & {});
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/** The `external` variant of `OrderTaxCalculationInput`. */
export type OrderTaxCalculationInputExternalInput = {
    /**
     *  [] (Value): {@link OrderTaxComponentRequestInput}. One externally supplied order tax
     * component, with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /** Value enum: "external". */
    "mode": "external";
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequest = ({
    /**
     *  [] (Value): {@link OrderTaxComponentRequest}. One externally supplied order tax component,
     * with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequest>;
    /** Value enum: "automatic", "external". */
    "mode": "automatic" | "external" | (string & {});
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
})
    & ((Exclude<OrderTaxCalculationInputAutomatic & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * How tax is calculated on an order: automatically, or externally with the tax components you
 * supply.
 */
export type OrderTaxCalculationRequestInput = ({
    /**
     *  [] (Value): {@link OrderTaxComponentRequestInput}. One externally supplied order tax
     * component, with its jurisdiction and either a flat amount or a percentage.
     */
    "components"?: Array<OrderTaxComponentRequestInput>;
    /** Value enum: "automatic", "external". */
    "mode": "automatic" | "external";
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
})
    & ((Exclude<OrderTaxCalculationInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<OrderTaxCalculationInputExternalInput & object, readonly unknown[]>));
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequest = ({
    /** Default: "flat_amount". Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise, Flint
     * returns INVALID_FLAT_TAX. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
     * name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequest;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /** Default: "retail_delivery_fee". Value enum: "retail_delivery_fee". */
    "tax_type"?: "retail_delivery_fee" | (string & {});
});
/**
 * One externally supplied order tax component, with its jurisdiction and either a flat amount or a
 * percentage.
 */
export type OrderTaxComponentRequestInput = ({
    /** Default: "flat_amount". Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount";
    /**
     * Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise, Flint
     * returns INVALID_FLAT_TAX. The amount and every computed order amount must not exceed
     * 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this
     * ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower
     * payment option limits can apply. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "flat_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
     * name, state, and country.
     */
    "jurisdiction": OrderTaxJurisdictionRequestInput;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /** Default: "retail_delivery_fee". Value enum: "retail_delivery_fee". */
    "tax_type"?: "retail_delivery_fee";
})
    & ({
    "percent"?: never;
});
/** Whether an order is tax exempt, and the customer it was assessed from. */
export type OrderTaxExemption = {
    "customer_id"?: string;
    /**
     * The source of the tax exemption assessment. Omitted when the source has not been
     * established. Value enum: "none", "customer".
     */
    "source"?: "none" | "customer" | (string & {});
    "tax_exempt": boolean;
};
/**
 * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
 * name, state, and country.
 */
export type OrderTaxJurisdictionRequest = {
    /** minLength: 1. maxLength: 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district" | (string & {});
    /** minLength: 1. maxLength: 200. pattern: ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$. */
    "name": string;
    /** minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "state": string;
};
/**
 * The taxing jurisdiction of an externally supplied tax component, identified by code, level,
 * name, state, and country.
 */
export type OrderTaxJurisdictionRequestInput = {
    /** minLength: 1. maxLength: 128. pattern: ^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US";
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. maxLength: 200. pattern: ^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$. */
    "name": string;
    /** minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "state": string;
};
/**
 * The location Flint uses to calculate tax on an order, with its address, address type, and where
 * the address came from.
 */
export type OrderTaxLocation = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Value enum: "provided", "fulfillment", "customer", "device", "location", "merchant". */
    "address_source": "provided" | "fulfillment" | "customer" | "device" | "location" | "merchant" | (string & {});
    /**
     * Value enum: "postal_code", "tax_address", "billing_address", "shipping_address",
     * "business_address".
     */
    "address_type": "postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {});
    "customer_id"?: string;
    "device_id"?: string;
    "fulfillment_id"?: string;
    "location_id"?: string;
};
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequest = {
    /** minLength: 1. pattern: \S. */
    "city": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** minLength: 1. pattern: \S. */
    "line1": string;
    /** minLength: 1. */
    "line2"?: string;
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
    /** minLength: 1. pattern: \S. */
    "state": string;
};
/** A full street address you supply as an order's tax location. */
export type OrderTaxLocationFullAddressRequestInput = {
    /** minLength: 1. pattern: \S. */
    "city": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country": "US";
    /** minLength: 1. pattern: \S. */
    "line1": string;
    /** minLength: 1. */
    "line2"?: string;
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
    /** minLength: 1. pattern: \S. */
    "state": string;
};
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddress = {
    /** A full street address you supply as an order's tax location. */
    "address": OrderTaxLocationFullAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /** Value enum: "tax_address", "billing_address", "shipping_address". */
    "address_type": "tax_address" | "billing_address" | "shipping_address" | (string & {});
};
/**
 * The `billing_address` variant of `OrderTaxLocationInput`. The `shipping_address` variant of
 * `OrderTaxLocationInput`. The `tax_address` variant of `OrderTaxLocationInput`.
 */
export type OrderTaxLocationInputFullAddressInput = {
    /** A full street address you supply as an order's tax location. */
    "address": OrderTaxLocationFullAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /** Value enum: "tax_address", "billing_address", "shipping_address". */
    "address_type": "tax_address" | "billing_address" | "shipping_address";
};
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCode = {
    /** A postal code, with an optional country, you supply as an order's tax location. */
    "address": OrderTaxLocationPostalAddressRequest;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided" | (string & {});
    /** Value enum: "postal_code". */
    "address_type": "postal_code" | (string & {});
};
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCodeInput = {
    /** A postal code, with an optional country, you supply as an order's tax location. */
    "address": OrderTaxLocationPostalAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /** Value enum: "postal_code". */
    "address_type": "postal_code";
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Default:
     * "US". Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequestInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Default:
     * "US". Example: "US". Value enum: "US".
     */
    "country"?: "US";
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
};
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequest = ((OrderTaxLocationInputPostalCode) | (OrderTaxLocationInputFullAddress) | (Record<string, unknown>));
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequestInput = ((OrderTaxLocationInputPostalCodeInput) | (OrderTaxLocationInputFullAddressInput));
/**
 * Tax settings you supply when creating an order: whether tax is enabled, how it is calculated,
 * and the tax location.
 */
export type OrderTaxRequest = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /** Default: true. */
    "enabled"?: boolean;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Tax settings you supply when creating an order: whether tax is enabled, how it is calculated,
 * and the tax location.
 */
export type OrderTaxRequestInput = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /** Default: true. */
    "enabled"?: boolean;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
/**
 * Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and
 * per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequest = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderChargeTaxAssignment}. An externally calculated
     * tax you assign to one order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignment>;
    "enabled"?: boolean;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderLineItemTaxAssignment}. An externally calculated
     * tax you assign to one order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignment>;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and
 * per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequestInput = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderChargeTaxAssignmentInput}. An externally
     * calculated tax you assign to one order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignmentInput>;
    "enabled"?: boolean;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderLineItemTaxAssignmentInput}. An externally
     * calculated tax you assign to one order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignmentInput>;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
export type OrderUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.updated";
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
    "event_type": "order.updated";
});
/**
 * The `order.updated` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.updated". */
    "event_type"?: "order.updated";
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
 * The `order.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.updated". */
    "event_type"?: "order.updated";
});
export type OrdersApplyDiscountParams = (ApplyDiscountRequestInput);
export type OrdersApplyGiftCardParams = (InputValue<ApplyOrderGiftCardRequestInput>)
    & {
    /**
     * Single-use proof from the checkout's gift card challenge. Needed only after
     * GIFT_CARD_CHALLENGE_REQUIRED. While a challenge is required, every code needs a new proof,
     * for up to an hour after the failures that triggered it. Ignored for API keys.
     */
    "Flint-Gift-Card-Challenge"?: InputValue<string>;
};
export type OrdersCancelPaymentAttemptParams = (InputValue<CancelOrderPaymentAttemptRequestInput>);
export type OrdersCloseParams = (InputValue<CloseOrderRequestInput>);
export type OrdersCreateAccessLinkParams = (InputValue<{}>);
export type OrdersCreateChargeParams = (InputValue<AddOrderChargeRequestInput>);
export type OrdersCreateFulfillmentParams = (CreateFulfillmentRequestInput);
export type OrdersCreateLineItemsParams = (InputValue<AddLineItemsRequestInput>);
export type OrdersCreateParams = (InputValue<CreateOrderRequestInput>);
export type OrdersCreatePaymentIntentParams = (InputValue<CreateOrderPaymentIntentRequestInput>);
export type OrdersCreatePaymentIntentResponse = ({
    "data"?: {
        "payment_collection": unknown;
    };
})
    & (Exclude<PaymentIntentWithCollectionResponse & object, readonly unknown[]>);
export type OrdersDeleteChargeParams = {
    /**
     * Order version from the last order read. The mutation fails if the order changed. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type OrdersDeleteLineItemParams = OrdersDeleteChargeParams;
export type OrdersGetCurrentDeliverySelectionParams = {};
export type OrdersGetParams = {
    /**
     * Supported expansions: customer, fulfillments.packages, fulfillments.shipments,
     * payment_intents, subscription, subscription_plan. Expansion requires the base order read
     * scope plus the read scope for each expanded resource. Limits: at most 10 unique expand paths
     * per request. To-many expansions are capped at 20 related objects per path. Repeat expand,
     * for example expand=customer&expand=fulfillments.packages, or pass one comma-separated value.
     * [] enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents",
     * "subscription", "subscription_plan". Value enum: "customer", "fulfillments.packages",
     * "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "fulfillments.packages",
     * "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". anyOf[1][]
     * (Value): string. Value enum: "customer", "fulfillments.packages", "fulfillments.shipments",
     * "payment_intents", "subscription", "subscription_plan". anyOf[2] (Value): string. Value
     * enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents",
     * "subscription", "subscription_plan".
     */
    "expand"?: InputValue<("customer"
        | "fulfillments.packages"
        | "fulfillments.shipments"
        | "payment_intents"
        | "subscription"
        | "subscription_plan")
        | readonly ("customer"
        | "fulfillments.packages"
        | "fulfillments.shipments"
        | "payment_intents"
        | "subscription"
        | "subscription_plan")[]>;
};
export type OrdersGetPaymentAttemptParams = {};
export type OrdersListActivitiesParams = MeListOrderActivitiesParams;
export type OrdersListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Exact-match filter on order IDs. Repeat the parameter or use comma-separated IDs to match
     * any of up to 100 distinct IDs. Unknown IDs and orders outside your merchant or environment
     * are absent. Other filters still apply, and results keep the list's ordering and pagination.
     * Keep the same ID set on subsequent pages. anyOf[1] (Value): Array of string. minItems: 1.
     * maxItems: 100. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". anyOf[1][] (Value): string.
     * pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): string. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_id"?: InputValue<(string) | readonly (string)[]>;
    /**
     * Why a closed order closed. Repeated keys and comma-separated values match any reason.
     * Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[1][] (Value): string. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[2] (Value): string. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: InputValue<("paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")
        | readonly ("paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")[]>;
    /**
     * Order status: open or closed. Repeated keys and comma-separated values are both accepted.
     * Selecting open and closed includes both statuses. Accepts repeated keys, comma-separated
     * values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "open", "closed". Value enum: "open", "closed". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "open", "closed". anyOf[1][] (Value): string. Value enum:
     * "open", "closed". anyOf[2] (Value): string. Value enum: "open", "closed".
     */
    "status"?: InputValue<("open" | "closed") | readonly ("open" | "closed")[]>;
    /**
     * Filter by settled collection status. Repeat the parameter or pass comma-separated values to
     * match any of several statuses. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "unpaid",
     * "partially_paid", "paid". Value enum: "unpaid", "partially_paid", "paid". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "unpaid", "partially_paid", "paid". anyOf[1][]
     * (Value): string. Value enum: "unpaid", "partially_paid", "paid". anyOf[2] (Value): string.
     * Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status"?: InputValue<("unpaid" | "partially_paid" | "paid") | readonly ("unpaid" | "partially_paid" | "paid")[]>;
    /**
     * Filter by refund progress. Repeated keys and comma-separated values are both accepted to
     * match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "none",
     * "partially_refunded", "refunded". Value enum: "none", "partially_refunded", "refunded".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". anyOf[1][] (Value): string. Value enum: "none", "partially_refunded",
     * "refunded". anyOf[2] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Filter by aggregate order fulfillment status. Repeated keys and comma-separated values are
     * both accepted to match any status. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled",
     * "not_applicable", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * anyOf[1][] (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed". anyOf[2] (Value): string. Value enum:
     * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")
        | readonly ("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")[]>;
    /** Filter by merchant-visible order number. */
    "order_number"?: InputValue<string>;
    /**
     * Filter by whether any required fulfillment quantity is unassigned. True includes orders with
     * a positive sum of line fulfillment_quantities.unassigned_quantity; false includes orders
     * with no unassigned quantity, including orders that need no fulfillment.
     */
    "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
    /**
     * Filter by whether the order has an open fulfillment. A fulfillment remains open until it
     * completes, is canceled, fails, or is marked as a no-show. False includes orders with no
     * fulfillments.
     */
    "has_open_fulfillment"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by order origin. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription". Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     * anyOf[1][] (Value): string. Value enum: "virtual_terminal", "payment_link", "checkout",
     * "api", "subscription". anyOf[2] (Value): string. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription".
     */
    "origin"?: InputValue<("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")
        | readonly ("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")[]>;
    /**
     * Search across order_id, order number, external_reference_id, fulfillment
     * external_reference_id, buyer email, notes, and line item names. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /** Filter by subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "subscription_id"?: InputValue<string>;
    /** Filter by whether the subscriber changed delivery after this order was paid. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /**
     * Filter by the Return that created a replacement order. Example:
     * "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the ReturnResolution that created a replacement order. Example:
     * "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Filter by the payment link whose checkout created the order. Example:
     * "pl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "payment_link_id"?: InputValue<string>;
    /**
     * Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by order_id. Default:
     * "created_at". Value enum: "created_at", "updated_at",
     * "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: customer, subscription, subscription_plan. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for
     * example expand=customer&expand=subscription, or pass one comma-separated value. [] enum:
     * "customer", "subscription", "subscription_plan". Value enum: "customer", "subscription",
     * "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "customer", "subscription",
     * "subscription_plan". anyOf[1][] (Value): string. Value enum: "customer", "subscription",
     * "subscription_plan". anyOf[2] (Value): string. Value enum: "customer", "subscription",
     * "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "subscription" | "subscription_plan")
        | readonly ("customer" | "subscription" | "subscription_plan")[]>;
};
export type OrdersListPaymentAttemptsParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type OrdersPayParams = (PayOrderRequestInput)
    & {
    /**
     * A stable random device identifier, independent of the order or checkout session. Required
     * for checkout-session gift card purchases. Keep it for subsequent purchases from the same
     * device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
};
export type OrdersRemoveDiscountsParams = (InputValue<RemoveDiscountsRequestInput>);
export type OrdersRemoveGiftCardParams = {
    /**
     * Order version from the last order read. The mutation fails if the order changed. Format:
     * int64. minimum: 1.
     */
    "expected_version": InputValue<number>;
};
export type OrdersRepriceDiscountsParams = (InputValue<RepriceDiscountsRequestInput>);
export type OrdersResolveInventoryExceptionParams = (InputValue<ResolveOrderInventoryExceptionRequestInput>);
