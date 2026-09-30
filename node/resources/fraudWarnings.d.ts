export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { FraudWarning } from '../declarations/FraudWarning.js';
import type { FraudWarningListResponse } from '../declarations/FraudWarningListResponse.js';
import type { FraudWarningResponse } from '../declarations/FraudWarningResponse.js';
import type { FraudWarningsGetInput } from '../declarations/FraudWarningsGetInput.js';
import type { FraudWarningsGetResponse } from '../declarations/FraudWarningsGetResponse.js';
import type { FraudWarningsListInput } from '../declarations/FraudWarningsListInput.js';
import type { FraudWarningsListResponse } from '../declarations/FraudWarningsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface FraudWarningsResource {
    /**
 * Get an early fraud warning for the authenticated merchant environment.
 * GET /v1/fraud-warnings/{fraud_warning_id}
 * @example
 * client.fraudWarnings.get("example", {})
 */
    get(fraud_warning_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"dispute" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<FraudWarningResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(fraud_warning_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"dispute" | "payment_intent">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FraudWarningsGetResponse>>;
    /**
 * List early fraud warnings for the authenticated merchant environment.
 * GET /v1/fraud-warnings
 * @example
 * client.fraudWarnings.list({})
 */
    list(params?: { "actionable"?: InputValue<boolean>; "payment_intent_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<FraudWarningListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "actionable"?: InputValue<boolean>; "payment_intent_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FraudWarningsListResponse>>;
    listPages(params?: { "actionable"?: InputValue<boolean>; "payment_intent_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FraudWarningListResponse>;
    listPagesWithResponse(params?: { "actionable"?: InputValue<boolean>; "payment_intent_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<FraudWarningsListResponse>>;
    listItems(params?: { "actionable"?: InputValue<boolean>; "payment_intent_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FraudWarning>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly fraudWarnings: FraudWarningsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { FraudWarningResponse } from '../declarations/FraudWarningResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { FraudWarningsGetResponse } from '../declarations/FraudWarningsGetResponse.js';
export type { FraudWarningListResponse } from '../declarations/FraudWarningListResponse.js';
export type { FraudWarningsListResponse } from '../declarations/FraudWarningsListResponse.js';
export type { FraudWarning } from '../declarations/FraudWarning.js';
export type { FraudWarningsGetInput } from '../declarations/FraudWarningsGetInput.js';
export type { FraudWarningsListInput } from '../declarations/FraudWarningsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { PublicFraudWarningPaymentSummary } from '../declarations/PublicFraudWarningPaymentSummary.js';
export { makeFraudWarningResponse } from '../declarations/makeFraudWarningResponse.js';
export { makeFraudWarningListResponse } from '../declarations/makeFraudWarningListResponse.js';
export { makeFraudWarning } from '../declarations/makeFraudWarning.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makePublicFraudWarningPaymentSummary } from '../declarations/makePublicFraudWarningPaymentSummary.js';
