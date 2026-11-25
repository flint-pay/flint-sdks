import type { GetReturnResponse, GetReturnPolicyResponse, GetReturnReasonResponse } from './types-28.js';
import type { Address, AddressPreviousAttributes } from './types-0.js';
import type {
    DeliveryWeeklyInterval,
    DeliveryWeeklyIntervalPreviousAttributes,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryWeightUnitPrice,
    DeliveryWeightUnitPricePreviousAttributes,
    DeliveryWeightUnitPriceRequestInput
} from './types-24.js';
import type { LocationCoordinate } from './types-40.js';
import type {
    DeliveryDistanceUnitPrice,
    DeliveryDistanceUnitPricePreviousAttributes,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryInputRequirement,
    DeliveryInputRequirementPreviousAttributes
} from './types-19.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type { DeliveryOptionProjection, DeliveryOptionProjectionPreviousAttributes } from './types-20.js';
import type { TaxComponentRequest } from './types-74.js';
import type { TaxComponentRequestModelInput, TaxComponentRequestPreviousAttributes } from './types-75.js';
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
export type DeferredPromotionPreviousAttributes = {
    /**
     * Name the buyer sees for the promotion, fixed when it was accepted at signup. anyOf[1]
     * (Value): string. Name the buyer sees for the promotion, fixed when it was accepted at
     * signup. anyOf[2] (Value): null.
     */
    "customer_facing_name"?: ((string) | (null));
    /**
     * ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to
     * POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. anyOf[1]
     * (Value): string. ID of this order's deferred promotion. Starts with dp_. Send it in
     * deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the
     * promotion before payment. Example: "dp_01KEZF7C00AZMP1PY1ER7CQ4SA". anyOf[2] (Value): null.
     */
    "deferred_promotion_id"?: ((string) | (null));
    /**
     * Promotion code accepted at signup. Null when the promotion was applied by ID. anyOf[1]
     * (Value): string. Promotion code accepted at signup. Null when the promotion was applied by
     * ID. anyOf[2] (Value): null.
     */
    "promotion_code"?: ((string) | (null));
    /**
     * ID of the promotion accepted for the subscription. anyOf[1] (Value): string. ID of the
     * promotion accepted for the subscription. Example: "promo_01KEZF7C00E1JAV4M413D9DE1P".
     * anyOf[2] (Value): null.
     */
    "promotion_id"?: ((string) | (null));
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
export type DeliveryAddressAdvisoryResourcePreviousAttributes = {
    /**
     * Which address the advisory is about. Value enum: "destination_address", "buyer_location".
     * anyOf[1] (Value): string. Which address the advisory is about. Value enum:
     * "destination_address", "buyer_location". anyOf[2] (Value): null.
     */
    "role"?: (("destination_address" | "buyer_location" | (string & {})) | (null));
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. anyOf[1] (Value): {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "suggested_address"?: ((AddressPreviousAttributes) | (null));
    /**
     * How far address verification got. Value enum: "needs_review", "unverifiable". anyOf[1]
     * (Value): string. How far address verification got. Value enum: "needs_review",
     * "unverifiable". anyOf[2] (Value): null.
     */
    "verification_state"?: (("needs_review" | "unverifiable" | (string & {})) | (null));
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
export type DeliveryArrivalEstimatePreviousAttributes = {
    /**
     * Calendar date in the option timezone. Do not parse it as a UTC timestamp. anyOf[1] (Value):
     * string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format:
     * date. Example: "2026-08-02". anyOf[2] (Value): null.
     */
    "earliest_date"?: ((string) | (null));
    /**
     * Calendar date in the option timezone. Do not parse it as a UTC timestamp. anyOf[1] (Value):
     * string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format:
     * date. Example: "2026-08-02". anyOf[2] (Value): null.
     */
    "latest_date"?: ((string) | (null));
    /**
     * Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. anyOf[2]
     * (Value): null.
     */
    "timezone"?: ((string) | (null));
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
export type DeliveryAvailabilityPreviousAttributes = {
    /**
     * Local date-time spans in which no window is offered. anyOf[1] (Value): Array of {@link
     * DeliveryBlackoutIntervalPreviousAttributes}. Local date-time spans in which no window is
     * offered. anyOf[1][] (Value): {@link DeliveryBlackoutIntervalPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "blackout_intervals"?: ((Array<DeliveryBlackoutIntervalPreviousAttributes>) | (null));
    /**
     * Which of the two instants a local time means when a clock change makes it happen twice.
     * Defaults to `earlier`. Value enum: "earlier", "later". anyOf[1] (Value): string. Which of
     * the two instants a local time means when a clock change makes it happen twice. Defaults to
     * `earlier`. Default: "earlier". Value enum: "earlier", "later". anyOf[2] (Value): null.
     */
    "dst_disambiguation"?: (("earlier" | "later" | (string & {})) | (null));
    /**
     * How many days ahead windows are offered, from 1 to 365. anyOf[1] (Value): integer. How many
     * days ahead windows are offered, from 1 to 365. anyOf[2] (Value): null.
     */
    "maximum_scheduling_horizon_days"?: ((number) | (null));
    /**
     * Notice the merchant needs before a window starts, in seconds. A buyer can choose a window
     * until this long before it starts. Quotes offer only windows that can still be chosen, so a
     * window already under way is not offered. anyOf[1] (Value): integer. Notice the merchant
     * needs before a window starts, in seconds. A buyer can choose a window until this long before
     * it starts. Quotes offer only windows that can still be chosen, so a window already under way
     * is not offered. Format: int64. anyOf[2] (Value): null.
     */
    "preparation_lead_time_seconds"?: ((number) | (null));
    /**
     * Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows
     * are no longer offered. Omit it to apply no cutoff. anyOf[1] (Value): integer. Minute of the
     * day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer
     * offered. Omit it to apply no cutoff. anyOf[2] (Value): null.
     */
    "same_day_cutoff_minute"?: ((number) | (null));
    /**
     * Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name.
     * minLength: 1. anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * One to 100 weekly spans in which windows are offered. They cannot overlap. anyOf[1] (Value):
     * Array of {@link DeliveryWeeklyIntervalPreviousAttributes}. One to 100 weekly spans in which
     * windows are offered. They cannot overlap. anyOf[1][] (Value): {@link
     * DeliveryWeeklyIntervalPreviousAttributes}. anyOf[2] (Value): null.
     */
    "weekly_intervals"?: ((Array<DeliveryWeeklyIntervalPreviousAttributes>) | (null));
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
export type DeliveryBlackoutIntervalPreviousAttributes = {
    /**
     * Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone.
     * anyOf[1] (Value): string. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in
     * the schedule's timezone. minLength: 1. anyOf[2] (Value): null.
     */
    "end_local"?: ((string) | (null));
    /**
     * Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's
     * timezone. anyOf[1] (Value): string. Local date and time the blackout starts, as
     * `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: 1. anyOf[2] (Value): null.
     */
    "start_local"?: ((string) | (null));
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
export type DeliveryBusinessDayRangePreviousAttributes = {
    /**
     * Most business days, from `minimum` to 365. anyOf[1] (Value): integer. Most business days,
     * from `minimum` to 365. anyOf[2] (Value): null.
     */
    "maximum"?: ((number) | (null));
    /**
     * Fewest business days, from 0. anyOf[1] (Value): integer. Fewest business days, from 0.
     * anyOf[2] (Value): null.
     */
    "minimum"?: ((number) | (null));
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
export type DeliveryBuyerLocationResourceAddressPreviousAttributes = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. anyOf[1] (Value):
     * {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null));
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. anyOf[1] (Value):
     * {@link DeliveryCoordinateRequestPreviousAttributes}. anyOf[2] (Value): null.
     */
    "coordinate"?: ((DeliveryCoordinateRequestPreviousAttributes) | (null));
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "address". anyOf[1]
     * (Value): string. Whether the buyer location is an address or a coordinate. Value enum:
     * "address". anyOf[2] (Value): null.
     */
    "type"?: (("address" | (string & {})) | (null));
})
    & ({
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "address". anyOf[1]
     * (Value): any. Whether the buyer location is an address or a coordinate. Value enum:
     * "address". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
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
export type DeliveryBuyerLocationResourceCoordinatePreviousAttributes = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. anyOf[1] (Value):
     * {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null));
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. anyOf[1] (Value):
     * {@link DeliveryCoordinateRequestPreviousAttributes}. anyOf[2] (Value): null.
     */
    "coordinate"?: ((DeliveryCoordinateRequestPreviousAttributes) | (null));
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "coordinate". anyOf[1]
     * (Value): string. Whether the buyer location is an address or a coordinate. Value enum:
     * "coordinate". anyOf[2] (Value): null.
     */
    "type"?: (("coordinate" | (string & {})) | (null));
})
    & ({
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "coordinate". anyOf[1]
     * (Value): any. Whether the buyer location is an address or a coordinate. Value enum:
     * "coordinate". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
export type DeliveryBuyerLocationResourcePreviousAttributes = ({
    /**
     * The buyer location as an address. Set only when `type` is `address`. anyOf[1] (Value):
     * {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null));
    /**
     * The buyer location as a coordinate. Set only when `type` is `coordinate`. anyOf[1] (Value):
     * {@link DeliveryCoordinateRequestPreviousAttributes}. anyOf[2] (Value): null.
     */
    "coordinate"?: ((DeliveryCoordinateRequestPreviousAttributes) | (null));
    /**
     * Whether the buyer location is an address or a coordinate. Value enum: "address",
     * "coordinate". anyOf[1] (Value): string. Whether the buyer location is an address or a
     * coordinate. Value enum: "address", "coordinate". anyOf[2] (Value): null.
     */
    "type"?: (("address" | "coordinate" | (string & {})) | (null));
})
    & (((Exclude<DeliveryBuyerLocationResourceAddressPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationResourceCoordinatePreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
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
export type DeliveryCalculatedPricingStrategyPreviousAttributes = {
    /**
     * Base delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "base_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Charge per unit of distance between the origin and the destination. anyOf[1] (Value): {@link
     * DeliveryDistanceUnitPricePreviousAttributes}. anyOf[2] (Value): null.
     */
    "distance"?: ((DeliveryDistanceUnitPricePreviousAttributes) | (null));
    /**
     * Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "maximum_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "minimum_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Handling fee per item by ISO currency code. Each key must equal the Money object's currency.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "per_item_handling_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Charge per unit of weight of the items. anyOf[1] (Value): {@link
     * DeliveryWeightUnitPricePreviousAttributes}. anyOf[2] (Value): null.
     */
    "weight"?: ((DeliveryWeightUnitPricePreviousAttributes) | (null));
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
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "automatic_tax_origin_unsupported"
        | "dependency_revoked"
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
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "automatic_tax_origin_unsupported"
        | "dependency_revoked"
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
export type DeliveryCandidateOutcomeResourceAvailablePreviousAttributes = ({
    /**
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1] (Value): Array of {@link DeliveryAddressAdvisoryResourcePreviousAttributes}.
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1][] (Value): {@link DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "address_advisories"?: ((Array<DeliveryAddressAdvisoryResourcePreviousAttributes>) | (null));
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "expected_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
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
     * "address_could_not_be_verified". anyOf[1] (Value): string. Why Flint could not calculate the
     * method and the action that can make calculation succeed. - `dependency_failure`: Retry after
     * the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers.
     * - `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified". anyOf[2] (Value): null.
     */
    "failure_category"?: (("dependency_failure"
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
        | (string & {}))
        | (null));
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * anyOf[1] (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs the
     * method needs before Flint can price it. Set only when `type` is `input_required`. anyOf[1][]
     * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
    /**
     * The option the method produced. Set only when `type` is `available`. anyOf[1] (Value):
     * {@link DeliveryOptionProjectionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "option"?: ((DeliveryOptionProjectionPreviousAttributes) | (null));
    /**
     * Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. anyOf[1]
     * (Value): boolean. Whether trying again later can succeed. Set only when `type` is
     * `cannot_calculate`. anyOf[2] (Value): null.
     */
    "retryable"?: ((boolean) | (null));
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "available". anyOf[1]
     * (Value): string. What happened when Flint evaluated this delivery method. Value enum:
     * "available". anyOf[2] (Value): null.
     */
    "type"?: (("available" | (string & {})) | (null));
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[1] (Value): string. Why the method is unavailable and the
     * action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax
     * requires a US fulfillment origin. Choose a method that uses a US location, or use external
     * tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a
     * corrected revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[2] (Value): null.
     */
    "unavailable_reason"?: (("automatic_tax_origin_unsupported"
        | "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {}))
        | (null));
})
    & ({
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "available". anyOf[1]
     * (Value): string. What happened when Flint evaluated this delivery method. Value enum:
     * "available". anyOf[2] (Value): null.
     */
    "type"?: (("available" | (string & {})) | (null));
});
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
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "automatic_tax_origin_unsupported"
        | "dependency_revoked"
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
export type DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributes = ({
    /**
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1] (Value): Array of {@link DeliveryAddressAdvisoryResourcePreviousAttributes}.
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1][] (Value): {@link DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "address_advisories"?: ((Array<DeliveryAddressAdvisoryResourcePreviousAttributes>) | (null));
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "expected_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
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
     * "address_could_not_be_verified". anyOf[1] (Value): string. Why Flint could not calculate the
     * method and the action that can make calculation succeed. - `dependency_failure`: Retry after
     * the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers.
     * - `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified". anyOf[2] (Value): null.
     */
    "failure_category"?: (("dependency_failure"
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
        | (string & {}))
        | (null));
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * anyOf[1] (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs the
     * method needs before Flint can price it. Set only when `type` is `input_required`. anyOf[1][]
     * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
    /**
     * The option the method produced. Set only when `type` is `available`. anyOf[1] (Value):
     * {@link DeliveryOptionProjectionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "option"?: ((DeliveryOptionProjectionPreviousAttributes) | (null));
    /**
     * Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. anyOf[1]
     * (Value): boolean. Whether trying again later can succeed. Set only when `type` is
     * `cannot_calculate`. anyOf[2] (Value): null.
     */
    "retryable"?: ((boolean) | (null));
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "cannot_calculate".
     * anyOf[1] (Value): string. What happened when Flint evaluated this delivery method. Value
     * enum: "cannot_calculate". anyOf[2] (Value): null.
     */
    "type"?: (("cannot_calculate" | (string & {})) | (null));
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[1] (Value): string. Why the method is unavailable and the
     * action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax
     * requires a US fulfillment origin. Choose a method that uses a US location, or use external
     * tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a
     * corrected revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[2] (Value): null.
     */
    "unavailable_reason"?: (("automatic_tax_origin_unsupported"
        | "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {}))
        | (null));
})
    & ({
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "cannot_calculate".
     * anyOf[1] (Value): string. What happened when Flint evaluated this delivery method. Value
     * enum: "cannot_calculate". anyOf[2] (Value): null.
     */
    "type"?: (("cannot_calculate" | (string & {})) | (null));
});
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
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "automatic_tax_origin_unsupported"
        | "dependency_revoked"
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
export type DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributes = ({
    /**
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1] (Value): Array of {@link DeliveryAddressAdvisoryResourcePreviousAttributes}.
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1][] (Value): {@link DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "address_advisories"?: ((Array<DeliveryAddressAdvisoryResourcePreviousAttributes>) | (null));
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "expected_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
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
     * "address_could_not_be_verified". anyOf[1] (Value): string. Why Flint could not calculate the
     * method and the action that can make calculation succeed. - `dependency_failure`: Retry after
     * the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers.
     * - `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified". anyOf[2] (Value): null.
     */
    "failure_category"?: (("dependency_failure"
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
        | (string & {}))
        | (null));
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * anyOf[1] (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs the
     * method needs before Flint can price it. Set only when `type` is `input_required`. anyOf[1][]
     * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
    /**
     * The option the method produced. Set only when `type` is `available`. anyOf[1] (Value):
     * {@link DeliveryOptionProjectionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "option"?: ((DeliveryOptionProjectionPreviousAttributes) | (null));
    /**
     * Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. anyOf[1]
     * (Value): boolean. Whether trying again later can succeed. Set only when `type` is
     * `cannot_calculate`. anyOf[2] (Value): null.
     */
    "retryable"?: ((boolean) | (null));
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "input_required".
     * anyOf[1] (Value): string. What happened when Flint evaluated this delivery method. Value
     * enum: "input_required". anyOf[2] (Value): null.
     */
    "type"?: (("input_required" | (string & {})) | (null));
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[1] (Value): string. Why the method is unavailable and the
     * action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax
     * requires a US fulfillment origin. Choose a method that uses a US location, or use external
     * tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a
     * corrected revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[2] (Value): null.
     */
    "unavailable_reason"?: (("automatic_tax_origin_unsupported"
        | "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {}))
        | (null));
})
    & ({
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "input_required".
     * anyOf[1] (Value): string. What happened when Flint evaluated this delivery method. Value
     * enum: "input_required". anyOf[2] (Value): null.
     */
    "type"?: (("input_required" | (string & {})) | (null));
});
export type DeliveryCandidateOutcomeResourcePreviousAttributes = ({
    /**
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1] (Value): Array of {@link DeliveryAddressAdvisoryResourcePreviousAttributes}.
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1][] (Value): {@link DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "address_advisories"?: ((Array<DeliveryAddressAdvisoryResourcePreviousAttributes>) | (null));
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "expected_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
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
     * "address_could_not_be_verified". anyOf[1] (Value): string. Why Flint could not calculate the
     * method and the action that can make calculation succeed. - `dependency_failure`: Retry after
     * the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers.
     * - `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified". anyOf[2] (Value): null.
     */
    "failure_category"?: (("dependency_failure"
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
        | (string & {}))
        | (null));
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * anyOf[1] (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs the
     * method needs before Flint can price it. Set only when `type` is `input_required`. anyOf[1][]
     * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
    /**
     * The option the method produced. Set only when `type` is `available`. anyOf[1] (Value):
     * {@link DeliveryOptionProjectionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "option"?: ((DeliveryOptionProjectionPreviousAttributes) | (null));
    /**
     * Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. anyOf[1]
     * (Value): boolean. Whether trying again later can succeed. Set only when `type` is
     * `cannot_calculate`. anyOf[2] (Value): null.
     */
    "retryable"?: ((boolean) | (null));
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "available",
     * "unavailable", "input_required", "cannot_calculate", "requires_checkout_context". anyOf[1]
     * (Value): string. What happened when Flint evaluated this delivery method. Value enum:
     * "available", "unavailable", "input_required", "cannot_calculate",
     * "requires_checkout_context". anyOf[2] (Value): null.
     */
    "type"?: (("available"
        | "unavailable"
        | "input_required"
        | "cannot_calculate"
        | "requires_checkout_context"
        | (string & {}))
        | (null));
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[1] (Value): string. Why the method is unavailable and the
     * action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax
     * requires a US fulfillment origin. Choose a method that uses a US location, or use external
     * tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a
     * corrected revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[2] (Value): null.
     */
    "unavailable_reason"?: (("automatic_tax_origin_unsupported"
        | "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {}))
        | (null));
})
    & (((Exclude<DeliveryCandidateOutcomeResourceAvailablePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceUnavailablePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceInputRequiredPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceCannotCalculatePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
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
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "automatic_tax_origin_unsupported"
        | "dependency_revoked"
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
export type DeliveryCandidateOutcomeResourceRequiresCheckoutContextPreviousAttributes = ({
    /**
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1] (Value): Array of {@link DeliveryAddressAdvisoryResourcePreviousAttributes}.
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1][] (Value): {@link DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "address_advisories"?: ((Array<DeliveryAddressAdvisoryResourcePreviousAttributes>) | (null));
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "expected_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
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
     * "address_could_not_be_verified". anyOf[1] (Value): string. Why Flint could not calculate the
     * method and the action that can make calculation succeed. - `dependency_failure`: Retry after
     * the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers.
     * - `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified". anyOf[2] (Value): null.
     */
    "failure_category"?: (("dependency_failure"
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
        | (string & {}))
        | (null));
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * anyOf[1] (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs the
     * method needs before Flint can price it. Set only when `type` is `input_required`. anyOf[1][]
     * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
    /**
     * The option the method produced. Set only when `type` is `available`. anyOf[1] (Value):
     * {@link DeliveryOptionProjectionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "option"?: ((DeliveryOptionProjectionPreviousAttributes) | (null));
    /**
     * Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. anyOf[1]
     * (Value): boolean. Whether trying again later can succeed. Set only when `type` is
     * `cannot_calculate`. anyOf[2] (Value): null.
     */
    "retryable"?: ((boolean) | (null));
    /**
     * What happened when Flint evaluated this delivery method. Value enum:
     * "requires_checkout_context". anyOf[1] (Value): string. What happened when Flint evaluated
     * this delivery method. Value enum: "requires_checkout_context". anyOf[2] (Value): null.
     */
    "type"?: (("requires_checkout_context" | (string & {})) | (null));
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[1] (Value): string. Why the method is unavailable and the
     * action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax
     * requires a US fulfillment origin. Choose a method that uses a US location, or use external
     * tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a
     * corrected revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[2] (Value): null.
     */
    "unavailable_reason"?: (("automatic_tax_origin_unsupported"
        | "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {}))
        | (null));
})
    & ({
    /**
     * What happened when Flint evaluated this delivery method. Value enum:
     * "requires_checkout_context". anyOf[1] (Value): string. What happened when Flint evaluated
     * this delivery method. Value enum: "requires_checkout_context". anyOf[2] (Value): null.
     */
    "type"?: (("requires_checkout_context" | (string & {})) | (null));
});
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
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason": "automatic_tax_origin_unsupported"
        | "dependency_revoked"
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
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason": "automatic_tax_origin_unsupported"
        | "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
}));
export type DeliveryCandidateOutcomeResourceUnavailablePreviousAttributes = ({
    /**
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1] (Value): Array of {@link DeliveryAddressAdvisoryResourcePreviousAttributes}.
     * Address verification results that affected this method. Omitted when there are none.
     * anyOf[1][] (Value): {@link DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "address_advisories"?: ((Array<DeliveryAddressAdvisoryResourcePreviousAttributes>) | (null));
    /**
     * The delivery charge this method will quote once its input_requirements are met, when the
     * charge does not depend on them. Only present on input_required outcomes with fixed pricing.
     * Pickup candidates report it only when every pickup method that could serve the choice group
     * has fixed pricing and the same amount. Omitted when unknown; never included in order
     * amounts. Pickup-location previews do not carry this field. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "expected_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
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
     * "address_could_not_be_verified". anyOf[1] (Value): string. Why Flint could not calculate the
     * method and the action that can make calculation succeed. - `dependency_failure`: Retry after
     * the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers.
     * - `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified". anyOf[2] (Value): null.
     */
    "failure_category"?: (("dependency_failure"
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
        | (string & {}))
        | (null));
    /**
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * anyOf[1] (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs the
     * method needs before Flint can price it. Set only when `type` is `input_required`. anyOf[1][]
     * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
    /**
     * The option the method produced. Set only when `type` is `available`. anyOf[1] (Value):
     * {@link DeliveryOptionProjectionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "option"?: ((DeliveryOptionProjectionPreviousAttributes) | (null));
    /**
     * Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. anyOf[1]
     * (Value): boolean. Whether trying again later can succeed. Set only when `type` is
     * `cannot_calculate`. anyOf[2] (Value): null.
     */
    "retryable"?: ((boolean) | (null));
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "unavailable". anyOf[1]
     * (Value): string. What happened when Flint evaluated this delivery method. Value enum:
     * "unavailable". anyOf[2] (Value): null.
     */
    "type"?: (("unavailable" | (string & {})) | (null));
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `automatic_tax_origin_unsupported`: Automatic tax requires a US fulfillment origin. Choose a
     * method that uses a US location, or use external tax. - `dependency_revoked`: The method
     * revision or a dependency was revoked. Publish a corrected revision, rotate the callback
     * signing secret, or choose another method. - `destination_not_served`: Use a destination
     * covered by this method or choose another method. - `pickup_unavailable`: Choose an available
     * pickup method or location. - `no_window_available`: Choose another offered window or a
     * method with availability for the requested time. - `eligibility_no_match`: Inspect
     * eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. -
     * `method_type_not_allowed`: Choose a method type allowed by every line item in the choice
     * group. - `pricing_unavailable`: Add or activate a matching rate, or provide the required
     * caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[1] (Value): string. Why the method is unavailable and the
     * action that can make it eligible. - `automatic_tax_origin_unsupported`: Automatic tax
     * requires a US fulfillment origin. Choose a method that uses a US location, or use external
     * tax. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a
     * corrected revision, rotate the callback signing secret, or choose another method. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: The origin or pickup location cannot supply the requested
     * inventory. Reduce the quantity, replenish inventory, or choose another origin or method.
     * Value enum: "automatic_tax_origin_unsupported", "dependency_revoked",
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable". anyOf[2] (Value): null.
     */
    "unavailable_reason"?: (("automatic_tax_origin_unsupported"
        | "dependency_revoked"
        | "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {}))
        | (null));
})
    & ({
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "unavailable". anyOf[1]
     * (Value): string. What happened when Flint evaluated this delivery method. Value enum:
     * "unavailable". anyOf[2] (Value): null.
     */
    "type"?: (("unavailable" | (string & {})) | (null));
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
export type DeliveryChargeTaxCalculationRequestPreviousAttributes = {
    /**
     * The tax copied onto each delivery charge, one percentage component per jurisdiction and tax
     * type. anyOf[1] (Value): Array of {@link TaxComponentRequestPreviousAttributes}. The tax
     * copied onto each delivery charge, one percentage component per jurisdiction and tax type.
     * minItems: 1. anyOf[1][] (Value): {@link TaxComponentRequestPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "components"?: ((Array<TaxComponentRequestPreviousAttributes>) | (null));
    /**
     * Optional. If you send it, it must be `external`, because delivery charge templates apply
     * only to orders that use external tax. Value enum: "external". anyOf[1] (Value): string.
     * Optional. If you send it, it must be `external`, because delivery charge templates apply
     * only to orders that use external tax. Value enum: "external". anyOf[2] (Value): null.
     */
    "mode"?: (("external" | (string & {})) | (null));
    /**
     * Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive".
     * anyOf[1] (Value): string. Whether the delivery charge already includes the tax. Value enum:
     * "additive", "inclusive". anyOf[2] (Value): null.
     */
    "price_mode"?: (("additive" | "inclusive" | (string & {})) | (null));
};
/** A latitude and longitude. */
export type DeliveryCoordinateRequestInput = {
    /** Latitude in degrees, from -90 to 90. minimum: -90. maximum: 90. */
    "latitude": number;
    /** Longitude in degrees, from -180 to 180. minimum: -180. maximum: 180. */
    "longitude": number;
};
export type DeliveryCoordinateRequestPreviousAttributes = {
    /**
     * Latitude in degrees, from -90 to 90. anyOf[1] (Value): number. Latitude in degrees, from -90
     * to 90. minimum: -90. maximum: 90. anyOf[2] (Value): null.
     */
    "latitude"?: ((number) | (null));
    /**
     * Longitude in degrees, from -180 to 180. anyOf[1] (Value): number. Longitude in degrees, from
     * -180 to 180. minimum: -180. maximum: 180. anyOf[2] (Value): null.
     */
    "longitude"?: ((number) | (null));
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
export type DeliveryCustomerBooleanConditionPreviousAttributes = {
    /**
     * The value the fact must have. `true` matches when the fact holds, `false` when it does not.
     * anyOf[1] (Value): boolean. The value the fact must have. `true` matches when the fact holds,
     * `false` when it does not. anyOf[2] (Value): null.
     */
    "value"?: ((boolean) | (null));
};
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
export type DeliveryCustomerSegmentConditionPreviousAttributes = {
    /**
     * Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment
     * is one of them. anyOf[1] (Value): Array of string. Customer segments to match, from 1 to 100
     * unique values. Matches when the customer's segment is one of them. anyOf[1][] (Value):
     * string. minLength: 1. anyOf[2] (Value): null.
     */
    "values"?: ((Array<string>) | (null));
};
