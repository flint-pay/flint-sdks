import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateWebhookDeliveryRequestInput } from '../declarations/types-9.js';
import type { RequestOptions, ResendWebhookDeliveryRequestInput } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type {
    WebhookDeliveriesCreateInput,
    WebhookDeliveriesGetInput,
    WebhookDeliveriesListAttemptsInput,
    WebhookDeliveriesResendInput,
    WebhookDelivery,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookDeliveryAttempt,
    WebhookDeliveryAttemptListResponse,
    WebhookDeliveryResponse
} from '../declarations/types-50.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { CreateWebhookDeliveryRequestInput, Credentials, CreateWebhookDeliveryRequest } from '../declarations/types-9.js';
export type {
    RequestOptions,
    ResendWebhookDeliveryRequestInput,
    ResponseMeta,
    ResponseWarning,
    ResendWebhookDeliveryRequest
} from '../declarations/types-40.js';
export type {
    WebhookDelivery,
    WebhookDeliveryResponse,
    WebhookDeliveryAttemptListResponse,
    WebhookDeliveryAttempt,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookDeliveriesCreateInput,
    WebhookDeliveriesGetInput,
    WebhookDeliveriesListAttemptsInput,
    WebhookDeliveriesResendInput
} from '../declarations/types-50.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateWebhookDeliveryRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeResendWebhookDeliveryRequest } from '../declarations/types-70.js';
export interface WebhookDeliveriesResource {
    /**
 * Creates a delivery for a retained event and an endpoint that currently subscribes to it, then
 * attempts delivery now. A failed attempt starts the automatic retry schedule. Each event and
 * endpoint pair can have only one delivery.
 * @see reference/webhookDeliveries.md#webhookdeliveriescreate
 * POST /v1/webhook-deliveries
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookDeliveries.create({webhook_endpoint_id: "example", webhook_event_id: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateWebhookDeliveryRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<WebhookDelivery>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookDeliveries.md#webhookdeliveriescreate
     */
    createWithResponse(params: (InputValue<CreateWebhookDeliveryRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<WebhookDeliveryResponse>>;
    /**
 * Returns one endpoint delivery and its current retry state.
 * @see reference/webhookDeliveries.md#webhookdeliveriesget
 * GET /v1/webhook-deliveries/{webhook_delivery_id}
 * @example
 * client.webhookDeliveries.get("example")
 */
    get(webhook_delivery_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WebhookDelivery>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookDeliveries.md#webhookdeliveriesget
     */
    getWithResponse(webhook_delivery_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<WebhookDeliveryResponse>>;
    /**
 * Returns the attempts recorded for a specific webhook delivery.
 * @see reference/webhookDeliveries.md#webhookdeliverieslistattempts
 * GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts
 * @example
 * client.webhookDeliveries.listAttempts("example")
 */
    listAttempts(webhook_delivery_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WebhookDeliveryAttemptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookDeliveries.md#webhookdeliverieslistattempts
     */
    listAttemptsWithResponse(webhook_delivery_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<WebhookDeliveryAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see reference/webhookDeliveries.md#webhookdeliverieslistattempts
     */
    listAttemptsPages(webhook_delivery_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookDeliveryAttemptListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/webhookDeliveries.md#webhookdeliverieslistattempts
     */
    listAttemptsPagesWithResponse(webhook_delivery_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<WebhookDeliveryAttemptListResponse>>;
    /** Iterate items lazily.
     * @see reference/webhookDeliveries.md#webhookdeliverieslistattempts
     */
    listAttemptsItems(webhook_delivery_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookDeliveryAttempt>;
    /**
 * Sends the event to the delivery's endpoint now, including while automatic retries are pending. A
 * failed resend doesn't change the automatic schedule.
 * @see reference/webhookDeliveries.md#webhookdeliveriesresend
 * POST /v1/webhook-deliveries/{webhook_delivery_id}/resend
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookDeliveries.resend("example", undefined, { idempotencyKey: idempotencyKey })
 */
    resend(webhook_delivery_id: InputValue<string>, params?: (InputValue<ResendWebhookDeliveryRequestInput> | {
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<WebhookDeliveryAction>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookDeliveries.md#webhookdeliveriesresend
     */
    resendWithResponse(webhook_delivery_id: InputValue<string>, params?: (InputValue<ResendWebhookDeliveryRequestInput> | {
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<WebhookDeliveryActionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookDeliveries: WebhookDeliveriesResource;
}
