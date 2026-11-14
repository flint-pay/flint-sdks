import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    EmailPreferenceLink,
    EmailPreferenceLinkResponse,
    EmailPreferenceLinksLookupParams,
    EmailPreferenceLinksUnsubscribeParams
} from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-54.js';
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
    EmailPreferenceLinksLookupParams,
    EmailPreferenceLink,
    EmailPreferenceLinkResponse,
    EmailPreferenceLinksUnsubscribeParams,
    EmailPreferenceLinkRequestInput,
    EmailPreferenceLinkRequest
} from '../declarations/types-24.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeEmailPreferenceLinkRequest } from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-79.js';
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
 * client.emailPreferenceLinks.lookup({token:
 * "b3BlbmFwaS1maXh0dXJl.eyJ2IjoxLCJwIjoic2FuZGJveCIsImQiOiJlZGVsXzAxS0VaRjdDMDA4OU1SRThFRjc4SFIxRzI2In0.6c_I5nt_K3eTi7XxJJ95dXgQZjGlaY_lVlp64YJPxuo"})
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
 * client.emailPreferenceLinks.unsubscribe({token:
 * "b3BlbmFwaS1maXh0dXJl.eyJ2IjoxLCJwIjoic2FuZGJveCIsImQiOiJlZGVsXzAxS0VaRjdDMDA4OU1SRThFRjc4SFIxRzI2In0.6c_I5nt_K3eTi7XxJJ95dXgQZjGlaY_lVlp64YJPxuo"},
 * { idempotencyKey: idempotencyKey })
 */
    unsubscribe(params: EmailPreferenceLinksUnsubscribeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<EmailPreferenceLink, EmailPreferenceLinkResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly emailPreferenceLinks: EmailPreferenceLinksResource;
}
