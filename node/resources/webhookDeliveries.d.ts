import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    WebhookDeliveriesCreateParams,
    WebhookDeliveriesGetParams,
    WebhookDeliveriesListAttemptsParams,
    WebhookDeliveriesListParams,
    WebhookDeliveriesResendParams
} from '../declarations/types-60.js';
import type {
    WebhookDelivery,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookDeliveryAttempt,
    WebhookDeliveryAttemptListResponse,
    WebhookDeliveryListResponse,
    WebhookDeliveryResponse,
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
    WebhookDeliveriesCreateParams,
    WebhookDeliveriesGetParams,
    WebhookDeliveriesListParams,
    WebhookDeliveriesListAttemptsParams,
    WebhookDeliveriesResendParams
} from '../declarations/types-60.js';
export type { RequestOptions, ResendWebhookDeliveryRequestInput, ResendWebhookDeliveryRequest } from '../declarations/types-47.js';
export type {
    WebhookDelivery,
    WebhookDeliveryResponse,
    _SdkWithoutIdempotency,
    WebhookDeliveryListResponse,
    WebhookDeliveryAttemptListResponse,
    WebhookDeliveryAttempt,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse
} from '../declarations/types-61.js';
export type { ClientOptions, CheckoutSessionsListDeliverySelectionsParams } from '../declarations/types-5.js';
export type { CreateWebhookDeliveryRequestInput, CreateWebhookDeliveryRequest } from '../declarations/types-11.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateWebhookDeliveryRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeResendWebhookDeliveryRequest } from '../declarations/types-71.js';
export interface WebhookDeliveriesResource {
    /**
 * Creates a delivery for a retained event and an endpoint that currently subscribes to it, then
 * attempts delivery now. A failed attempt starts the automatic retry schedule. Each event and
 * endpoint pair can have only one delivery.
 *
 * `POST /v1/webhook-deliveries`
 * @see https://developers.withflintpay.com/docs/api/webhooks#createWebhookDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookDeliveries.create({reason_message: "Recovering after an endpoint outage",
 * webhook_endpoint_id: "whep_01KEZF7C00940MBDY86SCZ1NW9", webhook_event_id:
 * "whev_01KEZF7C00BW7XQJ98PQ8EHA81"}, { idempotencyKey: idempotencyKey })
 */
    create(params: WebhookDeliveriesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookDelivery, WebhookDeliveryResponse>>;
    /**
 * Returns one endpoint delivery and its current retry state.
 *
 * `GET /v1/webhook-deliveries/{webhook_delivery_id}`
 * @param webhook_delivery_id Flint webhook delivery ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#getWebhookDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookDeliveries.get("wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(webhook_delivery_id: InputValue<string>, params?: WebhookDeliveriesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookDelivery, WebhookDeliveryResponse>>;
    /**
 * Returns webhook deliveries, newest first (`created_at` descending, then `webhook_delivery_id`).
 * Includes deliveries of synthetic test events. Default order: created_at descending, then
 * webhook_delivery_id descending.
 *
 * `GET /v1/webhook-deliveries`
 * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookDeliveries
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookDeliveries.list()
 */
    list(params?: WebhookDeliveriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookDeliveryListResponse, WebhookDeliveryListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookDeliveries
     */
    listPages(params?: WebhookDeliveriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<WebhookDeliveryListResponse, WebhookDeliveryListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookDeliveries
     */
    listItems(params?: WebhookDeliveriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookDelivery>;
    /**
 * Returns the attempts recorded for a specific webhook delivery. Default order: attempt_number
 * ascending; this key uniquely orders the results.
 *
 * `GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`
 * @param webhook_delivery_id Flint webhook delivery ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookDeliveryAttempts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookDeliveries.listAttempts("wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listAttempts(webhook_delivery_id: InputValue<string>, params?: WebhookDeliveriesListAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookDeliveryAttemptListResponse, WebhookDeliveryAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookDeliveryAttempts
     */
    listAttemptsPages(webhook_delivery_id: InputValue<string>, params?: WebhookDeliveriesListAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<WebhookDeliveryAttemptListResponse, WebhookDeliveryAttemptListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookDeliveryAttempts
     */
    listAttemptsItems(webhook_delivery_id: InputValue<string>, params?: WebhookDeliveriesListAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookDeliveryAttempt>;
    /**
 * Sends the event to the delivery's endpoint now, including while automatic retries are pending. A
 * failed resend doesn't change the automatic schedule.
 *
 * `POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`
 * @param webhook_delivery_id Flint webhook delivery ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#resendWebhookDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookDeliveries.resend("wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    resend(webhook_delivery_id: InputValue<string>, params?: WebhookDeliveriesResendParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WebhookDeliveryAction, WebhookDeliveryActionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookDeliveries: WebhookDeliveriesResource;
}
