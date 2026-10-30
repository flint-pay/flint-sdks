import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { APIKeyWithSecret } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { CreateAPIKeyResponse } from '../declarations/types-6.js';
import type { CreateDeveloperSandboxResult } from '../declarations/types-7.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    Sandbox,
    SandboxListResponse,
    SandboxResponse,
    SandboxWithAPIKeyResponse,
    SandboxesCreateAPIKeyParams,
    SandboxesCreateParams,
    SandboxesDeleteParams,
    SandboxesGetParams,
    SandboxesListParams,
    SandboxesResetParams
} from '../declarations/types-52.js';
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
    SandboxesCreateParams,
    SandboxWithAPIKeyResponse,
    SandboxesCreateAPIKeyParams,
    SandboxesDeleteParams,
    Sandbox,
    SandboxResponse,
    SandboxesGetParams,
    SandboxesListParams,
    SandboxListResponse,
    SandboxesResetParams
} from '../declarations/types-52.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { CreateDeveloperSandboxResult } from '../declarations/types-7.js';
export type { APIKeyWithSecret, AuthMode, APIKey } from '../declarations/types-0.js';
export type { CreateAPIKeyResponse } from '../declarations/types-6.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateSandboxRequestInput } from '../declarations/types-11.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type {
    IssueSandboxAPIKeyRequestInput,
    IssueSandboxAPIKeyRequestFullInput,
    IssueSandboxAPIKeyRequestReadOnlyInput,
    IssueSandboxAPIKeyRequestRestrictedInput
} from '../declarations/types-32.js';
export type { PartnerAppsListParams } from '../declarations/types-40.js';
export { makeCreateSandboxRequest } from '../declarations/types-65.js';
export {
    makeIssueSandboxAPIKeyRequest,
    makeIssueSandboxAPIKeyRequestFull,
    makeIssueSandboxAPIKeyRequestReadOnly,
    makeIssueSandboxAPIKeyRequestRestricted,
    makeMoneyValue
} from '../declarations/types-69.js';
export interface SandboxesResource {
    /**
 * Creates a new empty test sandbox for the current merchant. Send `issue_test_key: true` to also
 * receive a test key bound to it.
 *
 * `POST /v1/sandboxes`
 * @see https://developers.withflintpay.com/docs/api/sandboxes#createSandbox
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.sandboxes.create({access: "restricted", issue_test_key: true, name: "QA", scopes:
 * ["commerce.orders.read", "commerce.orders.write"], test_key_name: "QA integration key"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: SandboxesCreateParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<CreateDeveloperSandboxResult, SandboxWithAPIKeyResponse>>;
    /**
 * Creates a new test API key that is bound to the target sandbox.
 *
 * `POST /v1/sandboxes/{sandbox_id}/api-keys`
 * @param sandbox_id Flint sandbox ID.
 * @see https://developers.withflintpay.com/docs/api/sandboxes#createSandboxAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.sandboxes.createAPIKey("test_01ARZ3NDEKTSV4RRFFQ69G5FAV", {access: "restricted", name:
 * "Partner demo key", scopes: ["commerce.orders.read", "customers.read"]}, { idempotencyKey:
 * idempotencyKey })
 */
    createAPIKey(sandbox_id: InputValue<string>, params: SandboxesCreateAPIKeyParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<APIKeyWithSecret, CreateAPIKeyResponse>>;
    /**
 * Retires a non-default sandbox and frees its original name for reuse.
 *
 * `DELETE /v1/sandboxes/{sandbox_id}`
 * @param sandbox_id Flint sandbox ID.
 * @see https://developers.withflintpay.com/docs/api/sandboxes#deleteSandbox
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.sandboxes.delete("test_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(sandbox_id: InputValue<string>, params?: SandboxesDeleteParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<Sandbox, SandboxResponse>>;
    /**
 * Returns a single sandbox by ID.
 *
 * `GET /v1/sandboxes/{sandbox_id}`
 * @param sandbox_id Flint sandbox ID.
 * @see https://developers.withflintpay.com/docs/api/sandboxes#getSandbox
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.sandboxes.get("test_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(sandbox_id: InputValue<string>, params?: SandboxesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<WithResponseInfo<Sandbox, SandboxResponse>>;
    /**
 * Returns the merchant's sandboxes. Flint guarantees a default test sandbox for every merchant.
 * Use an onboarding session token during setup or a normal external API key afterward. Default
 * order: is_default descending, then created_at descending, then sandbox_id descending.
 *
 * `GET /v1/sandboxes`
 * @see https://developers.withflintpay.com/docs/api/sandboxes#listSandboxes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.sandboxes.list()
 */
    list(params?: SandboxesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<WithResponseInfo<SandboxListResponse, SandboxListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/sandboxes#listSandboxes
     */
    listPages(params?: SandboxesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<WithResponseInfo<SandboxListResponse, SandboxListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/sandboxes#listSandboxes
     */
    listItems(params?: SandboxesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<Sandbox>;
    /**
 * Clears a non-default sandbox and returns its replacement environment. The replacement has a new
 * sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys.
 * The archived sandbox's `replaced_by_sandbox_id` names the replacement.
 *
 * `POST /v1/sandboxes/{sandbox_id}/reset`
 * @param sandbox_id Flint sandbox ID.
 * @see https://developers.withflintpay.com/docs/api/sandboxes#resetSandbox
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.sandboxes.reset("test_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    reset(sandbox_id: InputValue<string>, params?: SandboxesResetParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<Sandbox, SandboxResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly sandboxes: SandboxesResource;
}
