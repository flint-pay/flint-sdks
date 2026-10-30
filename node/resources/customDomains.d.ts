import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    CustomDomain,
    CustomDomainListResponse,
    CustomDomainResponse,
    CustomDomainsCreateParams,
    CustomDomainsDeleteParams,
    CustomDomainsGetParams
} from '../declarations/types-12.js';
import type { CustomDomainsListParams, CustomDomainsValidateParams } from '../declarations/types-13.js';
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
    CustomDomainsCreateParams,
    CustomDomain,
    CustomDomainResponse,
    CustomDomainsDeleteParams,
    CustomDomainsGetParams,
    CustomDomainListResponse,
    Credentials,
    CustomDomainDNSRecord
} from '../declarations/types-12.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { CustomDomainsListParams, CustomDomainsValidateParams } from '../declarations/types-13.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateCustomDomainRequestInput } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateCustomDomainRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
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
 *
 * `POST /v1/custom-domains`
 * @see https://developers.withflintpay.com/docs/api/custom-domains#createCustomDomain
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customDomains.create({type: "checkout", hostname: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: CustomDomainsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomDomain, CustomDomainResponse>>;
    /**
 * Archives the hostname and starts its redirect retention window. Repeating the request returns
 * the archived domain unchanged.
 *
 * `DELETE /v1/custom-domains/{custom_domain_id}`
 * @param custom_domain_id Flint custom domain ID.
 * @see https://developers.withflintpay.com/docs/api/custom-domains#deleteCustomDomain
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customDomains.delete("cdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(custom_domain_id: InputValue<string>, params?: CustomDomainsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomDomain, CustomDomainResponse>>;
    /**
 * Returns a custom domain, including archived domains.
 *
 * `GET /v1/custom-domains/{custom_domain_id}`
 * @param custom_domain_id Flint custom domain ID.
 * @see https://developers.withflintpay.com/docs/api/custom-domains#getCustomDomain
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customDomains.get("cdom_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(custom_domain_id: InputValue<string>, params?: CustomDomainsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomDomain, CustomDomainResponse>>;
    /**
 * Returns domains ordered by created_at descending, then custom_domain_id descending. Default
 * order: created_at descending, then custom_domain_id descending.
 *
 * `GET /v1/custom-domains`
 * @see https://developers.withflintpay.com/docs/api/custom-domains#listCustomDomains
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customDomains.list()
 */
    list(params?: CustomDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomDomainListResponse, CustomDomainListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/custom-domains#listCustomDomains
     */
    listPages(params?: CustomDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CustomDomainListResponse, CustomDomainListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/custom-domains#listCustomDomains
     */
    listItems(params?: CustomDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomDomain>;
    /**
 * Starts provider and DNS checks for this domain. Send no body or an empty JSON object. Checks are
 * limited to once every 60 seconds per domain; rate limited responses include Retry-After.
 *
 * `POST /v1/custom-domains/{custom_domain_id}/validate`
 * @param custom_domain_id Flint custom domain ID.
 * @see https://developers.withflintpay.com/docs/api/custom-domains#validateCustomDomain
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customDomains.validate("cdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    validate(custom_domain_id: InputValue<string>, params?: CustomDomainsValidateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomDomain, CustomDomainResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customDomains: CustomDomainsResource;
}
