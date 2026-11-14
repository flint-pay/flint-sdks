import type { DeliveryRateCallback } from './types-20.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { MerchantWebhookEnvelope } from './types-38.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-24.js';
import type { CreateDeliveryRateCallbackRequestInput } from './types-8.js';
import type { DeliveryLocationSetsDeleteParams } from './types-18.js';
import type { UpdateDeliveryRateCallbackRequestInput } from './types-66.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type {
    DeliveryPricingRate,
    DeliveryPricingRateCreateRequest,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRateRequest,
    DeliveryPricingRateRequestInput
} from './types-19.js';
import type { DeliveryRevocationTarget } from './types-22.js';
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default:
     * false.
     */
    "preview_enabled"?: boolean;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`.
     * Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject" | (string & {});
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. minimum: 0.1. maximum: 10. Default: 2.
     */
    "request_timeout_seconds"?: number;
    /** HTTPS URL that Flint calls to get a delivery rate. minLength: 1. */
    "url": string;
};
/**
 * Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's
 * default, as each field describes. The result must be a configuration you could create. An empty
 * configuration is invalid. Publishes a new immutable revision, even when the values are
 * unchanged, and requires expected_version. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequest = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Null restores
     * false.
     */
    "preview_enabled"?: boolean | null;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Null
     * restores reject. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null | (string & {}) | null;
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. Null restores 2 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /** HTTPS URL that Flint calls to get a delivery rate. Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's
 * default, as each field describes. The result must be a configuration you could create. An empty
 * configuration is invalid. Publishes a new immutable revision, even when the values are
 * unchanged, and requires expected_version. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequestInput = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Null restores
     * false.
     */
    "preview_enabled"?: boolean | null;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Null
     * restores reject. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null;
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. Null restores 2 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /** HTTPS URL that Flint calls to get a delivery rate. Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request
 * and response size limits, redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfigurationRequestInput = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default:
     * false.
     */
    "preview_enabled"?: boolean;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`.
     * Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject";
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. minimum: 0.1. maximum: 10. Default: 2.
     */
    "request_timeout_seconds"?: number;
    /** HTTPS URL that Flint calls to get a delivery rate. minLength: 1. */
    "url": string;
};
/**
 * Result of checking the connection to a delivery rate callback endpoint, with its status,
 * latency, HTTP status code, and failure category if it failed.
 */
export type DeliveryRateCallbackConnectionCheck = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "checked_at": string;
    /**
     * ID of the delivery rate callback that was called. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /** ID of the callback revision that was called. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
    "delivery_rate_callback_revision_id": string;
    /**
     * ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids
     * header. Empty for a JWT-only callback, which has no shared secret. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id": string;
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
    /** HTTP status code the callback returned. Omitted when it returned none. */
    "http_status_code"?: number;
    /** Time the callback took to answer, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * Whether the callback answered the request successfully. Value enum: "succeeded", "failed".
     */
    "status": "succeeded" | "failed" | (string & {});
};
/**
 * The body of a connection check, which Flint sends to a delivery rate callback's URL to confirm
 * it is reachable and verifies signatures. Return any 2xx status; Flint doesn't read the response
 * body.
 */
export type DeliveryRateCallbackConnectionCheckRequest = {
    /** Always `connection_check`. Value enum: "connection_check". */
    "type": "connection_check" | (string & {});
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
            "name": string;
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
            "name": string;
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
            "name": string;
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
            "name": string;
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
 * Result of sending a test request to a delivery rate callback, with its status, latency, HTTP
 * status code, and failure category if it failed.
 */
export type DeliveryRateCallbackTestDelivery = {
    /**
     * ID of the delivery rate callback that was called. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /** ID of the callback revision that was called. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". */
    "delivery_rate_callback_revision_id": string;
    /**
     * ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids
     * header. Empty for a JWT-only callback, which has no shared secret. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id": string;
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
    /** HTTP status code the callback returned. Omitted when it returned none. */
    "http_status_code"?: number;
    /** Time the callback took to answer, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * Whether the callback answered the request successfully. Value enum: "succeeded", "failed".
     */
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
            "name": string;
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
            "name": string;
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
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
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
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
/**
 * A delivery rate callback with its one-time HMAC shared secret, returned on create with hmac, by
 * the PATCH that first adds hmac, and by rotate-secret. An endpoint that supplies delivery rates.
 */
export type DeliveryRateCallbackWithSecret = (Exclude<DeliveryRateCallback & object, readonly unknown[]>)
    & ({
    /**
     * ID of the HMAC signing key for secret, sent in the Flint-Signing-Key-Ids request header.
     * Present exactly when secret is present. Example: "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * One-time HMAC shared secret. Present on create when signing_methods includes hmac, on the
     * PATCH that first adds hmac, and on rotate-secret; omitted on an idempotent replay after the
     * secret retention period and on every other response. Flint never returns it again.
     */
    "secret"?: string;
});
/** A response containing `DeliveryRateCallbackWithSecret` data. */
export type DeliveryRateCallbackWithSecretResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A delivery rate callback
     * with its one-time HMAC shared secret, returned on create with hmac, by the PATCH that first
     * adds hmac, and by rotate-secret. An endpoint that supplies delivery rates.
     */
    "data": DeliveryRateCallbackWithSecret;
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
