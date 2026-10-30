import type { WithResponseInfo } from '../runtime.js';
import type { BalanceListResponse } from '../declarations/types-0.js';
import type { BalancesListParams } from '../declarations/types-1.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type { BalancesListParams } from '../declarations/types-1.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { BalanceListResponse, AuthMode, Balance } from '../declarations/types-0.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, MoneyMovementListMeta, MoneyMovementHistoryMeta, NextAction } from '../declarations/types-35.js';
export type { ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface BalancesResource {
    /**
 * Returns the current balance snapshot grouped by currency for the authenticated merchant in the
 * standard list envelope. All balances fit on one page, so next_page_token is omitted. Default
 * order: currency ascending; this key uniquely orders the results.
 *
 * `GET /v1/balances`
 * @see https://developers.withflintpay.com/docs/api/money-movement#listBalances
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.balances.list()
 */
    list(params?: BalancesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<BalanceListResponse, BalanceListResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly balances: BalancesResource;
}
