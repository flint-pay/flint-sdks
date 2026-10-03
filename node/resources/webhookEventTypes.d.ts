export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { WebhookEventType } from '../declarations/WebhookEventType.js';
import type { WebhookEventTypeListResponse } from '../declarations/WebhookEventTypeListResponse.js';
import type { WebhookEventTypesListInput } from '../declarations/WebhookEventTypesListInput.js';
import type { WebhookEventTypesListResponse } from '../declarations/WebhookEventTypesListResponse.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface WebhookEventTypesResource {
    /**
 * Returns the webhook event types that can be used in enabled_events and event_type filters, grouped by the event source each type is valid for.
 * GET /v1/webhook-event-types
 * @example
 * client.webhookEventTypes.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<WebhookEventTypeListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<WebhookEventTypesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookEventTypeListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<WebhookEventTypesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookEventType>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly webhookEventTypes: WebhookEventTypesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { WebhookEventTypeListResponse } from '../declarations/WebhookEventTypeListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { WebhookEventTypesListResponse } from '../declarations/WebhookEventTypesListResponse.js';
export type { WebhookEventType } from '../declarations/WebhookEventType.js';
export type { WebhookEventTypesListInput } from '../declarations/WebhookEventTypesListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export { makeWebhookEventTypeListResponse } from '../declarations/makeWebhookEventTypeListResponse.js';
export { makeWebhookEventType } from '../declarations/makeWebhookEventType.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
