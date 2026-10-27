import type { InputValue } from '../runtime.js';
import type { UpdateDeliveryProfileRequestInput, UpdateDeliveryRateCallbackRequestInput } from './types-47.js';
import type {
    DeliveryAddressRequest,
    DeliveryBuyerLocationRequest,
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryDistance,
    DeliveryDistanceInput,
    DeliveryAvailability,
    DeliveryAvailabilityInput
} from './types-11.js';
import type {
    DeliveryInputRequirement,
    DeliveryMerchantDiagnostic,
    DeliveryPendingCallerRateRequest,
    DeliveryOptionProjection,
    DeliveryPickupDetails,
    DeliveryPlan
} from './types-12.js';
import type { ResponseMeta } from './types-40.js';
import type { CreateDeliveryRateCallbackRequestInput } from './types-6.js';
import type {
    DeliveryPricingRate,
    DeliveryPricingRateCreateRequest,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRateRequest,
    DeliveryPricingRateRequestInput
} from './types-13.js';
import type { RevokeDeliveryDependencyRequestInput } from './types-42.js';
import type { MoneyValue } from './types-31.js';
import type { DeliveryShipmentDetails } from './types-15.js';
export type DeliveryProfilesRemoveInput = {
    /** Shape $ (Value): string. */
    "delivery_profile_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryProfilesUpdateInput = {
    /** Shape $ (Value): string. */
    "delivery_profile_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateDeliveryProfileRequestInput}. The request body for: Update
     * delivery profile.
     */
    "body": InputValue<UpdateDeliveryProfileRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryQuote}. An estimate of available delivery options and their
 * prices.
 */
export type DeliveryQuote = {
    /** Shape $ (Value): string. */
    "basis_delivery_quote_id"?: string;
    /** Shape $ (Value): string. */
    "basis_delivery_selection_id"?: string;
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. The normalized buyer
     * address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): Array of string. Buyer-safe reasons no delivery option was available.
     * Merchant configuration details are never included. [] enum: "address_required",
     * "address_incomplete", "outside_delivery_area", "no_pickup_location_nearby",
     * "unavailable_for_these_items", "temporarily_unavailable". Shape $[] (Value): string. Value
     * enum: "address_required", "address_incomplete", "outside_delivery_area",
     * "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable".
     */
    "buyer_reasons": Array<"address_required"
        | "address_incomplete"
        | "outside_delivery_area"
        | "no_pickup_location_nearby"
        | "unavailable_for_these_items"
        | "temporarily_unavailable"
        | (string & {})>;
    /** Shape $ (Value): string. Always present with an API key or dashboard credential. */
    "checkout_session_id"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteChoiceGroupResource}. Shape $[] (Value):
     * {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a delivery quote, with
     * the delivery options the buyer can choose, its availability status, and any input still
     * needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /** Shape $ (Value): string. */
    "consumed_by_delivery_selection_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_quote_id": string;
    /**
     * Shape $ (Value): integer string. Version of the order's delivery details evaluated by this
     * quote. Always present with an API key or dashboard credential. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "delivery_quote_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. An address as returned on delivery
     * quotes, selections, previews, and pickup locations.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Shape $ (Value): integer string. Version of the checkout eligibility context evaluated by
     * this quote. Always present with an API key or dashboard credential. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "eligibility_context_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Shape $ (Value): string. Authoritative expiry for this quote: 24 hours when every method
     * uses fixed, tiered, or rate_table pricing, and at most 15 minutes otherwise. A cart with
     * tracked inventory shortens it to the 5 minutes its stock check stays valid. Read this value
     * from every response. Format: date-time.
     */
    "expires_at": string;
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Inputs the delivery methods
     * need. A quote requirement, such as the destination address, is input a method needs before
     * Flint can price it. A selection requirement is input a delivery selection needs before
     * payment, such as a recipient field or delivery window an option requires. A method that
     * waits on the buyer's address or store, or on an address the buyer must correct, already
     * lists the recipient fields it requires. Those requirements name the method's choice group
     * and have no delivery_option_ids. Shape $[] (Value): {@link DeliveryInputRequirement}. An
     * input a delivery method needs, such as an address field or time window, with its
     * `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): Array of {@link DeliveryMerchantDiagnostic}. Always present with an API key
     * or dashboard credential. Shape $[] (Value): {@link DeliveryMerchantDiagnostic}. A
     * merchant-only diagnostic explaining why a delivery method produced no option, with its
     * outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteMethodResource}. Shape $[] (Value): {@link
     * DeliveryQuoteMethodResource}. A delivery method offered in a delivery quote, with its name,
     * type, display position, and revision.
     */
    "methods"?: Array<DeliveryQuoteMethodResource>;
    /** Shape $ (Value): string. Always present with an API key or dashboard credential. */
    "order_id"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryPendingCallerRateRequest}. Shape $[] (Value):
     * {@link DeliveryPendingCallerRateRequest}. A delivery method and choice group still waiting
     * for a caller-supplied rate on a delivery quote.
     */
    "pending_caller_rate_requests"?: Array<DeliveryPendingCallerRateRequest>;
    /**
     * Shape $ (Value): string. Why the quote was revoked: the reason on the delivery revocation
     * that fenced a dependency this quote used. Present when status is revoked. Value enum:
     * "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other".
     */
    "revocation_reason"?: "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    /** Shape $ (Value): boolean. */
    "selection_required": boolean;
    /**
     * Shape $ (Value): string. Value enum: "checkout_changed", "selection_changed",
     * "eligibility_changed", "inventory_changed", "authority_changed", "consumed_by_priced_quote".
     */
    "stale_reason"?: "checkout_changed"
        | "selection_changed"
        | "eligibility_changed"
        | "inventory_changed"
        | "authority_changed"
        | "consumed_by_priced_quote"
        | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "active", "consumed", "stale", "expired", "revoked".
     */
    "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a
 * delivery quote, with the delivery options the buyer can choose, its availability status, and any
 * input still needed.
 */
export type DeliveryQuoteChoiceGroupResource = {
    /**
     * Shape $ (Value): Array of {@link DeliveryAddressAdvisoryResource}. Buyer-actionable address
     * verification results that affected this choice group. A suggested_address is an explicit
     * correction the buyer may confirm; Flint does not apply it silently. Shape $[] (Value):
     * {@link DeliveryAddressAdvisoryResource}. An address verification result for a delivery
     * address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "allowed_types"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "ready", "needs_input", "needs_checkout_context",
     * "unavailable".
     */
    "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable" | (string & {});
    /**
     * Shape $ (Value): Map of {@link DeliveryCandidateOutcomeResource}. Shape $.* (Value): {@link
     * DeliveryCandidateOutcomeResource}. The result of evaluating one delivery method for a choice
     * group, selected by `type`: available with an option, unavailable, input required, cannot
     * calculate, or requires checkout context.
     */
    "candidate_outcomes"?: Record<string, DeliveryCandidateOutcomeResource>;
    /** Shape $ (Value): string. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteExecutionLegResource}. Where the group's items
     * leave from, one leg per origin Location, when all of its methods leave from the same
     * Locations. Omitted when the origin depends on the chosen method, such as shipping from a
     * warehouse or picking up at a store. Each option then lists its own execution_legs. Shape $[]
     * (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery choice group,
     * identifying the origin Location the group's items leave from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Shape $[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): Array of {@link DeliveryQuoteLineItemResource}. Shape $[] (Value): {@link
     * DeliveryQuoteLineItemResource}. An order line item, or one bundle component of it, and the
     * quantity covered by a delivery choice group.
     */
    "line_items": Array<DeliveryQuoteLineItemResource>;
    /**
     * Shape $ (Value): Array of string. Types of the delivery methods that can serve this group's
     * items, each listed once, in the order the methods display. A type is listed before its
     * options are priced, such as a local delivery that waits for the buyer's address, and stays
     * listed while its methods need more input or cannot serve the current input. options lists
     * what the buyer can choose now. A method whose type these items do not allow is left out, and
     * the list is empty when no method can serve them. [] enum: "shipment", "pickup",
     * "local_delivery". Shape $[] (Value): string. Value enum: "shipment", "pickup",
     * "local_delivery".
     */
    "method_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link DeliveryOptionProjection}. Shape $[] (Value): {@link
     * DeliveryOptionProjection}. A delivery option in a quote or preview: its price, type, timing,
     * delivery plan, execution legs, and shipment, pickup, or local delivery details.
     */
    "options": Array<DeliveryOptionProjection>;
    /** Shape $ (Value): string. */
    "previously_selected_delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "stable_key": string;
};
/**
 * Shape $ (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery choice group,
 * identifying the origin Location the group's items leave from.
 */
export type DeliveryQuoteExecutionLegResource = {
    /** Shape $ (Value): string. */
    "delivery_execution_leg_id": string;
    /** Shape $ (Value): string. */
    "origin_location_id": string;
};
/**
 * Shape $ (Value): {@link DeliveryQuoteLineItemResource}. An order line item, or one bundle
 * component of it, and the quantity covered by a delivery choice group.
 */
export type DeliveryQuoteLineItemResource = {
    /** Shape $ (Value): string. */
    "bundle_component_id"?: string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/** Shape $ (Value): {@link DeliveryQuoteListResponse}. A page of `DeliveryQuote` objects. */
export type DeliveryQuoteListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryQuote}. Shape $[] (Value): {@link DeliveryQuote}.
     * An estimate of available delivery options and their prices.
     */
    "data": Array<DeliveryQuote>;
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
 * Shape $ (Value): {@link DeliveryQuoteMethodResource}. A delivery method offered in a delivery
 * quote, with its name, type, display position, and revision.
 */
export type DeliveryQuoteMethodResource = {
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position": number;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the
     * available method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Shape $ (Value): string.  Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
};
/** Shape $ (Value): {@link DeliveryQuoteResponse}. A response containing `DeliveryQuote` data. */
export type DeliveryQuoteResponse = {
    /**
     * Shape $ (Value): {@link DeliveryQuote}. An estimate of available delivery options and their
     * prices.
     */
    "data": DeliveryQuote;
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
export type DeliveryQuotesGetInput = {
    /** Shape $ (Value): string. */
    "delivery_quote_id": InputValue<string>;
};
export type DeliveryQuotesListInput = {
    /** Shape $ (Value): string. */
    "checkout_session_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "consumed", "stale",
     * "expired", "revoked". Shape $[] (Value): string. Value enum: "active", "consumed", "stale",
     * "expired", "revoked".
     */
    "status"?: InputValue<Array<"active" | "consumed" | "stale" | "expired" | "revoked">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "complete", "incomplete",
     * "degraded". Shape $[] (Value): string. Value enum: "complete", "incomplete", "degraded".
     */
    "evaluation_status"?: InputValue<Array<"complete" | "incomplete" | "degraded">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches when the
 * destination or buyer location is within `maximum_distance` of an origin, measured in a straight
 * line.
 */
export type DeliveryRadiusCondition = {
    /**
     * Shape $ (Value): {@link DeliveryDistance}. A distance as a `value` in meters, kilometers, or
     * miles.
     */
    "maximum_distance": DeliveryDistance;
    /** Shape $ (Value): string. Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line" | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryRadiusOrigin}. The point a radius condition measures from: a
     * specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
     */
    "origin": DeliveryRadiusOrigin;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches when
 * the destination or buyer location is within `maximum_distance` of an origin, measured in a
 * straight line.
 */
export type DeliveryRadiusConditionInput = {
    /**
     * Shape $ (Value): {@link DeliveryDistanceInput}. A distance as a `value` in meters,
     * kilometers, or miles.
     */
    "maximum_distance": DeliveryDistanceInput;
    /** Shape $ (Value): string. Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line";
    /**
     * Shape $ (Value): {@link DeliveryRadiusOriginInput}. The point a radius condition measures
     * from: a specific Location (`location_id`) or the delivery method's own origin
     * (`method_origin`).
     */
    "origin": DeliveryRadiusOriginInput;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * Shape $ (Value): {@link DeliveryRadiusOrigin}. The point a radius condition measures from: a
 * specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
 */
export type DeliveryRadiusOrigin = {
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): boolean. */
    "method_origin"?: boolean;
};
/**
 * Shape $ (Value): {@link DeliveryRadiusOriginInput}. The point a radius condition measures from:
 * a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
 */
export type DeliveryRadiusOriginInput = DeliveryRadiusOrigin;
/** Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates. */
export type DeliveryRateCallback = {
    /**
     * Shape $ (Value): integer. Consecutive callback failures since the last successful response.
     * minimum: 0.
     */
    "circuit_failure_count": number;
    /** Shape $ (Value): string.  Value enum: "closed", "open", "half_open". */
    "circuit_state": "closed" | "open" | "half_open" | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfiguration}. Settings for a delivery rate
     * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
     * redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "current_delivery_rate_callback_revision_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. */
    "key_id"?: string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. Initial signing secret. Returned only by the create response. */
    "secret"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfiguration}. Settings for a delivery rate
 * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
 * redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfiguration = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: `${bigint}`;
    /** Shape $ (Value): boolean. Default: false. */
    "preview_enabled"?: boolean;
    /** Shape $ (Value): string. Default: "reject". Value enum: "reject". */
    "redirect_policy"?: "reject" | (string & {});
    /** Shape $ (Value): number. minimum: 0.1. maximum: 10. Default: 2. */
    "request_timeout_seconds"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "url": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfigurationInput}. Settings for a delivery rate
 * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
 * redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfigurationInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: `${bigint}` | bigint;
    /** Shape $ (Value): boolean. Default: false. */
    "preview_enabled"?: boolean;
    /** Shape $ (Value): string. Default: "reject". Value enum: "reject". */
    "redirect_policy"?: "reject";
    /** Shape $ (Value): number. minimum: 0.1. maximum: 10. Default: 2. */
    "request_timeout_seconds"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "url": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequest}. Only the keys you send
 * change; keys you leave out keep their current values. Null restores a key's default, as each
 * field describes. The result must be a configuration you could create. Requires expected_version.
 * An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequest = {
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: `${bigint}` | null;
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: `${bigint}` | null;
    /** Shape $ (Value): boolean or null. Null restores false. */
    "preview_enabled"?: boolean | null;
    /** Shape $ (Value): string or null. Null restores reject. Value enum: "reject", null. */
    "redirect_policy"?: "reject" | null | (string & {}) | null;
    /** Shape $ (Value): number or null. Null restores 2 seconds. minimum: 0.1. maximum: 10. */
    "request_timeout_seconds"?: number | null;
    /** Shape $ (Value): string. Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequestInput}. Only the keys you
 * send change; keys you leave out keep their current values. Null restores a key's default, as
 * each field describes. The result must be a configuration you could create. Requires
 * expected_version. An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequestInput = {
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): integer string or null. Null restores 262144 bytes. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: `${bigint}` | bigint | null;
    /** Shape $ (Value): boolean or null. Null restores false. */
    "preview_enabled"?: boolean | null;
    /** Shape $ (Value): string or null. Null restores reject. Value enum: "reject", null. */
    "redirect_policy"?: "reject" | null;
    /** Shape $ (Value): number or null. Null restores 2 seconds. minimum: 0.1. maximum: 10. */
    "request_timeout_seconds"?: number | null;
    /** Shape $ (Value): string. Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConnectionCheck}. Result of checking the connection
 * to a delivery rate callback endpoint, with its status, latency, HTTP status code, and failure
 * category if it failed.
 */
export type DeliveryRateCallbackConnectionCheck = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "checked_at": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id": string;
    /**
     * Shape $ (Value): string. Why the callback connection check failed and the action that can
     * make the next check succeed. - `authentication_or_http_error`: Return a 2xx status for a
     * signed request. A 401 usually means the wrong secret or a body parsed before verification. -
     * `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network
     * policy. - `connection_error`: Restore network connectivity to the callback host, then test
     * again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. -
     * `invalid_response`: Return a 2xx application/json response within maximum_response_bytes.
     * For a test delivery, the body must also follow the callback response rules. Then test again.
     * - `request_error`: Flint couldn't complete the request for another reason. Check the URL and
     * your server logs, then test again. - `timeout`: Acknowledge the callback within its
     * configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS
     * configuration, then test again. Value enum: "authentication_or_http_error",
     * "blocked_target", "connection_error", "dns_error", "invalid_response", "request_error",
     * "timeout", "tls_error".
     */
    "failure_category"?: "authentication_or_http_error"
        | "blocked_target"
        | "connection_error"
        | "dns_error"
        | "invalid_response"
        | "request_error"
        | "timeout"
        | "tls_error"
        | (string & {});
    /** Shape $ (Value): integer. */
    "http_status_code"?: number;
    /** Shape $ (Value): string. */
    "key_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "latency_milliseconds": `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "succeeded", "failed". */
    "status": "succeeded" | "failed" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackConnectionCheckResponse}. A response containing
 * `DeliveryRateCallbackConnectionCheck` data.
 */
export type DeliveryRateCallbackConnectionCheckResponse = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConnectionCheck}. Result of checking the
     * connection to a delivery rate callback endpoint, with its status, latency, HTTP status code,
     * and failure category if it failed.
     */
    "data": DeliveryRateCallbackConnectionCheck;
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
/**
 * Shape $ (Value): {@link DeliveryRateCallbackListResponse}. A page of `DeliveryRateCallback`
 * objects.
 */
export type DeliveryRateCallbackListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryRateCallback}. Shape $[] (Value): {@link
     * DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data": Array<DeliveryRateCallback>;
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
 * Shape $ (Value): {@link DeliveryRateCallbackResponse}. A response containing
 * `DeliveryRateCallback` data.
 */
export type DeliveryRateCallbackResponse = {
    /** Shape $ (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates. */
    "data": DeliveryRateCallback;
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
/**
 * Shape $ (Value): {@link DeliveryRateCallbackSigningKeyRotation}. Result of rotating a delivery
 * rate callback's signing key, including the new `key_id` and the new `secret`, which is returned
 * only in this response.
 */
export type DeliveryRateCallbackSigningKeyRotation = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "key_id": string;
    /** Shape $ (Value): string. New signing secret. Returned only by this rotation response. */
    "secret": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackSigningKeyRotationResponse}. A response containing
 * `DeliveryRateCallbackSigningKeyRotation` data.
 */
export type DeliveryRateCallbackSigningKeyRotationResponse = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackSigningKeyRotation}. Result of rotating a
     * delivery rate callback's signing key, including the new `key_id` and the new `secret`, which
     * is returned only in this response.
     */
    "data": DeliveryRateCallbackSigningKeyRotation;
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
/**
 * Shape $ (Value): {@link DeliveryRateCallbackTestDelivery}. Result of sending a test request to a
 * delivery rate callback, with its status, latency, HTTP status code, and failure category if it
 * failed.
 */
export type DeliveryRateCallbackTestDelivery = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id": string;
    /**
     * Shape $ (Value): string. Why the callback test failed and the action that can make the next
     * test succeed. - `authentication_or_http_error`: Return a 2xx status for a signed request. A
     * 401 usually means the wrong secret or a body parsed before verification. - `blocked_target`:
     * Use a public HTTPS callback target allowed by Flint's outbound network policy. -
     * `connection_error`: Restore network connectivity to the callback host, then test again. -
     * `dns_error`: Fix the callback hostname or its DNS records, then test again. -
     * `invalid_response`: Return a 2xx application/json response within maximum_response_bytes.
     * For a test delivery, the body must also follow the callback response rules. Then test again.
     * - `request_error`: Flint couldn't complete the request for another reason. Check the URL and
     * your server logs, then test again. - `timeout`: Acknowledge the callback within its
     * configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS
     * configuration, then test again. Value enum: "authentication_or_http_error",
     * "blocked_target", "connection_error", "dns_error", "invalid_response", "request_error",
     * "timeout", "tls_error".
     */
    "failure_category"?: "authentication_or_http_error"
        | "blocked_target"
        | "connection_error"
        | "dns_error"
        | "invalid_response"
        | "request_error"
        | "timeout"
        | "tls_error"
        | (string & {});
    /** Shape $ (Value): integer. */
    "http_status_code"?: number;
    /** Shape $ (Value): string. */
    "key_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "latency_milliseconds": `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "succeeded", "failed". */
    "status": "succeeded" | "failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "tested_at": string;
};
/**
 * Shape $ (Value): {@link DeliveryRateCallbackTestDeliveryResponse}. A response containing
 * `DeliveryRateCallbackTestDelivery` data.
 */
export type DeliveryRateCallbackTestDeliveryResponse = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackTestDelivery}. Result of sending a test request
     * to a delivery rate callback, with its status, latency, HTTP status code, and failure
     * category if it failed.
     */
    "data": DeliveryRateCallbackTestDelivery;
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
export type DeliveryRateCallbacksCheckConnectionInput = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryRateCallbacksCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDeliveryRateCallbackRequestInput}. The request body for:
     * Create delivery rate callback.
     */
    "body": InputValue<CreateDeliveryRateCallbackRequestInput>;
};
export type DeliveryRateCallbacksCreateTestDeliveryInput = DeliveryRateCallbacksCheckConnectionInput;
export type DeliveryRateCallbacksGetInput = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": InputValue<string>;
};
export type DeliveryRateCallbacksListInput = {
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
    /** Shape $ (Value): string. */
    "delivery_method_id"?: InputValue<string>;
};
export type DeliveryRateCallbacksRemoveInput = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryRateCallbacksRotateSigningKeyInput = DeliveryRateCallbacksCheckConnectionInput;
export type DeliveryRateCallbacksUpdateInput = {
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateDeliveryRateCallbackRequestInput}. The request body for:
     * Update delivery rate callback.
     */
    "body": InputValue<UpdateDeliveryRateCallbackRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
 * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what
 * happens when none match.
 */
export type DeliveryRateTablePricingStrategy = {
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingRate}. Shape $[] (Value): {@link
     * DeliveryPricingRate}. One rate in a rate table pricing strategy: a `when` condition, a
     * `priority`, and a price per currency. The first matching rate by priority sets the price.
     */
    "rates": Array<DeliveryPricingRate>;
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "unmatched_behavior": "unavailable" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
 * strategy you supply when creating a delivery method: a list of prioritized rates, each with a
 * condition and prices.
 */
export type DeliveryRateTablePricingStrategyCreateRequest = {
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingRateCreateRequest}. Shape $[] (Value):
     * {@link DeliveryPricingRateCreateRequest}. A rate to add when creating a rate table pricing
     * strategy: a `when` condition, a `priority`, and a price per currency.
     */
    "rates": Array<DeliveryPricingRateCreateRequest>;
    /** Shape $ (Value): string. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table pricing
 * strategy you supply when creating a delivery method: a list of prioritized rates, each with a
 * condition and prices.
 */
export type DeliveryRateTablePricingStrategyCreateRequestInput = {
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingRateCreateRequestInput}. Shape $[] (Value):
     * {@link DeliveryPricingRateCreateRequestInput}. A rate to add when creating a rate table
     * pricing strategy: a `when` condition, a `priority`, and a price per currency.
     */
    "rates": Array<DeliveryPricingRateCreateRequestInput>;
    /** Shape $ (Value): string. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable";
};
/**
 * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing strategy
 * you supply when updating a delivery method: a list of prioritized rates, each with a condition
 * and prices.
 */
export type DeliveryRateTablePricingStrategyRequest = {
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingRateRequest}. Shape $[] (Value): {@link
     * DeliveryPricingRateRequest}. A rate in a rate table pricing strategy you send when updating
     * a delivery method. Include `delivery_rate_id` to keep or update an existing rate.
     */
    "rates": Array<DeliveryPricingRateRequest>;
    /** Shape $ (Value): string. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
 * strategy you supply when updating a delivery method: a list of prioritized rates, each with a
 * condition and prices.
 */
export type DeliveryRateTablePricingStrategyRequestInput = {
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingRateRequestInput}. Shape $[] (Value): {@link
     * DeliveryPricingRateRequestInput}. A rate in a rate table pricing strategy you send when
     * updating a delivery method. Include `delivery_rate_id` to keep or update an existing rate.
     */
    "rates": Array<DeliveryPricingRateRequestInput>;
    /** Shape $ (Value): string. Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable";
};
/**
 * Shape $ (Value): {@link DeliveryRecipientRequirement}. Says whether a recipient field (`name`,
 * `email`, or `phone`) is required for a delivery method, and the format it must use.
 */
export type DeliveryRecipientRequirement = {
    /** Shape $ (Value): string.  Value enum: "name", "email", "phone". */
    "field": "name" | "email" | "phone" | (string & {});
    /** Shape $ (Value): string.  Value enum: "text", "email", "e164". */
    "format"?: "text" | "email" | "e164" | (string & {});
    /** Shape $ (Value): boolean. */
    "required": boolean;
};
/**
 * Shape $ (Value): {@link DeliveryRecipientRequirementInput}. Says whether a recipient field
 * (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
 */
export type DeliveryRecipientRequirementInput = {
    /** Shape $ (Value): string.  Value enum: "name", "email", "phone". */
    "field": "name" | "email" | "phone";
    /** Shape $ (Value): string.  Value enum: "text", "email", "e164". */
    "format"?: "text" | "email" | "e164";
    /** Shape $ (Value): boolean. */
    "required": boolean;
};
/**
 * Shape $ (Value): {@link DeliveryRecipientResource}. The person receiving a delivery selection,
 * with optional `name`, `email`, and `phone`.
 */
export type DeliveryRecipientResource = {
    /** Shape $ (Value): string. */
    "email"?: string;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "phone"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryRevocation}. A withdrawal of a previously available delivery
 * choice.
 */
export type DeliveryRevocation = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "delivery_revocation_id": string;
    /**
     * Shape $ (Value): {@link DeliveryRevocationImpact}. Counts of active delivery quotes and
     * current delivery selections affected by a delivery revocation.
     */
    "estimated_impact": DeliveryRevocationImpact;
    /** Shape $ (Value): string. */
    "merchant_note"?: string;
    /**
     * Shape $ (Value): string. Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryRevocationTarget}. A typed revocation target. Each
     * target_type accepts only its resource-specific fields.
     */
    "target": DeliveryRevocationTarget;
};
/**
 * Shape $ (Value): {@link DeliveryRevocationImpact}. Counts of active delivery quotes and current
 * delivery selections affected by a delivery revocation.
 */
export type DeliveryRevocationImpact = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "active_quote_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "current_selection_count": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryRevocationResponse}. A response containing `DeliveryRevocation`
 * data.
 */
export type DeliveryRevocationResponse = {
    /**
     * Shape $ (Value): {@link DeliveryRevocation}. A withdrawal of a previously available delivery
     * choice.
     */
    "data": DeliveryRevocation;
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
/**
 * Shape $ (Value): {@link DeliveryRevocationTarget}. A typed revocation target. Each target_type
 * accepts only its resource-specific fields.
 */
export type DeliveryRevocationTarget = ({
    /** Shape $ (Value): string. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision"
        | (string & {});
})
    & ((Exclude<DeliveryRevocationTargetLocationGeography & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryRateCallbackSigningKey & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryRateCallback & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryRateCallbackRevision & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryMethod & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryMethodRevision & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryRevocationTargetDeliveryMethod}. A typed revocation target. Each
 * target_type accepts only its resource-specific fields.
 */
export type DeliveryRevocationTargetDeliveryMethod = ({
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_method". */
    "target_type": "delivery_method" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_method". */
    "target_type": unknown;
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version": `${bigint}`;
}));
/**
 * Shape $ (Value): {@link DeliveryRevocationTargetDeliveryMethodRevision}. A typed revocation
 * target. Each target_type accepts only its resource-specific fields.
 */
export type DeliveryRevocationTargetDeliveryMethodRevision = ({
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_method_revision". */
    "target_type": unknown;
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id": string;
}));
/**
 * Shape $ (Value): {@link DeliveryRevocationTargetDeliveryRateCallback}. A typed revocation
 * target. Each target_type accepts only its resource-specific fields.
 */
export type DeliveryRevocationTargetDeliveryRateCallback = ({
    /** Shape $ (Value): string. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback". */
    "target_type": unknown;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version": `${bigint}`;
}));
/**
 * Shape $ (Value): {@link DeliveryRevocationTargetDeliveryRateCallbackRevision}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type DeliveryRevocationTargetDeliveryRateCallbackRevision = ({
    /** Shape $ (Value): string. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback_revision". */
    "target_type": unknown;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id": string;
}));
/**
 * Shape $ (Value): {@link DeliveryRevocationTargetDeliveryRateCallbackSigningKey}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type DeliveryRevocationTargetDeliveryRateCallbackSigningKey = ({
    /** Shape $ (Value): string. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback_signing_key". */
    "target_type": unknown;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id": string;
}));
/**
 * Shape $ (Value): {@link DeliveryRevocationTargetLocationGeography}. A typed revocation target.
 * Each target_type accepts only its resource-specific fields.
 */
export type DeliveryRevocationTargetLocationGeography = ({
    /** Shape $ (Value): string. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback
     * targets. The revocation resolves and permanently fences only the exact current revision at
     * this stable-resource version. Omit it for exact revision, geography, and signing-key
     * targets. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}`;
    /** Shape $ (Value): string. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "location_geography". */
    "target_type": "location_geography" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "location_geography". */
    "target_type": unknown;
    /** Shape $ (Value): string. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}`;
}));
export type DeliveryRevocationsGetInput = {
    /** Shape $ (Value): string. */
    "delivery_revocation_id": InputValue<string>;
};
export type DeliveryRevocationsRevokeDeliveryDependencyInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RevokeDeliveryDependencyRequestInput}. The request body for: Revoke
     * delivery dependency.
     */
    "body": InputValue<RevokeDeliveryDependencyRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryScheduleWindowRule}. Estimate rule for a scheduled-window
 * delivery method, defined by its `availability` schedule.
 */
export type DeliveryScheduleWindowRule = {
    /**
     * Shape $ (Value): {@link DeliveryAvailability}. When a delivery method can be scheduled:
     * weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailability;
};
/**
 * Shape $ (Value): {@link DeliveryScheduleWindowRuleRequestInput}. Scheduled-window estimate rule
 * you supply for a delivery method, defined by its `availability` schedule.
 */
export type DeliveryScheduleWindowRuleRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryAvailabilityInput}. When a delivery method can be scheduled:
     * weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailabilityInput;
};
/**
 * Shape $ (Value): {@link DeliverySelection}. The delivery choice selected for a checkout or
 * order.
 */
export type DeliverySelection = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Delivery charge committed by this selection. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. Buyer location snapshot used to
     * evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized
     * buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): string. Deadline after which calculated pricing evidence is no longer
     * valid. Always present with an API key or dashboard credential. Format: date-time.
     */
    "calculation_expires_at"?: string;
    /**
     * Shape $ (Value): string. Checkout session that owns the selection. Always present with an
     * API key or dashboard credential.
     */
    "checkout_session_id"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliverySelectionChoiceResource}. One chosen option for
     * each required choice group. Shape $[] (Value): {@link DeliverySelectionChoiceResource}. A
     * delivery option chosen for one choice group in a delivery selection, with its method,
     * amounts, type-specific details, timezone, and any chosen delivery window.
     */
    "choices": Array<DeliverySelectionChoiceResource>;
    /**
     * Shape $ (Value): string. Time the selection was created. Always present with an API key or
     * dashboard credential. Format: date-time.
     */
    "created_at"?: string;
    /** Shape $ (Value): string. Quote from which this selection was made. */
    "delivery_quote_id": string;
    /**
     * Shape $ (Value): integer string. Quote version from which this selection was created. Always
     * present with an API key or dashboard credential. Use an integer string (decimal digits), not
     * a floating-point number. Format: uint64. minimum: 0.
     */
    "delivery_quote_version"?: `${bigint}`;
    /** Shape $ (Value): string. Stable delivery selection ID. */
    "delivery_selection_id": string;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. Destination address snapshot used for
     * delivery evaluation. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified. An address as returned on delivery quotes, selections,
     * previews, and pickup locations.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Shape $ (Value): integer string. Checkout eligibility context version evaluated by this
     * selection. Always present with an API key or dashboard credential. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "eligibility_context_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Deadline after which this provisional selection can no longer be
     * committed. Format: date-time.
     */
    "expires_at": string;
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Inputs this selection still
     * needs before payment: each recipient field a chosen option requires that the selection does
     * not include. Each entry repeats the quote's requirement for that option, with the same
     * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
     * configuration_required, and the delivery_selection reference until a new delivery selection
     * includes them. Empty when nothing is missing, and always empty unless status is selected.
     * Shape $[] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such
     * as an address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): string. Buyer-provided delivery instructions. Returned with an API key or
     * dashboard credential.
     */
    "instructions"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliverySelectionLifecycleEventResource}. Ordered lifecycle
     * events recorded for this selection. Shape $[] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened.
     */
    "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
    /**
     * Shape $ (Value): string. Time the selection lifecycle last changed. Always present with an
     * API key or dashboard credential. Format: date-time.
     */
    "lifecycle_updated_at"?: string;
    /**
     * Shape $ (Value): string. Constraint that determined the selection expiry. Always present
     * with an API key or dashboard credential. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime", "inventory_reservation_expiry",
     * "tax_validity_expiry", "checkout_session_expiry".
     */
    "limiting_deadline_reason"?: "selection_guarantee_expiry"
        | "calculation_expiry"
        | "selection_maximum_lifetime"
        | "inventory_reservation_expiry"
        | "tax_validity_expiry"
        | "checkout_session_expiry"
        | (string & {});
    /**
     * Shape $ (Value): string. Order affected by the selection. Always present with an API key or
     * dashboard credential.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Availability state of merchant-private selection evidence. Value
     * enum: "available", "redacted".
     */
    "private_data_status"?: "available" | "redacted" | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryRecipientResource}. Recipient details captured with the
     * selection. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. The person receiving a delivery selection, with optional `name`, `email`,
     * and `phone`.
     */
    "recipient"?: DeliveryRecipientResource;
    /**
     * Shape $ (Value): string. Time merchant-private selection evidence was redacted. Format:
     * date-time.
     */
    "redacted_at"?: string;
    /**
     * Shape $ (Value): string. Current selection lifecycle status. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
};
/**
 * Shape $ (Value): {@link DeliverySelectionChoiceResource}. A delivery option chosen for one
 * choice group in a delivery selection, with its method, amounts, type-specific details, timezone,
 * and any chosen delivery window.
 */
export type DeliverySelectionChoiceResource = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "delivery_option_id": string;
    /**
     * Shape $ (Value): {@link DeliveryPlan}. Whether a delivery option is fulfilled in one
     * delivery or several, with the first arrival time, completion time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    /** Shape $ (Value): string. */
    "delivery_window_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Always present with an API key or dashboard credential.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "discount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link DeliverySelectionInstructionsRequest}. Buyer input for a selected
     * delivery option: a `delivery_window_id` where the option uses delivery windows, and optional
     * `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
    /**
     * Shape $ (Value): {@link DeliveryShipmentDetails}. Details of a local delivery option:
     * instructions and service level.
     */
    "local_delivery"?: DeliveryShipmentDetails;
    /** Shape $ (Value): string. */
    "merchant_reference"?: string;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string or null. Always present with an API key or dashboard credential.
     * Null when the choice has no order charge.
     */
    "order_charge_id"?: string | null;
    /**
     * Shape $ (Value): {@link DeliveryPickupDetails}. Pickup details of a delivery option: the
     * pickup mode and the pickup location.
     */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Shape $ (Value): {@link DeliveryShipmentDetails}. Shipment-specific details of a delivery
     * option or choice: the `service_level` and buyer `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    /** Shape $ (Value): string. */
    "stable_key": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Always present with an API key or dashboard credential.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. IANA timezone for displaying window_start_at and window_end_at.
     * Example: "America/New_York".
     */
    "timezone"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link DeliverySelectionInstructionsRequest}. Buyer input for a selected
 * delivery option: a `delivery_window_id` where the option uses delivery windows, and optional
 * `instructions`.
 */
export type DeliverySelectionInstructionsRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_window_id"?: string;
    /**
     * Shape $ (Value): string. Buyer instructions for the selected option, without leading or
     * trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted
     * for a checkout session credential that doesn't act for the customer the buyer verified.
     * minLength: 1. maxLength: 2000.
     */
    "instructions"?: string;
};
/**
 * Shape $ (Value): {@link DeliverySelectionInstructionsRequestInput}. Buyer input for a selected
 * delivery option: a `delivery_window_id` where the option uses delivery windows, and optional
 * `instructions`.
 */
export type DeliverySelectionInstructionsRequestInput = DeliverySelectionInstructionsRequest;
/**
 * Shape $ (Value): {@link DeliverySelectionLifecycleEventResource}. A status change in a delivery
 * selection's history, with the new `status`, the `reason`, and when it happened.
 */
export type DeliverySelectionLifecycleEventResource = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "delivery_selection_id": string;
    /** Shape $ (Value): string. */
    "delivery_selection_lifecycle_event_id": string;
    /**
     * Shape $ (Value): string. Value enum: "replacement_selected", "buyer_selected",
     * "payment_started", "payment_failed_selection_restored", "payment_settled",
     * "payment_failed_selection_expired", "calculation_expired", "selection_expired",
     * "selection_not_current", "dependency_revoked", "buyer_cleared",
     * "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated",
     * "quote_basis_changed", "calculation_changed".
     */
    "reason": "replacement_selected"
        | "buyer_selected"
        | "payment_started"
        | "payment_failed_selection_restored"
        | "payment_settled"
        | "payment_failed_selection_expired"
        | "calculation_expired"
        | "selection_expired"
        | "selection_not_current"
        | "dependency_revoked"
        | "buyer_cleared"
        | "eligibility_context_refreshed"
        | "checkout_replaced"
        | "checkout_terminal"
        | "order_mutated"
        | "quote_basis_changed"
        | "calculation_changed"
        | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
};
/**
 * Shape $ (Value): {@link DeliverySelectionRecipientRequest}. Recipient details you supply with a
 * delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequest = {
    /**
     * Shape $ (Value): string or null. Recipient email address. Limited to 254 characters (Unicode
     * code points), counted before surrounding whitespace is trimmed. When the selected delivery
     * option requires it, payment needs it: send it with this selection or a later one. Send null
     * to clear it. Format: email. minLength: 1. maxLength: 254.
     */
    "email"?: string | null;
    /**
     * Shape $ (Value): string or null. Recipient name. Limited to 200 characters (Unicode code
     * points), counted before surrounding whitespace is trimmed. When the selected delivery option
     * requires it, payment needs it: send it with this selection or a later one. Send null to
     * clear it. minLength: 1. maxLength: 200.
     */
    "name"?: string | null;
    /**
     * Shape $ (Value): string or null. Recipient phone number. After surrounding whitespace is
     * trimmed, use + followed by 7 through 15 ASCII digits, with a nonzero first digit. Limited to
     * 16 characters (Unicode code points), counted before trimming. When the selected delivery
     * option requires it, payment needs it: send it with this selection or a later one. Send null
     * to clear it. minLength: 1. maxLength: 16.
     */
    "phone"?: string | null;
};
