import type { InputValue } from '../runtime.js';
import type {
    Bundle,
    BundleComponent,
    BundleComponentListResponse,
    BundleListResponse,
    BundleResponse,
    BundlesCreateInput
} from '../declarations/types-0.js';
import type {
    BundlesGetInput,
    BundlesListComponentsInput,
    BundlesListInput,
    BundlesRemoveInput,
    BundlesUpdateInput
} from '../declarations/types-1.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateBundleRequestInput } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateBundleRequestInput } from '../declarations/types-47.js';
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
export type { CreateBundleRequestInput, CreateBundleComponentRequestInput, CreateBundleComponentRequest } from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    Bundle,
    BundleResponse,
    BundleComponentListResponse,
    BundleComponent,
    BundleListResponse,
    BundlesCreateInput,
    AuthMode,
    BundleComponentVariantSummary
} from '../declarations/types-0.js';
export type { SdkResponse, SelectedProductOption } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type {
    UpdateBundleRequestInput,
    TextModifierConfig,
    UpdateBundleComponentRequestInput,
    UpdateBundleComponentRequest
} from '../declarations/types-47.js';
export type {
    BundlesRemoveInput,
    BundlesGetInput,
    BundlesListComponentsInput,
    BundlesListInput,
    BundlesUpdateInput
} from '../declarations/types-1.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { ImageRequestInput } from '../declarations/types-20.js';
export type {
    MoneyValueInput,
    ModifierSet,
    ModifierSetGroup,
    ModifierGroup,
    Modifier,
    MoneyValue,
    ModifierOverride,
    ModifierSetGroupExisting,
    ModifierSetGroupInline,
    NextAction,
    NextActionMerchantAccountSession
} from '../declarations/types-31.js';
export type { Credentials } from '../declarations/types-9.js';
export type { CategoryReference } from '../declarations/types-3.js';
export type { ImageAttachment } from '../declarations/types-19.js';
export { makeCreateBundleComponentRequest, makeCreateBundleRequest } from '../declarations/types-63.js';
export { makeImageRequest } from '../declarations/types-67.js';
export { makeModifierOverride, makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateBundleComponentRequest, makeUpdateBundleRequest } from '../declarations/types-72.js';
export interface BundlesResource {
    /**
 * Create bundle.
 * @see reference/bundles.md#bundlescreate
 * POST /v1/bundles
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.create({name: "example", unit_price_money: {amount: "100", currency: "USD"}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateBundleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Bundle>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/bundles.md#bundlescreate
     */
    createWithResponse(params: (InputValue<CreateBundleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<BundleResponse>>;
    /**
 * Archives a bundle and returns its final state. Returns the archived resource exactly as GET
 * returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a
 * webhook, or checking references. When expected_version is present, it is compared before the
 * archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.
 * @see reference/bundles.md#bundlesremove
 * DELETE /v1/bundles/{bundle_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(bundle_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Bundle>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/bundles.md#bundlesremove
     */
    removeWithResponse(bundle_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<BundleResponse>>;
    /**
 * Get bundle.
 * @see reference/bundles.md#bundlesget
 * GET /v1/bundles/{bundle_id}
 * @example
 * client.bundles.get("example")
 */
    get(bundle_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Bundle>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/bundles.md#bundlesget
     */
    getWithResponse(bundle_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<BundleResponse>>;
    /**
 * List bundle components.
 * @see reference/bundles.md#bundleslistcomponents
 * GET /v1/bundles/{bundle_id}/components
 * @example
 * client.bundles.listComponents("example")
 */
    listComponents(bundle_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<BundleComponentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/bundles.md#bundleslistcomponents
     */
    listComponentsWithResponse(bundle_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<BundleComponentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/bundles.md#bundleslistcomponents
     */
    listComponentsPages(bundle_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<BundleComponentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/bundles.md#bundleslistcomponents
     */
    listComponentsPagesWithResponse(bundle_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<BundleComponentListResponse>>;
    /** Iterate items lazily.
     * @see reference/bundles.md#bundleslistcomponents
     */
    listComponentsItems(bundle_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<BundleComponent>;
    /**
 * List bundles.
 * @see reference/bundles.md#bundleslist
 * GET /v1/bundles
 * @example
 * client.bundles.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "query"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<BundleListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/bundles.md#bundleslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "query"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<BundleListResponse>>;
    /** Iterate pages lazily.
     * @see reference/bundles.md#bundleslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "query"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<BundleListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/bundles.md#bundleslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "query"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<BundleListResponse>>;
    /** Iterate items lazily.
     * @see reference/bundles.md#bundleslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "sku"?: InputValue<string>;
        "query"?: InputValue<string>;
        "category_handle"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "delivery_profile_id"?: InputValue<string>;
        "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"modifier_set">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Bundle>;
    /**
 * Update bundle. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and
 * current_status archived. The error identifies the archived resource; a create under an archived
 * parent identifies that parent.
 * @see reference/bundles.md#bundlesupdate
 * PATCH /v1/bundles/{bundle_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.bundles.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(bundle_id: InputValue<string>, params: (InputValue<UpdateBundleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Bundle>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/bundles.md#bundlesupdate
     */
    updateWithResponse(bundle_id: InputValue<string>, params: (InputValue<UpdateBundleRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<BundleResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly bundles: BundlesResource;
}
