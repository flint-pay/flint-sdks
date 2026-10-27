import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreatePaymentMethodDomainRequestInput } from '../declarations/types-8.js';
import type {
    PaymentMethodDomain,
    PaymentMethodDomainListResponse,
    PaymentMethodDomainResponse,
    PaymentMethodDomainsCreateInput,
    PaymentMethodDomainsGetInput,
    PaymentMethodDomainsListInput,
    PaymentMethodDomainsUpdateInput
} from '../declarations/types-36.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdatePaymentMethodDomainRequestInput } from '../declarations/types-48.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreatePaymentMethodDomainRequestInput, CreatePaymentMethodDomainRequest } from '../declarations/types-8.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    PaymentMethodDomain,
    PaymentMethodDomainResponse,
    PaymentMethodDomainListResponse,
    PaymentMethodDomainsCreateInput,
    PaymentMethodDomainsGetInput,
    PaymentMethodDomainsListInput,
    PaymentMethodDomainsUpdateInput,
    PaymentMethodDomainPaymentOptionStatus
} from '../declarations/types-36.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdatePaymentMethodDomainRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreatePaymentMethodDomainRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdatePaymentMethodDomainRequest } from '../declarations/types-73.js';
export interface PaymentMethodDomainsResource {
    /**
 * Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint
 * environment, then validates its wallet readiness.
 * @see reference/paymentMethodDomains.md#paymentmethoddomainscreate
 * POST /v1/payment-method-domains
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethodDomains.create({domain_name: "payments.example.invalid"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreatePaymentMethodDomainRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentMethodDomain>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethodDomains.md#paymentmethoddomainscreate
     */
    createWithResponse(params: (InputValue<CreatePaymentMethodDomainRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PaymentMethodDomainResponse>>;
    /**
 * Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.
 * @see reference/paymentMethodDomains.md#paymentmethoddomainsget
 * GET /v1/payment-method-domains/{payment_method_domain_id}
 * @example
 * client.paymentMethodDomains.get("example")
 */
    get(payment_method_domain_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PaymentMethodDomain>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethodDomains.md#paymentmethoddomainsget
     */
    getWithResponse(payment_method_domain_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PaymentMethodDomainResponse>>;
    /**
 * Returns payment method domains ordered by payment_method_domain_id ascending in the selected
 * Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation
 * error when invalid or mismatched.
 * @see reference/paymentMethodDomains.md#paymentmethoddomainslist
 * GET /v1/payment-method-domains
 * @example
 * client.paymentMethodDomains.list()
 */
    list(params?: {
        "domain_name"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PaymentMethodDomainListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethodDomains.md#paymentmethoddomainslist
     */
    listWithResponse(params?: {
        "domain_name"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PaymentMethodDomainListResponse>>;
    /** Iterate pages lazily.
     * @see reference/paymentMethodDomains.md#paymentmethoddomainslist
     */
    listPages(params?: {
        "domain_name"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentMethodDomainListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/paymentMethodDomains.md#paymentmethoddomainslist
     */
    listPagesWithResponse(params?: {
        "domain_name"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<PaymentMethodDomainListResponse>>;
    /** Iterate items lazily.
     * @see reference/paymentMethodDomains.md#paymentmethoddomainslist
     */
    listItems(params?: {
        "domain_name"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentMethodDomain>;
    /**
 * Sets the domain registration status. Activating the domain also validates Apple Pay and Google
 * Pay readiness.
 * @see reference/paymentMethodDomains.md#paymentmethoddomainsupdate
 * PATCH /v1/payment-method-domains/{payment_method_domain_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethodDomains.update("example", {status: "active"}, { idempotencyKey:
 * idempotencyKey })
 */
    update(payment_method_domain_id: InputValue<string>, params: (InputValue<UpdatePaymentMethodDomainRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentMethodDomain>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethodDomains.md#paymentmethoddomainsupdate
     */
    updateWithResponse(payment_method_domain_id: InputValue<string>, params: (InputValue<UpdatePaymentMethodDomainRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PaymentMethodDomainResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentMethodDomains: PaymentMethodDomainsResource;
}
