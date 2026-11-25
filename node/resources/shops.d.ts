import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { PublicShopListing, PublicShopListingResponse, PublicShopResponse, PublicShopResult } from '../declarations/types-59.js';
import type { RequestOptions, ResolveShopResponse, ResolvedShopCheckout } from '../declarations/types-62.js';
import type { Shop } from '../declarations/types-68.js';
import type {
    ShopListResponse,
    ShopListing,
    ShopListingListResponse,
    ShopResponse,
    ShopsCreateParams,
    ShopsDeleteParams,
    ShopsGetListingPublicParams,
    ShopsGetParams,
    ShopsGetPublicParams,
    ShopsListListingsParams,
    ShopsListParams,
    ShopsResolveParams,
    ShopsUpdateParams
} from '../declarations/types-69.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-81.js';
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
    ShopsCreateParams,
    ShopResponse,
    ShopsDeleteParams,
    ShopsGetParams,
    ShopsGetListingPublicParams,
    ShopsGetPublicParams,
    ShopsListListingsParams,
    ShopListingListResponse,
    ShopListing,
    ShopsListParams,
    ShopListResponse,
    ShopsResolveParams,
    ShopsUpdateParams,
    ShopListingRequestInput,
    ShopListingInputProductInput,
    ShopListingInputBundleInput,
    ShopListingPatchRequestInput,
    ShopListingPatchInputProductInput,
    ShopListingPatchInputBundleInput
} from '../declarations/types-69.js';
export type {
    RequestOptions,
    ResolvedShopCheckout,
    ResolveShopResponse,
    ResourceReference,
    ResolveShopRequestInput,
    ResolveShopLineItemRequestInput
} from '../declarations/types-62.js';
export type { Shop, SelectedProductOption } from '../declarations/types-68.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-81.js';
export type {
    PublicShopListing,
    PublicShopListingResponse,
    PublicShopResult,
    PublicShopResponse,
    PublicResolvedModifierGroup,
    PublicResolvedModifierOption,
    PublicCatalogVariant,
    PublicResolvedBundleComponent,
    PublicCatalogOption,
    PublicCatalogOptionValue,
    PublicShopCategory,
    PublicShopListingSummary,
    PublicShop,
    PublicCatalogModifierRequestInput,
    PublicCatalogTextModifierRequestInput,
    PublicCatalogModifierInputCatalogInput,
    PublicCatalogModifierInputTextInput
} from '../declarations/types-59.js';
export type {
    ClientOptions,
    CheckoutTaxConfigRequestInput,
    CheckoutTaxCalculationRequestInput,
    CheckoutTipConfigRequestInput,
    CheckoutTaxConfig,
    CheckoutTaxCalculation,
    CheckoutTipConfig,
    CheckoutTheme
} from '../declarations/types-7.js';
export type { CreateShopRequestInput } from '../declarations/types-14.js';
export type {
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutMerchantSupport
} from '../declarations/types-6.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-31.js';
export type { InventoryRoutingSourceRequestInput } from '../declarations/types-34.js';
export type {
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-33.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type { AuthMode, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { LegalSettings } from '../declarations/types-39.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-63.js';
export type { ReadinessMerchantAccountSession, QuantityPriceBreak } from '../declarations/types-60.js';
export type { TextModifierConfigRequest } from '../declarations/types-75.js';
export type { ProductPriceRange } from '../declarations/types-57.js';
export type { PaymentLinkResolvePrefillRequestInput } from '../declarations/types-53.js';
export type { UpdateShopRequestInput } from '../declarations/types-79.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export type { CustomersListAddressesParams } from '../declarations/types-17.js';
export {
    makeCheckoutBuyerFieldsRequest,
    makeCheckoutCustomTextWriteConfig,
    makeCheckoutLegalConfigRequest,
    makeCheckoutPaymentConfigRequest,
    makeCheckoutPromotionConfigRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutTaxCalculationRequest,
    makeCheckoutTaxConfigRequest,
    makeCheckoutTipConfigRequest
} from '../declarations/types-82.js';
export { makeCreateShopRequest } from '../declarations/types-85.js';
export {
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-88.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-89.js';
export {
    makePaymentLinkResolvePrefillRequest,
    makePublicCatalogModifierInputCatalog,
    makePublicCatalogModifierInputText
} from '../declarations/types-91.js';
export {
    makePublicCatalogModifierRequest,
    makePublicCatalogTextModifierRequest,
    makeResolveShopLineItemRequest,
    makeResolveShopRequest
} from '../declarations/types-92.js';
export {
    makeShopListingInputBundle,
    makeShopListingInputProduct,
    makeShopListingPatchInputBundle,
    makeShopListingPatchInputProduct,
    makeShopListingPatchRequest,
    makeShopListingRequest
} from '../declarations/types-93.js';
export { makeTextModifierConfigRequest } from '../declarations/types-94.js';
export { makeUpdateShopRequest } from '../declarations/types-95.js';
export interface ShopsResource {
    /**
 * Creates a shop for the selected environment.
 *
 * `POST /v1/shops`
 * @see https://developers.withflintpay.com/docs/api/shops#createShop
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shops.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: ShopsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Shop, ShopResponse>>;
    /**
 * Archives the shop and leaves it readable. Archiving closes open, unpaid checkouts. Payments
 * already in progress can finish.
 *
 * `DELETE /v1/shops/{shop_id}`
 * @param shop_id Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/shops#deleteShop
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shops.delete("shop_01KEZF7C005VQBPV4FZHDZPAHE", {}, { idempotencyKey: idempotencyKey })
 */
    delete(shop_id: InputValue<string>, params?: ShopsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Shop, ShopResponse>>;
    /**
 * Returns a shop by ID.
 *
 * `GET /v1/shops/{shop_id}`
 * @param shop_id Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/shops#getShop
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shops.get("shop_01KEZF7C005VQBPV4FZHDZPAHE")
 */
    get(shop_id: InputValue<string>, params?: ShopsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Shop, ShopResponse>>;
    /**
 * Get public shop listing without an API key.
 *
 * `GET /v1/shops/{shop_id}/listings/{shop_listing_id}/public`
 * @param shop_id Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @param shop_listing_id Flint shop listing ID. Must be a valid ID with prefix shl_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/shops#getShopListingPublic
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shops.getListingPublic("shop_01KEZF7C005VQBPV4FZHDZPAHE",
 * "shl_01KEZF7C005YZXRPWEH31ZXGKA")
 */
    getListingPublic(shop_id: InputValue<string>, shop_listing_id: InputValue<string>, params?: ShopsGetListingPublicParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<PublicShopListing, PublicShopListingResponse>>;
    /**
 * Get public shop without an API key.
 *
 * `GET /v1/shops/{shop_id}/public`
 * @param shop_id Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/shops#getShopPublic
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shops.getPublic("shop_01KEZF7C005VQBPV4FZHDZPAHE")
 */
    getPublic(shop_id: InputValue<string>, params?: ShopsGetPublicParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<PublicShopResult, PublicShopResponse>>;
    /**
 * Returns the shop's owned listings in display order. Default order: display position (ascending);
 * this key uniquely orders the results.
 *
 * `GET /v1/shops/{shop_id}/listings`
 * @param shop_id Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/shops#listShopListings
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shops.listListings("shop_01KEZF7C005VQBPV4FZHDZPAHE")
 */
    listListings(shop_id: InputValue<string>, params?: ShopsListListingsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ShopListingListResponse, ShopListingListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/shops#listShopListings
     */
    listListingsPages(shop_id: InputValue<string>, params?: ShopsListListingsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ShopListingListResponse, ShopListingListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/shops#listShopListings
     */
    listListingsItems(shop_id: InputValue<string>, params?: ShopsListListingsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ShopListing>;
    /**
 * Lists shops in the selected environment. Default order: created_at descending, then shop_id
 * descending.
 *
 * `GET /v1/shops`
 * @see https://developers.withflintpay.com/docs/api/shops#listShops
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.shops.list()
 */
    list(params?: ShopsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ShopListResponse, ShopListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/shops#listShops
     */
    listPages(params?: ShopsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ShopListResponse, ShopListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/shops#listShops
     */
    listItems(params?: ShopsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Shop>;
    /**
 * Creates a hosted checkout session and its order from a cart. Reuse the same resolution context
 * and idempotency key to retry the same cart.
 *
 * `POST /v1/shops/{shop_id}/resolve`
 * @param shop_id Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/shops#resolveShop
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shops.resolve("shop_01KEZF7C005VQBPV4FZHDZPAHE", {line_items: [{quantity: 2,
 * shop_listing_id: "shl_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], resolution_context: "shrc_v1.example"}, {
 * idempotencyKey: idempotencyKey })
 */
    resolve(shop_id: InputValue<string>, params: ShopsResolveParams, options?: RequestOptions<never>): Promise<WithResponseInfo<ResolvedShopCheckout, ResolveShopResponse>>;
    /**
 * Updates a shop. Setting status to inactive closes open, unpaid checkouts. Payments already in
 * progress can finish.
 *
 * `PATCH /v1/shops/{shop_id}`
 * @param shop_id Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/shops#updateShop
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.shops.update("shop_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Updated shop
 * description"}, { idempotencyKey: idempotencyKey })
 */
    update(shop_id: InputValue<string>, params: ShopsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Shop, ShopResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly shops: ShopsResource;
}
