import type { InputValue } from '../runtime.js';
import type { BalanceListResponse, BalancesListInput } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions } from '../declarations/types-42.js';
export type { BalanceListResponse, BalancesListInput, AuthMode, Balance } from '../declarations/types-0.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-11.js';
export type {
    MoneyValue,
    MoneyMovementListMeta,
    MoneyMovementHistoryMeta,
    NextAction,
    NextActionMerchantAccountSession
} from '../declarations/types-33.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export interface BalancesResource {
    /**
 * Returns the current balance snapshot grouped by currency for the authenticated merchant in the
 * standard list envelope. All balances fit on one page, so next_page_token is omitted. Default
 * order: currency ascending; this key uniquely orders the results.
 * @see reference/balances.md#balanceslist
 * GET /v1/balances
 * @example
 * client.balances.list()
 */
    list(params?: {
        "currency"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<BalanceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/balances.md#balanceslist
     */
    listWithResponse(params?: {
        "currency"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<BalanceListResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly balances: BalancesResource;
}
