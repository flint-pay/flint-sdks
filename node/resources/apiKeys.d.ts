import type { InputValue } from '../runtime.js';
import type {
    APIKey,
    APIKeyListResponse,
    APIKeyResponse,
    APIKeyWithSecret,
    ApiKeysCreateInput,
    ApiKeysGetInput,
    ApiKeysListInput,
    ApiKeysRevokeInput,
    ApiKeysUpdateInput
} from '../declarations/types-0.js';
import type { ClientOptions, ConfigurationVersionRequestInput } from '../declarations/types-4.js';
import type { CreateAPIKeyRequestInput, CreateAPIKeyResponse } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateAPIKeyRequestInput } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type { CreateAPIKeyRequestInput, CreateAPIKeyResponse } from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference, ResourceType } from '../declarations/types-40.js';
export type {
    APIKeyWithSecret,
    APIKey,
    APIKeyResponse,
    APIKeyListResponse,
    ApiKeysCreateInput,
    ApiKeysGetInput,
    ApiKeysListInput,
    ApiKeysRevokeInput,
    ApiKeysUpdateInput,
    AuthMode
} from '../declarations/types-0.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ConfigurationVersionRequestInput, ClientOptions } from '../declarations/types-4.js';
export type { UpdateAPIKeyRequestInput } from '../declarations/types-47.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeConfigurationVersionRequest, makeCreateAPIKeyRequest } from '../declarations/types-62.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateAPIKeyRequest } from '../declarations/types-71.js';
export interface ApiKeysResource {
    /**
 * Creates a merchant-bound external API key. secret_key is returned only in the initial successful
 * response and accepted idempotent replays of the same create request.
 * @see reference/apiKeys.md#apikeyscreate
 * POST /v1/api-keys
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.create({name: "example", scopes: []}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateAPIKeyRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<APIKeyWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/apiKeys.md#apikeyscreate
     */
    createWithResponse(params: (InputValue<CreateAPIKeyRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CreateAPIKeyResponse>>;
    /**
 * Returns external API key metadata. Secrets, internal keys, and demo-session keys are not
 * returned.
 * @see reference/apiKeys.md#apikeysget
 * GET /v1/api-keys/{api_key_id}
 * @example
 * client.apiKeys.get("example")
 */
    get(api_key_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<APIKey>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/apiKeys.md#apikeysget
     */
    getWithResponse(api_key_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<APIKeyResponse>>;
    /**
 * Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets
 * are never returned.
 * @see reference/apiKeys.md#apikeyslist
 * GET /v1/api-keys
 * @example
 * client.apiKeys.list()
 */
    list(params?: {
        "status"?: InputValue<Array<"active" | "expired" | "revoked">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<APIKeyListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/apiKeys.md#apikeyslist
     */
    listWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "expired" | "revoked">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<APIKeyListResponse>>;
    /** Iterate pages lazily.
     * @see reference/apiKeys.md#apikeyslist
     */
    listPages(params?: {
        "status"?: InputValue<Array<"active" | "expired" | "revoked">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<APIKeyListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/apiKeys.md#apikeyslist
     */
    listPagesWithResponse(params?: {
        "status"?: InputValue<Array<"active" | "expired" | "revoked">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<APIKeyListResponse>>;
    /** Iterate items lazily.
     * @see reference/apiKeys.md#apikeyslist
     */
    listItems(params?: {
        "status"?: InputValue<Array<"active" | "expired" | "revoked">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<APIKey>;
    /**
 * Permanently revokes an external API key and returns metadata with status revoked.
 * @see reference/apiKeys.md#apikeysrevoke
 * POST /v1/api-keys/{api_key_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.revoke("example", undefined, { idempotencyKey: idempotencyKey })
 */
    revoke(api_key_id: InputValue<string>, params?: (InputValue<ConfigurationVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<APIKey>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/apiKeys.md#apikeysrevoke
     */
    revokeWithResponse(api_key_id: InputValue<string>, params?: (InputValue<ConfigurationVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<APIKeyResponse>>;
    /**
 * Updates an API key's name, scopes, or expires_at. Expired keys can be updated, and a future
 * expires_at reactivates one. A revoked key can't be updated. An API key caller may grant only
 * scopes it holds and can manage only keys whose scopes it holds.
 * @see reference/apiKeys.md#apikeysupdate
 * PATCH /v1/api-keys/{api_key_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(api_key_id: InputValue<string>, params: (InputValue<UpdateAPIKeyRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<APIKey>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/apiKeys.md#apikeysupdate
     */
    updateWithResponse(api_key_id: InputValue<string>, params: (InputValue<UpdateAPIKeyRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<APIKeyResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly apiKeys: ApiKeysResource;
}
