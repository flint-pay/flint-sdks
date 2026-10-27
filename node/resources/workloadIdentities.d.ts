import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateWorkloadIdentityRequestInput } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateWorkloadIdentityRequestInput } from '../declarations/types-50.js';
import type {
    WorkloadIdentitiesCreateInput,
    WorkloadIdentitiesGetInput,
    WorkloadIdentitiesListInput,
    WorkloadIdentitiesRemoveInput,
    WorkloadIdentitiesUpdateInput,
    WorkloadIdentity
} from '../declarations/types-61.js';
import type { WorkloadIdentityListResponse, WorkloadIdentityResponse, _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { CreateWorkloadIdentityRequestInput, Credentials } from '../declarations/types-9.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    WorkloadIdentity,
    WorkloadIdentitiesCreateInput,
    WorkloadIdentitiesRemoveInput,
    WorkloadIdentitiesGetInput,
    WorkloadIdentitiesListInput,
    WorkloadIdentitiesUpdateInput,
    WorkloadIdentityClaimCondition
} from '../declarations/types-61.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type {
    WorkloadIdentityResponse,
    _SdkWithoutIdempotency,
    WorkloadIdentityListResponse,
    WorkloadIdentityClaimConditionRequestInput
} from '../declarations/types-62.js';
export type { UpdateWorkloadIdentityRequestInput } from '../declarations/types-50.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateWorkloadIdentityRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateWorkloadIdentityRequest, makeWorkloadIdentityClaimConditionRequest } from '../declarations/types-73.js';
export interface WorkloadIdentitiesResource {
    /**
 * Creates an active identity in the authenticated environment and validates issuer discovery.
 * Dashboard callers creating live identities need fresh identity verification. Machine callers may
 * grant only scopes they hold in this environment.
 * @see reference/workloadIdentities.md#workloadidentitiescreate
 * POST /v1/workload-identities
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.workloadIdentities.create({name: "example", issuer: "example", subject: "example",
 * scopes: ["accounts.api_keys.read"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateWorkloadIdentityRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<WorkloadIdentity>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/workloadIdentities.md#workloadidentitiescreate
     */
    createWithResponse(params: (InputValue<CreateWorkloadIdentityRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<WorkloadIdentityResponse>>;
    /**
 * Soft-archives the identity and returns it with status archived. The identity remains readable by
 * ID and cannot be reactivated. Repeating DELETE without a stale fence returns the archived
 * identity without changing its version.
 * @see reference/workloadIdentities.md#workloadidentitiesremove
 * DELETE /v1/workload-identities/{workload_identity_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.workloadIdentities.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(workload_identity_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<WorkloadIdentity>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/workloadIdentities.md#workloadidentitiesremove
     */
    removeWithResponse(workload_identity_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<WorkloadIdentityResponse>>;
    /**
 * Returns an identity in the authenticated environment, including an archived identity.
 * @see reference/workloadIdentities.md#workloadidentitiesget
 * GET /v1/workload-identities/{workload_identity_id}
 * @example
 * client.workloadIdentities.get("example")
 */
    get(workload_identity_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WorkloadIdentity>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/workloadIdentities.md#workloadidentitiesget
     */
    getWithResponse(workload_identity_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<WorkloadIdentityResponse>>;
    /**
 * Returns identities in the authenticated environment, ordered by created_at descending and
 * workload_identity_id descending by default. Archived identities are excluded unless status
 * includes archived.
 * @see reference/workloadIdentities.md#workloadidentitieslist
 * GET /v1/workload-identities
 * @example
 * client.workloadIdentities.list()
 */
    list(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WorkloadIdentityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/workloadIdentities.md#workloadidentitieslist
     */
    listWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<WorkloadIdentityListResponse>>;
    /** Iterate pages lazily.
     * @see reference/workloadIdentities.md#workloadidentitieslist
     */
    listPages(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WorkloadIdentityListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/workloadIdentities.md#workloadidentitieslist
     */
    listPagesWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<WorkloadIdentityListResponse>>;
    /** Iterate items lazily.
     * @see reference/workloadIdentities.md#workloadidentitieslist
     */
    listItems(params?: {
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WorkloadIdentity>;
    /**
 * Updates mutable policy fields. expected_version is optional for scalar updates and required when
 * claim_conditions or scopes is supplied. Arrays replace their entire value. Issuer and audience
 * are immutable. Dashboard callers reactivating or widening live identities need fresh identity
 * verification.
 * @see reference/workloadIdentities.md#workloadidentitiesupdate
 * PATCH /v1/workload-identities/{workload_identity_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.workloadIdentities.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(workload_identity_id: InputValue<string>, params: (InputValue<UpdateWorkloadIdentityRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<WorkloadIdentity>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/workloadIdentities.md#workloadidentitiesupdate
     */
    updateWithResponse(workload_identity_id: InputValue<string>, params: (InputValue<UpdateWorkloadIdentityRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<WorkloadIdentityResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly workloadIdentities: WorkloadIdentitiesResource;
}
