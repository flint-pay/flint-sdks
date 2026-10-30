import type { Result, WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    WebhookEvent,
    WebhookEventListResponse,
    WebhookEventResponse,
    WebhookEventsGetParams,
    WebhookEventsListParams,
    WebhookEventsStreamParams,
    WebhookEventsStreamResponse,
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
    WebhookEventsGetParams,
    _SdkWithoutIdempotency,
    WebhookEvent,
    WebhookEventResponse,
    WebhookEventsListParams,
    WebhookEventListResponse,
    WebhookEventsStreamParams,
    WebhookEventsStreamResponse,
    WebhookEventSource,
    WebhookEventSourcePartnerApp,
    WebhookEventSourceInstalledMerchants
} from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface WebhookEventsResource {
    /**
 * Returns a specific webhook event for the authenticated merchant.
 *
 * `GET /v1/webhook-events/{webhook_event_id}`
 * @param webhook_event_id Flint webhook event ID.
 * @see https://developers.withflintpay.com/docs/api/webhooks#getWebhookEvent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEvents.get("whev_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(webhook_event_id: InputValue<string>, params?: WebhookEventsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookEvent, WebhookEventResponse>>;
    /**
 * Returns recent canonical webhook events for the authenticated merchant. Default order:
 * created_at descending, then webhook_event_id descending.
 *
 * `GET /v1/webhook-events`
 * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEvents
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEvents.list()
 */
    list(params?: WebhookEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookEventListResponse, WebhookEventListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEvents
     */
    listPages(params?: WebhookEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<WebhookEventListResponse, WebhookEventListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEvents
     */
    listItems(params?: WebhookEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookEvent>;
    /**
 * Streams canonical merchant webhook events created after the connection opens or after the
 * supplied event ID. SSE event IDs are resumable webhook event IDs. Control records include ready,
 * gap, withheld, and disconnect. Gap records indicate cursor_unavailable or payload_expired;
 * withheld records hide payloads the caller cannot read. Backpressure emits disconnect with reason
 * backpressure and resume_cursor identifying the last sent event, so clients can reconnect without
 * losing events.
 *
 * `GET /v1/webhook-events/stream`
 * @see https://developers.withflintpay.com/docs/api/webhooks#streamWebhookEvents
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEvents.stream()
 */
    stream(params?: WebhookEventsStreamParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<WebhookEventsStreamResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookEvents: WebhookEventsResource;
}
