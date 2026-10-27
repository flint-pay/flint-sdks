import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateCustomDomainRequestInput } from '../declarations/types-5.js';
import type {
    CustomDomain,
    CustomDomainListResponse,
    CustomDomainResponse,
    CustomDomainsCreateInput,
    CustomDomainsGetInput,
    CustomDomainsListInput,
    CustomDomainsRemoveInput
} from '../declarations/types-10.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { CreateCustomDomainRequestInput } from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    CustomDomain,
    CustomDomainResponse,
    CustomDomainListResponse,
    CustomDomainsCreateInput,
    CustomDomainsRemoveInput,
    CustomDomainsGetInput,
    CustomDomainsListInput,
    CustomDomainDNSRecord
} from '../declarations/types-10.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateCustomDomainRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface CustomDomainsResource {
    /**
 * Configures a checkout or customer account hostname in this environment. Remove an existing
 * hostname of the same type before creating its replacement. If the create response is lost and a
 * retry returns 500 IDEMPOTENCY_RECOVERY_REQUIRED, keep the original Idempotency-Key. List domains
 * with GET /v1/custom-domains?type=customer_account and GET
 * /v1/custom-domains?type=customer_account&status=archived, using type=checkout for both requests
 * if that was the original type. Follow pagination and inspect current and archived domains for
 * the requested hostname; use a matching domain's custom_domain_id to retrieve its current state.
 * Do not switch keys or wait for key retention to expire to create again. Contact support with the
 * request_id if the outcome is still unclear.
 * @see reference/customDomains.md#customdomainscreate
 * POST /v1/custom-domains
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customDomains.create({type: "checkout", hostname: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateCustomDomainRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomDomain>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customDomains.md#customdomainscreate
     */
    createWithResponse(params: (InputValue<CreateCustomDomainRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomDomainResponse>>;
    /**
 * Archives the hostname and starts its redirect retention window. Repeating the request returns
 * the archived domain unchanged.
 * @see reference/customDomains.md#customdomainsremove
 * DELETE /v1/custom-domains/{custom_domain_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customDomains.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(custom_domain_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomDomain>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customDomains.md#customdomainsremove
     */
    removeWithResponse(custom_domain_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomDomainResponse>>;
    /**
 * Returns a custom domain, including archived domains.
 * @see reference/customDomains.md#customdomainsget
 * GET /v1/custom-domains/{custom_domain_id}
 * @example
 * client.customDomains.get("example")
 */
    get(custom_domain_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CustomDomain>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customDomains.md#customdomainsget
     */
    getWithResponse(custom_domain_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomDomainResponse>>;
    /**
 * Returns domains ordered by created_at descending, then custom_domain_id descending.
 * @see reference/customDomains.md#customdomainslist
 * GET /v1/custom-domains
 * @example
 * client.customDomains.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"checkout" | "customer_account">>;
        "status"?: InputValue<Array<"provisioning" | "active" | "attention_required" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CustomDomainListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customDomains.md#customdomainslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"checkout" | "customer_account">>;
        "status"?: InputValue<Array<"provisioning" | "active" | "attention_required" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CustomDomainListResponse>>;
    /** Iterate pages lazily.
     * @see reference/customDomains.md#customdomainslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"checkout" | "customer_account">>;
        "status"?: InputValue<Array<"provisioning" | "active" | "attention_required" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomDomainListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/customDomains.md#customdomainslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"checkout" | "customer_account">>;
        "status"?: InputValue<Array<"provisioning" | "active" | "attention_required" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<CustomDomainListResponse>>;
    /** Iterate items lazily.
     * @see reference/customDomains.md#customdomainslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"checkout" | "customer_account">>;
        "status"?: InputValue<Array<"provisioning" | "active" | "attention_required" | "inactive" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomDomain>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customDomains: CustomDomainsResource;
}
