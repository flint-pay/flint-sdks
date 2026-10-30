import type { WithResponseInfo } from '../runtime.js';
import type { AuthContext, AuthContextGetParams, AuthContextResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-5.js';
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
export type { AuthContextGetParams, AuthContext, AuthContextResponse, AuthMode } from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface AuthContextResource {
    /**
 * Returns non-secret metadata for an API key or CLI OAuth access token, including its merchant,
 * environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and
 * a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include
 * oauth_session_id, context_id, and the context name. No additional API scope is required.
 *
 * `GET /v1/auth-context`
 * @see https://developers.withflintpay.com/docs/api/api-keys#getAuthContext
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.authContext.get()
 */
    get(params?: AuthContextGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<AuthContext, AuthContextResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly authContext: AuthContextResource;
}
