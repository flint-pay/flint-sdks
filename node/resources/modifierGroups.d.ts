export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateModifierRequestInput } from '../declarations/CreateModifierRequestInput.js';
import type { ModifierGroup } from '../declarations/ModifierGroup.js';
import type { ModifierGroupListResponse } from '../declarations/ModifierGroupListResponse.js';
import type { ModifierGroupResponse } from '../declarations/ModifierGroupResponse.js';
import type { ModifierGroupsCreateInput } from '../declarations/ModifierGroupsCreateInput.js';
import type { ModifierGroupsCreateResponse } from '../declarations/ModifierGroupsCreateResponse.js';
import type { ModifierGroupsGetInput } from '../declarations/ModifierGroupsGetInput.js';
import type { ModifierGroupsGetResponse } from '../declarations/ModifierGroupsGetResponse.js';
import type { ModifierGroupsListInput } from '../declarations/ModifierGroupsListInput.js';
import type { ModifierGroupsListResponse } from '../declarations/ModifierGroupsListResponse.js';
import type { ModifierGroupsRemoveInput } from '../declarations/ModifierGroupsRemoveInput.js';
import type { ModifierGroupsRemoveResponse } from '../declarations/ModifierGroupsRemoveResponse.js';
import type { ModifierGroupsUpdateInput } from '../declarations/ModifierGroupsUpdateInput.js';
import type { ModifierGroupsUpdateResponse } from '../declarations/ModifierGroupsUpdateResponse.js';
import type { ModifierRequestInput } from '../declarations/ModifierRequestInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { TextModifierConfigRequestInput } from '../declarations/TextModifierConfigRequestInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ModifierGroupsResource {
    /**
 * Create modifier group.
 * POST /v1/modifier-groups
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "allow_quantities"?: boolean; "external_reference_id"?: string; "max_quantity"?: string; "max_selected"?: number; "max_total_quantity"?: string; "metadata"?: Record<string, string>; "min_quantity"?: string; "min_selected"?: number; "modifier_group_type"?: "list" | "text"; "modifiers"?: Array<CreateModifierRequestInput>; "name": string; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; "status"?: "active" | "inactive"; "text"?: TextModifierConfigRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ModifierGroupResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "allow_quantities"?: boolean; "external_reference_id"?: string; "max_quantity"?: string; "max_selected"?: number; "max_total_quantity"?: string; "metadata"?: Record<string, string>; "min_quantity"?: string; "min_selected"?: number; "modifier_group_type"?: "list" | "text"; "modifiers"?: Array<CreateModifierRequestInput>; "name": string; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; "status"?: "active" | "inactive"; "text"?: TextModifierConfigRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierGroupsCreateResponse>>;
    /**
 * Retire modifier group.
 * DELETE /v1/modifier-groups/{modifier_group_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(modifier_group_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ModifierGroupResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(modifier_group_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierGroupsRemoveResponse>>;
    /**
 * Get modifier group.
 * GET /v1/modifier-groups/{modifier_group_id}
 * @example
 * client.modifierGroups.get("example")
 */
    get(modifier_group_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ModifierGroupResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(modifier_group_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ModifierGroupsGetResponse>>;
    /**
 * List modifier groups.
 * GET /v1/modifier-groups
 * @example
 * client.modifierGroups.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "modifier_group_type"?: InputValue<"list" | "text">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ModifierGroupListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "modifier_group_type"?: InputValue<"list" | "text">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ModifierGroupsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "modifier_group_type"?: InputValue<"list" | "text">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ModifierGroupListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "modifier_group_type"?: InputValue<"list" | "text">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ModifierGroupsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "modifier_group_type"?: InputValue<"list" | "text">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ModifierGroup>;
    /**
 * Update modifier group.
 * PATCH /v1/modifier-groups/{modifier_group_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierGroups.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(modifier_group_id: InputValue<string>, params: (InputValue<({ "allow_quantities"?: boolean; "expected_version"?: string; "external_reference_id"?: string; "max_quantity"?: string; "max_selected"?: number; "max_total_quantity"?: string; "metadata"?: Record<string, string | null> | null; "min_quantity"?: string; "min_selected"?: number; "modifiers"?: Array<ModifierRequestInput>; "name"?: string; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; "status"?: "active" | "inactive"; "text"?: TextModifierConfigRequestInput; }) & ((({ "modifiers"?: never })) | ({ "expected_version": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ModifierGroupResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(modifier_group_id: InputValue<string>, params: (InputValue<({ "allow_quantities"?: boolean; "expected_version"?: string; "external_reference_id"?: string; "max_quantity"?: string; "max_selected"?: number; "max_total_quantity"?: string; "metadata"?: Record<string, string | null> | null; "min_quantity"?: string; "min_selected"?: number; "modifiers"?: Array<ModifierRequestInput>; "name"?: string; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; "status"?: "active" | "inactive"; "text"?: TextModifierConfigRequestInput; }) & ((({ "modifiers"?: never })) | ({ "expected_version": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierGroupsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly modifierGroups: ModifierGroupsResource;
}
export type { CreateModifierRequestInput } from '../declarations/CreateModifierRequestInput.js';
export type { TextModifierConfigRequestInput } from '../declarations/TextModifierConfigRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { ModifierGroupResponse } from '../declarations/ModifierGroupResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ModifierGroupsCreateResponse } from '../declarations/ModifierGroupsCreateResponse.js';
export type { ModifierGroupsRemoveResponse } from '../declarations/ModifierGroupsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ModifierGroupsGetResponse } from '../declarations/ModifierGroupsGetResponse.js';
export type { ModifierGroupListResponse } from '../declarations/ModifierGroupListResponse.js';
export type { ModifierGroupsListResponse } from '../declarations/ModifierGroupsListResponse.js';
export type { ModifierGroup } from '../declarations/ModifierGroup.js';
export type { ModifierRequestInput } from '../declarations/ModifierRequestInput.js';
export type { ModifierGroupsUpdateResponse } from '../declarations/ModifierGroupsUpdateResponse.js';
export type { ModifierGroupsCreateInput } from '../declarations/ModifierGroupsCreateInput.js';
export type { ModifierGroupsRemoveInput } from '../declarations/ModifierGroupsRemoveInput.js';
export type { ModifierGroupsGetInput } from '../declarations/ModifierGroupsGetInput.js';
export type { ModifierGroupsListInput } from '../declarations/ModifierGroupsListInput.js';
export type { ModifierGroupsUpdateInput } from '../declarations/ModifierGroupsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { Modifier } from '../declarations/Modifier.js';
export type { TextModifierConfig } from '../declarations/TextModifierConfig.js';
export type { CreateModifierGroupRequestInput } from '../declarations/CreateModifierGroupRequestInput.js';
export type { UpdateModifierGroupRequestInput } from '../declarations/UpdateModifierGroupRequestInput.js';
export { makeModifierGroupResponse } from '../declarations/makeModifierGroupResponse.js';
export { makeModifierGroupListResponse } from '../declarations/makeModifierGroupListResponse.js';
export { makeModifierGroup } from '../declarations/makeModifierGroup.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeModifier } from '../declarations/makeModifier.js';
export { makeTextModifierConfig } from '../declarations/makeTextModifierConfig.js';
