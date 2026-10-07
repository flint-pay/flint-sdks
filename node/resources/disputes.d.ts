export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { Dispute } from '../declarations/Dispute.js';
import type { DisputeListResponse } from '../declarations/DisputeListResponse.js';
import type { DisputeResponse } from '../declarations/DisputeResponse.js';
import type { DisputesGetInput } from '../declarations/DisputesGetInput.js';
import type { DisputesGetResponse } from '../declarations/DisputesGetResponse.js';
import type { DisputesListInput } from '../declarations/DisputesListInput.js';
import type { DisputesListResponse } from '../declarations/DisputesListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DisputesResource {
    /**
 * Returns one dispute by ID, with optional customer, order, and payment intent expansions.
 * GET /v1/disputes/{dispute_id}
 * @example
 * client.disputes.get("example")
 */
    get(dispute_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DisputeResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(dispute_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DisputesGetResponse>>;
    /**
 * Returns a paginated list of disputes for the authenticated merchant with optional payment, customer, status, reason, case type, and timing filters.
 * GET /v1/disputes
 * @example
 * client.disputes.list()
 */
    list(params?: { "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "under_review" | "won" | "lost" | "prevented">; "reason"?: InputValue<"bank_cannot_process" | "check_returned" | "credit_not_processed" | "customer_initiated" | "debit_not_authorized" | "duplicate" | "fraudulent" | "general" | "incorrect_account_details" | "insufficient_funds" | "noncompliant" | "product_not_received" | "product_unacceptable" | "subscription_canceled" | "unrecognized" | "bank_account_closed" | "bank_account_not_found" | "bank_debit_not_authorized" | "bank_account_restricted" | "other">; "case_type"?: InputValue<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "evidence_due_after"?: InputValue<string | globalThis.Date>; "evidence_due_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DisputeListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "under_review" | "won" | "lost" | "prevented">; "reason"?: InputValue<"bank_cannot_process" | "check_returned" | "credit_not_processed" | "customer_initiated" | "debit_not_authorized" | "duplicate" | "fraudulent" | "general" | "incorrect_account_details" | "insufficient_funds" | "noncompliant" | "product_not_received" | "product_unacceptable" | "subscription_canceled" | "unrecognized" | "bank_account_closed" | "bank_account_not_found" | "bank_debit_not_authorized" | "bank_account_restricted" | "other">; "case_type"?: InputValue<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "evidence_due_after"?: InputValue<string | globalThis.Date>; "evidence_due_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DisputesListResponse>>;
    listPages(params?: { "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "under_review" | "won" | "lost" | "prevented">; "reason"?: InputValue<"bank_cannot_process" | "check_returned" | "credit_not_processed" | "customer_initiated" | "debit_not_authorized" | "duplicate" | "fraudulent" | "general" | "incorrect_account_details" | "insufficient_funds" | "noncompliant" | "product_not_received" | "product_unacceptable" | "subscription_canceled" | "unrecognized" | "bank_account_closed" | "bank_account_not_found" | "bank_debit_not_authorized" | "bank_account_restricted" | "other">; "case_type"?: InputValue<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "evidence_due_after"?: InputValue<string | globalThis.Date>; "evidence_due_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DisputeListResponse>;
    listPagesWithResponse(params?: { "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "under_review" | "won" | "lost" | "prevented">; "reason"?: InputValue<"bank_cannot_process" | "check_returned" | "credit_not_processed" | "customer_initiated" | "debit_not_authorized" | "duplicate" | "fraudulent" | "general" | "incorrect_account_details" | "insufficient_funds" | "noncompliant" | "product_not_received" | "product_unacceptable" | "subscription_canceled" | "unrecognized" | "bank_account_closed" | "bank_account_not_found" | "bank_debit_not_authorized" | "bank_account_restricted" | "other">; "case_type"?: InputValue<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "evidence_due_after"?: InputValue<string | globalThis.Date>; "evidence_due_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DisputesListResponse>>;
    listItems(params?: { "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "under_review" | "won" | "lost" | "prevented">; "reason"?: InputValue<"bank_cannot_process" | "check_returned" | "credit_not_processed" | "customer_initiated" | "debit_not_authorized" | "duplicate" | "fraudulent" | "general" | "incorrect_account_details" | "insufficient_funds" | "noncompliant" | "product_not_received" | "product_unacceptable" | "subscription_canceled" | "unrecognized" | "bank_account_closed" | "bank_account_not_found" | "bank_debit_not_authorized" | "bank_account_restricted" | "other">; "case_type"?: InputValue<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "evidence_due_after"?: InputValue<string | globalThis.Date>; "evidence_due_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Dispute>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly disputes: DisputesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DisputeResponse } from '../declarations/DisputeResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DisputesGetResponse } from '../declarations/DisputesGetResponse.js';
export type { DisputeListResponse } from '../declarations/DisputeListResponse.js';
export type { DisputesListResponse } from '../declarations/DisputesListResponse.js';
export type { Dispute } from '../declarations/Dispute.js';
export type { DisputesGetInput } from '../declarations/DisputesGetInput.js';
export type { DisputesListInput } from '../declarations/DisputesListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export { makeDisputeResponse } from '../declarations/makeDisputeResponse.js';
export { makeDisputeListResponse } from '../declarations/makeDisputeListResponse.js';
export { makeDispute } from '../declarations/makeDispute.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
