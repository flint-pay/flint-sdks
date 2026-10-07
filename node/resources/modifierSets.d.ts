export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateModifierSetGroupRequestInput } from '../declarations/CreateModifierSetGroupRequestInput.js';
import type { ModifierSet } from '../declarations/ModifierSet.js';
import type { ModifierSetGroupRequestInput } from '../declarations/ModifierSetGroupRequestInput.js';
import type { ModifierSetListResponse } from '../declarations/ModifierSetListResponse.js';
import type { ModifierSetResponse } from '../declarations/ModifierSetResponse.js';
import type { ModifierSetsCreateInput } from '../declarations/ModifierSetsCreateInput.js';
import type { ModifierSetsCreateResponse } from '../declarations/ModifierSetsCreateResponse.js';
import type { ModifierSetsGetInput } from '../declarations/ModifierSetsGetInput.js';
import type { ModifierSetsGetResponse } from '../declarations/ModifierSetsGetResponse.js';
import type { ModifierSetsListInput } from '../declarations/ModifierSetsListInput.js';
import type { ModifierSetsListResponse } from '../declarations/ModifierSetsListResponse.js';
import type { ModifierSetsRemoveInput } from '../declarations/ModifierSetsRemoveInput.js';
import type { ModifierSetsRemoveResponse } from '../declarations/ModifierSetsRemoveResponse.js';
import type { ModifierSetsUpdateInput } from '../declarations/ModifierSetsUpdateInput.js';
import type { ModifierSetsUpdateResponse } from '../declarations/ModifierSetsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ModifierSetsResource {
    /**
 * Create modifier set.
 * POST /v1/modifier-sets
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "external_reference_id"?: string; "metadata"?: Record<string, string>; "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>; "name": string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ModifierSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "external_reference_id"?: string; "metadata"?: Record<string, string>; "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>; "name": string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierSetsCreateResponse>>;
    /**
 * Retire modifier set.
 * DELETE /v1/modifier-sets/{modifier_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(modifier_set_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ModifierSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(modifier_set_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierSetsRemoveResponse>>;
    /**
 * Get modifier set.
 * GET /v1/modifier-sets/{modifier_set_id}
 * @example
 * client.modifierSets.get("example")
 */
    get(modifier_set_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ModifierSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(modifier_set_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ModifierSetsGetResponse>>;
    /**
 * List modifier sets.
 * GET /v1/modifier-sets
 * @example
 * client.modifierSets.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ModifierSetListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ModifierSetsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ModifierSetListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ModifierSetsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ModifierSet>;
    /**
 * Update modifier set.
 * PATCH /v1/modifier-sets/{modifier_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.modifierSets.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(modifier_set_id: InputValue<string>, params: (InputValue<({ "expected_version"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "modifier_groups"?: Array<ModifierSetGroupRequestInput>; "name"?: string; "status"?: "active" | "inactive"; }) & ((({ "modifier_groups"?: never })) | ({ "modifier_groups": unknown; "expected_version": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ModifierSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(modifier_set_id: InputValue<string>, params: (InputValue<({ "expected_version"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "modifier_groups"?: Array<ModifierSetGroupRequestInput>; "name"?: string; "status"?: "active" | "inactive"; }) & ((({ "modifier_groups"?: never })) | ({ "modifier_groups": unknown; "expected_version": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ModifierSetsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly modifierSets: ModifierSetsResource;
}
export type { CreateModifierSetGroupRequestInput } from '../declarations/CreateModifierSetGroupRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { ModifierSetResponse } from '../declarations/ModifierSetResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ModifierSetsCreateResponse } from '../declarations/ModifierSetsCreateResponse.js';
export type { ModifierSetsRemoveResponse } from '../declarations/ModifierSetsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ModifierSetsGetResponse } from '../declarations/ModifierSetsGetResponse.js';
export type { ModifierSetListResponse } from '../declarations/ModifierSetListResponse.js';
export type { ModifierSetsListResponse } from '../declarations/ModifierSetsListResponse.js';
export type { ModifierSet } from '../declarations/ModifierSet.js';
export type { ModifierSetGroupRequestInput } from '../declarations/ModifierSetGroupRequestInput.js';
export type { ModifierSetsUpdateResponse } from '../declarations/ModifierSetsUpdateResponse.js';
export type { ModifierSetsCreateInput } from '../declarations/ModifierSetsCreateInput.js';
export type { ModifierSetsRemoveInput } from '../declarations/ModifierSetsRemoveInput.js';
export type { ModifierSetsGetInput } from '../declarations/ModifierSetsGetInput.js';
export type { ModifierSetsListInput } from '../declarations/ModifierSetsListInput.js';
export type { ModifierSetsUpdateInput } from '../declarations/ModifierSetsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { CreateInlineModifierGroupRequestInput } from '../declarations/CreateInlineModifierGroupRequestInput.js';
export type { CreateModifierRequestInput } from '../declarations/CreateModifierRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { TextModifierConfigRequestInput } from '../declarations/TextModifierConfigRequestInput.js';
export type { ModifierOverrideInput } from '../declarations/ModifierOverrideInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { ModifierSetGroup } from '../declarations/ModifierSetGroup.js';
export type { ModifierGroup } from '../declarations/ModifierGroup.js';
export type { Modifier } from '../declarations/Modifier.js';
export type { TextModifierConfig } from '../declarations/TextModifierConfig.js';
export type { ModifierOverride } from '../declarations/ModifierOverride.js';
export type { InlineModifierGroupRequestInput } from '../declarations/InlineModifierGroupRequestInput.js';
export type { ModifierRequestInput } from '../declarations/ModifierRequestInput.js';
export type { CreateModifierSetRequestInput } from '../declarations/CreateModifierSetRequestInput.js';
export type { UpdateModifierSetRequestInput } from '../declarations/UpdateModifierSetRequestInput.js';
export { makeModifierSetResponse } from '../declarations/makeModifierSetResponse.js';
export { makeModifierSetListResponse } from '../declarations/makeModifierSetListResponse.js';
export { makeModifierSet } from '../declarations/makeModifierSet.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeModifierSetGroup } from '../declarations/makeModifierSetGroup.js';
export { makeModifierGroup } from '../declarations/makeModifierGroup.js';
export { makeModifier } from '../declarations/makeModifier.js';
export { makeTextModifierConfig } from '../declarations/makeTextModifierConfig.js';
export { makeModifierOverride } from '../declarations/makeModifierOverride.js';
