import type { WithResponseInfo, InputValue } from '../runtime.js';
import type {
    Bundle,
    BundleComponent,
    BundleComponentListResponse,
    BundleListResponse,
    BundleResponse,
    BundlesCreateParams,
    BundlesDeleteParams,
    BundlesGetParams,
    BundlesListComponentsParams,
    BundlesListParams,
    BundlesUpdateParams
} from '../declarations/types-1.js';
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
    BundlesCreateParams,
    Bundle,
    BundleResponse,
    BundlesDeleteParams,
    BundlesGetParams,
    BundlesListComponentsParams,
    BundleComponentListResponse,
    BundleComponent,
    BundlesListParams,
    BundleListResponse,
    BundlesUpdateParams,
    BundleComponentVariantSummary
} from '../declarations/types-1.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateBundleRequestInput, CreateBundleComponentRequestInput, CreateBundleComponentRequest } from '../declarations/types-6.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment } from '../declarations/types-25.js';
export type {
    MetadataRequestInput,
    MetadataMap,
    ModifierGroup,
    Modifier,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-34.js';
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
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { CategoryReference } from '../declarations/types-4.js';
export type { TextModifierConfig } from '../declarations/types-57.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { SelectedProductOption } from '../declarations/types-53.js';
export type { UpdateBundleRequestInput, UpdateBundleComponentRequestInput, UpdateBundleComponentRequest } from '../declarations/types-58.js';
export { makeCreateBundleComponentRequest, makeCreateBundleRequest } from '../declarations/types-63.js';
export { makeImageInputFile, makeImageInputSourceURL } from '../declarations/types-67.js';
export { makeImageRequest } from '../declarations/types-68.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeModifierOverride, makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateBundleComponentRequest, makeUpdateBundleRequest } from '../declarations/types-73.js';
export interface BundlesResource {
    /**
 * Create bundle.
 *
 * `POST /v1/bundles`
 * @see https://developers.withflintpay.com/docs/api/bundles#createBundle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.create({name: "example", unit_price_money: {amount: "100", currency: "USD"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: BundlesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Bundle, BundleResponse>>;
    /**
 * Archives a bundle and returns its final state. Returns the archived resource exactly as GET
 * returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a
 * webhook, or checking references. When expected_version is present, it is compared before the
 * archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.
 *
 * `DELETE /v1/bundles/{bundle_id}`
 * @param bundle_id Flint bundle ID.
 * @see https://developers.withflintpay.com/docs/api/bundles#deleteBundle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.delete("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    delete(bundle_id: InputValue<string>, params?: BundlesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Bundle, BundleResponse>>;
    /**
 * Get bundle.
 *
 * `GET /v1/bundles/{bundle_id}`
 * @param bundle_id Flint bundle ID.
 * @see https://developers.withflintpay.com/docs/api/bundles#getBundle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.bundles.get("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(bundle_id: InputValue<string>, params?: BundlesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Bundle, BundleResponse>>;
    /**
 * List bundle components. Default order: position ascending, then bundle_component_id ascending.
 *
 * `GET /v1/bundles/{bundle_id}/components`
 * @param bundle_id Flint bundle ID.
 * @see https://developers.withflintpay.com/docs/api/bundles#listBundleComponents
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.bundles.listComponents("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listComponents(bundle_id: InputValue<string>, params?: BundlesListComponentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<BundleComponentListResponse, BundleComponentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/bundles#listBundleComponents
     */
    listComponentsPages(bundle_id: InputValue<string>, params?: BundlesListComponentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<BundleComponentListResponse, BundleComponentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/bundles#listBundleComponents
     */
    listComponentsItems(bundle_id: InputValue<string>, params?: BundlesListComponentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<BundleComponent>;
    /**
 * List bundles. Default order: created_at descending, then bundle_id descending.
 *
 * `GET /v1/bundles`
 * @see https://developers.withflintpay.com/docs/api/bundles#listBundles
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.bundles.list()
 */
    list(params?: BundlesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<BundleListResponse, BundleListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/bundles#listBundles
     */
    listPages(params?: BundlesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<BundleListResponse, BundleListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/bundles#listBundles
     */
    listItems(params?: BundlesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Bundle>;
    /**
 * Update bundle. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and
 * current_status archived. The error identifies the archived resource; a create under an archived
 * parent identifies that parent.
 *
 * `PATCH /v1/bundles/{bundle_id}`
 * @param bundle_id Flint bundle ID.
 * @see https://developers.withflintpay.com/docs/api/bundles#updateBundle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.update("bun_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Weekend admission pass"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(bundle_id: InputValue<string>, params: BundlesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Bundle, BundleResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly bundles: BundlesResource;
}
