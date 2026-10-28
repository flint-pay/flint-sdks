import type { InputValue } from '../runtime.js';
import type { CancelReturnDispositionRequestInput } from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { GetReturnDispositionResponse } from '../declarations/types-20.js';
import type { ListReturnDispositionsResponse } from '../declarations/types-30.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type {
    RetryReturnDispositionRequestInput,
    ReturnDisposition,
    ReturnDispositionsCancelInput,
    ReturnDispositionsGetInput,
    ReturnDispositionsListInput,
    ReturnDispositionsRetryInput
} from '../declarations/types-43.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CancelReturnDispositionRequestInput } from '../declarations/types-3.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    ReturnDisposition,
    RetryReturnDispositionRequestInput,
    ReturnDispositionsCancelInput,
    ReturnDispositionsGetInput,
    ReturnDispositionsListInput,
    ReturnDispositionsRetryInput,
    ReturnActor,
    ResponseWarning
} from '../declarations/types-43.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { GetReturnDispositionResponse } from '../declarations/types-20.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { ListReturnDispositionsResponse } from '../declarations/types-30.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { MetadataMap } from '../declarations/types-32.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeCancelReturnDispositionRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeRetryReturnDispositionRequest } from '../declarations/types-75.js';
export interface ReturnDispositionsResource {
    /**
 * Cancel a disposition that has not started its inventory effect. Cancellation is refused once the
 * effect is processing.
 * @see reference/returnDispositions.md#returndispositionscancel
 * POST /v1/return-dispositions/{return_disposition_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnDispositions.cancel("example", {reason: "created_in_error"}, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(return_disposition_id: InputValue<string>, params: (InputValue<CancelReturnDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnDisposition>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnDispositions.md#returndispositionscancel
     */
    cancelWithResponse(return_disposition_id: InputValue<string>, params: (InputValue<CancelReturnDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnDispositionResponse>>;
    /**
 * Retrieve one disposition with its type, destination, quantity, status, and any linked inventory
 * effect.
 * @see reference/returnDispositions.md#returndispositionsget
 * GET /v1/return-dispositions/{return_disposition_id}
 * @example
 * client.returnDispositions.get("example")
 */
    get(return_disposition_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReturnDisposition>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnDispositions.md#returndispositionsget
     */
    getWithResponse(return_disposition_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnDispositionResponse>>;
    /**
 * List merchandise dispositions. Omitting return_id lists dispositions across every Return for the
 * merchant. Newest first: created_at descending, with return_disposition_id descending as the
 * tiebreak. Default order: created_at descending, then return_disposition_id descending.
 * @see reference/returnDispositions.md#returndispositionslist
 * GET /v1/return-dispositions
 * @example
 * client.returnDispositions.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "disposition_type"?: InputValue<Array<"sellable"
            | "quality_control"
            | "damaged"
            | "quarantined"
            | "repair"
            | "refurbish"
            | "liquidate"
            | "donate"
            | "discard"
            | "return_to_buyer"
            | "lost">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "inventory_location_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "replaces_return_disposition_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_inspection_line_item_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_line_item_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnDispositionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnDispositions.md#returndispositionslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "disposition_type"?: InputValue<Array<"sellable"
            | "quality_control"
            | "damaged"
            | "quarantined"
            | "repair"
            | "refurbish"
            | "liquidate"
            | "donate"
            | "discard"
            | "return_to_buyer"
            | "lost">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "inventory_location_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "replaces_return_disposition_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_inspection_line_item_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_line_item_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnDispositionsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returnDispositions.md#returndispositionslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "disposition_type"?: InputValue<Array<"sellable"
            | "quality_control"
            | "damaged"
            | "quarantined"
            | "repair"
            | "refurbish"
            | "liquidate"
            | "donate"
            | "discard"
            | "return_to_buyer"
            | "lost">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "inventory_location_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "replaces_return_disposition_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_inspection_line_item_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_line_item_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnDispositionsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returnDispositions.md#returndispositionslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "disposition_type"?: InputValue<Array<"sellable"
            | "quality_control"
            | "damaged"
            | "quarantined"
            | "repair"
            | "refurbish"
            | "liquidate"
            | "donate"
            | "discard"
            | "return_to_buyer"
            | "lost">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "inventory_location_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "replaces_return_disposition_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_inspection_line_item_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_line_item_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnDispositionsResponse>>;
    /** Iterate items lazily.
     * @see reference/returnDispositions.md#returndispositionslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "disposition_type"?: InputValue<Array<"sellable"
            | "quality_control"
            | "damaged"
            | "quarantined"
            | "repair"
            | "refurbish"
            | "liquidate"
            | "donate"
            | "discard"
            | "return_to_buyer"
            | "lost">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "inventory_location_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "replaces_return_disposition_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_inspection_line_item_id"?: InputValue<string>;
        "return_line_item_id"?: InputValue<string>;
        "return_receipt_line_item_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnDisposition>;
    /**
 * Retry a failed disposition with the same immutable intent. Disposition and effect identities are
 * preserved, so a retry does not move stock twice.
 * @see reference/returnDispositions.md#returndispositionsretry
 * POST /v1/return-dispositions/{return_disposition_id}/retry
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnDispositions.retry("example", {reason: "dependency_recovered"}, { idempotencyKey:
 * idempotencyKey })
 */
    retry(return_disposition_id: InputValue<string>, params: (InputValue<RetryReturnDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnDisposition>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnDispositions.md#returndispositionsretry
     */
    retryWithResponse(return_disposition_id: InputValue<string>, params: (InputValue<RetryReturnDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnDispositionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnDispositions: ReturnDispositionsResource;
}
