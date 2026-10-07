export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ActionResponse } from '../declarations/ActionResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { PaymentMethod } from '../declarations/PaymentMethod.js';
import type { PaymentMethodListResponse } from '../declarations/PaymentMethodListResponse.js';
import type { PaymentMethodResponse } from '../declarations/PaymentMethodResponse.js';
import type { PaymentMethodsGetInput } from '../declarations/PaymentMethodsGetInput.js';
import type { PaymentMethodsGetResponse } from '../declarations/PaymentMethodsGetResponse.js';
import type { PaymentMethodsListInput } from '../declarations/PaymentMethodsListInput.js';
import type { PaymentMethodsListResponse } from '../declarations/PaymentMethodsListResponse.js';
import type { PaymentMethodsRemoveInput } from '../declarations/PaymentMethodsRemoveInput.js';
import type { PaymentMethodsRemoveResponse } from '../declarations/PaymentMethodsRemoveResponse.js';
import type { PaymentMethodsSaveInput } from '../declarations/PaymentMethodsSaveInput.js';
import type { PaymentMethodsSaveResponse } from '../declarations/PaymentMethodsSaveResponse.js';
import type { PaymentMethodsSetDefaultInput } from '../declarations/PaymentMethodsSetDefaultInput.js';
import type { PaymentMethodsSetDefaultResponse } from '../declarations/PaymentMethodsSetDefaultResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SavePaymentMethodResponse } from '../declarations/SavePaymentMethodResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface PaymentMethodsResource {
    /**
 * Returns a single payment method by ID.
 * GET /v1/payment-methods/{payment_method_id}
 * @example
 * client.paymentMethods.get("example")
 */
    get(payment_method_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer">>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PaymentMethodResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(payment_method_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer">>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<PaymentMethodsGetResponse>>;
    /**
 * Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use.
 * GET /v1/payment-methods
 * @example
 * client.paymentMethods.list()
 */
    list(params?: { "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<PaymentMethodListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<PaymentMethodsListResponse>>;
    listPages(params?: { "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): AsyncGenerator<PaymentMethodListResponse>;
    listPagesWithResponse(params?: { "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PaymentMethodsListResponse>>;
    listItems(params?: { "customer_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): AsyncGenerator<PaymentMethod>;
    /**
 * Soft-removes a saved payment method so it can no longer be used for future payments.
 * DELETE /v1/payment-methods/{payment_method_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethods.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentMethodsRemoveResponse>>;
    /**
 * Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.
 * POST /v1/payment-methods
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethods.save({customer_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    save(params: (InputValue<{ "customer_id": string; "type"?: "card"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SavePaymentMethodResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    saveWithResponse(params: (InputValue<{ "customer_id": string; "type"?: "card"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentMethodsSaveResponse>>;
    /**
 * Sets the default payment method for the payment method's owning customer. Subscriptions and automatic invoices charge the default without the buyer, so the payment method's usage must be off_session.
 * POST /v1/payment-methods/{payment_method_id}/set-default
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethods.setDefault("example", {}, { idempotencyKey: idempotencyKey })
 */
    setDefault(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PaymentMethodResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    setDefaultWithResponse(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentMethodsSetDefaultResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly paymentMethods: PaymentMethodsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { PaymentMethodResponse } from '../declarations/PaymentMethodResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { PaymentMethodsGetResponse } from '../declarations/PaymentMethodsGetResponse.js';
export type { PaymentMethodListResponse } from '../declarations/PaymentMethodListResponse.js';
export type { PaymentMethodsListResponse } from '../declarations/PaymentMethodsListResponse.js';
export type { PaymentMethod } from '../declarations/PaymentMethod.js';
export type { ActionResponse } from '../declarations/ActionResponse.js';
export type { PaymentMethodsRemoveResponse } from '../declarations/PaymentMethodsRemoveResponse.js';
export type { SavePaymentMethodResponse } from '../declarations/SavePaymentMethodResponse.js';
export type { PaymentMethodsSaveResponse } from '../declarations/PaymentMethodsSaveResponse.js';
export type { PaymentMethodsSetDefaultResponse } from '../declarations/PaymentMethodsSetDefaultResponse.js';
export type { PaymentMethodsGetInput } from '../declarations/PaymentMethodsGetInput.js';
export type { PaymentMethodsListInput } from '../declarations/PaymentMethodsListInput.js';
export type { PaymentMethodsRemoveInput } from '../declarations/PaymentMethodsRemoveInput.js';
export type { PaymentMethodsSaveInput } from '../declarations/PaymentMethodsSaveInput.js';
export type { PaymentMethodsSetDefaultInput } from '../declarations/PaymentMethodsSetDefaultInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { CardDetails } from '../declarations/CardDetails.js';
export type { ActionResult } from '../declarations/ActionResult.js';
export type { SavePaymentMethodResult } from '../declarations/SavePaymentMethodResult.js';
export type { StripeClientSetup } from '../declarations/StripeClientSetup.js';
export type { StripeClientSetupStripe } from '../declarations/StripeClientSetupStripe.js';
export type { StripeClientAuthority } from '../declarations/StripeClientAuthority.js';
export type { SavePaymentMethodRequestInput } from '../declarations/SavePaymentMethodRequestInput.js';
export { makePaymentMethodResponse } from '../declarations/makePaymentMethodResponse.js';
export { makePaymentMethodListResponse } from '../declarations/makePaymentMethodListResponse.js';
export { makePaymentMethod } from '../declarations/makePaymentMethod.js';
export { makeActionResponse } from '../declarations/makeActionResponse.js';
export { makeSavePaymentMethodResponse } from '../declarations/makeSavePaymentMethodResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeCardDetails } from '../declarations/makeCardDetails.js';
export { makeActionResult } from '../declarations/makeActionResult.js';
export { makeSavePaymentMethodResult } from '../declarations/makeSavePaymentMethodResult.js';
export { makeStripeClientSetup } from '../declarations/makeStripeClientSetup.js';
export { makeStripeClientSetupStripe } from '../declarations/makeStripeClientSetupStripe.js';
export { makeStripeClientAuthority } from '../declarations/makeStripeClientAuthority.js';
