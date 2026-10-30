import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    EmailPreferenceLink,
    EmailPreferenceLinkResponse,
    EmailPreferenceLinksLookupParams,
    EmailPreferenceLinksUnsubscribeParams
} from '../declarations/types-21.js';
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
    EmailPreferenceLinksLookupParams,
    EmailPreferenceLink,
    EmailPreferenceLinkResponse,
    EmailPreferenceLinksUnsubscribeParams,
    EmailPreferenceLinkRequestInput,
    EmailPreferenceLinkRequest
} from '../declarations/types-21.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeEmailPreferenceLinkRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface EmailPreferenceLinksResource {
    /**
 * Reads an emailed preference token without signing the buyer in. The merchant key must match the
 * token's merchant and environment. Tokens belong in the request body and must stay on your
 * backend.
 *
 * `POST /v1/email-preference-links/lookup`
 * @see https://developers.withflintpay.com/docs/api/customers#lookupEmailPreferenceLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.emailPreferenceLinks.lookup({token: "example"})
 */
    lookup(params: EmailPreferenceLinksLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<EmailPreferenceLink, EmailPreferenceLinkResponse>>;
    /**
 * Disables the email preference represented by an emailed token without signing the buyer in.
 * Repeating the request keeps it disabled. The merchant key must match the token's merchant and
 * environment.
 *
 * `POST /v1/email-preference-links/unsubscribe`
 * @see https://developers.withflintpay.com/docs/api/customers#unsubscribeEmailPreferenceLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.emailPreferenceLinks.unsubscribe({token: "example"}, { idempotencyKey: idempotencyKey })
 */
    unsubscribe(params: EmailPreferenceLinksUnsubscribeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<EmailPreferenceLink, EmailPreferenceLinkResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly emailPreferenceLinks: EmailPreferenceLinksResource;
}
