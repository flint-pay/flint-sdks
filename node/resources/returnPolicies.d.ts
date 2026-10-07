export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateReturnPolicyResponse } from '../declarations/CreateReturnPolicyResponse.js';
import type { GetReturnPolicyRevisionResponse } from '../declarations/GetReturnPolicyRevisionResponse.js';
import type { ListReturnPoliciesResponse } from '../declarations/ListReturnPoliciesResponse.js';
import type { ListReturnPolicyRevisionsResponse } from '../declarations/ListReturnPolicyRevisionsResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnPoliciesCreateInput } from '../declarations/ReturnPoliciesCreateInput.js';
import type { ReturnPoliciesCreateResponse } from '../declarations/ReturnPoliciesCreateResponse.js';
import type { ReturnPoliciesGetInput } from '../declarations/ReturnPoliciesGetInput.js';
import type { ReturnPoliciesGetResponse } from '../declarations/ReturnPoliciesGetResponse.js';
import type { ReturnPoliciesGetRevisionInput } from '../declarations/ReturnPoliciesGetRevisionInput.js';
import type { ReturnPoliciesGetRevisionResponse } from '../declarations/ReturnPoliciesGetRevisionResponse.js';
import type { ReturnPoliciesListInput } from '../declarations/ReturnPoliciesListInput.js';
import type { ReturnPoliciesListResponse } from '../declarations/ReturnPoliciesListResponse.js';
import type { ReturnPoliciesListRevisionsInput } from '../declarations/ReturnPoliciesListRevisionsInput.js';
import type { ReturnPoliciesListRevisionsResponse } from '../declarations/ReturnPoliciesListRevisionsResponse.js';
import type { ReturnPoliciesPublishRevisionInput } from '../declarations/ReturnPoliciesPublishRevisionInput.js';
import type { ReturnPoliciesPublishRevisionResponse } from '../declarations/ReturnPoliciesPublishRevisionResponse.js';
import type { ReturnPoliciesRemoveInput } from '../declarations/ReturnPoliciesRemoveInput.js';
import type { ReturnPoliciesRemoveResponse } from '../declarations/ReturnPoliciesRemoveResponse.js';
import type { ReturnPoliciesUpdateInput } from '../declarations/ReturnPoliciesUpdateInput.js';
import type { ReturnPoliciesUpdateResponse } from '../declarations/ReturnPoliciesUpdateResponse.js';
import type { ReturnPolicy } from '../declarations/ReturnPolicy.js';
import type { ReturnPolicyRevision } from '../declarations/ReturnPolicyRevision.js';
import type { ReturnPolicyRevisionRequestInput } from '../declarations/ReturnPolicyRevisionRequestInput.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnPoliciesResource {
    /**
 * Create a Return policy with its first revision. The policy ID is stable across revisions, and each published revision is immutable.
 * POST /v1/return-policies
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.create({name: "example", revision: {approval_mode: "automatic", eligibility_result: "ineligible", is_merchandise_return_required: true, priority: 1, scope: {}}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "revision": ReturnPolicyRevisionRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "revision": ReturnPolicyRevisionRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnPoliciesCreateResponse>>;
    /**
 * Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.
 * DELETE /v1/return-policies/{return_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(return_policy_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(return_policy_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnPoliciesRemoveResponse>>;
    /**
 * Retrieve one Return policy. Supports expand for current_revision.
 * GET /v1/return-policies/{return_policy_id}
 * @example
 * client.returnPolicies.get("example")
 */
    get(return_policy_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"current_revision">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CreateReturnPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(return_policy_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"current_revision">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnPoliciesGetResponse>>;
    /**
 * Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.
 * GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}
 * @example
 * client.returnPolicies.getRevision("example", "example")
 */
    getRevision(return_policy_id: InputValue<string>, return_policy_revision_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<GetReturnPolicyRevisionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getRevisionWithResponse(return_policy_id: InputValue<string>, return_policy_revision_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnPoliciesGetRevisionResponse>>;
    /**
 * List Return policies with their status and current revision.
 * GET /v1/return-policies
 * @example
 * client.returnPolicies.list()
 */
    list(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnPoliciesResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnPoliciesListResponse>>;
    listPages(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnPoliciesResponse>;
    listPagesWithResponse(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnPoliciesListResponse>>;
    listItems(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<Array<"active" | "inactive" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnPolicy>;
    /**
 * List every published revision of a Return policy.
 * GET /v1/return-policies/{return_policy_id}/revisions
 * @example
 * client.returnPolicies.listRevisions("example")
 */
    listRevisions(return_policy_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnPolicyRevisionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listRevisionsWithResponse(return_policy_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnPoliciesListRevisionsResponse>>;
    listRevisionsPages(return_policy_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnPolicyRevisionsResponse>;
    listRevisionsPagesWithResponse(return_policy_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnPoliciesListRevisionsResponse>>;
    listRevisionsItems(return_policy_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnPolicyRevision>;
    /**
 * Publish a new immutable Return policy revision while preserving the stable policy identity.
 * POST /v1/return-policies/{return_policy_id}/revisions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.publishRevision("example", {expected_current_return_policy_revision_id: "example", revision: {approval_mode: "automatic", eligibility_result: "ineligible", is_merchandise_return_required: true, priority: 1, scope: {}}}, { idempotencyKey: idempotencyKey })
 */
    publishRevision(return_policy_id: InputValue<string>, params: (InputValue<{ "expected_current_return_policy_revision_id": string; "expected_version"?: string; "revision": ReturnPolicyRevisionRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    publishRevisionWithResponse(return_policy_id: InputValue<string>, params: (InputValue<{ "expected_current_return_policy_revision_id": string; "expected_version"?: string; "revision": ReturnPolicyRevisionRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnPoliciesPublishRevisionResponse>>;
    /**
 * Update policy identity fields or set status to active or inactive. Rules live on revisions, so changing a window, fee, or scope means publishing a new revision.
 * PATCH /v1/return-policies/{return_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_policy_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnPolicyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(return_policy_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnPoliciesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returnPolicies: ReturnPoliciesResource;
}
export type { ReturnPolicyRevisionRequestInput } from '../declarations/ReturnPolicyRevisionRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateReturnPolicyResponse } from '../declarations/CreateReturnPolicyResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnPoliciesCreateResponse } from '../declarations/ReturnPoliciesCreateResponse.js';
export type { ReturnPoliciesRemoveResponse } from '../declarations/ReturnPoliciesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReturnPoliciesGetResponse } from '../declarations/ReturnPoliciesGetResponse.js';
export type { GetReturnPolicyRevisionResponse } from '../declarations/GetReturnPolicyRevisionResponse.js';
export type { ReturnPoliciesGetRevisionResponse } from '../declarations/ReturnPoliciesGetRevisionResponse.js';
export type { ListReturnPoliciesResponse } from '../declarations/ListReturnPoliciesResponse.js';
export type { ReturnPoliciesListResponse } from '../declarations/ReturnPoliciesListResponse.js';
export type { ReturnPolicy } from '../declarations/ReturnPolicy.js';
export type { ListReturnPolicyRevisionsResponse } from '../declarations/ListReturnPolicyRevisionsResponse.js';
export type { ReturnPoliciesListRevisionsResponse } from '../declarations/ReturnPoliciesListRevisionsResponse.js';
export type { ReturnPolicyRevision } from '../declarations/ReturnPolicyRevision.js';
export type { ReturnPoliciesPublishRevisionResponse } from '../declarations/ReturnPoliciesPublishRevisionResponse.js';
export type { ReturnPoliciesUpdateResponse } from '../declarations/ReturnPoliciesUpdateResponse.js';
export type { ReturnPoliciesCreateInput } from '../declarations/ReturnPoliciesCreateInput.js';
export type { ReturnPoliciesRemoveInput } from '../declarations/ReturnPoliciesRemoveInput.js';
export type { ReturnPoliciesGetInput } from '../declarations/ReturnPoliciesGetInput.js';
export type { ReturnPoliciesGetRevisionInput } from '../declarations/ReturnPoliciesGetRevisionInput.js';
export type { ReturnPoliciesListInput } from '../declarations/ReturnPoliciesListInput.js';
export type { ReturnPoliciesListRevisionsInput } from '../declarations/ReturnPoliciesListRevisionsInput.js';
export type { ReturnPoliciesPublishRevisionInput } from '../declarations/ReturnPoliciesPublishRevisionInput.js';
export type { ReturnPoliciesUpdateInput } from '../declarations/ReturnPoliciesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { ReturnRestockingFeePolicyInput } from '../declarations/ReturnRestockingFeePolicyInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { ReturnShippingPolicyInput } from '../declarations/ReturnShippingPolicyInput.js';
export type { ReturnWindowInput } from '../declarations/ReturnWindowInput.js';
export type { ReturnPolicyScopeInput } from '../declarations/ReturnPolicyScopeInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { ReturnRestockingFeePolicy } from '../declarations/ReturnRestockingFeePolicy.js';
export type { ReturnShippingPolicy } from '../declarations/ReturnShippingPolicy.js';
export type { ReturnWindow } from '../declarations/ReturnWindow.js';
export type { ReturnPolicyScope } from '../declarations/ReturnPolicyScope.js';
export type { CreateReturnPolicyRequestInput } from '../declarations/CreateReturnPolicyRequestInput.js';
export type { PublishReturnPolicyRevisionRequestInput } from '../declarations/PublishReturnPolicyRevisionRequestInput.js';
export type { UpdateReturnPolicyRequestInput } from '../declarations/UpdateReturnPolicyRequestInput.js';
export { makeCreateReturnPolicyResponse } from '../declarations/makeCreateReturnPolicyResponse.js';
export { makeGetReturnPolicyRevisionResponse } from '../declarations/makeGetReturnPolicyRevisionResponse.js';
export { makeListReturnPoliciesResponse } from '../declarations/makeListReturnPoliciesResponse.js';
export { makeReturnPolicy } from '../declarations/makeReturnPolicy.js';
export { makeListReturnPolicyRevisionsResponse } from '../declarations/makeListReturnPolicyRevisionsResponse.js';
export { makeReturnPolicyRevision } from '../declarations/makeReturnPolicyRevision.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeReturnRestockingFeePolicy } from '../declarations/makeReturnRestockingFeePolicy.js';
export { makeReturnShippingPolicy } from '../declarations/makeReturnShippingPolicy.js';
export { makeReturnWindow } from '../declarations/makeReturnWindow.js';
export { makeReturnPolicyScope } from '../declarations/makeReturnPolicyScope.js';
