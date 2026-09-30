export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { MerchantBillingBalance } from '../declarations/MerchantBillingBalance.js';
import type { MerchantBillingBalanceListResponse } from '../declarations/MerchantBillingBalanceListResponse.js';
import type { MerchantBillingBalanceResponse } from '../declarations/MerchantBillingBalanceResponse.js';
import type { MerchantBillingBalancesGetInput } from '../declarations/MerchantBillingBalancesGetInput.js';
import type { MerchantBillingBalancesGetResponse } from '../declarations/MerchantBillingBalancesGetResponse.js';
import type { MerchantBillingBalancesListInput } from '../declarations/MerchantBillingBalancesListInput.js';
import type { MerchantBillingBalancesListResponse } from '../declarations/MerchantBillingBalancesListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface MerchantBillingBalancesResource {
    /**
 * Returns what the merchant currently owes Flint and owns as account credit in one currency.
 * GET /v1/merchant-billing-balances/{merchant_billing_balance_id}
 * @example
 * client.merchantBillingBalances.get("example", {})
 */
    get(merchant_billing_balance_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<MerchantBillingBalanceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(merchant_billing_balance_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<MerchantBillingBalancesGetResponse>>;
    /**
 * Returns what the merchant currently owes Flint and owns as account credit by currency.
 * GET /v1/merchant-billing-balances
 * @example
 * client.merchantBillingBalances.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<MerchantBillingBalanceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<MerchantBillingBalancesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<MerchantBillingBalanceListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<MerchantBillingBalancesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<MerchantBillingBalance>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly merchantBillingBalances: MerchantBillingBalancesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { MerchantBillingBalanceResponse } from '../declarations/MerchantBillingBalanceResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { MerchantBillingBalancesGetResponse } from '../declarations/MerchantBillingBalancesGetResponse.js';
export type { MerchantBillingBalanceListResponse } from '../declarations/MerchantBillingBalanceListResponse.js';
export type { MerchantBillingBalancesListResponse } from '../declarations/MerchantBillingBalancesListResponse.js';
export type { MerchantBillingBalance } from '../declarations/MerchantBillingBalance.js';
export type { MerchantBillingBalancesGetInput } from '../declarations/MerchantBillingBalancesGetInput.js';
export type { MerchantBillingBalancesListInput } from '../declarations/MerchantBillingBalancesListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export { makeMerchantBillingBalanceResponse } from '../declarations/makeMerchantBillingBalanceResponse.js';
export { makeMerchantBillingBalanceListResponse } from '../declarations/makeMerchantBillingBalanceListResponse.js';
export { makeMerchantBillingBalance } from '../declarations/makeMerchantBillingBalance.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
