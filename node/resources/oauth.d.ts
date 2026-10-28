import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    OauthAuthorizePartnerInstallInput,
    OauthAuthorizePartnerInstallResponse,
    OauthPreviewPartnerInstallAuthorizationInput
} from '../declarations/types-33.js';
import type { PartnerAuthorizePreview, PartnerAuthorizePreviewResponse } from '../declarations/types-37.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    OauthAuthorizePartnerInstallResponse,
    OauthAuthorizePartnerInstallInput,
    OauthPreviewPartnerInstallAuthorizationInput,
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValue
} from '../declarations/types-33.js';
export type { PartnerAuthorizePreview, PartnerAuthorizePreviewResponse } from '../declarations/types-37.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { PartnerAppPermissionManifestEntry } from '../declarations/types-36.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export interface OauthResource {
    /**
 * Starts a partner app install in the merchant's browser. Flint validates the request, then
 * redirects to Flint's consent screen, where the merchant signs in, chooses a merchant, and
 * approves or denies the requested permissions. Flint then redirects to redirect_uri with code,
 * state, and mode, or with an OAuth error. Request errors found before consent also redirect with
 * an OAuth error once client_id and redirect_uri are validated. Unknown or inactive clients and
 * missing or unregistered redirect URIs return the Flint error envelope. Flint ignores
 * unrecognized parameters.
 * @see reference/oauth.md#oauthauthorizepartnerinstall
 * GET /v1/oauth/authorize
 * @example
 * client.oauth.authorizePartnerInstall({response_type: "code", client_id: "example", redirect_uri:
 * "example", mode: "test", code_challenge: "example", code_challenge_method: "S256", state:
 * "example"})
 */
    authorizePartnerInstall(params: {
        "response_type": InputValue<"code">;
        "client_id": InputValue<string>;
        "redirect_uri": InputValue<string>;
        "mode": InputValue<"test" | "live">;
        "code_challenge": InputValue<string>;
        "code_challenge_method": InputValue<"S256">;
        "scope"?: InputValue<string>;
        "sandbox_id"?: InputValue<string>;
        "merchant_id"?: InputValue<string>;
        "state": InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<Result<OauthAuthorizePartnerInstallResponse>>;
    /**
 * Validates the install link inputs and returns the partner app metadata and requested permissions
 * for the consent screen. Flint ignores unrecognized parameters.
 * @see reference/oauth.md#oauthpreviewpartnerinstallauthorization
 * GET /v1/oauth/authorize/preview
 * @example
 * client.oauth.previewPartnerInstallAuthorization({client_id: "example", redirect_uri: "example",
 * mode: "test"})
 */
    previewPartnerInstallAuthorization(params: {
        "response_type"?: InputValue<"code">;
        "client_id": InputValue<string>;
        "redirect_uri": InputValue<string>;
        "mode": InputValue<"test" | "live">;
        "code_challenge"?: InputValue<string>;
        "code_challenge_method"?: InputValue<"S256">;
        "scope"?: InputValue<string>;
        "sandbox_id"?: InputValue<string>;
        "state"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<PartnerAuthorizePreview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/oauth.md#oauthpreviewpartnerinstallauthorization
     */
    previewPartnerInstallAuthorizationWithResponse(params: {
        "response_type"?: InputValue<"code">;
        "client_id": InputValue<string>;
        "redirect_uri": InputValue<string>;
        "mode": InputValue<"test" | "live">;
        "code_challenge"?: InputValue<string>;
        "code_challenge_method"?: InputValue<"S256">;
        "scope"?: InputValue<string>;
        "sandbox_id"?: InputValue<string>;
        "state"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<SdkResponse<PartnerAuthorizePreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly oauth: OauthResource;
}
