import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateReturnReasonRequestInput } from '../declarations/types-8.js';
import type { GetReturnReasonResponse } from '../declarations/types-18.js';
import type { ListReturnReasonsResponse } from '../declarations/types-28.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type {
    ReturnReason,
    ReturnReasonsCreateInput,
    ReturnReasonsGetInput,
    ReturnReasonsListInput,
    ReturnReasonsRemoveInput,
    ReturnReasonsUpdateInput
} from '../declarations/types-41.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateReturnReasonRequestInput } from '../declarations/types-49.js';
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
export type { CreateReturnReasonRequestInput, CreateReturnReasonRequest } from '../declarations/types-8.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    ReturnReason,
    ReturnReasonsCreateInput,
    ReturnReasonsRemoveInput,
    ReturnReasonsGetInput,
    ReturnReasonsListInput,
    ReturnReasonsUpdateInput
} from '../declarations/types-41.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { GetReturnReasonResponse } from '../declarations/types-18.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ListReturnReasonsResponse } from '../declarations/types-28.js';
export type { UpdateReturnReasonRequestInput } from '../declarations/types-49.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateReturnReasonRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateReturnReasonRequest } from '../declarations/types-72.js';
export interface ReturnReasonsResource {
    /**
 * Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection
 * findings, decline reasons, and Refund reasons. Flint handles and all existing merchant handles,
 * including archived reasons, are reserved. A conflicting handle returns 409 ALREADY_EXISTS.
 * @see reference/returnReasons.md#returnreasonscreate
 * POST /v1/return-reasons
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.create({handle: "example", name: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateReturnReasonRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ReturnReason>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReasons.md#returnreasonscreate
     */
    createWithResponse(params: (InputValue<CreateReturnReasonRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GetReturnReasonResponse>>;
    /**
 * Retire a Return reason so buyers can no longer select it. Returns that already recorded it keep
 * the frozen reason name. Flint reasons cannot be archived; set status to inactive instead.
 * Archived merchant handles remain reserved.
 * @see reference/returnReasons.md#returnreasonsremove
 * DELETE /v1/return-reasons/{return_reason_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(return_reason_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ReturnReason>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReasons.md#returnreasonsremove
     */
    removeWithResponse(return_reason_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GetReturnReasonResponse>>;
    /**
 * Retrieve one Return reason with its handle, category handles, and status.
 * @see reference/returnReasons.md#returnreasonsget
 * GET /v1/return-reasons/{return_reason_id}
 * @example
 * client.returnReasons.get("example")
 */
    get(return_reason_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ReturnReason>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReasons.md#returnreasonsget
     */
    getWithResponse(return_reason_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GetReturnReasonResponse>>;
    /**
 * List Return reasons, including Flint-provided defaults and merchant-defined reasons. Newest
 * first: created_at descending, with return_reason_id descending as the tiebreak. Flint reasons
 * have a created_at of 1970-01-01T00:00:00Z, so they follow your own.
 * @see reference/returnReasons.md#returnreasonslist
 * GET /v1/return-reasons
 * @example
 * client.returnReasons.list()
 */
    list(params?: {
        "external_reference_id"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "source"?: InputValue<Array<"flint" | "merchant">>;
        "status"?: InputValue<Array<"active" | "archived" | "inactive">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnReasonsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReasons.md#returnreasonslist
     */
    listWithResponse(params?: {
        "external_reference_id"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "source"?: InputValue<Array<"flint" | "merchant">>;
        "status"?: InputValue<Array<"active" | "archived" | "inactive">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ListReturnReasonsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returnReasons.md#returnreasonslist
     */
    listPages(params?: {
        "external_reference_id"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "source"?: InputValue<Array<"flint" | "merchant">>;
        "status"?: InputValue<Array<"active" | "archived" | "inactive">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnReasonsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returnReasons.md#returnreasonslist
     */
    listPagesWithResponse(params?: {
        "external_reference_id"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "source"?: InputValue<Array<"flint" | "merchant">>;
        "status"?: InputValue<Array<"active" | "archived" | "inactive">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ListReturnReasonsResponse>>;
    /** Iterate items lazily.
     * @see reference/returnReasons.md#returnreasonslist
     */
    listItems(params?: {
        "external_reference_id"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "source"?: InputValue<Array<"flint" | "merchant">>;
        "status"?: InputValue<Array<"active" | "archived" | "inactive">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnReason>;
    /**
 * Update a Return reason. Send null to clear description. A present category_handles array
 * replaces the existing set. Set status to active or inactive to control availability. Flint
 * reasons accept only status and expected_version; create your own reason to use different
 * wording. Use DELETE to archive a merchant reason.
 * @see reference/returnReasons.md#returnreasonsupdate
 * PATCH /v1/return-reasons/{return_reason_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_reason_id: InputValue<string>, params: (InputValue<UpdateReturnReasonRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ReturnReason>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnReasons.md#returnreasonsupdate
     */
    updateWithResponse(return_reason_id: InputValue<string>, params: (InputValue<UpdateReturnReasonRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GetReturnReasonResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnReasons: ReturnReasonsResource;
}
