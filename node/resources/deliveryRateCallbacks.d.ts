import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    DeliveryRateCallback,
    DeliveryRateCallbackConnectionCheck,
    DeliveryRateCallbackConnectionCheckResponse,
    DeliveryRateCallbackListResponse,
    DeliveryRateCallbackResponse,
    DeliveryRateCallbackTestDelivery
} from '../declarations/types-20.js';
import type {
    DeliveryRateCallbackTestDeliveryResponse,
    DeliveryRateCallbackWithSecret,
    DeliveryRateCallbackWithSecretResponse,
    DeliveryRateCallbacksCheckConnectionParams,
    DeliveryRateCallbacksCreateParams,
    DeliveryRateCallbacksCreateTestDeliveryParams,
    DeliveryRateCallbacksDeleteParams,
    DeliveryRateCallbacksGetParams,
    DeliveryRateCallbacksListParams,
    DeliveryRateCallbacksRotateSecretParams,
    DeliveryRateCallbacksUpdateParams
} from '../declarations/types-21.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    DeliveryRateCallbacksCreateParams,
    DeliveryRateCallbackWithSecret,
    DeliveryRateCallbackWithSecretResponse,
    DeliveryRateCallbacksCreateTestDeliveryParams,
    DeliveryRateCallbackTestDeliveryResponse,
    DeliveryRateCallbacksDeleteParams,
    DeliveryRateCallbacksGetParams,
    DeliveryRateCallbacksListParams,
    DeliveryRateCallbacksRotateSecretParams,
    DeliveryRateCallbacksUpdateParams
} from '../declarations/types-21.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type {
    DeliveryRateCallbackConnectionCheck,
    DeliveryRateCallbackConnectionCheckResponse,
    DeliveryRateCallbackTestDelivery,
    DeliveryRateCallback,
    DeliveryRateCallbackResponse,
    DeliveryRateCallbackListResponse,
    DeliveryRateCallbackConfigurationRequestInput,
    DeliveryRateCallbackConfiguration,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from '../declarations/types-20.js';
export type { _SdkWithoutIdempotency, WebhookSigningMethodInput } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { NextAction, MoneyValue } from '../declarations/types-38.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { CreateDeliveryRateCallbackRequestInput } from '../declarations/types-8.js';
export type { UpdateDeliveryRateCallbackRequestInput } from '../declarations/types-66.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export type { DeliveryLocationSetsDeleteParams } from '../declarations/types-17.js';
export { makeCreateDeliveryRateCallbackRequest } from '../declarations/types-72.js';
export { makeDeliveryRateCallbackConfigurationPatchRequest, makeDeliveryRateCallbackConfigurationRequest } from '../declarations/types-75.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdateDeliveryRateCallbackRequest } from '../declarations/types-83.js';
export { makeWebhookSigningMethod } from '../declarations/types-84.js';
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
 * client.deliveryRateCallbacks.checkConnection("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, {
 * idempotencyKey: idempotencyKey })
 */
    checkConnection(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksCheckConnectionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackConnectionCheck, DeliveryRateCallbackConnectionCheckResponse>>;
    /**
 * Delivery callback endpoints pin shared outbound callback transport configuration. Creation
 * publishes immutable revision 1. signing_methods defaults to ["jwt"]. JWTs use Flint's public
 * JWKS and this callback's delivery_rate_callback_id as aud. Verify body_sha256 against the exact
 * request bytes. The jwt method sends Authorization: Bearer, and the hmac method sends
 * webhook-signature and Flint-Signing-Key-Ids. Every request includes webhook-id and
 * webhook-timestamp. When hmac is included, the response returns the shared secret and its
 * delivery_rate_callback_signing_key_id once; no later response returns them. It starts inactive.
 *
 * `POST /v1/delivery-rate-callbacks`
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#createDeliveryRateCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.create({configuration: {url:
 * "https://merchant.example/delivery-rates"}, name: "Live delivery rates", signing_methods:
 * ["jwt"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryRateCallbacksCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackWithSecret, DeliveryRateCallbackWithSecretResponse>>;
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
 * client.deliveryRateCallbacks.createTestDelivery("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, {
 * idempotencyKey: idempotencyKey })
 */
    createTestDelivery(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksCreateTestDeliveryParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackTestDelivery, DeliveryRateCallbackTestDeliveryResponse>>;
    /**
 * Retires the delivery rate callback. An active delivery method whose current revision still
 * prices with the rate callback blocks deletion: the request returns 409 RESOURCE_IN_USE with the
 * blocking methods. Move those methods to another pricing strategy first. The retired resource
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
 * client.deliveryRateCallbacks.delete("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, { idempotencyKey:
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
 * client.deliveryRateCallbacks.get("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1")
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
 * Replaces the callback's shared secret and returns the callback with the new secret and its
 * delivery_rate_callback_signing_key_id once. Flint signs with both keys for one hour. A callback
 * without hmac returns ACTION_NOT_ALLOWED with reason secret_not_issued; PATCH signing_methods to
 * include hmac to issue the first secret.
 *
 * `POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`
 * @param delivery_rate_callback_id Flint delivery rate callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#rotateDeliveryRateCallbackSecret
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRateCallbacks.rotateSecret("dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1", {}, {
 * idempotencyKey: idempotencyKey })
 */
    rotateSecret(delivery_rate_callback_id: InputValue<string>, params?: DeliveryRateCallbacksRotateSecretParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackWithSecret, DeliveryRateCallbackWithSecretResponse>>;
    /**
 * Sparsely updates mutable fields. A request that carries configuration or signing_methods
 * publishes a new immutable revision, even when its values are unchanged, and requires
 * expected_version. Other fields, such as name, external_reference_id, and status, advance version
 * and keep the current revision, so they never replace a revoked revision. signing_methods
 * replaces the set. Adding hmac when the callback has no shared secret issues one and returns it
 * once, with its delivery_rate_callback_signing_key_id, in this response. Removing hmac deletes
 * all shared secrets. Archived resources can't be changed; create a new resource instead.
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
    update(delivery_rate_callback_id: InputValue<string>, params: DeliveryRateCallbacksUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRateCallbackWithSecret, DeliveryRateCallbackWithSecretResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryRateCallbacks: DeliveryRateCallbacksResource;
}
