import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { CreateReturnPolicyResponse } from '../declarations/types-10.js';
import type { DeleteReturnPolicyResponse } from '../declarations/types-14.js';
import type { GetReturnPolicyResponse, GetReturnPolicyRevisionResponse } from '../declarations/types-23.js';
import type { ListReturnPoliciesResponse, ListReturnPolicyRevisionsResponse } from '../declarations/types-32.js';
import type { PublishReturnPolicyRevisionResponse } from '../declarations/types-46.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    ReturnPoliciesCreateParams,
    ReturnPoliciesCreateRevisionParams,
    ReturnPoliciesDeleteParams,
    ReturnPoliciesGetParams,
    ReturnPoliciesGetRevisionParams,
    ReturnPoliciesListParams,
    ReturnPoliciesListRevisionsParams,
    ReturnPoliciesUpdateParams,
    ReturnPolicy,
    ReturnPolicyRevision
} from '../declarations/types-49.js';
import type { UpdateReturnPolicyResponse } from '../declarations/types-59.js';
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
    ReturnPoliciesCreateParams,
    ReturnPolicy,
    ReturnPoliciesCreateRevisionParams,
    ReturnPoliciesDeleteParams,
    ReturnPoliciesGetParams,
    ReturnPoliciesGetRevisionParams,
    ReturnPolicyRevision,
    ReturnPoliciesListParams,
    ReturnPoliciesListRevisionsParams,
    ReturnPoliciesUpdateParams,
    ReturnPolicyRevisionRequestInput,
    ReturnPolicyScopeInput,
    ReturnPolicyScopeAllInput,
    ReturnPolicyScopeIncludeInput,
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput,
    ReturnPolicyScope,
    ReturnPolicyScopeAll,
    ReturnPolicyScopeInclude
} from '../declarations/types-49.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { CreateReturnPolicyResponse, CreateReturnPolicyRequestInput } from '../declarations/types-10.js';
export type {
    PublishReturnPolicyRevisionResponse,
    PublishReturnPolicyRevisionRequestInput,
    ReadinessMerchantAccountSession
} from '../declarations/types-46.js';
export type { DeleteReturnPolicyResponse } from '../declarations/types-14.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { GetReturnPolicyResponse, GetReturnPolicyRevisionResponse } from '../declarations/types-23.js';
export type { ListReturnPoliciesResponse, ListReturnPolicyRevisionsResponse } from '../declarations/types-32.js';
export type { UpdateReturnPolicyResponse, UpdateReturnPolicyRequestInput } from '../declarations/types-59.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type {
    ReturnRestockingFeePolicyInput,
    ReturnShippingPolicyInput,
    ReturnRestockingFeePolicy,
    ReturnShippingPolicy
} from '../declarations/types-50.js';
export type { MoneyValueInput, NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReturnWindowInput, ReturnWindow } from '../declarations/types-51.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export { makeCreateReturnPolicyRequest } from '../declarations/types-65.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export {
    makePublishReturnPolicyRevisionRequest,
    makeReturnPolicyRevisionInputIneligible,
    makeReturnPolicyRevisionInputReturnable
} from '../declarations/types-71.js';
export {
    makeReturnPolicyRevisionRequest,
    makeReturnPolicyScope,
    makeReturnPolicyScopeAll,
    makeReturnPolicyScopeInclude,
    makeReturnRestockingFeePolicy,
    makeReturnShippingPolicy,
    makeReturnWindow
} from '../declarations/types-72.js';
export { makeUpdateReturnPolicyRequest } from '../declarations/types-74.js';
export interface ReturnPoliciesResource {
    /**
 * Create a Return policy with its first revision. The policy ID is stable across revisions, and
 * each published revision is immutable.
 *
 * `POST /v1/return-policies`
 * @see https://developers.withflintpay.com/docs/api/return-policies#createReturnPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.create({name: "example", revision: {approval_mode: "automatic",
 * eligibility_result: "ineligible", is_merchandise_return_required: true, priority: 1, scope:
 * {match_type: "all"}}}, { idempotencyKey: idempotencyKey })
 */
    create(params: ReturnPoliciesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnPolicy, CreateReturnPolicyResponse>>;
    /**
 * Publish a new immutable Return policy revision while preserving the stable policy identity. Send
 * the policy's current version as expected_version to reject a concurrent policy edit or publish.
 *
 * `POST /v1/return-policies/{return_policy_id}/revisions`
 * @param return_policy_id Flint return policy id.
 * @see https://developers.withflintpay.com/docs/api/return-policies#createReturnPolicyRevision
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.createRevision("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expected_version: 1,
 * revision: {approval_mode: "automatic", eligibility_result: "ineligible",
 * is_merchandise_return_required: true, priority: 1, scope: {match_type: "all"}}}, {
 * idempotencyKey: idempotencyKey })
 */
    createRevision(return_policy_id: InputValue<string>, params: ReturnPoliciesCreateRevisionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnPolicy, PublishReturnPolicyRevisionResponse>>;
    /**
 * Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.
 *
 * `DELETE /v1/return-policies/{return_policy_id}`
 * @param return_policy_id Flint return policy id.
 * @see https://developers.withflintpay.com/docs/api/return-policies#deleteReturnPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.delete("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(return_policy_id: InputValue<string>, params?: ReturnPoliciesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnPolicy, DeleteReturnPolicyResponse>>;
    /**
 * Retrieve one Return policy. Supports expand for current_revision.
 *
 * `GET /v1/return-policies/{return_policy_id}`
 * @param return_policy_id Flint return policy id.
 * @see https://developers.withflintpay.com/docs/api/return-policies#getReturnPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnPolicies.get("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(return_policy_id: InputValue<string>, params?: ReturnPoliciesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnPolicy, GetReturnPolicyResponse>>;
    /**
 * Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.
 *
 * `GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}`
 * @param return_policy_id Flint return policy id.
 * @param return_policy_revision_id Flint return policy revision id.
 * @see https://developers.withflintpay.com/docs/api/return-policies#getReturnPolicyRevision
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnPolicies.getRevision("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "rpolv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getRevision(return_policy_id: InputValue<string>, return_policy_revision_id: InputValue<string>, params?: ReturnPoliciesGetRevisionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnPolicyRevision, GetReturnPolicyRevisionResponse>>;
    /**
 * List Return policies with their status. Include the current revision with
 * expand=current_revision. Default order: created_at descending, then return_policy_id descending.
 *
 * `GET /v1/return-policies`
 * @see https://developers.withflintpay.com/docs/api/return-policies#listReturnPolicies
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnPolicies.list()
 */
    list(params?: ReturnPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnPoliciesResponse, ListReturnPoliciesResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-policies#listReturnPolicies
     */
    listPages(params?: ReturnPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnPoliciesResponse, ListReturnPoliciesResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-policies#listReturnPolicies
     */
    listItems(params?: ReturnPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnPolicy>;
    /**
 * List every published revision of a Return policy. Default order: created_at descending, then
 * return_policy_revision_id descending.
 *
 * `GET /v1/return-policies/{return_policy_id}/revisions`
 * @param return_policy_id Flint return policy id.
 * @see https://developers.withflintpay.com/docs/api/return-policies#listReturnPolicyRevisions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnPolicies.listRevisions("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listRevisions(return_policy_id: InputValue<string>, params?: ReturnPoliciesListRevisionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnPolicyRevisionsResponse, ListReturnPolicyRevisionsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-policies#listReturnPolicyRevisions
     */
    listRevisionsPages(return_policy_id: InputValue<string>, params?: ReturnPoliciesListRevisionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnPolicyRevisionsResponse, ListReturnPolicyRevisionsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-policies#listReturnPolicyRevisions
     */
    listRevisionsItems(return_policy_id: InputValue<string>, params?: ReturnPoliciesListRevisionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnPolicyRevision>;
    /**
 * Update policy identity fields or set status to active or inactive. Rules live on revisions, so
 * changing a window, fee, or scope means publishing a new revision.
 *
 * `PATCH /v1/return-policies/{return_policy_id}`
 * @param return_policy_id Flint return policy id.
 * @see https://developers.withflintpay.com/docs/api/return-policies#updateReturnPolicy
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.update("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Standard returns"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(return_policy_id: InputValue<string>, params: ReturnPoliciesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnPolicy, UpdateReturnPolicyResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnPolicies: ReturnPoliciesResource;
}
