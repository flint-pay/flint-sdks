export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CustomerVerificationResponse } from '../declarations/CustomerVerificationResponse.js';
import type { CustomerVerificationsConfirmInput } from '../declarations/CustomerVerificationsConfirmInput.js';
import type { CustomerVerificationsConfirmResponse } from '../declarations/CustomerVerificationsConfirmResponse.js';
import type { CustomerVerificationsCreateInput } from '../declarations/CustomerVerificationsCreateInput.js';
import type { CustomerVerificationsCreateResponse } from '../declarations/CustomerVerificationsCreateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export interface CustomerVerificationsResource {
    /**
 * Confirms the Flint-sent code and returns a verification that can link guest purchases for its customer. A confirmed verification expires in 15 minutes and can be redeemed once.
 * POST /v1/customer-verifications/{customer_verification_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerVerifications.confirm("cver_example", {code: "123456"}, { idempotencyKey: idempotencyKey })
 */
    confirm(customer_verification_id: InputValue<string>, params: (InputValue<{ "code": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerVerificationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    confirmWithResponse(customer_verification_id: InputValue<string>, params: (InputValue<{ "code": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomerVerificationsConfirmResponse>>;
    /**
 * Sends the buyer a Flint verification code for linking guest purchases. Set purpose to link_guest_purchases. The only channel is email, which is also the default. The response has the same shape whether a code was sent. Enter the code through the confirm operation before linking purchases.
 * POST /v1/customer-verifications
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.customerVerifications.create({channel: "email", customer_id: "cus_example", email: "buyer@example.com", purpose: "link_guest_purchases"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "channel"?: "email"; "customer_id": string; "email": string; "purpose": "link_guest_purchases"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CustomerVerificationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "channel"?: "email"; "customer_id": string; "email": string; "purpose": "link_guest_purchases"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<CustomerVerificationsCreateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly customerVerifications: CustomerVerificationsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CustomerVerificationResponse } from '../declarations/CustomerVerificationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CustomerVerificationsConfirmResponse } from '../declarations/CustomerVerificationsConfirmResponse.js';
export type { CustomerVerificationsCreateResponse } from '../declarations/CustomerVerificationsCreateResponse.js';
export type { CustomerVerificationsConfirmInput } from '../declarations/CustomerVerificationsConfirmInput.js';
export type { CustomerVerificationsCreateInput } from '../declarations/CustomerVerificationsCreateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { CustomerVerification } from '../declarations/CustomerVerification.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { ConfirmCustomerVerificationRequestInput } from '../declarations/ConfirmCustomerVerificationRequestInput.js';
export type { CreateCustomerVerificationRequestInput } from '../declarations/CreateCustomerVerificationRequestInput.js';
export { makeCustomerVerificationResponse } from '../declarations/makeCustomerVerificationResponse.js';
export { makeCustomerVerification } from '../declarations/makeCustomerVerification.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
