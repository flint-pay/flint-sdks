import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    PaymentMethod,
    PaymentMethodListResponse,
    PaymentMethodResponse,
    PaymentMethodWithSetup,
    PaymentMethodsGetInput,
    PaymentMethodsListInput
} from '../declarations/types-38.js';
import type { PaymentMethodsRemoveInput, PaymentMethodsSaveInput } from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SavePaymentMethodRequestInput, SavePaymentMethodResponse, SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type { SavePaymentMethodRequestInput, SdkResponse, SavePaymentMethodResponse } from '../declarations/types-46.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    PaymentMethodWithSetup,
    PaymentMethod,
    PaymentMethodResponse,
    PaymentMethodListResponse,
    PaymentMethodsGetInput,
    PaymentMethodsListInput
} from '../declarations/types-38.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { PaymentMethodsSaveInput, PaymentMethodsRemoveInput } from '../declarations/types-39.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { StripeClientSetup, StripeClientSetupStripe, StripeClientAuthority } from '../declarations/types-47.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export type { CardDetails } from '../declarations/types-3.js';
export type { ExpandedCustomerSummary } from '../declarations/types-18.js';
export type { MeRemovePaymentMethodInput } from '../declarations/types-32.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeSavePaymentMethodRequest } from '../declarations/types-76.js';
export interface PaymentMethodsResource {
    /**
 * Initiates saving a payment method and returns the client setup payload needed to complete setup
 * on the frontend.
 * @see reference/paymentMethods.md#paymentmethodssave
 * POST /v1/payment-methods
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethods.save({customer_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    save(params: (InputValue<SavePaymentMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentMethodWithSetup>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethods.md#paymentmethodssave
     */
    saveWithResponse(params: (InputValue<SavePaymentMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SavePaymentMethodResponse>>;
    /**
 * Deletes a saved payment method so it can no longer be used for future payments. Returns the
 * payment method with status archived, including when it was already archived.
 * @see reference/paymentMethods.md#paymentmethodsremove
 * DELETE /v1/payment-methods/{payment_method_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentMethods.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(payment_method_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethods.md#paymentmethodsremove
     */
    removeWithResponse(payment_method_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PaymentMethodResponse>>;
    /**
 * Returns a single payment method by ID.
 * @see reference/paymentMethods.md#paymentmethodsget
 * GET /v1/payment-methods/{payment_method_id}
 * @example
 * client.paymentMethods.get("example")
 */
    get(payment_method_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<PaymentMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethods.md#paymentmethodsget
     */
    getWithResponse(payment_method_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<PaymentMethodResponse>>;
    /**
 * Lists payment methods in every status except archived, newest first. Filter by status=active for
 * the cards you can charge. Optionally filter to a customer. Filter by usage off_session to list
 * the payment methods a subscription, automatic invoice, or default payment method can use.
 * Default order: created_at descending, then payment_method_id descending.
 * @see reference/paymentMethods.md#paymentmethodslist
 * GET /v1/payment-methods
 * @example
 * client.paymentMethods.list()
 */
    list(params?: {
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<PaymentMethodListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentMethods.md#paymentmethodslist
     */
    listWithResponse(params?: {
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<PaymentMethodListResponse>>;
    /** Iterate pages lazily.
     * @see reference/paymentMethods.md#paymentmethodslist
     */
    listPages(params?: {
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<PaymentMethodListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/paymentMethods.md#paymentmethodslist
     */
    listPagesWithResponse(params?: {
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<SdkResponse<PaymentMethodListResponse>>;
    /** Iterate items lazily.
     * @see reference/paymentMethods.md#paymentmethodslist
     */
    listItems(params?: {
        "customer_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<PaymentMethod>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentMethods: PaymentMethodsResource;
}
