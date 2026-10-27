import type { InputValue } from '../runtime.js';
import type { BalanceListResponse, BalancesListInput } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseWarning } from '../declarations/types-40.js';
export type { BalanceListResponse, BalancesListInput, AuthMode, Balance } from '../declarations/types-0.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-9.js';
export type {
    MoneyValue,
    MoneyMovementListMeta,
    MoneyMovementHistoryMeta,
    NextAction,
    NextActionMerchantAccountSession
} from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface BalancesResource {
    /**
 * Returns the current balance snapshot grouped by currency for the authenticated merchant in the
 * standard list envelope. All balances fit on one page, so next_page_token is omitted.
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
