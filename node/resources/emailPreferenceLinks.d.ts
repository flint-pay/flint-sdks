export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { EmailPreferenceLinkResponse } from '../declarations/EmailPreferenceLinkResponse.js';
import type { EmailPreferenceLinksLookupInput } from '../declarations/EmailPreferenceLinksLookupInput.js';
import type { EmailPreferenceLinksLookupResponse } from '../declarations/EmailPreferenceLinksLookupResponse.js';
import type { EmailPreferenceLinksUnsubscribeInput } from '../declarations/EmailPreferenceLinksUnsubscribeInput.js';
import type { EmailPreferenceLinksUnsubscribeResponse } from '../declarations/EmailPreferenceLinksUnsubscribeResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export interface EmailPreferenceLinksResource {
    /**
 * Reads an emailed preference token without signing the buyer in. The merchant key must match the token's merchant and environment. Tokens belong in the request body and must stay on your backend.
 * POST /v1/email-preference-links/lookup
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.emailPreferenceLinks.lookup({token: "example"}, { idempotencyKey: idempotencyKey })
 */
    lookup(params: (InputValue<{ "token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<EmailPreferenceLinkResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    lookupWithResponse(params: (InputValue<{ "token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<EmailPreferenceLinksLookupResponse>>;
    /**
 * Disables the email preference represented by an emailed token without signing the buyer in. Repeating the request keeps it disabled. The merchant key must match the token's merchant and environment.
 * POST /v1/email-preference-links/unsubscribe
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.emailPreferenceLinks.unsubscribe({token: "example"}, { idempotencyKey: idempotencyKey })
 */
    unsubscribe(params: (InputValue<{ "token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<EmailPreferenceLinkResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    unsubscribeWithResponse(params: (InputValue<{ "token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<EmailPreferenceLinksUnsubscribeResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly emailPreferenceLinks: EmailPreferenceLinksResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { EmailPreferenceLinkResponse } from '../declarations/EmailPreferenceLinkResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { EmailPreferenceLinksLookupResponse } from '../declarations/EmailPreferenceLinksLookupResponse.js';
export type { EmailPreferenceLinksUnsubscribeResponse } from '../declarations/EmailPreferenceLinksUnsubscribeResponse.js';
export type { EmailPreferenceLinksLookupInput } from '../declarations/EmailPreferenceLinksLookupInput.js';
export type { EmailPreferenceLinksUnsubscribeInput } from '../declarations/EmailPreferenceLinksUnsubscribeInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { EmailPreferenceLink } from '../declarations/EmailPreferenceLink.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { EmailPreferenceLinkRequestInput } from '../declarations/EmailPreferenceLinkRequestInput.js';
export { makeEmailPreferenceLinkResponse } from '../declarations/makeEmailPreferenceLinkResponse.js';
export { makeEmailPreferenceLink } from '../declarations/makeEmailPreferenceLink.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
