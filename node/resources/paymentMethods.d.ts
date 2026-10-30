import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    PaymentMethod,
    PaymentMethodListResponse,
    PaymentMethodResponse,
    PaymentMethodWithSetup,
    PaymentMethodsCreateParams,
    PaymentMethodsDeleteParams,
    PaymentMethodsGetParams,
    PaymentMethodsListParams
} from '../declarations/types-42.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { SavePaymentMethodResponse } from '../declarations/types-52.js';
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
    PaymentMethodsCreateParams,
    PaymentMethodWithSetup,
    PaymentMethodsDeleteParams,
    PaymentMethod,
    PaymentMethodResponse,
    PaymentMethodsGetParams,
    PaymentMethodsListParams,
    PaymentMethodListResponse
} from '../declarations/types-42.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { SavePaymentMethodResponse, SavePaymentMethodRequestInput } from '../declarations/types-52.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { StripeClientSetup, StripeClientSetupStripe, StripeClientAuthority } from '../declarations/types-53.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CardDetails } from '../declarations/types-4.js';
export type { ExpandedCustomerSummary } from '../declarations/types-21.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeSavePaymentMethodRequest } from '../declarations/types-72.js';
export interface PaymentMethodsResource {
    /**
 * Initiates saving a payment method and returns the client setup payload needed to complete setup
 * on the frontend.
 *
 * `POST /v1/payment-methods`
 * @see https://developers.withflintpay.com/docs/api/payment-methods#createPaymentMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethods.create({customer_id: "cus_01KEZF7C003ACYXT6Q5EQZ78EE", type: "card"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: PaymentMethodsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentMethodWithSetup, SavePaymentMethodResponse>>;
    /**
 * Deletes a saved payment method so it can no longer be used for future payments. Returns the
 * payment method with status archived, including when it was already archived.
 *
 * `DELETE /v1/payment-methods/{payment_method_id}`
 * @param payment_method_id Flint payment method ID.
 * @see https://developers.withflintpay.com/docs/api/payment-methods#deletePaymentMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethods.delete("pm_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(payment_method_id: InputValue<string>, params?: PaymentMethodsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentMethod, PaymentMethodResponse>>;
    /**
 * Returns a single payment method by ID.
 *
 * `GET /v1/payment-methods/{payment_method_id}`
 * @param payment_method_id Flint payment method ID.
 * @see https://developers.withflintpay.com/docs/api/payment-methods#getPaymentMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentMethods.get("pm_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(payment_method_id: InputValue<string>, params?: PaymentMethodsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<PaymentMethod, PaymentMethodResponse>>;
    /**
 * Lists payment methods in every status except archived, newest first. Filter by status=active for
 * the cards you can charge. Optionally filter to a customer. Filter by usage off_session to list
 * the payment methods a subscription, automatic invoice, or default payment method can use.
 * Default order: created_at descending, then payment_method_id descending.
 *
 * `GET /v1/payment-methods`
 * @see https://developers.withflintpay.com/docs/api/payment-methods#listPaymentMethods
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentMethods.list()
 */
    list(params?: PaymentMethodsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<PaymentMethodListResponse, PaymentMethodListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/payment-methods#listPaymentMethods
     */
    listPages(params?: PaymentMethodsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<WithResponseInfo<PaymentMethodListResponse, PaymentMethodListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/payment-methods#listPaymentMethods
     */
    listItems(params?: PaymentMethodsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<PaymentMethod>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentMethods: PaymentMethodsResource;
}
