import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateModifierSetRequestInput } from '../declarations/types-7.js';
import type {
    ModifierSet,
    ModifierSetListResponse,
    ModifierSetResponse,
    ModifierSetsCreateInput,
    ModifierSetsGetInput,
    ModifierSetsListInput,
    ModifierSetsRemoveInput,
    ModifierSetsUpdateInput
} from '../declarations/types-31.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateModifierSetRequestInput } from '../declarations/types-48.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type {
    CreateModifierSetRequestInput,
    CreateModifierSetGroupRequestInput,
    CreateModifierRequestInput,
    CreateModifierSetGroupInputExistingInput,
    CreateModifierSetGroupInputInlineInput
} from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    ModifierSet,
    ModifierSetResponse,
    ModifierSetListResponse,
    ModifierSetsCreateInput,
    ModifierSetsRemoveInput,
    ModifierSetsGetInput,
    ModifierSetsListInput,
    ModifierSetsUpdateInput,
    MoneyValueInput,
    ModifierOverrideInput,
    ModifierSetGroup,
    ModifierGroup,
    Modifier,
    MoneyValue,
    ModifierOverride,
    ModifierSetGroupExisting,
    ModifierSetGroupInline,
    NextAction,
    NextActionMerchantAccountSession,
    ModifierSetGroupRequestInput,
    ModifierRequestInput,
    ModifierSetGroupInputExistingInput,
    ModifierSetGroupInputInlineInput
} from '../declarations/types-31.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateModifierSetRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { CreateInlineModifierGroupRequestInput } from '../declarations/types-6.js';
export type { TextModifierConfigRequestInput, TextModifierConfig, TextModifierConfigRequest } from '../declarations/types-47.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { InlineModifierGroupRequestInput } from '../declarations/types-23.js';
export {
    makeCreateInlineModifierGroupRequest,
    makeCreateModifierRequest,
    makeCreateModifierSetGroupInputExisting,
    makeCreateModifierSetGroupInputInline,
    makeCreateModifierSetGroupRequest,
    makeCreateModifierSetRequest
} from '../declarations/types-64.js';
export { makeInlineModifierGroupRequest } from '../declarations/types-67.js';
export {
    makeModifierOverride,
    makeModifierRequest,
    makeModifierSetGroupInputExisting,
    makeModifierSetGroupInputInline,
    makeModifierSetGroupRequest,
    makeMoneyValue
} from '../declarations/types-68.js';
export { makeTextModifierConfigRequest } from '../declarations/types-72.js';
export { makeUpdateModifierSetRequest } from '../declarations/types-73.js';
export interface ModifierSetsResource {
    /**
 * Create modifier set.
 * @see reference/modifierSets.md#modifiersetscreate
 * POST /v1/modifier-sets
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateModifierSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ModifierSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierSets.md#modifiersetscreate
     */
    createWithResponse(params: (InputValue<CreateModifierSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ModifierSetResponse>>;
    /**
 * Retire modifier set. Returns the archived resource exactly as GET returns it. Repeating DELETE
 * returns 200 without changing version or updated_at, sending a webhook, or checking references.
 * When expected_version is present, it is compared before the archived replay; a stale version
 * returns 409 VERSION_CONFLICT with current_version.
 * @see reference/modifierSets.md#modifiersetsremove
 * DELETE /v1/modifier-sets/{modifier_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(modifier_set_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ModifierSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierSets.md#modifiersetsremove
     */
    removeWithResponse(modifier_set_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ModifierSetResponse>>;
    /**
 * Get modifier set.
 * @see reference/modifierSets.md#modifiersetsget
 * GET /v1/modifier-sets/{modifier_set_id}
 * @example
 * client.modifierSets.get("example")
 */
    get(modifier_set_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ModifierSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierSets.md#modifiersetsget
     */
    getWithResponse(modifier_set_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ModifierSetResponse>>;
    /**
 * List modifier sets.
 * @see reference/modifierSets.md#modifiersetslist
 * GET /v1/modifier-sets
 * @example
 * client.modifierSets.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ModifierSetListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierSets.md#modifiersetslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ModifierSetListResponse>>;
    /** Iterate pages lazily.
     * @see reference/modifierSets.md#modifiersetslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ModifierSetListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/modifierSets.md#modifiersetslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ModifierSetListResponse>>;
    /** Iterate items lazily.
     * @see reference/modifierSets.md#modifiersetslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ModifierSet>;
    /**
 * Update modifier set. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived
 * and current_status archived. The error identifies the archived resource; a create under an
 * archived parent identifies that parent.
 * @see reference/modifierSets.md#modifiersetsupdate
 * PATCH /v1/modifier-sets/{modifier_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(modifier_set_id: InputValue<string>, params: (InputValue<UpdateModifierSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ModifierSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/modifierSets.md#modifiersetsupdate
     */
    updateWithResponse(modifier_set_id: InputValue<string>, params: (InputValue<UpdateModifierSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<ModifierSetResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly modifierSets: ModifierSetsResource;
}
