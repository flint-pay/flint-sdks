import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { DecideReturnInspectionLineItemResponse } from '../declarations/types-16.js';
import type { GetReturnInspectionResponse } from '../declarations/types-26.js';
import type { ListReturnInspectionsResponse } from '../declarations/types-35.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type {
    ReturnInspection,
    ReturnInspectionsDecideLineItemParams,
    ReturnInspectionsGetParams,
    ReturnInspectionsListParams
} from '../declarations/types-55.js';
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
    ReturnInspectionsDecideLineItemParams,
    ReturnInspection,
    ReturnInspectionsGetParams,
    ReturnInspectionsListParams,
    ReturnDisposition,
    ReturnActor,
    ReturnInspectionLineItem
} from '../declarations/types-55.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { DecideReturnInspectionLineItemResponse, DecideReturnInspectionLineItemRequestInput } from '../declarations/types-16.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { GetReturnInspectionResponse } from '../declarations/types-26.js';
export type { ListReturnInspectionsResponse } from '../declarations/types-35.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap } from '../declarations/types-38.js';
export type { ReturnSourceSystem } from '../declarations/types-57.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeDecideReturnInspectionLineItemRequest } from '../declarations/types-75.js';
export { makeMoneyValue } from '../declarations/types-78.js';
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
 * client.returnInspections.decideLineItem("retins_01KEZF7C00WPB0BR4WTT7CMSB8",
 * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4", {acceptance_decision_reason: "manual_review",
 * acceptance_status: "accepted", expected_version: 1}, { idempotencyKey: idempotencyKey })
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
 * client.returnInspections.get("retins_01KEZF7C00WPB0BR4WTT7CMSB8")
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
