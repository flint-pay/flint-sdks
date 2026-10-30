import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { CreateReturnReasonResponse } from '../declarations/types-10.js';
import type { DeleteReturnReasonResponse } from '../declarations/types-14.js';
import type { GetReturnReasonResponse } from '../declarations/types-23.js';
import type { ListReturnReasonsResponse } from '../declarations/types-32.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    ReturnReason,
    ReturnReasonsCreateParams,
    ReturnReasonsDeleteParams,
    ReturnReasonsGetParams,
    ReturnReasonsListParams,
    ReturnReasonsUpdateParams
} from '../declarations/types-49.js';
import type { UpdateReturnReasonResponse } from '../declarations/types-59.js';
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
    ReturnReasonsCreateParams,
    ReturnReason,
    ReturnReasonsDeleteParams,
    ReturnReasonsGetParams,
    ReturnReasonsListParams,
    ReturnReasonsUpdateParams
} from '../declarations/types-49.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { CreateReturnReasonResponse, CreateReturnReasonRequestInput, CreateReturnReasonRequest } from '../declarations/types-10.js';
export type { DeleteReturnReasonResponse } from '../declarations/types-14.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { GetReturnReasonResponse } from '../declarations/types-23.js';
export type { ListReturnReasonsResponse } from '../declarations/types-32.js';
export type { UpdateReturnReasonResponse, UpdateReturnReasonRequestInput } from '../declarations/types-59.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateReturnReasonRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateReturnReasonRequest } from '../declarations/types-74.js';
export interface ReturnReasonsResource {
    /**
 * Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection
 * findings, decline reasons, and Refund reasons. Flint handles and all existing merchant handles,
 * including archived reasons, are reserved. A conflicting handle returns 409 ALREADY_EXISTS.
 *
 * `POST /v1/return-reasons`
 * @see https://developers.withflintpay.com/docs/api/return-reasons#createReturnReason
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.create({handle: "example", name: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: ReturnReasonsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnReason, CreateReturnReasonResponse>>;
    /**
 * Archive a Return reason so it can't be selected on new Return lines. Returns that recorded it
 * keep its name and handle. Flint reasons can't be archived; set status to inactive instead. An
 * archived reason's handle stays reserved.
 *
 * `DELETE /v1/return-reasons/{return_reason_id}`
 * @param return_reason_id Flint return reason id.
 * @see https://developers.withflintpay.com/docs/api/return-reasons#deleteReturnReason
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.delete("rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(return_reason_id: InputValue<string>, params?: ReturnReasonsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnReason, DeleteReturnReasonResponse>>;
    /**
 * Retrieve one Return reason with its handle, category handles, and status.
 *
 * `GET /v1/return-reasons/{return_reason_id}`
 * @param return_reason_id Flint return reason id.
 * @see https://developers.withflintpay.com/docs/api/return-reasons#getReturnReason
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnReasons.get("rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(return_reason_id: InputValue<string>, params?: ReturnReasonsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnReason, GetReturnReasonResponse>>;
    /**
 * List Return reasons, including Flint-provided defaults and merchant-defined reasons. Flint
 * reasons have a created_at of 1970-01-01T00:00:00Z, so they follow your own. Default order:
 * created_at descending, then return_reason_id descending.
 *
 * `GET /v1/return-reasons`
 * @see https://developers.withflintpay.com/docs/api/return-reasons#listReturnReasons
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnReasons.list()
 */
    list(params?: ReturnReasonsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnReasonsResponse, ListReturnReasonsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-reasons#listReturnReasons
     */
    listPages(params?: ReturnReasonsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnReasonsResponse, ListReturnReasonsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-reasons#listReturnReasons
     */
    listItems(params?: ReturnReasonsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnReason>;
    /**
 * Update a Return reason. Send null to clear description. A present category_handles array
 * replaces the existing set. Set status to active or inactive to control availability. Flint
 * reasons accept only status and expected_version; create your own reason to use different
 * wording. Use DELETE to archive a merchant reason.
 *
 * `PATCH /v1/return-reasons/{return_reason_id}`
 * @param return_reason_id Flint return reason id.
 * @see https://developers.withflintpay.com/docs/api/return-reasons#updateReturnReason
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.update("rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Wrong size"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(return_reason_id: InputValue<string>, params: ReturnReasonsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnReason, UpdateReturnReasonResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnReasons: ReturnReasonsResource;
}
