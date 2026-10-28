import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryRateCallbackRequestInput } from './types-6.js';
import type { UpdateDeliveryRateCallbackRequestInput } from './types-51.js';
import type {
    DeliveryPricingRate,
    DeliveryPricingRateCreateRequest,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRateRequest,
    DeliveryPricingRateRequestInput,
    DeliveryPickupDetails,
    DeliveryPlan
} from './types-14.js';
import type { RevokeDeliveryDependencyRequestInput } from './types-45.js';
import type {
    DeliveryAvailability,
    DeliveryAvailabilityRequestRequestInput,
    DeliveryBuyerLocationResource,
    DeliveryBusinessDayRange,
    DeliveryBusinessDayRangeRequestRequestInput
} from './types-12.js';
import type { Address } from './types-0.js';
import type { DeliveryInputRequirement, DeliveryInventoryReservationSummary } from './types-13.js';
import type { MoneyValue, Order, MoneyValueInput } from './types-33.js';
import type { CheckoutSession } from './types-4.js';
import type { DeliveryPricingTierBand, DeliveryPricingTierBandRequestInput } from './types-15.js';
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
     * test succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the
     * enabled signing methods. For a 401, check JWT verification with Flint's JWKS, issuer,
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
    /** Shape $ (Value): integer. */
    "http_status_code"?: number;
    /**
     * Shape $ (Value): string. ID of the HMAC signing key that signed this request. Empty for a
     * JWT-only callback, which has no shared secret.
     */
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
    "request_id": string;
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
 * Shape $ (Value): {@link DeliveryRevocationListResponse}. A page of `DeliveryRevocation` objects.
 */
export type DeliveryRevocationListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliveryRevocation}. Shape $[] (Value): {@link
     * DeliveryRevocation}. A withdrawal of a previously available delivery choice.
     */
    "data": Array<DeliveryRevocation>;
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
    "request_id": string;
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
    "expected_version"?: `${bigint}`;
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
    "expected_version"?: `${bigint}`;
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
export type DeliveryRevocationsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". Shape $[]
     * (Value): string. Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method",
     * "delivery_method_revision".
     */
    "target_type"?: InputValue<Array<"location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other". Shape $[]
     * (Value): string. Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other".
     */
    "reason"?: InputValue<Array<"unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
     * Shape $ (Value): {@link DeliveryAvailabilityRequestRequestInput}. When a delivery method can
     * be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can
     * book.
     */
    "availability": DeliveryAvailabilityRequestRequestInput;
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
     * Shape $ (Value): {@link DeliveryBuyerLocationResource}. Buyer location snapshot used to
     * evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized
     * buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
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
     * Shape $ (Value): {@link Address}. Destination address snapshot used for delivery evaluation.
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
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
 * Shape $ (Value): {@link DeliverySelectionListResponse}. A page of `DeliverySelection` objects.
 */
export type DeliverySelectionListResponse = {
    /**
     * Shape $ (Value): Array of {@link DeliverySelection}. Shape $[] (Value): {@link
     * DeliverySelection}. The delivery choice selected for a checkout or order.
     */
    "data": Array<DeliverySelection>;
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
/**
 * Shape $ (Value): {@link DeliverySelectionRecipientRequestInput}. Recipient details you supply
 * with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequestInput = DeliverySelectionRecipientRequest;
/**
 * Shape $ (Value): {@link DeliverySelectionResponse}. A response containing `DeliverySelection`
 * data.
 */
export type DeliverySelectionResponse = {
    /**
     * Shape $ (Value): {@link DeliverySelection}. The delivery choice selected for a checkout or
     * order.
     */
    "data": DeliverySelection;
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
 * Shape $ (Value): {@link DeliverySelectionResult}. Result of a checkout delivery selection
 * request, returning the checkout session, order, delivery selection, and any inventory
 * reservation summary.
 */
export type DeliverySelectionResult = {
    /**
     * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "checkout_session": CheckoutSession;
    /**
     * Shape $ (Value): {@link DeliverySelection}. The delivery choice selected for a checkout or
     * order.
     */
    "delivery_selection": DeliverySelection;
    /**
     * Shape $ (Value): {@link DeliveryInventoryReservationSummary}. The inventory reservation held
     * for a delivery selection: its owner, status, expiry, and the next action required.
     */
    "inventory_reservation"?: DeliveryInventoryReservationSummary;
    /**
     * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": Order;
};
/**
 * Shape $ (Value): {@link DeliverySelectionResultResponse}. A response containing
 * `DeliverySelectionResult` data.
 */
export type DeliverySelectionResultResponse = {
    /**
     * Shape $ (Value): {@link DeliverySelectionResult}. Result of a checkout delivery selection
     * request, returning the checkout session, order, delivery selection, and any inventory
     * reservation summary.
     */
    "data": DeliverySelectionResult;
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
 * Shape $ (Value): {@link DeliveryShipmentDetails}. Shipment-specific details of a delivery option
 * or choice: the `service_level` and buyer `instructions`.
 */
export type DeliveryShipmentDetails = {
    /** Shape $ (Value): string. */
    "instructions"?: string;
    /** Shape $ (Value): string. */
    "service_level"?: string;
};
/**
 * Shape $ (Value): {@link DeliveryStateCondition}. Eligibility condition that matches when the
 * destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2
 * codes.
 */
export type DeliveryStateCondition = {
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * Shape $ (Value): Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For
     * a US state or Canadian province you can send the two-letter code, such as NY or ON, and
     * Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored
     * as US-AA, US-AE, and US-AP. An address matches when its state names one of these
     * subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address
     * country is listed by the condition but state names no subdivision of that country, the
     * condition cannot be decided: the method or rate is left out as cannot_calculate
     * (invalid_buyer_input). Shape $[] (Value): string. minLength: 1.
     */
    "values": Array<string>;
};
/**
 * Shape $ (Value): {@link DeliveryStateConditionInput}. Eligibility condition that matches when
 * the destination or buyer location is in one of the listed states or provinces, given as ISO
 * 3166-2 codes.
 */
export type DeliveryStateConditionInput = {
    /**
     * Shape $ (Value): string. Address facts tested by this condition. destination_address is the
     * shipping destination. buyer_location is the buyer's current pickup or local-delivery
     * location. Default: "destination_address". Value enum: "destination_address",
     * "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * Shape $ (Value): Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For
     * a US state or Canadian province you can send the two-letter code, such as NY or ON, and
     * Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored
     * as US-AA, US-AE, and US-AP. An address matches when its state names one of these
     * subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address
     * country is listed by the condition but state names no subdivision of that country, the
     * condition cannot be decided: the method or rate is left out as cannot_calculate
     * (invalid_buyer_input). Shape $[] (Value): string. minLength: 1.
     */
    "values": Array<string>;
};
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategy}. Pricing strategy that charges by band.
 * The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to
 * weight bases.
 */
export type DeliveryTieredPricingStrategy = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBand}. Shape $[] (Value): {@link
     * DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the
     * strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight",
     * "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts",
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
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ((Exclude<DeliveryTieredPricingStrategyWeight & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyQuantityOrMoney & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyInputQuantityOrMoneyInput}. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategyInput`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant
 * of `DeliveryTieredPricingStrategyInput`.
 */
export type DeliveryTieredPricingStrategyInputQuantityOrMoneyInput = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBandRequestInput}. Shape $[] (Value):
     * {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing strategy you
     * supply, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.fulfillment_quantity",
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
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & (({
    /**
     * Shape $ (Value): string. Value enum: "choice_group.fulfillment_quantity",
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
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyInputWeightInput}. The
 * `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`.
 */
export type DeliveryTieredPricingStrategyInputWeightInput = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBandRequestInput}. Shape $[] (Value):
     * {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing strategy you
     * supply, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight";
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
})
    & ({
    /** Shape $ (Value): string.  Value enum: "choice_group.total_weight". */
    "basis"?: "choice_group.total_weight";
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
});
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyQuantityOrMoney}. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategy`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of
 * `DeliveryTieredPricingStrategy`.
 */
export type DeliveryTieredPricingStrategyQuantityOrMoney = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBand}. Shape $[] (Value): {@link
     * DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the
     * strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.fulfillment_quantity",
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
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Value enum: "choice_group.fulfillment_quantity",
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
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy you
 * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when
 * the basis is total weight.
 */
export type DeliveryTieredPricingStrategyRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBandRequestInput}. Shape $[] (Value):
     * {@link DeliveryPricingTierBandRequestInput}. One band of a tiered pricing strategy you
     * supply, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight",
     * "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts",
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
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & ((Exclude<DeliveryTieredPricingStrategyInputWeightInput & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link DeliveryTieredPricingStrategyWeight}. The `choice_group.total_weight`
 * variant of `DeliveryTieredPricingStrategy`.
 */
export type DeliveryTieredPricingStrategyWeight = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryPricingTierBand}. Shape $[] (Value): {@link
     * DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the
     * strategy's `basis` from `from` to `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Shape $ (Value): string. Quantity measured by the tier bands. Money subtotal bases use minor
     * currency units. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight" | (string & {});
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ({
    /** Shape $ (Value): string.  Value enum: "choice_group.total_weight". */
    "basis"?: "choice_group.total_weight" | (string & {});
    /**
     * Shape $ (Value): string. Required only for choice_group.total_weight and forbidden for every
     * other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
});
/**
 * Shape $ (Value): {@link DeliveryTransitTimeRule}. Estimate rule giving a delivery method's
 * handling time and transit time as ranges of business days.
 */
export type DeliveryTransitTimeRule = {
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRange}. A minimum and maximum number of business
     * days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRange;
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRange}. A minimum and maximum number of business
     * days, used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRange;
};
/**
 * Shape $ (Value): {@link DeliveryTransitTimeRuleRequestRequestInput}. Estimate rule giving a
 * delivery method's handling time and transit time as ranges of business days.
 */
export type DeliveryTransitTimeRuleRequestRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRangeRequestRequestInput}. A minimum and maximum
     * number of business days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRangeRequestRequestInput;
    /**
     * Shape $ (Value): {@link DeliveryBusinessDayRangeRequestRequestInput}. A minimum and maximum
     * number of business days, used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRangeRequestRequestInput;
};
/**
 * Shape $ (Value): {@link DeliveryWeeklyInterval}. A recurring weekly span, from a start weekday
 * and minute to an end weekday and minute, used in a delivery method's availability schedule.
 */
export type DeliveryWeeklyInterval = {
    /** Shape $ (Value): integer. */
    "end_minute": number;
    /** Shape $ (Value): integer. */
    "end_weekday": number;
    /** Shape $ (Value): integer. */
    "start_minute": number;
    /** Shape $ (Value): integer. */
    "start_weekday": number;
};
/**
 * Shape $ (Value): {@link DeliveryWeeklyIntervalRequestRequestInput}. A recurring weekly span,
 * from a start weekday and minute to an end weekday and minute, used in a delivery method's
 * availability schedule.
 */
export type DeliveryWeeklyIntervalRequestRequestInput = DeliveryWeeklyInterval;
/**
 * Shape $ (Value): {@link DeliveryWeightUnitPrice}. Price per unit of weight for calculated
 * pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPrice = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): string. Weight unit used by unit_quantity. Value enum: "gram", "kilogram",
     * "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity of the selected unit charged at each
     * configured currency price; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "unit_quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link DeliveryWeightUnitPriceRequestInput}. Price per unit of weight you
 * supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen
 * weight `unit`.
 */
export type DeliveryWeightUnitPriceRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): string. Weight unit used by unit_quantity. Value enum: "gram", "kilogram",
     * "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Shape $ (Value): integer string. Whole-number quantity of the selected unit charged at each
     * configured currency price; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "unit_quantity": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link DeliveryWindowRequest}. A delivery window you supply in a
 * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can
 * choose it.
 */
export type DeliveryWindowRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_window_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "end_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "start_at": string;
};
/**
 * Shape $ (Value): {@link DeliveryWindowRequestInput}. A delivery window you supply in a
 * caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can
 * choose it.
 */
export type DeliveryWindowRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_window_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "end_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "start_at": string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link DeliveryWindowTimeCondition}. Eligibility condition that matches by time
 * of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
 */
export type DeliveryWindowTimeCondition = {
    /** Shape $ (Value): integer. */
    "end_minute"?: number;
    /** Shape $ (Value): integer. */
    "start_minute"?: number;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "weekdays"?: Array<string>;
};
/**
 * Shape $ (Value): {@link DeliveryWindowTimeConditionInput}. Eligibility condition that matches by
 * time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.
 */
export type DeliveryWindowTimeConditionInput = DeliveryWindowTimeCondition;
