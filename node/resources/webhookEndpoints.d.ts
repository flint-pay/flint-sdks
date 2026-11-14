import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { SignedWebhookEndpointDelivery, SignedWebhookEndpointDeliveryResponse } from '../declarations/types-60.js';
import type {
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookEndpoint,
    WebhookEndpointListResponse,
    WebhookEndpointResponse,
    WebhookEndpointWithSecret,
    WebhookEndpointWithSecretResponse,
    WebhookEndpointsCreateParams,
    WebhookEndpointsCreateTestEventParams,
    WebhookEndpointsDeleteParams,
    WebhookEndpointsGetParams,
    WebhookEndpointsListParams,
    WebhookEndpointsRotateSecretParams,
    WebhookEndpointsSignDeliveryParams,
    WebhookEndpointsUpdateParams
} from '../declarations/types-69.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    WebhookEndpointsCreateParams,
    WebhookEndpointWithSecret,
    WebhookEndpointWithSecretResponse,
    WebhookEndpointsCreateTestEventParams,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookEndpointsDeleteParams,
    WebhookEndpoint,
    WebhookEndpointResponse,
    WebhookEndpointsGetParams,
    WebhookEndpointsListParams,
    WebhookEndpointListResponse,
    WebhookEndpointsRotateSecretParams,
    WebhookEndpointsSignDeliveryParams,
    WebhookEndpointsUpdateParams,
    UpdateWebhookEndpointRequestInput
} from '../declarations/types-69.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency, WebhookSigningMethodInput } from '../declarations/types-70.js';
export type {
    SignedWebhookEndpointDelivery,
    SignedWebhookEndpointDeliveryResponse,
    SignWebhookEndpointDeliveryRequestInput,
    SignWebhookEndpointDeliveryRequest
} from '../declarations/types-60.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateWebhookEndpointRequestInput, Credentials, CreateWebhookTestEventRequestInput } from '../declarations/types-14.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { RotateWebhookSecretRequestInput } from '../declarations/types-59.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeCreateWebhookEndpointRequest, makeCreateWebhookTestEventRequest } from '../declarations/types-75.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeRotateWebhookSecretRequest, makeSignWebhookEndpointDeliveryRequest } from '../declarations/types-82.js';
export { makeUpdateWebhookEndpointRequest } from '../declarations/types-84.js';
export { makeWebhookSigningMethod } from '../declarations/types-85.js';
export interface WebhookEndpointsResource {
    /**
 * Creates a webhook endpoint. signing_methods defaults to ["jwt"]. A shared secret is issued and
 * returned once only when hmac is included. Partner-source endpoints are global configuration.
 * Changes to them or their events and deliveries require a live-mode credential or a Dashboard
 * session, including test events and endpoints subscribed only to test installed-merchant events.
 * Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent
 * replay.
 *
 * `POST /v1/webhook-endpoints`
 * @see https://developers.withflintpay.com/docs/api/webhooks#createWebhookEndpoint
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.create({description: "Primary production endpoint", enabled_events:
 * ["order.paid", "payment_intent.succeeded"], event_sources: ["merchant"], status: "active", url:
 * "https://example.com/webhooks/flint"}, { idempotencyKey: idempotencyKey })
 */
    create(params: WebhookEndpointsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookEndpointWithSecret, WebhookEndpointWithSecretResponse>>;
    /**
 * Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to
 * retry with the same idempotency key. Partner-source endpoints are global configuration. Changes
 * to them or their events and deliveries require a live-mode credential or a Dashboard session,
 * including test events and endpoints subscribed only to test installed-merchant events. Test
 * credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent
 * replay.
 *
 * `POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#createWebhookTestEvent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.createTestEvent("whep_01KEZF7C006FXYTAJRZCGCBJTN", {event_type:
 * "payment_intent.succeeded"}, { idempotencyKey: idempotencyKey })
 */
    createTestEvent(webhook_endpoint_id: InputValue<string>, params: WebhookEndpointsCreateTestEventParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookDeliveryAction, WebhookDeliveryActionResponse>>;
    /**
 * Permanently deletes the webhook endpoint and returns it with status deleted. Its pending
 * deliveries are suppressed. The endpoint cannot be retrieved afterward, and its past deliveries
 * keep its webhook_endpoint_id. Partner-source endpoints are global configuration. Changes to them
 * or their events and deliveries require a live-mode credential or a Dashboard session, including
 * test events and endpoints subscribed only to test installed-merchant events. Test credentials
 * fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.
 *
 * `DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#deleteWebhookEndpoint
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.delete("whep_01KEZF7C006FXYTAJRZCGCBJTN", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookEndpoint, WebhookEndpointResponse>>;
    /**
 * Returns a single webhook endpoint by ID. The signing secret is omitted after creation. Global
 * partner-source records are invisible in sandbox mode; a direct reference returns 404
 * RESOURCE_NOT_FOUND.
 *
 * `GET /v1/webhook-endpoints/{webhook_endpoint_id}`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#getWebhookEndpoint
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEndpoints.get("whep_01KEZF7C006FXYTAJRZCGCBJTN")
 */
    get(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookEndpoint, WebhookEndpointResponse>>;
    /**
 * Returns a page of webhook endpoints for the authenticated merchant. Sandbox reads omit global
 * partner-source records. Filters selecting only partner_app or installed_merchants return an
 * empty collection. Direct resource reads of partner-source records return 404 RESOURCE_NOT_FOUND
 * in sandbox mode; exact-ID list filters return an empty collection when no visible records match.
 * Default order: created_at descending, then webhook_endpoint_id descending.
 *
 * `GET /v1/webhook-endpoints`
 * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEndpoints
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEndpoints.list()
 */
    list(params?: WebhookEndpointsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookEndpointListResponse, WebhookEndpointListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEndpoints
     */
    listPages(params?: WebhookEndpointsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<WebhookEndpointListResponse, WebhookEndpointListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEndpoints
     */
    listItems(params?: WebhookEndpointsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookEndpoint>;
    /**
 * Rotates an existing shared secret. An endpoint without hmac returns ACTION_NOT_ALLOWED with
 * reason secret_not_issued; PATCH signing_methods to include hmac to issue the first secret. The
 * secret is returned once. The replaced secret keeps signing deliveries until
 * previous_secret_expires_at: 24 hours by default, or expire_previous_secret_at, up to 7 days.
 * Send a time at or before now to stop the replaced secret immediately, for example when it
 * leaked. Rotating again during an overlap ends the older secret at once. Partner-source endpoints
 * are global configuration. Changes to them or their events and deliveries require a live-mode
 * credential or a Dashboard session, including test events and endpoints subscribed only to test
 * installed-merchant events. Test credentials fail with `FORBIDDEN` and reason
 * `live_mode_required`, including on idempotent replay.
 *
 * `POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#rotateWebhookEndpointSecret
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.rotateSecret("whep_01KEZF7C006FXYTAJRZCGCBJTN", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    rotateSecret(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsRotateSecretParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookEndpointWithSecret, WebhookEndpointWithSecretResponse>>;
    /**
 * Sandbox only. Returns the exact delivery body and headers for an authorized sandbox endpoint
 * without dispatching it. Requires webhooks.write and permission to read the event's resource. JWT
 * signing must be enabled. Each call reauthorizes and creates a fresh five-minute bearer frame;
 * receivers deduplicate webhook-id. Limited to one request per 200 ms and 10,000 per UTC day per
 * endpoint, plus external-provider-action API quotas. The 200 ms throttle returns 429 with
 * Retry-After; daily exhaustion returns 409 LIMIT_REACHED with limit and resets_at and no
 * Retry-After. Signing fails closed if the shared quota store is unavailable. Responses are not
 * cached or retained for idempotency. Previously issued JWTs remain usable until expiry after
 * endpoint changes.
 *
 * `POST /v1/webhook-endpoints/{webhook_endpoint_id}/sign-delivery`
 * @param webhook_endpoint_id The caller's own merchant event-delivery endpoint in the selected
 * sandbox.
 * @see https://developers.withflintpay.com/docs/api/webhooks#signWebhookEndpointDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEndpoints.signDelivery("whep_01KEZF7C006FXYTAJRZCGCBJTN", {webhook_event_id:
 * "whev_01KEZF7C00BW7XQJ98PQ8EHA81"})
 */
    signDelivery(webhook_endpoint_id: InputValue<string>, params: WebhookEndpointsSignDeliveryParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SignedWebhookEndpointDelivery, SignedWebhookEndpointDeliveryResponse>>;
    /**
 * Updates a webhook endpoint's URL, description, status, subscribed events, event sources, signing
 * methods, or pinned API version. Only the fields you send change. Sending `enabled_events`,
 * `event_sources`, `installed_merchant_modes`, or `signing_methods` replaces that whole list and
 * requires `expected_version`; a stale version fails with `VERSION_CONFLICT`. Adding `hmac` when
 * no secret exists issues the first secret and returns it once. Removing `hmac` deletes all shared
 * secrets. Partner-source endpoints are global configuration. Changes to them or their events and
 * deliveries require a live-mode credential or a Dashboard session, including test events and
 * endpoints subscribed only to test installed-merchant events. Test credentials fail with
 * `FORBIDDEN` and reason `live_mode_required`, including on idempotent replay.
 *
 * `PATCH /v1/webhook-endpoints/{webhook_endpoint_id}`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#updateWebhookEndpoint
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.update("whep_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Example
 * endpoint"}, { idempotencyKey: idempotencyKey })
 */
    update(webhook_endpoint_id: InputValue<string>, params: WebhookEndpointsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookEndpointWithSecret, WebhookEndpointWithSecretResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookEndpoints: WebhookEndpointsResource;
}
