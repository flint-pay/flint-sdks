import type { InputValue } from '../runtime.js';
import type { CreateDeliveryRateCallbackRequestInput, CreateDeliveryRevocationRequestInput } from './types-9.js';
import type { DisputesAcceptParams } from './types-25.js';
import type {
    DeliveryLocationSetsDeleteParams,
    DeliveryInputRequirement,
    DeliveryInputRequirementPreviousAttributes
} from './types-19.js';
import type { UpdateDeliveryRateCallbackRequestInput } from './types-73.js';
import type { MoneyValue, MoneyValueInput, MoneyValuePreviousAttributes } from './types-42.js';
import type {
    DeliveryPricingRate,
    DeliveryPricingRateCreateRequest,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRatePreviousAttributes,
    DeliveryPricingRateRequest,
    DeliveryPricingRateRequestInput,
    DeliveryPickupDetails,
    DeliveryPlan,
    DeliveryPickupDetailsPreviousAttributes,
    DeliveryPlanPreviousAttributes
} from './types-20.js';
import type { MerchantWebhookEnvelope } from './types-41.js';
import type { PartnerWebhookEnvelope } from './types-49.js';
import type { ResponseMeta } from './types-60.js';
import type { DeliveryAvailability, DeliveryAvailabilityPreviousAttributes, DeliveryAvailabilityRequestInput } from './types-17.js';
import type { Address, AddressPreviousAttributes } from './types-0.js';
import type { DeliveryBuyerLocationResource, DeliveryBuyerLocationResourcePreviousAttributes } from './types-18.js';
import type {
    DeliverySelectionLifecycleEventResource,
    DeliveryShipmentDetails,
    DeliveryShipmentDetailsPreviousAttributes,
    DeliverySelectionLifecycleEventResourcePreviousAttributes
} from './types-24.js';
export type DeliveryRateCallbacksCreateParams = (InputValue<CreateDeliveryRateCallbackRequestInput>)
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
export type DeliveryRateCallbacksCreateTestDeliveryParams = DisputesAcceptParams;
export type DeliveryRateCallbacksDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryRateCallbacksGetParams = DisputesAcceptParams;
export type DeliveryRateCallbacksListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Search across delivery_rate_callback_id, name, and external_reference_id. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as dcb_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by an active current method that references this resource. pattern:
     * ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: InputValue<string>;
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
export type DeliveryRateCallbacksRotateSecretParams = DisputesAcceptParams;
export type DeliveryRateCallbacksUpdateParams = (UpdateDeliveryRateCallbackRequestInput)
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
/** Units of one order line that an execution leg ships. */
export type DeliveryRateEvaluationAllocation = {
    /**
     * Delivery method IDs these units are limited to. Omitted when no method restriction applies.
     * [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "allowed_delivery_method_ids"?: Array<string>;
    /** Delivery method types these units allow. [] (Value): string. */
    "allowed_types": Array<string>;
    /**
     * The bundle component these units are, for a line item that sells a bundle. Omitted
     * otherwise. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /**
     * Flint's key for the demand these units fill, such as `line:` followed by the order line item
     * ID.
     */
    "demand_key": string;
    /**
     * Keys of the inventory demands these units draw on. Omitted when they draw on none. []
     * (Value): string.
     */
    "inventory_demand_keys"?: Array<string>;
    /**
     * Merchandise value of these units in the request's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "merchandise_value_money": MoneyValue;
    /** The order line item being shipped. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * Whole-number units of the line item in this leg; fractional quantities are not supported.
     * Format: int64.
     */
    "quantity": number;
};
/** A delivery method revision to price in a delivery rate evaluation. */
export type DeliveryRateEvaluationCandidate = {
    /**
     * The method being priced. It stays the same when the method is edited, so use it to choose a
     * service or price list. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * The exact method revision being priced. Echo it in the method's result. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * One entry per origin Location the items leave from. [] (Value): {@link
     * DeliveryRateEvaluationExecutionLeg}. Items that leave from one origin Location in a delivery
     * rate evaluation.
     */
    "execution_legs": Array<DeliveryRateEvaluationExecutionLeg>;
    /**
     * Totals for the choice group that a rate calculation reads. Totals for a choice group that a
     * delivery rate calculation reads.
     */
    "pricing": DeliveryRateEvaluationPricing;
};
/** Items that leave from one origin Location in a delivery rate evaluation. */
export type DeliveryRateEvaluationExecutionLeg = {
    /**
     * The order lines this leg ships, with their quantities and merchandise values. [] (Value):
     * {@link DeliveryRateEvaluationAllocation}. Units of one order line that an execution leg
     * ships.
     */
    "allocations": Array<DeliveryRateEvaluationAllocation>;
    /**
     * Flint's ID for this leg. It can differ between requests for the same plan; compare legs by
     * fingerprint. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     */
    "delivery_execution_leg_id": string;
    /**
     * Opaque fingerprint of the leg's origin and allocations. Equal fingerprints mean the same
     * leg.
     */
    "fingerprint": string;
    /**
     * The recorded geography version of origin_location_id that Flint used, as in a
     * location_geography revocation target. Format: int64.
     */
    "origin_geography_version": number;
    /** The Location the items leave from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "origin_location_id": string;
};
/** The outcome for one candidate in a delivery rate evaluation response. */
export type DeliveryRateEvaluationMethodOutcome = {
    /** The candidate's delivery_method_revision_id. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". */
    "delivery_method_revision_id": string;
    /**
     * The method's outcome, selected by type. A method's outcome in a delivery rate evaluation
     * response, selected by `type`: available with a price and delivery window, unavailable with a
     * reason, or cannot calculate.
     */
    "outcome": DeliveryRateEvaluationOutcome;
};
/** The outcome for one candidate in a delivery rate evaluation response. */
export type DeliveryRateEvaluationMethodOutcomeInput = {
    /** The candidate's delivery_method_revision_id. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". */
    "delivery_method_revision_id": string;
    /**
     * The method's outcome, selected by type. A method's outcome in a delivery rate evaluation
     * response, selected by `type`: available with a price and delivery window, unavailable with a
     * reason, or cannot calculate.
     */
    "outcome": DeliveryRateEvaluationOutcomeInput;
};
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate.
 */
export type DeliveryRateEvaluationOutcome = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindow}. A delivery window the buyer
     * can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindow>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /**
     * The outcome type, which selects the fields the outcome carries. Value enum: "available",
     * "unavailable", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & ((Exclude<DeliveryRateEvaluationOutcomeAvailable & object, readonly unknown[]>)
    | (Exclude<DeliveryRateEvaluationOutcomeUnavailable & object, readonly unknown[]>)
    | (Exclude<DeliveryRateEvaluationOutcomeCannotCalculate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate. The `available`
 * outcome: you can deliver for amount_money, within the delivery window or one of offered_windows.
 */
export type DeliveryRateEvaluationOutcomeAvailable = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindow}. A delivery window the buyer
     * can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindow>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /** The outcome type, which selects the fields the outcome carries. Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & (({
    /** Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string;
}));
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate. The `available`
 * outcome: you can deliver for amount_money, within the delivery window or one of offered_windows.
 */
export type DeliveryRateEvaluationOutcomeAvailableInput = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindowInput}. A delivery window the
     * buyer can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindowInput>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string | globalThis.Date;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /** The outcome type, which selects the fields the outcome carries. Value enum: "available". */
    "type": "available";
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & (({
    /** Value enum: "available". */
    "type": "available";
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string | globalThis.Date;
})
    & (({
    "unavailable_reason"?: never;
})
    & ({
    "failure_category"?: never;
})
    & ({
    "retryable"?: never;
})));
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate. The
 * `cannot_calculate` outcome: you couldn't price the method.
 */
export type DeliveryRateEvaluationOutcomeCannotCalculate = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindow}. A delivery window the buyer
     * can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindow>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /**
     * The outcome type, which selects the fields the outcome carries. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & (({
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
}));
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate. The
 * `cannot_calculate` outcome: you couldn't price the method.
 */
export type DeliveryRateEvaluationOutcomeCannotCalculateInput = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindowInput}. A delivery window the
     * buyer can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindowInput>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /**
     * The outcome type, which selects the fields the outcome carries. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate";
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & (({
    /** Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
})
    & (({
    "amount_money"?: never;
})
    & ({
    "expires_at"?: never;
})
    & ({
    "selection_guarantee_expires_at"?: never;
})
    & ({
    "window_start_at"?: never;
})
    & ({
    "window_end_at"?: never;
})
    & ({
    "offered_windows"?: never;
})
    & ({
    "service_level"?: never;
})
    & ({
    "unavailable_reason"?: never;
})));
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate.
 */
export type DeliveryRateEvaluationOutcomeInput = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindowInput}. A delivery window the
     * buyer can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindowInput>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /**
     * The outcome type, which selects the fields the outcome carries. Value enum: "available",
     * "unavailable", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "cannot_calculate";
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & ((Exclude<DeliveryRateEvaluationOutcomeAvailableInput & object, readonly unknown[]>)
    | (Exclude<DeliveryRateEvaluationOutcomeUnavailableInput & object, readonly unknown[]>)
    | (Exclude<DeliveryRateEvaluationOutcomeCannotCalculateInput & object, readonly unknown[]>));
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate. The `unavailable`
 * outcome: you don't offer the method for this request.
 */
export type DeliveryRateEvaluationOutcomeUnavailable = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindow}. A delivery window the buyer
     * can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindow>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /**
     * The outcome type, which selects the fields the outcome carries. Value enum: "unavailable".
     */
    "type": "unavailable" | (string & {});
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & (({
    /** Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
}));
/**
 * A method's outcome in a delivery rate evaluation response, selected by `type`: available with a
 * price and delivery window, unavailable with a reason, or cannot calculate. The `unavailable`
 * outcome: you don't offer the method for this request.
 */
export type DeliveryRateEvaluationOutcomeUnavailableInput = ({
    /**
     * The price in the request's currency, within the method's minimum_fee_currency_options and
     * maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's
     * price. Send it with type available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * When the price stops being offered. It must be later than evaluated_at plus the method's
     * minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with
     * type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the
     * callback_ categories for failures it detects. - `dependency_failure`: Retry after the
     * dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for the rate, such as a carrier rate ID, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength:
     * 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from, without overlaps. Send it with type available.
     * maxItems: 50. [] (Value): {@link DeliveryRateEvaluationWindowInput}. A delivery window the
     * buyer can choose in an available rate evaluation outcome.
     */
    "offered_windows"?: Array<DeliveryRateEvaluationWindowInput>;
    /**
     * Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     */
    "retryable"?: boolean;
    /**
     * How long the price holds once the buyer selects it. It must not be earlier than expires_at,
     * and Flint holds a selection for at most 24 hours. Send it with type available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /**
     * Replaces the method's configured service level for this option: `economy`, `standard`,
     * `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`,
     * `same_day`, or `scheduled` for local delivery. Send it with type available.
     */
    "service_level"?: string;
    /**
     * The outcome type, which selects the fields the outcome carries. Value enum: "unavailable".
     */
    "type": "unavailable";
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /**
     * Exclusive end of the delivery window, after window_start_at and within 366 days, or within
     * the method's scheduling horizon for a schedule_window estimate. With offered_windows, it
     * must equal the last window's end_at when present. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window, not earlier than evaluated_at. Required with window_end_at
     * unless offered_windows is sent, in which case it must equal the first window's start_at when
     * present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & (({
    /** Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Why you don't offer the method for this request. Send it with type unavailable. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
})
    & (({
    "amount_money"?: never;
})
    & ({
    "expires_at"?: never;
})
    & ({
    "selection_guarantee_expires_at"?: never;
})
    & ({
    "window_start_at"?: never;
})
    & ({
    "window_end_at"?: never;
})
    & ({
    "offered_windows"?: never;
})
    & ({
    "service_level"?: never;
})
    & ({
    "failure_category"?: never;
})
    & ({
    "retryable"?: never;
})));
/** Totals for a choice group that a delivery rate calculation reads. */
export type DeliveryRateEvaluationPricing = {
    /**
     * Quantity and merchandise subtotals in minor units, keyed by the same base names as tiered
     * pricing bases. * (Value): integer. Format: int64.
     */
    "bases": Record<string, number>;
    /**
     * The checkout currency, equal to the request's currency. Uses ISO 4217 currency codes.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Straight-line distance in meters from each origin to the destination, in execution leg
     * order. Empty when the address or an origin has no coordinates. [] (Value): integer. Format:
     * int64.
     */
    "leg_distance_meters": Array<number>;
    /**
     * Total whole-number units in the choice group; fractional quantities are not supported.
     * Format: int64. minimum: 0.
     */
    "total_item_quantity": number;
    /**
     * Total weight in grams: each item's variant unit_weight times its quantity, or the
     * unit_weight on a custom line. Omitted when any item in the group has no weight; 0 is a real
     * weight. Format: int64. minimum: 0.
     */
    "total_weight_grams"?: number;
};
/**
 * The body Flint sends to a delivery rate callback's URL to price delivery methods for a quote.
 * Verify the signature against the raw body before parsing it, then answer with a
 * DeliveryRateEvaluationResponse.
 */
export type DeliveryRateEvaluationRequest = {
    /**
     * The buyer's location for local delivery, limited like destination. It adds latitude and
     * longitude when a candidate lists buyer_location.coordinate. Omitted when no candidate lists
     * a buyer_location field. city (Optional): string. City or locality. country (Optional):
     * string. Two-letter ISO 3166-1 country code. latitude (Optional): number. Latitude in decimal
     * degrees. line1 (Optional): string. First address line. line2 (Optional): string. Second
     * address line. longitude (Optional): number. Longitude in decimal degrees. postal_code
     * (Optional): string. Postal or ZIP code. state (Optional): string. State, province, or region
     * code.
     */
    "buyer_location"?: {
        /** City or locality. */
        "city"?: string;
        /** Two-letter ISO 3166-1 country code. */
        "country"?: string;
        /** Latitude in decimal degrees. */
        "latitude"?: number;
        /** First address line. */
        "line1"?: string;
        /** Second address line. */
        "line2"?: string;
        /** Longitude in decimal degrees. */
        "longitude"?: number;
        /** Postal or ZIP code. */
        "postal_code"?: string;
        /** State, province, or region code. */
        "state"?: string;
    };
    /**
     * The delivery methods to price, sorted by delivery_method_revision_id. Every candidate in a
     * request has the same execution legs; methods that ship from different Locations get separate
     * requests. [] (Value): {@link DeliveryRateEvaluationCandidate}. A delivery method revision to
     * price in a delivery rate evaluation.
     */
    "candidates": Array<DeliveryRateEvaluationCandidate>;
    /**
     * The checkout session being quoted. `null` when a delivery preview prices the methods,
     * because a preview has no checkout session. A test delivery sends an ID that matches no
     * checkout session. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string | null;
    /**
     * Opaque fingerprint of the choice group's items and quantities. Equal fingerprints mean the
     * same contents.
     */
    "choice_group_fingerprint": string;
    /**
     * The checkout currency as an ISO 4217 code. Every amount in the response must use it.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * The choice group being priced: the line items that ship together under one delivery method.
     * Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * Opaque fingerprint of the plan Flint priced: its origins and the allocations each one ships.
     * Equal fingerprints mean the same plan.
     */
    "delivery_feasibility_plan_fingerprint": string;
    /**
     * When the quote expires, in RFC 3339 format truncated to whole seconds. Every expires_at in
     * the response must be no later than this. It is up to 15 minutes after evaluated_at, or just
     * under 5 minutes for a cart with tracked inventory. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivery_quote_expires_at": string;
    /**
     * The delivery rate callback revision whose configuration sent this request. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id": string;
    /**
     * ID of the current HMAC signing key when hmac signing is enabled, or an empty string for a
     * JWT-only callback. It is the first ID in the Flint-Signing-Key-Ids header and is unrelated
     * to the JWT header's kid. Example: "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Identifies this evaluation. A retry reuses it with the same body, and each new quote gets a
     * new one. The webhook-id header carries the same value. Echo it in the response. Example:
     * "dreval_01KEZF7C00X0Q3Z075W9W90ZGC".
     */
    "delivery_rate_evaluation_id": string;
    /**
     * The delivery address, limited to the fields that a candidate method lists in
     * quote_input_fields. Omitted when no candidate lists an address field. city (Optional):
     * string. City or locality. country (Optional): string. Two-letter ISO 3166-1 country code.
     * line1 (Optional): string. First address line. line2 (Optional): string. Second address line.
     * postal_code (Optional): string. Postal or ZIP code. state (Optional): string. State,
     * province, or region code.
     */
    "destination"?: {
        /** City or locality. */
        "city"?: string;
        /** Two-letter ISO 3166-1 country code. */
        "country"?: string;
        /** First address line. */
        "line1"?: string;
        /** Second address line. */
        "line2"?: string;
        /** Postal or ZIP code. */
        "postal_code"?: string;
        /** State, province, or region code. */
        "state"?: string;
    };
    /**
     * The quote's evaluation time, in RFC 3339 format with up to nine fractional digits. Compute
     * every time in the response from this value, not from your server's clock. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "evaluated_at": string;
    /** The order whose items are being priced. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Opaque identity of the quote attempt this evaluation belongs to. */
    "quote_creation_identity": string;
    /**
     * `true` on a test delivery sent by createDeliveryRateCallbackTestDelivery, whose IDs don't
     * refer to stored checkout sessions or orders. Omitted on live requests.
     */
    "test"?: boolean;
};
/**
 * The JSON object a delivery rate callback returns with a 2xx status. Flint rejects the whole
 * response, and every method in it, when it has unknown fields or trailing data, its
 * delivery_rate_evaluation_id differs from the request's, or ttl_seconds is out of range.
 */
export type DeliveryRateEvaluationResponse = {
    /** The request's delivery_rate_evaluation_id. Example: "dreval_01KEZF7C00X0Q3Z075W9W90ZGC". */
    "delivery_rate_evaluation_id": string;
    /**
     * One result per candidate. A candidate whose result is missing, duplicated, or invalid
     * becomes cannot_calculate with callback_result_invalid; results for other method revisions
     * are ignored. [] (Value): {@link DeliveryRateEvaluationMethodOutcome}. The outcome for one
     * candidate in a delivery rate evaluation response.
     */
    "method_results": Array<DeliveryRateEvaluationMethodOutcome>;
    /**
     * How long Flint may reuse this response for the same checkout when no outcome is available,
     * from 0 to 300 seconds. Defaults to 120. A response with a cannot_calculate outcome is reused
     * for at most 30 seconds, and a response with an available outcome is never reused. Format:
     * int64. minimum: 0. maximum: 300.
     */
    "ttl_seconds"?: number;
};
/**
 * The JSON object a delivery rate callback returns with a 2xx status. Flint rejects the whole
 * response, and every method in it, when it has unknown fields or trailing data, its
 * delivery_rate_evaluation_id differs from the request's, or ttl_seconds is out of range.
 */
export type DeliveryRateEvaluationResponseInput = {
    /** The request's delivery_rate_evaluation_id. Example: "dreval_01KEZF7C00X0Q3Z075W9W90ZGC". */
    "delivery_rate_evaluation_id": string;
    /**
     * One result per candidate. A candidate whose result is missing, duplicated, or invalid
     * becomes cannot_calculate with callback_result_invalid; results for other method revisions
     * are ignored. [] (Value): {@link DeliveryRateEvaluationMethodOutcomeInput}. The outcome for
     * one candidate in a delivery rate evaluation response.
     */
    "method_results": Array<DeliveryRateEvaluationMethodOutcomeInput>;
    /**
     * How long Flint may reuse this response for the same checkout when no outcome is available,
     * from 0 to 300 seconds. Defaults to 120. A response with a cannot_calculate outcome is reused
     * for at most 30 seconds, and a response with an available outcome is never reused. Format:
     * int64. minimum: 0. maximum: 300.
     */
    "ttl_seconds"?: number;
};
/** A delivery window the buyer can choose in an available rate evaluation outcome. */
export type DeliveryRateEvaluationWindow = {
    /**
     * The price for this window, in the request's currency and within the method's fee bounds.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Exclusive end of the window, after start_at and within the scheduling horizon. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "end_at": string;
    /**
     * How long this window's price holds once the buyer selects it. It must be after evaluated_at
     * and no later than the outcome's selection_guarantee_expires_at, which it defaults to.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string;
    /**
     * Start of the window, not earlier than evaluated_at. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "start_at": string;
    /** Your ID for the window, unique within the outcome. minLength: 1. Example: "evening-0802". */
    "window_id": string;
};
/** A delivery window the buyer can choose in an available rate evaluation outcome. */
export type DeliveryRateEvaluationWindowInput = {
    /**
     * The price for this window, in the request's currency and within the method's fee bounds.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Exclusive end of the window, after start_at and within the scheduling horizon. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "end_at": string | globalThis.Date;
    /**
     * How long this window's price holds once the buyer selects it. It must be after evaluated_at
     * and no later than the outcome's selection_guarantee_expires_at, which it defaults to.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /**
     * Start of the window, not earlier than evaluated_at. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "start_at": string | globalThis.Date;
    /** Your ID for the window, unique within the outcome. minLength: 1. Example: "evening-0802". */
    "window_id": string;
};
/**
 * Pricing strategy that charges the price of the first matching rate in a list of prioritized
 * rates. `unmatched_behavior` says what happens when none match.
 */
export type DeliveryRateTablePricingStrategy = {
    /**
     * One to 100 rates. Flint checks them from the highest priority to the lowest and uses the
     * first match. minItems: 1. maxItems: 100. [] (Value): {@link DeliveryPricingRate}. One rate
     * in a rate table pricing strategy: a `when` condition, a `priority`, and a price per
     * currency. The first matching rate by priority sets the price.
     */
    "rates": Array<DeliveryPricingRate>;
    /** What happens when no rate matches. Value enum: "unavailable". */
    "unmatched_behavior": "unavailable" | (string & {});
};
/**
 * Rate table pricing strategy you supply when creating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyCreateRequest = {
    /**
     * One to 100 rates. Flint checks them from the highest priority to the lowest and uses the
     * first match. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryPricingRateCreateRequest}. A rate to add when creating a rate table pricing
     * strategy: a `when` condition, a `priority`, and a price per currency.
     */
    "rates": Array<DeliveryPricingRateCreateRequest>;
    /** What happens when no rate matches. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable" | (string & {});
};
/**
 * Rate table pricing strategy you supply when creating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyCreateRequestInput = {
    /**
     * One to 100 rates. Flint checks them from the highest priority to the lowest and uses the
     * first match. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryPricingRateCreateRequestInput}. A rate to add when creating a rate table pricing
     * strategy: a `when` condition, a `priority`, and a price per currency.
     */
    "rates": Array<DeliveryPricingRateCreateRequestInput>;
    /** What happens when no rate matches. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable";
};
export type DeliveryRateTablePricingStrategyPreviousAttributes = {
    /**
     * One to 100 rates. Flint checks them from the highest priority to the lowest and uses the
     * first match. anyOf[1] (Value): Array of {@link DeliveryPricingRatePreviousAttributes}. One
     * to 100 rates. Flint checks them from the highest priority to the lowest and uses the first
     * match. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@link
     * DeliveryPricingRatePreviousAttributes}. anyOf[2] (Value): null.
     */
    "rates"?: ((Array<DeliveryPricingRatePreviousAttributes>) | (null));
    /**
     * What happens when no rate matches. Value enum: "unavailable". anyOf[1] (Value): string. What
     * happens when no rate matches. Value enum: "unavailable". anyOf[2] (Value): null.
     */
    "unmatched_behavior"?: (("unavailable" | (string & {})) | (null));
};
/**
 * Rate table pricing strategy you supply when updating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyRequest = {
    /**
     * One to 100 rates. Flint checks them from the highest priority to the lowest and uses the
     * first match. minItems: 1. maxItems: 100. [] (Value): {@link DeliveryPricingRateRequest}. A
     * rate in a rate table pricing strategy you send when updating a delivery method. Include
     * `delivery_rate_id` to keep or update an existing rate.
     */
    "rates": Array<DeliveryPricingRateRequest>;
    /** What happens when no rate matches. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable" | (string & {});
};
/**
 * Rate table pricing strategy you supply when updating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyRequestInput = {
    /**
     * One to 100 rates. Flint checks them from the highest priority to the lowest and uses the
     * first match. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryPricingRateRequestInput}. A rate in a rate table pricing strategy you send when
     * updating a delivery method. Include `delivery_rate_id` to keep or update an existing rate.
     */
    "rates": Array<DeliveryPricingRateRequestInput>;
    /** What happens when no rate matches. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable";
};
/**
 * Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
 * and the format it must use.
 */
export type DeliveryRecipientRequirement = {
    /** Recipient field the method asks for. Value enum: "name", "email", "phone". */
    "field": "name" | "email" | "phone" | (string & {});
    /** Format the value must follow. Value enum: "text", "email", "e164". */
    "format"?: "text" | "email" | "e164" | (string & {});
    /** Whether payment needs this field. */
    "required": boolean;
};
export type DeliveryRecipientRequirementPreviousAttributes = {
    /**
     * Recipient field the method asks for. Value enum: "name", "email", "phone". anyOf[1] (Value):
     * string. Recipient field the method asks for. Value enum: "name", "email", "phone". anyOf[2]
     * (Value): null.
     */
    "field"?: (("name" | "email" | "phone" | (string & {})) | (null));
    /**
     * Format the value must follow. Value enum: "text", "email", "e164". anyOf[1] (Value): string.
     * Format the value must follow. Value enum: "text", "email", "e164". anyOf[2] (Value): null.
     */
    "format"?: (("text" | "email" | "e164" | (string & {})) | (null));
    /**
     * Whether payment needs this field. anyOf[1] (Value): boolean. Whether payment needs this
     * field. anyOf[2] (Value): null.
     */
    "required"?: ((boolean) | (null));
};
/**
 * Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
 * and the format it must use.
 */
export type DeliveryRecipientRequirementRequestInput = {
    /** Recipient field the method asks for. Value enum: "name", "email", "phone". */
    "field": "name" | "email" | "phone";
    /** Format the value must follow. Value enum: "text", "email", "e164". */
    "format"?: "text" | "email" | "e164";
    /** Whether payment needs this field. */
    "required": boolean;
};
/** The person receiving a delivery selection, with optional `name`, `email`, and `phone`. */
export type DeliveryRecipientResource = {
    /** Email address for contacting the recipient about delivery. */
    "email"?: string;
    /** Name of the person receiving or collecting the items. */
    "name"?: string;
    /** Phone number for contacting the recipient about delivery. */
    "phone"?: string;
};
export type DeliveryRecipientResourcePreviousAttributes = {
    /**
     * Email address for contacting the recipient about delivery. anyOf[1] (Value): string. Email
     * address for contacting the recipient about delivery. anyOf[2] (Value): null.
     */
    "email"?: ((string) | (null));
    /**
     * Name of the person receiving or collecting the items. anyOf[1] (Value): string. Name of the
     * person receiving or collecting the items. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Phone number for contacting the recipient about delivery. anyOf[1] (Value): string. Phone
     * number for contacting the recipient about delivery. anyOf[2] (Value): null.
     */
    "phone"?: ((string) | (null));
};
/**
 * A permanent fence on an exact delivery method revision, rate callback revision, callback signing
 * key, or Location geography version. Quotes that depend on it are revoked, and selections that
 * depend on it stop being current.
 */
export type DeliveryRevocation = {
    /**
     * When Flint created this permanent fence, as an RFC 3339 timestamp in UTC. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Unique ID of this permanent delivery revocation. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     */
    "delivery_revocation_id": string;
    /**
     * Counts of active quotes and provisional selections that depended on the target when the
     * fence was created. Later reads keep these recorded counts. Counts of active delivery quotes
     * and current delivery selections affected by a delivery revocation.
     */
    "estimated_impact": DeliveryRevocationImpact;
    /** Optional incident context recorded when this revocation was created. */
    "merchant_note"?: string;
    /**
     * Why the dependency was permanently fenced. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /**
     * The parent and exact revision, HMAC signing key, or recorded geography version permanently
     * fenced by this revocation. The parent and exact child identity permanently fenced by this
     * revocation.
     */
    "target": DeliveryRevocationTarget;
};
export type DeliveryRevocationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivery_revocation_id": string;
            "estimated_impact": DeliveryRevocationImpact;
            "merchant_note"?: string;
            "reason": "unsafe_configuration"
                | "location_unavailable"
                | "credential_compromise"
                | "legal_requirement"
                | "other"
                | (string & {});
            "target": DeliveryRevocationTarget;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_revocation.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivery_revocation_id": string;
            "estimated_impact": DeliveryRevocationImpact;
            "merchant_note"?: string;
            "reason": "unsafe_configuration"
                | "location_unavailable"
                | "credential_compromise"
                | "legal_requirement"
                | "other"
                | (string & {});
            "target": DeliveryRevocationTarget;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_revocation.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_revocation.created";
});
/**
 * The `delivery_revocation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryRevocationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. When Flint created this permanent
     * fence, as an RFC 3339 timestamp in UTC. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.delivery_revocation_id (Required): string. Unique ID of this permanent delivery
     * revocation. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". object.estimated_impact (Required):
     * {@link DeliveryRevocationImpact}. Counts of active quotes and provisional selections that
     * depended on the target when the fence was created. Later reads keep these recorded counts.
     * Counts of active delivery quotes and current delivery selections affected by a delivery
     * revocation. object.merchant_note (Optional): string. Optional incident context recorded when
     * this revocation was created. object.reason (Required): string. Why the dependency was
     * permanently fenced. Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other". object.target (Required): {@link
     * DeliveryRevocationTarget}. The parent and exact revision, HMAC signing key, or recorded
     * geography version permanently fenced by this revocation. The parent and exact child identity
     * permanently fenced by this revocation.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. When Flint created this permanent fence, as an RFC 3339
         * timestamp in UTC. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_revocation_id (Required): string. Unique ID of this permanent delivery
         * revocation. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". estimated_impact (Required):
         * {@link DeliveryRevocationImpact}. Counts of active quotes and provisional selections
         * that depended on the target when the fence was created. Later reads keep these recorded
         * counts. Counts of active delivery quotes and current delivery selections affected by a
         * delivery revocation. merchant_note (Optional): string. Optional incident context
         * recorded when this revocation was created. reason (Required): string. Why the dependency
         * was permanently fenced. Value enum: "unsafe_configuration", "location_unavailable",
         * "credential_compromise", "legal_requirement", "other". target (Required): {@link
         * DeliveryRevocationTarget}. The parent and exact revision, HMAC signing key, or recorded
         * geography version permanently fenced by this revocation. The parent and exact child
         * identity permanently fenced by this revocation.
         */
        "object": {
            /**
             * When Flint created this permanent fence, as an RFC 3339 timestamp in UTC. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Unique ID of this permanent delivery revocation. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string;
            /**
             * Counts of active quotes and provisional selections that depended on the target when
             * the fence was created. Later reads keep these recorded counts. Counts of active
             * delivery quotes and current delivery selections affected by a delivery revocation.
             */
            "estimated_impact": DeliveryRevocationImpact;
            /** Optional incident context recorded when this revocation was created. */
            "merchant_note"?: string;
            /**
             * Why the dependency was permanently fenced. Value enum: "unsafe_configuration",
             * "location_unavailable", "credential_compromise", "legal_requirement", "other".
             */
            "reason": "unsafe_configuration"
                | "location_unavailable"
                | "credential_compromise"
                | "legal_requirement"
                | "other"
                | (string & {});
            /**
             * The parent and exact revision, HMAC signing key, or recorded geography version
             * permanently fenced by this revocation. The parent and exact child identity
             * permanently fenced by this revocation.
             */
            "target": DeliveryRevocationTarget;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_revocation.created". */
    "event_type"?: "delivery_revocation.created";
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
 * The `delivery_revocation.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryRevocationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. When Flint created this permanent
     * fence, as an RFC 3339 timestamp in UTC. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.delivery_revocation_id (Required): string. Unique ID of this permanent delivery
     * revocation. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". object.estimated_impact (Required):
     * {@link DeliveryRevocationImpact}. Counts of active quotes and provisional selections that
     * depended on the target when the fence was created. Later reads keep these recorded counts.
     * Counts of active delivery quotes and current delivery selections affected by a delivery
     * revocation. object.merchant_note (Optional): string. Optional incident context recorded when
     * this revocation was created. object.reason (Required): string. Why the dependency was
     * permanently fenced. Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other". object.target (Required): {@link
     * DeliveryRevocationTarget}. The parent and exact revision, HMAC signing key, or recorded
     * geography version permanently fenced by this revocation. The parent and exact child identity
     * permanently fenced by this revocation.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. When Flint created this permanent fence, as an RFC 3339
         * timestamp in UTC. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_revocation_id (Required): string. Unique ID of this permanent delivery
         * revocation. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". estimated_impact (Required):
         * {@link DeliveryRevocationImpact}. Counts of active quotes and provisional selections
         * that depended on the target when the fence was created. Later reads keep these recorded
         * counts. Counts of active delivery quotes and current delivery selections affected by a
         * delivery revocation. merchant_note (Optional): string. Optional incident context
         * recorded when this revocation was created. reason (Required): string. Why the dependency
         * was permanently fenced. Value enum: "unsafe_configuration", "location_unavailable",
         * "credential_compromise", "legal_requirement", "other". target (Required): {@link
         * DeliveryRevocationTarget}. The parent and exact revision, HMAC signing key, or recorded
         * geography version permanently fenced by this revocation. The parent and exact child
         * identity permanently fenced by this revocation.
         */
        "object": {
            /**
             * When Flint created this permanent fence, as an RFC 3339 timestamp in UTC. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Unique ID of this permanent delivery revocation. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string;
            /**
             * Counts of active quotes and provisional selections that depended on the target when
             * the fence was created. Later reads keep these recorded counts. Counts of active
             * delivery quotes and current delivery selections affected by a delivery revocation.
             */
            "estimated_impact": DeliveryRevocationImpact;
            /** Optional incident context recorded when this revocation was created. */
            "merchant_note"?: string;
            /**
             * Why the dependency was permanently fenced. Value enum: "unsafe_configuration",
             * "location_unavailable", "credential_compromise", "legal_requirement", "other".
             */
            "reason": "unsafe_configuration"
                | "location_unavailable"
                | "credential_compromise"
                | "legal_requirement"
                | "other"
                | (string & {});
            /**
             * The parent and exact revision, HMAC signing key, or recorded geography version
             * permanently fenced by this revocation. The parent and exact child identity
             * permanently fenced by this revocation.
             */
            "target": DeliveryRevocationTarget;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_revocation.created". */
    "event_type"?: "delivery_revocation.created";
});
/**
 * Counts of active delivery quotes and current delivery selections affected by a delivery
 * revocation.
 */
export type DeliveryRevocationImpact = {
    /**
     * Number of active delivery quotes that depended on the target at revocation creation. This
     * recorded count does not change afterward. Format: int64.
     */
    "active_quote_count": number;
    /**
     * Number of provisional delivery selections that depended on the target at revocation
     * creation. Payment-owned and committed selections are excluded; this recorded count does not
     * change afterward. Format: int64.
     */
    "current_selection_count": number;
};
/** A page of `DeliveryRevocation` objects. */
export type DeliveryRevocationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryRevocation}. A permanent fence on an exact delivery method revision, rate callback
     * revision, callback signing key, or Location geography version. Quotes that depend on it are
     * revoked, and selections that depend on it stop being current.
     */
    "data": Array<DeliveryRevocation>;
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
/** A response containing `DeliveryRevocation` data. */
export type DeliveryRevocationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A permanent fence on an
     * exact delivery method revision, rate callback revision, callback signing key, or Location
     * geography version. Quotes that depend on it are revoked, and selections that depend on it
     * stop being current.
     */
    "data": DeliveryRevocation;
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
/** The parent and exact child identity permanently fenced by this revocation. */
export type DeliveryRevocationTarget = ({
    /**
     * ID of the delivery method that owns the targeted revision. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id"?: string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. Example: "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /**
     * ID of the Location that recorded the targeted geography version. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * The kind of exact dependency this revocation fences. Value enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback_revision",
     * "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback_revision"
        | "delivery_method_revision"
        | (string & {});
})
    & ((Exclude<DeliveryRevocationTargetLocationGeography & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryRateCallbackSigningKey & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryRateCallbackRevision & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryMethodRevision & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Fences one immutable revision of the named delivery method. */
export type DeliveryRevocationTargetDeliveryMethodRevision = {
    /**
     * ID of the delivery method that owns the targeted revision. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery method. Value enum:
     * "delivery_method_revision".
     */
    "target_type": "delivery_method_revision" | (string & {});
};
/** Fences one immutable revision of the named delivery rate callback. */
export type DeliveryRevocationTargetDeliveryRateCallbackRevision = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery rate callback. Value enum:
     * "delivery_rate_callback_revision".
     */
    "target_type": "delivery_rate_callback_revision" | (string & {});
};
/** Fences one current or previous HMAC signing key of the named delivery rate callback. */
export type DeliveryRevocationTargetDeliveryRateCallbackSigningKey = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. Example: "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Fences one current or previous HMAC signing key of the named delivery rate callback. Value
     * enum: "delivery_rate_callback_signing_key".
     */
    "target_type": "delivery_rate_callback_signing_key" | (string & {});
};
/** Fences one geography version recorded by the named Location. */
export type DeliveryRevocationTargetLocationGeography = {
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /**
     * ID of the Location that recorded the targeted geography version. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Fences one geography version recorded by the named Location. Value enum:
     * "location_geography".
     */
    "target_type": "location_geography" | (string & {});
};
export type DeliveryRevocationsCreateParams = (InputValue<CreateDeliveryRevocationRequestInput>)
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
export type DeliveryRevocationsGetParams = DisputesAcceptParams;
export type DeliveryRevocationsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by revocation target type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". Value enum:
     * "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". anyOf[1][] (Value): string.
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". anyOf[2] (Value): string.
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision".
     */
    "target_type"?: InputValue<("location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback_revision"
        | "delivery_method_revision")
        | readonly ("location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback_revision"
        | "delivery_method_revision")[]>;
    /**
     * Filter by revocation reason. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other". Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other". anyOf[1][] (Value): string. Value
     * enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other". anyOf[2] (Value): string. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "reason"?: InputValue<("unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other")
        | readonly ("unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
/** Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule. */
export type DeliveryScheduleWindowRule = {
    /**
     * When windows can be offered. When a delivery method can be scheduled: weekly intervals,
     * blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailability;
};
export type DeliveryScheduleWindowRulePreviousAttributes = {
    /**
     * When windows can be offered. anyOf[1] (Value): {@link
     * DeliveryAvailabilityPreviousAttributes}. anyOf[2] (Value): null.
     */
    "availability"?: ((DeliveryAvailabilityPreviousAttributes) | (null));
};
/**
 * Scheduled-window estimate rule you supply for a delivery method, defined by its `availability`
 * schedule.
 */
export type DeliveryScheduleWindowRuleRequestInput = {
    /**
     * When windows can be offered. When a delivery method can be scheduled: weekly intervals,
     * blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailabilityRequestInput;
};
/**
 * The delivery choice selected for a checkout or order. Poll GET
 * /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current
 * status.
 */
export type DeliverySelection = {
    /**
     * Delivery charge committed by this selection. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Deadline after which calculated pricing evidence is no longer valid. Always present with an
     * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "calculation_expires_at"?: string;
    /**
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * One chosen option for each required choice group. [] (Value): {@link
     * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
     * delivery selection, with its method, amounts, type-specific details, timezone, and any
     * chosen delivery window.
     */
    "choices": Array<DeliverySelectionChoiceResource>;
    /**
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /** Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". */
    "delivery_quote_id": string;
    /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
    "delivery_selection_id": string;
    /**
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /**
     * Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Inputs this selection still needs before payment: each destination_address member a chosen
     * shipment or local delivery needs that the stored address lacks (line1, city, and country,
     * plus state and postal_code in the US), and each recipient field a chosen option requires
     * that the selection does not include. Each entry repeats the quote's requirement for that
     * option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED,
     * reason configuration_required, and the delivery_selection reference until a new delivery
     * selection includes them. Empty when nothing is missing, and always empty unless status is
     * selected. [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs,
     * such as an address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /** Buyer-provided delivery instructions. Returned with an API key or dashboard credential. */
    "instructions"?: string;
    /**
     * Ordered lifecycle events recorded for this selection. [] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened.
     */
    "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
    /**
     * Time the selection lifecycle last changed. Always present with an API key or dashboard
     * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "lifecycle_updated_at"?: string;
    /**
     * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
     * calculation expiry, and the maximum selection lifetime. A tie between the calculation and
     * the guarantee reports calculation_expiry. Always present with an API key or dashboard
     * credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options
     * and delivery windows comes first. When the selection holds stock, the hold ends at this
     * deadline too. - `calculation_expiry`: The calculation the selection was priced against
     * expires first. It ends no later than the checkout session's expires_at, and earlier when an
     * applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the
     * longest a provisional selection can last, 24 hours after it was created. Value enum:
     * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
     */
    "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
    /**
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted".
     */
    "private_data_status"?: "available" | "redacted" | (string & {});
    /**
     * Recipient details captured with the selection. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. The person receiving a delivery
     * selection, with optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliveryRecipientResource;
    /**
     * Time merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "redacted_at"?: string;
    /**
     * Current selection lifecycle status. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
    /**
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release". []
     * (Value): string. Value enum: "release".
     */
    "supported_actions": Array<"release" | (string & {})>;
};
/**
 * A delivery option chosen for one choice group in a delivery selection, with its method, amounts,
 * type-specific details, timezone, and any chosen delivery window.
 */
export type DeliverySelectionChoiceResource = {
    /**
     * Delivery price before discounts and tax. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of the quote choice group these items belong to. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * ID of the delivery method providing this choice. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /** ID of the option chosen from the quote. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". */
    "delivery_option_id": string;
    /**
     * Whether this choice delivers the items together or in separate shipments. Whether a delivery
     * option is fulfilled in one delivery or several, with the first arrival time, completion
     * time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    /**
     * ID of the chosen offered window. Omitted when no offered window was chosen. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id"?: string;
    /**
     * Buyer-facing description captured from the chosen method. Omitted when the method had none.
     */
    "description"?: string;
    /**
     * Always present with an API key or dashboard credential. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money"?: MoneyValue;
    /**
     * Window choice and buyer instructions stored with this selection. Omitted when neither was
     * supplied. Buyer input for a selected delivery option: a `delivery_window_id` where the
     * option uses delivery windows, and optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
    /**
     * Local delivery service details, present for local_delivery choices. Details of a local
     * delivery option: instructions and service level.
     */
    "local_delivery"?: DeliveryShipmentDetails;
    /**
     * Reference supplied by the merchant's rate service for this option. Omitted when none was
     * supplied.
     */
    "merchant_reference"?: string;
    /** Buyer-facing name captured from the chosen method. */
    "name": string;
    /**
     * Always present with an API key or dashboard credential. Null when the choice has no order
     * charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string | null;
    /**
     * ID of the order this delivery choice belongs to, including the parent of order_charge_id
     * when a charge applies. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Pickup Location and collection details, present for pickup choices. Pickup details of a
     * delivery option: the pickup mode and the pickup location.
     */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Shipping service details, present for shipment choices. Shipment-specific details of a
     * delivery option or choice: the `service_level` and buyer `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    /** Key identifying the same items and allowed delivery types across quotes. */
    "stable_key": string;
    /**
     * Always present with an API key or dashboard credential. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /**
     * IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York".
     */
    "timezone"?: string;
    /**
     * Delivery price after discounts and tax. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
};
export type DeliverySelectionChoiceResourcePreviousAttributes = {
    /**
     * Delivery price before discounts and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the quote choice group these items belong to. anyOf[1] (Value): string. ID of the
     * quote choice group these items belong to. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * anyOf[2] (Value): null.
     */
    "delivery_choice_group_id"?: ((string) | (null));
    /**
     * ID of the delivery method providing this choice. anyOf[1] (Value): string. ID of the
     * delivery method providing this choice. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
     * (Value): null.
     */
    "delivery_method_id"?: ((string) | (null));
    /**
     * ID of the option chosen from the quote. anyOf[1] (Value): string. ID of the option chosen
     * from the quote. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value): null.
     */
    "delivery_option_id"?: ((string) | (null));
    /**
     * Whether this choice delivers the items together or in separate shipments. anyOf[1] (Value):
     * {@link DeliveryPlanPreviousAttributes}. anyOf[2] (Value): null.
     */
    "delivery_plan"?: ((DeliveryPlanPreviousAttributes) | (null));
    /**
     * ID of the chosen offered window. Omitted when no offered window was chosen. anyOf[1]
     * (Value): string. ID of the chosen offered window. Omitted when no offered window was chosen.
     * Example: "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d". anyOf[2]
     * (Value): null.
     */
    "delivery_window_id"?: ((string) | (null));
    /**
     * Buyer-facing description captured from the chosen method. Omitted when the method had none.
     * anyOf[1] (Value): string. Buyer-facing description captured from the chosen method. Omitted
     * when the method had none. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Always present with an API key or dashboard credential. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Window choice and buyer instructions stored with this selection. Omitted when neither was
     * supplied. anyOf[1] (Value): {@link DeliverySelectionInstructionsRequestPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "input"?: ((DeliverySelectionInstructionsRequestPreviousAttributes) | (null));
    /**
     * Local delivery service details, present for local_delivery choices. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "local_delivery"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null));
    /**
     * Reference supplied by the merchant's rate service for this option. Omitted when none was
     * supplied. anyOf[1] (Value): string. Reference supplied by the merchant's rate service for
     * this option. Omitted when none was supplied. anyOf[2] (Value): null.
     */
    "merchant_reference"?: ((string) | (null));
    /**
     * Buyer-facing name captured from the chosen method. anyOf[1] (Value): string. Buyer-facing
     * name captured from the chosen method. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Always present with an API key or dashboard credential. Null when the choice has no order
     * charge. anyOf[1] (Value): string. Always present with an API key or dashboard credential.
     * Null when the choice has no order charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     * anyOf[2] (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * ID of the order this delivery choice belongs to, including the parent of order_charge_id
     * when a charge applies. anyOf[1] (Value): string. ID of the order this delivery choice
     * belongs to, including the parent of order_charge_id when a charge applies. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Pickup Location and collection details, present for pickup choices. anyOf[1] (Value): {@link
     * DeliveryPickupDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "pickup"?: ((DeliveryPickupDetailsPreviousAttributes) | (null));
    /**
     * Shipping service details, present for shipment choices. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "shipment"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null));
    /**
     * Key identifying the same items and allowed delivery types across quotes. anyOf[1] (Value):
     * string. Key identifying the same items and allowed delivery types across quotes. anyOf[2]
     * (Value): null.
     */
    "stable_key"?: ((string) | (null));
    /**
     * Always present with an API key or dashboard credential. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * IANA timezone for displaying window_start_at and window_end_at. anyOf[1] (Value): string.
     * IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York".
     * anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Delivery price after discounts and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery".
     * anyOf[1] (Value): string. How this choice delivers the items. Value enum: "shipment",
     * "pickup", "local_delivery". anyOf[2] (Value): null.
     */
    "type"?: (("shipment" | "pickup" | "local_delivery" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_end_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_start_at"?: ((string) | (null));
};
export type DeliverySelectionCommittedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "buyer_location"?: DeliveryBuyerLocationResource;
            "calculation_expires_at"?: string;
            "checkout_session_id"?: string;
            "choices": Array<DeliverySelectionChoiceResource>;
            "created_at"?: string;
            "delivery_quote_id": string;
            "delivery_selection_id": string;
            "destination_address"?: Address;
            "expires_at": string;
            "input_requirements": Array<DeliveryInputRequirement>;
            "instructions"?: string;
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            "lifecycle_updated_at"?: string;
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            "order_id"?: string;
            "private_data_status"?: "available" | "redacted" | (string & {});
            "recipient"?: DeliveryRecipientResource;
            "redacted_at"?: string;
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            "calculation_expires_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "delivery_quote_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            "expires_at"?: ((string) | (null));
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            "instructions"?: ((string) | (null));
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            "lifecycle_updated_at"?: ((string) | (null));
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            "order_id"?: ((string) | (null));
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            "redacted_at"?: ((string) | (null));
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_selection.committed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "buyer_location"?: DeliveryBuyerLocationResource;
            "calculation_expires_at"?: string;
            "checkout_session_id"?: string;
            "choices": Array<DeliverySelectionChoiceResource>;
            "created_at"?: string;
            "delivery_quote_id": string;
            "delivery_selection_id": string;
            "destination_address"?: Address;
            "expires_at": string;
            "input_requirements": Array<DeliveryInputRequirement>;
            "instructions"?: string;
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            "lifecycle_updated_at"?: string;
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            "order_id"?: string;
            "private_data_status"?: "available" | "redacted" | (string & {});
            "recipient"?: DeliveryRecipientResource;
            "redacted_at"?: string;
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            "calculation_expires_at"?: ((string) | (null));
            "checkout_session_id"?: ((string) | (null));
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "delivery_quote_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            "expires_at"?: ((string) | (null));
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            "instructions"?: ((string) | (null));
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            "lifecycle_updated_at"?: ((string) | (null));
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            "order_id"?: ((string) | (null));
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            "redacted_at"?: ((string) | (null));
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_selection.committed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_selection.committed";
});
/**
 * The `delivery_selection.committed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliverySelectionCommittedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Delivery charge
     * committed by this selection. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.buyer_location (Optional): {@link DeliveryBuyerLocationResource}.
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     * object.calculation_expires_at (Optional): string. Deadline after which calculated pricing
     * evidence is no longer valid. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.checkout_session_id (Optional): string.
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.choices (Required): Array of
     * {@link DeliverySelectionChoiceResource}. One chosen option for each required choice group.
     * object.choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery option chosen
     * for one choice group in a delivery selection, with its method, amounts, type-specific
     * details, timezone, and any chosen delivery window. object.created_at (Optional): string.
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_quote_id (Required):
     * string. Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * object.delivery_selection_id (Required): string. Stable delivery selection ID. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.destination_address (Optional): {@link Address}.
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. object.expires_at (Required):
     * string. Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.input_requirements (Required): Array of
     * {@link DeliveryInputRequirement}. Inputs this selection still needs before payment: each
     * destination_address member a chosen shipment or local delivery needs that the stored address
     * lacks (line1, city, and country, plus state and postal_code in the US), and each recipient
     * field a chosen option requires that the selection does not include. Each entry repeats the
     * quote's requirement for that option, with the same delivery_input_requirement_id. Payment
     * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection
     * reference until a new delivery selection includes them. Empty when nothing is missing, and
     * always empty unless status is selected. object.input_requirements[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint. object.instructions (Optional):
     * string. Buyer-provided delivery instructions. Returned with an API key or dashboard
     * credential. object.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResource}. Ordered lifecycle events recorded for this
     * selection. object.lifecycle_events[] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened. object.lifecycle_updated_at
     * (Optional): string. Time the selection lifecycle last changed. Always present with an API
     * key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
     * earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection
     * lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always
     * present with an API key or dashboard credential. - `selection_guarantee_expiry`: The
     * earliest guarantee among the chosen options and delivery windows comes first. When the
     * selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The
     * calculation the selection was priced against expires first. It ends no later than the
     * checkout session's expires_at, and earlier when an applied promotion ends first. -
     * `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can
     * last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime". object.order_id (Optional): string.
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.private_data_status (Optional): string.
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted". object.recipient (Optional): {@link DeliveryRecipientResource}. Recipient
     * details captured with the selection. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. The person receiving a delivery selection, with
     * optional `name`, `email`, and `phone`. object.redacted_at (Optional): string. Time
     * merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current selection lifecycle
     * status. - `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". object.supported_actions (Required): Array of string.
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release".
     * object.supported_actions[] (Value): string. Value enum: "release". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.amount_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Delivery charge committed by this
     * selection. previous_attributes.amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_location (Optional): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used to
     * evaluate pickup proximity. Returned with an API key or dashboard credential.
     * previous_attributes.buyer_location.anyOf[1] (Value): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes}.
     * previous_attributes.buyer_location.anyOf[2] (Value): null.
     * previous_attributes.calculation_expires_at (Optional): string or null. Deadline after which
     * calculated pricing evidence is no longer valid. Always present with an API key or dashboard
     * credential. previous_attributes.calculation_expires_at.anyOf[1] (Value): string. Deadline
     * after which calculated pricing evidence is no longer valid. Always present with an API key
     * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.calculation_expires_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. Checkout session that
     * owns the selection. Always present with an API key or dashboard credential.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. Checkout session that owns
     * the selection. Always present with an API key or dashboard credential. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.choices (Optional): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes} or null. One chosen option for each
     * required choice group. previous_attributes.choices.anyOf[1] (Value): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each required
     * choice group. previous_attributes.choices.anyOf[1][] (Value): {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. previous_attributes.choices.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the selection
     * was created. Always present with an API key or dashboard credential.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the selection was created.
     * Always present with an API key or dashboard credential. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.delivery_quote_id (Optional): string or null. Quote from which this
     * selection was made. previous_attributes.delivery_quote_id.anyOf[1] (Value): string. Quote
     * from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * previous_attributes.delivery_quote_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Stable delivery
     * selection ID. previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Stable
     * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.destination_address (Optional): {@link AddressPreviousAttributes} or
     * null. Destination address snapshot used for delivery evaluation. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified.
     * previous_attributes.destination_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.destination_address.anyOf[2] (Value): null.
     * previous_attributes.expires_at (Optional): string or null. Deadline after which this
     * provisional selection can no longer be committed. previous_attributes.expires_at.anyOf[1]
     * (Value): string. Deadline after which this provisional selection can no longer be committed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2]
     * (Value): null. previous_attributes.input_requirements (Optional): Array of {@link
     * DeliveryInputRequirementPreviousAttributes} or null. Inputs this selection still needs
     * before payment: each destination_address member a chosen shipment or local delivery needs
     * that the stored address lacks (line1, city, and country, plus state and postal_code in the
     * US), and each recipient field a chosen option requires that the selection does not include.
     * Each entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1] (Value): Array of {@link
     * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
     * payment: each destination_address member a chosen shipment or local delivery needs that the
     * stored address lacks (line1, city, and country, plus state and postal_code in the US), and
     * each recipient field a chosen option requires that the selection does not include. Each
     * entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1][] (Value): {@link
     * DeliveryInputRequirementPreviousAttributes}. previous_attributes.input_requirements.anyOf[2]
     * (Value): null. previous_attributes.instructions (Optional): string or null. Buyer-provided
     * delivery instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[1] (Value): string. Buyer-provided delivery
     * instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1] (Value): Array of
     * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1][] (Value): {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes}.
     * previous_attributes.lifecycle_events.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_updated_at (Optional): string or null. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential.
     * previous_attributes.lifecycle_updated_at.anyOf[1] (Value): string. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.lifecycle_updated_at.anyOf[2] (Value): null.
     * previous_attributes.limiting_deadline_reason (Optional): string or null. The deadline that
     * set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and
     * the maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set
     * expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the
     * maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order affected by the selection.
     * Always present with an API key or dashboard credential.
     * previous_attributes.order_id.anyOf[1] (Value): string. Order affected by the selection.
     * Always present with an API key or dashboard credential. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.private_data_status (Optional): string or null. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[1] (Value): string. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[2] (Value): null.
     * previous_attributes.recipient (Optional): {@link
     * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with the
     * selection. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. previous_attributes.recipient.anyOf[1] (Value): {@link
     * DeliveryRecipientResourcePreviousAttributes}. previous_attributes.recipient.anyOf[2]
     * (Value): null. previous_attributes.redacted_at (Optional): string or null. Time
     * merchant-private selection evidence was redacted. previous_attributes.redacted_at.anyOf[1]
     * (Value): string. Time merchant-private selection evidence was redacted. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.redacted_at.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current selection lifecycle status. -
     * `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". previous_attributes.status.anyOf[1] (Value): string.
     * Current selection lifecycle status. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains release while status is selected and the
     * selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains release
     * while status is selected and the selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Delivery charge committed by this
         * selection. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. buyer_location (Optional): {@link DeliveryBuyerLocationResource}. Buyer location
         * snapshot used to evaluate pickup proximity. Returned with an API key or dashboard
         * credential. The normalized buyer address or coordinate used for this quote.
         * calculation_expires_at (Optional): string. Deadline after which calculated pricing
         * evidence is no longer valid. Always present with an API key or dashboard credential.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id (Optional):
         * string. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". choices (Required):
         * Array of {@link DeliverySelectionChoiceResource}. One chosen option for each required
         * choice group. choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery
         * option chosen for one choice group in a delivery selection, with its method, amounts,
         * type-specific details, timezone, and any chosen delivery window. created_at (Optional):
         * string. Time the selection was created. Always present with an API key or dashboard
         * credential. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_quote_id
         * (Required): string. Quote from which this selection was made. Example:
         * "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_selection_id (Required): string. Stable
         * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". destination_address
         * (Optional): {@link Address}. Destination address snapshot used for delivery evaluation.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. expires_at (Required): string. Deadline after which this
         * provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". input_requirements (Required): Array of {@link
         * DeliveryInputRequirement}. Inputs this selection still needs before payment: each
         * destination_address member a chosen shipment or local delivery needs that the stored
         * address lacks (line1, city, and country, plus state and postal_code in the US), and each
         * recipient field a chosen option requires that the selection does not include. Each entry
         * repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements[] (Value): {@link DeliveryInputRequirement}. An input a
         * delivery method needs, such as an address field or time window, with its `field_path`,
         * purpose, and constraint. instructions (Optional): string. Buyer-provided delivery
         * instructions. Returned with an API key or dashboard credential. lifecycle_events
         * (Optional): Array of {@link DeliverySelectionLifecycleEventResource}. Ordered lifecycle
         * events recorded for this selection. lifecycle_events[] (Value): {@link
         * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
         * history, with the new `status`, the `reason`, and when it happened. lifecycle_updated_at
         * (Optional): string. Time the selection lifecycle last changed. Always present with an
         * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * order_id (Optional): string. Order affected by the selection. Always present with an API
         * key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * private_data_status (Optional): string. Availability state of merchant-private selection
         * evidence. Value enum: "available", "redacted". recipient (Optional): {@link
         * DeliveryRecipientResource}. Recipient details captured with the selection. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified. The
         * person receiving a delivery selection, with optional `name`, `email`, and `phone`.
         * redacted_at (Optional): string. Time merchant-private selection evidence was redacted.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required): string. Current
         * selection lifecycle status. - `selected`: These choices are provisional and can be
         * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices.
         * They are frozen until payment finishes. - `committed`: Payment fixed these choices on
         * the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
         * selection is no longer usable because its deadline passed. - `released`: These choices
         * were withdrawn. Create a new selection before paying for delivery. Value enum:
         * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
         * supported_actions (Required): Array of string. Contains release while status is selected
         * and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release".
         */
        "object": {
            /**
             * Delivery charge committed by this selection. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. The normalized buyer address or coordinate used for this
             * quote.
             */
            "buyer_location"?: DeliveryBuyerLocationResource;
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "calculation_expires_at"?: string;
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * One chosen option for each required choice group. [] (Value): {@link
             * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
             * delivery selection, with its method, amounts, type-specific details, timezone, and
             * any chosen delivery window.
             */
            "choices": Array<DeliverySelectionChoiceResource>;
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
             */
            "delivery_quote_id": string;
            /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
            "delivery_selection_id": string;
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country.
             */
            "destination_address"?: Address;
            /**
             * Deadline after which this provisional selection can no longer be committed. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string;
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. [] (Value):
             * {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
             * address field or time window, with its `field_path`, purpose, and constraint.
             */
            "input_requirements": Array<DeliveryInputRequirement>;
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential.
             */
            "instructions"?: string;
            /**
             * Ordered lifecycle events recorded for this selection. [] (Value): {@link
             * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
             * history, with the new `status`, the `reason`, and when it happened.
             */
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "lifecycle_updated_at"?: string;
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             */
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted".
             */
            "private_data_status"?: "available" | "redacted" | (string & {});
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. The person
             * receiving a delivery selection, with optional `name`, `email`, and `phone`.
             */
            "recipient"?: DeliveryRecipientResource;
            /**
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "redacted_at"?: string;
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released".
             */
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". [] (Value): string. Value enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. amount_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Delivery charge committed by this selection.
         * amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. buyer_location (Optional): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used
         * to evaluate pickup proximity. Returned with an API key or dashboard credential.
         * buyer_location.anyOf[1] (Value): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes}. buyer_location.anyOf[2] (Value): null.
         * calculation_expires_at (Optional): string or null. Deadline after which calculated
         * pricing evidence is no longer valid. Always present with an API key or dashboard
         * credential. calculation_expires_at.anyOf[1] (Value): string. Deadline after which
         * calculated pricing evidence is no longer valid. Always present with an API key or
         * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * calculation_expires_at.anyOf[2] (Value): null. checkout_session_id (Optional): string or
         * null. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. checkout_session_id.anyOf[1] (Value): string. Checkout session
         * that owns the selection. Always present with an API key or dashboard credential.
         * Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * choices (Optional): Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}
         * or null. One chosen option for each required choice group. choices.anyOf[1] (Value):
         * Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option
         * for each required choice group. choices.anyOf[1][] (Value): {@link
         * DeliverySelectionChoiceResourcePreviousAttributes}. choices.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the selection was created. Always present
         * with an API key or dashboard credential. created_at.anyOf[1] (Value): string. Time the
         * selection was created. Always present with an API key or dashboard credential. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * delivery_quote_id (Optional): string or null. Quote from which this selection was made.
         * delivery_quote_id.anyOf[1] (Value): string. Quote from which this selection was made.
         * Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_quote_id.anyOf[2] (Value): null.
         * delivery_selection_id (Optional): string or null. Stable delivery selection ID.
         * delivery_selection_id.anyOf[1] (Value): string. Stable delivery selection ID. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value): null.
         * destination_address (Optional): {@link AddressPreviousAttributes} or null. Destination
         * address snapshot used for delivery evaluation. Omitted for a checkout session credential
         * that doesn't act for the customer the buyer verified. destination_address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. destination_address.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. Deadline after which this provisional selection
         * can no longer be committed. expires_at.anyOf[1] (Value): string. Deadline after which
         * this provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. input_requirements
         * (Optional): Array of {@link DeliveryInputRequirementPreviousAttributes} or null. Inputs
         * this selection still needs before payment: each destination_address member a chosen
         * shipment or local delivery needs that the stored address lacks (line1, city, and
         * country, plus state and postal_code in the US), and each recipient field a chosen option
         * requires that the selection does not include. Each entry repeats the quote's requirement
         * for that option, with the same delivery_input_requirement_id. Payment fails with
         * ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference
         * until a new delivery selection includes them. Empty when nothing is missing, and always
         * empty unless status is selected. input_requirements.anyOf[1] (Value): Array of {@link
         * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
         * payment: each destination_address member a chosen shipment or local delivery needs that
         * the stored address lacks (line1, city, and country, plus state and postal_code in the
         * US), and each recipient field a chosen option requires that the selection does not
         * include. Each entry repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements.anyOf[1][] (Value): {@link
         * DeliveryInputRequirementPreviousAttributes}. input_requirements.anyOf[2] (Value): null.
         * instructions (Optional): string or null. Buyer-provided delivery instructions. Returned
         * with an API key or dashboard credential. instructions.anyOf[1] (Value): string.
         * Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
         * instructions.anyOf[2] (Value): null. lifecycle_events (Optional): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle
         * events recorded for this selection. lifecycle_events.anyOf[1] (Value): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
         * recorded for this selection. lifecycle_events.anyOf[1][] (Value): {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. lifecycle_events.anyOf[2]
         * (Value): null. lifecycle_updated_at (Optional): string or null. Time the selection
         * lifecycle last changed. Always present with an API key or dashboard credential.
         * lifecycle_updated_at.anyOf[1] (Value): string. Time the selection lifecycle last
         * changed. Always present with an API key or dashboard credential. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". lifecycle_updated_at.anyOf[2] (Value): null.
         * limiting_deadline_reason (Optional): string or null. The deadline that set expires_at:
         * the earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Order affected by the selection. Always present with an API key or dashboard credential.
         * order_id.anyOf[1] (Value): string. Order affected by the selection. Always present with
         * an API key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. private_data_status (Optional): string or null.
         * Availability state of merchant-private selection evidence. Value enum: "available",
         * "redacted". private_data_status.anyOf[1] (Value): string. Availability state of
         * merchant-private selection evidence. Value enum: "available", "redacted".
         * private_data_status.anyOf[2] (Value): null. recipient (Optional): {@link
         * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with
         * the selection. Omitted for a checkout session credential that doesn't act for the
         * customer the buyer verified. recipient.anyOf[1] (Value): {@link
         * DeliveryRecipientResourcePreviousAttributes}. recipient.anyOf[2] (Value): null.
         * redacted_at (Optional): string or null. Time merchant-private selection evidence was
         * redacted. redacted_at.anyOf[1] (Value): string. Time merchant-private selection evidence
         * was redacted. Format: date-time. Example: "2026-08-02T16:00:00Z". redacted_at.anyOf[2]
         * (Value): null. status (Optional): string or null. Current selection lifecycle status. -
         * `selected`: These choices are provisional and can be replaced before payment. -
         * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
         * payment finishes. - `committed`: Payment fixed these choices on the order. -
         * `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
         * longer usable because its deadline passed. - `released`: These choices were withdrawn.
         * Create a new selection before paying for delivery. Value enum: "selected",
         * "locked_for_payment", "committed", "superseded", "expired", "released". status.anyOf[1]
         * (Value): string. Current selection lifecycle status. - `selected`: These choices are
         * provisional and can be replaced before payment. - `locked_for_payment`: A payment
         * attempt owns these choices. They are frozen until payment finishes. - `committed`:
         * Payment fixed these choices on the order. - `superseded`: A newer selection replaced
         * these choices. - `expired`: The selection is no longer usable because its deadline
         * passed. - `released`: These choices were withdrawn. Create a new selection before paying
         * for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
         * "expired", "released". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Contains release while status is selected and the selection
         * belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1] (Value): Array of string. Contains release while status is
         * selected and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "release".
         * supported_actions.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Delivery charge committed by this selection. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. anyOf[1] (Value): {@link
             * DeliveryBuyerLocationResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. anyOf[1] (Value): string. Deadline after
             * which calculated pricing evidence is no longer valid. Always present with an API key
             * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "calculation_expires_at"?: ((string) | (null));
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Checkout session that owns the
             * selection. Always present with an API key or dashboard credential. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * One chosen option for each required choice group. anyOf[1] (Value): Array of {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each
             * required choice group. anyOf[1][] (Value): {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Time the selection was created. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Quote from which this selection was made. anyOf[1] (Value): string. Quote from which
             * this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". anyOf[2]
             * (Value): null.
             */
            "delivery_quote_id"?: ((string) | (null));
            /**
             * Stable delivery selection ID. anyOf[1] (Value): string. Stable delivery selection
             * ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * Deadline after which this provisional selection can no longer be committed. anyOf[1]
             * (Value): string. Deadline after which this provisional selection can no longer be
             * committed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1]
             * (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs this
             * selection still needs before payment: each destination_address member a chosen
             * shipment or local delivery needs that the stored address lacks (line1, city, and
             * country, plus state and postal_code in the US), and each recipient field a chosen
             * option requires that the selection does not include. Each entry repeats the quote's
             * requirement for that option, with the same delivery_input_requirement_id. Payment
             * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1][]
             * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential. anyOf[1] (Value): string. Buyer-provided delivery instructions. Returned
             * with an API key or dashboard credential. anyOf[2] (Value): null.
             */
            "instructions"?: ((string) | (null));
            /**
             * Ordered lifecycle events recorded for this selection. anyOf[1] (Value): Array of
             * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle
             * events recorded for this selection. anyOf[1][] (Value): {@link
             * DeliverySelectionLifecycleEventResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Time the selection lifecycle last
             * changed. Always present with an API key or dashboard credential. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "lifecycle_updated_at"?: ((string) | (null));
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             * anyOf[1] (Value): string. The deadline that set expires_at: the earliest of the
             * chosen options' guarantee, the calculation expiry, and the maximum selection
             * lifetime. A tie between the calculation and the guarantee reports
             * calculation_expiry. Always present with an API key or dashboard credential. -
             * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
             * delivery windows comes first. When the selection holds stock, the hold ends at this
             * deadline too. - `calculation_expiry`: The calculation the selection was priced
             * against expires first. It ends no later than the checkout session's expires_at, and
             * earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The
             * selection reaches the longest a provisional selection can last, 24 hours after it
             * was created. Value enum: "selection_guarantee_expiry", "calculation_expiry",
             * "selection_maximum_lifetime". anyOf[2] (Value): null.
             */
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Order affected by the selection. Always
             * present with an API key or dashboard credential. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted". anyOf[1] (Value): string. Availability state of merchant-private
             * selection evidence. Value enum: "available", "redacted". anyOf[2] (Value): null.
             */
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. anyOf[1] (Value):
             * {@link DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            /**
             * Time merchant-private selection evidence was redacted. anyOf[1] (Value): string.
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "redacted_at"?: ((string) | (null));
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released". anyOf[1] (Value): string. Current selection lifecycle status.
             * - `selected`: These choices are provisional and can be replaced before payment. -
             * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
             * payment finishes. - `committed`: Payment fixed these choices on the order. -
             * `superseded`: A newer selection replaced these choices. - `expired`: The selection
             * is no longer usable because its deadline passed. - `released`: These choices were
             * withdrawn. Create a new selection before paying for delivery. Value enum:
             * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
             * anyOf[2] (Value): null.
             */
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". anyOf[1] (Value): Array of string. Contains release while status is
             * selected and the selection belongs to a checkout session: POST
             * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
             * Empty in every other status. Independent of caller permissions. [] enum: "release".
             * anyOf[1][] (Value): string. Value enum: "release". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
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
 * The `delivery_selection.committed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliverySelectionCommittedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Delivery charge
     * committed by this selection. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.buyer_location (Optional): {@link DeliveryBuyerLocationResource}.
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     * object.calculation_expires_at (Optional): string. Deadline after which calculated pricing
     * evidence is no longer valid. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.checkout_session_id (Optional): string.
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.choices (Required): Array of
     * {@link DeliverySelectionChoiceResource}. One chosen option for each required choice group.
     * object.choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery option chosen
     * for one choice group in a delivery selection, with its method, amounts, type-specific
     * details, timezone, and any chosen delivery window. object.created_at (Optional): string.
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_quote_id (Required):
     * string. Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * object.delivery_selection_id (Required): string. Stable delivery selection ID. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.destination_address (Optional): {@link Address}.
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. object.expires_at (Required):
     * string. Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.input_requirements (Required): Array of
     * {@link DeliveryInputRequirement}. Inputs this selection still needs before payment: each
     * destination_address member a chosen shipment or local delivery needs that the stored address
     * lacks (line1, city, and country, plus state and postal_code in the US), and each recipient
     * field a chosen option requires that the selection does not include. Each entry repeats the
     * quote's requirement for that option, with the same delivery_input_requirement_id. Payment
     * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection
     * reference until a new delivery selection includes them. Empty when nothing is missing, and
     * always empty unless status is selected. object.input_requirements[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint. object.instructions (Optional):
     * string. Buyer-provided delivery instructions. Returned with an API key or dashboard
     * credential. object.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResource}. Ordered lifecycle events recorded for this
     * selection. object.lifecycle_events[] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened. object.lifecycle_updated_at
     * (Optional): string. Time the selection lifecycle last changed. Always present with an API
     * key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
     * earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection
     * lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always
     * present with an API key or dashboard credential. - `selection_guarantee_expiry`: The
     * earliest guarantee among the chosen options and delivery windows comes first. When the
     * selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The
     * calculation the selection was priced against expires first. It ends no later than the
     * checkout session's expires_at, and earlier when an applied promotion ends first. -
     * `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can
     * last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime". object.order_id (Optional): string.
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.private_data_status (Optional): string.
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted". object.recipient (Optional): {@link DeliveryRecipientResource}. Recipient
     * details captured with the selection. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. The person receiving a delivery selection, with
     * optional `name`, `email`, and `phone`. object.redacted_at (Optional): string. Time
     * merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current selection lifecycle
     * status. - `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". object.supported_actions (Required): Array of string.
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release".
     * object.supported_actions[] (Value): string. Value enum: "release". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events. previous_attributes.amount_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Delivery charge committed by this
     * selection. previous_attributes.amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.amount_money.anyOf[2] (Value): null.
     * previous_attributes.buyer_location (Optional): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used to
     * evaluate pickup proximity. Returned with an API key or dashboard credential.
     * previous_attributes.buyer_location.anyOf[1] (Value): {@link
     * DeliveryBuyerLocationResourcePreviousAttributes}.
     * previous_attributes.buyer_location.anyOf[2] (Value): null.
     * previous_attributes.calculation_expires_at (Optional): string or null. Deadline after which
     * calculated pricing evidence is no longer valid. Always present with an API key or dashboard
     * credential. previous_attributes.calculation_expires_at.anyOf[1] (Value): string. Deadline
     * after which calculated pricing evidence is no longer valid. Always present with an API key
     * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.calculation_expires_at.anyOf[2] (Value): null.
     * previous_attributes.checkout_session_id (Optional): string or null. Checkout session that
     * owns the selection. Always present with an API key or dashboard credential.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. Checkout session that owns
     * the selection. Always present with an API key or dashboard credential. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". previous_attributes.checkout_session_id.anyOf[2] (Value):
     * null. previous_attributes.choices (Optional): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes} or null. One chosen option for each
     * required choice group. previous_attributes.choices.anyOf[1] (Value): Array of {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each required
     * choice group. previous_attributes.choices.anyOf[1][] (Value): {@link
     * DeliverySelectionChoiceResourcePreviousAttributes}. previous_attributes.choices.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the selection
     * was created. Always present with an API key or dashboard credential.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the selection was created.
     * Always present with an API key or dashboard credential. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.delivery_quote_id (Optional): string or null. Quote from which this
     * selection was made. previous_attributes.delivery_quote_id.anyOf[1] (Value): string. Quote
     * from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * previous_attributes.delivery_quote_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Stable delivery
     * selection ID. previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Stable
     * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * previous_attributes.delivery_selection_id.anyOf[2] (Value): null.
     * previous_attributes.destination_address (Optional): {@link AddressPreviousAttributes} or
     * null. Destination address snapshot used for delivery evaluation. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified.
     * previous_attributes.destination_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
     * previous_attributes.destination_address.anyOf[2] (Value): null.
     * previous_attributes.expires_at (Optional): string or null. Deadline after which this
     * provisional selection can no longer be committed. previous_attributes.expires_at.anyOf[1]
     * (Value): string. Deadline after which this provisional selection can no longer be committed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2]
     * (Value): null. previous_attributes.input_requirements (Optional): Array of {@link
     * DeliveryInputRequirementPreviousAttributes} or null. Inputs this selection still needs
     * before payment: each destination_address member a chosen shipment or local delivery needs
     * that the stored address lacks (line1, city, and country, plus state and postal_code in the
     * US), and each recipient field a chosen option requires that the selection does not include.
     * Each entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1] (Value): Array of {@link
     * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
     * payment: each destination_address member a chosen shipment or local delivery needs that the
     * stored address lacks (line1, city, and country, plus state and postal_code in the US), and
     * each recipient field a chosen option requires that the selection does not include. Each
     * entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * previous_attributes.input_requirements.anyOf[1][] (Value): {@link
     * DeliveryInputRequirementPreviousAttributes}. previous_attributes.input_requirements.anyOf[2]
     * (Value): null. previous_attributes.instructions (Optional): string or null. Buyer-provided
     * delivery instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[1] (Value): string. Buyer-provided delivery
     * instructions. Returned with an API key or dashboard credential.
     * previous_attributes.instructions.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1] (Value): Array of
     * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
     * recorded for this selection. previous_attributes.lifecycle_events.anyOf[1][] (Value): {@link
     * DeliverySelectionLifecycleEventResourcePreviousAttributes}.
     * previous_attributes.lifecycle_events.anyOf[2] (Value): null.
     * previous_attributes.lifecycle_updated_at (Optional): string or null. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential.
     * previous_attributes.lifecycle_updated_at.anyOf[1] (Value): string. Time the selection
     * lifecycle last changed. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.lifecycle_updated_at.anyOf[2] (Value): null.
     * previous_attributes.limiting_deadline_reason (Optional): string or null. The deadline that
     * set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and
     * the maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set
     * expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the
     * maximum selection lifetime. A tie between the calculation and the guarantee reports
     * calculation_expiry. Always present with an API key or dashboard credential. -
     * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery
     * windows comes first. When the selection holds stock, the hold ends at this deadline too. -
     * `calculation_expiry`: The calculation the selection was priced against expires first. It
     * ends no later than the checkout session's expires_at, and earlier when an applied promotion
     * ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional
     * selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime".
     * previous_attributes.limiting_deadline_reason.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order affected by the selection.
     * Always present with an API key or dashboard credential.
     * previous_attributes.order_id.anyOf[1] (Value): string. Order affected by the selection.
     * Always present with an API key or dashboard credential. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.private_data_status (Optional): string or null. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[1] (Value): string. Availability state of
     * merchant-private selection evidence. Value enum: "available", "redacted".
     * previous_attributes.private_data_status.anyOf[2] (Value): null.
     * previous_attributes.recipient (Optional): {@link
     * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with the
     * selection. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. previous_attributes.recipient.anyOf[1] (Value): {@link
     * DeliveryRecipientResourcePreviousAttributes}. previous_attributes.recipient.anyOf[2]
     * (Value): null. previous_attributes.redacted_at (Optional): string or null. Time
     * merchant-private selection evidence was redacted. previous_attributes.redacted_at.anyOf[1]
     * (Value): string. Time merchant-private selection evidence was redacted. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.redacted_at.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current selection lifecycle status. -
     * `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". previous_attributes.status.anyOf[1] (Value): string.
     * Current selection lifecycle status. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Contains release while status is selected and the
     * selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Contains release
     * while status is selected and the selection belongs to a checkout session: POST
     * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty
     * in every other status. Independent of caller permissions. [] enum: "release".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Delivery charge committed by this
         * selection. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. buyer_location (Optional): {@link DeliveryBuyerLocationResource}. Buyer location
         * snapshot used to evaluate pickup proximity. Returned with an API key or dashboard
         * credential. The normalized buyer address or coordinate used for this quote.
         * calculation_expires_at (Optional): string. Deadline after which calculated pricing
         * evidence is no longer valid. Always present with an API key or dashboard credential.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id (Optional):
         * string. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". choices (Required):
         * Array of {@link DeliverySelectionChoiceResource}. One chosen option for each required
         * choice group. choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery
         * option chosen for one choice group in a delivery selection, with its method, amounts,
         * type-specific details, timezone, and any chosen delivery window. created_at (Optional):
         * string. Time the selection was created. Always present with an API key or dashboard
         * credential. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_quote_id
         * (Required): string. Quote from which this selection was made. Example:
         * "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_selection_id (Required): string. Stable
         * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". destination_address
         * (Optional): {@link Address}. Destination address snapshot used for delivery evaluation.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. expires_at (Required): string. Deadline after which this
         * provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". input_requirements (Required): Array of {@link
         * DeliveryInputRequirement}. Inputs this selection still needs before payment: each
         * destination_address member a chosen shipment or local delivery needs that the stored
         * address lacks (line1, city, and country, plus state and postal_code in the US), and each
         * recipient field a chosen option requires that the selection does not include. Each entry
         * repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements[] (Value): {@link DeliveryInputRequirement}. An input a
         * delivery method needs, such as an address field or time window, with its `field_path`,
         * purpose, and constraint. instructions (Optional): string. Buyer-provided delivery
         * instructions. Returned with an API key or dashboard credential. lifecycle_events
         * (Optional): Array of {@link DeliverySelectionLifecycleEventResource}. Ordered lifecycle
         * events recorded for this selection. lifecycle_events[] (Value): {@link
         * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
         * history, with the new `status`, the `reason`, and when it happened. lifecycle_updated_at
         * (Optional): string. Time the selection lifecycle last changed. Always present with an
         * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * order_id (Optional): string. Order affected by the selection. Always present with an API
         * key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * private_data_status (Optional): string. Availability state of merchant-private selection
         * evidence. Value enum: "available", "redacted". recipient (Optional): {@link
         * DeliveryRecipientResource}. Recipient details captured with the selection. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified. The
         * person receiving a delivery selection, with optional `name`, `email`, and `phone`.
         * redacted_at (Optional): string. Time merchant-private selection evidence was redacted.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required): string. Current
         * selection lifecycle status. - `selected`: These choices are provisional and can be
         * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices.
         * They are frozen until payment finishes. - `committed`: Payment fixed these choices on
         * the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
         * selection is no longer usable because its deadline passed. - `released`: These choices
         * were withdrawn. Create a new selection before paying for delivery. Value enum:
         * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
         * supported_actions (Required): Array of string. Contains release while status is selected
         * and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release".
         */
        "object": {
            /**
             * Delivery charge committed by this selection. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. The normalized buyer address or coordinate used for this
             * quote.
             */
            "buyer_location"?: DeliveryBuyerLocationResource;
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "calculation_expires_at"?: string;
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * One chosen option for each required choice group. [] (Value): {@link
             * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
             * delivery selection, with its method, amounts, type-specific details, timezone, and
             * any chosen delivery window.
             */
            "choices": Array<DeliverySelectionChoiceResource>;
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
             */
            "delivery_quote_id": string;
            /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
            "delivery_selection_id": string;
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country.
             */
            "destination_address"?: Address;
            /**
             * Deadline after which this provisional selection can no longer be committed. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string;
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. [] (Value):
             * {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
             * address field or time window, with its `field_path`, purpose, and constraint.
             */
            "input_requirements": Array<DeliveryInputRequirement>;
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential.
             */
            "instructions"?: string;
            /**
             * Ordered lifecycle events recorded for this selection. [] (Value): {@link
             * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
             * history, with the new `status`, the `reason`, and when it happened.
             */
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "lifecycle_updated_at"?: string;
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             */
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted".
             */
            "private_data_status"?: "available" | "redacted" | (string & {});
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. The person
             * receiving a delivery selection, with optional `name`, `email`, and `phone`.
             */
            "recipient"?: DeliveryRecipientResource;
            /**
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "redacted_at"?: string;
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released".
             */
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". [] (Value): string. Value enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. amount_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Delivery charge committed by this selection.
         * amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * amount_money.anyOf[2] (Value): null. buyer_location (Optional): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes} or null. Buyer location snapshot used
         * to evaluate pickup proximity. Returned with an API key or dashboard credential.
         * buyer_location.anyOf[1] (Value): {@link
         * DeliveryBuyerLocationResourcePreviousAttributes}. buyer_location.anyOf[2] (Value): null.
         * calculation_expires_at (Optional): string or null. Deadline after which calculated
         * pricing evidence is no longer valid. Always present with an API key or dashboard
         * credential. calculation_expires_at.anyOf[1] (Value): string. Deadline after which
         * calculated pricing evidence is no longer valid. Always present with an API key or
         * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * calculation_expires_at.anyOf[2] (Value): null. checkout_session_id (Optional): string or
         * null. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. checkout_session_id.anyOf[1] (Value): string. Checkout session
         * that owns the selection. Always present with an API key or dashboard credential.
         * Example: "cs_01KEZF7C004JRWFW43H037MQRN". checkout_session_id.anyOf[2] (Value): null.
         * choices (Optional): Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}
         * or null. One chosen option for each required choice group. choices.anyOf[1] (Value):
         * Array of {@link DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option
         * for each required choice group. choices.anyOf[1][] (Value): {@link
         * DeliverySelectionChoiceResourcePreviousAttributes}. choices.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the selection was created. Always present
         * with an API key or dashboard credential. created_at.anyOf[1] (Value): string. Time the
         * selection was created. Always present with an API key or dashboard credential. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * delivery_quote_id (Optional): string or null. Quote from which this selection was made.
         * delivery_quote_id.anyOf[1] (Value): string. Quote from which this selection was made.
         * Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_quote_id.anyOf[2] (Value): null.
         * delivery_selection_id (Optional): string or null. Stable delivery selection ID.
         * delivery_selection_id.anyOf[1] (Value): string. Stable delivery selection ID. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value): null.
         * destination_address (Optional): {@link AddressPreviousAttributes} or null. Destination
         * address snapshot used for delivery evaluation. Omitted for a checkout session credential
         * that doesn't act for the customer the buyer verified. destination_address.anyOf[1]
         * (Value): {@link AddressPreviousAttributes}. destination_address.anyOf[2] (Value): null.
         * expires_at (Optional): string or null. Deadline after which this provisional selection
         * can no longer be committed. expires_at.anyOf[1] (Value): string. Deadline after which
         * this provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. input_requirements
         * (Optional): Array of {@link DeliveryInputRequirementPreviousAttributes} or null. Inputs
         * this selection still needs before payment: each destination_address member a chosen
         * shipment or local delivery needs that the stored address lacks (line1, city, and
         * country, plus state and postal_code in the US), and each recipient field a chosen option
         * requires that the selection does not include. Each entry repeats the quote's requirement
         * for that option, with the same delivery_input_requirement_id. Payment fails with
         * ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference
         * until a new delivery selection includes them. Empty when nothing is missing, and always
         * empty unless status is selected. input_requirements.anyOf[1] (Value): Array of {@link
         * DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before
         * payment: each destination_address member a chosen shipment or local delivery needs that
         * the stored address lacks (line1, city, and country, plus state and postal_code in the
         * US), and each recipient field a chosen option requires that the selection does not
         * include. Each entry repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements.anyOf[1][] (Value): {@link
         * DeliveryInputRequirementPreviousAttributes}. input_requirements.anyOf[2] (Value): null.
         * instructions (Optional): string or null. Buyer-provided delivery instructions. Returned
         * with an API key or dashboard credential. instructions.anyOf[1] (Value): string.
         * Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
         * instructions.anyOf[2] (Value): null. lifecycle_events (Optional): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes} or null. Ordered lifecycle
         * events recorded for this selection. lifecycle_events.anyOf[1] (Value): Array of {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events
         * recorded for this selection. lifecycle_events.anyOf[1][] (Value): {@link
         * DeliverySelectionLifecycleEventResourcePreviousAttributes}. lifecycle_events.anyOf[2]
         * (Value): null. lifecycle_updated_at (Optional): string or null. Time the selection
         * lifecycle last changed. Always present with an API key or dashboard credential.
         * lifecycle_updated_at.anyOf[1] (Value): string. Time the selection lifecycle last
         * changed. Always present with an API key or dashboard credential. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". lifecycle_updated_at.anyOf[2] (Value): null.
         * limiting_deadline_reason (Optional): string or null. The deadline that set expires_at:
         * the earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[1] (Value): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * limiting_deadline_reason.anyOf[2] (Value): null. order_id (Optional): string or null.
         * Order affected by the selection. Always present with an API key or dashboard credential.
         * order_id.anyOf[1] (Value): string. Order affected by the selection. Always present with
         * an API key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. private_data_status (Optional): string or null.
         * Availability state of merchant-private selection evidence. Value enum: "available",
         * "redacted". private_data_status.anyOf[1] (Value): string. Availability state of
         * merchant-private selection evidence. Value enum: "available", "redacted".
         * private_data_status.anyOf[2] (Value): null. recipient (Optional): {@link
         * DeliveryRecipientResourcePreviousAttributes} or null. Recipient details captured with
         * the selection. Omitted for a checkout session credential that doesn't act for the
         * customer the buyer verified. recipient.anyOf[1] (Value): {@link
         * DeliveryRecipientResourcePreviousAttributes}. recipient.anyOf[2] (Value): null.
         * redacted_at (Optional): string or null. Time merchant-private selection evidence was
         * redacted. redacted_at.anyOf[1] (Value): string. Time merchant-private selection evidence
         * was redacted. Format: date-time. Example: "2026-08-02T16:00:00Z". redacted_at.anyOf[2]
         * (Value): null. status (Optional): string or null. Current selection lifecycle status. -
         * `selected`: These choices are provisional and can be replaced before payment. -
         * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
         * payment finishes. - `committed`: Payment fixed these choices on the order. -
         * `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
         * longer usable because its deadline passed. - `released`: These choices were withdrawn.
         * Create a new selection before paying for delivery. Value enum: "selected",
         * "locked_for_payment", "committed", "superseded", "expired", "released". status.anyOf[1]
         * (Value): string. Current selection lifecycle status. - `selected`: These choices are
         * provisional and can be replaced before payment. - `locked_for_payment`: A payment
         * attempt owns these choices. They are frozen until payment finishes. - `committed`:
         * Payment fixed these choices on the order. - `superseded`: A newer selection replaced
         * these choices. - `expired`: The selection is no longer usable because its deadline
         * passed. - `released`: These choices were withdrawn. Create a new selection before paying
         * for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
         * "expired", "released". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Contains release while status is selected and the selection
         * belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1] (Value): Array of string. Contains release while status is
         * selected and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "release".
         * supported_actions.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Delivery charge committed by this selection. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. anyOf[1] (Value): {@link
             * DeliveryBuyerLocationResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_location"?: ((DeliveryBuyerLocationResourcePreviousAttributes) | (null));
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. anyOf[1] (Value): string. Deadline after
             * which calculated pricing evidence is no longer valid. Always present with an API key
             * or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "calculation_expires_at"?: ((string) | (null));
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Checkout session that owns the
             * selection. Always present with an API key or dashboard credential. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * One chosen option for each required choice group. anyOf[1] (Value): Array of {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each
             * required choice group. anyOf[1][] (Value): {@link
             * DeliverySelectionChoiceResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "choices"?: ((Array<DeliverySelectionChoiceResourcePreviousAttributes>) | (null));
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Time the selection was created. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Quote from which this selection was made. anyOf[1] (Value): string. Quote from which
             * this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". anyOf[2]
             * (Value): null.
             */
            "delivery_quote_id"?: ((string) | (null));
            /**
             * Stable delivery selection ID. anyOf[1] (Value): string. Stable delivery selection
             * ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. anyOf[1]
             * (Value): {@link AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "destination_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * Deadline after which this provisional selection can no longer be committed. anyOf[1]
             * (Value): string. Deadline after which this provisional selection can no longer be
             * committed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1]
             * (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs this
             * selection still needs before payment: each destination_address member a chosen
             * shipment or local delivery needs that the stored address lacks (line1, city, and
             * country, plus state and postal_code in the US), and each recipient field a chosen
             * option requires that the selection does not include. Each entry repeats the quote's
             * requirement for that option, with the same delivery_input_requirement_id. Payment
             * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. anyOf[1][]
             * (Value): {@link DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential. anyOf[1] (Value): string. Buyer-provided delivery instructions. Returned
             * with an API key or dashboard credential. anyOf[2] (Value): null.
             */
            "instructions"?: ((string) | (null));
            /**
             * Ordered lifecycle events recorded for this selection. anyOf[1] (Value): Array of
             * {@link DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle
             * events recorded for this selection. anyOf[1][] (Value): {@link
             * DeliverySelectionLifecycleEventResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lifecycle_events"?: ((Array<DeliverySelectionLifecycleEventResourcePreviousAttributes>) | (null));
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. anyOf[1] (Value): string. Time the selection lifecycle last
             * changed. Always present with an API key or dashboard credential. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "lifecycle_updated_at"?: ((string) | (null));
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             * anyOf[1] (Value): string. The deadline that set expires_at: the earliest of the
             * chosen options' guarantee, the calculation expiry, and the maximum selection
             * lifetime. A tie between the calculation and the guarantee reports
             * calculation_expiry. Always present with an API key or dashboard credential. -
             * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
             * delivery windows comes first. When the selection holds stock, the hold ends at this
             * deadline too. - `calculation_expiry`: The calculation the selection was priced
             * against expires first. It ends no later than the checkout session's expires_at, and
             * earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The
             * selection reaches the longest a provisional selection can last, 24 hours after it
             * was created. Value enum: "selection_guarantee_expiry", "calculation_expiry",
             * "selection_maximum_lifetime". anyOf[2] (Value): null.
             */
            "limiting_deadline_reason"?: (("selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {}))
                | (null));
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. anyOf[1] (Value): string. Order affected by the selection. Always
             * present with an API key or dashboard credential. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted". anyOf[1] (Value): string. Availability state of merchant-private
             * selection evidence. Value enum: "available", "redacted". anyOf[2] (Value): null.
             */
            "private_data_status"?: (("available" | "redacted" | (string & {})) | (null));
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. anyOf[1] (Value):
             * {@link DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "recipient"?: ((DeliveryRecipientResourcePreviousAttributes) | (null));
            /**
             * Time merchant-private selection evidence was redacted. anyOf[1] (Value): string.
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "redacted_at"?: ((string) | (null));
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released". anyOf[1] (Value): string. Current selection lifecycle status.
             * - `selected`: These choices are provisional and can be replaced before payment. -
             * `locked_for_payment`: A payment attempt owns these choices. They are frozen until
             * payment finishes. - `committed`: Payment fixed these choices on the order. -
             * `superseded`: A newer selection replaced these choices. - `expired`: The selection
             * is no longer usable because its deadline passed. - `released`: These choices were
             * withdrawn. Create a new selection before paying for delivery. Value enum:
             * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
             * anyOf[2] (Value): null.
             */
            "status"?: (("selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {}))
                | (null));
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". anyOf[1] (Value): Array of string. Contains release while status is
             * selected and the selection belongs to a checkout session: POST
             * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
             * Empty in every other status. Independent of caller permissions. [] enum: "release".
             * anyOf[1][] (Value): string. Value enum: "release". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"release" | (string & {})>) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
});
/**
 * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
 * delivery windows, and optional `instructions`.
 */
export type DeliverySelectionInstructionsRequest = {
    /**
     * ID from the option's offered_windows. Required when window_selection is offered; omit it
     * otherwise. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id"?: string;
    /**
     * Buyer instructions for the selected option, without leading or trailing whitespace. Send
     * this field only when buyer_instructions.enabled is true. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. minLength: 1. maxLength:
     * 2000.
     */
    "instructions"?: string;
};
/**
 * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
 * delivery windows, and optional `instructions`.
 */
export type DeliverySelectionInstructionsRequestInput = DeliverySelectionInstructionsRequest;
export type DeliverySelectionInstructionsRequestPreviousAttributes = {
    /**
     * ID from the option's offered_windows. Required when window_selection is offered; omit it
     * otherwise. anyOf[1] (Value): string. ID from the option's offered_windows. Required when
     * window_selection is offered; omit it otherwise. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d". anyOf[2] (Value):
     * null.
     */
    "delivery_window_id"?: ((string) | (null));
    /**
     * Buyer instructions for the selected option, without leading or trailing whitespace. Send
     * this field only when buyer_instructions.enabled is true. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string.
     * Buyer instructions for the selected option, without leading or trailing whitespace. Send
     * this field only when buyer_instructions.enabled is true. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. minLength: 1. maxLength:
     * 2000. anyOf[2] (Value): null.
     */
    "instructions"?: ((string) | (null));
};
