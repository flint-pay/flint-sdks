import type { InputValue } from '../runtime.js';
import type { CreateCustomerAddressRequestInput } from './types-6.js';
import type { CreateCustomerRequestInput } from './types-7.js';
import type { LinkCustomerGuestPurchasesRequestInput, LocationCoordinate } from './types-32.js';
import type { CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
import type { UpdateCustomerAddressRequestInput, UpdateCustomerRequestInput } from './types-58.js';
import type { GetReturnInspectionResponse, GetReturnResponse, GetReturnPolicyResponse, GetReturnReasonResponse } from './types-23.js';
import type { ReturnLineDecision, ReturnLineDecisionInput } from './types-49.js';
import type { Address, AddRiskListItemsRequest } from './types-0.js';
import type {
    DeliveryWeeklyInterval,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryWeightUnitPrice,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryStateCondition,
    DeliveryWindowTimeCondition,
    DeliveryZoneCondition
} from './types-19.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { DeliveryInputRequirement } from './types-15.js';
import type { DeliveryOptionProjection, DeliveryPostalCodeCondition } from './types-16.js';
import type { DeliveryRadiusCondition } from './types-18.js';
export type CustomersCreateAccessLinkParams = (InputValue<{}>);
export type CustomersCreateAddressParams = (InputValue<CreateCustomerAddressRequestInput>);
export type CustomersCreateParams = (InputValue<CreateCustomerRequestInput>);
export type CustomersDeleteAddressParams = {
    /** Optional address version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type CustomersGetAddressParams = {};
export type CustomersGetParams = {
    /**
     * Supported expansions: default_payment_method, receivables. Expanding the default payment
     * method requires customers.read plus payments.payment_methods.read. Limits: at most 10 unique
     * expand paths per request. Repeat expand, for example
     * expand=default_payment_method&expand=receivables, or pass one comma-separated value. []
     * enum: "default_payment_method", "receivables". Value enum: "default_payment_method",
     * "receivables". anyOf[1] (Value): Array of string. [] enum: "default_payment_method",
     * "receivables". anyOf[1][] (Value): string. Value enum: "default_payment_method",
     * "receivables". anyOf[2] (Value): string. Value enum: "default_payment_method",
     * "receivables".
     */
    "expand"?: InputValue<("default_payment_method" | "receivables") | readonly ("default_payment_method" | "receivables")[]>;
};
export type CustomersLinkGuestPurchasesParams = (InputValue<LinkCustomerGuestPurchasesRequestInput>);
export type CustomersListAddressesParams = CheckoutSessionsListDeliverySelectionsParams;
export type CustomersListParams = {
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out deleted rows; name deleted to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "deletion_processing", "deleted". Value enum:
     * "active", "deletion_processing", "deleted". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "active", "deletion_processing", "deleted". anyOf[1][] (Value): string. Value enum:
     * "active", "deletion_processing", "deleted". anyOf[2] (Value): string. Value enum: "active",
     * "deletion_processing", "deleted".
     */
    "status"?: InputValue<("active" | "deletion_processing" | "deleted")
        | readonly ("active" | "deletion_processing" | "deleted")[]>;
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
    /**
     * Search across customer_id, name, email, phone number, and external_reference_id. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as cus_01.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Exact whole-address match after trimming surrounding whitespace, ignoring case and accents.
     */
    "email"?: InputValue<string>;
    /**
     * Byte-sensitive whole-value match on the opaque customer segment. Whitespace, casing,
     * Unicode, and commas are literal. minLength: 1. maxLength: 255.
     */
    "segment"?: InputValue<string>;
    /** Filter by merchant verification, independently of email verification. */
    "is_merchant_verified"?: InputValue<boolean>;
    /**
     * Exact match on a full E.164 phone number. Encode the leading plus as %2B. minLength: 1.
     * pattern: ^\+[1-9][0-9]{1,14}$.
     */
    "phone"?: InputValue<string>;
    /**
     * Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN`
     * with reason `test_mode_required`. minLength: 1. pattern: ^tclk_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "test_clock_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by customer_id. Default:
     * "created_at". Value enum: "name", "email", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
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
     * Supported expansions: default_payment_method, receivables. Include the requested related
     * resources using scoped batch reads for this page. Each relationship requires its existing
     * target read scopes. Expansion changes the representation without changing pagination tokens.
     * Limits: at most 10 unique expand paths per request. Repeat expand, for example
     * expand=default_payment_method&expand=receivables, or pass one comma-separated value. []
     * enum: "default_payment_method", "receivables". Value enum: "default_payment_method",
     * "receivables". anyOf[1] (Value): Array of string. [] enum: "default_payment_method",
     * "receivables". anyOf[1][] (Value): string. Value enum: "default_payment_method",
     * "receivables". anyOf[2] (Value): string. Value enum: "default_payment_method",
     * "receivables".
     */
    "expand"?: InputValue<("default_payment_method" | "receivables") | readonly ("default_payment_method" | "receivables")[]>;
};
export type CustomersRevokeSessionsParams = {};
export type CustomersUpdateAddressParams = (InputValue<UpdateCustomerAddressRequestInput>);
export type CustomersUpdateParams = (InputValue<UpdateCustomerRequestInput>);
/** The request body for: Decide return inspection line item. */
export type DecideReturnInspectionLineItemRequest = {
    /** Value enum: "inspection_result", "return_policy", "manual_review", "other". */
    "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    /** minLength: 1. */
    "acceptance_decision_reason_message"?: string;
    /** Value enum: "accepted", "rejected". */
    "acceptance_status": "accepted" | "rejected" | (string & {});
    /**
     * Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the
     * inspection ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Decide return inspection line item. */
export type DecideReturnInspectionLineItemRequestInput = {
    /** Value enum: "inspection_result", "return_policy", "manual_review", "other". */
    "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other";
    /** minLength: 1. */
    "acceptance_decision_reason_message"?: string;
    /** Value enum: "accepted", "rejected". */
    "acceptance_status": "accepted" | "rejected";
    /**
     * Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the
     * inspection ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
export type DecideReturnInspectionLineItemResponse = GetReturnInspectionResponse;
/** The request body for: Decide return. */
export type DecideReturnRequest = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link ReturnLineDecision}. Start from the pinned policy proposal
     * recomputed for approved_quantity when the line has a policy evaluation and the proposal can
     * be built. Otherwise start with return_required_quantity equal to approved_quantity,
     * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
     * store_credit in that order regardless of whether the original payment is refundable, no
     * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
     * supplied field replaces its starting value; allowed_resolution_types replaces the whole
     * list. Omit automatic_resolution_type to keep its starting value, or send null to resolve
     * manually. Then fill an omitted release_timing with after_inspection when merchandise is
     * required and inspection is required, after_receipt when merchandise is required without
     * inspection, or after_approval when no merchandise is required. Validate the merged decision
     * for quantity bounds, allowed resolution types, and reachable timing and inspection
     * requirements. A pinned policy always requires override_reason when approved_quantity exceeds
     * evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no
     * proposal, other decision fields use these defaults and override_reason is otherwise
     * optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
     */
    "line_items": Array<ReturnLineDecision>;
};
/** The request body for: Decide return. */
export type DecideReturnRequestInput = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link ReturnLineDecisionInput}. Start from the pinned policy
     * proposal recomputed for approved_quantity when the line has a policy evaluation and the
     * proposal can be built. Otherwise start with return_required_quantity equal to
     * approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
     * no_monetary_action, and store_credit in that order regardless of whether the original
     * payment is refundable, no automatic_resolution_type, is_inspection_required false, and no
     * receiving_location_id. Each supplied field replaces its starting value;
     * allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its
     * starting value, or send null to resolve manually. Then fill an omitted release_timing with
     * after_inspection when merchandise is required and inspection is required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. Validate the merged decision for quantity bounds, allowed resolution types, and
     * reachable timing and inspection requirements. A pinned policy always requires
     * override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no
     * proposal can be built. With a pinned policy but no proposal, other decision fields use these
     * defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
     */
    "line_items": Array<ReturnLineDecisionInput>;
};
export type DecideReturnResponse = GetReturnResponse;
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
    /** Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date. */
    "earliest_date": string;
    /** Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date. */
    "latest_date": string;
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
    /** minLength: 1. */
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
    /** minLength: 1. */
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
    /** minLength: 1. */
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
    /** minLength: 1. */
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
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
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
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
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
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
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
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
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
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
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
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
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
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
});
/** A latitude and longitude. */
export type DeliveryCoordinateRequestInput = {
    /** minimum: -90. maximum: 90. */
    "latitude": number;
    /** minimum: -180. maximum: 180. */
    "longitude": number;
};
/** A delivery eligibility condition that matches when the address country is one of `values`. */
export type DeliveryCountryConditionInput = {
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
export type DeliveryDistanceInput = {
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
