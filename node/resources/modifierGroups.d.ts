import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateModifierGroupRequestInput } from '../declarations/types-7.js';
import type {
    ModifierGroup,
    ModifierGroupListResponse,
    ModifierGroupResponse,
    ModifierGroupsCreateInput,
    ModifierGroupsGetInput,
    ModifierGroupsListInput,
    ModifierGroupsRemoveInput,
    ModifierGroupsUpdateInput
} from '../declarations/types-31.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateModifierGroupRequestInput } from '../declarations/types-48.js';
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
export type { CreateModifierGroupRequestInput, CreateModifierRequestInput } from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    ModifierGroup,
    ModifierGroupResponse,
    ModifierGroupListResponse,
    ModifierGroupsCreateInput,
    ModifierGroupsRemoveInput,
    ModifierGroupsGetInput,
    ModifierGroupsListInput,
    ModifierGroupsUpdateInput,
    MoneyValueInput,
    Modifier,
    MoneyValue,
    NextAction,
    NextActionMerchantAccountSession,
    ModifierRequestInput
} from '../declarations/types-31.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { UpdateModifierGroupRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    TextModifierConfigRequestInput,
    TextModifierConfig,
    TextModifierConfigPatchRequestInput,
    TextModifierConfigRequest,
    TextModifierConfigPatchRequest
} from '../declarations/types-47.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { CreateInlineModifierGroupRequestInput } from '../declarations/types-6.js';
export { makeCreateInlineModifierGroupRequest, makeCreateModifierGroupRequest, makeCreateModifierRequest } from '../declarations/types-63.js';
export { makeModifierRequest, makeMoneyValue } from '../declarations/types-68.js';
export { makeTextModifierConfigPatchRequest, makeTextModifierConfigRequest } from '../declarations/types-71.js';
export { makeUpdateModifierGroupRequest } from '../declarations/types-72.js';
export interface ModifierGroupsResource {
    /**
 * Create modifier group.
 * @see reference/modifierGroups.md#modifiergroupscreate
 * POST /v1/modifier-groups
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateModifierGroupRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ModifierGroup>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierGroups.md#modifiergroupscreate
     */
    createWithResponse(params: (InputValue<CreateModifierGroupRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierGroupResponse>>;
    /**
 * Retire modifier group. Returns the archived resource exactly as GET returns it. Repeating DELETE
 * returns 200 without changing version or updated_at, sending a webhook, or checking references.
 * When expected_version is present, it is compared before the archived replay; a stale version
 * returns 409 VERSION_CONFLICT with current_version.
 * @see reference/modifierGroups.md#modifiergroupsremove
 * DELETE /v1/modifier-groups/{modifier_group_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(modifier_group_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ModifierGroup>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierGroups.md#modifiergroupsremove
     */
    removeWithResponse(modifier_group_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierGroupResponse>>;
    /**
 * Get modifier group.
 * @see reference/modifierGroups.md#modifiergroupsget
 * GET /v1/modifier-groups/{modifier_group_id}
 * @example
 * client.modifierGroups.get("example")
 */
    get(modifier_group_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ModifierGroup>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierGroups.md#modifiergroupsget
     */
    getWithResponse(modifier_group_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ModifierGroupResponse>>;
    /**
 * List modifier groups.
 * @see reference/modifierGroups.md#modifiergroupslist
 * GET /v1/modifier-groups
 * @example
 * client.modifierGroups.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "modifier_group_type"?: InputValue<Array<"list" | "text">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ModifierGroupListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierGroups.md#modifiergroupslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "modifier_group_type"?: InputValue<Array<"list" | "text">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ModifierGroupListResponse>>;
    /** Iterate pages lazily.
     * @see reference/modifierGroups.md#modifiergroupslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "modifier_group_type"?: InputValue<Array<"list" | "text">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ModifierGroupListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/modifierGroups.md#modifiergroupslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "modifier_group_type"?: InputValue<Array<"list" | "text">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ModifierGroupListResponse>>;
    /** Iterate items lazily.
     * @see reference/modifierGroups.md#modifiergroupslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "modifier_group_type"?: InputValue<Array<"list" | "text">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ModifierGroup>;
    /**
 * Update modifier group. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
 * @see reference/modifierGroups.md#modifiergroupsupdate
 * PATCH /v1/modifier-groups/{modifier_group_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(modifier_group_id: InputValue<string>, params: (InputValue<UpdateModifierGroupRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<ModifierGroup>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierGroups.md#modifiergroupsupdate
     */
    updateWithResponse(modifier_group_id: InputValue<string>, params: (InputValue<UpdateModifierGroupRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierGroupResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly modifierGroups: ModifierGroupsResource;
}
