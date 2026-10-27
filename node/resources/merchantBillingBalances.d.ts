import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    MerchantBillingBalance,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalanceResponse,
    MerchantBillingBalancesGetInput,
    MerchantBillingBalancesListInput
} from '../declarations/types-30.js';
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
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    MerchantBillingBalance,
    MerchantBillingBalanceResponse,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalancesGetInput,
    MerchantBillingBalancesListInput
} from '../declarations/types-30.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface MerchantBillingBalancesResource {
    /**
 * Returns what the merchant currently owes Flint and owns as account credit in one currency.
 * @see reference/merchantBillingBalances.md#merchantbillingbalancesget
 * GET /v1/merchant-billing-balances/{merchant_billing_balance_id}
 * @example
 * client.merchantBillingBalances.get("example")
 */
    get(merchant_billing_balance_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<MerchantBillingBalance>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchantBillingBalances.md#merchantbillingbalancesget
     */
    getWithResponse(merchant_billing_balance_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<MerchantBillingBalanceResponse>>;
    /**
 * Returns what the merchant currently owes Flint and owns as account credit by currency. All
 * balances fit on one page, so next_page_token is omitted.
 * @see reference/merchantBillingBalances.md#merchantbillingbalanceslist
 * GET /v1/merchant-billing-balances
 * @example
 * client.merchantBillingBalances.list()
 */
    list(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<MerchantBillingBalanceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchantBillingBalances.md#merchantbillingbalanceslist
     */
    listWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<MerchantBillingBalanceListResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantBillingBalances: MerchantBillingBalancesResource;
}
