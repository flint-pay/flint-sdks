export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { WebhookDeliveriesGetInput } from '../declarations/WebhookDeliveriesGetInput.js';
import type { WebhookDeliveriesGetResponse } from '../declarations/WebhookDeliveriesGetResponse.js';
import type { WebhookDeliveriesListAttemptsInput } from '../declarations/WebhookDeliveriesListAttemptsInput.js';
import type { WebhookDeliveriesListAttemptsResponse } from '../declarations/WebhookDeliveriesListAttemptsResponse.js';
import type { WebhookDeliveriesResendInput } from '../declarations/WebhookDeliveriesResendInput.js';
import type { WebhookDeliveriesResendResponse } from '../declarations/WebhookDeliveriesResendResponse.js';
import type { WebhookDeliveryActionResponse } from '../declarations/WebhookDeliveryActionResponse.js';
import type { WebhookDeliveryAttempt } from '../declarations/WebhookDeliveryAttempt.js';
import type { WebhookDeliveryAttemptListResponse } from '../declarations/WebhookDeliveryAttemptListResponse.js';
import type { WebhookDeliveryResponse } from '../declarations/WebhookDeliveryResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface WebhookDeliveriesResource {
    /**
 * Returns one endpoint delivery and its current retry state.
 * GET /v1/webhook-deliveries/{webhook_delivery_id}
 * @example
 * client.webhookDeliveries.get("example", {})
 */
    get(webhook_delivery_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<WebhookDeliveryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(webhook_delivery_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<WebhookDeliveriesGetResponse>>;
    /**
 * Returns the attempts recorded for a specific webhook delivery.
 * GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts
 * @example
 * client.webhookDeliveries.listAttempts("example", {})
 */
    listAttempts(webhook_delivery_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<WebhookDeliveryAttemptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listAttemptsWithResponse(webhook_delivery_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<WebhookDeliveriesListAttemptsResponse>>;
    listAttemptsPages(webhook_delivery_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookDeliveryAttemptListResponse>;
    listAttemptsPagesWithResponse(webhook_delivery_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<WebhookDeliveriesListAttemptsResponse>>;
    listAttemptsItems(webhook_delivery_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<WebhookDeliveryAttempt>;
    /**
 * Sends the canonical event payload again to the delivery's current webhook endpoint URL. Safe to retry with the same Idempotency-Key.
 * POST /v1/webhook-deliveries/{webhook_delivery_id}/resend
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.webhookDeliveries.resend("example", undefined)
 */
    resend(webhook_delivery_id: InputValue<string>, params?: (InputValue<{ "reason"?: string; }> | { "reason"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<WebhookDeliveryActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resendWithResponse(webhook_delivery_id: InputValue<string>, params?: (InputValue<{ "reason"?: string; }> | { "reason"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<WebhookDeliveriesResendResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly webhookDeliveries: WebhookDeliveriesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { WebhookDeliveryResponse } from '../declarations/WebhookDeliveryResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { WebhookDeliveriesGetResponse } from '../declarations/WebhookDeliveriesGetResponse.js';
export type { WebhookDeliveryAttemptListResponse } from '../declarations/WebhookDeliveryAttemptListResponse.js';
export type { WebhookDeliveriesListAttemptsResponse } from '../declarations/WebhookDeliveriesListAttemptsResponse.js';
export type { WebhookDeliveryAttempt } from '../declarations/WebhookDeliveryAttempt.js';
export type { WebhookDeliveryActionResponse } from '../declarations/WebhookDeliveryActionResponse.js';
export type { WebhookDeliveriesResendResponse } from '../declarations/WebhookDeliveriesResendResponse.js';
export type { WebhookDeliveriesGetInput } from '../declarations/WebhookDeliveriesGetInput.js';
export type { WebhookDeliveriesListAttemptsInput } from '../declarations/WebhookDeliveriesListAttemptsInput.js';
export type { WebhookDeliveriesResendInput } from '../declarations/WebhookDeliveriesResendInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { WebhookDelivery } from '../declarations/WebhookDelivery.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { WebhookDeliveryAction } from '../declarations/WebhookDeliveryAction.js';
export type { ResendWebhookDeliveryRequestInput } from '../declarations/ResendWebhookDeliveryRequestInput.js';
export { makeWebhookDeliveryResponse } from '../declarations/makeWebhookDeliveryResponse.js';
export { makeWebhookDeliveryAttemptListResponse } from '../declarations/makeWebhookDeliveryAttemptListResponse.js';
export { makeWebhookDeliveryAttempt } from '../declarations/makeWebhookDeliveryAttempt.js';
export { makeWebhookDeliveryActionResponse } from '../declarations/makeWebhookDeliveryActionResponse.js';
export { makeWebhookDelivery } from '../declarations/makeWebhookDelivery.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeWebhookDeliveryAction } from '../declarations/makeWebhookDeliveryAction.js';
