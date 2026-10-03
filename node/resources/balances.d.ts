export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { BalanceListResponse } from '../declarations/BalanceListResponse.js';
import type { BalancesListInput } from '../declarations/BalancesListInput.js';
import type { BalancesListResponse } from '../declarations/BalancesListResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface BalancesResource {
    /**
 * Returns an unpaginated current balance snapshot grouped by currency and balance source for the authenticated merchant.
 * GET /v1/balances
 * @example
 * client.balances.list()
 */
    list(params?: { "currency"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<BalanceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "currency"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<BalancesListResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly balances: BalancesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { BalanceListResponse } from '../declarations/BalanceListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { BalancesListResponse } from '../declarations/BalancesListResponse.js';
export type { BalancesListInput } from '../declarations/BalancesListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { Balance } from '../declarations/Balance.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { MoneyMovementListMeta } from '../declarations/MoneyMovementListMeta.js';
export type { MoneyMovementHistoryMeta } from '../declarations/MoneyMovementHistoryMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export { makeBalanceListResponse } from '../declarations/makeBalanceListResponse.js';
export { makeBalance } from '../declarations/makeBalance.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeMoneyMovementListMeta } from '../declarations/makeMoneyMovementListMeta.js';
export { makeMoneyMovementHistoryMeta } from '../declarations/makeMoneyMovementHistoryMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
