import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    WorkloadIdentitiesCreateParams,
    WorkloadIdentitiesDeleteParams,
    WorkloadIdentitiesGetParams,
    WorkloadIdentitiesListParams,
    WorkloadIdentitiesUpdateParams,
    WorkloadIdentity,
    WorkloadIdentityListResponse,
    WorkloadIdentityResponse,
    _SdkWithoutIdempotency
} from '../declarations/types-61.js';
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
    WorkloadIdentitiesCreateParams,
    WorkloadIdentity,
    WorkloadIdentityResponse,
    WorkloadIdentitiesDeleteParams,
    WorkloadIdentitiesGetParams,
    _SdkWithoutIdempotency,
    WorkloadIdentitiesListParams,
    WorkloadIdentityListResponse,
    WorkloadIdentitiesUpdateParams,
    WorkloadIdentityClaimConditionRequestInput,
    WorkloadIdentityClaimCondition
} from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateWorkloadIdentityRequestInput } from '../declarations/types-11.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateWorkloadIdentityRequestInput } from '../declarations/types-60.js';
export { makeCreateWorkloadIdentityRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateWorkloadIdentityRequest } from '../declarations/types-74.js';
export { makeWorkloadIdentityClaimConditionRequest } from '../declarations/types-75.js';
export interface WorkloadIdentitiesResource {
    /**
 * Creates an active identity in the authenticated environment and validates issuer discovery.
 * Dashboard callers creating live identities need fresh identity verification. Machine callers may
 * grant only scopes they hold in this environment.
 *
 * `POST /v1/workload-identities`
 * @see https://developers.withflintpay.com/docs/api/workload-identities#createWorkloadIdentity
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.workloadIdentities.create({claim_conditions: [{claim: "repository_owner_id", match:
 * "exact", value: "123456"}], issuer: "https://token.actions.githubusercontent.com", name:
 * "Production deploy", scopes: ["commerce.orders.read"], subject:
 * "repo:acme/shop:ref:refs/heads/main"}, { idempotencyKey: idempotencyKey })
 */
    create(params: WorkloadIdentitiesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WorkloadIdentity, WorkloadIdentityResponse>>;
    /**
 * Soft-archives the identity and returns it with status archived. The identity remains readable by
 * ID and cannot be reactivated. Repeating DELETE without a stale fence returns the archived
 * identity without changing its version.
 *
 * `DELETE /v1/workload-identities/{workload_identity_id}`
 * @param workload_identity_id Flint workload identity ID.
 * @see https://developers.withflintpay.com/docs/api/workload-identities#deleteWorkloadIdentity
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.workloadIdentities.delete("wid_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(workload_identity_id: InputValue<string>, params?: WorkloadIdentitiesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WorkloadIdentity, WorkloadIdentityResponse>>;
    /**
 * Returns an identity in the authenticated environment, including an archived identity.
 *
 * `GET /v1/workload-identities/{workload_identity_id}`
 * @param workload_identity_id Flint workload identity ID.
 * @see https://developers.withflintpay.com/docs/api/workload-identities#getWorkloadIdentity
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.workloadIdentities.get("wid_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(workload_identity_id: InputValue<string>, params?: WorkloadIdentitiesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WorkloadIdentity, WorkloadIdentityResponse>>;
    /**
 * Returns identities in the authenticated environment, ordered by created_at descending and
 * workload_identity_id descending by default. Archived identities are excluded unless status
 * includes archived. Default order: created_at descending, then workload_identity_id descending.
 *
 * `GET /v1/workload-identities`
 * @see https://developers.withflintpay.com/docs/api/workload-identities#listWorkloadIdentities
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.workloadIdentities.list()
 */
    list(params?: WorkloadIdentitiesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<WorkloadIdentityListResponse, WorkloadIdentityListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/workload-identities#listWorkloadIdentities
     */
    listPages(params?: WorkloadIdentitiesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<WorkloadIdentityListResponse, WorkloadIdentityListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/workload-identities#listWorkloadIdentities
     */
    listItems(params?: WorkloadIdentitiesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WorkloadIdentity>;
    /**
 * Updates mutable policy fields. expected_version is optional for scalar updates and required when
 * claim_conditions or scopes is supplied. Arrays replace their entire value. Issuer and audience
 * are immutable. Dashboard callers reactivating or widening live identities need fresh identity
 * verification.
 *
 * `PATCH /v1/workload-identities/{workload_identity_id}`
 * @param workload_identity_id Flint workload identity ID.
 * @see https://developers.withflintpay.com/docs/api/workload-identities#updateWorkloadIdentity
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.workloadIdentities.update("wid_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Release deploy"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(workload_identity_id: InputValue<string>, params: WorkloadIdentitiesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<WorkloadIdentity, WorkloadIdentityResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly workloadIdentities: WorkloadIdentitiesResource;
}
