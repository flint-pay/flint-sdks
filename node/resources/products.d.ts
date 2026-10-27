import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateProductRequestInput } from '../declarations/types-8.js';
import type {
    Product,
    ProductListResponse,
    ProductOption,
    ProductOptionListResponse,
    ProductOptionResponse,
    ProductResponse,
    ProductVariant,
    ProductVariantListResponse,
    ProductVariantRequestInput,
    ProductVariantResponse,
    ProductsCreateInput,
    ProductsCreateVariantInput,
    ProductsDeleteVariantInput,
    ProductsGetInput,
    ProductsGetOptionInput,
    ProductsGetVariantInput,
    ProductsListInput,
    ProductsListOptionsInput,
    ProductsListVariantsInput,
    ProductsRemoveInput,
    ProductsUpdateInput,
    ProductsUpdateVariantInput
} from '../declarations/types-37.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateProductRequestInput, UpdateProductVariantRequestInput } from '../declarations/types-48.js';
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
export type { CreateProductRequestInput, CreateProductOptionRequestInput, CreateProductOptionValueRequestInput } from '../declarations/types-8.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    Product,
    ProductResponse,
    ProductVariantRequestInput,
    ProductVariant,
    ProductVariantResponse,
    ProductOption,
    ProductOptionResponse,
    ProductOptionListResponse,
    ProductListResponse,
    ProductVariantListResponse,
    ProductsCreateInput,
    ProductsCreateVariantInput,
    ProductsRemoveInput,
    ProductsDeleteVariantInput,
    ProductsGetInput,
    ProductsGetOptionInput,
    ProductsGetVariantInput,
    ProductsListOptionsInput,
    ProductsListInput,
    ProductsListVariantsInput,
    ProductsUpdateInput,
    ProductsUpdateVariantInput,
    ProductVariantMatch,
    ProductPriceRange,
    ProductVariantSelectedOptionRequestInput,
    ProductOptionValue,
    ProductVariantSelectedOptionRequest
} from '../declarations/types-37.js';
export type { SdkResponse, SelectedProductOption } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency, WeightInput, Weight } from '../declarations/types-61.js';
export type {
    UpdateProductRequestInput,
    UpdateProductVariantRequestInput,
    UpdateProductOptionRequestInput,
    UpdateProductOptionValueRequestInput
} from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    ImageRequestInput,
    ImageAttachment,
    GiftCardProductConfigurationInput,
    GiftCardProductConfiguration
} from '../declarations/types-19.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { CategoryReference } from '../declarations/types-3.js';
export type {
    ModifierSet,
    ModifierSetGroup,
    ModifierGroup,
    Modifier,
    MoneyValue,
    ModifierOverride,
    ModifierSetGroupExisting,
    ModifierSetGroupInline,
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValueInput
} from '../declarations/types-31.js';
export type { TextModifierConfig } from '../declarations/types-47.js';
export type { GiftCardCustomAmountBoundsInput, GiftCardCustomAmountBounds } from '../declarations/types-18.js';
export type { InventoryItemCreateRequestInput, InventoryItemCreateRequest } from '../declarations/types-24.js';
export type { DimensionsInput, Dimensions } from '../declarations/types-16.js';
export { makeCreateProductOptionRequest, makeCreateProductOptionValueRequest, makeCreateProductRequest } from '../declarations/types-64.js';
export { makeDimensions, makeGiftCardCustomAmountBounds, makeGiftCardProductConfiguration } from '../declarations/types-66.js';
export { makeImageRequest, makeInventoryItemCreateRequest } from '../declarations/types-67.js';
export { makeModifierOverride, makeMoneyValue } from '../declarations/types-68.js';
export { makeProductVariantRequest, makeProductVariantSelectedOptionRequest } from '../declarations/types-69.js';
export {
    makeUpdateProductOptionRequest,
    makeUpdateProductOptionValueRequest,
    makeUpdateProductRequest,
    makeUpdateProductVariantRequest
} from '../declarations/types-72.js';
export { makeWeight } from '../declarations/types-73.js';
export interface ProductsResource {
    /**
 * Creates a product for the authenticated merchant.
 * @see reference/products.md#productscreate
 * POST /v1/products
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.create({default_variant: {unit_price_money: {amount: "100", currency: "USD"}},
 * name: "example", product_type: "physical"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateProductRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<Product>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productscreate
     */
    createWithResponse(params: (InputValue<CreateProductRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductResponse>>;
    /**
 * Create product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
 * @see reference/products.md#productscreatevariant
 * POST /v1/products/{product_id}/variants
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.createVariant("example", {unit_price_money: {amount: "100", currency: "USD"}}, {
 * idempotencyKey: idempotencyKey })
 */
    createVariant(product_id: InputValue<string>, params: (InputValue<ProductVariantRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ProductVariant>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productscreatevariant
     */
    createVariantWithResponse(product_id: InputValue<string>, params: (InputValue<ProductVariantRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductVariantResponse>>;
    /**
 * Archives a product and returns its final state. Returns the archived resource exactly as GET
 * returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a
 * webhook, or checking references. When expected_version is present, it is compared before the
 * archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.
 * @see reference/products.md#productsremove
 * DELETE /v1/products/{product_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(product_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<Product>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productsremove
     */
    removeWithResponse(product_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductResponse>>;
    /**
 * Retire product variant. Returns the archived resource exactly as GET returns it. Repeating
 * DELETE returns 200 without changing version or updated_at, sending a webhook, or checking
 * references. When expected_version is present, it is compared before the archived replay; a stale
 * version returns 409 VERSION_CONFLICT with current_version.
 * @see reference/products.md#productsdeletevariant
 * DELETE /v1/products/{product_id}/variants/{variant_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.deleteVariant("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ProductVariant>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productsdeletevariant
     */
    deleteVariantWithResponse(product_id: InputValue<string>, variant_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductVariantResponse>>;
    /**
 * Returns a single product by ID.
 * @see reference/products.md#productsget
 * GET /v1/products/{product_id}
 * @example
 * client.products.get("example")
 */
    get(product_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<Product>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productsget
     */
    getWithResponse(product_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductResponse>>;
    /**
 * Get product option.
 * @see reference/products.md#productsgetoption
 * GET /v1/products/{product_id}/options/{option_id}
 * @example
 * client.products.getOption("example", "example")
 */
    getOption(product_id: InputValue<string>, option_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductOption>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productsgetoption
     */
    getOptionWithResponse(product_id: InputValue<string>, option_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductOptionResponse>>;
    /**
 * Get product variant.
 * @see reference/products.md#productsgetvariant
 * GET /v1/products/{product_id}/variants/{variant_id}
 * @example
 * client.products.getVariant("example", "example")
 */
    getVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductVariant>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productsgetvariant
     */
    getVariantWithResponse(product_id: InputValue<string>, variant_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductVariantResponse>>;
    /**
 * List product options.
 * @see reference/products.md#productslistoptions
 * GET /v1/products/{product_id}/options
 * @example
 * client.products.listOptions("example")
 */
    listOptions(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductOptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productslistoptions
     */
    listOptionsWithResponse(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductOptionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/products.md#productslistoptions
     */
    listOptionsPages(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductOptionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/products.md#productslistoptions
     */
    listOptionsPagesWithResponse(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ProductOptionListResponse>>;
    /** Iterate items lazily.
     * @see reference/products.md#productslistoptions
     */
    listOptionsItems(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductOption>;
    /**
 * Returns a paginated list of products for the authenticated merchant.
 * @see reference/products.md#productslist
 * GET /v1/products
 * @example
 * client.products.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "category_handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "variant_external_reference_id"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "category_handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "variant_external_reference_id"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductListResponse>>;
    /** Iterate pages lazily.
     * @see reference/products.md#productslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "category_handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "variant_external_reference_id"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/products.md#productslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "category_handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "variant_external_reference_id"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ProductListResponse>>;
    /** Iterate items lazily.
     * @see reference/products.md#productslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "category_handle"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "variant_external_reference_id"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Product>;
    /**
 * List product variants.
 * @see reference/products.md#productslistvariants
 * GET /v1/products/{product_id}/variants
 * @example
 * client.products.listVariants("example")
 */
    listVariants(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ProductVariantListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productslistvariants
     */
    listVariantsWithResponse(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ProductVariantListResponse>>;
    /** Iterate pages lazily.
     * @see reference/products.md#productslistvariants
     */
    listVariantsPages(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductVariantListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/products.md#productslistvariants
     */
    listVariantsPagesWithResponse(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ProductVariantListResponse>>;
    /** Iterate items lazily.
     * @see reference/products.md#productslistvariants
     */
    listVariantsItems(product_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ProductVariant>;
    /**
 * Applies a sparse update to product-parent fields. When category_handles is present, it replaces
 * the full category list; send [] to clear it. Sellable price, SKU, and inventory live on
 * variants. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and
 * current_status archived. The error identifies the archived resource; a create under an archived
 * parent identifies that parent.
 * @see reference/products.md#productsupdate
 * PATCH /v1/products/{product_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(product_id: InputValue<string>, params: (InputValue<UpdateProductRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<Product>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productsupdate
     */
    updateWithResponse(product_id: InputValue<string>, params: (InputValue<UpdateProductRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductResponse>>;
    /**
 * Update product variant. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
 * @see reference/products.md#productsupdatevariant
 * PATCH /v1/products/{product_id}/variants/{variant_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.products.updateVariant("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateVariant(product_id: InputValue<string>, variant_id: InputValue<string>, params: (InputValue<UpdateProductVariantRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ProductVariant>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/products.md#productsupdatevariant
     */
    updateVariantWithResponse(product_id: InputValue<string>, variant_id: InputValue<string>, params: (InputValue<UpdateProductVariantRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ProductVariantResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly products: ProductsResource;
}
