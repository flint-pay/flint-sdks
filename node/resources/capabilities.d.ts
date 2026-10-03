export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { CapabilitiesListInput } from '../declarations/CapabilitiesListInput.js';
import type { CapabilitiesListResponse } from '../declarations/CapabilitiesListResponse.js';
import type { Capability } from '../declarations/Capability.js';
import type { CapabilityListResponse } from '../declarations/CapabilityListResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface CapabilitiesResource {
    /**
 * Returns payment and money movement capability readiness for the authenticated merchant.
 * GET /v1/capabilities
 * @example
 * client.capabilities.list()
 */
    list(params?: { "domain"?: InputValue<"money_movement" | "payments">; "capability"?: InputValue<"accept_card_payments" | "save_payment_methods" | "accept_affirm_payments" | "receive_payouts" | "create_standard_payouts" | "manage_payout_destinations" | "manage_payout_settings">; "status"?: InputValue<"ready" | "blocked" | "pending" | "not_available">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CapabilityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "domain"?: InputValue<"money_movement" | "payments">; "capability"?: InputValue<"accept_card_payments" | "save_payment_methods" | "accept_affirm_payments" | "receive_payouts" | "create_standard_payouts" | "manage_payout_destinations" | "manage_payout_settings">; "status"?: InputValue<"ready" | "blocked" | "pending" | "not_available">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CapabilitiesListResponse>>;
    listPages(params?: { "domain"?: InputValue<"money_movement" | "payments">; "capability"?: InputValue<"accept_card_payments" | "save_payment_methods" | "accept_affirm_payments" | "receive_payouts" | "create_standard_payouts" | "manage_payout_destinations" | "manage_payout_settings">; "status"?: InputValue<"ready" | "blocked" | "pending" | "not_available">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CapabilityListResponse>;
    listPagesWithResponse(params?: { "domain"?: InputValue<"money_movement" | "payments">; "capability"?: InputValue<"accept_card_payments" | "save_payment_methods" | "accept_affirm_payments" | "receive_payouts" | "create_standard_payouts" | "manage_payout_destinations" | "manage_payout_settings">; "status"?: InputValue<"ready" | "blocked" | "pending" | "not_available">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<CapabilitiesListResponse>>;
    listItems(params?: { "domain"?: InputValue<"money_movement" | "payments">; "capability"?: InputValue<"accept_card_payments" | "save_payment_methods" | "accept_affirm_payments" | "receive_payouts" | "create_standard_payouts" | "manage_payout_destinations" | "manage_payout_settings">; "status"?: InputValue<"ready" | "blocked" | "pending" | "not_available">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Capability>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly capabilities: CapabilitiesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { CapabilityListResponse } from '../declarations/CapabilityListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { CapabilitiesListResponse } from '../declarations/CapabilitiesListResponse.js';
export type { Capability } from '../declarations/Capability.js';
export type { CapabilitiesListInput } from '../declarations/CapabilitiesListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyMovementBlockedReason } from '../declarations/MoneyMovementBlockedReason.js';
export { makeCapabilityListResponse } from '../declarations/makeCapabilityListResponse.js';
export { makeCapability } from '../declarations/makeCapability.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyMovementBlockedReason } from '../declarations/makeMoneyMovementBlockedReason.js';
