import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { DecideReturnInspectionLineItemRequestInput } from '../declarations/types-11.js';
import type { GetReturnInspectionResponse } from '../declarations/types-18.js';
import type { ListReturnInspectionsResponse } from '../declarations/types-28.js';
import type {
    RequestOptions,
    ReturnInspection,
    ReturnInspectionsDecideLineItemInput,
    ReturnInspectionsGetInput,
    ReturnInspectionsListInput
} from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { DecideReturnInspectionLineItemRequestInput } from '../declarations/types-11.js';
export type {
    RequestOptions,
    ReturnInspection,
    ReturnInspectionsDecideLineItemInput,
    ReturnInspectionsGetInput,
    ReturnInspectionsListInput,
    ReturnDisposition,
    ReturnActor,
    ReturnInspectionLineItem,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { GetReturnInspectionResponse } from '../declarations/types-18.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ListReturnInspectionsResponse } from '../declarations/types-28.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ReturnSourceSystem } from '../declarations/types-42.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeDecideReturnInspectionLineItemRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeReturnSourceSystem } from '../declarations/types-70.js';
export interface ReturnInspectionsResource {
    /**
 * Record the accept or reject outcome for inspected quantity. expected_version compares against
 * the inspection version. Accepted quantity becomes dispositionable and satisfies after_inspection
 * release timing.
 * @see reference/returnInspections.md#returninspectionsdecidelineitem
 * POST
 * /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnInspections.decideLineItem("example", "example", {acceptance_decision_reason:
 * "inspection_result", acceptance_status: "accepted"}, { idempotencyKey: idempotencyKey })
 */
    decideLineItem(return_inspection_id: InputValue<string>, return_inspection_line_item_id: InputValue<string>, params: (InputValue<DecideReturnInspectionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ReturnInspection>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnInspections.md#returninspectionsdecidelineitem
     */
    decideLineItemWithResponse(return_inspection_id: InputValue<string>, return_inspection_line_item_id: InputValue<string>, params: (InputValue<DecideReturnInspectionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GetReturnInspectionResponse>>;
    /**
 * Retrieve one inspection with its line items, findings, and current or superseded observation
 * status.
 * @see reference/returnInspections.md#returninspectionsget
 * GET /v1/return-inspections/{return_inspection_id}
 * @example
 * client.returnInspections.get("example")
 */
    get(return_inspection_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ReturnInspection>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnInspections.md#returninspectionsget
     */
    getWithResponse(return_inspection_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GetReturnInspectionResponse>>;
    /**
 * List inspection observations. Omitting return_id lists inspections across every Return for the
 * merchant. Newest first: created_at descending, with return_inspection_id descending as the
 * tiebreak.
 * @see reference/returnInspections.md#returninspectionslist
 * GET /v1/return-inspections
 * @example
 * client.returnInspections.list()
 */
    list(params?: {
        "acceptance_status"?: InputValue<Array<"accepted" | "rejected" | "review_required">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "inspected_after"?: InputValue<string | globalThis.Date>;
        "inspected_before"?: InputValue<string | globalThis.Date>;
        "inspection_location_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnInspectionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnInspections.md#returninspectionslist
     */
    listWithResponse(params?: {
        "acceptance_status"?: InputValue<Array<"accepted" | "rejected" | "review_required">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "inspected_after"?: InputValue<string | globalThis.Date>;
        "inspected_before"?: InputValue<string | globalThis.Date>;
        "inspection_location_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ListReturnInspectionsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returnInspections.md#returninspectionslist
     */
    listPages(params?: {
        "acceptance_status"?: InputValue<Array<"accepted" | "rejected" | "review_required">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "inspected_after"?: InputValue<string | globalThis.Date>;
        "inspected_before"?: InputValue<string | globalThis.Date>;
        "inspection_location_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnInspectionsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returnInspections.md#returninspectionslist
     */
    listPagesWithResponse(params?: {
        "acceptance_status"?: InputValue<Array<"accepted" | "rejected" | "review_required">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "inspected_after"?: InputValue<string | globalThis.Date>;
        "inspected_before"?: InputValue<string | globalThis.Date>;
        "inspection_location_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ListReturnInspectionsResponse>>;
    /** Iterate items lazily.
     * @see reference/returnInspections.md#returninspectionslist
     */
    listItems(params?: {
        "acceptance_status"?: InputValue<Array<"accepted" | "rejected" | "review_required">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "external_reference_id"?: InputValue<string>;
        "inspected_after"?: InputValue<string | globalThis.Date>;
        "inspected_before"?: InputValue<string | globalThis.Date>;
        "inspection_location_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_id"?: InputValue<string>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
        "status"?: InputValue<Array<"current" | "superseded">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnInspection>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnInspections: ReturnInspectionsResource;
}
