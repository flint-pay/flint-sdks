import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateWebhookEndpointRequestInput, CreateWebhookTestEventRequestInput } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { RotateWebhookSecretRequestInput, SdkResponse } from '../declarations/types-43.js';
import type { UpdateWebhookEndpointRequestInput } from '../declarations/types-49.js';
import type {
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookEndpoint,
    WebhookEndpointListResponse,
    WebhookEndpointResponse,
    WebhookEndpointWithSecret,
    WebhookEndpointWithSecretResponse,
    WebhookEndpointsCreateInput,
    WebhookEndpointsCreateWebhookTestEventInput,
    WebhookEndpointsGetInput,
    WebhookEndpointsListInput,
    WebhookEndpointsRemoveInput,
    WebhookEndpointsRotateWebhookSecretInput,
    WebhookEndpointsUpdateInput
} from '../declarations/types-50.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type { CreateWebhookEndpointRequestInput, CreateWebhookTestEventRequestInput, Credentials } from '../declarations/types-9.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    WebhookEndpointWithSecret,
    WebhookEndpointWithSecretResponse,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookEndpoint,
    WebhookEndpointResponse,
    WebhookEndpointListResponse,
    WebhookEndpointsCreateInput,
    WebhookEndpointsCreateWebhookTestEventInput,
    WebhookEndpointsRemoveInput,
    WebhookEndpointsGetInput,
    WebhookEndpointsListInput,
    WebhookEndpointsRotateWebhookSecretInput,
    WebhookEndpointsUpdateInput
} from '../declarations/types-50.js';
export type { SdkResponse, RotateWebhookSecretRequestInput } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { UpdateWebhookEndpointRequestInput } from '../declarations/types-49.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateWebhookEndpointRequest, makeCreateWebhookTestEventRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeRotateWebhookSecretRequest } from '../declarations/types-71.js';
export { makeUpdateWebhookEndpointRequest } from '../declarations/types-73.js';
export interface WebhookEndpointsResource {
    /**
 * Creates a webhook endpoint and returns the signing secret once.
 * @see reference/webhookEndpoints.md#webhookendpointscreate
 * POST /v1/webhook-endpoints
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.create({url: "example", enabled_events: ["example"]}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateWebhookEndpointRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<WebhookEndpointWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEndpoints.md#webhookendpointscreate
     */
    createWithResponse(params: (InputValue<CreateWebhookEndpointRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<WebhookEndpointWithSecretResponse>>;
    /**
 * Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to
 * retry with the same Idempotency-Key.
 * @see reference/webhookEndpoints.md#webhookendpointscreatewebhooktestevent
 * POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.createWebhookTestEvent("example", {event_type: "balance.updated"}, {
 * idempotencyKey: idempotencyKey })
 */
    createWebhookTestEvent(webhook_endpoint_id: InputValue<string>, params: (InputValue<CreateWebhookTestEventRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<WebhookDeliveryAction>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEndpoints.md#webhookendpointscreatewebhooktestevent
     */
    createWebhookTestEventWithResponse(webhook_endpoint_id: InputValue<string>, params: (InputValue<CreateWebhookTestEventRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<WebhookDeliveryActionResponse>>;
    /**
 * Permanently deletes the webhook endpoint and returns it with status deleted. Its pending
 * deliveries are suppressed. The endpoint cannot be retrieved afterward, and its past deliveries
 * keep its webhook_endpoint_id.
 * @see reference/webhookEndpoints.md#webhookendpointsremove
 * DELETE /v1/webhook-endpoints/{webhook_endpoint_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(webhook_endpoint_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<WebhookEndpoint>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEndpoints.md#webhookendpointsremove
     */
    removeWithResponse(webhook_endpoint_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<WebhookEndpointResponse>>;
    /**
 * Returns a single webhook endpoint by ID. The signing secret is omitted after creation.
 * @see reference/webhookEndpoints.md#webhookendpointsget
 * GET /v1/webhook-endpoints/{webhook_endpoint_id}
 * @example
 * client.webhookEndpoints.get("example")
 */
    get(webhook_endpoint_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<WebhookEndpoint>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEndpoints.md#webhookendpointsget
     */
    getWithResponse(webhook_endpoint_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<WebhookEndpointResponse>>;
    /**
 * Returns a page of webhook endpoints for the authenticated merchant.
 * @see reference/webhookEndpoints.md#webhookendpointslist
 * GET /v1/webhook-endpoints
 * @example
 * client.webhookEndpoints.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
        "partner_app_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<WebhookEndpointListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEndpoints.md#webhookendpointslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
        "partner_app_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<WebhookEndpointListResponse>>;
    /** Iterate pages lazily.
     * @see reference/webhookEndpoints.md#webhookendpointslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
        "partner_app_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookEndpointListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/webhookEndpoints.md#webhookendpointslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
        "partner_app_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<WebhookEndpointListResponse>>;
    /** Iterate items lazily.
     * @see reference/webhookEndpoints.md#webhookendpointslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
        "partner_app_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookEndpoint>;
    /**
 * Issues a new signing secret, returned once. The replaced secret keeps signing deliveries until
 * previous_secret_expires_at: 24 hours by default, or expire_previous_secret_at, up to 7 days.
 * Send a time at or before now to stop the replaced secret immediately, for example when it
 * leaked. Rotating again during an overlap ends the older secret at once.
 * @see reference/webhookEndpoints.md#webhookendpointsrotatewebhooksecret
 * POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.rotateWebhookSecret("example", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    rotateWebhookSecret(webhook_endpoint_id: InputValue<string>, params?: (InputValue<RotateWebhookSecretRequestInput>
        | {
        "expected_version"?: never;
        "expire_previous_secret_at"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<WebhookEndpointWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEndpoints.md#webhookendpointsrotatewebhooksecret
     */
    rotateWebhookSecretWithResponse(webhook_endpoint_id: InputValue<string>, params?: (InputValue<RotateWebhookSecretRequestInput>
        | {
        "expected_version"?: never;
        "expire_previous_secret_at"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<WebhookEndpointWithSecretResponse>>;
    /**
 * Updates the mutable fields on a webhook endpoint.
 * @see reference/webhookEndpoints.md#webhookendpointsupdate
 * PATCH /v1/webhook-endpoints/{webhook_endpoint_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookEndpoints.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(webhook_endpoint_id: InputValue<string>, params: (InputValue<UpdateWebhookEndpointRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<WebhookEndpoint>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEndpoints.md#webhookendpointsupdate
     */
    updateWithResponse(webhook_endpoint_id: InputValue<string>, params: (InputValue<UpdateWebhookEndpointRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<WebhookEndpointResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookEndpoints: WebhookEndpointsResource;
}
