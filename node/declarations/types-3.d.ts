import type { DeliveryWindowRequest, DeliveryWindowRequestInput } from './types-15.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { ReadinessAction, ReadinessRequirements } from './types-39.js';
import type { GiftCard } from './types-18.js';
import type { GiftCardTransaction } from './types-19.js';
import type { ResponseMeta, ResourceReference } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreateCategoryRequestInput } from './types-5.js';
import type { UpdateCategoryRequestInput } from './types-47.js';
import type { SubscriptionDeliveryRequest, SubscriptionDeliveryRequestInput } from './types-45.js';
import type { Address } from './types-0.js';
import type { DeliveryInputRequirement, DeliveryMerchantDiagnostic } from './types-12.js';
import type { DeliveryQuoteChoiceGroupResource } from './types-14.js';
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestAvailable}. The `available` variant
 * of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestAvailable = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestAvailableInput}. The `available`
 * variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestAvailableInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string | globalThis.Date;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestCannotCalculate}. The
 * `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculate = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput}. The
 * `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestInput}. Your outcome for a
 * caller-priced delivery method, selected by `type`: available with a price and windows,
 * unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestUnavailable}. The `unavailable`
 * variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestUnavailable = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestUnavailableInput}. The `unavailable`
 * variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestUnavailableInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
});
/**
 * Shape $ (Value): {@link CancelGiftCardNotificationRequest}. The request body for: Cancel a gift
 * card notification.
 */
export type CancelGiftCardNotificationRequest = {};
/**
 * Shape $ (Value): {@link CancelGiftCardNotificationRequestInput}. The request body for: Cancel a
 * gift card notification.
 */
export type CancelGiftCardNotificationRequestInput = {};
/**
 * Shape $ (Value): {@link CancelOrderPaymentAttemptRequestInput}. The request body for: Cancel
 * order payment attempt.
 */
export type CancelOrderPaymentAttemptRequestInput = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
};
/**
 * Shape $ (Value): {@link CancelOrderPaymentRequest}. The request body for: Cancel order payment
 * leg.
 */
export type CancelOrderPaymentRequest = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
    /**
     * Shape $ (Value): string. Owning Flint payment attempt ID. Required while the payment leg
     * belongs to an active attempt. minLength: 1.
     */
    "order_payment_attempt_id"?: string;
};
/**
 * Shape $ (Value): {@link CancelOrderPaymentRequestInput}. The request body for: Cancel order
 * payment leg.
 */
export type CancelOrderPaymentRequestInput = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
    /**
     * Shape $ (Value): string. Owning Flint payment attempt ID. Required while the payment leg
     * belongs to an active attempt. minLength: 1.
     */
    "order_payment_attempt_id"?: string;
};
/**
 * Shape $ (Value): {@link CancelPaymentIntentRequest}. The request body for: Cancel payment
 * intent.
 */
export type CancelPaymentIntentRequest = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
};
/**
 * Shape $ (Value): {@link CancelPaymentIntentRequestInput}. The request body for: Cancel payment
 * intent.
 */
export type CancelPaymentIntentRequestInput = CancelOrderPaymentAttemptRequestInput;
/** Shape $ (Value): {@link CancelPayoutRequest}. The request body for: Cancel a payout. */
export type CancelPayoutRequest = {
    [key: string]: unknown;
};
/** Shape $ (Value): {@link CancelPayoutRequestInput}. The request body for: Cancel a payout. */
export type CancelPayoutRequestInput = CancelPayoutRequest;
/**
 * Shape $ (Value): {@link CancelReturnDispositionRequest}. The request body for: Cancel return
 * disposition.
 */
export type CancelReturnDispositionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "created_in_error", "changed_disposition", "duplicate",
     * "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnDispositionRequestInput}. The request body for: Cancel
 * return disposition.
 */
export type CancelReturnDispositionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "created_in_error", "changed_disposition", "duplicate",
     * "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnLineItemRequest}. The request body for: Cancel return line
 * item.
 */
export type CancelReturnLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. How many of the canceled units the buyer no longer has to
     * send back, as a whole number; fractional quantities are not supported. Lowers
     * return_required_quantity. Omit it to lower it only as far as the canceled quantity requires.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "handback_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnLineItemRequestInput}. The request body for: Cancel return
 * line item.
 */
export type CancelReturnLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. How many of the canceled units the buyer no longer has to
     * send back, as a whole number; fractional quantities are not supported. Lowers
     * return_required_quantity. Omit it to lower it only as far as the canceled quantity requires.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "handback_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnRequest}. The request body for: Cancel one of the current
 * buyer's Returns; Cancel return.
 */
export type CancelReturnRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnRequestInput}. The request body for: Cancel one of the
 * current buyer's Returns; Cancel return.
 */
export type CancelReturnRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnResolutionRequestInput}. The request body for: Cancel return
 * resolution.
 */
export type CancelReturnResolutionRequestInput = CancelReturnRequestInput;
/**
 * Shape $ (Value): {@link CancelSubscriptionRequest}. The request body for: Cancel one of the
 * current buyer's subscriptions; Cancel subscription.
 */
export type CancelSubscriptionRequest = {
    /**
     * Shape $ (Value): boolean. When true, ends the subscription now. Otherwise, schedules
     * cancellation at trial_end_at while trialing, current_period_end_at while active, or
     * next_retry_at while past_due, instead of that charge. An active subscription with an expired
     * renewal delivery hold ends now. A scheduled, incomplete, or paused subscription, or a
     * past_due subscription without next_retry_at, requires cancel_immediately: true; otherwise
     * returns 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. A buyer may cancel
     * immediately when the store allows buyer_chooses or no scheduled cancellation time is
     * available. Under end_of_period, a trial continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Shape $ (Value): string. Free text about the cancellation, up to 500 characters after
     * surrounding spaces are trimmed. Recorded in cancellation_details.comment, which only
     * merchant credentials read. minLength: 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Shape $ (Value): string. Optional. Why the subscription is being canceled. When the store
     * lists customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must
     * be one of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CancelSubscriptionRequestInput}. The request body for: Cancel one of the
 * current buyer's subscriptions; Cancel subscription.
 */
export type CancelSubscriptionRequestInput = {
    /**
     * Shape $ (Value): boolean. When true, ends the subscription now. Otherwise, schedules
     * cancellation at trial_end_at while trialing, current_period_end_at while active, or
     * next_retry_at while past_due, instead of that charge. An active subscription with an expired
     * renewal delivery hold ends now. A scheduled, incomplete, or paused subscription, or a
     * past_due subscription without next_retry_at, requires cancel_immediately: true; otherwise
     * returns 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. A buyer may cancel
     * immediately when the store allows buyer_chooses or no scheduled cancellation time is
     * available. Under end_of_period, a trial continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Shape $ (Value): string. Free text about the cancellation, up to 500 characters after
     * surrounding spaces are trimmed. Recorded in cancellation_details.comment, which only
     * merchant credentials read. minLength: 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Shape $ (Value): string. Optional. Why the subscription is being canceled. When the store
     * lists customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must
     * be one of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CapabilityReadiness}. Merchant capability readiness for a payment or
 * money movement capability.
 */
export type CapabilityReadiness = {
    /**
     * Shape $ (Value): string. Flint-owned capability name. Payment capabilities describe
     * transaction acceptance readiness; money movement capabilities describe payout and balance
     * movement readiness. Value enum: "accept_card_payments", "save_payment_methods",
     * "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts",
     * "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     */
    "capability": "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Shape $ (Value): string. Product domain this capability belongs to: payments for payment
     * acceptance or money_movement for balances and payouts. Value enum: "money_movement",
     * "payments".
     */
    "domain": "money_movement" | "payments" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReadinessAction}. Actions that can remediate or refresh
     * this capability when Flint can suggest one. Shape $[] (Value): {@link ReadinessAction}. A
     * step that moves a merchant capability or readiness axis forward, with the party that must do
     * it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Shape $ (Value): {@link ReadinessRequirements}. Merchant requirements that affect this
     * capability. Account information requirements for a merchant, grouped as currently due,
     * eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
    /**
     * Shape $ (Value): string. Current readiness status for this capability. Value enum: "ready",
     * "pending", "blocked", "not_requested", "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "onboarding_not_started", "requirements_due",
     * "requirements_past_due", "pending_verification", "account_rejected",
     * "disabled_by_platform_policy", "billing_suspended", "platform_review",
     * "processing_not_enabled", "platform_funding_unavailable", "tax_category_required",
     * "service_unavailable", "payment_option_access_not_provisioned",
     * "payment_option_activation_pending", "payment_option_not_in_plan",
     * "payment_option_not_available", "capability_not_active", "other".
     */
    "status_reason"?: "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
};
/**
 * Shape $ (Value): {@link CaptureOrderPaymentRequest}. The request body for: Capture order
 * payment.
 */
export type CaptureOrderPaymentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Owning Flint payment attempt ID. Required while the authorization
     * belongs to an active attempt. minLength: 1.
     */
    "order_payment_attempt_id"?: string;
};
/**
 * Shape $ (Value): {@link CaptureOrderPaymentRequestInput}. The request body for: Capture order
 * payment.
 */
export type CaptureOrderPaymentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Owning Flint payment attempt ID. Required while the authorization
     * belongs to an active attempt. minLength: 1.
     */
    "order_payment_attempt_id"?: string;
};
/**
 * Shape $ (Value): {@link CapturePaymentIntentRequest}. The request body for: Capture payment
 * intent.
 */
export type CapturePaymentIntentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount to capture, in the authorization's currency.
     * Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint
     * releases the rest in the same request, and the payment intent can't be captured again. Must
     * be greater than zero and at most capturable_money. Affirm payments can only be captured in
     * full. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link CapturePaymentIntentRequestInput}. The request body for: Capture payment
 * intent.
 */
export type CapturePaymentIntentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount to capture, in the authorization's
     * currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture:
     * Flint releases the rest in the same request, and the payment intent can't be captured again.
     * Must be greater than zero and at most capturable_money. Affirm payments can only be captured
     * in full. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link CardDetails}. Card details on a payment method: brand, expiration month
 * and year, last four digits, and the wallet when one was used.
 */
export type CardDetails = {
    /**
     * Shape $ (Value): string. Value enum: "visa", "mastercard", "amex", "discover", "diners",
     * "jcb", "unionpay".
     */
    "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "exp_month": number;
    /** Shape $ (Value): integer. Format: int32. */
    "exp_year": number;
    /** Shape $ (Value): string. */
    "last4": string;
    /** Shape $ (Value): string. */
    "wallet"?: string;
};
/** Shape $ (Value): {@link CashOutGiftCardRequest}. The request body for: Record a cash-out. */
export type CashOutGiftCardRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Your reference for the cash you paid the buyer outside Flint, such
     * as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent.
     * minLength: 1. maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CashOutGiftCardRequestInput}. The request body for: Record a cash-out.
 */
export type CashOutGiftCardRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Your reference for the cash you paid the buyer outside Flint, such
     * as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent.
     * minLength: 1. maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CashOutGiftCardResult}. The result of recording a gift card cash-out:
 * the updated gift card and the transactions it created.
 */
export type CashOutGiftCardResult = {
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link CashOutGiftCardResultResponse}. A response containing
 * `CashOutGiftCardResult` data.
 */
export type CashOutGiftCardResultResponse = {
    /**
     * Shape $ (Value): {@link CashOutGiftCardResult}. The result of recording a gift card
     * cash-out: the updated gift card and the transactions it created.
     */
    "data": CashOutGiftCardResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type CategoriesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCategoryRequestInput}. The request body for: Create category.
     */
    "body": InputValue<CreateCategoryRequestInput>;
};
export type CategoriesGetInput = {
    /** Shape $ (Value): string. */
    "category_id": InputValue<string>;
};
export type CategoriesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "handle"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "handle". Value enum: "handle", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type CategoriesRemoveInput = {
    /** Shape $ (Value): string. */
    "category_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type CategoriesUpdateInput = {
    /** Shape $ (Value): string. */
    "category_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCategoryRequestInput}. The request body for: Update category.
     */
    "body": InputValue<UpdateCategoryRequestInput>;
};
/** Shape $ (Value): {@link Category}. A catalog grouping used to organize items. */
export type Category = {
    /**
     * Shape $ (Value): integer string. Number of bundles currently assigned to the category. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "assigned_bundle_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Number of products currently assigned to the category. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "assigned_product_count": `${bigint}`;
    /** Shape $ (Value): string. Stable identifier of the category. */
    "category_id": string;
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at": string;
    /** Shape $ (Value): string. Description of the category. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Immutable handle used to assign this category to products and
     * bundles.
     */
    "handle": string;
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata stored on this resource. Shape $.*
     * (Value): string.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Category name shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): string. Category lifecycle status. Active categories can be assigned;
     * deleted is returned only by DELETE. Value enum: "active", "deleted".
     */
    "status": "active" | "deleted" | (string & {});
    /**
     * Shape $ (Value): integer string. Number of live targeting references that prevent deleting
     * the category. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "targeting_reference_count": `${bigint}`;
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and
     * expanded resources do not advance this counter. Use an integer string (decimal digits), not
     * a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link CategoryListResponse}. A page of `Category` objects. */
export type CategoryListResponse = {
    /**
     * Shape $ (Value): Array of {@link Category}. The requested category data. Shape $[] (Value):
     * {@link Category}. A catalog grouping used to organize items.
     */
    "data": Array<Category>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
 * name.
 */
export type CategoryReference = {
    /** Shape $ (Value): string. Stable identifier of the category. */
    "category_id": string;
    /** Shape $ (Value): string. Category handle recorded with this reference. */
    "handle": string;
    /** Shape $ (Value): string. Category name recorded with this reference. */
    "name": string;
};
/** Shape $ (Value): {@link CategoryResponse}. A response containing `Category` data. */
export type CategoryResponse = {
    /**
     * Shape $ (Value): {@link Category}. The requested category data. A catalog grouping used to
     * organize items.
     */
    "data": Category;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link ChangeMeSubscriptionBillingIntervalRequest}. The request body for:
 * Change subscription billing interval.
 */
export type ChangeMeSubscriptionBillingIntervalRequest = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link ChangeMeSubscriptionBillingIntervalRequestInput}. The request body for:
 * Change subscription billing interval.
 */
export type ChangeMeSubscriptionBillingIntervalRequestInput = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link ChangeMeSubscriptionDeliveryRequest}. The request body for: Update
 * subscription delivery.
 */
export type ChangeMeSubscriptionDeliveryRequest = {
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequest}. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery": SubscriptionDeliveryRequest;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link ChangeMeSubscriptionDeliveryRequestInput}. The request body for: Update
 * subscription delivery.
 */
export type ChangeMeSubscriptionDeliveryRequestInput = {
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequestInput}. The delivery preference to set on
     * a subscription: delivery method, type, destination, and recipient.
     */
    "delivery": SubscriptionDeliveryRequestInput;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link ChangeMeSubscriptionQuantityRequest}. The request body for: Change
 * subscription quantity.
 */
export type ChangeMeSubscriptionQuantityRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity": number;
};
/**
 * Shape $ (Value): {@link ChangeMeSubscriptionQuantityRequestInput}. The request body for: Change
 * subscription quantity.
 */
export type ChangeMeSubscriptionQuantityRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity": number;
};
/**
 * Shape $ (Value): {@link ChangeSubscriptionPaymentMethodRequest}. The request body for: Change a
 * subscription payment method; Change the payment method for one of the current buyer's
 * subscriptions.
 */
export type ChangeSubscriptionPaymentMethodRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link ChangeSubscriptionPaymentMethodRequestInput}. The request body for:
 * Change a subscription payment method; Change the payment method for one of the current buyer's
 * subscriptions.
 */
export type ChangeSubscriptionPaymentMethodRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link ChangeSubscriptionPlanRequest}. The request body for: Change
 * subscription plan.
 */
export type ChangeSubscriptionPlanRequest = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link ChangeSubscriptionPlanRequestInput}. The request body for: Change
 * subscription plan.
 */
export type ChangeSubscriptionPlanRequestInput = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link CheckoutBuyerContact}. Buyer contact supplied with payment or saved
 * during checkout.
 */
export type CheckoutBuyerContact = {
    /**
     * Shape $ (Value): string or null. Email supplied for the buyer, exactly as sent. Null when no
     * email is saved; is_email_cleared distinguishes an explicit clear. Format: email. maxLength:
     * 255.
     */
    "email": string | null;
    /**
     * Shape $ (Value): boolean. True when the buyer explicitly cleared the email, including before
     * entering one. Saving an email resets it to false. Do not restore a prefilled email while
     * true.
     */
    "is_email_cleared": boolean;
    /**
     * Shape $ (Value): boolean. True when the buyer explicitly cleared the phone, including before
     * entering one. Saving a phone resets it to false. Do not restore a prefilled phone while
     * true.
     */
    "is_phone_cleared": boolean;
    /**
     * Shape $ (Value): string or null. Phone supplied for the buyer, in E.164 format. Null when no
     * phone is saved; is_phone_cleared distinguishes an explicit clear. pattern:
     * ^\+[1-9][0-9]{1,14}$.
     */
    "phone": string | null;
    /**
     * Shape $ (Value): string. When the buyer last changed the saved checkout contact. Omitted on
     * order buyer contact. Format: date-time.
     */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutBuyerContactRequest}. Buyer contact to supply with payment or
 * save during checkout. Send at least one field. Values are stored exactly as sent, so an email
 * with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept
 * null to clear a field. Payment requests do not accept null. minProperties: 1.
 */
export type CheckoutBuyerContactRequest = {
    /**
     * Shape $ (Value): string or null. Email for the buyer, such as buyer@example.com. On checkout
     * session updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255.
     */
    "email"?: string | null;
    /**
     * Shape $ (Value): string or null. Phone for the buyer, in E.164 format, such as +14155551234.
     * On checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$.
     */
    "phone"?: string | null;
};
/**
 * Shape $ (Value): {@link CheckoutBuyerContactRequestInput}. Buyer contact to supply with payment
 * or save during checkout. Send at least one field. Values are stored exactly as sent, so an email
 * with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept
 * null to clear a field. Payment requests do not accept null. minProperties: 1.
 */
export type CheckoutBuyerContactRequestInput = CheckoutBuyerContactRequest;
/**
 * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field you
 * leave out uses your checkout settings.
 */
export type CheckoutBuyerFields = {
    /**
     * Shape $ (Value): boolean. Whether checkout offers address suggestions while the buyer enters
     * an address.
     */
    "address_autocomplete_enabled"?: boolean;
    /** Shape $ (Value): boolean. Whether checkout requires the buyer's billing address. */
    "require_billing_address"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether checkout requires the buyer's email address. Subscription
     * plan sessions always require email, so only true is allowed with type: subscription_plan.
     */
    "require_email"?: boolean;
    /** Shape $ (Value): boolean. Whether checkout requires the buyer's phone number. */
    "require_phone"?: boolean;
};
/**
 * Shape $ (Value): {@link CheckoutBuyerFieldsInput}. What checkout asks the buyer for. Each field
 * you leave out uses your checkout settings.
 */
export type CheckoutBuyerFieldsInput = CheckoutBuyerFields;
/**
 * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown in checkout: an order
 * summary message and a shipping address label.
 */
export type CheckoutCustomTextConfig = {
    /** Shape $ (Value): string. */
    "order_summary_message"?: string;
    /** Shape $ (Value): string. */
    "shipping_address_label"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply
 * when creating a checkout session: an order summary message and a shipping address label.
 */
export type CheckoutCustomTextWriteConfigInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "order_summary_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "shipping_address_label"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutCustomerPrefill}. Details the buyer's checkout can prefill from
 * the customer it acts for.
 */
export type CheckoutCustomerPrefill = {
    /**
     * Shape $ (Value): {@link Address}. The customer's default billing address. Omitted when the
     * customer has none. A postal address, as returned on customers, invoices, tax locations, and
     * fulfillment recipients.
     */
    "billing_address"?: Address;
    /** Shape $ (Value): string. The customer's email. */
    "email": string;
    /**
     * Shape $ (Value): {@link Address}. The customer's default shipping address. Omitted when the
     * customer has none. A postal address, as returned on customers, invoices, tax locations, and
     * fulfillment recipients.
     */
    "shipping_address"?: Address;
    /**
     * Shape $ (Value): string. Recipient name saved with the customer's default shipping address.
     * Present only with `shipping_address`; omitted when that address was set on the customer
     * without a saved recipient.
     */
    "shipping_recipient_name"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutDeliveryPinnedDependency}. A delivery dependency pinned to a
 * checkout, such as the assigned method, eligibility, or pricing callback, with the revision it
 * was pinned at.
 */
export type CheckoutDeliveryPinnedDependency = {
    /**
     * Shape $ (Value): string. Value enum: "assigned_method", "eligibility", "method_origin",
     * "pickup_collection", "pricing_callback", "origin".
     */
    "delivery_dependency_role": "assigned_method"
        | "eligibility"
        | "method_origin"
        | "pickup_collection"
        | "pricing_callback"
        | "origin"
        | (string & {});
    /**
     * Shape $ (Value): {@link ResourceReference} or null. Shape $.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * Shape $.anyOf[2] (Value): null.
     */
    "dependency": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): integer string. Version of the Location geography used by this assignment
     * or dependency. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "revision_id"?: string;
};
/**
 * Shape $ (Value): {@link CheckoutDerivedDeliveryResource}. The delivery options Flint derived for
 * a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.
 */
export type CheckoutDerivedDeliveryResource = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "buyer_reasons": Array<string>;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteChoiceGroupResource}. Shape $[] (Value):
     * {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a delivery quote, with
     * the delivery options the buyer can choose, its availability status, and any input still
     * needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /** Shape $ (Value): string. */
    "delivery_quote_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "complete", "incomplete", "degraded",
     * "requires_explicit_quote".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | "requires_explicit_quote" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Inputs the checkout's delivery
     * methods need. Once the checkout has a delivery quote, these are the quote's
     * input_requirements. Before that, they come from the methods alone and name no choice group:
     * the fields in each method's quote_input_fields, and each recipient field a method requires.
     * Shape $[] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such
     * as an address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): Array of {@link DeliveryMerchantDiagnostic}. Always present with an API key
     * or dashboard credential. Shape $[] (Value): {@link DeliveryMerchantDiagnostic}. A
     * merchant-only diagnostic explaining why a delivery method produced no option, with its
     * outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
};
