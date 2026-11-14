import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { CreateDeveloperSandboxResult } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type {
    Sandbox,
    SandboxListResponse,
    SandboxResponse,
    SandboxWithAPIKeyResponse,
    SandboxesCreateParams,
    SandboxesDeleteParams,
    SandboxesGetParams,
    SandboxesListParams,
    SandboxesResetParams
} from '../declarations/types-59.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    SandboxesDeleteParams,
    Sandbox,
    SandboxResponse,
    SandboxesGetParams,
    SandboxesListParams,
    SandboxListResponse,
    SandboxesResetParams
} from '../declarations/types-59.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { CreateDeveloperSandboxResult } from '../declarations/types-9.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateSandboxRequestInput } from '../declarations/types-13.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { APIKey } from '../declarations/types-0.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { PartnerAppsListParams } from '../declarations/types-44.js';
export { makeCreateSandboxRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export interface SandboxesResource {
    /**
 * Creates a new empty test sandbox for the current merchant. Send `issue_test_key: true` to also
 * receive a test key bound to it; this also requires `accounts.api_keys.write`.
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
 * Archives a non-default sandbox and frees its original name for reuse. A sandbox whose reset
 * stopped after deletion started can be archived; its previous and new data are then deleted in
 * the background.
 *
 * `DELETE /v1/sandboxes/{sandbox_id}`
 * @param sandbox_id Flint sandbox ID.
 * @see https://developers.withflintpay.com/docs/api/sandboxes#deleteSandbox
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.sandboxes.delete("test_01KEZF7C00JC77HTMTB2XHNPE0", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(sandbox_id: InputValue<string>, params?: SandboxesDeleteParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<Sandbox, SandboxResponse>>;
    /**
 * Returns a single sandbox by ID. A test credential (API key, CLI login, or workload token) can
 * read only the sandbox it is bound to; any other `sandbox_id` gets 404 `RESOURCE_NOT_FOUND`.
 *
 * `GET /v1/sandboxes/{sandbox_id}`
 * @param sandbox_id Flint sandbox ID.
 * @see https://developers.withflintpay.com/docs/api/sandboxes#getSandbox
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.sandboxes.get("test_01KEZF7C00JC77HTMTB2XHNPE0")
 */
    get(sandbox_id: InputValue<string>, params?: SandboxesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<WithResponseInfo<Sandbox, SandboxResponse>>;
    /**
 * Returns the merchant's sandboxes. Flint guarantees a default test sandbox for every merchant.
 * Use an onboarding session during setup or a live credential afterward. Test credentials cannot
 * list sandboxes. Default order: is_default descending, then created_at descending, then
 * sandbox_id descending.
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
 * Deletes a sandbox's data and keeps its identity and connections. The default sandbox can be
 * reset too. A test credential (API key, CLI login, or workload token) with
 * `developer.sandboxes.write` can reset only the sandbox it is bound to; any other `sandbox_id`
 * gets 404 `RESOURCE_NOT_FOUND`, and the credential keeps working after the reset. The sandbox
 * keeps its `sandbox_id`, name, and `is_default`; every credential bound to it, including API
 * keys, workload identities, CLI logins, and connected app installs; its webhook endpoints with
 * their secrets and API versions; its test payment account and readiness; its payment method,
 * checkout, and custom domains; and its processing fee assignments. Everything else is deleted:
 * catalog, customers, orders, payments, invoices, subscriptions, test clocks, settings, locations,
 * risk lists, request logs, events, deliveries, and idempotency keys. Returns the same sandbox
 * with `status` `active` and a new `updated_at`. Requests that start while the reset runs get 409
 * `OPERATION_IN_PROGRESS` with reason `sandbox_resetting`; retry them after Retry-After. A second
 * reset while one is running gets 409 `OPERATION_IN_PROGRESS`. Failed resets retry with delays of
 * 1, 2, 4, 8, 16, 32, and 60 minutes, with at most eight attempts. Each attempt counts when it
 * starts, including interrupted attempts. `reset_failed_at` records when a reset stops. If
 * deletion has not started, the sandbox keeps its previous data and accepts requests again. If
 * deletion has started, requests get 409 `ACTION_NOT_ALLOWED` with reason `sandbox_reset_failed`,
 * without Retry-After. Reset it again to resume, or archive a non-default sandbox. A successful
 * reset clears `reset_failed_at`. Requests already running when the reset started finish against
 * the old data, and their results don't survive the reset. A retry with the same Idempotency-Key
 * returns the recorded response; a new key resets again. Each sandbox allows one reset every 10
 * seconds and 500 resets per UTC day, shared by every credential that can reset it; past either
 * limit the request gets 429 `RATE_LIMIT_EXCEEDED` with Retry-After, and a same-key retry doesn't
 * count again. See the [sandboxes guide](/docs/guides/sandboxes#reset-a-sandbox).
 *
 * `POST /v1/sandboxes/{sandbox_id}/reset`
 * @param sandbox_id Flint sandbox ID.
 * @see https://developers.withflintpay.com/docs/api/sandboxes#resetSandbox
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.sandboxes.reset("test_01KEZF7C00JC77HTMTB2XHNPE0", {}, { idempotencyKey: idempotencyKey })
 */
    reset(sandbox_id: InputValue<string>, params?: SandboxesResetParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<Sandbox, SandboxResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly sandboxes: SandboxesResource;
}
