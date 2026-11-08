import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    Product,
    ProductListResponse,
    ProductOption,
    ProductOptionListResponse,
    ProductOptionResponse,
    ProductResponse,
    ProductVariant,
    ProductVariantListResponse
} from '../declarations/types-47.js';
import type {
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
} from '../declarations/types-48.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    ProductsCreateVariantParams,
    ProductVariantResponse,
    ProductsDeleteParams,
    ProductsDeleteVariantParams,
    ProductsGetParams,
    ProductsGetOptionParams,
    ProductsGetVariantParams,
    ProductsListOptionsParams,
    ProductsListParams,
    ProductsListVariantsParams,
    ProductsUpdateParams,
    ProductsUpdateVariantParams,
    ProductVariantRequestInput,
    ProductVariantSelectedOptionRequestInput,
    ProductVariantSelectedOptionRequest
} from '../declarations/types-48.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type {
    Product,
    ProductResponse,
    ProductVariant,
    ProductOption,
    ProductOptionResponse,
    ProductOptionListResponse,
    ProductListResponse,
    ProductVariantListResponse,
    ProductVariantMatch,
    ProductPriceRange,
    ProductVariantInventoryAvailability,
    ProductOptionValue
} from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency, WeightRequestInput, Weight } from '../declarations/types-66.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CreateProductRequestInput,
    CreateProductOptionRequestInput,
    CreateProductOptionValueRequestInput,
    CreateProductRequestSimpleInput,
    CreateProductRequestOptionedInput
} from '../declarations/types-11.js';
export type { GiftCardProductConfigurationRequestInput, GiftCardProductConfiguration } from '../declarations/types-26.js';
export type { GiftCardCustomAmountBoundsRequestInput, GiftCardCustomAmountBounds } from '../declarations/types-25.js';
export type {
    MoneyValueInput,
    ModifierSet,
    ModifierSetGroup,
    ModifierGroup,
    Modifier,
    MoneyValue,
    ModifierOverride,
    NextAction
} from '../declarations/types-37.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment } from '../declarations/types-27.js';
export type { InventoryItemCreateRequestInput } from '../declarations/types-28.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-36.js';
export type { QuantityPriceBreakRequestInput, ReadinessMerchantAccountSession, QuantityPriceBreak } from '../declarations/types-49.js';
export type { DimensionsRequestInput, Dimensions, DisputesAcceptParams } from '../declarations/types-22.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { CategoryReference } from '../declarations/types-5.js';
export type { TextModifierConfig } from '../declarations/types-62.js';
export type { InventoryRoutingSource } from '../declarations/types-29.js';
export type { SelectedProductOption } from '../declarations/types-56.js';
export type {
    UpdateProductRequestInput,
    UpdateProductOptionRequestInput,
    UpdateProductOptionValueRequestInput,
    UpdateProductVariantRequestInput
} from '../declarations/types-64.js';
export type { BundlesGetParams } from '../declarations/types-1.js';
export {
    makeCreateProductOptionRequest,
    makeCreateProductOptionValueRequest,
    makeCreateProductRequest,
    makeCreateProductRequestOptioned,
    makeCreateProductRequestSimple
} from '../declarations/types-70.js';
export { makeDimensionsRequest } from '../declarations/types-72.js';
export {
    makeGiftCardCustomAmountBoundsRequest,
    makeGiftCardProductConfigurationRequest,
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest,
    makeInventoryItemCreateRequest
} from '../declarations/types-73.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export { makeProductVariantRequest, makeProductVariantSelectedOptionRequest } from '../declarations/types-76.js';
export { makeQuantityPriceBreakRequest } from '../declarations/types-77.js';
export {
    makeUpdateProductOptionRequest,
    makeUpdateProductOptionValueRequest,
    makeUpdateProductRequest,
    makeUpdateProductVariantRequest,
    makeWeightRequest
} from '../declarations/types-80.js';
export interface ProductsResource {
    /**
 * Creates a product, the catalog item buyers purchase through orders, checkout, payment links, and
 * subscriptions. Send `name`, `product_type`, and `variant_mode`. A `simple` product takes one
 * `default_variant`; an `optioned` product takes `options` and `variants`, each variant selecting
 * one value for every option. Price, SKU, and inventory settings live on variants. A SKU or
 * barcode that another variant or bundle already uses fails with `ALREADY_EXISTS`, and a category
 * handle that doesn't exist fails with `RESOURCE_NOT_FOUND`.
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
 * Adds a variant to a product that has options. The variant selects one value for every option.
 * Two variants can't select the same combination, and a SKU or barcode that another variant or
 * bundle already uses is refused; both fail with `ALREADY_EXISTS`. A product without active
 * options fails with `ACTION_NOT_ALLOWED` and reason `configuration_required`: change a simple
 * product through its default variant instead. Fails with `ACTION_NOT_ALLOWED` and reason
 * `archived` when the resource, or the parent it belongs to, is archived. The error names the
 * archived resource and its `current_status`.
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
 * Archives a product and returns its final state. Returns the archived resource as a read does.
 * Deleting an already archived resource returns it again without changing its version or
 * `updated_at`, sending a webhook, or checking references. A stale `expected_version` fails with
 * `VERSION_CONFLICT` and the `current_version`, even when the resource is already archived.
 *
 * `DELETE /v1/products/{product_id}`
 * @param product_id Flint product ID.
 * @see https://developers.withflintpay.com/docs/api/products#deleteProduct
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.delete("prod_01KEZF7C00BVSHCNWVH528HB66", {}, { idempotencyKey: idempotencyKey })
 */
    delete(product_id: InputValue<string>, params?: ProductsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Product, ProductResponse>>;
    /**
 * Archives a variant and returns its final state. Returns the archived resource as a read does.
 * Deleting an already archived resource returns it again without changing its version or
 * `updated_at`, sending a webhook, or checking references. A stale `expected_version` fails with
 * `VERSION_CONFLICT` and the `current_version`, even when the resource is already archived.
 *
 * `DELETE /v1/products/{product_id}/variants/{variant_id}`
 * @param product_id Flint product ID.
 * @param variant_id Flint product variant ID.
 * @see https://developers.withflintpay.com/docs/api/products#deleteProductVariant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.deleteVariant("prod_01KEZF7C00BVSHCNWVH528HB66",
 * "var_01KEZF7C004GSH2KT8CNYVMHGX", {}, { idempotencyKey: idempotencyKey })
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
 * client.products.get("prod_01KEZF7C00BVSHCNWVH528HB66")
 */
    get(product_id: InputValue<string>, params?: ProductsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Product, ProductResponse>>;
    /**
 * Returns one option of a product, such as size or color, with its values and position.
 *
 * `GET /v1/products/{product_id}/options/{option_id}`
 * @param product_id Flint product ID.
 * @param option_id Flint product option ID.
 * @see https://developers.withflintpay.com/docs/api/products#getProductOption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.getOption("prod_01KEZF7C00BVSHCNWVH528HB66", "opt_01KEZF7C008R5Q9BG9B4B4KQH8")
 */
    getOption(product_id: InputValue<string>, option_id: InputValue<string>, params?: ProductsGetOptionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ProductOption, ProductOptionResponse>>;
    /**
 * Returns one variant of a product, including its price, SKU, selected options, inventory
 * settings, and delivery configuration status.
 *
 * `GET /v1/products/{product_id}/variants/{variant_id}`
 * @param product_id Flint product ID.
 * @param variant_id Flint product variant ID.
 * @see https://developers.withflintpay.com/docs/api/products#getProductVariant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.products.getVariant("prod_01KEZF7C00BVSHCNWVH528HB66", "var_01KEZF7C004GSH2KT8CNYVMHGX")
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
 * client.products.listOptions("prod_01KEZF7C00BVSHCNWVH528HB66")
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
 * client.products.listVariants("prod_01KEZF7C00BVSHCNWVH528HB66")
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
 * variants. Fails with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent
 * it belongs to, is archived. The error names the archived resource and its `current_status`.
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
 * Applies a sparse update to a variant: only the fields you send change. A SKU or barcode that
 * another variant or bundle already uses, or an option combination that another variant selects,
 * fails with `ALREADY_EXISTS`. Changes to name, price, SKU, and similar fields apply to new
 * checkouts, links, and plans; existing orders keep what they were charged. Setting the variant
 * inactive, or changing its price currency, fails with `RESOURCE_IN_USE` while an open order,
 * checkout session, active payment link, subscription, subscription plan, or active bundle uses
 * it. Send `expected_version` to reject the update when the variant changed since you read it.
 * Fails with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent it
 * belongs to, is archived. The error names the archived resource and its `current_status`.
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
