import type {
    DeliveryScheduleWindowRule,
    DeliveryRecipientRequirement,
    DeliveryRecipientRequirementInput,
    DeliveryRadiusCondition,
    DeliveryRadiusConditionInput,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from './types-14.js';
import type {
    DeliveryTransitTimeRule,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryTransitTimeRuleInput,
    DeliveryWindowRequest,
    DeliveryStateCondition,
    DeliveryWindowTimeCondition,
    DeliveryZoneCondition,
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionInput,
    DeliveryShipmentDetails
} from './types-15.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { ResponseMeta } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryLocationSetRequestInput, CreateDeliveryMethodRequestInput } from './types-5.js';
import type { UpdateDeliveryLocationSetRequestInput, UpdateDeliveryMethodRequestInput } from './types-47.js';
import type {
    DeliveryAddressRequest,
    DeliveryEligibilityExpression,
    DeliveryEligibilityExpressionInput,
    DeliveryCustomerBooleanCondition,
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryArrivalEstimate,
    DeliveryAddressAdvisoryResource
} from './types-11.js';
import type { SubscriptionCounts } from './types-45.js';
import type { BuyerInstructionsConfig, BuyerInstructionsConfigInput } from './types-1.js';
import type {
    DeliveryPricingStrategy,
    DeliveryPricingStrategyCreateRequest,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingStrategyRequest,
    DeliveryPricingStrategyRequestInput,
    DeliveryPostalCodeValue,
    DeliveryPostalCodeValueInput
} from './types-13.js';
import type { AddRiskListItemsRequest } from './types-0.js';
/**
 * Shape $ (Value): {@link DeliveryEligibilityMismatch}. An eligibility condition that rejected a
 * delivery method, with its condition type, its path in the expression, and the field tested.
 */
export type DeliveryEligibilityMismatch = {
    /**
     * Shape $ (Value): string. The configured eligibility condition family that did not match.
     * Value enum: "zone", "country", "state", "postal_code", "radius", "window_time",
     * "subscription_purchase", "customer_segment", "customer_merchant_verified",
     * "customer_has_email", "customer_has_phone".
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
    /**
     * Shape $ (Value): string. The condition's path in the configured eligibility expression,
     * starting at $.
     */
    "expression_path": string;
    /**
     * Shape $ (Value): string. The eligibility fact evaluated by the condition. Buyer fact values
     * are not included.
     */
    "field"?: string;
    /**
     * Shape $ (Value): boolean. Whether the condition matched inside a not expression and
     * therefore rejected the method.
     */
    "negated"?: boolean;
};
/**
 * Shape $ (Value): {@link DeliveryEstimateRule}. How a delivery method estimates timing, chosen by
 * `type`: no estimate, a transit time, or a schedule window.
 */
export type DeliveryEstimateRule = {
    /**
     * Shape $ (Value): {@link DeliveryScheduleWindowRule}. Estimate rule for a scheduled-window
     * delivery method, defined by its `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRule;
    /**
     * Shape $ (Value): {@link DeliveryTransitTimeRule}. Estimate rule giving a delivery method's
     * handling time and transit time as ranges of business days.
     */
    "transit_time"?: DeliveryTransitTimeRule;
    /** Shape $ (Value): string.  Value enum: "none", "transit_time", "schedule_window". */
    "type": "none" | "transit_time" | "schedule_window" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryEstimateRuleRequestInput}. The timing estimate rule you supply
 * for a delivery method, chosen by `type`: none, a transit time, or a schedule window.
 */
export type DeliveryEstimateRuleRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryScheduleWindowRuleRequestInput}. Scheduled-window estimate
     * rule you supply for a delivery method, defined by its `availability` schedule.
     */
    "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTransitTimeRuleInput}. Estimate rule giving a delivery
     * method's handling time and transit time as ranges of business days.
     */
    "transit_time"?: DeliveryTransitTimeRuleInput;
    /** Shape $ (Value): string.  Value enum: "none", "transit_time", "schedule_window". */
    "type": "none" | "transit_time" | "schedule_window";
};
/**
 * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
 * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees
 * by currency.
 */
export type DeliveryExternalPricingStrategy = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id"?: string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Maximum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Minimum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_fee_currency_options": Record<string, MoneyValue>;
    /** Shape $ (Value): boolean. */
    "preview_enabled"?: boolean;
};
/** Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency. */
export type DeliveryFixedPricingStrategy = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
};
/**
 * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
 * currency, supplied for a delivery method.
 */
export type DeliveryFixedPricingStrategyRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
};
/**
 * Shape $ (Value): {@link DeliveryFulfillmentDetails}. Details of a local delivery fulfillment:
 * courier, timing window, instructions, and tracking. Some fields are omitted for credentials that
 * don't act for the verified customer.
 */
export type DeliveryFulfillmentDetails = {
    /** Shape $ (Value): string. Carrier responsible for the local delivery. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string. Time at which the courier collected the order. Format: date-time.
     */
    "courier_pickup_at"?: string;
    /**
     * Shape $ (Value): integer string. Width of the promised courier pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Delivery network or merchant fleet provider handling the job.
     * maxLength: 255.
     */
    "courier_provider_name"?: string;
    /**
     * Shape $ (Value): string. Buyer-safe support number for the courier or merchant fleet.
     * maxLength: 30.
     */
    "courier_support_phone"?: string;
    /**
     * Shape $ (Value): string. When the items were delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string. When the delivery was dispatched, in RFC3339 format. Format:
     * date-time.
     */
    "dispatched_at"?: string;
    /**
     * Shape $ (Value): string. Driver-facing notes for the final handoff. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified. maxLength: 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an undelivered job should enter merchant
     * review. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Stable delivery job ID owned by the courier or merchant dispatch
     * system. maxLength: 255.
     */
    "external_delivery_id"?: string;
    /**
     * Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified.
     */
    "instructions"?: string;
    /**
     * Shape $ (Value): boolean. Whether the buyer requested a no-contact handoff. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "no_contact"?: boolean;
    /**
     * Shape $ (Value): integer string. Expected preparation time before courier pickup, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Time at which the order became ready for courier pickup. Format:
     * date-time.
     */
    "ready_at"?: string;
    /** Shape $ (Value): string. Delivery service area assigned to this fulfillment. */
    "service_area_id"?: string;
    /** Shape $ (Value): string. Timezone used to display the local delivery window. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): string. End of the promised delivery window, in RFC3339 format. Format:
     * date-time.
     */
    "window_end_at"?: string;
    /**
     * Shape $ (Value): string. Start of the promised delivery window, in RFC3339 format. Format:
     * date-time.
     */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryInputConstraint}. The rules for an input a delivery method
 * needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered
 * time windows.
 */
export type DeliveryInputConstraint = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "allowed_values"?: Array<string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "earliest_at"?: string;
    /** Shape $ (Value): string. */
    "format"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "latest_at"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "maximum_length"?: number;
    /** Shape $ (Value): integer. Format: int32. */
    "minimum_length"?: number;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A time window a buyer can choose for a delivery, with its start,
     * end, price, and the last moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "supported_countries"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "string", "address_field", "email", "phone",
     * "time_window", "coordinate", "caller_supplied_rate".
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
 * Shape $ (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
 * address field or time window, with its `field_path`, purpose, and constraint.
 */
export type DeliveryInputRequirement = {
    /**
     * Shape $ (Value): {@link DeliveryInputConstraint}. The rules for an input a delivery method
     * needs, chosen by `type`, such as allowed values, length limits, supported countries, or
     * offered time windows.
     */
    "constraint": DeliveryInputConstraint;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "delivery_choice_group_ids"?: Array<string>;
    /** Shape $ (Value): string. */
    "delivery_input_requirement_id": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "delivery_option_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.country",
     * "destination_address.state", "destination_address.postal_code", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.country", "buyer_location.state", "buyer_location.postal_code",
     * "buyer_location.coordinate", "recipient.name", "recipient.email", "recipient.phone",
     * "choices[].input.delivery_window_id", "caller_supplied_rates".
     */
    "field_path": "destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.country"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.country"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.coordinate"
        | "recipient.name"
        | "recipient.email"
        | "recipient.phone"
        | "choices[].input.delivery_window_id"
        | "caller_supplied_rates"
        | (string & {});
    /** Shape $ (Value): string.  Value enum: "quote", "selection", "pickup_availability". */
    "purpose": "quote" | "selection" | "pickup_availability" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryInventoryAssignmentRequest}. Assigns a quantity of an inventory
 * item at a location to a demand when creating a delivery quote.
 */
export type DeliveryInventoryAssignmentRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "demand_key": string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryInventoryAssignmentRequestInput}. Assigns a quantity of an
 * inventory item at a location to a demand when creating a delivery quote.
 */
export type DeliveryInventoryAssignmentRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "demand_key": string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link DeliveryInventoryReservationSummary}. The inventory reservation held for
 * a delivery selection: its owner, status, expiry, and the next action required.
 */
export type DeliveryInventoryReservationSummary = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): string. */
    "inventory_reservation_id": string;
    /**
     * Shape $ (Value): string. Value enum: "delivery_selection", "payment_attempt",
     * "order_balance_hold".
     */
    "owner_type": "delivery_selection" | "payment_attempt" | "order_balance_hold" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "none", "retry_payment", "replace_selection",
     * "contact_merchant".
     */
    "required_next_action"?: "none" | "retry_payment" | "replace_selection" | "contact_merchant" | (string & {});
    /** Shape $ (Value): string.  Value enum: "active", "closed". */
    "status": "active" | "closed" | (string & {});
};
/** Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery method. */
export type DeliveryLocationSet = {
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. Current member Locations and
     * selection rules. The location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
    /** Shape $ (Value): string. Time the location set was created. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. Immutable revision used for new quotes. */
    "current_delivery_location_set_revision_id": string;
    /** Shape $ (Value): string. Stable delivery location set ID. */
    "delivery_location_set_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): Map of string. Caller-owned metadata. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Merchant-facing location set name. */
    "name": string;
    /**
     * Shape $ (Value): string. Current location set lifecycle status. Value enum: "active",
     * "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. Time the location set last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version for location set writes. Use
     * an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. The location IDs in a delivery
 * location set.
 */
export type DeliveryLocationSetConfiguration = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "location_ids": Array<string>;
};
/**
 * Shape $ (Value): {@link DeliveryLocationSetConfigurationInput}. The location IDs in a delivery
 * location set.
 */
export type DeliveryLocationSetConfigurationInput = DeliveryLocationSetConfiguration;
/**
 * Shape $ (Value): {@link DeliveryLocationSetListResponse}. A page of `DeliveryLocationSet`
 * objects.
 */
export type DeliveryLocationSetListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryLocationSet}. Shape $[] (Value): {@link
     * DeliveryLocationSet}. The locations available to a delivery method.
     */
    "data": Array<DeliveryLocationSet>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryLocationSetResponse}. A response containing
 * `DeliveryLocationSet` data.
 */
export type DeliveryLocationSetResponse = {
    /**
     * Shape $ (Value): {@link DeliveryLocationSet}. The locations available to a delivery method.
     */
    "data": DeliveryLocationSet;
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
export type DeliveryLocationSetsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDeliveryLocationSetRequestInput}. The request body for: Create
     * delivery location set.
     */
    "body": InputValue<CreateDeliveryLocationSetRequestInput>;
};
export type DeliveryLocationSetsGetInput = {
    /** Shape $ (Value): string. */
    "delivery_location_set_id": InputValue<string>;
};
export type DeliveryLocationSetsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
    /** Shape $ (Value): string. */
    "delivery_method_id"?: InputValue<string>;
};
export type DeliveryLocationSetsRemoveInput = {
    /** Shape $ (Value): string. */
    "delivery_location_set_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryLocationSetsUpdateInput = {
    /** Shape $ (Value): string. */
    "delivery_location_set_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateDeliveryLocationSetRequestInput}. The request body for: Update
     * delivery location set.
     */
    "body": InputValue<UpdateDeliveryLocationSetRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryLocationSummaryResource}. A pickup location shown on a delivery
 * option: its name, address, instructions, and timezone.
 */
export type DeliveryLocationSummaryResource = {
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. An address as returned on delivery quotes,
     * selections, previews, and pickup locations.
     */
    "address"?: DeliveryAddressRequest;
    /** Shape $ (Value): string. */
    "instructions"?: string;
    /** Shape $ (Value): string. */
    "location_id": string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a
 * delivery method produced no option, with its outcome, recommended action, and eligibility
 * mismatches.
 */
export type DeliveryMerchantDiagnostic = {
    /**
     * Shape $ (Value): string. Stable reason the method did not produce an option. -
     * `eligibility_no_match`: The configured eligibility expression excluded the method. -
     * `method_unavailable`: The method was unavailable for this evaluation. - `input_required`:
     * The buyer or caller must provide more information to evaluate the method. -
     * `checkout_context_required`: A checkout session is required to evaluate the method. -
     * `dependency_failure`: Flint could not check whether the method is available. Value enum:
     * "eligibility_no_match", "method_unavailable", "input_required", "checkout_context_required",
     * "dependency_failure".
     */
    "code": "eligibility_no_match"
        | "method_unavailable"
        | "input_required"
        | "checkout_context_required"
        | "dependency_failure"
        | (string & {});
    /** Shape $ (Value): string. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "diagnostic_id": string;
    /**
     * Shape $ (Value): Array of {@link DeliveryEligibilityMismatch}. Configured eligibility
     * predicates that conclusively rejected the method. Present only for eligibility_no_match.
     * Shape $[] (Value): {@link DeliveryEligibilityMismatch}. An eligibility condition that
     * rejected a delivery method, with its condition type, its path in the expression, and the
     * field tested.
     */
    "eligibility_mismatches"?: Array<DeliveryEligibilityMismatch>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Value enum: "unavailable", "input_required", "cannot_calculate",
     * "requires_checkout_context".
     */
    "outcome": "unavailable" | "input_required" | "cannot_calculate" | "requires_checkout_context" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "review_configuration", "provide_input",
     * "create_checkout", "retry".
     */
    "recommended_action": "review_configuration" | "provide_input" | "create_checkout" | "retry" | (string & {});
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
    /** Shape $ (Value): string.  Value enum: "method". */
    "scope": "method" | (string & {});
    /** Shape $ (Value): string. */
    "summary": string;
};
/**
 * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery, or
 * service option.
 */
export type DeliveryMethod = {
    /**
     * Shape $ (Value): {@link DeliveryMethodConfiguration}. Current eligibility, pricing, origin,
     * estimate, and tax configuration. How a delivery method works: its origin, pricing,
     * eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes.
     */
    "configuration": DeliveryMethodConfiguration;
    /** Shape $ (Value): string. Time the method was created. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. Immutable revision currently used for new quotes. */
    "current_delivery_method_revision_id": string;
    /** Shape $ (Value): string. Stable delivery method ID. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. Optional buyer-facing description. */
    "description"?: string;
    /** Shape $ (Value): integer. Ascending display order among methods. Format: int32. */
    "display_position": number;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): Map of string. Caller-owned metadata. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Merchant-facing method name. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Shape $ (Value): string. Current method lifecycle status. Value enum: "active", "inactive",
     * "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): {@link SubscriptionCounts}. Counts of subscriptions by status: active, past
     * due, and paused.
     */
    "subscription_counts": SubscriptionCounts;
    /**
     * Shape $ (Value): string. Delivery mode this method offers. Value enum: "shipment",
     * "local_delivery", "pickup".
     */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
    /** Shape $ (Value): string. Time the method last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version for method writes. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryMethodConfiguration}. How a delivery method works: its origin,
 * pricing, eligibility, timing estimate, tax settings, recipient requirements, and option
 * lifetimes.
 */
export type DeliveryMethodConfiguration = {
    /**
     * Shape $ (Value): {@link BuyerInstructionsConfig}. Controls whether checkout collects buyer
     * instructions for this method. Controls buyer instructions for a delivery option. Omit it
     * from a method configuration to disable instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfig;
    /**
     * Shape $ (Value): string or null. Tax category of the delivery charge, which decides its
     * automatic tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category": "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpression;
    /**
     * Shape $ (Value): {@link DeliveryEstimateRule}. The buyer-visible delivery or pickup
     * estimate. Use type none when the merchant makes no timing promise. How a delivery method
     * estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window.
     */
    "estimate": DeliveryEstimateRule;
    /**
     * Shape $ (Value): integer string. Minimum remaining quote lifetime required before Flint
     * offers this method. Required for calculated, callback, and caller_supplied pricing; defaults
     * to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum:
     * 899.
     */
    "minimum_option_lifetime_seconds": `${bigint}`;
    /**
     * Shape $ (Value): {@link DeliveryMethodOriginSelector}. Where delivery starts. A method can
     * use a fixed location or a delivery location set; origin.type determines allocation or buyer
     * pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an
     * allocated group of locations, or a collection of pickup locations.
     */
    "origin": DeliveryMethodOriginSelector;
    /**
     * Shape $ (Value): {@link DeliveryPricingStrategy}. How Flint calculates the delivery charge.
     * How a delivery method sets its price, selected by `type`. Only the matching property
     * (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.
     */
    "pricing": DeliveryPricingStrategy;
    /**
     * Shape $ (Value): object. Buyer-visible structured details supplied by the merchant. Shape
     * $.instructions (Optional): string. Buyer-visible instructions for this method. maxLength:
     * 2048. Shape $.pickup_mode (Optional): string. Required for pickup methods and rejected for
     * other method types. Value enum: "in_store", "curbside", "locker", "other". Shape
     * $.service_level (Optional): string. Buyer-visible service level. Shipment accepts economy,
     * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
     * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight",
     * "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /** Shape $ (Value): string. Buyer-visible instructions for this method. maxLength: 2048. */
        "instructions"?: string;
        /**
         * Shape $ (Value): string. Required for pickup methods and rejected for other method
         * types. Value enum: "in_store", "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Shape $ (Value): string. Buyer-visible service level. Shipment accepts economy,
         * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
         * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
         * "overnight", "same_day", "on_demand", "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    };
    /**
     * Shape $ (Value): Array of string. Address and coordinate fields a callback method requires
     * and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $[] (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method
     * asks for. A delivery selection can leave out required fields, but payment needs them. Shape
     * $[] (Value): {@link DeliveryRecipientRequirement}. Says whether a recipient field (`name`,
     * `email`, or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * Shape $ (Value): integer string. How long after evaluation Flint guarantees a selected
     * price, when that is later than the option expiry. Defaults to 0, which uses the option
     * expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until
     * the checkout's calculation expiry. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds": `${bigint}`;
    /**
     * Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "taxable": boolean | null;
};
/**
 * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequest}. The configuration you supply
 * when creating a delivery method. `origin` and `pricing` are required.
 */
export type DeliveryMethodConfigurationCreateRequest = ({
    /**
     * Shape $ (Value): {@link BuyerInstructionsConfig}. Controls whether checkout collects buyer
     * instructions for this method. Controls buyer instructions for a delivery option. Omit it
     * from a method configuration to disable instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfig;
    /**
     * Shape $ (Value): string or null. Tax category of the delivery charge, which decides its
     * automatic tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpression;
    /**
     * Shape $ (Value): {@link DeliveryEstimateRule}. The buyer-visible delivery or pickup
     * estimate. Use type none when the merchant makes no timing promise. The timing estimate rule
     * you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule
     * window.
     */
    "estimate"?: DeliveryEstimateRule;
    /**
     * Shape $ (Value): integer string. Minimum remaining quote lifetime required before Flint
     * offers this method. Required for calculated, callback, and caller_supplied pricing; defaults
     * to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum:
     * 899.
     */
    "minimum_option_lifetime_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequest}. Where delivery starts. A
     * method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequest;
    /**
     * Shape $ (Value): {@link DeliveryPricingStrategyCreateRequest}. The pricing strategy you
     * supply when creating a delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyCreateRequest;
    /**
     * Shape $ (Value): object. Buyer-visible structured details supplied by the merchant. Shape
     * $.instructions (Optional): string. Buyer-visible instructions for this method. minLength: 1.
     * maxLength: 2048. Shape $.pickup_mode (Optional): string. Required for pickup methods and
     * rejected for other method types. Value enum: "in_store", "curbside", "locker", "other".
     * Shape $.service_level (Optional): string. Buyer-visible service level. Shipment accepts
     * economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /**
         * Shape $ (Value): string. Buyer-visible instructions for this method. minLength: 1.
         * maxLength: 2048.
         */
        "instructions"?: string;
        /**
         * Shape $ (Value): string. Required for pickup methods and rejected for other method
         * types. Value enum: "in_store", "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Shape $ (Value): string. Buyer-visible service level. Shipment accepts economy,
         * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
         * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
         * "overnight", "same_day", "on_demand", "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    };
    /**
     * Shape $ (Value): Array of string. Address and coordinate fields a callback method requires
     * and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $[] (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method
     * asks for. A delivery selection can leave out required fields, but payment needs them. Shape
     * $[] (Value): {@link DeliveryRecipientRequirement}. Says whether a recipient field (`name`,
     * `email`, or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * Shape $ (Value): integer string. How long after evaluation Flint guarantees a selected
     * price, when that is later than the option expiry. Defaults to 0, which uses the option
     * expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until
     * the checkout's calculation expiry. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * Shape $ (Value): {@link DeliveryMethodConfigurationCreateRequestInput}. The configuration you
 * supply when creating a delivery method. `origin` and `pricing` are required.
 */
export type DeliveryMethodConfigurationCreateRequestInput = ({
    /**
     * Shape $ (Value): {@link BuyerInstructionsConfigInput}. Controls whether checkout collects
     * buyer instructions for this method. Controls buyer instructions for a delivery option. Omit
     * it from a method configuration to disable instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfigInput;
    /**
     * Shape $ (Value): string or null. Tax category of the delivery charge, which decides its
     * automatic tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where
     * this method is offered. Omit this field to offer the method everywhere the merchant serves.
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionInput;
    /**
     * Shape $ (Value): {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or
     * pickup estimate. Use type none when the merchant makes no timing promise. The timing
     * estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a
     * schedule window.
     */
    "estimate"?: DeliveryEstimateRuleRequestInput;
    /**
     * Shape $ (Value): integer string. Minimum remaining quote lifetime required before Flint
     * offers this method. Required for calculated, callback, and caller_supplied pricing; defaults
     * to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum:
     * 899.
     */
    "minimum_option_lifetime_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A
     * method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryPricingStrategyCreateRequestInput}. The pricing strategy you
     * supply when creating a delivery method. Set `type` and the matching property.
     */
    "pricing": DeliveryPricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): object. Buyer-visible structured details supplied by the merchant. Shape
     * $.instructions (Optional): string. Buyer-visible instructions for this method. minLength: 1.
     * maxLength: 2048. Shape $.pickup_mode (Optional): string. Required for pickup methods and
     * rejected for other method types. Value enum: "in_store", "curbside", "locker", "other".
     * Shape $.service_level (Optional): string. Buyer-visible service level. Shipment accepts
     * economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /**
         * Shape $ (Value): string. Buyer-visible instructions for this method. minLength: 1.
         * maxLength: 2048.
         */
        "instructions"?: string;
        /**
         * Shape $ (Value): string. Required for pickup methods and rejected for other method
         * types. Value enum: "in_store", "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Shape $ (Value): string. Buyer-visible service level. Shipment accepts economy,
         * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
         * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
         * "overnight", "same_day", "on_demand", "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    };
    /**
     * Shape $ (Value): Array of string. Address and coordinate fields a callback method requires
     * and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $[] (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate">;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirementInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * Shape $[] (Value): {@link DeliveryRecipientRequirementInput}. Says whether a recipient field
     * (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>;
    /**
     * Shape $ (Value): integer string. How long after evaluation Flint guarantees a selected
     * price, when that is later than the option expiry. Defaults to 0, which uses the option
     * expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until
     * the checkout's calculation expiry. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequest}. Only the keys you send change;
 * keys you leave out keep their current values. Each key you send replaces that part of the
 * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
 * null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is
 * an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create
 * one, and leave out a rate to remove it. The result must be a configuration you could create,
 * including pickup_mode for pickup methods. Requires expected_version. An empty configuration is
 * invalid. minProperties: 1.
 */
export type DeliveryMethodConfigurationPatchRequest = {
    /**
     * Shape $ (Value): object or null. Controls whether checkout collects buyer instructions for
     * this method. Null disables instruction collection. Shape $.enabled (Required): boolean.
     * Whether checkout collects buyer instructions. Shape $.label (Optional): string. Checkout
     * field label, without leading or trailing whitespace. Clients use a delivery-type default
     * when omitted. minLength: 1. maxLength: 255. Shape $.placeholder (Optional): string. Checkout
     * field placeholder, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 500. Shape $.required (Required): boolean.
     * Whether the buyer must enter instructions before selecting the option. Requires
     * enabled=true.
     */
    "buyer_instructions"?: {
        /** Shape $ (Value): boolean. Whether checkout collects buyer instructions. */
        "enabled": boolean;
        /**
         * Shape $ (Value): string. Checkout field label, without leading or trailing whitespace.
         * Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255.
         */
        "label"?: string;
        /**
         * Shape $ (Value): string. Checkout field placeholder, without leading or trailing
         * whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength:
         * 500.
         */
        "placeholder"?: string;
        /**
         * Shape $ (Value): boolean. Whether the buyer must enter instructions before selecting the
         * option. Requires enabled=true.
         */
        "required": boolean;
    }
        | null;
    /**
     * Shape $ (Value): string or null. Tax category of the delivery charge, which decides its
     * automatic tax and appears in tax records and reporting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Null uses settings.tax.default_delivery_tax_category, or,
     * when that is unset, shipping for shipment, delivery for local_delivery, or service_fee for
     * pickup. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Shape $ (Value): (object or null) and Alternative shapes (see declared variants). Conditions
     * that decide where this method is offered. Null removes the conditions, so the method is
     * offered everywhere the merchant serves. Shape $.all (Optional): Array of {@link
     * DeliveryEligibilityExpression}. minItems: 1. maxItems: 100. Shape $.all[] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * Shape $.any (Optional): Array of {@link DeliveryEligibilityExpression}. minItems: 1.
     * maxItems: 100. Shape $.any[] (Value): {@link DeliveryEligibilityExpression}. A boolean
     * expression containing exactly one operator or typed condition at each node. Expressions
     * support at most 8 levels and 100 total nodes. Shape $.country (Optional): {@link
     * DeliveryStateCondition}. A delivery eligibility condition that matches when the address
     * country is one of `values`. Shape $.customer_has_email (Optional): {@link
     * DeliveryCustomerBooleanCondition}. A delivery eligibility condition that tests a true or
     * false fact about the customer against `value`. Shape $.customer_has_phone (Optional): {@link
     * DeliveryCustomerBooleanCondition}. A delivery eligibility condition that tests a true or
     * false fact about the customer against `value`. Shape $.customer_merchant_verified
     * (Optional): {@link DeliveryCustomerBooleanCondition}. Matches the is_merchant_verified flag
     * you set on the customer against value. A delivery eligibility condition that tests a true or
     * false fact about the customer against `value`. Shape $.customer_segment (Optional): {@link
     * AddRiskListItemsRequest}. Matches the free-form segment you assign to the customer against
     * values. A delivery eligibility condition that matches customers in one of the listed
     * segments (`values`). Shape $.not (Optional): {@link DeliveryEligibilityExpression}. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. Shape $.postal_code (Optional):
     * {@link DeliveryPostalCodeCondition}. A delivery eligibility condition that matches the
     * address postal code against exact or prefix `values`. Shape $.radius (Optional): {@link
     * DeliveryRadiusCondition}. Eligibility condition that matches when the destination or buyer
     * location is within `maximum_distance` of an origin, measured in a straight line. Shape
     * $.state (Optional): {@link DeliveryStateCondition}. Eligibility condition that matches when
     * the destination or buyer location is in one of the listed states or provinces, given as ISO
     * 3166-2 codes. Shape $.subscription_purchase (Optional): {@link
     * DeliveryCustomerBooleanCondition}. A delivery eligibility condition that tests a true or
     * false fact about the customer against `value`. Shape $.window_time (Optional): {@link
     * DeliveryWindowTimeCondition}. Eligibility condition that matches by time of day, using
     * `start_minute` and `end_minute`, on the listed `weekdays`. Shape $.zone (Optional): {@link
     * DeliveryZoneCondition}. Eligibility condition that matches when the destination or buyer
     * location falls inside the delivery zone `delivery_zone_id`. Shape $.oneOf[1] (Value):
     * object. Shape $.oneOf[2] (Value): object. Shape $.oneOf[3] (Value): object. Shape $.oneOf[4]
     * (Value): object. Shape $.oneOf[5] (Value): object. Shape $.oneOf[6] (Value): object. Shape
     * $.oneOf[7] (Value): object. Shape $.oneOf[8] (Value): object. Shape $.oneOf[9] (Value):
     * object. Shape $.oneOf[10] (Value): object. Shape $.oneOf[11] (Value): object. Shape
     * $.oneOf[12] (Value): object. Shape $.oneOf[13] (Value): object. Shape $.oneOf[14] (Value):
     * object. Shape $.oneOf[15] (Value): null.
     */
    "eligibility"?: ({
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpression}. minItems: 1. maxItems:
         * 100. Shape $[] (Value): {@link DeliveryEligibilityExpression}. A boolean expression
         * containing exactly one operator or typed condition at each node. Expressions support at
         * most 8 levels and 100 total nodes.
         */
        "all"?: Array<DeliveryEligibilityExpression>;
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpression}. minItems: 1. maxItems:
         * 100. Shape $[] (Value): {@link DeliveryEligibilityExpression}. A boolean expression
         * containing exactly one operator or typed condition at each node. Expressions support at
         * most 8 levels and 100 total nodes.
         */
        "any"?: Array<DeliveryEligibilityExpression>;
        /**
         * Shape $ (Value): {@link DeliveryStateCondition}. A delivery eligibility condition that
         * matches when the address country is one of `values`.
         */
        "country"?: DeliveryStateCondition;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_email"?: DeliveryCustomerBooleanCondition;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_phone"?: DeliveryCustomerBooleanCondition;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. Matches the
         * is_merchant_verified flag you set on the customer against value. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_merchant_verified"?: DeliveryCustomerBooleanCondition;
        /**
         * Shape $ (Value): {@link AddRiskListItemsRequest}. Matches the free-form segment you
         * assign to the customer against values. A delivery eligibility condition that matches
         * customers in one of the listed segments (`values`).
         */
        "customer_segment"?: AddRiskListItemsRequest;
        /**
         * Shape $ (Value): {@link DeliveryEligibilityExpression}. A boolean expression containing
         * exactly one operator or typed condition at each node. Expressions support at most 8
         * levels and 100 total nodes.
         */
        "not"?: DeliveryEligibilityExpression;
        /**
         * Shape $ (Value): {@link DeliveryPostalCodeCondition}. A delivery eligibility condition
         * that matches the address postal code against exact or prefix `values`.
         */
        "postal_code"?: DeliveryPostalCodeCondition;
        /**
         * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches
         * when the destination or buyer location is within `maximum_distance` of an origin,
         * measured in a straight line.
         */
        "radius"?: DeliveryRadiusCondition;
        /**
         * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when
         * the destination or buyer location is in one of the listed states or provinces, given as
         * ISO 3166-2 codes.
         */
        "state"?: DeliveryStateCondition;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "subscription_purchase"?: DeliveryCustomerBooleanCondition;
        /**
         * Shape $ (Value): {@link DeliveryWindowTimeCondition}. Eligibility condition that matches
         * by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
         */
        "window_time"?: DeliveryWindowTimeCondition;
        /**
         * Shape $ (Value): {@link DeliveryZoneCondition}. Eligibility condition that matches when
         * the destination or buyer location falls inside the delivery zone `delivery_zone_id`.
         */
        "zone"?: DeliveryZoneCondition;
    }
        | null)
        & (({
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpression}. minItems: 1. maxItems:
         * 100. Shape $[] (Value): {@link DeliveryEligibilityExpression}. A boolean expression
         * containing exactly one operator or typed condition at each node. Expressions support at
         * most 8 levels and 100 total nodes.
         */
        "all": Array<DeliveryEligibilityExpression>;
    })
        | ({
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpression}. minItems: 1. maxItems:
         * 100. Shape $[] (Value): {@link DeliveryEligibilityExpression}. A boolean expression
         * containing exactly one operator or typed condition at each node. Expressions support at
         * most 8 levels and 100 total nodes.
         */
        "any": Array<DeliveryEligibilityExpression>;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryEligibilityExpression}. A boolean expression containing
         * exactly one operator or typed condition at each node. Expressions support at most 8
         * levels and 100 total nodes.
         */
        "not": DeliveryEligibilityExpression;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryZoneCondition}. Eligibility condition that matches when
         * the destination or buyer location falls inside the delivery zone `delivery_zone_id`.
         */
        "zone": DeliveryZoneCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryStateCondition}. A delivery eligibility condition that
         * matches when the address country is one of `values`.
         */
        "country": DeliveryStateCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when
         * the destination or buyer location is in one of the listed states or provinces, given as
         * ISO 3166-2 codes.
         */
        "state": DeliveryStateCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryPostalCodeCondition}. A delivery eligibility condition
         * that matches the address postal code against exact or prefix `values`.
         */
        "postal_code": DeliveryPostalCodeCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches
         * when the destination or buyer location is within `maximum_distance` of an origin,
         * measured in a straight line.
         */
        "radius": DeliveryRadiusCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryWindowTimeCondition}. Eligibility condition that matches
         * by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
         */
        "window_time": DeliveryWindowTimeCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link AddRiskListItemsRequest}. Matches the free-form segment you
         * assign to the customer against values. A delivery eligibility condition that matches
         * customers in one of the listed segments (`values`).
         */
        "customer_segment": AddRiskListItemsRequest;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. Matches the
         * is_merchant_verified flag you set on the customer against value. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_merchant_verified": DeliveryCustomerBooleanCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_email": DeliveryCustomerBooleanCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_phone": DeliveryCustomerBooleanCondition;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanCondition}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "subscription_purchase": DeliveryCustomerBooleanCondition;
    })
        | (null)
        | (unknown));
    /**
     * Shape $ (Value): object or null. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. Null restores type none, when the pricing
     * type allows it. Shape $.schedule_window (Optional): {@link DeliveryScheduleWindowRule}.
     * Scheduled-window estimate rule you supply for a delivery method, defined by its
     * `availability` schedule. Shape $.transit_time (Optional): {@link DeliveryTransitTimeRule}.
     * Estimate rule giving a delivery method's handling time and transit time as ranges of
     * business days. Shape $.type (Required): string. Value enum: "none", "transit_time",
     * "schedule_window".
     */
    "estimate"?: {
        /**
         * Shape $ (Value): {@link DeliveryScheduleWindowRule}. Scheduled-window estimate rule you
         * supply for a delivery method, defined by its `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRule;
        /**
         * Shape $ (Value): {@link DeliveryTransitTimeRule}. Estimate rule giving a delivery
         * method's handling time and transit time as ranges of business days.
         */
        "transit_time"?: DeliveryTransitTimeRule;
        /** Shape $ (Value): string.  Value enum: "none", "transit_time", "schedule_window". */
        "type": "none" | "transit_time" | "schedule_window" | (string & {});
    }
        | null;
    /**
     * Shape $ (Value): integer string or null. Minimum remaining quote lifetime required before
     * Flint offers this method. Required for calculated, callback, and caller_supplied pricing;
     * defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Null
     * restores 0 for fixed, tiered, or rate_table pricing. It is invalid for calculated, callback,
     * or caller_supplied pricing. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequest}. Where delivery starts. A
     * method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. Null is invalid. The origin you supply for a delivery
     * method, chosen by `type`: a fixed location, or locations from a delivery location set or an
     * inline list.
     */
    "origin"?: DeliveryMethodOriginSelectorRequest;
    /**
     * Shape $ (Value): {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery
     * charge. Null is invalid. The pricing strategy you supply when updating a delivery method.
     * Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequest;
    /**
     * Shape $ (Value): object or null. Buyer-visible structured details supplied by the merchant.
     * Null removes the public details; pickup methods still require pickup_mode. minProperties: 1.
     * Shape $.instructions (Optional): string. Buyer-visible instructions for this method.
     * minLength: 1. maxLength: 2048. Shape $.pickup_mode (Optional): string. Required for pickup
     * methods and rejected for other method types. Value enum: "in_store", "curbside", "locker",
     * "other". Shape $.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /**
         * Shape $ (Value): string. Buyer-visible instructions for this method. minLength: 1.
         * maxLength: 2048.
         */
        "instructions"?: string;
        /**
         * Shape $ (Value): string. Required for pickup methods and rejected for other method
         * types. Value enum: "in_store", "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Shape $ (Value): string. Buyer-visible service level. Shipment accepts economy,
         * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
         * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
         * "overnight", "same_day", "on_demand", "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    }
        | null;
    /**
     * Shape $ (Value): Array of string. Address and coordinate fields a callback method requires
     * and is allowed to receive. Use [] to clear it. Null is invalid. maxItems: 12. uniqueItems:
     * true. [] enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate". Shape $[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method
     * asks for. A delivery selection can leave out required fields, but payment needs them. Use []
     * to clear it. Null is invalid. Shape $[] (Value): {@link DeliveryRecipientRequirement}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * Shape $ (Value): integer string or null. How long after evaluation Flint guarantees a
     * selected price, when that is later than the option expiry. Defaults to 0, which uses the
     * option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory
     * hold until the checkout's calculation expiry. Null restores 0, which uses the option expiry.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "selection_guarantee_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null follows
     * tax.default_delivery_taxable in the merchant's settings.
     */
    "taxable"?: boolean | null;
};
/**
 * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequestInput}. Only the keys you send
 * change; keys you leave out keep their current values. Each key you send replaces that part of
 * the configuration whole. Null removes an optional key, as each field describes. Arrays can't be
 * null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is
 * an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create
 * one, and leave out a rate to remove it. The result must be a configuration you could create,
 * including pickup_mode for pickup methods. Requires expected_version. An empty configuration is
 * invalid. minProperties: 1.
 */
export type DeliveryMethodConfigurationPatchRequestInput = {
    /**
     * Shape $ (Value): object or null. Controls whether checkout collects buyer instructions for
     * this method. Null disables instruction collection. Shape $.enabled (Required): boolean.
     * Whether checkout collects buyer instructions. Shape $.label (Optional): string. Checkout
     * field label, without leading or trailing whitespace. Clients use a delivery-type default
     * when omitted. minLength: 1. maxLength: 255. Shape $.placeholder (Optional): string. Checkout
     * field placeholder, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 500. Shape $.required (Required): boolean.
     * Whether the buyer must enter instructions before selecting the option. Requires
     * enabled=true.
     */
    "buyer_instructions"?: {
        /** Shape $ (Value): boolean. Whether checkout collects buyer instructions. */
        "enabled": boolean;
        /**
         * Shape $ (Value): string. Checkout field label, without leading or trailing whitespace.
         * Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255.
         */
        "label"?: string;
        /**
         * Shape $ (Value): string. Checkout field placeholder, without leading or trailing
         * whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength:
         * 500.
         */
        "placeholder"?: string;
        /**
         * Shape $ (Value): boolean. Whether the buyer must enter instructions before selecting the
         * option. Requires enabled=true.
         */
        "required": boolean;
    }
        | null;
    /**
     * Shape $ (Value): string or null. Tax category of the delivery charge, which decides its
     * automatic tax and appears in tax records and reporting. Automatic tax calculates the
     * shipping and delivery categories at the general rate and refuses the others with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Null uses settings.tax.default_delivery_tax_category, or,
     * when that is unset, shipping for shipment, delivery for local_delivery, or service_fee for
     * pickup. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Shape $ (Value): (object or null) and Alternative shapes (see declared variants). Conditions
     * that decide where this method is offered. Null removes the conditions, so the method is
     * offered everywhere the merchant serves. Shape $.all (Optional): Array of {@link
     * DeliveryEligibilityExpressionInput}. minItems: 1. maxItems: 100. Shape $.all[] (Value):
     * {@link DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one
     * operator or typed condition at each node. Expressions support at most 8 levels and 100 total
     * nodes. Shape $.any (Optional): Array of {@link DeliveryEligibilityExpressionInput}.
     * minItems: 1. maxItems: 100. Shape $.any[] (Value): {@link
     * DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * Shape $.country (Optional): {@link DeliveryCountryConditionInput}. A delivery eligibility
     * condition that matches when the address country is one of `values`. Shape
     * $.customer_has_email (Optional): {@link DeliveryCustomerBooleanConditionInput}. A delivery
     * eligibility condition that tests a true or false fact about the customer against `value`.
     * Shape $.customer_has_phone (Optional): {@link DeliveryCustomerBooleanConditionInput}. A
     * delivery eligibility condition that tests a true or false fact about the customer against
     * `value`. Shape $.customer_merchant_verified (Optional): {@link
     * DeliveryCustomerBooleanConditionInput}. Matches the is_merchant_verified flag you set on the
     * customer against value. A delivery eligibility condition that tests a true or false fact
     * about the customer against `value`. Shape $.customer_segment (Optional): {@link
     * DeliveryCustomerSegmentConditionInput}. Matches the free-form segment you assign to the
     * customer against values. A delivery eligibility condition that matches customers in one of
     * the listed segments (`values`). Shape $.not (Optional): {@link
     * DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * Shape $.postal_code (Optional): {@link DeliveryPostalCodeConditionInput}. A delivery
     * eligibility condition that matches the address postal code against exact or prefix `values`.
     * Shape $.radius (Optional): {@link DeliveryRadiusConditionInput}. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line. Shape $.state (Optional): {@link DeliveryStateConditionInput}.
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes. Shape $.subscription_purchase
     * (Optional): {@link DeliveryCustomerBooleanConditionInput}. A delivery eligibility condition
     * that tests a true or false fact about the customer against `value`. Shape $.window_time
     * (Optional): {@link DeliveryWindowTimeConditionInput}. Eligibility condition that matches by
     * time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. Shape $.zone
     * (Optional): {@link DeliveryZoneConditionInput}. Eligibility condition that matches when the
     * destination or buyer location falls inside the delivery zone `delivery_zone_id`. Shape
     * $.oneOf[1] (Value): object. Shape $.oneOf[2] (Value): object. Shape $.oneOf[3] (Value):
     * object. Shape $.oneOf[4] (Value): object. Shape $.oneOf[5] (Value): object. Shape $.oneOf[6]
     * (Value): object. Shape $.oneOf[7] (Value): object. Shape $.oneOf[8] (Value): object. Shape
     * $.oneOf[9] (Value): object. Shape $.oneOf[10] (Value): object. Shape $.oneOf[11] (Value):
     * object. Shape $.oneOf[12] (Value): object. Shape $.oneOf[13] (Value): object. Shape
     * $.oneOf[14] (Value): object. Shape $.oneOf[15] (Value): null.
     */
    "eligibility"?: ({
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpressionInput}. minItems: 1.
         * maxItems: 100. Shape $[] (Value): {@link DeliveryEligibilityExpressionInput}. A boolean
         * expression containing exactly one operator or typed condition at each node. Expressions
         * support at most 8 levels and 100 total nodes.
         */
        "all"?: Array<DeliveryEligibilityExpressionInput>;
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpressionInput}. minItems: 1.
         * maxItems: 100. Shape $[] (Value): {@link DeliveryEligibilityExpressionInput}. A boolean
         * expression containing exactly one operator or typed condition at each node. Expressions
         * support at most 8 levels and 100 total nodes.
         */
        "any"?: Array<DeliveryEligibilityExpressionInput>;
        /**
         * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
         * that matches when the address country is one of `values`.
         */
        "country"?: DeliveryCountryConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_email"?: DeliveryCustomerBooleanConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_phone"?: DeliveryCustomerBooleanConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. Matches the
         * is_merchant_verified flag you set on the customer against value. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_merchant_verified"?: DeliveryCustomerBooleanConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryCustomerSegmentConditionInput}. Matches the free-form
         * segment you assign to the customer against values. A delivery eligibility condition that
         * matches customers in one of the listed segments (`values`).
         */
        "customer_segment"?: DeliveryCustomerSegmentConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. A boolean expression
         * containing exactly one operator or typed condition at each node. Expressions support at
         * most 8 levels and 100 total nodes.
         */
        "not"?: DeliveryEligibilityExpressionInput;
        /**
         * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility
         * condition that matches the address postal code against exact or prefix `values`.
         */
        "postal_code"?: DeliveryPostalCodeConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that
         * matches when the destination or buyer location is within `maximum_distance` of an
         * origin, measured in a straight line.
         */
        "radius"?: DeliveryRadiusConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
         * when the destination or buyer location is in one of the listed states or provinces,
         * given as ISO 3166-2 codes.
         */
        "state"?: DeliveryStateConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "subscription_purchase"?: DeliveryCustomerBooleanConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryWindowTimeConditionInput}. Eligibility condition that
         * matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
         */
        "window_time"?: DeliveryWindowTimeConditionInput;
        /**
         * Shape $ (Value): {@link DeliveryZoneConditionInput}. Eligibility condition that matches
         * when the destination or buyer location falls inside the delivery zone
         * `delivery_zone_id`.
         */
        "zone"?: DeliveryZoneConditionInput;
    }
        | null)
        & (({
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpressionInput}. minItems: 1.
         * maxItems: 100. Shape $[] (Value): {@link DeliveryEligibilityExpressionInput}. A boolean
         * expression containing exactly one operator or typed condition at each node. Expressions
         * support at most 8 levels and 100 total nodes.
         */
        "all": Array<DeliveryEligibilityExpressionInput>;
    })
        | ({
        /**
         * Shape $ (Value): Array of {@link DeliveryEligibilityExpressionInput}. minItems: 1.
         * maxItems: 100. Shape $[] (Value): {@link DeliveryEligibilityExpressionInput}. A boolean
         * expression containing exactly one operator or typed condition at each node. Expressions
         * support at most 8 levels and 100 total nodes.
         */
        "any": Array<DeliveryEligibilityExpressionInput>;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. A boolean expression
         * containing exactly one operator or typed condition at each node. Expressions support at
         * most 8 levels and 100 total nodes.
         */
        "not": DeliveryEligibilityExpressionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryZoneConditionInput}. Eligibility condition that matches
         * when the destination or buyer location falls inside the delivery zone
         * `delivery_zone_id`.
         */
        "zone": DeliveryZoneConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
         * that matches when the address country is one of `values`.
         */
        "country": DeliveryCountryConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
         * when the destination or buyer location is in one of the listed states or provinces,
         * given as ISO 3166-2 codes.
         */
        "state": DeliveryStateConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility
         * condition that matches the address postal code against exact or prefix `values`.
         */
        "postal_code": DeliveryPostalCodeConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that
         * matches when the destination or buyer location is within `maximum_distance` of an
         * origin, measured in a straight line.
         */
        "radius": DeliveryRadiusConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryWindowTimeConditionInput}. Eligibility condition that
         * matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
         */
        "window_time": DeliveryWindowTimeConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerSegmentConditionInput}. Matches the free-form
         * segment you assign to the customer against values. A delivery eligibility condition that
         * matches customers in one of the listed segments (`values`).
         */
        "customer_segment": DeliveryCustomerSegmentConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. Matches the
         * is_merchant_verified flag you set on the customer against value. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_merchant_verified": DeliveryCustomerBooleanConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_email": DeliveryCustomerBooleanConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "customer_has_phone": DeliveryCustomerBooleanConditionInput;
    })
        | ({
        /**
         * Shape $ (Value): {@link DeliveryCustomerBooleanConditionInput}. A delivery eligibility
         * condition that tests a true or false fact about the customer against `value`.
         */
        "subscription_purchase": DeliveryCustomerBooleanConditionInput;
    })
        | (null));
    /**
     * Shape $ (Value): object or null. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. Null restores type none, when the pricing
     * type allows it. Shape $.schedule_window (Optional): {@link
     * DeliveryScheduleWindowRuleRequestInput}. Scheduled-window estimate rule you supply for a
     * delivery method, defined by its `availability` schedule. Shape $.transit_time (Optional):
     * {@link DeliveryTransitTimeRuleInput}. Estimate rule giving a delivery method's handling time
     * and transit time as ranges of business days. Shape $.type (Required): string. Value enum:
     * "none", "transit_time", "schedule_window".
     */
    "estimate"?: {
        /**
         * Shape $ (Value): {@link DeliveryScheduleWindowRuleRequestInput}. Scheduled-window
         * estimate rule you supply for a delivery method, defined by its `availability` schedule.
         */
        "schedule_window"?: DeliveryScheduleWindowRuleRequestInput;
        /**
         * Shape $ (Value): {@link DeliveryTransitTimeRuleInput}. Estimate rule giving a delivery
         * method's handling time and transit time as ranges of business days.
         */
        "transit_time"?: DeliveryTransitTimeRuleInput;
        /** Shape $ (Value): string.  Value enum: "none", "transit_time", "schedule_window". */
        "type": "none" | "transit_time" | "schedule_window";
    }
        | null;
    /**
     * Shape $ (Value): integer string or null. Minimum remaining quote lifetime required before
     * Flint offers this method. Required for calculated, callback, and caller_supplied pricing;
     * defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Null
     * restores 0 for fixed, tiered, or rate_table pricing. It is invalid for calculated, callback,
     * or caller_supplied pricing. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 899.
     */
    "minimum_option_lifetime_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A
     * method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. Null is invalid. The origin you supply for a delivery
     * method, chosen by `type`: a fixed location, or locations from a delivery location set or an
     * inline list.
     */
    "origin"?: DeliveryMethodOriginSelectorRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the
     * delivery charge. Null is invalid. The pricing strategy you supply when updating a delivery
     * method. Set `type` and the matching property.
     */
    "pricing"?: DeliveryPricingStrategyRequestInput;
    /**
     * Shape $ (Value): object or null. Buyer-visible structured details supplied by the merchant.
     * Null removes the public details; pickup methods still require pickup_mode. minProperties: 1.
     * Shape $.instructions (Optional): string. Buyer-visible instructions for this method.
     * minLength: 1. maxLength: 2048. Shape $.pickup_mode (Optional): string. Required for pickup
     * methods and rejected for other method types. Value enum: "in_store", "curbside", "locker",
     * "other". Shape $.service_level (Optional): string. Buyer-visible service level. Shipment
     * accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /**
         * Shape $ (Value): string. Buyer-visible instructions for this method. minLength: 1.
         * maxLength: 2048.
         */
        "instructions"?: string;
        /**
         * Shape $ (Value): string. Required for pickup methods and rejected for other method
         * types. Value enum: "in_store", "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Shape $ (Value): string. Buyer-visible service level. Shipment accepts economy,
         * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
         * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
         * "overnight", "same_day", "on_demand", "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    }
        | null;
    /**
     * Shape $ (Value): Array of string. Address and coordinate fields a callback method requires
     * and is allowed to receive. Use [] to clear it. Null is invalid. maxItems: 12. uniqueItems:
     * true. [] enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate". Shape $[] (Value): string. Value enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate">;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirementInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * Use [] to clear it. Null is invalid. Shape $[] (Value): {@link
     * DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or
     * `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>;
    /**
     * Shape $ (Value): integer string or null. How long after evaluation Flint guarantees a
     * selected price, when that is later than the option expiry. Defaults to 0, which uses the
     * option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory
     * hold until the checkout's calculation expiry. Null restores 0, which uses the option expiry.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "selection_guarantee_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null follows
     * tax.default_delivery_taxable in the merchant's settings.
     */
    "taxable"?: boolean | null;
};
/**
 * Shape $ (Value): {@link DeliveryMethodConfigurationRequest}. The configuration you supply for a
 * delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient
 * requirements.
 */
export type DeliveryMethodConfigurationRequest = ({
    /**
     * Shape $ (Value): {@link BuyerInstructionsConfig}. Controls whether checkout collects buyer
     * instructions for this method. Controls buyer instructions for a delivery option. Omit it
     * from a method configuration to disable instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfig;
    /**
     * Shape $ (Value): string or null. Tax category of the delivery charge, which decides its
     * automatic tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpression;
    /**
     * Shape $ (Value): {@link DeliveryEstimateRule}. The buyer-visible delivery or pickup
     * estimate. Use type none when the merchant makes no timing promise. The timing estimate rule
     * you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule
     * window.
     */
    "estimate"?: DeliveryEstimateRule;
    /**
     * Shape $ (Value): integer string. Minimum remaining quote lifetime required before Flint
     * offers this method. Required for calculated, callback, and caller_supplied pricing; defaults
     * to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum:
     * 899.
     */
    "minimum_option_lifetime_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequest}. Where delivery starts. A
     * method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequest;
    /**
     * Shape $ (Value): {@link DeliveryPricingStrategyRequest}. How Flint calculates the delivery
     * charge. The pricing strategy you supply when updating a delivery method. Set `type` and the
     * matching property.
     */
    "pricing": DeliveryPricingStrategyRequest;
    /**
     * Shape $ (Value): object. Buyer-visible structured details supplied by the merchant. Shape
     * $.instructions (Optional): string. Buyer-visible instructions for this method. minLength: 1.
     * maxLength: 2048. Shape $.pickup_mode (Optional): string. Required for pickup methods and
     * rejected for other method types. Value enum: "in_store", "curbside", "locker", "other".
     * Shape $.service_level (Optional): string. Buyer-visible service level. Shipment accepts
     * economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /**
         * Shape $ (Value): string. Buyer-visible instructions for this method. minLength: 1.
         * maxLength: 2048.
         */
        "instructions"?: string;
        /**
         * Shape $ (Value): string. Required for pickup methods and rejected for other method
         * types. Value enum: "in_store", "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
        /**
         * Shape $ (Value): string. Buyer-visible service level. Shipment accepts economy,
         * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
         * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
         * "overnight", "same_day", "on_demand", "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled"
            | (string & {});
    };
    /**
     * Shape $ (Value): Array of string. Address and coordinate fields a callback method requires
     * and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $[] (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate"
        | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method
     * asks for. A delivery selection can leave out required fields, but payment needs them. Shape
     * $[] (Value): {@link DeliveryRecipientRequirement}. Says whether a recipient field (`name`,
     * `email`, or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * Shape $ (Value): integer string. How long after evaluation Flint guarantees a selected
     * price, when that is later than the option expiry. Defaults to 0, which uses the option
     * expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until
     * the checkout's calculation expiry. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/**
 * Shape $ (Value): {@link DeliveryMethodConfigurationRequestInput}. The configuration you supply
 * for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and
 * recipient requirements.
 */
export type DeliveryMethodConfigurationRequestInput = ({
    /**
     * Shape $ (Value): {@link BuyerInstructionsConfigInput}. Controls whether checkout collects
     * buyer instructions for this method. Controls buyer instructions for a delivery option. Omit
     * it from a method configuration to disable instruction collection.
     */
    "buyer_instructions"?: BuyerInstructionsConfigInput;
    /**
     * Shape $ (Value): string or null. Tax category of the delivery charge, which decides its
     * automatic tax and appears in tax records and reporting. Null inherits
     * settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment
     * methods, delivery for local delivery, or service_fee for pickup. Omit it on create to
     * inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates the shipping and delivery categories at the general
     * rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. Conditions that decide where
     * this method is offered. Omit this field to offer the method everywhere the merchant serves.
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "eligibility"?: DeliveryEligibilityExpressionInput;
    /**
     * Shape $ (Value): {@link DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or
     * pickup estimate. Use type none when the merchant makes no timing promise. The timing
     * estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a
     * schedule window.
     */
    "estimate"?: DeliveryEstimateRuleRequestInput;
    /**
     * Shape $ (Value): integer string. Minimum remaining quote lifetime required before Flint
     * offers this method. Required for calculated, callback, and caller_supplied pricing; defaults
     * to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum:
     * 899.
     */
    "minimum_option_lifetime_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A
     * method can use a fixed location or a delivery location set; origin.type determines
     * allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by
     * `type`: a fixed location, or locations from a delivery location set or an inline list.
     */
    "origin": DeliveryMethodOriginSelectorRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the
     * delivery charge. The pricing strategy you supply when updating a delivery method. Set `type`
     * and the matching property.
     */
    "pricing": DeliveryPricingStrategyRequestInput;
    /**
     * Shape $ (Value): object. Buyer-visible structured details supplied by the merchant. Shape
     * $.instructions (Optional): string. Buyer-visible instructions for this method. minLength: 1.
     * maxLength: 2048. Shape $.pickup_mode (Optional): string. Required for pickup methods and
     * rejected for other method types. Value enum: "in_store", "curbside", "locker", "other".
     * Shape $.service_level (Optional): string. Buyer-visible service level. Shipment accepts
     * economy, standard, expedited, express, overnight, same_day. Local delivery accepts
     * on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
     * "overnight", "same_day", "on_demand", "scheduled".
     */
    "public_details"?: {
        /**
         * Shape $ (Value): string. Buyer-visible instructions for this method. minLength: 1.
         * maxLength: 2048.
         */
        "instructions"?: string;
        /**
         * Shape $ (Value): string. Required for pickup methods and rejected for other method
         * types. Value enum: "in_store", "curbside", "locker", "other".
         */
        "pickup_mode"?: "in_store" | "curbside" | "locker" | "other";
        /**
         * Shape $ (Value): string. Buyer-visible service level. Shipment accepts economy,
         * standard, expedited, express, overnight, same_day. Local delivery accepts on_demand,
         * same_day, scheduled. Value enum: "economy", "standard", "expedited", "express",
         * "overnight", "same_day", "on_demand", "scheduled".
         */
        "service_level"?: "economy"
            | "standard"
            | "expedited"
            | "express"
            | "overnight"
            | "same_day"
            | "on_demand"
            | "scheduled";
    };
    /**
     * Shape $ (Value): Array of string. Address and coordinate fields a callback method requires
     * and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.line1",
     * "buyer_location.line2", "buyer_location.city", "buyer_location.state",
     * "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape
     * $[] (Value): string. Value enum: "destination_address", "destination_address.line1",
     * "destination_address.line2", "destination_address.city", "destination_address.state",
     * "destination_address.postal_code", "destination_address.country", "buyer_location",
     * "buyer_location.line1", "buyer_location.line2", "buyer_location.city",
     * "buyer_location.state", "buyer_location.postal_code", "buyer_location.country",
     * "buyer_location.coordinate".
     */
    "quote_input_fields"?: Array<"destination_address"
        | "destination_address.line1"
        | "destination_address.line2"
        | "destination_address.city"
        | "destination_address.state"
        | "destination_address.postal_code"
        | "destination_address.country"
        | "buyer_location"
        | "buyer_location.line1"
        | "buyer_location.line2"
        | "buyer_location.city"
        | "buyer_location.state"
        | "buyer_location.postal_code"
        | "buyer_location.country"
        | "buyer_location.coordinate">;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirementInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * Shape $[] (Value): {@link DeliveryRecipientRequirementInput}. Says whether a recipient field
     * (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>;
    /**
     * Shape $ (Value): integer string. How long after evaluation Flint guarantees a selected
     * price, when that is later than the option expiry. Defaults to 0, which uses the option
     * expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until
     * the checkout's calculation expiry. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "selection_guarantee_seconds"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null inherits
     * settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to
     * preserve the current value, or send null to clear it back to inheriting.
     */
    "taxable"?: boolean | null;
});
/** Shape $ (Value): {@link DeliveryMethodListResponse}. A page of `DeliveryMethod` objects. */
export type DeliveryMethodListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryMethod}. Shape $[] (Value): {@link DeliveryMethod}.
     * A configured shipping, pickup, local delivery, or service option.
     */
    "data": Array<DeliveryMethod>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelector}. Where a delivery method starts, chosen by
 * `type`: a fixed location, an allocated group of locations, or a collection of pickup locations.
 */
export type DeliveryMethodOriginSelector = ({
    /** Shape $ (Value): string. */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_location_set_revision_id"?: string;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorAllocatedOriginGroup}. The
 * `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.
 */
export type DeliveryMethodOriginSelectorAllocatedOriginGroup = ({
    /** Shape $ (Value): string. */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_location_set_revision_id"?: string;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[]
     * (Value): string.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): any.  Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & (({
    /** Shape $ (Value): string. */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[]
     * (Value): string.
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorFixedLocation}. The `fixed_location` variant
 * of `DeliveryMethodOriginSelector`.
 */
export type DeliveryMethodOriginSelectorFixedLocation = ({
    /** Shape $ (Value): string. */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_location_set_revision_id"?: string;
    /** Shape $ (Value): string. */
    "location_id": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed_location". */
    "type": unknown;
    /** Shape $ (Value): string. */
    "location_id": string;
}));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The
 * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`.
 */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroup = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[]
     * (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): any.  Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & (({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. minItems: 1. maxItems: 25.
     * uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The
 * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`.
 */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 25. uniqueItems: true. Shape $[]
     * (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): any.  Value enum: "allocated_origin_group". */
    "type": ("allocated_origin_group") & ("allocated_origin_group");
})
    & (({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. minItems: 1. maxItems: 25.
     * uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "location_ids": (Array<string>) & (Array<string>);
}))
    & ({
    "location_id"?: never;
}));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorInputFixedLocation}. The `fixed_location`
 * variant of `DeliveryMethodOriginSelectorInput`.
 */
export type DeliveryMethodOriginSelectorInputFixedLocation = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed_location". */
    "type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
}));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorInputFixedLocationInput}. The
 * `fixed_location` variant of `DeliveryMethodOriginSelectorInput`.
 */
export type DeliveryMethodOriginSelectorInputFixedLocationInput = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed_location". */
    "type": ("fixed_location") & ("fixed_location");
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
})
    & (({
    "delivery_location_set_id"?: never;
})
    & ({
    "delivery_location_set_revision_id"?: never;
})
    & ({
    "location_ids"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorInputPickupLocationCollection}. The
 * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
 */
export type DeliveryMethodOriginSelectorInputPickupLocationCollection = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 1000. uniqueItems: true. Shape $[]
     * (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): any.  Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & (({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. minItems: 1. maxItems: 1000.
     * uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
 * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
 */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionInput = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 1000. uniqueItems: true. Shape $[]
     * (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): any.  Value enum: "pickup_location_collection". */
    "type": ("pickup_location_collection") & ("pickup_location_collection");
})
    & (({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. minItems: 1. maxItems: 1000.
     * uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "location_ids": (Array<string>) & (Array<string>);
}))
    & ({
    "location_id"?: never;
}));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorPickupLocationCollection}. The
 * `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.
 */
export type DeliveryMethodOriginSelectorPickupLocationCollection = ({
    /** Shape $ (Value): string. */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_location_set_revision_id"?: string;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 1000. uniqueItems: true. Shape $[]
     * (Value): string.
     */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): any.  Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & (({
    /** Shape $ (Value): string. */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 1000. uniqueItems: true. Shape $[]
     * (Value): string.
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequest}. The origin you supply for a
 * delivery method, chosen by `type`: a fixed location, or locations from a delivery location set
 * or an inline list.
 */
export type DeliveryMethodOriginSelectorRequest = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryMethodOriginSelectorRequestInput}. The origin you supply for a
 * delivery method, chosen by `type`: a fixed location, or locations from a delivery location set
 * or an inline list.
 */
export type DeliveryMethodOriginSelectorRequestInput = ({
    /**
     * Shape $ (Value): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery
     * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique
     * Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads
     * return these Location IDs without exposing the managed set. Shape $[] (Value): string.
     * minLength: 1.
     */
    "location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection";
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link DeliveryMethodResponse}. A response containing `DeliveryMethod` data. */
export type DeliveryMethodResponse = {
    /**
     * Shape $ (Value): {@link DeliveryMethod}. A configured shipping, pickup, local delivery, or
     * service option.
     */
    "data": DeliveryMethod;
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
export type DeliveryMethodsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDeliveryMethodRequestInput}. The request body for: Create
     * delivery method.
     */
    "body": InputValue<CreateDeliveryMethodRequestInput>;
};
export type DeliveryMethodsGetInput = {
    /** Shape $ (Value): string. */
    "delivery_method_id": InputValue<string>;
};
export type DeliveryMethodsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "shipment", "local_delivery",
     * "pickup". Shape $[] (Value): string. Value enum: "shipment", "local_delivery", "pickup".
     */
    "type"?: InputValue<Array<"shipment" | "local_delivery" | "pickup">>;
    /** Shape $ (Value): string. */
    "delivery_zone_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_location_set_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
};
export type DeliveryMethodsRemoveInput = {
    /** Shape $ (Value): string. */
    "delivery_method_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryMethodsUpdateInput = {
    /** Shape $ (Value): string. */
    "delivery_method_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateDeliveryMethodRequestInput}. The request body for: Update
     * delivery method.
     */
    "body": InputValue<UpdateDeliveryMethodRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryOptionProjection}. A delivery option in a quote or preview: its
 * price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery
 * details.
 */
export type DeliveryOptionProjection = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link DeliveryArrivalEstimate}. The estimated arrival date range for a
     * delivery option, as calendar dates in the option's timezone.
     */
    "arrival_estimate"?: DeliveryArrivalEstimate;
    /**
     * Shape $ (Value): {@link BuyerInstructionsConfig}. Controls buyer instructions for a delivery
     * option. Omit it from a method configuration to disable instruction collection.
     */
    "buyer_instructions": BuyerInstructionsConfig;
    /**
     * Shape $ (Value): string. Flint charge tax category. Value enum: "service_fee", "shipping",
     * "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    /** Shape $ (Value): string. */
    "consumed_by_delivery_selection_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_option_id"?: string;
    /**
     * Shape $ (Value): {@link DeliveryPlan}. Whether a delivery option is fulfilled in one
     * delivery or several, with the first arrival time, completion time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position": number;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteExecutionLegResource}. Where this option's
     * items leave from, one leg per origin Location. Under method_origin routing each method uses
     * its own origin, so a pickup option leaves from the chosen store while a shipment option can
     * leave from a warehouse. Selecting the option makes these legs the selection's execution
     * legs. Shape $[] (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery
     * choice group, identifying the origin Location the group's items leave from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): {@link DeliveryShipmentDetails}. Details of a local delivery option:
     * instructions and service level.
     */
    "local_delivery"?: DeliveryShipmentDetails;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A time window a buyer can choose for a delivery, with its start,
     * end, price, and the last moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**
     * Shape $ (Value): {@link DeliveryPickupDetails}. Pickup details of a delivery option: the
     * pickup mode and the pickup location.
     */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Shape $ (Value): Array of {@link DeliveryRecipientRequirement}. Recipient fields this option
     * asks for. A selection can leave out required fields, but payment needs them. Shape $[]
     * (Value): {@link DeliveryRecipientRequirement}. Says whether a recipient field (`name`,
     * `email`, or `phone`) is required for a delivery method, and the format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /** Shape $ (Value): boolean. */
    "recommended": boolean;
    /**
     * Shape $ (Value): {@link DeliveryShipmentDetails}. Shipment-specific details of a delivery
     * option or choice: the `service_level` and buyer `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    /** Shape $ (Value): boolean. */
    "taxable": boolean;
    /**
     * Shape $ (Value): string. IANA timezone for displaying window_start_at, window_end_at, and
     * any offered windows. Example: "America/New_York".
     */
    "timezone"?: string;
    /** Shape $ (Value): string.  Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "window_end_at"?: string;
    /** Shape $ (Value): string.  Value enum: "uniform", "varies". */
    "window_pricing"?: "uniform" | "varies" | (string & {});
    /** Shape $ (Value): string.  Value enum: "none", "offered". */
    "window_selection": "none" | "offered" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryPendingCallerRateRequest}. A delivery method and choice group
 * still waiting for a caller-supplied rate on a delivery quote.
 */
export type DeliveryPendingCallerRateRequest = {
    /** Shape $ (Value): string. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryPickupAvailability}. The result of a pickup locations preview:
 * each pickup location and whether it can supply the order, with input requirements and merchant
 * diagnostics.
 */
export type DeliveryPickupAvailability = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Shape $[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): Array of {@link DeliveryPickupAvailabilityLocationResource}. Up to 25
     * pickup locations, nearest first when Flint can place the buyer location, otherwise in the
     * order the pickup methods list them. maxItems: 25. Shape $[] (Value): {@link
     * DeliveryPickupAvailabilityLocationResource}. One pickup location in a pickup locations
     * preview, with its outcome, distance, compatible methods, and applicable quantities.
     */
    "locations": Array<DeliveryPickupAvailabilityLocationResource>;
    /**
     * Shape $ (Value): Array of {@link DeliveryPickupAvailabilityDiagnostic}. Configured Locations
     * the search left out, and listed Locations that cannot supply the order's tracked items.
     * Always present with an API key or dashboard credential as an array, including when empty.
     * Shape $[] (Value): {@link DeliveryPickupAvailabilityDiagnostic}. A merchant-only diagnostic
     * about a configured pickup location that was left out of the results or cannot supply the
     * order.
     */
    "merchant_diagnostics"?: Array<DeliveryPickupAvailabilityDiagnostic>;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`:
     * Lists the checkout session's pickup locations and whether each can supply its items. Value
     * enum: "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryPickupAvailabilityCandidateOutcome}. Whether pickup is available
 * at one location, chosen by `type`, with the reason when it is unavailable or cannot be
 * calculated.
 */
export type DeliveryPickupAvailabilityCandidateOutcome = {
    /**
     * Shape $ (Value): Array of {@link DeliveryAddressAdvisoryResource}. Shape $[] (Value): {@link
     * DeliveryAddressAdvisoryResource}. An address verification result for a delivery address or
     * buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Shape $ (Value): string. Why Flint could not calculate pickup availability and the action
     * that can make calculation succeed. - `eligibility_context_invalid`: Create a new checkout
     * session, then create a new quote. - `eligibility_dependency_failure`: Retry after the
     * eligibility dependency recovers. - `pickup_method_unavailable`: Activate or choose an
     * available pickup method. - `inventory_dependency_failure`: Retry after inventory
     * availability and routing recover. Value enum: "eligibility_context_invalid",
     * "eligibility_dependency_failure", "pickup_method_unavailable",
     * "inventory_dependency_failure".
     */
    "failure_category"?: "eligibility_context_invalid"
        | "eligibility_dependency_failure"
        | "pickup_method_unavailable"
        | "inventory_dependency_failure"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Shape $[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /**
     * Shape $ (Value): string. Value enum: "available", "unavailable", "input_required",
     * "cannot_calculate".
     */
    "type": "available" | "unavailable" | "input_required" | "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): string. Why pickup is unavailable and the action that can make it eligible.
     * - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer
     * facts or method eligibility rule. - `inventory_insufficient`: Reduce the requested quantity,
     * replenish inventory, or choose another pickup location. Value enum: "eligibility_no_match",
     * "inventory_insufficient".
     */
    "unavailable_reason"?: "eligibility_no_match" | "inventory_insufficient" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryPickupAvailabilityDiagnostic}. A merchant-only diagnostic about
 * a configured pickup location that was left out of the results or cannot supply the order.
 */
export type DeliveryPickupAvailabilityDiagnostic = {
    /**
     * Shape $ (Value): string. Stable reason a configured pickup location was left out of the
     * results or cannot supply the order. - `pickup_location_inactive`: The Location is inactive,
     * so it was left out. - `pickup_location_geography_unavailable`: The Location has no usable
     * published geography, so it was left out. - `pickup_location_inventory_unavailable`: The
     * Location does not allocate inventory, so it cannot supply the order's tracked items. It is
     * listed with an unavailable outcome. Items without tracked inventory need no allocation. -
     * `pickup_location_dependency_failure`: Flint could not resolve the configured Location. Value
     * enum: "pickup_location_inactive", "pickup_location_geography_unavailable",
     * "pickup_location_inventory_unavailable", "pickup_location_dependency_failure".
     */
    "code": "pickup_location_inactive"
        | "pickup_location_geography_unavailable"
        | "pickup_location_inventory_unavailable"
        | "pickup_location_dependency_failure"
        | (string & {});
    /** Shape $ (Value): string. */
    "diagnostic_id": string;
    /** Shape $ (Value): string. */
    "location_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string.  Value enum: "unavailable", "cannot_calculate". */
    "outcome": "unavailable" | "cannot_calculate" | (string & {});
    /** Shape $ (Value): string.  Value enum: "review_configuration", "retry". */
    "recommended_action": "review_configuration" | "retry" | (string & {});
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
    /** Shape $ (Value): string.  Value enum: "location". */
    "scope": "location" | (string & {});
    /** Shape $ (Value): string. */
    "summary": string;
};
/**
 * Shape $ (Value): {@link DeliveryPickupAvailabilityLocationResource}. One pickup location in a
 * pickup locations preview, with its outcome, distance, compatible methods, and applicable
 * quantities.
 */
export type DeliveryPickupAvailabilityLocationResource = {
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteLineItemResource}. Shape $[] (Value): {@link
     * DeliveryQuoteLineItemResource}. The quantity of an order line item, or of one of its bundle
     * components, that a pickup location applies to.
     */
    "applicable_quantities": Array<DeliveryQuoteLineItemResource>;
    /**
     * Shape $ (Value): {@link DeliveryPickupAvailabilityCandidateOutcome}. Whether pickup is
     * available at one location, chosen by `type`, with the reason when it is unavailable or
     * cannot be calculated.
     */
    "candidate_outcome": DeliveryPickupAvailabilityCandidateOutcome;
    /**
     * Shape $ (Value): Array of {@link DeliveryPickupAvailabilityMethodResource}. Shape $[]
     * (Value): {@link DeliveryPickupAvailabilityMethodResource}. A pickup delivery method, with
     * its revision, that can serve a pickup location.
     */
    "compatible_methods": Array<DeliveryPickupAvailabilityMethodResource>;
    /**
     * Shape $ (Value): number. Straight-line distance in meters from the buyer location. A buyer
     * location with only a postal code is measured from the postal code's center. Omitted when
     * Flint cannot place the buyer location or the store.
     */
    "distance_meters"?: number;
    /**
     * Shape $ (Value): {@link DeliveryPickupAvailabilityLocationSummary}. The ID, name, and
     * address of a pickup location in a pickup locations preview.
     */
    "location": DeliveryPickupAvailabilityLocationSummary;
};
/**
 * Shape $ (Value): {@link DeliveryPickupAvailabilityLocationSummary}. The ID, name, and address of
 * a pickup location in a pickup locations preview.
 */
export type DeliveryPickupAvailabilityLocationSummary = {
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. An address as returned on delivery quotes,
     * selections, previews, and pickup locations.
     */
    "address"?: DeliveryAddressRequest;
    /** Shape $ (Value): string. */
    "location_id": string;
    /** Shape $ (Value): string. */
    "name": string;
};
/**
 * Shape $ (Value): {@link DeliveryPickupAvailabilityMaximumDistanceRequestInput}. A maximum
 * distance from the buyer location, as a value and unit, that limits which pickup locations a
 * preview returns.
 */
export type DeliveryPickupAvailabilityMaximumDistanceRequestInput = {
    /** Shape $ (Value): string.  Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    /**
     * Shape $ (Value): number. Maximum distance from the buyer location, greater than zero, in the
     * selected unit. exclusiveMinimum: 0.
     */
    "value": number;
};
/**
 * Shape $ (Value): {@link DeliveryPickupAvailabilityMethodResource}. A pickup delivery method,
 * with its revision, that can serve a pickup location.
 */
export type DeliveryPickupAvailabilityMethodResource = {
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryPickupDetails}. Pickup details of a delivery option: the pickup
 * mode and the pickup location.
 */
export type DeliveryPickupDetails = {
    /**
     * Shape $ (Value): {@link DeliveryLocationSummaryResource}. A pickup location shown on a
     * delivery option: its name, address, instructions, and timezone.
     */
    "location"?: DeliveryLocationSummaryResource;
    /** Shape $ (Value): string.  Value enum: "in_store", "curbside", "locker", "other". */
    "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryPlan}. Whether a delivery option is fulfilled in one delivery or
 * several, with the first arrival time, completion time, and delivery count.
 */
export type DeliveryPlan = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "complete_by_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "first_arrival_at"?: string;
    /** Shape $ (Value): integer. */
    "planned_delivery_count"?: number;
    /** Shape $ (Value): string.  Value enum: "single_delivery", "multiple_deliveries". */
    "type": "single_delivery" | "multiple_deliveries" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryPostalCodeCondition}. A delivery eligibility condition that
 * matches the address postal code against exact or prefix `values`.
 */
export type DeliveryPostalCodeCondition = {
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * Shape $ (Value): Array of {@link DeliveryPostalCodeValue}. Postal codes, each with its
     * country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches
     * that code, and a prefix value matches every code that starts with it. A five-digit ZIP code
     * in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches
     * 07030-5788, which address verification returns for a full address. A ZIP+4 value matches
     * only that ZIP+4. Shape $[] (Value): {@link DeliveryPostalCodeValue}. A postal code or postal
     * code prefix with its country, used in a postal code condition.
     */
    "values": Array<DeliveryPostalCodeValue>;
};
/**
 * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition that
 * matches the address postal code against exact or prefix `values`.
 */
export type DeliveryPostalCodeConditionInput = {
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * Shape $ (Value): Array of {@link DeliveryPostalCodeValueInput}. Postal codes, each with its
     * country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches
     * that code, and a prefix value matches every code that starts with it. A five-digit ZIP code
     * in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches
     * 07030-5788, which address verification returns for a full address. A ZIP+4 value matches
     * only that ZIP+4. Shape $[] (Value): {@link DeliveryPostalCodeValueInput}. A postal code or
     * postal code prefix with its country, used in a postal code condition.
     */
    "values": Array<DeliveryPostalCodeValueInput>;
};
