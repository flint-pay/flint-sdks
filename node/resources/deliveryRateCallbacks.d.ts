import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDeliveryRateCallbackRequestInput } from '../declarations/types-6.js';
import type {
    DeliveryRateCallback,
    DeliveryRateCallbackConnectionCheck,
    DeliveryRateCallbackConnectionCheckResponse,
    DeliveryRateCallbackListResponse,
    DeliveryRateCallbackResponse,
    DeliveryRateCallbackSigningKeyRotation,
    DeliveryRateCallbackSigningKeyRotationResponse,
    DeliveryRateCallbackTestDelivery,
    DeliveryRateCallbackTestDeliveryResponse,
    DeliveryRateCallbacksCheckConnectionInput,
    DeliveryRateCallbacksCreateInput,
    DeliveryRateCallbacksCreateTestDeliveryInput,
    DeliveryRateCallbacksGetInput,
    DeliveryRateCallbacksListInput,
    DeliveryRateCallbacksRemoveInput,
    DeliveryRateCallbacksRotateSigningKeyInput,
    DeliveryRateCallbacksUpdateInput
} from '../declarations/types-14.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateDeliveryRateCallbackRequestInput } from '../declarations/types-48.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    DeliveryRateCallbackConnectionCheck,
    DeliveryRateCallbackConnectionCheckResponse,
    DeliveryRateCallback,
    DeliveryRateCallbackResponse,
    DeliveryRateCallbackTestDelivery,
    DeliveryRateCallbackTestDeliveryResponse,
    DeliveryRateCallbackListResponse,
    DeliveryRateCallbackSigningKeyRotation,
    DeliveryRateCallbackSigningKeyRotationResponse,
    DeliveryRateCallbacksCheckConnectionInput,
    DeliveryRateCallbacksCreateInput,
    DeliveryRateCallbacksCreateTestDeliveryInput,
    DeliveryRateCallbacksRemoveInput,
    DeliveryRateCallbacksGetInput,
    DeliveryRateCallbacksListInput,
    DeliveryRateCallbacksRotateSigningKeyInput,
    DeliveryRateCallbacksUpdateInput,
    DeliveryRateCallbackConfigurationInput,
    DeliveryRateCallbackConfiguration,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from '../declarations/types-14.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { CreateDeliveryRateCallbackRequestInput } from '../declarations/types-6.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateDeliveryRateCallbackRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateDeliveryRateCallbackRequest } from '../declarations/types-63.js';
export { makeDeliveryRateCallbackConfiguration, makeDeliveryRateCallbackConfigurationPatchRequest } from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateDeliveryRateCallbackRequest } from '../declarations/types-72.js';
export interface DeliveryRateCallbacksResource {
    /**
 * Sends a minimal signed probe to verify endpoint reachability and callback credentials without
 * running a synthetic rate evaluation. The Idempotency-Key fingerprint includes the
 * delivery_rate_callback_id path value and request body. A retry replays the original result even
 * after the callback changes or is archived.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbackscheckconnection
 * POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.checkConnection("example", {}, { idempotencyKey: idempotencyKey })
 */
    checkConnection(delivery_rate_callback_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryRateCallbackConnectionCheck>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbackscheckconnection
     */
    checkConnectionWithResponse(delivery_rate_callback_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryRateCallbackConnectionCheckResponse>>;
    /**
 * Delivery callback endpoints pin shared outbound callback transport configuration. Creation
 * publishes immutable revision 1. It starts inactive.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbackscreate
 * POST /v1/delivery-rate-callbacks
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.create({name: "example", configuration: {url: "example"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateDeliveryRateCallbackRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryRateCallback>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbackscreate
     */
    createWithResponse(params: (InputValue<CreateDeliveryRateCallbackRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryRateCallbackResponse>>;
    /**
 * Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result. The
 * Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body.
 * A retry replays the original result even after the callback changes or is archived.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbackscreatetestdelivery
 * POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.createTestDelivery("example", {}, { idempotencyKey: idempotencyKey
 * })
 */
    createTestDelivery(delivery_rate_callback_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryRateCallbackTestDelivery>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbackscreatetestdelivery
     */
    createTestDeliveryWithResponse(delivery_rate_callback_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryRateCallbackTestDeliveryResponse>>;
    /**
 * Retires the delivery rate callback after checking current dependencies. The retired resource
 * remains available by ID for historical records. Deleting an already archived resource returns it
 * without changing its version or repeating effects.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksremove
 * DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(delivery_rate_callback_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryRateCallback>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksremove
     */
    removeWithResponse(delivery_rate_callback_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryRateCallbackResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery rate callback.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksget
 * GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}
 * @example
 * client.deliveryRateCallbacks.get("example")
 */
    get(delivery_rate_callback_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryRateCallback>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksget
     */
    getWithResponse(delivery_rate_callback_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryRateCallbackResponse>>;
    /**
 * Returns delivery rate callbacks in a stable, cursor-paginated order. Archived resources are
 * excluded by default.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbackslist
 * GET /v1/delivery-rate-callbacks
 * @example
 * client.deliveryRateCallbacks.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryRateCallbackListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbackslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryRateCallbackListResponse>>;
    /** Iterate pages lazily.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbackslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryRateCallbackListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbackslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<DeliveryRateCallbackListResponse>>;
    /** Iterate items lazily.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbackslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryRateCallback>;
    /**
 * Rotates the endpoint signing secret, accepts both keys for one hour, and returns the new secret
 * once.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksrotatesigningkey
 * POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.rotateSigningKey("example", {}, { idempotencyKey: idempotencyKey })
 */
    rotateSigningKey(delivery_rate_callback_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryRateCallbackSigningKeyRotation>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksrotatesigningkey
     */
    rotateSigningKeyWithResponse(delivery_rate_callback_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryRateCallbackSigningKeyRotationResponse>>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable
 * revision and requires expected_version. Archived resources can't be changed; create a new
 * resource instead.
 * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksupdate
 * PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.update("example", {name: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    update(delivery_rate_callback_id: InputValue<string>, params: (InputValue<UpdateDeliveryRateCallbackRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryRateCallback>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRateCallbacks.md#deliveryratecallbacksupdate
     */
    updateWithResponse(delivery_rate_callback_id: InputValue<string>, params: (InputValue<UpdateDeliveryRateCallbackRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryRateCallbackResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryRateCallbacks: DeliveryRateCallbacksResource;
}
