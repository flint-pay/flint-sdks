import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type {
    WebhookDeliveriesCreateParams,
    WebhookDeliveriesGetParams,
    WebhookDeliveriesListAttemptsParams,
    WebhookDeliveriesListParams,
    WebhookDeliveriesResendParams,
    WebhookDelivery,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse,
    WebhookDeliveryAttempt,
    WebhookDeliveryAttemptListResponse,
    WebhookDeliveryListResponse,
    WebhookDeliveryResponse
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
    WebhookDeliveriesCreateParams,
    WebhookDelivery,
    WebhookDeliveryResponse,
    WebhookDeliveriesGetParams,
    WebhookDeliveriesListParams,
    WebhookDeliveryListResponse,
    WebhookDeliveriesListAttemptsParams,
    WebhookDeliveryAttemptListResponse,
    WebhookDeliveryAttempt,
    WebhookDeliveriesResendParams,
    WebhookDeliveryAction,
    WebhookDeliveryActionResponse
} from '../declarations/types-69.js';
export type {
    RequestOptions,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    ResendWebhookDeliveryRequestInput,
    ResendWebhookDeliveryRequest
} from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateWebhookDeliveryRequestInput, Credentials, CreateWebhookDeliveryRequest } from '../declarations/types-14.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export type { CustomersListAddressesParams } from '../declarations/types-16.js';
export { makeCreateWebhookDeliveryRequest } from '../declarations/types-75.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export { makeResendWebhookDeliveryRequest } from '../declarations/types-81.js';
export interface WebhookDeliveriesResource {
    /**
 * Creates a delivery for a retained event and an endpoint that currently subscribes to it, then
 * attempts delivery now. A failed attempt starts the automatic retry schedule. Each event and
 * endpoint pair can have only one delivery. Partner-source endpoints are global configuration.
 * Changes to them or their events and deliveries require a live-mode credential or a Dashboard
 * session, including test events and endpoints subscribed only to test installed-merchant events.
 * Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, including on idempotent
 * replay.
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
 * Returns one endpoint delivery and its current retry state. Global partner-source records are
 * invisible in sandbox mode; a direct reference returns 404 RESOURCE_NOT_FOUND.
 *
 * `GET /v1/webhook-deliveries/{webhook_delivery_id}`
 * @param webhook_delivery_id Flint webhook delivery ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#getWebhookDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookDeliveries.get("wdel_01KEZF7C001DWSNDCDZHCTBN0A")
 */
    get(webhook_delivery_id: InputValue<string>, params?: WebhookDeliveriesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookDelivery, WebhookDeliveryResponse>>;
    /**
 * Returns webhook deliveries, newest first (`created_at` descending, then `webhook_delivery_id`).
 * Includes deliveries of synthetic test events. Sandbox reads omit global partner-source records.
 * Default order: created_at descending, then webhook_delivery_id descending.
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
 * Returns the attempts recorded for a specific webhook delivery. Global partner-source records are
 * invisible in sandbox mode; a direct reference returns 404 RESOURCE_NOT_FOUND. Default order:
 * attempt_number ascending; this key uniquely orders the results.
 *
 * `GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`
 * @param webhook_delivery_id Flint webhook delivery ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookDeliveryAttempts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookDeliveries.listAttempts("wdel_01KEZF7C001DWSNDCDZHCTBN0A")
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
 * failed resend doesn't change the automatic schedule. Partner-source endpoints are global
 * configuration. Changes to them or their events and deliveries require a live-mode credential or
 * a Dashboard session, including test events and endpoints subscribed only to test
 * installed-merchant events. Test credentials fail with `FORBIDDEN` and reason
 * `live_mode_required`, including on idempotent replay.
 *
 * `POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`
 * @param webhook_delivery_id Flint webhook delivery ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#resendWebhookDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookDeliveries.resend("wdel_01KEZF7C001DWSNDCDZHCTBN0A", undefined, { idempotencyKey:
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
