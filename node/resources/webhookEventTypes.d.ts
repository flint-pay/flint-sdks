import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    WebhookEventType,
    WebhookEventTypeListResponse,
    WebhookEventTypesListParams,
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
    WebhookEventTypesListParams,
    _SdkWithoutIdempotency,
    WebhookEventTypeListResponse,
    WebhookEventType
} from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning, ResourceType } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface WebhookEventTypesResource {
    /**
 * Returns every webhook event type you can use in enabled_events and event filters, with the event
 * sources each type is valid for. Default order: event_type ascending; this key uniquely orders
 * the results.
 *
 * `GET /v1/webhook-event-types`
 * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEventTypes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.webhookEventTypes.list()
 */
    list(params?: WebhookEventTypesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WebhookEventTypeListResponse, WebhookEventTypeListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEventTypes
     */
    listPages(params?: WebhookEventTypesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<WebhookEventTypeListResponse, WebhookEventTypeListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/webhooks#listWebhookEventTypes
     */
    listItems(params?: WebhookEventTypesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookEventType>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookEventTypes: WebhookEventTypesResource;
}
