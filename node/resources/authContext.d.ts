import type { WithResponseInfo } from '../runtime.js';
import type { AuthContext, AuthContextGetParams, AuthContextResponse } from '../declarations/types-1.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
export type { AuthContextGetParams, AuthContext, AuthContextResponse, AuthMode } from '../declarations/types-1.js';
export type { _SdkWithoutIdempotency, WorkloadIdentityAuthContext } from '../declarations/types-69.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { Credentials } from '../declarations/types-14.js';
export type { APIKeyAuthContext } from '../declarations/types-0.js';
export type { CLILoginAuthContext } from '../declarations/types-4.js';
export type { PartnerAppAuthContext } from '../declarations/types-43.js';
export type { OnboardingSessionAuthContext } from '../declarations/types-39.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { NextAction, MoneyValue } from '../declarations/types-38.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface AuthContextResource {
    /**
 * Returns non-secret metadata for the credential that sent the request, as one object per
 * credential type selected by auth_type. API keys, CLI logins, workload identities, partner apps,
 * and onboarding sessions are accepted. No scope is required.
 *
 * `GET /v1/auth-context`
 * @see https://developers.withflintpay.com/docs/api/api-keys#getAuthContext
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.authContext.get()
 */
    get(params?: AuthContextGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<WithResponseInfo<AuthContext, AuthContextResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly authContext: AuthContextResource;
}
