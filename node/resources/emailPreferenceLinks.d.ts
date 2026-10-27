import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    EmailPreferenceLink,
    EmailPreferenceLinkRequestInput,
    EmailPreferenceLinkResponse,
    EmailPreferenceLinksLookupInput,
    EmailPreferenceLinksUnsubscribeInput
} from '../declarations/types-16.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
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
export type {
    EmailPreferenceLinkRequestInput,
    EmailPreferenceLink,
    EmailPreferenceLinkResponse,
    EmailPreferenceLinksLookupInput,
    EmailPreferenceLinksUnsubscribeInput,
    EmailPreferenceLinkRequest
} from '../declarations/types-16.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeEmailPreferenceLinkRequest } from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface EmailPreferenceLinksResource {
    /**
 * Reads an emailed preference token without signing the buyer in. The merchant key must match the
 * token's merchant and environment. Tokens belong in the request body and must stay on your
 * backend.
 * @see reference/emailPreferenceLinks.md#emailpreferencelinkslookup
 * POST /v1/email-preference-links/lookup
 * @example
 * client.emailPreferenceLinks.lookup({token: "example"})
 */
    lookup(params: (InputValue<EmailPreferenceLinkRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<EmailPreferenceLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/emailPreferenceLinks.md#emailpreferencelinkslookup
     */
    lookupWithResponse(params: (InputValue<EmailPreferenceLinkRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<EmailPreferenceLinkResponse>>;
    /**
 * Disables the email preference represented by an emailed token without signing the buyer in.
 * Repeating the request keeps it disabled. The merchant key must match the token's merchant and
 * environment.
 * @see reference/emailPreferenceLinks.md#emailpreferencelinksunsubscribe
 * POST /v1/email-preference-links/unsubscribe
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.emailPreferenceLinks.unsubscribe({token: "example"}, { idempotencyKey: idempotencyKey })
 */
    unsubscribe(params: (InputValue<EmailPreferenceLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<EmailPreferenceLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/emailPreferenceLinks.md#emailpreferencelinksunsubscribe
     */
    unsubscribeWithResponse(params: (InputValue<EmailPreferenceLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<EmailPreferenceLinkResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly emailPreferenceLinks: EmailPreferenceLinksResource;
}
