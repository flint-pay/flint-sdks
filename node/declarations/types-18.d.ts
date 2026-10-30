import type { DeliveryProfile } from './types-17.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { InputValue } from '../runtime.js';
import type { AssignToUnconfiguredDeliveryProfileRequestInput, Address } from './types-0.js';
import type { CreateDeliveryProfileRequestInput, CreateDeliveryRateCallbackRequestInput } from './types-7.js';
import type { DeliveryLocationSetsDeleteParams, DeliveryInputRequirement, DeliveryMerchantDiagnostic } from './types-15.js';
import type { UpdateDeliveryProfileRequestInput, UpdateDeliveryRateCallbackRequestInput } from './types-58.js';
import type {
    DeliveryBuyerLocationResource,
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryDistance,
    DeliveryDistanceInput
} from './types-14.js';
import type {
    DeliveryPendingCallerRateRequest,
    DeliveryOptionProjection,
    DeliveryPricingRate,
    DeliveryPricingRateCreateRequest,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRateRequest,
    DeliveryPricingRateRequestInput
} from './types-16.js';
import type { ResponseMeta } from './types-48.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
/**
 * The `delivery_profile.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryProfileUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryProfile}. Reusable delivery rules assigned to catalog
     * items.
     */
    "data"?: {
        /** Reusable delivery rules assigned to catalog items. */
        "object": DeliveryProfile;
    };
    /** Value enum: "delivery_profile.updated". */
    "event_type"?: "delivery_profile.updated";
});
export type DeliveryProfilesAssignToUnconfiguredParams = (InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>);
export type DeliveryProfilesCreateParams = (InputValue<CreateDeliveryProfileRequestInput>);
export type DeliveryProfilesDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryProfilesGetParams = {
    /** Compute catalog and delivery-configuration diagnostics for this profile. Default: false. */
    "include_diagnostics"?: InputValue<boolean>;
};
export type DeliveryProfilesListParams = {
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
     * Search across delivery_profile_id, name, and external_reference_id. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as dprof_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Filter by whether the profile is the current physical catalog default. Accepts a single true
     * or false value.
     */
    "is_default"?: InputValue<boolean>;
    /**
     * Filter by profile resolution mode. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "quote", "manual". Value enum: "quote", "manual". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "quote", "manual". anyOf[1][] (Value): string. Value enum: "quote",
     * "manual". anyOf[2] (Value): string. Value enum: "quote", "manual".
     */
    "resolution_mode"?: InputValue<("quote" | "manual") | readonly ("quote" | "manual")[]>;
    /**
     * Compute catalog and delivery-configuration diagnostics for every profile returned. Default:
     * false.
     */
    "include_diagnostics"?: InputValue<boolean>;
};
export type DeliveryProfilesUpdateParams = (UpdateDeliveryProfileRequestInput);
/** An estimate of available delivery options and their prices. */
export type DeliveryQuote = {
    "basis_delivery_quote_id"?: string;
    "basis_delivery_selection_id"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Buyer-safe reasons no delivery option was available. Merchant configuration details are
     * never included. [] enum: "address_required", "address_incomplete", "outside_delivery_area",
     * "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable". []
     * (Value): string. Value enum: "address_required", "address_incomplete",
     * "outside_delivery_area", "no_pickup_location_nearby", "unavailable_for_these_items",
     * "temporarily_unavailable".
     */
    "buyer_reasons": Array<"address_required"
        | "address_incomplete"
        | "outside_delivery_area"
        | "no_pickup_location_nearby"
        | "unavailable_for_these_items"
        | "temporarily_unavailable"
        | (string & {})>;
    /** Always present with an API key or dashboard credential. */
    "checkout_session_id"?: string;
    /**
     *  [] (Value): {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a
     * delivery quote, with the delivery options the buyer can choose, its availability status, and
     * any input still needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /** When Flint created this quote. Format: date-time. */
    "created_at": string;
    "delivery_quote_id": string;
    /**
     * Version of the order's delivery details evaluated by this quote. Always present with an API
     * key or dashboard credential. Format: uint64. minimum: 0.
     */
    "delivery_quote_version"?: number;
    /** The delivery revocation that revoked this quote, or null when no revocation applies. */
    "delivery_revocation_id": string | null;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /**
     * Version of the checkout eligibility context evaluated by this quote. Always present with an
     * API key or dashboard credential. Format: uint64. minimum: 0.
     */
    "eligibility_context_version"?: number;
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Authoritative expiry for this quote: 24 hours when every method uses fixed, tiered, or
     * rate_table pricing, and at most 15 minutes otherwise. A cart with tracked inventory shortens
     * it to the 5 minutes its stock check stays valid. Read this value from every response.
     * Format: date-time.
     */
    "expires_at": string;
    /**
     * Inputs the delivery methods need. A quote requirement, such as the destination address, is
     * input a method needs before Flint can price it. A selection requirement is input a delivery
     * selection needs before payment, such as a recipient field or delivery window an option
     * requires. A method that waits on the buyer's address or store, or on an address the buyer
     * must correct, already lists the recipient fields it requires. Those requirements name the
     * method's choice group and have no delivery_option_ids. [] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Always present with an API key or dashboard credential. [] (Value): {@link
     * DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method
     * produced no option, with its outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
    /**
     *  [] (Value): {@link DeliveryQuoteMethodResource}. A delivery method offered in a delivery
     * quote, with its name, type, display position, and revision.
     */
    "methods"?: Array<DeliveryQuoteMethodResource>;
    /** Always present with an API key or dashboard credential. */
    "order_id"?: string;
    /**
     *  [] (Value): {@link DeliveryPendingCallerRateRequest}. A delivery method and choice group
     * still waiting for a caller-supplied rate on a delivery quote.
     */
    "pending_caller_rate_requests"?: Array<DeliveryPendingCallerRateRequest>;
    /**
     * Why the quote was revoked: the reason on the delivery revocation that fenced a dependency
     * this quote used. Present when status is revoked. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "revocation_reason"?: "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    "selection_required": boolean;
    /**
     * Value enum: "checkout_changed", "selection_changed", "eligibility_changed",
     * "inventory_changed", "authority_changed", "superseded_by_priced_quote".
     */
    "stale_reason"?: "checkout_changed"
        | "selection_changed"
        | "eligibility_changed"
        | "inventory_changed"
        | "authority_changed"
        | "superseded_by_priced_quote"
        | (string & {});
    /**
     * Whether the quote can be selected now, derived from the current checkout or renewal order on
     * every read. Value enum: "active", "consumed", "stale", "expired", "revoked".
     */
    "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {});
    /**
     * The priced delivery quote that replaced this quote. Its basis_delivery_quote_id names this
     * quote.
     */
    "superseded_by_delivery_quote_id"?: string;
};
/**
 * One group of order items in a delivery quote, with the delivery options the buyer can choose,
 * its availability status, and any input still needed.
 */
export type DeliveryQuoteChoiceGroupResource = {
    /**
     * Buyer-actionable address verification results that affected this choice group. A
     * suggested_address is an explicit correction the buyer may confirm; Flint does not apply it
     * silently. [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification
     * result for a delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**  [] (Value): string. */
    "allowed_types"?: Array<string>;
    /** Value enum: "ready", "needs_input", "needs_checkout_context", "unavailable". */
    "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable" | (string & {});
    /**
     *  * (Value): {@link DeliveryCandidateOutcomeResource}. The result of evaluating one delivery
     * method for a choice group, selected by `type`: available with an option, unavailable, input
     * required, cannot calculate, or requires checkout context.
     */
    "candidate_outcomes"?: Record<string, DeliveryCandidateOutcomeResource>;
    "delivery_choice_group_id": string;
    /** Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Where the group's items leave from, one leg per origin Location, when all of its methods
     * leave from the same Locations. Omitted when the origin depends on the chosen method, such as
     * shipping from a warehouse or picking up at a store. Each option then lists its own
     * execution_legs. [] (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery
     * choice group, identifying the origin Location the group's items leave from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     *  [] (Value): {@link DeliveryQuoteLineItemResource}. An order line item, or one bundle
     * component of it, and the quantity covered by a delivery choice group.
     */
    "line_items": Array<DeliveryQuoteLineItemResource>;
    /**
     * Types of the delivery methods that can serve this group's items, each listed once, in the
     * order the methods display. A type is listed before its options are priced, such as a local
     * delivery that waits for the buyer's address, and stays listed while its methods need more
     * input or cannot serve the current input. options lists what the buyer can choose now. A
     * method whose type these items do not allow is left out, and the list is empty when no method
     * can serve them. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string. Value
     * enum: "shipment", "pickup", "local_delivery".
     */
    "method_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /**
     *  [] (Value): {@link DeliveryOptionProjection}. A delivery option in a quote or preview: its
     * price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery
     * details.
     */
    "options": Array<DeliveryOptionProjection>;
    "previously_selected_delivery_method_id"?: string;
    "stable_key": string;
};
/**
 * One leg of a delivery choice group, identifying the origin Location the group's items leave
 * from.
 */
export type DeliveryQuoteExecutionLegResource = {
    "delivery_execution_leg_id": string;
    "origin_location_id": string;
};
/**
 * An order line item, or one bundle component of it, and the quantity covered by a delivery choice
 * group.
 */
export type DeliveryQuoteLineItemResource = {
    "bundle_component_id"?: string;
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** A page of `DeliveryQuote` objects. */
export type DeliveryQuoteListResponse = {
    /**
     *  [] (Value): {@link DeliveryQuote}. An estimate of available delivery options and their
     * prices.
     */
    "data": Array<DeliveryQuote>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A delivery method offered in a delivery quote, with its name, type, display position, and
 * revision.
 */
export type DeliveryQuoteMethodResource = {
    "delivery_method_id": string;
    "delivery_method_revision_id": string;
    "description"?: string;
    /** Format: int32. */
    "display_position": number;
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
};
/** A response containing `DeliveryQuote` data. */
export type DeliveryQuoteResponse = {
    /** An estimate of available delivery options and their prices. */
    "data": DeliveryQuote;
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
export type DeliveryQuotesGetParams = {};
export type DeliveryQuotesListParams = {
    /** Filter by checkout session. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "checkout_session_id"?: InputValue<string>;
    /** Filter by order. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Filter by lifecycle status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "consumed", "stale", "expired", "revoked". Value enum: "active", "consumed", "stale",
     * "expired", "revoked". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "consumed", "stale", "expired", "revoked". anyOf[1][] (Value): string. Value enum: "active",
     * "consumed", "stale", "expired", "revoked". anyOf[2] (Value): string. Value enum: "active",
     * "consumed", "stale", "expired", "revoked".
     */
    "status"?: InputValue<("active" | "consumed" | "stale" | "expired" | "revoked")
        | readonly ("active" | "consumed" | "stale" | "expired" | "revoked")[]>;
    /**
     * Filter by evaluation status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "complete", "incomplete", "degraded". Value enum: "complete", "incomplete", "degraded".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "complete", "incomplete",
     * "degraded". anyOf[1][] (Value): string. Value enum: "complete", "incomplete", "degraded".
     * anyOf[2] (Value): string. Value enum: "complete", "incomplete", "degraded".
     */
    "evaluation_status"?: InputValue<("complete" | "incomplete" | "degraded") | readonly ("complete" | "incomplete" | "degraded")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
/**
 * Eligibility condition that matches when the destination or buyer location is within
 * `maximum_distance` of an origin, measured in a straight line.
 */
export type DeliveryRadiusCondition = {
    /** A distance as a `value` in meters, kilometers, or miles. */
    "maximum_distance": DeliveryDistance;
    /** Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line" | (string & {});
    /**
     * The point a radius condition measures from: a specific Location (`location_id`) or the
     * delivery method's own origin (`method_origin`).
     */
    "origin": DeliveryRadiusOrigin;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
/**
 * Eligibility condition that matches when the destination or buyer location is within
 * `maximum_distance` of an origin, measured in a straight line.
 */
export type DeliveryRadiusConditionInput = {
    /** A distance as a `value` in meters, kilometers, or miles. */
    "maximum_distance": DeliveryDistanceInput;
    /** Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line";
    /**
     * The point a radius condition measures from: a specific Location (`location_id`) or the
     * delivery method's own origin (`method_origin`).
     */
    "origin": DeliveryRadiusOriginInput;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * The point a radius condition measures from: a specific Location (`location_id`) or the delivery
 * method's own origin (`method_origin`).
 */
export type DeliveryRadiusOrigin = {
    /** minLength: 1. */
    "location_id"?: string;
    "method_origin"?: boolean;
};
/**
 * The point a radius condition measures from: a specific Location (`location_id`) or the delivery
 * method's own origin (`method_origin`).
 */
export type DeliveryRadiusOriginInput = DeliveryRadiusOrigin;
/** An endpoint that supplies delivery rates. */
export type DeliveryRateCallback = {
    /** Consecutive callback failures since the last successful response. minimum: 0. */
    "circuit_failure_count": number;
    /** Value enum: "closed", "open", "half_open". */
    "circuit_state": "closed" | "open" | "half_open" | (string & {});
    /**
     * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout,
     * request and response size limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "current_delivery_rate_callback_revision_id": string;
    "delivery_rate_callback_id": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** Initial HMAC signing key ID. Returned only by create when hmac is included. */
    "key_id"?: string;
    "name": string;
    /**
     * Initial HMAC shared secret. Returned only by the create response when signing_methods
     * includes hmac.
     */
    "secret"?: string;
    /**
     * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a
     * Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature
     * and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt",
     * "hmac". [] (Value): string. jwt uses Flint's public JWKS. hmac uses a shared secret and
     * Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /** Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryRateCallbackActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.activated";
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
    "event_type": "delivery_rate_callback.activated";
});
/**
 * The `delivery_rate_callback.activated` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryRateCallbackActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated";
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
 * The `delivery_rate_callback.activated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated";
});
export type DeliveryRateCallbackArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.archived";
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
    "event_type": "delivery_rate_callback.archived";
});
/**
 * The `delivery_rate_callback.archived` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryRateCallbackArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.archived". */
    "event_type"?: "delivery_rate_callback.archived";
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
 * The `delivery_rate_callback.archived` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.archived". */
    "event_type"?: "delivery_rate_callback.archived";
});
/**
 * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request
 * and response size limits, redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfiguration = {
    /** Format: int64. minimum: 1. maximum: 1048576. Default: 262144. */
    "maximum_request_bytes"?: number;
    /** Format: int64. minimum: 1. maximum: 1048576. Default: 262144. */
    "maximum_response_bytes"?: number;
    /** Default: false. */
    "preview_enabled"?: boolean;
    /** Default: "reject". Value enum: "reject". */
    "redirect_policy"?: "reject" | (string & {});
    /** minimum: 0.1. maximum: 10. Default: 2. */
    "request_timeout_seconds"?: number;
    /** minLength: 1. */
    "url": string;
};
/**
 * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request
 * and response size limits, redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfigurationInput = {
    /** Format: int64. minimum: 1. maximum: 1048576. Default: 262144. */
    "maximum_request_bytes"?: number;
    /** Format: int64. minimum: 1. maximum: 1048576. Default: 262144. */
    "maximum_response_bytes"?: number;
    /** Default: false. */
    "preview_enabled"?: boolean;
    /** Default: "reject". Value enum: "reject". */
    "redirect_policy"?: "reject";
    /** minimum: 0.1. maximum: 10. Default: 2. */
    "request_timeout_seconds"?: number;
    /** minLength: 1. */
    "url": string;
};
/**
 * Only the keys you send change; keys you leave out keep their current values. Null restores a
 * key's default, as each field describes. The result must be a configuration you could create.
 * Requires expected_version. An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequest = {
    /** Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576. */
    "maximum_request_bytes"?: number | null;
    /** Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576. */
    "maximum_response_bytes"?: number | null;
    /** Null restores false. */
    "preview_enabled"?: boolean | null;
    /** Null restores reject. Value enum: "reject", null. */
    "redirect_policy"?: "reject" | null | (string & {}) | null;
    /** Null restores 2 seconds. minimum: 0.1. maximum: 10. */
    "request_timeout_seconds"?: number | null;
    /** Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Only the keys you send change; keys you leave out keep their current values. Null restores a
 * key's default, as each field describes. The result must be a configuration you could create.
 * Requires expected_version. An empty configuration is invalid. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequestInput = {
    /** Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576. */
    "maximum_request_bytes"?: number | null;
    /** Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576. */
    "maximum_response_bytes"?: number | null;
    /** Null restores false. */
    "preview_enabled"?: boolean | null;
    /** Null restores reject. Value enum: "reject", null. */
    "redirect_policy"?: "reject" | null;
    /** Null restores 2 seconds. minimum: 0.1. maximum: 10. */
    "request_timeout_seconds"?: number | null;
    /** Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Result of checking the connection to a delivery rate callback endpoint, with its status,
 * latency, HTTP status code, and failure category if it failed.
 */
export type DeliveryRateCallbackConnectionCheck = {
    /** RFC3339 timestamp. Format: date-time. */
    "checked_at": string;
    "delivery_rate_callback_id": string;
    "delivery_rate_callback_revision_id": string;
    /**
     * Why the callback connection check failed and the action that can make the next check
     * succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the enabled
     * signing methods. For a 401, check JWT verification with Flint's JWKS, issuer,
     * delivery_rate_callback_id audience, expiration, and body_sha256 of the exact request bytes.
     * For HMAC, check the shared secret and verify the raw body before parsing it. -
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
    "http_status_code"?: number;
    /**
     * ID of the HMAC signing key that signed this request. Empty for a JWT-only callback, which
     * has no shared secret.
     */
    "key_id": string;
    /** Format: int64. */
    "latency_milliseconds": number;
    /** Value enum: "succeeded", "failed". */
    "status": "succeeded" | "failed" | (string & {});
};
/** A response containing `DeliveryRateCallbackConnectionCheck` data. */
export type DeliveryRateCallbackConnectionCheckResponse = {
    /**
     * Result of checking the connection to a delivery rate callback endpoint, with its status,
     * latency, HTTP status code, and failure category if it failed.
     */
    "data": DeliveryRateCallbackConnectionCheck;
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
export type DeliveryRateCallbackCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.created";
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
    "event_type": "delivery_rate_callback.created";
});
/**
 * The `delivery_rate_callback.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryRateCallbackCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.created". */
    "event_type"?: "delivery_rate_callback.created";
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
 * The `delivery_rate_callback.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.created". */
    "event_type"?: "delivery_rate_callback.created";
});
export type DeliveryRateCallbackDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.deactivated";
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
    "event_type": "delivery_rate_callback.deactivated";
});
/**
 * The `delivery_rate_callback.deactivated` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryRateCallbackDeactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.deactivated". */
    "event_type"?: "delivery_rate_callback.deactivated";
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
 * The `delivery_rate_callback.deactivated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.deactivated". */
    "event_type"?: "delivery_rate_callback.deactivated";
});
/** A page of `DeliveryRateCallback` objects. */
export type DeliveryRateCallbackListResponse = {
    /**  [] (Value): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates. */
    "data": Array<DeliveryRateCallback>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `DeliveryRateCallback` data. */
export type DeliveryRateCallbackResponse = {
    /** An endpoint that supplies delivery rates. */
    "data": DeliveryRateCallback;
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
 * Result of rotating a delivery rate callback's signing key, including the new `key_id` and the
 * new `secret`, which is returned only in this response.
 */
export type DeliveryRateCallbackSigningKeyRotation = {
    "delivery_rate_callback_id": string;
    "key_id": string;
    /** New signing secret. Returned only by this rotation response. */
    "secret": string;
};
/** A response containing `DeliveryRateCallbackSigningKeyRotation` data. */
export type DeliveryRateCallbackSigningKeyRotationResponse = {
    /**
     * Result of rotating a delivery rate callback's signing key, including the new `key_id` and
     * the new `secret`, which is returned only in this response.
     */
    "data": DeliveryRateCallbackSigningKeyRotation;
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
 * Result of sending a test request to a delivery rate callback, with its status, latency, HTTP
 * status code, and failure category if it failed.
 */
export type DeliveryRateCallbackTestDelivery = {
    "delivery_rate_callback_id": string;
    "delivery_rate_callback_revision_id": string;
    /**
     * Why the callback test failed and the action that can make the next test succeed. -
     * `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing
     * methods. For a 401, check JWT verification with Flint's JWKS, issuer,
     * delivery_rate_callback_id audience, expiration, and body_sha256 of the exact request bytes.
     * For HMAC, check the shared secret and verify the raw body before parsing it. -
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
    "http_status_code"?: number;
    /**
     * ID of the HMAC signing key that signed this request. Empty for a JWT-only callback, which
     * has no shared secret.
     */
    "key_id": string;
    /** Format: int64. */
    "latency_milliseconds": number;
    /** Value enum: "succeeded", "failed". */
    "status": "succeeded" | "failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "tested_at": string;
};
/** A response containing `DeliveryRateCallbackTestDelivery` data. */
export type DeliveryRateCallbackTestDeliveryResponse = {
    /**
     * Result of sending a test request to a delivery rate callback, with its status, latency, HTTP
     * status code, and failure category if it failed.
     */
    "data": DeliveryRateCallbackTestDelivery;
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
export type DeliveryRateCallbackUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.updated";
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
    "event_type": "delivery_rate_callback.updated";
});
/**
 * The `delivery_rate_callback.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryRateCallbackUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.updated". */
    "event_type"?: "delivery_rate_callback.updated";
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
 * The `delivery_rate_callback.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data"?: {
        /** An endpoint that supplies delivery rates. */
        "object": DeliveryRateCallback;
    };
    /** Value enum: "delivery_rate_callback.updated". */
    "event_type"?: "delivery_rate_callback.updated";
});
export type DeliveryRateCallbacksCheckConnectionParams = {};
export type DeliveryRateCallbacksCreateParams = (InputValue<CreateDeliveryRateCallbackRequestInput>);
export type DeliveryRateCallbacksCreateTestDeliveryParams = {};
export type DeliveryRateCallbacksDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryRateCallbacksGetParams = {};
export type DeliveryRateCallbacksListParams = {
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
     * Search across delivery_rate_callback_id, name, and external_reference_id. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as dcb_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by an active current method that references this resource. Example:
     * "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_method_id"?: InputValue<string>;
};
export type DeliveryRateCallbacksRotateSecretParams = {};
export type DeliveryRateCallbacksUpdateParams = (UpdateDeliveryRateCallbackRequestInput);
/**
 * Pricing strategy that charges the price of the first matching rate in a list of prioritized
 * rates. `unmatched_behavior` says what happens when none match.
 */
export type DeliveryRateTablePricingStrategy = {
    /**
     *  [] (Value): {@link DeliveryPricingRate}. One rate in a rate table pricing strategy: a
     * `when` condition, a `priority`, and a price per currency. The first matching rate by
     * priority sets the price.
     */
    "rates": Array<DeliveryPricingRate>;
    /** Value enum: "unavailable". */
    "unmatched_behavior": "unavailable" | (string & {});
};
/**
 * Rate table pricing strategy you supply when creating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyCreateRequest = {
    /**
     *  [] (Value): {@link DeliveryPricingRateCreateRequest}. A rate to add when creating a rate
     * table pricing strategy: a `when` condition, a `priority`, and a price per currency.
     */
    "rates": Array<DeliveryPricingRateCreateRequest>;
    /** Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable" | (string & {});
};
/**
 * Rate table pricing strategy you supply when creating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyCreateRequestInput = {
    /**
     *  [] (Value): {@link DeliveryPricingRateCreateRequestInput}. A rate to add when creating a
     * rate table pricing strategy: a `when` condition, a `priority`, and a price per currency.
     */
    "rates": Array<DeliveryPricingRateCreateRequestInput>;
    /** Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable";
};
/**
 * Rate table pricing strategy you supply when updating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyRequest = {
    /**
     *  [] (Value): {@link DeliveryPricingRateRequest}. A rate in a rate table pricing strategy you
     * send when updating a delivery method. Include `delivery_rate_id` to keep or update an
     * existing rate.
     */
    "rates": Array<DeliveryPricingRateRequest>;
    /** Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable" | (string & {});
};
/**
 * Rate table pricing strategy you supply when updating a delivery method: a list of prioritized
 * rates, each with a condition and prices.
 */
export type DeliveryRateTablePricingStrategyRequestInput = {
    /**
     *  [] (Value): {@link DeliveryPricingRateRequestInput}. A rate in a rate table pricing
     * strategy you send when updating a delivery method. Include `delivery_rate_id` to keep or
     * update an existing rate.
     */
    "rates": Array<DeliveryPricingRateRequestInput>;
    /** Default: "unavailable". Value enum: "unavailable". */
    "unmatched_behavior"?: "unavailable";
};
/**
 * Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
 * and the format it must use.
 */
export type DeliveryRecipientRequirement = {
    /** Value enum: "name", "email", "phone". */
    "field": "name" | "email" | "phone" | (string & {});
    /** Value enum: "text", "email", "e164". */
    "format"?: "text" | "email" | "e164" | (string & {});
    "required": boolean;
};
/**
 * Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
 * and the format it must use.
 */
export type DeliveryRecipientRequirementInput = {
    /** Value enum: "name", "email", "phone". */
    "field": "name" | "email" | "phone";
    /** Value enum: "text", "email", "e164". */
    "format"?: "text" | "email" | "e164";
    "required": boolean;
};
/** The person receiving a delivery selection, with optional `name`, `email`, and `phone`. */
export type DeliveryRecipientResource = {
    "email"?: string;
    "name"?: string;
    "phone"?: string;
};
