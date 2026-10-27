import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { ConfirmCustomerVerificationRequestInput, CreateCustomerVerificationRequestInput } from '../declarations/types-5.js';
import type {
    CustomerVerification,
    CustomerVerificationResponse,
    CustomerVerificationsConfirmInput,
    CustomerVerificationsCreateInput
} from '../declarations/types-11.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
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
export type { ConfirmCustomerVerificationRequestInput, CreateCustomerVerificationRequestInput } from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    CustomerVerification,
    CustomerVerificationResponse,
    CustomerVerificationsConfirmInput,
    CustomerVerificationsCreateInput
} from '../declarations/types-11.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeConfirmCustomerVerificationRequest, makeCreateCustomerVerificationRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface CustomerVerificationsResource {
    /**
 * Confirms the Flint-sent code and returns a verification that can link guest purchases for its
 * customer. A confirmed verification expires in 15 minutes and can be redeemed once.
 * @see reference/customerVerifications.md#customerverificationsconfirm
 * POST /v1/customer-verifications/{customer_verification_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerVerifications.confirm("example", {code: "123456"}, { idempotencyKey:
 * idempotencyKey })
 */
    confirm(customer_verification_id: InputValue<string>, params: (InputValue<ConfirmCustomerVerificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerVerification>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customerVerifications.md#customerverificationsconfirm
     */
    confirmWithResponse(customer_verification_id: InputValue<string>, params: (InputValue<ConfirmCustomerVerificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerVerificationResponse>>;
    /**
 * Sends a Flint verification code to the customer's current email for linking guest purchases. A
 * customer without an email returns 409 ACTION_NOT_ALLOWED. Set purpose to link_guest_purchases;
 * email is the only channel and the default. Confirm the code before linking purchases. To prove
 * an email inside a checkout, use POST
 * /v1/checkout-sessions/{checkout_session_id}/customer-verifications.
 * @see reference/customerVerifications.md#customerverificationscreate
 * POST /v1/customer-verifications
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerVerifications.create({customer_id: "example", purpose: "link_guest_purchases"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateCustomerVerificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<CustomerVerification>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/customerVerifications.md#customerverificationscreate
     */
    createWithResponse(params: (InputValue<CreateCustomerVerificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<CustomerVerificationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customerVerifications: CustomerVerificationsResource;
}
