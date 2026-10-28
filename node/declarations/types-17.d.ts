import type { MetadataMap } from './types-32.js';
import type { DeliveryPostalCodeCondition, DeliveryPostalCodeConditionInput } from './types-14.js';
import type { DeliveryRadiusCondition, DeliveryRadiusConditionInput } from './types-15.js';
import type { DeliveryStateCondition, DeliveryStateConditionInput } from './types-16.js';
import type { DeliveryCountryConditionInput, DeliveryLocationSetsListInput } from './types-13.js';
import type { ResponseMeta, ResetDemoSessionRequestInput } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryZoneRequestInput, CreateDemoSessionRequestInput, CreateDeviceRequestInput } from './types-6.js';
import type { UpdateDeliveryZoneRequestInput, UpdateDeviceRequestInput } from './types-51.js';
import type {
    CreatePartnerAppCredentialRequestInput,
    CreatePartnerAppRequestInput,
    CreateOrderDiscount,
    CreateOrderDiscountInput
} from './types-8.js';
import type { IssueSandboxAPIKeyRequestInput } from './types-30.js';
import type { CreateSandboxRequestInput } from './types-10.js';
import type { RotatePartnerAppSecretRequestInput } from './types-46.js';
import type { UpdatePartnerAppRequestInput } from './types-52.js';
import type { Settings } from './types-47.js';
import type { TaxConnection } from './types-50.js';
import type { PromotionCandidate } from './types-40.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-18.js';
import type { MoneyValue } from './types-33.js';
/** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
export type DeliveryZone = {
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. Current geographic eligibility
     * conditions. A reusable geographic predicate containing only country, state, postal_code, and
     * radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
    /** Shape $ (Value): string. Time the zone was created. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. Immutable revision used for new quotes. */
    "current_delivery_zone_revision_id": string;
    /** Shape $ (Value): string. Stable delivery zone ID. */
    "delivery_zone_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. Merchant-facing zone name. */
    "name": string;
    /** Shape $ (Value): string. Current zone lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. Time the zone last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version for zone writes. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryZoneCondition}. Eligibility condition that matches when the
 * destination or buyer location falls inside the delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneCondition = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_zone_id": string;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryZoneConditionInput}. Eligibility condition that matches when the
 * destination or buyer location falls inside the delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneConditionInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_zone_id": string;
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate containing
 * only country, state, postal_code, and radius conditions.
 */
export type DeliveryZoneConfiguration = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfiguration>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfiguration>;
    /**
     * Shape $ (Value): {@link DeliveryStateCondition}. A delivery eligibility condition that
     * matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfiguration;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeCondition}. A delivery eligibility condition that
     * matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches when
     * the destination or buyer location is within `maximum_distance` of an origin, measured in a
     * straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when the
     * destination or buyer location is in one of the listed states or provinces, given as ISO
     * 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
})
    & (({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfiguration}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfiguration;
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
     * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when the
     * destination or buyer location is in one of the listed states or provinces, given as ISO
     * 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeCondition}. A delivery eligibility condition that
     * matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryRadiusCondition}. Eligibility condition that matches when
     * the destination or buyer location is within `maximum_distance` of an origin, measured in a
     * straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
 * containing only country, state, postal_code, and radius conditions.
 */
export type DeliveryZoneConfigurationInput = {
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionInput;
}
    | {
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius"?: DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
}
    | {
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): Array of {@link DeliveryZoneConfigurationInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic
     * predicate containing only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationInput>;
    /**
     * Shape $ (Value): {@link DeliveryCountryConditionInput}. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): {@link DeliveryPostalCodeConditionInput}. A delivery eligibility condition
     * that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryRadiusConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is within `maximum_distance` of an origin, measured
     * in a straight line.
     */
    "radius": DeliveryRadiusConditionInput;
    /**
     * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches
     * when the destination or buyer location is in one of the listed states or provinces, given as
     * ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionInput;
};
/** Shape $ (Value): {@link DeliveryZoneListResponse}. A page of `DeliveryZone` objects. */
export type DeliveryZoneListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryZone}. Shape $[] (Value): {@link DeliveryZone}. A
     * geographic area served by a delivery method.
     */
    "data": Array<DeliveryZone>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link DeliveryZoneResponse}. A response containing `DeliveryZone` data. */
export type DeliveryZoneResponse = {
    /** Shape $ (Value): {@link DeliveryZone}. A geographic area served by a delivery method. */
    "data": DeliveryZone;
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
export type DeliveryZonesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDeliveryZoneRequestInput}. The request body for: Create
     * delivery zone.
     */
    "body": InputValue<CreateDeliveryZoneRequestInput>;
};
export type DeliveryZonesGetInput = {
    /** Shape $ (Value): string. */
    "delivery_zone_id": InputValue<string>;
};
export type DeliveryZonesListInput = DeliveryLocationSetsListInput;
export type DeliveryZonesRemoveInput = {
    /** Shape $ (Value): string. */
    "delivery_zone_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeliveryZonesUpdateInput = {
    /** Shape $ (Value): string. */
    "delivery_zone_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateDeliveryZoneRequestInput}. The request body for: Update
     * delivery zone.
     */
    "body": InputValue<UpdateDeliveryZoneRequestInput>;
};
/**
 * Shape $ (Value): {@link DemoSession}. A demo session with its sandbox, API key, and expiry,
 * returned when you create or reset a demo session.
 */
export type DemoSession = {
    /**
     * Shape $ (Value): {@link DemoSessionAPIKey}. The API key issued for a demo session, with its
     * `secret_key` and the scopes it grants.
     */
    "api_key": DemoSessionAPIKey;
    /** Shape $ (Value): string. */
    "demo_session_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): string. */
    "sandbox_id": string;
};
/**
 * Shape $ (Value): {@link DemoSessionAPIKey}. The API key issued for a demo session, with its
 * `secret_key` and the scopes it grants.
 */
export type DemoSessionAPIKey = {
    /**
     * Shape $ (Value): Array of string. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /** Shape $ (Value): string. */
    "secret_key": string;
};
/** Shape $ (Value): {@link DemoSessionResponse}. A response containing `DemoSession` data. */
export type DemoSessionResponse = {
    /**
     * Shape $ (Value): {@link DemoSession}. A demo session with its sandbox, API key, and expiry,
     * returned when you create or reset a demo session.
     */
    "data": DemoSession;
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
export type DemoSessionsCreateInput = {
    /** Shape $ (Value): string. */
    "Flint-Challenge-Token": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateDemoSessionRequestInput}. The request body for: Create demo
     * session.
     */
    "body": InputValue<CreateDemoSessionRequestInput>;
};
export type DemoSessionsResetInput = {
    /** Shape $ (Value): string. */
    "demo_session_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "Flint-Challenge-Token": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResetDemoSessionRequestInput}. The request body for: Reset demo
     * session.
     */
    "body": InputValue<ResetDemoSessionRequestInput>;
};
export type DeveloperCreatePartnerAppCredentialInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePartnerAppCredentialRequestInput}. An immutable public key,
     * JWKS URL, or workload identity credential for partner app client authentication.
     */
    "body": InputValue<CreatePartnerAppCredentialRequestInput>;
};
export type DeveloperCreatePartnerAppInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePartnerAppRequestInput}. The request body for: Create partner
     * app.
     */
    "body": InputValue<CreatePartnerAppRequestInput>;
};
export type DeveloperCreateSandboxAPIKeyInput = {
    /** Shape $ (Value): string. */
    "sandbox_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link IssueSandboxAPIKeyRequestInput}. The request body for: Issue sandbox
     * test key.
     */
    "body": InputValue<IssueSandboxAPIKeyRequestInput>;
};
export type DeveloperCreateSandboxInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateSandboxRequestInput}. The request body for: Create sandbox. */
    "body": InputValue<CreateSandboxRequestInput>;
};
export type DeveloperDeletePartnerAppCredentialInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_credential_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperDeletePartnerAppInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperDeleteSandboxInput = {
    /** Shape $ (Value): string. */
    "sandbox_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperGetAuthContextInput = {};
export type DeveloperGetCurrentAPIKeyRequestLogInput = {
    /** Shape $ (Value): string. */
    "api_request_log_id": InputValue<string>;
};
export type DeveloperGetPartnerAppCredentialInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_credential_id": InputValue<string>;
};
export type DeveloperGetPartnerAppInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
};
export type DeveloperGetPartnerAppInstallInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_install_id": InputValue<string>;
};
export type DeveloperGetResourceTimelineInput = {
    /** Shape $ (Value): string. */
    "resource_id": InputValue<string>;
    /**
     * Shape $ (Value): string. Value enum: "balance", "balance_transaction", "bundle", "category",
     * "checkout_session", "credit_note", "credit_note_allocation", "customer", "dispute",
     * "fraud_warning", "inventory_count", "inventory_level", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "invoice",
     * "invoice_payment_term", "merchant_billing_balance", "merchant_billing_invoice", "modifier",
     * "modifier_group", "modifier_set", "order", "payment_intent", "payment_link",
     * "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_variant", "promotion", "promotion_code", "refund",
     * "return", "return_activity", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "subscription",
     * "subscription_plan".
     */
    "resource_type"?: InputValue<"balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "customer"
        | "dispute"
        | "fraud_warning"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "invoice"
        | "invoice_payment_term"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "refund"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "subscription"
        | "subscription_plan">;
    /**
     * Shape $ (Value): Array of string. [] enum: "requests", "webhooks", "attempts",
     * "image_mutations". Shape $[] (Value): string. Value enum: "requests", "webhooks",
     * "attempts", "image_mutations".
     */
    "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
};
export type DeveloperGetSandboxInput = {
    /** Shape $ (Value): string. */
    "sandbox_id": InputValue<string>;
};
/**
 * Shape $ (Value): {@link DeveloperInitialAPIKeyRequest}. The request body for: Create onboarding
 * API key.
 */
export type DeveloperInitialAPIKeyRequest = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "scopes"?: Array<string>;
};
/**
 * Shape $ (Value): {@link DeveloperInitialAPIKeyRequestInput}. The request body for: Create
 * onboarding API key.
 */
export type DeveloperInitialAPIKeyRequestInput = DeveloperInitialAPIKeyRequest;
export type DeveloperListCurrentAPIKeyRequestLogsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "api_key", "user",
     * "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity". Shape $[] (Value): string. Value enum: "api_key", "user",
     * "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity".
     */
    "caller_type"?: InputValue<Array<"api_key"
        | "user"
        | "partner_app_install"
        | "checkout_session"
        | "customer_session"
        | "invoice"
        | "workload_identity">>;
    /** Shape $ (Value): string. */
    "caller_id"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. */
    "request_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$. */
    "client_request_id"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^[0-9a-f]{32}$. */
    "client_trace_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "GET", "HEAD", "POST", "PUT",
     * "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE". Shape $[] (Value): string. Value enum:
     * "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE".
     */
    "http_method"?: InputValue<Array<"GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE">>;
    /** Shape $ (Value): string. */
    "path_query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "api_key", "api_request_log",
     * "balance", "balance_transaction", "bundle", "bundle_component", "category",
     * "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity". Shape $[]
     * (Value): string. Value enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
     */
    "resource_type"?: InputValue<Array<"api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "organization"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_connection"
        | "tax_registration"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity">>;
    /** Shape $ (Value): string. */
    "resource_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "success", "client_error",
     * "server_error". Shape $[] (Value): string. Value enum: "success", "client_error",
     * "server_error".
     */
    "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type DeveloperListPartnerAppCredentialsInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type DeveloperListPartnerAppInstallsInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "merchant_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending_exchange", "active",
     * "revoked". Shape $[] (Value): string. Value enum: "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
};
export type DeveloperListPartnerAppsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
};
export type DeveloperListSandboxesInput = DeveloperListPartnerAppsInput;
export type DeveloperResetSandboxInput = DeveloperDeleteSandboxInput;
export type DeveloperRevokePartnerAppInstallInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_install_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperRevokePartnerEnvironmentGrantInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "partner_app_install_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "environment_grant_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DeveloperRotatePartnerAppSecretInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RotatePartnerAppSecretRequestInput}. The request body for: Rotate
     * partner app secret.
     */
    "body"?: InputValue<RotatePartnerAppSecretRequestInput>;
};
export type DeveloperUpdatePartnerAppInput = {
    /** Shape $ (Value): string. */
    "partner_app_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePartnerAppRequestInput}. The request body for: Update partner
     * app. minProperties: 1.
     */
    "body": InputValue<UpdatePartnerAppRequestInput>;
};
/** Shape $ (Value): {@link Device}. A registered device used to accept payments. */
export type Device = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "device_id": string;
    /** Shape $ (Value): string. */
    "hardware_fingerprint"?: string;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string.  Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted device configuration version. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link DeviceListResponse}. A page of `Device` objects. */
export type DeviceListResponse = {
    /**
     * Shape $ (Value): Array of {@link Device}. Shape $[] (Value): {@link Device}. A registered
     * device used to accept payments.
     */
    "data": Array<Device>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link DeviceResponse}. A response containing `Device` data. */
export type DeviceResponse = {
    /** Shape $ (Value): {@link Device}. A registered device used to accept payments. */
    "data": Device;
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
export type DevicesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateDeviceRequestInput}. The request body for: Create device. */
    "body": InputValue<CreateDeviceRequestInput>;
};
export type DevicesGetInput = {
    /** Shape $ (Value): string. */
    "device_id": InputValue<string>;
};
export type DevicesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived". Shape $[]
     * (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<Array<"active" | "archived">>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "hardware_fingerprint"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "name", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type DevicesRemoveInput = {
    /** Shape $ (Value): string. */
    "device_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type DevicesUpdateInput = {
    /** Shape $ (Value): string. */
    "device_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdateDeviceRequestInput}. The request body for: Update device. */
    "body": InputValue<UpdateDeviceRequestInput>;
};
/**
 * Shape $ (Value): {@link DigitalFulfillmentDetails}. Details of a digital fulfillment: when it
 * was delivered (`delivered_at`) and its `delivery_url`.
 */
export type DigitalFulfillmentDetails = {
    /**
     * Shape $ (Value): string. When the digital goods were delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /** Shape $ (Value): string. URL where the recipient can access the delivered digital goods. */
    "delivery_url"?: string;
};
/**
 * Shape $ (Value): {@link Dimensions}. Package or item dimensions as `length`, `width`, and
 * `height` in the given `unit`.
 */
export type Dimensions = {
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "height": number;
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "length": number;
    /**
     * Shape $ (Value): string. Length unit for length, width, and height. Use millimeter,
     * centimeter, or inch. Value enum: "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch" | (string & {});
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "width": number;
};
/**
 * Shape $ (Value): {@link DimensionsInput}. Package or item dimensions as `length`, `width`, and
 * `height` in the given `unit`.
 */
export type DimensionsInput = {
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "height": number;
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "length": number;
    /**
     * Shape $ (Value): string. Length unit for length, width, and height. Use millimeter,
     * centimeter, or inch. Value enum: "millimeter", "centimeter", "inch".
     */
    "unit": "millimeter" | "centimeter" | "inch";
    /**
     * Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum:
     * 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     */
    "width": number;
};
/**
 * Shape $ (Value): {@link DisconnectTaxConnectionRequest}. The request body for: Disconnect
 * automatic tax.
 */
export type DisconnectTaxConnectionRequest = {
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Omit to apply the
     * change to the current resource. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Choose turn_off to stop adding tax to new orders that inherit the
     * default, or keep to leave the default unchanged. Keep refuses those orders and holds
     * subscription renewals until automatic tax is reconnected or the default is turned off.
     * Neither choice turns tax on. Value enum: "turn_off", "keep".
     */
    "tax_default_behavior": "turn_off" | "keep" | (string & {});
};
/**
 * Shape $ (Value): {@link DisconnectTaxConnectionRequestInput}. The request body for: Disconnect
 * automatic tax.
 */
export type DisconnectTaxConnectionRequestInput = {
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Omit to apply the
     * change to the current resource. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Choose turn_off to stop adding tax to new orders that inherit the
     * default, or keep to leave the default unchanged. Keep refuses those orders and holds
     * subscription renewals until automatic tax is reconnected or the default is turned off.
     * Neither choice turns tax on. Value enum: "turn_off", "keep".
     */
    "tax_default_behavior": "turn_off" | "keep";
};
/**
 * Shape $ (Value): {@link DisconnectTaxConnectionResponse}. A response containing
 * `DisconnectTaxConnectionResult` data.
 */
export type DisconnectTaxConnectionResponse = {
    /**
     * Shape $ (Value): {@link DisconnectTaxConnectionResult}. The disconnected automatic tax
     * connection and merchant settings after the requested default-tax change.
     */
    "data": DisconnectTaxConnectionResult;
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
 * Shape $ (Value): {@link DisconnectTaxConnectionResult}. The disconnected automatic tax
 * connection and merchant settings after the requested default-tax change.
 */
export type DisconnectTaxConnectionResult = {
    /**
     * Shape $ (Value): {@link Settings}. Merchant settings, as returned by GET /v1/settings. The
     * settings for one scope (organization, merchant, location, or device), grouped by area such
     * as checkout, tax, receipts, and tipping.
     */
    "settings": Settings;
    /**
     * Shape $ (Value): {@link TaxConnection}. The connection changed by this operation. Its
     * version is the expected_version target. The environment's automatic sales tax connection.
     * Before a record exists, identity, version and timestamps are omitted. Read-time
     * business-detail changes and provider pauses do not advance version or send webhooks.
     * Status_reason and supported_actions can also change with the clock as registrations end,
     * without a version change or webhook.
     */
    "tax_connection": TaxConnection;
};
/**
 * Shape $ (Value): {@link DiscountPreview}. Promotions evaluated for an order, grouped into those
 * that were applied, those that are available, and those that were skipped.
 */
export type DiscountPreview = {
    /**
     * Shape $ (Value): Array of {@link PromotionCandidate}. Shape $[] (Value): {@link
     * PromotionCandidate}. A promotion considered for an order, with its discount amounts, its
     * stacking rules, and why it was or was not applied.
     */
    "applied": Array<PromotionCandidate>;
    /**
     * Shape $ (Value): Array of {@link PromotionCandidate}. Shape $[] (Value): {@link
     * PromotionCandidate}. A promotion considered for an order, with its discount amounts, its
     * stacking rules, and why it was or was not applied.
     */
    "available": Array<PromotionCandidate>;
    /**
     * Shape $ (Value): Array of {@link PromotionCandidate}. Shape $[] (Value): {@link
     * PromotionCandidate}. A promotion considered for an order, with its discount amounts, its
     * stacking rules, and why it was or was not applied.
     */
    "skipped": Array<PromotionCandidate>;
};
/**
 * Shape $ (Value): {@link DiscountPreviewRequest}. The request body for: Create discount preview.
 */
export type DiscountPreviewRequest = {
    /**
     * Shape $ (Value): {@link CreateOrderDiscount}. A discount to apply when creating an order:
     * either a manual discount or a reference to a promotion.
     */
    "discount"?: CreateOrderDiscount;
    /**
     * Shape $ (Value): string. The order to evaluate. Checkout session credentials can use only
     * their own order. minLength: 1.
     */
    "order_id": string;
};
/**
 * Shape $ (Value): {@link DiscountPreviewRequestInput}. The request body for: Create discount
 * preview.
 */
export type DiscountPreviewRequestInput = {
    /**
     * Shape $ (Value): {@link CreateOrderDiscountInput}. A discount to apply when creating an
     * order: either a manual discount or a reference to a promotion.
     */
    "discount"?: CreateOrderDiscountInput;
    /**
     * Shape $ (Value): string. The order to evaluate. Checkout session credentials can use only
     * their own order. minLength: 1.
     */
    "order_id": string;
};
/**
 * Shape $ (Value): {@link DiscountPreviewResponse}. A response containing `DiscountPreview` data.
 */
export type DiscountPreviewResponse = {
    /**
     * Shape $ (Value): {@link DiscountPreview}. Promotions evaluated for an order, grouped into
     * those that were applied, those that are available, and those that were skipped.
     */
    "data": DiscountPreview;
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
export type DiscountPreviewsCreateInput = {
    /**
     * Shape $ (Value): {@link DiscountPreviewRequestInput}. The request body for: Create discount
     * preview.
     */
    "body": InputValue<DiscountPreviewRequestInput>;
};
/** Shape $ (Value): {@link Dispute}. A challenge to a collected payment. */
export type Dispute = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): boolean. Whether this dispute has an evidence response window. It stays
     * true after the window closes or a decision is made. Use is_action_required to know whether a
     * response is needed now.
     */
    "can_respond_with_evidence": boolean;
    /**
     * Shape $ (Value): string. Value enum: "inquiry", "chargeback", "compliance", "resolution",
     * "block", "other", "bank_return".
     */
    "case_type": "inquiry"
        | "chargeback"
        | "compliance"
        | "resolution"
        | "block"
        | "other"
        | "bank_return"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /** Shape $ (Value): string. */
    "dispute_id": string;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "evidence_due_at": string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "evidence_submission_count": number;
    /** Shape $ (Value): string. */
    "fraud_warning_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether evidence is saved for this dispute, submitted or not.
     * evidence_submission_count says whether it was submitted.
     */
    "has_evidence": boolean;
    /** Shape $ (Value): boolean. */
    "is_action_required": boolean;
    /** Shape $ (Value): boolean. */
    "is_evidence_deadline_passed": boolean;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string or null. Value enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit", null.
     */
    "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | null | (string & {}) | null;
    /**
     * Shape $ (Value): string. Value enum: "fraudulent", "unrecognized", "duplicate",
     * "product_not_received", "product_not_as_described", "refund_not_processed",
     * "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized",
     * "bank_account_not_found", "other".
     */
    "reason": "fraudulent"
        | "unrecognized"
        | "duplicate"
        | "product_not_received"
        | "product_not_as_described"
        | "refund_not_processed"
        | "subscription_canceled"
        | "noncompliant"
        | "insufficient_funds"
        | "debit_not_authorized"
        | "bank_account_not_found"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Why a response is unavailable when can_respond_with_evidence is
     * false. Absent when no reason is reported. Current values are bank_return_not_contestable and
     * response_window_unavailable. response_window_unavailable means no evidence deadline was
     * supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
     */
    "response_unavailable_reason"?: "bank_return_not_contestable" | "response_window_unavailable" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "status": "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Recorded time of the current status. On first observation this is
     * the dispute creation time. Later status changes use the provider event time when available,
     * or the time Flint observed the change. This may not be the exact decision or submission
     * time. Format: date-time.
     */
    "status_changed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
