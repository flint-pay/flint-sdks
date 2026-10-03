export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DeliveryRateCallback } from '../declarations/DeliveryRateCallback.js';
import type { DeliveryRateCallbackConfigurationInput } from '../declarations/DeliveryRateCallbackConfigurationInput.js';
import type { DeliveryRateCallbackConnectionCheckResponse } from '../declarations/DeliveryRateCallbackConnectionCheckResponse.js';
import type { DeliveryRateCallbackListResponse } from '../declarations/DeliveryRateCallbackListResponse.js';
import type { DeliveryRateCallbackResponse } from '../declarations/DeliveryRateCallbackResponse.js';
import type { DeliveryRateCallbackSigningKeyRotationResponse } from '../declarations/DeliveryRateCallbackSigningKeyRotationResponse.js';
import type { DeliveryRateCallbackTestDeliveryResponse } from '../declarations/DeliveryRateCallbackTestDeliveryResponse.js';
import type { DeliveryRateCallbacksCheckConnectionInput } from '../declarations/DeliveryRateCallbacksCheckConnectionInput.js';
import type { DeliveryRateCallbacksCheckConnectionResponse } from '../declarations/DeliveryRateCallbacksCheckConnectionResponse.js';
import type { DeliveryRateCallbacksCreateInput } from '../declarations/DeliveryRateCallbacksCreateInput.js';
import type { DeliveryRateCallbacksCreateResponse } from '../declarations/DeliveryRateCallbacksCreateResponse.js';
import type { DeliveryRateCallbacksCreateTestDeliveryInput } from '../declarations/DeliveryRateCallbacksCreateTestDeliveryInput.js';
import type { DeliveryRateCallbacksCreateTestDeliveryResponse } from '../declarations/DeliveryRateCallbacksCreateTestDeliveryResponse.js';
import type { DeliveryRateCallbacksGetInput } from '../declarations/DeliveryRateCallbacksGetInput.js';
import type { DeliveryRateCallbacksGetResponse } from '../declarations/DeliveryRateCallbacksGetResponse.js';
import type { DeliveryRateCallbacksListInput } from '../declarations/DeliveryRateCallbacksListInput.js';
import type { DeliveryRateCallbacksListResponse } from '../declarations/DeliveryRateCallbacksListResponse.js';
import type { DeliveryRateCallbacksRemoveInput } from '../declarations/DeliveryRateCallbacksRemoveInput.js';
import type { DeliveryRateCallbacksRemoveResponse } from '../declarations/DeliveryRateCallbacksRemoveResponse.js';
import type { DeliveryRateCallbacksRotateSigningKeyInput } from '../declarations/DeliveryRateCallbacksRotateSigningKeyInput.js';
import type { DeliveryRateCallbacksRotateSigningKeyResponse } from '../declarations/DeliveryRateCallbacksRotateSigningKeyResponse.js';
import type { DeliveryRateCallbacksUpdateInput } from '../declarations/DeliveryRateCallbacksUpdateInput.js';
import type { DeliveryRateCallbacksUpdateResponse } from '../declarations/DeliveryRateCallbacksUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeliveryRateCallbacksResource {
    /**
 * Sends a minimal signed probe to verify endpoint reachability and callback credentials without running a synthetic rate evaluation.
 * POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.checkConnection("example", {}, { idempotencyKey: idempotencyKey })
 */
    checkConnection(delivery_rate_callback_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryRateCallbackConnectionCheckResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    checkConnectionWithResponse(delivery_rate_callback_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryRateCallbacksCheckConnectionResponse>>;
    /**
 * Delivery callback endpoints pin shared outbound callback transport configuration. Creation publishes immutable revision 1. It starts inactive.
 * POST /v1/delivery-rate-callbacks
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.create({name: "example", configuration: {url: "example"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "configuration": DeliveryRateCallbackConfigurationInput; "external_reference_id"?: string; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryRateCallbackResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "configuration": DeliveryRateCallbackConfigurationInput; "external_reference_id"?: string; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryRateCallbacksCreateResponse>>;
    /**
 * Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result.
 * POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.createTestDelivery("example", {}, { idempotencyKey: idempotencyKey })
 */
    createTestDelivery(delivery_rate_callback_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryRateCallbackTestDeliveryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createTestDeliveryWithResponse(delivery_rate_callback_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryRateCallbacksCreateTestDeliveryResponse>>;
    /**
 * Retires the delivery rate callback after checking current dependencies. The retired resource remains available by ID for historical records.
 * DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(delivery_rate_callback_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryRateCallbackResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(delivery_rate_callback_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryRateCallbacksRemoveResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery rate callback.
 * GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}
 * @example
 * client.deliveryRateCallbacks.get("example")
 */
    get(delivery_rate_callback_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliveryRateCallbackResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(delivery_rate_callback_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryRateCallbacksGetResponse>>;
    /**
 * Returns delivery rate callbacks in a stable, cursor-paginated order.
 * GET /v1/delivery-rate-callbacks
 * @example
 * client.deliveryRateCallbacks.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryRateCallbackListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryRateCallbacksListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryRateCallbackListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeliveryRateCallbacksListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryRateCallback>;
    /**
 * Rotates the endpoint signing secret, accepts both keys for one hour, and returns the new secret once.
 * POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.rotateSigningKey("example", {}, { idempotencyKey: idempotencyKey })
 */
    rotateSigningKey(delivery_rate_callback_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryRateCallbackSigningKeyRotationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    rotateSigningKeyWithResponse(delivery_rate_callback_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryRateCallbacksRotateSigningKeyResponse>>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.
 * PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.update("example", {name: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(delivery_rate_callback_id: InputValue<string>, params: (InputValue<({ "configuration"?: DeliveryRateCallbackConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "name"?: string; "status"?: "inactive" | "active"; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "status": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryRateCallbackResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(delivery_rate_callback_id: InputValue<string>, params: (InputValue<({ "configuration"?: DeliveryRateCallbackConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "name"?: string; "status"?: "inactive" | "active"; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "status": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryRateCallbacksUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly deliveryRateCallbacks: DeliveryRateCallbacksResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DeliveryRateCallbackConnectionCheckResponse } from '../declarations/DeliveryRateCallbackConnectionCheckResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeliveryRateCallbacksCheckConnectionResponse } from '../declarations/DeliveryRateCallbacksCheckConnectionResponse.js';
export type { DeliveryRateCallbackConfigurationInput } from '../declarations/DeliveryRateCallbackConfigurationInput.js';
export type { DeliveryRateCallbackResponse } from '../declarations/DeliveryRateCallbackResponse.js';
export type { DeliveryRateCallbacksCreateResponse } from '../declarations/DeliveryRateCallbacksCreateResponse.js';
export type { DeliveryRateCallbackTestDeliveryResponse } from '../declarations/DeliveryRateCallbackTestDeliveryResponse.js';
export type { DeliveryRateCallbacksCreateTestDeliveryResponse } from '../declarations/DeliveryRateCallbacksCreateTestDeliveryResponse.js';
export type { DeliveryRateCallbacksRemoveResponse } from '../declarations/DeliveryRateCallbacksRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { DeliveryRateCallbacksGetResponse } from '../declarations/DeliveryRateCallbacksGetResponse.js';
export type { DeliveryRateCallbackListResponse } from '../declarations/DeliveryRateCallbackListResponse.js';
export type { DeliveryRateCallbacksListResponse } from '../declarations/DeliveryRateCallbacksListResponse.js';
export type { DeliveryRateCallback } from '../declarations/DeliveryRateCallback.js';
export type { DeliveryRateCallbackSigningKeyRotationResponse } from '../declarations/DeliveryRateCallbackSigningKeyRotationResponse.js';
export type { DeliveryRateCallbacksRotateSigningKeyResponse } from '../declarations/DeliveryRateCallbacksRotateSigningKeyResponse.js';
export type { DeliveryRateCallbacksUpdateResponse } from '../declarations/DeliveryRateCallbacksUpdateResponse.js';
export type { DeliveryRateCallbacksCheckConnectionInput } from '../declarations/DeliveryRateCallbacksCheckConnectionInput.js';
export type { DeliveryRateCallbacksCreateInput } from '../declarations/DeliveryRateCallbacksCreateInput.js';
export type { DeliveryRateCallbacksCreateTestDeliveryInput } from '../declarations/DeliveryRateCallbacksCreateTestDeliveryInput.js';
export type { DeliveryRateCallbacksRemoveInput } from '../declarations/DeliveryRateCallbacksRemoveInput.js';
export type { DeliveryRateCallbacksGetInput } from '../declarations/DeliveryRateCallbacksGetInput.js';
export type { DeliveryRateCallbacksListInput } from '../declarations/DeliveryRateCallbacksListInput.js';
export type { DeliveryRateCallbacksRotateSigningKeyInput } from '../declarations/DeliveryRateCallbacksRotateSigningKeyInput.js';
export type { DeliveryRateCallbacksUpdateInput } from '../declarations/DeliveryRateCallbacksUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { DeliveryRateCallbackConnectionCheck } from '../declarations/DeliveryRateCallbackConnectionCheck.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { DeliveryRateCallbackTestDelivery } from '../declarations/DeliveryRateCallbackTestDelivery.js';
export type { DeliveryRateCallbackConfiguration } from '../declarations/DeliveryRateCallbackConfiguration.js';
export type { DeliveryRateCallbackSigningKeyRotation } from '../declarations/DeliveryRateCallbackSigningKeyRotation.js';
export type { CreateDeliveryRateCallbackRequestInput } from '../declarations/CreateDeliveryRateCallbackRequestInput.js';
export type { UpdateDeliveryRateCallbackRequestInput } from '../declarations/UpdateDeliveryRateCallbackRequestInput.js';
export { makeDeliveryRateCallbackConnectionCheckResponse } from '../declarations/makeDeliveryRateCallbackConnectionCheckResponse.js';
export { makeDeliveryRateCallbackResponse } from '../declarations/makeDeliveryRateCallbackResponse.js';
export { makeDeliveryRateCallbackTestDeliveryResponse } from '../declarations/makeDeliveryRateCallbackTestDeliveryResponse.js';
export { makeDeliveryRateCallbackListResponse } from '../declarations/makeDeliveryRateCallbackListResponse.js';
export { makeDeliveryRateCallback } from '../declarations/makeDeliveryRateCallback.js';
export { makeDeliveryRateCallbackSigningKeyRotationResponse } from '../declarations/makeDeliveryRateCallbackSigningKeyRotationResponse.js';
export { makeDeliveryRateCallbackConnectionCheck } from '../declarations/makeDeliveryRateCallbackConnectionCheck.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeDeliveryRateCallbackTestDelivery } from '../declarations/makeDeliveryRateCallbackTestDelivery.js';
export { makeDeliveryRateCallbackConfiguration } from '../declarations/makeDeliveryRateCallbackConfiguration.js';
export { makeDeliveryRateCallbackSigningKeyRotation } from '../declarations/makeDeliveryRateCallbackSigningKeyRotation.js';
