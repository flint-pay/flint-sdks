import type { DeliveryDistance, DeliveryDistanceRequestInput, DeliveryAvailability } from './types-16.js';
import type { MerchantWebhookEnvelope } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { ResponseMeta } from './types-51.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { CreateDeliveryRateCallbackRequestInput, CreateDeliveryRevocationRequestInput } from './types-8.js';
import type { DeliveryLocationSetsDeleteParams } from './types-17.js';
import type { UpdateDeliveryRateCallbackRequestInput } from './types-63.js';
import type {
    DeliveryPricingRate,
    DeliveryPricingRateCreateRequest,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRateRequest,
    DeliveryPricingRateRequestInput
} from './types-18.js';
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
export type DeliveryRadiusConditionRequestInput = {
    /** A distance as a `value` in meters, kilometers, or miles. */
    "maximum_distance": DeliveryDistanceRequestInput;
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
    /** minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
    "current_delivery_rate_callback_revision_id": string;
    /**
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B".
     */
    "delivery_revocation_id": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
     * "cbkey_00112233445566778899aabb".
     */
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
     * "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /** Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type DeliveryRateCallbackActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_rate_callback.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_rate_callback.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated";
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
 * The `delivery_rate_callback.activated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated";
});
export type DeliveryRateCallbackArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_rate_callback.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_rate_callback.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_rate_callback.archived". */
    "event_type"?: "delivery_rate_callback.archived";
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
 * The `delivery_rate_callback.archived` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
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
 * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request
 * and response size limits, redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfigurationRequestInput = {
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
 * Result of checking the connection to a delivery rate callback endpoint, with its status,
 * latency, HTTP status code, and failure category if it failed.
 */
export type DeliveryRateCallbackConnectionCheck = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "checked_at": string;
    /** Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". */
    "delivery_rate_callback_id": string;
    /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
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
     * has no shared secret. Example: "cbkey_00112233445566778899aabb".
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
     * Resource, collection, or operation result returned by this request. Result of checking the
     * connection to a delivery rate callback endpoint, with its status, latency, HTTP status code,
     * and failure category if it failed.
     */
    "data": DeliveryRateCallbackConnectionCheck;
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
export type DeliveryRateCallbackCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_rate_callback.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_rate_callback.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_rate_callback.created". */
    "event_type"?: "delivery_rate_callback.created";
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
 * The `delivery_rate_callback.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_rate_callback.created". */
    "event_type"?: "delivery_rate_callback.created";
});
export type DeliveryRateCallbackDeactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_rate_callback.deactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_rate_callback.deactivated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_rate_callback.deactivated". */
    "event_type"?: "delivery_rate_callback.deactivated";
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
 * The `delivery_rate_callback.deactivated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackDeactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_rate_callback.deactivated". */
    "event_type"?: "delivery_rate_callback.deactivated";
});
/** A page of `DeliveryRateCallback` objects. */
export type DeliveryRateCallbackListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryRateCallback}. An endpoint that supplies delivery rates.
     */
    "data": Array<DeliveryRateCallback>;
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
/** A response containing `DeliveryRateCallback` data. */
export type DeliveryRateCallbackResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An endpoint that
     * supplies delivery rates.
     */
    "data": DeliveryRateCallback;
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
/**
 * Result of rotating a delivery rate callback's signing key, including the new `key_id` and the
 * new `secret`, which is returned only in this response.
 */
export type DeliveryRateCallbackSigningKeyRotation = {
    /** Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". */
    "delivery_rate_callback_id": string;
    /** Example: "cbkey_00112233445566778899aabb". */
    "key_id": string;
    /** New signing secret. Returned only by this rotation response. */
    "secret": string;
};
/** A response containing `DeliveryRateCallbackSigningKeyRotation` data. */
export type DeliveryRateCallbackSigningKeyRotationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of rotating a
     * delivery rate callback's signing key, including the new `key_id` and the new `secret`, which
     * is returned only in this response.
     */
    "data": DeliveryRateCallbackSigningKeyRotation;
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
/**
 * Result of sending a test request to a delivery rate callback, with its status, latency, HTTP
 * status code, and failure category if it failed.
 */
export type DeliveryRateCallbackTestDelivery = {
    /** Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". */
    "delivery_rate_callback_id": string;
    /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
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
     * has no shared secret. Example: "cbkey_00112233445566778899aabb".
     */
    "key_id": string;
    /** Format: int64. */
    "latency_milliseconds": number;
    /** Value enum: "succeeded", "failed". */
    "status": "succeeded" | "failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "tested_at": string;
};
/** A response containing `DeliveryRateCallbackTestDelivery` data. */
export type DeliveryRateCallbackTestDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of sending a test
     * request to a delivery rate callback, with its status, latency, HTTP status code, and failure
     * category if it failed.
     */
    "data": DeliveryRateCallbackTestDelivery;
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
export type DeliveryRateCallbackUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_rate_callback.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_rate_callback.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_rate_callback.updated". */
    "event_type"?: "delivery_rate_callback.updated";
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
 * The `delivery_rate_callback.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Value enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it. object.created_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string.
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null.
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned
     * only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name
     * (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned
     * only by the create response when signing_methods includes hmac. object.signing_methods
     * (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends
     * Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id;
     * hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
     * ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Value enum: "closed",
         * "open", "half_open". configuration (Required): {@link
         * DeliveryRateCallbackConfiguration}. Settings for a delivery rate callback: the endpoint
         * `url` Flint calls, request timeout, request and response size limits, redirect policy,
         * and whether previews can use it. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. Example:
         * "dcbr_01KEZF7C003QAPFXXMCHC59T5J". delivery_rate_callback_id (Required): string. Unique
         * identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_revocation_id (Required): string or null. The
         * revocation fencing this resource's own current revision. `null` when the current
         * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while
         * this is `null` because its rate callback revision, signing key, or a Location's address
         * is revoked. A revocation doesn't change `status`; publish a new revision to clear it.
         * Example: "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". key_id (Optional): string. Initial HMAC signing key ID.
         * Returned only by create when hmac is included. Example:
         * "cbkey_00112233445566778899aabb". name (Required): string. secret (Optional): string.
         * Initial HMAC shared secret. Returned only by the create response when signing_methods
         * includes hmac. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Value enum: "active", "inactive",
         * "archived". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /** Value enum: "closed", "open", "half_open". */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Settings for a delivery rate callback: the endpoint `url` Flint calls, request
             * timeout, request and response size limits, redirect policy, and whether previews can
             * use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Initial HMAC signing key ID. Returned only by create when hmac is included. Example:
             * "cbkey_00112233445566778899aabb".
             */
            "key_id"?: string;
            "name": string;
            /**
             * Initial HMAC shared secret. Returned only by the create response when
             * signing_methods includes hmac.
             */
            "secret"?: string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /** Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryRateCallback>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_rate_callback.updated". */
    "event_type"?: "delivery_rate_callback.updated";
});
export type DeliveryRateCallbacksCheckConnectionParams = DisputesAcceptParams;
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
     * Filter by an active current method that references this resource. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
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
export type DeliveryRecipientRequirementRequestInput = {
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
/** A withdrawal of a previously available delivery choice. */
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
     * DeliveryRevocation}. A withdrawal of a previously available delivery choice.
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
     * Resource, collection, or operation result returned by this request. A withdrawal of a
     * previously available delivery choice.
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
     * When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time,
     * and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailability;
};
