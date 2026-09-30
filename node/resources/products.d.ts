export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateProductOptionRequestInput } from '../declarations/CreateProductOptionRequestInput.js';
import type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
import type { InventoryItemCreateRequestInput } from '../declarations/InventoryItemCreateRequestInput.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { Product } from '../declarations/Product.js';
import type { ProductListResponse } from '../declarations/ProductListResponse.js';
import type { ProductOption } from '../declarations/ProductOption.js';
import type { ProductOptionListResponse } from '../declarations/ProductOptionListResponse.js';
import type { ProductOptionResponse } from '../declarations/ProductOptionResponse.js';
import type { ProductResponse } from '../declarations/ProductResponse.js';
import type { ProductVariant } from '../declarations/ProductVariant.js';
import type { ProductVariantListResponse } from '../declarations/ProductVariantListResponse.js';
import type { ProductVariantRequestInput } from '../declarations/ProductVariantRequestInput.js';
import type { ProductVariantResponse } from '../declarations/ProductVariantResponse.js';
import type { ProductsCreateInput } from '../declarations/ProductsCreateInput.js';
import type { ProductsCreateResponse } from '../declarations/ProductsCreateResponse.js';
import type { ProductsCreateVariantInput } from '../declarations/ProductsCreateVariantInput.js';
import type { ProductsCreateVariantResponse } from '../declarations/ProductsCreateVariantResponse.js';
import type { ProductsDeleteVariantInput } from '../declarations/ProductsDeleteVariantInput.js';
import type { ProductsDeleteVariantResponse } from '../declarations/ProductsDeleteVariantResponse.js';
import type { ProductsGetInput } from '../declarations/ProductsGetInput.js';
import type { ProductsGetOptionInput } from '../declarations/ProductsGetOptionInput.js';
import type { ProductsGetOptionResponse } from '../declarations/ProductsGetOptionResponse.js';
import type { ProductsGetResponse } from '../declarations/ProductsGetResponse.js';
import type { ProductsGetVariantInput } from '../declarations/ProductsGetVariantInput.js';
import type { ProductsGetVariantResponse } from '../declarations/ProductsGetVariantResponse.js';
import type { ProductsListInput } from '../declarations/ProductsListInput.js';
import type { ProductsListOptionsInput } from '../declarations/ProductsListOptionsInput.js';
import type { ProductsListOptionsResponse } from '../declarations/ProductsListOptionsResponse.js';
import type { ProductsListResponse } from '../declarations/ProductsListResponse.js';
import type { ProductsListVariantsInput } from '../declarations/ProductsListVariantsInput.js';
import type { ProductsListVariantsResponse } from '../declarations/ProductsListVariantsResponse.js';
import type { ProductsRemoveInput } from '../declarations/ProductsRemoveInput.js';
import type { ProductsRemoveResponse } from '../declarations/ProductsRemoveResponse.js';
import type { ProductsUpdateInput } from '../declarations/ProductsUpdateInput.js';
import type { ProductsUpdateResponse } from '../declarations/ProductsUpdateResponse.js';
import type { ProductsUpdateVariantInput } from '../declarations/ProductsUpdateVariantInput.js';
import type { ProductsUpdateVariantResponse } from '../declarations/ProductsUpdateVariantResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { UpdateProductOptionRequestInput } from '../declarations/UpdateProductOptionRequestInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ProductsResource {
    /**
 * Creates a product for the authenticated merchant.
 * POST /v1/products
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.create({name: "example", product_type: "physical", default_variant: {unit_price_money: {amount: "0", currency: "USD"}}, "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<({ "categories"?: Array<string>; "default_variant"?: ProductVariantRequestInput; "description"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "metadata"?: Record<string, string>; "modifier_set_id"?: string | null; "name": string; "options"?: Array<CreateProductOptionRequestInput>; "product_type": "physical" | "service" | "fee" | "digital"; "status"?: "active" | "inactive"; "variants"?: Array<ProductVariantRequestInput>; }) & ((({ "default_variant": unknown; }) & (({ "options"?: never }) & ({ "variants"?: never }))) | (({ "options": unknown; "variants": unknown; }) & (({ "default_variant"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ProductResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "categories"?: Array<string>; "default_variant"?: ProductVariantRequestInput; "description"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "metadata"?: Record<string, string>; "modifier_set_id"?: string | null; "name": string; "options"?: Array<CreateProductOptionRequestInput>; "product_type": "physical" | "service" | "fee" | "digital"; "status"?: "active" | "inactive"; "variants"?: Array<ProductVariantRequestInput>; }) & ((({ "default_variant": unknown; }) & (({ "options"?: never }) & ({ "variants"?: never }))) | (({ "options": unknown; "variants": unknown; }) & (({ "default_variant"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductsCreateResponse>>;
    /**
 * Create product variant.
 * POST /v1/products/{product_id}/variants
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.createVariant("example", {variant: {unit_price_money: {amount: "0", currency: "USD"}}, "Idempotency-Key": idempotencyKey})
 */
    createVariant(product_id: InputValue<string>, params: (InputValue<{ "variant": ProductVariantRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ProductVariantResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createVariantWithResponse(product_id: InputValue<string>, params: (InputValue<{ "variant": ProductVariantRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductsCreateVariantResponse>>;
    /**
 * Archives a product and returns its final state.
 * DELETE /v1/products/{product_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(product_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ProductResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(product_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductsRemoveResponse>>;
    /**
 * Retire product variant.
 * DELETE /v1/products/{product_id}/variants/{variant_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.deleteVariant("example", "example", {"Idempotency-Key": idempotencyKey})
 */
    deleteVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ProductVariantResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteVariantWithResponse(product_id: InputValue<string>, variant_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductsDeleteVariantResponse>>;
    /**
 * Returns a single product by ID.
 * GET /v1/products/{product_id}
 * @example
 * client.products.get("example", {})
 */
    get(product_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"modifier_set">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ProductResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(product_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"modifier_set">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductsGetResponse>>;
    /**
 * Get product option.
 * GET /v1/products/{product_id}/options/{option_id}
 * @example
 * client.products.getOption("example", "example", {})
 */
    getOption(product_id: InputValue<string>, option_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ProductOptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getOptionWithResponse(product_id: InputValue<string>, option_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductsGetOptionResponse>>;
    /**
 * Get product variant.
 * GET /v1/products/{product_id}/variants/{variant_id}
 * @example
 * client.products.getVariant("example", "example", {})
 */
    getVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"modifier_set">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ProductVariantResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getVariantWithResponse(product_id: InputValue<string>, variant_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"modifier_set">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductsGetVariantResponse>>;
    /**
 * List product options.
 * GET /v1/products/{product_id}/options
 * @example
 * client.products.listOptions("example", {})
 */
    listOptions(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductOptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listOptionsWithResponse(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductsListOptionsResponse>>;
    listOptionsPages(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductOptionListResponse>;
    listOptionsPagesWithResponse(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ProductsListOptionsResponse>>;
    listOptionsItems(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductOption>;
    /**
 * Returns a paginated list of products for the authenticated merchant.
 * GET /v1/products
 * @example
 * client.products.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "product_type"?: InputValue<"physical" | "service" | "fee" | "digital">; "status"?: InputValue<"active" | "inactive" | "archived">; "category_handle"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "product_type"?: InputValue<"physical" | "service" | "fee" | "digital">; "status"?: InputValue<"active" | "inactive" | "archived">; "category_handle"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "product_type"?: InputValue<"physical" | "service" | "fee" | "digital">; "status"?: InputValue<"active" | "inactive" | "archived">; "category_handle"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "product_type"?: InputValue<"physical" | "service" | "fee" | "digital">; "status"?: InputValue<"active" | "inactive" | "archived">; "category_handle"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ProductsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "product_type"?: InputValue<"physical" | "service" | "fee" | "digital">; "status"?: InputValue<"active" | "inactive" | "archived">; "category_handle"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "sku"?: InputValue<string>; "query"?: InputValue<string>; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Product>;
    /**
 * List product variants.
 * GET /v1/products/{product_id}/variants
 * @example
 * client.products.listVariants("example", {})
 */
    listVariants(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductVariantListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listVariantsWithResponse(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductsListVariantsResponse>>;
    listVariantsPages(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductVariantListResponse>;
    listVariantsPagesWithResponse(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ProductsListVariantsResponse>>;
    listVariantsItems(product_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price">; "sort_direction"?: InputValue<"asc" | "desc">; "delivery_profile_id"?: InputValue<string>; "delivery_configuration_status"?: InputValue<"configured" | "action_required" | "not_applicable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductVariant>;
    /**
 * Applies a sparse update to product-parent fields. When categories is present, it replaces the full category list; send an empty array to clear categories. Sellable price, SKU, and inventory live on variants.
 * PATCH /v1/products/{product_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.update("example", {"Idempotency-Key": idempotencyKey})
 */
    update(product_id: InputValue<string>, params: (InputValue<({ "categories"?: Array<string>; "default_variant_id"?: string; "description"?: string; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "options"?: Array<UpdateProductOptionRequestInput>; "product_type"?: "physical" | "service" | "fee" | "digital"; "status"?: "active" | "inactive"; }) & (((({ "categories"?: never })) | ({ "expected_version": unknown; }))) & (((({ "options"?: never })) | ({ "expected_version": unknown; }))) & (((({ "images"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ProductResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(product_id: InputValue<string>, params: (InputValue<({ "categories"?: Array<string>; "default_variant_id"?: string; "description"?: string; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "options"?: Array<UpdateProductOptionRequestInput>; "product_type"?: "physical" | "service" | "fee" | "digital"; "status"?: "active" | "inactive"; }) & (((({ "categories"?: never })) | ({ "expected_version": unknown; }))) & (((({ "options"?: never })) | ({ "expected_version": unknown; }))) & (((({ "images"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductsUpdateResponse>>;
    /**
 * Update product variant.
 * PATCH /v1/products/{product_id}/variants/{variant_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.updateVariant("example", "example", {"Idempotency-Key": idempotencyKey})
 */
    updateVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params: (InputValue<({ "barcode"?: string; "delivery_profile_id"?: string; "expected_version"?: string; "images"?: Array<ImageRequestInput>; "inventory_item"?: InventoryItemCreateRequestInput; "inventory_item_id"?: string | null; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "position"?: number; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money"?: MoneyValueInput; }) & (((({ "images"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ProductVariantResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateVariantWithResponse(product_id: InputValue<string>, variant_id: InputValue<string>, params: (InputValue<({ "barcode"?: string; "delivery_profile_id"?: string; "expected_version"?: string; "images"?: Array<ImageRequestInput>; "inventory_item"?: InventoryItemCreateRequestInput; "inventory_item_id"?: string | null; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "position"?: number; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money"?: MoneyValueInput; }) & (((({ "images"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductsUpdateVariantResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly products: ProductsResource;
}
export type { ProductVariantRequestInput } from '../declarations/ProductVariantRequestInput.js';
export type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
export type { CreateProductOptionRequestInput } from '../declarations/CreateProductOptionRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { ProductResponse } from '../declarations/ProductResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ProductsCreateResponse } from '../declarations/ProductsCreateResponse.js';
export type { ProductVariantResponse } from '../declarations/ProductVariantResponse.js';
export type { ProductsCreateVariantResponse } from '../declarations/ProductsCreateVariantResponse.js';
export type { ProductsRemoveResponse } from '../declarations/ProductsRemoveResponse.js';
export type { ProductsDeleteVariantResponse } from '../declarations/ProductsDeleteVariantResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ProductsGetResponse } from '../declarations/ProductsGetResponse.js';
export type { ProductOptionResponse } from '../declarations/ProductOptionResponse.js';
export type { ProductsGetOptionResponse } from '../declarations/ProductsGetOptionResponse.js';
export type { ProductsGetVariantResponse } from '../declarations/ProductsGetVariantResponse.js';
export type { ProductOptionListResponse } from '../declarations/ProductOptionListResponse.js';
export type { ProductsListOptionsResponse } from '../declarations/ProductsListOptionsResponse.js';
export type { ProductOption } from '../declarations/ProductOption.js';
export type { ProductListResponse } from '../declarations/ProductListResponse.js';
export type { ProductsListResponse } from '../declarations/ProductsListResponse.js';
export type { Product } from '../declarations/Product.js';
export type { ProductVariantListResponse } from '../declarations/ProductVariantListResponse.js';
export type { ProductsListVariantsResponse } from '../declarations/ProductsListVariantsResponse.js';
export type { ProductVariant } from '../declarations/ProductVariant.js';
export type { UpdateProductOptionRequestInput } from '../declarations/UpdateProductOptionRequestInput.js';
export type { ProductsUpdateResponse } from '../declarations/ProductsUpdateResponse.js';
export type { InventoryItemCreateRequestInput } from '../declarations/InventoryItemCreateRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { ProductsUpdateVariantResponse } from '../declarations/ProductsUpdateVariantResponse.js';
export type { ProductsCreateInput } from '../declarations/ProductsCreateInput.js';
export type { ProductsCreateVariantInput } from '../declarations/ProductsCreateVariantInput.js';
export type { ProductsRemoveInput } from '../declarations/ProductsRemoveInput.js';
export type { ProductsDeleteVariantInput } from '../declarations/ProductsDeleteVariantInput.js';
export type { ProductsGetInput } from '../declarations/ProductsGetInput.js';
export type { ProductsGetOptionInput } from '../declarations/ProductsGetOptionInput.js';
export type { ProductsGetVariantInput } from '../declarations/ProductsGetVariantInput.js';
export type { ProductsListOptionsInput } from '../declarations/ProductsListOptionsInput.js';
export type { ProductsListInput } from '../declarations/ProductsListInput.js';
export type { ProductsListVariantsInput } from '../declarations/ProductsListVariantsInput.js';
export type { ProductsUpdateInput } from '../declarations/ProductsUpdateInput.js';
export type { ProductsUpdateVariantInput } from '../declarations/ProductsUpdateVariantInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { ProductVariantSelectedOptionRequestInput } from '../declarations/ProductVariantSelectedOptionRequestInput.js';
export type { CreateProductOptionValueRequestInput } from '../declarations/CreateProductOptionValueRequestInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { ProductOptionValue } from '../declarations/ProductOptionValue.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { Image } from '../declarations/Image.js';
export type { ModifierSetGroup } from '../declarations/ModifierSetGroup.js';
export type { ModifierGroup } from '../declarations/ModifierGroup.js';
export type { Modifier } from '../declarations/Modifier.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { TextModifierConfig } from '../declarations/TextModifierConfig.js';
export type { ModifierOverride } from '../declarations/ModifierOverride.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { UpdateProductOptionValueRequestInput } from '../declarations/UpdateProductOptionValueRequestInput.js';
export type { CreateProductRequestInput } from '../declarations/CreateProductRequestInput.js';
export type { CreateProductVariantRequestInput } from '../declarations/CreateProductVariantRequestInput.js';
export type { UpdateProductRequestInput } from '../declarations/UpdateProductRequestInput.js';
export type { UpdateProductVariantRequestInput } from '../declarations/UpdateProductVariantRequestInput.js';
export { makeProductResponse } from '../declarations/makeProductResponse.js';
export { makeProductVariantResponse } from '../declarations/makeProductVariantResponse.js';
export { makeProductOptionResponse } from '../declarations/makeProductOptionResponse.js';
export { makeProductOptionListResponse } from '../declarations/makeProductOptionListResponse.js';
export { makeProductOption } from '../declarations/makeProductOption.js';
export { makeProductListResponse } from '../declarations/makeProductListResponse.js';
export { makeProduct } from '../declarations/makeProduct.js';
export { makeProductVariantListResponse } from '../declarations/makeProductVariantListResponse.js';
export { makeProductVariant } from '../declarations/makeProductVariant.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeProductOptionValue } from '../declarations/makeProductOptionValue.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeModifierSetGroup } from '../declarations/makeModifierSetGroup.js';
export { makeModifierGroup } from '../declarations/makeModifierGroup.js';
export { makeModifier } from '../declarations/makeModifier.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeTextModifierConfig } from '../declarations/makeTextModifierConfig.js';
export { makeModifierOverride } from '../declarations/makeModifierOverride.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
