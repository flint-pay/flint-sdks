import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { WebhookEventType, WebhookEventTypeListResponse, WebhookEventTypesListInput } from '../declarations/types-57.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta, ResourceType } from '../declarations/types-42.js';
export type { WebhookEventTypeListResponse, WebhookEventType, WebhookEventTypesListInput } from '../declarations/types-57.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export interface WebhookEventTypesResource {
    /**
 * Returns every webhook event type you can use in enabled_events and event filters, with the event
 * sources each type is valid for. Default order: event_type ascending; this key uniquely orders
 * the results.
 * @see reference/webhookEventTypes.md#webhookeventtypeslist
 * GET /v1/webhook-event-types
 * @example
 * client.webhookEventTypes.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WebhookEventTypeListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<WebhookEventTypeListResponse>>;
    /** Iterate pages lazily.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookEventTypeListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<WebhookEventTypeListResponse>>;
    /** Iterate items lazily.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WebhookEventType>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookEventTypes: WebhookEventTypesResource;
}
