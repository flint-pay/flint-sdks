import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type {
    TaxCalculationCallback,
    TaxCalculationCallbackConnectionCheck,
    TaxCalculationCallbackConnectionCheckResponse,
    TaxCalculationCallbackListResponse,
    TaxCalculationCallbackResponse,
    TaxCalculationCallbackSigningKey,
    TaxCalculationCallbackSigningKeyRotationResponse,
    TaxCalculationCallbackTestDelivery,
    TaxCalculationCallbackTestDeliveryResponse,
    TaxCalculationCallbacksCheckConnectionParams,
    TaxCalculationCallbacksCreateParams,
    TaxCalculationCallbacksCreateTestDeliveryParams,
    TaxCalculationCallbacksDeleteParams,
    TaxCalculationCallbacksGetParams,
    TaxCalculationCallbacksListParams,
    TaxCalculationCallbacksRotateSecretParams,
    TaxCalculationCallbacksUpdateParams
} from '../declarations/types-64.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    TaxCalculationCallbacksCheckConnectionParams,
    TaxCalculationCallbackConnectionCheck,
    TaxCalculationCallbackConnectionCheckResponse,
    TaxCalculationCallbacksCreateParams,
    TaxCalculationCallback,
    TaxCalculationCallbackResponse,
    TaxCalculationCallbacksCreateTestDeliveryParams,
    TaxCalculationCallbackTestDelivery,
    TaxCalculationCallbackTestDeliveryResponse,
    TaxCalculationCallbacksDeleteParams,
    TaxCalculationCallbacksGetParams,
    TaxCalculationCallbacksListParams,
    TaxCalculationCallbackListResponse,
    TaxCalculationCallbacksRotateSecretParams,
    TaxCalculationCallbackSigningKey,
    TaxCalculationCallbackSigningKeyRotationResponse,
    TaxCalculationCallbacksUpdateParams,
    TaxCalculationCallbackConfigurationRequestInput,
    TaxCalculationCallbackConfiguration,
    TaxCalculationCallbackConfigurationPatchRequestInput
} from '../declarations/types-64.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency, WebhookSigningMethodInput } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials, CreateTaxCalculationCallbackRequestInput } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateTaxCalculationCallbackRequestInput } from '../declarations/types-69.js';
export { makeCreateTaxCalculationCallbackRequest } from '../declarations/types-75.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export {
    makeTaxCalculationCallbackConfigurationPatchRequest,
    makeTaxCalculationCallbackConfigurationRequest
} from '../declarations/types-83.js';
export { makeUpdateTaxCalculationCallbackRequest } from '../declarations/types-84.js';
export { makeWebhookSigningMethod } from '../declarations/types-85.js';
export interface TaxCalculationCallbacksResource {
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported. Sends a signed connection_check request. A 2xx response
 * succeeds unless it sets a Content-Type other than application/json or its body is larger than
 * maximum_response_bytes. Runs for inactive and active callbacks without changing the circuit
 * breaker.
 *
 * `POST /v1/tax-calculation-callbacks/{tax_calculation_callback_id}/check-connection`
 * @param tax_calculation_callback_id Tax calculation callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#checkTaxCalculationCallbackConnection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxCalculationCallbacks.checkConnection("tcb_01KEZF7C00N7SER74Y2E6D1ZGT", {}, {
 * idempotencyKey: idempotencyKey })
 */
    checkConnection(tax_calculation_callback_id: InputValue<string>, params?: TaxCalculationCallbacksCheckConnectionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxCalculationCallbackConnectionCheck, TaxCalculationCallbackConnectionCheckResponse>>;
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported. Creates an inactive callback and immutable revision 1.
 * signing_methods defaults to ["jwt"]. Verify the JWT with Flint's public JWKS, aud equal to
 * tax_calculation_callback_id, and body_sha256 over the exact request bytes. HMAC secrets are
 * returned only once when hmac is selected.
 *
 * `POST /v1/tax-calculation-callbacks`
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#createTaxCalculationCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxCalculationCallbacks.create({configuration: {url: "https://example.com/tax"}, name:
 * "Merchant tax engine"}, { idempotencyKey: idempotencyKey })
 */
    create(params: TaxCalculationCallbacksCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxCalculationCallback, TaxCalculationCallbackResponse>>;
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported. Sends a signed synthetic tax_calculation request with test
 * true and empty line_items and charges. The response must echo tax_calculation_evaluation_id and
 * return empty line_item_calculations and charge_calculations. Runs for inactive and active
 * callbacks without changing the circuit breaker.
 *
 * `POST /v1/tax-calculation-callbacks/{tax_calculation_callback_id}/test-deliveries`
 * @param tax_calculation_callback_id Tax calculation callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#createTaxCalculationCallbackTestDelivery
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxCalculationCallbacks.createTestDelivery("tcb_01KEZF7C00N7SER74Y2E6D1ZGT", {}, {
 * idempotencyKey: idempotencyKey })
 */
    createTestDelivery(tax_calculation_callback_id: InputValue<string>, params?: TaxCalculationCallbacksCreateTestDeliveryParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxCalculationCallbackTestDelivery, TaxCalculationCallbackTestDeliveryResponse>>;
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported. Archives the callback. Select another callback or clear
 * tax.calculation_callback_id before archiving the selected callback.
 *
 * `DELETE /v1/tax-calculation-callbacks/{tax_calculation_callback_id}`
 * @param tax_calculation_callback_id Tax calculation callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#deleteTaxCalculationCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxCalculationCallbacks.delete("tcb_01KEZF7C00N7SER74Y2E6D1ZGT", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(tax_calculation_callback_id: InputValue<string>, params?: TaxCalculationCallbacksDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxCalculationCallback, TaxCalculationCallbackResponse>>;
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported.
 *
 * `GET /v1/tax-calculation-callbacks/{tax_calculation_callback_id}`
 * @param tax_calculation_callback_id Tax calculation callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#getTaxCalculationCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.taxCalculationCallbacks.get("tcb_01KEZF7C00N7SER74Y2E6D1ZGT")
 */
    get(tax_calculation_callback_id: InputValue<string>, params?: TaxCalculationCallbacksGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<TaxCalculationCallback, TaxCalculationCallbackResponse>>;
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported. Default order: created_at descending, then
 * tax_calculation_callback_id descending.
 *
 * `GET /v1/tax-calculation-callbacks`
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#listTaxCalculationCallbacks
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.taxCalculationCallbacks.list()
 */
    list(params?: TaxCalculationCallbacksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<TaxCalculationCallbackListResponse, TaxCalculationCallbackListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#listTaxCalculationCallbacks
     */
    listPages(params?: TaxCalculationCallbacksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<TaxCalculationCallbackListResponse, TaxCalculationCallbackListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#listTaxCalculationCallbacks
     */
    listItems(params?: TaxCalculationCallbacksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<TaxCalculationCallback>;
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported. Issues an HMAC secret and adds hmac when needed. Returns
 * the new secret once. The previous secret remains valid during the same overlap as delivery
 * callbacks.
 *
 * `POST /v1/tax-calculation-callbacks/{tax_calculation_callback_id}/rotate-secret`
 * @param tax_calculation_callback_id Tax calculation callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#rotateTaxCalculationCallbackSecret
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxCalculationCallbacks.rotateSecret("tcb_01KEZF7C00N7SER74Y2E6D1ZGT", {}, {
 * idempotencyKey: idempotencyKey })
 */
    rotateSecret(tax_calculation_callback_id: InputValue<string>, params?: TaxCalculationCallbacksRotateSecretParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxCalculationCallbackSigningKey, TaxCalculationCallbackSigningKeyRotationResponse>>;
    /**
 * Tax calculation callback configuration is scoped to the selected environment. Partner
 * installation tokens are unsupported. Configuration and signing-method changes require
 * expected_version and publish an immutable revision. Configuration fields are patched
 * individually. Change status on its own. A callback selected by tax.calculation_callback_id
 * cannot be deactivated.
 *
 * `PATCH /v1/tax-calculation-callbacks/{tax_calculation_callback_id}`
 * @param tax_calculation_callback_id Tax calculation callback ID.
 * @see
 * https://developers.withflintpay.com/docs/api/tax-calculation-callbacks#updateTaxCalculationCallback
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.taxCalculationCallbacks.update("tcb_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Tax engine"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(tax_calculation_callback_id: InputValue<string>, params: TaxCalculationCallbacksUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TaxCalculationCallback, TaxCalculationCallbackResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly taxCalculationCallbacks: TaxCalculationCallbacksResource;
}
