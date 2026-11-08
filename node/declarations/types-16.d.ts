import type { GetReturnResponse, GetReturnPolicyResponse, GetReturnReasonResponse } from './types-25.js';
import type { Address, AddRiskListItemsRequest } from './types-0.js';
import type {
    DeliveryWeeklyInterval,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryWeightUnitPrice,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryStateCondition,
    DeliveryWindowTimeCondition,
    DeliveryZoneCondition,
    DeliveryStateConditionRequestInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionRequestInput,
    DeliveryTransitTimeRule,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWindowRequest
} from './types-21.js';
import type { LocationCoordinate } from './types-34.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { DeliveryOptionProjection, DeliveryPostalCodeCondition, DeliveryPostalCodeConditionRequestInput } from './types-18.js';
import type { TaxComponentRequest, TaxComponentRequestModelInput } from './types-61.js';
import type { DeliveryRadiusCondition, DeliveryRadiusConditionRequestInput, DeliveryScheduleWindowRule } from './types-20.js';
import type { DeliveryLocationSetConfiguration } from './types-17.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
/**
 * A promotion accepted at subscription signup for the subscription's first charged cycle. It does
 * not discount the signup order.
 */
export type DeferredPromotion = {
    /** Name the buyer sees for the promotion, fixed when it was accepted at signup. */
    "customer_facing_name": string;
    /**
     * ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to
     * POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. Example:
     * "dp_01KEZF7C00AZMP1PY1ER7CQ4SA".
     */
    "deferred_promotion_id": string;
    /** Promotion code accepted at signup. Null when the promotion was applied by ID. */
    "promotion_code": string | null;
    /**
     * ID of the promotion accepted for the subscription. Example:
     * "promo_01KEZF7C00E1JAV4M413D9DE1P".
     */
    "promotion_id": string;
};
export type DeleteReturnLineItemResponse = GetReturnResponse;
export type DeleteReturnPolicyResponse = GetReturnPolicyResponse;
export type DeleteReturnReasonResponse = GetReturnReasonResponse;
/**
 * An address verification result for a delivery address or buyer location. `suggested_address` may
 * offer a correction.
 */
export type DeliveryAddressAdvisoryResource = {
    /** Value enum: "destination_address", "buyer_location". */
    "role": "destination_address" | "buyer_location" | (string & {});
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "suggested_address"?: Address;
    /** Value enum: "needs_review", "unverifiable". */
    "verification_state": "needs_review" | "unverifiable" | (string & {});
};
/**
 * A partial address for delivery quotes, previews, and buyer locations. Country is required when
 * any member is present.
 */
export type DeliveryAddressRequest = ({
    /** minLength: 1. maxLength: 100. */
    "city"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** minLength: 1. maxLength: 255. */
    "line1"?: string;
    /** minLength: 1. maxLength: 255. */
    "line2"?: string;
    /** minLength: 1. maxLength: 20. */
    "postal_code"?: string;
    /**
     * State, province, or region. State conditions read it as a subdivision of the address's
     * country: send its code with or without the country prefix, such as NY or US-NY. In the US
     * and Canada, the English name, such as New York, also matches. US addresses also accept the
     * USPS military codes AA, AE, and AP. If the address country is listed by a state condition
     * but state names no subdivision of that country, the condition cannot be decided: the method
     * or rate is left out as cannot_calculate (invalid_buyer_input). minLength: 1. maxLength: 100.
     */
    "state"?: string;
});
/**
 * A partial address for delivery quotes, previews, and buyer locations. Country is required when
 * any member is present.
 */
export type DeliveryAddressRequestInput = DeliveryAddressRequest;
/**
 * The estimated arrival date range for a delivery option, as calendar dates in the option's
 * timezone.
 */
export type DeliveryArrivalEstimate = {
    /**
     * Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date.
     * Example: "2026-08-02".
     */
    "earliest_date": string;
    /**
     * Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date.
     * Example: "2026-08-02".
     */
    "latest_date": string;
    /** Uses an IANA time zone name. */
    "timezone": string;
};
/**
 * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and
 * how far ahead a buyer can book.
 */
export type DeliveryAvailability = {
    /**
     *  [] (Value): {@link DeliveryBlackoutInterval}. A local start and end time during which a
     * delivery schedule offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutInterval>;
    /** Default: "earlier". Value enum: "earlier", "later". */
    "dst_disambiguation"?: "earlier" | "later" | (string & {});
    "maximum_scheduling_horizon_days": number;
    /**
     * Notice the merchant needs before a window starts, in seconds. A buyer can choose a window
     * until this long before it starts. Quotes offer only windows that can still be chosen, so a
     * window already under way is not offered. Format: int64.
     */
    "preparation_lead_time_seconds": number;
    "same_day_cutoff_minute"?: number;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone": string;
    /**
     *  [] (Value): {@link DeliveryWeeklyInterval}. A recurring weekly span, from a start weekday
     * and minute to an end weekday and minute, used in a delivery method's availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyInterval>;
};
/**
 * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and
 * how far ahead a buyer can book.
 */
export type DeliveryAvailabilityRequestInput = {
    /**
     *  [] (Value): {@link DeliveryBlackoutIntervalRequestInput}. A local start and end time during
     * which a delivery schedule offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutIntervalRequestInput>;
    /** Default: "earlier". Value enum: "earlier", "later". */
    "dst_disambiguation"?: "earlier" | "later";
    "maximum_scheduling_horizon_days": number;
    /**
     * Notice the merchant needs before a window starts, in seconds. A buyer can choose a window
     * until this long before it starts. Quotes offer only windows that can still be chosen, so a
     * window already under way is not offered. Format: int64.
     */
    "preparation_lead_time_seconds": number;
    "same_day_cutoff_minute"?: number;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone": string;
    /**
     *  [] (Value): {@link DeliveryWeeklyIntervalRequestInput}. A recurring weekly span, from a
     * start weekday and minute to an end weekday and minute, used in a delivery method's
     * availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyIntervalRequestInput>;
};
/** A local start and end time during which a delivery schedule offers no windows. */
export type DeliveryBlackoutInterval = {
    /** minLength: 1. */
    "end_local": string;
    /** minLength: 1. */
    "start_local": string;
};
/** A local start and end time during which a delivery schedule offers no windows. */
export type DeliveryBlackoutIntervalRequestInput = DeliveryBlackoutInterval;
/** A minimum and maximum number of business days, used in transit time estimates. */
export type DeliveryBusinessDayRange = {
    "maximum": number;
    "minimum": number;
};
/** A minimum and maximum number of business days, used in transit time estimates. */
export type DeliveryBusinessDayRangeRequestInput = DeliveryBusinessDayRange;
/** The `address` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputAddress = ({
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address": DeliveryAddressRequest;
    /** A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Value enum: "address". */
    "type": "address" | (string & {});
})
    & (({
    /** Value enum: "address". */
    "type": unknown;
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address": DeliveryAddressRequest;
}));
/** The `address` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputAddressInput = ({
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address": DeliveryAddressRequestInput;
    /** A latitude and longitude. */
    "coordinate"?: DeliveryCoordinateRequestInput;
    /** Value enum: "address". */
    "type": "address";
})
    & (({
    /** Value enum: "address". */
    "type": ("address") & ("address");
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address": DeliveryAddressRequestInput;
})
    & ({
    "coordinate"?: never;
}));
/** The `coordinate` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputCoordinate = ({
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address"?: DeliveryAddressRequest;
    /** A latitude and longitude. */
    "coordinate": LocationCoordinate;
    /** Value enum: "coordinate". */
    "type": "coordinate" | (string & {});
})
    & (({
    /** Value enum: "coordinate". */
    "type": unknown;
    /** A latitude and longitude. */
    "coordinate": LocationCoordinate;
}));
/** The `coordinate` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputCoordinateInput = ({
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address"?: DeliveryAddressRequestInput;
    /** A latitude and longitude. */
    "coordinate": DeliveryCoordinateRequestInput;
    /** Value enum: "coordinate". */
    "type": "coordinate";
})
    & (({
    /** Value enum: "coordinate". */
    "type": ("coordinate") & ("coordinate");
    /** A latitude and longitude. */
    "coordinate": DeliveryCoordinateRequestInput;
})
    & ({
    "address"?: never;
}));
/**
 * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
 * chosen by `type`.
 */
export type DeliveryBuyerLocationRequest = ({
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address"?: DeliveryAddressRequest;
    /** A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Value enum: "address", "coordinate". */
    "type": "address" | "coordinate" | (string & {});
})
    & ((Exclude<DeliveryBuyerLocationInputAddress & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationInputCoordinate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The buyer's location for pickup or local delivery, supplied as an address or a coordinate,
 * chosen by `type`.
 */
export type DeliveryBuyerLocationRequestInput = ({
    /**
     * A partial address for delivery quotes, previews, and buyer locations. Country is required
     * when any member is present.
     */
    "address"?: DeliveryAddressRequestInput;
    /** A latitude and longitude. */
    "coordinate"?: DeliveryCoordinateRequestInput;
    /** Value enum: "address", "coordinate". */
    "type": "address" | "coordinate";
})
    & ((Exclude<DeliveryBuyerLocationInputAddressInput & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationInputCoordinateInput & object, readonly unknown[]>));
/** The normalized buyer address or coordinate used for this quote. */
export type DeliveryBuyerLocationResource = ({
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Value enum: "address", "coordinate". */
    "type": "address" | "coordinate" | (string & {});
})
    & ((Exclude<DeliveryBuyerLocationResourceAddress & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationResourceCoordinate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The normalized buyer address or coordinate used for this quote. */
export type DeliveryBuyerLocationResourceAddress = ({
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address": Address;
    /** A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Value enum: "address". */
    "type": "address" | (string & {});
})
    & (({
    /** Value enum: "address". */
    "type": unknown;
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address": Address;
}));
/** The normalized buyer address or coordinate used for this quote. */
export type DeliveryBuyerLocationResourceCoordinate = ({
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** A latitude and longitude. */
    "coordinate": LocationCoordinate;
    /** Value enum: "coordinate". */
    "type": "coordinate" | (string & {});
})
    & (({
    /** Value enum: "coordinate". */
    "type": unknown;
    /** A latitude and longitude. */
    "coordinate": LocationCoordinate;
}));
/**
 * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
 * minimum and maximum fees, by currency.
 */
export type DeliveryCalculatedPricingStrategy = {
    /**
     * Base delivery fee by ISO currency code. Each key must equal the Money object's currency. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "base_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * A distance rate for calculated delivery pricing: a price by currency for each
     * `unit_quantity` of `unit`.
     */
    "distance"?: DeliveryDistanceUnitPrice;
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Handling fee per item by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "per_item_handling_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Price per unit of weight for calculated pricing: a price per currency for each
     * `unit_quantity` of the chosen weight `unit`.
     */
    "weight"?: DeliveryWeightUnitPrice;
};
/**
 * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
 * rates, per-item handling, and fee limits, by currency.
 */
export type DeliveryCalculatedPricingStrategyRequestInput = {
    /**
     * Base delivery fee by ISO currency code. Each key must equal the Money object's currency. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "base_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * A distance rate you supply for calculated delivery pricing: a price by currency for each
     * `unit_quantity` of `unit`.
     */
    "distance"?: DeliveryDistanceUnitPriceRequestInput;
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Handling fee per item by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "per_item_handling_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Price per unit of weight you supply for calculated pricing: a price per currency for each
     * `unit_quantity` of the chosen weight `unit`.
     */
    "weight"?: DeliveryWeightUnitPriceRequestInput;
};
/**
 * Delivery pricing you supply that comes from a delivery rate callback
 * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
 */
export type DeliveryCallbackPricingStrategyRequest = {
    /** minLength: 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". */
    "delivery_rate_callback_id": string;
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValue>;
    "preview_enabled"?: boolean;
};
/**
 * Delivery pricing you supply that comes from a delivery rate callback
 * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
 */
export type DeliveryCallbackPricingStrategyRequestInput = {
    /** minLength: 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". */
    "delivery_rate_callback_id": string;
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValueInput>;
    "preview_enabled"?: boolean;
};
/**
 * Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum
 * and maximum fees by currency.
 */
export type DeliveryCallerSuppliedPricingStrategyRequest = {
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "minimum_fee_currency_options": Record<string, MoneyValue>;
};
/**
 * Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum
 * and maximum fees by currency.
 */
export type DeliveryCallerSuppliedPricingStrategyRequestInput = {
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValueInput>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "minimum_fee_currency_options": Record<string, MoneyValueInput>;
};
/**
 * The result of evaluating one delivery method for a choice group, selected by `type`: available
 * with an option, unavailable, input required, cannot calculate, or requires checkout context.
 */
export type DeliveryCandidateOutcomeResource = ({
    /**
     *  [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `callback_transport_failure`: Restore
     * callback DNS, TLS, network connectivity, and response timing, then retry. -
     * `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
     * - `callback_result_invalid`: Fix the callback result fields or values identified by the
     * callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is
     * available, restore the configured callback endpoint, or choose a non-callback pricing
     * strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then
     * retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then
     * retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the
     * quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5
     * minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration,
     * then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. -
     * `invalid_configuration`: Correct the invalid delivery configuration identified by
     * diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the
     * outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    "retryable"?: boolean;
    /**
     * Value enum: "available", "unavailable", "input_required", "cannot_calculate",
     * "requires_checkout_context".
     */
    "type": "available"
        | "unavailable"
        | "input_required"
        | "cannot_calculate"
        | "requires_checkout_context"
        | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected
     * revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ((Exclude<DeliveryCandidateOutcomeResourceAvailable & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceUnavailable & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceInputRequired & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceCannotCalculate & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceRequiresCheckoutContext & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `available` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceAvailable = ({
    /**
     *  [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `callback_transport_failure`: Restore
     * callback DNS, TLS, network connectivity, and response timing, then retry. -
     * `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
     * - `callback_result_invalid`: Fix the callback result fields or values identified by the
     * callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is
     * available, restore the configured callback endpoint, or choose a non-callback pricing
     * strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then
     * retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then
     * retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the
     * quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5
     * minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration,
     * then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. -
     * `invalid_configuration`: Correct the invalid delivery configuration identified by
     * diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the
     * outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "option": DeliveryOptionProjection;
    "retryable"?: boolean;
    /** Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected
     * revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ({
    /** Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "option": DeliveryOptionProjection;
});
/** The `cannot_calculate` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceCannotCalculate = ({
    /**
     *  [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `callback_transport_failure`: Restore
     * callback DNS, TLS, network connectivity, and response timing, then retry. -
     * `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
     * - `callback_result_invalid`: Fix the callback result fields or values identified by the
     * callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is
     * available, restore the configured callback endpoint, or choose a non-callback pricing
     * strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then
     * retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then
     * retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the
     * quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5
     * minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration,
     * then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. -
     * `invalid_configuration`: Correct the invalid delivery configuration identified by
     * diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the
     * outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    "retryable": boolean;
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected
     * revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ({
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `callback_transport_failure`: Restore
     * callback DNS, TLS, network connectivity, and response timing, then retry. -
     * `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
     * - `callback_result_invalid`: Fix the callback result fields or values identified by the
     * callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is
     * available, restore the configured callback endpoint, or choose a non-callback pricing
     * strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then
     * retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then
     * retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the
     * quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5
     * minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration,
     * then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. -
     * `invalid_configuration`: Correct the invalid delivery configuration identified by
     * diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the
     * outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    "retryable": boolean;
});
/** The `input_required` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceInputRequired = ({
    /**
     *  [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `callback_transport_failure`: Restore
     * callback DNS, TLS, network connectivity, and response timing, then retry. -
     * `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
     * - `callback_result_invalid`: Fix the callback result fields or values identified by the
     * callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is
     * available, restore the configured callback endpoint, or choose a non-callback pricing
     * strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then
     * retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then
     * retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the
     * quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5
     * minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration,
     * then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. -
     * `invalid_configuration`: Correct the invalid delivery configuration identified by
     * diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the
     * outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    "retryable"?: boolean;
    /** Value enum: "input_required". */
    "type": "input_required" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected
     * revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ({
    /** Value enum: "input_required". */
    "type": "input_required" | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
});
/** The `requires_checkout_context` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceRequiresCheckoutContext = ({
    /**
     *  [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `callback_transport_failure`: Restore
     * callback DNS, TLS, network connectivity, and response timing, then retry. -
     * `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
     * - `callback_result_invalid`: Fix the callback result fields or values identified by the
     * callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is
     * available, restore the configured callback endpoint, or choose a non-callback pricing
     * strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then
     * retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then
     * retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the
     * quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5
     * minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration,
     * then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. -
     * `invalid_configuration`: Correct the invalid delivery configuration identified by
     * diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the
     * outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    "retryable"?: boolean;
    /** Value enum: "requires_checkout_context". */
    "type": "requires_checkout_context" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected
     * revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ({
    /** Value enum: "requires_checkout_context". */
    "type": "requires_checkout_context" | (string & {});
});
/** The `unavailable` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceUnavailable = ({
    /**
     *  [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `callback_transport_failure`: Restore
     * callback DNS, TLS, network connectivity, and response timing, then retry. -
     * `callback_circuit_open`: Restore the callback and wait for circuit recovery before retrying.
     * - `callback_result_invalid`: Fix the callback result fields or values identified by the
     * callback logs, then retry. - `callback_unavailable`: Retry when callback capacity is
     * available, restore the configured callback endpoint, or choose a non-callback pricing
     * strategy. - `pricing_failure`: Fix the method pricing configuration or matching rate, then
     * retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then
     * retry. - `option_lifetime_too_short`: Lower the method's minimum option lifetime below the
     * quote's remaining lifetime. A quote for a cart with tracked inventory lasts just under 5
     * minutes. - `geography_failure`: Fix the destination, origin, or geographic configuration,
     * then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. -
     * `invalid_configuration`: Correct the invalid delivery configuration identified by
     * diagnostics, then retry. - `invalid_buyer_input`: Correct the buyer input identified by the
     * outcome, then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    "retryable"?: boolean;
    /** Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected
     * revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ({
    /** Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected
     * revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "dependency_revoked", "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
});
/**
 * A percentage tax template for the delivery charges checkout generates, including paid pickup:
 * whether the charge includes the tax, and the tax components. Allowed only on orders that use
 * external tax.
 */
export type DeliveryChargeTaxCalculationRequest = {
    /**
     * The tax copied onto each delivery charge, one percentage component per jurisdiction and tax
     * type. minItems: 1. [] (Value): {@link TaxComponentRequest}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequest>;
    /**
     * Optional. If you send it, it must be `external`, because delivery charge templates apply
     * only to orders that use external tax. Value enum: "external".
     */
    "mode"?: "external" | (string & {});
    /**
     * Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/**
 * A percentage tax template for the delivery charges checkout generates, including paid pickup:
 * whether the charge includes the tax, and the tax components. Allowed only on orders that use
 * external tax.
 */
export type DeliveryChargeTaxCalculationRequestModelInput = {
    /**
     * The tax copied onto each delivery charge, one percentage component per jurisdiction and tax
     * type. minItems: 1. [] (Value): {@link TaxComponentRequestModelInput}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestModelInput>;
    /**
     * Optional. If you send it, it must be `external`, because delivery charge templates apply
     * only to orders that use external tax. Value enum: "external".
     */
    "mode"?: "external";
    /**
     * Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive".
     */
    "price_mode": "additive" | "inclusive";
};
/** A latitude and longitude. */
export type DeliveryCoordinateRequestInput = {
    /** minimum: -90. maximum: 90. */
    "latitude": number;
    /** minimum: -180. maximum: 180. */
    "longitude": number;
};
/** A delivery eligibility condition that matches when the address country is one of `values`. */
export type DeliveryCountryConditionRequestInput = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /** Example: ["US"]. [] (Value): string. minLength: 1. */
    "values": Array<string>;
};
/**
 * A delivery eligibility condition that tests a true or false fact about the customer against
 * `value`.
 */
export type DeliveryCustomerBooleanCondition = {
    "value": boolean;
};
/**
 * A delivery eligibility condition that tests a true or false fact about the customer against
 * `value`.
 */
export type DeliveryCustomerBooleanConditionInput = {
    "value": boolean;
};
/**
 * A delivery eligibility condition that matches customers in one of the listed segments
 * (`values`).
 */
export type DeliveryCustomerSegmentConditionInput = {
    /**  [] (Value): string. minLength: 1. */
    "values": Array<string>;
};
/** A distance as a `value` in meters, kilometers, or miles. */
export type DeliveryDistance = {
    /** Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile" | (string & {});
    "value": number;
};
/** A distance as a `value` in meters, kilometers, or miles. */
export type DeliveryDistanceRequestInput = {
    /** Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    "value": number;
};
/**
 * A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of
 * `unit`.
 */
export type DeliveryDistanceUnitPrice = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** Distance unit used by unit_quantity. Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile" | (string & {});
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * A distance rate you supply for calculated delivery pricing: a price by currency for each
 * `unit_quantity` of `unit`.
 */
export type DeliveryDistanceUnitPriceRequestInput = {
    /**
     *  * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /** Distance unit used by unit_quantity. Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * A boolean expression containing exactly one operator or typed condition at each node.
 * Expressions support at most 8 levels and 100 total nodes.
 */
export type DeliveryEligibilityExpression = ({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpression}. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpression>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpression}. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpression>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanCondition;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: AddRiskListItemsRequest;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpression;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanCondition;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeCondition;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneCondition;
})
    & (({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpression}. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpression>;
})
    | ({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpression}. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes.
     */
    "any": Array<DeliveryEligibilityExpression>;
})
    | ({
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not": DeliveryEligibilityExpression;
})
    | ({
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone": DeliveryZoneCondition;
})
    | ({
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | ({
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeCondition;
})
    | ({
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment": AddRiskListItemsRequest;
})
    | ({
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanCondition;
})
    | (Record<string, unknown>));
/**
 * A boolean expression containing exactly one operator or typed condition at each node.
 * Expressions support at most 8 levels and 100 total nodes.
 */
export type DeliveryEligibilityExpressionRequest = ({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequest}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequest>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequest}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequest>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanCondition;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: AddRiskListItemsRequest;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequest;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanCondition;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeCondition;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneCondition;
})
    & (({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequest}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpressionRequest>;
})
    | ({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequest}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any": Array<DeliveryEligibilityExpressionRequest>;
})
    | ({
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not": DeliveryEligibilityExpressionRequest;
})
    | ({
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone": DeliveryZoneCondition;
})
    | ({
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | ({
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeCondition;
})
    | ({
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment": AddRiskListItemsRequest;
})
    | ({
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanCondition;
})
    | (Record<string, unknown>));
/**
 * A boolean expression containing exactly one operator or typed condition at each node.
 * Expressions support at most 8 levels and 100 total nodes.
 */
export type DeliveryEligibilityExpressionRequestInput = {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any": Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not": DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone": DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius": DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment": DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryEligibilityExpressionRequestInput}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the is_merchant_verified flag you set on the customer against value. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches the free-form segment you assign to the customer against values. A delivery
     * eligibility condition that matches customers in one of the listed segments (`values`).
     */
    "customer_segment"?: DeliveryCustomerSegmentConditionInput;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * A delivery eligibility condition that tests a true or false fact about the customer against
     * `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanConditionInput;
    /**
     * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on
     * the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location falls inside the
     * delivery zone `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
};
/**
 * An eligibility condition that rejected a delivery method, with its condition type, its path in
 * the expression, and the field tested.
 */
export type DeliveryEligibilityMismatch = {
    /**
     * The configured eligibility condition family that did not match. Value enum: "zone",
     * "country", "state", "postal_code", "radius", "window_time", "subscription_purchase",
     * "customer_segment", "customer_merchant_verified", "customer_has_email",
     * "customer_has_phone".
     */
    "condition": "zone"
        | "country"
        | "state"
        | "postal_code"
        | "radius"
        | "window_time"
        | "subscription_purchase"
        | "customer_segment"
        | "customer_merchant_verified"
        | "customer_has_email"
        | "customer_has_phone"
        | (string & {});
    /** The condition's path in the configured eligibility expression, starting at $. */
    "expression_path": string;
    /** The eligibility fact evaluated by the condition. Buyer fact values are not included. */
    "field"?: string;
    /** Whether the condition matched inside a not expression and therefore rejected the method. */
    "negated"?: boolean;
};
/**
 * How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a
 * schedule window.
 */
export type DeliveryEstimateRule = {
    /**
     * Estimate rule for a scheduled-window delivery method, defined by its `availability`
     * schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRule;
    /**
     * Estimate rule giving a delivery method's handling time and transit time as ranges of
     * business days.
     */
    "transit_time"?: DeliveryTransitTimeRule;
    /** Value enum: "none", "transit_time", "schedule_window". */
    "type": "none" | "transit_time" | "schedule_window" | (string & {});
};
/**
 * The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit
 * time, or a schedule window.
 */
export type DeliveryEstimateRuleRequestInput = {
    /**
     * Scheduled-window estimate rule you supply for a delivery method, defined by its
     * `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
    /**
     * Estimate rule giving a delivery method's handling time and transit time as ranges of
     * business days.
     */
    "transit_time"?: DeliveryTransitTimeRuleRequestInput;
    /** Value enum: "none", "transit_time", "schedule_window". */
    "type": "none" | "transit_time" | "schedule_window";
};
/**
 * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
 * bounded by minimum and maximum fees by currency.
 */
export type DeliveryExternalPricingStrategy = {
    /** Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". */
    "delivery_rate_callback_id"?: string;
    /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
    "delivery_rate_callback_revision_id"?: string;
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "minimum_fee_currency_options": Record<string, MoneyValue>;
    "preview_enabled"?: boolean;
};
/** A fixed delivery price, by currency. */
export type DeliveryFixedPricingStrategy = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
};
/** A fixed delivery price by currency, supplied for a delivery method. */
export type DeliveryFixedPricingStrategyRequestInput = {
    /**
     *  * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
};
/**
 * Details of a local delivery fulfillment: courier, timing window, instructions, and tracking.
 * Some fields are omitted for credentials that don't act for the verified customer.
 */
export type DeliveryFulfillmentDetails = {
    /** Carrier responsible for the local delivery. */
    "carrier"?: string;
    /**
     * Time at which the courier collected the order. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "courier_pickup_at"?: string;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number;
    /** Delivery network or merchant fleet provider handling the job. maxLength: 255. */
    "courier_provider_name"?: string;
    /** Buyer-safe support number for the courier or merchant fleet. maxLength: 30. */
    "courier_support_phone"?: string;
    /**
     * When the items were delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * When the delivery was dispatched, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string;
    /**
     * Driver-facing notes for the final handoff. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. maxLength: 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Deadline after which an undelivered job should enter merchant review. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_delivery_id"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "instructions"?: string;
    /**
     * Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified.
     */
    "no_contact"?: boolean;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /**
     * Time at which the order became ready for courier pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /** Delivery service area assigned to this fulfillment. Example: "boston-north". */
    "service_area_id"?: string;
    /** Timezone used to display the local delivery window. Uses an IANA time zone name. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /**
     * End of the promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
/**
 * The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length
 * limits, supported countries, or offered time windows.
 */
export type DeliveryInputConstraint = {
    /**  [] (Value): string. */
    "allowed_values"?: Array<string>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "earliest_at"?: string;
    "format"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "latest_at"?: string;
    /** Format: int32. */
    "maximum_length"?: number;
    /** Format: int32. */
    "minimum_length"?: number;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A time window a buyer can choose for a delivery,
     * with its start, end, price, and the last moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**
     * Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility
     * and rate-table conditions. Alternative methods are unioned within each choice group;
     * intersect across groups and, for automatic tax, order.tax.supported_countries. A listed
     * country may still require state, postal code, or other eligibility input. Excludes CU, IR,
     * KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies
     * them. [] (Value): string.
     */
    "supported_countries"?: Array<string>;
    /**
     * Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate",
     * "caller_supplied_rate".
     */
    "type": "string"
        | "address_field"
        | "email"
        | "phone"
        | "time_window"
        | "coordinate"
        | "caller_supplied_rate"
        | (string & {});
};
/**
 * An input a delivery method needs, such as an address field or time window, with its
 * `field_path`, purpose, and constraint.
 */
export type DeliveryInputRequirement = {
    /**
     * The rules for an input a delivery method needs, chosen by `type`, such as allowed values,
     * length limits, supported countries, or offered time windows.
     */
    "constraint": DeliveryInputConstraint;
    /**  [] (Value): string. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "delivery_choice_group_ids"?: Array<string>;
    /** Example: "req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580". */
    "delivery_input_requirement_id": string;
    /**  [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "delivery_method_ids"?: Array<string>;
    /**  [] (Value): string. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". */
    "delivery_option_ids"?: Array<string>;
    /**
     * Request property to fill in, using the same path as error params. Array templates use [] in
     * place of an index. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.country",
     * "destination_address.state", "destination_address.postal_code", "buyer_location",
     * "buyer_location.address.line1", "buyer_location.address.line2",
     * "buyer_location.address.city", "buyer_location.address.country",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.coordinate", "recipient.name", "recipient.email", "recipient.phone",
     * "choices[].input.delivery_window_id", "method_results".
     */
    "field_path": "destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.country"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "buyer_location"
        | "buyer_location.address.line1"
        | "buyer_location.address.line2"
        | "buyer_location.address.city"
        | "buyer_location.address.country"
        | "buyer_location.address.state"
        | "buyer_location.address.postal_code"
        | "buyer_location.coordinate"
        | "recipient.name"
        | "recipient.email"
        | "recipient.phone"
        | "choices[].input.delivery_window_id"
        | "method_results"
        | (string & {});
    /** Value enum: "quote", "selection", "pickup_availability". */
    "purpose": "quote" | "selection" | "pickup_availability" | (string & {});
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequest = {
    /** minLength: 1. */
    "demand_key": string;
    /** minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /** minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequestInput = DeliveryInventoryAssignmentRequest;
/**
 * The inventory reservation held for a delivery selection: its owner, status, expiry, and the next
 * action required.
 */
export type DeliveryInventoryReservationSummary = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /** Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". */
    "inventory_reservation_id": string;
    /** Value enum: "delivery_selection", "payment_attempt", "order_balance_hold". */
    "owner_type": "delivery_selection" | "payment_attempt" | "order_balance_hold" | (string & {});
    /** Value enum: "none", "retry_payment", "replace_selection", "contact_merchant". */
    "required_next_action"?: "none" | "retry_payment" | "replace_selection" | "contact_merchant" | (string & {});
    /** Value enum: "active", "closed". */
    "status": "active" | "closed" | (string & {});
};
/** The locations available to a delivery method. */
export type DeliveryLocationSet = {
    /**
     * Current member Locations and selection rules. The location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
    /** Time the location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". */
    "current_delivery_location_set_revision_id": string;
    /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
    "delivery_location_set_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing location set name. */
    "name": string;
    /** Current location set lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the location set last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryLocationSetActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_location_set.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryLocationSetConfiguration;
            "created_at": string;
            "current_delivery_location_set_revision_id": string;
            "delivery_location_set_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_location_set.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_location_set.activated";
});
/**
 * The `delivery_location_set.activated` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryLocationSetActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link
     * DeliveryLocationSetConfiguration}. Current member Locations and selection rules. The
     * location IDs in a delivery location set. object.created_at (Required): string. Time the
     * location set was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_location_set_revision_id (Required): string. Immutable revision used
     * for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". object.delivery_location_set_id
     * (Required): string. Stable delivery location set ID. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.name
     * (Required): string. Merchant-facing location set name. object.status (Required): string.
     * Current location set lifecycle status. Value enum: "active", "archived". object.updated_at
     * (Required): string. Time the location set last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version
     * for location set writes. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryLocationSetConfiguration}. Current member
         * Locations and selection rules. The location IDs in a delivery location set. created_at
         * (Required): string. Time the location set was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_delivery_location_set_revision_id (Required): string.
         * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
         * delivery_location_set_id (Required): string. Stable delivery location set ID. Example:
         * "dls_01KEZF7C00C4WWN7RYTRF55C4H". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". metadata (Optional): {@link MetadataMap}. Caller-owned metadata.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. Merchant-facing location set name. status (Required): string.
         * Current location set lifecycle status. Value enum: "active", "archived". updated_at
         * (Required): string. Time the location set last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * location set writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current member Locations and selection rules. The location IDs in a delivery
             * location set.
             */
            "configuration": DeliveryLocationSetConfiguration;
            /**
             * Time the location set was created. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
             */
            "current_delivery_location_set_revision_id": string;
            /** Stable delivery location set ID. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". */
            "delivery_location_set_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing location set name. */
            "name": string;
            /** Current location set lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /**
             * Time the location set last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryLocationSet>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_location_set.activated". */
    "event_type"?: "delivery_location_set.activated";
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
