import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { CustomerEmailPreferences, CustomerEmailPreferencesResponse } from '../declarations/types-15.js';
import type { EmailPreferencesLookupParams } from '../declarations/types-23.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
export type { EmailPreferencesLookupParams } from '../declarations/types-23.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { CustomerEmailPreferences, CustomerEmailPreferencesResponse } from '../declarations/types-15.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { LookupEmailPreferencesRequestInput, LookupEmailPreferencesRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { NextAction, MoneyValue } from '../declarations/types-37.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export { makeLookupEmailPreferencesRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export interface EmailPreferencesResource {
    /**
 * Reads an address's email preferences without putting it in a URL. Matches after trimming
 * surrounding whitespace and ignoring case. Returns the same shape as the customer preference
 * read. For an address without a current customer, customer_id and version are null. With multiple
 * matching customers, returns the first customer in ID order. A category with no stored choice is
 * enabled. Merchants cannot change these preferences.
 *
 * `POST /v1/email-preferences/lookup`
 * @see https://developers.withflintpay.com/docs/api/customers#lookupEmailPreferences
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.emailPreferences.lookup({email: "alex@example.com"})
 */
    lookup(params: EmailPreferencesLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerEmailPreferences, CustomerEmailPreferencesResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly emailPreferences: EmailPreferencesResource;
}
