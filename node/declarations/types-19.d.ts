import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { RevokeDeliveryDependencyRequestInput } from './types-51.js';
import type {
    DeliveryAvailability,
    DeliveryAvailabilityRequestInput,
    DeliveryBuyerLocationResource,
    DeliveryBusinessDayRange,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryCountryConditionInput
} from './types-14.js';
import type { Address } from './types-0.js';
import type { DeliveryInputRequirement, DeliveryInventoryReservationSummary } from './types-15.js';
import type { DeliveryRecipientResource, DeliveryRadiusCondition, DeliveryRadiusConditionInput } from './types-18.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type {
    DeliveryPickupDetails,
    DeliveryPlan,
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeConditionInput
} from './types-16.js';
import type { CheckoutSession } from './types-4.js';
import type { Order } from './types-36.js';
import type { DeliveryPricingTierBand, DeliveryPricingTierBandRequestInput } from './types-17.js';
/** A withdrawal of a previously available delivery choice. */
export type DeliveryRevocation = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "delivery_revocation_id": string;
    /**
     * Counts of active delivery quotes and current delivery selections affected by a delivery
     * revocation.
     */
    "estimated_impact": DeliveryRevocationImpact;
    "merchant_note"?: string;
    /**
     * Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /** A typed revocation target. Each target_type accepts only its resource-specific fields. */
    "target": DeliveryRevocationTarget;
};
export type DeliveryRevocationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRevocation;
    };
    "event_type"?: "delivery_revocation.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRevocation;
    };
    "event_type"?: "delivery_revocation.created";
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
    "event_type": "delivery_revocation.created";
});
/**
 * The `delivery_revocation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryRevocationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRevocation}. A withdrawal of a previously available
     * delivery choice.
     */
    "data"?: {
        /** A withdrawal of a previously available delivery choice. */
        "object": DeliveryRevocation;
    };
    /** Value enum: "delivery_revocation.created". */
    "event_type"?: "delivery_revocation.created";
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
 * The `delivery_revocation.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type DeliveryRevocationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryRevocation}. A withdrawal of a previously available
     * delivery choice.
     */
    "data"?: {
        /** A withdrawal of a previously available delivery choice. */
        "object": DeliveryRevocation;
    };
    /** Value enum: "delivery_revocation.created". */
    "event_type"?: "delivery_revocation.created";
});
/**
 * Counts of active delivery quotes and current delivery selections affected by a delivery
 * revocation.
 */
export type DeliveryRevocationImpact = {
    /** Format: int64. */
    "active_quote_count": number;
    /** Format: int64. */
    "current_selection_count": number;
};
/** A page of `DeliveryRevocation` objects. */
export type DeliveryRevocationListResponse = {
    /**
     *  [] (Value): {@link DeliveryRevocation}. A withdrawal of a previously available delivery
     * choice.
     */
    "data": Array<DeliveryRevocation>;
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
/** A response containing `DeliveryRevocation` data. */
export type DeliveryRevocationResponse = {
    /** A withdrawal of a previously available delivery choice. */
    "data": DeliveryRevocation;
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
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type DeliveryRevocationTarget = ({
    "delivery_method_id"?: string;
    "delivery_method_revision_id"?: string;
    "delivery_rate_callback_id"?: string;
    "delivery_rate_callback_revision_id"?: string;
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Required for delivery_method and delivery_rate_callback targets. The revocation resolves and
     * permanently fences only the exact current revision at this stable-resource version. Omit it
     * for exact revision, geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    "location_id"?: string;
    /**
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method",
     * "delivery_method_revision".
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
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type DeliveryRevocationTargetDeliveryMethod = ({
    "delivery_method_id": string;
    "delivery_method_revision_id"?: string;
    "delivery_rate_callback_id"?: string;
    "delivery_rate_callback_revision_id"?: string;
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Required for delivery_method and delivery_rate_callback targets. The revocation resolves and
     * permanently fences only the exact current revision at this stable-resource version. Omit it
     * for exact revision, geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    "location_id"?: string;
    /** Value enum: "delivery_method". */
    "target_type": "delivery_method" | (string & {});
})
    & (({
    /** Value enum: "delivery_method". */
    "target_type": unknown;
    "delivery_method_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type DeliveryRevocationTargetDeliveryMethodRevision = ({
    "delivery_method_id": string;
    "delivery_method_revision_id": string;
    "delivery_rate_callback_id"?: string;
    "delivery_rate_callback_revision_id"?: string;
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Required for delivery_method and delivery_rate_callback targets. The revocation resolves and
     * permanently fences only the exact current revision at this stable-resource version. Omit it
     * for exact revision, geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    "location_id"?: string;
    /** Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision" | (string & {});
})
    & (({
    /** Value enum: "delivery_method_revision". */
    "target_type": unknown;
    "delivery_method_id": string;
    "delivery_method_revision_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type DeliveryRevocationTargetDeliveryRateCallback = ({
    "delivery_method_id"?: string;
    "delivery_method_revision_id"?: string;
    "delivery_rate_callback_id": string;
    "delivery_rate_callback_revision_id"?: string;
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Required for delivery_method and delivery_rate_callback targets. The revocation resolves and
     * permanently fences only the exact current revision at this stable-resource version. Omit it
     * for exact revision, geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback". */
    "target_type": unknown;
    "delivery_rate_callback_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type DeliveryRevocationTargetDeliveryRateCallbackRevision = ({
    "delivery_method_id"?: string;
    "delivery_method_revision_id"?: string;
    "delivery_rate_callback_id": string;
    "delivery_rate_callback_revision_id": string;
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Required for delivery_method and delivery_rate_callback targets. The revocation resolves and
     * permanently fences only the exact current revision at this stable-resource version. Omit it
     * for exact revision, geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": unknown;
    "delivery_rate_callback_id": string;
    "delivery_rate_callback_revision_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type DeliveryRevocationTargetDeliveryRateCallbackSigningKey = ({
    "delivery_method_id"?: string;
    "delivery_method_revision_id"?: string;
    "delivery_rate_callback_id"?: string;
    "delivery_rate_callback_revision_id"?: string;
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Required for delivery_method and delivery_rate_callback targets. The revocation resolves and
     * permanently fences only the exact current revision at this stable-resource version. Omit it
     * for exact revision, geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": unknown;
    "delivery_rate_callback_signing_key_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type DeliveryRevocationTargetLocationGeography = ({
    "delivery_method_id"?: string;
    "delivery_method_revision_id"?: string;
    "delivery_rate_callback_id"?: string;
    "delivery_rate_callback_revision_id"?: string;
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Required for delivery_method and delivery_rate_callback targets. The revocation resolves and
     * permanently fences only the exact current revision at this stable-resource version. Omit it
     * for exact revision, geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    "location_id": string;
    /** Value enum: "location_geography". */
    "target_type": "location_geography" | (string & {});
})
    & (({
    /** Value enum: "location_geography". */
    "target_type": unknown;
    "location_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
}));
export type DeliveryRevocationsCreateParams = (InputValue<RevokeDeliveryDependencyRequestInput>);
export type DeliveryRevocationsGetParams = {};
export type DeliveryRevocationsListParams = {
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
     * Filter by revocation target type. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". Value
     * enum: "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". anyOf[1][]
     * (Value): string. Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method",
     * "delivery_method_revision". anyOf[2] (Value): string. Value enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision".
     */
    "target_type"?: InputValue<("location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision")
        | readonly ("location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision")[]>;
    /**
     * Filter by revocation reason. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "unsafe_configuration", "location_unavailable", "credential_compromise",
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
};
/** Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule. */
export type DeliveryScheduleWindowRule = {
    /**
     * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time,
     * and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailability;
};
/**
 * Scheduled-window estimate rule you supply for a delivery method, defined by its `availability`
 * schedule.
 */
export type DeliveryScheduleWindowRuleRequestInput = {
    /**
     * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time,
     * and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailabilityRequestInput;
};
/** The delivery choice selected for a checkout or order. */
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
     * API key or dashboard credential. Format: date-time.
     */
    "calculation_expires_at"?: string;
    /**
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential.
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
     * Format: date-time.
     */
    "created_at"?: string;
    /** Quote from which this selection was made. */
    "delivery_quote_id": string;
    /**
     * Quote version from which this selection was created. Always present with an API key or
     * dashboard credential. Format: uint64. minimum: 0.
     */
    "delivery_quote_version"?: number;
    /** Stable delivery selection ID. */
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
     * Checkout eligibility context version evaluated by this selection. Always present with an API
     * key or dashboard credential. Format: uint64. minimum: 0.
     */
    "eligibility_context_version"?: number;
    /**
     * Deadline after which this provisional selection can no longer be committed. Format:
     * date-time.
     */
    "expires_at": string;
    /**
     * Inputs this selection still needs before payment: each recipient field a chosen option
     * requires that the selection does not include. Each entry repeats the quote's requirement for
     * that option, with the same delivery_input_requirement_id. Payment fails with
     * ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference
     * until a new delivery selection includes them. Empty when nothing is missing, and always
     * empty unless status is selected. [] (Value): {@link DeliveryInputRequirement}. An input a
     * delivery method needs, such as an address field or time window, with its `field_path`,
     * purpose, and constraint.
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
     * credential. Format: date-time.
     */
    "lifecycle_updated_at"?: string;
    /**
     * Constraint that determined the selection expiry. Always present with an API key or dashboard
     * credential. Value enum: "selection_guarantee_expiry", "calculation_expiry",
     * "selection_maximum_lifetime", "inventory_reservation_expiry", "tax_validity_expiry",
     * "checkout_session_expiry".
     */
    "limiting_deadline_reason"?: "selection_guarantee_expiry"
        | "calculation_expiry"
        | "selection_maximum_lifetime"
        | "inventory_reservation_expiry"
        | "tax_validity_expiry"
        | "checkout_session_expiry"
        | (string & {});
    /** Order affected by the selection. Always present with an API key or dashboard credential. */
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
    /** Time merchant-private selection evidence was redacted. Format: date-time. */
    "redacted_at"?: string;
    /**
     * Current selection lifecycle status. Value enum: "selected", "locked_for_payment",
     * "committed", "superseded", "expired", "released".
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
 * A delivery option chosen for one choice group in a delivery selection, with its method, amounts,
 * type-specific details, timezone, and any chosen delivery window.
 */
export type DeliverySelectionChoiceResource = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "delivery_choice_group_id": string;
    "delivery_method_id": string;
    "delivery_option_id": string;
    /**
     * Whether a delivery option is fulfilled in one delivery or several, with the first arrival
     * time, completion time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    "delivery_window_id"?: string;
    "description"?: string;
    /**
     * Always present with an API key or dashboard credential. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money"?: MoneyValue;
    /**
     * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
     * delivery windows, and optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
    /** Details of a local delivery option: instructions and service level. */
    "local_delivery"?: DeliveryShipmentDetails;
    "merchant_reference"?: string;
    "name": string;
    /**
     * Always present with an API key or dashboard credential. Null when the choice has no order
     * charge.
     */
    "order_charge_id"?: string | null;
    /** Pickup details of a delivery option: the pickup mode and the pickup location. */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Shipment-specific details of a delivery option or choice: the `service_level` and buyer
     * `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "total_money": MoneyValue;
    /** Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "window_start_at"?: string;
};
export type DeliverySelectionCommittedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliverySelection;
    };
    "event_type"?: "delivery_selection.committed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliverySelection;
    };
    "event_type"?: "delivery_selection.committed";
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
    "event_type": "delivery_selection.committed";
});
/**
 * The `delivery_selection.committed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliverySelectionCommittedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliverySelection}. The delivery choice selected for a checkout
     * or order.
     */
    "data"?: {
        /** The delivery choice selected for a checkout or order. */
        "object": DeliverySelection;
    };
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
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
 * The `delivery_selection.committed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliverySelectionCommittedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliverySelection}. The delivery choice selected for a checkout
     * or order.
     */
    "data"?: {
        /** The delivery choice selected for a checkout or order. */
        "object": DeliverySelection;
    };
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
});
/**
 * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
 * delivery windows, and optional `instructions`.
 */
export type DeliverySelectionInstructionsRequest = {
    /** minLength: 1. */
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
/**
 * A status change in a delivery selection's history, with the new `status`, the `reason`, and when
 * it happened.
 */
export type DeliverySelectionLifecycleEventResource = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "delivery_selection_id": string;
    "delivery_selection_lifecycle_event_id": string;
    /**
     * Value enum: "replacement_selected", "buyer_selected", "payment_started",
     * "payment_failed_selection_restored", "payment_settled", "payment_failed_selection_expired",
     * "calculation_expired", "selection_expired", "selection_not_current", "dependency_revoked",
     * "buyer_cleared", "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal",
     * "order_mutated", "quote_basis_changed", "calculation_changed".
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
     * Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired",
     * "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
};
/** A page of `DeliverySelection` objects. */
export type DeliverySelectionListResponse = {
    /**
     *  [] (Value): {@link DeliverySelection}. The delivery choice selected for a checkout or
     * order.
     */
    "data": Array<DeliverySelection>;
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
 * Recipient details you supply with a delivery selection or subscription delivery: optional
 * `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequest = {
    /**
     * Recipient email address. Limited to 254 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. When the selected delivery option requires it, payment
     * needs it: send it with this selection or a later one. Send null to clear it. Format: email.
     * minLength: 1. maxLength: 254.
     */
    "email"?: string | null;
    /**
     * Recipient name. Limited to 200 characters (Unicode code points), counted before surrounding
     * whitespace is trimmed. When the selected delivery option requires it, payment needs it: send
     * it with this selection or a later one. Send null to clear it. minLength: 1. maxLength: 200.
     */
    "name"?: string | null;
    /**
     * Recipient phone number. After surrounding whitespace is trimmed, use + followed by 7 through
     * 15 ASCII digits, with a nonzero first digit. Limited to 16 characters (Unicode code points),
     * counted before trimming. When the selected delivery option requires it, payment needs it:
     * send it with this selection or a later one. Send null to clear it. minLength: 1. maxLength:
     * 16.
     */
    "phone"?: string | null;
};
/**
 * Recipient details you supply with a delivery selection or subscription delivery: optional
 * `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequestInput = DeliverySelectionRecipientRequest;
/** A response containing `DeliverySelection` data. */
export type DeliverySelectionResponse = {
    /** The delivery choice selected for a checkout or order. */
    "data": DeliverySelection;
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
 * Result of a checkout delivery selection request, returning the checkout session, order, delivery
 * selection, and any inventory reservation summary.
 */
export type DeliverySelectionResult = {
    /**
     * The checkout session after the selection. A session in which a buyer completes an order's
     * payment.
     */
    "checkout_session": CheckoutSession;
    /** The selection now on the checkout. The delivery choice selected for a checkout or order. */
    "delivery_selection": DeliverySelection;
    /**
     * The stock held for this selection. Omitted when the order holds no stock reservation, and
     * for checkout credentials. The inventory reservation held for a delivery selection: its
     * owner, status, expiry, and the next action required.
     */
    "inventory_reservation"?: DeliveryInventoryReservationSummary;
    /**
     * The order after the selection, with delivery charges applied and tax recalculated. Render
     * totals from it instead of reading the order again. When tax still needs input,
     * order.tax.status says so. A customer's purchase and its payment and fulfillment progress.
     */
    "order": Order;
};
/** A response containing `DeliverySelectionResult` data. */
export type DeliverySelectionResultResponse = {
    /**
     * Result of a checkout delivery selection request, returning the checkout session, order,
     * delivery selection, and any inventory reservation summary.
     */
    "data": DeliverySelectionResult;
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
 * Shipment-specific details of a delivery option or choice: the `service_level` and buyer
 * `instructions`.
 */
export type DeliveryShipmentDetails = {
    "instructions"?: string;
    "service_level"?: string;
};
/**
 * Eligibility condition that matches when the destination or buyer location is in one of the
 * listed states or provinces, given as ISO 3166-2 codes.
 */
export type DeliveryStateCondition = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province
     * you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS
     * military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An
     * address matches when its state names one of these subdivisions of its country, whether it
     * was sent as NY, US-NY, or New York. If the address country is listed by the condition but
     * state names no subdivision of that country, the condition cannot be decided: the method or
     * rate is left out as cannot_calculate (invalid_buyer_input). [] (Value): string. minLength:
     * 1.
     */
    "values": Array<string>;
};
/**
 * Eligibility condition that matches when the destination or buyer location is in one of the
 * listed states or provinces, given as ISO 3166-2 codes.
 */
export type DeliveryStateConditionInput = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province
     * you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS
     * military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An
     * address matches when its state names one of these subdivisions of its country, whether it
     * was sent as NY, US-NY, or New York. If the address country is listed by the condition but
     * state names no subdivision of that country, the condition cannot be decided: the method or
     * rate is left out as cannot_calculate (invalid_buyer_input). [] (Value): string. minLength:
     * 1.
     */
    "values": Array<string>;
};
/**
 * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
 * selects a band, and `unit` applies to weight bases.
 */
export type DeliveryTieredPricingStrategy = ({
    /**
     *  [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing strategy,
     * covering values of the strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value
     * enum: "choice_group.total_weight", "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ((Exclude<DeliveryTieredPricingStrategyWeight & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyQuantityOrMoney & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategyInput`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant
 * of `DeliveryTieredPricingStrategyInput`.
 */
export type DeliveryTieredPricingStrategyInputQuantityOrMoneyInput = ({
    /**
     *  [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing
     * strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a
     * price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value
     * enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & (({
    /**
     * Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts";
})
    & ({
    "unit"?: never;
}));
/** The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`. */
export type DeliveryTieredPricingStrategyInputWeightInput = ({
    /**
     *  [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing
     * strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a
     * price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value
     * enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
})
    & ({
    /** Value enum: "choice_group.total_weight". */
    "basis"?: "choice_group.total_weight";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
});
/**
 * The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategy`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of
 * `DeliveryTieredPricingStrategy`.
 */
export type DeliveryTieredPricingStrategyQuantityOrMoney = ({
    /**
     *  [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing strategy,
     * covering values of the strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value
     * enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & (({
    /**
     * Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | (string & {});
}));
/**
 * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
 * prices, and a weight `unit` when the basis is total weight.
 */
export type DeliveryTieredPricingStrategyRequestInput = ({
    /**
     *  [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing
     * strategy you supply, covering values of the strategy's `basis` from `from` to `to`, with a
     * price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value
     * enum: "choice_group.total_weight", "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & ((Exclude<DeliveryTieredPricingStrategyInputWeightInput & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput & object, readonly unknown[]>));
/** The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`. */
export type DeliveryTieredPricingStrategyWeight = ({
    /**
     *  [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing strategy,
     * covering values of the strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value
     * enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight" | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ({
    /** Value enum: "choice_group.total_weight". */
    "basis"?: "choice_group.total_weight" | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
});
/**
 * Estimate rule giving a delivery method's handling time and transit time as ranges of business
 * days.
 */
export type DeliveryTransitTimeRule = {
    /** A minimum and maximum number of business days, used in transit time estimates. */
    "handling_days": DeliveryBusinessDayRange;
    /** A minimum and maximum number of business days, used in transit time estimates. */
    "transit_days": DeliveryBusinessDayRange;
};
/**
 * Estimate rule giving a delivery method's handling time and transit time as ranges of business
 * days.
 */
export type DeliveryTransitTimeRuleRequestInput = {
    /** A minimum and maximum number of business days, used in transit time estimates. */
    "handling_days": DeliveryBusinessDayRangeRequestInput;
    /** A minimum and maximum number of business days, used in transit time estimates. */
    "transit_days": DeliveryBusinessDayRangeRequestInput;
};
/**
 * A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a
 * delivery method's availability schedule.
 */
export type DeliveryWeeklyInterval = {
    "end_minute": number;
    "end_weekday": number;
    "start_minute": number;
    "start_weekday": number;
};
/**
 * A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a
 * delivery method's availability schedule.
 */
export type DeliveryWeeklyIntervalRequestInput = DeliveryWeeklyInterval;
/**
 * Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity`
 * of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPrice = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * Price per unit of weight you supply for calculated pricing: a price per currency for each
 * `unit_quantity` of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPriceRequestInput = {
    /**
     *  * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * A delivery window you supply in a caller-supplied delivery outcome, with its time range, price,
 * and the last moment a buyer can choose it.
 */
export type DeliveryWindowRequest = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** minLength: 1. */
    "delivery_window_id": string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "end_at": string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "start_at": string;
};
/**
 * A delivery window you supply in a caller-supplied delivery outcome, with its time range, price,
 * and the last moment a buyer can choose it.
 */
export type DeliveryWindowRequestInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** minLength: 1. */
    "delivery_window_id": string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "end_at": string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "start_at": string | globalThis.Date;
};
/**
 * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the
 * listed `weekdays`.
 */
export type DeliveryWindowTimeCondition = {
    "end_minute"?: number;
    "start_minute"?: number;
    /**  [] (Value): string. minLength: 1. */
    "weekdays"?: Array<string>;
};
/**
 * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the
 * listed `weekdays`.
 */
export type DeliveryWindowTimeConditionInput = DeliveryWindowTimeCondition;
/** A geographic area served by a delivery method. */
export type DeliveryZone = {
    /**
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
    /** Time the zone was created. Format: date-time. */
    "created_at": string;
    /** Immutable revision used for new quotes. */
    "current_delivery_zone_revision_id": string;
    /** Stable delivery zone ID. */
    "delivery_zone_id": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing zone name. */
    "name": string;
    /** Current zone lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the zone last changed. Format: date-time. */
    "updated_at": string;
    /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryZoneActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.activated";
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
    "event_type": "delivery_zone.activated";
});
/**
 * The `delivery_zone.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.activated". */
    "event_type"?: "delivery_zone.activated";
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
 * The `delivery_zone.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.activated". */
    "event_type"?: "delivery_zone.activated";
});
export type DeliveryZoneArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.archived";
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
    "event_type": "delivery_zone.archived";
});
/**
 * The `delivery_zone.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.archived". */
    "event_type"?: "delivery_zone.archived";
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
 * The `delivery_zone.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data"?: {
        /** A geographic area served by a delivery method. */
        "object": DeliveryZone;
    };
    /** Value enum: "delivery_zone.archived". */
    "event_type"?: "delivery_zone.archived";
});
/**
 * Eligibility condition that matches when the destination or buyer location falls inside the
 * delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneCondition = {
    /** minLength: 1. */
    "delivery_zone_id": string;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
/**
 * Eligibility condition that matches when the destination or buyer location falls inside the
 * delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneConditionInput = {
    /** minLength: 1. */
    "delivery_zone_id": string;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfiguration = ({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfiguration}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfiguration>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfiguration}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfiguration>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not"?: DeliveryZoneConfiguration;
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
})
    & (({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfiguration}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfiguration}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not": DeliveryZoneConfiguration;
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
    | (Record<string, unknown>));
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfigurationInput = {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfigurationInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfigurationInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not": DeliveryZoneConfigurationInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionInput;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link DeliveryZoneConfigurationInput}. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * A delivery eligibility condition that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * A reusable geographic predicate containing only country, state, postal_code, and radius
     * conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * A delivery eligibility condition that matches the address postal code against exact or
     * prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is within
     * `maximum_distance` of an origin, measured in a straight line.
     */
    "radius": DeliveryRadiusConditionInput;
    /**
     * Eligibility condition that matches when the destination or buyer location is in one of the
     * listed states or provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
};
export type DeliveryZoneCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.created";
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
    "event_type": "delivery_zone.created";
});
