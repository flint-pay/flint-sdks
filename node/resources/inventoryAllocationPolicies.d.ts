export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryAllocationPoliciesCreateInput } from '../declarations/InventoryAllocationPoliciesCreateInput.js';
import type { InventoryAllocationPoliciesCreateResponse } from '../declarations/InventoryAllocationPoliciesCreateResponse.js';
import type { InventoryAllocationPoliciesGetInput } from '../declarations/InventoryAllocationPoliciesGetInput.js';
import type { InventoryAllocationPoliciesGetResponse } from '../declarations/InventoryAllocationPoliciesGetResponse.js';
import type { InventoryAllocationPoliciesListInput } from '../declarations/InventoryAllocationPoliciesListInput.js';
import type { InventoryAllocationPoliciesListResponse } from '../declarations/InventoryAllocationPoliciesListResponse.js';
import type { InventoryAllocationPoliciesRemoveInput } from '../declarations/InventoryAllocationPoliciesRemoveInput.js';
import type { InventoryAllocationPoliciesRemoveResponse } from '../declarations/InventoryAllocationPoliciesRemoveResponse.js';
import type { InventoryAllocationPoliciesUpdateInput } from '../declarations/InventoryAllocationPoliciesUpdateInput.js';
import type { InventoryAllocationPoliciesUpdateResponse } from '../declarations/InventoryAllocationPoliciesUpdateResponse.js';
import type { InventoryAllocationPolicy } from '../declarations/InventoryAllocationPolicy.js';
import type { InventoryAllocationPolicyConfigurationInput } from '../declarations/InventoryAllocationPolicyConfigurationInput.js';
import type { InventoryAllocationPolicyListResponse } from '../declarations/InventoryAllocationPolicyListResponse.js';
import type { InventoryAllocationPolicyResponse } from '../declarations/InventoryAllocationPolicyResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryAllocationPoliciesResource {
    /**
 * Create an allocation policy with its routing configuration.
 * POST /v1/inventory-allocation-policies
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.create({configuration: {location_groups: [{group_priority: 1, location_id: "example"}], maximum_locations_per_assignment: 1, splitting_behavior: "single_location"}, name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "configuration": InventoryAllocationPolicyConfigurationInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryAllocationPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "configuration": InventoryAllocationPolicyConfigurationInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryAllocationPoliciesCreateResponse>>;
    /**
 * Retire an allocation policy. The policy is archived: it stays readable by ID and appears in lists only when you filter by status archived.
 * DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(inventory_allocation_policy_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryAllocationPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(inventory_allocation_policy_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryAllocationPoliciesRemoveResponse>>;
    /**
 * Retrieve an allocation policy by ID, including archived policies.
 * GET /v1/inventory-allocation-policies/{inventory_allocation_policy_id}
 * @example
 * client.inventoryAllocationPolicies.get("example")
 */
    get(inventory_allocation_policy_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<InventoryAllocationPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(inventory_allocation_policy_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryAllocationPoliciesGetResponse>>;
    /**
 * List allocation policies. Archived policies are excluded unless you filter by status archived.
 * GET /v1/inventory-allocation-policies
 * @example
 * client.inventoryAllocationPolicies.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryAllocationPolicyListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryAllocationPoliciesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryAllocationPolicyListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryAllocationPoliciesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryAllocationPolicy>;
    /**
 * Update policy fields, availability, or atomically replace its routing configuration. Send expected_version to reject concurrent changes.
 * PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAllocationPolicies.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_allocation_policy_id: InputValue<string>, params: (InputValue<({ "configuration"?: InventoryAllocationPolicyConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryAllocationPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(inventory_allocation_policy_id: InputValue<string>, params: (InputValue<({ "configuration"?: InventoryAllocationPolicyConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryAllocationPoliciesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryAllocationPolicies: InventoryAllocationPoliciesResource;
}
export type { InventoryAllocationPolicyConfigurationInput } from '../declarations/InventoryAllocationPolicyConfigurationInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryAllocationPolicyResponse } from '../declarations/InventoryAllocationPolicyResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryAllocationPoliciesCreateResponse } from '../declarations/InventoryAllocationPoliciesCreateResponse.js';
export type { InventoryAllocationPoliciesRemoveResponse } from '../declarations/InventoryAllocationPoliciesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InventoryAllocationPoliciesGetResponse } from '../declarations/InventoryAllocationPoliciesGetResponse.js';
export type { InventoryAllocationPolicyListResponse } from '../declarations/InventoryAllocationPolicyListResponse.js';
export type { InventoryAllocationPoliciesListResponse } from '../declarations/InventoryAllocationPoliciesListResponse.js';
export type { InventoryAllocationPolicy } from '../declarations/InventoryAllocationPolicy.js';
export type { InventoryAllocationPoliciesUpdateResponse } from '../declarations/InventoryAllocationPoliciesUpdateResponse.js';
export type { InventoryAllocationPoliciesCreateInput } from '../declarations/InventoryAllocationPoliciesCreateInput.js';
export type { InventoryAllocationPoliciesRemoveInput } from '../declarations/InventoryAllocationPoliciesRemoveInput.js';
export type { InventoryAllocationPoliciesGetInput } from '../declarations/InventoryAllocationPoliciesGetInput.js';
export type { InventoryAllocationPoliciesListInput } from '../declarations/InventoryAllocationPoliciesListInput.js';
export type { InventoryAllocationPoliciesUpdateInput } from '../declarations/InventoryAllocationPoliciesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { PolicyLocationInput } from '../declarations/PolicyLocationInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { InventoryAllocationPolicyConfiguration } from '../declarations/InventoryAllocationPolicyConfiguration.js';
export type { PolicyLocation } from '../declarations/PolicyLocation.js';
export type { CreateInventoryAllocationPolicyRequestInput } from '../declarations/CreateInventoryAllocationPolicyRequestInput.js';
export type { UpdateInventoryAllocationPolicyRequestInput } from '../declarations/UpdateInventoryAllocationPolicyRequestInput.js';
export { makeInventoryAllocationPolicyResponse } from '../declarations/makeInventoryAllocationPolicyResponse.js';
export { makeInventoryAllocationPolicyListResponse } from '../declarations/makeInventoryAllocationPolicyListResponse.js';
export { makeInventoryAllocationPolicy } from '../declarations/makeInventoryAllocationPolicy.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeInventoryAllocationPolicyConfiguration } from '../declarations/makeInventoryAllocationPolicyConfiguration.js';
export { makePolicyLocation } from '../declarations/makePolicyLocation.js';
