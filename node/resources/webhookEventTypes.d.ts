import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { WebhookEventType, WebhookEventTypeListResponse, WebhookEventTypesListInput } from '../declarations/types-54.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceType } from '../declarations/types-40.js';
export type { WebhookEventTypeListResponse, WebhookEventType, WebhookEventTypesListInput } from '../declarations/types-54.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface WebhookEventTypesResource {
    /**
 * Returns every webhook event type you can use in enabled_events and event filters, with the event
 * sources each type is valid for.
 * @see reference/webhookEventTypes.md#webhookeventtypeslist
 * GET /v1/webhook-event-types
 * @example
 * client.webhookEventTypes.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<WebhookEventTypeListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<WebhookEventTypeListResponse>>;
    /** Iterate pages lazily.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookEventTypeListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<WebhookEventTypeListResponse>>;
    /** Iterate items lazily.
     * @see reference/webhookEventTypes.md#webhookeventtypeslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookEventType>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly webhookEventTypes: WebhookEventTypesResource;
}
