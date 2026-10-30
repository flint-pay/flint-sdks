import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    ModifierSet,
    ModifierSetListResponse,
    ModifierSetResponse,
    ModifierSetsCreateParams,
    ModifierSetsDeleteParams,
    ModifierSetsGetParams,
    ModifierSetsListParams,
    ModifierSetsUpdateParams
} from '../declarations/types-35.js';
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
    ModifierSetsCreateParams,
    ModifierSet,
    ModifierSetResponse,
    ModifierSetsDeleteParams,
    ModifierSetsGetParams,
    ModifierSetsListParams,
    ModifierSetListResponse,
    ModifierSetsUpdateParams,
    MoneyValueInput,
    ModifierOverrideInput,
    ModifierSetGroup,
    MoneyValue,
    ModifierOverride,
    ModifierSetGroupExisting,
    ModifierSetGroupInline,
    NextAction,
    ModifierSetGroupRequestInput,
    ModifierRequestInput,
    ModifierSetGroupInputExistingInput,
    ModifierSetGroupInputInlineInput
} from '../declarations/types-35.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type {
    CreateModifierSetRequestInput,
    CreateModifierSetGroupRequestInput,
    CreateModifierRequestInput,
    CreateModifierSetGroupInputExistingInput,
    CreateModifierSetGroupInputInlineInput
} from '../declarations/types-9.js';
export type {
    MetadataRequestInput,
    MetadataMap,
    ModifierGroup,
    Modifier,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-34.js';
export type { CreateInlineModifierGroupRequestInput } from '../declarations/types-8.js';
export type { TextModifierConfigRequestInput, TextModifierConfig, TextModifierConfigRequest } from '../declarations/types-57.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateModifierSetRequestInput } from '../declarations/types-59.js';
export type { InlineModifierGroupRequestInput } from '../declarations/types-25.js';
export { makeCreateInlineModifierGroupRequest } from '../declarations/types-63.js';
export {
    makeCreateModifierRequest,
    makeCreateModifierSetGroupInputExisting,
    makeCreateModifierSetGroupInputInline,
    makeCreateModifierSetGroupRequest,
    makeCreateModifierSetRequest
} from '../declarations/types-64.js';
export { makeInlineModifierGroupRequest } from '../declarations/types-68.js';
export {
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeModifierOverride,
    makeModifierRequest,
    makeModifierSetGroupInputExisting,
    makeModifierSetGroupInputInline,
    makeModifierSetGroupRequest,
    makeMoneyValue
} from '../declarations/types-69.js';
export { makeTextModifierConfigRequest } from '../declarations/types-73.js';
export { makeUpdateModifierSetRequest } from '../declarations/types-74.js';
export interface ModifierSetsResource {
    /**
 * Create modifier set.
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
 * Retire modifier set. Returns the archived resource exactly as GET returns it. Repeating DELETE
 * returns 200 without changing version or updated_at, sending a webhook, or checking references.
 * When expected_version is present, it is compared before the archived replay; a stale version
 * returns 409 VERSION_CONFLICT with current_version.
 *
 * `DELETE /v1/modifier-sets/{modifier_set_id}`
 * @param modifier_set_id Flint modifier set ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#deleteModifierSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.delete("ms_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(modifier_set_id: InputValue<string>, params?: ModifierSetsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierSet, ModifierSetResponse>>;
    /**
 * Get modifier set.
 *
 * `GET /v1/modifier-sets/{modifier_set_id}`
 * @param modifier_set_id Flint modifier set ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#getModifierSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.modifierSets.get("ms_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
 * Update modifier set. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
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
