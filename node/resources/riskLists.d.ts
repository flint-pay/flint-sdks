import type { InputValue } from '../runtime.js';
import type { AddRiskListItemsRequestInput, AddRiskListItemsResponse, AddRiskListItemsResult } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateRiskListRequestInput } from '../declarations/types-10.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type {
    RiskList,
    RiskListItem,
    RiskListItemListResponse,
    RiskListItemResponse,
    RiskListListResponse,
    RiskListResourceResponse,
    RiskListsAddItemsInput,
    RiskListsCreateInput
} from '../declarations/types-45.js';
import type {
    RiskListsDeleteItemInput,
    RiskListsGetInput,
    RiskListsGetItemInput,
    RiskListsListInput,
    RiskListsListRiskListItemsInput,
    RiskListsRemoveInput,
    RiskListsUpdateInput,
    SdkResponse
} from '../declarations/types-46.js';
import type { UpdateRiskListRequestInput } from '../declarations/types-52.js';
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
export type { CreateRiskListRequestInput } from '../declarations/types-10.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta } from '../declarations/types-42.js';
export type {
    RiskList,
    RiskListResourceResponse,
    RiskListItem,
    RiskListItemResponse,
    RiskListItemListResponse,
    RiskListListResponse,
    RiskListsCreateInput,
    RiskListsAddItemsInput,
    RiskListItemAddition
} from '../declarations/types-45.js';
export type {
    SdkResponse,
    RiskListsRemoveInput,
    RiskListsDeleteItemInput,
    RiskListsGetInput,
    RiskListsGetItemInput,
    RiskListsListRiskListItemsInput,
    RiskListsListInput,
    RiskListsUpdateInput
} from '../declarations/types-46.js';
export type {
    AddRiskListItemsRequestInput,
    AddRiskListItemsResult,
    AddRiskListItemsResponse,
    AuthMode,
    AddRiskListItemsRequest
} from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { UpdateRiskListRequestInput } from '../declarations/types-52.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeAddRiskListItemsRequest } from '../declarations/types-65.js';
export { makeCreateRiskListRequest } from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdateRiskListRequest } from '../declarations/types-78.js';
export interface RiskListsResource {
    /**
 * Creates an empty list. Rules refer to it by alias, which can't be changed or reused, even after
 * the list is archived. item_type decides how values are validated and compared.
 * @see reference/riskLists.md#risklistscreate
 * POST /v1/risk-lists
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.create({alias: "example", name: "example", item_type: "card_fingerprint"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateRiskListRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RiskList>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistscreate
     */
    createWithResponse(params: (InputValue<CreateRiskListRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RiskListResourceResponse>>;
    /**
 * Adds up to 500 values, each validated and normalized for the list's item_type. The additions
 * array reports each value's outcome: values already on the list come back as existing, so a batch
 * is safe to resend. Returns 201 when at least one value was added and 200 when none were.
 * Payments see the change from the next attempt.
 * @see reference/riskLists.md#risklistsadditems
 * POST /v1/risk-lists/{risk_list_id}/items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.addItems("example", {values: ["sdk-example"]}, { idempotencyKey: idempotencyKey
 * })
 */
    addItems(risk_list_id: InputValue<string>, params: (InputValue<AddRiskListItemsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<AddRiskListItemsResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistsadditems
     */
    addItemsWithResponse(risk_list_id: InputValue<string>, params: (InputValue<AddRiskListItemsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<AddRiskListItemsResponse>>;
    /**
 * Archives a list you created. Fails with 409 RESOURCE_IN_USE while an active rule names it.
 * Flint-managed lists return 409 ACTION_NOT_ALLOWED with reason managed_externally. Archived lists
 * can't be used by rules or edited. Items can still be added to and removed from active
 * Flint-managed lists.
 * @see reference/riskLists.md#risklistsremove
 * DELETE /v1/risk-lists/{risk_list_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(risk_list_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RiskList>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistsremove
     */
    removeWithResponse(risk_list_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RiskListResourceResponse>>;
    /**
 * Removes a value from a list permanently. Payments see the change from the next attempt.
 * @see reference/riskLists.md#risklistsdeleteitem
 * DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.deleteItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteItem(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RiskListItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistsdeleteitem
     */
    deleteItemWithResponse(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RiskListItemResponse>>;
    /**
 * Retrieves a risk list. item_count is its current number of values.
 * @see reference/riskLists.md#risklistsget
 * GET /v1/risk-lists/{risk_list_id}
 * @example
 * client.riskLists.get("example")
 */
    get(risk_list_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskList>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistsget
     */
    getWithResponse(risk_list_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskListResourceResponse>>;
    /**
 * Retrieves one value on a list.
 * @see reference/riskLists.md#risklistsgetitem
 * GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}
 * @example
 * client.riskLists.getItem("example", "example")
 */
    getItem(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskListItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistsgetitem
     */
    getItemWithResponse(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskListItemResponse>>;
    /**
 * Lists a list's values, newest first. Default order: created_at descending, then
 * risk_list_item_id descending.
 * @see reference/riskLists.md#risklistslistrisklistitems
 * GET /v1/risk-lists/{risk_list_id}/items
 * @example
 * client.riskLists.listRiskListItems("example")
 */
    listRiskListItems(risk_list_id: InputValue<string>, params?: {
        "value"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskListItemListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistslistrisklistitems
     */
    listRiskListItemsWithResponse(risk_list_id: InputValue<string>, params?: {
        "value"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskListItemListResponse>>;
    /** Iterate pages lazily.
     * @see reference/riskLists.md#risklistslistrisklistitems
     */
    listRiskListItemsPages(risk_list_id: InputValue<string>, params?: {
        "value"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskListItemListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/riskLists.md#risklistslistrisklistitems
     */
    listRiskListItemsPagesWithResponse(risk_list_id: InputValue<string>, params?: {
        "value"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<RiskListItemListResponse>>;
    /** Iterate items lazily.
     * @see reference/riskLists.md#risklistslistrisklistitems
     */
    listRiskListItemsItems(risk_list_id: InputValue<string>, params?: {
        "value"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskListItem>;
    /**
 * Lists risk lists, newest first, including Flint's default block lists. Archived lists appear
 * only when status includes archived. Default order: created_at descending, then risk_list_id
 * descending.
 * @see reference/riskLists.md#risklistslist
 * GET /v1/risk-lists
 * @example
 * client.riskLists.list()
 */
    list(params?: {
        "alias"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RiskListListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistslist
     */
    listWithResponse(params?: {
        "alias"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RiskListListResponse>>;
    /** Iterate pages lazily.
     * @see reference/riskLists.md#risklistslist
     */
    listPages(params?: {
        "alias"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskListListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/riskLists.md#risklistslist
     */
    listPagesWithResponse(params?: {
        "alias"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<RiskListListResponse>>;
    /** Iterate items lazily.
     * @see reference/riskLists.md#risklistslist
     */
    listItems(params?: {
        "alias"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskList>;
    /**
 * Renames a list you created. Flint-managed lists return 409 ACTION_NOT_ALLOWED with reason
 * managed_externally. Items can still be added to and removed from active Flint-managed lists.
 * @see reference/riskLists.md#risklistsupdate
 * PATCH /v1/risk-lists/{risk_list_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.update("example", {name: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(risk_list_id: InputValue<string>, params: (InputValue<UpdateRiskListRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RiskList>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/riskLists.md#risklistsupdate
     */
    updateWithResponse(risk_list_id: InputValue<string>, params: (InputValue<UpdateRiskListRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RiskListResourceResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly riskLists: RiskListsResource;
}
