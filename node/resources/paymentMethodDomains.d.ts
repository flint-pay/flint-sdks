export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { PaymentMethodDomain } from '../declarations/PaymentMethodDomain.js';
import type { PaymentMethodDomainListResponse } from '../declarations/PaymentMethodDomainListResponse.js';
import type { PaymentMethodDomainResponse } from '../declarations/PaymentMethodDomainResponse.js';
import type { PaymentMethodDomainsCreateInput } from '../declarations/PaymentMethodDomainsCreateInput.js';
import type { PaymentMethodDomainsCreateResponse } from '../declarations/PaymentMethodDomainsCreateResponse.js';
import type { PaymentMethodDomainsGetInput } from '../declarations/PaymentMethodDomainsGetInput.js';
import type { PaymentMethodDomainsGetResponse } from '../declarations/PaymentMethodDomainsGetResponse.js';
import type { PaymentMethodDomainsListInput } from '../declarations/PaymentMethodDomainsListInput.js';
import type { PaymentMethodDomainsListResponse } from '../declarations/PaymentMethodDomainsListResponse.js';
import type { PaymentMethodDomainsUpdateInput } from '../declarations/PaymentMethodDomainsUpdateInput.js';
import type { PaymentMethodDomainsUpdateResponse } from '../declarations/PaymentMethodDomainsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface PaymentMethodDomainsResource {
    /**
 * Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint environment, then validates its wallet readiness.
 * POST /v1/payment-method-domains
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethodDomains.create({domain_name: "payments.example.invalid"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "domain_name": (string); }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PaymentMethodDomainResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "domain_name": (string); }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentMethodDomainsCreateResponse>>;
    /**
 * Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.
 * GET /v1/payment-method-domains/{payment_method_domain_id}
 * @example
 * client.paymentMethodDomains.get("example")
 */
    get(payment_method_domain_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PaymentMethodDomainResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(payment_method_domain_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PaymentMethodDomainsGetResponse>>;
    /**
 * Returns payment method domains ordered by payment_method_domain_id ascending in the selected Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation error when invalid or mismatched.
 * GET /v1/payment-method-domains
 * @example
 * client.paymentMethodDomains.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PaymentMethodDomainListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PaymentMethodDomainsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PaymentMethodDomainListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PaymentMethodDomainsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PaymentMethodDomain>;
    /**
 * Sets the domain registration status. Activating the domain also validates Apple Pay and Google Pay readiness.
 * PATCH /v1/payment-method-domains/{payment_method_domain_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethodDomains.update("example", {status: "active"}, { idempotencyKey: idempotencyKey })
 */
    update(payment_method_domain_id: InputValue<string>, params: (InputValue<{ "status": "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PaymentMethodDomainResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(payment_method_domain_id: InputValue<string>, params: (InputValue<{ "status": "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentMethodDomainsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly paymentMethodDomains: PaymentMethodDomainsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { PaymentMethodDomainResponse } from '../declarations/PaymentMethodDomainResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { PaymentMethodDomainsCreateResponse } from '../declarations/PaymentMethodDomainsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { PaymentMethodDomainsGetResponse } from '../declarations/PaymentMethodDomainsGetResponse.js';
export type { PaymentMethodDomainListResponse } from '../declarations/PaymentMethodDomainListResponse.js';
export type { PaymentMethodDomainsListResponse } from '../declarations/PaymentMethodDomainsListResponse.js';
export type { PaymentMethodDomain } from '../declarations/PaymentMethodDomain.js';
export type { PaymentMethodDomainsUpdateResponse } from '../declarations/PaymentMethodDomainsUpdateResponse.js';
export type { PaymentMethodDomainsCreateInput } from '../declarations/PaymentMethodDomainsCreateInput.js';
export type { PaymentMethodDomainsGetInput } from '../declarations/PaymentMethodDomainsGetInput.js';
export type { PaymentMethodDomainsListInput } from '../declarations/PaymentMethodDomainsListInput.js';
export type { PaymentMethodDomainsUpdateInput } from '../declarations/PaymentMethodDomainsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { PaymentMethodDomainPaymentOption } from '../declarations/PaymentMethodDomainPaymentOption.js';
export type { CreatePaymentMethodDomainRequestInput } from '../declarations/CreatePaymentMethodDomainRequestInput.js';
export type { UpdatePaymentMethodDomainRequestInput } from '../declarations/UpdatePaymentMethodDomainRequestInput.js';
export { makePaymentMethodDomainResponse } from '../declarations/makePaymentMethodDomainResponse.js';
export { makePaymentMethodDomainListResponse } from '../declarations/makePaymentMethodDomainListResponse.js';
export { makePaymentMethodDomain } from '../declarations/makePaymentMethodDomain.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makePaymentMethodDomainPaymentOption } from '../declarations/makePaymentMethodDomainPaymentOption.js';
