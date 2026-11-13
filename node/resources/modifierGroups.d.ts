import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    ModifierGroup,
    ModifierGroupListResponse,
    ModifierGroupResponse,
    ModifierGroupsCreateParams,
    ModifierGroupsDeleteParams,
    ModifierGroupsGetParams,
    ModifierGroupsListParams,
    ModifierGroupsUpdateParams
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
    ModifierGroupsCreateParams,
    ModifierGroup,
    ModifierGroupResponse,
    ModifierGroupsDeleteParams,
    ModifierGroupsGetParams,
    ModifierGroupsListParams,
    ModifierGroupListResponse,
    ModifierGroupsUpdateParams,
    MetadataRequestInput,
    MoneyValueInput,
    Modifier,
    MoneyValue,
    NextAction,
    ModifierRequestInput
} from '../declarations/types-38.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateModifierGroupRequestInput, CreateModifierRequestInput } from '../declarations/types-10.js';
export type {
    TextModifierConfigRequestInput,
    TextModifierConfig,
    TextModifierConfigPatchRequestInput,
    TextModifierConfigRequest,
    TextModifierConfigPatchRequest
} from '../declarations/types-65.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateModifierGroupRequestInput } from '../declarations/types-67.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export type { CreateInlineModifierGroupRequestInput } from '../declarations/types-9.js';
export { makeCreateInlineModifierGroupRequest } from '../declarations/types-72.js';
export { makeCreateModifierGroupRequest, makeCreateModifierRequest } from '../declarations/types-73.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeModifierRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makeTextModifierConfigPatchRequest, makeTextModifierConfigRequest } from '../declarations/types-82.js';
export { makeUpdateModifierGroupRequest } from '../declarations/types-83.js';
export interface ModifierGroupsResource {
    /**
 * Creates a modifier group, a set of choices that customize an item, such as toppings or a custom
 * message. Send `name`. A list group offers the choices in `modifiers`, with limits on how many
 * buyers select; a text group takes a text entry instead, and sending `text` makes the group a
 * text group. Attach groups to products, variants, and bundles through a modifier set. Defaults
 * must stay within the group's selection limits.
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
 * Archives a modifier group so buyers are no longer offered it, and returns its final state. A
 * group that a modifier set which isn't archived still uses fails with `RESOURCE_IN_USE`; remove
 * it from those sets, or archive them, first. Returns the archived resource as a read does.
 * Deleting an already archived resource returns it again without changing its version or
 * `updated_at`, sending a webhook, or checking references. A stale `expected_version` fails with
 * `VERSION_CONFLICT` and the `current_version`, even when the resource is already archived.
 *
 * `DELETE /v1/modifier-groups/{modifier_group_id}`
 * @param modifier_group_id Flint modifier group ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#deleteModifierGroup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.delete("mg_01KEZF7C00XKJJATARG7KDBYM9", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(modifier_group_id: InputValue<string>, params?: ModifierGroupsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ModifierGroup, ModifierGroupResponse>>;
    /**
 * Returns one modifier group by ID, with its choices, selection limits, and whether it appears on
 * receipts and in fulfillment details.
 *
 * `GET /v1/modifier-groups/{modifier_group_id}`
 * @param modifier_group_id Flint modifier group ID.
 * @see https://developers.withflintpay.com/docs/api/modifiers#getModifierGroup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.modifierGroups.get("mg_01KEZF7C00XKJJATARG7KDBYM9")
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
 * Applies a sparse update to a modifier group: only the fields you send change. Sending
 * `modifiers` replaces the whole list; modifiers you leave out are archived, and
 * `expected_version` is required with it. A stale version fails with `VERSION_CONFLICT`. Fails
 * with `ACTION_NOT_ALLOWED` and reason `archived` when the resource, or the parent it belongs to,
 * is archived. The error names the archived resource and its `current_status`.
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
