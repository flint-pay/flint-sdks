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
import type { ClientOptions } from '../declarations/types-6.js';
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
    AuthMode,
    BundleComponentVariantSummary
} from '../declarations/types-1.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateBundleRequestInput, CreateBundleComponentRequestInput, CreateBundleComponentRequest } from '../declarations/types-7.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment } from '../declarations/types-28.js';
export type {
    MetadataRequestInput,
    MetadataMap,
    ModifierSet,
    ModifierSetGroup,
    ModifierGroup,
    Modifier,
    ModifierOverride,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-38.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-39.js';
export type { Credentials } from '../declarations/types-14.js';
export type { CategoryReference } from '../declarations/types-5.js';
export type { TextModifierConfig } from '../declarations/types-65.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { SelectedProductOption } from '../declarations/types-59.js';
export type { UpdateBundleRequestInput, UpdateBundleComponentRequestInput, UpdateBundleComponentRequest } from '../declarations/types-66.js';
export { makeCreateBundleComponentRequest, makeCreateBundleRequest } from '../declarations/types-72.js';
export { makeImageInputFile, makeImageInputSourceURL, makeImageRequest } from '../declarations/types-77.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-79.js';
export { makeUpdateBundleComponentRequest, makeUpdateBundleRequest } from '../declarations/types-83.js';
export interface BundlesResource {
    /**
 * Creates a bundle: several product variants sold as one line at a single price. Send `name` and
 * `unit_price_money`, and list the `components` (variants and quantities). An active bundle needs
 * at least one component, every component must be active, and all components must share the same
 * taxable setting and tax category. A SKU or barcode that another variant or bundle already uses
 * fails with `ALREADY_EXISTS`.
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
 * Archives a bundle and returns its final state. Returns the archived resource as a read does.
 * Deleting an already archived resource returns it again without changing its version or
 * `updated_at`, sending a webhook, or checking references. A stale `expected_version` fails with
 * `VERSION_CONFLICT` and the `current_version`, even when the resource is already archived.
 *
 * `DELETE /v1/bundles/{bundle_id}`
 * @param bundle_id Flint bundle ID.
 * @see https://developers.withflintpay.com/docs/api/bundles#deleteBundle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.delete("bun_01KEZF7C00TQ6S76Z6CVQF5SVN", {}, { idempotencyKey: idempotencyKey })
 */
    delete(bundle_id: InputValue<string>, params?: BundlesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Bundle, BundleResponse>>;
    /**
 * Returns one bundle by ID, with its price, components, and whether it is available for sale.
 *
 * `GET /v1/bundles/{bundle_id}`
 * @param bundle_id Flint bundle ID.
 * @see https://developers.withflintpay.com/docs/api/bundles#getBundle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.bundles.get("bun_01KEZF7C00TQ6S76Z6CVQF5SVN")
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
 * client.bundles.listComponents("bun_01KEZF7C00TQ6S76Z6CVQF5SVN")
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
 * Applies a sparse update to a bundle: only the fields you send change. Sending `components`
 * replaces the whole list; omitted components are removed. `expected_version` is required when you
 * send `components` or `images`, and a stale version fails with `VERSION_CONFLICT`. A SKU or
 * barcode that another variant or bundle already uses fails with `ALREADY_EXISTS`. Fails with
 * `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent it belongs to, is
 * archived. The error names the archived resource and its `current_status`.
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
