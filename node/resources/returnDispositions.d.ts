import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { CancelReturnDispositionResponse } from '../declarations/types-4.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { GetReturnDispositionResponse } from '../declarations/types-25.js';
import type { ListReturnDispositionsResponse } from '../declarations/types-35.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type {
    RetryReturnDispositionResponse,
    ReturnDisposition,
    ReturnDispositionsCancelParams,
    ReturnDispositionsGetParams,
    ReturnDispositionsListParams,
    ReturnDispositionsRetryParams
} from '../declarations/types-54.js';
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
    ReturnDispositionsCancelParams,
    ReturnDisposition,
    ReturnDispositionsGetParams,
    ReturnDispositionsListParams,
    ReturnDispositionsRetryParams,
    RetryReturnDispositionResponse,
    ReturnActor,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    RetryReturnDispositionRequestInput
} from '../declarations/types-54.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { CancelReturnDispositionResponse, CancelReturnDispositionRequestInput } from '../declarations/types-4.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { GetReturnDispositionResponse } from '../declarations/types-25.js';
export type { ListReturnDispositionsResponse } from '../declarations/types-35.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap } from '../declarations/types-37.js';
export type { NextAction, MoneyValue } from '../declarations/types-38.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCancelReturnDispositionRequest } from '../declarations/types-70.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeRetryReturnDispositionRequest } from '../declarations/types-81.js';
export interface ReturnDispositionsResource {
    /**
 * Cancel a disposition that has not started its inventory effect. Cancellation is refused once the
 * effect is processing.
 *
 * `POST /v1/return-dispositions/{return_disposition_id}/cancel`
 * @param return_disposition_id Flint return disposition id.
 * @see https://developers.withflintpay.com/docs/api/return-dispositions#cancelReturnDisposition
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnDispositions.cancel("retdsp_01KEZF7C007H87J66PH2EEK1VW", {expected_version: 1,
 * reason: "created_in_error"}, { idempotencyKey: idempotencyKey })
 */
    cancel(return_disposition_id: InputValue<string>, params: ReturnDispositionsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnDisposition, CancelReturnDispositionResponse>>;
    /**
 * Retrieve one disposition with its type, destination, quantity, status, and any linked inventory
 * effect.
 *
 * `GET /v1/return-dispositions/{return_disposition_id}`
 * @param return_disposition_id Flint return disposition id.
 * @see https://developers.withflintpay.com/docs/api/return-dispositions#getReturnDisposition
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnDispositions.get("retdsp_01KEZF7C007H87J66PH2EEK1VW")
 */
    get(return_disposition_id: InputValue<string>, params?: ReturnDispositionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnDisposition, GetReturnDispositionResponse>>;
    /**
 * List merchandise dispositions. Omitting return_id lists dispositions across every Return for the
 * merchant. Default order: created_at descending, then return_disposition_id descending.
 *
 * `GET /v1/return-dispositions`
 * @see https://developers.withflintpay.com/docs/api/return-dispositions#listReturnDispositions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnDispositions.list()
 */
    list(params?: ReturnDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnDispositionsResponse, ListReturnDispositionsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-dispositions#listReturnDispositions
     */
    listPages(params?: ReturnDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnDispositionsResponse, ListReturnDispositionsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-dispositions#listReturnDispositions
     */
    listItems(params?: ReturnDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnDisposition>;
    /**
 * Retry a failed disposition with the same immutable intent. Disposition and effect identities are
 * preserved, so a retry does not move stock twice.
 *
 * `POST /v1/return-dispositions/{return_disposition_id}/retry`
 * @param return_disposition_id Flint return disposition id.
 * @see https://developers.withflintpay.com/docs/api/return-dispositions#retryReturnDisposition
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnDispositions.retry("retdsp_01KEZF7C007H87J66PH2EEK1VW", {expected_version: 2,
 * reason: "mapping_corrected"}, { idempotencyKey: idempotencyKey })
 */
    retry(return_disposition_id: InputValue<string>, params: ReturnDispositionsRetryParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnDisposition, RetryReturnDispositionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnDispositions: ReturnDispositionsResource;
}
