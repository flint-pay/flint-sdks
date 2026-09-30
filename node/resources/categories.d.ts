export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { CategoriesCreateInput } from '../declarations/CategoriesCreateInput.js';
import type { CategoriesCreateResponse } from '../declarations/CategoriesCreateResponse.js';
import type { CategoriesGetInput } from '../declarations/CategoriesGetInput.js';
import type { CategoriesGetResponse } from '../declarations/CategoriesGetResponse.js';
import type { CategoriesListInput } from '../declarations/CategoriesListInput.js';
import type { CategoriesListResponse } from '../declarations/CategoriesListResponse.js';
import type { CategoriesRemoveInput } from '../declarations/CategoriesRemoveInput.js';
import type { CategoriesRemoveResponse } from '../declarations/CategoriesRemoveResponse.js';
import type { CategoriesUpdateInput } from '../declarations/CategoriesUpdateInput.js';
import type { CategoriesUpdateResponse } from '../declarations/CategoriesUpdateResponse.js';
import type { Category } from '../declarations/Category.js';
import type { CategoryListResponse } from '../declarations/CategoryListResponse.js';
import type { CategoryResponse } from '../declarations/CategoryResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface CategoriesResource {
    /**
 * Creates a reusable category. If handle is omitted, Flint derives it from the name and never changes it on rename.
 * POST /v1/categories
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.create({name: "example", "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "description"?: string; "external_reference_id"?: string; "handle"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CategoryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "description"?: string; "external_reference_id"?: string; "handle"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CategoriesCreateResponse>>;
    /**
 * Permanently deletes an unreferenced category and returns it with status deleted. Deleted categories cannot be retrieved or listed. Remove all product, bundle, promotion, and return configuration references before deleting.
 * DELETE /v1/categories/{category_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(category_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CategoryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(category_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CategoriesRemoveResponse>>;
    /**
 * Get category.
 * GET /v1/categories/{category_id}
 * @example
 * client.categories.get("example", {})
 */
    get(category_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CategoryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(category_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CategoriesGetResponse>>;
    /**
 * List categories.
 * GET /v1/categories
 * @example
 * client.categories.list({})
 */
    list(params?: { "status"?: InputValue<"active" | "archived">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CategoryListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "status"?: InputValue<"active" | "archived">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CategoriesListResponse>>;
    listPages(params?: { "status"?: InputValue<"active" | "archived">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CategoryListResponse>;
    listPagesWithResponse(params?: { "status"?: InputValue<"active" | "archived">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CategoriesListResponse>>;
    listItems(params?: { "status"?: InputValue<"active" | "archived">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Category>;
    /**
 * Update category.
 * PATCH /v1/categories/{category_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.categories.update("example", {"Idempotency-Key": idempotencyKey})
 */
    update(category_id: InputValue<string>, params: (InputValue<{ "description"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CategoryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(category_id: InputValue<string>, params: (InputValue<{ "description"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CategoriesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly categories: CategoriesResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CategoryResponse } from '../declarations/CategoryResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CategoriesCreateResponse } from '../declarations/CategoriesCreateResponse.js';
export type { CategoriesRemoveResponse } from '../declarations/CategoriesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { CategoriesGetResponse } from '../declarations/CategoriesGetResponse.js';
export type { CategoryListResponse } from '../declarations/CategoryListResponse.js';
export type { CategoriesListResponse } from '../declarations/CategoriesListResponse.js';
export type { Category } from '../declarations/Category.js';
export type { CategoriesUpdateResponse } from '../declarations/CategoriesUpdateResponse.js';
export type { CategoriesCreateInput } from '../declarations/CategoriesCreateInput.js';
export type { CategoriesRemoveInput } from '../declarations/CategoriesRemoveInput.js';
export type { CategoriesGetInput } from '../declarations/CategoriesGetInput.js';
export type { CategoriesListInput } from '../declarations/CategoriesListInput.js';
export type { CategoriesUpdateInput } from '../declarations/CategoriesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CreateCategoryRequestInput } from '../declarations/CreateCategoryRequestInput.js';
export type { UpdateCategoryRequestInput } from '../declarations/UpdateCategoryRequestInput.js';
export { makeCategoryResponse } from '../declarations/makeCategoryResponse.js';
export { makeCategoryListResponse } from '../declarations/makeCategoryListResponse.js';
export { makeCategory } from '../declarations/makeCategory.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
