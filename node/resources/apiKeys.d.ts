import type { WithResponseInfo, InputValue } from '../runtime.js';
import type {
    APIKey,
    APIKeyListResponse,
    APIKeyResponse,
    APIKeyWithSecret,
    ApiKeysCreateParams,
    ApiKeysGetParams,
    ApiKeysListParams,
    ApiKeysRevokeParams,
    ApiKeysUpdateParams
} from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { CreateAPIKeyResponse } from '../declarations/types-8.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    ApiKeysCreateParams,
    APIKeyWithSecret,
    ApiKeysGetParams,
    APIKey,
    APIKeyResponse,
    ApiKeysListParams,
    APIKeyListResponse,
    ApiKeysRevokeParams,
    ApiKeysUpdateParams
} from '../declarations/types-0.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type {
    CreateAPIKeyResponse,
    CreateAPIKeyRequestInput,
    CreateAPIKeyRequestFullInput,
    CreateAPIKeyRequestReadOnlyInput,
    CreateAPIKeyRequestRestrictedInput
} from '../declarations/types-8.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
export type { ClientOptions, ConfigurationVersionRequestInput } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-44.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { UpdateAPIKeyRequestInput } from '../declarations/types-75.js';
export {
    makeConfigurationVersionRequest,
    makeCreateAPIKeyRequest,
    makeCreateAPIKeyRequestFull,
    makeCreateAPIKeyRequestReadOnly,
    makeCreateAPIKeyRequestRestricted
} from '../declarations/types-81.js';
export { makeMoneyValue } from '../declarations/types-88.js';
export { makeUpdateAPIKeyRequest } from '../declarations/types-93.js';
export interface ApiKeysResource {
    /**
 * Creates a merchant-bound external API key. A live credential creates a live key, or a test key
 * bound to the sandbox named by sandbox_id. A sandbox-bound credential, such as a test key,
 * creates test keys in its own sandbox only. An onboarding session creates its merchant's first
 * keys here, in its default sandbox. secret_key is returned only in the initial successful
 * response and accepted idempotent replays of the same create request.
 *
 * `POST /v1/api-keys`
 * @see https://developers.withflintpay.com/docs/api/api-keys#createAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.create({access: "restricted", expires_at: "2027-03-17T14:30:00Z", name: "Sandbox
 * orders integration", scopes: ["accounts.api_keys.read", "commerce.orders.read",
 * "commerce.orders.write"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: ApiKeysCreateParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<APIKeyWithSecret, CreateAPIKeyResponse>>;
    /**
 * Returns external API key metadata. Secrets, internal keys, and demo-session keys are not
 * returned. Dashboard sessions can manage only live keys in live mode or keys in the selected
 * sandbox in test mode. A key outside that environment returns 404 RESOURCE_NOT_FOUND.
 *
 * `GET /v1/api-keys/{api_key_id}`
 * @param api_key_id Flint API key ID. Must be a valid ID with prefix key_. Malformed IDs return
 * 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/api-keys#getAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.apiKeys.get("key_01KEZF7C008CTC2G5V6J08M6S7")
 */
    get(api_key_id: InputValue<string>, params?: ApiKeysGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<APIKey, APIKeyResponse>>;
    /**
 * Returns merchant-bound external API key metadata. Live callers list only live keys; test callers
 * list only keys in their selected sandbox. Dashboard sessions use the mode and sandbox selected
 * by the request. Internal keys, demo-session keys, and secrets are never returned. Default order:
 * created_at descending, then api_key_id descending.
 *
 * `GET /v1/api-keys`
 * @see https://developers.withflintpay.com/docs/api/api-keys#listAPIKeys
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.apiKeys.list()
 */
    list(params?: ApiKeysListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<APIKeyListResponse, APIKeyListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/api-keys#listAPIKeys
     */
    listPages(params?: ApiKeysListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<APIKeyListResponse, APIKeyListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/api-keys#listAPIKeys
     */
    listItems(params?: ApiKeysListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<APIKey>;
    /**
 * Permanently revokes an external API key and returns metadata with status revoked. A CLI login
 * with accounts.api_keys.write can revoke a key in its own merchant and environment context even
 * when the key holds broader scopes. API keys and workload credentials must also hold the target
 * key's scopes. Dashboard sessions can manage only live keys in live mode or keys in the selected
 * sandbox in test mode. A key outside that environment returns 404 RESOURCE_NOT_FOUND. An
 * onboarding session with permission to manage API keys can revoke unlinked external keys in any
 * active sandbox of its merchant.
 *
 * `POST /v1/api-keys/{api_key_id}/revoke`
 * @param api_key_id Flint API key ID. Must be a valid ID with prefix key_. Malformed IDs return
 * 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/api-keys#revokeAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.revoke("key_01KEZF7C008CTC2G5V6J08M6S7", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    revoke(api_key_id: InputValue<string>, params?: ApiKeysRevokeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<APIKey, APIKeyResponse>>;
    /**
 * Updates an API key's name, access, scopes, or expires_at. Expired keys can be updated, and a
 * future expires_at reactivates one. A revoked key can't be updated. An API key caller may grant
 * only scopes it holds and can manage only keys whose scopes it holds. Dashboard sessions can
 * manage only live keys in live mode or keys in the selected sandbox in test mode. A key outside
 * that environment returns 404 RESOURCE_NOT_FOUND.
 *
 * `PATCH /v1/api-keys/{api_key_id}`
 * @param api_key_id Flint API key ID. Must be a valid ID with prefix key_. Malformed IDs return
 * 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/api-keys#updateAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.update("key_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Reporting key"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(api_key_id: InputValue<string>, params: ApiKeysUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<APIKey, APIKeyResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly apiKeys: ApiKeysResource;
}
