import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    CustomerVerification,
    CustomerVerificationResponse,
    CustomerVerificationsConfirmParams,
    CustomerVerificationsCreateParams
} from '../declarations/types-13.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    CustomerVerificationsConfirmParams,
    CustomerVerification,
    CustomerVerificationResponse,
    CustomerVerificationsCreateParams
} from '../declarations/types-13.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { ConfirmCustomerVerificationRequestInput } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreateCustomerVerificationRequestInput } from '../declarations/types-7.js';
export { makeConfirmCustomerVerificationRequest } from '../declarations/types-62.js';
export { makeCreateCustomerVerificationRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface CustomerVerificationsResource {
    /**
 * Confirms the Flint-sent code and returns a verification that can link guest purchases for its
 * customer. A confirmed verification expires in 15 minutes and can be redeemed once.
 *
 * `POST /v1/customer-verifications/{customer_verification_id}/confirm`
 * @param customer_verification_id Flint customer verification ID.
 * @see https://developers.withflintpay.com/docs/api/customers#confirmCustomerVerification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerVerifications.confirm("cver_01ARZ3NDEKTSV4RRFFQ69G5FAV", {code: "123456"}, {
 * idempotencyKey: idempotencyKey })
 */
    confirm(customer_verification_id: InputValue<string>, params: CustomerVerificationsConfirmParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerVerification, CustomerVerificationResponse>>;
    /**
 * Sends a Flint verification code to the customer's current email for linking guest purchases. A
 * customer without an email returns 409 ACTION_NOT_ALLOWED. Set purpose to link_guest_purchases;
 * email is the only channel and the default. Confirm the code before linking purchases. To prove
 * an email inside a checkout, use `client.checkoutSessions.createCustomerVerification`.
 *
 * `POST /v1/customer-verifications`
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomerVerification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerVerifications.create({customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", purpose:
 * "link_guest_purchases"}, { idempotencyKey: idempotencyKey })
 */
    create(params: CustomerVerificationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerVerification, CustomerVerificationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customerVerifications: CustomerVerificationsResource;
}
