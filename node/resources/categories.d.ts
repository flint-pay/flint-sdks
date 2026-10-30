import type { WithResponseInfo, InputValue } from '../runtime.js';
import type {
    CategoriesCreateParams,
    CategoriesDeleteParams,
    CategoriesGetParams,
    CategoriesListParams,
    CategoriesUpdateParams,
    Category,
    CategoryListResponse,
    CategoryResponse
} from '../declarations/types-4.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    CategoriesCreateParams,
    Category,
    CategoryResponse,
    CategoriesDeleteParams,
    CategoriesGetParams,
    CategoriesListParams,
    CategoryListResponse,
    CategoriesUpdateParams
} from '../declarations/types-4.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateCategoryRequestInput } from '../declarations/types-6.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateCategoryRequestInput } from '../declarations/types-58.js';
export { makeCreateCategoryRequest } from '../declarations/types-63.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateCategoryRequest } from '../declarations/types-73.js';
export interface CategoriesResource {
    /**
 * Creates a reusable category. If handle is omitted, Flint derives it from the name and never
 * changes it on rename.
 *
 * `POST /v1/categories`
 * @see https://developers.withflintpay.com/docs/api/categories#createCategory
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.create({handle: "events", name: "Events"}, { idempotencyKey: idempotencyKey })
 */
    create(params: CategoriesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Category, CategoryResponse>>;
    /**
 * Permanently deletes an unreferenced category and returns it with status deleted. Deleted
 * categories cannot be retrieved or listed. Remove all product, bundle, promotion, and return
 * configuration references before deleting.
 *
 * `DELETE /v1/categories/{category_id}`
 * @param category_id Flint category ID.
 * @see https://developers.withflintpay.com/docs/api/categories#deleteCategory
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.delete("ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(category_id: InputValue<string>, params?: CategoriesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Category, CategoryResponse>>;
    /**
 * Get category.
 *
 * `GET /v1/categories/{category_id}`
 * @param category_id Flint category ID.
 * @see https://developers.withflintpay.com/docs/api/categories#getCategory
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.categories.get("ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(category_id: InputValue<string>, params?: CategoriesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Category, CategoryResponse>>;
    /**
 * List categories. Default order: handle ascending; this key uniquely orders the results.
 *
 * `GET /v1/categories`
 * @see https://developers.withflintpay.com/docs/api/categories#listCategories
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.categories.list()
 */
    list(params?: CategoriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CategoryListResponse, CategoryListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/categories#listCategories
     */
    listPages(params?: CategoriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CategoryListResponse, CategoryListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/categories#listCategories
     */
    listItems(params?: CategoriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Category>;
    /**
 * Update category.
 *
 * `PATCH /v1/categories/{category_id}`
 * @param category_id Flint category ID.
 * @see https://developers.withflintpay.com/docs/api/categories#updateCategory
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.update("ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Seasonal products"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(category_id: InputValue<string>, params: CategoriesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Category, CategoryResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly categories: CategoriesResource;
}
