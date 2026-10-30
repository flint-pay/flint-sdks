import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    WebhookEndpointsUpdateParams,
    _SdkWithoutIdempotency
} from '../declarations/types-61.js';
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
    _SdkWithoutIdempotency,
    WebhookEndpointsListParams,
    WebhookEndpointListResponse,
    WebhookEndpointsRotateSecretParams,
    WebhookEndpointsUpdateParams,
    WebhookSigningMethodInput
} from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateWebhookEndpointRequestInput, CreateWebhookTestEventRequestInput } from '../declarations/types-11.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { RotateWebhookSecretRequestInput } from '../declarations/types-52.js';
export type { UpdateWebhookEndpointRequestInput } from '../declarations/types-60.js';
export { makeCreateWebhookEndpointRequest, makeCreateWebhookTestEventRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeRotateWebhookSecretRequest } from '../declarations/types-72.js';
export { makeUpdateWebhookEndpointRequest } from '../declarations/types-74.js';
export { makeWebhookSigningMethod } from '../declarations/types-75.js';
export interface WebhookEndpointsResource {
    /**
 * Creates a webhook endpoint. signing_methods defaults to ["jwt"]. A shared secret is issued and
 * returned once only when hmac is included.
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
 * retry with the same Idempotency-Key.
 *
 * `POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#createWebhookTestEvent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.createTestEvent("whep_01ARZ3NDEKTSV4RRFFQ69G5FAV", {event_type:
 * "payment_intent.succeeded"}, { idempotencyKey: idempotencyKey })
 */
    createTestEvent(webhook_endpoint_id: InputValue<string>, params: WebhookEndpointsCreateTestEventParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookDeliveryAction, WebhookDeliveryActionResponse>>;
    /**
 * Permanently deletes the webhook endpoint and returns it with status deleted. Its pending
 * deliveries are suppressed. The endpoint cannot be retrieved afterward, and its past deliveries
 * keep its webhook_endpoint_id.
 *
 * `DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#deleteWebhookEndpoint
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.delete("whep_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookEndpoint, WebhookEndpointResponse>>;
    /**
 * Returns a single webhook endpoint by ID. The signing secret is omitted after creation.
 *
 * `GET /v1/webhook-endpoints/{webhook_endpoint_id}`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#getWebhookEndpoint
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEndpoints.get("whep_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookEndpoint, WebhookEndpointResponse>>;
    /**
 * Returns a page of webhook endpoints for the authenticated merchant. Default order: created_at
 * descending, then webhook_endpoint_id descending.
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
 * Issues a first shared secret and adds hmac, or rotates an existing shared secret. The secret is
 * returned once. The replaced secret keeps signing deliveries until previous_secret_expires_at: 24
 * hours by default, or expire_previous_secret_at, up to 7 days. Send a time at or before now to
 * stop the replaced secret immediately, for example when it leaked. Rotating again during an
 * overlap ends the older secret at once.
 *
 * `POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`
 * @param webhook_endpoint_id Flint webhook endpoint ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#rotateWebhookEndpointSecret
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.rotateSecret("whep_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    rotateSecret(webhook_endpoint_id: InputValue<string>, params?: WebhookEndpointsRotateSecretParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookEndpointWithSecret, WebhookEndpointWithSecretResponse>>;
    /**
 * Updates the mutable fields on a webhook endpoint.
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
    update(webhook_endpoint_id: InputValue<string>, params: WebhookEndpointsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookEndpoint, WebhookEndpointResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookEndpoints: WebhookEndpointsResource;
}
