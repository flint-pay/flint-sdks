import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
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
    DeliveryRateCallbacksCheckConnectionParams,
    DeliveryRateCallbacksCreateParams,
    DeliveryRateCallbacksCreateTestDeliveryParams,
    DeliveryRateCallbacksDeleteParams,
    DeliveryRateCallbacksGetParams,
    DeliveryRateCallbacksListParams,
    DeliveryRateCallbacksRotateSecretParams,
    DeliveryRateCallbacksUpdateParams
} from '../declarations/types-18.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    DeliveryRateCallbacksCheckConnectionParams,
    DeliveryRateCallbackConnectionCheck,
    DeliveryRateCallbackConnectionCheckResponse,
    DeliveryRateCallbacksCreateParams,
    DeliveryRateCallback,
    DeliveryRateCallbackResponse,
    DeliveryRateCallbacksCreateTestDeliveryParams,
    DeliveryRateCallbackTestDelivery,
    DeliveryRateCallbackTestDeliveryResponse,
    DeliveryRateCallbacksDeleteParams,
    DeliveryRateCallbacksGetParams,
    DeliveryRateCallbacksListParams,
    DeliveryRateCallbackListResponse,
    DeliveryRateCallbacksRotateSecretParams,
    DeliveryRateCallbackSigningKeyRotation,
    DeliveryRateCallbackSigningKeyRotationResponse,
    DeliveryRateCallbacksUpdateParams,
    DeliveryRateCallbackConfigurationInput,
    DeliveryRateCallbackConfiguration,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from '../declarations/types-18.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency, WebhookSigningMethodInput } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreateDeliveryRateCallbackRequestInput } from '../declarations/types-7.js';
export type { UpdateDeliveryRateCallbackRequestInput } from '../declarations/types-58.js';
export type { DeliveryLocationSetsDeleteParams } from '../declarations/types-15.js';
export { makeCreateDeliveryRateCallbackRequest } from '../declarations/types-63.js';
export { makeDeliveryRateCallbackConfiguration, makeDeliveryRateCallbackConfigurationPatchRequest } from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateDeliveryRateCallbackRequest } from '../declarations/types-73.js';
export { makeWebhookSigningMethod } from '../declarations/types-75.js';
export interface DeliveryRateCallbacksResource {
    /**
 * Sends a minimal signed probe to verify endpoint reachability and callback credentials without
 * running a synthetic rate evaluation. The Idempotency-Key fingerprint includes the
 * delivery_rate_callback_id path value and request body. A retry replays the original result even
 * after the callback changes or is archived.
 *
 * `POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection`
 * @param delivery_rate_callback_id Flint delivery rate callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#checkDeliveryRateCallbackConnection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.checkConnection("dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {
 * idempotencyKey: idempotencyKey })
 */
    checkConnection(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksCheckConnectionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackConnectionCheck, DeliveryRateCallbackConnectionCheckResponse>>;
    /**
 * Delivery callback endpoints pin shared outbound callback transport configuration. Creation
 * publishes immutable revision 1. signing_methods defaults to ["jwt"]. JWTs use Flint's public
 * JWKS and this callback's delivery_rate_callback_id as aud. Verify body_sha256 against the exact
 * request bytes. The jwt method sends Authorization: Bearer, and the hmac method sends
 * webhook-signature and Flint-Signing-Key-Ids. Every request includes webhook-id and
 * webhook-timestamp. A shared secret and key_id are issued and returned once only when hmac is
 * included. It starts inactive.
 *
 * `POST /v1/delivery-rate-callbacks`
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#createDeliveryRateCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.create({name: "example", configuration: {url: "example"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryRateCallbacksCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallback, DeliveryRateCallbackResponse>>;
    /**
 * Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result. The
 * Idempotency-Key fingerprint includes the delivery_rate_callback_id path value and request body.
 * A retry replays the original result even after the callback changes or is archived.
 *
 * `POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries`
 * @param delivery_rate_callback_id Flint delivery rate callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#createDeliveryRateCallbackTestDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.createTestDelivery("dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {
 * idempotencyKey: idempotencyKey })
 */
    createTestDelivery(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksCreateTestDeliveryParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackTestDelivery, DeliveryRateCallbackTestDeliveryResponse>>;
    /**
 * Retires the delivery rate callback after checking current dependencies. The retired resource
 * remains available by ID for historical records. Deleting an already archived resource returns it
 * without changing its version or repeating effects.
 *
 * `DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`
 * @param delivery_rate_callback_id Flint delivery rate callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#deleteDeliveryRateCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.delete("dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallback, DeliveryRateCallbackResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery rate callback.
 *
 * `GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`
 * @param delivery_rate_callback_id Flint delivery rate callback ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#getDeliveryRateCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryRateCallbacks.get("dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryRateCallback, DeliveryRateCallbackResponse>>;
    /**
 * Returns delivery rate callbacks in a stable, cursor-paginated order. Archived resources are
 * excluded by default. Default order: created_at ascending, then delivery_rate_callback_id
 * ascending.
 *
 * `GET /v1/delivery-rate-callbacks`
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryRateCallbacks
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryRateCallbacks.list()
 */
    list(params?: DeliveryRateCallbacksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryRateCallbackListResponse, DeliveryRateCallbackListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryRateCallbacks
     */
    listPages(params?: DeliveryRateCallbacksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliveryRateCallbackListResponse, DeliveryRateCallbackListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryRateCallbacks
     */
    listItems(params?: DeliveryRateCallbacksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryRateCallback>;
    /**
 * Issues a first shared secret and adds hmac when no secret exists, and increments the callback's
 * version. Otherwise rotates the shared secret and accepts both keys for one hour. Returns the new
 * secret and key_id once.
 *
 * `POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`
 * @param delivery_rate_callback_id Flint delivery rate callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#rotateDeliveryRateCallbackSigningKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.rotateSecret("dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {
 * idempotencyKey: idempotencyKey })
 */
    rotateSecret(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksRotateSecretParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackSigningKeyRotation, DeliveryRateCallbackSigningKeyRotationResponse>>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable
 * revision. Configuration and signing_methods changes require expected_version. signing_methods
 * replaces the set; removing hmac deletes all shared secrets. Use rotate-secret to issue a first
 * shared secret before adding hmac. Archived resources can't be changed; create a new resource
 * instead.
 *
 * `PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`
 * @param delivery_rate_callback_id Flint delivery rate callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#updateDeliveryRateCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.update("dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Delivery rates"},
 * { idempotencyKey: idempotencyKey })
 */
    update(delivery_rate_callback_id: InputValue<string>, params: DeliveryRateCallbacksUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallback, DeliveryRateCallbackResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryRateCallbacks: DeliveryRateCallbacksResource;
}
