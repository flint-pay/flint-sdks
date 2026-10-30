import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { DecideReturnInspectionLineItemResponse } from '../declarations/types-14.js';
import type { GetReturnInspectionResponse } from '../declarations/types-23.js';
import type { ListReturnInspectionsResponse } from '../declarations/types-32.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { ReturnInspection } from '../declarations/types-48.js';
import type { ReturnInspectionsDecideLineItemParams, ReturnInspectionsGetParams, ReturnInspectionsListParams } from '../declarations/types-49.js';
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
    ReturnInspectionsDecideLineItemParams,
    ReturnInspectionsGetParams,
    ReturnInspectionsListParams,
    ReturnInspectionLineItem
} from '../declarations/types-49.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ReturnInspection, ReturnDisposition, ReturnActor, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { DecideReturnInspectionLineItemResponse, DecideReturnInspectionLineItemRequestInput } from '../declarations/types-14.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { GetReturnInspectionResponse } from '../declarations/types-23.js';
export type { ListReturnInspectionsResponse } from '../declarations/types-32.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { ReturnSourceSystem } from '../declarations/types-50.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeDecideReturnInspectionLineItemRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface ReturnInspectionsResource {
    /**
 * Record the accept or reject outcome for inspected quantity. expected_version compares against
 * the inspection version. Accepted quantity becomes dispositionable and satisfies after_inspection
 * release timing.
 *
 * `POST
 * /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide`
 * @param return_inspection_id Flint return inspection id.
 * @param return_inspection_line_item_id Flint return inspection line item id.
 * @see
 * https://developers.withflintpay.com/docs/api/return-inspections#decideReturnInspectionLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnInspections.decideLineItem("retins_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "retinli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {acceptance_decision_reason: "inspection_result",
 * acceptance_status: "accepted"}, { idempotencyKey: idempotencyKey })
 */
    decideLineItem(return_inspection_id: InputValue<string>, return_inspection_line_item_id: InputValue<string>, params: ReturnInspectionsDecideLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnInspection, DecideReturnInspectionLineItemResponse>>;
    /**
 * Retrieve one inspection with its line items, findings, and current or superseded observation
 * status.
 *
 * `GET /v1/return-inspections/{return_inspection_id}`
 * @param return_inspection_id Flint return inspection id.
 * @see https://developers.withflintpay.com/docs/api/return-inspections#getReturnInspection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnInspections.get("retins_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(return_inspection_id: InputValue<string>, params?: ReturnInspectionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnInspection, GetReturnInspectionResponse>>;
    /**
 * List inspection observations. Omitting return_id lists inspections across every Return for the
 * merchant. Default order: created_at descending, then return_inspection_id descending.
 *
 * `GET /v1/return-inspections`
 * @see https://developers.withflintpay.com/docs/api/return-inspections#listReturnInspections
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnInspections.list()
 */
    list(params?: ReturnInspectionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnInspectionsResponse, ListReturnInspectionsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-inspections#listReturnInspections
     */
    listPages(params?: ReturnInspectionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnInspectionsResponse, ListReturnInspectionsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-inspections#listReturnInspections
     */
    listItems(params?: ReturnInspectionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnInspection>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnInspections: ReturnInspectionsResource;
}
