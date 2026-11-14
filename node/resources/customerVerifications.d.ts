import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    CustomerVerification,
    CustomerVerificationListResponse,
    CustomerVerificationResponse,
    CustomerVerificationsConfirmParams,
    CustomerVerificationsCreateParams,
    CustomerVerificationsGetParams,
    CustomerVerificationsListParams
} from '../declarations/types-16.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    CustomerVerificationsCreateParams,
    CustomerVerificationsGetParams,
    CustomerVerificationsListParams,
    CustomerVerificationListResponse
} from '../declarations/types-16.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { ConfirmCustomerVerificationRequestInput } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { CreateCustomerVerificationRequestInput } from '../declarations/types-8.js';
export { makeConfirmCustomerVerificationRequest } from '../declarations/types-71.js';
export { makeCreateCustomerVerificationRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-79.js';
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
 * customer without an email fails with `ACTION_NOT_ALLOWED`. Set purpose to link_guest_purchases;
 * email is the only channel and the default. Confirm the code before linking purchases. Read its
 * current status with `client.customerVerifications.get`. To prove an email inside a checkout, use
 * `client.checkoutSessions.createCustomerVerification`.
 *
 * `POST /v1/customer-verifications`
 * @see https://developers.withflintpay.com/docs/api/customers#createCustomerVerification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerVerifications.create({channel: "email", customer_id:
 * "cus_01KEZF7C003ACYXT6Q5EQZ78EE", purpose: "link_guest_purchases"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: CustomerVerificationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<CustomerVerification, CustomerVerificationResponse>>;
    /**
 * Returns one customer verification in any status. Status and supported_actions are computed when
 * read. Flint deletes a verification 8 days after its code and proof expire; customer deletion
 * also removes it.
 *
 * `GET /v1/customer-verifications/{customer_verification_id}`
 * @param customer_verification_id Flint customer verification ID.
 * @see https://developers.withflintpay.com/docs/api/customers#getCustomerVerification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customerVerifications.get("cver_01KEZF7C00E7S01991S7457CVK")
 */
    get(customer_verification_id: InputValue<string>, params?: CustomerVerificationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerVerification, CustomerVerificationResponse>>;
    /**
 * Lists every status for the required customer_id. Status and supported_actions are computed when
 * read. Flint deletes a verification 8 days after its code and proof expire; customer deletion
 * also removes it. Default order: created_at descending, then customer_verification_id descending.
 *
 * `GET /v1/customer-verifications`
 * @see https://developers.withflintpay.com/docs/api/customers#listCustomerVerifications
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.customerVerifications.list({customer_id: "cus_01KEZF7C006X9JK6NZNA2SM9XD"})
 */
    list(params: CustomerVerificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CustomerVerificationListResponse, CustomerVerificationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerVerifications
     */
    listPages(params: CustomerVerificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<CustomerVerificationListResponse, CustomerVerificationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customers#listCustomerVerifications
     */
    listItems(params: CustomerVerificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<CustomerVerification>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly customerVerifications: CustomerVerificationsResource;
}
