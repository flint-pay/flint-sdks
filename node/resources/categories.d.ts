import type { InputValue } from '../runtime.js';
import type {
    CategoriesCreateInput,
    CategoriesGetInput,
    CategoriesListInput,
    CategoriesRemoveInput,
    CategoriesUpdateInput,
    Category,
    CategoryListResponse,
    CategoryResponse
} from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateCategoryRequestInput } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateCategoryRequestInput } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { CreateCategoryRequestInput, CreateCategoryRequest } from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    Category,
    CategoryResponse,
    CategoryListResponse,
    CategoriesCreateInput,
    CategoriesRemoveInput,
    CategoriesGetInput,
    CategoriesListInput,
    CategoriesUpdateInput
} from '../declarations/types-3.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateCategoryRequestInput } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateCategoryRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateCategoryRequest } from '../declarations/types-72.js';
export interface CategoriesResource {
    /**
 * Creates a reusable category. If handle is omitted, Flint derives it from the name and never
 * changes it on rename.
 * @see reference/categories.md#categoriescreate
 * POST /v1/categories
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateCategoryRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Category>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/categories.md#categoriescreate
     */
    createWithResponse(params: (InputValue<CreateCategoryRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CategoryResponse>>;
    /**
 * Permanently deletes an unreferenced category and returns it with status deleted. Deleted
 * categories cannot be retrieved or listed. Remove all product, bundle, promotion, and return
 * configuration references before deleting.
 * @see reference/categories.md#categoriesremove
 * DELETE /v1/categories/{category_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(category_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Category>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/categories.md#categoriesremove
     */
    removeWithResponse(category_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CategoryResponse>>;
    /**
 * Get category.
 * @see reference/categories.md#categoriesget
 * GET /v1/categories/{category_id}
 * @example
 * client.categories.get("example")
 */
    get(category_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Category>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/categories.md#categoriesget
     */
    getWithResponse(category_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CategoryResponse>>;
    /**
 * List categories.
 * @see reference/categories.md#categorieslist
 * GET /v1/categories
 * @example
 * client.categories.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CategoryListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/categories.md#categorieslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CategoryListResponse>>;
    /** Iterate pages lazily.
     * @see reference/categories.md#categorieslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CategoryListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/categories.md#categorieslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<CategoryListResponse>>;
    /** Iterate items lazily.
     * @see reference/categories.md#categorieslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Category>;
    /**
 * Update category.
 * @see reference/categories.md#categoriesupdate
 * PATCH /v1/categories/{category_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(category_id: InputValue<string>, params: (InputValue<UpdateCategoryRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Category>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/categories.md#categoriesupdate
     */
    updateWithResponse(category_id: InputValue<string>, params: (InputValue<UpdateCategoryRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CategoryResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly categories: CategoriesResource;
}
