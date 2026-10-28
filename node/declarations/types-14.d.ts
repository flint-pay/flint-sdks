import type {
    DeliveryMethodOriginSelectorInputAllocatedOriginGroup,
    DeliveryMethodOriginSelectorInputFixedLocation,
    DeliveryMethodOriginSelectorInputPickupLocationCollection,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethod,
    DeliveryInputRequirement,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityExpression,
    DeliveryEligibilityExpressionInput,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryFixedPricingStrategyRequestInput
} from './types-13.js';
import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryMethodRequestInput, CreateDeliveryPreviewRequestInput } from './types-6.js';
import type { UpdateDeliveryMethodRequestInput } from './types-51.js';
import type { BuyerInstructionsConfig } from './types-1.js';
import type {
    DeliveryArrivalEstimate,
    DeliveryAddressAdvisoryResource,
    DeliveryBuyerLocationResource,
    DeliveryCandidateOutcomeResource,
    DeliveryCalculatedPricingStrategy,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput
} from './types-12.js';
import type {
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource,
    DeliveryPricingStrategyRateTable,
    DeliveryPricingStrategyTiered
} from './types-15.js';
import type {
    DeliveryRecipientRequirement,
    DeliveryShipmentDetails,
    DeliveryWindowRequest,
    DeliveryRateTablePricingStrategy,
    DeliveryTieredPricingStrategy,
    DeliveryRateTablePricingStrategyCreateRequest,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryRateTablePricingStrategyRequest,
    DeliveryRateTablePricingStrategyRequestInput
} from './types-16.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { Address } from './types-0.js';
import type { CreateOrderLineItem } from './types-8.js';
/**
 * Shape $ (Value): {@link
 * DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput}. The Locations selector
 * for a pickup_location_collection delivery origin.
 */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_location_set_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 1000. uniqueItems: true. Shape $[]
     * (Value): string. minLength: 1.
     */
    "location_ids": Array<string>;
    /** Shape $ (Value): string.  Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
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
    "request_id": string;
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
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
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
/**
 * Shape $ (Value): {@link DeliveryPostalCodeValue}. A postal code or postal code prefix with its
 * country, used in a postal code condition.
 */
export type DeliveryPostalCodeValue = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "prefix". */
    "type"?: "exact" | "prefix" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/**
 * Shape $ (Value): {@link DeliveryPostalCodeValueInput}. A postal code or postal code prefix with
 * its country, used in a postal code condition.
 */
export type DeliveryPostalCodeValueInput = {
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "prefix". */
    "type"?: "exact" | "prefix";
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/**
 * Shape $ (Value): {@link DeliveryPreview}. The delivery options and prices Flint would offer for
 * the supplied items and buyer location, with input requirements and merchant diagnostics.
 */
export type DeliveryPreview = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationResource}. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. The normalized buyer
     * address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Shape $ (Value): Array of {@link DeliveryPreviewChoiceGroupResource}. Shape $[] (Value):
     * {@link DeliveryPreviewChoiceGroupResource}. One group of order items in a delivery options
     * preview, with the options a buyer could choose, its availability status, and any input still
     * needed.
     */
    "choice_groups": Array<DeliveryPreviewChoiceGroupResource>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "delivery_method_ids": Array<string>;
    /**
     * Shape $ (Value): {@link Address}. Omitted for a checkout session credential that doesn't act
     * for the customer the buyer verified. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "destination_address"?: Address;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
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
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. Shape $[] (Value): {@link
     * CreateOrderLineItem}. A line item in a delivery preview: a catalog variant, a bundle, or a
     * custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Shape $ (Value): Array of {@link DeliveryMerchantDiagnostic}. Present for merchant callers
     * as an array, including when empty. Absent for buyer callers. Shape $[] (Value): {@link
     * DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method
     * produced no option, with its outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `delivery_options`:
     * Evaluates delivery methods and prices for the supplied items and buyer location. Value enum:
     * "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /** Shape $ (Value): string. */
    "pickup_location_id"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryPreviewChoiceGroupResource}. One group of order items in a
 * delivery options preview, with the options a buyer could choose, its availability status, and
 * any input still needed.
 */
export type DeliveryPreviewChoiceGroupResource = {
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
    "candidate_outcomes": Record<string, DeliveryCandidateOutcomeResource>;
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
     * Shape $ (Value): Array of {@link DeliveryOptionProjection}. Shape $[] (Value): {@link
     * DeliveryOptionProjection}. A delivery option in a quote or preview: its price, type, timing,
     * delivery plan, execution legs, and shipment, pickup, or local delivery details.
     */
    "options": Array<DeliveryOptionProjection>;
};
/** Shape $ (Value): {@link DeliveryPreviewResponse}. The response for: Create delivery preview. */
export type DeliveryPreviewResponse = {
    /**
     * Shape $ (Value): {@link DeliveryPreview} or {@link DeliveryPickupAvailability}. Shape
     * $.oneOf[1] (Value): {@link DeliveryPreview}. The delivery options and prices Flint would
     * offer for the supplied items and buyer location, with input requirements and merchant
     * diagnostics. Shape $.oneOf[2] (Value): {@link DeliveryPickupAvailability}. The result of a
     * pickup locations preview: each pickup location and whether it can supply the order, with
     * input requirements and merchant diagnostics.
     */
    "data": ((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>));
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
/**
 * Shape $ (Value): {@link DeliveryPreviewRoutingSourceInput}. Chooses where a delivery options
 * preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy
 * revision.
 */
export type DeliveryPreviewRoutingSourceInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_allocation_policy_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_allocation_policy_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "fixed_location", "policy", "policy_revision". */
    "type": "fixed_location" | "policy" | "policy_revision";
};
export type DeliveryPreviewsCreateInput = {
    /**
     * Shape $ (Value): {@link CreateDeliveryPreviewRequestInput}. The request body for: Create
     * delivery preview.
     */
    "body": InputValue<CreateDeliveryPreviewRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryPricingRate}. One rate in a rate table pricing strategy: a
 * `when` condition, a `priority`, and a price per currency. The first matching rate by priority
 * sets the price.
 */
export type DeliveryPricingRate = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** Shape $ (Value): string. */
    "delivery_rate_id": string;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression} or null. Shape $.anyOf[1] (Value):
     * {@link DeliveryEligibilityExpression}. A boolean expression containing exactly one operator
     * or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * Shape $.anyOf[2] (Value): null.
     */
    "when": ((DeliveryEligibilityExpression) | (null) | (unknown));
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateCreateRequest}. A rate to add when creating a rate
 * table pricing strategy: a `when` condition, a `priority`, and a price per currency.
 */
export type DeliveryPricingRateCreateRequest = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpression;
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateCreateRequestInput}. A rate to add when creating a
 * rate table pricing strategy: a `when` condition, a `priority`, and a price per currency.
 */
export type DeliveryPricingRateCreateRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionInput;
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateRequest}. A rate in a rate table pricing strategy you
 * send when updating a delivery method. Include `delivery_rate_id` to keep or update an existing
 * rate.
 */
export type DeliveryPricingRateRequest = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): string. Stable rate identifier returned by Flint. Include it when updating
     * or retaining an existing rate. minLength: 1.
     */
    "delivery_rate_id"?: string;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpression}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpression;
};
/**
 * Shape $ (Value): {@link DeliveryPricingRateRequestInput}. A rate in a rate table pricing
 * strategy you send when updating a delivery method. Include `delivery_rate_id` to keep or update
 * an existing rate.
 */
export type DeliveryPricingRateRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): string. Stable rate identifier returned by Flint. Include it when updating
     * or retaining an existing rate. minLength: 1.
     */
    "delivery_rate_id"?: string;
    /**
     * Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The
     * first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Shape $ (Value): {@link DeliveryEligibilityExpressionInput}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionInput;
};
/**
 * Shape $ (Value): {@link DeliveryPricingStrategy}. How a delivery method sets its price, selected
 * by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`,
 * `callback`, or `caller_supplied`) is set.
 */
export type DeliveryPricingStrategy = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {});
})
    & ((Exclude<DeliveryPricingStrategyCalculated & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallback & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallerSupplied & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyFixed & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyRateTable & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyTiered & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCalculated}. The `calculated` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyCalculated = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCallback}. The `callback` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyCallback = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCallerSupplied}. The `caller_supplied` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyCallerSupplied = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCalculated}. The `calculated` variant
 * of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCalculated = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCalculatedInput}. The `calculated`
 * variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCalculatedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": ("calculated") & ("calculated");
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
})
    & (({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallback}. The `callback` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallback = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallbackInput}. The `callback` variant
 * of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallbackInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": ("callback") & ("callback");
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallerSupplied}. The `caller_supplied`
 * variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallerSupplied = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputCallerSuppliedInput}. The
 * `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputCallerSuppliedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputFixed}. The `fixed` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputFixed = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputFixedInput}. The `fixed` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputFixedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputRateTable}. The `rate_table` variant
 * of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputRateTable = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputRateTableInput}. The `rate_table`
 * variant of `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputRateTableInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": ("rate_table") & ("rate_table");
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputTiered}. The `tiered` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputTiered = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "tiered". */
    "type": "tiered" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "tiered". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateInputTieredInput}. The `tiered` variant of
 * `DeliveryPricingStrategyCreateInput`.
 */
export type DeliveryPricingStrategyCreateInputTieredInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "tiered". */
    "type": "tiered";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "tiered". */
    "type": ("tiered") & ("tiered");
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered": DeliveryTieredPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateRequest}. The pricing strategy you supply
 * when creating a delivery method. Set `type` and the matching property.
 */
export type DeliveryPricingStrategyCreateRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequest}. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {});
})
    & ((Exclude<DeliveryPricingStrategyCreateInputCalculated & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallback & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallerSupplied & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputFixed & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputRateTable & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputTiered & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyCreateRequestInput}. The pricing strategy you
 * supply when creating a delivery method. Set `type` and the matching property.
 */
export type DeliveryPricingStrategyCreateRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyCreateRequestInput}. Rate table
     * pricing strategy you supply when creating a delivery method: a list of prioritized rates,
     * each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "fixed", "rate_table", "tiered", "calculated",
     * "callback", "caller_supplied".
     */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied";
})
    & ((Exclude<DeliveryPricingStrategyCreateInputCalculatedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallbackInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputCallerSuppliedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputFixedInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputRateTableInput & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCreateInputTieredInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyFixed}. The `fixed` variant of
 * `DeliveryPricingStrategy`.
 */
export type DeliveryPricingStrategyFixed = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from
     * a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by
     * currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryExternalPricingStrategy}. Delivery pricing that comes from
     * outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategy}. Pricing strategy that charges the
     * price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says
     * what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price, by currency.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCalculated}. The `calculated` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCalculated = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCalculatedInput}. The `calculated` variant
 * of `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCalculatedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "calculated". */
    "type": "calculated";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "calculated". */
    "type": ("calculated") & ("calculated");
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
})
    & (({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallback}. The `callback` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallback = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallbackInput}. The `callback` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallbackInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "callback". */
    "type": "callback";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "callback". */
    "type": ("callback") & ("callback");
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallerSupplied}. The `caller_supplied`
 * variant of `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallerSupplied = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputCallerSuppliedInput}. The `caller_supplied`
 * variant of `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputCallerSuppliedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "caller_supplied". */
    "type": "caller_supplied";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "caller_supplied". */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputFixed}. The `fixed` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputFixed = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategy;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputFixedInput}. The `fixed` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputFixedInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputRateTable}. The `rate_table` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputRateTable = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Calculated delivery pricing you
     * supply for a delivery method: base fee, distance and weight rates, per-item handling, and
     * fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
     * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
     * maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategy}. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Tiered pricing strategy you supply
     * for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the
     * basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequest}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryPricingStrategyInputRateTableInput}. The `rate_table` variant of
 * `DeliveryPricingStrategyInput`.
 */
export type DeliveryPricingStrategyInputRateTableInput = ({
    /**
     * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
     * where you supply the rate when creating a delivery quote, bounded by minimum and maximum
     * fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by
     * currency, supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy
     * you supply for a delivery method: a `basis`, a list of bands with prices, and a weight
     * `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Shape $ (Value): string.  Value enum: "rate_table". */
    "type": "rate_table";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "rate_table". */
    "type": ("rate_table") & ("rate_table");
    /**
     * Shape $ (Value): {@link DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing
     * strategy you supply when updating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "tiered"?: never;
})));
