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
import type { ClientOptions } from '../declarations/types-5.js';
import type { CreateAPIKeyResponse } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    ApiKeysCreateParams,
    APIKeyWithSecret,
    ApiKeysGetParams,
    APIKey,
    APIKeyResponse,
    ApiKeysListParams,
    APIKeyListResponse,
    ApiKeysRevokeParams,
    ApiKeysUpdateParams,
    AuthMode
} from '../declarations/types-0.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type {
    CreateAPIKeyResponse,
    CreateAPIKeyRequestInput,
    CreateAPIKeyRequestFullInput,
    CreateAPIKeyRequestReadOnlyInput,
    CreateAPIKeyRequestRestrictedInput
} from '../declarations/types-6.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions, ConfigurationVersionRequestInput } from '../declarations/types-5.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning, ResourceType } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateAPIKeyRequestInput } from '../declarations/types-58.js';
export { makeConfigurationVersionRequest } from '../declarations/types-62.js';
export {
    makeCreateAPIKeyRequest,
    makeCreateAPIKeyRequestFull,
    makeCreateAPIKeyRequestReadOnly,
    makeCreateAPIKeyRequestRestricted
} from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateAPIKeyRequest } from '../declarations/types-73.js';
export interface ApiKeysResource {
    /**
 * Creates a merchant-bound external API key. secret_key is returned only in the initial successful
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
    create(params: ApiKeysCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<APIKeyWithSecret, CreateAPIKeyResponse>>;
    /**
 * Returns external API key metadata. Secrets, internal keys, and demo-session keys are not
 * returned.
 *
 * `GET /v1/api-keys/{api_key_id}`
 * @param api_key_id Flint API key ID.
 * @see https://developers.withflintpay.com/docs/api/api-keys#getAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.apiKeys.get("key_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(api_key_id: InputValue<string>, params?: ApiKeysGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<APIKey, APIKeyResponse>>;
    /**
 * Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets
 * are never returned. Default order: created_at descending, then api_key_id descending.
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
 * Permanently revokes an external API key and returns metadata with status revoked.
 *
 * `POST /v1/api-keys/{api_key_id}/revoke`
 * @param api_key_id Flint API key ID.
 * @see https://developers.withflintpay.com/docs/api/api-keys#revokeAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.revoke("key_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    revoke(api_key_id: InputValue<string>, params?: ApiKeysRevokeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<APIKey, APIKeyResponse>>;
    /**
 * Updates an API key's name, access, scopes, or expires_at. Expired keys can be updated, and a
 * future expires_at reactivates one. A revoked key can't be updated. An API key caller may grant
 * only scopes it holds and can manage only keys whose scopes it holds.
 *
 * `PATCH /v1/api-keys/{api_key_id}`
 * @param api_key_id Flint API key ID.
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
