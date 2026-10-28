import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateReturnPolicyRequestInput } from '../declarations/types-9.js';
import type { GetReturnPolicyResponse, GetReturnPolicyRevisionResponse } from '../declarations/types-20.js';
import type { ListReturnPoliciesResponse, ListReturnPolicyRevisionsResponse } from '../declarations/types-30.js';
import type { PublishReturnPolicyRevisionRequestInput } from '../declarations/types-41.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type {
    ReturnPoliciesCreateInput,
    ReturnPoliciesGetInput,
    ReturnPoliciesGetRevisionInput,
    ReturnPoliciesListInput,
    ReturnPoliciesListRevisionsInput,
    ReturnPoliciesPublishRevisionInput,
    ReturnPoliciesRemoveInput,
    ReturnPoliciesUpdateInput,
    ReturnPolicy,
    ReturnPolicyRevision
} from '../declarations/types-43.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateReturnPolicyRequestInput } from '../declarations/types-52.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreateReturnPolicyRequestInput } from '../declarations/types-9.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    ReturnPolicy,
    ReturnPolicyRevision,
    ReturnPoliciesCreateInput,
    ReturnPoliciesPublishRevisionInput,
    ReturnPoliciesRemoveInput,
    ReturnPoliciesGetInput,
    ReturnPoliciesGetRevisionInput,
    ReturnPoliciesListInput,
    ReturnPoliciesListRevisionsInput,
    ReturnPoliciesUpdateInput,
    ReturnPolicyRevisionRequestInput,
    ReturnPolicyScopeAllInput,
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput,
    ResponseWarning,
    ReturnPolicyScope,
    ReturnPolicyScopeAll,
    ReturnPolicyScopeInclude
} from '../declarations/types-43.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { GetReturnPolicyResponse, GetReturnPolicyRevisionResponse } from '../declarations/types-20.js';
export type { PublishReturnPolicyRevisionRequestInput } from '../declarations/types-41.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { ListReturnPoliciesResponse, ListReturnPolicyRevisionsResponse } from '../declarations/types-30.js';
export type { UpdateReturnPolicyRequestInput } from '../declarations/types-52.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type {
    ReturnRestockingFeePolicyInput,
    ReturnPolicyScopeInput,
    ReturnPolicyScopeIncludeInput,
    ReturnRestockingFeePolicy
} from '../declarations/types-44.js';
export type { MoneyValueInput, NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export type { ReturnShippingPolicyInput, ReturnWindowInput, ReturnShippingPolicy, ReturnWindow } from '../declarations/types-45.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export { makeCreateReturnPolicyRequest } from '../declarations/types-68.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makePublishReturnPolicyRevisionRequest } from '../declarations/types-74.js';
export {
    makeReturnPolicyRevisionInputIneligible,
    makeReturnPolicyRevisionInputReturnable,
    makeReturnPolicyRevisionRequest,
    makeReturnPolicyScope,
    makeReturnPolicyScopeAll,
    makeReturnPolicyScopeInclude,
    makeReturnRestockingFeePolicy,
    makeReturnShippingPolicy,
    makeReturnWindow
} from '../declarations/types-75.js';
export { makeUpdateReturnPolicyRequest } from '../declarations/types-78.js';
export interface ReturnPoliciesResource {
    /**
 * Create a Return policy with its first revision. The policy ID is stable across revisions, and
 * each published revision is immutable.
 * @see reference/returnPolicies.md#returnpoliciescreate
 * POST /v1/return-policies
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.create({name: "example", revision: {approval_mode: "automatic",
 * eligibility_result: "ineligible", is_merchandise_return_required: true, priority: 1, scope:
 * {match_type: "all"}}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateReturnPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpoliciescreate
     */
    createWithResponse(params: (InputValue<CreateReturnPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnPolicyResponse>>;
    /**
 * Publish a new immutable Return policy revision while preserving the stable policy identity. Send
 * the policy's current version as expected_version to reject a concurrent policy edit or publish.
 * @see reference/returnPolicies.md#returnpoliciespublishrevision
 * POST /v1/return-policies/{return_policy_id}/revisions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.publishRevision("example", {expected_version: "1", revision:
 * {approval_mode: "automatic", eligibility_result: "ineligible", is_merchandise_return_required:
 * true, priority: 1, scope: {match_type: "all"}}}, { idempotencyKey: idempotencyKey })
 */
    publishRevision(return_policy_id: InputValue<string>, params: (InputValue<PublishReturnPolicyRevisionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpoliciespublishrevision
     */
    publishRevisionWithResponse(return_policy_id: InputValue<string>, params: (InputValue<PublishReturnPolicyRevisionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnPolicyResponse>>;
    /**
 * Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.
 * @see reference/returnPolicies.md#returnpoliciesremove
 * DELETE /v1/return-policies/{return_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(return_policy_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpoliciesremove
     */
    removeWithResponse(return_policy_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnPolicyResponse>>;
    /**
 * Retrieve one Return policy. Supports expand for current_revision.
 * @see reference/returnPolicies.md#returnpoliciesget
 * GET /v1/return-policies/{return_policy_id}
 * @example
 * client.returnPolicies.get("example")
 */
    get(return_policy_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"current_revision">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReturnPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpoliciesget
     */
    getWithResponse(return_policy_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"current_revision">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnPolicyResponse>>;
    /**
 * Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.
 * @see reference/returnPolicies.md#returnpoliciesgetrevision
 * GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}
 * @example
 * client.returnPolicies.getRevision("example", "example")
 */
    getRevision(return_policy_id: InputValue<string>, return_policy_revision_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReturnPolicyRevision>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpoliciesgetrevision
     */
    getRevisionWithResponse(return_policy_id: InputValue<string>, return_policy_revision_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnPolicyRevisionResponse>>;
    /**
 * List Return policies with their status. Include the current revision with
 * expand=current_revision. Newest first: created_at descending, with return_policy_id descending
 * as the tiebreak. Default order: created_at descending, then return_policy_id descending.
 * @see reference/returnPolicies.md#returnpolicieslist
 * GET /v1/return-policies
 * @example
 * client.returnPolicies.list()
 */
    list(params?: {
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "expand"?: InputValue<Array<"current_revision">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnPoliciesResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpolicieslist
     */
    listWithResponse(params?: {
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "expand"?: InputValue<Array<"current_revision">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnPoliciesResponse>>;
    /** Iterate pages lazily.
     * @see reference/returnPolicies.md#returnpolicieslist
     */
    listPages(params?: {
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "expand"?: InputValue<Array<"current_revision">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnPoliciesResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returnPolicies.md#returnpolicieslist
     */
    listPagesWithResponse(params?: {
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "expand"?: InputValue<Array<"current_revision">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnPoliciesResponse>>;
    /** Iterate items lazily.
     * @see reference/returnPolicies.md#returnpolicieslist
     */
    listItems(params?: {
        "external_reference_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "expand"?: InputValue<Array<"current_revision">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnPolicy>;
    /**
 * List every published revision of a Return policy. Newest first: created_at descending, with
 * return_policy_revision_id descending as the tiebreak. Default order: created_at descending, then
 * return_policy_revision_id descending.
 * @see reference/returnPolicies.md#returnpolicieslistrevisions
 * GET /v1/return-policies/{return_policy_id}/revisions
 * @example
 * client.returnPolicies.listRevisions("example")
 */
    listRevisions(return_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnPolicyRevisionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpolicieslistrevisions
     */
    listRevisionsWithResponse(return_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnPolicyRevisionsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returnPolicies.md#returnpolicieslistrevisions
     */
    listRevisionsPages(return_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnPolicyRevisionsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returnPolicies.md#returnpolicieslistrevisions
     */
    listRevisionsPagesWithResponse(return_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnPolicyRevisionsResponse>>;
    /** Iterate items lazily.
     * @see reference/returnPolicies.md#returnpolicieslistrevisions
     */
    listRevisionsItems(return_policy_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnPolicyRevision>;
    /**
 * Update policy identity fields or set status to active or inactive. Rules live on revisions, so
 * changing a window, fee, or scope means publishing a new revision.
 * @see reference/returnPolicies.md#returnpoliciesupdate
 * PATCH /v1/return-policies/{return_policy_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnPolicies.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_policy_id: InputValue<string>, params: (InputValue<UpdateReturnPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnPolicy>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPolicies.md#returnpoliciesupdate
     */
    updateWithResponse(return_policy_id: InputValue<string>, params: (InputValue<UpdateReturnPolicyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnPolicyResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnPolicies: ReturnPoliciesResource;
}
