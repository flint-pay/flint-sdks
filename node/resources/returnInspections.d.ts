import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { CreateReturnInspectionResponse } from '../declarations/types-13.js';
import type { DecideReturnInspectionLineItemResponse } from '../declarations/types-17.js';
import type { GetReturnInspectionResponse } from '../declarations/types-28.js';
import type { ListReturnInspectionsResponse } from '../declarations/types-40.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type {
    ReturnInspection,
    ReturnInspectionsCreateParams,
    ReturnInspectionsDecideLineItemParams,
    ReturnInspectionsGetParams,
    ReturnInspectionsListParams
} from '../declarations/types-63.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
    ReturnInspectionsCreateParams,
    ReturnInspection,
    ReturnInspectionsDecideLineItemParams,
    ReturnInspectionsGetParams,
    ReturnInspectionsListParams,
    ReturnInspectionLineItemRequestInput,
    ReturnDisposition,
    ReturnInspectionLineItem
} from '../declarations/types-63.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-80.js';
export type { RequestOptions, ReturnActor, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { CreateReturnInspectionResponse, CreateReturnInspectionRequestInput } from '../declarations/types-13.js';
export type { DecideReturnInspectionLineItemResponse, DecideReturnInspectionLineItemRequestInput } from '../declarations/types-17.js';
export type { GetReturnInspectionResponse } from '../declarations/types-28.js';
export type { ListReturnInspectionsResponse } from '../declarations/types-40.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { ReturnSourceSystemRequestInput } from '../declarations/types-66.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap } from '../declarations/types-43.js';
export type { ReturnSourceSystem } from '../declarations/types-65.js';
export type { NextAction, MoneyValue } from '../declarations/types-44.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export { makeCreateReturnInspectionRequest } from '../declarations/types-84.js';
export { makeDecideReturnInspectionLineItemRequest } from '../declarations/types-85.js';
export { makeMoneyValue } from '../declarations/types-88.js';
export { makeReturnInspectionLineItemRequest, makeReturnSourceSystemRequest } from '../declarations/types-91.js';
export interface ReturnInspectionsResource {
    /**
 * Record an immutable inspection observation. Corrections supersede an earlier inspection instead
 * of editing physical history. Read inspections with `GET /v1/return-inspections?return_id=` or
 * expand `return_inspections` on `client.returns.get`.
 *
 * `POST /v1/return-inspections`
 * @see https://developers.withflintpay.com/docs/api/return-inspections#createReturnInspection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnInspections.create({inspected_at: "2026-09-08T14:15:00Z", inspection_location_id:
 * "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", line_items: [{acceptance_status: "accepted", condition:
 * "unopened", finding_codes: ["matches_expected_item"], quantity: 1, return_receipt_line_item_id:
 * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"}], return_id: "ret_01KEZF7C00VDTZH2NK73DBK2HZ",
 * return_receipt_id: "retrc_01KEZF7C008V637A0ZWN32RQ7A", source_system: {source_system_type:
 * "manual"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: ReturnInspectionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnInspection, CreateReturnInspectionResponse>>;
    /**
 * Record the accept or reject outcome for inspected quantity. expected_version compares against
 * the inspection version. Accepted quantity becomes dispositionable and satisfies after_inspection
 * release timing.
 *
 * `POST
 * /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide`
 * @param return_inspection_id Flint return inspection id. Must be a valid ID with prefix retins_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @param return_inspection_line_item_id Flint return inspection line item id. Must be a valid ID
 * with prefix retinli_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE;
 * well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND.
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
 * @param return_inspection_id Flint return inspection id. Must be a valid ID with prefix retins_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
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
