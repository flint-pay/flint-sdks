import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    ModifierSet,
    ModifierSetListResponse,
    ModifierSetResponse,
    ModifierSetsCreateParams,
    ModifierSetsDeleteParams,
    ModifierSetsGetParams,
    ModifierSetsListParams,
    ModifierSetsUpdateParams
} from '../declarations/types-38.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    ModifierSetsCreateParams,
    ModifierSet,
    ModifierSetResponse,
    ModifierSetsDeleteParams,
    ModifierSetsGetParams,
    ModifierSetsListParams,
    ModifierSetListResponse,
    ModifierSetsUpdateParams,
    MetadataRequestInput,
    MoneyValueInput,
    ModifierOverrideRequestInput,
    ModifierSetGroup,
    ModifierGroup,
    Modifier,
    MoneyValue,
    ModifierOverride,
    NextAction,
    ModifierSetGroupRequestInput,
    ModifierRequestInput,
    ModifierSetGroupInputExistingInput,
    ModifierSetGroupInputInlineInput
} from '../declarations/types-38.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CreateModifierSetRequestInput,
    CreateModifierSetGroupRequestInput,
    CreateModifierRequestInput,
    CreateModifierSetGroupInputExistingInput,
    CreateModifierSetGroupInputInlineInput
} from '../declarations/types-10.js';
export type { CreateInlineModifierGroupRequestInput } from '../declarations/types-9.js';
export type { TextModifierConfigRequestInput, TextModifierConfig, TextModifierConfigRequest } from '../declarations/types-65.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateModifierSetRequestInput } from '../declarations/types-67.js';
export type { InlineModifierGroupRequestInput } from '../declarations/types-28.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreateInlineModifierGroupRequest } from '../declarations/types-72.js';
export {
    makeCreateModifierRequest,
    makeCreateModifierSetGroupInputExisting,
    makeCreateModifierSetGroupInputInline,
    makeCreateModifierSetGroupRequest,
    makeCreateModifierSetRequest
} from '../declarations/types-73.js';
export { makeInlineModifierGroupRequest } from '../declarations/types-76.js';
export {
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeModifierOverrideRequest,
    makeModifierRequest,
    makeModifierSetGroupInputExisting,
    makeModifierSetGroupInputInline,
    makeModifierSetGroupRequest,
    makeMoneyValue
} from '../declarations/types-78.js';
export { makeTextModifierConfigRequest } from '../declarations/types-82.js';
export { makeUpdateModifierSetRequest } from '../declarations/types-83.js';
export interface ModifierSetsResource {
    /**
 * Creates a modifier set, a reusable collection of modifier groups that you attach to products,
 * variants, and bundles by `modifier_set_id`. Send `name` and the ordered `modifier_groups`, each
 * referencing a reusable group or defining a group owned by the set.
 *
 * `POST /v1/modifier-sets`
 * @see https://developers.withflintpay.com/docs/api/modifiers#createModifierSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: ModifierSetsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierSet, ModifierSetResponse>>;
    /**
 * Archives a modifier set and returns its final state. A set that is still attached to a product,
 * variant, or bundle fails with `RESOURCE_IN_USE`; set `modifier_set_id` to `null` on each of them
 * first. Returns the archived resource as a read does. Deleting an already archived resource
 * returns it again without changing its version or `updated_at`, sending a webhook, or checking
 * references. A stale `expected_version` fails with `VERSION_CONFLICT` and the `current_version`,
 * even when the resource is already archived.
 *
 * `DELETE /v1/modifier-sets/{modifier_set_id}`
 * @param modifier_set_id Flint modifier set ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#deleteModifierSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.delete("ms_01KEZF7C007EWZVVFAWVJJM8NR", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(modifier_set_id: InputValue<string>, params?: ModifierSetsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierSet, ModifierSetResponse>>;
    /**
 * Returns one modifier set by ID, with its ordered modifier groups.
 *
 * `GET /v1/modifier-sets/{modifier_set_id}`
 * @param modifier_set_id Flint modifier set ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#getModifierSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.modifierSets.get("ms_01KEZF7C007EWZVVFAWVJJM8NR")
 */
    get(modifier_set_id: InputValue<string>, params?: ModifierSetsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ModifierSet, ModifierSetResponse>>;
    /**
 * List modifier sets. Default order: created_at descending, then modifier_set_id descending.
 *
 * `GET /v1/modifier-sets`
 * @see https://developers.withflintpay.com/docs/api/modifiers#listModifierSets
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.modifierSets.list()
 */
    list(params?: ModifierSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ModifierSetListResponse, ModifierSetListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/modifiers#listModifierSets
     */
    listPages(params?: ModifierSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ModifierSetListResponse, ModifierSetListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/modifiers#listModifierSets
     */
    listItems(params?: ModifierSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ModifierSet>;
    /**
 * Applies a sparse update to a modifier set: only the fields you send change. Sending
 * `modifier_groups` replaces the set's group entries; entries you leave out are removed, and
 * `expected_version` is required with it. A stale version fails with `VERSION_CONFLICT`. Fails
 * with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent it belongs to,
 * is archived. The error names the archived resource and its `current_status`.
 *
 * `PATCH /v1/modifier-sets/{modifier_set_id}`
 * @param modifier_set_id Flint modifier set ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#updateModifierSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.update("ms_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Lunch options"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(modifier_set_id: InputValue<string>, params: ModifierSetsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierSet, ModifierSetResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly modifierSets: ModifierSetsResource;
}
