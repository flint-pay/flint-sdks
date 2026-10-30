import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AddRiskListItemsResponse, AddRiskListItemsResult } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    RiskList,
    RiskListItem,
    RiskListItemListResponse,
    RiskListItemResponse,
    RiskListListResponse,
    RiskListResourceResponse,
    RiskListsCreateItemsParams,
    RiskListsCreateParams,
    RiskListsDeleteItemParams,
    RiskListsDeleteParams,
    RiskListsGetItemParams,
    RiskListsGetParams,
    RiskListsListParams,
    RiskListsListRiskListItemsParams
} from '../declarations/types-51.js';
import type { RiskListsUpdateParams } from '../declarations/types-52.js';
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
    RiskListsCreateParams,
    RiskList,
    RiskListResourceResponse,
    RiskListsCreateItemsParams,
    RiskListsDeleteParams,
    RiskListsDeleteItemParams,
    RiskListItem,
    RiskListItemResponse,
    RiskListsGetParams,
    RiskListsGetItemParams,
    RiskListsListRiskListItemsParams,
    RiskListItemListResponse,
    RiskListsListParams,
    RiskListListResponse,
    RiskListItemAddition
} from '../declarations/types-51.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type {
    AddRiskListItemsResult,
    AddRiskListItemsResponse,
    AuthMode,
    AddRiskListItemsRequestInput,
    AddRiskListItemsRequest
} from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RiskListsUpdateParams } from '../declarations/types-52.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateRiskListRequestInput } from '../declarations/types-11.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateRiskListRequestInput, UpdateRiskListRequest } from '../declarations/types-60.js';
export { makeAddRiskListItemsRequest } from '../declarations/types-61.js';
export { makeCreateRiskListRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateRiskListRequest } from '../declarations/types-74.js';
export interface RiskListsResource {
    /**
 * Creates an empty list. Rules refer to it by alias, which can't be changed or reused, even after
 * the list is archived. item_type decides how values are validated and compared.
 *
 * `POST /v1/risk-lists`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#createRiskList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.create({alias: "example", name: "example", item_type: "card_fingerprint"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: RiskListsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RiskList, RiskListResourceResponse>>;
    /**
 * Adds up to 500 values, each validated and normalized for the list's item_type. The additions
 * array reports each value's outcome: values already on the list come back as existing, so a batch
 * is safe to resend. Returns 201 when at least one value was added and 200 when none were.
 * Payments see the change from the next attempt.
 *
 * `POST /v1/risk-lists/{risk_list_id}/items`
 * @param risk_list_id Flint risk list ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#createRiskListItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.createItems("rl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {values: ["sdk-example"]}, {
 * idempotencyKey: idempotencyKey })
 */
    createItems(risk_list_id: InputValue<string>, params: RiskListsCreateItemsParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<AddRiskListItemsResult, AddRiskListItemsResponse>>;
    /**
 * Archives a list you created. Fails with 409 RESOURCE_IN_USE while an active rule names it.
 * Flint-managed lists return 409 ACTION_NOT_ALLOWED with reason managed_externally. Archived lists
 * can't be used by rules or edited. Items can still be added to and removed from active
 * Flint-managed lists.
 *
 * `DELETE /v1/risk-lists/{risk_list_id}`
 * @param risk_list_id Flint risk list ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#deleteRiskList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.delete("rl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    delete(risk_list_id: InputValue<string>, params?: RiskListsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RiskList, RiskListResourceResponse>>;
    /**
 * Removes a value from a list permanently. Payments see the change from the next attempt.
 *
 * `DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`
 * @param risk_list_id Flint risk list ID.
 * @param risk_list_item_id Flint risk list item ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#deleteRiskListItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.deleteItem("rl_01ARZ3NDEKTSV4RRFFQ69G5FAV", "rli_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {}, { idempotencyKey: idempotencyKey })
 */
    deleteItem(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: RiskListsDeleteItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RiskListItem, RiskListItemResponse>>;
    /**
 * Retrieves a risk list. item_count is its current number of values.
 *
 * `GET /v1/risk-lists/{risk_list_id}`
 * @param risk_list_id Flint risk list ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getRiskList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskLists.get("rl_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(risk_list_id: InputValue<string>, params?: RiskListsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskList, RiskListResourceResponse>>;
    /**
 * Retrieves one value on a list.
 *
 * `GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`
 * @param risk_list_id Flint risk list ID.
 * @param risk_list_item_id Flint risk list item ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getRiskListItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskLists.getItem("rl_01ARZ3NDEKTSV4RRFFQ69G5FAV", "rli_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getItem(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: RiskListsGetItemParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskListItem, RiskListItemResponse>>;
    /**
 * Lists a list's values, newest first. Default order: created_at descending, then
 * risk_list_item_id descending.
 *
 * `GET /v1/risk-lists/{risk_list_id}/items`
 * @param risk_list_id Flint risk list ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskListItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskLists.listRiskListItems("rl_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listRiskListItems(risk_list_id: InputValue<string>, params?: RiskListsListRiskListItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskListItemListResponse, RiskListItemListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskListItems
     */
    listRiskListItemsPages(risk_list_id: InputValue<string>, params?: RiskListsListRiskListItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<RiskListItemListResponse, RiskListItemListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskListItems
     */
    listRiskListItemsItems(risk_list_id: InputValue<string>, params?: RiskListsListRiskListItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskListItem>;
    /**
 * Lists risk lists, newest first, including Flint's default block lists. Archived lists appear
 * only when status includes archived. Default order: created_at descending, then risk_list_id
 * descending.
 *
 * `GET /v1/risk-lists`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskLists
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.riskLists.list()
 */
    list(params?: RiskListsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RiskListListResponse, RiskListListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskLists
     */
    listPages(params?: RiskListsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<RiskListListResponse, RiskListListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listRiskLists
     */
    listItems(params?: RiskListsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RiskList>;
    /**
 * Renames a list you created. Flint-managed lists return 409 ACTION_NOT_ALLOWED with reason
 * managed_externally. Items can still be added to and removed from active Flint-managed lists.
 *
 * `PATCH /v1/risk-lists/{risk_list_id}`
 * @param risk_list_id Flint risk list ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#updateRiskList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.update("rl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Review list"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(risk_list_id: InputValue<string>, params: RiskListsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RiskList, RiskListResourceResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly riskLists: RiskListsResource;
}
