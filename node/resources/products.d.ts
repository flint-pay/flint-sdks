import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    Product,
    ProductListResponse,
    ProductOption,
    ProductOptionListResponse,
    ProductOptionResponse,
    ProductResponse,
    ProductVariant,
    ProductVariantListResponse,
    ProductVariantResponse,
    ProductsCreateParams,
    ProductsCreateVariantParams,
    ProductsDeleteParams,
    ProductsDeleteVariantParams,
    ProductsGetOptionParams,
    ProductsGetParams,
    ProductsGetVariantParams,
    ProductsListOptionsParams,
    ProductsListParams,
    ProductsListVariantsParams,
    ProductsUpdateParams,
    ProductsUpdateVariantParams
} from '../declarations/types-44.js';
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
    ProductsCreateParams,
    Product,
    ProductResponse,
    ProductsCreateVariantParams,
    ProductVariant,
    ProductVariantResponse,
    ProductsDeleteParams,
    ProductsDeleteVariantParams,
    ProductsGetParams,
    ProductsGetOptionParams,
    ProductOption,
    ProductOptionResponse,
    ProductsGetVariantParams,
    ProductsListOptionsParams,
    ProductOptionListResponse,
    ProductsListParams,
    ProductListResponse,
    ProductsListVariantsParams,
    ProductVariantListResponse,
    ProductsUpdateParams,
    ProductsUpdateVariantParams,
    ProductVariantRequestInput,
    ProductVariantSelectedOptionRequestInput,
    ProductVariantMatch,
    ProductPriceRange,
    ProductOptionValue,
    ProductVariantSelectedOptionRequest
} from '../declarations/types-44.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency, WeightInput, Weight } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateProductRequestInput, CreateProductRequestSimpleInput, CreateProductRequestOptionedInput } from '../declarations/types-10.js';
export type { GiftCardProductConfigurationRequestInput, GiftCardProductConfiguration } from '../declarations/types-24.js';
export type { GiftCardCustomAmountBoundsRequestInput, GiftCardCustomAmountBounds } from '../declarations/types-23.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment } from '../declarations/types-25.js';
export type { InventoryItemCreateRequestInput } from '../declarations/types-26.js';
export type {
    MetadataRequestInput,
    MetadataMap,
    ModifierGroup,
    Modifier,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-34.js';
export type { DimensionsInput, Dimensions } from '../declarations/types-20.js';
export type {
    MoneyValueInput,
    ModifierSet,
    ModifierSetGroup,
    MoneyValue,
    ModifierOverride,
    ModifierSetGroupExisting,
    ModifierSetGroupInline,
    NextAction
} from '../declarations/types-35.js';
export type { CreateProductOptionRequestInput, CreateProductOptionValueRequestInput } from '../declarations/types-9.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { CategoryReference } from '../declarations/types-4.js';
export type { TextModifierConfig } from '../declarations/types-57.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { SelectedProductOption } from '../declarations/types-53.js';
export type {
    UpdateProductRequestInput,
    UpdateProductOptionRequestInput,
    UpdateProductOptionValueRequestInput,
    UpdateProductVariantRequestInput
} from '../declarations/types-59.js';
export type { BundlesGetParams } from '../declarations/types-1.js';
export {
    makeCreateProductOptionRequest,
    makeCreateProductOptionValueRequest,
    makeCreateProductRequest,
    makeCreateProductRequestOptioned,
    makeCreateProductRequestSimple
} from '../declarations/types-64.js';
export {
    makeDimensions,
    makeGiftCardCustomAmountBoundsRequest,
    makeGiftCardProductConfigurationRequest,
    makeImageInputFile,
    makeImageInputSourceURL
} from '../declarations/types-67.js';
export { makeImageRequest, makeInventoryItemCreateRequest } from '../declarations/types-68.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeModifierOverride, makeMoneyValue } from '../declarations/types-69.js';
export { makeProductVariantRequest, makeProductVariantSelectedOptionRequest } from '../declarations/types-71.js';
export {
    makeUpdateProductOptionRequest,
    makeUpdateProductOptionValueRequest,
    makeUpdateProductRequest,
    makeUpdateProductVariantRequest
} from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface ProductsResource {
    /**
 * Creates a product for the authenticated merchant.
 *
 * `POST /v1/products`
 * @see https://developers.withflintpay.com/docs/api/products#createProduct
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.create({default_variant: {unit_price_money: {amount: "100", currency: "USD"}},
 * name: "example", product_type: "physical", variant_mode: "simple"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: ProductsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Product, ProductResponse>>;
    /**
 * Create product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
 *
 * `POST /v1/products/{product_id}/variants`
 * @param product_id Flint product ID.
 * @see https://developers.withflintpay.com/docs/api/products#createProductVariant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.createVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {unit_price_money: {amount:
 * "100", currency: "USD"}}, { idempotencyKey: idempotencyKey })
 */
    createVariant(product_id: InputValue<string>, params: ProductsCreateVariantParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ProductVariant, ProductVariantResponse>>;
    /**
 * Archives a product and returns its final state. Returns the archived resource exactly as GET
 * returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a
 * webhook, or checking references. When expected_version is present, it is compared before the
 * archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.
 *
 * `DELETE /v1/products/{product_id}`
 * @param product_id Flint product ID.
 * @see https://developers.withflintpay.com/docs/api/products#deleteProduct
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.delete("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    delete(product_id: InputValue<string>, params?: ProductsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Product, ProductResponse>>;
    /**
 * Retire product variant. Returns the archived resource exactly as GET returns it. Repeating
 * DELETE returns 200 without changing version or updated_at, sending a webhook, or checking
 * references. When expected_version is present, it is compared before the archived replay; a stale
 * version returns 409 VERSION_CONFLICT with current_version.
 *
 * `DELETE /v1/products/{product_id}/variants/{variant_id}`
 * @param product_id Flint product ID.
 * @param variant_id Flint product variant ID.
 * @see https://developers.withflintpay.com/docs/api/products#deleteProductVariant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.deleteVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "var_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    deleteVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params?: ProductsDeleteVariantParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ProductVariant, ProductVariantResponse>>;
    /**
 * Returns a single product by ID.
 *
 * `GET /v1/products/{product_id}`
 * @param product_id Flint product ID.
 * @see https://developers.withflintpay.com/docs/api/products#getProduct
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.get("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(product_id: InputValue<string>, params?: ProductsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Product, ProductResponse>>;
    /**
 * Get product option.
 *
 * `GET /v1/products/{product_id}/options/{option_id}`
 * @param product_id Flint product ID.
 * @param option_id Flint product option ID.
 * @see https://developers.withflintpay.com/docs/api/products#getProductOption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.getOption("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", "opt_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getOption(product_id: InputValue<string>, option_id: InputValue<string>, params?: ProductsGetOptionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ProductOption, ProductOptionResponse>>;
    /**
 * Get product variant.
 *
 * `GET /v1/products/{product_id}/variants/{variant_id}`
 * @param product_id Flint product ID.
 * @param variant_id Flint product variant ID.
 * @see https://developers.withflintpay.com/docs/api/products#getProductVariant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.getVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", "var_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params?: ProductsGetVariantParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ProductVariant, ProductVariantResponse>>;
    /**
 * List product options. Default order: position ascending, then option_id ascending.
 *
 * `GET /v1/products/{product_id}/options`
 * @param product_id Flint product ID.
 * @see https://developers.withflintpay.com/docs/api/products#listProductOptions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.listOptions("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listOptions(product_id: InputValue<string>, params?: ProductsListOptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ProductOptionListResponse, ProductOptionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/products#listProductOptions
     */
    listOptionsPages(product_id: InputValue<string>, params?: ProductsListOptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ProductOptionListResponse, ProductOptionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/products#listProductOptions
     */
    listOptionsItems(product_id: InputValue<string>, params?: ProductsListOptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ProductOption>;
    /**
 * Returns a paginated list of products for the authenticated merchant. Default order: created_at
 * descending, then product_id descending.
 *
 * `GET /v1/products`
 * @see https://developers.withflintpay.com/docs/api/products#listProducts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.list()
 */
    list(params?: ProductsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ProductListResponse, ProductListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/products#listProducts
     */
    listPages(params?: ProductsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ProductListResponse, ProductListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/products#listProducts
     */
    listItems(params?: ProductsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Product>;
    /**
 * List product variants. Default order: position ascending, then variant_id ascending.
 *
 * `GET /v1/products/{product_id}/variants`
 * @param product_id Flint product ID.
 * @see https://developers.withflintpay.com/docs/api/products#listProductVariants
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.listVariants("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listVariants(product_id: InputValue<string>, params?: ProductsListVariantsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ProductVariantListResponse, ProductVariantListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/products#listProductVariants
     */
    listVariantsPages(product_id: InputValue<string>, params?: ProductsListVariantsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ProductVariantListResponse, ProductVariantListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/products#listProductVariants
     */
    listVariantsItems(product_id: InputValue<string>, params?: ProductsListVariantsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ProductVariant>;
    /**
 * Applies a sparse update to product-parent fields. When category_handles is present, it replaces
 * the full category list; send [] to clear it. Sellable price, SKU, and inventory live on
 * variants. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and
 * current_status archived. The error identifies the archived resource; a create under an archived
 * parent identifies that parent.
 *
 * `PATCH /v1/products/{product_id}`
 * @param product_id Flint product ID.
 * @see https://developers.withflintpay.com/docs/api/products#updateProduct
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.update("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Weekend admission"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(product_id: InputValue<string>, params: ProductsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Product, ProductResponse>>;
    /**
 * Update product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
 *
 * `PATCH /v1/products/{product_id}/variants/{variant_id}`
 * @param product_id Flint product ID.
 * @param variant_id Flint product variant ID.
 * @see https://developers.withflintpay.com/docs/api/products#updateProductVariant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.updateVariant("prod_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "var_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Balcony admission"}, { idempotencyKey: idempotencyKey
 * })
 */
    updateVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params: ProductsUpdateVariantParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ProductVariant, ProductVariantResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly products: ProductsResource;
}
