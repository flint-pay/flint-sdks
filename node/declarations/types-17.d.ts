import type { GetReturnResponse, GetReturnPolicyResponse, GetReturnReasonResponse } from './types-26.js';
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
    DeliveryScheduleWindowRule,
    DeliveryTransitTimeRule,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWindowRequest
} from './types-22.js';
import type { LocationCoordinate } from './types-35.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { DeliveryOptionProjection, DeliveryPostalCodeCondition, DeliveryPostalCodeConditionRequestInput } from './types-19.js';
import type { TaxComponentRequest, TaxComponentRequestModelInput } from './types-65.js';
import type { DeliveryRadiusCondition, DeliveryRadiusConditionRequestInput } from './types-20.js';
import type { DeliveryLocationSetConfiguration } from './types-18.js';
import type { MetadataMap } from './types-38.js';
/** The request body for: Decline a payment review. */
export type DeclinePaymentReviewRequest = {
    /**
     * Add the payment's card fingerprint, email and IP address to Flint's default block lists, so
     * later payments with any of them are blocked. Values the payment didn't have are skipped.
     * Defaults to false. Default: false.
     */
    "add_to_block_lists"?: boolean;
};
/** The request body for: Decline a payment review. */
export type DeclinePaymentReviewRequestInput = DeclinePaymentReviewRequest;
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
    /** Which address the advisory is about. Value enum: "destination_address", "buyer_location". */
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
    /** How far address verification got. Value enum: "needs_review", "unverifiable". */
    "verification_state": "needs_review" | "unverifiable" | (string & {});
};
/**
 * A partial address for delivery quotes, previews, and buyer locations. Country is required when
 * any member is present.
 */
export type DeliveryAddressRequest = ({
    /** City, town, or locality. minLength: 1. maxLength: 100. */
    "city"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** First line of the street address. minLength: 1. maxLength: 255. */
    "line1"?: string;
    /**
     * Second line of the street address, such as an apartment or suite. minLength: 1. maxLength:
     * 255.
     */
    "line2"?: string;
    /** Postal or ZIP code. minLength: 1. maxLength: 20. */
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
     * Local date-time spans in which no window is offered. [] (Value): {@link
     * DeliveryBlackoutInterval}. A local start and end time during which a delivery schedule
     * offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutInterval>;
    /**
     * Which of the two instants a local time means when a clock change makes it happen twice.
     * Defaults to `earlier`. Default: "earlier". Value enum: "earlier", "later".
     */
    "dst_disambiguation"?: "earlier" | "later" | (string & {});
    /** How many days ahead windows are offered, from 1 to 365. */
    "maximum_scheduling_horizon_days": number;
    /**
     * Notice the merchant needs before a window starts, in seconds. A buyer can choose a window
     * until this long before it starts. Quotes offer only windows that can still be chosen, so a
     * window already under way is not offered. Format: int64.
     */
    "preparation_lead_time_seconds": number;
    /**
     * Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows
     * are no longer offered. Omit it to apply no cutoff.
     */
    "same_day_cutoff_minute"?: number;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone": string;
    /**
     * One to 100 weekly spans in which windows are offered. They cannot overlap. [] (Value):
     * {@link DeliveryWeeklyInterval}. A recurring weekly span, from a start weekday and minute to
     * an end weekday and minute, used in a delivery method's availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyInterval>;
};
/**
 * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and
 * how far ahead a buyer can book.
 */
export type DeliveryAvailabilityRequestInput = {
    /**
     * Local date-time spans in which no window is offered. [] (Value): {@link
     * DeliveryBlackoutIntervalRequestInput}. A local start and end time during which a delivery
     * schedule offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutIntervalRequestInput>;
    /**
     * Which of the two instants a local time means when a clock change makes it happen twice.
     * Defaults to `earlier`. Default: "earlier". Value enum: "earlier", "later".
     */
    "dst_disambiguation"?: "earlier" | "later";
    /** How many days ahead windows are offered, from 1 to 365. */
    "maximum_scheduling_horizon_days": number;
    /**
     * Notice the merchant needs before a window starts, in seconds. A buyer can choose a window
     * until this long before it starts. Quotes offer only windows that can still be chosen, so a
     * window already under way is not offered. Format: int64.
     */
    "preparation_lead_time_seconds": number;
    /**
     * Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows
     * are no longer offered. Omit it to apply no cutoff.
     */
    "same_day_cutoff_minute"?: number;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone": string;
    /**
     * One to 100 weekly spans in which windows are offered. They cannot overlap. [] (Value):
     * {@link DeliveryWeeklyIntervalRequestInput}. A recurring weekly span, from a start weekday
     * and minute to an end weekday and minute, used in a delivery method's availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyIntervalRequestInput>;
};
/** A local start and end time during which a delivery schedule offers no windows. */
export type DeliveryBlackoutInterval = {
    /**
     * Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone.
     * minLength: 1.
     */
    "end_local": string;
    /**
     * Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's
     * timezone. minLength: 1.
     */
    "start_local": string;
};
/** A local start and end time during which a delivery schedule offers no windows. */
export type DeliveryBlackoutIntervalRequestInput = DeliveryBlackoutInterval;
/** A minimum and maximum number of business days, used in transit time estimates. */
export type DeliveryBusinessDayRange = {
    /** Most business days, from `minimum` to 365. */
    "maximum": number;
    /** Fewest business days, from 0. */
    "minimum": number;
};
/** A minimum and maximum number of business days, used in transit time estimates. */
export type DeliveryBusinessDayRangeRequestInput = DeliveryBusinessDayRange;
/** The `address` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputAddress = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequest;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: LocationCoordinate;
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": "address" | (string & {});
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": unknown;
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequest;
}));
/** The `address` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputAddressInput = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequestInput;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: DeliveryCoordinateRequestInput;
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": "address";
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": ("address") & ("address");
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address": DeliveryAddressRequestInput;
})
    & ({
    "coordinate"?: never;
}));
/** The `coordinate` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputCoordinate = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address"?: DeliveryAddressRequest;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate": LocationCoordinate;
    /** Whether the buyer location is an address or a coordinate. Value enum: "coordinate". */
    "type": "coordinate" | (string & {});
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "coordinate". */
    "type": unknown;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate": LocationCoordinate;
}));
/** The `coordinate` variant of `DeliveryBuyerLocationInput`. */
export type DeliveryBuyerLocationInputCoordinateInput = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address"?: DeliveryAddressRequestInput;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate": DeliveryCoordinateRequestInput;
    /** Whether the buyer location is an address or a coordinate. Value enum: "coordinate". */
    "type": "coordinate";
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "coordinate". */
    "type": ("coordinate") & ("coordinate");
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
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
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address"?: DeliveryAddressRequest;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "address",
     * "coordinate".
     */
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
     * The buyer location as an address. Set only when `type` is `address`. A partial address for
     * delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "address"?: DeliveryAddressRequestInput;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: DeliveryCoordinateRequestInput;
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "address",
     * "coordinate".
     */
    "type": "address" | "coordinate";
})
    & ((Exclude<DeliveryBuyerLocationInputAddressInput & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationInputCoordinateInput & object, readonly unknown[]>));
/** The normalized buyer address or coordinate used for this quote. */
export type DeliveryBuyerLocationResource = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "address",
     * "coordinate".
     */
    "type": "address" | "coordinate" | (string & {});
})
    & ((Exclude<DeliveryBuyerLocationResourceAddress & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationResourceCoordinate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The normalized buyer address or coordinate used for this quote. */
export type DeliveryBuyerLocationResourceAddress = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country.
     */
    "address": Address;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate"?: LocationCoordinate;
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": "address" | (string & {});
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "address". */
    "type": unknown;
    /**
     * The buyer location as an address. Set only when `type` is `address`. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country.
     */
    "address": Address;
}));
/** The normalized buyer address or coordinate used for this quote. */
export type DeliveryBuyerLocationResourceCoordinate = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
    "coordinate": LocationCoordinate;
    /** Whether the buyer location is an address or a coordinate. Value enum: "coordinate". */
    "type": "coordinate" | (string & {});
})
    & (({
    /** Whether the buyer location is an address or a coordinate. Value enum: "coordinate". */
    "type": unknown;
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and
     * longitude.
     */
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
     * Charge per unit of distance between the origin and the destination. A distance rate for
     * calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.
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
     * Charge per unit of weight of the items. Price per unit of weight for calculated pricing: a
     * price per currency for each `unit_quantity` of the chosen weight `unit`.
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
     * Charge per unit of distance between the origin and the destination. A distance rate you
     * supply for calculated delivery pricing: a price by currency for each `unit_quantity` of
     * `unit`.
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
     * Charge per unit of weight of the items. Price per unit of weight you supply for calculated
     * pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
     */
    "weight"?: DeliveryWeightUnitPriceRequestInput;
};
/**
 * Delivery pricing you supply that comes from a delivery rate callback
 * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
 */
export type DeliveryCallbackPricingStrategyRequest = {
    /**
     * ID of the delivery rate callback that supplies the price. minLength: 1. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
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
    /**
     * Whether delivery previews call the rate callback. Previews call it only when this setting
     * and the callback's `preview_enabled` setting are both `true`.
     */
    "preview_enabled"?: boolean;
};
/**
 * Delivery pricing you supply that comes from a delivery rate callback
 * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
 */
export type DeliveryCallbackPricingStrategyRequestInput = {
    /**
     * ID of the delivery rate callback that supplies the price. minLength: 1. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
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
    /**
     * Whether delivery previews call the rate callback. Previews call it only when this setting
     * and the callback's `preview_enabled` setting are both `true`.
     */
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
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
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
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * The option the method produced. Set only when `type` is `available`. A delivery option in a
     * quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "available",
     * "unavailable", "input_required", "cannot_calculate", "requires_checkout_context".
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
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
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
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * The option the method produced. Set only when `type` is `available`. A delivery option in a
     * quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details.
     */
    "option": DeliveryOptionProjection;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable"?: boolean;
    /** What happened when Flint evaluated this delivery method. Value enum: "available". */
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
    & (({
    /** What happened when Flint evaluated this delivery method. Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * The option the method produced. Set only when `type` is `available`. A delivery option in a
     * quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details.
     */
    "option": DeliveryOptionProjection;
}));
/** The `cannot_calculate` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceCannotCalculate = ({
    /**
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
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
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * The option the method produced. Set only when `type` is `available`. A delivery option in a
     * quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable": boolean;
    /** What happened when Flint evaluated this delivery method. Value enum: "cannot_calculate". */
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
    & (({
    /** What happened when Flint evaluated this delivery method. Value enum: "cannot_calculate". */
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
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable": boolean;
}));
/** The `input_required` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceInputRequired = ({
    /**
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
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
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * The option the method produced. Set only when `type` is `available`. A delivery option in a
     * quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable"?: boolean;
    /** What happened when Flint evaluated this delivery method. Value enum: "input_required". */
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
    /** What happened when Flint evaluated this delivery method. Value enum: "input_required". */
    "type": "input_required" | (string & {});
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
});
/** The `requires_checkout_context` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceRequiresCheckoutContext = ({
    /**
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
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
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * The option the method produced. Set only when `type` is `available`. A delivery option in a
     * quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * What happened when Flint evaluated this delivery method. Value enum:
     * "requires_checkout_context".
     */
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
    & (({
    /**
     * What happened when Flint evaluated this delivery method. Value enum:
     * "requires_checkout_context".
     */
    "type": "requires_checkout_context" | (string & {});
}));
/** The `unavailable` variant of `DeliveryCandidateOutcomeResource`. */
export type DeliveryCandidateOutcomeResourceUnavailable = ({
    /**
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
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
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * The option the method produced. Set only when `type` is `available`. A delivery option in a
     * quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details.
     */
    "option"?: DeliveryOptionProjection;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable"?: boolean;
    /** What happened when Flint evaluated this delivery method. Value enum: "unavailable". */
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
    & (({
    /** What happened when Flint evaluated this delivery method. Value enum: "unavailable". */
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
}));
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
    /** Latitude in degrees, from -90 to 90. minimum: -90. maximum: 90. */
    "latitude": number;
    /** Longitude in degrees, from -180 to 180. minimum: -180. maximum: 180. */
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
    /**
     * ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one
     * of them. Example: ["US"]. [] (Value): string. minLength: 1.
     */
    "values": Array<string>;
};
/**
 * A delivery eligibility condition that tests a true or false fact about the customer against
 * `value`.
 */
export type DeliveryCustomerBooleanCondition = {
    /**
     * The value the fact must have. `true` matches when the fact holds, `false` when it does not.
     */
    "value": boolean;
};
/**
 * A delivery eligibility condition that tests a true or false fact about the customer against
 * `value`.
 */
export type DeliveryCustomerBooleanConditionInput = DeliveryCustomerBooleanCondition;
/**
 * A delivery eligibility condition that matches customers in one of the listed segments
 * (`values`).
 */
export type DeliveryCustomerSegmentConditionInput = {
    /**
     * Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment
     * is one of them. [] (Value): string. minLength: 1.
     */
    "values": Array<string>;
};
/** A distance as a `value` in meters, kilometers, or miles. */
export type DeliveryDistance = {
    /** Unit of `value`. Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile" | (string & {});
    /** Distance, in `unit`. */
    "value": number;
};
/** A distance as a `value` in meters, kilometers, or miles. */
export type DeliveryDistanceRequestInput = {
    /** Unit of `value`. Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    /** Distance, in `unit`. */
    "value": number;
};
/**
 * A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of
 * `unit`.
 */
export type DeliveryDistanceUnitPrice = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
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
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
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
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpression>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpression}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpression>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpression;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeCondition;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpression>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpression}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "any": Array<DeliveryEligibilityExpression>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not": DeliveryEligibilityExpression;
})
    | ({
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone": DeliveryZoneCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | ({
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
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
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
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
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequest>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequest>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequest;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanCondition;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeCondition;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "all": Array<DeliveryEligibilityExpressionRequest>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequest}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "any": Array<DeliveryEligibilityExpressionRequest>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not": DeliveryEligibilityExpressionRequest;
})
    | ({
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone": DeliveryZoneCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | ({
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
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
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_phone": DeliveryCustomerBooleanCondition;
})
    | ({
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
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
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all": Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any": Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not": DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone": DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time": DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
     */
    "zone"?: DeliveryZoneConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes.
     */
    "all"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryEligibilityExpressionRequestInput}. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "any"?: Array<DeliveryEligibilityExpressionRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when whether the customer has an email address equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when whether the customer has a phone number equals `value`. A delivery eligibility
     * condition that tests a true or false fact about the customer against `value`.
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
     * Matches when the nested expression does not match. A boolean expression containing exactly
     * one operator or typed condition at each node. Expressions support at most 8 levels and 100
     * total nodes.
     */
    "not"?: DeliveryEligibilityExpressionRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
    /**
     * Matches when whether the purchase is a subscription purchase equals `value`. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     */
    "subscription_purchase": DeliveryCustomerBooleanConditionInput;
    /**
     * Matches when the delivery window falls on the listed weekdays and within the listed time of
     * day, in the window's timezone. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`.
     */
    "window_time"?: DeliveryWindowTimeConditionInput;
    /**
     * Matches when the address is inside the delivery zone you name. Eligibility condition that
     * matches when the destination or buyer location falls inside the delivery zone
     * `delivery_zone_id`.
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
     * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. Estimate
     * rule for a scheduled-window delivery method, defined by its `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRule;
    /**
     * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a
     * delivery method's handling time and transit time as ranges of business days.
     */
    "transit_time"?: DeliveryTransitTimeRule;
    /**
     * How Flint estimates timing. Set the property named by this value. Value enum: "none",
     * "transit_time", "schedule_window".
     */
    "type": "none" | "transit_time" | "schedule_window" | (string & {});
};
/**
 * The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit
 * time, or a schedule window.
 */
export type DeliveryEstimateRuleRequestInput = {
    /**
     * Weekly schedule of delivery windows. Set only when `type` is `schedule_window`.
     * Scheduled-window estimate rule you supply for a delivery method, defined by its
     * `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
    /**
     * Handling and transit time. Set only when `type` is `transit_time`. Estimate rule giving a
     * delivery method's handling time and transit time as ranges of business days.
     */
    "transit_time"?: DeliveryTransitTimeRuleRequestInput;
    /**
     * How Flint estimates timing. Set the property named by this value. Value enum: "none",
     * "transit_time", "schedule_window".
     */
    "type": "none" | "transit_time" | "schedule_window";
};
/**
 * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
 * bounded by minimum and maximum fees by currency.
 */
export type DeliveryExternalPricingStrategy = {
    /**
     * ID of the delivery rate callback that supplies the price. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: string;
    /**
     * ID of the rate callback revision the method uses. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
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
    /**
     * Whether delivery previews call the rate callback. Previews call it only when this setting
     * and the callback's `preview_enabled` setting are both `true`.
     */
    "preview_enabled"?: boolean;
};
/** A fixed delivery price, by currency. */
export type DeliveryFixedPricingStrategy = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
};
/** A fixed delivery price by currency, supplied for a delivery method. */
export type DeliveryFixedPricingStrategyRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
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
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivery_due_at"?: string;
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
    /** Values the input must be one of. [] (Value): string. */
    "allowed_values"?: Array<string>;
    /** Earliest time the input can name. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "earliest_at"?: string;
    /** Format the input must follow. */
    "format"?: string;
    /** Latest time the input can name. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "latest_at"?: string;
    /** Most characters the input can have. Format: int32. */
    "maximum_length"?: number;
    /** Fewest characters the input can have. Format: int32. */
    "minimum_length"?: number;
    /**
     * Delivery windows the buyer can choose from. [] (Value): {@link DeliveryWindowRequest}. A
     * time window a buyer can choose for a delivery, with its start, end, price, and the last
     * moment it can be chosen.
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
     * Kind of input the requirement asks for. Value enum: "string", "address_field", "email",
     * "phone", "time_window", "coordinate", "caller_supplied_rate".
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
     * The rules the input must follow. The rules for an input a delivery method needs, chosen by
     * `type`, such as allowed values, length limits, supported countries, or offered time windows.
     */
    "constraint": DeliveryInputConstraint;
    /**
     * Choice groups that need this input. [] (Value): string. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_ids"?: Array<string>;
    /**
     * Unique ID of this requirement. Example:
     * "req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580".
     */
    "delivery_input_requirement_id": string;
    /**
     * Delivery methods that need this input. [] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Delivery options that need this input. Omitted when the requirement applies to the choice
     * group or method as a whole. [] (Value): string. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     */
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
    /** When the input is needed. Value enum: "quote", "selection", "pickup_availability". */
    "purpose": "quote" | "selection" | "pickup_availability" | (string & {});
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequest = {
    /** Key of the inventory demand this assignment serves. minLength: 1. */
    "demand_key": string;
    /**
     * ID of the inventory item assigned. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location the stock is assigned from. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/**
 * Assigns a quantity of an inventory item at a location to a demand when creating a delivery
 * quote.
 */
export type DeliveryInventoryAssignmentRequestInput = DeliveryInventoryAssignmentRequest;
/** The inventory reservation held for a delivery selection: its owner, status, and expiry. */
export type DeliveryInventoryReservationSummary = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at": string;
    /**
     * ID of the inventory reservation holding stock for the selection. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id": string;
    /** Which kind of owner holds the reservation. Value enum: "order". */
    "owner_type": "order" | (string & {});
    /** Whether the reservation is still holding stock. Value enum: "active", "closed". */
    "status": "active" | "closed" | (string & {});
};
/** The locations available to a delivery method. */
export type DeliveryLocationSet = {
    /** Current member Locations. The location IDs in a delivery location set. */
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
