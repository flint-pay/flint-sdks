import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { CancelReturnDispositionResponse } from '../declarations/types-5.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { CreateReturnDispositionResponse } from '../declarations/types-13.js';
import type { GetReturnDispositionResponse } from '../declarations/types-28.js';
import type { ListReturnDispositionsResponse } from '../declarations/types-38.js';
import type { RequestOptions, RetryReturnDispositionResponse, ReturnDisposition } from '../declarations/types-60.js';
import type {
    ReturnDispositionsCancelParams,
    ReturnDispositionsCreateParams,
    ReturnDispositionsGetParams,
    ReturnDispositionsListParams,
    ReturnDispositionsRetryParams
} from '../declarations/types-61.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-77.js';
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
    ReturnDispositionsCreateParams,
    ReturnDispositionsGetParams,
    ReturnDispositionsListParams,
    ReturnDispositionsRetryParams
} from '../declarations/types-61.js';
export type {
    RequestOptions,
    ReturnDisposition,
    RetryReturnDispositionResponse,
    ReturnActor,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    RetryReturnDispositionRequestInput
} from '../declarations/types-60.js';
export type { CancelReturnDispositionResponse, CancelReturnDispositionRequestInput } from '../declarations/types-5.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-77.js';
export type {
    CreateReturnDispositionResponse,
    CreateReturnDispositionRequestReceiptLineInput,
    CreateReturnDispositionRequestInspectionLineInput
} from '../declarations/types-13.js';
export type { GetReturnDispositionResponse } from '../declarations/types-28.js';
export type { ListReturnDispositionsResponse } from '../declarations/types-38.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap, MetadataRequestInput } from '../declarations/types-41.js';
export type { CreateReturnDispositionRequestInput } from '../declarations/types-12.js';
export type { NextAction, MoneyValue } from '../declarations/types-42.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-58.js';
export type { DisputesAcceptParams } from '../declarations/types-25.js';
export { makeCancelReturnDispositionRequest } from '../declarations/types-78.js';
export {
    makeCreateReturnDispositionRequest,
    makeCreateReturnDispositionRequestInspectionLine,
    makeCreateReturnDispositionRequestReceiptLine
} from '../declarations/types-81.js';
export { makeMetadataRequest } from '../declarations/types-85.js';
export { makeMoneyValue } from '../declarations/types-86.js';
export { makeRetryReturnDispositionRequest } from '../declarations/types-88.js';
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
 * Record an auditable merchandise disposition from either a receipt line or an inspection line.
 * Read dispositions with `GET /v1/return-dispositions?return_id=` or expand `return_dispositions`
 * on `client.returns.get`.
 *
 * `POST /v1/return-dispositions`
 * @see https://developers.withflintpay.com/docs/api/return-dispositions#createReturnDisposition
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnDispositions.create({disposition_type: "sellable", inventory_location_id:
 * "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", occurred_at: "2026-09-08T14:20:00Z", quantity: 1, reason:
 * "return_policy", return_id: "ret_01KEZF7C00VDTZH2NK73DBK2HZ", return_receipt_line_item_id:
 * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"}, { idempotencyKey: idempotencyKey })
 */
    create(params: ReturnDispositionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnDisposition, CreateReturnDispositionResponse>>;
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
