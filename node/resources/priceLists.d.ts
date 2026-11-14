import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { CreatePriceListPricesResponse, CreatePriceListPricesResult } from '../declarations/types-12.js';
import type {
    PriceList,
    PriceListListResponse,
    PriceListPrice,
    PriceListPriceListResponse,
    PriceListPriceResponse,
    PriceListResourceResponse,
    PriceListsCreateParams,
    PriceListsCreatePricesParams,
    PriceListsDeleteParams,
    PriceListsDeletePriceParams,
    PriceListsGetParams,
    PriceListsGetPriceParams,
    PriceListsListParams,
    PriceListsListPricesParams,
    PriceListsUpdateParams,
    PriceListsUpdatePriceParams
} from '../declarations/types-49.js';
import type { RequestOptions } from '../declarations/types-54.js';
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
    PriceListsCreateParams,
    PriceList,
    PriceListResourceResponse,
    PriceListsCreatePricesParams,
    PriceListsDeleteParams,
    PriceListsDeletePriceParams,
    PriceListsGetParams,
    PriceListsGetPriceParams,
    PriceListPrice,
    PriceListPriceResponse,
    PriceListsListPricesParams,
    PriceListPriceListResponse,
    PriceListsListParams,
    PriceListListResponse,
    PriceListsUpdateParams,
    PriceListsUpdatePriceParams,
    PriceListPriceRequestInput,
    PriceListPriceAddition
} from '../declarations/types-49.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    CreatePriceListPricesResult,
    CreatePriceListPricesResponse,
    CreatePriceListRequestInput,
    CreatePriceListPricesRequestInput
} from '../declarations/types-12.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue, MoneyValueInput } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession, QuantityPriceBreakRequestInput, QuantityPriceBreak } from '../declarations/types-52.js';
export type { UpdatePriceListRequestInput, UpdatePriceListPriceRequestInput } from '../declarations/types-67.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeCreatePriceListPricesRequest, makeCreatePriceListRequest } from '../declarations/types-74.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-79.js';
export { makePriceListPriceRequest } from '../declarations/types-80.js';
export { makeQuantityPriceBreakRequest } from '../declarations/types-81.js';
export { makeUpdatePriceListPriceRequest, makeUpdatePriceListRequest } from '../declarations/types-84.js';
export interface PriceListsResource {
    /**
 * Creates a merchant-only price list. Currency is immutable. A customer segment can belong to only
 * one unarchived list, including inactive lists.
 *
 * `POST /v1/price-lists`
 * @see https://developers.withflintpay.com/docs/api/price-lists#createPriceList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.priceLists.create({currency: "USD", customer_segments: ["wholesale"], name: "Wholesale"},
 * { idempotencyKey: idempotencyKey })
 */
    create(params: PriceListsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PriceList, PriceListResourceResponse>>;
    /**
 * Atomically adds 1 to 500 variant prices. on_variant_conflict defaults to return_existing; update
 * replaces an existing price and its full schedule. Each addition reports created, existing, or
 * updated. Returns 201 if any price was created, otherwise 200. One changed batch advances the
 * list version once. A list holds up to 10,000 prices.
 *
 * `POST /v1/price-lists/{price_list_id}/prices`
 * @param price_list_id Flint price list id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#createPriceListPrices
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.priceLists.createPrices("prl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {prices: [{unit_price_money:
 * {amount: "800", currency: "USD"}, variant_id: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV"}]}, {
 * idempotencyKey: idempotencyKey })
 */
    createPrices(price_list_id: InputValue<string>, params: PriceListsCreatePricesParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CreatePriceListPricesResult, CreatePriceListPricesResponse>>;
    /**
 * Soft-deletes a price list, releasing its segment assignments, and returns its full snapshot with
 * status archived. A list referenced by customers returns RESOURCE_IN_USE. Repeating DELETE
 * returns the same archived snapshot; a stale expected_version still returns VERSION_CONFLICT.
 *
 * `DELETE /v1/price-lists/{price_list_id}`
 * @param price_list_id Flint price list id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#deletePriceList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.priceLists.delete("prl_01KEZF7C00EH39P59GN3XMGS2Q", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(price_list_id: InputValue<string>, params?: PriceListsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PriceList, PriceListResourceResponse>>;
    /**
 * Permanently removes this variant price from its list and returns the parent price list with its
 * new count and version. expected_version fences the parent price list. Repeating without the
 * original Idempotency-Key returns RESOURCE_NOT_FOUND.
 *
 * `DELETE /v1/price-lists/{price_list_id}/prices/{price_list_price_id}`
 * @param price_list_id Flint price list id.
 * @param price_list_price_id Flint price list price id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#deletePriceListPrice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.priceLists.deletePrice("prl_01KEZF7C00EH39P59GN3XMGS2Q",
 * "prlp_01KEZF7C007DQ721A29CDR73DN", {}, { idempotencyKey: idempotencyKey })
 */
    deletePrice(price_list_id: InputValue<string>, price_list_price_id: InputValue<string>, params?: PriceListsDeletePriceParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PriceList, PriceListResourceResponse>>;
    /**
 * Returns a price list by ID, including archived lists. Price lists and their segment assignments
 * are merchant-only.
 *
 * `GET /v1/price-lists/{price_list_id}`
 * @param price_list_id Flint price list id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#getPriceList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.priceLists.get("prl_01KEZF7C00EH39P59GN3XMGS2Q")
 */
    get(price_list_id: InputValue<string>, params?: PriceListsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PriceList, PriceListResourceResponse>>;
    /**
 * Returns a variant price and its complete quantity schedule within this price list.
 *
 * `GET /v1/price-lists/{price_list_id}/prices/{price_list_price_id}`
 * @param price_list_id Flint price list id.
 * @param price_list_price_id Flint price list price id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#getPriceListPrice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.priceLists.getPrice("prl_01KEZF7C00EH39P59GN3XMGS2Q", "prlp_01KEZF7C007DQ721A29CDR73DN")
 */
    getPrice(price_list_id: InputValue<string>, price_list_price_id: InputValue<string>, params?: PriceListsGetPriceParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PriceListPrice, PriceListPriceResponse>>;
    /**
 * Lists the variant prices in a price list. Filter by variant_id or product_id. Results default to
 * created_at descending, with price_list_price_id descending as the tiebreak. Default order:
 * created_at descending, then price_list_price_id descending.
 *
 * `GET /v1/price-lists/{price_list_id}/prices`
 * @param price_list_id Flint price list id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#listPriceListPrices
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.priceLists.listPrices("prl_01KEZF7C00EH39P59GN3XMGS2Q")
 */
    listPrices(price_list_id: InputValue<string>, params?: PriceListsListPricesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PriceListPriceListResponse, PriceListPriceListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/price-lists#listPriceListPrices
     */
    listPricesPages(price_list_id: InputValue<string>, params?: PriceListsListPricesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PriceListPriceListResponse, PriceListPriceListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/price-lists#listPriceListPrices
     */
    listPricesItems(price_list_id: InputValue<string>, params?: PriceListsListPricesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PriceListPrice>;
    /**
 * Lists price lists. Archived lists are excluded unless the status filter explicitly names
 * archived. Results default to created_at descending, with price_list_id descending as the
 * tiebreak. Default order: created_at descending, then price_list_id descending.
 *
 * `GET /v1/price-lists`
 * @see https://developers.withflintpay.com/docs/api/price-lists#listPriceLists
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.priceLists.list()
 */
    list(params?: PriceListsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PriceListListResponse, PriceListListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/price-lists#listPriceLists
     */
    listPages(params?: PriceListsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PriceListListResponse, PriceListListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/price-lists#listPriceLists
     */
    listItems(params?: PriceListsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PriceList>;
    /**
 * Updates only the fields supplied. Send customer_segments: [] to clear segment assignments.
 * Inactive lists remain assignable but do not provide prices. Send expected_version to reject a
 * stale write. Archived lists cannot be changed.
 *
 * `PATCH /v1/price-lists/{price_list_id}`
 * @param price_list_id Flint price list id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#updatePriceList
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.priceLists.update("prl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Wholesale"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(price_list_id: InputValue<string>, params: PriceListsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PriceList, PriceListResourceResponse>>;
    /**
 * Updates a variant price or its quantity schedule. Omit quantity_price_breaks to preserve it;
 * send [] to clear it. The resulting complete schedule must remain valid. expected_version fences
 * this child price; an actual change also advances the parent list version once.
 *
 * `PATCH /v1/price-lists/{price_list_id}/prices/{price_list_price_id}`
 * @param price_list_id Flint price list id.
 * @param price_list_price_id Flint price list price id.
 * @see https://developers.withflintpay.com/docs/api/price-lists#updatePriceListPrice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.priceLists.updatePrice("prl_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "prlp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {unit_price_money: {amount: "750", currency: "USD"}}, {
 * idempotencyKey: idempotencyKey })
 */
    updatePrice(price_list_id: InputValue<string>, price_list_price_id: InputValue<string>, params: PriceListsUpdatePriceParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PriceListPrice, PriceListPriceResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly priceLists: PriceListsResource;
}
