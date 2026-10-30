import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    PaymentMethodDomain,
    PaymentMethodDomainListResponse,
    PaymentMethodDomainResponse,
    PaymentMethodDomainsCreateParams,
    PaymentMethodDomainsGetParams,
    PaymentMethodDomainsListParams,
    PaymentMethodDomainsUpdateParams
} from '../declarations/types-42.js';
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
    PaymentMethodDomainsCreateParams,
    PaymentMethodDomain,
    PaymentMethodDomainResponse,
    PaymentMethodDomainsGetParams,
    PaymentMethodDomainsListParams,
    PaymentMethodDomainListResponse,
    PaymentMethodDomainsUpdateParams,
    PaymentMethodDomainPaymentOptionStatus
} from '../declarations/types-42.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreatePaymentMethodDomainRequestInput, CreatePaymentMethodDomainRequest } from '../declarations/types-9.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdatePaymentMethodDomainRequestInput } from '../declarations/types-59.js';
export { makeCreatePaymentMethodDomainRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdatePaymentMethodDomainRequest } from '../declarations/types-74.js';
export interface PaymentMethodDomainsResource {
    /**
 * Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint
 * environment, then validates its wallet readiness.
 *
 * `POST /v1/payment-method-domains`
 * @see
 * https://developers.withflintpay.com/docs/api/payment-method-domains#createPaymentMethodDomain
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethodDomains.create({domain_name: "payments.example.invalid"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: PaymentMethodDomainsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentMethodDomain, PaymentMethodDomainResponse>>;
    /**
 * Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.
 *
 * `GET /v1/payment-method-domains/{payment_method_domain_id}`
 * @param payment_method_domain_id Flint payment method domain ID.
 * @see https://developers.withflintpay.com/docs/api/payment-method-domains#getPaymentMethodDomain
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentMethodDomains.get("pmdom_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(payment_method_domain_id: InputValue<string>, params?: PaymentMethodDomainsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentMethodDomain, PaymentMethodDomainResponse>>;
    /**
 * Returns payment method domains ordered by payment_method_domain_id ascending in the selected
 * Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation
 * error when invalid or mismatched. Default order: payment_method_domain_id ascending; this key
 * uniquely orders the results.
 *
 * `GET /v1/payment-method-domains`
 * @see https://developers.withflintpay.com/docs/api/payment-method-domains#listPaymentMethodDomains
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentMethodDomains.list()
 */
    list(params?: PaymentMethodDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentMethodDomainListResponse, PaymentMethodDomainListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/payment-method-domains#listPaymentMethodDomains
     */
    listPages(params?: PaymentMethodDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PaymentMethodDomainListResponse, PaymentMethodDomainListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/payment-method-domains#listPaymentMethodDomains
     */
    listItems(params?: PaymentMethodDomainsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentMethodDomain>;
    /**
 * Turns the domain on or off. Reads never check again with the provider; they return the last
 * result. Sending status active registers the hostname on your current payment account, turns it
 * on, and checks again any wallet that isn't active, so send it to check a domain again. Sending
 * status inactive turns wallet buttons off for the hostname.
 *
 * `PATCH /v1/payment-method-domains/{payment_method_domain_id}`
 * @param payment_method_domain_id Flint payment method domain ID.
 * @see
 * https://developers.withflintpay.com/docs/api/payment-method-domains#updatePaymentMethodDomain
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethodDomains.update("pmdom_01ARZ3NDEKTSV4RRFFQ69G5FAV", {status: "active"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(payment_method_domain_id: InputValue<string>, params: PaymentMethodDomainsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentMethodDomain, PaymentMethodDomainResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentMethodDomains: PaymentMethodDomainsResource;
}
