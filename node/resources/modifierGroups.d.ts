import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { ModifierGroup } from '../declarations/types-34.js';
import type {
    ModifierGroupListResponse,
    ModifierGroupResponse,
    ModifierGroupsCreateParams,
    ModifierGroupsDeleteParams,
    ModifierGroupsGetParams,
    ModifierGroupsListParams,
    ModifierGroupsUpdateParams
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
    ModifierGroupsCreateParams,
    ModifierGroupResponse,
    ModifierGroupsDeleteParams,
    ModifierGroupsGetParams,
    ModifierGroupsListParams,
    ModifierGroupListResponse,
    ModifierGroupsUpdateParams,
    MoneyValueInput,
    MoneyValue,
    NextAction,
    ModifierRequestInput
} from '../declarations/types-35.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    ModifierGroup,
    MetadataRequestInput,
    MetadataMap,
    Modifier,
    MetadataPatchRequestInput,
    MetadataPatchRequest
} from '../declarations/types-34.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateModifierGroupRequestInput, CreateModifierRequestInput } from '../declarations/types-9.js';
export type {
    TextModifierConfigRequestInput,
    TextModifierConfig,
    TextModifierConfigPatchRequestInput,
    TextModifierConfigRequest,
    TextModifierConfigPatchRequest
} from '../declarations/types-57.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateModifierGroupRequestInput } from '../declarations/types-59.js';
export type { CreateInlineModifierGroupRequestInput } from '../declarations/types-8.js';
export { makeCreateInlineModifierGroupRequest } from '../declarations/types-63.js';
export { makeCreateModifierGroupRequest, makeCreateModifierRequest } from '../declarations/types-64.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeModifierRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeTextModifierConfigPatchRequest, makeTextModifierConfigRequest } from '../declarations/types-73.js';
export { makeUpdateModifierGroupRequest } from '../declarations/types-74.js';
export interface ModifierGroupsResource {
    /**
 * Create modifier group.
 *
 * `POST /v1/modifier-groups`
 * @see https://developers.withflintpay.com/docs/api/modifiers#createModifierGroup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: ModifierGroupsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierGroup, ModifierGroupResponse>>;
    /**
 * Retire modifier group. Returns the archived resource exactly as GET returns it. Repeating DELETE
 * returns 200 without changing version or updated_at, sending a webhook, or checking references.
 * When expected_version is present, it is compared before the archived replay; a stale version
 * returns 409 VERSION_CONFLICT with current_version.
 *
 * `DELETE /v1/modifier-groups/{modifier_group_id}`
 * @param modifier_group_id Flint modifier group ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#deleteModifierGroup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.delete("mg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(modifier_group_id: InputValue<string>, params?: ModifierGroupsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierGroup, ModifierGroupResponse>>;
    /**
 * Get modifier group.
 *
 * `GET /v1/modifier-groups/{modifier_group_id}`
 * @param modifier_group_id Flint modifier group ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#getModifierGroup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.modifierGroups.get("mg_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(modifier_group_id: InputValue<string>, params?: ModifierGroupsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ModifierGroup, ModifierGroupResponse>>;
    /**
 * List modifier groups. Default order: created_at descending, then modifier_group_id descending.
 *
 * `GET /v1/modifier-groups`
 * @see https://developers.withflintpay.com/docs/api/modifiers#listModifierGroups
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.modifierGroups.list()
 */
    list(params?: ModifierGroupsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ModifierGroupListResponse, ModifierGroupListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/modifiers#listModifierGroups
     */
    listPages(params?: ModifierGroupsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ModifierGroupListResponse, ModifierGroupListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/modifiers#listModifierGroups
     */
    listItems(params?: ModifierGroupsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ModifierGroup>;
    /**
 * Update modifier group. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
 *
 * `PATCH /v1/modifier-groups/{modifier_group_id}`
 * @param modifier_group_id Flint modifier group ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#updateModifierGroup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.update("mg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Add-ons"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(modifier_group_id: InputValue<string>, params: ModifierGroupsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierGroup, ModifierGroupResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly modifierGroups: ModifierGroupsResource;
}
